import type { Question } from "@/types";

/** Unit 8 — Aldehydes, Ketones and Carboxylic Acids, second tranche. */
export const CH08B: Question[] = [
  /* ---------------- Named reactions ---------------- */
  {
    id: "k8-s9",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2017],
    question: "Write the equations involved in: (i) Clemmensen reduction, (ii) decarboxylation.",
    answer: [
      {
        label: "(i) Clemmensen reduction",
        text: "Reduces a carbonyl group all the way to \u2013CH2\u2013 using zinc amalgam and concentrated hydrochloric acid:",
      },
      { equation: "C6H5COCH3 + 4[H] ->[Zn\u2013Hg/conc. HCl] C6H5CH2CH3 + H2O" },
      {
        text: "Use Clemmensen when the molecule tolerates **acid**; use Wolff\u2013Kishner (H2N\u2013NH2 then KOH/glycol) when it tolerates **base** instead. Both achieve the same C=O \u2192 CH2 conversion.",
      },
      {
        label: "(ii) Decarboxylation",
        text: "The sodium salt of a carboxylic acid is heated with soda lime (NaOH + CaO), losing CO2 and giving an alkane with one carbon fewer:",
      },
      { equation: "CH3COONa + NaOH ->[CaO][\u0394] CH4 + Na2CO3" },
      { equation: "C6H5COONa + NaOH ->[CaO][\u0394] C6H6 + Na2CO3" },
    ],
  },
  {
    id: "k8-s10",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions",
    years: [2014, 2017],
    question:
      "Write the products of:\n(a) CH3CHO + HCN\n(b) CH3CHO + H2N\u2013OH\n(c) 2CH3CHO in the presence of dilute NaOH\n(d) CH3COOH + Cl2 in the presence of red phosphorus",
    answer: [
      { label: "(a) Nucleophilic addition \u2014 cyanohydrin", equation: "CH3CHO + HCN -> CH3CH(OH)CN" },
      { text: "Product: 2-hydroxypropanenitrile (acetaldehyde cyanohydrin). Hydrolysis of it gives lactic acid." },
      { label: "(b) Addition\u2013elimination \u2014 oxime", equation: "CH3CHO + H2N\u2013OH -> CH3CH=N\u2013OH + H2O" },
      { text: "Product: acetaldoxime. These reactions work best at pH 3.5\u20134.5 — too acidic and the nucleophile is protonated, too basic and no catalysis occurs." },
      { label: "(c) Aldol condensation", equations: ["2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO", "CH3CH(OH)CH2CHO ->[\u0394][\u2212H2O] CH3CH=CH\u2013CHO"] },
      { text: "The aldol (3-hydroxybutanal) loses water on warming to give the conjugated \u03B1,\u03B2-unsaturated aldehyde **but-2-enal**." },
      { label: "(d) Hell\u2013Volhard\u2013Zelinsky reaction", equation: "CH3COOH + Cl2 ->[red P][then H2O] ClCH2COOH + HCl" },
      { text: "Halogenation occurs specifically at the **\u03B1-position**, giving chloroethanoic acid — the gateway to \u03B1-hydroxy and \u03B1-amino acids." },
    ],
  },
  {
    id: "k8-s11",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Preparation",
    years: [2016],
    question:
      "Identify A and B:\nCH3COCl \u2192(H2, Pd\u2013BaSO4) A \u2192(H2N\u2013OH) B\nName the first reaction.",
    answer: [
      {
        label: "A = ethanal, CH3CHO",
        text: "This is the **Rosenmund reduction** — an acyl chloride hydrogenated over palladium on barium sulphate, poisoned with sulphur or quinoline:",
      },
      { equation: "CH3COCl + H2 ->[Pd\u2013BaSO4][S or quinoline] CH3CHO + HCl" },
      {
        text: "The poison is essential: unpoisoned palladium would carry the reduction past the aldehyde to ethanol.",
      },
      { label: "B = acetaldoxime, CH3CH=N\u2013OH", equation: "CH3CHO + H2N\u2013OH -> CH3CH=N\u2013OH + H2O" },
      { text: "Hydroxylamine adds across the C=O and then water is eliminated, giving the **oxime**." },
    ],
  },
  {
    id: "k8-s12",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions",
    years: [2020],
    question:
      "Write the products of:\n(a) propan-1-ol with PCC\n(b) salicylic acid with acetic anhydride\n(c) propanone with CH3MgBr followed by H3O+",
    answer: [
      { label: "(a) Mild oxidation", equation: "CH3CH2CH2OH ->[PCC/CH2Cl2] CH3CH2CHO" },
      { text: "PCC stops at the **aldehyde** — an anhydrous, mild oxidant, unlike K2Cr2O7/H2SO4 which would go on to propanoic acid." },
      { label: "(b) Acetylation", equation: "o-HO\u2013C6H4\u2013COOH + (CH3CO)2O ->[H^+] o-CH3COO\u2013C6H4\u2013COOH + CH3COOH" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "COOH" },
            { pos: 2, label: "OCOCH3", highlight: true },
          ],
          caption: "Aspirin — acetylsalicylic acid",
        },
      },
      { label: "(c) Grignard addition \u2192 tertiary alcohol", equations: ["CH3COCH3 + CH3MgBr ->[dry ether] (CH3)3C\u2013OMgBr", "(CH3)3C\u2013OMgBr ->[H3O^+] (CH3)3C\u2013OH"] },
      { text: "Product: **2-methylpropan-2-ol**. A ketone plus a Grignard reagent always gives a tertiary alcohol." },
    ],
  },

  /* ---------------- Identification ---------------- */
  {
    id: "k8-l3",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2020],
    question:
      "An organic compound (A) of molecular formula C4H8O gives an orange-red precipitate with 2,4-DNP reagent. It does not reduce Tollens' reagent but gives a yellow precipitate with I2/NaOH. On reduction it gives butan-2-ol. Identify A and write the equations.",
    answer: [
      {
        label: "Deductions",
        table: [
          ["Observation", "Conclusion"],
          ["Orange-red precipitate with 2,4-DNP", "A is an aldehyde or a ketone"],
          ["Does **not** reduce Tollens' reagent", "A is a **ketone**, not an aldehyde"],
          ["Yellow precipitate with I2/NaOH", "A contains a **CH3CO\u2013** group"],
          ["Reduction gives butan-2-ol", "The carbon skeleton is that of butan-2-one"],
        ],
      },
      { label: "Identification", text: "**A is butan-2-one, CH3COCH2CH3.**" },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3", bond: 1 },
            { label: "C", up: "O", upOrder: 2, bond: 1, highlight: true },
            { label: "CH2", bond: 1 },
            { label: "CH3" },
          ],
          caption: "Butan-2-one, C4H8O",
        },
      },
      { label: "Equations", equation: "CH3COCH2CH3 + 2,4-DNP -> 2,4-dinitrophenylhydrazone (orange-red) + H2O" },
      { equation: "CH3COCH2CH3 + 3I2 + 4NaOH -> CHI3(s) + CH3CH2COONa + 3NaI + 3H2O" },
      { equation: "CH3COCH2CH3 + 2[H] ->[NaBH4] CH3CH(OH)CH2CH3" },
      {
        text: "Check the alternative: the other C4H8O ketone-or-aldehyde possibilities are butanal (would reduce Tollens') and 2-methylpropanal (would reduce Tollens' and give no iodoform). Only butan-2-one fits every observation. \u2713",
      },
    ],
    keyPoint: "2,4-DNP identifies the carbonyl; Tollens' separates aldehyde from ketone; iodoform finds CH\u2083CO\u2013.",
  },
  {
    id: "k8-l4",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2016],
    question:
      "Write the structures of A, B, C, D and E:\nC6H6 \u2192(CH3COCl / anhyd. AlCl3) A \u2192(Zn\u2013Hg / conc. HCl) B\nA \u2192(I2 / NaOH) D + E",
    answer: [
      { label: "A = acetophenone, C6H5COCH3", text: "Friedel\u2013Crafts **acylation** of benzene:" },
      { equation: "C6H6 + CH3COCl ->[anhyd. AlCl3] C6H5COCH3 + HCl" },
      { figure: { kind: "named", id: "acetophenone" } },
      { label: "B = ethylbenzene, C6H5CH2CH3", text: "Clemmensen reduction converts the C=O to CH2:" },
      { equation: "C6H5COCH3 + 4[H] ->[Zn\u2013Hg/conc. HCl] C6H5CH2CH3 + H2O" },
      {
        label: "D = iodoform (CHI3) and E = sodium benzoate (C6H5COONa)",
        text: "Acetophenone has a CH3CO\u2013 group, so it gives a positive **iodoform test**:",
      },
      { equation: "C6H5COCH3 + 3I2 + 4NaOH -> CHI3(s) + C6H5COONa + 3NaI + 3H2O" },
      { figure: { kind: "named", id: "benzoic-acid" } },
      {
        text: "Note why acylation is used rather than alkylation to make ethylbenzene: Friedel\u2013Crafts **alkylation** suffers from carbocation rearrangement and polysubstitution, so acylate first and then reduce.",
      },
    ],
  },
  {
    id: "k8-l5",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2025],
    question:
      "(a) Carry out the conversions: (i) ethanal to but-2-enal, (ii) propanoic acid to ethane.\n(b) An alkene A of formula C5H10 on ozonolysis gives a mixture of two compounds B and C. B gives a positive iodoform test and C gives a positive Tollens' test. Identify A, B and C.",
    answer: [
      { label: "(a)(i) Aldol condensation", equations: ["2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO", "CH3CH(OH)CH2CHO ->[\u0394][\u2212H2O] CH3CH=CH\u2013CHO"] },
      { label: "(a)(ii) Decarboxylation", equations: ["CH3CH2COOH + NaOH -> CH3CH2COONa + H2O", "CH3CH2COONa + NaOH ->[CaO][\u0394] CH3CH3 + Na2CO3"] },
      {
        label: "(b) Working",
        text: "Ozonolysis cleaves the C=C and puts an oxygen on each carbon. B gives iodoform, so B contains **CH3CO\u2013** — it is a methyl ketone. C reduces Tollens', so C is an **aldehyde**.",
      },
      {
        text: "The two fragments must together account for C5H10. A methyl ketone needs at least C3 (propanone), leaving C2 for the aldehyde (ethanal):",
      },
      { equation: "CH3\u2013C(CH3)=CH\u2013CH3 ->[O3][then Zn/H2O] CH3COCH3 + CH3CHO" },
      {
        table: [
          ["", "Compound", "Test"],
          ["A", "2-Methylbut-2-ene, C5H10", "\u2014"],
          ["B", "Propanone, CH3COCH3", "Iodoform positive, Tollens' negative"],
          ["C", "Ethanal, CH3CHO", "Tollens' positive (and iodoform positive too)"],
        ],
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3", bond: 1 },
            { label: "C", up: "CH3", bond: 2 },
            { label: "CH", bond: 1 },
            { label: "CH3" },
          ],
          caption: "A = 2-methylbut-2-ene",
        },
      },
      {
        text: "**Reading ozonolysis backwards** is the standard technique: write the two carbonyl fragments side by side, delete both oxygens, and join the carbons with a double bond.",
      },
    ],
  },

  /* ---------------- Reasoning ---------------- */
  {
    id: "k8-s13",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nucleophilic addition",
    years: [2025],
    question:
      "Would you expect benzaldehyde to be more or less reactive than propanal towards nucleophilic addition? Justify.",
    answer: [
      { text: "**Less reactive.** Two effects both work against benzaldehyde:" },
      {
        points: [
          "**Resonance.** The \u03C0 electrons of the benzene ring are delocalised into the carbonyl group, which **reduces the partial positive charge** on the carbonyl carbon and so makes it less attractive to a nucleophile.",
          "**Steric hindrance.** The bulky phenyl group obstructs the approach of the nucleophile more than a small ethyl group does.",
        ],
      },
      { equation: "HCHO > CH3CHO > CH3CH2CHO > C6H5CHO > C6H5COCH3" },
      {
        text: "This is also why benzaldehyde does not respond to Fehling's solution, and why it undergoes the **Cannizzaro** reaction (it has no \u03B1-hydrogen) rather than aldol condensation.",
      },
    ],
  },
  {
    id: "k8-m6",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2020, 2023],
    question:
      "Which pair of reagents would distinguish propanal from propanone in a single test each?",
    options: [
      "2,4-DNP and NaHSO3",
      "Tollens' reagent and I2/NaOH",
      "Br2 water and FeCl3",
      "NaHCO3 and Lucas reagent",
    ],
    correct: 1,
    answer: [
      { text: "**(b) Tollens' reagent and I2/NaOH.** The two tests point in opposite directions, which is what makes the pair decisive:" },
      {
        table: [
          ["Test", "Propanal (CH3CH2CHO)", "Propanone (CH3COCH3)"],
          ["Tollens' reagent", "**Silver mirror** \u2014 it is an aldehyde", "No reaction"],
          ["I2 / NaOH (iodoform)", "No reaction \u2014 no CH3CO\u2013 group", "**Yellow precipitate** of CHI3"],
        ],
      },
      { equation: "CH3CH2CHO + 2[Ag(NH3)2]^+ + 3OH^\u2212 -> CH3CH2COO^\u2212 + 2Ag(s) + 4NH3 + 2H2O" },
      { equation: "CH3COCH3 + 3I2 + 4NaOH -> CHI3(s) + CH3COONa + 3NaI + 3H2O" },
      { text: "2,4-DNP would react with **both**, since both are carbonyl compounds, so it cannot distinguish them." },
      { figure: { kind: "named", id: "propanal-vs-propanone" } },
    ],
  },
];
