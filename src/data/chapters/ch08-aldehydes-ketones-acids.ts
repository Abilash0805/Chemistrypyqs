import type { Question } from "@/types";

/** Unit 8 — Aldehydes, Ketones and Carboxylic Acids (8 marks). */
export const CH08: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "k8-m1",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Preparation",
    years: [2024],
    question: "Rosenmund reduction is used to prepare aldehydes. The catalyst used is",
    options: ["Pd–BaSO4", "Anhydrous AlCl3", "Ni", "LiAlH4"],
    correct: 0,
    answer: [
      {
        text: "**(a) Pd–BaSO4.** An acyl chloride is hydrogenated over palladium supported on barium sulphate and **poisoned** with sulphur or quinoline.",
      },
      { equation: "CH3COCl + H2 ->[Pd–BaSO4][S or quinoline] CH3CHO + HCl" },
      {
        text: "The poison is essential: without it the palladium would be active enough to carry the reduction on past the aldehyde to the primary alcohol. This is a **partial reduction**.",
      },
    ],
  },
  {
    id: "k8-m2",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Nucleophilic addition",
    years: [2023],
    question: "Aldehydes and ketones react with hydroxylamine to form",
    options: ["hydrazones", "cyanohydrins", "semicarbazones", "oximes"],
    correct: 3,
    answer: [
      { text: "**(d) oximes.**" },
      { equation: "CH3CHO + H2N–OH -> CH3CH=N–OH + H2O" },
      {
        table: [
          ["Reagent", "Product"],
          ["H2N–OH (hydroxylamine)", "Oxime"],
          ["H2N–NH2 (hydrazine)", "Hydrazone"],
          ["H2N–NHC6H5 (phenylhydrazine)", "Phenylhydrazone"],
          ["2,4-dinitrophenylhydrazine", "2,4-DNP derivative (orange-red)"],
          ["H2N–NHCONH2 (semicarbazide)", "Semicarbazone"],
          ["HCN", "Cyanohydrin"],
        ],
      },
      {
        text: "All of these are **nucleophilic addition–elimination** reactions of ammonia derivatives, and they work best at pH 3.5–4.5.",
      },
    ],
  },
  {
    id: "k8-m3",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2023],
    question: "The reagent that can be used to distinguish acetophenone from benzophenone is",
    options: [
      "2,4-dinitrophenylhydrazine",
      "aqueous NaHSO3",
      "I2 and aqueous NaOH",
      "Tollens' reagent",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) I2 and aqueous NaOH — the iodoform test.** It is positive for any compound containing a **CH3CO– group** (or a CH3CH(OH)– group, which is first oxidised to it).",
      },
      { text: "Acetophenone, C6H5COCH3, has a methyl ketone group and gives a **yellow precipitate of iodoform**:" },
      { equation: "C6H5COCH3 + 3I2 + 4NaOH -> CHI3(s) + C6H5COONa + 3NaI + 3H2O" },
      { figure: { kind: "named", id: "acetophenone" } },
      {
        text: "Benzophenone, C6H5COC6H5, has no methyl group attached to the carbonyl, so it gives no reaction. (2,4-DNP would react with both, since both are ketones; Tollens' with neither.)",
      },
    ],
    keyPoint: "Iodoform test detects CH3CO– and CH3CH(OH)– groups only.",
  },
  {
    id: "k8-m4",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Aldol condensation",
    years: [2023],
    question: "Which of the following does **not** give an aldol condensation reaction?",
    options: ["CH3CHO", "CH3CH2CHO", "C6H5CHO", "CH3COCH3"],
    correct: 2,
    answer: [
      {
        text: "**(c) C6H5CHO (benzaldehyde).** Aldol condensation requires at least one **α-hydrogen** — a hydrogen on the carbon next to the carbonyl — so that a carbanion can be formed by a base.",
      },
      {
        text: "In benzaldehyde the carbonyl carbon is attached directly to the benzene ring and to a hydrogen; there is **no α-carbon at all**, so no α-hydrogen. Benzaldehyde undergoes the **Cannizzaro** reaction instead.",
      },
      { figure: { kind: "named", id: "benzaldehyde" } },
      {
        text: "Others with no α-H: HCHO, (CH3)3C–CHO (trimethylacetaldehyde).",
      },
    ],
  },
  {
    id: "k8-m5",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Oxidation",
    years: [2025],
    question: "What is formed on oxidation of a secondary alcohol with chromic anhydride (CrO3)?",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"],
    correct: 1,
    answer: [
      { text: "**(b) Ketone.** A secondary alcohol has exactly one α-hydrogen, so oxidation stops cleanly at the ketone." },
      { equation: "CH3CH(OH)CH3 ->[CrO3] CH3COCH3 + H2O" },
      {
        text: "A ketone resists further oxidation, because going beyond it would mean breaking a strong **C–C** bond rather than a C–H bond.",
      },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "k8-ar1",
    chapter: 8,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Nucleophilic addition",
    years: [2020, 2025],
    question:
      "**Assertion (A):** Benzaldehyde is less reactive than ethanal towards nucleophilic addition.\n**Reason (R):** In benzaldehyde the carbonyl group is in conjugation with the benzene ring.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Two effects work together to deactivate benzaldehyde:",
      },
      {
        points: [
          "**Resonance:** the π electrons of the ring are delocalised into the C=O group, which reduces the **positive charge on the carbonyl carbon** and so makes it less attractive to a nucleophile.",
          "**Steric hindrance:** the bulky phenyl group blocks the approach of the nucleophile more than a small methyl group does.",
        ],
      },
      { text: "The general reactivity order towards nucleophilic addition is therefore:" },
      { equation: "HCHO > CH3CHO > CH3COCH3 > C6H5CHO > C6H5COCH3 > C6H5COC6H5" },
    ],
  },
  {
    id: "k8-ar2",
    chapter: 8,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Oxidation",
    years: [2020],
    question:
      "**Assertion (A):** Oxidation of ketones is easier than that of aldehydes.\n**Reason (R):** The C–C bond of ketones is stronger than the C–H bond of aldehydes.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) A is false but R is true.** The assertion is the wrong way round: **aldehydes are oxidised far more easily than ketones**.",
      },
      {
        text: "The reason given is correct and explains why. An aldehyde has a **hydrogen attached to the carbonyl carbon**, and that relatively weak C–H bond is easily broken by a mild oxidising agent. A ketone has two alkyl groups instead, so oxidation requires breaking a much stronger **C–C bond** and needs vigorous conditions.",
      },
      {
        text: "This is exactly why Tollens' and Fehling's reagents distinguish the two.",
      },
      { figure: { kind: "named", id: "propanal-vs-propanone" } },
    ],
  },
  {
    id: "k8-ar3",
    chapter: 8,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Aldol condensation",
    years: [2023],
    question:
      "**Assertion (A):** The final product of an aldol condensation is always an α,β-unsaturated carbonyl compound.\n**Reason (R):** The β-hydroxy aldehyde or ketone formed initially loses water readily on heating.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** The reaction happens in two stages:",
      },
      {
        equations: [
          "2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO",
          "CH3CH(OH)CH2CHO ->[Δ][−H2O] CH3CH=CH–CHO",
        ],
      },
      {
        text: "The **aldol** (3-hydroxybutanal) loses water on warming because the resulting double bond is **conjugated with the carbonyl group**, and that conjugation stabilises the product. So the final isolated product is but-2-enal, an α,β-unsaturated aldehyde.",
      },
    ],
  },

  /* ---------------- Very short ---------------- */
  {
    id: "k8-v1",
    chapter: 8,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Nomenclature",
    years: [2025, 2014],
    question: "Give the IUPAC name of CH3–CH=CH–CHO.",
    answer: [
      {
        text: "**But-2-enal.** The –CHO carbon is always C-1, the chain has four carbons (but-), and the double bond starts at C-2.",
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3", bond: 1 },
            { label: "CH", bond: 2 },
            { label: "CH", bond: 1 },
            { label: "CHO", highlight: true },
          ],
          caption: "But-2-enal — the aldol condensation product of two molecules of ethanal",
        },
      },
    ],
  },
  {
    id: "k8-v2",
    chapter: 8,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Nomenclature",
    years: [2014],
    question: "Write the IUPAC name of CH3–CH(OH)–CH2–COOH.",
    answer: [
      {
        text: "**3-Hydroxybutanoic acid.** The –COOH carbon is C-1, the chain is four carbons long, and the hydroxyl is on C-3.",
      },
    ],
  },

  /* ---------------- Short ---------------- */
  {
    id: "k8-s1",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2025, 2017],
    question:
      "Explain with equations: (a) Wolff–Kishner reduction, (b) Etard reaction, (c) Hell–Volhard–Zelinsky reaction.",
    answer: [
      {
        label: "(a) Wolff–Kishner reduction",
        text: "Reduces the C=O group of an aldehyde or ketone all the way to –CH2–, using hydrazine followed by a strong base in a high-boiling solvent:",
      },
      { equation: "CH3COCH3 + H2N–NH2 -> CH3C(=N–NH2)CH3 ->[KOH][ethylene glycol, Δ] CH3CH2CH3 + N2" },
      {
        text: "(Clemmensen reduction with Zn–Hg/conc. HCl achieves the same thing in acidic conditions — use Wolff–Kishner when the molecule is acid-sensitive.)",
      },
      {
        label: "(b) Etard reaction",
        text: "Toluene is oxidised to benzaldehyde by chromyl chloride. The chromium complex that forms protects the aldehyde from over-oxidation until it is hydrolysed:",
      },
      { equation: "C6H5CH3 + CrO2Cl2 ->[CS2][then H3O^+] C6H5CHO" },
      { figure: { kind: "named", id: "benzaldehyde" } },
      {
        label: "(c) Hell–Volhard–Zelinsky reaction",
        text: "Halogenates a carboxylic acid at the **α-position** using Cl2 or Br2 in the presence of red phosphorus:",
      },
      { equation: "CH3COOH + Cl2 ->[red P][then H2O] ClCH2COOH + HCl" },
      {
        text: "This is the standard route to α-halo acids, which are the gateway to α-hydroxy and α-amino acids.",
      },
    ],
  },
  {
    id: "k8-s2",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Cannizzaro reaction",
    years: [2024, 2023, 2014],
    question: "What is the Cannizzaro reaction? Illustrate with benzaldehyde and with formaldehyde.",
    answer: [
      {
        text: "The **base-induced disproportionation** of an aldehyde that has **no α-hydrogen**. One molecule is oxidised to the salt of a carboxylic acid and another is reduced to an alcohol.",
      },
      { label: "Benzaldehyde", equation: "2C6H5CHO + conc. NaOH -> C6H5CH2OH + C6H5COONa" },
      { label: "Formaldehyde", equation: "2HCHO + conc. NaOH -> CH3OH + HCOONa" },
      {
        text: "The reaction works only when there is no α-hydrogen; otherwise the base would abstract that hydrogen and **aldol condensation** would take place instead.",
      },
    ],
  },
  {
    id: "k8-s3",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Aldol condensation",
    years: [2025, 2024],
    question: "Convert ethanal to but-2-enal. Name the reaction.",
    answer: [
      { text: "This is an **aldol condensation**, done in two stages." },
      {
        label: "Step 1 — Aldol addition",
        text: "Dilute NaOH removes an α-hydrogen to give a carbanion, which attacks the carbonyl carbon of a second molecule:",
      },
      { equation: "2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO" },
      { text: "The product is 3-hydroxybutanal (the 'aldol')." },
      {
        label: "Step 2 — Dehydration",
        text: "On warming, the β-hydroxy aldehyde loses water to give a conjugated α,β-unsaturated aldehyde:",
      },
      { equation: "CH3CH(OH)CH2CHO ->[Δ][−H2O] CH3CH=CH–CHO" },
      { text: "The product is **but-2-enal**." },
    ],
  },
  {
    id: "k8-s4",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Acidity",
    years: [2019, 2013],
    question:
      "Give reasons: (a) Carboxylic acids are stronger acids than phenols, even though phenoxide has more resonance structures. (b) Benzoic acid is a stronger acid than acetic acid. (c) Chloroacetic acid is stronger than acetic acid.",
    answer: [
      {
        label: "(a)",
        text: "It is not the **number** of resonance structures that matters but their **quality**. In the carboxylate ion the two contributing structures are **equivalent**, and the negative charge is shared between **two highly electronegative oxygen atoms** — a very effective dispersal.",
      },
      { equation: "CH3COO^− <-> CH3COO^− — two equivalent structures" },
      {
        text: "In the phenoxide ion the charge is pushed onto **carbon** atoms of the ring, which are far less able to accommodate it, and those structures also destroy the aromatic sextet. So carboxylate is the more stabilised anion and the acid is stronger.",
      },
      {
        label: "(b)",
        text: "The phenyl group in benzoic acid is **electron-withdrawing** relative to an alkyl group, because its carbon is sp² and more electronegative. It therefore helps disperse the negative charge of the benzoate ion. The methyl group of acetic acid is electron-**donating** (+I) and intensifies the charge. Hence benzoic acid (pK_a 4.19) is stronger than acetic acid (pK_a 4.76).",
      },
      { figure: { kind: "named", id: "benzoic-acid" } },
      {
        label: "(c)",
        text: "Chlorine exerts a strong **−I effect**, pulling electron density away from the carboxylate group and dispersing its negative charge. The chloroacetate ion is therefore more stable, and chloroacetic acid (pK_a 2.86) is much stronger than acetic acid. Adding more chlorines strengthens the effect further: CCl3COOH (pK_a 0.7) is a very strong acid.",
      },
    ],
    keyPoint: "Anything that disperses the negative charge of the conjugate base increases acidity.",
  },
  {
    id: "k8-s5",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2025, 2020],
    question:
      "Give a simple chemical test to distinguish between: (a) propanal and propanone, (b) benzaldehyde and acetophenone.",
    answer: [
      {
        label: "(a) Propanal vs propanone",
        text: "**Fehling's test.** Propanal, an aldehyde, reduces the blue Fehling's solution to a **red-brown precipitate** of Cu2O; propanone gives no reaction.",
      },
      { equation: "CH3CH2CHO + 2Cu^2+ + 5OH^− -> CH3CH2COO^− + Cu2O(s) + 3H2O" },
      { text: "(Tollens' test works equally well — propanal gives a silver mirror.)" },
      {
        label: "(b) Benzaldehyde vs acetophenone",
        text: "**Iodoform test.** Acetophenone has a CH3CO– group and gives a **yellow precipitate** of iodoform with I2/NaOH; benzaldehyde does not.",
      },
      {
        text: "Conversely **Tollens' test** distinguishes them the other way: benzaldehyde (an aldehyde) gives a silver mirror, acetophenone does not. Note that benzaldehyde does **not** respond to Fehling's solution, being an aromatic aldehyde.",
      },
    ],
  },
  {
    id: "k8-s6",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2023],
    question:
      "Why are the boiling points of aldehydes and ketones lower than those of the corresponding alcohols and carboxylic acids of similar molar mass?",
    answer: [
      {
        text: "Aldehydes and ketones are **polar**, so they have appreciable dipole–dipole attractions — which is why they boil higher than hydrocarbons or ethers of similar mass.",
      },
      {
        text: "But they have **no hydrogen attached to oxygen**, so their molecules cannot hydrogen-bond to one another. Alcohols can, and carboxylic acids do so doubly — forming stable cyclic **dimers** held by two hydrogen bonds, which is why acids boil highest of all.",
      },
      { equation: "CH3CH2CH3 (231 K) < CH3OCH3 (249 K) < CH3CHO (293 K) < C2H5OH (351 K) < CH3COOH (391 K)" },
    ],
  },
  {
    id: "k8-s7",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2018, 2025],
    question:
      "How do you convert: (a) ethanal to propanone, (b) toluene to benzoic acid, (c) propanoic acid to ethane?",
    answer: [
      {
        label: "(a) Ethanal → propanone",
        text: "Add a Grignard reagent, hydrolyse to the secondary alcohol, then oxidise:",
      },
      {
        equations: [
          "CH3CHO + CH3MgBr ->[dry ether] CH3CH(OMgBr)CH3",
          "CH3CH(OMgBr)CH3 ->[H3O^+] CH3CH(OH)CH3",
          "CH3CH(OH)CH3 ->[K2Cr2O7/H2SO4] CH3COCH3",
        ],
      },
      { label: "(b) Toluene → benzoic acid", equation: "C6H5CH3 ->[KMnO4/KOH][then H3O^+] C6H5COOH" },
      { figure: { kind: "named", id: "benzoic-acid" } },
      {
        label: "(c) Propanoic acid → ethane",
        text: "Decarboxylation of the sodium salt with soda lime removes one carbon:",
      },
      { equation: "CH3CH2COOH + NaOH -> CH3CH2COONa" },
      { equation: "CH3CH2COONa + NaOH ->[CaO][Δ] CH3CH3 + Na2CO3" },
    ],
  },
  {
    id: "k8-s8",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Nucleophilic addition",
    years: [2019, 2025],
    question:
      "Why is methanal more reactive towards nucleophilic addition than ethanal, and ethanal more reactive than propanone?",
    answer: [
      { text: "Two factors, both working in the same direction:" },
      {
        points: [
          "**Electronic (+I) effect:** alkyl groups push electron density toward the carbonyl carbon, reducing its partial positive charge and so making it less electrophilic. Methanal has none, ethanal has one, propanone has two.",
          "**Steric effect:** alkyl groups physically hinder the approach of the nucleophile, and they crowd the sp³ carbon formed in the product.",
        ],
      },
      { equation: "HCHO > CH3CHO > CH3COCH3" },
      { text: "Methanal is so reactive that it exists in water almost entirely as its hydrate." },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "k8-c1",
    chapter: 8,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Nucleophilic addition",
    years: [2024, 2023],
    passage:
      "The carbon–oxygen double bond of aldehydes and ketones is strongly polarised because oxygen is much more electronegative than carbon. The carbonyl carbon carries a partial positive charge and is sp2 hybridised, so the three attached atoms lie in a plane at about 120°. A nucleophile therefore attacks the carbonyl carbon perpendicular to that plane, the carbon rehybridises to sp3, and a tetrahedral alkoxide intermediate is formed which then picks up a proton. This nucleophilic addition is the characteristic reaction of the carbonyl group, in sharp contrast to the electrophilic addition shown by alkenes.",
    question:
      "(i) Write the stepwise mechanism of nucleophilic addition of HCN to propanone.\n(ii) Why do alkenes undergo electrophilic addition while carbonyl compounds undergo nucleophilic addition?\n(iii) Arrange HCHO, CH3CHO and CH3COCH3 in decreasing order of reactivity towards nucleophilic addition.\n(iv) What is the hybridisation and geometry at the carbonyl carbon before and after the addition?",
    answer: [
      {
        label: "(i) Mechanism",
        text: "**Step 1** — the nucleophile CN⁻ attacks the electrophilic carbonyl carbon perpendicular to the plane; the π electrons shift onto oxygen:",
      },
      { equation: "CN^− + (CH3)2C=O -> (CH3)2C(CN)–O^−" },
      { text: "**Step 2** — the alkoxide intermediate is protonated to give the cyanohydrin:" },
      { equation: "(CH3)2C(CN)–O^− + H^+ -> (CH3)2C(CN)–OH" },
      {
        label: "(ii)",
        text: "In an **alkene** the π bond is between two carbons of equal electronegativity, so the electron cloud is symmetrical and **electron-rich** — it attracts **electrophiles**. In a **carbonyl** group the π cloud is pulled toward oxygen, leaving the carbon **electron-deficient** (δ+) — so it attracts **nucleophiles**.",
      },
      { label: "(iii)", equation: "HCHO > CH3CHO > CH3COCH3" },
      {
        text: "Each additional alkyl group reduces the positive charge on the carbonyl carbon (+I effect) and increases steric crowding.",
      },
      {
        label: "(iv)",
        text: "**Before:** the carbonyl carbon is **sp² hybridised** and **trigonal planar**, with bond angles of about 120°. **After:** it becomes **sp³ hybridised** and **tetrahedral**, with angles of about 109.5°.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "k8-l1",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2024, 2020, 2018],
    question:
      "An organic compound (A) with molecular formula C9H10O forms a 2,4-DNP derivative, reduces Tollens' reagent and undergoes the Cannizzaro reaction. On vigorous oxidation it gives 1,2-benzenedicarboxylic acid. Identify A and write the equations involved.",
    answer: [
      {
        label: "Deductions",
        table: [
          ["Observation", "Conclusion"],
          ["Forms a 2,4-DNP derivative", "A is an aldehyde or a ketone"],
          ["Reduces Tollens' reagent", "A is an **aldehyde**"],
          ["Undergoes Cannizzaro", "A has **no α-hydrogen** ⇒ the –CHO is on the ring"],
          ["Gives 1,2-benzenedicarboxylic acid", "Two substituents, **ortho** to each other"],
        ],
      },
      {
        label: "Identification",
        text: "C9H10O with an aromatic aldehyde and an ortho alkyl group: the formula requires a C2H5 group. **A is 2-ethylbenzaldehyde.**",
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "CHO", highlight: true },
            { pos: 2, label: "C2H5" },
          ],
          caption: "Compound A — 2-ethylbenzaldehyde, C9H10O",
        },
      },
      { label: "Equations", equations: ["2-C2H5–C6H4–CHO + 2[Ag(NH3)2]^+ + 3OH^− -> 2-C2H5–C6H4–COO^− + 2Ag(s) + 4NH3 + 2H2O"] },
      { equation: "2(2-C2H5C6H4CHO) + conc. NaOH -> 2-C2H5C6H4CH2OH + 2-C2H5C6H4COONa" },
      { equation: "2-C2H5–C6H4–CHO ->[KMnO4/KOH, Δ][then H3O^+] C6H4(COOH)2 — phthalic acid" },
      {
        text: "Vigorous oxidation converts **both** the –CHO and the ethyl side chain into –COOH groups, and since they were ortho the product is benzene-1,2-dicarboxylic acid (phthalic acid). ✓",
      },
    ],
  },
  {
    id: "k8-l2",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Reactions",
    years: [2020, 2023, 2014],
    question:
      "(a) Write the products when benzaldehyde reacts with: (i) CH3CHO in the presence of dilute NaOH, (ii) conc. NaOH, (iii) HCN.\n(b) Give reasons: (i) Carboxylic acids do not give the characteristic reactions of a carbonyl group. (ii) Aldehydes are more reactive than ketones towards nucleophilic addition.",
    answer: [
      {
        label: "(a)(i) Cross aldol condensation",
        text: "Benzaldehyde has no α-hydrogen, so it can only act as the carbonyl component; ethanal supplies the carbanion:",
      },
      { equation: "C6H5CHO + CH3CHO ->[dil. NaOH][−H2O] C6H5CH=CH–CHO" },
      { text: "The product is **cinnamaldehyde** (3-phenylprop-2-enal)." },
      { label: "(a)(ii) Cannizzaro reaction", equation: "2C6H5CHO + conc. NaOH -> C6H5CH2OH + C6H5COONa" },
      { label: "(a)(iii) Nucleophilic addition", equation: "C6H5CHO + HCN -> C6H5CH(OH)CN" },
      { text: "The product is the **cyanohydrin**, mandelonitrile." },
      {
        label: "(b)(i)",
        text: "In a carboxylic acid the lone pair on the hydroxyl oxygen is **delocalised into the carbonyl group** by resonance. This reduces the partial positive charge on the carbonyl carbon, so it is far less electrophilic than in an aldehyde or ketone.",
      },
      { equation: "R–C(=O)–OH <-> R–C(–O^−)=OH^+" },
      {
        text: "As a result carboxylic acids do not form oximes or hydrazones and give no addition reaction with NaHSO3 or HCN. Their characteristic reactions instead involve the O–H bond (acidity) or replacement of the whole –OH group.",
      },
      {
        label: "(b)(ii)",
        text: "An aldehyde has only one alkyl group attached to the carbonyl carbon, a ketone has two. More alkyl groups mean (1) a greater **+I effect**, reducing the electrophilicity of the carbon, and (2) more **steric hindrance** to the approaching nucleophile and more crowding in the tetrahedral product. Both make ketones less reactive.",
      },
    ],
  },
];
