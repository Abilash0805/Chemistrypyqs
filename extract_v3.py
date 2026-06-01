import fitz, re, json, os

PDF_DIR = "/home/user/Chemistrypyqs/pdfs/1PYQs"

CHAPTERS = {
    1: {"id":1,"name":"Solutions","shortName":"Solutions","color":"#6366f1"},
    2: {"id":2,"name":"Electrochemistry","shortName":"Electrochemistry","color":"#8b5cf6"},
    3: {"id":3,"name":"Chemical Kinetics","shortName":"Chem Kinetics","color":"#ec4899"},
    4: {"id":4,"name":"The d- and f-Block Elements","shortName":"d & f Block","color":"#f59e0b"},
    5: {"id":5,"name":"Coordination Compounds","shortName":"Coordination Cpds","color":"#10b981"},
    6: {"id":6,"name":"Haloalkanes and Haloarenes","shortName":"Haloalkanes","color":"#06b6d4"},
    7: {"id":7,"name":"Alcohols, Phenols and Ethers","shortName":"Alcohols & Ethers","color":"#3b82f6"},
    8: {"id":8,"name":"Aldehydes, Ketones and Carboxylic Acids","shortName":"Carbonyl Cpds","color":"#84cc16"},
    9: {"id":9,"name":"Amines","shortName":"Amines","color":"#f97316"},
    10:{"id":10,"name":"Biomolecules","shortName":"Biomolecules","color":"#14b8a6"},
}

# Topics REMOVED from current 2024-25+ syllabus - filter these out
EXCLUDED_TOPICS = [
    # From old syllabus – not in current 10-chapter list
    'solid state','unit cell','bravais lattice','packing efficiency','schottky defect',
    'frenkel defect','crystal defect','semiconductor',
    'surface chemistry','adsorption','physisorption','chemisorption','colloid','emulsion',
    'tyndall effect','brownian motion','coagulation','sol','gel','aerosol',
    'isolation of elements','metallurgy','ore','gangue','roasting','calcination',
    'smelting','blast furnace','froth flotation','leaching','ellingham',
    'p-block element','group 15','group 16','group 17','group 18',
    'nitrogen family','oxygen family','halogen family','noble gas',
    'phosphorus','sulphur','sulphuric acid','nitric acid','ozone',
    'polymer','polymerization','monomer','nylon','teflon','bakelite','buna',
    'addition polymer','condensation polymer','biodegradable polymer',
    'drug','medicine','antiseptic','antibiotic','analgesic','tranquilizer',
    'soap','detergent','dye','food additive','chemistry in everyday life',
]

