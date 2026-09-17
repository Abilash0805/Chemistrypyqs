import type { Question } from "@/types";

/** Unit 2 — the electrolysis and Nernst cases the earlier tranches left out. */
export const CH02C: Question[] = [
  {
    id: "e2-x1",
    chapter: 2,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Electrolysis",
    years: [2025, 2016],
    question:
      "On the basis of E° values, O2 gas should be liberated at the anode during the electrolysis of aqueous NaCl, but it is Cl2 that is actually obtained. Account for this. What is obtained at the cathode, and why?",
    answer: [
      {
        label: "What the E° values predict",
        table: [
          ["Possible anode reaction", "E° (as reduction) / V"],
          ["2H2O(l) → O2(g) + 4H^+(aq) + 4e^−", "+1.23"],
          ["2Cl^−(aq) → Cl2(g) + 2e^−", "+1.36"],
        ],
      },
      {
        text: "Oxidation is easier for the couple with the **lower** reduction potential, so on thermodynamic grounds water should be oxidised and **oxygen** should appear at the anode.",
      },
      {
        label: "Why chlorine appears instead — overvoltage",
        text: "The potential actually needed to make a gas evolve at an electrode is higher than the calculated value. That extra amount is the **overvoltage** (overpotential), and it arises because the rate of electron transfer at the electrode surface is slow — it is a **kinetic** effect, not a thermodynamic one.",
      },
      {
        text: "The overvoltage for **oxygen** evolution is large (roughly 0.4–0.6 V on most anodes), while that for **chlorine** is small. Adding it on reverses the order, so chlorine is discharged in preference to oxygen. Using concentrated brine helps further, because a high [Cl^−] shifts the chloride couple in the favourable direction.",
      },
      { equation: "2Cl^−(aq) -> Cl2(g) + 2e^−" },
      {
        label: "At the cathode",
        text: "**Hydrogen**, not sodium. The two candidates are:",
      },
      {
        table: [
          ["Possible cathode reaction", "E° / V"],
          ["2H2O(l) + 2e^− → H2(g) + 2OH^−(aq)", "−0.83"],
          ["Na^+(aq) + e^− → Na(s)", "−2.71"],
        ],
      },
      {
        text: "Reduction is easier for the couple with the **higher** reduction potential, and water wins by a wide margin. Sodium ions are simply spectators.",
      },
      { equation: "2H2O(l) + 2e^− -> H2(g) + 2OH^−(aq)" },
      {
        text: "The overall result is the **chlor-alkali process**: Cl2 at the anode, H2 at the cathode, and NaOH left in solution.",
      },
    ],
    keyPoint: "Overvoltage is kinetic: E° tells you what *can* happen, overvoltage tells you what actually does.",
  },
  {
    id: "e2-x2",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Nernst equation",
    years: [2025, 2014],
    question:
      "Calculate the potential of a half-cell containing 0.01 M K2Cr2O7(aq), 0.01 M Cr3+(aq) and 1.0 × 10^−4 M H+(aq). The half-cell reaction is\nCr2O7^2−(aq) + 14H+(aq) + 6e− → 2Cr3+(aq) + 7H2O(l), E° = 1.33 V. (log 10 = 1)",
    answer: [
      { label: "Step 1 — write the Nernst equation for the half-cell", text: "Six electrons are transferred, so n = 6." },
      { text: "$E = E^\\circ - \\dfrac{0.0591}{n}\\log\\dfrac{[\\mathrm{Cr}^{3+}]^{2}}{[\\mathrm{Cr_2O_7^{2-}}][\\mathrm{H^+}]^{14}}$" },
      { text: "Water is a pure liquid, so it does not appear in the reaction quotient. Note the **14th power** on the hydrogen ion — that is what makes this half-cell so sensitive to pH." },
      { label: "Step 2 — substitute", text: "$Q = \\dfrac{(0.01)^{2}}{(0.01)(1.0\\times10^{-4})^{14}} = \\dfrac{10^{-4}}{10^{-2}\\times10^{-56}} = \\dfrac{10^{-4}}{10^{-58}} = 10^{54}$" },
      { text: "So log Q = **54**." },
      { label: "Step 3 — evaluate", text: "$E = 1.33 - \\dfrac{0.0591}{6}\\times 54 = 1.33 - (0.00985 \\times 54) = 1.33 - 0.532$" },
      {
        label: "Answer",
        text: "**E = 0.798 V ≈ 0.80 V**",
      },
      {
        text: "The potential has dropped by more than half a volt from the standard value purely because the solution is acidic only to 10^−4 M. This is why dichromate is a powerful oxidising agent **in strongly acidic solution** and a much weaker one as the acid is diluted — the same reason acidified K2Cr2O7 is always specified in a titration.",
      },
      {
        label: "Common slips",
        points: [
          "Forgetting that n = **6**, not 2 or 3.",
          "Raising [H^+] to the wrong power — it is 14, the coefficient in the balanced equation.",
          "Squaring [Cr^3+]: the coefficient 2 becomes a power, not a multiplier.",
          "Including [H2O] in Q.",
        ],
      },
    ],
  },
];
