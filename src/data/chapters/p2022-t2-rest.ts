import type { Question } from "@/types";

/**
 * CBSE 2022 Term-II, papers 56/3/1, 56/4/1 and 56/5/1, with answers from the
 * official Marking Schemes bound into the same PDFs.
 *
 * Only the questions the bank did not already cover are here. The three papers
 * set 42 questions between them; each candidate was checked against the bank
 * before it was written, and 25 were dropped — as repeats of one another, of
 * the 2023 codes, or of the curated chapters — leaving the 17 below.
 *
 * Surface Chemistry went in the rationalisation and is not in the 2026-27
 * syllabus, so the colloid and adsorption questions (56/3/1 Q7, 56/4/1 Q8,
 * 56/5/1 Q6) are left out rather than transcribed.
 */
export const P2022_REST: Question[] = [
  /* ---------------------------------------------------------------- */
  /* 56/3/1                                                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p22c-1",
    chapter: 9,
    type: "very-short",
    marks: 2,
    difficulty: "hard",
    topic: "Amine identification",
    years: [2022],
    question:
      "An organic compound (A) with molecular formula C3H7NO on heating with Br2 and KOH forms a compound (B). Compound (B) on heating with CHCl3 and alcoholic KOH produces a foul smelling compound (C) and on reacting with C6H5SO2Cl forms a compound (D) which is soluble in alkali. Write the structures of (A), (B), (C) and (D).",
    answer: [
      {
        table: [
          ["Compound", "Name", "Structure"],
          ["A", "Propanamide", "CH3CH2CONH2"],
          ["B", "Ethanamine", "CH3CH2NH2"],
          ["C", "Ethyl isocyanide", "CH3CH2NC"],
          ["D", "N-Ethylbenzenesulphonamide", "C6H5SO2NHCH2CH3"],
        ],
      },
      {
        label: "Step 1 — Br2 and KOH names the reaction",
        text: "Bromine with alkali on an amide is the **Hofmann bromamide degradation**, which gives a primary amine with **one carbon fewer**. A has three carbons and the formula C3H7NO fits **propanamide**:",
      },
      { equation: "CH3CH2CONH2 + Br2 + 4KOH -> CH3CH2NH2 + K2CO3 + 2KBr + 2H2O" },
      {
        label: "Step 2 — the foul smell is the carbylamine test",
        text: "Chloroform with alcoholic KOH on a **primary** amine gives an isocyanide, whose smell is the point of the test:",
      },
      { equation: "CH3CH2NH2 + CHCl3 + 3KOH ->[Δ] CH3CH2NC + 3KCl + 3H2O" },
      {
        text: "So **C is ethyl isocyanide** — and the reaction working at all already proves B is primary, since secondary and tertiary amines give no carbylamine.",
      },
      {
        label: "Step 3 — the Hinsberg test confirms it",
        text: "Benzenesulphonyl chloride gives a sulphonamide that still carries **one hydrogen on nitrogen**. Those two flanking S=O groups make that hydrogen acidic, so the product dissolves in alkali:",
      },
      { equation: "CH3CH2NH2 + C6H5SO2Cl -> C6H5SO2NHCH2CH3 + HCl" },
      {
        text: "Solubility in alkali is the signature of a **primary** amine in the Hinsberg test. A secondary amine's product has no N–H and stays insoluble; a tertiary amine does not react at all.",
      },
      {
        text: "The two tests agree, which is what makes the identification safe: both the carbylamine smell and the alkali-soluble sulphonamide point to a primary amine.",
      },
    ],
    keyPoint:
      "Br2/KOH on an amide shortens the chain by one; carbylamine and an alkali-soluble Hinsberg product both mark a primary amine.",
  },
  {
    id: "p22c-2",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of carbonyl compounds",
    years: [2022],
    question:
      "What happens when\n(i) Propanone is treated with CH3MgBr and then hydrolysed ?\n(ii) Ethanal is treated with excess ethanol and acid ?\n(iii) Methanal undergoes Cannizzaro reaction ?",
    answer: [
      {
        label: "(i) Propanone with methylmagnesium bromide",
        text: "A **tertiary alcohol**, 2-methylpropan-2-ol, is formed. The Grignard adds its methyl group to the carbonyl carbon and hydrolysis supplies the hydrogen:",
      },
      {
        equations: [
          "(CH3)2C=O + CH3MgBr -> (CH3)3C–OMgBr",
          "(CH3)3C–OMgBr + H2O -> (CH3)3C–OH + Mg(OH)Br",
        ],
      },
      {
        text: "A **ketone always gives a tertiary alcohol** this way, because the carbonyl carbon already carries two alkyl groups before the Grignard adds its third.",
      },
      {
        label: "(ii) Ethanal with excess ethanol and acid",
        text: "An **acetal** is formed — 1,1-diethoxyethane. The reaction goes in two steps through the hemiacetal:",
      },
      {
        equations: [
          "CH3CHO + C2H5OH ->[dry HCl] CH3CH(OH)OC2H5   (hemiacetal)",
          "CH3CH(OH)OC2H5 + C2H5OH ->[dry HCl] CH3CH(OC2H5)2 + H2O   (acetal)",
        ],
      },
      {
        text: "**Excess** alcohol is what drives it past the hemiacetal to the acetal. Acetals are stable to base but hydrolyse back in acid, which is why they are used to **protect** a carbonyl group while something else in the molecule is reacted.",
      },
      {
        label: "(iii) Methanal in the Cannizzaro reaction",
        text: "Methanal has **no α-hydrogen**, so concentrated alkali makes it disproportionate — one molecule is reduced and another oxidised:",
      },
      { equation: "2HCHO + conc. NaOH -> CH3OH + HCOONa" },
      {
        text: "The products are **methanol** and **sodium formate** (sodium methanoate). Methanal is the simplest possible case, since both halves of the disproportionation come from the same one-carbon molecule.",
      },
    ],
    keyPoint:
      "Ketone + Grignard gives a 3° alcohol; excess alcohol gives an acetal; no α-hydrogen gives Cannizzaro.",
  },
  {
    id: "p22c-3",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Preparation of carbonyl compounds",
    years: [2022],
    question:
      "Write the main product in the following reactions :\n(i) 2CH3COCl + (CH3)2Cd -> ?\n(ii) CH3CH2CHO ->[Zn(Hg) / conc. HCl] ?\n(iii) C6H5COONa + NaOH ->[CaO][Δ] ?",
    answer: [
      {
        label: "(i) Acyl chloride with dialkyl cadmium",
        text: "**Propanone**, CH3COCH3. The cadmium reagent transfers a methyl group to the acyl carbon:",
      },
      { equation: "2CH3COCl + (CH3)2Cd -> 2CH3COCH3 + CdCl2" },
      {
        text: "Dialkyl cadmium is used instead of a Grignard because it is **much less reactive** and stops cleanly at the ketone. A Grignard would carry straight on and give a tertiary alcohol.",
      },
      {
        label: "(ii) Propanal with zinc amalgam and concentrated HCl",
        text: "**Propane.** This is the **Clemmensen reduction**, which takes the carbonyl all the way to a methylene group:",
      },
      { equation: "CH3CH2CHO + 4[H] ->[Zn(Hg)][conc. HCl] CH3CH2CH3 + H2O" },
      {
        text: "Wolff–Kishner reduction does the same conversion in **base** (NH2NH2 then KOH/glycol), and is the alternative when the molecule cannot survive strong acid.",
      },
      {
        label: "(iii) Sodium benzoate with soda lime",
        text: "**Benzene.** Sodium hydroxide with calcium oxide decarboxylates the salt, replacing –COONa with –H:",
      },
      { equation: "C6H5COONa + NaOH ->[CaO][Δ] C6H6 + Na2CO3" },
      {
        text: "The product has **one carbon fewer** than the salt. The CaO keeps the alkali dry and stops it attacking the glass — soda lime is the mixture, not a separate reagent.",
      },
    ],
    keyPoint:
      "R2Cd stops at the ketone where a Grignard would not; Clemmensen removes the carbonyl oxygen; soda lime removes the carboxyl carbon.",
  },
  {
    id: "p22c-4",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Carbonyl reactivity and derivatives",
    years: [2022],
    question:
      "(i) Which will undergo faster nucleophilic addition reaction ?\nAcetaldehyde or Propanone\n(ii) What is the composition of Fehling's reagent ?\n(iii) Draw structure of the semicarbazone of Ethanal.",
    answer: [
      {
        label: "(i) Which adds faster",
        text: "**Acetaldehyde** (ethanal), because it carries **one** alkyl group where propanone carries two.",
      },
      {
        table: [
          ["", "Acetaldehyde, CH3CHO", "Propanone, CH3COCH3"],
          ["Groups on the carbonyl carbon", "One CH3, one H", "Two CH3"],
          ["Electron density pushed in (+I)", "Less", "More"],
          ["Positive charge on the carbon", "Larger", "Smaller"],
          ["Steric hindrance to attack", "Less", "More"],
          ["Rate of nucleophilic addition", "**Faster**", "Slower"],
        ],
      },
      {
        text: "Both effects point the same way, which is why **aldehydes are always more reactive than ketones** towards nucleophilic addition. The full order is HCHO > CH3CHO > CH3COCH3 > C6H5COCH3.",
      },
      {
        label: "(ii) Composition of Fehling's reagent",
        text: "Fehling's reagent is made by mixing **equal volumes** of two solutions, immediately before use:",
      },
      {
        table: [
          ["Solution", "Contents"],
          ["Fehling's A", "Aqueous copper(II) sulphate, CuSO4"],
          ["Fehling's B", "Alkaline sodium potassium tartrate — Rochelle salt — in NaOH"],
        ],
      },
      {
        text: "The tartrate **complexes the Cu^2+** and keeps it in solution, which is why no hydroxide precipitates from the alkali. An aliphatic aldehyde reduces that copper(II) to a red-brown precipitate of **Cu2O**:",
      },
      { equation: "RCHO + 2Cu^2+ + 5OH^− -> RCOO^− + Cu2O↓ + 3H2O" },
      {
        label: "(iii) Semicarbazone of ethanal",
        text: "Semicarbazide, NH2–NH–CO–NH2, condenses at the carbonyl and water is lost:",
      },
      { equation: "CH3CHO + NH2NHCONH2 -> CH3CH=N–NH–CO–NH2 + H2O" },
      {
        text: "The structure is **CH3CH=N–NH–CO–NH2**: the former carbonyl carbon keeps its methyl and hydrogen, is now doubly bonded to nitrogen, and that nitrogen links through –NH– to the carbonyl of the remaining amide group.",
      },
      {
        text: "Note which nitrogen reacts. Semicarbazide has three, but only the **terminal –NH2 of the hydrazine part** is nucleophilic enough — the other two have their lone pairs delocalised into the C=O.",
      },
    ],
    keyPoint:
      "Fewer and smaller groups on the carbonyl means faster addition; Fehling's is CuSO4 plus alkaline Rochelle salt.",
  },
  {
    id: "p22c-5",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Radiocarbon dating",
    years: [2022],
    question:
      "The half life for radioactive decay of 14C is 6930 years. An archaeological artifact containing wood had only 75% of the 14C found in a living tree. Find the age of the sample.\n[log 4 = 0·6021, log 3 = 0·4771, log 2 = 0·3010, log 10 = 1]",
    answer: [
      {
        text: "Radioactive decay is **first order**, so start by getting the rate constant from the half-life:",
      },
      { equation: "$k = \\dfrac{0.693}{t_{1/2}} = \\dfrac{0.693}{6930} = 1.0 \\times 10^{-4}\\ \\text{year}^{-1}$" },
      { text: "Now use the first order integrated equation. 75 % of the original 14C remains, so [R]0/[R] = 100/75 = 4/3:" },
      { equation: "$t = \\dfrac{2.303}{k}\\log\\dfrac{[R]_0}{[R]}$" },
      { equation: "$t = \\dfrac{2.303}{1.0 \\times 10^{-4}}\\log\\dfrac{100}{75} = \\dfrac{2.303}{10^{-4}}\\log\\dfrac{4}{3}$" },
      { text: "The logarithm comes from the values supplied:" },
      { equation: "$\\log\\dfrac{4}{3} = \\log 4 - \\log 3 = 0.6021 - 0.4771 = 0.1250$" },
      { equation: "$t = 2.303 \\times 10^{4} \\times 0.1250 = 2.88 \\times 10^{3}\\ \\text{years}$" },
      {
        text: "So the artifact is about **2880 years old**.",
      },
      {
        text: "Read the percentage carefully — **75 % remaining** is not 75 % decayed. The ratio is 100/75, not 100/25, and getting that backwards gives 13 860 years instead. A sanity check: losing only a quarter of the carbon should take well under one half-life of 6930 years, and 2880 is. ✓",
      },
      {
        text: "Carbon-14 dating works because a living organism keeps exchanging carbon with its surroundings and holds the atmospheric 14C level. That exchange stops at death, after which the 14C only decays.",
      },
    ],
    keyPoint:
      "Decay is first order: get k from 0.693/t½, then t = (2.303/k) log([R]0/[R]) with the fraction that remains.",
  },
  {
    id: "p22c-6",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Oxidation states",
    years: [2022],
    question:
      "Define transition metals. Why are Zn, Cd and Hg not called transition metals ? How is the variability in oxidation states of transition metals different from that of p-block elements ?",
    answer: [
      {
        label: "Definition",
        text: "**A transition metal is an element whose atom, or any of its stable ions, has a partially filled d subshell.** They occupy the d block, between the s-block and p-block elements.",
      },
      {
        label: "Why Zn, Cd and Hg are excluded",
        text: "Because their d subshell is **full in the ground state and stays full in the oxidised state**:",
      },
      {
        equations: [
          "Zn : [Ar] 3d^10 4s^2   ->   Zn^2+ : [Ar] 3d^10",
          "Cd : [Kr] 4d^10 5s^2   ->   Cd^2+ : [Kr] 4d^10",
          "Hg : [Xe] 4f^14 5d^10 6s^2   ->   Hg^2+ : [Xe] 4f^14 5d^10",
        ],
      },
      {
        text: "Each loses only its two s electrons, so no partially filled d subshell ever exists. They sit in the d block but fail the definition, and accordingly show none of the usual behaviour — they are **colourless, diamagnetic**, and limited to +2.",
      },
      {
        label: "How the variability differs from the p block",
        text: "In a **transition metal** the oxidation states differ by **one** and arise from losing a varying number of d electrons in addition to the s electrons; in a **p-block** element they differ by **two**, because electrons are lost in pairs from the p subshell.",
      },
      {
        table: [
          ["", "Transition metals", "p-block elements"],
          ["States differ by", "One — +2, +3, +4, +5, +6, +7", "Two — +2 and +4, or +3 and +5"],
          ["Electrons involved", "(n−1)d and ns, close in energy", "np then ns"],
          ["Example", "Mn : +2, +3, +4, +6, +7", "Sn : +2 and +4; Pb : +2 and +4"],
          ["Trend down the group", "Higher states become more stable", "Lower state becomes more stable (inert pair effect)"],
        ],
      },
      {
        text: "The reason is that the **(n−1)d and ns orbitals are very close in energy**, so a transition metal can release its d electrons one at a time. In the p block the **inert pair effect** keeps the ns² pair together, which is why tin and lead jump straight from +2 to +4.",
      },
    ],
    keyPoint:
      "Transition oxidation states step by one because d and s are close in energy; p-block states step by two because of the inert pair.",
  },
  /* ---------------------------------------------------------------- */
  /* 56/4/1                                                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p22d-1",
    chapter: 8,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Reactivity of carbonyl compounds",
    years: [2022],
    question:
      "Write reasons for the following statements :\n(i) Benzoic acid does not undergo Friedel-Crafts reaction.\n(ii) Oxidation of aldehydes is easier than that of ketones.",
    answer: [
      {
        label: "(i) Why benzoic acid resists Friedel–Crafts",
        text: "Two reasons act together, and either earns the mark.",
      },
      {
        points: [
          "The **–COOH group is strongly deactivating**. It withdraws electron density from the ring by both –I and –R, leaving it too electron-poor for an electrophile to attack.",
          "The **carboxyl group binds the AlCl3 catalyst**. Its lone pairs complex the Lewis acid, so the catalyst is tied up and the ring carries an even stronger electron-withdrawing group than before.",
        ],
      },
      {
        text: "The pattern is general: Friedel–Crafts fails on any ring carrying a strongly deactivating group — –NO2, –CN, –SO3H, –COOH — and also on aniline, for the catalyst-binding reason alone.",
      },
      {
        label: "(ii) Why aldehydes oxidise more easily",
        text: "Because the carbonyl carbon of an aldehyde carries a **hydrogen**, and oxidation only has to break that **C–H bond**. A ketone has carbon on both sides, so oxidising it means breaking a **C–C bond**:",
      },
      {
        table: [
          ["", "Aldehyde, RCHO", "Ketone, RCOR'"],
          ["On the carbonyl carbon", "H and R", "R and R'"],
          ["Bond broken", "C–H", "C–C"],
          ["Conditions", "Mild — Tollens', Fehling's, Br2 water", "Vigorous — hot conc. KMnO4"],
          ["Product", "One acid, same carbon count", "A mixture of shorter acids"],
        ],
      },
      { equation: "RCHO ->[[O]] RCOOH" },
      {
        text: "This difference is exactly what **Tollens' and Fehling's reagents exploit**: they are mild enough to take a C–H but not a C–C, so they give a positive result with aldehydes and none with ketones.",
      },
    ],
    keyPoint:
      "Deactivating groups and AlCl3-binding both block Friedel–Crafts; aldehydes oxidise easily because only a C–H has to break.",
  },
  {
    id: "p22d-2",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Magnetic behaviour of complexes",
    years: [2022],
    question:
      "(i) [Fe(CN)6]^3− is weakly paramagnetic whereas [Fe(CN)6]^4− is diamagnetic. Give reason to support this statement. [Atomic no. : Fe = 26]\n(ii) Write the number of ions produced from the complex [Co(NH3)6]Cl2 in solution.",
    answer: [
      {
        label: "(i) The two hexacyanoferrates",
        text: "The difference is **one electron**. Cyanide is a strong field ligand in both, so pairing is forced in both — but only the iron(II) complex ends up with every electron paired.",
      },
      {
        table: [
          ["Complex", "Iron oxidation state", "d config", "t2g / eg", "Unpaired e^−", "Behaviour"],
          ["[Fe(CN)6]^3−", "+3", "d^5", "t2g^5 eg^0", "1", "Weakly paramagnetic"],
          ["[Fe(CN)6]^4−", "+2", "d^6", "t2g^6 eg^0", "0", "Diamagnetic"],
        ],
      },
      {
        text: "Work out the oxidation state from the charge. Six cyanides at −1 give −6, so for the 3− ion x − 6 = −3 → **x = +3**, and for the 4− ion x − 6 = −4 → **x = +2**.",
      },
      {
        equations: [
          "Fe (Z = 26) : [Ar] 3d^6 4s^2",
          "Fe^3+ : [Ar] 3d^5   ->   strong field pairs them into t2g, leaving 1 unpaired",
          "Fe^2+ : [Ar] 3d^6   ->   strong field fills t2g completely, leaving 0 unpaired",
        ],
      },
      {
        text: "**CN^− is a strong field ligand**, so Δ_o > P and electrons pair in the lower t2g set before entering eg. With d^5 that leaves one electron unpaired — hence **weakly** paramagnetic, μ = √3 ≈ 1.73 BM. With d^6 the t2g set is exactly filled and μ = 0.",
      },
      {
        text: "The word **weakly** is doing real work here: a _(weak)_ field ligand on Fe^3+ would leave all five unpaired at 5.92 BM. One unpaired electron against five is what identifies the strong field.",
      },
      {
        label: "(ii) Ions from [Co(NH3)6]Cl2",
        text: "**Three ions.**",
      },
      { equation: "[Co(NH3)6]Cl2 -> [Co(NH3)6]^2+ + 2Cl^−" },
      {
        text: "Only the chlorides **outside** the square brackets ionise — one complex cation plus two chloride anions. The six ammonia molecules stay coordinated to the cobalt and never appear as separate species, which is why the count is 3 and not 9.",
      },
    ],
    keyPoint:
      "Strong field CN^− pairs electrons, so d^5 keeps one unpaired and d^6 none; only species outside the brackets ionise.",
  },
  {
    id: "p22d-3",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Colour and oxidation states",
    years: [2022],
    question:
      "(i) Which ion amongst the following is colourless and why ?\nTi^4+, Cr^3+, V^3+  (Atomic number of Ti = 22, Cr = 24, V = 23)\n(ii) Why is Mn^2+ much more resistant than Fe^2+ towards oxidation ?\n(iii) Highest oxidation state of a metal is shown in its oxide or fluoride only. Justify the statement.",
    answer: [
      {
        label: "(i) The colourless ion",
        text: "**Ti^4+**, because it has **no d electrons at all** — a d^0 configuration — so no d–d transition is possible.",
      },
      {
        table: [
          ["Ion", "Configuration", "Unpaired d electrons", "Colour"],
          ["Ti^4+", "[Ar] 3d^0", "0", "Colourless"],
          ["V^3+", "[Ar] 3d^2", "2", "Green"],
          ["Cr^3+", "[Ar] 3d^3", "3", "Violet"],
        ],
      },
      {
        text: "Colour in a transition metal ion comes from an electron absorbing visible light and jumping between d levels split by the ligand field. That needs **both an electron to promote and a vacancy to receive it**. Ti^4+ has lost all four of its outer electrons (3d² 4s²) and has nothing to promote, so it absorbs no visible light.",
      },
      {
        text: "The same reasoning makes Sc^3+ (d^0) and Zn^2+ (d^10) colourless — the two ends of the series fail for opposite reasons.",
      },
      {
        label: "(ii) Why Mn^2+ resists oxidation",
        text: "Because Mn^2+ has the **stable half-filled d^5 configuration**, which it would have to break to be oxidised:",
      },
      {
        equations: [
          "Mn^2+ : [Ar] 3d^5   ->   Mn^3+ : [Ar] 3d^4   (stability lost)",
          "Fe^2+ : [Ar] 3d^6   ->   Fe^3+ : [Ar] 3d^5   (stability gained)",
        ],
      },
      {
        text: "Iron(II) moves **towards** d^5 on oxidation and so oxidises readily; manganese(II) would move **away** from it. The E° values say the same thing: +1.51 V for Mn^3+/Mn^2+ against only +0.77 V for Fe^3+/Fe^2+, so Mn^3+ is a far stronger oxidising agent and Mn^2+ correspondingly hard to make.",
      },
      {
        label: "(iii) Why the highest state needs oxygen or fluorine",
        text: "Because reaching the highest oxidation state requires the metal to be stripped of the most electrons, and only the **most electronegative and smallest** elements can do it.",
      },
      {
        points: [
          "**Fluorine and oxygen have the highest electronegativities**, so they pull electron density away from the metal most effectively.",
          "Both are **small**, so several of them can pack around one metal atom — six fluorines or four oxygens.",
          "Oxygen has the extra advantage of being able to form **multiple bonds** to the metal, so each oxygen stabilises two units of oxidation state rather than one.",
        ],
      },
      {
        text: "That is why manganese reaches +7 only in **MnO4^−** and **Mn2O7**, chromium +6 only in **CrO4^2−** and **CrO2Cl2**, and osmium +8 only in **OsF8** and **OsO4** — never with chlorine or bromine, which are larger and less electronegative.",
      },
    ],
    keyPoint:
      "d^0 and d^10 are colourless; d^5 stability makes Mn^2+ hard to oxidise; only small, highly electronegative O and F support the top oxidation states.",
  },
  {
    id: "p22d-4",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Carbonyl identification",
    years: [2022],
    question:
      "A compound 'A' (C2H4O) on oxidation gives 'B' (C2H4O2). 'A' undergoes Iodoform reaction to give yellow precipitate and reacts with HCN to form the compound 'C'. 'C' on hydrolysis gives 2-hydroxypropanoic acid. Identify the compounds 'A', 'B' and 'C'. Write down equations for the reactions involved.",
    answer: [
      {
        table: [
          ["Compound", "Name", "Structure"],
          ["A", "Ethanal (acetaldehyde)", "CH3CHO"],
          ["B", "Ethanoic acid (acetic acid)", "CH3COOH"],
          ["C", "2-Hydroxypropanenitrile", "CH3CH(OH)CN"],
        ],
      },
      {
        label: "Step 1 — the formula and the iodoform clue fix A",
        text: "C2H4O could be ethanal or ethylene oxide. The **positive iodoform test** settles it: the test needs a CH3 group attached to a carbonyl (or to a CH–OH), and ethanal has exactly that.",
      },
      { equation: "CH3CHO + 3I2 + 4NaOH -> CHI3↓ + HCOONa + 3NaI + 3H2O" },
      {
        label: "Step 2 — oxidation gives B",
        text: "An aldehyde oxidises to the acid with the **same carbon count**, and C2H4O2 is ethanoic acid:",
      },
      { equation: "CH3CHO ->[[O]] CH3COOH" },
      {
        label: "Step 3 — HCN adds to give C",
        text: "Hydrogen cyanide adds across the carbonyl — nucleophilic addition of CN^− followed by protonation — to give a **cyanohydrin**:",
      },
      { equation: "CH3CHO + HCN -> CH3CH(OH)CN" },
      {
        label: "Step 4 — hydrolysis confirms the chain",
        text: "The nitrile group hydrolyses to a carboxyl, and the count works out: two carbons from ethanal plus one from the cyanide gives **three**, with the –OH on C-2:",
      },
      { equation: "CH3CH(OH)CN + 2H2O ->[H^+] CH3CH(OH)COOH + NH3" },
      {
        text: "That product is **2-hydroxypropanoic acid** — lactic acid — exactly as the question states, which confirms the whole chain.",
      },
      {
        text: "The cyanohydrin route is the standard way to **lengthen a carbon chain by one** while installing a hydroxyl group, and this question is built around checking that the carbon count comes out right.",
      },
    ],
    keyPoint:
      "Iodoform marks the CH3–CO group; HCN gives a cyanohydrin that adds one carbon, and hydrolysis turns the nitrile into –COOH.",
  },
  {
    id: "p22d-5",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of amines",
    years: [2022],
    question:
      "Write equations involved in the following reactions :\n(i) Ethanamine reacts with acetyl chloride.\n(ii) Aniline reacts with bromine water at room temperature.\n(iii) Aniline reacts with chloroform and ethanolic potassium hydroxide.",
    answer: [
      {
        label: "(i) Ethanamine with acetyl chloride — acylation",
        text: "The amine's lone pair attacks the acyl carbon and HCl is eliminated, giving a **substituted amide**:",
      },
      { equation: "CH3CH2NH2 + CH3COCl ->[pyridine] CH3CH2NHCOCH3 + HCl" },
      {
        text: "The product is **N-ethylethanamide**. A base such as pyridine is usually present to mop up the HCl, which would otherwise protonate the starting amine and stop the reaction. Acetic anhydride does the same job.",
      },
      {
        label: "(ii) Aniline with bromine water — tribromination",
        text: "All three activated positions react at once, giving a **white precipitate** of 2,4,6-tribromoaniline:",
      },
      { equation: "C6H5NH2 + 3Br2 -> C6H2Br3NH2↓ + 3HBr" },
      {
        text: "No catalyst is needed and the reaction cannot be stopped at one substitution, because **–NH2 is so strongly activating**. Getting the monobromo product means acetylating the nitrogen first, brominating, then hydrolysing the amide off.",
      },
      {
        label: "(iii) Aniline with chloroform and alcoholic KOH — carbylamine",
        text: "A **primary** amine gives an isocyanide with an extremely unpleasant smell:",
      },
      { equation: "C6H5NH2 + CHCl3 + 3KOH ->[Δ] C6H5NC + 3KCl + 3H2O" },
      {
        text: "The product is **phenyl isocyanide**. This is the **carbylamine test**, and it is specific: secondary and tertiary amines give no reaction, so the smell alone identifies a primary amine.",
      },
      {
        text: "Two of these three are diagnostic rather than preparative — the tribromo precipitate and the carbylamine smell both report on what the amine _(is)_, while the acylation is a genuine synthesis.",
      },
    ],
    keyPoint:
      "Acyl chloride acylates the nitrogen; bromine water tribrominates the ring; CHCl3 with alkali marks a primary amine.",
  },
  {
    id: "p22d-6",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Transition element properties",
    years: [2022],
    question:
      "(i) Silver atom has completely filled d-orbitals in its ground state, it is still considered to be a transition element. Justify the statement.\n(ii) Why are E°(M^2+/M) values of Mn and Zn more negative than expected ?\n(iii) Why do transition metals form alloys ?",
    answer: [
      {
        label: "(i) Why silver counts as a transition element",
        text: "Because the definition allows **either the atom or a stable ion** to have a partially filled d subshell — and silver's **+2 ion is 4d^9**:",
      },
      {
        equations: [
          "Ag (Z = 47) : [Kr] 4d^10 5s^1   ->   full in the ground state",
          "Ag^2+ : [Kr] 4d^9   ->   partially filled",
        ],
      },
      {
        text: "Silver does form compounds in the +2 state, such as **AgO** and AgF2, so the d^9 ion is real rather than hypothetical. That satisfies the definition.",
      },
      {
        text: "Compare zinc, where the +2 ion is the only one and it is d^10 — full in both the atom and the ion, so zinc fails the test. Copper is the closer parallel: 3d^10 4s^1 as an atom, but Cu^2+ is 3d^9.",
      },
      {
        label: "(ii) Why Mn and Zn are unexpectedly negative",
        text: "Because of the **extra stability of the resulting M^2+ ion** — a half-filled shell for manganese and a full one for zinc:",
      },
      {
        table: [
          ["Metal", "M^2+ configuration", "Why it is favourable", "E°(M^2+/M)"],
          ["Mn", "3d^5", "Half-filled — extra stable", "−1.18 V"],
          ["Zn", "3d^10", "Completely filled — extra stable", "−0.76 V"],
        ],
      },
      {
        text: "A more stable product ion means the metal gives up its two electrons more readily, so the oxidation is more favourable and E° for the **reduction** correspondingly more negative. Both values sit well below the smooth trend their neighbours follow.",
      },
      {
        label: "(iii) Why they form alloys",
        text: "Because transition metals have **very similar atomic radii**, so one can replace another in the crystal lattice without disturbing it.",
      },
      {
        text: "Across a transition series the radius changes only slightly, since each added electron goes into an inner d orbital that shields the added nuclear charge fairly well. Atoms within about **15 %** of one another in size substitute freely, giving **substitutional alloys**.",
      },
      {
        points: [
          "**Brass** — copper with zinc.",
          "**Bronze** — copper with tin.",
          "**Stainless steel** — iron with chromium and nickel.",
        ],
      },
      {
        text: "Smaller non-metal atoms such as carbon fit into the gaps instead, giving **interstitial** compounds like steel — hard and high melting, because the trapped atoms block the metal layers from sliding.",
      },
    ],
    keyPoint:
      "A stable ion with a part-filled d shell is enough (Ag^2+ is d^9); d^5 and d^10 stability makes Mn and Zn extra negative; similar radii make alloys easy.",
  },
  {
    id: "p22d-7",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Enthalpy of atomisation",
    years: [2022],
    question:
      "(i) Which element in 3d series has lowest enthalpy of atomisation ?\n(ii) Why do metals of the second and third series have greater enthalpies of atomisation ?\n(iii) Why are enthalpies of atomisation of transition metals quite high ?",
    answer: [
      {
        label: "(i) Lowest in the 3d series",
        text: "**Zinc**, at about 126 kJ mol^−1 — the lowest in the series by a wide margin.",
      },
      {
        text: "Enthalpy of atomisation measures how strongly the atoms are held in the metallic lattice, and that depends on how many electrons each atom contributes to metallic bonding. Zinc's 3d subshell is **completely filled and therefore unavailable**, so only its two 4s electrons take part.",
      },
      {
        text: "This is also why zinc melts at 693 K while chromium, with six bonding electrons, melts at 2180 K.",
      },
      {
        label: "(ii) Why the 4d and 5d series are higher",
        text: "Because of **stronger metallic bonding**, from more effective **d orbital overlap** in the larger atoms — and, in the third series, the extra strength that comes with the **lanthanoid contraction**.",
      },
      {
        text: "The 4d and 5d orbitals are more diffuse and extend further from the nucleus, so neighbouring atoms overlap them more effectively. The lanthanoid contraction then pulls the 5d atoms in to almost the same size as the 4d, packing them tightly while keeping that overlap.",
      },
      {
        table: [
          ["Element", "Series", "Δ_aH° / kJ mol^−1"],
          ["Cr", "3d", "397"],
          ["Mo", "4d", "658"],
          ["W", "5d", "837"],
        ],
      },
      {
        text: "The practical consequence is that the heaviest transition metals are the most refractory — tungsten melts at 3695 K, which is why it is used for lamp filaments.",
      },
      {
        label: "(iii) Why they are high in general",
        text: "Because transition metals have a **large number of unpaired d electrons available for metallic bonding**, in addition to their s electrons.",
      },
      {
        text: "In a simple metal like sodium only the single 3s electron contributes. In a transition metal both the **(n−1)d and ns** electrons take part, so far more electrons are shared across the lattice and the bonding is much stronger. The atoms are also small, which brings the nuclei close to that shared electron cloud.",
      },
      {
        text: "The enthalpy therefore peaks in the **middle** of each series, where the maximum number of unpaired d electrons is available, and falls away at both ends.",
      },
    ],
    keyPoint:
      "More unpaired d electrons means stronger metallic bonding; zinc's full d shell makes it the weakest of the 3d series.",
  },
  /* ---------------------------------------------------------------- */
  /* 56/5/1                                                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p22e-1",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Chelates and ligand field strength",
    years: [2022],
    question:
      "(i) Why are chelate complexes more stable than complexes with unidentate ligands ?\n(ii) What is the \"spectrochemical series\" ? What is the difference between a weak field ligand and a strong field ligand ?",
    answer: [
      {
        label: "(i) Why chelates are more stable — the chelate effect",
        text: "Because a **polydentate ligand grips the metal at two or more points**, closing a ring. Breaking the complex apart requires **every bond of that ring to break at once**, which is far less likely than losing one unidentate ligand.",
      },
      {
        text: "There is also an **entropy** gain. One chelating ligand displaces several unidentate ones, so the number of free particles in solution rises and ΔS is positive:",
      },
      { equation: "[Ni(H2O)6]^2+ + 3en -> [Ni(en)3]^2+ + 6H2O" },
      {
        text: "Four particles on the left become seven on the right. With ΔG = ΔH − TΔS, that positive ΔS drives the formation constant up — about 10^18 for [Ni(en)3]^2+ against 10^9 for [Ni(NH3)6]^2+, even though the Ni–N bonds themselves are much the same.",
      },
      {
        text: "**Five- and six-membered rings are the most stable**, since they are free of ring strain. Ethane-1,2-diamine and oxalate both give five-membered rings, which is why they are the standard chelating ligands.",
      },
      {
        label: "(ii) The spectrochemical series",
        text: "**An arrangement of ligands in order of the size of the crystal field splitting, Δ_o, that they produce** — determined from the frequency of light the complexes absorb, hence 'spectro'.",
      },
      {
        equation:
          "I^− < Br^− < SCN^− < Cl^− < F^− < OH^− < C2O4^2− < H2O < NH3 < en < NO2^− < CN^− < CO",
      },
      {
        text: "The series runs from the weakest field on the left to the strongest on the right, with water sitting roughly in the middle.",
      },
      {
        table: [
          ["", "Weak field ligand", "Strong field ligand"],
          ["Splitting produced", "Small Δ_o", "Large Δ_o"],
          ["Δ_o against pairing energy P", "Δ_o < P", "Δ_o > P"],
          ["Electrons prefer to", "Occupy eg singly", "Pair up in t2g"],
          ["Resulting complex", "High spin", "Low spin"],
          ["Magnetism", "More paramagnetic", "Less paramagnetic or diamagnetic"],
          ["Examples", "I^−, Br^−, Cl^−, F^−, H2O", "NH3, en, NO2^−, CN^−, CO"],
        ],
      },
      {
        text: "The comparison that decides everything is **Δ_o against the pairing energy P**. If it costs less energy to promote an electron to eg than to pair it in t2g, the complex is high spin; if the reverse, it is low spin. This is why [FeF6]^3− is paramagnetic with five unpaired electrons while [Fe(CN)6]^3− has only one.",
      },
    ],
    keyPoint:
      "Chelation adds ring stability and an entropy gain; the spectrochemical series ranks Δ_o, and Δ_o against P decides high or low spin.",
  },
  {
    id: "p22e-2",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Amine identification",
    years: [2022],
    question:
      "A compound 'A' on reduction with iron scrap and hydrochloric acid gives compound 'B' with molecular formula C6H7N. Compound 'B' on reaction with CHCl3 and alcoholic KOH produces an obnoxious smell of carbylamine due to the formation of 'C'. Identify 'A', 'B' and 'C' and write the chemical reactions involved.",
    answer: [
      {
        table: [
          ["Compound", "Name", "Structure"],
          ["A", "Nitrobenzene", "C6H5NO2"],
          ["B", "Aniline", "C6H5NH2"],
          ["C", "Phenyl isocyanide", "C6H5NC"],
        ],
      },
      {
        label: "Step 1 — work back from the formula of B",
        text: "C6H7N with six carbons in a ring and one nitrogen is **aniline**. Iron scrap with hydrochloric acid is the industrial reduction of a **nitro** compound, so A must be nitrobenzene:",
      },
      { equation: "C6H5NO2 + 6[H] ->[Fe / HCl] C6H5NH2 + 2H2O" },
      {
        text: "Iron scrap is chosen over Sn/HCl on scale because it is cheap and the FeCl2 formed is **regenerated** by the HCl, so only a catalytic amount of acid is needed.",
      },
      {
        label: "Step 2 — the carbylamine reaction gives C",
        text: "Chloroform with alcoholic KOH converts a **primary** amine into an isocyanide, whose smell is the 'obnoxious' one the question refers to:",
      },
      { equation: "C6H5NH2 + CHCl3 + 3KOH ->[Δ] C6H5NC + 3KCl + 3H2O" },
      {
        text: "So **C is phenyl isocyanide**. The reagent that does the work is **dichlorocarbene, :CCl2**, generated in situ when the alkali removes a proton from chloroform.",
      },
      {
        text: "The test is **specific to primary amines** — secondary and tertiary amines give no reaction at all. So the fact that B responds confirms the –NH2 group independently of the formula.",
      },
      {
        label: "The two steps together",
        text: "This is the standard laboratory chain from an aromatic nitro compound to a characterised primary aromatic amine:",
      },
      {
        equations: [
          "C6H5NO2 ->[Fe / HCl] C6H5NH2",
          "C6H5NH2 ->[CHCl3 / alc. KOH] C6H5NC",
        ],
      },
    ],
    keyPoint:
      "Fe/HCl reduces a nitro group to an amine; the carbylamine smell then confirms that amine is primary.",
  },
  {
    id: "p22e-3",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Aldehyde preparation and tests",
    years: [2022],
    question:
      "Complete the following :\n(i) CH3CN ->[1. AlH(i-Bu)2][2. H2O] 'A' ->[H2N–OH / H^+] 'B'\n(ii) Write IUPAC name of 3-bromobenzaldehyde, drawn as a benzene ring carrying –CHO and –Br in the meta relationship.\n(iii) Write chemical test to distinguish between Phenol and Benzoic acid.",
    answer: [
      {
        label: "(i) The DIBAL-H sequence",
        text: "**A = ethanal, CH3CHO**  and  **B = ethanal oxime, CH3CH=N–OH.**",
      },
      {
        text: "**DIBAL-H**, diisobutylaluminium hydride, is a bulky reducing agent used at low temperature. It reduces a nitrile only as far as the **imine**, which the aqueous work-up then hydrolyses to the aldehyde:",
      },
      {
        equations: [
          "CH3CN ->[AlH(i-Bu)2] CH3CH=N–Al(i-Bu)2",
          "CH3CH=N–Al(i-Bu)2 + H2O -> CH3CHO + NH3",
        ],
      },
      {
        text: "That selectivity is the whole point — LiAlH4 would carry the reduction on to ethanamine. DIBAL-H does the same partial job on an ester, giving an aldehyde rather than an alcohol.",
      },
      { text: "Hydroxylamine then condenses at the carbonyl to give the oxime:" },
      { equation: "CH3CHO + NH2OH ->[H^+] CH3CH=N–OH + H2O" },
      {
        label: "(ii) IUPAC name",
        text: "**3-Bromobenzaldehyde**, also written _(m)_-bromobenzaldehyde.",
      },
      {
        text: "The –CHO group is the principal characteristic group, so it defines the parent **benzaldehyde** and takes C-1 automatically. Numbering round the ring to give the bromine the lowest locant places it at **C-3** — the meta position.",
      },
      {
        label: "(iii) Phenol against benzoic acid",
        text: "The **sodium bicarbonate test** is the decisive one:",
      },
      {
        table: [
          ["Reagent", "Phenol", "Benzoic acid"],
          ["NaHCO3 solution", "No reaction", "**Brisk effervescence** of CO2"],
          ["Neutral FeCl3", "**Violet colour**", "Buff-coloured precipitate"],
        ],
      },
      { equation: "C6H5COOH + NaHCO3 -> C6H5COONa + H2O + CO2↑" },
      {
        text: "Benzoic acid (pK_a 4.2) is strong enough to displace **carbonic acid** from its salt, so carbon dioxide fizzes off. Phenol (pK_a 10.0) is far too weak and does nothing — which is precisely the standard way of telling a carboxylic acid from a phenol.",
      },
      {
        text: "The neutral FeCl3 test works the other way round, giving the characteristic violet colour with phenol.",
      },
    ],
    keyPoint:
      "DIBAL-H stops a nitrile at the aldehyde; only a carboxylic acid is strong enough to fizz with NaHCO3.",
  },
  {
    id: "p22e-4",
    chapter: 2,
    type: "case-study",
    marks: 5,
    difficulty: "medium",
    topic: "Galvanic cells and conductivity",
    years: [2022],
    passage:
      "Oxidation-reduction reactions are commonly known as redox reactions. They involve transfer of electrons from one species to another. In a spontaneous reaction, energy is released which can be used to do useful work. The reaction is split into two half reactions. Two different containers are used and a wire is used to drive the electrons from one side to the other and a Voltaic/Galvanic cell is created. It is an electrochemical cell that uses spontaneous redox reactions to generate electricity. A salt bridge also connects to the half cells. The reading of the voltmeter gives the cell voltage or cell potential or electromotive force. If E°cell is positive the reaction is spontaneous and if it is negative the reaction is non-spontaneous and is referred to as electrolytic cell.\nThe conductance of material is the property of materials due to which a material allows the flow of ions through itself and thus conducts electricity. Conductivity is represented by κ and it depends upon nature and concentration of electrolyte, temperature etc. A more common term molar conductivity of a solution at a given concentration is conductance of the volume of solution containing one mole of electrolyte kept between two electrodes with the unit area of cross-section and distance of unit length.\nThe cell shown is a zinc plate in solution I and a silver plate in solution II, joined by a salt bridge, with Zn^2+ (aq) passing into solution I and Ag^+ (aq) being consumed in solution II.",
    question:
      "(a) Is silver plate the anode or cathode ?\n(b) What will happen if the salt bridge is removed ?\n(c) When does electrochemical cell behave like an electrolytic cell ?\n(d) (i) What will happen to the concentration of Zn^2+ and Ag^+ when E_cell = 0 ?\n(ii) Why does conductivity of a solution decrease with dilution ?",
    answer: [
      {
        label: "(a) Silver is the cathode",
        text: "Silver has the **more positive** standard potential — E°(Ag^+/Ag) = +0.80 V against E°(Zn^2+/Zn) = −0.76 V — so it is **reduced**, and reduction defines the cathode.",
      },
      {
        equations: [
          "Anode (zinc, oxidation) : Zn(s) -> Zn^2+(aq) + 2e^−",
          "Cathode (silver, reduction) : Ag^+(aq) + e^− -> Ag(s)",
          "Overall : Zn(s) + 2Ag^+(aq) -> Zn^2+(aq) + 2Ag(s)",
        ],
      },
      {
        text: "The diagram says the same thing: Zn^2+ is **entering** solution I as the zinc dissolves, and Ag^+ is being **removed** from solution II as silver plates out.",
      },
      {
        label: "(b) If the salt bridge is removed",
        text: "The **current stops** almost immediately and the voltmeter reads zero.",
      },
      {
        text: "The salt bridge does two things, and losing either is fatal. It **completes the circuit** by letting ions carry charge between the half cells, and it **maintains electrical neutrality** — without it the anode compartment builds up positive Zn^2+ and the cathode compartment is left with excess negative ions. That charge separation opposes further electron flow within moments.",
      },
      {
        label: "(c) When it behaves as an electrolytic cell",
        text: "When an **external voltage greater than E_cell** is applied in opposition. The cell reaction is then forced into reverse and the cell consumes electrical energy instead of producing it:",
      },
      {
        table: [
          ["Condition", "Behaviour"],
          ["E_ext < E_cell", "Galvanic — the spontaneous reaction runs"],
          ["E_ext = E_cell", "No current flows at all"],
          ["E_ext > E_cell", "**Electrolytic** — the reaction is driven backwards"],
        ],
      },
      {
        label: "(d)(i) The concentrations when E_cell = 0",
        text: "E_cell = 0 means the cell has reached **equilibrium** — it is a dead cell. At that point the **concentrations stop changing**: [Zn^2+] has risen to its maximum and [Ag^+] fallen to its minimum, and both stay constant thereafter.",
      },
      {
        equation:
          "$0 = E^\\circ_{cell} - \\dfrac{0.059}{2}\\log\\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{Ag^{+}}]^{2}} \\;\\Rightarrow\\; \\log\\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{Ag^{+}}]^{2}} = \\dfrac{2E^\\circ_{cell}}{0.059}$",
      },
      {
        text: "The ratio has reached **K_c**, so no net reaction occurs in either direction and no more current is drawn.",
      },
      {
        label: "(d)(ii) Why conductivity falls on dilution",
        text: "Because **conductivity is measured per unit volume**. Diluting the solution spreads the same ions through more solvent, so **fewer ions occupy each cubic centimetre** and less charge is carried across it.",
      },
      {
        text: "Note the contrast that this question is built on. **Molar conductivity** is measured per mole of electrolyte, and the volume containing that mole grows on dilution, so Λm **rises** while κ **falls**:",
      },
      { equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{c}$" },
      {
        table: [
          ["On dilution", "Conductivity κ", "Molar conductivity Λm"],
          ["Ions per unit volume", "Falls", "—"],
          ["Volume holding one mole", "—", "Rises"],
          ["Net effect", "**Decreases**", "**Increases**"],
        ],
      },
    ],
    keyPoint:
      "The more positive potential is the cathode; without the salt bridge charge builds up and current stops; κ falls on dilution while Λm rises.",
  },
];
