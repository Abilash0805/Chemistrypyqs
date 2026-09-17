import type { Question } from "@/types";

/** Unit 3 — Chemical Kinetics, second tranche (board papers 2013–2025). */
export const CH03B: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "k3-m10",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Zero order kinetics",
    years: [2024],
    question:
      "For a zero order reaction, in a graph of the concentration of R against time, the slope and the intercept are",
    options: [
      "slope = k, intercept = $[R]_0$",
      "slope = \u2212k, intercept = $[R]_0$",
      "slope = k, intercept = 0",
      "slope = \u2212k, intercept = 0",
    ],
    correct: 1,
    answer: [
      { text: "**(b) slope = \u2212k, intercept = $[R]_0$.** The integrated rate law for a zero order reaction is" },
      { equation: "$[R] = -kt + [R]_0$" },
      {
        text: "Comparing with the straight line y = mx + c: plotting [R] on the y-axis against t on the x-axis gives a **slope of \u2212k** and a **y-intercept of $[R]_0$**, the initial concentration.",
      },
      {
        text: "The slope is negative simply because the reactant is being consumed, so its concentration falls with time.",
      },
      { figure: { kind: "named", id: "order-plots" } },
    ],
  },

  /* ---------------- Numericals ---------------- */
  {
    id: "k3-n11",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2024],
    question:
      "The rate constant of a reaction quadruples when the temperature changes from 700 K to 720 K. Calculate the activation energy. (R = 8.314 J K\u22121 mol\u22121, log 4 = 0.6021)",
    answer: [
      {
        label: "Step 1 — two-temperature Arrhenius form",
        equation: "$\\log\\dfrac{k_2}{k_1} = \\dfrac{E_a}{2.303R}\\left[\\dfrac{T_2 - T_1}{T_1T_2}\\right]$",
      },
      {
        label: "Step 2 — substitute",
        equation: "$0.6021 = \\dfrac{E_a}{2.303 \\times 8.314}\\left[\\dfrac{720-700}{700 \\times 720}\\right]$",
      },
      { equation: "$0.6021 = \\dfrac{E_a}{19.147} \\times \\dfrac{20}{504000}$" },
      { label: "Step 3 — solve", equation: "$E_a = \\dfrac{0.6021 \\times 19.147 \\times 504000}{20}$" },
      { equation: "$E_a = 290\\,468\\ \\text{J mol}^{-1} \\approx 290.5\\ \\text{kJ mol}^{-1}$" },
      {
        text: "Compare this with the same fourfold rise between 300 K and 320 K, which needs only 55 kJ mol\u207B\u00B9. The **same relative rate increase costs far more activation energy at high temperature**, because at 700 K a large fraction of molecules already clears a modest barrier.",
      },
    ],
    keyPoint: "The T\u2081T\u2082 product in the denominator is why high-T data imply large E_a.",
  },
  {
    id: "k3-n12",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Arrhenius equation",
    years: [2016],
    question:
      "The rate constant for the first order decomposition of H2O2 is given by log k = 14.2 \u2212 (1.0 \u00D7 104 K)/T. Calculate E_a for this reaction. (R = 8.314 J K\u22121 mol\u22121)",
    answer: [
      { label: "Step 1 — logarithmic Arrhenius form", equation: "$\\log k = \\log A - \\dfrac{E_a}{2.303\\,R\\,T}$" },
      { label: "Step 2 — compare coefficients", text: "Matching the 1/T terms of the two expressions:" },
      { equation: "$\\dfrac{E_a}{2.303\\,R} = 1.0 \\times 10^{4}\\ \\text{K}$" },
      { label: "Step 3 — solve", equation: "$E_a = 1.0\\times10^{4} \\times 2.303 \\times 8.314$" },
      { equation: "$E_a = 191\\,472\\ \\text{J mol}^{-1} \\approx 191.5\\ \\text{kJ mol}^{-1}$" },
      {
        text: "The constant term gives the frequency factor: log A = 14.2, so A = 1.58 \u00D7 10\u00B9\u2074 s\u207B\u00B9. Note the **2.303** here — it appears because the equation is written with log\u2081\u2080 rather than ln.",
      },
    ],
  },
  {
    id: "k3-n13",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "First order kinetics",
    years: [2014],
    question:
      "The following data were obtained during the first order thermal decomposition of SO2Cl2 at constant volume:\nSO2Cl2(g) \u2192 SO2(g) + Cl2(g)\n\nExperiment 1: t = 0, total pressure = 0.5 atm\nExperiment 2: t = 100 s, total pressure = 0.6 atm\n\nCalculate the rate constant. (log 4 = 0.6021, log 2 = 0.3010)",
    answer: [
      {
        label: "Step 1 — set up the pressure bookkeeping",
        text: "Let the initial pressure of SO2Cl2 be $p_i = 0.5$ atm and let $x$ atm decompose by time t. Each mole of SO2Cl2 gives two moles of gas, so the total pressure rises:",
      },
      { equation: "SO2Cl2(g) -> SO2(g) + Cl2(g)" },
      {
        table: [
          ["", "SO2Cl2", "SO2", "Cl2", "Total"],
          ["At t = 0", "0.5", "0", "0", "0.5"],
          ["At time t", "0.5 \u2212 x", "x", "x", "0.5 + x"],
        ],
      },
      { label: "Step 2 — find x", equation: "$0.5 + x = 0.6 \\;\\Rightarrow\\; x = 0.1\\ \\text{atm}$" },
      { text: "So the pressure of undecomposed SO2Cl2 is $0.5 - 0.1 = 0.4$ atm." },
      {
        label: "Step 3 — first order rate constant",
        equation: "$k = \\dfrac{2.303}{t}\\log\\dfrac{p_i}{p_{SO_2Cl_2}} = \\dfrac{2.303}{100}\\log\\dfrac{0.5}{0.4}$",
      },
      { equation: "$= \\dfrac{2.303}{100} \\times \\log 1.25 = \\dfrac{2.303}{100} \\times 0.0969$" },
      { equation: "$k = 2.23 \\times 10^{-3}\\ \\text{s}^{-1}$" },
      {
        text: "For a gas-phase reaction, partial pressure can replace concentration throughout, since at constant volume and temperature the two are proportional.",
      },
    ],
    keyPoint: "Total pressure rises by x; the reactant pressure is p\u1d62 \u2212 x. Build the table first.",
  },
  {
    id: "k3-n14",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2023],
    question:
      "The conversion of molecule A to B follows second order kinetics. If the concentration of A is increased to three times, how will the rate of formation of B be affected?",
    answer: [
      { text: "Second order in A, so the rate law is" },
      { equation: "$\\text{Rate} = k[A]^2$" },
      { label: "Tripling the concentration", equation: "$\\text{Rate}' = k(3[A])^2 = 9\\,k[A]^2 = 9 \\times \\text{Rate}$" },
      {
        text: "The rate of formation of B becomes **nine times** the original. In general, for an n-th order reaction, multiplying the concentration by a factor f multiplies the rate by $f^n$.",
      },
    ],
  },
  {
    id: "k3-n15",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Rate law",
    years: [2020],
    question:
      "For the reaction 2NO(g) + O2(g) \u2192 2NO2(g), the following initial-rate data were obtained at 300 K:\n\nExp 1: [NO] = 0.1 M, [O2] = 0.1 M, rate = 1.2 \u00D7 10\u22123 M s\u22121\nExp 2: [NO] = 0.2 M, [O2] = 0.1 M, rate = 4.8 \u00D7 10\u22123 M s\u22121\nExp 3: [NO] = 0.1 M, [O2] = 0.2 M, rate = 2.4 \u00D7 10\u22123 M s\u22121\n\nDetermine the rate law, the overall order and the rate constant.",
    answer: [
      { label: "Step 1 — order in NO (Exp 1 \u2192 2, [O2] fixed)", text: "[NO] doubles, rate becomes 4\u00D7:" },
      { equation: "$4 = 2^x \\Rightarrow x = 2$" },
      { label: "Step 2 — order in O2 (Exp 1 \u2192 3, [NO] fixed)", text: "[O2] doubles, rate doubles:" },
      { equation: "$2 = 2^y \\Rightarrow y = 1$" },
      { label: "Step 3 — rate law", equation: "$\\text{Rate} = k[\\text{NO}]^2[\\text{O}_2]$" },
      { text: "Overall order = 2 + 1 = **3**." },
      {
        label: "Step 4 — rate constant (from Exp 1)",
        equation: "$k = \\dfrac{1.2\\times10^{-3}}{(0.1)^2(0.1)} = \\dfrac{1.2\\times10^{-3}}{1.0\\times10^{-3}}$",
      },
      { equation: "$k = 1.2\\ \\text{L}^2\\ \\text{mol}^{-2}\\ \\text{s}^{-1}$" },
      {
        text: "Here the experimental order happens to match the stoichiometric coefficients — but that is a coincidence, not a rule. Order must always be determined experimentally.",
      },
    ],
  },

  /* ---------------- Short ---------------- */
  {
    id: "k3-s7",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Rate constant",
    years: [2014],
    question: "Explain: (i) rate constant (k), (ii) half-life period of a reaction (t\u00BD).",
    answer: [
      {
        label: "(i) Rate constant (k)",
        text: "The constant of proportionality in the rate law. Numerically it is the **rate of reaction when the molar concentration of every reactant is unity**, which is why it is also called the specific reaction rate.",
      },
      { equation: "$\\text{Rate} = k[A]^x[B]^y$" },
      {
        text: "It is independent of concentration but increases sharply with temperature, and its **unit depends on the overall order** of the reaction.",
      },
      {
        label: "(ii) Half-life (t\u00BD)",
        text: "The time in which the concentration of a reactant falls to **one half** of its initial value.",
      },
      {
        table: [
          ["Order", "Half-life", "Depends on [R]\u2080?"],
          ["Zero", "$t_{1/2} = [R]_0/2k$", "Yes, directly proportional"],
          ["First", "$t_{1/2} = 0.693/k$", "No"],
        ],
      },
    ],
  },
  {
    id: "k3-s8",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Rate of reaction",
    years: [2025],
    question:
      "The rate of a chemical reaction can be expressed in terms of the decrease in the concentration of a reactant or the increase in the concentration of a product. Distinguish between the average rate and the instantaneous rate of a reaction.",
    answer: [
      {
        label: "Average rate",
        text: "The change in concentration over a **measurable interval of time**:",
      },
      { equation: "$r_{av} = -\\dfrac{\\Delta[R]}{\\Delta t} = +\\dfrac{\\Delta[P]}{\\Delta t}$" },
      {
        text: "It gives an overall picture across the interval, but since the rate keeps falling as reactants are consumed, it does not tell you the rate at any particular moment.",
      },
      {
        label: "Instantaneous rate",
        text: "The rate at a **specific instant**, obtained by making the time interval infinitesimally small:",
      },
      { equation: "$r_{inst} = -\\dfrac{d[R]}{dt} = +\\dfrac{d[P]}{dt}$" },
      {
        text: "Graphically it is the **slope of the tangent** to the concentration\u2013time curve at that instant. The rate law always refers to the instantaneous rate.",
      },
    ],
  },
  {
    id: "k3-s9",
    chapter: 3,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Collision theory",
    years: [2024, 2020],
    question:
      "State the postulates of collision theory. Why does collision theory fail to explain the rates of some reactions accurately?",
    answer: [
      {
        label: "Postulates",
        points: [
          "Reactant molecules are treated as **hard spheres**, and reaction occurs only when they **collide**.",
          "Only collisions in which the colliding molecules possess at least the **threshold energy** are effective.",
          "The colliding molecules must also be **correctly oriented** for the new bonds to form.",
          "The rate is therefore the collision frequency Z multiplied by the fraction with sufficient energy and the fraction correctly oriented.",
        ],
      },
      { equation: "$\\text{Rate} = P\\,Z_{AB}\\,e^{-E_a/RT}$" },
      { text: "where P is the steric (probability) factor and Z_AB the collision frequency." },
      {
        label: "Limitations",
        points: [
          "It treats molecules as **structureless hard spheres**, ignoring their internal structure and vibrations.",
          "The **steric factor P has to be supplied empirically** — the theory cannot predict it, and for reactions between complex molecules it can be smaller than 10\u207B\u2075.",
          "It works reasonably for simple bimolecular gas reactions but poorly for reactions in solution and for complex molecules.",
        ],
      },
      { figure: { kind: "named", id: "activation-energy" } },
    ],
  },
];
