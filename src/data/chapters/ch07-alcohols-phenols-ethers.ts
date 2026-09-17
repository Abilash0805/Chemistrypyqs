import type { Question } from "@/types";

/** Unit 7 — Alcohols, Phenols and Ethers (6 marks). */
export const CH07: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "a7-m1",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Reactions of alcohols",
    years: [2023, 2022],
    question: "Which of the following alcohols will **not** undergo oxidation?",
    options: ["Butan-1-ol", "Butan-2-ol", "2-Methylbutan-2-ol", "3-Methylbutan-1-ol"],
    correct: 2,
    answer: [
      {
        text: "**(c) 2-Methylbutan-2-ol** — a **tertiary** alcohol. Oxidation of an alcohol requires the removal of an α-hydrogen (the H on the carbon bearing the OH), and a tertiary carbon has none.",
      },
      {
        table: [
          ["Alcohol", "α-H present?", "Oxidation product"],
          ["Primary", "2", "Aldehyde → carboxylic acid"],
          ["Secondary", "1", "Ketone"],
          ["Tertiary", "0", "No oxidation (dehydrates instead)"],
        ],
      },
      {
        text: "Under forcing conditions a tertiary alcohol simply **dehydrates** to an alkene (e.g. with Cu at 573 K).",
      },
    ],
    keyPoint: "No α-hydrogen ⇒ no oxidation. That is the whole test.",
  },
  {
    id: "a7-m2",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Reactions of phenols",
    years: [2025],
    question: "The conversion of phenol to salicylic acid can be accomplished by",
    options: [
      "Reimer–Tiemann reaction",
      "Friedel–Crafts reaction",
      "Kolbe's reaction",
      "Williamson synthesis",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) Kolbe's reaction.** Phenol is first converted into the much more nucleophilic **phenoxide ion** with NaOH; this then attacks carbon dioxide under pressure, and acidification gives salicylic acid.",
      },
      { equation: "C6H5OH + NaOH -> C6H5O^−Na^+" },
      { equation: "C6H5O^−Na^+ + CO2 ->[400 K, 4–7 atm][then H^+] o-HO–C6H4–COOH" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 2, label: "COOH", highlight: true },
          ],
          caption: "Salicylic acid (2-hydroxybenzoic acid) — the precursor of aspirin",
        },
      },
      {
        text: "Contrast **Reimer–Tiemann**, which uses CHCl3/NaOH and gives salicyl**aldehyde** instead.",
      },
    ],
  },
  {
    id: "a7-m3",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2022],
    question: "Which of the following groups increases the acidic character of phenol?",
    options: ["–OCH3", "–CH3", "–NO2", "All of these"],
    correct: 2,
    answer: [
      {
        text: "**(c) –NO2.** An **electron-withdrawing** group pulls electron density away from the ring and so helps to **disperse the negative charge on the phenoxide ion**, making it more stable and the parent phenol more acidic.",
      },
      { equation: "p-nitrophenol > phenol > p-cresol > p-methoxyphenol" },
      {
        text: "The –CH3 and –OCH3 groups are electron-**donating** (+I and +R), so they intensify the negative charge on the phenoxide, destabilise it, and make the phenol **less** acidic.",
      },
      { figure: { kind: "named", id: "phenol-acidity" } },
    ],
  },
  {
    id: "a7-m4",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Preparation of alcohols",
    years: [2024],
    question:
      "Out of the following alkenes, the one which will produce tert-butyl alcohol on acid-catalysed hydration is",
    options: [
      "CH3CH=CH2",
      "CH3CH2CH=CH2",
      "CH3CH=CHCH3",
      "(CH3)2C=CH2",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) (CH3)2C=CH2 (2-methylpropene).** Acid-catalysed hydration follows **Markovnikov's rule** — the OH ends up on the more substituted carbon, because that route goes through the more stable carbocation.",
      },
      { equation: "(CH3)2C=CH2 + H2O ->[H^+] (CH3)3C–OH" },
      { text: "The intermediate is the very stable tertiary carbocation $(\\text{CH}_3)_3\\text{C}^+$." },
    ],
  },
  {
    id: "a7-m5",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Reactions of aldehydes",
    years: [2024, 2023],
    question:
      "Which of the following does **not** give the Cannizzaro reaction?",
    options: ["(CH3)3C–CHO", "(CH3)2CH–CHO", "C6H5CHO", "HCHO"],
    correct: 1,
    answer: [
      {
        text: "**(b) (CH3)2CH–CHO (2-methylpropanal).** The Cannizzaro reaction is the base-induced disproportionation of aldehydes that have **no α-hydrogen**. 2-Methylpropanal has one α-hydrogen (on the CH next to the CHO), so it undergoes **aldol condensation** instead.",
      },
      { equation: "2HCHO + conc. NaOH -> CH3OH + HCOONa" },
      { text: "The other three — trimethylacetaldehyde, benzaldehyde and formaldehyde — have no α-hydrogen and do give the Cannizzaro reaction." },
    ],
    keyPoint: "No α-H → Cannizzaro. α-H present → aldol.",
  },
  {
    id: "a7-m6",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Ethers",
    years: [2023],
    question:
      "Which of the following reactions is feasible for preparing an ether by Williamson synthesis?",
    options: [
      "CH3CH2Br + Na+ −OC(CH3)3",
      "(CH3)3C–Br + Na+ −OCH2CH3",
      "Both are equally feasible",
      "Neither is feasible",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a).** Williamson synthesis is an **SN2** reaction, so the alkyl halide must be the one that is least hindered — ideally **primary**.",
      },
      { equation: "CH3CH2Br + (CH3)3CO^−Na^+ -> CH3CH2–O–C(CH3)3 + NaBr" },
      {
        text: "In option (b) the halide is **tertiary**. Backside attack is blocked, and the bulky ethoxide acts as a **base** rather than a nucleophile, so β-elimination occurs and the product is 2-methylpropene, not the ether.",
      },
      { equation: "(CH3)3CBr + C2H5O^− -> (CH3)2C=CH2 + C2H5OH + Br^−" },
      {
        text: "**Rule:** for an unsymmetrical ether, always put the bulky group on the **alkoxide** and the simple group on the **halide**.",
      },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "a7-ar1",
    chapter: 7,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2024],
    question:
      "**Assertion (A):** Phenols are stronger acids than alcohols.\n**Reason (R):** The alkoxide ion is more stable than the phenoxide ion.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Phenols are indeed much more acidic (pK_a ≈ 10) than alcohols (pK_a ≈ 16–18) — but for exactly the **opposite** reason to the one given.",
      },
      {
        text: "The **phenoxide** ion is the more stable of the two, because its negative charge is delocalised over the ortho and para carbons of the ring by resonance. In an **alkoxide** the charge is localised entirely on oxygen, and the +I effect of the alkyl group intensifies it further, so the alkoxide is less stable.",
      },
      { figure: { kind: "named", id: "phenol-acidity" } },
    ],
  },
  {
    id: "a7-ar2",
    chapter: 7,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2024],
    question:
      "**Assertion (A):** p-Nitrophenol is less acidic than phenol.\n**Reason (R):** The nitro group is electron-withdrawing and helps to stabilise the phenoxide ion.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) A is false but R is true.** p-Nitrophenol is **more** acidic than phenol (pK_a 7.1 against 10.0), not less.",
      },
      {
        text: "The reason given is correct and is precisely why: the electron-withdrawing –NO2 group at the para position **delocalises the negative charge of the phenoxide onto its own oxygen atoms**, stabilising it and so pushing the ionisation equilibrium to the right.",
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "O^−", highlight: true },
            { pos: 4, label: "NO2" },
          ],
          caption: "p-Nitrophenoxide — the –NO2 group pulls the charge away and stabilises the anion",
        },
      },
    ],
  },
  {
    id: "a7-ar3",
    chapter: 7,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2025],
    question:
      "**Assertion (A):** The boiling point of ethanol is higher than that of methoxymethane.\n**Reason (R):** There is intramolecular hydrogen bonding in ethanol.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Ethanol (b.p. 351 K) does boil far higher than its isomer methoxymethane (b.p. 249 K) — but the hydrogen bonding responsible is **intermolecular**, not intramolecular.",
      },
      {
        text: "Ethanol has an O–H group, so its molecules associate with one another through hydrogen bonds; a great deal of energy is needed to separate them. An ether has no O–H, so it can only manage weak dipole–dipole attractions.",
      },
    ],
  },
  {
    id: "a7-ar4",
    chapter: 7,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Reactions of phenols",
    years: [2024],
    question:
      "**Assertion (A):** Bromination of phenol can be carried out even in the absence of a Lewis acid.\n**Reason (R):** The –OH group of phenol is strongly activating.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** The lone pair on the hydroxyl oxygen is delocalised into the ring (+R effect), greatly increasing the electron density at the ortho and para positions. The ring becomes so activated that bromine needs no Lewis-acid catalyst to be polarised.",
      },
      { text: "In **water**, bromination goes straight to the trisubstituted product:" },
      { equation: "C6H5OH + 3Br2 ->[H2O] 2,4,6-tribromophenol + 3HBr" },
      {
        text: "In a **non-polar solvent** such as CS2 at low temperature, monosubstitution can be controlled and p-bromophenol is the main product.",
      },
    ],
  },

  /* ---------------- Very short / short ---------------- */
  {
    id: "a7-v1",
    chapter: 7,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2014, 2020],
    question: "Which is more volatile: o-nitrophenol or p-nitrophenol? Give a reason.",
    answer: [
      {
        text: "**o-Nitrophenol.** In the ortho isomer the –OH and –NO2 groups are adjacent, so they form an **intramolecular** hydrogen bond (chelation) within the same molecule. That lone pair is then unavailable for bonding to neighbouring molecules, so intermolecular attraction is weak and the compound is volatile.",
      },
      {
        text: "In **p-nitrophenol** the groups are too far apart for intramolecular bonding, so extensive **intermolecular** hydrogen bonding occurs instead; the molecules are strongly associated and the compound is much less volatile.",
      },
      {
        text: "This difference is exactly what allows the two isomers to be separated by **steam distillation** — the ortho isomer distils over, the para isomer stays behind.",
      },
    ],
  },
  {
    id: "a7-v2",
    chapter: 7,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2023],
    question: "Why is the C–O bond length in phenol shorter than in methanol?",
    answer: [
      {
        text: "In phenol the lone pair on oxygen is delocalised into the benzene ring, so the C–O bond acquires **partial double-bond character** and is shortened (136 pm, against 143 pm in methanol). The carbon is also **sp²** rather than sp³, and greater s character shortens a bond further.",
      },
    ],
  },
  {
    id: "a7-s1",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2024, 2023, 2014],
    question: "Write the chemical equations for: (a) the Reimer–Tiemann reaction, (b) Williamson synthesis.",
    answer: [
      {
        label: "(a) Reimer–Tiemann reaction",
        text: "Phenol treated with chloroform and aqueous NaOH at 340 K, followed by acidification, gives **salicylaldehyde**. The electrophile is dichlorocarbene, :CCl2.",
      },
      { equation: "C6H5OH + CHCl3 + 3NaOH ->[340 K][then H^+] o-HO–C6H4–CHO + 3NaCl + 2H2O" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 2, label: "CHO", highlight: true },
          ],
          caption: "Salicylaldehyde (2-hydroxybenzaldehyde)",
        },
      },
      {
        label: "(b) Williamson synthesis",
        text: "An alkyl halide is treated with a sodium alkoxide; the reaction is SN2, so the halide should be **primary**.",
      },
      { equation: "CH3CH2–Br + CH3O^−Na^+ -> CH3CH2–O–CH3 + NaBr" },
      { text: "This is the standard method for making **unsymmetrical** ethers." },
    ],
  },
  {
    id: "a7-s2",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2019, 2015, 2013],
    question:
      "How do you convert: (i) phenol to anisole, (ii) propan-2-ol to 2-methylpropan-2-ol, (iii) phenol to picric acid?",
    answer: [
      { label: "(i) Phenol → anisole (Williamson)", equations: ["C6H5OH + NaOH -> C6H5O^−Na^+", "C6H5O^−Na^+ + CH3I -> C6H5–O–CH3 + NaI"] },
      { figure: { kind: "named", id: "anisole" } },
      {
        label: "(ii) Propan-2-ol → 2-methylpropan-2-ol",
        text: "Oxidise to the ketone, then add a Grignard reagent and hydrolyse:",
      },
      {
        equations: [
          "CH3CH(OH)CH3 ->[Cu][573 K] CH3COCH3",
          "CH3COCH3 + CH3MgBr ->[dry ether] (CH3)3C–OMgBr",
          "(CH3)3C–OMgBr + H2O ->[H^+] (CH3)3C–OH",
        ],
      },
      {
        label: "(iii) Phenol → picric acid",
        text: "Direct nitration with conc. HNO3 gives a poor yield because the acid oxidises the phenol. The standard route sulphonates first, then replaces the –SO3H groups:",
      },
      { equation: "C6H5OH ->[conc. H2SO4] 2,4-disulphonic acid ->[conc. HNO3] 2,4,6-trinitrophenol" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 2, label: "NO2" },
            { pos: 4, label: "NO2" },
            { pos: 6, label: "NO2" },
          ],
          caption: "Picric acid (2,4,6-trinitrophenol)",
        },
      },
    ],
  },
  {
    id: "a7-s3",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2017, 2023],
    question:
      "Arrange in increasing order of acid strength: p-cresol, p-nitrophenol, phenol. Justify.",
    answer: [
      { equation: "p-cresol < phenol < p-nitrophenol" },
      {
        points: [
          "**p-Cresol** carries an electron-**donating** –CH3 group (+I). It pushes electron density into the ring, intensifying the negative charge on the phenoxide and destabilising it — so it is the weakest acid.",
          "**Phenol** is the reference, with no substituent.",
          "**p-Nitrophenol** carries a strongly electron-**withdrawing** –NO2 group (−I and −R). It disperses the negative charge of the phenoxide onto its own oxygen atoms, stabilising the anion — so it is the strongest acid.",
        ],
      },
      { text: "**Rule:** electron-withdrawing groups increase acidity; electron-donating groups decrease it." },
    ],
  },
  {
    id: "a7-s4",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2024, 2023],
    question:
      "Give a chemical test to distinguish between: (a) phenol and benzoic acid, (b) propanal and propanone.",
    answer: [
      {
        label: "(a) Phenol vs benzoic acid",
        text: "**Neutral FeCl3 test.** Phenol gives an intense **violet** colouration (a complex ion); benzoic acid gives a buff-coloured precipitate of ferric benzoate.",
      },
      {
        text: "**Alternatively, NaHCO3 test:** benzoic acid, being a stronger acid than carbonic acid, liberates **CO2 with brisk effervescence**; phenol does not react.",
      },
      { equation: "C6H5COOH + NaHCO3 -> C6H5COONa + H2O + CO2(g)" },
      {
        label: "(b) Propanal vs propanone",
        text: "**Tollens' test.** Propanal, being an aldehyde, is oxidised and reduces the ammoniacal silver nitrate to give a **silver mirror**; propanone, a ketone, gives no reaction.",
      },
      { equation: "CH3CH2CHO + 2[Ag(NH3)2]^+ + 3OH^− -> CH3CH2COO^− + 2Ag(s) + 4NH3 + 2H2O" },
      {
        text: "**Alternatively, the iodoform test:** propanone has a CH3CO– group and gives a yellow precipitate of CHI3; propanal does not.",
      },
      { figure: { kind: "named", id: "propanal-vs-propanone" } },
    ],
  },
  {
    id: "a7-s5",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2024, 2020],
    question:
      "Write chemical equations for: (a) hydroboration–oxidation, (b) the Lucas test, (c) dehydration of ethanol to ethene.",
    answer: [
      {
        label: "(a) Hydroboration–oxidation",
        text: "Gives **anti-Markovnikov** addition of water to an alkene, so a terminal alkene yields a **primary** alcohol:",
      },
      {
        equations: [
          "3CH3CH=CH2 + BH3 ->[THF] (CH3CH2CH2)3B",
          "(CH3CH2CH2)3B + 3H2O2 ->[OH^−] 3CH3CH2CH2OH + B(OH)3",
        ],
      },
      {
        label: "(b) Lucas test",
        text: "Conc. HCl with anhydrous ZnCl2 distinguishes the three classes of alcohol by how fast a cloudy, insoluble alkyl chloride appears:",
      },
      {
        table: [
          ["Alcohol", "Turbidity appears"],
          ["Tertiary", "Immediately"],
          ["Secondary", "In about 5 minutes"],
          ["Primary", "Only on heating"],
        ],
      },
      { equation: "(CH3)3C–OH + HCl ->[anhyd. ZnCl2] (CH3)3C–Cl + H2O" },
      { label: "(c) Dehydration", equation: "CH3CH2OH ->[conc. H2SO4][443 K] CH2=CH2 + H2O" },
      {
        text: "At the **lower** temperature of 413 K the same reagents give diethyl ether instead, by intermolecular dehydration.",
      },
    ],
  },
  {
    id: "a7-s6",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Ethers",
    years: [2020],
    question:
      "Why is the C–O–C bond angle in ethers slightly greater than the tetrahedral angle, whereas the C–O–H angle in alcohols is slightly less?",
    answer: [
      {
        label: "Ethers (≈ 111.7°)",
        text: "The oxygen is sp³ hybridised, so the ideal angle is 109.5°. But the two **bulky alkyl groups** on either side repel each other sterically, pushing the angle slightly **open**.",
      },
      {
        label: "Alcohols (≈ 108.9°)",
        text: "Here one substituent is a small hydrogen atom, so there is little steric repulsion. Instead the **two lone pairs on oxygen** dominate: lone pair–bond pair repulsion is stronger than bond pair–bond pair repulsion, so the C–O–H angle is squeezed slightly **below** 109.5°.",
      },
    ],
  },
  {
    id: "a7-s7",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Reactions of ethers",
    years: [2020, 2016],
    question:
      "Explain why (CH3)3C–O–CH3 with HI gives (CH3)3C–I and CH3OH, rather than (CH3)3C–OH and CH3I.",
    answer: [
      {
        text: "The ether is first **protonated** on oxygen, which makes the alcohol a good leaving group:",
      },
      { equation: "(CH3)3C–O–CH3 + HI -> (CH3)3C–O^+(H)–CH3 + I^−" },
      {
        text: "The C–O bond then breaks. Which one breaks depends on which carbocation is more stable: cleaving at the **tertiary** carbon gives the very stable $(\\text{CH}_3)_3\\text{C}^+$, so the reaction follows an **SN1** path there.",
      },
      { equation: "(CH3)3C^+ + I^− -> (CH3)3C–I" },
      { text: "The methyl group leaves as **methanol**." },
      {
        text: "**General rule:** when one group is tertiary the mechanism is SN1 and the halide goes to the **tertiary** carbon. When both groups are primary (or one is methyl) the mechanism is SN2 and the iodide attacks the **less hindered** carbon instead.",
      },
    ],
  },
  {
    id: "a7-s8",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Mechanisms",
    years: [2023, 2019],
    question:
      "Write the mechanism of the acid-catalysed dehydration of ethanol at 443 K to give ethene.",
    answer: [
      {
        label: "Step 1 — Protonation (fast)",
        text: "The lone pair on oxygen picks up a proton, converting the poor leaving group –OH into the excellent leaving group –OH2⁺:",
      },
      { equation: "CH3CH2–OH + H^+ <=> CH3CH2–OH2^+" },
      {
        label: "Step 2 — Formation of carbocation (slow, rate-determining)",
        equation: "CH3CH2–OH2^+ -> CH3CH2^+ + H2O",
      },
      {
        label: "Step 3 — Loss of a proton (fast)",
        text: "A β-hydrogen is removed by a base (water), and the electron pair forms the π bond:",
      },
      { equation: "CH3CH2^+ + H2O -> CH2=CH2 + H3O^+" },
      {
        text: "The proton is regenerated, so H₂SO₄ acts as a **catalyst**. Because the mechanism goes through a carbocation, the ease of dehydration follows 3° > 2° > 1°, and where a choice exists the **more substituted** (Saytzeff) alkene predominates.",
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "a7-c1",
    chapter: 7,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Reactions of phenols",
    years: [2025],
    passage:
      "Phenols undergo electrophilic substitution far more readily than benzene, because the lone pair on the hydroxyl oxygen is delocalised into the ring. This raises the electron density at the ortho and para positions, so the –OH group is strongly activating and ortho/para directing. The same delocalisation makes the O–H bond more polar and the resulting phenoxide ion resonance-stabilised, so phenols are much more acidic than alcohols. In turn, phenols are less acidic than carboxylic acids, whose carboxylate ion is stabilised by two equivalent resonance structures with the charge on two oxygen atoms.",
    question:
      "(i) Write the product when phenol reacts with Br2 in CS2 at low temperature.\n(ii) Write the product when phenol reacts with conc. HNO3.\n(iii) Why is phenol more acidic than ethanol but less acidic than acetic acid?\n(iv) Why does phenol not undergo nucleophilic substitution readily?",
    answer: [
      {
        label: "(i)",
        text: "In the non-polar solvent CS2 at 273 K, **monobromination** occurs and p-bromophenol is the major product (with a little o-bromophenol).",
      },
      { equation: "C6H5OH + Br2 ->[CS2][273 K] p-Br–C6H4–OH + HBr" },
      { label: "(ii)", text: "Concentrated nitric acid nitrates all three activated positions, giving **picric acid**:" },
      { equation: "C6H5OH + 3HNO3 ->[conc.] 2,4,6-trinitrophenol + 3H2O" },
      {
        label: "(iii)",
        text: "**More acidic than ethanol:** the phenoxide ion is stabilised by delocalisation of the negative charge into the ring, whereas in ethoxide the charge is stuck on one oxygen and is intensified by the +I effect of the ethyl group.",
      },
      {
        text: "**Less acidic than acetic acid:** in the carboxylate ion the charge is shared **equally between two oxygen atoms** in two equivalent resonance structures — a far more effective dispersal than spreading the charge onto less electronegative carbon atoms of a ring. Also, in the phenoxide some resonance structures place the charge on carbon, which is unfavourable.",
      },
      { figure: { kind: "named", id: "phenol-acidity" } },
      {
        label: "(iv)",
        text: "The C–O bond has **partial double-bond character** from the same resonance, so it is short and strong and hard to break. The ring is also electron-rich, which **repels** an incoming nucleophile.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "a7-l1",
    chapter: 7,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2025],
    question:
      "An organic compound 'A' of molecular formula C2H6O is oxidised by CrO3 to give 'B'. Compound 'B' on warming with iodine and aqueous NaOH gives a yellow precipitate of 'C'. When 'A' is heated with conc. H2SO4 at 413 K it gives 'D', which on reaction with excess HI gives 'E'. Identify A to E and write the equations.",
    answer: [
      {
        label: "Identification",
        table: [
          ["Compound", "Identity", "Clue used"],
          ["A", "Ethanol, C2H5OH", "C2H6O, oxidisable"],
          ["B", "Ethanal, CH3CHO", "Oxidation product of a 1° alcohol"],
          ["C", "Iodoform, CHI3", "Yellow precipitate with I2/NaOH"],
          ["D", "Diethyl ether, C2H5–O–C2H5", "conc. H2SO4 at 413 K"],
          ["E", "Iodoethane, C2H5I", "Ether + excess HI"],
        ],
      },
      { label: "Equations", equations: ["C2H5OH ->[CrO3] CH3CHO" ] },
      { equation: "CH3CHO + 3I2 + 4NaOH -> CHI3(s) + HCOONa + 3NaI + 3H2O" },
      { equation: "2C2H5OH ->[conc. H2SO4][413 K] C2H5–O–C2H5 + H2O" },
      { equation: "C2H5–O–C2H5 + 2HI ->[excess] 2C2H5I + H2O" },
      {
        text: "**Note the temperature:** conc. H2SO4 at **413 K** gives the ether (intermolecular dehydration), but at **443 K** it would give ethene instead. With *excess* HI both C–O bonds of the ether are cleaved, so two moles of iodoethane result.",
      },
    ],
  },
  {
    id: "a7-l2",
    chapter: 7,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Preparation and reactions",
    years: [2024, 2019],
    question:
      "(a) How is phenol prepared industrially from cumene? Write the equations.\n(b) Give reasons: (i) Phenol has a higher boiling point than toluene. (ii) Ethers have much lower boiling points than isomeric alcohols. (iii) Alcohols are comparatively more soluble in water than hydrocarbons of comparable molar mass.",
    answer: [
      {
        label: "(a) Cumene process",
        text: "Cumene (isopropylbenzene) is oxidised by air to cumene hydroperoxide, which is then cleaved by dilute acid to give phenol and acetone as a valuable by-product:",
      },
      {
        equations: [
          "C6H5CH(CH3)2 + O2 ->[air] C6H5C(CH3)2–O–O–H",
          "C6H5C(CH3)2OOH ->[dil. H2SO4] C6H5OH + CH3COCH3",
        ],
      },
      { figure: { kind: "named", id: "phenol" } },
      {
        label: "(b)(i)",
        text: "Phenol has an **O–H** group and its molecules associate through **intermolecular hydrogen bonds**; toluene can manage only weak van der Waals forces. Much more energy is therefore needed to separate phenol molecules (b.p. 455 K against 384 K for toluene).",
      },
      {
        label: "(b)(ii)",
        text: "An alcohol has an O–H hydrogen and so forms strong intermolecular hydrogen bonds. An **ether has no O–H**, so although its oxygen can accept a hydrogen bond, ether molecules cannot bond to *each other* — only weak dipole–dipole forces operate. Hence ethanol boils at 351 K and its isomer methoxymethane at 249 K.",
      },
      {
        label: "(b)(iii)",
        text: "An alcohol's –OH group can form **hydrogen bonds with water**, releasing enough energy to compensate for breaking the water–water hydrogen bonds. Hydrocarbons cannot form hydrogen bonds at all, so dissolving them is energetically unfavourable. Solubility falls as the alkyl chain lengthens, because the non-polar part comes to dominate.",
      },
    ],
  },
];
