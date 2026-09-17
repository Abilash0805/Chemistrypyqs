import type { Question } from "@/types";

/** Unit 7 — equation-based questions on alcohols, phenols and ethers. */
export const CH07C: Question[] = [
  {
    id: "a7-e1",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of phenols",
    years: [2019, 2025],
    question:
      "Write the equations:\n(a) phenol + conc. HNO3\n(b) phenol + Br2 in water\n(c) phenol + Zn dust, heated",
    answer: [
      { label: "(a) Nitration to picric acid", equation: "C6H5OH + 3HNO3 ->[conc.] 2,4,6-trinitrophenol + 3H2O" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 2, label: "NO2" },
            { pos: 4, label: "NO2", highlight: true },
            { pos: 6, label: "NO2" },
          ],
          caption: "Picric acid (2,4,6-trinitrophenol)",
        },
      },
      {
        text: "In practice the direct route gives a poor yield because nitric acid also oxidises phenol; the preparative method sulphonates first and then replaces the –SO3H groups.",
      },
      { label: "(b) Bromination in water", equation: "C6H5OH + 3Br2 ->[H2O] 2,4,6-tribromophenol(s) + 3HBr" },
      {
        text: "A **white precipitate**, formed without any Lewis acid catalyst — the –OH group activates the ring that strongly. In the non-polar solvent CS2 at 273 K, monosubstitution can be controlled and p-bromophenol results.",
      },
      { label: "(c) Reduction by zinc dust", equation: "C6H5OH + Zn ->[Δ] C6H6 + ZnO" },
      { text: "The –OH group is removed altogether, giving **benzene**." },
    ],
  },
  {
    id: "a7-e2",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2019, 2013],
    question:
      "Carry out the conversions:\n(a) propene to propan-1-ol\n(b) phenol to benzoquinone\n(c) ethanol to ethene",
    answer: [
      { label: "(a) Propene → propan-1-ol (hydroboration–oxidation)", text: "Direct hydration would give propan-2-ol by Markovnikov's rule, so use the anti-Markovnikov route:" },
      {
        equations: [
          "3CH3CH=CH2 + BH3 ->[THF] (CH3CH2CH2)3B",
          "(CH3CH2CH2)3B + 3H2O2 ->[OH^−] 3CH3CH2CH2OH + B(OH)3",
        ],
      },
      { label: "(b) Phenol → benzoquinone", equation: "C6H5OH + [O] ->[Na2Cr2O7/H2SO4] C6H4O2 + H2O" },
      { text: "Oxidation with sodium dichromate gives **benzene-1,4-dione** (p-benzoquinone), a bright yellow solid." },
      { label: "(c) Ethanol → ethene (dehydration)", equation: "CH3CH2OH ->[conc. H2SO4][443 K] CH2=CH2 + H2O" },
      {
        text: "Note the temperature: at **443 K** intramolecular dehydration gives the alkene, but at **413 K** intermolecular dehydration gives diethyl ether instead.",
      },
    ],
  },
  {
    id: "a7-e3",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of ethers",
    years: [2016, 2017],
    question:
      "Write the final products:\n(a) (CH3)3C–O–CH3 + HI →\n(b) CH3–O–CH2CH3 + HI (one equivalent) →\n(c) anisole + CH3Cl / anhyd. AlCl3 →",
    answer: [
      { label: "(a) SN1 cleavage", equation: "(CH3)3C–O–CH3 + HI -> (CH3)3C–I + CH3OH" },
      {
        text: "Protonation is followed by cleavage at the **tertiary** carbon, because that gives the stable tertiary carbocation. The iodide therefore attaches to the tertiary group.",
      },
      { label: "(b) SN2 cleavage", equation: "CH3–O–CH2CH3 + HI -> CH3I + CH3CH2OH" },
      {
        text: "With two primary/methyl groups there is no stable carbocation available, so iodide attacks by **SN2 at the less hindered carbon** — the methyl group. The product is iodomethane, not iodoethane.",
      },
      { label: "(c) Friedel–Crafts alkylation of anisole", equation: "C6H5OCH3 + CH3Cl ->[anhyd. AlCl3] o- and p-CH3–C6H4–OCH3 + HCl" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OCH3" },
            { pos: 4, label: "CH3", highlight: true },
          ],
          caption: "4-Methylanisole — the major (para) product",
        },
      },
      {
        text: "The –OCH3 group is activating and **o/p directing**, and the para product predominates because the ortho positions are sterically crowded by the methoxy group.",
      },
    ],
    keyPoint: "Ether + HI: 3° side takes the iodide (SN1); otherwise the smaller side does (SN2).",
  },
  {
    id: "a7-e4",
    chapter: 7,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2019, 2020],
    question:
      "An organic compound 'A' of molecular formula C3H8O gives a turbidity with Lucas reagent only on heating. On oxidation with acidified K2Cr2O7 it gives 'B' (C3H6O2). 'B' reacts with NaHCO3 to give effervescence. 'A' on dehydration at 443 K gives 'C'. Identify A, B and C, and write the equations.",
    answer: [
      {
        label: "Working",
        table: [
          ["Observation", "Conclusion"],
          ["Lucas turbidity only on heating", "A is a **primary** alcohol"],
          ["Oxidation gives C3H6O2", "Two hydrogens lost, one oxygen gained — a carboxylic acid"],
          ["B effervesces with NaHCO3", "B is a **carboxylic acid**, confirming it"],
          ["Dehydration at 443 K", "C is the alkene"],
        ],
      },
      {
        table: [
          ["", "Compound", "Formula"],
          ["A", "Propan-1-ol", "CH3CH2CH2OH"],
          ["B", "Propanoic acid", "CH3CH2COOH"],
          ["C", "Propene", "CH3CH=CH2"],
        ],
      },
      { label: "Equations", equation: "CH3CH2CH2OH + HCl ->[anhyd. ZnCl2][Δ] CH3CH2CH2Cl + H2O" },
      { equation: "CH3CH2CH2OH ->[K2Cr2O7/H2SO4] CH3CH2CHO ->[[O]] CH3CH2COOH" },
      { equation: "CH3CH2COOH + NaHCO3 -> CH3CH2COONa + H2O + CO2(g)" },
      { equation: "CH3CH2CH2OH ->[conc. H2SO4][443 K] CH3CH=CH2 + H2O" },
      {
        text: "Check the alternative: the other C3H8O alcohol is propan-2-ol, which is **secondary** — it would give Lucas turbidity in about five minutes without heating, and would oxidise to propanone (C3H6O), not an acid. So A must be propan-1-ol. ✓",
      },
    ],
  },
  {
    id: "a7-e5",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2024, 2023],
    question:
      "Give one chemical test to distinguish between:\n(a) ethanol and phenol\n(b) propan-1-ol and propan-2-ol",
    answer: [
      {
        label: "(a) Ethanol vs phenol — neutral FeCl3",
        text: "Phenol gives an intense **violet** colouration from a coloured iron–phenoxide complex; ethanol gives no colour.",
      },
      {
        text: "Alternatively, **bromine water**: phenol gives a white precipitate of 2,4,6-tribromophenol, ethanol does not react. Or **NaOH**: phenol dissolves as sodium phenoxide, ethanol does not.",
      },
      { equation: "C6H5OH + 3Br2 ->[H2O] 2,4,6-tribromophenol(s) + 3HBr" },
      {
        label: "(b) Propan-1-ol vs propan-2-ol — iodoform test",
        text: "Only propan-2-ol has the CH3CH(OH)– grouping, which is oxidised in situ to CH3CO–, so only it gives the **yellow precipitate** of iodoform.",
      },
      { equation: "CH3CH(OH)CH3 + 4I2 + 6NaOH -> CHI3(s) + CH3COONa + 5NaI + 5H2O" },
      {
        text: "The **Lucas test** also separates them: the secondary alcohol turns turbid in about five minutes, the primary one only on heating.",
      },
    ],
  },
];
