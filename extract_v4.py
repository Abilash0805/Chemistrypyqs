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

# ── Only exclude clearly out-of-syllabus PHRASES (not substrings) ─────────────
OUT_OF_SYLLABUS_PHRASES = [
    'solid state','unit cell','bravais lattice','packing efficiency',
    'schottky defect','frenkel defect','crystal lattice','close packing',
    'void in crystal','coordination number in crystal',
    'physisorption','chemisorption','tyndall effect','brownian motion',
    'coagulation of colloid','lyophilic','lyophobic','emulsification',
    'froth flotation','leaching of','blast furnace','ellingham diagram',
    'extraction of metal','hydrometallurgy','pyrometallurgy',
    'p-block element','group 15 element','group 16 element',
    'group 17 element','group 18 element',
    'nylon 6,6','buna-s','teflon polymer','bakelite','polythene',
    'condensation polymerisation','addition polymerisation',
    'biodegradable polymer','natural rubber','vulcanisation',
    'antiseptic drug','antibiotic drug','analgesic drug','tranquilizer',
    'food preservative','artificial sweetener','detergent chemistry',
]

def is_out_of_syllabus(text):
    tl = text.lower()
    return any(phrase in tl for phrase in OUT_OF_SYLLABUS_PHRASES)

KW = {
    1: ['mole fraction','molality','molarity','raoult','osmosis','osmotic pressure',
        'colligative','henry\'s law','vapor pressure','boiling point elevation',
        'freezing point depression','van\'t hoff','isotonic','semipermeable',
        'azeotrope','ebullioscopic','cryoscopic','colligative property',
        'relative lowering','abnormal molar mass','solubility','dissolution',
        'parts per million','dilute solution','concentrated solution',
        'ideal solution','non-ideal solution','positive deviation','negative deviation'],
    2: ['electrode potential','cell potential','emf','nernst equation','conductance',
        'electrolysis','faraday','galvanic cell','molar conductivity','electrolyte',
        'corrosion','fuel cell','conductivity','electrochemical cell','daniel cell',
        'standard electrode potential','reduction potential','half cell','salt bridge',
        'kohlrausch','electrolytic cell','debye huckel','limiting molar conductivity',
        'specific conductance','cell constant','resistance of solution'],
    3: ['rate of reaction','rate constant','order of reaction','molecularity','half life',
        'activation energy','arrhenius equation','first order reaction','zero order',
        'second order','rate law','pseudo first order','integrated rate law',
        'collision theory','threshold energy','frequency factor','rate expression',
        'instantaneous rate','average rate','rate determining step'],
    4: ['transition metal','d-block','f-block','lanthanoid','actinoid','variable oxidation',
        'magnetic moment','chromium','manganese','cobalt','nickel','copper','zinc',
        'd-d transition','lanthanoid contraction','color of transition','interstitial compound',
        'zr and hf','permanganate','dichromate','chromate','3d series','spin only formula',
        'enthalpy of atomisation','ionization enthalpy of transition','catalyst transition',
        'electrode potential of','standard electrode potential of transition'],
    5: ['coordination compound','complex compound','ligand','coordination number',
        'chelate','crystal field','valence bond theory','spectrochemical series',
        'ambidentate','dentate','homoleptic','heteroleptic','werner\'s theory',
        'edta','isomerism of complex','square planar','octahedral complex',
        'inner orbital','outer orbital','low spin','high spin','optical isomer of complex',
        'geometrical isomer of complex','coordination sphere','cis trans isomer',
        'counter ion','central metal','linkage isomer','ionisation isomer',
        'stability constant','chelate effect','secondary valence','primary valence',
        'ean rule','bonding in complex','colour of complex','magnetic behaviour of complex'],
    6: ['haloalkane','haloarene','grignard reagent','sn1 reaction','sn2 reaction',
        'nucleophilic substitution','elimination reaction','chloroform','iodoform',
        'alkyl halide','aryl halide','ddt','freon','chlorobenzene',
        'dehydrohalogenation','finkelstein reaction','swarts reaction','sandmeyer reaction',
        'balz schiemann','wurtz reaction','benzyl chloride','allyl halide',
        'racemisation','optical activity halide','nucleophilicity','electrophilicity of halide'],
    7: ['alcohol','phenol','ether','hydroxyl group','reimer tiemann reaction','kolbe reaction',
        'williamson ether synthesis','dehydration of alcohol','phenoxide ion',
        'oxidation of alcohol','lucas test','ether preparation','ring opening of ether',
        'fermentation','glycerol','acidity of phenol','electrophilic substitution phenol',
        'cumene process','baeyer villiger','propenyl group'],
    8: ['aldehyde','ketone','carboxylic acid','aldol condensation','cannizzaro reaction',
        'nucleophilic addition to carbonyl','hell volhard zelinsky','acid anhydride',
        'esterification','formaldehyde','acetaldehyde','acetone','benzoic acid',
        'carbonyl compound','fehling solution','tollens reagent','benedict solution',
        'clemmensen reduction','wolff kishner reduction','rosenmund reduction',
        'stephen reduction','etard reaction','gattermann reaction','hvz reaction',
        'cross aldol','benzaldehyde','acetic acid','acidic strength of acid'],
    9: ['primary amine','secondary amine','tertiary amine','diazonium salt',
        'coupling reaction','diazotization','basicity of amine','gabriel phthalimide',
        'hoffmann bromamide','aniline','methylamine','hinsberg test','carbylamine test',
        'mustard oil reaction','sandmeyer reaction on amine','diazo coupling',
        'acetylation of amine','nitrous acid with amine','amide','amination'],
    10:['glucose structure','fructose','sucrose','carbohydrate','protein structure',
        'amino acid','peptide bond','enzyme','dna structure','rna structure',
        'nucleic acid','vitamin','glycogen','starch','cellulose',
        'reducing sugar','non-reducing sugar','haworth projection','biomolecule',
        'polysaccharide','disaccharide','monosaccharide','glycosidic bond',
        'purine','pyrimidine','nucleotide','double helix','denaturation of protein',
        'isoelectric point','zwitterion','fibrous protein','globular protein',
        'fat soluble vitamin','water soluble vitamin','base pairing','lactose','maltose'],
}

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
    t = re.sub(r'(?i)oswaal\s+cbse.{0,50}', '', t)
    t = re.sub(r'(?i)solved\s+paper\s*[-–]\s*\d{4}[^\n]*', '', t)
    t = re.sub(r'(?i)cbse\s+examination\s+paper.{0,30}', '', t)
    return t.strip()

