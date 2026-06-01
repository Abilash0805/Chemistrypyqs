import fitz, re, json, os

PDF_DIR = "/home/user/Chemistrypyqs/pdfs/1PYQs"

# ── NEW 10-chapter syllabus ───────────────────────────────────────────────────
CHAPTERS = {
    1: {"id": 1, "name": "Solutions",                                "shortName": "Solutions",           "color": "#6366f1"},
    2: {"id": 2, "name": "Electrochemistry",                         "shortName": "Electrochemistry",    "color": "#8b5cf6"},
    3: {"id": 3, "name": "Chemical Kinetics",                        "shortName": "Chem Kinetics",       "color": "#ec4899"},
    4: {"id": 4, "name": "The d- and f-Block Elements",              "shortName": "d & f Block",         "color": "#f59e0b"},
    5: {"id": 5, "name": "Coordination Compounds",                   "shortName": "Coordination Cpds",  "color": "#10b981"},
    6: {"id": 6, "name": "Haloalkanes and Haloarenes",               "shortName": "Haloalkanes",         "color": "#06b6d4"},
    7: {"id": 7, "name": "Alcohols, Phenols and Ethers",             "shortName": "Alcohols & Ethers",   "color": "#3b82f6"},
    8: {"id": 8, "name": "Aldehydes, Ketones and Carboxylic Acids",  "shortName": "Carbonyl Cpds",       "color": "#84cc16"},
    9: {"id": 9, "name": "Amines",                                   "shortName": "Amines",              "color": "#f97316"},
    10:{"id":10, "name": "Biomolecules",                             "shortName": "Biomolecules",        "color": "#14b8a6"},
}

# ── Chapter keyword classifier ────────────────────────────────────────────────
KW = {
    1:  ['solution','solute','solvent','mole fraction','molality','molarity','raoult',
         'osmosis','osmotic','colligative','henry','vapor pressure','boiling point elevation',
         'freezing point depression','van\'t hoff','isotonic','semipermeable','azeotrope',
         'henry\'s law','ebullioscopic','cryoscopic','depression in freezing','elevation in boiling'],
    2:  ['electrode','cell','emf','nernst','conductance','electrolysis','faraday',
         'galvanic','molar conductivity','electrolyte','corrosion','fuel cell',
         'conductivity','electrochemical','daniel cell','standard electrode',
         'reduction potential','half cell','salt bridge','oxidation potential','kohlrausch'],
    3:  ['rate of reaction','rate constant','order of reaction','molecularity','half life',
         'activation energy','arrhenius','first order','zero order','second order',
         'rate law','pseudo','chemical kinetics','integrated rate','collision theory',
         'threshold energy','frequency factor','rate expression','instantaneous rate'],
    4:  ['transition metal','d-block','f-block','lanthanoid','actinoid','oxidation state',
         'magnetic moment','chromium','manganese','iron','copper','zinc','cobalt','nickel',
         'd-d transition','lanthanide contraction','color of complex','variable valence',
         'interstitial','zr','hf','permanganate','dichromate','chromate','ferrous','ferric',
         'd block','f block','3d series','4f','5f','paramagnetic','diamagnetic crystal'],
    5:  ['coordination compound','complex','ligand','coordination number','chelate',
         'cfse','crystal field','valence bond theory','vbt','spectrochemical series',
         'ambidentate','dentate','homoleptic','heteroleptic','werner','edta',
         'isomerism in complex','square planar','octahedral complex','inner orbital',
         'outer orbital','low spin','high spin','magnetic behaviour of complex',
         'optical isomer complex','geometrical isomer complex','coordination sphere',
         'cis trans complex','counter ion','central metal','linkage isomerism',
         'ionisation isomerism','coordination isomerism'],
    6:  ['haloalkane','haloarene','grignard','sn1','sn2','nucleophilic substitution',
         'elimination','chloroform','iodoform','alkyl halide','aryl halide',
         'ddt','freon','chlorobenzene','dehydrohalogenation','e1','e2',
         'williamson synthesis','finkelstein','swarts','sandmeyer','balz schiemann',
         'wurtz reaction','halogenation','benzyl chloride','allyl halide'],
    7:  ['alcohol','phenol','ether','hydroxyl group','reimer tiemann','kolbe',
         'williamson ether','ethanol','methanol','glycerol','dehydration of alcohol',
         'phenoxide','oxidation of alcohol','lucas test','ring opening of ether',
         'victor meyer','riemer tiemann','pinacol','cumene process','baeyer'],
    8:  ['aldehyde','ketone','carboxylic acid','aldol condensation','cannizzaro',
         'nucleophilic addition','hell volhard','acid anhydride','ester','acyl',
         'formaldehyde','acetaldehyde','acetone','benzoic acid','acetic acid',
         'carbonyl compound','fehling','tollens','benedict','clemmensen',
         'wolff kishner','rosenmund','stephen','etard','gattermann','hvz reaction',
         'formic acid','propanal','butanal','benzaldehyde','oxalic acid','acidic strength'],
    9:  ['amine','amino group','diazonium','coupling reaction','diazotization',
         'basicity of amine','gabriel','hoffmann bromamide','aniline','methylamine',
         'primary amine','secondary amine','tertiary amine','hinsberg','carbylamine',
         'mustard oil reaction','sandmeyer reaction','diazo coupling','acetylation of amine'],
    10: ['glucose','fructose','sucrose','carbohydrate','protein','amino acid',
         'peptide','enzyme','dna','rna','nucleic acid','vitamin','hormone',
         'glycogen','starch','cellulose','reducing sugar','non-reducing','haworth',
         'biomolecule','polysaccharide','disaccharide','monosaccharide','glycosidic',
         'purine','pyrimidine','nucleotide','base pairing','double helix','codon',
         'denaturation of protein','isoelectric','zwitterion','fibrous protein',
         'globular protein','alpha helix','fat soluble vitamin','water soluble vitamin'],
}

