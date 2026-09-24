import type { Question } from "@/types";

/** Unit 10 — the definition and classification questions that appear in nearly every paper. */
export const CH10D: Question[] = [
  {
    id: "b10-d1",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Definitions",
    years: [2024, 2019, 2014],
    question:
      "Define the following, with one example of each:\n(a) glycosidic linkage\n(b) invert sugar\n(c) oligosaccharides",
    answer: [
      {
        label: "(a) Glycosidic linkage",
        text: "The **ether linkage (–O–) that joins two monosaccharide units**, formed when the anomeric –OH of one ring condenses with an –OH of the other and a molecule of water is lost.",
      },
      {
        text: "Example: in **maltose** a C-1 to C-4 **α-glycosidic** linkage joins two α-D-glucose units. In **sucrose** the linkage is α-1,2 between C-1 of glucose and C-2 of fructose; in **cellulose** it is β-1,4.",
      },
      {
        label: "(b) Invert sugar",
        text: "The **equimolar mixture of D-(+)-glucose and D-(−)-fructose** obtained by hydrolysing sucrose.",
      },
      { equation: "C12H22O11 + H2O ->[H^+ or invertase] C6H12O6 + C6H12O6" },
      {
        text: "It is so called because the **sign of the optical rotation inverts**: sucrose is dextrorotatory at +66.5°, but the product mixture is laevorotatory at −39.9°, because fructose's −92.4° outweighs glucose's +52.5°. Honey is largely invert sugar.",
      },
      {
        label: "(c) Oligosaccharides",
        text: "Carbohydrates that yield **two to ten monosaccharide units** on hydrolysis.",
      },
      {
        table: [
          ["Class", "Units on hydrolysis", "Examples"],
          ["Monosaccharide", "Cannot be hydrolysed", "Glucose, fructose, ribose"],
          ["**Oligosaccharide**", "2–10", "Sucrose, maltose, lactose (all disaccharides)"],
          ["Polysaccharide", "A large number", "Starch, cellulose, glycogen"],
        ],
      },
    ],
  },
  {
    id: "b10-d2",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Definitions",
    years: [2020, 2018, 2023],
    question:
      "Define the following, with a suitable example of each:\n(a) polysaccharides\n(b) denatured protein\n(c) essential amino acids\n(d) fibrous protein",
    answer: [
      {
        label: "(a) Polysaccharides",
        text: "Carbohydrates in which **a large number of monosaccharide units are joined by glycosidic linkages**. They are not sweet, so they are also called non-sugars.",
      },
      {
        text: "Examples: **starch** (the storage polysaccharide of plants, made of amylose and amylopectin), **cellulose** (the structural material of plant cell walls) and **glycogen** (animal starch, stored in liver and muscle).",
      },
      {
        label: "(b) Denatured protein",
        text: "A protein whose **secondary and tertiary structures have been destroyed** by heat, change of pH, heavy metal ions or a chemical such as urea, so that it loses its biological activity. The **primary structure — the sequence of amino acids — is left intact**.",
      },
      {
        text: "Examples: the coagulation of **egg white** on boiling, and the **curdling of milk**. The change is normally irreversible, because the globular protein uncoils into a disordered fibrous mass and the hydrogen bonds and disulphide bridges that held the shape cannot reform.",
      },
      {
        label: "(c) Essential amino acids",
        text: "Amino acids that **the human body cannot synthesise** and must therefore obtain from the diet.",
      },
      {
        text: "There are ten of them, including **valine, leucine, isoleucine, lysine and phenylalanine**. The remaining ten, such as **glycine and alanine**, are non-essential because the body makes them itself.",
      },
      {
        label: "(d) Fibrous protein",
        text: "A protein whose polypeptide chains run **parallel to one another and are held together by hydrogen bonds and disulphide bridges**, giving a thread-like, fibre-like solid. Fibrous proteins are **insoluble in water** and serve a structural role.",
      },
      {
        table: [
          ["", "Fibrous protein", "Globular protein"],
          ["Shape", "Thread-like, chains parallel", "Chains coiled into a ball"],
          ["Solubility in water", "Insoluble", "Soluble"],
          ["Function", "Structural", "Functional — enzymes, transport"],
          ["Examples", "Keratin (hair, nails), myosin (muscle), collagen", "Insulin, albumin, haemoglobin"],
        ],
      },
    ],
  },
  {
    id: "b10-d3",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Carbohydrates",
    years: [2024, 2019, 2014],
    question:
      "(a) Classify the following as monosaccharides or disaccharides: galactose, lactose, glucose, maltose, sucrose, fructose.\n(b) Write the products of hydrolysis of sucrose, maltose and lactose.",
    answer: [
      {
        label: "(a) Classification",
        table: [
          ["Monosaccharides", "Disaccharides"],
          ["Galactose, glucose, fructose", "Lactose, maltose, sucrose"],
        ],
      },
      {
        text: "The test is simple: a **monosaccharide cannot be hydrolysed** to anything smaller, whereas a disaccharide gives **two** monosaccharide units.",
      },
      {
        label: "(b) Hydrolysis products",
        table: [
          ["Disaccharide", "Products", "Linkage", "Reducing?"],
          ["Sucrose (cane sugar)", "Glucose + fructose", "α-1,2", "No"],
          ["Maltose (malt sugar)", "Glucose + glucose", "α-1,4", "Yes"],
          ["Lactose (milk sugar)", "Glucose + galactose", "β-1,4", "Yes"],
        ],
      },
      { equations: ["C12H22O11 + H2O ->[H^+] C6H12O6(glucose) + C6H12O6(fructose)", "maltose + H2O ->[maltase] 2 glucose", "lactose + H2O ->[lactase] glucose + galactose"] },
      {
        text: "All three disaccharides share the molecular formula **C12H22O11** and all give C6H12O6 units — what differs is which monosaccharides and which linkage.",
      },
    ],
    keyPoint: "Sucrose → glucose + fructose · Maltose → 2 glucose · Lactose → glucose + galactose.",
  },
  {
    id: "b10-d4",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Proteins",
    years: [2019, 2022],
    question:
      "(a) What type of bonding gives stability to the α-helix structure of a protein?\n(b) Distinguish between the primary and secondary structure of a protein.\n(c) Name the vitamin whose deficiency causes pernicious anaemia, and the one whose deficiency causes scurvy.",
    answer: [
      {
        label: "(a) Bonding in the α-helix",
        text: "**Intramolecular hydrogen bonds** between the **>C=O** of one amino acid residue and the **N–H** of the fourth residue further along the same chain. Every turn of the helix is held by these bonds, which is why the coil is stable.",
      },
      { figure: { kind: "named", id: "alpha-helix" } },
      {
        text: "In the **β-pleated sheet**, by contrast, the hydrogen bonds are **intermolecular** — between neighbouring, fully stretched chains lying side by side.",
      },
      {
        label: "(b) Primary vs secondary structure",
        table: [
          ["", "Primary structure", "Secondary structure"],
          ["What it describes", "The **sequence** in which the amino acids are joined", "The way the chain **folds or coils** locally"],
          ["Bonding", "Covalent peptide (–CO–NH–) bonds", "Hydrogen bonds between C=O and N–H"],
          ["Forms", "One, unique to each protein", "α-helix or β-pleated sheet"],
          ["Lost on denaturation?", "No", "Yes"],
        ],
      },
      { figure: { kind: "named", id: "peptide-bond" } },
      {
        text: "Even a single change in the primary sequence can destroy the protein's function — sickle-cell anaemia arises from one such substitution in haemoglobin.",
      },
      {
        label: "(c) The two vitamins",
        table: [
          ["Deficiency disease", "Vitamin", "Also called"],
          ["Pernicious anaemia", "**Vitamin B12**", "Cyanocobalamin"],
          ["Scurvy", "**Vitamin C**", "Ascorbic acid"],
        ],
      },
      {
        text: "Both are **water soluble**, so the body cannot store them and they must be supplied regularly in the diet. The fat-soluble vitamins A, D, E and K are stored in the liver and adipose tissue.",
      },
    ],
  },
];