def get_diff(m): return 'easy' if m==1 else ('medium' if m<=3 else 'hard')
def get_type(q):
    ql=q.lower()
    if re.search(r'\([ABCD]\)',q): return 'mcq'
    if 'assertion' in ql and 'reason' in ql: return 'assertion_reason'
    if re.search(r'\bcalculate\b|\bfind\b|\bdetermine\b|\bcompute\b',ql): return 'numerical'
    if re.search(r'\bdraw\b.{0,20}\bstructure\b|\bsketch\b',ql): return 'diagram'
    if re.search(r'\bexplain\b|\bdescribe\b|\bdiscuss\b|\baccount\b|\bjustify\b',ql): return 'long_answer'
    return 'short_answer'

# ── CHAPTER PDF PARSER ────────────────────────────────────────────────────────
def parse_chapter(path, chnum):
    doc = fitz.open(path)
    full = '\n'.join(p.get_text() for p in doc); doc.close()
    lines = full.split('\n')
    results=[]; qnum=None; qbuf=[]; abuf=[]; in_ans=False; marks=1
    for line in lines:
        s=line.strip()
        if not s: continue
        if re.match(r'^(www\.|Class\s*XII\s*Chem|Important Questions for|Study Important)',s): continue
        sm=re.search(r'(\d)\s*[Mm]ark',s)
        if sm and len(s)<80 and not re.match(r'^\d+[.\)]',s):
            marks=int(sm.group(1)); continue
        qm=re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)',s)
        if qm:
            n=int(qm.group(1))
            if 1<=n<=200:
                if qnum is not None and qbuf:
                    qt=clean(' '.join(qbuf)); at=clean(' '.join(abuf))
                    if len(qt)>12 and not is_out_of_syllabus(qt):
                        results.append({'question':qt,'answer':at,'marks':marks,'chapter':chnum})
                qnum=n; qbuf=[qm.group(2)]; abuf=[]; in_ans=False; continue
        bans=re.search(r'\[(?:Ans\.?|Hint)\s*:?\s*(.+?)\]',s)
        if bans and qnum is not None: abuf.append(bans.group(1)); continue
        if re.match(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]',s,re.I):
            in_ans=True
            rest=re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]*','',s,re.I).strip()
            if rest: abuf.append(rest); continue
        if qnum is not None: (abuf if in_ans else qbuf).append(s)
    if qnum is not None and qbuf:
        qt=clean(' '.join(qbuf)); at=clean(' '.join(abuf))
        if len(qt)>12 and not is_out_of_syllabus(qt):
            results.append({'question':qt,'answer':at,'marks':marks,'chapter':chnum})
    return results

