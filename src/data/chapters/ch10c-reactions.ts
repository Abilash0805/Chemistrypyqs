import type { Question } from "@/types";

/** Unit 10 — equation-based questions on carbohydrates, amino acids and proteins. */
export const CH10C: Question[] = [
  {
    id: "b10-e1",
    chapter: 10,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2019, 2022, 2025],
    question:
      "Write the reactions of glucose with the following reagents and state what each one proves about its structure:\n(a) HI and red phosphorus, on prolonged heating\n(b) hydroxylamine\n(c) bromine water\n(d) dilute HNO3\n(e) acetic anhydride",
    answer: [
      { label: "(a) HI / red P — the carbon skeleton", equation: "C6H12O6 + HI ->[red P][Δ] CH3(CH2)4CH3 + ..." },
      {
        text: "Exhaustive reduction gives **n-hexane**, so the six carbons of glucose are in a **straight, unbranched chain**.",
      },
      { label: "(b) Hydroxylamine — a carbonyl group", equation: "CH2OH(CHOH)4CHO + NH2OH -> CH2OH(CHOH)4CH=N–OH + H2O" },
      {
        text: "An **oxime** forms, and glucose also adds HCN to give a cyanohydrin. Both show a **carbonyl group** is present.",
      },
      { label: "(c) Bromine water — the carbonyl is an aldehyde", equation: "CH2OH(CHOH)4CHO + Br2 + H2O -> CH2OH(CHOH)4COOH + 2HBr" },
      {
        text: "Mild oxidation to the six-carbon **gluconic acid** shows the carbonyl is at the end of the chain — an **–CHO group**, not a ketone. (Bromine water leaves ketoses untouched, which is why it distinguishes glucose from fructose.)",
      },
      { label: "(d) Dilute HNO3 — a primary alcohol at the far end", equation: "CH2OH(CHOH)4CHO + [O] ->[dil. HNO3] COOH(CHOH)4COOH" },
      {
        text: "Stronger oxidation gives the **dicarboxylic** saccharic (glucaric) acid. A second –COOH can only come from a **primary –CH2OH** group, so one sits at C-6.",
      },
      { label: "(e) Acetic anhydride — five hydroxyl groups", equation: "C6H12O6 + 5(CH3CO)2O ->[pyridine] glucose pentaacetate + 5CH3COOH" },
      {
        text: "Exactly **five** acetyl groups are taken up, so glucose has **five –OH groups**. They must be on different carbons, since two –OH groups on one carbon would lose water.",
      },
      {
        table: [
          ["Reagent", "Product", "What it establishes"],
          ["HI / red P, Δ", "n-hexane", "Straight chain of six carbons"],
          ["NH2OH or HCN", "Oxime / cyanohydrin", "A carbonyl group"],
          ["Br2 water", "Gluconic acid (C6)", "The carbonyl is an **aldehyde**"],
          ["dil. HNO3", "Saccharic acid", "A primary –CH2OH at the other end"],
          ["(CH3CO)2O", "Pentaacetate", "**Five** –OH groups"],
        ],
      },
      {
        text: "Putting all five results together gives the open-chain structure **CH2OH–(CHOH)4–CHO**, which is why glucose is written as an aldohexose.",
      },
    ],
    keyPoint: "Bromine water oxidises glucose but not fructose — the standard chemical test between them.",
  },
  {
    id: "b10-e2",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Carbohydrates",
    years: [2018, 2024],
    question:
      "Give three reactions that the open-chain structure of glucose fails to explain, and write the structure that accounts for them.",
    answer: [
      {
        label: "The failures",
        points: [
          "Glucose does **not** give the 2,4-DNP (Schiff's) test, and does not form a hydrogensulphite addition product with NaHSO3 — yet it has an aldehyde group.",
          "The pentaacetate of glucose does **not** react with hydroxylamine, showing that no free –CHO group is left once the hydroxyls are acetylated.",
          "Glucose exists in **two crystalline forms**, α (m.p. 419 K, specific rotation +111°) and β (m.p. 423 K, +19.2°), and a fresh solution of either slowly changes rotation to +52.5° — **mutarotation**.",
        ],
      },
      {
        label: "The explanation",
        text: "The –OH on C-5 attacks the C-1 carbonyl intramolecularly, closing a six-membered **pyranose** ring. The carbonyl is therefore locked up as a **cyclic hemiacetal** almost all the time, so the usual aldehyde tests fail.",
      },
      { figure: { kind: "named", id: "glucose-haworth" } },
      {
        text: "Ring closure creates a new stereocentre at C-1, called the **anomeric carbon**. The two configurations give the α and β anomers, and they interconvert in solution through the trace of open-chain form — which is exactly what mutarotation is.",
      },
      {
        table: [
          ["", "α-D-glucose", "β-D-glucose"],
          ["–OH at C-1", "Below the ring", "Above the ring"],
          ["Specific rotation", "+111°", "+19.2°"],
          ["At equilibrium", "≈36%", "≈64%"],
        ],
      },
      {
        text: "Glucose still reduces Tollens' and Fehling's reagents because the small amount of open-chain aldehyde present is consumed and continuously replenished.",
      },
    ],
    keyPoint: "Cyclic hemiacetal → anomeric carbon → two anomers → mutarotation. One structural fact explains all three observations.",
  },
  {
    id: "b10-e3",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Amino acids",
    years: [2017, 2023],
    question:
      "(a) Write the zwitterion of glycine and the equations for its reaction with acid and with alkali.\n(b) Write the equation for the formation of the dipeptide glycylalanine and name the linkage formed.",
    answer: [
      {
        label: "(a) The zwitterion",
        equation: "H2N–CH2–COOH <=> ^+H3N–CH2–COO^−",
      },
      {
        text: "The carboxyl group hands its proton to the amino group in the same molecule, giving a **dipolar ion**. This is why amino acids are crystalline solids that melt high and dissolve in water rather than in organic solvents.",
      },
      { label: "In acid — the carboxylate takes a proton (cation)", equation: "^+H3N–CH2–COO^− + H^+ -> ^+H3N–CH2–COOH" },
      { label: "In alkali — the ammonium loses a proton (anion)", equation: "^+H3N–CH2–COO^− + OH^− -> H2N–CH2–COO^− + H2O" },
      {
        text: "Because it reacts with both, an amino acid is **amphoteric**. The pH at which it exists purely as the zwitterion and does not migrate in an electric field is the **isoelectric point**.",
      },
      {
        label: "(b) Dipeptide formation",
        equation: "H2N–CH2–COOH + H2N–CH(CH3)–COOH ->[−H2O] H2N–CH2–CO–NH–CH(CH3)–COOH",
      },
      { figure: { kind: "named", id: "peptide-bond" } },
      {
        text: "The –COOH of glycine condenses with the –NH2 of alanine, losing water. The **–CO–NH–** link is a **peptide bond** (an amide link). Reversing the order gives alanylglycine, a different compound — the sequence matters.",
      },
    ],
    keyPoint: "Amino acids exist as zwitterions, so they are amphoteric; peptide bonds are just amide links made by losing water.",
  },
  {
    id: "b10-e4",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2016, 2021],
    question:
      "Write the equations for:\n(a) hydrolysis of sucrose\n(b) the reaction of glucose with Tollens' reagent\n(c) the reaction of fructose with Tollens' reagent, and explain why it responds at all.",
    answer: [
      { label: "(a) Inversion of sucrose", equation: "C12H22O11 + H2O ->[H^+ or invertase] C6H12O6 + C6H12O6" },
      {
        table: [
          ["", "Sucrose", "Glucose", "Fructose", "The mixture"],
          ["Specific rotation", "+66.5°", "+52.5°", "−92.4°", "−39.9°"],
        ],
      },
      {
        text: "The sign of the rotation flips from **dextro to laevo**, which is why the process is called **inversion** and the product **invert sugar**.",
      },
      { label: "(b) Glucose with Tollens' reagent", equation: "CH2OH(CHOH)4CHO + 2[Ag(NH3)2]^+ + 3OH^− -> CH2OH(CHOH)4COO^− + 2Ag(s) + 4NH3 + 2H2O" },
      { text: "A **silver mirror** forms on the tube wall. Glucose is therefore a **reducing sugar**." },
      { label: "(c) Fructose with Tollens' reagent", equation: "fructose <=>[dil. alkali] glucose + mannose ->[Tollens'] 2Ag(s) + ..." },
      {
        text: "Fructose is a **ketose** and has no –CHO group of its own. But Tollens' reagent is alkaline, and in dilute alkali a ketose isomerises to the corresponding aldoses through an **enediol** intermediate. The aldose formed is then oxidised, so fructose reduces Tollens' and Fehling's reagents even though it is a ketone.",
      },
      {
        text: "This is exactly why **bromine water** — which is *not* alkaline — is the reagent that separates them: it oxidises glucose to gluconic acid and leaves fructose alone.",
      },
    ],
  },
  {
    id: "b10-e5",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2020, 2024],
    question:
      "Sucrose is a non-reducing sugar while maltose is reducing. Explain, and write the glycosidic linkage present in each.",
    answer: [
      {
        table: [
          ["", "Sucrose", "Maltose"],
          ["Monosaccharides", "α-D-glucose + β-D-fructose", "Two α-D-glucose units"],
          ["Linkage", "C-1 of glucose to C-2 of fructose, α-1,2", "C-1 of one to C-4 of the other, α-1,4"],
          ["Free anomeric carbon", "None", "One, on the second glucose"],
          ["Reducing?", "No", "**Yes**"],
        ],
      },
      {
        label: "The reason",
        text: "In **sucrose** the linkage ties up the anomeric carbon of glucose (C-1) *and* the anomeric carbon of fructose (C-2). Neither ring can open, so no free –CHO or keto group is ever available and the sugar cannot reduce Tollens' or Fehling's reagent.",
      },
      {
        text: "In **maltose** only one anomeric carbon is used by the linkage. The second glucose still has a free anomeric –OH, so its ring opens to give an aldehyde group and the sugar is reducing. Maltose also shows **mutarotation** for the same reason.",
      },
      {
        text: "The same logic applies to **lactose** (β-1,4 between galactose and glucose, one free anomeric carbon → reducing) and to **cellulose and starch**, where the single free end in a huge chain is far too dilute to give a test.",
      },
    ],
    keyPoint: "A sugar is reducing if at least one anomeric carbon is still free to open its ring.",
  },
];
