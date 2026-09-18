import type { Question } from "@/types";

/** Unit 8 — named reactions and the "identify A, B, C" chains the board repeats. */
export const CH08D: Question[] = [
  {
    id: "k8-n1",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2017, 2023, 2025],
    question:
      "Write the equations involved in the following reactions:\n(a) Wolff–Kishner reduction\n(b) Clemmensen reduction\n(c) Etard reaction\n(d) Hell–Volhard–Zelinsky reaction\n(e) decarboxylation",
    answer: [
      { label: "(a) Wolff–Kishner — C=O to CH2 in base", equations: ["C6H5COCH3 + H2N–NH2 -> C6H5C(CH3)=N–NH2 + H2O", "C6H5C(CH3)=N–NH2 ->[KOH/glycol][453–473 K] C6H5CH2CH3 + N2(g)"] },
      { text: "The hydrazone is decomposed by hot alkali. Use this route when the molecule contains **acid-sensitive** groups." },
      { label: "(b) Clemmensen — C=O to CH2 in acid", equation: "C6H5COCH3 + 4[H] ->[Zn-Hg/conc. HCl] C6H5CH2CH3 + H2O" },
      { text: "Same net change, opposite conditions — use it when the molecule contains **base-sensitive** groups. Both convert a carbonyl straight to a –CH2– group, which simple reducing agents cannot do." },
      { label: "(c) Etard — toluene to benzaldehyde", equations: ["C6H5CH3 + CrO2Cl2 ->[CS2] chromium complex", "chromium complex + H3O^+ -> C6H5CHO"] },
      {
        figure: { kind: "named", id: "benzaldehyde" },
      },
      {
        text: "Chromyl chloride oxidises **only the methyl group**, and the chromium complex that forms protects the aldehyde from being oxidised further to benzoic acid. That control is the whole point of the reaction.",
      },
      { label: "(d) Hell–Volhard–Zelinsky — α-halogenation of an acid", equation: "CH3COOH + Cl2 ->[red P][Δ] ClCH2COOH + HCl" },
      {
        text: "Red phosphorus is essential: it forms PCl3, which converts the acid into the **acyl chloride**, and only that can enolise. A carboxylic acid on its own will not halogenate at the α-carbon. Excess halogen gives the di- and trisubstituted acids. Note that **HCOOH has no α-hydrogen**, so it does not respond.",
      },
      { label: "(e) Decarboxylation — losing CO2", equation: "CH3COONa + NaOH ->[CaO][Δ] CH4 + Na2CO3" },
      {
        text: "The sodium salt of the acid is heated with **soda lime** (NaOH + CaO), and the carboxyl carbon leaves as carbonate. The alkane formed has **one carbon fewer** than the acid.",
      },
      {
        table: [
          ["Reaction", "Reagent", "Net change"],
          ["Wolff–Kishner", "H2N–NH2, then KOH/glycol, Δ", ">C=O → >CH2 (basic)"],
          ["Clemmensen", "Zn-Hg / conc. HCl", ">C=O → >CH2 (acidic)"],
          ["Etard", "CrO2Cl2 / CS2, then H3O^+", "Ar–CH3 → Ar–CHO"],
          ["Hell–Volhard–Zelinsky", "X_2 / red P", "α-H of R–COOH → α-X"],
          ["Decarboxylation", "NaOH + CaO, Δ", "R–COONa → R–H, one carbon lost"],
        ],
      },
    ],
    keyPoint: "Clemmensen (acid) and Wolff–Kishner (base) do the same job — pick the one your other groups survive.",
  },
  {
    id: "k8-n2",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Reaction chains",
    years: [2016, 2017, 2022],
    question:
      "Write the structures of A, B, C, D and E:\nC6H6 →(CH3COCl, anhyd. AlCl3) A →(Zn–Hg / conc. HCl) B\nA →(i) KMnO4–KOH, (ii) H3O+ → C\nC6H5CHO →(conc. NaOH) D + E",
    answer: [
      { label: "A — acetophenone", equation: "C6H6 + CH3COCl ->[anhyd. AlCl3] C6H5COCH3 + HCl" },
      { figure: { kind: "named", id: "acetophenone" } },
      { text: "Friedel–Crafts **acylation**. Unlike alkylation, it stops cleanly at monosubstitution, because the acyl group deactivates the ring." },
      { label: "B — ethylbenzene", equation: "C6H5COCH3 + 4[H] ->[Zn-Hg/conc. HCl] C6H5CH2CH3 + H2O" },
      { text: "Clemmensen reduction takes the C=O all the way to CH2. This acylate-then-reduce sequence is how you attach a **straight** alkyl chain to a ring — direct alkylation would rearrange." },
      { label: "C — benzoic acid", equation: "C6H5COCH3 ->[(i) KMnO4–KOH][(ii) H3O^+] C6H5COOH + CO2" },
      { figure: { kind: "named", id: "benzoic-acid" } },
      { text: "Vigorous alkaline oxidation cleaves the side chain right back to the ring, and the methyl carbon is lost as carbonate/CO2." },
      { label: "D and E — the Cannizzaro products", equation: "2C6H5CHO + NaOH ->[conc.] C6H5CH2OH + C6H5COONa" },
      {
        text: "Benzaldehyde has **no α-hydrogen**, so it cannot undergo aldol condensation. Instead concentrated alkali makes one molecule oxidise another — a **disproportionation**. D = benzyl alcohol, E = sodium benzoate.",
      },
      {
        table: [
          ["", "Compound", "Formula"],
          ["A", "Acetophenone", "C6H5COCH3"],
          ["B", "Ethylbenzene", "C6H5CH2CH3"],
          ["C", "Benzoic acid", "C6H5COOH"],
          ["D", "Benzyl alcohol", "C6H5CH2OH"],
          ["E", "Sodium benzoate", "C6H5COONa"],
        ],
      },
      {
        text: "The mechanism of the Cannizzaro reaction: hydroxide adds to the carbonyl to give a tetrahedral intermediate, which then transfers a **hydride ion** to a second molecule of the aldehyde. That is why an α-hydrogen-free aldehyde is required.",
      },
    ],
  },
  {
    id: "k8-n3",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2024, 2020],
    question:
      "An organic compound 'A' with molecular formula C9H10O forms a 2,4-DNP derivative, reduces Tollens' reagent and undergoes the Cannizzaro reaction. On vigorous oxidation it gives 1,2-benzenedicarboxylic acid. Identify A and write the equations for the reactions involved.",
    answer: [
      {
        label: "Reading the clues one at a time",
        table: [
          ["Observation", "What it tells you"],
          ["C9H10O", "Five degrees of unsaturation — a benzene ring (4) plus one C=O (1)"],
          ["Forms a 2,4-DNP derivative", "A carbonyl group is present"],
          ["Reduces Tollens' reagent", "The carbonyl is an **aldehyde**, not a ketone"],
          ["Undergoes Cannizzaro", "There is **no α-hydrogen**, so –CHO must sit directly on the ring"],
          ["Vigorous oxidation → benzene-1,2-dicarboxylic acid", "Two side chains, **ortho** to each other, both oxidisable to –COOH"],
        ],
      },
      {
        label: "Putting it together",
        text: "The ring accounts for C6H4. One side chain is –CHO. That leaves C2H5, so the other is an **ethyl** group, and the two must be ortho. Hence **A = 2-ethylbenzaldehyde**.",
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "CHO", highlight: true },
            { pos: 2, label: "C2H5" },
          ],
          caption: "A = 2-ethylbenzaldehyde, C9H10O",
        },
      },
      {
        text: "Check the Cannizzaro clue carefully — it is the one students misread. The carbon α to the –CHO group is a **ring carbon**, which carries no hydrogen at all. So A genuinely has no α-hydrogen, even though the ethyl group elsewhere on the ring does.",
      },
      { label: "Equation 1 — with 2,4-DNP", equation: "o-C2H5–C6H4–CHO + H2N–NH–C6H3(NO2)2 ->[H^+] o-C2H5–C6H4–CH=N–NH–C6H3(NO2)2 + H2O" },
      { text: "An **orange-red precipitate** of the 2,4-dinitrophenylhydrazone, the standard test for any carbonyl compound." },
      { label: "Equation 2 — with Tollens' reagent", equation: "o-C2H5–C6H4–CHO + 2[Ag(NH3)2]^+ + 3OH^− -> o-C2H5–C6H4–COO^− + 2Ag(s) + 4NH3 + 2H2O" },
      { label: "Equation 3 — Cannizzaro reaction", equation: "2 o-C2H5–C6H4–CHO + NaOH ->[conc.] o-C2H5–C6H4–CH2OH + o-C2H5–C6H4–COONa" },
      { text: "One molecule is reduced to the alcohol and the other oxidised to the salt — a **disproportionation** driven by hydride transfer." },
      { label: "Equation 4 — vigorous oxidation", equation: "o-C2H5–C6H4–CHO ->[(i) KMnO4–KOH][(ii) H3O^+] o-C6H4(COOH)2 + CO2" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "COOH", highlight: true },
            { pos: 2, label: "COOH", highlight: true },
          ],
          caption: "Benzene-1,2-dicarboxylic acid (phthalic acid) — the ortho arrangement is what pins the answer down",
        },
      },
      {
        text: "Hot alkaline permanganate oxidises **any** alkyl side chain right back to a single –COOH on the ring, however long it is, so the ethyl group loses its extra carbon as CO2. Had the two groups been para, the product would have been benzene-1,4-dicarboxylic acid instead — which is how the ortho position was deduced.",
      },
      {
        text: "Note that A does **not** reduce Fehling's solution: aromatic aldehydes never do, which is why the question specifies Tollens' reagent.",
      },
    ],
    keyPoint: "Count degrees of unsaturation first, then let each test remove possibilities — the oxidation product fixes the substitution pattern.",
  },
  {
    id: "k8-n4",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [2017, 2020, 2024],
    question:
      "Give a simple chemical test to distinguish between:\n(a) benzaldehyde and acetophenone\n(b) propanal and propanone\n(c) benzoic acid and phenol",
    answer: [
      {
        label: "(a) Benzaldehyde vs acetophenone — Tollens' reagent",
        text: "Benzaldehyde is an **aldehyde** and gives a **silver mirror**; acetophenone is a ketone and does not react.",
      },
      { equation: "C6H5CHO + 2[Ag(NH3)2]^+ + 3OH^− -> C6H5COO^− + 2Ag(s) + 4NH3 + 2H2O" },
      {
        text: "The **iodoform test** works in the opposite direction: acetophenone has the CH3CO– group and gives the yellow precipitate, benzaldehyde does not. Either test answers the question.",
      },
      { equation: "C6H5COCH3 + 3I2 + 4NaOH -> CHI3(s) + C6H5COONa + 3NaI + 3H2O" },
      {
        label: "(b) Propanal vs propanone — Fehling's solution",
        text: "Propanal is an **aliphatic aldehyde** and gives a **reddish-brown precipitate** of Cu2O; propanone is a ketone and gives nothing.",
      },
      { equation: "CH3CH2CHO + 2Cu^2+ + 5OH^− ->[Δ] CH3CH2COO^− + Cu2O(s) + 3H2O" },
      { figure: { kind: "named", id: "propanal-vs-propanone" } },
      {
        text: "Note the limitation: **Fehling's solution does not respond to aromatic aldehydes**, so it separates propanal from propanone but cannot be used on benzaldehyde. The iodoform test also distinguishes this pair — propanone responds, propanal does not.",
      },
      {
        label: "(c) Benzoic acid vs phenol — sodium hydrogencarbonate",
        text: "Benzoic acid is strong enough to displace carbonic acid, so it gives **brisk effervescence** of CO2. Phenol is far too weak and gives no gas.",
      },
      { equation: "C6H5COOH + NaHCO3 -> C6H5COONa + H2O + CO2(g)" },
      {
        text: "The underlying reason is resonance: the **carboxylate** ion delocalises the charge over two equivalent oxygens, while the **phenoxide** ion spreads it onto less electronegative ring carbons. Hence pKa ≈ 4.2 for benzoic acid against ≈ 10 for phenol. Neutral FeCl3 answers the same question from the other side — phenol gives a violet colour, benzoic acid a buff precipitate.",
      },
    ],
    keyPoint: "Tollens' works for every aldehyde; Fehling's only for aliphatic ones. NaHCO₃ separates acids from phenols.",
  },
];