# ── CH5 SPECIAL PARSER ────────────────────────────────────────────────────────
def parse_ch5():
    path=os.path.join(PDF_DIR,"Important Questions Class 12 Chemistry Chapter 5 - Free PDF.pdf")
    doc=fitz.open(path); full='\n'.join(p.get_text() for p in doc); doc.close()
    lines=full.split('\n')
    results=[]; qnum=None; qbuf=[]; abuf=[]; marks=1
    for line in lines:
        s=line.strip()
        if not s or re.match(r'^(Chapter|QUESTIONS|CO-ORDINATION)',s): continue
        if 'VSA QUESTIONS' in s.upper(): marks=1; continue
        if 'SA(I)' in s.upper() or '2 - MARK' in s.upper() or '2-MARK' in s.upper(): marks=2; continue
        if 'SA (II)' in s.upper() or '3 - MARK' in s.upper(): marks=3; continue
        if re.match(r'^SA\s*\(?II\)?|^LA\s+TYPE',s,re.I): marks=3; continue
        qm=re.match(r'^\*?\s*(\d{1,2})[.\)]\s*(.*)',s)
        if qm:
            n=int(qm.group(1))
            if 1<=n<=60:
                if qnum is not None and qbuf:
                    qt=clean(' '.join(qbuf)); at=clean(' '.join(abuf))
                    if len(qt)>10: results.append({'question':qt,'answer':at,'marks':marks,'chapter':5})
                qnum=n; rest=qm.group(2)
                bans=re.search(r'\[(?:Ans\.?|Hint)\s*:?\s*(.+?)\]',rest)
                if bans:
                    qt_part=rest[:bans.start()].strip()
                    qbuf=[qt_part] if qt_part else [rest]; abuf=[bans.group(1)]
                else:
                    qbuf=[rest]; abuf=[]; continue
        bans=re.search(r'\[(?:Ans\.?|Hint)\s*:?\s*(.+?)\]',s)
        if bans and qnum is not None: abuf.append(bans.group(1)); continue
        if qnum is not None:
            if re.match(r'^\[',s): abuf.append(s.strip('[]'))
            else: qbuf.append(s)
    if qnum is not None and qbuf:
        qt=clean(' '.join(qbuf)); at=clean(' '.join(abuf))
        if len(qt)>10: results.append({'question':qt,'answer':at,'marks':marks,'chapter':5})
    return results

# ── BOARD PAPER PARSER ────────────────────────────────────────────────────────
SKIP=re.compile(
    r'^(Solved\s+Paper|Oswaal|CBSE\s+EXAM|Chemistry\s+\(Theory\)|'
    r'Time\s*:|Max\.\s*Marks|General\s+Inst|SECTION\s+[A-E]|Question\s+No\.|'
    r'Delhi\s+Set|Outside\s+Delhi|Note:\s+Except|56/|www\.|'
    r'Class-?12|Answer\s+these|All\s+questions\s+are)',re.I)

