import type { Question } from "@/types";

/** Unit 1 — Solutions, second tranche (board papers 2013–2025). */
export const CH01B: Question[] = [
  /* ---------------- Definitions ---------------- */
  {
    id: "s1-s11",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2017],
    question: "Define: (i) colligative properties, (ii) molal elevation constant (K_b).",
    answer: [
      {
        label: "(i) Colligative properties",
        text: "Properties of a dilute solution that depend **only on the number of solute particles present**, and not at all on their chemical nature.",
      },
      {
        points: [
          "Relative lowering of vapour pressure",
          "Elevation of boiling point",
          "Depression of freezing point",
          "Osmotic pressure",
        ],
      },
      {
        label: "(ii) Molal elevation constant (K_b)",
        text: "The elevation of boiling point produced when **one mole of a non-volatile solute is dissolved in one kilogram of solvent**. Also called the ebullioscopic constant; unit K kg mol\u207B\u00B9. It is a property of the solvent alone — for water K_b = 0.52 K kg mol\u207B\u00B9.",
      },
      { equation: "$\\Delta T_b = K_b \\times m$" },
    ],
  },
  {
    id: "s1-s12",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Ideal solutions",
    years: [2019],
    question:
      "State Raoult's law for a solution containing volatile components. Write two characteristics of a solution that obeys Raoult's law at all concentrations.",
    answer: [
      {
        label: "Raoult's law",
        text: "For a solution of two volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction in the solution:",
      },
      { equations: ["$p_A = p_A^\\circ\\,x_A$", "$p_B = p_B^\\circ\\,x_B$"] },
      {
        label: "Characteristics of such a solution (an ideal solution)",
        points: [
          "$\\Delta_{mix}H = 0$ — no heat is absorbed or evolved on mixing.",
          "$\\Delta_{mix}V = 0$ — the volumes are strictly additive.",
          "The A\u2013B interactions are of the same strength as the A\u2013A and B\u2013B interactions they replace.",
        ],
      },
      { text: "Examples: benzene + toluene, n-hexane + n-heptane, chlorobenzene + bromobenzene." },
    ],
  },

  /* ---------------- Assertion–reason ---------------- */
  {
    id: "s1-ar4",
    chapter: 1,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Osmosis",
    years: [2023],
    question:
      "**Assertion (A):** Osmotic pressure is a colligative property.\n**Reason (R):** Osmotic pressure is proportional to molality.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Osmotic pressure depends only on the number of solute particles, so it certainly is a colligative property.",
      },
      { text: "But it is proportional to **molarity**, not molality:" },
      { equation: "$\\pi = C\\,R\\,T$" },
      {
        text: "Osmotic pressure is the one colligative property defined in terms of **molarity**, because the measurement is made on a solution of known volume at a fixed temperature. The other three use molality, which is temperature-independent.",
      },
    ],
    keyPoint: "\u03C0 uses molarity; \u0394T_b and \u0394T_f use molality.",
  },

  /* ---------------- Reasoning ---------------- */
  {
    id: "s1-s13",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Osmosis",
    years: [2020],
    question:
      "What happens when:\n(i) a pressure greater than the osmotic pressure is applied to the solution side of a semipermeable membrane?\n(ii) red blood cells are placed in a 0.05% NaCl solution?",
    answer: [
      {
        label: "(i)",
        text: "The solvent is forced to flow **out of the solution and into the pure solvent** — the reverse of the natural direction. This is **reverse osmosis**, and it is the basis of desalinating sea water.",
      },
      { figure: { kind: "named", id: "osmosis" } },
      {
        label: "(ii)",
        text: "A 0.05% NaCl solution is **hypotonic** compared with the fluid inside the cells (which is isotonic with about 0.9% NaCl). Water therefore flows **into** the cells by osmosis; they swell and eventually burst — **haemolysis**.",
      },
      {
        text: "In a hypertonic solution the opposite happens: water leaves the cells and they shrink (crenation). This is why intravenous fluids must be isotonic with blood.",
      },
    ],
  },

  /* ---------------- Numericals ---------------- */
  {
    id: "s1-n16",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Colligative properties",
    years: [2019],
    question:
      "A 4% (w/w) solution of sucrose (M = 342 g mol\u22121) in water has a freezing point of 271.15 K. Calculate the freezing point of a 5% (w/w) solution of glucose (M = 180 g mol\u22121) in water.",
    answer: [
      {
        label: "Step 1 — find K_f from the sucrose data",
        text: "4% w/w means 4 g sucrose in 96 g water.",
      },
      { equation: "$m = \\dfrac{4/342}{0.096} = \\dfrac{0.01170}{0.096} = 0.1219\\ \\text{mol kg}^{-1}$" },
      { equation: "$\\Delta T_f = 273.15 - 271.15 = 2.00\\ \\text{K}$" },
      { equation: "$K_f = \\dfrac{\\Delta T_f}{m} = \\dfrac{2.00}{0.1219} = 16.41\\ \\text{K kg mol}^{-1}$" },
      {
        label: "Step 2 — apply the same K_f to the glucose solution",
        text: "5% w/w means 5 g glucose in 95 g water.",
      },
      { equation: "$m = \\dfrac{5/180}{0.095} = \\dfrac{0.02778}{0.095} = 0.2924\\ \\text{mol kg}^{-1}$" },
      { equation: "$\\Delta T_f = 16.41 \\times 0.2924 = 4.80\\ \\text{K}$" },
      { label: "Step 3 — freezing point", equation: "$T_f = 273.15 - 4.80 = 268.35\\ \\text{K}$" },
      {
        text: "The trick in these questions is that K_f is a property of the **solvent**, so a value obtained from one solution can be carried straight over to another in the same solvent.",
      },
    ],
    keyPoint: "Same solvent \u21D2 same K_f. Use solution 1 to find it, then apply to solution 2.",
  },
  {
    id: "s1-n17",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Colligative properties",
    years: [2017],
    question:
      "A 10% (by mass) solution of sucrose in water has a freezing point of 269.15 K. Calculate the freezing point of a 10% (by mass) solution of glucose in water. (Freezing point of pure water = 273.15 K; M_sucrose = 342, M_glucose = 180 g mol\u22121)",
    answer: [
      { label: "Step 1 — K_f from the sucrose solution", text: "10 g sucrose in 90 g water." },
      { equation: "$m = \\dfrac{10/342}{0.090} = \\dfrac{0.02924}{0.090} = 0.3249\\ \\text{mol kg}^{-1}$" },
      { equation: "$\\Delta T_f = 273.15 - 269.15 = 4.00\\ \\text{K}$" },
      { equation: "$K_f = \\dfrac{4.00}{0.3249} = 12.31\\ \\text{K kg mol}^{-1}$" },
      { label: "Step 2 — glucose solution", text: "10 g glucose in 90 g water." },
      { equation: "$m = \\dfrac{10/180}{0.090} = \\dfrac{0.05556}{0.090} = 0.6173\\ \\text{mol kg}^{-1}$" },
      { equation: "$\\Delta T_f = 12.31 \\times 0.6173 = 7.60\\ \\text{K}$" },
      { label: "Step 3", equation: "$T_f = 273.15 - 7.60 = 265.55\\ \\text{K}$" },
      {
        text: "Glucose has roughly half the molar mass of sucrose, so the same mass gives about twice the molality and about twice the depression.",
      },
    ],
  },
  {
    id: "s1-n18",
    chapter: 1,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "Colligative properties",
    years: [2023],
    question:
      "(a) Why is the boiling point of a 1 M NaCl solution higher than that of a 1 M glucose solution?\n(b) A non-volatile solute 'X' (molar mass 50 g mol\u22121) is dissolved in 100 g of water. If the solution boils at 100.52 \u00B0C, calculate the mass of X dissolved. (K_b for water = 0.52 K kg mol\u22121)",
    answer: [
      {
        label: "(a)",
        text: "Elevation of boiling point counts **particles**, not formula units. NaCl is a strong electrolyte and dissociates completely:",
      },
      { equation: "NaCl(aq) -> Na^+(aq) + Cl^\u2212(aq)" },
      {
        text: "so i \u2248 2, while glucose stays as whole molecules with i = 1. Since \u0394T_b = i K_b m, NaCl produces about **twice** the elevation at the same concentration, and its solution boils higher.",
      },
      { label: "(b) Step 1 — elevation", equation: "$\\Delta T_b = 100.52 - 100 = 0.52\\ \\text{K}$" },
      { label: "Step 2 — molality", equation: "$m = \\dfrac{\\Delta T_b}{K_b} = \\dfrac{0.52}{0.52} = 1.0\\ \\text{mol kg}^{-1}$" },
      {
        label: "Step 3 — mass of solute",
        equation: "$w_B = m \\times w_A(\\text{kg}) \\times M_B = 1.0 \\times 0.100 \\times 50$",
      },
      { equation: "$w_B = 5\\ \\text{g}$" },
    ],
  },
  {
    id: "s1-n19",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Raoult's law",
    years: [2023],
    question:
      "The vapour pressures of pure liquids X and Y at 25 \u00B0C are 120 mm Hg and 160 mm Hg respectively. If equal moles of X and Y are mixed to form an ideal solution, calculate the vapour pressure of the solution and the mole fraction of Y in the vapour phase.",
    answer: [
      { label: "Step 1 — mole fractions in the liquid", text: "Equal moles, so $x_X = x_Y = 0.5$." },
      {
        label: "Step 2 — partial pressures",
        equations: ["$p_X = 120 \\times 0.5 = 60\\ \\text{mm Hg}$", "$p_Y = 160 \\times 0.5 = 80\\ \\text{mm Hg}$"],
      },
      { label: "Step 3 — total vapour pressure", equation: "$p_{total} = 60 + 80 = 140\\ \\text{mm Hg}$" },
      {
        label: "Step 4 — composition of the vapour (Dalton's law)",
        equation: "$y_Y = \\dfrac{p_Y}{p_{total}} = \\dfrac{80}{140} = 0.571$",
      },
      {
        text: "Note that the vapour is **richer in the more volatile component**: Y is 50% of the liquid but 57.1% of the vapour. This enrichment is exactly what makes fractional distillation work.",
      },
    ],
    keyPoint: "Liquid composition from Raoult; vapour composition from Dalton.",
  },
  {
    id: "s1-n20",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Henry's law",
    years: [2020],
    question:
      "State Henry's law. Calculate the solubility of CO2 in water at 298 K under a pressure of 760 mm Hg. (K_H for CO2 in water at 298 K is 1.25 \u00D7 10\u2076 mm Hg)",
    answer: [
      {
        label: "Henry's law",
        text: "At constant temperature, the partial pressure of a gas above a solution is directly proportional to the mole fraction of the gas dissolved in it: p = K_H x.",
      },
      { label: "Step 1 — mole fraction", equation: "$x = \\dfrac{p}{K_H} = \\dfrac{760}{1.25\\times10^{6}} = 6.08 \\times 10^{-4}$" },
      {
        label: "Step 2 — express as solubility",
        text: "For 1 litre (\u2248 1000 g) of water, $n_{H_2O} = 1000/18 = 55.55$ mol. The solution is dilute, so",
      },
      { equation: "$n_{CO_2} \\approx x \\times n_{H_2O} = 6.08\\times10^{-4} \\times 55.55$" },
      { equation: "$n_{CO_2} = 3.38 \\times 10^{-2}\\ \\text{mol L}^{-1}$" },
    ],
  },
  {
    id: "s1-n21",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2020],
    question:
      "The freezing point of a solution containing 5 g of benzoic acid (M = 122 g mol\u22121) in 35 g of benzene is depressed by 2.94 K. What is the percentage association of benzoic acid if it forms a dimer in solution? (K_f for benzene = 4.9 K kg mol\u22121)",
    answer: [
      { label: "Step 1 — calculated depression (assuming no association)", equation: "$m = \\dfrac{5/122}{0.035} = \\dfrac{0.04098}{0.035} = 1.171\\ \\text{mol kg}^{-1}$" },
      { equation: "$\\Delta T_f(\\text{calc}) = 4.9 \\times 1.171 = 5.738\\ \\text{K}$" },
      { label: "Step 2 — van't Hoff factor", equation: "$i = \\dfrac{\\Delta T_f(\\text{obs})}{\\Delta T_f(\\text{calc})} = \\dfrac{2.94}{5.738} = 0.5124$" },
      { label: "Step 3 — degree of association", text: "For dimerisation, two molecules give one particle, so n = 2:" },
      { equation: "2C6H5COOH <=> (C6H5COOH)2" },
      { equation: "$\\alpha = \\dfrac{1 - i}{1 - \\dfrac{1}{n}} = \\dfrac{1 - 0.5124}{1 - 0.5} = \\dfrac{0.4876}{0.5}$" },
      { equation: "$\\alpha = 0.975 = 97.5\\%$" },
      {
        text: "Benzoic acid is almost completely dimerised in benzene, through two hydrogen bonds between the carboxyl groups. Note the association formula differs from the dissociation one — here i < 1.",
      },
    ],
    keyPoint: "Association: \u03B1 = (1\u2212i)/(1\u22121/n). Dissociation: \u03B1 = (i\u22121)/(n\u22121).",
  },

  /* ---------------- Long ---------------- */
  {
    id: "s1-l3",
    chapter: 1,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Concentration terms",
    years: [2014, 2017],
    question:
      "(a) Define molarity and explain why it changes with temperature while molality does not.\n(b) Calculate the molarity and molality of a solution made by dissolving 10 g of NaOH (M = 40 g mol\u22121) in enough water to make 250 mL of solution, given that the density of the solution is 1.04 g mL\u22121.",
    answer: [
      {
        label: "(a) Molarity",
        text: "The number of moles of solute per **litre of solution**, unit mol L\u207B\u00B9.",
      },
      { equation: "$M = \\dfrac{n_{solute}}{V_{solution}\\ (\\text{L})}$" },
      {
        text: "Molarity involves a **volume**, and volume expands as temperature rises. The same amount of solute then occupies a larger volume, so the molarity falls — molarity is **temperature-dependent**.",
      },
      {
        text: "Molality involves the **mass of solvent**, and mass does not change with temperature. Molality is therefore **temperature-independent**, which is why all the colligative-property formulae (except osmotic pressure) are written in terms of it.",
      },
      { label: "(b) Step 1 — moles of NaOH", equation: "$n = \\dfrac{10}{40} = 0.25\\ \\text{mol}$" },
      { label: "Step 2 — molarity", equation: "$M = \\dfrac{0.25}{0.250} = 1.0\\ \\text{mol L}^{-1}$" },
      {
        label: "Step 3 — mass of solvent",
        text: "Mass of solution = volume \u00D7 density = 250 \u00D7 1.04 = 260 g. Subtracting the solute:",
      },
      { equation: "$w_{solvent} = 260 - 10 = 250\\ \\text{g} = 0.250\\ \\text{kg}$" },
      { label: "Step 4 — molality", equation: "$m = \\dfrac{0.25}{0.250} = 1.0\\ \\text{mol kg}^{-1}$" },
      {
        text: "The two happen to coincide here because the solution is dilute and the density is close to 1. In a concentrated solution they diverge sharply.",
      },
    ],
  },
];