KW = {
    1: ['solution','solute','solvent','mole fraction','molality','molarity','raoult',
        'osmosis','osmotic','colligative','henry','vapor pressure','boiling point elevation',
        'freezing point depression','van\'t hoff','isotonic','semipermeable','azeotrope',
        'ebullioscopic','cryoscopic','depression in freezing','elevation in boiling',
        'relative lowering','abnormal molar mass'],
    2: ['electrode','cell potential','emf','nernst','conductance','electrolysis','faraday',
        'galvanic','molar conductivity','electrolyte','corrosion','fuel cell',
        'conductivity','electrochemical','daniel cell','standard electrode potential',
        'reduction potential','half cell','salt bridge','kohlrausch','equivalent conductance',
        'limiting molar conductivity','debye huckel','electrolytic cell'],
    3: ['rate of reaction','rate constant','order of reaction','molecularity','half life',
        'activation energy','arrhenius','first order','zero order','second order',
        'rate law','pseudo first','chemical kinetics','integrated rate','collision theory',
        'threshold energy','frequency factor','rate expression','instantaneous rate',
        'rate determining','elementary reaction','half-life'],
    4: ['transition metal','d-block','f-block','lanthanoid','actinoid','oxidation state of',
        'magnetic moment','chromium','manganese','cobalt','nickel','copper','zinc',
        'd-d transition','lanthanoid contraction','color of','variable valence','interstitial compound',
        'zr and hf','permanganate','dichromate','chromate','ferrous','ferric','3d series',
        'paramagnetic','diamagnetic','spin only','enthalpy of atomisation','ionization enthalpy of',
        'electrode potential of','standard electrode potential of'],
    5: ['coordination compound','complex','ligand','coordination number','chelate',
        'cfse','crystal field','valence bond','vbt','spectrochemical','ambidentate',
        'dentate','homoleptic','heteroleptic','werner','edta','isomerism',
        'square planar','octahedral','inner orbital','outer orbital','low spin','high spin',
        'optical isomer','geometrical isomer','coordination sphere','cis trans','counter ion',
        'central metal','linkage isomer','ionisation isomer','stability constant','chelate effect',
        'coordination entity','secondary valence','primary valence','effective atomic number'],
    6: ['haloalkane','haloarene','grignard','sn1','sn2','nucleophilic substitution',
        'elimination reaction','chloroform','iodoform','alkyl halide','aryl halide',
        'ddt','freon','chlorobenzene','dehydrohalogenation','e1','e2',
        'finkelstein','swarts','sandmeyer','balz schiemann','wurtz',
        'benzyl chloride','allyl halide','halogenation','inversion','retention',
        'racemisation','optical activity of halo','cfc'],
    7: ['alcohol','phenol','ether','hydroxyl','reimer tiemann','kolbe reaction',
        'williamson ether','ethanol','methanol','glycerol','dehydration',
        'phenoxide','oxidation of alcohol','lucas test','ring opening',
        'victor meyer','pinacol','cumene','baeyer','acid strength of phenol',
        'nucleophilic substitution of phenol','electrophilic substitution of phenol',
        'propenyl','allylic alcohol','homoallylic'],
    8: ['aldehyde','ketone','carboxylic acid','aldol','cannizzaro',
        'nucleophilic addition','hell volhard','acid anhydride','esterification',
        'formaldehyde','acetaldehyde','acetone','benzoic acid','acetic acid',
        'carbonyl','fehling','tollens','benedict','clemmensen','wolff kishner',
        'rosenmund','stephen','etard','gattermann','hvz','formic acid',
        'propanal','benzaldehyde','oxalic acid','acidic strength','acylation',
        'nucleophilic addition elimination','crossed aldol','intramolecular aldol'],
    9: ['amine','amino','diazonium','coupling reaction','diazotization',
        'basicity of amine','gabriel','hoffmann bromamide','aniline','methylamine',
        'primary amine','secondary amine','tertiary amine','hinsberg','carbylamine',
        'mustard oil','sandmeyer reaction','diazo coupling','acetylation of amine',
        'nitrous acid with amine','schotten baumann','gabriel phthalimide'],
    10:['glucose','fructose','sucrose','carbohydrate','protein','amino acid',
        'peptide','enzyme','dna','rna','nucleic acid','vitamin','glycogen','starch',
        'cellulose','reducing sugar','non-reducing','haworth','biomolecule',
        'polysaccharide','disaccharide','monosaccharide','glycosidic bond',
        'purine','pyrimidine','nucleotide','double helix','denaturation',
        'isoelectric point','zwitterion','fibrous protein','globular protein',
        'alpha helix','fat soluble','water soluble vitamin','base pairing',
        'lactose','maltose','galactose'],
}

def is_out_of_syllabus(text):
    tl = text.lower()
    return any(ex in tl for ex in EXCLUDED_TOPICS)

def guess_chapter(text):
    tl = text.lower()
    scores = {}
    for ch, kws in KW.items():
        s = sum(2 if f' {kw} ' in f' {tl} ' else (1 if kw in tl else 0) for kw in kws)
        if s > 0: scores[ch] = s
    return max(scores, key=scores.get) if scores else None

