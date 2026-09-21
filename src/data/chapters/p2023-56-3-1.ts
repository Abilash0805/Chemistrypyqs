import type { Question } from "@/types";

/**
 * CBSE 2023 Main, paper 56/3/1 Set-1, with answers from the official Marking
 * Scheme bound into the same PDF.
 *
 * Questions repeating 56/1/1 or 56/2/1 are left out, as are those the bank
 * already carried: the strongest-base MCQ, the colligative-property-for-
 * proteins MCQ, and the carbylamine-plus-Gabriel pair all appear verbatim in
 * papers already transcribed.
 *
 * Q17 is worth noticing next to 56/2/1's Q18. Both assert that iodoethane
 * substitutes more readily than chloroethane, but this paper states the reason
 * backwards — "bond energy of C-Cl is less than C-I" — so the answer flips
 * from (a) to (c). The pair is a good test of whether a reason is being read
 * or assumed.
 */
export const P2023_5631: Question[] = [
  /* ---------------------------------------------------------------- */
  /* SECTION A — MCQ, 1 mark each                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "p23c-1",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Optical isomerism",
    years: [2023],
    question: "Which of the following is not true about enantiomers ?",
    options: [
      "They have the same density.",
      "They have the same melting or boiling point.",
      "They have the same specific rotation.",
      "They have the same chemical reactivity.",
    ],
    correct: 2,
    answer: [
      { text: "**They have the same specific rotation** — this is the statement that is *not* true." },
      {
        text: "Enantiomers are non-superimposable mirror images. Every **scalar** physical property is identical, because the two molecules have exactly the same bonds and the same energy. What differs is anything with a **handedness** to it.",
      },
      {
        table: [
          ["Property", "Same for both enantiomers?"],
          ["Density, melting point, boiling point", "**Yes**"],
          ["Refractive index, solubility in an achiral solvent", "**Yes**"],
          ["Reactivity towards an achiral reagent", "**Yes**"],
          ["**Specific rotation**", "**No** — equal in size, opposite in sign"],
          ["Reactivity towards a chiral reagent (e.g. an enzyme)", "**No**"],
        ],
      },
      {
        text: "One enantiomer rotates plane-polarised light clockwise (**dextrorotatory, +**) and the other anticlockwise by exactly the same angle (**laevorotatory, −**). A 50:50 mixture of the two is a **racemic mixture** and is optically inactive, the rotations cancelling exactly.",
      },
      {
        text: "Option (d) is a fair statement as printed: towards an ordinary achiral reagent the two react at identical rates. It is only with a chiral reagent that they behave differently — which is why one enantiomer of a drug can be therapeutic and the other useless or harmful.",
      },
    ],
    keyPoint:
      "Enantiomers match in every scalar property; they differ only in the sign of optical rotation and towards chiral reagents.",
  },
  {
    id: "p23c-5",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Polysaccharides",
    years: [2023],
    question: "On hydrolysis, which of the following carbohydrates gives only glucose ?",
    options: ["Starch", "Fructose", "Lactose", "Sucrose"],
    correct: 0,
    answer: [
      { text: "**Starch.**" },
      {
        text: "Starch is a **polysaccharide built entirely from α-D-glucose units**, so complete hydrolysis breaks every glycosidic linkage and leaves nothing but glucose.",
      },
      {
        table: [
          ["Carbohydrate", "Type", "Hydrolysis products"],
          ["**Starch**", "Polysaccharide", "**Glucose only**"],
          ["Fructose", "Monosaccharide", "Cannot be hydrolysed at all"],
          ["Lactose", "Disaccharide", "Glucose + galactose"],
          ["Sucrose", "Disaccharide", "Glucose + fructose"],
        ],
      },
      {
        text: "Fructose is the trap for the careless reader: it is a **monosaccharide**, the simplest unit there is, so there is nothing left to hydrolyse.",
      },
      {
        text: "**Cellulose** and **maltose** would also have been correct answers had they been offered — cellulose is a polymer of β-glucose and maltose a dimer of two glucose units, and both give glucose alone.",
      },
    ],
  },
  {
    id: "p23c-6",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Vitamins",
    years: [2023],
    question: "Which of the following vitamins is water soluble ?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin C"],
    correct: 3,
    answer: [
      { text: "**Vitamin C.**" },
      {
        text: "Vitamins split into two groups by solubility, and the division matters because it decides whether the body can store them.",
      },
      {
        table: [
          ["", "Water soluble", "Fat soluble"],
          ["Which ones", "**B group and C**", "**A, D, E and K**"],
          ["Stored in the body?", "No — excess is excreted in urine", "Yes, in the liver and fatty tissue"],
          ["How often needed", "Regularly, in the diet", "Less frequently"],
          ["Risk of excess", "Very low", "Can accumulate to toxic levels"],
        ],
      },
      {
        text: "A useful mnemonic for the fat-soluble four is that they are the ones that spell **ADEK**; everything else — the B vitamins and C — dissolves in water.",
      },
      {
        text: "Vitamin C (ascorbic acid) has several **–OH groups** that hydrogen bond readily with water, which is exactly what makes it soluble, and why a deficiency producing **scurvy** appears so quickly if it is missing from the diet.",
      },
    ],
  },
  {
    id: "p23c-7",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2023],
    question:
      "The unit of the rate of reaction is the same as that of the rate constant for a :",
    options: [
      "first order reaction",
      "second order reaction",
      "zero order reaction",
      "it cannot be same",
    ],
    correct: 2,
    answer: [
      { text: "**Zero order reaction.**" },
      {
        text: "For a zero order reaction the rate law has no concentration term at all, so rate and rate constant are numerically and dimensionally the same thing:",
      },
      { equation: "$\\text{Rate} = k[A]^0 = k$" },
      {
        text: "Both therefore carry the units **mol L^−1 s^−1**.",
      },
      {
        label: "The general rule",
        text: "For a reaction of order n the rate constant has units:",
      },
      { equation: "$k = (\\text{mol L}^{-1})^{1-n}\\,\\text{s}^{-1}$" },
      {
        table: [
          ["Order", "Unit of k", "Same as rate?"],
          ["**0**", "**mol L^−1 s^−1**", "**Yes**"],
          ["1", "s^−1", "No"],
          ["2", "L mol^−1 s^−1", "No"],
        ],
      },
      {
        text: "Setting n = 0 in the general expression returns mol L^−1 s^−1, which is the unit of rate — so zero order is the only case where the two coincide.",
      },
    ],
  },
  {
    id: "p23c-8",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Kohlrausch's law",
    years: [2023],
    question:
      "Kohlrausch gave the following relation for a strong electrolyte:\nΛ = Λ° − A√C\nWhich of the following equalities holds true ?",
    options: [
      "Λ = Λ° as C -> √A",
      "Λ = Λ° as C -> 0",
      "Λ = Λ° as C -> ∞",
      "Λ = Λ° as C -> 1",
    ],
    correct: 1,
    answer: [
      { text: "**Λ = Λ° as C → 0.**" },
      {
        text: "Read the equation directly. The correction term is A√C, so as the concentration falls towards zero that term vanishes:",
      },
      { equation: "$\\Lambda_m = \\Lambda^\\circ_m - A\\sqrt{c} \\quad\\xrightarrow{\\;c \\to 0\\;}\\quad \\Lambda_m = \\Lambda^\\circ_m$" },
      {
        text: "**Λ° is the limiting molar conductivity** — the value the molar conductivity approaches at **infinite dilution**, which is what c → 0 means physically.",
      },
      {
        text: "The physical picture matches: A√C measures how much the ions hinder one another. Dilute the solution enough and the ions are so far apart that they move independently, so nothing is subtracted and Λ reaches its ceiling.",
      },
      {
        text: "Option (c) is exactly backwards — as C → ∞ the correction grows and Λ falls furthest below Λ°. Note also that this straight-line relation holds only for **strong** electrolytes; for a weak one the plot curves so sharply near c = 0 that Λ° must be found from Kohlrausch's law of independent migration instead.",
      },
    ],
  },
  {
    id: "p23c-9",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Azeotropes",
    years: [2023],
    question:
      "An azeotropic mixture of two liquids has a boiling point higher than either of the two liquids when it :",
    options: [
      "shows large negative deviation from Raoult's law.",
      "shows no deviation from Raoult's law.",
      "shows large positive deviation from Raoult's law.",
      "obeys Raoult's law.",
    ],
    correct: 0,
    answer: [
      { text: "**Shows a large negative deviation from Raoult's law.**" },
      {
        text: "A **negative** deviation means the A–B attraction is **stronger** than the A–A and B–B attractions the components had on their own. The molecules are held more tightly, so fewer escape into the vapour, the vapour pressure is **lower** than Raoult's law predicts — and a lower vapour pressure means a **higher** boiling point.",
      },
      {
        table: [
          ["", "Negative deviation", "Positive deviation"],
          ["A–B forces vs A–A, B–B", "Stronger", "Weaker"],
          ["Vapour pressure", "Lower than predicted", "Higher than predicted"],
          ["Δ_mix H", "Negative (heat given out)", "Positive (heat absorbed)"],
          ["Azeotrope type", "**Maximum boiling**", "Minimum boiling"],
          ["Example", "HNO3 + water (b.p. 393.5 K)", "Ethanol + water (b.p. 351.1 K)"],
        ],
      },
      {
        text: "The standard example is **nitric acid and water**, which forms a maximum-boiling azeotrope at 68% HNO3 boiling at 393.5 K — above either pure component. Chloroform and acetone behave the same way, hydrogen bonding to each other more strongly than to themselves.",
      },
      {
        text: "An azeotrope of either kind boils without any change in composition, which is precisely why the components **cannot be separated by fractional distillation**.",
      },
    ],
    keyPoint:
      "Negative deviation -> stronger A–B forces -> lower vapour pressure -> maximum boiling azeotrope.",
  },
  {
    id: "p23c-11",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Oxidation states",
    years: [2023],
    question:
      "Among the following outermost configurations of transition metals, which one shows the highest oxidation state ?",
    options: ["3d^3 4s^2", "3d^5 4s^1", "3d^5 4s^2", "3d^6 4s^2"],
    correct: 2,
    answer: [
      { text: "**3d^5 4s^2 — manganese, which reaches +7.**" },
      {
        text: "The highest oxidation state a 3d element can reach is set by the **total number of 3d and 4s electrons available** for bonding, since in the early and middle part of the series all of them can be used.",
      },
      {
        table: [
          ["Configuration", "Element", "3d + 4s electrons", "Highest state"],
          ["3d^3 4s^2", "V", "5", "+5"],
          ["3d^5 4s^1", "Cr", "6", "+6"],
          ["**3d^5 4s^2**", "**Mn**", "**7**", "**+7**"],
          ["3d^6 4s^2", "Fe", "8", "+6 only"],
        ],
      },
      {
        text: "Manganese wins with seven available electrons, all of them unpaired or in the 4s, which is what makes **KMnO4** possible.",
      },
      {
        text: "Iron is the instructive exception. It has *eight* electrons in 3d and 4s, but two of its 3d electrons are already **paired**, and paired d electrons are held much more tightly. Iron therefore stops at +6 (in ferrate, FeO4^2−) and is common only at +2 and +3. From manganese onwards the maximum oxidation state falls steadily for exactly this reason.",
      },
    ],
  },
  {
    id: "p23c-12",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Ionisation of complexes",
    years: [2023],
    question:
      "How many ions are produced in solution from the complex [Ni(NH3)6]Cl2 ?",
    options: ["4", "3", "2", "5"],
    correct: 1,
    answer: [
      { text: "**Three.**" },
      {
        text: "Only what lies **outside** the square brackets ionises. The coordination sphere stays intact in solution and behaves as a single ion.",
      },
      { equation: "[Ni(NH3)6]Cl2 -> [Ni(NH3)6]^2+ + 2Cl^−" },
      {
        points: [
          "**One** complex cation, [Ni(NH3)6]^2+.",
          "**Two** chloride ions, the counter-ions.",
          "Total = **3 ions**.",
        ],
      },
      {
        text: "The six ammonia molecules are **ligands bonded directly to nickel**, so they do not come off and are not counted. Adding AgNO3 to this solution would precipitate **two** moles of AgCl per mole of complex, which is how Werner established such formulations experimentally.",
      },
      {
        text: "Compare [Pt(NH3)2Cl2], where both chlorides are inside the sphere: it gives **no** ions at all and does not react with AgNO3.",
      },
    ],
  },
  {
    id: "p23c-13",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Ligands",
    years: [2023],
    question: "Which of the following species is not expected to be a ligand ?",
    options: ["CO", "NH4^+", "NH3", "H2O"],
    correct: 1,
    answer: [
      { text: "**NH4^+, the ammonium ion.**" },
      {
        text: "A ligand must have at least one **lone pair of electrons** to donate to the metal. The ammonium ion has none: nitrogen's lone pair has already been used to bond the fourth hydrogen.",
      },
      {
        table: [
          ["Species", "Lone pairs on the donor atom", "Ligand?"],
          ["CO", "One, on carbon", "Yes"],
          ["**NH4^+**", "**None — all four used in N–H bonds**", "**No**"],
          ["NH3", "One, on nitrogen", "Yes"],
          ["H2O", "Two, on oxygen", "Yes"],
        ],
      },
      {
        text: "Its **positive charge** is a second objection: the metal centre is usually a cation too, so an incoming NH4^+ would be repelled rather than attracted.",
      },
      {
        text: "The contrast with NH3 is the point of the question. Ammonia is one of the commonest ligands precisely because of that lone pair; protonate it and the same nitrogen becomes useless for coordination.",
      },
    ],
  },
  {
    id: "p23c-15",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Order and molecularity",
    years: [2023],
    question:
      "Assertion (A) : Order and molecularity of a reaction are always same.\nReason (R) : Complex reactions involve a sequence of elementary reactions and the slowest step is rate determining.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
    answer: [
      { text: "**(d)** — A is false, R is true." },
      {
        label: "A is false",
        text: "Order and molecularity agree only for an **elementary** reaction. For anything else they are different quantities entirely, and R explains exactly why.",
      },
      {
        table: [
          ["", "Molecularity", "Order"],
          ["Determined by", "The balanced elementary step", "**Experiment**"],
          ["Possible values", "1, 2 or 3 — whole numbers only", "Can be zero, fractional or negative"],
          ["Defined for", "Elementary steps only", "Any reaction"],
        ],
      },
      {
        label: "R is true",
        text: "A complex reaction proceeds through a sequence of elementary steps, and the **slowest** of them controls the overall rate. The experimentally observed order therefore reflects that one step, not the overall balanced equation.",
      },
      {
        text: "The decomposition of H2O2 makes it concrete: the balanced equation 2H2O2 -> 2H2O + O2 suggests molecularity 2, but the reaction is experimentally **first order**, because the slow step involves a single H2O2 molecule.",
      },
      {
        text: "This is also why a **fractional** order is a giveaway that a reaction is not elementary — no single step can involve half a molecule.",
      },
    ],
    keyPoint:
      "Molecularity is theoretical and whole-numbered; order is experimental and can be fractional. They match only for elementary steps.",
  },
  {
    id: "p23c-16",
    chapter: 2,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Electrolysis",
    years: [2023],
    question:
      "Assertion (A) : Electrolysis of an aqueous solution of NaCl gives chlorine gas at the anode instead of oxygen gas.\nReason (R) : Formation of oxygen gas at the anode requires overpotential.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
    answer: [
      { text: "**(a)** — both true, and R explains A." },
      {
        label: "The puzzle A raises",
        text: "Comparing the two possible anode reactions on standard potentials alone, **water should win**:",
      },
      { equation: "2H2O -> O2 + 4H^+ + 4e^−, E° = +1.23 V" },
      { equation: "2Cl^− -> Cl2 + 2e^−, E° = +1.36 V" },
      {
        text: "The lower oxidation potential is the easier oxidation, so oxygen ought to be liberated. In practice concentrated brine gives **chlorine**.",
      },
      {
        label: "R resolves it",
        text: "**Overpotential** is the extra voltage, above the thermodynamic value, that a gas needs before it is actually evolved on a given electrode. For **oxygen on most anode materials the overpotential is large** — several tenths of a volt — because the four-electron transfer and the O–O bond formation are kinetically slow. Chlorine's overpotential is very small.",
      },
      {
        text: "Adding it in, the *effective* voltage needed to release oxygen exceeds that for chlorine, so chlorine comes off instead. R is therefore both true and precisely the reason A is true.",
      },
      {
        text: "This is not a curiosity — it is the basis of the **chlor-alkali industry**, which makes chlorine, hydrogen and sodium hydroxide from brine. It is also a reminder that electrode reactions are decided by **kinetics as well as thermodynamics**; E° alone can mislead.",
      },
    ],
    keyPoint:
      "E° predicts oxygen, but its large overpotential means chlorine is evolved — kinetics overrules thermodynamics here.",
  },
  {
    id: "p23c-17",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Reactivity of haloalkanes",
    years: [2023],
    question:
      "Assertion (A) : Nucleophilic substitution of iodoethane is easier than chloroethane.\nReason (R) : Bond energy of the C–Cl bond is less than the C–I bond.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
    answer: [
      { text: "**(c)** — A is true, but R is false." },
      {
        label: "A is true",
        text: "Iodoethane does undergo nucleophilic substitution more readily. Iodide is the best leaving group of the halogens.",
      },
      {
        label: "R is false — it has the comparison the wrong way round",
        text: "The C–Cl bond is **stronger**, not weaker, than C–I:",
      },
      {
        table: [
          ["Bond", "Bond enthalpy / kJ mol^−1"],
          ["C–Cl", "**351**"],
          ["C–I", "**234**"],
        ],
      },
      {
        text: "Iodine's large 5p orbital overlaps poorly with carbon's compact 2p orbital, giving a long, weak bond that breaks easily. Chlorine is much closer to carbon in size, so C–Cl is short and strong. The correct statement is that the bond energy of **C–I is less than C–Cl** — the reverse of what R says.",
      },
      {
        label: "Compare with the 56/2/1 version of this question",
        text: "Paper 56/2/1 asked the same assertion with the reason stated **correctly** ('bond enthalpy of C–I is less than that of C–Cl'), and the answer there is **(a)**. Same assertion, same chemistry, opposite answer — because one word order changed. It is worth reading the reason on its own merits before deciding.",
      },
    ],
    keyPoint: "C–I (234) is weaker than C–Cl (351). Check which way a reason states a comparison.",
  },
  {
    id: "p23c-18",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Transition elements",
    years: [2023],
    question:
      "Assertion (A) : Zinc is not regarded as a transition element.\nReason (R) : In zinc, 3d orbitals are completely filled in its ground state as well as in its oxidised state.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
    answer: [
      { text: "**(a)** — both true, and R explains A." },
      {
        text: "A transition element is defined as one whose atom **or any of its stable ions** has a **partially filled d subshell**. Zinc fails on both counts:",
      },
      {
        table: [
          ["Species", "Configuration", "3d subshell"],
          ["Zn atom", "[Ar] 3d^10 4s^2", "**Full**"],
          ["Zn^2+ (the only stable ion)", "[Ar] 3d^10", "**Full**"],
        ],
      },
      {
        text: "R states precisely this — full in the ground state **and** in the oxidised state — which is exactly the condition that excludes zinc. So R is the correct explanation.",
      },
      {
        text: "The consequences follow: with no partly filled d subshell, zinc compounds show **no d–d transitions** (so they are white or colourless), **no unpaired d electrons** (so they are diamagnetic), and essentially **one oxidation state**, +2. Zinc also has the lowest enthalpy of atomisation in the series, since only its 4s electrons contribute to metallic bonding.",
      },
      {
        label: "Contrast with copper",
        text: "Copper is also 3d^10 in the ground state (3d^10 4s^1), but **Cu^2+ is 3d^9** — partly filled — so copper *is* a transition element. The phrase 'as well as in its oxidised state' in R is what makes zinc the genuine exception.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION B — very short answer, 2 marks each                      */
  /* ---------------------------------------------------------------- */
  {
    id: "p23c-19",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Grignard reagents and nitration",
    years: [2023],
    question:
      "Write the structures and IUPAC names of the products expected from the following reactions :\n(a) Reaction of methanal with (CH3)2CHMgBr followed by hydrolysis.\n(b) Reaction of phenol with conc. HNO3.",
    answer: [
      { label: "(a) Methanal with isopropylmagnesium bromide" },
      { equation: "HCHO ->[(i) (CH3)2CHMgBr][(ii) H3O^+] (CH3)2CH–CH2OH" },
      {
        text: "**Structure: (CH3)2CH–CH2OH. IUPAC name: 2-methylpropan-1-ol.**",
      },
      {
        text: "The Grignard carbon attacks the carbonyl carbon and the magnesium alkoxide formed is hydrolysed to the alcohol. **Methanal always gives a primary alcohol**, because its carbonyl carbon carries two hydrogens — only the one new C–C bond is made, leaving the carbon with two H, one OH and one alkyl group.",
      },
      {
        text: "That is the general pattern worth remembering: methanal gives 1°, any other aldehyde gives 2°, and a ketone gives 3°.",
      },
      { label: "(b) Phenol with concentrated nitric acid" },
      { equation: "C6H5OH ->[conc. HNO3] 2,4,6-(O2N)3C6H2OH" },
      {
        text: "**Structure: the benzene ring with –OH at C-1 and –NO2 at C-2, C-4 and C-6. IUPAC name: 2,4,6-trinitrophenol**, better known as **picric acid**.",
      },
      {
        text: "The –OH group is strongly **activating and o,p-directing**, donating electron density into the ring by resonance. The ring is so activated that all three available ortho and para positions are nitrated in one operation, whereas benzene itself needs a nitrating mixture and gives only mononitration.",
      },
      {
        text: "Picric acid is a notably strong acid for a phenol — pK_a about 0.4 — because the three nitro groups stabilise the phenoxide ion enormously.",
      },
    ],
  },
  {
    id: "p23c-20",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Rate of reaction",
    years: [2023],
    question:
      "A chemical reaction 2N2O5 (g) -> 4NO2 (g) + O2 (g) in the gas phase was carried out in a closed vessel. The concentration of NO2 was found to increase by 5 × 10^−3 mol L^−1 in 10 seconds. Calculate :\n(a) the rate of formation of NO2, and\n(b) the rate of consumption of N2O5.",
    answer: [
      { label: "(a) Rate of formation of NO2" },
      {
        text: "This is simply the change in concentration divided by the time taken:",
      },
      {
        equation:
          "$\\dfrac{d[\\mathrm{NO_2}]}{dt} = \\dfrac{5 \\times 10^{-3}}{10} = 5 \\times 10^{-4}\\ \\text{mol L}^{-1}\\text{s}^{-1}$",
      },
      { label: "(b) Rate of consumption of N2O5" },
      {
        text: "Use the stoichiometry. The balanced equation gives 4 NO2 for every 2 N2O5, so N2O5 is consumed at **half** the rate at which NO2 appears:",
      },
      {
        equation:
          "$-\\dfrac{1}{2}\\dfrac{d[\\mathrm{N_2O_5}]}{dt} = \\dfrac{1}{4}\\dfrac{d[\\mathrm{NO_2}]}{dt}$",
      },
      {
        equation:
          "$-\\dfrac{d[\\mathrm{N_2O_5}]}{dt} = \\dfrac{2}{4}\\dfrac{d[\\mathrm{NO_2}]}{dt} = \\dfrac{1}{2}\\times 5 \\times 10^{-4}$",
      },
      {
        text: "**Rate of consumption of N2O5 = 2.5 × 10^−4 mol L^−1 s^−1.**",
      },
      {
        text: "Check the sense of it: two N2O5 disappear for every four NO2 formed, so N2O5 must change more slowly — and 2.5 × 10^−4 is indeed half of 5 × 10^−4.",
      },
      {
        text: "For completeness, the **rate of reaction** itself divides each term by its coefficient and comes to 1.25 × 10^−4 mol L^−1 s^−1, the same number whichever species is used to find it.",
      },
    ],
  },
  {
    id: "p23c-21",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Corrosion and electrode potential",
    years: [2023],
    question:
      "Using the E° values of X and Y given below, predict which is better for coating the surface of iron to prevent corrosion, and why ?\nGiven : E°(X^2+/X) = −2.36 V, E°(Y^2+/Y) = −0.14 V, E°(Fe^2+/Fe) = −0.44 V",
    answer: [
      { text: "**X is the better coating.**" },
      {
        label: "The principle",
        text: "A coating protects iron properly only if it is **more easily oxidised than iron itself** — that is, if its standard reduction potential is **more negative**. Such a metal corrodes in preference to the iron and is said to give **sacrificial** or **cathodic** protection.",
      },
      {
        table: [
          ["Metal", "E° / V", "Compared with iron", "Behaviour"],
          ["**X**", "**−2.36**", "**More negative**", "**Oxidises in preference — protects the iron**"],
          ["Fe", "−0.44", "—", "—"],
          ["Y", "−0.14", "Less negative", "Iron oxidises in preference — accelerates rusting once scratched"],
        ],
      },
      {
        text: "Because X has the more negative potential, it loses electrons more readily than iron and is consumed first. Even where the coating is **scratched or broken**, the exposed iron is still protected: X and Fe form a tiny galvanic cell in which X is the anode and iron the cathode, so the iron does not corrode.",
      },
      {
        text: "Y is the opposite case and is the more dangerous of the two. An unbroken layer of Y keeps water and air out, but the moment it is scratched the iron becomes the **anode** of the resulting cell and rusts *faster* than bare iron would.",
      },
      {
        text: "This is exactly the difference between **galvanising** with zinc, E° = −0.76 V, which protects sacrificially, and tin plating, E° = −0.14 V, where a scratched tin can rusts rapidly. Y's value identifies it as tin.",
      },
    ],
    keyPoint:
      "A sacrificial coating needs a more negative E° than iron; a less negative one makes a scratch corrode faster.",
  },
  {
    id: "p23c-22",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Carbohydrates in the body",
    years: [2023],
    question:
      "(i) How are carbohydrates stored in the animal body ? Mention any one organ where they are present.\n(ii) What is the basic structural difference between starch and cellulose ?",
    answer: [
      { label: "(i) Storage in animals" },
      {
        text: "Carbohydrates are stored in animals as **glycogen**, often called **animal starch**.",
      },
      {
        text: "It is found chiefly in the **liver**, and also in **muscle** and the brain. Either organ earns the mark.",
      },
      {
        text: "Glycogen is a polymer of α-D-glucose with the same C1–C4 α backbone as starch, but it is **much more highly branched** — a C1–C6 branch roughly every 10 units against every 20–25 in amylopectin. That heavy branching gives many chain ends at once, so glucose can be released quickly when the body needs energy in a hurry.",
      },
      { label: "(ii) Starch against cellulose" },
      {
        text: "**Starch is a polymer of α-D-glucose; cellulose is a polymer of β-D-glucose.**",
      },
      {
        text: "That single difference in configuration at C-1 is the whole answer, and everything else follows from it. The **α** linkage forces the chain into a coiled helix, giving a compact energy store. The **β** linkage lets the chains lie flat and straight, so they hydrogen bond side by side into the rigid fibres that make cellulose a structural material.",
      },
      {
        text: "It is also why humans digest starch but not cellulose: our enzymes hydrolyse α-glycosidic linkages only.",
      },
    ],
  },
  {
    id: "p23c-22b",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Biomolecule definitions",
    years: [2023],
    question:
      "Differentiate between :\n(i) Peptide linkage and glycosidic linkage\n(ii) Nucleoside and nucleotide",
    answer: [
      { label: "(i) Peptide against glycosidic linkage" },
      {
        table: [
          ["", "Peptide linkage", "Glycosidic linkage"],
          ["Structure", "**–CO–NH–**", "**–O–** bridge between two rings"],
          ["Joins", "Two α-amino acids", "Two monosaccharide units"],
          ["Formed between", "–COOH of one and –NH2 of the next", "The –OH groups of two sugars"],
          ["Found in", "Proteins and polypeptides", "Disaccharides and polysaccharides"],
          ["Example", "Glycylalanine", "Maltose, sucrose, starch"],
        ],
      },
      {
        text: "Both are **condensation** linkages formed with loss of water, which is what makes them worth contrasting; the difference is which functional groups condense and therefore which atom bridges the two units — **nitrogen** in a peptide, **oxygen** in a glycoside.",
      },
      { label: "(ii) Nucleoside against nucleotide" },
      {
        table: [
          ["", "Nucleoside", "Nucleotide"],
          ["Components", "**Base + sugar**", "**Base + sugar + phosphate**"],
          ["Number of parts", "Two", "Three"],
          ["Linkage", "Base bonded to C-1 of the sugar", "Nucleoside plus a phosphate ester at C-5"],
          ["Example", "Adenosine", "Adenosine monophosphate (AMP)"],
        ],
      },
      {
        text: "The simple way to keep them apart: a **nucleotide** is a nucleoside that has picked up a **phosphate**. Nucleotides are the actual building blocks of nucleic acids, since the phosphate is what links one unit to the next along the chain.",
      },
    ],
    keyPoint: "Nucleotide = nucleoside + phosphate. Peptide bridges through N, glycoside through O.",
  },
  {
    id: "p23c-25",
    chapter: 1,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Applications of solutions",
    years: [2023],
    question:
      "Give reasons for the following :\n(a) Aquatic animals are more comfortable in cold water in comparison to warm water.\n(b) Sprinkling of salt helps in clearing the snow-covered roads in hilly areas.",
    answer: [
      { label: "(a) Aquatic animals prefer cold water" },
      {
        text: "Because **oxygen is more soluble in cold water than in warm water.**",
      },
      {
        text: "Dissolving a gas is an exothermic process, so by Le Chatelier's principle raising the temperature drives dissolved gas back out. In Henry's law terms, **K_H increases with temperature** and the solubility x = p/K_H therefore falls.",
      },
      { equation: "p = K_H × x" },
      {
        text: "Fish breathe dissolved oxygen through their gills, so warmer water simply holds less of what they need. This is the reason thermal pollution — warm water discharged from power stations — is harmful to river life even when nothing toxic has been added.",
      },
      { label: "(b) Salt clears snow from roads" },
      {
        text: "Because salt causes a **depression in the freezing point**, so the snow melts at a temperature below 0 °C.",
      },
      { equation: "$\\Delta T_f = i\\,K_f\\,m$" },
      {
        text: "Freezing point depression is a **colligative** property, depending on the number of particles dissolved. Salt is doubly effective here because it is an electrolyte: NaCl gives two ions per formula unit, so i ≈ 2, and CaCl2 gives three, which is why calcium chloride is preferred in the coldest conditions.",
      },
      {
        text: "The practical limit is worth knowing — a saturated NaCl solution freezes at about **−21 °C**, so below that temperature salting simply stops working.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION C — short answer, 3 marks each                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p23c-26",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Cumene process",
    years: [2023],
    question:
      "Write the equation of the reaction for the preparation of phenol from cumene.",
    answer: [
      {
        text: "This is the **cumene process**, the route by which most industrial phenol is made. It runs in two stages.",
      },
      { label: "Step 1 — oxidation to the hydroperoxide" },
      {
        text: "Cumene (isopropylbenzene) is oxidised by air:",
      },
      { equation: "C6H5–CH(CH3)2 ->[O2] C6H5–C(CH3)2–O–O–H" },
      {
        text: "The product is **cumene hydroperoxide**. Attack occurs specifically at the benzylic carbon because the radical formed there is stabilised by the ring.",
      },
      { label: "Step 2 — acid-catalysed rearrangement and cleavage" },
      { equation: "C6H5–C(CH3)2–O–O–H ->[H^+ / H2O] C6H5OH + CH3–CO–CH3" },
      {
        text: "Dilute acid cleaves the hydroperoxide to give **phenol** and **propanone (acetone)**.",
      },
      {
        label: "Why industry uses it",
        text: "Acetone is a valuable product in its own right, so the process yields two saleable chemicals from one cheap feedstock — and cumene itself is made easily by Friedel-Crafts alkylation of benzene with propene. That economy is why this route displaced the older ones.",
      },
      {
        text: "Phenol obtained this way is purified by distillation. The overall transformation is worth remembering as a single line: **cumene -> (O2) -> cumene hydroperoxide -> (H3O^+) -> phenol + acetone**.",
      },
    ],
    keyPoint: "Cumene + O2 gives the hydroperoxide; dilute acid then splits it into phenol and acetone.",
  },
  {
    id: "p23c-27",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Reaction chains",
    years: [2023],
    question:
      "Write the structures of A, B and C in the following reactions :\n(i) C6H5COOH ->[NH3, Δ] A ->[Br2 + NaOH] B ->[NaNO2 + HCl, 0 °C] C\n(ii) CH3CH2Br ->[KCN] A ->[LiAlH4] B ->[HNO2, 0 °C] C",
    answer: [
      { label: "(i) Benzoic acid to the diazonium salt" },
      {
        equation:
          "C6H5COOH ->[NH3][Δ] C6H5CONH2 ->[Br2 + NaOH] C6H5NH2 ->[NaNO2 + HCl][273 K] C6H5N2^+Cl^−",
      },
      {
        table: [
          ["", "Structure", "Name", "Reaction"],
          ["A", "C6H5CONH2", "Benzamide", "Ammonium salt formed, then dehydrated on heating"],
          ["B", "C6H5NH2", "Aniline", "**Hoffmann bromamide degradation** — loses one carbon"],
          ["C", "C6H5N2^+Cl^−", "Benzenediazonium chloride", "**Diazotisation** at 0–5 °C"],
        ],
      },
      {
        text: "The carbon count is the check: benzoic acid and benzamide both have seven carbons, and the Hoffmann degradation removes the carbonyl carbon as carbonate, leaving aniline with six.",
      },
      { label: "(ii) Bromoethane to ethanol, the long way round" },
      {
        equation:
          "CH3CH2Br ->[KCN] CH3CH2CN ->[LiAlH4] CH3CH2CH2NH2 ->[HNO2][273 K] CH3CH2CH2OH",
      },
      {
        table: [
          ["", "Structure", "Name", "Reaction"],
          ["A", "CH3CH2CN", "Propanenitrile", "**KCN gives the nitrile** — carbon attacks, adding one carbon"],
          ["B", "CH3CH2CH2NH2", "Propan-1-amine", "LiAlH4 reduces the nitrile to a 1° amine"],
          ["C", "CH3CH2CH2OH", "Propan-1-ol", "Nitrous acid replaces –NH2 by –OH"],
        ],
      },
      {
        text: "Two points decide this chain. First, **KCN, not AgCN** — potassium cyanide is ionic, so the **carbon** end attacks and a **nitrile** results, adding a carbon to the chain. AgCN is largely covalent and would give the isocyanide instead.",
      },
      {
        text: "Second, an **aliphatic** primary amine with nitrous acid gives an unstable diazonium salt that immediately loses nitrogen, so the product is the **alcohol** with brisk effervescence of N2. Only an *aromatic* diazonium salt is stable enough at 273 K to be isolated and used further, as it is in part (i).",
      },
    ],
    keyPoint:
      "KCN adds a carbon as a nitrile; AgCN gives an isocyanide. Aliphatic diazonium salts fall apart to alcohols at once.",
  },
  {
    id: "p23c-27b",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2023],
    question:
      "How will you convert the following :\n(i) Aniline to p-bromoaniline\n(ii) Ethanoic acid to methanamine\n(iii) Butanenitrile to 1-aminobutane",
    answer: [
      { label: "(i) Aniline to p-bromoaniline — three steps, via protection" },
      { equation: "C6H5NH2 ->[(CH3CO)2O / pyridine] C6H5NHCOCH3" },
      { equation: "C6H5NHCOCH3 ->[Br2 / CH3COOH] 4-Br–C6H4–NHCOCH3" },
      { equation: "4-Br–C6H4–NHCOCH3 ->[OH^− or H^+][hydrolysis] 4-Br–C6H4–NH2" },
      {
        text: "The direct route fails: aniline with bromine water is so strongly activated that **all three** ortho and para positions brominate at once, giving 2,4,6-tribromoaniline.",
      },
      {
        text: "**Acetylation** solves it. In acetanilide the nitrogen lone pair is drawn towards the neighbouring carbonyl, so the ring is far less activated and bromination stops cleanly at the **para** position — the ortho positions being blocked by the bulky –NHCOCH3 group. Hydrolysis then removes the protecting group and returns the amine.",
      },
      { label: "(ii) Ethanoic acid to methanamine — losing a carbon" },
      { equation: "CH3COOH ->[NH3][Δ] CH3CONH2 ->[Br2 / KOH] CH3NH2" },
      {
        text: "Ammonia gives the ammonium salt, which on heating loses water to form **ethanamide**. The **Hoffmann bromamide degradation** then removes the carbonyl carbon, so the two-carbon acid becomes the one-carbon amine.",
      },
      { label: "(iii) Butanenitrile to 1-aminobutane — keeping the carbons" },
      { equation: "CH3CH2CH2CN ->[LiAlH4 or H2 / Ni] CH3CH2CH2CH2NH2" },
      {
        text: "Reduction converts the –C≡N group to –CH2–NH2, so the nitrile carbon is **retained** and the four-carbon nitrile gives the four-carbon amine. Catalytic hydrogenation over nickel does the same job. Sodium and ethanol (Mendius reduction) is a third accepted route.",
      },
      {
        text: "Notice the contrast between (ii) and (iii): Hoffmann degradation **shortens** the chain by one carbon, while nitrile reduction **keeps** every carbon. Choosing between them is usually what these conversion questions are really testing.",
      },
    ],
  },
  {
    id: "p23c-28",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2023],
    question:
      "0.3 g of acetic acid (M = 60 g mol^−1) dissolved in 30 g of benzene shows a depression in freezing point equal to 0.45 °C. Calculate the percentage association of the acid if it forms a dimer in the solution.\n(Given : K_f for benzene = 5.12 K kg mol^−1)",
    answer: [
      {
        label: "Step 1 — find the van't Hoff factor",
        text: "Include i, since the acid does not stay as single molecules:",
      },
      {
        equation:
          "$\\Delta T_f = i\\,K_f\\,\\dfrac{w_B}{M_B}\\times\\dfrac{1000}{w_A}$",
      },
      {
        equation:
          "$0.45 = i \\times 5.12 \\times \\dfrac{0.3}{60} \\times \\dfrac{1000}{30}$",
      },
      {
        text: "The molality is (0.3/60) × (1000/30) = 0.005 × 33.33 = 0.1667 mol kg^−1, so:",
      },
      { equation: "$0.45 = i \\times 5.12 \\times 0.1667 = 0.8533\\,i \\;\\Rightarrow\\; i = 0.527$" },
      {
        text: "Note **i < 1**, which is the signature of **association** — the particles are fewer than expected, not more.",
      },
      {
        label: "Step 2 — degree of association",
        text: "Two molecules combine into one dimer, so n = 2 and the formula for association is used, not the one for dissociation:",
      },
      { equation: "2CH3COOH <=> (CH3COOH)2" },
      { equation: "$\\alpha = \\dfrac{1 - i}{1 - \\frac{1}{n}} = \\dfrac{1 - 0.527}{1 - \\frac{1}{2}}$" },
      { equation: "$\\alpha = \\dfrac{0.473}{0.5} = 0.946$" },
      { text: "**α = 0.946, that is 94.6% association.**" },
      {
        label: "Why acetic acid dimerises in benzene",
        text: "Two molecules pair up through a **double hydrogen bond**, each –OH bonding to the other's carbonyl oxygen to close an eight-membered ring. Benzene is non-polar and cannot solvate the –OH groups, so the dimer survives — which is why nearly 95% of the acid is paired up. In water the acid would ionise instead and i would exceed 1.",
      },
      {
        text: "Watch the two formulas carefully. For **association** α = (1 − i)/(1 − 1/n); for **dissociation** α = (i − 1)/(n − 1). Using the wrong one is the commonest error in this question.",
      },
    ],
    keyPoint: "i < 1 means association; use α = (1 − i)/(1 − 1/n) rather than the dissociation formula.",
  },
  {
    id: "p23c-29",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Arrhenius equation",
    years: [2023],
    question:
      "The rate of a reaction doubles when the temperature changes from 27 °C to 37 °C. Calculate the energy of activation for the reaction.\n(R = 8.314 J K^−1 mol^−1; log 2 = 0.3010, log 3 = 0.4771, log 4 = 0.6021)",
    answer: [
      {
        label: "Step 1 — convert to kelvin and note the ratio",
        text: "T1 = 27 + 273 = **300 K**, T2 = 37 + 273 = **310 K**. The rate doubles, so k2/k1 = 2.",
      },
      { label: "Step 2 — the two-temperature Arrhenius equation" },
      {
        equation:
          "$\\log\\dfrac{k_2}{k_1} = \\dfrac{E_a}{2.303\\,R}\\left[\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right]$",
      },
      {
        equation:
          "$\\log 2 = \\dfrac{E_a}{2.303 \\times 8.314}\\left[\\dfrac{1}{300} - \\dfrac{1}{310}\\right]$",
      },
      {
        label: "Step 3 — simplify the bracket and solve",
        text: "The difference of reciprocals is (310 − 300)/(300 × 310) = 10/93000:",
      },
      {
        equation:
          "$E_a = \\dfrac{0.3010 \\times 19.147 \\times 300 \\times 310}{10}$",
      },
      { text: "**E_a = 53598.2 J mol^−1 = 53.6 kJ mol^−1**" },
      {
        text: "The Marking Scheme accepts 53598.2 J mol^−1, 53.598 kJ mol^−1 or 53.6 kJ mol^−1, and **deducts ½ mark for a missing or wrong unit**.",
      },
      {
        label: "Worth noticing",
        text: "This is the arithmetic behind the familiar rule of thumb that **a 10 K rise roughly doubles the rate**. It holds near room temperature for reactions with E_a around 50 kJ mol^−1 — which is a very common value, and why the rule works as often as it does.",
      },
      {
        text: "Keep 2.303 × 8.314 = 19.147 to hand; it saves time in every question of this type.",
      },
    ],
  },
  {
    id: "p23c-30",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Reactions of glucose",
    years: [2023],
    question:
      "Write the structure of the product when D-glucose reacts with the following : (any three)\n(a) HI\n(b) Conc. HNO3\n(c) Br2 water\n(d) HCN",
    answer: [
      {
        text: "These four reactions are the classical evidence for the structure of glucose, CHO–(CHOH)4–CH2OH.",
      },
      { label: "(a) With HI on prolonged heating — n-hexane" },
      { equation: "CHO–(CHOH)4–CH2OH ->[HI][Δ] CH3–(CH2)4–CH3" },
      {
        text: "**Product: CH3(CH2)4CH3, n-hexane.** Every oxygen-bearing carbon is reduced without disturbing the skeleton, and the straight-chain product proves the six carbons are joined in an **unbranched chain**.",
      },
      { label: "(b) With concentrated HNO3 — saccharic acid" },
      { equation: "CHO–(CHOH)4–CH2OH ->[conc. HNO3] HOOC–(CHOH)4–COOH" },
      {
        text: "**Product: HOOC–(CHOH)4–COOH, saccharic acid (glucaric acid).** Nitric acid is a strong oxidising agent and oxidises **both** ends — the aldehyde *and* the primary alcohol — to carboxylic acids. This proves the –CH2OH group is present.",
      },
      { label: "(c) With bromine water — gluconic acid" },
      { equation: "CHO–(CHOH)4–CH2OH ->[Br2 water] HOCH2–(CHOH)4–COOH" },
      {
        text: "**Product: HOCH2–(CHOH)4–COOH, gluconic acid.** Bromine water is a **mild** oxidising agent, so only the **aldehyde** is oxidised and the –CH2OH survives. Comparing (b) with (c) is what separates the two ends of the molecule and confirms the –CHO group.",
      },
      { label: "(d) With HCN — the cyanohydrin" },
      { equation: "CHO–(CHOH)4–CH2OH + HCN -> NC–CH(OH)–(CHOH)4–CH2OH" },
      {
        text: "**Product: the cyanohydrin**, with –CN and –OH on what was the aldehyde carbon. This is ordinary **nucleophilic addition** to a carbonyl group, and it is further proof that a free –CHO is present.",
      },
      {
        text: "Only three are required. Taken together the set shows glucose to be a straight-chain, six-carbon compound with one aldehyde group, one primary alcohol and four secondary alcohols.",
      },
    ],
    keyPoint:
      "Br2 water oxidises the aldehyde only (gluconic acid); conc. HNO3 oxidises both ends (saccharic acid).",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION D — case-based, 4 marks each                             */
  /* ---------------------------------------------------------------- */
  {
    id: "p23c-31",
    chapter: 6,
    type: "case-study",
    marks: 4,
    difficulty: "hard",
    topic: "Preparation and substitution",
    years: [2023],
    passage:
      "The polarity of the C–X bond of alkyl halides is responsible for their nucleophilic substitution, elimination and their reaction with metal atoms to form organometallic compounds. Alkyl halides are prepared by the free radical halogenation of alkanes, addition of halogen acids to alkenes, replacement of the –OH group of alcohols with halogens using phosphorus halides, thionyl chloride or halogen acids. Aryl halides are prepared by electrophilic substitution of arenes. Nucleophilic substitution reactions are categorised into S_N1 and S_N2 on the basis of their kinetic properties. Chirality has a profound role in understanding the S_N1 and S_N2 mechanism.",
    question:
      "(i) What happens when bromobenzene is treated with Mg in the presence of dry ether ?\n(ii) Which compound in each of the following pairs will react faster in an S_N1 reaction with OH^− ?\n(1) CH2=CH–CH2–Cl or CH3–CH2–CH2–Cl\n(2) (CH3)3C–Cl or CH3Cl\n(iii) Write the equations for the preparation of 1-iodobutane from\n(1) 1-chlorobutane (2) but-1-ene",
    answer: [
      { label: "(i) Bromobenzene with magnesium in dry ether" },
      { equation: "C6H5Br ->[Mg / dry ether] C6H5MgBr" },
      {
        text: "**Phenylmagnesium bromide** is formed — a **Grignard reagent**. Magnesium inserts itself into the carbon–halogen bond, leaving the ring carbon strongly nucleophilic, effectively a carbanion.",
      },
      {
        text: "The ether is essential: its oxygen lone pairs coordinate to magnesium and keep the reagent in solution. It must be **dry**, because the smallest trace of water destroys the Grignard at once, giving benzene.",
      },
      { label: "(ii) Which reacts faster by S_N1" },
      {
        text: "S_N1 rate follows the stability of the **carbocation** formed in the slow step.",
      },
      {
        table: [
          ["Pair", "Faster", "Carbocation formed", "Why"],
          ["(1)", "**CH2=CH–CH2–Cl**", "Allyl, CH2=CH–CH2^+", "Stabilised by **resonance** with the double bond"],
          ["(2)", "**(CH3)3C–Cl**", "tert-Butyl, (CH3)3C^+", "3°, stabilised by **+I and hyperconjugation**"],
        ],
      },
      {
        text: "In (1) the allylic cation spreads its positive charge over two carbons, so it is far more stable than the primary cation from 1-chloropropane. In (2) the tertiary cation is much more stable than the methyl cation, which is so unstable that CH3Cl effectively never goes by S_N1 — it reacts by S_N2 instead.",
      },
      { label: "(iii) (1) 1-Iodobutane from 1-chlorobutane" },
      { equation: "CH3CH2CH2CH2–Cl + NaI ->[dry acetone] CH3CH2CH2CH2–I + NaCl↓" },
      {
        text: "The **Finkelstein reaction**. It works because NaI dissolves in dry acetone while **NaCl does not** — the precipitate removes chloride from the equilibrium and drags the reaction across.",
      },
      { label: "(iii) (2) 1-Iodobutane from but-1-ene" },
      { equation: "CH3CH2CH=CH2 + HBr ->[peroxide] CH3CH2CH2CH2–Br" },
      { equation: "CH3CH2CH2CH2–Br + NaI ->[dry acetone] CH3CH2CH2CH2–I + NaBr↓" },
      {
        text: "The **peroxide is the key**. HBr alone would add by Markovnikov's rule and put the bromine on C-2, giving the wrong isomer. With peroxide the addition is **anti-Markovnikov** (the Kharasch effect, which works through a free-radical mechanism), so bromine goes to the **terminal** carbon. Finkelstein exchange then gives 1-iodobutane.",
      },
      {
        text: "Note this peroxide effect is observed for **HBr only** — not HCl or HI, whose bond energies make the radical chain unfavourable.",
      },
    ],
    keyPoint:
      "S_N1 favours allylic and 3° halides; the peroxide effect is HBr-only and puts the halogen on the terminal carbon.",
  },
  {
    id: "p23c-32",
    chapter: 5,
    type: "case-study",
    marks: 4,
    difficulty: "hard",
    topic: "Werner's theory and VBT",
    years: [2023],
    passage:
      "Coordination compounds are widely present in minerals, plant and animal worlds and are known to play many important functions in analytical chemistry, metallurgy, biological systems and medicine. Alfred Werner's theory postulated the use of two types of linkages (primary and secondary) by a metal atom/ion in a coordination compound. He predicted the geometrical shapes of a large number of coordination entities using the property of isomerism. The Valence Bond Theory (VBT) explains the formation, magnetic behaviour and geometrical shapes of coordination compounds. It, however, fails to describe the optical properties of these compounds. The Crystal Field Theory (CFT) explains the effect of different crystal fields on the degeneracy of d-orbital energies of the central metal atom/ion.",
    question:
      "(i) When a coordination compound NiCl2 · 6H2O is mixed with AgNO3 solution, 2 moles of AgCl are precipitated per mole of the compound. Write the structural formula of the complex and the secondary valency of the nickel ion.\n(ii) Write the IUPAC name of the ionisation isomer of [Co(NH3)5(SO4)]Cl.\n(iii) Using Valence Bond Theory, predict the geometry and magnetic nature of :\n(1) [Ni(CO)4] (2) [Fe(CN)6]^3−\n[Atomic numbers : Ni = 28, Fe = 26]",
    answer: [
      { label: "(i) Structural formula of NiCl2 · 6H2O" },
      { text: "**[Ni(H2O)6]Cl2**, and the **secondary valency is 6**." },
      {
        text: "Two moles of AgCl per mole of compound means **both** chlorides are free and ionisable, so both sit **outside** the coordination sphere. That leaves the six water molecules to occupy all six coordination positions:",
      },
      { equation: "[Ni(H2O)6]Cl2 -> [Ni(H2O)6]^2+ + 2Cl^−" },
      {
        text: "Secondary valency is Werner's term for the **coordination number**, here 6, and the geometry is octahedral. The **primary** valency is 2, satisfied by the two chloride counter-ions.",
      },
      { label: "(ii) IUPAC name of the ionisation isomer" },
      {
        text: "The ionisation isomer of [Co(NH3)5(SO4)]Cl swaps the two ions between inside and outside the sphere, giving **[Co(NH3)5Cl]SO4**, whose name is:",
      },
      { text: "**Pentaamminechloridocobalt(III) sulphate**" },
      {
        points: [
          "Ligands alphabetically — **ammine** before **chlorido**, the prefix *penta* ignored for alphabetising.",
          "Cobalt's oxidation state: x + 5(0) + (−1) = +2, so **x = +3**.",
          "The counter-ion, sulphate, is named last as a separate word.",
        ],
      },
      {
        text: "The two isomers are easily told apart in the laboratory: the sulphate isomer gives a **white precipitate with BaCl2**, the chloride isomer a **white precipitate with AgNO3**.",
      },
      { label: "(iii) (1) [Ni(CO)4]" },
      { text: "**Tetrahedral and diamagnetic.**" },
      {
        points: [
          "CO is neutral, so nickel is in the **zero** oxidation state: Ni is [Ar] 3d^8 4s^2.",
          "CO is a **very strong field ligand**. The two 4s electrons are pushed into the 3d subshell, which becomes **3d^10** — completely filled.",
          "With 3d full, the 4s and three 4p orbitals hybridise as **sp^3**, giving a **tetrahedral** shape.",
          "**No unpaired electrons** remain, so the complex is **diamagnetic**, μ = 0.",
        ],
      },
      { label: "(iii) (2) [Fe(CN)6]^3−" },
      { text: "**Octahedral and paramagnetic.**" },
      {
        points: [
          "Fe has Z = 26; Fe^3+ is **[Ar] 3d^5**.",
          "CN^− is a **strong field ligand**, so the five d electrons pair as far as they can: t2g^5, leaving **one unpaired electron**.",
          "Two inner 3d orbitals are freed, so the hybridisation is **d^2sp^3** — an **inner orbital** complex — and the shape is **octahedral**.",
          "With one unpaired electron the complex is **paramagnetic**, μ = √(1 × 3) = **1.73 BM**.",
        ],
      },
      {
        text: "Contrast [FeF6]^3−, where the weak field fluoride leaves all five electrons unpaired: **sp^3d^2**, outer orbital, and μ = 5.92 BM.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION E — long answer, 5 marks each                            */
  /* ---------------------------------------------------------------- */
  {
    id: "p23c-33",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Electrode potentials and preparation",
    years: [2023],
    question:
      "(i) Account for the following :\n(1) Transition metals form complex compounds.\n(2) The E°(Mn^2+/Mn) value for manganese is highly negative whereas E°(Mn^3+/Mn^2+) is highly positive.\n(3) Cu^+ ion is unstable in aqueous solution.\n(ii) Write the equations involved in the preparation of KMnO4 from pyrolusite ore (MnO2).",
    answer: [
      { label: "(i) (1) Why transition metals form complexes" },
      {
        text: "Because of their **small size, high ionic charge and the availability of vacant d orbitals** of suitable energy to accept lone pairs from ligands.",
      },
      {
        text: "A small, highly charged cation has a high **charge density**, so it attracts and polarises ligands strongly. The empty d orbitals then provide somewhere for the donated lone pairs to go, and are close enough in energy to the s and p orbitals to hybridise with them.",
      },
      { label: "(i) (2) The two manganese potentials" },
      {
        text: "Both values are explained by the same fact — the stability of the **half-filled 3d^5 configuration of Mn^2+**.",
      },
      {
        table: [
          ["Couple", "E°", "Why"],
          ["Mn^2+/Mn", "**Highly negative** (−1.18 V)", "Forming Mn^2+ reaches the stable half-filled **3d^5** shell, so manganese is oxidised very readily"],
          ["Mn^3+/Mn^2+", "**Highly positive** (+1.51 V)", "Reducing Mn^3+ (d^4) also reaches **3d^5**, so the reduction is strongly favoured"],
        ],
      },
      {
        text: "In other words the d^5 configuration acts as a sink from both directions: manganese metal gives it up its electrons easily to reach it, and Mn^3+ accepts an electron eagerly to fall back to it. The practical consequence is that **Mn^3+ is a powerful oxidising agent**, and manganese metal is unusually reactive for a transition element.",
      },
      { label: "(i) (3) Why Cu^+ is unstable in water" },
      {
        text: "Because it **disproportionates**:",
      },
      { equation: "2Cu^+(aq) -> Cu^2+(aq) + Cu(s)" },
      {
        text: "The driving force is the much more negative **hydration enthalpy of Cu^2+** (about −2121 kJ mol^−1 against −582 for Cu^+). Its higher charge and smaller size bind water molecules far more strongly, and the energy released more than compensates for the second ionisation energy.",
      },
      {
        text: "Cu^+ is perfectly stable where no hydration occurs — in the solid state and in insoluble compounds such as **CuCl** and **Cu2O**. It is specifically aqueous solution that destroys it.",
      },
      { label: "(ii) KMnO4 from pyrolusite, MnO2" },
      { text: "**Step 1 — fusion with alkali in air**, oxidising Mn(IV) to green manganate(VI):" },
      { equation: "2MnO2 + 4KOH + O2 ->[fuse] 2K2MnO4 + 2H2O" },
      { text: "**Step 2 — disproportionation** in acid or neutral solution to purple permanganate:" },
      { equation: "3MnO4^2− + 4H^+ -> 2MnO4^− + MnO2↓ + 2H2O" },
      {
        text: "The second step is a genuine **disproportionation**: of three Mn(VI), two are oxidised to Mn(VII) and one reduced to Mn(IV). The colour change from green to purple marks it, and MnO2 drops out as a brown solid. Industrially the second stage is done by **electrolytic oxidation** instead, which avoids losing a third of the manganese.",
      },
    ],
  },
  {
    id: "p23c-33b",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Identification and equations",
    years: [2023],
    question:
      "(i) Identify the following :\n(1) Transition metal of the 3d series that exhibits only one oxidation state.\n(2) Transition metal of the 3d series that acts as a strong reducing agent in the +2 oxidation state in aqueous solution.\n(ii) Complete and balance the following equations :\n(1) Cr2O7^2− + 14H^+ + 6Fe^2+ ->\n(2) KMnO4 ->[heat]\n(iii) What is Misch metal ? Write its one use.",
    answer: [
      { label: "(i) (1) Only one oxidation state" },
      { text: "**Scandium (Sc)**, which shows only **+3**." },
      {
        text: "Sc is [Ar] 3d^1 4s^2. Losing all three electrons gives Sc^3+ with the stable **argon configuration**, 3d^0. There is no incentive to stop at +1 or +2, and nothing left to remove beyond +3.",
      },
      {
        text: "It is worth noting that this is also why scandium is often **excluded from the transition metals**: Sc^3+ has an empty d subshell, so its compounds are colourless and diamagnetic. Zinc is the other end of the same argument, with a full d subshell and only +2.",
      },
      { label: "(i) (2) Strong reducing agent in +2" },
      { text: "**Chromium (Cr)** — the Marking Scheme also accepts **iron (Fe)**." },
      {
        text: "**Cr^2+ is d^4**, and losing one electron takes it to **Cr^3+, d^3** — the stable half-filled t2g^3 set. Reaching that configuration is so favourable that Cr^2+ readily gives up an electron, making it a strong reducing agent; E°(Cr^3+/Cr^2+) = −0.41 V.",
      },
      {
        text: "Fe^2+ (d^6) is also reducing, going to **Fe^3+ (d^5)** and the stable half-filled shell, though less strongly: E°(Fe^3+/Fe^2+) = +0.77 V, so it reduces only moderately powerful oxidants.",
      },
      { label: "(ii) (1) Dichromate oxidising iron(II)" },
      { equation: "Cr2O7^2− + 14H^+ + 6Fe^2+ -> 2Cr^3+ + 6Fe^3+ + 7H2O" },
      {
        text: "Each chromium falls from +6 to +3, taking 6 electrons between the two; each iron rises from +2 to +3, giving 6 electrons in total. The charges balance as well as the atoms: the left side carries (−2) + 14 + 12 = **+24**, and the right 6 + 18 = **+24**.",
      },
      {
        text: "This is the basis of the standard **volumetric estimation of iron(II)** with potassium dichromate.",
      },
      { label: "(ii) (2) Thermal decomposition of KMnO4" },
      { equation: "2KMnO4 ->[Δ][513 K] K2MnO4 + MnO2 + O2↑" },
      {
        text: "Heating decomposes permanganate to potassium manganate, manganese dioxide and **oxygen gas**. Manganese disproportionates once more: of two Mn(VII), one falls to Mn(VI) and the other to Mn(IV), while oxygen is oxidised from −2 to 0.",
      },
      { label: "(iii) Misch metal" },
      {
        text: "An **alloy of lanthanoids** — roughly **95% lanthanoid metal with about 5% iron**, together with traces of sulphur, carbon, calcium and aluminium.",
      },
      {
        text: "**Use:** in **bullets, shells and lighter flints** — any one earns the mark. It is also used to improve the strength and workability of magnesium alloys, and about 95% of the Misch metal produced goes into steels of that kind.",
      },
      {
        text: "The flint application works because the alloy is **pyrophoric**: scraping it throws off fine particles that ignite spontaneously in air.",
      },
    ],
  },
  {
    id: "p23c-34",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Structure determination and named reactions",
    years: [2023],
    question:
      "(i) An organic compound (X) having molecular formula C5H10O can show various properties depending on its structure. Draw each of the structures if it\n(1) gives a positive iodoform test.\n(2) shows Cannizzaro's reaction.\n(3) reduces Tollens' reagent and has a chiral carbon.\n(ii) Write the reaction involved in the following :\n(1) Wolff-Kishner reduction (2) Hell-Volhard-Zelinsky reaction",
    answer: [
      {
        text: "C5H10O has **one degree of unsaturation**, which here is the C=O group — so every structure is a five-carbon aldehyde or ketone.",
      },
      { label: "(i) (1) Positive iodoform test" },
      { text: "**CH3–CH2–CH2–CO–CH3, pentan-2-one.**" },
      {
        text: "The iodoform test needs a **CH3–CO–** group (or a CH3–CH(OH)– that can be oxidised to one). Pentan-2-one has its carbonyl at position 2 with a methyl attached, so it gives the yellow precipitate of CHI3.",
      },
      { equation: "CH3–CO–CH2CH2CH3 ->[I2 / NaOH] CHI3↓ + CH3CH2CH2COONa" },
      { label: "(i) (2) Shows Cannizzaro's reaction" },
      { text: "**(CH3)3C–CHO, 2,2-dimethylpropanal.**" },
      {
        text: "Cannizzaro's reaction requires an aldehyde with **no α-hydrogen**. Here the carbon next to –CHO is a quaternary carbon bearing three methyl groups and **no hydrogen at all**, so the molecule cannot enolise and disproportionates instead:",
      },
      { equation: "2(CH3)3C–CHO ->[conc. NaOH] (CH3)3C–CH2OH + (CH3)3C–COO^−Na^+" },
      { label: "(i) (3) Reduces Tollens' reagent and has a chiral carbon" },
      { text: "**CH3–CH2–CH(CH3)–CHO, 2-methylbutanal.**" },
      {
        text: "Reducing Tollens' reagent means it must be an **aldehyde**. For a chiral carbon, one carbon must carry four different groups — and C-2 here holds **H, CH3, C2H5 and CHO**, all different. So the molecule is chiral and exists as a pair of enantiomers.",
      },
      {
        text: "Note how the three parts pull in different directions: (1) forces a **ketone**, (2) forces an aldehyde with **no α-H**, and (3) forces an aldehyde that **does** have an α-H and a stereocentre there.",
      },
      { label: "(ii) (1) Wolff-Kishner reduction" },
      {
        text: "A carbonyl group is reduced all the way to **–CH2–**, by way of the hydrazone:",
      },
      { equation: "R2C=O + NH2–NH2 ->[−H2O] R2C=N–NH2" },
      { equation: "R2C=N–NH2 ->[KOH / ethylene glycol][Δ, 453–473 K] R2CH2 + N2↑" },
      {
        text: "The condensation with **hydrazine** gives the hydrazone, which on heating with a strong base in a high-boiling solvent loses nitrogen and leaves the methylene group. It is the method of choice when the molecule contains **acid-sensitive** groups — the alternative, **Clemmensen reduction** with Zn–Hg and concentrated HCl, does the same job under acidic conditions.",
      },
      { label: "(ii) (2) Hell-Volhard-Zelinsky reaction" },
      {
        text: "Halogenation specifically at the **α-carbon** of a carboxylic acid:",
      },
      { equation: "R–CH2–COOH ->[(i) X2 / red P][(ii) H2O] R–CHX–COOH \\quad (X = Cl, Br)" },
      {
        text: "Red phosphorus converts the acid to the **acyl halide** in situ. That enolises far more readily than the acid itself, the halogen attacks the enol at the α position, and hydrolysis restores the –COOH group.",
      },
      {
        text: "The reaction is genuinely useful because the α-halo acid it produces is a gateway to α-hydroxy and **α-amino acids** by simple nucleophilic substitution. Note it needs an **α-hydrogen**, so methanoic acid and benzoic acid do not respond.",
      },
    ],
    keyPoint:
      "Iodoform needs CH3–CO–; Cannizzaro needs no α-H; a chiral aldehyde needs four different groups on one carbon.",
  },
  {
    id: "p23c-34b",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Conversions and ordering",
    years: [2023],
    question:
      "(i) How can you convert each of the following compounds to benzoic acid ?\n(1) Acetophenone (2) Ethylbenzene (3) Bromobenzene\n(ii) Arrange the following compounds in increasing order of their property as indicated :\n(1) O2N–CH2–COOH, F–CH2–COOH, CN–CH2COOH (acidic character)\n(2) Ethanal, propanal, butanone, propanone (reactivity in nucleophilic addition)",
    answer: [
      { label: "(i) (1) Acetophenone to benzoic acid" },
      { equation: "C6H5–CO–CH3 ->[(i) KMnO4–KOH, Δ][(ii) H3O^+] C6H5COOH" },
      {
        text: "Strong alkaline permanganate oxidises the side chain right down to the carboxyl group, the methyl carbon being lost. The potassium benzoate formed is acidified to free the acid.",
      },
      { label: "(i) (2) Ethylbenzene to benzoic acid" },
      { equation: "C6H5–CH2CH3 ->[(i) KMnO4–KOH, Δ][(ii) H3O^+] C6H5COOH" },
      {
        text: "The same reagent does the job. Whatever the length of the alkyl side chain, oxidation cuts it back to a **single –COOH** attached to the ring — provided there is a **benzylic hydrogen**. (tert-Butylbenzene, having none, resists oxidation entirely.)",
      },
      { label: "(i) (3) Bromobenzene to benzoic acid" },
      { equation: "C6H5Br ->[Mg / dry ether] C6H5MgBr" },
      { equation: "C6H5MgBr ->[(i) CO2, dry ice][(ii) H3O^+] C6H5COOH" },
      {
        text: "Here the carbon has to be **added**, not removed. The Grignard reagent's nucleophilic carbon attacks carbon dioxide to give the magnesium carboxylate, which hydrolysis converts to the acid. Solid CO2 (dry ice) is used so the reaction stays cold and stops cleanly at the acid.",
      },
      { label: "(ii) (1) Increasing acidic character" },
      { text: "**NC–CH2–COOH < F–CH2–COOH < O2N–CH2–COOH**" },
      {
        text: "All three substituents withdraw electron density and so stabilise the carboxylate ion, strengthening the acid; the order follows the **strength of the −I effect**. The nitro group is the most powerful electron-withdrawing group of the three, fluorine the most electronegative single atom but acting only inductively, and cyano somewhat weaker.",
      },
      {
        text: "The Marking Scheme accepts **F–CH2–COOH < NC–CH2–COOH < O2N–CH2–COOH** as well, the fluoro and cyano acids being close enough (pK_a 2.59 and 2.47) that either order is allowed. What is not negotiable is that the **nitro acid is the strongest**.",
      },
      { label: "(ii) (2) Increasing reactivity in nucleophilic addition" },
      { text: "**Butanone < propanone < propanal < ethanal**" },
      {
        table: [
          ["Compound", "Groups on the carbonyl carbon", "Class"],
          ["Butanone, CH3COC2H5", "methyl + ethyl", "Ketone — most hindered"],
          ["Propanone, CH3COCH3", "two methyls", "Ketone"],
          ["Propanal, C2H5CHO", "ethyl + H", "Aldehyde"],
          ["**Ethanal, CH3CHO**", "methyl + H", "Aldehyde — least hindered"],
        ],
      },
      {
        text: "Reactivity falls as alkyl groups are added, for two reasons working together: the **+I effect** reduces the δ+ on the carbonyl carbon, and **steric hindrance** blocks the nucleophile's approach. Hence **aldehydes > ketones** throughout, and within each class the smaller alkyl group reacts faster.",
      },
    ],
  },
  {
    id: "p23c-35",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "Nernst equation",
    years: [2023],
    question:
      "(a) Calculate the emf of the following cell at 25 °C :\nZn (s) | Zn^2+ (0.1 M) || H^+ (0.01 M) | H2 (g) (1 bar), Pt (s)\n[Given : E°(Zn^2+/Zn) = −0.76 V, E°(H^+/H2) = 0.00 V, log 10 = 1]\n(b) State Kohlrausch's law of independent migration of ions. Why does the conductivity of a solution decrease with dilution ?",
    answer: [
      { label: "(a) Step 1 — the cell reaction and E°" },
      {
        text: "Zinc is on the left, so it is the **anode** and is oxidised; the hydrogen electrode is the cathode.",
      },
      { equation: "Zn(s) + 2H^+(aq) -> Zn^2+(aq) + H2(g)" },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.00 - (-0.76) = 0.76\\ \\text{V}$" },
      { text: "Two electrons are transferred, so **n = 2**." },
      { label: "Step 2 — apply the Nernst equation" },
      {
        text: "The reaction quotient takes products over reactants. H2 is at 1 bar so it does not appear, and note that [H^+] is **squared** because two H^+ are consumed:",
      },
      {
        equation:
          "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.059}{2}\\log\\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{H^+}]^2}$",
      },
      { label: "Step 3 — substitute" },
      { equation: "$E_{cell} = 0.76 - \\dfrac{0.059}{2}\\log\\dfrac{0.1}{(0.01)^2}$" },
      {
        text: "The quotient is 0.1/0.0001 = 1000 = 10^3, so log Q = 3:",
      },
      { equation: "$E_{cell} = 0.76 - \\dfrac{0.059 \\times 3}{2} = 0.76 - 0.0885$" },
      { text: "**E_cell = 0.671 V**" },
      {
        text: "The scheme **deducts ½ mark for a missing or incorrect unit**. Squaring [H^+] is where most marks are lost here — forgetting it gives log 10 = 1 and the wrong answer of 0.7305 V.",
      },
      { label: "(b) Kohlrausch's law of independent migration" },
      {
        text: "**The limiting molar conductivity of an electrolyte is the sum of the individual contributions of its cation and anion**, each ion migrating independently of the other at infinite dilution.",
      },
      { equation: "$\\Lambda^\\circ_m = \\nu_+\\lambda^\\circ_+ + \\nu_-\\lambda^\\circ_-$" },
      {
        text: "Its practical value is for **weak** electrolytes, whose Λ°_m cannot be found by extrapolating a graph; it is assembled from strong-electrolyte data instead.",
      },
      { label: "Why conductivity falls on dilution" },
      {
        text: "Because the **number of ions per unit volume decreases.**",
      },
      {
        text: "Conductivity κ is the conductance of **unit volume** of solution. Dilution does not change how many ions exist in total, but it spreads them through more solvent, so any given cubic centimetre contains fewer charge carriers and conducts less well.",
      },
      {
        text: "This is the exact opposite of what happens to **molar conductivity**, which *rises* on dilution because it is reckoned per mole rather than per unit volume — the same ions, now less hindered by one another, each carry more current. Both statements are true at once.",
      },
    ],
    keyPoint:
      "Square the H^+ term in Q. Dilution lowers κ (per unit volume) but raises Λ_m (per mole).",
  },
];
