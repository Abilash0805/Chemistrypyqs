import type { Question } from "@/types";

/** Unit 10 — Biomolecules, second tranche (board papers 2013–2025). */
export const CH10B: Question[] = [
  /* ---------------- Classification ---------------- */
  {
    id: "b10-s8",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2024],
    question:
      "Classify the following as monosaccharides or disaccharides: galactose, glucose, lactose, maltose, sucrose, fructose.",
    answer: [
      {
        table: [
          ["Monosaccharides", "Disaccharides"],
          ["Glucose (aldohexose)", "Sucrose → glucose + fructose"],
          ["Fructose (ketohexose)", "Maltose → glucose + glucose"],
          ["Galactose (aldohexose)", "Lactose → galactose + glucose"],
        ],
      },
      {
        text: "A **monosaccharide** cannot be hydrolysed to a simpler carbohydrate. A **disaccharide** gives two monosaccharide units on hydrolysis, joined by a glycosidic linkage.",
      },
      {
        text: "Of the three disaccharides, **sucrose is non-reducing** (both anomeric carbons are locked in the linkage) while maltose and lactose are **reducing**.",
      },
    ],
  },
  {
    id: "b10-s9",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Definitions",
    years: [2020, 2018, 2019],
    question:
      "Define with a suitable example each: (a) polysaccharides, (b) denatured protein, (c) fibrous protein.",
    answer: [
      {
        label: "(a) Polysaccharides",
        text: "Carbohydrates that yield a **large number of monosaccharide units** on hydrolysis. They are not sweet, are usually insoluble in water and act as storage or structural materials.",
      },
      { text: "Examples: **starch** (storage in plants), **glycogen** (storage in animals), **cellulose** (structural, in cell walls)." },
      {
        label: "(b) Denatured protein",
        text: "A protein whose **secondary and tertiary structures have been destroyed** by heat, acid, alkali, heavy metal ions or UV light, so that it loses its biological activity. The primary structure — the peptide bonds — survives intact.",
      },
      { text: "Example: the **coagulation of egg white** on boiling, or the curdling of milk." },
      {
        label: "(c) Fibrous protein",
        text: "A protein in which the polypeptide chains lie **parallel to one another**, held together by hydrogen bonds and disulphide bridges into fibre-like strands. They are insoluble in water and serve a structural role.",
      },
      { text: "Examples: **keratin** (hair, nails, wool), **myosin** (muscle), **collagen** (tendons)." },
    ],
  },
  {
    id: "b10-s10",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Definitions",
    years: [2019],
    question:
      "Define with a suitable example each: (a) oligosaccharides, (b) denaturation of protein, (c) vitamins.",
    answer: [
      {
        label: "(a) Oligosaccharides",
        text: "Carbohydrates that yield **two to ten monosaccharide units** on hydrolysis. Example: **sucrose**, a disaccharide giving glucose and fructose.",
      },
      {
        label: "(b) Denaturation",
        text: "The loss of a protein's biological activity when the **weak interactions holding its secondary and tertiary structure** are disrupted. Example: the white of an egg turning opaque and solid on boiling.",
      },
      {
        label: "(c) Vitamins",
        text: "Organic compounds required in **small amounts** in the diet, which the body generally cannot synthesise, and whose deficiency causes a specific disease. Example: **vitamin C (ascorbic acid)**, whose deficiency causes scurvy.",
      },
      {
        text: "They divide into **fat-soluble** (A, D, E, K — stored in the liver) and **water-soluble** (B group and C — excreted in urine and needed regularly).",
      },
    ],
  },

  /* ---------------- Glucose reactions ---------------- */
  {
    id: "b10-s11",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2024, 2025],
    question:
      "Write the equations and name the products when D-glucose reacts with:\n(a) bromine water,\n(b) concentrated nitric acid,\n(c) acetic anhydride.",
    answer: [
      { label: "(a) Bromine water — mild oxidation", equation: "CHO(CHOH)4CH2OH + Br2 + H2O -> COOH(CHOH)4CH2OH + 2HBr" },
      {
        text: "Only the –CHO is oxidised, giving **gluconic acid** (a monocarboxylic acid). This proves that the carbonyl group in glucose is an **aldehyde**.",
      },
      { label: "(b) Conc. HNO3 — strong oxidation", equation: "CHO(CHOH)4CH2OH + 2[O] ->[conc. HNO3] COOH(CHOH)4COOH + H2O" },
      {
        text: "Both the –CHO **and** the terminal –CH2OH are oxidised, giving the dicarboxylic **saccharic acid** (glucaric acid). This proves the presence of a primary alcohol group at the far end of the chain.",
      },
      { label: "(c) Acetic anhydride — acetylation", equation: "C6H7O(OH)5 + 5(CH3CO)2O -> C6H7O(OCOCH3)5 + 5CH3COOH" },
      {
        text: "All **five** hydroxyl groups are esterified, giving **glucose pentaacetate**. This proves that glucose contains five –OH groups, and — since the product is stable — that they are on different carbons.",
      },
      {
        text: "Note that glucose pentaacetate does **not** react with hydroxylamine, because acetylating the anomeric OH locks the ring shut so it can no longer open to the free aldehyde.",
      },
    ],
    keyPoint: "Br₂ water → gluconic acid (mild). conc. HNO₃ → saccharic acid (strong).",
  },
  {
    id: "b10-s12",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2020],
    question:
      "Write the reactions that establish the presence of the following in the open-chain structure of glucose:\n(i) five –OH groups, (ii) a carbonyl group, (iii) a straight chain of six carbons.",
    answer: [
      { label: "(i) Five –OH groups", equation: "C6H12O6 + 5(CH3CO)2O -> glucose pentaacetate + 5CH3COOH" },
      { text: "Exactly five acetate groups are incorporated, so there are five hydroxyls — and since the pentaacetate is stable, they must be on **different carbon atoms**." },
      { label: "(ii) A carbonyl group", equations: ["CHO(CHOH)4CH2OH + H2N–OH -> CH=N–OH(CHOH)4CH2OH + H2O", "CHO(CHOH)4CH2OH + HCN -> CH(OH)(CN)(CHOH)4CH2OH"] },
      { text: "Formation of an **oxime** with hydroxylamine and a **cyanohydrin** with HCN both require a >C=O group." },
      { label: "(iii) A straight chain of six carbons", equation: "C6H12O6 + HI ->[red P, Δ] CH3(CH2)4CH3" },
      { text: "Prolonged heating with hydriodic acid reduces glucose completely to **n-hexane**, which can only arise from an unbranched six-carbon chain." },
      { figure: { kind: "named", id: "glucose-haworth" } },
    ],
  },

  /* ---------------- Nucleic acids ---------------- */
  {
    id: "b10-s13",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nucleic acids",
    years: [2019, 2023],
    question:
      "(a) Write the products obtained on complete hydrolysis of DNA.\n(b) Why are the two strands of DNA not identical but complementary?",
    answer: [
      {
        label: "(a)",
        text: "Complete hydrolysis of DNA gives three classes of product:",
      },
      {
        points: [
          "**The pentose sugar** — β-D-2-deoxyribose",
          "**Phosphoric acid**, H3PO4",
          "**The nitrogenous bases** — adenine, guanine, cytosine and thymine",
        ],
      },
      {
        label: "(b)",
        text: "The two strands are held together by **hydrogen bonds between specific base pairs**, and the geometry only works for particular pairings: a purine must pair with a pyrimidine.",
      },
      {
        table: [
          ["Base on one strand", "Partner on the other", "Hydrogen bonds"],
          ["Adenine (A)", "Thymine (T)", "2"],
          ["Guanine (G)", "Cytosine (C)", "3"],
        ],
      },
      {
        text: "So wherever one strand has A, the other must have T, and wherever one has G the other must have C. The sequences are therefore **complementary rather than identical** — and it is exactly this that lets each strand act as a template for making the other during replication.",
      },
      { figure: { kind: "named", id: "dna-helix" } },
    ],
  },
  {
    id: "b10-s14",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Proteins",
    years: [2019],
    question:
      "(a) What are the products of hydrolysis of maltose?\n(b) What type of bonding provides stability to the α-helix structure of a protein?",
    answer: [
      { label: "(a)", text: "Maltose gives **two molecules of D-glucose**, joined in the disaccharide by an α-1,4-glycosidic linkage." },
      { equation: "C12H22O11 + H2O ->[H^+ or maltase] 2C6H12O6" },
      {
        text: "Because only one anomeric carbon is used in the linkage, the other remains free — so maltose is a **reducing sugar** and shows mutarotation.",
      },
      {
        label: "(b)",
        text: "**Intramolecular hydrogen bonding.** The chain coils as a right-handed screw, and the **C=O group of each amino acid residue hydrogen-bonds to the N–H group of the residue four places further along** the chain. These regularly spaced hydrogen bonds run roughly parallel to the helix axis and hold the coil rigid.",
      },
      { figure: { kind: "named", id: "alpha-helix" } },
    ],
  },

  /* ---------------- Assertion-reason / MCQ ---------------- */
  {
    id: "b10-m9",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Proteins",
    years: [2022],
    question: "Complete the analogy — Curdling of milk : A :: α-helix : B",
    options: [
      "A: Primary structure, B: Secondary structure",
      "A: Denaturation, B: Secondary structure",
      "A: Denaturation, B: Tertiary structure",
      "A: Hydrolysis, B: Primary structure",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) A: Denaturation, B: Secondary structure.**",
      },
      {
        text: "**Curdling of milk** is a classic example of **denaturation**: lactic acid produced by bacteria disrupts the weak forces holding casein's folded shape, so it coagulates and loses its native state.",
      },
      {
        text: "The **α-helix** is a **secondary** structure — the local regular coiling of the polypeptide backbone, stabilised by hydrogen bonds. (The β-pleated sheet is the other secondary structure.)",
      },
      { figure: { kind: "named", id: "alpha-helix" } },
    ],
  },
  {
    id: "b10-m10",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2022],
    question: "Which sugar is known as dextrose?",
    options: ["Glucose", "Fructose", "Ribose", "Sucrose"],
    correct: 0,
    answer: [
      {
        text: "**(a) Glucose.** It is called dextrose because the naturally occurring form is **dextrorotatory** — it rotates plane-polarised light to the right, [α] = +52.5°.",
      },
      {
        text: "Fructose, by contrast, is strongly **laevorotatory** ([α] = −92.4°) and is called laevulose. This difference is what makes the hydrolysis of sucrose an **inversion**: the dextrorotatory sucrose (+66.5°) gives a laevorotatory mixture (−19.9°).",
      },
    ],
  },
  {
    id: "b10-s15",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Differences",
    years: [2020, 2023],
    question:
      "Differentiate between: (i) a nucleotide and a nucleoside, (ii) a peptide linkage and a glycosidic linkage, (iii) DNA and RNA in terms of function.",
    answer: [
      {
        label: "(i) Nucleoside vs nucleotide",
        table: [
          ["Nucleoside", "Nucleotide"],
          ["Base + sugar", "Base + sugar + **phosphate**"],
          ["Joined by an N-glycosidic bond", "The nucleoside is esterified at the 5′-OH"],
          ["Example: adenosine", "Example: adenosine monophosphate (AMP)"],
        ],
      },
      { text: "A nucleotide is simply a **phosphorylated nucleoside**, and nucleotides are the monomers of nucleic acids." },
      {
        label: "(ii) Peptide vs glycosidic linkage",
        table: [
          ["Peptide linkage", "Glycosidic linkage"],
          ["–CO–NH– (an amide bond)", "–O– (an ether-type bond)"],
          ["Joins two α-amino acids", "Joins two monosaccharide units"],
          ["Found in proteins", "Found in di- and polysaccharides"],
        ],
      },
      { figure: { kind: "named", id: "peptide-bond" } },
      {
        label: "(iii) DNA vs RNA function",
        text: "**DNA** stores and transmits the hereditary information and directs its own replication. **RNA** carries that information out of the nucleus and executes **protein synthesis** — m-RNA carries the message, t-RNA brings the amino acids, r-RNA forms part of the ribosome.",
      },
    ],
  },
  {
    id: "b10-l3",
    chapter: 10,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Amino acids",
    years: [2025, 2020],
    question:
      "(a) What are α-amino acids? Draw the general structure and the zwitterion.\n(b) Why do amino acids have high melting points and low solubility in organic solvents?\n(c) What is the isoelectric point?\n(d) Distinguish between essential and non-essential amino acids with one example each.",
    answer: [
      {
        label: "(a)",
        text: "α-Amino acids carry both an **amino group and a carboxyl group on the same (α) carbon**, the one adjacent to the –COOH. The general formula is R–CH(NH2)–COOH.",
      },
      {
        text: "In the solid state and in neutral solution the acidic –COOH transfers its proton to the basic –NH2, giving a **dipolar zwitterion**:",
      },
      { equation: "H2N–CHR–COOH <=> ^+H3N–CHR–COO^−" },
      {
        label: "(b)",
        text: "Because they exist as **zwitterions**, amino acids are effectively **ionic solids**. Strong electrostatic forces hold the crystal lattice together, so a great deal of energy is needed to melt them — they generally melt above 473 K, usually with decomposition.",
      },
      {
        text: "The same ionic character explains the solubility pattern: they dissolve readily in **water** (a polar solvent that solvates ions) but are almost insoluble in non-polar **organic solvents** such as benzene or ether.",
      },
      {
        label: "(c) Isoelectric point",
        text: "The **pH at which the amino acid exists entirely as the zwitterion**, carrying no net charge, and therefore does not migrate to either electrode in an electric field. Its solubility is at a minimum at this pH, which is exploited to separate amino acids by electrophoresis.",
      },
      {
        label: "(d)",
        table: [
          ["Essential", "Non-essential"],
          ["**Cannot** be synthesised by the body", "**Can** be synthesised by the body"],
          ["Must be supplied in the diet", "Need not be supplied in the diet"],
          ["Examples: valine, leucine, lysine, phenylalanine", "Examples: glycine, alanine, glutamic acid"],
        ],
      },
      {
        text: "Note also that **all naturally occurring α-amino acids except glycine are optically active**, because in glycine R = H and the α-carbon then carries two identical hydrogens, so it is not a chiral centre.",
      },
    ],
  },
];
