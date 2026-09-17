import type { Question } from "@/types";

/** Unit 9 — the "give the structures of A, B and C" chains, a perennial 3-marker. */
export const CH09E: Question[] = [
  {
    id: "n9-x1",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reaction chains",
    years: [2014, 2017, 2022],
    question:
      "Give the structures of A, B and C:\n(i) CH3Br →(KCN) A →(LiAlH4) B →(HNO2) C\n(ii) CH3COOH →(NH3, Δ) A →(Br2 + KOH) B →(CHCl3 + alc. KOH) C",
    answer: [
      {
        label: "(i) The nitrile route — the chain grows by one carbon",
        table: [
          ["", "Compound", "Formula", "Carbons"],
          ["A", "Ethanenitrile (methyl cyanide)", "CH3CN", "2"],
          ["B", "Ethanamine", "CH3CH2NH2", "2"],
          ["C", "Ethanol", "CH3CH2OH", "2"],
        ],
      },
      {
        equations: [
          "CH3Br + KCN ->[aq. ethanol] CH3CN + KBr",
          "CH3CN + 4[H] ->[LiAlH4] CH3CH2NH2",
          "CH3CH2NH2 + HNO2 ->[273 K] CH3CH2OH + N2(g) + H2O",
        ],
      },
      {
        text: "The first step is the one that matters: the cyanide ion adds a carbon, so a **one-carbon** halide becomes a **two-carbon** amine. Reduction of a nitrile always gives a **primary** amine, and nitrous acid converts an aliphatic primary amine to the alcohol with brisk evolution of nitrogen.",
      },
      {
        label: "(ii) The Hoffmann route — the chain shrinks by one carbon",
        table: [
          ["", "Compound", "Formula", "Carbons"],
          ["A", "Ethanamide (acetamide)", "CH3CONH2", "2"],
          ["B", "Methanamine (methylamine)", "CH3NH2", "1"],
          ["C", "Methyl isocyanide", "CH3NC", "1"],
        ],
      },
      {
        equations: [
          "CH3COOH + NH3 -> CH3COONH4 ->[Δ][−H2O] CH3CONH2",
          "CH3CONH2 + Br2 + 4KOH -> CH3NH2 + K2CO3 + 2KBr + 2H2O",
          "CH3NH2 + CHCl3 + 3KOH ->[Δ] CH3NC + 3KCl + 3H2O",
        ],
      },
      {
        text: "**Hoffmann bromamide degradation** loses the carbonyl carbon as carbonate, so the amine has one carbon **fewer** than the amide. The last step is the **carbylamine reaction**, which only primary amines give — so its success here confirms B is primary.",
      },
      {
        label: "The contrast worth remembering",
        table: [
          ["Route", "Reagents", "Effect on carbon count"],
          ["Nitrile", "KCN, then LiAlH4 or Na/C2H5OH", "**+1**"],
          ["Amide reduction", "LiAlH4 on R–CONH2", "unchanged"],
          ["Hoffmann bromamide", "Br2 / NaOH or KOH on R–CONH2", "**−1**"],
        ],
      },
    ],
    keyPoint: "KCN adds a carbon, Hoffmann removes one. Half these questions turn on nothing but that.",
  },
  {
    id: "n9-x2",
    chapter: 9,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2015, 2024],
    question:
      "Give a simple chemical test to distinguish between:\n(a) (CH3)2NH and (CH3)3N\n(b) ethylamine and aniline",
    answer: [
      {
        label: "(a) A secondary from a tertiary amine — Hinsberg's test",
        text: "Shake each with **benzenesulphonyl chloride** (C6H5SO2Cl) and then add aqueous KOH.",
      },
      { equation: "(CH3)2NH + C6H5SO2Cl -> C6H5SO2N(CH3)2 + HCl" },
      {
        table: [
          ["Amine", "Reacts with C6H5SO2Cl?", "Product in KOH"],
          ["1° R–NH2", "Yes", "Sulphonamide **dissolves** — it keeps an acidic N–H"],
          ["2° R_2NH", "Yes", "Precipitate, **insoluble** in KOH — no N–H left"],
          ["3° R_3N", "**No**", "No reaction at all"],
        ],
      },
      {
        text: "So (CH3)2NH gives a precipitate that stays undissolved in KOH, while (CH3)3N gives nothing — it has no hydrogen on nitrogen to replace.",
      },
      {
        text: "The **carbylamine test** does not separate this pair, because neither amine is primary and so neither responds.",
      },
      {
        label: "(b) An aliphatic from an aromatic amine — azo dye test",
        text: "Diazotise each at 273–278 K and pour into alkaline **2-naphthol**.",
      },
      { equation: "C6H5NH2 + NaNO2 + 2HCl ->[273–278 K] C6H5N2^+Cl^− + NaCl + 2H2O" },
      {
        text: "Aniline gives a stable diazonium salt that couples to an **orange-red dye**. Ethylamine's diazonium salt is unstable even at 273 K — it decomposes immediately with **brisk effervescence of nitrogen**, giving ethanol and no colour.",
      },
      { equation: "CH3CH2NH2 + HNO2 -> CH3CH2OH + N2(g) + H2O" },
      {
        text: "The reason is resonance: the aryl diazonium ion is stabilised by delocalisation of the positive charge into the ring, which an alkyl group cannot provide.",
      },
    ],
  },
];
