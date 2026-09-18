import type { Question } from "@/types";

/** Unit 2 — Electrochemistry (9 marks). */
export const CH02: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "e2-m1",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Batteries and fuel cells",
    years: [2024],
    question: "Which of the following cells was used in the Apollo space programme?",
    options: ["Mercury cell", "H2\u2013O2 fuel cell", "Dry cell", "Ni\u2013Cd cell"],
    correct: 1,
    answer: [
      {
        text: "**(b) H2\u2013O2 fuel cell.** It converts the chemical energy of the fuel directly into electricity with about 70% efficiency, runs continuously as long as fuel is supplied, and — crucially for a spacecraft — its only product is drinkable water.",
      },
      {
        equations: [
          "Anode: 2H2(g) + 4OH^\u2212(aq) -> 4H2O(l) + 4e^\u2212",
          "Cathode: O2(g) + 2H2O(l) + 4e^\u2212 -> 4OH^\u2212(aq)",
          "Overall: 2H2(g) + O2(g) -> 2H2O(l)",
        ],
      },
    ],
  },
  {
    id: "e2-m2",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Conductance",
    years: [2024],
    question: "Dilution affects both conductivity and molar conductivity. The effect of dilution on both is",
    options: [
      "both increase with dilution",
      "both decrease with dilution",
      "conductivity increases, molar conductivity decreases",
      "conductivity decreases, molar conductivity increases",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d).** Conductivity \u03BA is the conductance of **unit volume** of solution. On dilution the number of ions per unit volume falls, so \u03BA **decreases**.",
      },
      { equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C}$" },
      {
        text: "Molar conductivity is the conductance of all the ions from **one mole** of electrolyte. On dilution the volume containing that mole increases much faster than \u03BA falls, and more of a weak electrolyte ionises, so \u039B_m **increases** — reaching a limiting value \u039B\u00B0_m at infinite dilution.",
      },
      { figure: { kind: "named", id: "molar-conductivity" } },
    ],
    keyPoint: "\u03BA falls on dilution; \u039B_m rises. They move in opposite directions.",
  },
  {
    id: "e2-m3",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Batteries and fuel cells",
    years: [2024, 2020, 2017],
    question: "Which of the following cells is used in hearing aids and watches?",
    options: ["Mercury cell", "H2\u2013O2 fuel cell", "Dry cell", "Ni\u2013Cd cell"],
    correct: 0,
    answer: [
      {
        text: "**(a) Mercury cell.** It is a small button cell in which zinc amalgam is the anode and a paste of HgO with carbon is the cathode, with KOH as the electrolyte.",
      },
      {
        equations: [
          "Anode: Zn(Hg) + 2OH^\u2212 -> ZnO(s) + H2O + 2e^\u2212",
          "Cathode: HgO(s) + H2O + 2e^\u2212 -> Hg(l) + 2OH^\u2212",
          "Overall: Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l)",
        ],
      },
      {
        text: "No ion appears in the overall reaction, so the electrolyte concentration never changes and the cell gives a **constant potential of 1.35 V** throughout its life — exactly what a hearing aid or watch needs.",
      },
    ],
  },
  {
    id: "e2-m4",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Batteries and fuel cells",
    years: [2024],
    question: "Which of the following cells is used in an inverter?",
    options: ["Fuel cell", "Mercury cell", "Lead storage cell", "Dry cell"],
    correct: 2,
    answer: [
      {
        text: "**(c) Lead storage cell.** It is a **secondary** cell, so it can be recharged by passing current in the reverse direction, and it delivers the large currents an inverter needs.",
      },
      {
        equations: [
          "Anode: Pb(s) + SO4^2\u2212(aq) -> PbSO4(s) + 2e^\u2212",
          "Cathode: PbO2(s) + SO4^2\u2212(aq) + 4H^+(aq) + 2e^\u2212 -> PbSO4(s) + 2H2O(l)",
        ],
      },
    ],
  },
  {
    id: "e2-m5",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Conductance",
    years: [2023],
    question: "The unit of molar conductivity is",
    options: ["S cm\u22122 mol\u22121", "S cm2 mol\u22121", "S\u22121 cm2 mol\u22121", "S cm2 mol"],
    correct: 1,
    answer: [
      { text: "**(b) S cm\u00B2 mol\u207B\u00B9.** From the defining relation," },
      { equation: "$\\Lambda_m = \\dfrac{\\kappa}{C} = \\dfrac{\\text{S cm}^{-1}}{\\text{mol cm}^{-3}} = \\text{S cm}^2\\ \\text{mol}^{-1}$" },
    ],
  },
  {
    id: "e2-m6",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Kohlrausch's law",
    years: [2024],
    question:
      "The molar ionic conductivities of Ca2+ and Cl\u2212 are 119.0 and 76.3 S cm2 mol\u22121 respectively. The limiting molar conductivity of CaCl2 is",
    options: [
      "195.3 S cm2 mol\u22121",
      "238.0 S cm2 mol\u22121",
      "152.6 S cm2 mol\u22121",
      "271.6 S cm2 mol\u22121",
    ],
    correct: 3,
    answer: [
      { text: "**(d) 271.6 S cm\u00B2 mol\u207B\u00B9.** By Kohlrausch's law each ion contributes in proportion to how many of it there are:" },
      { equation: "$\\Lambda^\\circ_m(\\text{CaCl}_2) = \\lambda^\\circ_{Ca^{2+}} + 2\\lambda^\\circ_{Cl^-}$" },
      { equation: "$= 119.0 + 2(76.3) = 119.0 + 152.6 = 271.6\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
    ],
    keyPoint: "Remember the stoichiometric coefficient — 2 chlorides, so 2\u03BB\u00B0(Cl\u207B).",
  },
  {
    id: "e2-m7",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Electrode potential",
    years: [2025],
    question:
      "The standard electrode potential for the Sn4+/Sn2+ couple is +0.15 V and that for the Cr3+/Cr couple is \u22120.74 V. The E\u00B0 of the cell made from these two couples in their standard states is",
    options: ["\u22120.89 V", "+0.89 V", "+0.59 V", "\u22120.59 V"],
    correct: 1,
    answer: [
      {
        text: "**(b) +0.89 V.** The couple with the **more positive** E\u00B0 is reduced, so Sn⁴⁺/Sn²⁺ is the cathode and Cr³⁺/Cr the anode.",
      },
      { equation: "Cr | Cr^3+ || Sn^4+, Sn^2+ | Pt" },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.15 - (-0.74) = +0.89\\ \\text{V}$" },
      { text: "E\u00B0 is positive, so the cell reaction is spontaneous." },
    ],
  },
  {
    id: "e2-m8",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Galvanic cells",
    years: [2020],
    question: "In an electrochemical cell, a salt bridge is used",
    options: [
      "as a reducing agent",
      "as an oxidising agent",
      "to complete the circuit so that current can flow",
      "to increase the cell potential",
    ],
    correct: 2,
    answer: [
      { text: "**(c).** The salt bridge does two jobs:" },
      {
        points: [
          "It **completes the electrical circuit** by allowing ions to move between the two half-cells.",
          "It **maintains electrical neutrality** — as Zn²⁺ builds up in the anode compartment and Cu²⁺ is used up in the cathode compartment, anions migrate to the anode and cations to the cathode.",
        ],
      },
      { figure: { kind: "named", id: "galvanic-cell" } },
    ],
  },
  {
    id: "e2-m9",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Galvanic cells",
    years: [2020],
    question: "An electrochemical cell behaves like an electrolytic cell when",
    options: [
      "E_cell = E_external",
      "E_cell = 0",
      "E_external > E_cell",
      "E_external < E_cell",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) E_external > E_cell.** Applying an opposing voltage larger than the cell's own emf **reverses** the direction of current and of the cell reaction — electrical energy is now being used to drive a non-spontaneous reaction, which is exactly what an electrolytic cell does. This is how a lead storage battery is recharged.",
      },
      {
        table: [
          ["Condition", "Behaviour"],
          ["$E_{ext} < E_{cell}$", "Galvanic — current flows from the cell"],
          ["$E_{ext} = E_{cell}$", "No current flows"],
          ["$E_{ext} > E_{cell}$", "Electrolytic — reaction reversed"],
        ],
      },
    ],
  },
  {
    id: "e2-m10",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Gibbs energy",
    years: [2020],
    question: "Which of the following is correct for the spontaneity of a cell reaction?",
    options: [
      "\u0394G = \u2212ve, E\u00B0 = +ve",
      "\u0394G = +ve, E\u00B0 = 0",
      "\u0394G = \u2212ve, E\u00B0 = 0",
      "\u0394G = +ve, E\u00B0 = \u2212ve",
    ],
    correct: 0,
    answer: [
      { text: "**(a).** The two are linked by" },
      { equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell}$" },
      {
        text: "Since n and F are positive, a **positive E\u00B0 always gives a negative \u0394G\u00B0** — and a negative \u0394G is the condition for a spontaneous process.",
      },
    ],
  },
  {
    id: "e2-m11",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Electrolysis",
    years: [2020],
    question: "The amount of electricity required to produce one mole of Zn from ZnSO4 solution is",
    options: ["3 F", "2 F", "1 F", "4 F"],
    correct: 1,
    answer: [
      { text: "**(b) 2 F.**" },
      { equation: "Zn^2+(aq) + 2e^\u2212 -> Zn(s)" },
      {
        text: "Two moles of electrons are needed per mole of Zn, and one mole of electrons is 1 faraday (96 500 C), so 2 F = 193 000 C.",
      },
    ],
  },
  {
    id: "e2-m12",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Electrolysis",
    years: [2023],
    question:
      "Four half reactions are shown below:\nI. 2Cl\u2212 \u2192 Cl2 + 2e\u2212\nII. 4OH\u2212 \u2192 O2 + 2H2O + 4e\u2212\nIII. Na+ + e\u2212 \u2192 Na\nIV. 2H+ + 2e\u2212 \u2192 H2\nWhich two occur during the electrolysis of aqueous sodium chloride?",
    options: ["I and III", "I and IV", "II and III", "II and IV"],
    correct: 1,
    answer: [
      {
        text: "**(b) I and IV.** In aqueous NaCl there is a competition at each electrode, and the species easier to discharge wins.",
      },
      {
        points: [
          "**At the cathode:** Na⁺ (E\u00B0 = \u22122.71 V) versus H₂O/H⁺ (E\u00B0 = \u22120.83 V at pH 7). Hydrogen is far easier to reduce, so **H2 is evolved** (IV).",
          "**At the anode:** although the oxidation of water (II) is thermodynamically favoured, the **overpotential** for O₂ evolution is large, so in concentrated brine **Cl2 is liberated** instead (I).",
        ],
      },
      { text: "The solution left behind is NaOH — this is the chlor-alkali process." },
    ],
  },
  {
    id: "e2-m13",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Conductance",
    years: [2023],
    question: "Which of the following solutions of KCl will have the highest value of molar conductivity?",
    options: ["0.01 M", "1 M", "0.5 M", "0.1 M"],
    correct: 0,
    answer: [
      {
        text: "**(a) 0.01 M.** Molar conductivity increases as concentration decreases, because the ions are further apart and interionic attractions that slow them down become weaker. The most dilute solution therefore has the highest \u039B_m.",
      },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "e2-ar1",
    chapter: 2,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Conductance",
    years: [2020, 2023],
    question:
      "**Assertion (A):** The conductivity of an electrolyte increases with a decrease in concentration.\n**Reason (R):** The number of ions per unit volume decreases on dilution.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) A is false but R is true.** Conductivity \u03BA measures the conductance of unit volume of solution, so it depends directly on how many ions there are in that volume. On dilution that number falls, so **\u03BA decreases**, not increases. The reason given is the correct statement — it is exactly why the assertion is wrong.",
      },
      { text: "It is **molar** conductivity that increases on dilution." },
    ],
  },
  {
    id: "e2-ar2",
    chapter: 2,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Electrode potential",
    years: [2025],
    question:
      "**Assertion (A):** Cu cannot liberate H2 on reaction with dilute mineral acids.\n**Reason (R):** Cu has a positive electrode potential.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** E\u00B0(Cu²⁺/Cu) = +0.34 V, which lies **above** hydrogen in the electrochemical series. For the reaction",
      },
      { equation: "Cu(s) + 2H^+(aq) -> Cu^2+(aq) + H2(g)" },
      { equation: "$E^\\circ_{cell} = 0.00 - 0.34 = -0.34\\ \\text{V}$" },
      {
        text: "E\u00B0 is negative, so \u0394G\u00B0 is positive and the reaction is non-spontaneous. Copper dissolves only in oxidising acids such as conc. HNO3, where the anion — not H⁺ — does the oxidising.",
      },
    ],
  },
  {
    id: "e2-ar3",
    chapter: 2,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Galvanic cells",
    years: [2024],
    question:
      "**Assertion (A):** For a Daniell cell Zn|Zn2+(1 M) || Cu2+(1 M)|Cu with E\u00B0_cell = 1.1 V, if the external opposing potential is more than 1.1 V the electrons flow from the copper electrode to the zinc electrode.\n**Reason (R):** Zinc is deposited at the zinc electrode and copper dissolves at the copper electrode.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** When E_ext > 1.1 V the cell is forced to run backwards — it becomes an electrolytic cell. Electrons are pushed from Cu to Zn, so:",
      },
      {
        equations: ["At Zn: Zn^2+(aq) + 2e^\u2212 -> Zn(s)", "At Cu: Cu(s) -> Cu^2+(aq) + 2e^\u2212"],
      },
      { text: "Zinc is deposited and copper dissolves, exactly as the reason states." },
    ],
  },

  /* ---------------- Very short / short ---------------- */
  {
    id: "e2-v1",
    chapter: 2,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Electrolysis",
    years: [2020],
    question: "How much charge, in faradays, is required to reduce one mole of MnO4\u2212 to Mn2+?",
    answer: [
      { equation: "MnO4^\u2212 + 8H^+ + 5e^\u2212 -> Mn^2+ + 4H2O" },
      {
        text: "Manganese goes from the +7 to the +2 oxidation state, a change of 5, so **5 faradays** (5 \u00D7 96 500 = 482 500 C) are required per mole.",
      },
    ],
  },
  {
    id: "e2-v2",
    chapter: 2,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Conductance",
    years: [2024, 2014],
    question: "Define limiting molar conductivity (\u039B\u00B0_m).",
    answer: [
      {
        text: "The molar conductivity of an electrolyte at **infinite dilution** — that is, the limiting value \u039B_m approaches as the concentration approaches zero, when the ions are so far apart that they no longer interact.",
      },
      { equation: "$\\Lambda^\\circ_m = \\lim_{C \\to 0} \\Lambda_m$" },
      {
        text: "For a strong electrolyte it is found by extrapolating the straight-line plot of \u039B_m against \u221AC to C = 0; for a weak electrolyte that plot is not linear, so \u039B\u00B0_m must be obtained indirectly from Kohlrausch's law.",
      },
    ],
  },
  {
    id: "e2-s1",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Kohlrausch's law",
    years: [2025, 2014, 2024],
    question:
      "State Kohlrausch's law of independent migration of ions. Give one application.",
    answer: [
      {
        label: "Statement",
        text: "At infinite dilution, each ion contributes a definite amount to the total molar conductivity of an electrolyte, **independent of the other ion** with which it is associated:",
      },
      { equation: "$\\Lambda^\\circ_m = \\nu_+ \\lambda^\\circ_+ + \\nu_- \\lambda^\\circ_-$" },
      { text: "where \u03BD₊ and \u03BD₋ are the numbers of cations and anions per formula unit." },
      {
        label: "Applications",
        points: [
          "Calculating \u039B\u00B0_m of a **weak electrolyte**, which cannot be found by extrapolation — e.g. \u039B\u00B0_m(CH3COOH) = \u039B\u00B0_m(CH3COONa) + \u039B\u00B0_m(HCl) \u2212 \u039B\u00B0_m(NaCl).",
          "Finding the **degree of dissociation** \u03B1 = \u039B_m / \u039B\u00B0_m, and from it the dissociation constant K_a.",
        ],
      },
    ],
  },
  {
    id: "e2-s2",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Electrolysis",
    years: [2025, 2024],
    question: "State Faraday's first and second laws of electrolysis.",
    answer: [
      {
        label: "First law",
        text: "The mass of a substance deposited or liberated at an electrode is **directly proportional to the quantity of electricity** passed through the electrolyte.",
      },
      { equation: "$w = Z\\,I\\,t = Z\\,Q$" },
      { text: "where Z is the electrochemical equivalent of the substance." },
      {
        label: "Second law",
        text: "When the **same quantity of electricity** is passed through solutions of different electrolytes connected in series, the masses deposited are **proportional to their chemical equivalent masses**.",
      },
      { equation: "$\\dfrac{w_1}{w_2} = \\dfrac{E_1}{E_2}$" },
    ],
  },
  {
    id: "e2-s3",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Corrosion",
    years: [2024, 2025],
    question: "What is corrosion? Why does iron not rust even when the zinc coating is broken in a galvanised pipe?",
    answer: [
      {
        label: "Corrosion",
        text: "The slow **electrochemical** deterioration of a metal by its reaction with oxygen, moisture and acids in the environment. Rusting of iron is the commonest example: iron is oxidised at anodic spots and oxygen is reduced at cathodic spots, and the Fe²⁺ formed is further oxidised to hydrated ferric oxide, Fe2O3\u00B7xH2O.",
      },
      {
        equations: [
          "Anode: 2Fe(s) -> 2Fe^2+ + 4e^\u2212",
          "Cathode: O2(g) + 4H^+ + 4e^\u2212 -> 2H2O(l)",
        ],
      },
      {
        label: "Galvanised iron",
        text: "Zinc has a **more negative** electrode potential (\u22120.76 V) than iron (\u22120.44 V), so zinc is oxidised in preference to iron. Even where the coating is scratched and iron is exposed, the zinc acts as a **sacrificial anode** and corrodes instead — this is cathodic protection.",
      },
    ],
    keyPoint: "Sacrificial protection works because the coating metal is more easily oxidised.",
  },
  {
    id: "e2-s4",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Batteries and fuel cells",
    years: [2025, 2023],
    question:
      "Give reasons: (a) Fuel cells are preferred over thermal plants for producing electrical energy. (b) A mercury cell delivers a constant potential throughout its life.",
    answer: [
      {
        label: "(a)",
        points: [
          "A fuel cell converts chemical energy **directly** into electrical energy, so it is not limited by the Carnot efficiency of a heat engine — efficiency is about 70% against roughly 40% for a thermal plant.",
          "It causes no pollution: the only product of an H₂\u2013O₂ cell is water.",
          "It runs continuously as long as the fuel is supplied, with no need for recharging.",
        ],
      },
      {
        label: "(b)",
        text: "The overall reaction of a mercury cell involves only solids and liquid:",
      },
      { equation: "Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l)" },
      {
        text: "No ion appears in the overall reaction, so the concentration of the electrolyte does **not** change as the cell discharges. By the Nernst equation the potential therefore stays constant at 1.35 V.",
      },
    ],
  },
  {
    id: "e2-s5",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2023],
    question:
      "What should be the signs of E\u00B0_cell and \u0394G\u00B0 for a spontaneous redox reaction under standard conditions? Write the relation between E\u00B0_cell and the equilibrium constant.",
    answer: [
      { text: "For a spontaneous reaction, **E\u00B0_cell is positive and \u0394G\u00B0 is negative.**" },
      { equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell}$" },
      { text: "At equilibrium E_cell = 0 and \u0394G = 0, which gives" },
      { equation: "$\\Delta_r G^\\circ = -RT \\ln K_c = -nFE^\\circ_{cell}$" },
      { equation: "$\\log K_c = \\dfrac{nE^\\circ_{cell}}{0.0591}\\quad \\text{at 298 K}$" },
    ],
  },

  /* ---------------- Numericals ---------------- */
  {
    id: "e2-n1",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2024],
    question:
      "Calculate the emf of the following cell:\nNi(s) + 2Ag+(0.01 M) \u2192 Ni2+(0.1 M) + 2Ag(s)\nGiven E\u00B0_cell = 1.05 V, log 10 = 1.",
    answer: [
      { label: "Step 1 — electrons transferred", text: "Ni \u2192 Ni²⁺ + 2e⁻, so n = 2." },
      {
        label: "Step 2 — Nernst equation",
        equation: "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0591}{n}\\log\\dfrac{[\\text{Ni}^{2+}]}{[\\text{Ag}^{+}]^2}$",
      },
      {
        label: "Step 3 — substitute",
        equation: "$E_{cell} = 1.05 - \\dfrac{0.0591}{2}\\log\\dfrac{0.1}{(0.01)^2}$",
      },
      { equation: "$= 1.05 - 0.02955 \\times \\log(1000)$" },
      { equation: "$= 1.05 - 0.02955 \\times 3 = 1.05 - 0.0887$" },
      { equation: "$E_{cell} = 0.961\\ \\text{V}$" },
    ],
    keyPoint: "In the log term, products over reactants — and raise each to its coefficient.",
  },
  {
    id: "e2-n2",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Nernst equation",
    years: [2024, 2018, 2025],
    question:
      "Calculate the emf of the following cell at 298 K:\nSn(s) | Sn2+(0.004 M) || H+(0.020 M) | H2(g)(1 bar) | Pt(s)\nGiven E\u00B0(Sn2+/Sn) = \u22120.14 V, E\u00B0(H+/H2) = 0.00 V. (log 2 = 0.3010)",
    answer: [
      {
        label: "Step 1 — cell reaction",
        equations: [
          "Anode: Sn(s) -> Sn^2+(aq) + 2e^\u2212",
          "Cathode: 2H^+(aq) + 2e^\u2212 -> H2(g)",
          "Overall: Sn(s) + 2H^+(aq) -> Sn^2+(aq) + H2(g)",
        ],
      },
      { label: "Step 2 — standard emf", equation: "$E^\\circ_{cell} = 0.00 - (-0.14) = +0.14\\ \\text{V}$" },
      {
        label: "Step 3 — Nernst equation (n = 2)",
        equation: "$E_{cell} = 0.14 - \\dfrac{0.0591}{2}\\log\\dfrac{[\\text{Sn}^{2+}]\\,p_{H_2}}{[\\text{H}^{+}]^2}$",
      },
      { equation: "$= 0.14 - 0.02955\\log\\dfrac{0.004 \\times 1}{(0.020)^2}$" },
      { equation: "$= 0.14 - 0.02955\\log\\dfrac{0.004}{0.0004} = 0.14 - 0.02955\\log 10$" },
      { equation: "$E_{cell} = 0.14 - 0.02955 = 0.11\\ \\text{V}$" },
    ],
  },
  {
    id: "e2-n3",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Conductance",
    years: [2024, 2014],
    question:
      "The resistance of a conductivity cell filled with 0.2 mol L\u22121 KCl solution is 200 \u03A9. When the same cell is filled with 0.05 mol L\u22121 KCl solution the resistance is 500 \u03A9. If the conductivity of the 0.2 mol L\u22121 solution is 0.0248 S cm\u22121, calculate the cell constant and the molar conductivity of the 0.05 mol L\u22121 solution.",
    answer: [
      {
        label: "Step 1 — cell constant",
        equation: "$G^* = \\kappa \\times R = 0.0248 \\times 200 = 4.96\\ \\text{cm}^{-1}$",
      },
      {
        label: "Step 2 — conductivity of the dilute solution",
        equation: "$\\kappa = \\dfrac{G^*}{R} = \\dfrac{4.96}{500} = 9.92 \\times 10^{-3}\\ \\text{S cm}^{-1}$",
      },
      {
        label: "Step 3 — molar conductivity",
        equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C} = \\dfrac{9.92\\times10^{-3} \\times 1000}{0.05}$",
      },
      { equation: "$\\Lambda_m = 198.4\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
    ],
  },
  {
    id: "e2-n4",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Conductance",
    years: [2025, 2020],
    question:
      "The electrical resistance of a column of 0.05 M NaOH solution of cross-sectional area 0.8 cm2 and length 40 cm is 5 \u00D7 103 \u03A9. Calculate its resistivity, conductivity and molar conductivity.",
    answer: [
      { label: "Step 1 — resistivity", equation: "$\\rho = \\dfrac{R \\times A}{l} = \\dfrac{5\\times10^{3} \\times 0.8}{40}$" },
      { equation: "$\\rho = 100\\ \\Omega\\ \\text{cm}$" },
      { label: "Step 2 — conductivity", equation: "$\\kappa = \\dfrac{1}{\\rho} = \\dfrac{1}{100} = 0.01\\ \\text{S cm}^{-1}$" },
      {
        label: "Step 3 — molar conductivity",
        equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C} = \\dfrac{0.01 \\times 1000}{0.05}$",
      },
      { equation: "$\\Lambda_m = 200\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
    ],
  },
  {
    id: "e2-n5",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Kohlrausch's law",
    years: [2025, 2017],
    question:
      "Calculate \u039B\u00B0_m for acetic acid and its degree of dissociation if its molar conductivity is 48.1 S cm2 mol\u22121. Given \u039B\u00B0_m(HCl) = 426, \u039B\u00B0_m(CH3COONa) = 91 and \u039B\u00B0_m(NaCl) = 126 S cm2 mol\u22121.",
    answer: [
      {
        label: "Step 1 — Kohlrausch combination",
        text: "Add the two salts and subtract the common one so that only the acid's ions remain:",
      },
      {
        equation: "$\\Lambda^\\circ_m(\\text{CH}_3\\text{COOH}) = \\Lambda^\\circ_m(\\text{CH}_3\\text{COONa}) + \\Lambda^\\circ_m(\\text{HCl}) - \\Lambda^\\circ_m(\\text{NaCl})$",
      },
      { equation: "$= 91 + 426 - 126 = 391\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
      {
        label: "Step 2 — degree of dissociation",
        equation: "$\\alpha = \\dfrac{\\Lambda_m}{\\Lambda^\\circ_m} = \\dfrac{48.1}{391} = 0.123$",
      },
      { text: "So acetic acid is about **12.3% dissociated** at this concentration." },
    ],
  },
  {
    id: "e2-n6",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Conductance",
    years: [2019, 2023],
    question:
      "The conductivity of 0.001 mol L\u22121 acetic acid is 4.95 \u00D7 10\u22125 S cm\u22121. Calculate its dissociation constant if \u039B\u00B0_m for acetic acid is 390.5 S cm2 mol\u22121.",
    answer: [
      {
        label: "Step 1 — molar conductivity",
        equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C} = \\dfrac{4.95\\times10^{-5} \\times 1000}{0.001}$",
      },
      { equation: "$\\Lambda_m = 49.5\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
      { label: "Step 2 — degree of dissociation", equation: "$\\alpha = \\dfrac{49.5}{390.5} = 0.1268$" },
      {
        label: "Step 3 — dissociation constant",
        equation: "$K_a = \\dfrac{C\\alpha^2}{1-\\alpha} = \\dfrac{0.001 \\times (0.1268)^2}{1 - 0.1268}$",
      },
      { equation: "$K_a = \\dfrac{1.608\\times10^{-5}}{0.8732} = 1.84 \\times 10^{-5}$" },
    ],
  },
  {
    id: "e2-n7",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Gibbs energy",
    years: [2014, 2017],
    question:
      "Calculate \u0394G\u00B0 for the reaction Mg(s) + Cu2+(aq) \u2192 Mg2+(aq) + Cu(s). Given E\u00B0_cell = 2.71 V and 1 F = 96 500 C mol\u22121.",
    answer: [
      { label: "Step 1 — electrons transferred", text: "Mg \u2192 Mg²⁺ + 2e⁻, so n = 2." },
      { label: "Step 2 — apply the relation", equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell}$" },
      { equation: "$= -2 \\times 96500 \\times 2.71$" },
      { equation: "$\\Delta_r G^\\circ = -523\\,030\\ \\text{J mol}^{-1} = -523.03\\ \\text{kJ mol}^{-1}$" },
      { text: "\u0394G\u00B0 is large and negative, so the reaction is strongly spontaneous." },
    ],
  },
  {
    id: "e2-n8",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Electrolysis",
    years: [2017, 2020],
    question:
      "Calculate the mass of silver deposited at the cathode when a current of 2 A is passed through a solution of AgNO3 for 15 minutes. (Molar mass of Ag = 108 g mol\u22121)",
    answer: [
      { label: "Step 1 — charge passed", equation: "$Q = I \\times t = 2 \\times (15 \\times 60) = 1800\\ \\text{C}$" },
      { label: "Step 2 — electrode reaction", equation: "Ag^+(aq) + e^\u2212 -> Ag(s)" },
      { text: "One mole of electrons (96 500 C) deposits one mole (108 g) of silver." },
      { label: "Step 3 — mass deposited", equation: "$w = \\dfrac{108 \\times 1800}{96500} = 2.014\\ \\text{g}$" },
      { text: "About **2.01 g** of silver is deposited." },
    ],
  },
  {
    id: "e2-n9",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Electrolysis",
    years: [2020],
    question:
      "When a steady current of 2 A was passed through two electrolytic cells A and B containing ZnSO4 and CuSO4 connected in series, 2 g of Cu was deposited in cell B. How long was the current passed, and what mass of Zn was deposited in cell A? (Atomic masses: Cu = 63.5, Zn = 65.4)",
    answer: [
      { label: "Step 1 — charge needed for 2 g Cu", equation: "Cu^2+ + 2e^\u2212 -> Cu" },
      { text: "63.5 g Cu needs 2 \u00D7 96 500 C, so" },
      { equation: "$Q = \\dfrac{2 \\times 2 \\times 96500}{63.5} = 6078.7\\ \\text{C}$" },
      { label: "Step 2 — time", equation: "$t = \\dfrac{Q}{I} = \\dfrac{6078.7}{2} = 3039.4\\ \\text{s} \\approx 50.7\\ \\text{min}$" },
      {
        label: "Step 3 — mass of Zn (same charge, series circuit)",
        equation: "$w_{Zn} = \\dfrac{65.4 \\times 6078.7}{2 \\times 96500} = 2.06\\ \\text{g}$",
      },
      {
        text: "Alternatively, by Faraday's second law $w_{Zn}/w_{Cu} = E_{Zn}/E_{Cu} = 32.7/31.75$, giving the same answer.",
      },
    ],
  },
  {
    id: "e2-n10",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2016],
    question:
      "Calculate the emf of the following cell at 298 K:\n2Cr(s) + 3Fe2+(0.1 M) \u2192 2Cr3+(0.01 M) + 3Fe(s)\nGiven E\u00B0(Cr3+|Cr) = \u22120.74 V, E\u00B0(Fe2+|Fe) = \u22120.44 V.",
    answer: [
      { label: "Step 1 — standard emf", equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = -0.44 - (-0.74) = 0.30\\ \\text{V}$" },
      { label: "Step 2 — electrons transferred", text: "2 Cr lose 3e⁻ each, so n = 6." },
      {
        label: "Step 3 — Nernst equation",
        equation: "$E_{cell} = 0.30 - \\dfrac{0.0591}{6}\\log\\dfrac{[\\text{Cr}^{3+}]^2}{[\\text{Fe}^{2+}]^3}$",
      },
      { equation: "$= 0.30 - 0.00985\\log\\dfrac{(0.01)^2}{(0.1)^3} = 0.30 - 0.00985\\log\\dfrac{10^{-4}}{10^{-3}}$" },
      { equation: "$= 0.30 - 0.00985 \\times (-1) = 0.31\\ \\text{V}$" },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "e2-c1",
    chapter: 2,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Galvanic cells",
    years: [2024, 2023],
    passage:
      "In a galvanic cell the chemical energy of a spontaneous redox reaction is converted into electrical energy, whereas in an electrolytic cell electrical energy is used to drive a non-spontaneous redox reaction. In a Daniell cell zinc is oxidised at the anode and copper(II) ions are reduced at the cathode, giving E\u00B0_cell = 1.10 V. A salt bridge joins the two half-cells. The potential of a cell under non-standard conditions is found from the Nernst equation, and at equilibrium the cell potential falls to zero.",
    question:
      "(i) Write the cell reaction for the Daniell cell and its cell representation.\n(ii) What are the two functions of the salt bridge?\n(iii) What happens when E_external equals E_cell?\n(iv) What is the value of \u0394G when the cell reaches equilibrium?",
    answer: [
      { label: "(i)", equations: ["Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)", "Zn(s) | Zn^2+(1 M) || Cu^2+(1 M) | Cu(s)"] },
      { figure: { kind: "named", id: "galvanic-cell" } },
      {
        label: "(ii)",
        points: [
          "Completes the electrical circuit by allowing ions to migrate between the half-cells.",
          "Maintains electrical neutrality in both compartments as the reaction proceeds.",
        ],
      },
      {
        label: "(iii)",
        text: "**No current flows** and no chemical reaction takes place — the cell is exactly balanced against the applied potential.",
      },
      {
        label: "(iv)",
        text: "At equilibrium E_cell = 0, and since \u0394G = \u2212nFE_cell, **\u0394G = 0**. No further useful work can be obtained from the cell.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "e2-l1",
    chapter: 2,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Nernst equation",
    years: [2025, 2023],
    question:
      "(a) Write the Nernst equation for the electrode reaction M^n+(aq) + ne\u2212 \u2192 M(s) and for a general cell reaction.\n(b) Derive the relation between E\u00B0_cell and the equilibrium constant K_c.\n(c) The cell in which the reaction 2Fe3+(aq) + 2I\u2212(aq) \u2192 2Fe2+(aq) + I2(s) occurs has E\u00B0_cell = 0.236 V at 298 K. Calculate \u0394_{r}G\u00B0 and the equilibrium constant.",
    answer: [
      {
        label: "(a) Electrode",
        equation: "$E_{(M^{n+}/M)} = E^\\circ_{(M^{n+}/M)} - \\dfrac{0.0591}{n}\\log\\dfrac{1}{[M^{n+}]}$",
      },
      {
        label: "For a cell reaction aA + bB \u2192 cC + dD",
        equation: "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0591}{n}\\log\\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$",
      },
      {
        label: "(b) Derivation",
        text: "At equilibrium the cell is dead, so E_cell = 0 and the reaction quotient Q becomes K_c:",
      },
      { equation: "$0 = E^\\circ_{cell} - \\dfrac{0.0591}{n}\\log K_c$" },
      { equation: "$\\boxed{\\log K_c = \\dfrac{n\\,E^\\circ_{cell}}{0.0591}}$" },
      { label: "(c) Step 1 — \u0394G\u00B0", text: "n = 2 for this reaction." },
      { equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell} = -2 \\times 96500 \\times 0.236$" },
      { equation: "$\\Delta_r G^\\circ = -45\\,548\\ \\text{J mol}^{-1} = -45.55\\ \\text{kJ mol}^{-1}$" },
      { label: "Step 2 — K_c", equation: "$\\log K_c = \\dfrac{2 \\times 0.236}{0.0591} = 7.987$" },
      { equation: "$K_c = 9.7 \\times 10^{7}$" },
      { text: "The very large K_c confirms the reaction goes almost to completion." },
    ],
  },
  {
    id: "e2-l2",
    chapter: 2,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Conductance",
    years: [2023, 2014],
    question:
      "(a) Define conductivity and molar conductivity. How does each vary with concentration for a strong and a weak electrolyte?\n(b) Why is an AC source, and not a DC source, used when measuring the resistance of an electrolyte solution?\n(c) The conductivity of 2 \u00D7 10\u22123 M methanoic acid is 8 \u00D7 10\u22125 S cm\u22121. Calculate its molar conductivity and degree of dissociation, given \u039B\u00B0_m = 404 S cm2 mol\u22121.",
    answer: [
      {
        label: "(a) Conductivity (\u03BA)",
        text: "The conductance of a solution held between two electrodes of unit area separated by unit distance — i.e. the conductance of **unit volume**. Unit: S cm\u207B\u00B9. It **decreases** on dilution for both strong and weak electrolytes, because there are fewer ions per unit volume.",
      },
      {
        label: "Molar conductivity (\u039B_m)",
        text: "The conductance of all the ions produced by **one mole** of electrolyte in a solution of given concentration. Unit: S cm\u00B2 mol\u207B\u00B9. It **increases** on dilution for both — but differently:",
      },
      {
        points: [
          "**Strong electrolyte:** already fully ionised; the small rise comes only from weaker interionic attraction. \u039B_m varies linearly with \u221AC (Debye\u2013H\u00FCckel\u2013Onsager), so \u039B\u00B0_m can be found by extrapolation.",
          "**Weak electrolyte:** the degree of dissociation itself rises steeply near infinite dilution, so \u039B_m increases sharply and the curve cannot be extrapolated — \u039B\u00B0_m must come from Kohlrausch's law.",
        ],
      },
      { figure: { kind: "named", id: "molar-conductivity" } },
      {
        label: "(b)",
        text: "A direct current would **electrolyse** the solution — products would deposit at the electrodes, changing the concentration and polarising them, so the resistance measured would keep drifting. An alternating current reverses so rapidly that no net electrolysis occurs, and the reading is steady.",
      },
      {
        label: "(c) Step 1 — molar conductivity",
        equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{C} = \\dfrac{8\\times10^{-5} \\times 1000}{2\\times10^{-3}}$",
      },
      { equation: "$\\Lambda_m = 40\\ \\text{S cm}^2\\ \\text{mol}^{-1}$" },
      { label: "Step 2 — degree of dissociation", equation: "$\\alpha = \\dfrac{40}{404} = 0.099 \\approx 9.9\\%$" },
    ],
  },
];
