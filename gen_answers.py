#!/usr/bin/env python3
"""Generate clean, exam-ready CBSE answers for questions using the claude CLI.
Usage: python3 gen_answers.py <shard_index> <num_shards>
Writes one file per question id into answers_out/<id>.txt (resumable).
"""
import json, os, sys, subprocess, re, time

BATCH = 5
OUT = 'answers_out'
os.makedirs(OUT, exist_ok=True)

with open('src/data/questions.json') as f:
    data = json.load(f)
questions = data['questions']

CH = {q['chapter']: q['chapterName'] for q in questions}

PROMPT_HEADER = """You are a CBSE Class 12 Chemistry board-exam expert. Write clean, accurate, EXAM-READY model answers for the questions below.

Rules for each answer:
- Match the depth to the marks (1 mark: 1-2 lines; 2-3 marks: 3-5 lines; 5 marks: thorough with all steps/equations).
- Be precise and correct. Include balanced equations, formulas, definitions, and reasoning as a topper would write.
- PLAIN TEXT ONLY. No markdown, no asterisks, no bold, no headings, no bullet symbols.
- Write chemical formulas normally: H2SO4, CO2, [Fe(CN)6]3-, CH3COOH. Use -> for reaction arrows and <=> for equilibrium. Use unicode Greek (alpha, beta, Delta) spelled out OR symbols.
- For numericals show the working and final answer.
- Do NOT restate the question. Do NOT include mark notations like (1/2 x 3) or "CBSE Marking Scheme".

Output EXACTLY in this format for each question, nothing else:
===ID:<id>===
<answer>
===END===

Questions:
"""

def build_prompt(batch):
    lines = [PROMPT_HEADER]
    for q in batch:
        lines.append(f"\n[id={q['id']}] (Chapter: {CH[q['chapter']]}, Marks: {q['marks']})")
        lines.append(f"Q: {q['question']}")
    return '\n'.join(lines)

def call_claude(prompt):
    try:
        res = subprocess.run(
            ['claude', '-p', '--model', 'claude-sonnet-4-6'],
            input=prompt, capture_output=True, text=True, timeout=300, cwd='/tmp'
        )
        return res.stdout
    except subprocess.TimeoutExpired:
        return ''

def parse(output):
    out = {}
    for m in re.finditer(r'===ID:\s*(\S+?)\s*===\s*(.*?)\s*===END===', output, re.DOTALL):
        qid = m.group(1).strip()
        ans = m.group(2).strip()
        # cleanup stray markdown
        ans = re.sub(r'\*\*(.+?)\*\*', r'\1', ans)
        ans = re.sub(r'^[#>\-\*]+\s*', '', ans, flags=re.M)
        ans = re.sub(r'\n{3,}', '\n\n', ans).strip()
        if ans:
            out[qid] = ans
    return out

def main():
    SHARD = int(sys.argv[1])
    NSHARDS = int(sys.argv[2])
    mine = [q for i, q in enumerate(questions) if i % NSHARDS == SHARD]
    todo = [q for q in mine if not os.path.exists(os.path.join(OUT, q['id'] + '.txt'))]
    print(f'[shard {SHARD}] {len(todo)} questions to do (of {len(mine)})', flush=True)
    for i in range(0, len(todo), BATCH):
        batch = todo[i:i+BATCH]
        parsed = parse(call_claude(build_prompt(batch)))
        missing = [q for q in batch if q['id'] not in parsed]
        if missing:
            parsed.update(parse(call_claude(build_prompt(missing))))
        for q in batch:
            ans = parsed.get(q['id'])
            if ans:
                with open(os.path.join(OUT, q['id'] + '.txt'), 'w', encoding='utf-8') as f:
                    f.write(ans)
        done = len([1 for q in batch if q['id'] in parsed])
        print(f'[shard {SHARD}] batch {i//BATCH+1}: {done}/{len(batch)} done', flush=True)
        time.sleep(2)
    print(f'[shard {SHARD}] COMPLETE', flush=True)

if __name__ == '__main__':
    main()
