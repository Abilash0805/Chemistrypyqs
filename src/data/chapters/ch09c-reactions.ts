import type { Question } from "@/types";

/** Unit 9 — equation-based questions on amines and diazonium salts. */
export const CH09C: Question[] = [
  {
    id: "n9-e1",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2019, 2024],
    question:
      "How do you convert:\n(a) benzene to aniline\n(b) aniline to benzonitrile\n(c) aniline to iodobenzene?",
    answer: [
      { label: "(a) Benzene \u2192 aniline", text: "Nitrate, then reduce:" },
      {
        equations: [
          "C6H6 + HNO3 ->[conc. H2SO4][323\u2013333 K] C6H5NO2 + H2O",
          "C6H5NO2 + 6[H] ->[Sn/conc. HCl] C6H5NH2 + 2H2O",
        ],
      },
      { figure: { kind: "named", id: "aniline" } },
      { label: "(b) Aniline \u2192 benzonitrile (Sandmeyer)", equations: ["C6H5NH2 + NaNO2 + 2HCl ->[273\u2013278 K] C6H5N2^+Cl^\u2212 + NaCl + 2H2O", "C6H5N2^+Cl^\u2212 + CuCN/KCN -> C6H5CN + N2"] },
      { label: "(c) Aniline \u2192 iodobenzene", equation: "C6H5N2^+Cl^\u2212 + KI -> C6H5I + KCl + N2" },
      {
        text: "Iodide is the one halide that needs **no copper salt** — potassium iodide alone displaces nitrogen. Note also that iodobenzene cannot be made by direct iodination of benzene, because that reaction is reversible; the diazonium route is the practical one.",
      },
    ],
    keyPoint: "Diazonium salts are the gateway: \u2013NO2 \u2192 \u2013NH2 \u2192 \u2013N2\u207A \u2192 almost anything.",
  },
  {
    id: "n9-e2",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2018, 2023],
    question:
      "Complete the following:\n(a) C6H5N2+Cl\u2212 + H3PO2 + H2O \u2192\n(b) C6H5NH2 + Br2 (aq) \u2192\n(c) C6H5NH2 + CHCl3 + 3KOH \u2192",
    answer: [
      { label: "(a) Reductive deamination", equation: "C6H5N2^+Cl^\u2212 + H3PO2 + H2O -> C6H6 + N2 + H3PO3 + HCl" },
      {
        text: "The \u2013N2⁺ group is replaced by **\u2013H**, removing the substituent entirely. Combined with nitration and reduction, this lets you use \u2013NH2 purely as a **blocking group** to steer another substituent, then delete it.",
      },
      { label: "(b) Bromination in water \u2014 trisubstitution", equation: "C6H5NH2 + 3Br2 ->[H2O] 2,4,6-tribromoaniline(s) + 3HBr" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "NH2" },
            { pos: 2, label: "Br" },
            { pos: 4, label: "Br", highlight: true },
            { pos: 6, label: "Br" },
          ],
          caption: "2,4,6-Tribromoaniline \u2014 a white precipitate, so this doubles as a test for aniline",
        },
      },
      {
        text: "The \u2013NH2 group activates the ring so strongly that monosubstitution cannot be achieved in water. To stop at one bromine, **acetylate first** and hydrolyse afterwards.",
      },
      { label: "(c) Carbylamine reaction", equation: "C6H5NH2 + CHCl3 + 3KOH ->[\u0394] C6H5NC + 3KCl + 3H2O" },
      { text: "Gives phenyl isocyanide, with an extremely offensive smell. Only **primary** amines respond, so this is a reliable test." },
    ],
  },
  {
    id: "n9-e3",
    chapter: 9,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2015, 2024],
    question:
      "An aromatic compound 'A' of molecular formula C7H7NO2 is reduced to 'B' (C7H9N). 'B' on treatment with NaNO2/HCl at 273 K gives 'C', which on warming with water gives 'D' (C7H8O). Identify A, B, C and D and write the equations.",
    answer: [
      {
        label: "Working",
        text: "C7H7NO2 with one nitro group on a methyl-substituted benzene ring points to a **nitrotoluene**; reduction to C7H9N (a loss of two oxygens, gain of two hydrogens) confirms the amine.",
      },
      {
        table: [
          ["", "Compound", "Formula"],
          ["A", "p-Nitrotoluene", "CH3\u2013C6H4\u2013NO2"],
          ["B", "p-Toluidine (4-methylaniline)", "CH3\u2013C6H4\u2013NH2"],
          ["C", "p-Toluenediazonium chloride", "CH3\u2013C6H4\u2013N2^+Cl^\u2212"],
          ["D", "p-Cresol (4-methylphenol)", "CH3\u2013C6H4\u2013OH"],
        ],
      },
      { label: "Equations", equation: "CH3C6H4NO2 + 6[H] ->[Sn/conc. HCl] CH3C6H4NH2 + 2H2O" },
      { equation: "CH3C6H4NH2 + NaNO2 + 2HCl ->[273\u2013278 K] CH3C6H4N2^+Cl^\u2212 + NaCl + 2H2O" },
      { equation: "CH3C6H4N2^+Cl^\u2212 + H2O ->[\u0394] CH3C6H4OH + N2 + HCl" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH", highlight: true },
            { pos: 4, label: "CH3" },
          ],
          caption: "D = p-cresol, C7H8O",
        },
      },
      {
        text: "Check the formulae add up: C7H7NO2 (A) \u2192 C7H9N (B) \u2192 C7H8O (D). Every step keeps all seven carbons. \u2713",
      },
    ],
  },
  {
    id: "n9-e4",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions",
    years: [2020, 2016],
    question:
      "Write the products when aniline reacts with:\n(a) acetic anhydride\n(b) benzenesulphonyl chloride\n(c) conc. H2SO4 at 453\u2013473 K",
    answer: [
      { label: "(a) Acetylation", equation: "C6H5NH2 + (CH3CO)2O ->[pyridine] C6H5NHCOCH3 + CH3COOH" },
      { text: "Gives **acetanilide**, used to moderate the activating power of \u2013NH2 before an electrophilic substitution." },
      { label: "(b) Hinsberg's reagent", equation: "C6H5NH2 + C6H5SO2Cl -> C6H5SO2NHC6H5 + HCl" },
      {
        text: "Aniline is primary, so the sulphonamide retains an **N\u2013H** made acidic by the two sulphonyl oxygens. It therefore **dissolves in aqueous KOH** — the diagnostic result for a primary amine.",
      },
      { label: "(c) Sulphonation", equation: "C6H5NH2 + H2SO4 ->[453\u2013473 K] p-H2N\u2013C6H4\u2013SO3H" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "NH3^+", highlight: true },
            { pos: 4, label: "SO3^\u2212", highlight: true },
          ],
          caption: "Sulphanilic acid, which exists as the zwitterion shown",
        },
      },
      {
        text: "The product, **sulphanilic acid**, exists as a dipolar zwitterion because the sulphonic acid protonates the amine internally — which is why it melts high and dissolves poorly in organic solvents.",
      },
    ],
  },
  {
    id: "n9-e5",
    chapter: 9,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Conversions",
    years: [2019, 2023],
    question:
      "Convert N-phenylethanamide (acetanilide) to p-bromoaniline. Why is this route used instead of brominating aniline directly?",
    answer: [
      {
        label: "The route",
        equations: [
          "C6H5NHCOCH3 + Br2 ->[CH3COOH] p-Br\u2013C6H4\u2013NHCOCH3 + HBr",
          "p-Br\u2013C6H4\u2013NHCOCH3 + H2O ->[H^+ or OH^\u2212][\u0394] p-Br\u2013C6H4\u2013NH2 + CH3COOH",
        ],
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "NH2", highlight: true },
            { pos: 4, label: "Br" },
          ],
          caption: "p-Bromoaniline",
        },
      },
      {
        label: "Why not brominate aniline directly",
        text: "The \u2013NH2 group is so **strongly activating** that bromine attacks all three available positions at once, giving 2,4,6-tribromoaniline and no useful monosubstituted product.",
      },
      {
        text: "Acetylation ties up part of the nitrogen lone pair in the acetyl carbonyl, so the ring is only **moderately** activated and monosubstitution can be controlled. The protecting group is then removed by hydrolysis. The bulky acetamido group also favours the **para** position sterically.",
      },
    ],
    keyPoint: "Acetylate \u2192 substitute \u2192 hydrolyse. The standard way to tame an over-activating \u2013NH2.",
  },
  {
    id: "n9-e6",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Identification",
    years: [2014],
    question:
      "Identify A, B and C:\nCH3COOH \u2192(NH3, \u0394) A \u2192(LiAlH4) B \u2192(HNO2, 273 K) C\nContrast this with what Hoffmann degradation of A would give.",
    answer: [
      { label: "A = acetamide, CH3CONH2", equations: ["CH3COOH + NH3 -> CH3COONH4", "CH3COONH4 ->[\u0394][\u2212H2O] CH3CONH2"] },
      { label: "B = ethylamine, CH3CH2NH2", equation: "CH3CONH2 + 4[H] ->[LiAlH4] CH3CH2NH2 + H2O" },
      { text: "LiAlH4 reduces the amide **keeping both carbons** — the \u2013CONH2 becomes \u2013CH2NH2." },
      { label: "C = ethanol, CH3CH2OH", equation: "CH3CH2NH2 + HNO2 -> CH3CH2OH + N2(g) + H2O" },
      {
        label: "Contrast with Hoffmann degradation",
        text: "Treating the same amide A with Br2/NaOH would **lose the carbonyl carbon** and give methylamine, one carbon shorter:",
      },
      { equation: "CH3CONH2 + Br2 + 4NaOH -> CH3NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        table: [
          ["Route from CH3CONH2", "Product", "Carbon count"],
          ["LiAlH4 reduction", "CH3CH2NH2 (ethylamine)", "2 \u2014 unchanged"],
          ["Hoffmann bromamide", "CH3NH2 (methylamine)", "1 \u2014 one lost"],
        ],
      },
    ],
  },
];