def guess_chapter(text):
    tl = text.lower()
    scores = {ch: sum(2 if f' {kw} ' in tl else (1 if kw in tl else 0)
                      for kw in kws)
              for ch, kws in KW.items()}
    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else None

def clean(t):
    if not t: return ''
    t = re.sub(r'\s+', ' ', t)
    t = re.sub(r'www\.\S+', '', t)
    t = re.sub(r'Class\s*XII\s*Chemistry', '', t, flags=re.I)
    t = re.sub(r'Oswaal\s+CBSE.*?Class.*?XII', '', t, flags=re.I|re.S)
    t = re.sub(r'SOLVED\s+PAPER\s*[-–]\s*\d{4}', '', t, flags=re.I)
    t = re.sub(r'Solved\s+Paper\s*[-–]\s*\d{4}', '', t, flags=re.I)
    t = t.strip()
    return t

def detect_marks(line, context=''):
    for pat in [r'\b(\d)\s*[Mm]arks?\b', r'\[(\d)\]', r'\((\d)\s*[Mm]arks?\)',
                r'\b(\d)\s*$']:
        m = re.search(pat, line + ' ' + context)
        if m:
            v = int(m.group(1))
            if 1 <= v <= 5: return v
    return None

def get_difficulty(marks):
    if marks == 1: return 'easy'
    if marks <= 3: return 'medium'
    return 'hard'

def detect_type(q):
    ql = q.lower()
    if re.search(r'\([ABCD]\)', q): return 'mcq'
    if 'assertion' in ql and 'reason' in ql: return 'assertion_reason'
    if re.search(r'\bcalculate\b|\bfind\b|\bdetermine\b|\bcompute\b', ql): return 'numerical'
    if re.search(r'\bdraw\b.*\bstructure\b|\bstructure\b.*\bdraw\b', ql): return 'diagram'
    if re.search(r'\bexplain\b|\bdiscuss\b|\bdescribe\b|\bcomment\b|\baccount\b', ql): return 'long_answer'
    return 'short_answer'

# ═══════════════════════════════════════════════════════════════════════════════
#  PARSER 1 – chapter-specific PDFs (Vedantu format with Ans:)
# ═══════════════════════════════════════════════════════════════════════════════
def parse_chapter_pdf(path, chapter_num):
    doc = fitz.open(path)
    full = '\n'.join(p.get_text() for p in doc)
    doc.close()
    lines = full.split('\n')

    questions = []
    qnum = None; qbuf = []; abuf = []; in_ans = False; marks = 1

    for line in lines:
        s = line.strip()
        if not s: continue

        # Skip noise
        if re.match(r'^(www\.|Class\s*XII|Important\s+Questions|Study\s+Important)', s): continue

        # Section marks detector
        sm = re.search(r'(\d)\s*[Mm]ark', s)
        if sm and len(s) < 80: marks = int(sm.group(1)); continue

        # Question start: digit + dot/paren at line start
        qm = re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)', s)
        if qm:
            num = int(qm.group(1))
            if 1 <= num <= 200:
                # Save previous
                if qnum is not None and qbuf:
                    qt = clean(' '.join(qbuf))
                    at = clean(' '.join(abuf))
                    if len(qt) > 12:
                        questions.append({'qnum': qnum, 'question': qt, 'answer': at,
                                          'marks': marks, 'chapter': chapter_num})
                qnum = num; qbuf = [qm.group(2)]; abuf = []; in_ans = False
                continue

        # Answer start
        if re.match(r'^\*?\s*Ans\.?[:\s]|^\*?\s*Answer[:\s]|^\*?\s*Sol\.?[:\s]', s, re.I):
            in_ans = True
            rest = re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)[:\s]*', '', s, flags=re.I).strip()
            if rest: abuf.append(rest)
            continue

        # Sub-answer hints like [Ans. : ...]
        hint = re.search(r'\[Ans\.?\s*:?\s*(.+)\]', s)
        if hint and qnum is not None:
            abuf.append(hint.group(1))
            continue

        if qnum is not None:
            if in_ans:
                abuf.append(s)
            else:
                qbuf.append(s)

    # Last question
    if qnum is not None and qbuf:
        qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
        if len(qt) > 12:
            questions.append({'qnum': qnum, 'question': qt, 'answer': at,
                              'marks': marks, 'chapter': chapter_num})
    return questions