def clean(t):
    if not t: return ''
    t = re.sub(r'\s+', ' ', t)
    t = re.sub(r'www\.\S+', '', t)
    t = re.sub(r'(?i)class\s*xii\s*chemistry', '', t)
    t = re.sub(r'(?i)oswaal\s+cbse.{0,40}class.{0,10}xii', '', t)
    t = re.sub(r'(?i)solved\s+paper\s*[-–]\s*\d{4}', '', t)
    t = re.sub(r'(?i)cbse\s+examination\s+paper\s*[-–]?\s*\d{4}', '', t)
    return t.strip()

def get_diff(m): return 'easy' if m==1 else ('medium' if m<=3 else 'hard')

def get_type(q):
    ql = q.lower()
    if re.search(r'\([ABCD]\)', q): return 'mcq'
    if 'assertion' in ql and 'reason' in ql: return 'assertion_reason'
    if re.search(r'\bcalculate\b|\bfind\b|\bdetermine\b|\bcompute\b', ql): return 'numerical'
    if re.search(r'\bdraw\b.*\bstructure|\bstructure.*\bdraw\b|\bsketch\b', ql): return 'diagram'
    if re.search(r'\bexplain\b|\bdescribe\b|\bdiscuss\b|\baccount\b|\bcomment\b|\bjustify\b', ql): return 'long_answer'
    return 'short_answer'

def extract_inline_marks(text):
    m = re.search(r'(?:^|\s)([1-5])(?:\s*$|\s*×)', text)
    if m: return int(m.group(1))
    return None

# ── CHAPTER PDF PARSER (handles Vedantu + simple Q&A format) ──────────────────
def parse_chapter(path, chnum):
    doc = fitz.open(path)
    pages_text = [p.get_text() for p in doc]
    doc.close()
    full = '\n'.join(pages_text)
    lines = full.split('\n')

    results = []
    qnum=None; qbuf=[]; abuf=[]; in_ans=False; marks=1

    for line in lines:
        s = line.strip()
        if not s: continue
        if re.match(r'^(www\.|Class\s*XII|Important\s|Study\s+Important)', s): continue

        sm = re.search(r'(\d)\s*[Mm]ark', s)
        if sm and len(s) < 80 and not re.match(r'^\d+[.\)]', s):
            marks = int(sm.group(1)); continue

        qm = re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)', s)
        if qm:
            n = int(qm.group(1))
            if 1 <= n <= 200:
                if qnum is not None and qbuf:
                    qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
                    if len(qt) > 12 and not is_out_of_syllabus(qt):
                        results.append({'question':qt,'answer':at,'marks':marks,'chapter':chnum})
                qnum=n; qbuf=[qm.group(2)]; abuf=[]; in_ans=False
                continue

        # Inline bracket answers like [Ans. : 6]
        bans = re.search(r'\[Ans\.?\s*:?\s*(.+?)\]', s)
        if bans and qnum is not None:
            abuf.append(bans.group(1)); continue

        if re.match(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]', s, re.I):
            in_ans = True
            rest = re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]*', '', s, re.I).strip()
            if rest: abuf.append(rest)
            continue

        if qnum is not None:
            (abuf if in_ans else qbuf).append(s)

    if qnum is not None and qbuf:
        qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
        if len(qt) > 12 and not is_out_of_syllabus(qt):
            results.append({'question':qt,'answer':at,'marks':marks,'chapter':chnum})
    return results

# ── BOARD PAPER PARSER ────────────────────────────────────────────────────────
SKIP = re.compile(
    r'^(Solved\s+Paper|Oswaal|CBSE\s+EXAM|Chemistry\s+\(Theory\)|'
    r'Time\s*:|Max\.\s*Marks|General\s+Inst|SECTION\s+[A-E]|Question\s+No\.|'
    r'Delhi\s+Set|Outside\s+Delhi|Note:\s+Except|56/|www\.|'
    r'Class-?12|Answer\s+these\s+questions|All\s+questions\s+are)', re.I)

