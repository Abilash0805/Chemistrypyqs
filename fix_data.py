#!/usr/bin/env python3
"""Fix questions.json: clean symbol artifacts, recover embedded answers, re-extract missing answers from PDFs."""

import json, re, os, fitz

PDF_DIR = 'pdfs/1PYQs'
DATA_FILE = 'src/data/questions.json'

# ── SYMBOL FONT → UNICODE MAP ─────────────────────────────────────────────────
# PDF Symbol font private-use-area characters → proper Unicode
SYMBOL_MAP = {
    '': '(',    '': ')',
    '': '+',    '': '−',
    '': '<',    '': '=',    '': '>',
    '': 'Δ',    '': 'Γ',
    '': 'Θ',    '': 'Σ',    '': 'Υ',
    '': 'Ω',    '': 'Ξ',
    '': '[',    '': ']',
    '': 'α',    '': 'β',    '': 'χ',
    '': 'δ',    '': 'ε',    '': 'φ',
    '': 'γ',    '': 'η',    '': 'ι',
    '': 'φ',    '': 'κ',    '': 'λ',
    '': 'μ',    '': 'ν',    '': 'ο',
    '': 'π',    '': 'θ',    '': 'ρ',
    '': 'σ',    '': 'τ',    '': 'υ',
    '': 'ω',    '': 'ξ',    '': 'ψ',
    '': 'ζ',
    '': '→',    '': '°',    '': '×',
    '': 'μ',    '': '–',
    # Bracket pieces (treat as parens)
    '': '(',    '': '(',    '': '(',
    '': ')',    '': ')',    '': ')',
}

# CM/extended font chars to remove or replace
CM_MAP = {
    '': '',   # stray dash before arrow – remove (arrow already present)
    '': '',   '': '',   '': '',   '': '',
}

def apply_maps(text):
    for ch, rep in SYMBOL_MAP.items():
        text = text.replace(ch, rep)
    for ch, rep in CM_MAP.items():
        text = text.replace(ch, rep)
    return text

def clean_text(text):
    if not text:
        return ''
    text = apply_maps(text)
    # Remove control characters (keep tab temporarily)
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f\x08]', '', text)
    # Remove remaining private-use-area chars (F000–F8FF) we didn't map
    text = re.sub(r'[-]', '', text)
    # Collapse whitespace
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Clean up long arrow sequences: –––→ → →
    text = re.sub(r'[–-]{2,}→', '→', text)
    text = re.sub(r'–{2,}', '→', text)   # isolated long dashes often encode arrows
    # Remove trailing [CBSE Marking Scheme...] and similar from answers
    text = re.sub(r'\[CBSE\s+Marking\s+Scheme[^\]]*\]', '', text)
    # Remove mark numbers like "\x08 1 \x08" patterns
    text = re.sub(r'\s+\d+\s*$', '', text)
    text = text.strip()
    return text

# ── SPLIT EMBEDDED ANSWERS ────────────────────────────────────────────────────
ANS_PATTERN = re.compile(
    r'\s*(?:Ans\.?\s*[:\s]|Answer\s*:\s*|Sol\.?\s*:\s*|'
    r'\[Ans\.?\s*[:\s])',
    re.IGNORECASE
)

def split_embedded(q_text, a_text):
    """If answer is embedded in question, split it out."""
    m = ANS_PATTERN.search(q_text)
    if not m:
        return q_text, a_text
    new_q = q_text[:m.start()].strip()
    extracted = q_text[m.end():].strip()
    # Don't split if question becomes too short
    if len(new_q) < 15:
        return q_text, a_text
    # Merge extracted answer with existing answer
    if a_text and len(a_text) > 5:
        new_a = extracted + ' ' + a_text
    else:
        new_a = extracted
    return new_q, new_a.strip()

