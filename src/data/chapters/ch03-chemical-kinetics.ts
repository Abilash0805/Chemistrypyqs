import type { Question } from "@/types";

/** Unit 3 — Chemical Kinetics (7 marks). */
export const CH03: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "k3-m1",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Arrhenius equation",
    years: [2024],
    question: "The correct mathematical form of the Arrhenius equation is",
    options: [
      "$k = -Ae^{E_a/RT}$",
      "$k = e^{E_a/RT}$",
      "$k = Ae^{-E_a/RT}$",
      "$k = -Ae^{-E_a/RT}$",
    ],
    correct: 2,
    answer: [
      { text: "**(c)** $k = Ae^{-E_a/RT}$, where A is the frequency (pre-exponential) factor and E_a the activation energy." },
      { text: "Taking logarithms gives the straight-line form used in numericals:" },
      { equation: "$\\ln k = \\ln A - \\dfrac{E_a}{RT} \\quad\\text{or}\\quad \\log k = \\log A - \\dfrac{E_a}{2.303RT}$" },
      { figure: { kind: "named", id: "arrhenius-plot" } },
    ],
  },
  {
    id: "k3-m2",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2024],
    question: "The fraction of molecules having energy equal to or greater than the activation energy is",
    options: ["$A$", "$e^{-E_a/RT}$", "$k$", "$Ae^{-E_a/RT}$"],
    correct: 1,
    answer: [
      {
        text: "**(b)** $e^{-E_a/RT}$. In the Arrhenius equation $k = Ae^{-E_a/RT}$, the factor A counts how often molecules collide with the right orientation, while the exponential term gives the **fraction of collisions energetic enough** to cross the barrier.",
      },
      {
        text: "Raising the temperature increases this fraction sharply, which is why rates roughly double for a 10 K rise.",
      },
    ],
  },
  {
    id: "k3-m3",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Collision theory",
    years: [2024],
    question: "For a collision to be effective, the colliding molecules must have",
    options: [
      "proper orientation only",
      "a certain minimum amount of energy (threshold energy)",
      "both proper orientation and sufficient energy",
      "neither — all collisions are effective",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) both.** Collision theory requires two conditions to be met at once:",
      },
      {
        points: [
          "**Energy barrier** — the colliding molecules must possess at least the threshold energy, so that existing bonds can break.",
          "**Orientation barrier** — they must collide along the right geometry, so that the new bonds can form.",
        ],
      },
      { text: "Only a small fraction of total collisions satisfies both, which is why reaction rates are far lower than collision frequencies." },
    ],
  },
  {
    id: "k3-m4",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Order and molecularity",
    years: [2025],
    question: "The number of molecules that react with each other in an elementary reaction is a measure of the",
    options: [
      "activation energy of the reaction",
      "stoichiometry of the reaction",
      "molecularity of the reaction",
      "order of the reaction",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) molecularity.** Molecularity is the number of reacting species that collide **simultaneously** in an elementary step. It is a theoretical quantity, always a small whole number (1, 2 or rarely 3), and is defined only for elementary reactions.",
      },
      {
        text: "Order, by contrast, is experimental, can be zero or fractional, and applies to complex reactions too.",
      },
    ],
  },
  {
    id: "k3-m5",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2025],
    question: "Which among the following is a **false** statement?",
    options: [
      "The rate of a zero order reaction is independent of the initial concentration of the reactant.",
      "The half-life of a first order reaction is independent of the initial concentration.",
      "The half-life of a zero order reaction is independent of the initial concentration.",
      "The units of the rate constant of a zero order reaction are the same as the units of rate.",
    ],
    correct: 2,
    answer: [
      { text: "**(c) is false.** For a zero order reaction," },
      { equation: "$t_{1/2} = \\dfrac{[R]_0}{2k}$" },
      {
        text: "which is **directly proportional** to the initial concentration. It is the **first order** half-life, $t_{1/2} = 0.693/k$, that is independent of $[R]_0$.",
      },
    ],
    keyPoint: "Zero order: t\u00BD \u221D [R]\u2080. First order: t\u00BD independent of [R]\u2080.",
  },
  {
    id: "k3-m6",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2020],
    question: "The half-life period for a zero order reaction is equal to",
    options: ["$\\dfrac{0.693}{k}$", "$\\dfrac{2k}{[R]_0}$", "$\\dfrac{2.303}{k}$", "$\\dfrac{[R]_0}{2k}$"],
    correct: 3,
    answer: [
      { text: "**(d)** $t_{1/2} = \\dfrac{[R]_0}{2k}$. Derivation: the integrated rate law for zero order is" },
      { equation: "$[R] = [R]_0 - kt$" },
      { text: "Setting $[R] = [R]_0/2$ at $t = t_{1/2}$:" },
      { equation: "$\\dfrac{[R]_0}{2} = [R]_0 - k\\,t_{1/2} \\;\\Rightarrow\\; t_{1/2} = \\dfrac{[R]_0}{2k}$" },
    ],
  },
  {
    id: "k3-m7",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Rate constant",
    years: [2020],
    question: "The unit of the rate constant depends upon the",
    options: [
      "molecularity of the reaction",
      "activation energy of the reaction",
      "order of the reaction",
      "temperature of the reaction",
    ],
    correct: 2,
    answer: [
      { text: "**(c) order of the reaction.** For an n-th order reaction, rate = k[R]ⁿ, so" },
      { equation: "$k = \\dfrac{\\text{rate}}{[R]^n} \\Rightarrow \\text{unit} = (\\text{mol L}^{-1})^{1-n}\\ \\text{s}^{-1}$" },
      {
        table: [
          ["Order", "Unit of k"],
          ["0", "mol L\u207B\u00B9 s\u207B\u00B9"],
          ["1", "s\u207B\u00B9"],
          ["2", "L mol\u207B\u00B9 s\u207B\u00B9"],
          ["3", "L\u00B2 mol\u207B\u00B2 s\u207B\u00B9"],
        ],
      },
    ],
    keyPoint: "Read the order straight off the unit of k — it is a common one-mark question.",
  },
  {
    id: "k3-m8",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Rate of reaction",
    years: [2023],
    question: "For the reaction 3A \u2192 2B, the rate of reaction $+\\dfrac{d[B]}{dt}$ is equal to",
    options: [
      "$-\\dfrac{3}{2}\\dfrac{d[A]}{dt}$",
      "$-\\dfrac{2}{3}\\dfrac{d[A]}{dt}$",
      "$-\\dfrac{1}{3}\\dfrac{d[A]}{dt}$",
      "$+2\\dfrac{d[A]}{dt}$",
    ],
    correct: 1,
    answer: [
      { text: "**(b).** The rate of reaction is defined so that it is the same whichever species you follow:" },
      { equation: "$\\text{Rate} = -\\dfrac{1}{3}\\dfrac{d[A]}{dt} = +\\dfrac{1}{2}\\dfrac{d[B]}{dt}$" },
      { text: "Rearranging gives" },
      { equation: "$\\dfrac{d[B]}{dt} = -\\dfrac{2}{3}\\dfrac{d[A]}{dt}$" },
    ],
  },
  {
    id: "k3-m9",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Order of reaction",
    years: [2020],
    question:
      "In a chemical reaction X \u2192 Y it is found that the rate of reaction doubles when the concentration of X is increased four times. The order of the reaction is",
    options: ["0", "\u00BD", "1", "2"],
    correct: 1,
    answer: [
      { text: "**(b) \u00BD.** Let rate = k[X]\u207F. Then" },
      { equation: "$\\dfrac{2r}{r} = \\left(\\dfrac{4[X]}{[X]}\\right)^n \\Rightarrow 2 = 4^n$" },
      { equation: "$2 = 2^{2n} \\Rightarrow 2n = 1 \\Rightarrow n = \\tfrac{1}{2}$" },
      { text: "A fractional order is perfectly possible — it simply signals a complex, multi-step mechanism." },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "k3-ar1",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2024, 2023],
    question:
      "**Assertion (A):** The units of the rate constant of a zero order reaction and the rate of reaction are the same.\n**Reason (R):** In a zero order reaction the rate of reaction is independent of the concentration of the reactant.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      { text: "**(a) Both true, R explains A.** For a zero order reaction," },
      { equation: "$\\text{Rate} = k[R]^0 = k$" },
      {
        text: "Since the rate equals the rate constant, they must share the unit **mol L\u207B\u00B9 s\u207B\u00B9**. The independence from concentration is precisely the reason the two quantities are numerically and dimensionally identical.",
      },
    ],
  },
  {
    id: "k3-ar2",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Half-life",
    years: [2025],
    question:
      "**Assertion (A):** In a first order reaction, if the concentration of the reactant is doubled its half-life is also doubled.\n**Reason (R):** The half-life of a first order reaction is independent of the initial concentration of the reactant.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 3,
    answer: [
      { text: "**(d) A is false but R is true.** For a first order reaction," },
      { equation: "$t_{1/2} = \\dfrac{0.693}{k}$" },
      {
        text: "This contains no concentration term, so doubling $[R]_0$ leaves the half-life **unchanged**. The assertion contradicts the reason, which is itself the correct statement.",
      },
    ],
  },
  {
    id: "k3-ar3",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Order and molecularity",
    years: [2020, 2023],
    question:
      "**Assertion (A):** Order of reaction is applicable to elementary as well as complex reactions.\n**Reason (R):** For a complex reaction, molecularity has no meaning.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) Both true, but R is not the explanation.** Order is an **experimental** quantity found from the rate law, so it can be quoted for any reaction, simple or complex. Molecularity applies only to a single elementary step, so it is meaningless for an overall complex reaction — for those we speak of the molecularity of the **rate-determining step** instead.",
      },
      {
        text: "Both statements are correct, but the second does not cause the first: order would be applicable to complex reactions whether or not molecularity were defined.",
      },
    ],
  },
  {
    id: "k3-ar4",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Pseudo first order",
    years: [2020],
    question:
      "**Assertion (A):** Hydrolysis of an ester follows first order kinetics.\n**Reason (R):** The concentration of water remains nearly constant during the course of the reaction.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      { text: "**(a) Both true, R explains A.** The true rate law is second order:" },
      { equation: "CH3COOC2H5 + H2O ->[H^+] CH3COOH + C2H5OH" },
      { equation: "$\\text{Rate} = k[\\text{ester}][\\text{H}_2\\text{O}]$" },
      {
        text: "Water is the solvent and present in vast excess, so its concentration barely changes. Absorbing it into the constant gives $\\text{Rate} = k'[\\text{ester}]$ — the reaction **behaves** as first order. This is a **pseudo first order** reaction.",
      },
    ],
  },

  /* ---------------- Very short / short ---------------- */
  {
    id: "k3-v1",
    chapter: 3,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Half-life",
    years: [2017],
    question:
      "For a reaction R \u2192 P, the half-life is observed to be independent of the initial concentration of the reactant. What is the order of the reaction?",
    answer: [
      { text: "**First order.** Only for a first order reaction is" },
      { equation: "$t_{1/2} = \\dfrac{0.693}{k}$" },
      { text: "free of any concentration term." },
    ],
  },
  {
    id: "k3-v2",
    chapter: 3,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Catalysis",
    years: [2017],
    question: "What is the effect of adding a catalyst on (i) the activation energy and (ii) the Gibbs energy of a reaction?",
    answer: [
      {
        text: "**(i) Activation energy: lowered.** The catalyst provides an alternative path with a smaller E_a, so a larger fraction of molecules can cross the barrier and the rate increases.",
      },
      {
        text: "**(ii) Gibbs energy: unchanged.** \u0394G depends only on the initial and final states, not on the path. A catalyst therefore cannot shift the position of equilibrium or make a non-spontaneous reaction happen — it speeds up the forward and backward reactions equally.",
      },
      { figure: { kind: "named", id: "activation-energy" } },
    ],
    keyPoint: "A catalyst changes E_a, never \u0394G or \u0394H.",
  },
  {
    id: "k3-v3",
    chapter: 3,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2023],
    question:
      "What happens to the rate constant k and the activation energy E_a as the temperature of a reaction is increased? Justify.",
    answer: [
      {
        text: "**k increases; E_a stays the same.** From $k = Ae^{-E_a/RT}$, raising T makes the exponent less negative, so k rises — typically doubling for every 10 K.",
      },
      {
        text: "E_a is the height of the energy barrier for that particular reaction path. It is a property of the reaction, not of the conditions, so it is **independent of temperature**.",
      },
    ],
  },
  {
    id: "k3-s1",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Order and molecularity",
    years: [2014, 2024],
    question: "Write two differences between the order and the molecularity of a reaction.",
    answer: [
      {
        table: [
          ["Order of reaction", "Molecularity"],
          ["Sum of the powers of the concentration terms in the experimental rate law", "Number of species colliding simultaneously in an elementary step"],
          ["Determined **experimentally**", "A **theoretical** concept from the mechanism"],
          ["Can be zero, fractional or whole", "Always a whole number (1, 2, rarely 3); never zero or fractional"],
          ["Applies to elementary and complex reactions", "Defined only for elementary reactions"],
        ],
      },
    ],
  },
  {
    id: "k3-s2",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Pseudo first order",
    years: [2025, 2014],
    question: "Define: (a) pseudo first order reaction, (b) half-life period of a reaction.",
    answer: [
      {
        label: "(a) Pseudo first order reaction",
        text: "A reaction that is genuinely of higher order but **behaves as first order** because one reactant is present in such large excess that its concentration stays effectively constant.",
      },
      { equation: "CH3COOC2H5 + H2O ->[H^+] CH3COOH + C2H5OH" },
      { text: "Another example is the acid-catalysed inversion of cane sugar." },
      {
        label: "(b) Half-life (t\u00BD)",
        text: "The time in which the concentration of a reactant falls to **half** its initial value. For a first order reaction $t_{1/2} = 0.693/k$; for a zero order reaction $t_{1/2} = [R]_0/2k$.",
      },
    ],
  },
  {
    id: "k3-s3",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Rate law",
    years: [2025],
    question:
      "What is meant by the rate law and the rate constant of a reaction? Identify the order of the reaction if the units of its rate constant are (a) s\u22121, (b) mol L\u22121 s\u22121.",
    answer: [
      {
        label: "Rate law",
        text: "The experimentally determined expression relating the rate of reaction to the molar concentrations of the reactants, each raised to some power:",
      },
      { equation: "$\\text{Rate} = k[A]^x[B]^y$" },
      {
        label: "Rate constant",
        text: "The constant of proportionality k in the rate law — numerically the rate when all reactant concentrations are unity. Also called specific reaction rate.",
      },
      { text: "**(a) s\u207B\u00B9 \u2192 first order.  (b) mol L\u207B\u00B9 s\u207B\u00B9 \u2192 zero order.**" },
    ],
  },
  {
    id: "k3-s4",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2025, 2023],
    question:
      "A reaction is second order with respect to a reactant. How is the rate of the reaction affected if the concentration of that reactant is (i) doubled, (ii) reduced to half?",
    answer: [
      { text: "Rate = k[A]\u00B2." },
      {
        label: "(i) Concentration doubled",
        equation: "$\\text{Rate}' = k(2[A])^2 = 4k[A]^2 = 4 \\times \\text{Rate}$",
      },
      { text: "The rate becomes **four times** the original." },
      {
        label: "(ii) Concentration halved",
        equation: "$\\text{Rate}' = k\\left(\\tfrac{[A]}{2}\\right)^2 = \\tfrac{1}{4}k[A]^2$",
      },
      { text: "The rate falls to **one quarter** of the original." },
    ],
  },
  {
    id: "k3-s5",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2016],
    question:
      "For the reaction 2NH3(g) \u2192 N2(g) + 3H2(g) on a platinum surface, Rate = k. (i) Write the order and molecularity. (ii) Write the unit of k.",
    answer: [
      {
        label: "(i)",
        text: "Rate is independent of [NH3], so the **order is zero**. The balanced elementary step involves two NH3 molecules, so the **molecularity is 2**.",
      },
      {
        text: "The platinum surface becomes fully covered with ammonia at ordinary pressures, so increasing the concentration no longer increases the amount reacting — hence zero order.",
      },
      { label: "(ii)", text: "For a zero order reaction the unit of k is **mol L\u207B\u00B9 s\u207B\u00B9**." },
    ],
  },
  {
    id: "k3-s6",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2019],
    question:
      "Define the order of a reaction. A plot of t\u00BD against [R]\u2080 is (a) a horizontal straight line, (b) a straight line through the origin with positive slope. Predict the order in each case.",
    answer: [
      {
        label: "Order",
        text: "The **sum of the powers** of the concentration terms in the experimentally determined rate law. It may be zero, fractional or a whole number.",
      },
      {
        label: "(a) Horizontal line",
        text: "t\u00BD is independent of [R]\u2080 \u21D2 **first order**, since $t_{1/2} = 0.693/k$.",
      },
      {
        label: "(b) Straight line through the origin",
        text: "t\u00BD \u221D [R]\u2080 \u21D2 **zero order**, since $t_{1/2} = [R]_0/2k$.",
      },
      { figure: { kind: "named", id: "order-plots" } },
    ],
  },

  /* ---------------- Numericals ---------------- */
  {
    id: "k3-n1",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "First order kinetics",
    years: [2024, 2022],
    question:
      "A first order reaction takes 40 minutes for 75% decomposition. Calculate the rate constant. (log 2 = 0.30, log 4 = 0.60)",
    answer: [
      { label: "Step 1 — first order formula", equation: "$k = \\dfrac{2.303}{t}\\log\\dfrac{[R]_0}{[R]}$" },
      { label: "Step 2 — substitute", text: "75% decomposed, so 25% remains: $[R]_0/[R] = 100/25 = 4$." },
      { equation: "$k = \\dfrac{2.303}{40}\\log 4 = \\dfrac{2.303}{40} \\times 0.60$" },
      { equation: "$k = 0.03455\\ \\text{min}^{-1} \\approx 3.46 \\times 10^{-2}\\ \\text{min}^{-1}$" },
      {
        text: "**Shortcut check:** 75% decomposition is exactly two half-lives, so $t_{1/2} = 20$ min and $k = 0.693/20 = 0.0347$ min\u207B\u00B9. ✓",
      },
    ],
  },
  {
    id: "k3-n2",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2023, 2024],
    question:
      "The rate constant of a reaction quadruples when the temperature changes from 300 K to 320 K. Calculate the activation energy. (R = 8.314 J K\u22121 mol\u22121, log 4 = 0.6021)",
    answer: [
      {
        label: "Step 1 — two-temperature Arrhenius form",
        equation: "$\\log\\dfrac{k_2}{k_1} = \\dfrac{E_a}{2.303R}\\left[\\dfrac{T_2 - T_1}{T_1T_2}\\right]$",
      },
      {
        label: "Step 2 — substitute",
        equation: "$0.6021 = \\dfrac{E_a}{2.303 \\times 8.314}\\left[\\dfrac{320-300}{300 \\times 320}\\right]$",
      },
      { equation: "$0.6021 = \\dfrac{E_a}{19.147} \\times \\dfrac{20}{96000}$" },
      { label: "Step 3 — solve", equation: "$E_a = \\dfrac{0.6021 \\times 19.147 \\times 96000}{20}$" },
      { equation: "$E_a = 55\\,327\\ \\text{J mol}^{-1} \\approx 55.33\\ \\text{kJ mol}^{-1}$" },
    ],
  },
  {
    id: "k3-n3",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2025, 2023, 2018],
    question:
      "A certain reaction is 50% complete in 20 minutes at 300 K and 50% complete in 5 minutes at 350 K. Calculate the activation energy. (R = 8.314 J K\u22121 mol\u22121, log 4 = 0.6021)",
    answer: [
      {
        label: "Step 1 — use half-lives to get k's",
        text: "For a first order reaction $k = 0.693/t_{1/2}$, so",
      },
      { equation: "$\\dfrac{k_2}{k_1} = \\dfrac{t_{1/2}(1)}{t_{1/2}(2)} = \\dfrac{20}{5} = 4$" },
      {
        label: "Step 2 — Arrhenius",
        equation: "$\\log 4 = \\dfrac{E_a}{2.303 \\times 8.314}\\left[\\dfrac{350-300}{300 \\times 350}\\right]$",
      },
      { equation: "$0.6021 = \\dfrac{E_a}{19.147} \\times \\dfrac{50}{105000}$" },
      { label: "Step 3 — solve", equation: "$E_a = \\dfrac{0.6021 \\times 19.147 \\times 105000}{50}$" },
      { equation: "$E_a = 24\\,206\\ \\text{J mol}^{-1} \\approx 24.21\\ \\text{kJ mol}^{-1}$" },
    ],
    keyPoint: "Equal percentage completion \u21D2 k \u221D 1/t, so you never need the concentrations.",
  },
  {
    id: "k3-n4",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "First order kinetics",
    years: [2024],
    question:
      "Show that the time required for 99.9% completion of a first order reaction is 10 times its half-life. (log 2 = 0.3010)",
    answer: [
      { label: "Step 1 — time for 99.9% completion", text: "0.1% of the reactant remains, so $[R]_0/[R] = 1000$." },
      { equation: "$t_{99.9\\%} = \\dfrac{2.303}{k}\\log 1000 = \\dfrac{2.303}{k} \\times 3 = \\dfrac{6.909}{k}$" },
      { label: "Step 2 — half-life", equation: "$t_{1/2} = \\dfrac{2.303}{k}\\log 2 = \\dfrac{0.693}{k}$" },
      { label: "Step 3 — ratio", equation: "$\\dfrac{t_{99.9\\%}}{t_{1/2}} = \\dfrac{6.909/k}{0.693/k} = 9.97 \\approx 10$" },
      { text: "Hence $t_{99.9\\%} = 10 \\times t_{1/2}$, as required." },
    ],
  },
  {
    id: "k3-n5",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Zero order kinetics",
    years: [2025],
    question:
      "The rate constant for a zero order reaction A \u2192 P is 0.0030 mol L\u22121 s\u22121. How long will it take for the initial concentration of A to fall from 0.10 M to 0.075 M?",
    answer: [
      { label: "Step 1 — zero order integrated law", equation: "$[R] = [R]_0 - kt \\quad\\Rightarrow\\quad t = \\dfrac{[R]_0 - [R]}{k}$" },
      { label: "Step 2 — substitute", equation: "$t = \\dfrac{0.10 - 0.075}{0.0030} = \\dfrac{0.025}{0.0030}$" },
      { equation: "$t = 8.33\\ \\text{s}$" },
    ],
  },
  {
    id: "k3-n6",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "First order kinetics",
    years: [2020],
    question:
      "A first order reaction is 25% complete in 40 minutes. Calculate the rate constant. In what time will the reaction be 80% complete? (log 0.75 = \u22120.1249, log 5 = 0.6990)",
    answer: [
      { label: "Step 1 — rate constant", equation: "$k = \\dfrac{2.303}{40}\\log\\dfrac{100}{75} = \\dfrac{2.303}{40}\\times 0.1249$" },
      { equation: "$k = 7.19 \\times 10^{-3}\\ \\text{min}^{-1}$" },
      { label: "Step 2 — time for 80% completion", text: "20% remains, so $[R]_0/[R] = 100/20 = 5$." },
      { equation: "$t = \\dfrac{2.303}{k}\\log 5 = \\dfrac{2.303 \\times 0.6990}{7.19\\times10^{-3}}$" },
      { equation: "$t = \\dfrac{1.6098}{7.19\\times10^{-3}} = 223.9\\ \\text{min}$" },
      { text: "About **224 minutes** (roughly 3 h 44 min)." },
    ],
  },
  {
    id: "k3-n7",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Arrhenius equation",
    years: [2020, 2016],
    question:
      "The rate constant for the first order decomposition of N2O5 is given by $k = (2.5 \\times 10^{14}\\ \\text{s}^{-1})\\,e^{-25000\\,\\text{K}/T}$. Calculate the activation energy for the reaction. (R = 8.314 J K\u22121 mol\u22121)",
    answer: [
      { label: "Step 1 — compare with the Arrhenius equation", equation: "$k = Ae^{-E_a/RT}$" },
      { text: "Matching exponents term by term:" },
      { equation: "$\\dfrac{E_a}{RT} = \\dfrac{25000\\ \\text{K}}{T} \\;\\Rightarrow\\; \\dfrac{E_a}{R} = 25000\\ \\text{K}$" },
      { label: "Step 2 — solve", equation: "$E_a = 25000 \\times 8.314 = 207\\,850\\ \\text{J mol}^{-1}$" },
      { equation: "$E_a = 207.85\\ \\text{kJ mol}^{-1}$" },
      { text: "Incidentally, the frequency factor is $A = 2.5 \\times 10^{14}\\ \\text{s}^{-1}$." },
    ],
  },
  {
    id: "k3-n8",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Rate law",
    years: [2019],
    question:
      "The following data were obtained for the reaction A + 2B \u2192 C:\n\nExp 1: [A] = 0.2 M, [B] = 0.3 M, rate = 4.2 \u00D7 10\u22122 M min\u22121\nExp 2: [A] = 0.4 M, [B] = 0.3 M, rate = 8.4 \u00D7 10\u22122 M min\u22121\nExp 3: [A] = 0.2 M, [B] = 0.6 M, rate = 16.8 \u00D7 10\u22122 M min\u22121\n\nDetermine the rate law, the overall order and the rate constant.",
    answer: [
      { label: "Step 1 — order with respect to A (Exp 1 \u2192 2, [B] fixed)", text: "[A] doubles, rate doubles:" },
      { equation: "$2 = 2^x \\Rightarrow x = 1$" },
      { label: "Step 2 — order with respect to B (Exp 1 \u2192 3, [A] fixed)", text: "[B] doubles, rate becomes 4\u00D7:" },
      { equation: "$4 = 2^y \\Rightarrow y = 2$" },
      { label: "Step 3 — rate law", equation: "$\\text{Rate} = k[A][B]^2$" },
      { text: "Overall order = 1 + 2 = **3**." },
      {
        label: "Step 4 — rate constant (from Exp 1)",
        equation: "$k = \\dfrac{4.2\\times10^{-2}}{(0.2)(0.3)^2} = \\dfrac{4.2\\times10^{-2}}{0.018}$",
      },
      { equation: "$k = 2.33\\ \\text{L}^2\\ \\text{mol}^{-2}\\ \\text{min}^{-1}$" },
    ],
    keyPoint: "Change one concentration at a time and compare rate ratios — that is the whole method.",
  },
  {
    id: "k3-n9",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "First order kinetics",
    years: [2017, 2015],
    question:
      "For the reaction N2O5 \u2192 2NO2 + \u00BDO2 the following data were obtained:\n\nt / s: 0, 300, 600\n[N2O5] / mol L\u22121: 1.6 \u00D7 10\u22122, 0.8 \u00D7 10\u22122, 0.4 \u00D7 10\u22122\n\nShow that the reaction is first order and calculate the rate constant.",
    answer: [
      {
        label: "Step 1 — test the first order criterion",
        text: "For first order, equal time intervals should give equal **fractional** decreases.",
      },
      {
        table: [
          ["Interval", "[R]\u2080 / [R]", "k = (2.303/t) log ratio"],
          ["0 \u2192 300 s", "1.6/0.8 = 2", "(2.303/300)(0.3010) = 2.31 \u00D7 10\u207B\u00B3 s\u207B\u00B9"],
          ["300 \u2192 600 s", "0.8/0.4 = 2", "(2.303/300)(0.3010) = 2.31 \u00D7 10\u207B\u00B3 s\u207B\u00B9"],
          ["0 \u2192 600 s", "1.6/0.4 = 4", "(2.303/600)(0.6021) = 2.31 \u00D7 10\u207B\u00B3 s\u207B\u00B9"],
        ],
      },
      {
        label: "Step 2 — conclusion",
        text: "k comes out constant at **2.31 \u00D7 10\u207B\u00B3 s\u207B\u00B9** for every interval, so the reaction is **first order**. Note also that the concentration halves every 300 s, i.e. $t_{1/2} = 300$ s independent of concentration — the signature of first order kinetics.",
      },
    ],
  },
  {
    id: "k3-n10",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Rate of reaction",
    years: [2023],
    question:
      "For the reaction 2N2O5(g) \u2192 4NO2(g) + O2(g) at 318 K, calculate the rate of reaction if the rate of disappearance of N2O5 is 1.4 \u00D7 10\u22123 mol L\u22121 s\u22121. Also find the rate of formation of NO2.",
    answer: [
      { label: "Step 1 — definition of rate", equation: "$\\text{Rate} = -\\dfrac{1}{2}\\dfrac{d[\\text{N}_2\\text{O}_5]}{dt} = +\\dfrac{1}{4}\\dfrac{d[\\text{NO}_2]}{dt} = +\\dfrac{d[\\text{O}_2]}{dt}$" },
      {
        label: "Step 2 — rate of reaction",
        equation: "$\\text{Rate} = \\tfrac{1}{2} \\times 1.4\\times10^{-3} = 7.0 \\times 10^{-4}\\ \\text{mol L}^{-1}\\text{s}^{-1}$",
      },
      {
        label: "Step 3 — rate of formation of NO2",
        equation: "$\\dfrac{d[\\text{NO}_2]}{dt} = 4 \\times 7.0\\times10^{-4} = 2.8 \\times 10^{-3}\\ \\text{mol L}^{-1}\\text{s}^{-1}$",
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "k3-c1",
    chapter: 3,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2025, 2024],
    passage:
      "The rate of a chemical reaction can be expressed either as the decrease in the concentration of a reactant or the increase in the concentration of a product per unit time. Almost all reactions go faster as the temperature rises: for many, the rate roughly doubles for every 10 K. Arrhenius explained this by proposing that only molecules possessing at least a certain minimum energy — the activation energy — can react, and that the fraction of such molecules increases exponentially with temperature. A catalyst works differently: it offers an alternative route with a lower activation energy, without altering the thermodynamics of the reaction.",
    question:
      "(i) Write the Arrhenius equation and name each term.\n(ii) Why does the rate of almost every reaction increase with temperature?\n(iii) A catalyst is added to a reaction at equilibrium. What happens to the yield of product?\n(iv) Sketch how ln k varies with 1/T and state what the slope gives.",
    answer: [
      { label: "(i)", equation: "$k = Ae^{-E_a/RT}$" },
      {
        points: [
          "k — rate constant",
          "A — frequency (pre-exponential) factor, measuring collision frequency and correct orientation",
          "E_a — activation energy",
          "R — gas constant, T — absolute temperature",
        ],
      },
      {
        label: "(ii)",
        text: "Raising T shifts the Maxwell\u2013Boltzmann distribution to higher energies, so the **fraction of molecules with energy \u2265 E_a**, given by $e^{-E_a/RT}$, increases sharply. More collisions are effective, so k and the rate rise.",
      },
      {
        label: "(iii)",
        text: "**The yield is unchanged.** A catalyst lowers E_a for the forward and reverse reactions equally, so it speeds up both and equilibrium is simply **reached sooner**. Since \u0394G is unaffected, K_c and therefore the equilibrium yield stay the same.",
      },
      {
        label: "(iv)",
        text: "The plot of ln k against 1/T is a straight line with **slope = \u2212E_a/R** and intercept ln A.",
      },
      { figure: { kind: "named", id: "arrhenius-plot" } },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "k3-l1",
    chapter: 3,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "First order kinetics",
    years: [2019, 2015],
    question:
      "(a) Derive the integrated rate equation for a first order reaction and show that its half-life is independent of the initial concentration.\n(b) For the hydrolysis of methyl acetate in aqueous solution the following results were obtained:\n\nt / s: 0, 30, 60\n[CH3COOCH3] / mol L\u22121: 0.60, 0.30, 0.15\n\nShow that it follows pseudo first order kinetics and calculate the average rate constant.",
    answer: [
      { label: "(a) Derivation", text: "For a first order reaction R \u2192 P," },
      { equation: "$-\\dfrac{d[R]}{dt} = k[R] \\;\\Rightarrow\\; \\dfrac{d[R]}{[R]} = -k\\,dt$" },
      { text: "Integrating between $[R]_0$ at t = 0 and [R] at time t:" },
      { equation: "$\\ln\\dfrac{[R]}{[R]_0} = -kt \\quad\\Rightarrow\\quad k = \\dfrac{2.303}{t}\\log\\dfrac{[R]_0}{[R]}$" },
      { label: "Half-life", text: "Put $[R] = [R]_0/2$ at $t = t_{1/2}$:" },
      { equation: "$t_{1/2} = \\dfrac{2.303}{k}\\log 2 = \\dfrac{0.693}{k}$" },
      {
        text: "The initial concentration has cancelled out, so **t\u00BD is independent of [R]\u2080** — a defining feature of first order kinetics.",
      },
      { figure: { kind: "named", id: "order-plots" } },
      {
        label: "(b) Step 1 — test the data",
        table: [
          ["Interval", "[R]\u2080/[R]", "k / s\u207B\u00B9"],
          ["0 \u2192 30 s", "0.60/0.30 = 2", "(2.303/30)(0.3010) = 2.31 \u00D7 10\u207B\u00B2"],
          ["0 \u2192 60 s", "0.60/0.15 = 4", "(2.303/60)(0.6021) = 2.31 \u00D7 10\u207B\u00B2"],
        ],
      },
      {
        label: "Step 2 — conclusion",
        text: "k is constant at **2.31 \u00D7 10\u207B\u00B2 s\u207B\u00B9**, so the reaction is first order in ester. Since water — the other reactant — is present in huge excess and its concentration is effectively constant, the reaction is genuinely second order but observed as first order: it is **pseudo first order**.",
      },
      { equation: "CH3COOCH3 + H2O ->[H^+] CH3COOH + CH3OH" },
    ],
  },
  {
    id: "k3-l2",
    chapter: 3,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Order of reaction",
    years: [2024, 2019],
    question:
      "(a) Define: (i) order of reaction, (ii) activation energy, (iii) rate-determining step.\n(b) For the reaction 2H2O2 \u2192 2H2O + O2 in alkaline medium with I\u2212, the proposed mechanism is:\n  Step 1: H2O2 + I\u2212 \u2192 H2O + IO\u2212 (slow)\n  Step 2: H2O2 + IO\u2212 \u2192 H2O + I\u2212 + O2 (fast)\nWrite the rate law, the overall order, and identify the catalyst and the intermediate.",
    answer: [
      {
        label: "(a)(i) Order",
        text: "The sum of the powers of the concentration terms in the experimentally determined rate law.",
      },
      {
        label: "(a)(ii) Activation energy",
        text: "The minimum extra energy that reactant molecules must possess, above their average energy, for a collision to be effective — the height of the barrier between reactants and products.",
      },
      {
        label: "(a)(iii) Rate-determining step",
        text: "The **slowest** step in a multi-step mechanism. It acts as a bottleneck, so the overall rate cannot exceed its rate and the experimental rate law is governed by it.",
      },
      { figure: { kind: "named", id: "activation-energy" } },
      {
        label: "(b) Rate law",
        text: "The rate is set by the slow step, which involves one H2O2 and one I⁻:",
      },
      { equation: "$\\text{Rate} = k[\\text{H}_2\\text{O}_2][\\text{I}^-]$" },
      { text: "**Overall order = 1 + 1 = 2** (first order in each)." },
      {
        points: [
          "**Catalyst: I\u207B.** It is consumed in step 1 and regenerated in step 2, so it does not appear in the overall equation but does appear in the rate law.",
          "**Intermediate: IO\u207B.** It is produced in step 1 and consumed in step 2, so it never appears in the overall equation or the rate law.",
        ],
      },
      {
        text: "Note that the overall balanced equation suggests second order in H2O2 — but the experimental rate law, which follows the mechanism, is first order in each of H2O2 and I⁻. This is exactly why order must be determined experimentally.",
      },
    ],
  },
];