def parse_paper(path, year):
    doc = fitz.open(path)
    full = '\n'.join(p.get_text() for p in doc)
    doc.close()
    lines = full.split('\n')

    results = []
    qnum=None; qbuf=[]; abuf=[]; in_ans=False; marks=1; sec_marks=1

    for line in lines:
        s = line.strip()
        if not s or SKIP.match(s): continue

        # Section-level marks
        sm = re.search(r'carr(?:y|ies)\s+(\d)\s+mark', s, re.I)
        if sm: sec_marks = int(sm.group(1)); continue

        # Standalone mark line
        if re.match(r'^[1-5](?:\s*×\s*\d+)?\s*$', s) and qnum is not None and not in_ans:
            marks = int(s[0]); continue

        qm = re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)', s)
        if qm:
            n = int(qm.group(1))
            if 1 <= n <= 45:
                if qnum is not None and qbuf:
                    qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
                    ch = guess_chapter(qt + ' ' + at)
                    if len(qt) > 15 and ch and not is_out_of_syllabus(qt):
                        results.append({'question':qt,'answer':at,'marks':marks,'year':year,'chapter':ch})
                qnum=n; qbuf=[qm.group(2)]; abuf=[]; in_ans=False; marks=sec_marks
                continue

        if re.match(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]', s, re.I):
            in_ans = True
            rest = re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]*', '', s, re.I).strip()
            if rest: abuf.append(rest)
            continue

        if qnum is not None:
            (abuf if in_ans else qbuf).append(s)

    if qnum is not None and qbuf:
        qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
        ch = guess_chapter(qt + ' ' + at)
        if len(qt) > 15 and ch and not is_out_of_syllabus(qt):
            results.append({'question':qt,'answer':at,'marks':marks,'year':year,'chapter':ch})
    return results

# ── SPECIAL PARSER for Ch5 Coordination Compounds (no Ans: markers) ───────────
def parse_coord_ch5():
    path = os.path.join(PDF_DIR, "Important Questions Class 12 Chemistry Chapter 5 - Free PDF.pdf")
    doc = fitz.open(path)
    full = '\n'.join(p.get_text() for p in doc)
    doc.close()
    lines = full.split('\n')

    results = []; qnum=None; qbuf=[]; abuf=[]; marks=1

    for line in lines:
        s = line.strip()
        if not s: continue
        if re.match(r'^(Chapter|QUESTIONS|CO-ORDINATION)', s): continue

        sm = re.match(r'^(?:VSA|SA\s*\(I\)|SA\s*\(II\)|LA)\s+(?:TYPE\s+)?QUESTIONS?\s*\((\d)', s, re.I)
        if sm: marks = int(sm.group(1)); continue
        if 'VSA QUESTIONS' in s.upper(): marks = 1; continue
        if 'SA(I)' in s.upper() or '2 - MARK' in s.upper(): marks = 2; continue
        if 'SA (II)' in s.upper() or '3 - MARK' in s.upper(): marks = 3; continue

        qm = re.match(r'^\*?\s*(\d{1,2})[.\)]\s*(.*)', s)
        if qm:
            n = int(qm.group(1))
            if 1 <= n <= 60:
                if qnum is not None and qbuf:
                    qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
                    if len(qt) > 10:
                        results.append({'question':qt,'answer':at,'marks':marks,'chapter':5})
                qnum=n; rest=qm.group(2)
                # Check for inline [Ans.: ...] in same line
                bans = re.search(r'\[Ans\.?\s*:?\s*(.+?)\]', rest)
                if bans:
                    qt_part = rest[:bans.start()].strip()
                    at_part = bans.group(1).strip()
                    qbuf=[qt_part] if qt_part else [rest]; abuf=[at_part]
                else:
                    qbuf=[rest]; abuf=[]
                continue

        # Inline [Ans.: ...] on its own line
        bans = re.search(r'\[(?:Ans\.?|Hint)\s*:?\s*(.+?)\]', s)
        if bans and qnum is not None:
            abuf.append(bans.group(1)); continue

        if qnum is not None:
            if re.match(r'^\[', s): abuf.append(s.strip('[]'))
            else: qbuf.append(s)

    if qnum is not None and qbuf:
        qt = clean(' '.join(qbuf)); at = clean(' '.join(abuf))
        if len(qt) > 10:
            results.append({'question':qt,'answer':at,'marks':marks,'chapter':5})
    return results

