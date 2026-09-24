import type { Question } from "@/types";

/** Unit 7 — the named reactions and mechanisms the board asks for year after year. */
export const CH07D: Question[] = [
  {
    id: "a7-n1",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2023, 2024, 2019],
    question:
      "Write the chemical equations for:\n(a) Reimer–Tiemann reaction\n(b) Kolbe's reaction\n(c) Williamson synthesis\n(d) acetylation of salicylic acid",
    answer: [
      { label: "(a) Reimer–Tiemann — phenol to salicylaldehyde", equations: ["C6H5OH + CHCl3 + 3NaOH ->[340 K] o-HO–C6H4–CHO + 3NaCl + 2H2O"] },
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
        text: "The electrophile is **dichlorocarbene, :CCl2**, generated from chloroform and alkali. It attacks the ortho position of the phenoxide ion; the intermediate benzal chloride is then hydrolysed by the alkali. Acidification of the reaction mixture is needed to get the free aldehyde.",
      },
      { label: "(b) Kolbe — phenol to salicylic acid", equations: ["C6H5OH + NaOH -> C6H5ONa + H2O", "C6H5O^−Na^+ + CO2 ->[400 K][4–7 atm] o-HO–C6H4–COONa ->[H^+] o-HO–C6H4–COOH"] },
      {
        text: "Phenol itself is not nucleophilic enough; the **phenoxide** ion is, and it attacks the weak electrophile CO2 at the ortho position. The product, **salicylic acid**, is the starting point for aspirin.",
      },
      { label: "(c) Williamson synthesis — an ether from an alkoxide", equation: "CH3CH2ONa + CH3CH2Br -> CH3CH2–O–CH2CH3 + NaBr" },
      {
        text: "This is an **SN2** reaction, so the halide must be **primary**. With a secondary or tertiary halide the alkoxide acts as a base instead and elimination gives an alkene. To make tert-butyl methyl ether, therefore, use sodium tert-butoxide with **CH3Br**, never methoxide with tert-butyl bromide.",
      },
      { equation: "(CH3)3CONa + CH3Br -> (CH3)3C–O–CH3 + NaBr" },
      { text: "It also works for aryl alkyl ethers, since the aryl group must come from the **alkoxide** side: C6H5ONa + CH3I gives anisole." },
      { label: "(d) Acetylation of salicylic acid — aspirin", equation: "o-HO–C6H4–COOH + (CH3CO)2O ->[H^+] o-CH3COO–C6H4–COOH + CH3COOH" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "COOH" },
            { pos: 2, label: "OCOCH3", highlight: true },
          ],
          caption: "Aspirin (acetylsalicylic acid) — the phenolic –OH has been acetylated, the –COOH is untouched",
        },
      },
    ],
    keyPoint: "Reimer–Tiemann gives the aldehyde (:CCl₂), Kolbe gives the acid (CO₂) — both at the ortho position of phenoxide.",
  },
  {
    id: "a7-n2",
    chapter: 7,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Mechanisms",
    years: [2023, 2019, 2015],
    question:
      "(a) Write the mechanism for the formation of ethoxyethane from ethanol with conc. H2SO4 at 413 K.\n(b) Why does the same reaction give ethene at 443 K?\n(c) Why is ortho-nitrophenol steam volatile while para-nitrophenol is not?",
    answer: [
      { label: "(a) Mechanism — bimolecular dehydration to the ether", text: "Three steps, all reversible:" },
      { label: "Step 1 — protonation", equation: "CH3CH2OH + H^+ <=> CH3CH2–O^+H2" },
      {
        text: "The –OH group is a poor leaving group, so it is first converted into the excellent leaving group **water**.",
      },
      { label: "Step 2 — SN2 attack by a second alcohol molecule", equation: "CH3CH2OH + CH3CH2–O^+H2 -> CH3CH2–O^+(H)–CH2CH3 + H2O" },
      { label: "Step 3 — deprotonation", equation: "CH3CH2–O^+(H)–CH2CH3 <=> CH3CH2–O–CH2CH3 + H^+" },
      {
        text: "The acid is regenerated, so it is a genuine **catalyst**. Because the slow step involves two alcohol molecules, the reaction is **bimolecular**, and it only works for primary alcohols — a secondary or tertiary substrate would eliminate instead.",
      },
      {
        label: "(b) Why 443 K gives ethene",
        text: "The protonated alcohol has two possible fates, and temperature decides which wins:",
      },
      {
        table: [
          ["Temperature", "What happens", "Product", "Type"],
          ["413 K", "A second alcohol attacks the carbon", "CH3CH2–O–CH2CH3", "Substitution, bimolecular"],
          ["443 K", "The hydrogensulphate ion removes a β-hydrogen", "CH2=CH2", "Elimination, unimolecular"],
        ],
      },
      { equation: "CH3CH2OH ->[conc. H2SO4][443 K] CH2=CH2 + H2O" },
      {
        text: "Elimination increases the number of particles, so it has the larger positive **entropy change**. As ΔG = ΔH − TΔS, raising the temperature favours the elimination pathway. Excess alcohol favours the ether; excess acid and higher temperature favour the alkene.",
      },
      {
        label: "(c) Steam volatility of o-nitrophenol",
        text: "In **o-nitrophenol** the –OH and –NO2 groups are adjacent, so the hydrogen bond forms **within the same molecule** — intramolecular hydrogen bonding, also called **chelation**. The molecules therefore do not attract one another strongly, the compound is volatile, and it distils over in steam.",
      },
      {
        text: "In **p-nitrophenol** the two groups are too far apart to reach each other, so hydrogen bonding is **intermolecular**. The molecules associate into large aggregates, so the melting point is higher (387 K vs 318 K), the solubility in water is greater, and the compound is not steam volatile.",
      },
    ],
    keyPoint: "413 K → ether (SN2, bimolecular). 443 K → alkene (elimination). The same protonated intermediate, two fates.",
  },
  {
    id: "a7-n3",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of alcohols",
    years: [2024, 2020],
    question:
      "Give the structure of the major product expected from:\n(a) hydroboration of propene followed by oxidation with alkaline H2O2\n(b) reaction of propanal with methylmagnesium bromide, followed by hydrolysis\n(c) dehydration of (CH3)3C–OH with 20% H3PO4 at 358 K\n(d) phenol with Br2 in CS2 at 273 K",
    answer: [
      { label: "(a) Propan-1-ol", equations: ["3CH3CH=CH2 + BH3 ->[THF] (CH3CH2CH2)3B", "(CH3CH2CH2)3B + 3H2O2 ->[OH^−] 3CH3CH2CH2OH + B(OH)3"] },
      {
        text: "Boron adds to the **less hindered** carbon, and the –OH ends up where the boron was. The net result is **anti-Markovnikov** hydration, with **syn** addition and no rearrangement.",
      },
      { label: "(b) Butan-2-ol", equation: "CH3CH2CHO + CH3MgBr ->[dry ether] CH3CH2CH(OMgBr)CH3 ->[H3O^+] CH3CH2CH(OH)CH3" },
      {
        figure: {
          kind: "named",
          id: "butan-2-ol",
        },
      },
      {
        text: "A Grignard reagent adds to a carbonyl group and the pattern is fixed: **methanal → primary alcohol, any other aldehyde → secondary alcohol, ketone → tertiary alcohol**. Propanal is an aldehyde, so the product is secondary.",
      },
      { label: "(c) 2-Methylpropene", equation: "(CH3)3C–OH ->[20% H3PO4][358 K] (CH3)2C=CH2 + H2O" },
      {
        text: "A **tertiary** alcohol dehydrates under the mildest conditions of the three classes, because the carbocation formed is the most stable. The order of ease is 3° > 2° > 1°.",
      },
      { label: "(d) p-Bromophenol", equation: "C6H5OH + Br2 ->[CS2][273 K] p-Br–C6H4–OH + HBr" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 4, label: "Br", highlight: true },
          ],
          caption: "4-Bromophenol — monosubstitution, because the solvent is non-polar and the temperature low",
        },
      },
      {
        text: "In the **non-polar** solvent CS2 at low temperature, phenol is not ionised to the far more reactive phenoxide, so only one bromine enters. Change to **water** and the same reagent gives the white precipitate of 2,4,6-tribromophenol.",
      },
    ],
  },
];
