import type { Question } from "@/types";

/** Unit 9 — Amines (6 marks). */
export const CH09: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "n9-m1",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Diazonium salts",
    years: [2024],
    question:
      "The correct name of the reaction Ar–N2+X− + CuCN/KCN → Ar–CN + N2 is",
    options: [
      "Sandmeyer's reaction",
      "Gabriel phthalimide synthesis",
      "Gattermann reaction",
      "Carbylamine reaction",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Sandmeyer's reaction.** A diazonium salt is treated with the corresponding **cuprous halide or cyanide** dissolved in the halogen acid, and the –N2⁺ group is replaced with loss of nitrogen.",
      },
      {
        equations: [
          "Ar–N2^+Cl^− + CuCl/HCl -> Ar–Cl + N2",
          "Ar–N2^+Cl^− + CuBr/HBr -> Ar–Br + N2",
          "Ar–N2^+Cl^− + CuCN/KCN -> Ar–CN + N2",
        ],
      },
      { figure: { kind: "named", id: "benzenediazonium-chloride" } },
      {
        text: "The closely related **Gattermann reaction** uses copper powder with the halogen acid instead, and gives lower yields.",
      },
    ],
  },
  {
    id: "n9-m2",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Classification",
    years: [2024],
    question: "Identify the secondary amine from the given options.",
    options: [
      "(CH3)2CHNH2",
      "CH3NHCH(CH3)2",
      "(CH3)3CNH2",
      "CH3(CH2)2NH2",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) CH3NHCH(CH3)2.** Amines are classified by how many **hydrogens of ammonia have been replaced by alkyl groups** — not by the nature of the carbon attached.",
      },
      {
        table: [
          ["Class", "Structure", "Example here"],
          ["Primary", "R–NH2", "(CH3)2CHNH2, (CH3)3CNH2, CH3(CH2)2NH2"],
          ["Secondary", "R_2NH", "CH3NHCH(CH3)2 ✓"],
          ["Tertiary", "R_3N", "—"],
        ],
      },
      {
        text: "Note the trap: $(\\text{CH}_3)_3\\text{CNH}_2$ has a _(tertiary carbon)_ but is still a **primary amine**, because the nitrogen carries two hydrogens.",
      },
    ],
    keyPoint: "Classify amines by the substituents on **nitrogen**, not on carbon.",
  },
  {
    id: "n9-m3",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Preparation",
    years: [2023, 2020],
    question: "Amides can be converted into amines with one carbon less by the reaction named",
    options: [
      "Hoffmann bromamide degradation",
      "Ammonolysis",
      "Carbylamine reaction",
      "Gabriel phthalimide synthesis",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Hoffmann bromamide degradation.** An amide is treated with bromine in aqueous or alcoholic NaOH, and the product amine has **one carbon fewer** than the starting amide.",
      },
      { equation: "CH3CONH2 + Br2 + 4NaOH -> CH3NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        text: "The carbonyl carbon is lost as carbonate. The method gives a **pure primary amine** — no mixture of products, unlike ammonolysis.",
      },
    ],
  },
  {
    id: "n9-m4",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Preparation",
    years: [2025, 2020],
    question: "The best reagent for converting propanamide into propanamine is",
    options: [
      "excess H2",
      "Br2 in aqueous NaOH",
      "LiAlH4 / ether",
      "NaBH4",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) LiAlH4/ether.** Reduction of an amide by lithium aluminium hydride keeps **all the carbons**, converting –CONH2 into –CH2NH2:",
      },
      { equation: "CH3CH2CONH2 ->[LiAlH4][then H2O] CH3CH2CH2NH2" },
      {
        text: "Br2/NaOH would work too, but it is **Hoffmann degradation** and would give ethanamine (C2H5NH2) — one carbon short. NaBH4 is too mild to reduce an amide.",
      },
    ],
    keyPoint: "LiAlH4 keeps the carbon count; Hoffmann bromamide loses one carbon.",
  },
  {
    id: "n9-m5",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Preparation",
    years: [2023],
    question: "Which of the following would **not** be a good choice for reducing nitrobenzene to aniline?",
    options: ["LiAlH4", "H2/Ni", "Fe/HCl", "Sn/HCl"],
    correct: 0,
    answer: [
      {
        text: "**(a) LiAlH4.** It reduces a nitro group only as far as the **azo compound** (Ar–N=N–Ar), not all the way to the amine, so it is not a useful route to aniline.",
      },
      { text: "The standard reductions are:" },
      {
        equations: [
          "C6H5NO2 + 6[H] ->[Sn/conc. HCl] C6H5NH2 + 2H2O",
          "C6H5NO2 + 3H2 ->[Ni or Pd] C6H5NH2 + 2H2O",
        ],
      },
      { figure: { kind: "named", id: "aniline" } },
      {
        text: "**Fe/HCl** is preferred industrially because FeCl2 is hydrolysed to regenerate HCl, so only a catalytic amount of acid is needed.",
      },
    ],
  },
  {
    id: "n9-m6",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Diazonium salts",
    years: [2023],
    question:
      "When benzenediazonium chloride reacts with phenol, it forms a dye. This reaction is called",
    options: [
      "Diazotisation",
      "Coupling reaction",
      "Sandmeyer's reaction",
      "Gattermann reaction",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) Coupling reaction.** The diazonium ion is a weak electrophile, so it attacks only highly activated rings — phenol (in mildly alkaline medium) or aniline (in mildly acidic medium) — and always at the **para** position.",
      },
      { equation: "C6H5N2^+Cl^− + C6H5OH ->[OH^−, 273–278 K] p-HO–C6H4–N=N–C6H5" },
      {
        text: "The product is p-hydroxyazobenzene, an **orange dye**. With aniline the product is p-aminoazobenzene, a yellow dye. The intense colour comes from the extended conjugation across the –N=N– (azo) linkage.",
      },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "n9-ar1",
    chapter: 9,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Preparation",
    years: [2025, 2020],
    question:
      "**Assertion (A):** Aromatic primary amines cannot be prepared by Gabriel phthalimide synthesis.\n**Reason (R):** Aryl halides do not undergo nucleophilic substitution with the anion formed by phthalimide.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Gabriel synthesis depends on the potassium phthalimide anion attacking an alkyl halide by **SN2**.",
      },
      {
        text: "Aryl halides will not do this: the C–X bond has **partial double-bond character** from resonance with the ring, the carbon is **sp²**, and the electron-rich π cloud **repels** the incoming nucleophile. So the first step simply never happens, and aromatic primary amines such as aniline must be made another way — usually by reducing a nitro compound.",
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
    ],
  },
  {
    id: "n9-ar2",
    chapter: 9,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Basicity",
    years: [2025, 2023],
    question:
      "**Assertion (A):** Aniline is a weaker base than ethylamine.\n**Reason (R):** In aniline the lone pair on nitrogen is delocalised into the benzene ring.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** The basicity of an amine depends on how freely the nitrogen lone pair can be donated to a proton.",
      },
      {
        text: "In **aniline** that lone pair is delocalised into the π system of the ring — the molecule is a resonance hybrid of five structures — so the pair is much less available. Aniline also has an **sp²**-influenced, more electronegative nitrogen environment, and protonation destroys the resonance stabilisation.",
      },
      { figure: { kind: "named", id: "aniline-basicity" } },
      {
        text: "In **ethylamine** the lone pair is fully localised on nitrogen and is further enriched by the +I effect of the ethyl group. Hence K_b(ethylamine) ≈ 4.5 × 10⁻⁴ against K_b(aniline) ≈ 4.2 × 10⁻¹⁰.",
      },
    ],
  },

  /* ---------------- Very short ---------------- */
  {
    id: "n9-v1",
    chapter: 9,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Basicity",
    years: [2020, 2013],
    question: "Out of (CH3)3N and (CH3)2NH, which is more basic in aqueous solution? Why?",
    answer: [
      {
        text: "**(CH3)2NH** — dimethylamine, the secondary amine. In the gas phase the order would follow the +I effect (3° > 2° > 1°), but in **water** two more factors intervene:",
      },
      {
        points: [
          "**Solvation:** the conjugate acid $(\\text{CH}_3)_2\\text{NH}_2^+$ has two N–H hydrogens available for hydrogen bonding with water, so it is well stabilised. $(\\text{CH}_3)_3\\text{NH}^+$ has only one.",
          "**Steric hindrance:** three methyl groups crowd the nitrogen and hinder the approach of a proton.",
        ],
      },
      { text: "The net order in aqueous solution for methyl amines is therefore:" },
      { equation: "(CH3)2NH > CH3NH2 > (CH3)3N > NH3" },
    ],
  },
  {
    id: "n9-v2",
    chapter: 9,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2020],
    question:
      "Write an isomer of C3H9N that gives the foul smell of an isocyanide when treated with chloroform and ethanolic KOH.",
    answer: [
      {
        text: "**Propan-1-amine, CH3CH2CH2NH2** (or propan-2-amine). The **carbylamine reaction** is given only by **primary amines**:",
      },
      { equation: "CH3CH2CH2NH2 + CHCl3 + 3KOH ->[Δ] CH3CH2CH2NC + 3KCl + 3H2O" },
      {
        text: "The isocyanide (carbylamine) has an extremely offensive smell. Secondary and tertiary amines give no reaction, so this is a reliable test for a primary amine.",
      },
    ],
  },
  {
    id: "n9-v3",
    chapter: 9,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2020],
    question: "Write an isomer of C3H9N that does not react with Hinsberg's reagent.",
    answer: [
      {
        text: "**Trimethylamine, (CH3)3N.** Hinsberg's reagent (benzenesulphonyl chloride, C6H5SO2Cl) reacts only with amines that have an **N–H bond**. A tertiary amine has none, so it does not react at all.",
      },
      {
        table: [
          ["Amine", "Product with C6H5SO2Cl", "Behaviour with KOH"],
          ["Primary", "N-alkylbenzenesulphonamide", "**Soluble** (the N–H is acidic)"],
          ["Secondary", "N,N-dialkylbenzenesulphonamide", "**Insoluble** (no N–H left)"],
          ["Tertiary", "No reaction", "—"],
        ],
      },
    ],
  },

  /* ---------------- Short ---------------- */
  {
    id: "n9-s1",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2019, 2018, 2016],
    question:
      "Write equations for: (a) Hoffmann bromamide degradation, (b) the carbylamine reaction, (c) the coupling reaction.",
    answer: [
      {
        label: "(a) Hoffmann bromamide degradation",
        text: "Converts an amide into a primary amine with **one carbon fewer**:",
      },
      { equation: "R–CONH2 + Br2 + 4NaOH -> R–NH2 + Na2CO3 + 2NaBr + 2H2O" },
      { equation: "C6H5CONH2 + Br2 + 4NaOH -> C6H5NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        label: "(b) Carbylamine reaction",
        text: "A test for **primary amines only** — the product isocyanide has a revolting smell:",
      },
      { equation: "R–NH2 + CHCl3 + 3KOH ->[Δ] R–NC + 3KCl + 3H2O" },
      {
        label: "(c) Coupling reaction",
        text: "A diazonium salt attacks an activated ring at the para position, giving a coloured azo dye:",
      },
      { equation: "C6H5N2^+Cl^− + C6H5NH2 ->[mild acid] p-H2N–C6H4–N=N–C6H5 + HCl" },
    ],
  },
  {
    id: "n9-s2",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Basicity",
    years: [2025, 2023, 2017],
    question:
      "(a) Arrange in decreasing order of pK_b: aniline, p-nitroaniline, p-methylaniline.\n(b) Explain why (CH3)2NH is more basic than (CH3)3N in aqueous solution.",
    answer: [
      {
        label: "(a)",
        text: "A **larger pK_b means a weaker base**, so this is the reverse of the order of basic strength.",
      },
      { equation: "p-nitroaniline > aniline > p-methylaniline" },
      {
        points: [
          "**p-Nitroaniline** — the strongly electron-withdrawing –NO2 group pulls the lone pair further into the ring, making it least available. Weakest base, **highest** pK_b.",
          "**Aniline** — the reference.",
          "**p-Methylaniline** — the electron-donating –CH3 group (+I, hyperconjugation) pushes electron density toward nitrogen, making the lone pair more available. Strongest base of the three, **lowest** pK_b.",
        ],
      },
      { figure: { kind: "named", id: "aniline-basicity" } },
      {
        label: "(b)",
        text: "Three factors decide basicity in water, and they pull in different directions:",
      },
      {
        points: [
          "**+I effect** favours (CH3)3N — three methyl groups push more electron density onto N.",
          "**Solvation** favours (CH3)2NH — its conjugate acid $(\\text{CH}_3)_2\\text{NH}_2^+$ has two N–H bonds to hydrogen-bond with water, against only one for $(\\text{CH}_3)_3\\text{NH}^+$.",
          "**Steric hindrance** disfavours (CH3)3N — three bulky methyl groups block the proton's approach.",
        ],
      },
      {
        text: "In water the last two outweigh the first, so **(CH3)2NH is the stronger base**. (In the gas phase, with no solvent, the order reverses to (CH3)3N > (CH3)2NH > CH3NH2.)",
      },
    ],
    keyPoint: "In aqueous solution basicity = +I effect + solvation − steric hindrance.",
  },
  {
    id: "n9-s3",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of aniline",
    years: [2023, 2020, 2017, 2016],
    question:
      "Give reasons: (a) Aniline does not undergo the Friedel–Crafts reaction. (b) Acetylation of aniline reduces its activating effect. (c) Aniline on nitration gives a substantial amount of m-nitroaniline, even though –NH2 is o/p directing.",
    answer: [
      {
        label: "(a)",
        text: "Friedel–Crafts reactions need the Lewis acid **anhydrous AlCl3**. The lone pair on the nitrogen of aniline donates to AlCl3, forming an acid–base **complex**:",
      },
      { equation: "C6H5NH2 + AlCl3 -> C6H5N^+H2–Al^−Cl3" },
      {
        text: "The nitrogen now bears a **positive charge**, which strongly deactivates the ring toward electrophilic attack. The reaction therefore fails.",
      },
      {
        label: "(b)",
        text: "Acetylation converts –NH2 into –NHCOCH3. The nitrogen lone pair is now partly delocalised into the **carbonyl group** of the acetyl function as well as into the ring, so less of it reaches the ring. The group becomes only **moderately activating**.",
      },
      { equation: "C6H5NH2 + (CH3CO)2O -> C6H5NHCOCH3 + CH3COOH" },
      {
        text: "This is used deliberately: acetylation lets chemists carry out controlled **monosubstitution** (e.g. mono-bromination) instead of the uncontrolled trisubstitution that free aniline gives, and the –NH2 group is recovered afterwards by hydrolysis.",
      },
      {
        label: "(c)",
        text: "Nitration is done in strongly **acidic** medium, where most of the aniline is protonated to the **anilinium ion**, $\\text{C}_6\\text{H}_5\\text{NH}_3^+$. That positively charged group is strongly electron-withdrawing and therefore **meta directing**. So the product is a mixture: about 47% para, 51% meta and 2% ortho.",
      },
    ],
  },
  {
    id: "n9-s4",
    chapter: 9,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2025, 2014],
    question:
      "Arrange in increasing order of boiling point: (CH3)2NH, CH3CH2NH2, CH3CH2OH. Justify.",
    answer: [
      { equation: "(CH3)2NH < CH3CH2NH2 < CH3CH2OH" },
      {
        points: [
          "**(CH3)2NH (b.p. 280 K)** — a secondary amine with only **one N–H**, so the least extensive hydrogen bonding.",
          "**CH3CH2NH2 (b.p. 290 K)** — a primary amine with **two N–H** bonds, so more hydrogen bonding.",
          "**CH3CH2OH (b.p. 351 K)** — oxygen is **more electronegative** than nitrogen, so the O–H···O hydrogen bonds are considerably stronger than N–H···N ones.",
        ],
      },
      {
        text: "All three have similar molar masses, so the difference is entirely down to the strength and number of the hydrogen bonds.",
      },
    ],
  },
  {
    id: "n9-s5",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Diazonium salts",
    years: [2024, 2019, 2015],
    question:
      "How do you convert: (a) nitrobenzene to aniline, (b) aniline to phenol, (c) aniline to chlorobenzene?",
    answer: [
      { label: "(a) Reduction", equation: "C6H5NO2 + 6[H] ->[Sn/conc. HCl] C6H5NH2 + 2H2O" },
      { figure: { kind: "named", id: "aniline" } },
      {
        label: "(b) Aniline → phenol",
        text: "Diazotise, then hydrolyse by warming the aqueous solution:",
      },
      {
        equations: [
          "C6H5NH2 + NaNO2 + 2HCl ->[273–278 K] C6H5N2^+Cl^− + NaCl + 2H2O",
          "C6H5N2^+Cl^− + H2O ->[Δ, 283 K] C6H5OH + N2 + HCl",
        ],
      },
      { label: "(c) Aniline → chlorobenzene (Sandmeyer)", equation: "C6H5N2^+Cl^− ->[CuCl/HCl] C6H5Cl + N2" },
      {
        text: "**Note the temperature:** diazotisation must be done at **273–278 K (0–5 °C)**, because the diazonium salt decomposes above that.",
      },
    ],
  },
  {
    id: "n9-s6",
    chapter: 9,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Diazonium salts",
    years: [2025],
    question: "Why are diazonium salts of aromatic amines more stable than those of aliphatic amines?",
    answer: [
      {
        text: "In an **aryl** diazonium salt the –N2⁺ group is attached directly to the benzene ring, so the positive charge is **delocalised into the π system** by resonance. This spreads the charge over the ring and stabilises the ion enough for it to be isolated at 0–5 °C.",
      },
      { figure: { kind: "named", id: "benzenediazonium-chloride" } },
      {
        text: "An **alkyl** diazonium ion has no such delocalisation. The positive charge stays on nitrogen, so the ion decomposes immediately even at low temperature, releasing N2 and giving a carbocation. That is why alkyl diazonium salts cannot be used synthetically, while aryl ones are enormously useful.",
      },
    ],
  },
  {
    id: "n9-s7",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Identification",
    years: [2019, 2024, 2015],
    question:
      "An aromatic compound 'A' of molecular formula C7H7ON undergoes Hoffmann bromamide degradation to give amine 'B'. 'B' on treatment with NaNO2/HCl at 273 K gives 'C', which on reaction with phenol gives an orange dye 'D'. Identify A, B, C and D.",
    answer: [
      {
        label: "Working",
        text: "C7H7ON with an amide functional group that loses one carbon on Hoffmann degradation to give an **aromatic** amine (C6H7N = aniline).",
      },
      {
        table: [
          ["", "Compound", "Formula"],
          ["A", "Benzamide", "C6H5CONH2"],
          ["B", "Aniline", "C6H5NH2"],
          ["C", "Benzenediazonium chloride", "C6H5N2^+Cl^−"],
          ["D", "p-Hydroxyazobenzene (orange dye)", "p-HO–C6H4–N=N–C6H5"],
        ],
      },
      { label: "Equations", equations: ["C6H5CONH2 + Br2 + 4NaOH -> C6H5NH2 + Na2CO3 + 2NaBr + 2H2O"] },
      { equation: "C6H5NH2 + NaNO2 + 2HCl ->[273–278 K] C6H5N2^+Cl^− + NaCl + 2H2O" },
      { equation: "C6H5N2^+Cl^− + C6H5OH ->[NaOH, 273–278 K] p-HO–C6H4–N=N–C6H5 + HCl" },
      { figure: { kind: "named", id: "benzenediazonium-chloride" } },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "n9-c1",
    chapter: 9,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Basicity",
    years: [2025],
    passage:
      "Amines have a lone pair of electrons on nitrogen, because of which they behave as Lewis bases. The greater the value of K_b (or the smaller the pK_b), the stronger the base. In the gas phase basicity follows the inductive effect of the alkyl groups, so tertiary amines are the strongest. In aqueous solution, however, the stability of the substituted ammonium ion also matters: an ion with more N–H bonds is better solvated by hydrogen bonding, and bulky groups hinder the approach of the proton. Aromatic amines are far weaker bases than aliphatic ones, because the nitrogen lone pair is delocalised into the ring.",
    question:
      "(i) Arrange in increasing order of basic strength in aqueous solution: NH3, CH3NH2, (CH3)2NH, (CH3)3N.\n(ii) Why is aniline a much weaker base than cyclohexylamine?\n(iii) What is the relation between K_b and pK_b?\n(iv) Which is a stronger base — p-nitroaniline or p-toluidine? Why?",
    answer: [
      { label: "(i)", equation: "NH3 < (CH3)3N < CH3NH2 < (CH3)2NH" },
      {
        text: "The +I effect alone would predict 3° > 2° > 1° > NH3, but in water **solvation** and **steric hindrance** push the tertiary amine down the list.",
      },
      {
        label: "(ii)",
        text: "In **aniline** the nitrogen lone pair is delocalised into the benzene ring, so it is far less available for donation to a proton; protonating it also destroys that resonance stabilisation. In **cyclohexylamine** the ring is saturated, so the lone pair is fully localised on nitrogen and the alkyl group's +I effect enriches it further. Aniline's K_b is roughly a million times smaller.",
      },
      { figure: { kind: "named", id: "aniline-basicity" } },
      { label: "(iii)", equation: "$pK_b = -\\log_{10} K_b$" },
      { text: "So a **larger K_b** (stronger base) corresponds to a **smaller pK_b**." },
      {
        label: "(iv)",
        text: "**p-Toluidine (p-methylaniline).** Its –CH3 group is electron-**donating**, which increases the electron density on nitrogen. In p-nitroaniline the strongly electron-**withdrawing** –NO2 group drags the lone pair away into the ring, making it a very weak base indeed.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "n9-l1",
    chapter: 9,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Distinguishing tests",
    years: [2024, 2023],
    question:
      "(a) How would you distinguish between a primary, a secondary and a tertiary amine using Hinsberg's reagent? Write the equations.\n(b) Give one chemical test each to distinguish: (i) aniline and ethylamine, (ii) methylamine and dimethylamine.",
    answer: [
      {
        label: "(a) Hinsberg's test",
        text: "The amine is shaken with benzenesulphonyl chloride (C6H5SO2Cl) and then treated with aqueous KOH.",
      },
      {
        label: "Primary amine",
        text: "Forms a sulphonamide that still has an N–H. That hydrogen is made acidic by the two adjacent sulphonyl oxygens, so the product **dissolves in KOH**:",
      },
      { equation: "C6H5SO2Cl + R–NH2 -> C6H5SO2NHR + HCl" },
      { equation: "C6H5SO2NHR + KOH -> C6H5SO2N^−(K^+)R + H2O — soluble" },
      {
        label: "Secondary amine",
        text: "Forms a sulphonamide with **no N–H** left, so it is **insoluble in KOH**:",
      },
      { equation: "C6H5SO2Cl + R_2NH -> C6H5SO2NR_2 + HCl — insoluble in alkali" },
      {
        label: "Tertiary amine",
        text: "Has no N–H to begin with, so it **does not react at all** — the amine simply remains as an immiscible layer.",
      },
      {
        table: [
          ["Amine", "Reaction", "With KOH"],
          ["Primary", "Reacts", "Product **soluble**"],
          ["Secondary", "Reacts", "Product **insoluble**"],
          ["Tertiary", "No reaction", "—"],
        ],
      },
      {
        label: "(b)(i) Aniline vs ethylamine",
        text: "**Azo dye test.** Diazotise each at 273–278 K and pour into alkaline 2-naphthol. Aniline gives a stable diazonium salt that couples to give a brilliant **orange-red dye**; ethylamine's diazonium salt decomposes instantly with effervescence of N2 and gives no dye.",
      },
      {
        text: "Alternatively, aniline turns bromine water into a **white precipitate** of 2,4,6-tribromoaniline; ethylamine does not.",
      },
      {
        label: "(b)(ii) Methylamine vs dimethylamine",
        text: "**Carbylamine test.** Methylamine, being primary, gives the foul-smelling isocyanide with CHCl3 and alcoholic KOH; dimethylamine, being secondary, gives no reaction.",
      },
      { equation: "CH3NH2 + CHCl3 + 3KOH ->[Δ] CH3NC + 3KCl + 3H2O" },
    ],
  },
  {
    id: "n9-l2",
    chapter: 9,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Diazonium salts",
    years: [2024, 2019],
    question:
      "(a) Write the structures of the main products when benzenediazonium chloride reacts with: (i) CuCN/KCN, (ii) H3PO2 and water, (iii) KI, (iv) H2O/Δ.\n(b) Why are diazonium salts so important in synthetic organic chemistry?",
    answer: [
      { label: "(a)(i) Sandmeyer — gives the nitrile", equation: "C6H5N2^+Cl^− + CuCN/KCN -> C6H5CN + N2" },
      { label: "(a)(ii) Reduction — removes the group entirely", equation: "C6H5N2^+Cl^− + H3PO2 + H2O -> C6H6 + N2 + H3PO3 + HCl" },
      { label: "(a)(iii) Direct — no copper salt needed for iodide", equation: "C6H5N2^+Cl^− + KI -> C6H5I + KCl + N2" },
      { label: "(a)(iv) Hydrolysis — gives the phenol", equation: "C6H5N2^+Cl^− + H2O ->[Δ] C6H5OH + N2 + HCl" },
      { figure: { kind: "named", id: "benzenediazonium-chloride" } },
      {
        label: "(b) Importance",
        points: [
          "The –N2⁺ group can be replaced by a very wide range of substituents — –Cl, –Br, –I, –CN, –OH, –F, –NO2 or –H — under mild conditions, so it acts as a universal handle on an aromatic ring.",
          "Several of these groups **cannot be introduced directly** into a benzene ring. Iodobenzene and fluorobenzene are the classic examples, and direct iodination of benzene is not practicable.",
          "It allows a substituent to be placed at a position the ordinary directing rules would never give, because the –NO2 group's position is decided first and then converted.",
          "**Coupling reactions** with phenols and amines give azo dyes, the basis of a large part of the dyestuffs industry.",
        ],
      },
      {
        text: "In short, a diazonium salt is the pivot that converts a nitro group into almost any other aromatic substituent.",
      },
    ],
  },
];
