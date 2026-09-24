import type { Question } from "@/types";

/** Unit 2 — Electrochemistry, second tranche (board papers 2013–2025). */
export const CH02B: Question[] = [
  /* ---------------- Definitions ---------------- */
  {
    id: "e2-s6",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Conductance",
    years: [2014],
    question: "Define: (i) molar conductivity, (ii) secondary batteries.",
    answer: [
      {
        label: "(i) Molar conductivity (\u039B_m)",
        text: "The conductance of all the ions produced by **one mole of an electrolyte** dissolved in a given volume of solution.",
      },
      { equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C}$" },
      { text: "Unit: S cm\u00B2 mol\u207B\u00B9. It **increases** on dilution, reaching a limiting value \u039B\u00B0_m at infinite dilution." },
      {
        label: "(ii) Secondary batteries",
        text: "Cells that can be **recharged** by passing current through them in the opposite direction, so the products of discharge are converted back into reactants and the cell can be used repeatedly.",
      },
      { text: "Examples: the lead storage battery (used in cars and inverters) and the nickel\u2013cadmium cell." },
      { equation: "Pb(s) + PbO2(s) + 2H2SO4(aq) <=> 2PbSO4(s) + 2H2O(l)" },
      {
        text: "Discharge runs left to right; recharging drives it right to left. A **primary** cell such as the dry cell cannot be reversed in this way.",
      },
    ],
  },

  /* ---------------- Numericals ---------------- */
  {
    id: "e2-n11",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2013, 2015],
    question:
      "Calculate the emf of the following cell at 298 K:\nFe(s) | Fe2+(0.001 M) || H+(1 M) | H2(g)(1 bar), Pt(s)\nGiven E\u00B0_cell = +0.44 V.",
    answer: [
      {
        label: "Step 1 — cell reaction",
        equations: [
          "Anode: Fe(s) -> Fe^2+(aq) + 2e^\u2212",
          "Cathode: 2H^+(aq) + 2e^\u2212 -> H2(g)",
          "Overall: Fe(s) + 2H^+(aq) -> Fe^2+(aq) + H2(g)",
        ],
      },
      { text: "Two electrons are transferred, so n = 2." },
      {
        label: "Step 2 — Nernst equation",
        equation: "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0591}{2}\\log\\dfrac{[\\text{Fe}^{2+}]\\,p_{H_2}}{[\\text{H}^{+}]^2}$",
      },
      { equation: "$= 0.44 - 0.02955\\log\\dfrac{0.001 \\times 1}{(1)^2}$" },
      { equation: "$= 0.44 - 0.02955 \\times (-3)$" },
      { equation: "$E_{cell} = 0.44 + 0.0887 = 0.529\\ \\text{V}$" },
      {
        text: "Lowering the Fe²⁺ concentration below standard makes the forward reaction more favourable, so the cell potential rises **above** E\u00B0 — which is exactly what the sign works out to.",
      },
    ],
  },
  {
    id: "e2-n12",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Gibbs energy",
    years: [2025],
    question:
      "Calculate the standard Gibbs energy change \u0394_{r}G\u00B0 for the reaction at 25 \u00B0C:\nAu(s) + Ca2+(1 M) \u2192 Au3+(1 M) + Ca(s)\nGiven E\u00B0(Au3+/Au) = +1.50 V and E\u00B0(Ca2+/Ca) = \u22122.87 V. Is the reaction spontaneous?",
    answer: [
      {
        label: "Step 1 — identify the electrodes",
        text: "Gold is being oxidised, so it is the **anode**; calcium is being reduced, so Ca²⁺/Ca is the **cathode**.",
      },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = (-2.87) - (+1.50)$" },
      { equation: "$E^\\circ_{cell} = -4.37\\ \\text{V}$" },
      { label: "Step 2 — electrons transferred", text: "Balancing: 2Au \u2192 2Au³⁺ + 6e⁻ and 3Ca²⁺ + 6e⁻ \u2192 3Ca, so **n = 6**." },
      { label: "Step 3 — Gibbs energy", equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell} = -6 \\times 96500 \\times (-4.37)$" },
      { equation: "$\\Delta_r G^\\circ = +2\\,530\\,230\\ \\text{J mol}^{-1} = +2530.2\\ \\text{kJ mol}^{-1}$" },
      {
        label: "Step 4 — conclusion",
        text: "\u0394G\u00B0 is large and **positive**, so the reaction is **non-spontaneous**. This is exactly what chemical intuition expects: gold is the least reactive of metals and will not reduce calcium ions.",
      },
    ],
    keyPoint: "Negative E\u00B0 \u21D2 positive \u0394G\u00B0 \u21D2 non-spontaneous.",
  },
  {
    id: "e2-n13",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2016],
    question:
      "Calculate E_cell for the following reaction at 298 K:\n2Al(s) + 3Cu2+(0.01 M) \u2192 2Al3+(0.01 M) + 3Cu(s)\nGiven E\u00B0_cell = 1.98 V.",
    answer: [
      { label: "Step 1 — electrons transferred", text: "2 Al lose 3e⁻ each, so n = 6." },
      {
        label: "Step 2 — Nernst equation",
        equation: "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0591}{6}\\log\\dfrac{[\\text{Al}^{3+}]^2}{[\\text{Cu}^{2+}]^3}$",
      },
      { equation: "$= 1.98 - 0.00985\\log\\dfrac{(0.01)^2}{(0.01)^3}$" },
      { equation: "$= 1.98 - 0.00985\\log\\dfrac{10^{-4}}{10^{-6}} = 1.98 - 0.00985\\log(10^{2})$" },
      { equation: "$= 1.98 - 0.00985 \\times 2 = 1.98 - 0.0197$" },
      { equation: "$E_{cell} = 1.96\\ \\text{V}$" },
      {
        text: "Take care with the **powers**: each concentration is raised to its stoichiometric coefficient, so the squares and cubes matter even when the numerical concentrations are equal.",
      },
    ],
  },
  {
    id: "e2-n14",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "Conductance",
    years: [2020],
    question:
      "(a) The electrical resistance of a column of 0.05 M KOH solution of length 50 cm and cross-sectional area 0.625 cm2 is 5 \u00D7 103 \u03A9. Calculate its resistivity, conductivity and molar conductivity.\n(b) Why does the conductivity of a solution decrease on dilution?",
    answer: [
      { label: "(a) Step 1 — resistivity", equation: "$\\rho = \\dfrac{R \\times A}{l} = \\dfrac{5\\times10^{3} \\times 0.625}{50}$" },
      { equation: "$\\rho = 62.5\\ \\Omega\\ \\text{cm}$" },
      { label: "Step 2 — conductivity", equation: "$\\kappa = \\dfrac{1}{\\rho} = \\dfrac{1}{62.5} = 0.016\\ \\text{S cm}^{-1}$" },
      {
        label: "Step 3 — molar conductivity",
        equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C} = \\dfrac{0.016 \\times 1000}{0.05}$",
      },
      { equation: "$\\Lambda_m = 320\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
      {
        label: "(b)",
        text: "Conductivity is the conductance of **unit volume** of solution, so it depends on how many ions occupy that volume. On dilution the same number of ions is spread through a larger volume, so the number of **ions per cm³ falls** and \u03BA decreases.",
      },
      {
        text: "Molar conductivity behaves oppositely, because it counts the ions from a fixed **one mole** of electrolyte however much solvent they are spread through — and dilution also weakens the interionic attractions that slow the ions down.",
      },
      { figure: { kind: "named", id: "molar-conductivity" } },
    ],
  },

  /* ---------------- Reasoning ---------------- */
  {
    id: "e2-s7",
    chapter: 2,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Electrolysis",
    years: [2015],
    question:
      "During the electrolysis of an aqueous solution of silver chloride the following reactions are possible at the cathode:\nAg+(aq) + e\u2212 \u2192 Ag(s), E\u00B0 = +0.80 V\nH+(aq) + e\u2212 \u2192 \u00BDH2(g), E\u00B0 = 0.00 V\nWhich reaction occurs, and why? What is liberated at the anode?",
    answer: [
      {
        label: "At the cathode — silver is deposited",
        text: "When two reductions compete, the one with the **more positive electrode potential** occurs, because it is the easier reduction and releases more energy.",
      },
      { equation: "Ag^+(aq) + e^\u2212 -> Ag(s) \u2014 E\u00B0 = +0.80 V" },
      {
        text: "Ag⁺ at +0.80 V is far easier to reduce than H⁺ at 0.00 V, so **silver metal is deposited** and no hydrogen is evolved. This is precisely why silver plating from an aqueous bath is practical.",
      },
      {
        label: "At the anode — chlorine (or oxygen)",
        text: "In a **concentrated** chloride solution, chloride is oxidised to chlorine, because the overpotential for oxygen evolution on most electrodes is large:",
      },
      { equation: "2Cl^\u2212(aq) -> Cl2(g) + 2e^\u2212" },
      {
        text: "In a **dilute** solution, water is oxidised instead and oxygen is evolved:",
      },
      { equation: "2H2O(l) -> O2(g) + 4H^+(aq) + 4e^\u2212" },
      {
        text: "The general rule for electrolysis: at the cathode the species with the **higher** reduction potential wins; at the anode the species with the **lower** reduction potential is oxidised — subject to overpotential effects.",
      },
    ],
    keyPoint: "Cathode: higher E\u00B0 is reduced. Anode: lower E\u00B0 is oxidised.",
  },
  {
    id: "e2-s8",
    chapter: 2,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Electrode potential",
    years: [2025, 2016],
    question:
      "Using the E\u00B0 values below, predict whether the reaction is feasible and write the cell reaction if it is:\nE\u00B0(Cr3+/Cr) = \u22120.74 V, E\u00B0(Cd2+/Cd) = \u22120.40 V.\nFor 2Cr(s) + 3Cd2+(aq) \u2192 2Cr3+(aq) + 3Cd(s).",
    answer: [
      {
        label: "Step 1 — assign electrodes",
        text: "Chromium is oxidised (anode); cadmium ions are reduced (cathode).",
      },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = (-0.40) - (-0.74)$" },
      { equation: "$E^\\circ_{cell} = +0.34\\ \\text{V}$" },
      {
        label: "Step 2 — feasibility",
        text: "E\u00B0_cell is **positive**, so \u0394G\u00B0 = \u2212nFE\u00B0 is negative and the reaction is **feasible (spontaneous)**.",
      },
      {
        label: "Step 3 — cell reaction and representation",
        equations: [
          "Anode: 2Cr(s) -> 2Cr^3+(aq) + 6e^\u2212",
          "Cathode: 3Cd^2+(aq) + 6e^\u2212 -> 3Cd(s)",
          "Cr(s) | Cr^3+(aq) || Cd^2+(aq) | Cd(s)",
        ],
      },
      {
        text: "In general, a metal displaces from solution any metal that lies **below** it in the electrochemical series — i.e. any metal with a more positive reduction potential.",
      },
    ],
  },
  {
    id: "e2-mc1",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Kohlrausch's law",
    years: [2024],
    question:
      "The molar ionic conductivities of Al3+ and SO4^2\u2212 are 189 and 160 S cm2 mol\u22121 respectively. The limiting molar conductivity of Al2(SO4)3 is",
    options: [
      "349 S cm2 mol\u22121",
      "858 S cm2 mol\u22121",
      "698 S cm2 mol\u22121",
      "1047 S cm2 mol\u22121",
    ],
    correct: 1,
    answer: [
      { text: "**(b) 858 S cm\u00B2 mol\u207B\u00B9.** Kohlrausch's law weights each ion by how many of it the formula unit provides:" },
      { equation: "Al2(SO4)3 -> 2Al^3+ + 3SO4^2\u2212" },
      { equation: "$\\Lambda^\\circ_m = 2\\lambda^\\circ_{Al^{3+}} + 3\\lambda^\\circ_{SO_4^{2-}}$" },
      { equation: "$= 2(189) + 3(160) = 378 + 480 = 858\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
      {
        text: "The commonest mistake is simply adding 189 + 160 = 349 (option a), forgetting the stoichiometric coefficients.",
      },
    ],
    keyPoint: "Always multiply each ionic conductivity by its subscript in the formula.",
  },
  {
    id: "e2-mc2",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Batteries and fuel cells",
    years: [2016, 2023],
    question:
      "From the cells lead storage cell, mercury cell, fuel cell and dry cell — which one has an electrolyte that is consumed and whose density therefore falls as the cell discharges?",
    options: ["Mercury cell", "Fuel cell", "Lead storage cell", "Dry cell"],
    correct: 2,
    answer: [
      { text: "**(c) Lead storage cell.** Sulphuric acid is a genuine reactant in the overall discharge:" },
      { equation: "Pb(s) + PbO2(s) + 2H2SO4(aq) -> 2PbSO4(s) + 2H2O(l)" },
      {
        text: "Acid is consumed and water is produced, so the density of the electrolyte falls as the battery runs down — which is why a hydrometer reading of the acid tells you the state of charge of a car battery.",
      },
      {
        text: "By contrast the **mercury cell** has no ion in its overall reaction at all, so its electrolyte is unchanged and it delivers a constant 1.35 V throughout its life.",
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "e2-c2",
    chapter: 2,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Conductance",
    years: [2023],
    passage:
      "Rahul set up an experiment to find the resistance of aqueous KCl solutions of different concentrations at 298 K, using a conductivity cell connected to a Wheatstone bridge with an alternating current source. He first calibrated the cell with a standard 0.1 M KCl solution of known conductivity to obtain the cell constant, then measured the resistance of each of his solutions and calculated their conductivity and molar conductivity. He found that as the solutions became more dilute the conductivity fell steadily while the molar conductivity rose.",
    question:
      "(i) Define cell constant and give its unit.\n(ii) Why is an alternating current source used rather than a direct current source?\n(iii) Why can a platinum electrode coated with platinum black be preferred?\n(iv) Explain the opposite trends Rahul observed for \u03BA and \u039B_m.",
    answer: [
      {
        label: "(i) Cell constant",
        text: "The ratio of the distance between the electrodes to their area of cross-section:",
      },
      { equation: "$G^* = \\dfrac{l}{A} = \\kappa \\times R$" },
      { text: "Unit: **cm\u207B\u00B9**. It is a fixed property of the particular cell, found by calibrating with a solution of known conductivity." },
      {
        label: "(ii)",
        text: "A direct current would **electrolyse** the solution: products would deposit at the electrodes, changing the concentration and polarising them, so the resistance reading would drift continuously. An alternating current reverses direction thousands of times a second, so no net electrolysis occurs and the reading is stable.",
      },
      {
        label: "(iii)",
        text: "Platinum black is finely divided platinum with a very **large surface area**. This reduces the current density at the surface and so minimises polarisation, giving a sharper null point on the bridge.",
      },
      {
        label: "(iv)",
        text: "**\u03BA falls** because it measures the conductance of unit volume, and dilution puts fewer ions in each cm³. **\u039B_m rises** because it measures the conductance of the ions from one **mole** of electrolyte — that number is fixed — and dilution reduces the interionic attractions that hinder their movement.",
      },
      { figure: { kind: "named", id: "molar-conductivity" } },
    ],
  },
];
