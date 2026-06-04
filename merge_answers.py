#!/usr/bin/env python3
"""Merge regenerated answers from answers_out/<id>.txt into questions.json."""
import json, os, re

OUT = 'answers_out'
with open('src/data/questions.json') as f:
    data = json.load(f)

def tidy(a):
    a = re.sub(r'\*\*(.+?)\*\*', r'\1', a)          # strip bold
    a = re.sub(r'^[#>]+\s*', '', a, flags=re.M)      # strip md headings/quotes
    a = re.sub(r'^\s*[-*]\s+', '', a, flags=re.M)    # strip bullet markers
    a = re.sub(r'[ \t]+', ' ', a)
    a = re.sub(r'\n{3,}', '\n\n', a)
    return a.strip()

merged = 0
missing = []
for q in data['questions']:
    p = os.path.join(OUT, q['id'] + '.txt')
    if os.path.exists(p):
        with open(p, encoding='utf-8') as f:
            ans = tidy(f.read())
        if len(ans) >= 10:
            q['answer'] = ans
            merged += 1
        else:
            missing.append(q['id'])
    else:
        missing.append(q['id'])

with open('src/data/questions.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

print(f'Merged {merged} regenerated answers')
print(f'Missing/short: {len(missing)} -> {missing[:30]}')
