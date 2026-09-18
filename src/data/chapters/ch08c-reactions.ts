import type { Question } from "@/types";

/**
 * Unit 8 — equation-based questions.
 *
 * "Write the product", "complete the reaction", "carry out the conversion" and
 * "identify A, B, C" are the commonest shapes in this unit, and they carry the
 * most marks. Each answer gives the balanced equation, not just the name.
 */
export const CH08C: Question[] = [
  {
    id: "k8-e1",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2017, 2016, 2024],
    question:
      "Complete the following reactions:\n(a) C6H5CHO + CH3COCH3 \u2192(dil. NaOH)\n(b) CH3CHO + HCN \u2192\n(c) C6H5COCH3 \u2192(Zn\u2013Hg / conc. HCl)",
    answer: [
      { label: "(a) Cross aldol condensation", equation: "C6H5CHO + CH3COCH3 ->[dil. NaOH][\u2212H2O] C6H5CH=CH\u2013COCH3" },
      {
        text: "Benzaldehyde has no \u03B1-hydrogen, so it can only be the carbonyl partner; propanone supplies the carbanion. The product is **benzalacetone** (4-phenylbut-3-en-2-one).",
      },
      { label: "(b) Nucleophilic addition", equation: "CH3CHO + HCN -> CH3CH(OH)CN" },
      { text: "The **cyanohydrin**, 2-hydroxypropanenitrile. Hydrolysis of it gives lactic acid." },
      { label: "(c) Clemmensen reduction", equation: "C6H5COCH3 + 4[H] ->[Zn\u2013Hg/conc. HCl] C6H5CH2CH3 + H2O" },
      { text: "The carbonyl is reduced all the way to \u2013CH2\u2013, giving **ethylbenzene**." },
    ],
  },
  {
    id: "k8-e2",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2020, 2019],
    question:
      "Carry out the following conversions:\n(a) Benzoic acid to benzaldehyde\n(b) Ethanoic acid to methanamine\n(c) Propanone to propan-2-ol",
    answer: [
      {
        label: "(a) Benzoic acid \u2192 benzaldehyde",
        text: "Convert to the acid chloride, then reduce it partially (Rosenmund):",
      },
      {
        equations: [
          "C6H5COOH + SOCl2 -> C6H5COCl + SO2 + HCl",
          "C6H5COCl + H2 ->[Pd\u2013BaSO4][S or quinoline] C6H5CHO + HCl",
        ],
      },
      { figure: { kind: "named", id: "benzaldehyde" } },
      {
        label: "(b) Ethanoic acid \u2192 methanamine",
        text: "Make the amide, then run a Hoffmann degradation, which removes one carbon:",
      },
      {
        equations: [
          "CH3COOH + NH3 -> CH3COONH4 ->[\u0394][\u2212H2O] CH3CONH2",
          "CH3CONH2 + Br2 + 4NaOH -> CH3NH2 + Na2CO3 + 2NaBr + 2H2O",
        ],
      },
      { label: "(c) Propanone \u2192 propan-2-ol", equation: "CH3COCH3 + 2[H] ->[NaBH4 or LiAlH4] CH3CH(OH)CH3" },
      { text: "Catalytic hydrogenation over Ni also works. NaBH4 is the gentler choice, since it leaves esters and acids untouched." },
    ],
  },
  {
    id: "k8-e3",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Conversions",
    years: [2019, 2017],
    question:
      "How would you bring about the following conversions?\n(a) Propanoic acid to propanone\n(b) Benzene to acetophenone\n(c) Ethanal to butane-1,3-diol",
    answer: [
      {
        label: "(a) Propanoic acid \u2192 propanone",
        text: "Heat the calcium salt — a ketone results, losing CO2 as carbonate:",
      },
      {
        equations: [
          "2CH3CH2COOH + Ca(OH)2 -> (CH3CH2COO)2Ca + 2H2O",
          "(CH3CH2COO)2Ca ->[\u0394] CH3CH2COCH2CH3 + CaCO3",
        ],
      },
      {
        text: "For propanone specifically, use a **mixture** of the calcium salts of ethanoic and propanoic acid, or simply heat calcium ethanoate alone.",
      },
      { label: "(b) Benzene \u2192 acetophenone (Friedel\u2013Crafts acylation)", equation: "C6H6 + CH3COCl ->[anhyd. AlCl3] C6H5COCH3 + HCl" },
      { figure: { kind: "named", id: "acetophenone" } },
      { label: "(c) Ethanal \u2192 butane-1,3-diol", text: "Aldol addition (stopping before dehydration), then reduction:" },
      {
        equations: [
          "2CH3CHO ->[dil. NaOH][cold] CH3CH(OH)CH2CHO",
          "CH3CH(OH)CH2CHO + 2[H] ->[NaBH4] CH3CH(OH)CH2CH2OH",
        ],
      },
      { text: "Keeping the aldol step **cold** is essential — warming would dehydrate it to but-2-enal instead." },
    ],
    keyPoint: "Calcium salt + \u0394 \u2192 ketone. Sodium salt + soda lime \u2192 alkane.",
  },
  {
    id: "k8-e4",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2014, 2020],
    question:
      "Write the products:\n(a) 2C6H5CHO + conc. NaOH \u2192\n(b) CH3COCH3 + H2N\u2013NHCONH2 \u2192\n(c) CH3CH2COOH + Cl2/red P \u2192, followed by hydrolysis",
    answer: [
      { label: "(a) Cannizzaro reaction", equation: "2C6H5CHO + conc. NaOH -> C6H5CH2OH + C6H5COONa" },
      {
        text: "Benzaldehyde has no \u03B1-hydrogen, so instead of aldol it **disproportionates** — one molecule is reduced to benzyl alcohol, the other oxidised to sodium benzoate.",
      },
      { label: "(b) Semicarbazone formation", equation: "CH3COCH3 + H2N\u2013NHCONH2 -> (CH3)2C=N\u2013NHCONH2 + H2O" },
      { text: "An addition\u2013elimination with an ammonia derivative; the product is propanone semicarbazone." },
      { label: "(c) Hell\u2013Volhard\u2013Zelinsky, then hydrolysis", equations: ["CH3CH2COOH + Cl2 ->[red P] CH3CH(Cl)COOH + HCl", "CH3CH(Cl)COOH + H2O ->[aq. KOH] CH3CH(OH)COOH"] },
      { text: "Halogenation occurs at the **\u03B1-carbon**, and hydrolysis of the \u03B1-chloro acid gives **lactic acid** (2-hydroxypropanoic acid)." },
    ],
  },
  {
    id: "k8-e5",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2018, 2023],
    question:
      "(A), (B) and (C) are three non-cyclic functional isomers of a carbonyl compound of formula C4H8O. Isomers (A) and (C) give a positive 2,4-DNP test, and (A) also reduces Tollens' reagent. Isomer (C) gives a positive iodoform test. Isomer (B) does not react with 2,4-DNP. Identify A, B and C and write the equations.",
    answer: [
      {
        label: "Working through the clues",
        table: [
          ["Clue", "What it tells you"],
          ["A and C give 2,4-DNP", "Both are aldehydes or ketones"],
          ["A reduces Tollens'", "A is an **aldehyde**"],
          ["C gives iodoform", "C contains **CH3CO\u2013**, so it is a methyl ketone"],
          ["B does not react with 2,4-DNP", "B has **no carbonyl** — it must be an alcohol or ether of the same formula"],
        ],
      },
      {
        table: [
          ["", "Compound", "Formula"],
          ["A", "Butanal", "CH3CH2CH2CHO"],
          ["B", "But-3-en-1-ol (or ethoxyethene)", "CH2=CH\u2013CH2CH2OH"],
          ["C", "Butan-2-one", "CH3COCH2CH3"],
        ],
      },
      { label: "Equations", equation: "CH3CH2CH2CHO + 2[Ag(NH3)2]^+ + 3OH^\u2212 -> CH3CH2CH2COO^\u2212 + 2Ag(s) + 4NH3 + 2H2O" },
      { equation: "CH3COCH2CH3 + 3I2 + 4NaOH -> CHI3(s) + CH3CH2COONa + 3NaI + 3H2O" },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3", bond: 1 },
            { label: "C", up: "O", upOrder: 2, bond: 1, highlight: true },
            { label: "CH2", bond: 1 },
            { label: "CH3" },
          ],
          caption: "C = butan-2-one, the only C4H8O ketone",
        },
      },
      {
        text: "Note that **2-methylpropanal**, (CH3)2CHCHO, is also C4H8O and would fit A's tests; butanal is the straight-chain answer usually expected.",
      },
    ],
  },
  {
    id: "k8-e6",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2017, 2024],
    question:
      "Give a chemical test to distinguish between:\n(a) butanal and butan-2-one\n(b) benzoic acid and phenol\n(c) ethanal and propanal",
    answer: [
      {
        label: "(a) Butanal vs butan-2-one — Tollens' test",
        text: "Butanal is an aldehyde and gives a **silver mirror**; butan-2-one gives nothing.",
      },
      { equation: "CH3CH2CH2CHO + 2[Ag(NH3)2]^+ + 3OH^\u2212 -> CH3CH2CH2COO^\u2212 + 2Ag(s) + 4NH3 + 2H2O" },
      {
        label: "(b) Benzoic acid vs phenol — NaHCO3 test",
        text: "Benzoic acid is a stronger acid than carbonic acid, so it liberates **CO2 with brisk effervescence**; phenol is too weak to do so.",
      },
      { equation: "C6H5COOH + NaHCO3 -> C6H5COONa + H2O + CO2(g)" },
      { text: "Alternatively, neutral FeCl3 gives phenol a **violet** colouration." },
      {
        label: "(c) Ethanal vs propanal — iodoform test",
        text: "Both are aldehydes, so oxidation tests cannot separate them. But only **ethanal** has a CH3CO\u2013 group, so only it gives the yellow iodoform precipitate.",
      },
      { equation: "CH3CHO + 3I2 + 4NaOH -> CHI3(s) + HCOONa + 3NaI + 3H2O" },
    ],
    keyPoint: "Iodoform is the test that separates two aldehydes — it finds CH\u2083CO\u2013, not the \u2013CHO.",
  },
  {
    id: "k8-e7",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Identification",
    years: [2017],
    question:
      "Identify A, B and C:\nC6H5Br \u2192(Mg / dry ether) A \u2192(CO2, then H3O+) B \u2192(SOCl2) C",
    answer: [
      { label: "A = phenylmagnesium bromide, C6H5MgBr", equation: "C6H5Br + Mg ->[dry ether] C6H5MgBr" },
      { text: "The Grignard reagent. The ether must be scrupulously dry — any water destroys it, giving benzene." },
      { label: "B = benzoic acid, C6H5COOH", equations: ["C6H5MgBr + CO2 -> C6H5COOMgBr", "C6H5COOMgBr + H3O^+ -> C6H5COOH + Mg(OH)Br"] },
      { figure: { kind: "named", id: "benzoic-acid" } },
      { label: "C = benzoyl chloride, C6H5COCl", equation: "C6H5COOH + SOCl2 -> C6H5COCl + SO2(g) + HCl(g)" },
      {
        text: "Carbonation of a Grignard reagent is the standard way to **add one carbon** and arrive at a carboxylic acid — worth remembering as a chain-lengthening tool.",
      },
    ],
  },
  {
    id: "k8-e8",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Reactions",
    years: [2025, 2020],
    question:
      "(a) Write the mechanism of the nucleophilic addition of HCN to a carbonyl compound.\n(b) Write the products when ethanal reacts with: (i) dilute NaOH, (ii) Tollens' reagent, (iii) I2/NaOH, (iv) H2N\u2013NHC6H5.",
    answer: [
      {
        label: "(a) Mechanism",
        text: "**Step 1** — the cyanide ion, the nucleophile, attacks the electrophilic carbonyl carbon perpendicular to the plane of the molecule. The \u03C0 electrons shift onto oxygen and the carbon rehybridises from sp² to sp³:",
      },
      { equation: "CN^\u2212 + R2C=O -> R2C(CN)\u2013O^\u2212" },
      { text: "**Step 2** — the tetrahedral alkoxide intermediate picks up a proton to give the cyanohydrin:" },
      { equation: "R2C(CN)\u2013O^\u2212 + H^+ -> R2C(CN)\u2013OH" },
      {
        text: "The reaction is catalysed by a **trace of base**, which generates CN⁻ from HCN. Pure HCN reacts very slowly, because it supplies too few cyanide ions.",
      },
      { label: "(b)(i) Aldol condensation", equations: ["2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO", "->[\u0394][\u2212H2O] CH3CH=CH\u2013CHO"] },
      { label: "(b)(ii) Tollens' oxidation", equation: "CH3CHO + 2[Ag(NH3)2]^+ + 3OH^\u2212 -> CH3COO^\u2212 + 2Ag(s) + 4NH3 + 2H2O" },
      { label: "(b)(iii) Iodoform reaction", equation: "CH3CHO + 3I2 + 4NaOH -> CHI3(s) + HCOONa + 3NaI + 3H2O" },
      { label: "(b)(iv) Phenylhydrazone formation", equation: "CH3CHO + H2N\u2013NHC6H5 -> CH3CH=N\u2013NHC6H5 + H2O" },
    ],
  },
];
