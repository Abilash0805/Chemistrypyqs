import type { Question } from "@/types";

/**
 * Unit 8 — the "arrange in order of" questions. Board analyses single these
 * out year after year as a block that is nearly always worth marks.
 */
export const CH08E: Question[] = [
  {
    id: "k8-o1",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Acidity of carboxylic acids",
    years: [2023, 2019, 2015],
    question:
      "Arrange in increasing order of acid strength and justify:\n(a) CH3COOH, ClCH2COOH, Cl2CHCOOH, Cl3CCOOH\n(b) CH3COOH, FCH2COOH, ClCH2COOH, BrCH2COOH\n(c) CH3CH2CH(Cl)COOH, CH3CH(Cl)CH2COOH, ClCH2CH2CH2COOH",
    answer: [
      {
        label: "The single idea behind all three",
        text: "A carboxylic acid is stronger when its **carboxylate ion is more stable**. Any group that withdraws electrons spreads the negative charge out and stabilises the anion, so the acid is stronger. Electron-releasing groups do the opposite.",
      },
      {
        label: "(a) Number of chlorines",
        text: "**CH3COOH < ClCH2COOH < Cl2CHCOOH < Cl3CCOOH**",
      },
      {
        table: [
          ["Acid", "–Cl groups", "pKa"],
          ["CH3COOH", "0", "4.76"],
          ["ClCH2COOH", "1", "2.86"],
          ["Cl2CHCOOH", "2", "1.29"],
          ["Cl3CCOOH", "3", "0.65"],
        ],
      },
      { text: "Each extra chlorine adds another **–I** pull, so the effects are cumulative. Trichloroacetic acid is almost as strong as a mineral acid." },
      {
        label: "(b) Which halogen",
        text: "**CH3COOH < BrCH2COOH < ClCH2COOH < FCH2COOH**",
      },
      {
        text: "The –I effect follows **electronegativity**, so F > Cl > Br > I. Fluoroacetic acid (pKa 2.59) is therefore the strongest of the four, and acetic acid, with an electron-**releasing** methyl group, is the weakest.",
      },
      {
        label: "(c) How far away the chlorine sits",
        text: "**ClCH2CH2CH2COOH < CH3CH(Cl)CH2COOH < CH3CH2CH(Cl)COOH**",
      },
      {
        table: [
          ["Acid", "Position of Cl", "pKa"],
          ["4-Chlorobutanoic acid", "γ (C-4)", "4.52"],
          ["3-Chlorobutanoic acid", "β (C-3)", "4.05"],
          ["2-Chlorobutanoic acid", "α (C-2)", "2.86"],
        ],
      },
      {
        text: "The inductive effect **falls off sharply with distance** — it is essentially negligible beyond three bonds. So the nearer the chlorine is to the –COOH group, the stronger the acid.",
      },
      {
        text: "For **aromatic** acids the same logic applies: 4-nitrobenzoic acid (–NO2 withdrawing) > benzoic acid > 4-methoxybenzoic acid (–OCH3 releasing). Benzoic acid itself is stronger than acetic acid, because the sp^2 ring carbon is more electron-withdrawing than an sp^3 methyl carbon.",
      },
    ],
    keyPoint: "More electronegative, more of them, and closer to the –COOH → stronger acid. All three questions are the same question.",
  },
  {
    id: "k8-o2",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nucleophilic addition",
    years: [2024, 2018],
    question:
      "Arrange in decreasing order of reactivity towards nucleophilic addition and give your reasoning:\nHCHO, CH3CHO, CH3COCH3, C6H5COCH3, C6H5CHO",
    answer: [
      {
        label: "The order",
        text: "**HCHO > CH3CHO > C6H5CHO > CH3COCH3 > C6H5COCH3**",
      },
      {
        label: "Two effects, working together",
        points: [
          "**Electronic:** alkyl and aryl groups push electron density towards the carbonyl carbon, reducing the **δ+** that a nucleophile attacks. More such groups → less reactive. An aryl group additionally delocalises the carbonyl into the ring, which stabilises the starting material and slows the reaction further.",
          "**Steric:** the carbonyl carbon changes from **sp^2 (trigonal planar) to sp^3 (tetrahedral)** during the addition. Bulky groups crowd the incoming nucleophile and destabilise the tetrahedral intermediate.",
        ],
      },
      {
        table: [
          ["Compound", "Groups on C=O", "Reactivity"],
          ["HCHO", "2 × H", "Highest — no alkyl group at all"],
          ["CH3CHO", "1 alkyl, 1 H", "High"],
          ["C6H5CHO", "1 aryl, 1 H", "Lower — resonance with the ring"],
          ["CH3COCH3", "2 alkyl", "Low"],
          ["C6H5COCH3", "1 aryl, 1 alkyl", "Lowest"],
        ],
      },
      { figure: { kind: "named", id: "propanal-vs-propanone" } },
      {
        text: "This is why **aldehydes are generally more reactive than ketones** towards nucleophilic addition, and why HCHO reacts fastest of all.",
      },
    ],
  },
  {
    id: "k8-o3",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Physical properties",
    years: [2023, 2020],
    question:
      "Arrange in increasing order of boiling point and explain:\nn-butane, butanal, butan-1-ol, butanoic acid, ethoxyethane",
    answer: [
      {
        label: "The order",
        text: "**n-butane < ethoxyethane < butanal < butan-1-ol < butanoic acid**",
      },
      {
        table: [
          ["Compound", "M", "Strongest force between molecules", "b.p. / K"],
          ["n-Butane", "58", "Dispersion only", "273"],
          ["Ethoxyethane", "74", "Weak dipole–dipole", "308"],
          ["Butanal", "72", "Dipole–dipole (strong C=O)", "349"],
          ["Butan-1-ol", "74", "Hydrogen bonding (O–H)", "391"],
          ["Butanoic acid", "88", "Hydrogen bonding, as a **dimer**", "436"],
        ],
      },
      {
        label: "The reasoning",
        points: [
          "**n-Butane** is non-polar, so only dispersion forces operate — the lowest boiling point.",
          "**Ethoxyethane** has a dipole but no O–H bond, so it cannot hydrogen bond to itself.",
          "**Butanal** has a strongly polar C=O group, giving stronger dipole–dipole attraction than the ether.",
          "**Butan-1-ol** hydrogen bonds through its O–H group, which is a much stronger interaction again.",
          "**Butanoic acid** forms a **cyclic dimer** held by two hydrogen bonds, so the effective particle is twice the size — the highest boiling point of all.",
        ],
      },
      {
        text: "The dimer is why a carboxylic acid boils higher than an alcohol of comparable mass, and why the measured molar mass of a carboxylic acid in benzene comes out roughly **doubled**.",
      },
    ],
    keyPoint: "Dispersion < dipole–dipole < hydrogen bonding < hydrogen-bonded dimer.",
  },
];
