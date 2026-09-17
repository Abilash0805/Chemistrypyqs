import type { Question } from "@/types";

/** Unit 10 — Biomolecules (7 marks). */
export const CH10: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "b10-m1",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Proteins",
    years: [2024],
    question:
      "The specific sequence in which amino acids are arranged in a protein is called its",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Primary structure.** It is the linear sequence of amino acid residues joined by peptide bonds, read from the N-terminal to the C-terminal end. Any change in this sequence produces a different protein — sickle-cell anaemia results from a single amino acid substitution in haemoglobin.",
      },
      {
        table: [
          ["Level", "What it describes", "Stabilised by"],
          ["Primary", "Sequence of amino acids", "Peptide (covalent) bonds"],
          ["Secondary", "α-helix / β-pleated sheet", "Hydrogen bonds"],
          ["Tertiary", "Overall 3-D folding", "H-bonds, disulphide, ionic, van der Waals"],
          ["Quaternary", "Assembly of several subunits", "Same non-covalent forces"],
        ],
      },
    ],
  },
  {
    id: "b10-m2",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Nucleic acids",
    years: [2025, 2022],
    question: "Nucleotides are joined together in a nucleic acid by",
    options: [
      "Glycosidic linkage",
      "Peptide linkage",
      "Hydrogen bonding",
      "Phosphodiester linkage",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) Phosphodiester linkage.** The phosphate group bridges the 3′-OH of one sugar and the 5′-OH of the next, giving the sugar–phosphate backbone of the strand.",
      },
      {
        points: [
          "**Glycosidic** linkage joins the base to the sugar (within one nucleoside), and joins monosaccharides in carbohydrates.",
          "**Hydrogen bonds** hold the two DNA strands together, not the nucleotides within a strand.",
        ],
      },
      { figure: { kind: "named", id: "dna-helix" } },
    ],
  },
  {
    id: "b10-m3",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2022, 2019],
    question: "Glucose on reaction with bromine water gives",
    options: ["Saccharic acid", "Hexanoic acid", "Gluconic acid", "Salicylic acid"],
    correct: 2,
    answer: [
      {
        text: "**(c) Gluconic acid.** Bromine water is a **mild** oxidising agent: it oxidises only the aldehyde group at C-1 to a carboxylic acid, leaving the rest of the molecule intact.",
      },
      { equation: "CHO(CHOH)4CH2OH + Br2 + H2O -> COOH(CHOH)4CH2OH + 2HBr" },
      {
        text: "This confirms the presence of an **aldehyde group** in glucose. With the stronger oxidant **conc. HNO3**, both the –CHO and the terminal –CH2OH are oxidised, giving the dicarboxylic **saccharic acid**.",
      },
    ],
    keyPoint: "Br2 water → gluconic acid (mild). conc. HNO3 → saccharic acid (strong).",
  },
  {
    id: "b10-m4",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2020],
    question: "α-D(+)-Glucose and β-D(+)-glucose are",
    options: ["Geometrical isomers", "Enantiomers", "Anomers", "Functional isomers"],
    correct: 2,
    answer: [
      {
        text: "**(c) Anomers.** They are cyclic forms of glucose differing in configuration at **only one carbon — C-1, the anomeric carbon**. In the α form the OH at C-1 lies below the ring; in the β form it lies above.",
      },
      { figure: { kind: "named", id: "glucose-haworth" } },
      {
        text: "They are not enantiomers, because they differ at only one of several stereocentres. In solution they interconvert through the open-chain form, which is why a freshly prepared solution of either slowly changes its optical rotation to the same equilibrium value — **mutarotation**.",
      },
    ],
  },
  {
    id: "b10-m5",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Vitamins",
    years: [2025, 2024],
    question: "Scurvy is caused by a deficiency of",
    options: ["Vitamin B1", "Vitamin B2", "Ascorbic acid", "Glutamic acid"],
    correct: 2,
    answer: [
      { text: "**(c) Ascorbic acid — vitamin C.**" },
      {
        table: [
          ["Vitamin", "Deficiency disease"],
          ["A", "Xerophthalmia, night blindness"],
          ["B1 (thiamine)", "Beri-beri"],
          ["B2 (riboflavin)", "Cheilosis, digestive disorders"],
          ["B6 (pyridoxine)", "Convulsions"],
          ["B12", "Pernicious anaemia"],
          ["C (ascorbic acid)", "Scurvy"],
          ["D", "Rickets (children), osteomalacia (adults)"],
          ["E", "Muscular weakness, increased fragility of RBCs"],
          ["K", "Increased blood clotting time"],
        ],
      },
    ],
  },
  {
    id: "b10-m6",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2025],
    question: "Which of the following statements is **not** true about glucose?",
    options: [
      "It is an aldohexose.",
      "On heating with HI it forms n-hexane.",
      "It is present in furanose form.",
      "It does not give the 2,4-DNP test.",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) is not true.** Glucose exists in the **pyranose** form — a six-membered ring containing five carbons and one oxygen, named after pyran. It is fructose that adopts the five-membered **furanose** form.",
      },
      { figure: { kind: "named", id: "glucose-haworth" } },
      {
        points: [
          "(a) is true — glucose is C6H12O6 with an aldehyde group, hence an aldohexose.",
          "(b) is true — prolonged heating with HI reduces it completely to n-hexane, proving that the six carbons form a **straight chain**.",
          "(d) is true — in the cyclic (hemiacetal) form there is no free –CHO group, so glucose does not respond to 2,4-DNP. This was one of the observations that led to the ring structure.",
        ],
      },
    ],
  },
  {
    id: "b10-m7",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Nucleic acids",
    years: [2022],
    question: "The base present in DNA but not in RNA is",
    options: ["Cytosine", "Guanine", "Adenine", "Thymine"],
    correct: 3,
    answer: [
      {
        text: "**(d) Thymine.** DNA contains adenine, guanine, cytosine and **thymine**. In RNA thymine is replaced by **uracil**; the other three are common to both.",
      },
      {
        table: [
          ["", "DNA", "RNA"],
          ["Sugar", "β-D-2-deoxyribose", "β-D-ribose"],
          ["Bases", "A, G, C, **T**", "A, G, C, **U**"],
          ["Strands", "Double helix", "Usually single-stranded"],
          ["Function", "Stores genetic information", "Protein synthesis"],
        ],
      },
    ],
  },
  {
    id: "b10-m8",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2023],
    question: "Hydrolysis of sucrose is called",
    options: ["inversion", "hydration", "esterification", "saponification"],
    correct: 0,
    answer: [
      {
        text: "**(a) inversion.** Sucrose is dextrorotatory (+66.5°), but on hydrolysis it gives an equimolar mixture of D-(+)-glucose (+52.5°) and D-(−)-fructose (− 92.4°). Fructose rotates light more strongly in the opposite direction, so the mixture is **laevorotatory** overall (−19.9°).",
      },
      { equation: "C12H22O11 + H2O ->[H^+ or invertase] C6H12O6 + C6H12O6" },
      {
        text: "The sign of rotation has been **inverted**, hence the names 'inversion' and **invert sugar** for the product mixture.",
      },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "b10-ar1",
    chapter: 10,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Vitamins",
    years: [2023, 2016],
    question:
      "**Assertion (A):** Vitamin C cannot be stored in our body.\n**Reason (R):** Vitamin C is fat soluble and is excreted from the body in urine.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Vitamin C genuinely cannot be stored — but because it is **water soluble**, not fat soluble.",
      },
      {
        text: "Water-soluble vitamins (B group and C) are readily excreted in the urine and must be supplied regularly in the diet. **Fat-soluble** vitamins (A, D, E and K) are stored in the liver and adipose tissue, which is why an excess of them can be toxic.",
      },
    ],
  },
  {
    id: "b10-ar2",
    chapter: 10,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2024],
    question:
      "**Assertion (A):** Fructose is a reducing sugar.\n**Reason (R):** Fructose does not reduce Fehling's solution and Tollens' reagent.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Fructose **is** a reducing sugar — it **does** reduce both Fehling's solution and Tollens' reagent, so the reason is simply wrong.",
      },
      {
        text: "This is surprising because fructose is a **ketose**, and ketones are not normally oxidised. The explanation is that in the alkaline medium of these reagents, fructose **isomerises** to glucose and mannose through an ene-diol rearrangement, and the aldose so formed is then oxidised.",
      },
      { equation: "fructose <=>[OH^−] ene-diol <=> glucose + mannose" },
    ],
    keyPoint: "All monosaccharides, aldose or ketose, are reducing sugars.",
  },
  {
    id: "b10-ar3",
    chapter: 10,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Amino acids",
    years: [2025],
    question:
      "**Assertion (A):** All naturally occurring α-amino acids except glycine are optically active.\n**Reason (R):** Most naturally occurring amino acids have the L-configuration.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) Both true, but R is not the explanation.** An α-amino acid has four groups on the α-carbon: –NH2, –COOH, –H and –R. When R is anything other than hydrogen these are all different, so the carbon is **chiral** and the acid is optically active.",
      },
      {
        text: "In **glycine** R = H, so the α-carbon carries two hydrogens — it is not a chiral centre, and glycine is optically inactive.",
      },
      {
        text: "The reason (that most natural amino acids are L) is a true but separate fact: it tells you _(which)_ enantiomer occurs in nature, not _(why)_ optical activity exists at all.",
      },
    ],
  },
  {
    id: "b10-ar4",
    chapter: 10,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Proteins",
    years: [2023],
    question:
      "**Assertion (A):** Proteins are polymers of α-amino acids connected by peptide bonds.\n**Reason (R):** A tetrapeptide contains four peptide bonds.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** A tetrapeptide contains **four amino acid residues** joined by **three** peptide bonds — a chain of n residues always has (n − 1) linkages.",
      },
      { figure: { kind: "named", id: "peptide-bond" } },
      { text: "The assertion itself is correct: proteins are polymers of α-amino acids joined by –CO–NH– peptide (amide) linkages." },
    ],
  },

  /* ---------------- Very short ---------------- */
  {
    id: "b10-v1",
    chapter: 10,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2014, 2019],
    question: "What are the products of hydrolysis of: (a) sucrose, (b) maltose, (c) lactose?",
    answer: [
      {
        table: [
          ["Disaccharide", "Hydrolysis products", "Linkage"],
          ["Sucrose", "D-Glucose + D-Fructose", "α-1,2-glycosidic"],
          ["Maltose", "Two molecules of D-Glucose", "α-1,4-glycosidic"],
          ["Lactose", "D-Galactose + D-Glucose", "β-1,4-glycosidic"],
        ],
      },
      {
        text: "Sucrose is **non-reducing** because both anomeric carbons are locked up in the glycosidic bond; maltose and lactose are **reducing** sugars, since one free anomeric carbon remains.",
      },
    ],
  },
  {
    id: "b10-v2",
    chapter: 10,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2014, 2020],
    question: "Which component of starch is water soluble, and which is a branched polymer?",
    answer: [
      {
        text: "**Amylose** is the water-soluble component — about 15–20% of starch. It is a **linear** polymer of α-D-glucose joined by α-1,4-glycosidic bonds.",
      },
      {
        text: "**Amylopectin** is the **branched**, water-insoluble component — about 80–85% of starch. Its chains are α-1,4 linked with branch points every 20–25 units through α-1,6 linkages.",
      },
    ],
  },
  {
    id: "b10-v3",
    chapter: 10,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2019, 2016],
    question: "What is the basic structural difference between starch and cellulose?",
    answer: [
      {
        text: "Both are polymers of glucose, but they differ in the **monomer and the linkage**:",
      },
      {
        points: [
          "**Starch** is built from **α-D-glucose** units joined by **α-glycosidic** linkages (α-1,4, with α-1,6 branches in amylopectin). The chains coil into a helix.",
          "**Cellulose** is built from **β-D-glucose** units joined by **β-1,4-glycosidic** linkages, giving straight chains that pack into rigid fibres held by hydrogen bonds.",
        ],
      },
      {
        text: "Human digestive enzymes hydrolyse only α-linkages, which is why we can digest starch but not cellulose.",
      },
    ],
  },
  {
    id: "b10-v4",
    chapter: 10,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Nucleic acids",
    years: [2013],
    question: "Name the three types of RNA and state their functions.",
    answer: [
      {
        points: [
          "**m-RNA (messenger RNA)** — carries the genetic message from DNA in the nucleus to the ribosome.",
          "**t-RNA (transfer RNA)** — brings the correct amino acid to the ribosome, matching the codon on m-RNA.",
          "**r-RNA (ribosomal RNA)** — forms part of the structure of the ribosome and catalyses the joining of amino acids.",
        ],
      },
    ],
  },

  /* ---------------- Short ---------------- */
  {
    id: "b10-s1",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Definitions",
    years: [2025, 2024, 2014],
    question:
      "Define: (a) glycosidic linkage, (b) invert sugar, (c) oligosaccharides.",
    answer: [
      {
        label: "(a) Glycosidic linkage",
        text: "The **ether-type linkage through an oxygen atom** that joins two monosaccharide units, formed by the loss of a water molecule between their hydroxyl groups. Example: the α-1,4 linkage in maltose.",
      },
      {
        label: "(b) Invert sugar",
        text: "The **equimolar mixture of D-(+)-glucose and D-(−)-fructose** obtained on hydrolysis of sucrose. It is so called because the sign of optical rotation changes (inverts) from +66.5° for sucrose to −19.9° for the mixture.",
      },
      {
        label: "(c) Oligosaccharides",
        text: "Carbohydrates that yield **two to ten monosaccharide units** on hydrolysis. Sucrose, maltose and lactose (all disaccharides) are the common examples.",
      },
    ],
  },
  {
    id: "b10-s2",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Proteins",
    years: [2025, 2024, 2014],
    question:
      "Explain: (a) peptide linkage, (b) denaturation of protein, (c) essential amino acids.",
    answer: [
      {
        label: "(a) Peptide linkage",
        text: "The **–CO–NH– (amide) bond** formed when the carboxyl group of one α-amino acid condenses with the amino group of another, with the loss of a water molecule.",
      },
      { figure: { kind: "named", id: "peptide-bond" } },
      {
        label: "(b) Denaturation",
        text: "The loss of a protein's **biological activity** when heat, acid, alkali, heavy metal ions or UV light disrupt the hydrogen bonds and other weak interactions holding its **secondary and tertiary** structures. The primary structure (the peptide bonds) survives intact, but the globules uncoil and the protein loses its function.",
      },
      { text: "Everyday examples: the coagulation of egg white on boiling, and the curdling of milk." },
      {
        label: "(c) Essential amino acids",
        text: "Amino acids that the human body **cannot synthesise** and must obtain from the diet — for example valine, leucine, lysine and phenylalanine. The remainder, which the body can make for itself, are non-essential.",
      },
    ],
  },
  {
    id: "b10-s3",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Nucleic acids",
    years: [2025, 2023, 2014],
    question:
      "Define: (a) nucleoside, (b) nucleotide, (c) native protein. What is the difference between a nucleoside and a nucleotide?",
    answer: [
      {
        label: "(a) Nucleoside",
        text: "A **base + sugar** unit — a nitrogenous base (purine or pyrimidine) joined to C-1′ of a pentose sugar by an N-glycosidic linkage.",
      },
      { equation: "base + sugar = nucleoside" },
      {
        label: "(b) Nucleotide",
        text: "A **nucleoside esterified with phosphoric acid** at the 5′-OH of the sugar — i.e. base + sugar + phosphate. Nucleotides are the monomers of nucleic acids.",
      },
      { equation: "base + sugar + phosphate = nucleotide" },
      {
        label: "(c) Native protein",
        text: "A protein as it exists in the biological system, in its **unique three-dimensional conformation with full biological activity**. Denaturation destroys this state.",
      },
      {
        label: "The difference",
        text: "A nucleotide is simply a nucleoside that carries a **phosphate group**. Hydrolysis of a nucleotide gives a base, a sugar and phosphoric acid; hydrolysis of a nucleoside gives only the base and the sugar.",
      },
    ],
  },
  {
    id: "b10-s4",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2025, 2023, 2020],
    question:
      "Write the reactions of D-glucose with: (a) HCN, (b) H2N–OH, (c) Br2 water. What does each reaction prove?",
    answer: [
      { label: "(a) With HCN", equation: "CHO(CHOH)4CH2OH + HCN -> CH(OH)(CN)(CHOH)4CH2OH" },
      { text: "Forms a **cyanohydrin** — proves the presence of a **carbonyl (>C=O)** group." },
      { label: "(b) With hydroxylamine", equation: "CHO(CHOH)4CH2OH + H2N–OH -> CH=N–OH(CHOH)4CH2OH + H2O" },
      { text: "Forms an **oxime** — again proves the presence of a carbonyl group." },
      { label: "(c) With bromine water", equation: "CHO(CHOH)4CH2OH + Br2 + H2O -> COOH(CHOH)4CH2OH + 2HBr" },
      {
        text: "Gives **gluconic acid**. Since bromine water is a mild oxidising agent that oxidises only an aldehyde, this proves the carbonyl group is specifically an **aldehyde (–CHO)**.",
      },
    ],
  },
  {
    id: "b10-s5",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Differences",
    years: [2020, 2019, 2023],
    question:
      "Differentiate between: (i) amylose and amylopectin, (ii) globular and fibrous proteins, (iii) DNA and RNA.",
    answer: [
      {
        label: "(i) Amylose vs amylopectin",
        table: [
          ["Amylose", "Amylopectin"],
          ["15–20% of starch", "80–85% of starch"],
          ["Linear, unbranched chain", "Highly branched"],
          ["Only α-1,4-glycosidic linkages", "α-1,4 chains with α-1,6 branch points"],
          ["Water soluble", "Water insoluble"],
        ],
      },
      {
        label: "(ii) Globular vs fibrous proteins",
        table: [
          ["Globular", "Fibrous"],
          ["Polypeptide chains coiled into a spherical shape", "Chains lie parallel, held by H-bonds"],
          ["Soluble in water", "Insoluble in water"],
          ["Usually have biological function (enzymes, hormones)", "Structural role"],
          ["Examples: insulin, albumin, haemoglobin", "Examples: keratin, myosin, collagen"],
        ],
      },
      {
        label: "(iii) DNA vs RNA",
        table: [
          ["DNA", "RNA"],
          ["Sugar is β-D-2-deoxyribose", "Sugar is β-D-ribose"],
          ["Bases A, G, C and **thymine**", "Bases A, G, C and **uracil**"],
          ["Double-stranded helix", "Usually single-stranded"],
          ["Stores and transmits genetic information", "Takes part in protein synthesis"],
        ],
      },
      { figure: { kind: "named", id: "dna-helix" } },
    ],
  },
  {
    id: "b10-s6",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Amino acids",
    years: [2025, 2020],
    question:
      "Why do amino acids show amphoteric behaviour? Why are their melting points higher than those of the corresponding halo acids?",
    answer: [
      {
        label: "Amphoteric behaviour",
        text: "An amino acid contains both an **acidic –COOH** group and a **basic –NH2** group in the same molecule. It can therefore donate a proton to a base and accept one from an acid. In fact, in the solid state and at its isoelectric point, it transfers the proton internally to form a dipolar **zwitterion**:",
      },
      { equation: "H2N–CHR–COOH <=> ^+H3N–CHR–COO^−" },
      {
        label: "High melting point",
        text: "Because they exist as **zwitterions**, amino acids are effectively **ionic** solids. Strong electrostatic forces hold the crystal lattice together, so a great deal of energy is needed to melt them — they generally melt above 473 K, and usually with decomposition. Halo acids are simple covalent molecules held only by dipole–dipole forces and hydrogen bonds, so they melt far lower.",
      },
      {
        text: "The same zwitterionic character explains why amino acids are soluble in water but insoluble in organic solvents.",
      },
    ],
  },
  {
    id: "b10-s7",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Carbohydrates",
    years: [2023],
    question:
      "Give reasons: (a) The pentaacetate of glucose does not react with hydroxylamine. (b) Glucose does not give the 2,4-DNP test or the Schiff's test.",
    answer: [
      {
        label: "(a)",
        text: "Acetylation converts all five hydroxyl groups of the **cyclic** form of glucose into acetate esters, including the one on the anomeric carbon C-1. The ring is therefore **locked shut** and can no longer open to the free aldehyde form. With no free –CHO group available, no oxime can be formed.",
      },
      {
        text: "This observation was key evidence that glucose exists predominantly in the **cyclic hemiacetal** form.",
      },
      {
        label: "(b)",
        text: "For the same reason. In aqueous solution glucose exists almost entirely (>99%) as the cyclic pyranose form, in which C-1 is a **hemiacetal**, not a free aldehyde. The tiny equilibrium concentration of the open-chain form is too small to give a positive 2,4-DNP or Schiff's test, both of which need a genuinely free carbonyl group.",
      },
      { figure: { kind: "named", id: "glucose-haworth" } },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "b10-c1",
    chapter: 10,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2023, 2024],
    passage:
      "Carbohydrates are optically active polyhydroxy aldehydes and ketones, or compounds that give these on hydrolysis; they are also called saccharides. Those that cannot be hydrolysed further are monosaccharides; those that give two to ten units are oligosaccharides; and those that give a large number are polysaccharides. Carbohydrates which reduce Fehling's solution and Tollens' reagent are called reducing sugars. All monosaccharides, whether aldose or ketose, are reducing sugars, as are the disaccharides maltose and lactose. Sucrose, however, is non-reducing.",
    question:
      "(i) Why is sucrose a non-reducing sugar while maltose is reducing?\n(ii) Name the monosaccharides obtained on hydrolysis of lactose.\n(iii) Give an example of a polysaccharide and state its linkage.\n(iv) Why is fructose a reducing sugar even though it is a ketose?",
    answer: [
      {
        label: "(i)",
        text: "In **sucrose** the glycosidic bond is formed between the anomeric carbon of glucose (C-1) and the anomeric carbon of fructose (C-2). **Both** anomeric carbons are therefore tied up, neither ring can open to a free carbonyl group, and the sugar cannot reduce Fehling's or Tollens' reagent.",
      },
      {
        text: "In **maltose** the α-1,4 linkage involves only one anomeric carbon. The second glucose unit keeps a **free anomeric carbon (hemiacetal)** which can open to the aldehyde form, so maltose is reducing.",
      },
      { label: "(ii)", text: "**D-Galactose and D-glucose**, joined by a β-1,4-glycosidic linkage." },
      {
        label: "(iii)",
        text: "**Cellulose** — a straight-chain polymer of β-D-glucose units joined by **β-1,4-glycosidic** linkages. (Starch and glycogen are polymers of α-D-glucose with α-1,4 and α-1,6 linkages.)",
      },
      {
        label: "(iv)",
        text: "Fehling's and Tollens' reagents are **alkaline**. In alkali, fructose undergoes an **ene-diol rearrangement** into glucose and mannose, both of which are aldoses with a free –CHO group, and these are then oxidised. So although fructose itself has a keto group, it tests positive.",
      },
    ],
  },
  {
    id: "b10-c2",
    chapter: 10,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Vitamins",
    years: [2024],
    passage:
      "Certain organic compounds are required in small amounts in our diet, and their deficiency causes specific diseases. These are called vitamins. Most of them cannot be synthesised in our body, but plants can make them. Vitamins are classified into two groups depending on their solubility in water or fat. Vitamins A, D, E and K are fat soluble and are stored in the liver and adipose tissue, whereas the B group and vitamin C are water soluble and must be supplied regularly in the diet because they are readily excreted in urine.",
    question:
      "(i) Name the vitamin whose deficiency causes rickets, and say whether it is fat or water soluble.\n(ii) Why must vitamin C be supplied regularly in the diet?\n(iii) Name the vitamin whose deficiency causes night blindness and give one dietary source.\n(iv) Name the vitamin whose deficiency increases the blood clotting time.",
    answer: [
      { label: "(i)", text: "**Vitamin D**, and it is **fat soluble** — which is why it can be stored in the liver, and why an excess can be toxic." },
      {
        label: "(ii)",
        text: "Vitamin C (ascorbic acid) is **water soluble**, so any excess is quickly excreted in the urine and none is stored in the body. A regular dietary supply is therefore essential; its deficiency causes **scurvy**. Citrus fruits and amla are rich sources.",
      },
      {
        label: "(iii)",
        text: "**Vitamin A.** Sources: carrots, fish liver oil, milk, butter and eggs.",
      },
      { label: "(iv)", text: "**Vitamin K.**" },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "b10-l1",
    chapter: 10,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Proteins",
    years: [2024, 2019, 2018],
    question:
      "(a) Describe the four levels of protein structure and state what stabilises each.\n(b) What is denaturation? Give two examples.\n(c) What type of bonding provides stability to the α-helix?",
    answer: [
      {
        label: "(a) Primary structure",
        text: "The **sequence of amino acids** in the polypeptide chain, read from the N-terminal end. Held together by **peptide (covalent) bonds**. Any change in sequence gives a different protein.",
      },
      { figure: { kind: "named", id: "peptide-bond" } },
      {
        label: "Secondary structure",
        text: "The local regular folding of the chain — either a right-handed **α-helix** or a **β-pleated sheet**. Stabilised by **hydrogen bonds** between the C=O of one residue and the N–H of another.",
      },
      { figure: { kind: "named", id: "alpha-helix" } },
      {
        label: "Tertiary structure",
        text: "The overall three-dimensional folding of the whole chain, giving either a globular or a fibrous shape. Stabilised by **hydrogen bonds, disulphide (–S–S–) bridges, ionic (salt) bridges and van der Waals forces** between side chains.",
      },
      {
        label: "Quaternary structure",
        text: "The way two or more separate polypeptide subunits **assemble** into the functional protein. Haemoglobin, with four subunits, is the standard example. Held by the same non-covalent forces as the tertiary structure.",
      },
      {
        label: "(b) Denaturation",
        text: "The loss of biological activity that occurs when heat, acid, alkali, heavy metal ions or UV radiation disrupt the **hydrogen bonds and other weak interactions** holding the secondary and tertiary structures. The **primary structure is unaffected** — the peptide bonds survive — but the globules uncoil and the protein can no longer function.",
      },
      {
        points: [
          "**Coagulation of egg white** on boiling — soluble globular albumin becomes an insoluble white solid.",
          "**Curdling of milk**, when lactic acid produced by bacteria denatures the casein.",
        ],
      },
      {
        label: "(c)",
        text: "**Intramolecular hydrogen bonds.** In the α-helix the chain coils as a right-handed screw, and the C=O group of each residue hydrogen-bonds to the N–H group of the residue **four places further along** the chain. These regularly spaced hydrogen bonds run parallel to the axis of the helix and hold the coil rigid.",
      },
    ],
  },
  {
    id: "b10-l2",
    chapter: 10,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Carbohydrates",
    years: [2020, 2023],
    question:
      "(a) Write the reactions that establish the following features of the open-chain structure of glucose: (i) an aldehyde group, (ii) a straight chain of six carbons, (iii) five hydroxyl groups.\n(b) Which observations could the open-chain structure **not** explain, and what structure was proposed instead?",
    answer: [
      {
        label: "(a)(i) Aldehyde group",
        text: "Glucose is oxidised by the mild oxidising agent bromine water to a **monocarboxylic acid** with the same number of carbons:",
      },
      { equation: "CHO(CHOH)4CH2OH + Br2 + H2O -> COOH(CHOH)4CH2OH + 2HBr" },
      { text: "It also forms an oxime with NH2OH and a cyanohydrin with HCN, confirming a carbonyl group." },
      {
        label: "(a)(ii) Straight chain of six carbons",
        text: "Prolonged heating with hydriodic acid and red phosphorus reduces glucose completely to **n-hexane**, which shows that all six carbons are in an unbranched chain:",
      },
      { equation: "C6H12O6 + HI ->[red P, Δ] CH3(CH2)4CH3" },
      {
        label: "(a)(iii) Five hydroxyl groups",
        text: "Glucose reacts with acetic anhydride to form a **penta-acetate**, showing that exactly five –OH groups are present:",
      },
      { equation: "C6H12O6 + 5(CH3CO)2O -> glucose penta-acetate + 5CH3COOH" },
      { text: "Since the compound is stable, the five hydroxyls must be on **different** carbon atoms." },
      {
        label: "(b) Failures of the open-chain structure",
        points: [
          "Glucose does **not** give the 2,4-DNP test, the Schiff's test, or react with NaHSO3 — yet it should if a free –CHO group were present.",
          "The penta-acetate of glucose does **not** react with hydroxylamine, showing the absence of a free aldehyde in that derivative.",
          "Glucose exists in **two crystalline forms**, α (m.p. 419 K, [α] = +111°) and β (m.p. 423 K, [α] = +19.2°), which each slowly change to an equilibrium value of +52.5° — the phenomenon of **mutarotation**. An open chain cannot explain this.",
        ],
      },
      {
        label: "The cyclic structure",
        text: "These observations were explained by proposing that glucose exists as a **six-membered cyclic hemiacetal (pyranose) ring**, formed by the –OH on C-5 adding to the aldehyde carbon C-1. This creates a **new stereocentre at C-1**, the anomeric carbon, giving the α and β anomers.",
      },
      { figure: { kind: "named", id: "glucose-haworth" } },
    ],
  },
];
