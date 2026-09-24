import type { Question } from "@/types";

/** Unit 7 — Alcohols, Phenols and Ethers, second tranche (board papers 2013–2025). */
export const CH07B: Question[] = [
  /* ---------------- Named reactions ---------------- */
  {
    id: "a7-s9",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2023, 2017],
    question:
      "Write the chemical equations for: (a) Kolbe's reaction, (b) acetylation of salicylic acid.",
    answer: [
      {
        label: "(a) Kolbe's reaction",
        text: "Phenol is first converted to the much more nucleophilic phenoxide, which then attacks CO2 under pressure; acidification gives salicylic acid.",
      },
      { equations: ["C6H5OH + NaOH -> C6H5O^−Na^+ + H2O", "C6H5O^−Na^+ + CO2 ->[400 K, 4–7 atm][then H^+] o-HO–C6H4–COOH"] },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 2, label: "COOH", highlight: true },
          ],
          caption: "Salicylic acid (2-hydroxybenzoic acid)",
        },
      },
      {
        label: "(b) Acetylation of salicylic acid",
        text: "The phenolic –OH is esterified by acetic anhydride, giving **aspirin**:",
      },
      { equation: "o-HO–C6H4–COOH + (CH3CO)2O ->[H^+] o-CH3COO–C6H4–COOH + CH3COOH" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "COOH" },
            { pos: 2, label: "OCOCH3", highlight: true },
          ],
          caption: "Aspirin (acetylsalicylic acid)",
        },
      },
      {
        text: "Note which group reacts: acetylation attacks the **phenolic hydroxyl**, not the carboxyl group, so the product retains its –COOH.",
      },
    ],
  },
  {
    id: "a7-s10",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of alcohols",
    years: [2024, 2020],
    question:
      "Give the structure of the major product expected from:\n(a) reaction of propanal with methylmagnesium bromide, followed by hydrolysis,\n(b) hydroboration of propene followed by oxidation with alkaline H2O2,\n(c) oxidation of butan-2-ol with acidified K2Cr2O7.",
    answer: [
      {
        label: "(a) Grignard addition → secondary alcohol",
        equations: [
          "CH3CH2CHO + CH3MgBr ->[dry ether] CH3CH2CH(OMgBr)CH3",
          "CH3CH2CH(OMgBr)CH3 ->[H3O^+] CH3CH2CH(OH)CH3",
        ],
      },
      { text: "Product: **butan-2-ol**. An aldehyde plus a Grignard reagent always gives a **secondary** alcohol (methanal gives a primary one, a ketone gives a tertiary one)." },
      {
        label: "(b) Hydroboration–oxidation → anti-Markovnikov",
        equations: [
          "3CH3CH=CH2 + BH3 ->[THF] (CH3CH2CH2)3B",
          "(CH3CH2CH2)3B + 3H2O2 ->[OH^−] 3CH3CH2CH2OH + B(OH)3",
        ],
      },
      { text: "Product: **propan-1-ol**, the anti-Markovnikov alcohol — the OH ends up on the _(less)_ substituted carbon." },
      { label: "(c) Oxidation of a secondary alcohol → ketone", equation: "CH3CH(OH)CH2CH3 ->[K2Cr2O7/H2SO4] CH3COCH2CH3" },
      { text: "Product: **butan-2-one**. A secondary alcohol has just one α-hydrogen, so oxidation stops cleanly at the ketone." },
    ],
    keyPoint: "Markovnikov (H₂O/H⁺) → 2° alcohol; hydroboration → 1° alcohol.",
  },
  {
    id: "a7-s11",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Mechanisms",
    years: [2023, 2016],
    question:
      "Write the mechanism of the acid-catalysed dehydration of ethanol at 413 K to give diethyl ether.",
    answer: [
      {
        label: "Step 1 — Protonation (fast)",
        text: "The lone pair on oxygen accepts a proton, converting the poor leaving group –OH into the good leaving group –OH2⁺:",
      },
      { equation: "CH3CH2–OH + H^+ <=> CH3CH2–OH2^+" },
      {
        label: "Step 2 — Nucleophilic attack (slow, rate-determining)",
        text: "A second, un-protonated ethanol molecule attacks the carbon by **SN2**, displacing water:",
      },
      { equation: "CH3CH2OH + CH3CH2–OH2^+ -> CH3CH2–O^+(H)–CH2CH3 + H2O" },
      {
        label: "Step 3 — Loss of a proton (fast)",
        equation: "CH3CH2–O^+(H)–CH2CH3 -> CH3CH2–O–CH2CH3 + H^+",
      },
      {
        text: "The proton is regenerated, so H2SO4 is a genuine **catalyst**.",
      },
      {
        label: "Why the temperature matters",
        text: "At **413 K** the second alcohol molecule acts as a **nucleophile** and the ether is formed (intermolecular dehydration). At the higher temperature of **443 K** it acts as a **base** instead, removing a β-hydrogen, and the product is **ethene** (intramolecular dehydration).",
      },
      { equations: ["2C2H5OH ->[conc. H2SO4][413 K] C2H5–O–C2H5 + H2O", "C2H5OH ->[conc. H2SO4][443 K] CH2=CH2 + H2O"] },
    ],
    keyPoint: "413 K → ether. 443 K → alkene. Same reagents, different temperature.",
  },

  /* ---------------- Reasoning ---------------- */
  {
    id: "a7-s12",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2023],
    question:
      "(a) Why is the C–O bond length in phenol shorter than in methanol?\n(b) Arrange in increasing order of acidity: phenol, o-nitrophenol, o-cresol.\n(c) Why can ortho- and para-nitrophenol be separated by steam distillation?",
    answer: [
      {
        label: "(a)",
        text: "In phenol the lone pair on oxygen is **delocalised into the benzene ring**, so the C–O bond acquires partial double-bond character and shortens to 136 pm, against 143 pm in methanol. The ring carbon is also **sp²** rather than sp³, and greater s character shortens a bond further.",
      },
      { label: "(b)", equation: "o-cresol < phenol < o-nitrophenol" },
      {
        points: [
          "**o-Cresol** has an electron-**donating** –CH3 group that intensifies the negative charge on the phenoxide, destabilising it — weakest acid.",
          "**Phenol** is the reference.",
          "**o-Nitrophenol** has a strongly electron-**withdrawing** –NO2 group that disperses the charge onto its own oxygens — strongest acid.",
        ],
      },
      {
        label: "(c)",
        text: "In **o-nitrophenol** the –OH and –NO2 groups are adjacent and form an **intramolecular** hydrogen bond (chelation). That lone pair is then unavailable for bonding to other molecules, so the compound is volatile and **steam-distils over**.",
      },
      {
        text: "In **p-nitrophenol** the groups are too far apart for intramolecular bonding, so extensive **intermolecular** hydrogen bonding occurs instead. The molecules are strongly associated, the compound is far less volatile, and it stays behind in the flask.",
      },
    ],
  },
  {
    id: "a7-m7",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Reactions of alcohols",
    years: [2024],
    question:
      "Nucleophilic addition of a Grignard reagent to a ketone, followed by hydrolysis with dilute acid, gives",
    options: ["an alkene", "a primary alcohol", "a secondary alcohol", "a tertiary alcohol"],
    correct: 3,
    answer: [
      { text: "**(d) a tertiary alcohol.** The carbonyl carbon of a ketone already bears two alkyl groups; the Grignard reagent adds a third." },
      { equations: ["R2C=O + R'MgX ->[dry ether] R2C(OMgX)R'", "R2C(OMgX)R' ->[H3O^+] R2C(OH)R'"] },
      {
        table: [
          ["Carbonyl compound", "Product with R–MgX then H₃O⁺"],
          ["Methanal (HCHO)", "Primary alcohol"],
          ["Any other aldehyde", "Secondary alcohol"],
          ["Ketone", "**Tertiary alcohol**"],
        ],
      },
      { text: "Grignard reagents must be kept strictly dry — even traces of water destroy them, giving the alkane instead." },
    ],
  },
  {
    id: "a7-s13",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2015, 2019],
    question:
      "How do you carry out the following conversions?\n(a) Aniline to phenol\n(b) Ethanol to propan-2-ol\n(c) Propan-2-ol to 2-methylpropan-2-ol",
    answer: [
      { label: "(a) Aniline → phenol (via diazotisation)", equations: ["C6H5NH2 + NaNO2 + 2HCl ->[273–278 K] C6H5N2^+Cl^− + NaCl + 2H2O", "C6H5N2^+Cl^− + H2O ->[Δ] C6H5OH + N2 + HCl"] },
      { figure: { kind: "named", id: "phenol" } },
      {
        label: "(b) Ethanol → propan-2-ol",
        text: "Lengthen the chain by one carbon, then add a Grignard reagent:",
      },
      {
        equations: [
          "CH3CH2OH ->[Cu][573 K] CH3CHO",
          "CH3CHO + CH3MgBr ->[dry ether][then H3O^+] CH3CH(OH)CH3",
        ],
      },
      {
        label: "(c) Propan-2-ol → 2-methylpropan-2-ol",
        text: "Oxidise to the ketone, then add a second Grignard reagent:",
      },
      {
        equations: [
          "CH3CH(OH)CH3 ->[Cu][573 K] CH3COCH3",
          "CH3COCH3 + CH3MgBr ->[dry ether][then H3O^+] (CH3)3C–OH",
        ],
      },
      {
        text: "Note the pattern: **oxidise, then add a Grignard** is the standard way to climb from a lower alcohol to a more substituted one.",
      },
    ],
  },
  {
    id: "a7-s14",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Reactions of ethers",
    years: [2017],
    question:
      "Write the product when CH3–CH(CH3)–O–CH2CH3 is treated with HI. Justify which C–O bond breaks.",
    answer: [
      { text: "The products are **2-iodopropane and ethanol**:" },
      { equation: "(CH3)2CH–O–CH2CH3 + HI -> (CH3)2CH–I + CH3CH2OH" },
      {
        label: "Why that bond",
        text: "The ether is protonated on oxygen first. Cleavage then occurs at the carbon that better supports positive charge — here the **secondary** isopropyl carbon, giving a more stable carbocation than the primary ethyl group would.",
      },
      {
        text: "**The general rule.** When one group is secondary or tertiary, the reaction is **SN1** and the iodide attaches to the **more substituted** carbon. When both groups are primary (or one is methyl), the reaction is **SN2** and the iodide attacks the **less hindered** carbon.",
      },
      { equation: "CH3–O–CH2CH3 + HI -> CH3I + CH3CH2OH — SN2, attack at the methyl carbon" },
    ],
  },
  {
    id: "a7-c2",
    chapter: 7,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Reactions of alcohols",
    years: [2024],
    passage:
      "Alcohols are classified as primary, secondary or tertiary according to the number of carbon atoms attached to the carbon bearing the hydroxyl group. This classification governs much of their chemistry. Oxidation requires an α-hydrogen — the hydrogen on the carbon carrying the OH — so the three classes give different products or none at all. The Lucas test exploits the same distinction through the differing ease of carbocation formation, and dehydration to an alkene follows the order 3° > 2° > 1° for the same reason.",
    question:
      "(i) Write the products of oxidation of a primary and a secondary alcohol.\n(ii) Why does a tertiary alcohol resist oxidation?\n(iii) Explain the Lucas test and how it distinguishes the three classes.\n(iv) Which reagent oxidises a primary alcohol to the aldehyde without going on to the acid?",
    answer: [
      {
        label: "(i)",
        text: "A **primary** alcohol has two α-hydrogens, so it is oxidised first to the aldehyde and then on to the carboxylic acid:",
      },
      { equation: "R–CH2OH ->[O] R–CHO ->[O] R–COOH" },
      { text: "A **secondary** alcohol has one α-hydrogen, so oxidation stops at the **ketone**:" },
      { equation: "R2CHOH ->[O] R2C=O" },
      {
        label: "(ii)",
        text: "A tertiary alcohol has **no α-hydrogen** at all — the carbon bearing the OH is bonded to three carbons. Oxidation would require breaking a strong **C–C** bond rather than a C–H bond, so under ordinary conditions it does not occur. Under vigorous conditions the molecule dehydrates to an alkene first and that is then cleaved.",
      },
      {
        label: "(iii) Lucas test",
        text: "The alcohol is shaken with **conc. HCl and anhydrous ZnCl2**. The alkyl chloride formed is insoluble in the reagent, so it appears as **turbidity**; how quickly it appears reflects how easily the carbocation forms.",
      },
      {
        table: [
          ["Alcohol", "Turbidity appears", "Reason"],
          ["Tertiary", "Immediately", "3° carbocation is most stable"],
          ["Secondary", "In about 5 minutes", "2° carbocation is less stable"],
          ["Primary", "Only on heating", "1° carbocation is very unstable"],
        ],
      },
      {
        label: "(iv)",
        text: "**PCC (pyridinium chlorochromate)** in dichloromethane. It is a mild oxidant that works in anhydrous conditions, so the aldehyde formed cannot be further oxidised to the acid.",
      },
      { equation: "CH3CH2CH2OH ->[PCC] CH3CH2CHO" },
    ],
  },
];