# ═══════════════════════════════════════════════════════════════════════════════
#  PARSER 2 – solved board papers (all years)
# ═══════════════════════════════════════════════════════════════════════════════
def parse_board_paper(path, year):
    doc = fitz.open(path)
    full = '\n'.join(p.get_text() for p in doc)
    doc.close()
    lines = full.split('\n')

    questions = []
    qnum = None; qbuf = []; abuf = []; in_ans = False; marks = 1
    current_section_marks = 1

    skip_pat = re.compile(
        r'^(Solved\s+Paper|Oswaal|CBSE\s+EXAMINATION|Chemistry\s+\(Theory\)|'
        r'Class-?12|Time\s*:|Max\.\s*Marks|General\s+Instructions|'
        r'SECTION\s+[A-E]|Question\s+No\.|Delhi\s+Set|Outside\s+Delhi|'
        r'Note:\s+Except|56/|www\.)', re.I)

    for line in lines:
        s = line.strip()
        if not s: continue
        if skip_pat.match(s): continue

        # Section mark hints: "carry N mark"
        sm = re.search(r'carr(?:y|ies)\s+(\d)\s+mark', s, re.I)
        if sm: current_section_marks = int(sm.group(1)); continue

        # Inline mark at end: "...\n2" or "...\n1×2"
        inline_m = re.match(r'^(\d)(?:\s*×\s*\d+)?\s*$', s)
        if inline_m and qnum is not None and not in_ans:
            v = int(inline_m.group(1))
            if 1 <= v <= 5:
                marks = v
            continue

        # Question pattern: *?\s*NUM. REST  or  NUM.\t REST
        qm = re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)', s)
        if qm:
            num = int(qm.group(1))
            if 1 <= num <= 45:
                # Save previous
                if qnum is not None and qbuf:
                    qt = clean(' '.join(qbuf))
                    at = clean(' '.join(abuf))
                    if len(qt) > 15:
                        ch = guess_chapter(qt + ' ' + at)
                        if ch:
                            questions.append({'qnum': qnum, 'question': qt, 'answer': at,
                                              'marks': marks, 'year': year, 'chapter': ch})
                qnum = num; qbuf = [qm.group(2)]; abuf = []
                in_ans = False; marks = current_section_marks
                continue

        # Sub-question parts (a), (b), (c) – append to buffer
        sub = re.match(r'^\([a-e]\)\s+(.*)', s)
        if sub and qnum is not None:
            target = abuf if in_ans else qbuf
            target.append(sub.group(0))
            continue

        # Answer start
        if re.match(r'^\*?\s*Ans\.?[:\s]|^\*?\s*Answer[:\s]|^\*?\s*Sol\.?[:\s]', s, re.I):
            in_ans = True
            rest = re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)[:\s]*', '', s, flags=re.I).strip()
            if rest: abuf.append(rest)
            continue

        if qnum is not None:
            if in_ans:
                abuf.append(s)
            else:
                qbuf.append(s)

    # Last
    if qnum is not None and qbuf:
        qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
        if len(qt) > 15:
            ch = guess_chapter(qt + ' ' + at)
            if ch:
                questions.append({'qnum': qnum, 'question': qt, 'answer': at,
                                  'marks': marks, 'year': year, 'chapter': ch})
    return questions

