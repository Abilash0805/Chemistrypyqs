import type { Chapter } from "@/types";

/**
 * The ten units of the CBSE Class 12 Chemistry syllabus in force for
 * 2026-27 (70 marks theory + 30 marks practical).
 *
 * The six units removed in the NCERT rationalisation — Solid State, Surface
 * Chemistry, General Principles and Processes of Isolation of Elements,
 * the p-Block Elements (Groups 15–18), Polymers and Chemistry in Everyday
 * Life — are *not* listed here, and every question taken from a pre-2023
 * board paper that belongs to them has been left out of the bank.
 */
export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    unit: 1,
    slug: "solutions",
    name: "Solutions",
    unitMarks: 7,
    accent: "#6366F1",
    blurb:
      "Concentration terms, Raoult's law, ideal and non-ideal solutions, azeotropes and the four colligative properties — plus the van't Hoff factor for associating and dissociating solutes.",
    topics: [
      "Types of solutions and concentration terms",
      "Solubility and Henry's law",
      "Raoult's law and vapour pressure",
      "Ideal and non-ideal solutions, azeotropes",
      "Colligative properties",
      "Abnormal molar mass and van't Hoff factor",
    ],
    deleted: ["Solid solutions (detailed)"],
  },
  {
    id: 2,
    unit: 2,
    slug: "electrochemistry",
    name: "Electrochemistry",
    unitMarks: 9,
    accent: "#0EA5E9",
    blurb:
      "Galvanic cells and electrode potentials, the Nernst equation, conductance and Kohlrausch's law, electrolysis and Faraday's laws, batteries, fuel cells and corrosion.",
    topics: [
      "Redox reactions and galvanic cells",
      "Standard electrode potential and EMF",
      "Nernst equation and equilibrium constant",
      "Conductance and molar conductivity",
      "Kohlrausch's law",
      "Electrolysis and Faraday's laws",
      "Batteries, fuel cells and corrosion",
    ],
  },
  {
    id: 3,
    unit: 3,
    slug: "chemical-kinetics",
    name: "Chemical Kinetics",
    unitMarks: 7,
    accent: "#14B8A6",
    blurb:
      "Rate of reaction, order and molecularity, integrated rate equations for zero and first order, half-life, and the effect of temperature and catalysts through the Arrhenius equation.",
    topics: [
      "Rate of reaction and rate law",
      "Order and molecularity",
      "Integrated rate equations",
      "Half-life",
      "Temperature dependence and Arrhenius equation",
      "Collision theory and catalysis",
    ],
    deleted: ["Pseudo first order reactions (detailed treatment)"],
  },
  {
    id: 4,
    unit: 4,
    slug: "d-and-f-block-elements",
    name: "The d- and f-Block Elements",
    unitMarks: 7,
    accent: "#F59E0B",
    blurb:
      "General trends across the 3d series, variable oxidation states, magnetic and catalytic behaviour, coloured ions, plus the lanthanoids, lanthanoid contraction and the actinoids.",
    topics: [
      "General properties of transition elements",
      "Variable oxidation states",
      "Atomic and ionic radii, ionisation enthalpy",
      "Magnetic properties and colour",
      "Catalytic behaviour and interstitial compounds",
      "Alloy formation",
      "Lanthanoids and lanthanoid contraction",
      "Actinoids",
    ],
    deleted: ["Preparation and properties of KMnO4 and K2Cr2O7 (detailed)"],
  },
  {
    id: 5,
    unit: 5,
    slug: "coordination-compounds",
    name: "Coordination Compounds",
    unitMarks: 7,
    accent: "#EC4899",
    blurb:
      "Werner's theory and nomenclature, ligands and coordination number, isomerism, valence bond and crystal field theories, and the importance of coordination compounds.",
    topics: [
      "Werner's theory and terminology",
      "IUPAC nomenclature",
      "Isomerism in coordination compounds",
      "Valence bond theory",
      "Crystal field theory",
      "Colour and magnetic properties",
      "Importance and applications",
    ],
  },
  {
    id: 6,
    unit: 6,
    slug: "haloalkanes-and-haloarenes",
    name: "Haloalkanes and Haloarenes",
    unitMarks: 6,
    accent: "#8B5CF6",
    blurb:
      "Nomenclature and preparation, physical properties, the SN1/SN2 substitution mechanisms and stereochemistry, the low reactivity of haloarenes, and some environmentally important halogen compounds.",
    topics: [
      "Nomenclature and classification",
      "Methods of preparation",
      "Physical properties",
      "Nucleophilic substitution: SN1 and SN2",
      "Optical isomerism and chirality",
      "Reactions of haloarenes",
      "Polyhalogen compounds",
    ],
  },
  {
    id: 7,
    unit: 7,
    slug: "alcohols-phenols-and-ethers",
    name: "Alcohols, Phenols and Ethers",
    unitMarks: 6,
    accent: "#10B981",
    blurb:
      "Preparation and properties of alcohols, phenols and ethers; acidity of phenols; dehydration, oxidation and the named reactions — Kolbe, Reimer–Tiemann, Williamson and Friedel–Crafts.",
    topics: [
      "Nomenclature and classification",
      "Preparation of alcohols and phenols",
      "Physical properties and acidity",
      "Reactions of alcohols",
      "Reactions of phenols",
      "Ethers: preparation and reactions",
    ],
  },
  {
    id: 8,
    unit: 8,
    slug: "aldehydes-ketones-and-carboxylic-acids",
    name: "Aldehydes, Ketones and Carboxylic Acids",
    unitMarks: 8,
    accent: "#EF4444",
    blurb:
      "Nucleophilic addition to the carbonyl group, distinguishing tests, aldol and Cannizzaro reactions, and the preparation, acidity and reactions of carboxylic acids.",
    topics: [
      "Nomenclature and structure of the carbonyl group",
      "Preparation of aldehydes and ketones",
      "Nucleophilic addition reactions",
      "Oxidation, reduction and distinguishing tests",
      "Aldol and Cannizzaro reactions",
      "Carboxylic acids: preparation and acidity",
      "Reactions of carboxylic acids",
    ],
  },
  {
    id: 9,
    unit: 9,
    slug: "amines",
    name: "Amines",
    unitMarks: 6,
    accent: "#F97316",
    blurb:
      "Classification and preparation of amines, the basic strength of aliphatic and aromatic amines, distinguishing tests, and the diazonium salts that open the door to substituted arenes.",
    topics: [
      "Classification, structure and nomenclature",
      "Methods of preparation",
      "Physical properties",
      "Basic character of amines",
      "Chemical reactions and distinguishing tests",
      "Diazonium salts and their reactions",
    ],
  },
  {
    id: 10,
    unit: 10,
    slug: "biomolecules",
    name: "Biomolecules",
    unitMarks: 7,
    accent: "#06B6D4",
    blurb:
      "Carbohydrates and the structure of glucose, proteins and their levels of structure, enzymes, vitamins, and the nucleic acids DNA and RNA.",
    topics: [
      "Carbohydrates: classification and glucose",
      "Disaccharides and polysaccharides",
      "Proteins: amino acids and peptide linkage",
      "Structure of proteins and denaturation",
      "Enzymes",
      "Vitamins",
      "Nucleic acids: DNA and RNA",
    ],
    deleted: ["Hormones", "Chemistry of lipids (detailed)"],
  },
];

export const CHAPTER_BY_ID = new Map(CHAPTERS.map((c) => [c.id, c]));
export const CHAPTER_BY_SLUG = new Map(CHAPTERS.map((c) => [c.slug, c]));

/** Units removed by CBSE rationalisation — surfaced in the UI for clarity. */
export const REMOVED_UNITS = [
  "The Solid State",
  "Surface Chemistry",
  "General Principles and Processes of Isolation of Elements",
  "The p-Block Elements (Groups 15–18)",
  "Polymers",
  "Chemistry in Everyday Life",
];
