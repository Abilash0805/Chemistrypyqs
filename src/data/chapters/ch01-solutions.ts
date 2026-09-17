import type { Question } from "@/types";

/**
 * Unit 1 — Solutions (7 marks).
 * Questions drawn from the CBSE board papers 2013–2025 and the chapter-wise
 * important-question sets, rewritten with correct notation and given
 * exam-ready answers written to the CBSE marking scheme.
 */
export const CH01: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "s1-m1",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2024, 2014],
    question: "Isotonic solutions have the same",
    options: ["density", "refractive index", "osmotic pressure", "volume"],
    correct: 2,
    answer: [
      {
        text: "**(c) osmotic pressure.** Two solutions are isotonic when they exert the same osmotic pressure at the same temperature, which (for the same solvent) means they have the same molar concentration of solute particles.",
      },
    ],
    keyPoint: "Isotonic \u21D2 equal \u03C0 \u21D2 equal particle concentration.",
  },
  {
    id: "s1-m2",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "van't Hoff factor",
    years: [2024],
    question:
      "The van't Hoff factor for Na2SO4·10H2O in solution, assuming complete ionisation, is",
    options: ["1", "3", "13", "2"],
    correct: 1,
    answer: [
      {
        text: "**(b) 3.** Water of crystallisation simply becomes part of the solvent, so only the salt itself ionises:",
      },
      { equation: "Na2SO4 -> 2Na^+ + SO4^2\u2212" },
      { text: "That gives 3 particles from 1 formula unit, so i = 3." },
    ],
    keyPoint: "Water of crystallisation never counts toward i.",
  },
  {
    id: "s1-m3",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2023],
    question: "Which of the following aqueous solutions will have the highest boiling point?",
    options: ["1.0 M KCl", "1.0 M K2SO4", "2.0 M KCl", "2.0 M K2SO4"],
    correct: 3,
    answer: [
      {
        text: "**(d) 2.0 M K2SO4.** Elevation of boiling point depends on the total concentration of **particles**, i.e. on i \u00D7 C.",
      },
      {
        table: [
          ["Solution", "i", "i \u00D7 C"],
          ["1.0 M KCl", "2", "2.0"],
          ["1.0 M K2SO4", "3", "3.0"],
          ["2.0 M KCl", "2", "4.0"],
          ["2.0 M K2SO4", "3", "6.0"],
        ],
      },
      { text: "2.0 M K2SO4 gives the largest value, so it boils highest." },
    ],
    keyPoint: "Rank colligative effects by i \u00D7 C, never by C alone.",
  },
  {
    id: "s1-m4",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2023],
    question:
      "Out of the following 1.0 M aqueous solutions, which one will show the largest depression in freezing point?",
    options: ["NaCl", "Na2SO4", "C6H12O6", "Al2(SO4)3"],
    correct: 3,
    answer: [
      {
        text: "**(d) Al2(SO4)3.** It gives the greatest number of ions per formula unit:",
      },
      { equation: "Al2(SO4)3 -> 2Al^3+ + 3SO4^2\u2212" },
      {
        text: "i = 5, against 2 for NaCl, 3 for Na2SO4 and 1 for glucose. Since \u0394T_f = i K_f m, the largest i gives the largest depression.",
      },
    ],
  },
  {
    id: "s1-m5",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Henry's law",
    years: [2023],
    question: "The value of Henry's constant K_H",
    options: [
      "increases with decrease in temperature",
      "decreases with increase in temperature",
      "increases with increase in temperature",
      "remains constant at all temperatures",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) increases with increase in temperature.** Dissolution of a gas is exothermic, so raising the temperature drives the gas out of solution. Solubility falls, and since",
      },
      { equation: "p = K_H \u00D7 x" },
      {
        text: "a smaller x at the same pressure means a larger K_H. This is why warm water holds less dissolved O2 — and why aquatic life is more comfortable in cold water.",
      },
    ],
    keyPoint: "K_H \u2191 with T \u21D2 gas solubility \u2193 with T.",
  },
  {
    id: "s1-m6",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Non-ideal solutions",
    years: [2022, 2023],
    question:
      "An azeotropic solution of two liquids has a boiling point lower than either of the two when it",
    options: [
      "shows a positive deviation from Raoult's law",
      "shows a negative deviation from Raoult's law",
      "shows no deviation from Raoult's law",
      "is saturated",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) shows a positive deviation from Raoult's law.** Positive deviation means A\u2013B interactions are weaker than A\u2013A and B\u2013B, so the vapour pressure is higher than Raoult's law predicts. Higher vapour pressure means a **lower** boiling point, and at the maximum of the vapour-pressure curve the mixture boils as a minimum-boiling azeotrope.",
      },
      { text: "Example: ethanol (95.6%) + water." },
      { figure: { kind: "named", id: "raoult-deviations" } },
    ],
  },
  {
    id: "s1-m7",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Non-ideal solutions",
    years: [2022],
    question: "On mixing 20 mL of acetone with 30 mL of chloroform, the total volume of the solution is",
    options: ["< 50 mL", "= 50 mL", "> 50 mL", "= 10 mL"],
    correct: 0,
    answer: [
      {
        text: "**(a) < 50 mL.** Acetone and chloroform form hydrogen bonds with each other that neither forms with itself, so the unlike molecules pull closer together. This is a **negative deviation** from Raoult's law, for which \u0394_mix V < 0 and \u0394_mix H < 0 (the mixture warms up).",
      },
      { equation: "CH3\u2013CO\u2013CH3 \u00B7\u00B7\u00B7 H\u2013CCl3" },
    ],
    keyPoint: "Negative deviation: \u0394V < 0, \u0394H < 0, maximum-boiling azeotrope.",
  },
  {
    id: "s1-m8",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2023],
    question: "If the molality of a dilute solution is doubled, the value of the molal elevation constant K_b will be",
    options: ["halved", "doubled", "tripled", "unchanged"],
    correct: 3,
    answer: [
      {
        text: "**(d) unchanged.** K_b is a property of the **solvent** alone — it is the elevation produced by a 1 molal solution — and does not depend on how much solute is present. Only \u0394T_b changes when molality changes.",
      },
    ],
  },
  {
    id: "s1-m9",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2025],
    question:
      "An unripe mango placed in a concentrated salt solution to prepare pickle shrivels because",
    options: [
      "it gains water due to osmosis",
      "it gains water due to reverse osmosis",
      "it loses water due to reverse osmosis",
      "it loses water due to osmosis",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) it loses water due to osmosis.** The salt solution outside is **hypertonic**, so water flows out of the mango cells through their semipermeable membranes until the concentrations balance. The cells lose water and the mango shrivels.",
      },
      { figure: { kind: "named", id: "osmosis" } },
    ],
  },
  {
    id: "s1-m10",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Raoult's law",
    years: [2022],
    question:
      "Which of the following formulae represents Raoult's law for a solution containing a non-volatile solute?",
    options: [
      "p_solute = p\u00B0_solute \u00D7 x_solute",
      "p = K_H \u00D7 x",
      "p_total = p_solvent\u00B0 \u00D7 x_solvent",
      "p_total = p_A\u00B0 + p_B\u00B0",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c)** With a non-volatile solute only the solvent contributes to the vapour, so the total vapour pressure is",
      },
      { equation: "p_total = p\u00B0_solvent \u00D7 x_solvent" },
      {
        text: "Since x_solvent < 1, the vapour pressure of the solution is always **lower** than that of the pure solvent — this relative lowering is the parent colligative property.",
      },
    ],
  },
  {
    id: "s1-m11",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2022],
    question:
      "The boiling point of a 0.2 m solution of a non-electrolyte in water is (K_b for water = 0.52 K kg mol\u22121)",
    options: ["100 \u00B0C", "100.52 \u00B0C", "100.104 \u00B0C", "100.26 \u00B0C"],
    correct: 2,
    answer: [
      { text: "**(c) 100.104 \u00B0C.**" },
      { equation: "$\\Delta T_b = K_b \\times m = 0.52 \\times 0.2 = 0.104\\ \\text{K}$" },
      { equation: "$T_b = 100 + 0.104 = 100.104\\ ^\\circ\\text{C}$" },
      { text: "A non-electrolyte does not dissociate, so i = 1." },
    ],
  },
  {
    id: "s1-m12",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Henry's law",
    years: [2022],
    question:
      "An unknown gas 'X' is dissolved in water at 2.5 bar pressure and has mole fraction 0.04 in solution. The mole fraction of 'X' when the pressure of the gas is doubled at the same temperature is",
    options: ["0.08", "0.04", "0.02", "0.16"],
    correct: 0,
    answer: [
      { text: "**(a) 0.08.** Henry's law makes x directly proportional to p at constant temperature:" },
      { equation: "$\\frac{x_2}{x_1} = \\frac{p_2}{p_1} = \\frac{5.0}{2.5} = 2$" },
      { equation: "$x_2 = 2 \\times 0.04 = 0.08$" },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "s1-ar1",
    chapter: 1,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2020, 2023],
    question:
      "**Assertion (A):** Elevation in boiling point is a colligative property.\n**Reason (R):** Elevation in boiling point is directly proportional to molarity.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Elevation of boiling point does depend only on the number of solute particles, so it *is* a colligative property. But it is proportional to **molality**, not molarity:",
      },
      { equation: "$\\Delta T_b = K_b \\times m$" },
      {
        text: "Molality is used because it involves mass of solvent, which does not change with temperature, whereas molarity involves volume, which does.",
      },
    ],
    keyPoint: "Colligative properties use molality — it is temperature-independent.",
  },
  {
    id: "s1-ar2",
    chapter: 1,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2020],
    question:
      "**Assertion (A):** A 0.1 M solution of KCl has greater osmotic pressure than a 0.1 M solution of glucose at the same temperature.\n**Reason (R):** In solution KCl dissociates to produce more particles.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both A and R are true and R correctly explains A.** Osmotic pressure \u03C0 = i C R T counts **particles**, not formula units.",
      },
      { equation: "KCl -> K^+ + Cl^\u2212" },
      {
        text: "KCl gives i = 2 while glucose stays as whole molecules with i = 1, so at the same molarity KCl exerts about twice the osmotic pressure.",
      },
    ],
  },
  {
    id: "s1-ar3",
    chapter: 1,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Ideal solutions",
    years: [2020, 2023],
    question:
      "**Assertion (A):** The enthalpy of mixing \u0394_mix H is zero for an ideal solution.\n**Reason (R):** For an ideal solution the interactions between solute and solvent molecules are identical to the interactions in the pure components.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** In an ideal solution the A\u2013B interaction is exactly as strong as the A\u2013A and B\u2013B interactions it replaces. No net energy is absorbed or released on mixing, so",
      },
      { equation: "$\\Delta_{mix}H = 0 \\quad\\text{and}\\quad \\Delta_{mix}V = 0$" },
      {
        text: "Such solutions obey Raoult's law over the whole composition range. Examples: n-hexane + n-heptane, benzene + toluene, bromoethane + chloroethane.",
      },
    ],
  },

  /* ---------------- Very short ---------------- */
  {
    id: "s1-v1",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2014],
    question: "What are isotonic solutions?",
    answer: [
      {
        text: "Two solutions that exert the **same osmotic pressure** at the same temperature are called isotonic solutions. Because \u03C0 = i C R T, isotonic solutions of the same solvent have the same total concentration of solute particles — for example, 0.9% (m/V) NaCl is isotonic with the fluid inside red blood cells, which is why it is used for intravenous injection.",
      },
    ],
  },
  {
    id: "s1-v2",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Non-ideal solutions",
    years: [2014],
    question: "Some liquids on mixing form 'azeotropes'. What are azeotropes?",
    answer: [
      {
        text: "Azeotropes are **binary liquid mixtures that boil at a constant temperature and distil over without any change in composition** — the vapour has the same composition as the liquid, so the components cannot be separated by fractional distillation.",
      },
      {
        points: [
          "**Minimum-boiling azeotrope** — from a large positive deviation, e.g. ethanol (95.6%) + water, b.p. 351.1 K.",
          "**Maximum-boiling azeotrope** — from a large negative deviation, e.g. nitric acid (68%) + water, b.p. 393.5 K.",
        ],
      },
    ],
  },
  {
    id: "s1-v3",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Osmosis",
    years: [2025, 2024],
    question: "Define reverse osmosis. Give one application.",
    answer: [
      {
        text: "When a pressure **greater than the osmotic pressure** is applied to the solution side of a semipermeable membrane, the solvent flows in the opposite direction — out of the solution and into the pure solvent. This is reverse osmosis.",
      },
      {
        text: "**Application:** desalination of sea water. Sea water is forced at high pressure through a cellulose-acetate membrane, which lets water through but holds back the dissolved salts, giving potable water.",
      },
      { figure: { kind: "named", id: "osmosis" } },
    ],
  },
  {
    id: "s1-v4",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Henry's law",
    years: [2024],
    question: "Why are aquatic species more comfortable in cold water than in warm water?",
    answer: [
      {
        text: "The solubility of a gas in a liquid **decreases as temperature rises** (dissolution of a gas is exothermic, so by Le Chatelier's principle heating drives the gas out). Cold water therefore holds more dissolved oxygen than warm water, and aquatic species breathe more easily in it.",
      },
    ],
  },
  {
    id: "s1-v5",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2019],
    question: "Why does a solution of potassium chloride freeze at a lower temperature than pure water?",
    answer: [
      {
        text: "Dissolving KCl lowers the vapour pressure of the water. The solution's vapour pressure becomes equal to that of solid ice only at a temperature **below** 273 K, so the freezing point falls. Because KCl also dissociates into K⁺ and Cl⁻ (i = 2), it produces twice the depression of an equimolal non-electrolyte.",
      },
      { equation: "$\\Delta T_f = i\\,K_f\\,m$" },
    ],
  },
  {
    id: "s1-v6",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Non-ideal solutions",
    years: [2019, 2025],
    question: "Why is a decrease in temperature observed on mixing ethanol and acetone?",
    answer: [
      {
        text: "Pure ethanol molecules are held together by strong hydrogen bonds. Acetone molecules get in between them and break those hydrogen bonds, and the new ethanol\u2013acetone interactions are **weaker** than the ones destroyed. Energy is therefore absorbed: \u0394_mix H > 0, and the mixture cools. This is a **positive deviation** from Raoult's law.",
      },
    ],
    keyPoint: "Weaker A\u2013B forces \u21D2 positive deviation \u21D2 endothermic mixing \u21D2 cooling.",
  },
  {
    id: "s1-v7",
    chapter: 1,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2025],
    question: "Why is cooking faster in a pressure cooker than in an open pan?",
    answer: [
      {
        text: "A pressure cooker traps steam, so the pressure above the water rises well above 1 atm. A liquid boils when its vapour pressure equals the external pressure, so the water must be heated to a **higher temperature** (about 120 \u00B0C) before it boils. Food cooks faster at that higher temperature.",
      },
    ],
  },

  /* ---------------- Short (2–3 marks) ---------------- */
  {
    id: "s1-s1",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Raoult's law",
    years: [2014, 2019, 2020],
    question:
      "State Raoult's law for a solution containing volatile components. What is the similarity between Raoult's law and Henry's law?",
    answer: [
      {
        label: "Raoult's law",
        text: "For a solution of two volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction in the solution:",
      },
      { equations: ["$p_A = p_A^\\circ\\, x_A$", "$p_B = p_B^\\circ\\, x_B$", "$p_{total} = p_A^\\circ x_A + p_B^\\circ x_B$"] },
      {
        label: "Similarity",
        text: "Both laws say that the **partial pressure of a volatile component is directly proportional to its mole fraction in solution**. In fact Raoult's law is a special case of Henry's law in which the proportionality constant K_H becomes equal to p\u00B0, the vapour pressure of the pure component.",
      },
    ],
  },
  {
    id: "s1-s2",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Henry's law",
    years: [2014, 2019, 2020],
    question: "State Henry's law and write two of its applications.",
    answer: [
      {
        label: "Statement",
        text: "At a constant temperature, the partial pressure of a gas above a solution is directly proportional to the mole fraction of the gas dissolved in that solution:",
      },
      { equation: "$p = K_H \\times x$" },
      { text: "where K_H is the Henry's law constant. A larger K_H means a **less** soluble gas." },
      {
        label: "Applications",
        points: [
          "Soft drinks and soda water are bottled under high CO2 pressure so that enough gas dissolves; opening the bottle drops the pressure and the gas fizzes out.",
          "Deep-sea divers use air diluted with helium instead of nitrogen, because nitrogen dissolves in the blood at high pressure and forms bubbles on ascent, causing 'bends'.",
          "At high altitudes the low partial pressure of oxygen means less O2 dissolves in the blood, causing anoxia.",
        ],
      },
    ],
  },
  {
    id: "s1-s3",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Ideal solutions",
    years: [2014, 2017, 2019],
    question: "Define an ideal solution and write two of its characteristics.",
    answer: [
      {
        text: "An **ideal solution** is one that obeys Raoult's law over the entire range of concentration, at all temperatures.",
      },
      {
        points: [
          "$\\Delta_{mix}H = 0$ — no heat is absorbed or evolved on mixing.",
          "$\\Delta_{mix}V = 0$ — the volume of the solution equals the sum of the volumes of the components.",
          "Solute\u2013solvent interactions are of the same strength as solute\u2013solute and solvent\u2013solvent interactions.",
        ],
      },
      { text: "Examples: n-hexane + n-heptane, benzene + toluene, chlorobenzene + bromobenzene." },
    ],
  },
  {
    id: "s1-s4",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Non-ideal solutions",
    years: [2015, 2019],
    question:
      "What is meant by a positive deviation from Raoult's law? Give an example. What is the sign of \u0394_mix H for a positive deviation?",
    answer: [
      {
        text: "A solution shows **positive deviation** when its observed vapour pressure is **higher** than that predicted by Raoult's law. This happens when the A\u2013B interactions are weaker than the A\u2013A and B\u2013B interactions, so molecules escape into the vapour more readily.",
      },
      { text: "**Example:** ethanol + acetone (or ethanol + water, carbon disulphide + acetone)." },
      { text: "**Sign:** $\\Delta_{mix}H > 0$ (endothermic) and $\\Delta_{mix}V > 0$." },
      { figure: { kind: "named", id: "raoult-deviations" } },
    ],
    keyPoint: "Positive deviation \u2192 minimum-boiling azeotrope.",
  },
  {
    id: "s1-s5",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Concentration terms",
    years: [2017, 2014],
    question: "Define: (i) molality, (ii) molarity, (iii) mole fraction.",
    answer: [
      {
        label: "(i) Molality (m)",
        text: "Number of moles of solute dissolved per **kilogram of solvent**. Unit: mol kg\u207B\u00B9. It does not change with temperature.",
      },
      { equation: "$m = \\dfrac{n_{solute}}{W_{solvent}\\ (\\text{in kg})}$" },
      {
        label: "(ii) Molarity (M)",
        text: "Number of moles of solute per **litre of solution**. Unit: mol L\u207B\u00B9. It changes with temperature because volume does.",
      },
      { equation: "$M = \\dfrac{n_{solute}}{V_{solution}\\ (\\text{in L})}$" },
      {
        label: "(iii) Mole fraction (x)",
        text: "Ratio of the moles of one component to the total moles of all components. It is dimensionless and the mole fractions of all components sum to 1.",
      },
    ],
  },
  {
    id: "s1-s6",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Abnormal molar mass",
    years: [2017],
    question: "Define: (i) abnormal molar mass, (ii) van't Hoff factor.",
    answer: [
      {
        label: "(i) Abnormal molar mass",
        text: "When a solute **associates** or **dissociates** in solution, the number of particles is not what the formula suggests. The molar mass calculated from a colligative property then differs from the true molar mass — this experimental value is called the abnormal molar mass. Dissociation gives a value lower than the true one; association gives a higher one.",
      },
      {
        label: "(ii) van't Hoff factor (i)",
        text: "The ratio of the observed (experimental) value of a colligative property to the value calculated assuming no association or dissociation:",
      },
      { equation: "$i = \\dfrac{\\text{observed colligative property}}{\\text{calculated colligative property}} = \\dfrac{\\text{normal molar mass}}{\\text{observed molar mass}}$" },
      { text: "i > 1 for dissociation, i < 1 for association, i = 1 for no change." },
    ],
  },
  {
    id: "s1-s7",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Osmosis",
    years: [2018],
    question:
      "Why is the osmotic pressure method preferred for determining the molar mass of macromolecules such as proteins and polymers?",
    answer: [
      {
        points: [
          "Macromolecules give solutions of very **low molarity**, so \u0394T_b and \u0394T_f are far too small to measure accurately — but osmotic pressure is large enough to measure precisely even in dilute solution.",
          "Osmotic pressure can be measured at **room temperature**, so heat-sensitive proteins and polymers are not denatured or decomposed.",
          "The measurement uses molarity rather than molality, which is convenient in the laboratory.",
        ],
      },
    ],
  },
  {
    id: "s1-s8",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Ideal solutions",
    years: [2019],
    question: "Write two differences between an ideal and a non-ideal solution.",
    answer: [
      {
        table: [
          ["Ideal solution", "Non-ideal solution"],
          ["Obeys Raoult's law at all concentrations", "Does not obey Raoult's law"],
          ["$\\Delta_{mix}H = 0$", "$\\Delta_{mix}H \\ne 0$"],
          ["$\\Delta_{mix}V = 0$", "$\\Delta_{mix}V \\ne 0$"],
          [
            "A\u2013B forces equal A\u2013A and B\u2013B forces",
            "A\u2013B forces stronger or weaker than A\u2013A, B\u2013B",
          ],
          ["Does not form an azeotrope", "Forms minimum- or maximum-boiling azeotropes"],
        ],
      },
    ],
  },
  {
    id: "s1-s9",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Henry's law",
    years: [2016],
    question:
      "Gas (A) is more soluble in water than gas (B) at the same temperature. Which of the two will have the higher value of K_H and why?",
    answer: [
      {
        text: "**Gas (B)** will have the higher K_H. From Henry's law at a fixed pressure,",
      },
      { equation: "$x = \\dfrac{p}{K_H}$" },
      {
        text: "so solubility is **inversely** proportional to K_H. Gas B is the less soluble one, therefore it must have the larger Henry's law constant.",
      },
    ],
  },
  {
    id: "s1-s10",
    chapter: 1,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2023],
    question: "Why is the boiling point of a 1 M NaCl solution higher than that of a 1 M glucose solution?",
    answer: [
      {
        text: "Elevation of boiling point is a **colligative property** — it depends on the number of solute particles, not their nature.",
      },
      { equation: "NaCl(aq) -> Na^+(aq) + Cl^\u2212(aq)" },
      {
        text: "NaCl is a strong electrolyte and dissociates completely, giving i \u2248 2. Glucose is a non-electrolyte and stays as whole molecules, so i = 1.",
      },
      { equation: "$\\Delta T_b = i\\,K_b\\,m$" },
      {
        text: "For the same molality, NaCl therefore produces roughly **twice** the elevation, so its solution boils at a higher temperature.",
      },
    ],
  },

  /* ---------------- Numericals ---------------- */
  {
    id: "s1-n1",
    chapter: 1,
    type: "numerical",
    marks: 2,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2013],
    question:
      "18 g of glucose, C6H12O6 (molar mass = 180 g mol\u22121) is dissolved in 1 kg of water. At what temperature will this solution boil? (K_b for water = 0.52 K kg mol\u22121)",
    answer: [
      { label: "Step 1 — molality", equation: "$m = \\dfrac{18/180}{1} = 0.1\\ \\text{mol kg}^{-1}$" },
      { label: "Step 2 — elevation", equation: "$\\Delta T_b = K_b\\,m = 0.52 \\times 0.1 = 0.052\\ \\text{K}$" },
      {
        label: "Step 3 — boiling point",
        equation: "$T_b = 373.15 + 0.052 = 373.202\\ \\text{K}\\ (100.052\\ ^\\circ\\text{C})$",
      },
      { text: "Glucose is a non-electrolyte, so i = 1 and no van't Hoff correction is needed." },
    ],
  },
  {
    id: "s1-n2",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2024],
    question:
      "A solution containing 60 g of a non-volatile solute in 250 g of water freezes at 270.67 K. Calculate the molar mass of the solute. (K_f of water = 1.86 K kg mol\u22121)",
    answer: [
      { label: "Step 1 — depression", equation: "$\\Delta T_f = 273.15 - 270.67 = 2.48\\ \\text{K}$" },
      {
        label: "Step 2 — apply the formula",
        equation: "$M_B = \\dfrac{K_f \\times w_B \\times 1000}{\\Delta T_f \\times w_A}$",
      },
      {
        label: "Step 3 — substitute",
        equation: "$M_B = \\dfrac{1.86 \\times 60 \\times 1000}{2.48 \\times 250} = \\dfrac{111600}{620}$",
      },
      { equation: "$M_B = 180\\ \\text{g mol}^{-1}$" },
      { text: "The solute has a molar mass of 180 g mol\u207B\u00B9 — consistent with glucose." },
    ],
  },
  {
    id: "s1-n3",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2024],
    question:
      "Ishan's automobile radiator is filled with 1.0 kg of water. How many grams of ethylene glycol (molar mass = 62 g mol\u22121) must he add to lower the freezing point to \u22122.8 \u00B0C? (K_f for water = 1.86 K kg mol\u22121)",
    answer: [
      { label: "Step 1", equation: "$\\Delta T_f = 0 - (-2.8) = 2.8\\ \\text{K}$" },
      { label: "Step 2 — required molality", equation: "$m = \\dfrac{\\Delta T_f}{K_f} = \\dfrac{2.8}{1.86} = 1.505\\ \\text{mol kg}^{-1}$" },
      {
        label: "Step 3 — mass of glycol",
        equation: "$w_B = m \\times w_A(\\text{kg}) \\times M_B = 1.505 \\times 1.0 \\times 62$",
      },
      { equation: "$w_B \\approx 93.3\\ \\text{g}$" },
      {
        text: "About **93 g** of ethylene glycol is needed. This is exactly why glycol is used as antifreeze in radiators.",
      },
    ],
  },
  {
    id: "s1-n4",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2015, 2020],
    question:
      "3.9 g of benzoic acid dissolved in 49 g of benzene shows a depression in freezing point of 1.62 K. Calculate the van't Hoff factor and predict the nature of the solute. (K_f for benzene = 4.9 K kg mol\u22121, molar mass of benzoic acid = 122 g mol\u22121)",
    answer: [
      {
        label: "Step 1 — observed molar mass",
        equation: "$M_{obs} = \\dfrac{K_f \\times w_B \\times 1000}{\\Delta T_f \\times w_A} = \\dfrac{4.9 \\times 3.9 \\times 1000}{1.62 \\times 49}$",
      },
      { equation: "$M_{obs} = \\dfrac{19110}{79.38} = 240.7\\ \\text{g mol}^{-1}$" },
      {
        label: "Step 2 — van't Hoff factor",
        equation: "$i = \\dfrac{M_{normal}}{M_{obs}} = \\dfrac{122}{240.7} = 0.507 \\approx 0.5$",
      },
      {
        label: "Step 3 — nature of solute",
        text: "i < 1, so the solute **associates**. In benzene, benzoic acid forms a hydrogen-bonded **dimer**, so two molecules behave as one particle — hence i \u2248 \u00BD.",
      },
      { figure: { kind: "chain", atoms: [{ label: "C6H5COOH" }, { label: "\u00B7\u00B7\u00B7HOOCC6H5" }], caption: "Cyclic dimer of benzoic acid in benzene" } },
    ],
    keyPoint: "i \u2248 0.5 \u21D2 dimerisation; i \u2248 2 \u21D2 dissociation into two ions.",
  },
  {
    id: "s1-n5",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2020],
    question:
      "A 0.01 m aqueous solution of AlCl3 freezes at \u22120.068 \u00B0C. Calculate the percentage dissociation. (K_f for water = 1.86 K kg mol\u22121)",
    answer: [
      { label: "Step 1 — observed vs calculated", equation: "$\\Delta T_f(\\text{obs}) = 0.068\\ \\text{K}$" },
      { equation: "$\\Delta T_f(\\text{calc}) = K_f\\,m = 1.86 \\times 0.01 = 0.0186\\ \\text{K}$" },
      { label: "Step 2 — van't Hoff factor", equation: "$i = \\dfrac{0.068}{0.0186} = 3.656$" },
      {
        label: "Step 3 — degree of dissociation",
        text: "AlCl3 gives 4 ions, so n = 4:",
      },
      { equation: "AlCl3 -> Al^3+ + 3Cl^\u2212" },
      { equation: "$\\alpha = \\dfrac{i - 1}{n - 1} = \\dfrac{3.656 - 1}{4 - 1} = \\dfrac{2.656}{3} = 0.885$" },
      { equation: "$\\text{Percentage dissociation} = 88.5\\%$" },
    ],
  },
  {
    id: "s1-n6",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Osmotic pressure",
    years: [2013],
    question:
      "Determine the osmotic pressure of a solution prepared by dissolving 2.5 \u00D7 10\u22122 g of K2SO4 in 2 L of water at 25 \u00B0C, assuming complete dissociation. (R = 0.0821 L atm K\u22121 mol\u22121, molar mass of K2SO4 = 174 g mol\u22121)",
    answer: [
      { label: "Step 1 — van't Hoff factor", equation: "K2SO4 -> 2K^+ + SO4^2\u2212" },
      { text: "Three ions per formula unit, so i = 3." },
      {
        label: "Step 2 — concentration",
        equation: "$C = \\dfrac{2.5 \\times 10^{-2}/174}{2} = 7.18 \\times 10^{-5}\\ \\text{mol L}^{-1}$",
      },
      { label: "Step 3 — osmotic pressure", equation: "$\\pi = i\\,C\\,R\\,T$" },
      { equation: "$\\pi = 3 \\times 7.18\\times10^{-5} \\times 0.0821 \\times 298$" },
      { equation: "$\\pi = 5.27 \\times 10^{-3}\\ \\text{atm}$" },
    ],
  },
  {
    id: "s1-n7",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Henry's law",
    years: [2025],
    question:
      "Henry's law constant for CO2 in water is 1.67 \u00D7 10\u2078 Pa at 298 K. Calculate the number of moles of CO2 in 500 mL of soda water when packed under 2.53 \u00D7 10\u2075 Pa at the same temperature.",
    answer: [
      { label: "Step 1 — mole fraction of CO2", equation: "$x = \\dfrac{p}{K_H} = \\dfrac{2.53\\times10^{5}}{1.67\\times10^{8}} = 1.515 \\times 10^{-3}$" },
      {
        label: "Step 2 — moles of water",
        text: "500 mL of water \u2248 500 g:",
      },
      { equation: "$n_{H_2O} = \\dfrac{500}{18} = 27.78\\ \\text{mol}$" },
      {
        label: "Step 3 — moles of CO2",
        text: "The solution is dilute, so $x \\approx n_{CO_2}/n_{H_2O}$:",
      },
      { equation: "$n_{CO_2} = 1.515\\times10^{-3} \\times 27.78 = 4.21 \\times 10^{-2}\\ \\text{mol}$" },
    ],
  },
  {
    id: "s1-n8",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Raoult's law",
    years: [2025],
    question:
      "At 25 \u00B0C the saturated vapour pressure of water is 24 mm Hg. Find the saturated vapour pressure of a 5% aqueous solution of urea (molar mass = 60 g mol\u22121) at the same temperature.",
    answer: [
      {
        label: "Step 1 — take 100 g of solution",
        text: "5 g urea + 95 g water.",
      },
      { equation: "$n_{urea} = \\dfrac{5}{60} = 0.0833\\ \\text{mol}, \\qquad n_{water} = \\dfrac{95}{18} = 5.278\\ \\text{mol}$" },
      {
        label: "Step 2 — mole fraction of solvent",
        equation: "$x_{water} = \\dfrac{5.278}{5.278 + 0.0833} = 0.9845$",
      },
      { label: "Step 3 — Raoult's law", equation: "$p = p^\\circ \\times x_{water} = 24 \\times 0.9845$" },
      { equation: "$p = 23.63\\ \\text{mm Hg}$" },
    ],
  },
  {
    id: "s1-n9",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Colligative properties",
    years: [2025],
    question:
      "A solution of glucose (molar mass = 180 g mol\u22121) in water has a boiling point of 100.20 \u00B0C. Calculate the freezing point of the same solution. (K_b = 0.512 K kg mol\u22121, K_f = 1.86 K kg mol\u22121 for water)",
    answer: [
      { label: "Step 1 — find molality from \u0394T_b", equation: "$\\Delta T_b = 100.20 - 100 = 0.20\\ \\text{K}$" },
      { equation: "$m = \\dfrac{\\Delta T_b}{K_b} = \\dfrac{0.20}{0.512} = 0.3906\\ \\text{mol kg}^{-1}$" },
      { label: "Step 2 — use the same molality for \u0394T_f", equation: "$\\Delta T_f = K_f\\,m = 1.86 \\times 0.3906 = 0.727\\ \\text{K}$" },
      { label: "Step 3 — freezing point", equation: "$T_f = 0 - 0.727 = -0.727\\ ^\\circ\\text{C}$" },
      {
        text: "The molality is a property of the solution, so it links the two colligative properties — you never need the mass of glucose itself.",
      },
    ],
    keyPoint: "One solution, one molality: use \u0394T_b to get m, then feed m into \u0394T_f.",
  },
  {
    id: "s1-n10",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Osmotic pressure",
    years: [2014, 2025],
    question:
      "A solution containing 15 g of urea (molar mass = 60 g mol\u22121) per litre is isotonic with a solution of glucose (molar mass = 180 g mol\u22121). Calculate the mass of glucose present in one litre of its solution.",
    answer: [
      {
        label: "Step 1 — isotonic means equal \u03C0",
        text: "Both solutes are non-electrolytes (i = 1), and T is the same, so equal \u03C0 means equal molar concentration:",
      },
      { equation: "$\\dfrac{w_{urea}}{M_{urea}} = \\dfrac{w_{glucose}}{M_{glucose}}$" },
      { label: "Step 2 — substitute", equation: "$\\dfrac{15}{60} = \\dfrac{w}{180}$" },
      { equation: "$w = \\dfrac{15 \\times 180}{60} = 45\\ \\text{g}$" },
      { text: "**45 g** of glucose per litre." },
    ],
  },
  {
    id: "s1-n11",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2019],
    question:
      "A solution containing 1.9 g per 100 mL of KCl (M = 74.5 g mol\u22121) is isotonic with a solution containing 3 g per 100 mL of urea (M = 60 g mol\u22121). Calculate the degree of dissociation of KCl.",
    answer: [
      {
        label: "Step 1 — isotonic condition",
        equation: "$i_{KCl}\\,C_{KCl} = i_{urea}\\,C_{urea}$",
      },
      { text: "Urea does not dissociate, so i_urea = 1." },
      {
        label: "Step 2 — concentrations (per litre)",
        equation: "$C_{KCl} = \\dfrac{19}{74.5} = 0.255\\ \\text{M}, \\qquad C_{urea} = \\dfrac{30}{60} = 0.5\\ \\text{M}$",
      },
      { label: "Step 3 — van't Hoff factor", equation: "$i = \\dfrac{0.5}{0.255} = 1.96$" },
      {
        label: "Step 4 — degree of dissociation",
        text: "KCl gives 2 ions, so n = 2:",
      },
      { equation: "$\\alpha = \\dfrac{i-1}{n-1} = \\dfrac{1.96-1}{1} = 0.96 = 96\\%$" },
    ],
  },
  {
    id: "s1-n12",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2016],
    question:
      "Calculate the freezing point of the solution when 1.9 g of MgCl2 (M = 95 g mol\u22121) is dissolved in 50 g of water, assuming complete ionisation. (K_f for water = 1.86 K kg mol\u22121)",
    answer: [
      { label: "Step 1 — van't Hoff factor", equation: "MgCl2 -> Mg^2+ + 2Cl^\u2212" },
      { text: "Three ions, so i = 3." },
      { label: "Step 2 — molality", equation: "$m = \\dfrac{1.9/95}{0.050} = \\dfrac{0.02}{0.050} = 0.4\\ \\text{mol kg}^{-1}$" },
      { label: "Step 3 — depression", equation: "$\\Delta T_f = i\\,K_f\\,m = 3 \\times 1.86 \\times 0.4 = 2.232\\ \\text{K}$" },
      { label: "Step 4 — freezing point", equation: "$T_f = 273.15 - 2.232 = 270.92\\ \\text{K}\\ (-2.23\\ ^\\circ\\text{C})$" },
    ],
  },
  {
    id: "s1-n13",
    chapter: 1,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2014],
    question:
      "Calculate the mass of a compound (molar mass = 256 g mol\u22121) that must be dissolved in 75 g of benzene to lower its freezing point by 0.48 K. (K_f = 5.12 K kg mol\u22121)",
    answer: [
      { equation: "$w_B = \\dfrac{\\Delta T_f \\times M_B \\times w_A(\\text{kg})}{K_f}$" },
      { equation: "$w_B = \\dfrac{0.48 \\times 256 \\times 0.075}{5.12}$" },
      { equation: "$w_B = \\dfrac{9.216}{5.12} = 1.8\\ \\text{g}$" },
    ],
  },
  {
    id: "s1-n14",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2023],
    question:
      "When 19.5 g of FCH2COOH (molar mass = 78 g mol\u22121) is dissolved in 500 g of water, the depression in freezing point is 1.0 \u00B0C. Calculate the degree of dissociation of fluoroacetic acid. (K_f for water = 1.86 K kg mol\u22121)",
    answer: [
      { label: "Step 1 — molality", equation: "$m = \\dfrac{19.5/78}{0.500} = \\dfrac{0.25}{0.500} = 0.5\\ \\text{mol kg}^{-1}$" },
      { label: "Step 2 — calculated \u0394T_f", equation: "$\\Delta T_f(\\text{calc}) = 1.86 \\times 0.5 = 0.93\\ \\text{K}$" },
      { label: "Step 3 — van't Hoff factor", equation: "$i = \\dfrac{1.0}{0.93} = 1.0753$" },
      { label: "Step 4 — degree of dissociation", equation: "FCH2COOH <=> FCH2COO^\u2212 + H^+" },
      { text: "n = 2, so" },
      { equation: "$\\alpha = \\dfrac{i-1}{n-1} = 0.0753 = 7.53\\%$" },
    ],
  },
  {
    id: "s1-n15",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Raoult's law",
    years: [2023],
    question:
      "1 mole of liquid A and 2 moles of liquid B make a solution having a total vapour pressure of 40 torr. The vapour pressures of pure A and pure B are 45 torr and 30 torr respectively. Does the solution show ideal behaviour?",
    answer: [
      { label: "Step 1 — mole fractions", equation: "$x_A = \\dfrac{1}{3} = 0.333, \\qquad x_B = \\dfrac{2}{3} = 0.667$" },
      {
        label: "Step 2 — pressure expected from Raoult's law",
        equation: "$p_{calc} = p_A^\\circ x_A + p_B^\\circ x_B = 45(0.333) + 30(0.667)$",
      },
      { equation: "$p_{calc} = 15 + 20 = 35\\ \\text{torr}$" },
      {
        label: "Step 3 — compare",
        text: "Observed p = 40 torr > calculated 35 torr. The solution is **not ideal**; it shows a **positive deviation** from Raoult's law, so A\u2013B interactions are weaker than A\u2013A and B\u2013B, and \u0394_mix H > 0.",
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "s1-c1",
    chapter: 1,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2024, 2023],
    passage:
      "Colligative properties depend only on the number of solute particles present in solution and not on their nature. Four such properties are known: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure. For electrolytes the observed value is larger than the calculated one because the solute dissociates, and the correction is made through the van't Hoff factor i. Depression of freezing point is the property behind the use of ethylene glycol as antifreeze and the spreading of salt on icy roads, while osmotic pressure explains why an intravenous fluid must be isotonic with blood.",
    question:
      "Read the passage and answer:\n(i) Name the colligative property best suited to finding the molar mass of a protein, and say why.\n(ii) Arrange 0.1 m solutions of glucose, NaCl and CaCl2 in increasing order of freezing point.\n(iii) Why is salt spread on icy roads?\n(iv) What is the value of i for a solute that dimerises completely?",
    answer: [
      {
        label: "(i)",
        text: "**Osmotic pressure.** Proteins have very large molar masses, so their solutions are extremely dilute and \u0394T_f / \u0394T_b are too small to measure. Osmotic pressure is measurably large even in dilute solution and is measured at room temperature, so the protein is not denatured.",
      },
      {
        label: "(ii)",
        text: "Freezing point falls as i \u00D7 m rises. i is 1 for glucose, 2 for NaCl and 3 for CaCl2, so:",
      },
      { equation: "CaCl2 < NaCl < glucose" },
      { text: "(CaCl2 has the lowest freezing point; glucose the highest.)" },
      {
        label: "(iii)",
        text: "Salt dissolves in the thin film of water and **depresses the freezing point** of the mixture below the ambient temperature, so the ice melts and the road becomes safe.",
      },
      {
        label: "(iv)",
        text: "**i = 0.5.** Two solute molecules combine into one particle, so the number of particles halves.",
      },
    ],
  },
  {
    id: "s1-c2",
    chapter: 1,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Henry's law",
    years: [2025],
    passage:
      "The solubility of a gas in a liquid is governed by Henry's law, p = K_H x, where x is the mole fraction of the dissolved gas and K_H is a constant characteristic of the gas and the solvent. K_H increases with temperature, so gases become less soluble as a liquid is warmed. Divers breathing compressed air at depth dissolve extra nitrogen in their blood; if they surface too quickly this nitrogen comes out as bubbles, causing decompression sickness. Soft drinks are bottled under several atmospheres of carbon dioxide for the same reason.",
    question:
      "(i) State Henry's law.\n(ii) Why is the gas in a soda bottle released as soon as the cap is opened?\n(iii) Which has the higher K_H at 298 K \u2014 a gas that is very soluble or one that is sparingly soluble?\n(iv) Why are divers supplied with air diluted with helium?",
    answer: [
      {
        label: "(i)",
        text: "At constant temperature, the partial pressure of a gas above a solution is directly proportional to the mole fraction of the gas in solution: p = K_H x.",
      },
      {
        label: "(ii)",
        text: "The bottle is sealed under high CO2 pressure, so a large amount dissolves. Opening the cap drops the partial pressure of CO2 to atmospheric, so the solubility falls sharply and the excess gas escapes as bubbles.",
      },
      {
        label: "(iii)",
        text: "The **sparingly soluble** gas. Since x = p/K_H, low solubility at a given pressure means a large K_H.",
      },
      {
        label: "(iv)",
        text: "Helium is far less soluble in blood than nitrogen, so much less gas dissolves at depth. This prevents the formation of nitrogen bubbles on ascent — the 'bends'.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "s1-l1",
    chapter: 1,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Colligative properties",
    years: [2024, 2019],
    question:
      "(a) Define the following: (i) molal elevation constant, (ii) osmotic pressure.\n(b) Explain, with a diagram, why a solution of a non-volatile solute has a higher boiling point than the pure solvent.\n(c) A solution containing 2 g of glucose (M = 180 g mol\u22121) in 100 g of water freezes at \u22120.207 \u00B0C. Verify whether glucose behaves normally. (K_f = 1.86 K kg mol\u22121)",
    answer: [
      {
        label: "(a)(i) Molal elevation constant (K_b)",
        text: "The elevation of boiling point produced when **1 mole of a non-volatile solute is dissolved in 1 kg of solvent** (a 1 molal solution). It is a property of the solvent alone; unit K kg mol\u207B\u00B9. For water K_b = 0.52 K kg mol\u207B\u00B9.",
      },
      {
        label: "(a)(ii) Osmotic pressure (\u03C0)",
        text: "The **excess pressure that must be applied to a solution to just stop the flow of solvent into it** through a semipermeable membrane. For a dilute solution \u03C0 = i C R T.",
      },
      {
        label: "(b)",
        text: "Adding a non-volatile solute lowers the vapour pressure of the solvent, because some of the surface is now occupied by solute particles that cannot evaporate. A liquid boils when its vapour pressure equals the external pressure — so the solution must be heated to a **higher** temperature before it reaches 1 atm. The gap between the two curves at 1 atm is \u0394T_b.",
      },
      { figure: { kind: "named", id: "raoult-deviations" } },
      { label: "(c) Step 1 — expected depression", equation: "$m = \\dfrac{2/180}{0.100} = 0.111\\ \\text{mol kg}^{-1}$" },
      { equation: "$\\Delta T_f(\\text{calc}) = 1.86 \\times 0.111 = 0.207\\ \\text{K}$" },
      {
        label: "Step 2 — compare",
        text: "Observed \u0394T_f = 0.207 K, identical to the calculated value, so i = 1. Glucose is a **non-electrolyte that neither associates nor dissociates** — it behaves normally.",
      },
    ],
  },
  {
    id: "s1-l2",
    chapter: 1,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Non-ideal solutions",
    years: [2025, 2015],
    question:
      "(a) Give reasons:\n  (i) On mixing liquid X and liquid Y, the volume of the resulting solution decreases. What type of deviation is shown, and what is the sign of \u0394_mix H?\n  (ii) An aqueous solution of ethanol boils at a constant temperature and cannot be purified beyond 95.6% by fractional distillation.\n(b) Sketch and explain the vapour-pressure composition curves for solutions showing positive and negative deviations from Raoult's law.",
    answer: [
      {
        label: "(a)(i)",
        text: "The volume decreases, so the unlike molecules attract each other **more strongly** than the like molecules do. This is a **negative deviation** from Raoult's law: the observed vapour pressure is lower than Raoult's law predicts, \u0394_mix V < 0 and **\u0394_mix H < 0** (the mixture warms up). A typical example is acetone + chloroform, where a hydrogen bond forms between the two.",
      },
      { equation: "CH3\u2013CO\u2013CH3 \u00B7\u00B7\u00B7 H\u2013CCl3" },
      {
        label: "(a)(ii)",
        text: "Ethanol and water form a **minimum-boiling azeotrope** at 95.6% ethanol, boiling at 351.1 K. At that composition the vapour has exactly the same composition as the liquid, so no further separation is possible by fractional distillation however many plates the column has. To get absolute alcohol, a chemical drying agent (e.g. quicklime) must be used instead.",
      },
      {
        label: "(b)",
        text: "The dashed straight line is Raoult's law. **Positive deviation:** A\u2013B forces weaker than A\u2013A and B\u2013B, so molecules escape more easily and the curve lies **above** the line; \u0394H > 0, \u0394V > 0; a maximum in the curve gives a minimum-boiling azeotrope. **Negative deviation:** A\u2013B forces stronger, curve lies **below** the line; \u0394H < 0, \u0394V < 0; a minimum in the curve gives a maximum-boiling azeotrope.",
      },
      { figure: { kind: "named", id: "raoult-deviations" } },
    ],
  },
];