# ═══════════════════════════════════════════════════════════════════════════════
#  MAIN
# ═══════════════════════════════════════════════════════════════════════════════
# Chapter PDF file → new chapter number mapping
CHAPTER_FILES = {
    1:  2,   # Ch1 file = Solutions       → new Ch2... wait
}
# The chapter file numbers from filenames map to new chapters:
# File Ch1 = Solutions = New Ch1
# File Ch2 = Electrochemistry = New Ch2
# File Ch3 = Chemical Kinetics = New Ch3
# File Ch4 = d&f block = New Ch4
# File Ch5 = Coordination Compounds = New Ch5
# File Ch6 = Haloalkanes = New Ch6
# File Ch7 = Alcohols = New Ch7
# File Ch8 = Aldehydes/Ketones = New Ch8
# File Ch9 = Amines = New Ch9
# File Ch10 = Biomolecules = New Ch10
CHAPTER_FILES = {i: i for i in range(1, 11)}

all_qs = []
qid = 1

# 1. Chapter PDFs
for fnum, chnum in CHAPTER_FILES.items():
    fname = f"Important Questions Class 12 Chemistry Chapter {fnum} - Free PDF.pdf"
    path = os.path.join(PDF_DIR, fname)
    qs = parse_chapter_pdf(path, chnum)
    for q in qs:
        all_qs.append({
            'id': f'q{qid}',
            'question': q['question'],
            'answer': q['answer'],
            'chapter': q['chapter'],
            'chapterName': CHAPTERS[q['chapter']]['name'],
            'marks': q['marks'],
            'year': None,
            'difficulty': get_difficulty(q['marks']),
            'type': detect_type(q['question']),
            'source': 'chapter_pdf',
            'isImportant': True,
            'frequency': 1,
        })
        qid += 1
    print(f"  Ch{fnum} ({CHAPTERS[chnum]['name'][:30]}): {len(qs)} Qs")

# 2. Board papers
PAPERS = {
    2013: "Solved paper 2013.pdf",
    2014: "Solved paper 2014.pdf",
    2015: "Solved paper 2015.pdf",
    2016: "Solved paper 2016.pdf",
    2017: "Solved paper 2017.pdf",
    2018: "Solved paper 2018.pdf",
    2019: "Solved paper 2019.pdf",
    2020: "Solved paper 2020.pdf",
    2022: "Solved paper 2022 Term I.pdf",
    2023: "Solved paper 2023 (1).pdf",
    2024: "Chemistry-12 Board Paper.pdf",
    2025: "Chemistry-2025.pdf",
}

for yr, fname in PAPERS.items():
    path = os.path.join(PDF_DIR, fname)
    qs = parse_board_paper(path, yr)
    for q in qs:
        all_qs.append({
            'id': f'q{qid}',
            'question': q['question'],
            'answer': q['answer'],
            'chapter': q['chapter'],
            'chapterName': CHAPTERS[q['chapter']]['name'],
            'marks': q['marks'],
            'year': yr,
            'difficulty': get_difficulty(q['marks']),
            'type': detect_type(q['question']),
            'source': 'board_paper',
            'isImportant': False,
            'frequency': 1,
        })
        qid += 1
    print(f"  {yr}: {len(qs)} Qs")

# ── Deduplicate (same question text, keep first) ──────────────────────────────
seen = {}; deduped = []
for q in all_qs:
    key = q['question'].lower().strip()[:120]
    if key not in seen:
        seen[key] = q['id']
        deduped.append(q)

# ── Compute frequency (how many times a question appears across years) ─────────
freq_map = {}
for q in deduped:
    k = q['question'].lower().strip()[:80]
    freq_map[k] = freq_map.get(k, 0) + 1
for q in deduped:
    k = q['question'].lower().strip()[:80]
    q['frequency'] = freq_map[k]

# ── Filter: only keep questions in the 10-chapter syllabus ────────────────────
deduped = [q for q in deduped if q['chapter'] in CHAPTERS and len(q['question']) > 15]

# ── Stats ─────────────────────────────────────────────────────────────────────
print(f"\nTotal: {len(deduped)}")
by_ch = {}
for q in deduped:
    by_ch[q['chapter']] = by_ch.get(q['chapter'], 0) + 1
for ch in sorted(by_ch):
    print(f"  Ch{ch} {CHAPTERS[ch]['name'][:38]}: {by_ch[ch]}")

years = sorted(set(q['year'] for q in deduped if q['year']))

out = {'questions': deduped, 'chapters': CHAPTERS, 'totalQuestions': len(deduped), 'years': years}
os.makedirs('/home/user/Chemistrypyqs/src/data', exist_ok=True)
with open('/home/user/Chemistrypyqs/src/data/questions.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False)
print(f"\nSaved to /home/user/Chemistrypyqs/src/data/questions.json")