# ── RUN ALL ───────────────────────────────────────────────────────────────────
all_qs = []
qid = 1

print("=== Chapter PDFs ===")
for fnum in range(1, 11):
    fname = f"Important Questions Class 12 Chemistry Chapter {fnum} - Free PDF.pdf"
    path = os.path.join(PDF_DIR, fname)
    if fnum == 5:
        qs = parse_coord_ch5()
    else:
        qs = parse_chapter(path, fnum)
    for q in qs:
        all_qs.append({'id':f'q{qid}','question':q['question'],'answer':q['answer'],
                       'chapter':q['chapter'],'chapterName':CHAPTERS[q['chapter']]['name'],
                       'marks':q['marks'],'year':None,'difficulty':get_diff(q['marks']),
                       'type':get_type(q['question']),'source':'chapter_pdf',
                       'isImportant':True,'frequency':1})
        qid += 1
    print(f"  Ch{fnum} {CHAPTERS[fnum]['name'][:30]}: {len(qs)}")

print("\n=== Board Papers ===")
PAPERS = {
    2013:"Solved paper 2013.pdf", 2014:"Solved paper 2014.pdf",
    2015:"Solved paper 2015.pdf", 2016:"Solved paper 2016.pdf",
    2017:"Solved paper 2017.pdf", 2018:"Solved paper 2018.pdf",
    2019:"Solved paper 2019.pdf", 2020:"Solved paper 2020.pdf",
    2022:"Solved paper 2022 Term I.pdf", 2023:"Solved paper 2023 (1).pdf",
    2024:"Chemistry-12 Board Paper.pdf", 2025:"Chemistry-2025.pdf",
}
for yr, fname in PAPERS.items():
    qs = parse_paper(os.path.join(PDF_DIR, fname), yr)
    for q in qs:
        all_qs.append({'id':f'q{qid}','question':q['question'],'answer':q['answer'],
                       'chapter':q['chapter'],'chapterName':CHAPTERS[q['chapter']]['name'],
                       'marks':q['marks'],'year':yr,'difficulty':get_diff(q['marks']),
                       'type':get_type(q['question']),'source':'board_paper',
                       'isImportant':False,'frequency':1})
        qid += 1
    print(f"  {yr}: {len(qs)}")

# Deduplicate
seen={}; final=[]
for q in all_qs:
    k = q['question'].lower().strip()[:120]
    if k not in seen:
        seen[k]=True; final.append(q)

# Frequency
fmap={}
for q in final:
    k=q['question'].lower().strip()[:80]; fmap[k]=fmap.get(k,0)+1
for q in final:
    q['frequency']=fmap[q['question'].lower().strip()[:80]]

years = sorted(set(q['year'] for q in final if q['year']))
out = {'questions':final,'chapters':CHAPTERS,'totalQuestions':len(final),'years':years}

with open('/home/user/Chemistrypyqs/src/data/questions.json','w',encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False)

print(f"\n{'='*50}")
print(f"TOTAL: {len(final)} questions")
by_ch={}
for q in final: by_ch[q['chapter']]=by_ch.get(q['chapter'],0)+1
for ch in sorted(by_ch): print(f"  Ch{ch} {CHAPTERS[ch]['name'][:38]}: {by_ch[ch]}")
