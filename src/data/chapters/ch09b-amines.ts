import type { Question } from "@/types";

/** Unit 9 — Amines, second tranche (board papers 2013–2025). */
export const CH09B: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "n9-m7",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Diazonium salts",
    years: [2024],
    question:
      "The reaction Ar\u2013N2+X\u2212 + HBr / Cu powder \u2192 Ar\u2013Br + N2 is called",
    options: [
      "Hoffmann bromamide degradation",
      "Sandmeyer's reaction",
      "Gattermann reaction",
      "Gabriel phthalimide synthesis",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) Gattermann reaction.** It uses **copper powder** with the halogen acid, whereas Sandmeyer's reaction uses the **cuprous halide** itself.",
      },
      {
        table: [
          ["Reaction", "Reagent", "Yield"],
          ["Sandmeyer", "CuCl/HCl, CuBr/HBr, CuCN/KCN", "Better"],
          ["Gattermann", "Cu powder + HCl or HBr", "Lower, but simpler"],
        ],
      },
      { equations: ["Ar\u2013N2^+Cl^\u2212 + CuCl/HCl -> Ar\u2013Cl + N2 \u2014 Sandmeyer", "Ar\u2013N2^+Cl^\u2212 + Cu/HCl -> Ar\u2013Cl + N2 \u2014 Gattermann"] },
      { text: "Iodide needs neither: KI alone converts a diazonium salt to the aryl iodide." },
    ],
  },
  {
    id: "n9-m8",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Classification",
    years: [2024],
    question: "Identify the tertiary amine.",
    options: ["(C2H5)2NH", "CH3\u2013NH\u2013CH2CH3", "(CH3)3N", "(C2H5)2CHNH2"],
    correct: 2,
    answer: [
      {
        text: "**(c) (CH3)3N — trimethylamine.** All three hydrogens of ammonia have been replaced by alkyl groups, so the nitrogen carries three carbons and **no hydrogen**.",
      },
      {
        text: "Watch the trap in option (d): $(\\text{C}_2\\text{H}_5)_2\\text{CHNH}_2$ has a _(tertiary carbon)_ but the nitrogen bears two hydrogens, so it is a **primary amine**. Classification always depends on the substituents on **nitrogen**.",
      },
      {
        text: "This is also why only a tertiary amine fails to react with Hinsberg's reagent — it has no N\u2013H bond to be replaced.",
      },
    ],
  },

  /* ---------------- Reasoning ---------------- */
  {
    id: "n9-s8",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Basicity",
    years: [2025, 2013],
    question:
      "(a) Arrange in increasing order of boiling point: (CH3)2NH, CH3CH2NH2, CH3CH2OH.\n(b) Arrange in increasing order of basic strength in aqueous solution: CH3NH2, (CH3)2NH, (CH3)3N.",
    answer: [
      { label: "(a) Boiling point", equation: "(CH3)2NH < CH3CH2NH2 < CH3CH2OH" },
      {
        points: [
          "**(CH3)2NH (280 K)** — a secondary amine with only **one N\u2013H**, so the least hydrogen bonding.",
          "**CH3CH2NH2 (290 K)** — a primary amine with **two N\u2013H** bonds, so more hydrogen bonding.",
          "**CH3CH2OH (351 K)** — oxygen is more electronegative than nitrogen, so **O\u2013H\u00B7\u00B7\u00B7O bonds are stronger** than N\u2013H\u00B7\u00B7\u00B7N ones.",
        ],
      },
      { label: "(b) Basic strength in water", equation: "(CH3)3N < CH3NH2 < (CH3)2NH" },
      {
        text: "Three factors compete, and in water the last two outweigh the first:",
      },
      {
        points: [
          "**+I effect** would favour (CH3)3N — three methyl groups push the most electron density onto nitrogen.",
          "**Solvation** favours the amine whose conjugate acid has more N\u2013H bonds to hydrogen-bond with water: $(\\text{CH}_3)_2\\text{NH}_2^+$ has two, $(\\text{CH}_3)_3\\text{NH}^+$ only one.",
          "**Steric hindrance** from three bulky methyl groups obstructs the approach of a proton to the tertiary nitrogen.",
        ],
      },
      { text: "In the **gas phase**, with no solvent, only the +I effect operates and the order reverses to (CH3)3N > (CH3)2NH > CH3NH2." },
    ],
    keyPoint: "Aqueous basicity = +I effect + solvation \u2212 steric hindrance.",
  },
  {
    id: "n9-s9",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2019, 2018],
    question:
      "Write the equations for: (a) acetylation of aniline, (b) diazotisation, (c) Gabriel phthalimide synthesis.",
    answer: [
      {
        label: "(a) Acetylation of aniline",
        equation: "C6H5NH2 + (CH3CO)2O ->[pyridine] C6H5NHCOCH3 + CH3COOH",
      },
      {
        text: "The product, **acetanilide**, has a less strongly activating nitrogen because the lone pair is now shared with the acetyl carbonyl. This is used to achieve **controlled monosubstitution** — free aniline would otherwise give trisubstituted products.",
      },
      {
        label: "(b) Diazotisation",
        equation: "C6H5NH2 + NaNO2 + 2HCl ->[273\u2013278 K] C6H5N2^+Cl^\u2212 + NaCl + 2H2O",
      },
      {
        text: "Nitrous acid is generated in situ from NaNO2 and HCl. The temperature must be held at **273\u2013278 K (0\u20135 \u00B0C)** — above that the diazonium salt decomposes.",
      },
      { figure: { kind: "named", id: "benzenediazonium-chloride" } },
      {
        label: "(c) Gabriel phthalimide synthesis",
        text: "Gives a **pure primary amine**, free of any secondary or tertiary contamination:",
      },
      {
        equations: [
          "phthalimide + KOH -> potassium phthalimide",
          "potassium phthalimide + R\u2013X -> N-alkylphthalimide + KX",
          "N-alkylphthalimide + NaOH ->[H2O, \u0394] R\u2013NH2 + phthalic acid salt",
        ],
      },
      {
        text: "It fails for **aromatic** primary amines, because the SN2 first step does not work with aryl halides.",
      },
    ],
  },
  {
    id: "n9-s10",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Identification",
    years: [2014, 2017],
    question:
      "Identify A, B and C:\nCH3Br \u2192(KCN) A \u2192(LiAlH4) B \u2192(HNO2, 273 K) C",
    answer: [
      { label: "A = methyl cyanide (ethanenitrile), CH3CN", equation: "CH3Br + KCN ->[ethanol] CH3CN + KBr" },
      {
        text: "KCN is ionic, so the free CN⁻ attacks through its **carbon**, giving the nitrile rather than the isocyanide.",
      },
      { label: "B = ethylamine, CH3CH2NH2", equation: "CH3CN + 4[H] ->[LiAlH4] CH3CH2NH2" },
      {
        text: "Reduction of a nitrile adds two hydrogens to each of the C\u2261N bonds, giving a **primary amine with one more carbon** than the original halide. This is the standard way to ascend a homologous series.",
      },
      { label: "C = ethanol, CH3CH2OH", equation: "CH3CH2NH2 + HNO2 -> CH3CH2OH + N2 + H2O" },
      {
        text: "An **aliphatic** primary amine with nitrous acid gives an unstable diazonium salt that decomposes immediately, releasing nitrogen gas and giving the alcohol. The **brisk effervescence of N2** is itself a test for an aliphatic primary amine.",
      },
      {
        text: "Contrast an aromatic primary amine, whose diazonium salt is stabilised by resonance with the ring and can be isolated at 0\u20135 \u00B0C.",
      },
    ],
  },
  {
    id: "n9-s11",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Identification",
    years: [2017],
    question:
      "Identify A, B and C:\nCH3COOH \u2192(NH3, \u0394) A \u2192(Br2 / KOH aq) B \u2192(NaNO2 / HCl, 273 K) C",
    answer: [
      { label: "A = acetamide, CH3CONH2", equations: ["CH3COOH + NH3 -> CH3COONH4", "CH3COONH4 ->[\u0394][\u2212H2O] CH3CONH2"] },
      {
        label: "B = methylamine, CH3NH2",
        text: "**Hoffmann bromamide degradation** — the amide loses its carbonyl carbon as carbonate, so the amine has **one carbon fewer**:",
      },
      { equation: "CH3CONH2 + Br2 + 4KOH -> CH3NH2 + K2CO3 + 2KBr + 2H2O" },
      { label: "C = methanol, CH3OH", equation: "CH3NH2 + HNO2 -> CH3OH + N2 + H2O" },
      {
        text: "Track the carbon count through the sequence: acetic acid (C2) \u2192 acetamide (C2) \u2192 methylamine (**C1**, one lost in the degradation) \u2192 methanol (C1).",
      },
    ],
    keyPoint: "Hoffmann bromamide loses a carbon; nitrile reduction with LiAlH4 gains one.",
  },
  {
    id: "n9-s12",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of aniline",
    years: [2023],
    question:
      "(a) Why does nitration of aniline give a substantial amount of the meta product, even though \u2013NH2 is o/p directing?\n(b) Draw the zwitterion structure of sulphanilic acid.\n(c) How can the strongly activating effect of \u2013NH2 be moderated before an electrophilic substitution?",
    answer: [
      {
        label: "(a)",
        text: "Nitration is carried out in a strongly **acidic** medium (conc. HNO3 + conc. H2SO4). Under those conditions most of the aniline is **protonated** to the anilinium ion:",
      },
      { equation: "C6H5NH2 + H^+ -> C6H5NH3^+" },
      {
        text: "The \u2013NH3⁺ group carries a full positive charge, is strongly electron-withdrawing, and is therefore **meta directing**. The product is a mixture — roughly 47% para, 51% meta and 2% ortho — because free aniline and the anilinium ion react in parallel.",
      },
      {
        label: "(b) Sulphanilic acid",
        text: "The \u2013SO3H group is a strong acid and the \u2013NH2 group is basic, so the proton transfers internally to give a **dipolar zwitterion**:",
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "NH3^+", highlight: true },
            { pos: 4, label: "SO3^\u2212", highlight: true },
          ],
          caption: "Sulphanilic acid exists as a zwitterion, which is why it melts high and dissolves poorly in organic solvents",
        },
      },
      {
        label: "(c)",
        text: "**Acetylate the amine first.** Converting \u2013NH2 into \u2013NHCOCH3 ties up part of the nitrogen lone pair in the acetyl carbonyl, so the group becomes only **moderately activating** and controlled monosubstitution becomes possible. The \u2013NH2 group is recovered afterwards by acid or alkaline hydrolysis.",
      },
      { equations: ["C6H5NH2 + (CH3CO)2O -> C6H5NHCOCH3", "C6H5NHCOCH3 + H2O ->[H^+ or OH^\u2212][\u0394] C6H5NH2 + CH3COOH"] },
    ],
  },
  {
    id: "n9-c2",
    chapter: 9,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Preparation",
    years: [2024, 2020],
    passage:
      "Primary amines can be prepared in several ways, and the method chosen determines both the purity of the product and the number of carbon atoms it contains. Ammonolysis of an alkyl halide is simple but gives a mixture of primary, secondary and tertiary amines together with the quaternary salt. Gabriel phthalimide synthesis gives a pure primary amine but fails for aromatic amines. Hoffmann bromamide degradation converts an amide to an amine with one carbon fewer, while reduction of a nitrile or a nitro compound preserves the carbon skeleton.",
    question:
      "(i) Why does ammonolysis give a mixture of products?\n(ii) How can the yield of the primary amine be improved in ammonolysis?\n(iii) Which method gives an amine with one carbon less, and why?\n(iv) Name two reagents that reduce a nitrile to a primary amine.",
    answer: [
      {
        label: "(i)",
        text: "The primary amine formed is **itself a nucleophile — and a better one than ammonia**, because the alkyl group's +I effect enriches the nitrogen lone pair. It therefore attacks a second molecule of alkyl halide, and so on:",
      },
      { equations: ["R\u2013X + NH3 -> R\u2013NH2 + HX", "R\u2013X + R\u2013NH2 -> R2NH + HX", "R\u2013X + R2NH -> R3N + HX", "R\u2013X + R3N -> R4N^+X^\u2212"] },
      {
        label: "(ii)",
        text: "Use a **large excess of ammonia**. That makes it statistically far more likely for an alkyl halide molecule to meet ammonia than to meet the amine already formed, so the reaction largely stops at the primary stage.",
      },
      {
        label: "(iii)",
        text: "**Hoffmann bromamide degradation.** The amide's **carbonyl carbon is lost as carbonate**, so the amine that survives has one carbon fewer than the amide:",
      },
      { equation: "R\u2013CONH2 + Br2 + 4NaOH -> R\u2013NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        label: "(iv)",
        text: "**LiAlH4** (in dry ether) and **H2/Ni** (catalytic hydrogenation). Sodium in ethanol also works.",
      },
      { equation: "R\u2013CN + 4[H] ->[LiAlH4 or H2/Ni] R\u2013CH2\u2013NH2" },
      { text: "These preserve every carbon and in fact **add** one relative to the alkyl halide the nitrile came from." },
    ],
  },
];