def parse_paper(path, year):
    doc=fitz.open(path); full='\n'.join(p.get_text() for p in doc); doc.close()
    lines=full.split('\n')
    results=[]; qnum=None; qbuf=[]; abuf=[]; in_ans=False; marks=1; sec_marks=1
    for line in lines:
        s=line.strip()
        if not s or SKIP.match(s): continue
        sm=re.search(r'carr(?:y|ies)\s+(\d)\s+mark',s,re.I)
        if sm: sec_marks=int(sm.group(1)); continue
        if re.match(r'^[1-5](?:\s*[×x]\s*\d+)?\s*$',s) and qnum is not None and not in_ans:
            marks=int(s[0]); continue
        qm=re.match(r'^\*?\s*(\d{1,2})[.\)]\s+(.*)',s)
        if qm:
            n=int(qm.group(1))
            if 1<=n<=45:
                if qnum is not None and qbuf:
                    qt=clean(' '.join(qbuf)); at=clean(' '.join(abuf))
                    ch=guess_chapter(qt+' '+at)
                    if len(qt)>15 and ch and not is_out_of_syllabus(qt):
                        results.append({'question':qt,'answer':at,'marks':marks,'year':year,'chapter':ch})
                qnum=n; qbuf=[qm.group(2)]; abuf=[]; in_ans=False; marks=sec_marks; continue
        if re.match(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]',s,re.I):
            in_ans=True
            rest=re.sub(r'^\*?\s*(?:Ans\.?|Answer|Sol\.?)\s*[:\s]*','',s,re.I).strip()
            if rest: abuf.append(rest); continue
        if qnum is not None: (abuf if in_ans else qbuf).append(s)
    if qnum is not None and qbuf:
        qt=clean(' '.join(qbuf)); at=clean(' '.join(abuf))
        ch=guess_chapter(qt+' '+at)
        if len(qt)>15 and ch and not is_out_of_syllabus(qt):
            results.append({'question':qt,'answer':at,'marks':marks,'year':year,'chapter':ch})
    return results

# ── MAIN ──────────────────────────────────────────────────────────────────────
all_qs=[]; qid=1

print("=== Chapter PDFs ===")
for fnum in range(1,11):
    fname=f"Important Questions Class 12 Chemistry Chapter {fnum} - Free PDF.pdf"
    qs = parse_ch5() if fnum==5 else parse_chapter(os.path.join(PDF_DIR,fname), fnum)
    for q in qs:
        all_qs.append({'id':f'q{qid}','question':q['question'],'answer':q['answer'],
                       'chapter':q['chapter'],'chapterName':CHAPTERS[q['chapter']]['name'],
                       'marks':q['marks'],'year':None,'difficulty':get_diff(q['marks']),
                       'type':get_type(q['question']),'source':'chapter_pdf',
                       'isImportant':True,'frequency':1})
        qid+=1
    print(f"  Ch{fnum} {CHAPTERS[fnum]['name'][:30]}: {len(qs)}")

print("\n=== Board Papers ===")
PAPERS={2013:"Solved paper 2013.pdf",2014:"Solved paper 2014.pdf",
        2015:"Solved paper 2015.pdf",2016:"Solved paper 2016.pdf",
        2017:"Solved paper 2017.pdf",2018:"Solved paper 2018.pdf",
        2019:"Solved paper 2019.pdf",2020:"Solved paper 2020.pdf",
        2022:"Solved paper 2022 Term I.pdf",2023:"Solved paper 2023 (1).pdf",
        2024:"Chemistry-12 Board Paper.pdf",2025:"Chemistry-2025.pdf"}
for yr,fname in PAPERS.items():
    qs=parse_paper(os.path.join(PDF_DIR,fname),yr)
    for q in qs:
        all_qs.append({'id':f'q{qid}','question':q['question'],'answer':q['answer'],
                       'chapter':q['chapter'],'chapterName':CHAPTERS[q['chapter']]['name'],
                       'marks':q['marks'],'year':yr,'difficulty':get_diff(q['marks']),
                       'type':get_type(q['question']),'source':'board_paper',
                       'isImportant':False,'frequency':1})
        qid+=1
    print(f"  {yr}: {len(qs)}")

# Deduplicate
seen={}; final=[]
for q in all_qs:
    k=q['question'].lower().strip()[:120]
    if k not in seen: seen[k]=True; final.append(q)

# Frequency
fmap={}
for q in final:
    k=q['question'].lower().strip()[:80]; fmap[k]=fmap.get(k,0)+1
for q in final:
    q['frequency']=fmap[q['question'].lower().strip()[:80]]

years=sorted(set(q['year'] for q in final if q['year']))
out={'questions':final,'chapters':CHAPTERS,'totalQuestions':len(final),'years':years}
with open('/home/user/Chemistrypyqs/src/data/questions.json','w',encoding='utf-8') as f:
    json.dump(out,f,ensure_ascii=False)

print(f"\n{'='*50}")
print(f"TOTAL: {len(final)} questions (current 2026-27 syllabus only)")
by_ch={}
for q in final: by_ch[q['chapter']]=by_ch.get(q['chapter'],0)+1
for ch in sorted(by_ch): print(f"  Ch{ch} {CHAPTERS[ch]['name'][:40]}: {by_ch[ch]}")