# ── PDF RE-EXTRACTION FOR MISSING ANSWERS ────────────────────────────────────
def extract_all_qa_from_pdf(path):
    """Extract all (question_text, answer_text) pairs from a solved paper PDF."""
    doc = fitz.open(path)
    lines = []
    for page in doc:
        lines.extend(page.get_text().split('\n'))
    doc.close()

    pairs = []
    qbuf, abuf = [], []
    in_ans = False

    SKIP = re.compile(
        r'^(Solved\s+Paper|Oswaal|CBSE\s+EXAM|Chemistry\s*\(Theory\)|'
        r'Time\s*:|Max\.\s*Marks|General\s+Inst|SECTION\s+[A-E]|'
        r'Delhi|Outside\s+Delhi|Note:\s+Except|56/|www\.|'
        r'Class-?12|All\s+questions)',
        re.I
    )

    def flush():
        if qbuf:
            q = clean_text(' '.join(qbuf))
            a = clean_text(' '.join(abuf))
            if len(q) > 15:
                pairs.append((q, a))
        qbuf.clear(); abuf.clear()

    for line in lines:
        s = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', line).strip()
        if not s or SKIP.match(s):
            continue
        # New question
        qm = re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)', s)
        if qm and 1 <= int(qm.group(1)) <= 45:
            flush()
            in_ans = False
            qbuf.append(qm.group(2))
            continue
        # Answer start
        if re.match(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]', s, re.I):
            in_ans = True
            rest = re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]*', '', s, flags=re.I).strip()
            if rest:
                abuf.append(rest)
            continue
        # Mark numbers alone on a line
        if re.match(r'^[1-5]$', s) and qbuf:
            continue
        if qbuf:
            (abuf if in_ans else qbuf).append(s)

    flush()
    return pairs

def similarity(a, b):
    """Simple token-overlap similarity."""
    wa = set(re.findall(r'\w+', a.lower()))
    wb = set(re.findall(r'\w+', b.lower()))
    if not wa or not wb:
        return 0.0
    return len(wa & wb) / min(len(wa), len(wb))

# ── MAIN ──────────────────────────────────────────────────────────────────────
with open(DATA_FILE) as f:
    data = json.load(f)

questions = data['questions']
print(f'Total questions: {len(questions)}')

# Step 1: Clean all symbol artifacts
changed_symbols = 0
for q in questions:
    old_q = q['question']
    old_a = q.get('answer', '')
    q['question'] = clean_text(q['question'])
    q['answer'] = clean_text(q.get('answer', ''))
    if q['question'] != old_q or q['answer'] != old_a:
        changed_symbols += 1

print(f'Step 1: Cleaned symbol artifacts in {changed_symbols} questions')

# Step 2: Recover embedded answers
recovered = 0
for q in questions:
    new_q, new_a = split_embedded(q['question'], q.get('answer', ''))
    if new_q != q['question']:
        q['question'] = new_q
        q['answer'] = clean_text(new_a)
        recovered += 1

print(f'Step 2: Recovered {recovered} embedded answers')

# Step 3: Re-extract from PDFs for questions with no answer
no_ans = [q for q in questions if not q.get('answer') or len(q['answer']) < 10]
print(f'Step 3: {len(no_ans)} questions still lack answers — searching PDFs...')

# Build index of all PDF Q-A pairs
pdf_pairs = []  # list of (question_text, answer_text, pdf_name)
pdf_files = [f for f in os.listdir(PDF_DIR) if f.endswith('.pdf')]
for fname in sorted(pdf_files):
    path = os.path.join(PDF_DIR, fname)
    try:
        pairs = extract_all_qa_from_pdf(path)
        for q_text, a_text in pairs:
            if a_text and len(a_text) > 5:
                pdf_pairs.append((q_text, a_text, fname))
    except Exception as e:
        print(f'  Error reading {fname}: {e}')

print(f'  Found {len(pdf_pairs)} Q-A pairs across all PDFs (with answers)')

# Match no-answer questions to PDF pairs
filled = 0
for q in no_ans:
    q_clean = q['question'].lower()
    best_score = 0.45  # minimum threshold
    best_ans = ''
    for pdf_q, pdf_a, _ in pdf_pairs:
        score = similarity(q_clean, pdf_q)
        if score > best_score:
            best_score = score
            best_ans = pdf_a
    if best_ans:
        q['answer'] = clean_text(best_ans)
        filled += 1

print(f'Step 3: Filled {filled} answers from PDF matching')

# Final count
final_no_ans = [q for q in questions if not q.get('answer') or len(q['answer']) < 10]
print(f'\nFinal: {len(questions) - len(final_no_ans)}/{len(questions)} questions have answers')
print(f'Still missing: {len(final_no_ans)}')

# Save
with open(DATA_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

print('Saved to', DATA_FILE)
