import type { Question } from "@/types";

/**
 * CBSE 2023 Main, paper 56/1/1 Set-1 — the whole paper, all 35 questions.
 *
 * Organised by paper rather than by chapter, following p2022-term2.ts: the
 * questions come from one sitting, and keeping their provenance together makes
 * them checkable against the original. The `chapter` field still routes each
 * one to its unit.
 *
 * Unlike the 2022 Term-II file, the answers here are **not** written from
 * scratch — this PDF carries CBSE's own Marking Scheme, so every answer below
 * follows the board's expected value points, with the working spelled out.
 * Where the scheme allows alternatives ("or any other correct method") that is
 * said explicitly, because knowing what else earns the mark is worth as much as
 * the model answer.
 *
 * Two questions carry board errata, recorded rather than silently corrected:
 * Q6 (full marks for any option) and Q13 ("amylase" printed for "amylose").
 */
export const P2023_5611: Question[] = [
  /* ---------------------------------------------------------------- */
  /* SECTION A — MCQ, 1 mark each                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "p23a-1",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Colligative properties",
    years: [2023],
    question:
      "The colligative property used for the determination of molar mass of polymers and proteins is :",
    options: [
      "Osmotic pressure",
      "Depression in freezing point",
      "Relative lowering in vapour pressure",
      "Elevation in boiling point",
    ],
    correct: 0,
    answer: [
      { text: "**Osmotic pressure.**" },
      {
        text: "A polymer or protein has a very large molar mass, so even a saturated solution is extremely dilute in _(moles)_. The other three properties depend on molality, and for such a solution ΔT_f and ΔT_b come out far too small to measure reliably — a fraction of a millikelvin.",
      },
      {
        text: "Osmotic pressure is the exception because it is large even at low concentration:",
      },
      { equation: "$\\pi = CRT$" },
      {
        text: "At 298 K a solution of just 10^−3 mol L^−1 still develops about 0.025 atm — roughly 19 mm Hg, easily measured. Osmometry also runs at room temperature, which matters because proteins denature on heating.",
      },
    ],
    keyPoint:
      "Osmotic pressure wins for macromolecules: it is measurable at very low concentration and needs no heating.",
  },
  {
    id: "p23a-2",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Henry's law",
    years: [2023],
    question:
      "Low concentration of oxygen in the blood and tissues of people living at high altitude is due to :",
    options: [
      "high atmospheric pressure",
      "low temperature",
      "low atmospheric pressure",
      "both low temperature and high atmospheric pressure",
    ],
    correct: 2,
    answer: [
      { text: "**Low atmospheric pressure.**" },
      {
        text: "By Henry's law the amount of a gas dissolved in a liquid is proportional to its partial pressure over the liquid:",
      },
      { equation: "p = K_H × x" },
      {
        text: "At high altitude the total atmospheric pressure is lower, so the **partial pressure of oxygen** is lower too. Less O2 dissolves in the blood, and the low blood-oxygen level causes the weakness and clouded thinking known as **anoxia**.",
      },
      {
        text: "Note the composition of air barely changes with altitude — it is still about 21% oxygen. What falls is the pressure, and therefore p(O2).",
      },
    ],
  },
  {
    id: "p23a-3",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Galvanic cells",
    years: [2023],
    question: "The correct cell to represent the following reaction is :\nZn + 2Ag^+ -> Zn^2+ + 2Ag",
    options: [
      "2Ag | Ag^+ || Zn | Zn^2+",
      "Ag^+ | Ag || Zn^2+ | Zn",
      "Ag | Ag^+ || Zn | Zn^2+",
      "Zn | Zn^2+ || Ag^+ | Ag",
    ],
    correct: 3,
    answer: [
      { text: "**Zn | Zn^2+ || Ag^+ | Ag**" },
      {
        text: "Cell notation is written **anode on the left, cathode on the right**, with the salt bridge shown as the double bar.",
      },
      {
        label: "Read the reaction first",
        points: [
          "Zn -> Zn^2+ + 2e^− — zinc loses electrons, so zinc is **oxidised** and is the **anode**, written on the left.",
          "Ag^+ + e^− -> Ag — silver ion gains electrons, so it is **reduced** and silver is the **cathode**, written on the right.",
        ],
      },
      {
        text: "Within each half-cell the species are written in the order they are met going outward from the salt bridge, so the anode reads metal | ion and the cathode reads ion | metal — giving Zn | Zn^2+ || Ag^+ | Ag.",
      },
      {
        text: "Option (b) has the right layout but the halves swapped; (c) puts silver on the left; (a) is wrong on both counts.",
      },
    ],
    keyPoint: "Anode left, cathode right; metal | ion on the left, ion | metal on the right.",
  },
  {
    id: "p23a-4",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Gibbs energy and emf",
    years: [2023],
    question: "ΔG and E°_cell for a spontaneous reaction will be :",
    options: [
      "positive, negative",
      "negative, negative",
      "negative, positive",
      "positive, positive",
    ],
    correct: 2,
    answer: [
      { text: "**Negative, positive.**" },
      { equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell}$" },
      {
        text: "n and F are both positive, so ΔG° and E°_cell must always carry **opposite signs**. A reaction is spontaneous when ΔG° is negative, which forces E°_cell to be positive.",
      },
      {
        text: "That is the physical picture too: a cell that drives current through an external circuit does useful work, and a positive cell potential is exactly what does the driving.",
      },
    ],
  },
  {
    id: "p23a-5",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Catalysis and activation energy",
    years: [2023],
    question: "Which of the following is affected by catalyst ?",
    options: ["ΔH", "ΔG", "E_a", "ΔS"],
    correct: 2,
    answer: [
      { text: "**E_a, the activation energy.**" },
      {
        text: "A catalyst provides an **alternative path** with a lower activation energy, so more molecules clear the barrier and the rate rises.",
      },
      {
        text: "It does not touch the thermodynamics. ΔH, ΔG and ΔS are **state functions** — they depend only on the initial and final states, and the catalyst changes neither. That is why a catalyst cannot make a non-spontaneous reaction go, and why it speeds the forward and backward reactions equally, leaving the equilibrium constant unchanged.",
      },
    ],
    keyPoint: "A catalyst lowers E_a only; ΔH, ΔG and ΔS are state functions and are untouched.",
  },
  {
    id: "p23a-6",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Order of reaction",
    years: [2023],
    question: "The order of the reaction\nH2 (g) + Cl2 (g) ->[hν] 2HCl (g)\nis :",
    options: ["2", "1", "0", "3"],
    correct: 2,
    answer: [
      { text: "**Zero.**" },
      {
        text: "This is a **photochemical** reaction: the chlorine molecule is split into radicals by absorbed light, not by collision. The rate is therefore fixed by the **intensity of the light**, not by how much H2 or Cl2 is present, so the concentration terms drop out of the rate law.",
      },
      { equation: "$\\text{Rate} = k[\\mathrm{H_2}]^0[\\mathrm{Cl_2}]^0 = k$" },
      {
        label: "Board erratum",
        text: "The official Marking Scheme gives (c) but adds _(\"Full mark to be awarded for any option\")_. CBSE accepted every answer here, presumably because the question does not state that the light intensity is held constant. The chemistry worth carrying forward is still that a photochemical reaction of this type is zero order.",
      },
    ],
  },
  {
    id: "p23a-7",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Lanthanoids",
    years: [2023],
    question: "The most common and stable oxidation state of a Lanthanoid is :",
    options: ["+ 2", "+ 3", "+ 4", "+ 6"],
    correct: 1,
    answer: [
      { text: "**+3.**" },
      {
        text: "A lanthanoid has the configuration [Xe] 4f^n 5d^0−1 6s^2. Losing the two 6s electrons and one more (from 5d or 4f) gives the **+3** ion, and the 4f electrons that remain are buried deep inside the atom, shielded by the filled 5s and 5p shells, so they take almost no part in bonding.",
      },
      {
        text: "Other states appear only where they buy a stable f-configuration: Ce^4+ (f^0), Eu^2+ (f^7) and Yb^2+ (f^14). These are the exceptions that prove the rule, and each reverts to +3 readily — Ce^4+ is a good oxidising agent, Eu^2+ a good reducing agent.",
      },
    ],
  },
  {
    id: "p23a-8",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Isomerism in coordination compounds",
    years: [2023],
    question:
      "The compounds [Co(SO4)(NH3)5] Br and [Co(Br)(NH3)5] SO4 represent :",
    options: [
      "optical isomerism",
      "linkage isomerism",
      "ionisation isomerism",
      "coordination isomerism",
    ],
    correct: 2,
    answer: [
      { text: "**Ionisation isomerism.**" },
      {
        text: "The two compounds have the **same molecular formula** but exchange which ion sits inside the coordination sphere and which is the free counter-ion. On dissolving they therefore give **different ions**:",
      },
      {
        table: [
          ["Compound", "Ion inside", "Ion released", "Test"],
          ["[Co(SO4)(NH3)5]Br", "SO4^2−", "Br^−", "gives pale-yellow AgBr with AgNO3"],
          ["[Co(Br)(NH3)5]SO4", "Br^−", "SO4^2−", "gives white BaSO4 with BaCl2"],
        ],
      },
      {
        text: "Distinguish it from the near neighbours: **linkage** isomerism needs an ambidentate ligand such as NO2^− or SCN^− binding through a different atom; **coordination** isomerism needs _(two)_ metal centres swapping ligands; **optical** isomerism needs a non-superimposable mirror image.",
      },
    ],
    keyPoint:
      "Ionisation isomers swap a ligand with the counter-ion, so they give different ions in solution.",
  },
  {
    id: "p23a-9",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Named reactions",
    years: [2023],
    question: "The synthesis of alkyl fluoride is best obtained from :",
    options: [
      "Free radicals",
      "Swarts reaction",
      "Sandmeyer reaction",
      "Finkelstein reaction",
    ],
    correct: 1,
    answer: [
      { text: "**Swarts reaction.**" },
      {
        text: "An alkyl chloride or bromide is heated with a **metallic fluoride** — AgF, Hg2F2, CoF2 or SbF3:",
      },
      { equation: "CH3–Br + AgF -> CH3–F + AgBr" },
      {
        label: "Why not the others",
        points: [
          "**Finkelstein** swaps a chloride or bromide for **iodide**, using NaI in dry acetone. The reaction is driven by NaCl and NaBr being insoluble in acetone, so it cannot be turned round to make fluorides.",
          "**Sandmeyer** replaces a diazonium group on an _(aromatic)_ ring with Cl, Br or CN using a copper(I) halide — it makes haloarenes, not alkyl halides, and not fluorides.",
          "**Free-radical** halogenation with F2 is violently exothermic and gives a mixture, so it is useless preparatively.",
        ],
      },
    ],
  },
  {
    id: "p23a-10",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Reactions of alcohols",
    years: [2023],
    question:
      "In the reaction R–OH + HCl ->[ZnCl2] RCl + H2O, what is the correct order of reactivity of alcohol ?",
    options: ["1° < 2° < 3°", "1° > 3° > 2°", "1° > 2° > 3°", "3° > 1° > 2°"],
    correct: 0,
    answer: [
      { text: "**1° < 2° < 3°**" },
      {
        text: "Concentrated HCl with anhydrous ZnCl2 is the **Lucas reagent**, and it works through an **S_N1** path: the ZnCl2 coordinates to the –OH oxygen, turning it into a good leaving group, and a **carbocation** forms.",
      },
      {
        text: "Reactivity therefore follows carbocation stability, 3° > 2° > 1°, because the alkyl groups around the positive carbon release electron density (+I) and hyperconjugation spreads the charge.",
      },
      {
        label: "The Lucas test",
        text: "This is exactly what makes the test work: a **3°** alcohol clouds at once, a **2°** alcohol in about five minutes, and a **1°** alcohol only on heating.",
      },
      {
        text: "Careful with the direction of the inequality — the question asks for the order as written, and the answer is the _(increasing)_ series 1° < 2° < 3°.",
      },
    ],
  },
  {
    id: "p23a-11",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Hoffmann bromamide reaction",
    years: [2023],
    question: "CH3CONH2 on reaction with NaOH and Br2 in alcoholic medium gives :",
    options: ["CH3COONa", "CH3NH2", "CH3CH2Br", "CH3CH2NH2"],
    correct: 1,
    answer: [
      { text: "**CH3NH2, methanamine.**" },
      {
        text: "This is the **Hoffmann bromamide degradation**: an amide with Br2 and strong alkali gives a primary amine with **one carbon fewer** than the amide.",
      },
      { equation: "CH3CONH2 + Br2 + 4NaOH -> CH3NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        text: "The carbon lost is the **carbonyl carbon**, which leaves as carbonate. Ethanamide has two carbons, so the amine has one — CH3NH2, ruling out both (c) and (d).",
      },
      {
        text: "The mechanism runs through an **isocyanate** intermediate (CH3–N=C=O) formed by migration of the methyl group from carbon to nitrogen; the isocyanate is then hydrolysed by the alkali.",
      },
    ],
    keyPoint: "Hoffmann bromamide shortens the chain by one carbon: RCONH2 -> R–NH2.",
  },
  {
    id: "p23a-12",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Basic character of amines",
    years: [2023],
    question: "Which of the following is least basic ?",
    options: ["(CH3)2NH", "NH3", "C6H5NH2 (aniline)", "(CH3)3N"],
    correct: 2,
    answer: [
      { text: "**Aniline, C6H5NH2.**" },
      {
        text: "In aniline the nitrogen lone pair is **delocalised into the benzene ring** through resonance, so it is much less available for donation to a proton. The other three are alkyl amines, where the alkyl groups push electron density _(towards)_ nitrogen and make the lone pair more available than in ammonia.",
      },
      {
        text: "There is a second reason: protonating aniline destroys the resonance stabilisation, so the anilinium ion is relatively unstable — which shifts the equilibrium back towards the free amine.",
      },
      {
        text: "Numerically the gap is large. pK_b for aniline is about **9.4** against roughly **3.3** for dimethylamine, a factor of some 10^6 in basicity.",
      },
    ],
  },
  {
    id: "p23a-13",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Polysaccharides",
    years: [2023],
    question:
      "The glycosidic linkage involved in linking the glucose units in the amylose part of starch is :",
    options: [
      "C1–C6 α linkage",
      "C1–C6 β linkage",
      "C1–C4 α linkage",
      "C1–C4 β linkage",
    ],
    correct: 2,
    answer: [
      { text: "**C1–C4 α linkage.**" },
      {
        text: "Starch has two components. **Amylose** is the long unbranched one — about 15–20% of starch — and it is built from α-D-glucose units joined **C1 to C4**. The α linkage makes the chain coil into a helix, which is what traps iodine and gives the familiar blue colour.",
      },
      {
        text: "**Amylopectin**, the other 80–85%, is branched: it has the same C1–C4 α backbone but adds **C1–C6 α** links at the branch points, roughly every 20–25 units.",
      },
      {
        text: "The β linkage in option (d) belongs to **cellulose** — C1–C4 β — and that single change of stereochemistry is why we can digest starch but not cellulose.",
      },
      {
        label: "Board erratum",
        text: "The printed paper says _(\"amylase\")_, which is the enzyme, where it means _(\"amylose\")_, the polysaccharide. The Marking Scheme gives (c) and directs that **full marks be awarded if attempted**, noting the printing error.",
      },
    ],
  },
  {
    id: "p23a-14",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Proteins",
    years: [2023],
    question: "An α-helix is a structural feature of :",
    options: ["Sucrose", "Starch", "Polypeptides", "Nucleotides"],
    correct: 2,
    answer: [
      { text: "**Polypeptides.**" },
      {
        text: "The α-helix is one of the two **secondary structures** of a protein, the other being the β-pleated sheet. The polypeptide chain coils into a right-handed spiral held by **intramolecular hydrogen bonds** between the C=O of one residue and the N–H of the residue four places along.",
      },
      {
        text: "The others are ruled out by what they are: sucrose is a disaccharide, starch a polysaccharide (its amylose does coil, but into a helix stabilised differently and never called an α-helix), and nucleotides are the building blocks of nucleic acids, whose helix is the _(double)_ helix of DNA.",
      },
    ],
  },
  {
    id: "p23a-15",
    chapter: 9,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Reactions of aniline",
    years: [2023],
    question:
      "Assertion (A) : —NH2 group is o- and p-directing in electrophilic substitution reactions.\nReason (R) : Aniline cannot undergo Friedel-Crafts reaction.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
      "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).",
      "Assertion (A) is true, but Reason (R) is false.",
      "Assertion (A) is false, but Reason (R) is true.",
    ],
    correct: 1,
    answer: [
      { text: "**(b)** — both statements are true, but R does not explain A." },
      {
        label: "A is true",
        text: "The nitrogen lone pair is donated into the ring (+R effect), and the resonance structures put the negative charge specifically at the **ortho and para** positions. Those carbons are therefore the electron-rich ones an electrophile attacks.",
      },
      {
        label: "R is also true",
        text: "Aniline fails Friedel-Crafts. The catalyst AlCl3 is a Lewis acid and the amino nitrogen is a Lewis base, so they form an **acid–base complex** C6H5NH2·AlCl3. The nitrogen now carries a positive charge, which makes it strongly deactivating (−I), and the ring will not react.",
      },
      {
        label: "Why R is not the explanation",
        text: "The two statements rest on **opposite** electronic effects. A follows from the lone pair being _(donated into the ring)_; R follows from that same lone pair being _(tied up by AlCl3)_ so it cannot be donated at all. R describes a limitation of aniline, not the reason for its directing power — so the answer is (b), not (a).",
      },
    ],
    keyPoint:
      "Both true, but unrelated: —NH2 directs o,p by donating its lone pair; Friedel-Crafts fails because AlCl3 takes that lone pair away.",
  },
  {
    id: "p23a-16",
    chapter: 9,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Acetylation of aniline",
    years: [2023],
    question:
      "Assertion (A) : Acetylation of aniline gives a monosubstituted product.\nReason (R) : Activating effect of —NHCOCH3 group is more than that of amino group.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
      "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).",
      "Assertion (A) is true, but Reason (R) is false.",
      "Assertion (A) is false, but Reason (R) is true.",
    ],
    correct: 2,
    answer: [
      { text: "**(c)** — A is true, R is false." },
      {
        label: "A is true",
        text: "Acetylation converts aniline into **acetanilide**, C6H5NHCOCH3, and stops cleanly at the single substitution on nitrogen.",
      },
      { equation: "C6H5NH2 + (CH3CO)2O ->[pyridine] C6H5NHCOCH3 + CH3COOH" },
      {
        label: "R is false — it states the effect backwards",
        text: "The —NHCOCH3 group is **less** activating than —NH2, not more. In acetanilide the nitrogen lone pair is pulled towards the neighbouring **carbonyl group**, which competes with the ring for it, so less electron density reaches the ring.",
      },
      {
        label: "Why this matters in practice",
        text: "That reduced activation is precisely the point of acetylation as a **protecting step**. Aniline itself is so activated that bromination runs straight to 2,4,6-tribromoaniline; acetylating first tames the ring so that bromination stops at the **para** product, and the protecting group is then hydrolysed off to give p-bromoaniline.",
      },
    ],
  },
  {
    id: "p23a-17",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Molecularity",
    years: [2023],
    question:
      "Assertion (A) : The molecularity of the reaction H2 + Br2 -> 2HBr appears to be 2.\nReason (R) : Two molecules of the reactants are involved in the given elementary reaction.",
    options: [
      "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
      "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).",
      "Assertion (A) is true, but Reason (R) is false.",
      "Assertion (A) is false, but Reason (R) is true.",
    ],
    correct: 0,
    answer: [
      { text: "**(a)** — both true, and R is the correct explanation of A." },
      {
        text: "**Molecularity** is the number of reacting species that come together in a single elementary step. The equation as written shows one H2 and one Br2 — two species — so the molecularity _(appears)_ to be 2, which is **bimolecular**.",
      },
      {
        text: "R states exactly that, so it is both true and the reason A holds.",
      },
      {
        label: "Why the question says \"appears to be\"",
        text: "The real H2 + Br2 reaction is **not** elementary: it runs through a radical chain, and its experimental rate law is the famously awkward",
      },
      {
        equation:
          "$\\text{Rate} = \\dfrac{k[\\mathrm{H_2}][\\mathrm{Br_2}]^{1/2}}{1 + k'[\\mathrm{HBr}]/[\\mathrm{Br_2}]}$",
      },
      {
        text: "That is why molecularity may only be quoted for an elementary step, while **order** is an experimental quantity that can be fractional. Read alongside R's stipulation \"the given elementary reaction\", the assertion stands.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION B — very short answer, 2 marks each                      */
  /* ---------------------------------------------------------------- */
  {
    id: "p23a-19",
    chapter: 1,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Henry's law",
    years: [2023],
    question: "What is Henry's law ? Give one application of it.",
    answer: [
      {
        label: "Statement",
        text: "**The partial pressure of a gas in the vapour phase is directly proportional to the mole fraction of that gas in the solution.**",
      },
      { equation: "p = K_H × x" },
      {
        text: "Here p is the partial pressure of the gas, x its mole fraction in solution, and K_H the **Henry's law constant**. A larger K_H means a _(less)_ soluble gas, and K_H rises with temperature — which is why dissolved gases are driven out of water on warming.",
      },
      {
        label: "Applications — any one earns the mark",
        points: [
          "**Soft drinks and soda water** are sealed under high CO2 pressure, so that a high partial pressure keeps a large amount of the gas dissolved.",
          "**Deep-sea divers.** Breathing air under pressure dissolves extra N2 in the blood; on surfacing, the pressure drops and the gas bubbles out, causing the painful and dangerous condition known as **bends**. Divers' tanks therefore use oxygen diluted with **helium**, which is far less soluble.",
          "**Climbers at high altitude.** The low partial pressure of oxygen means less O2 dissolves in the blood, producing the weakness and mental confusion of **anoxia**.",
        ],
      },
    ],
    keyPoint: "p = K_H x. A big K_H means a poorly soluble gas; K_H rises with temperature.",
  },
  {
    id: "p23a-20",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Molar conductivity",
    years: [2023],
    question:
      "On diluting two electrolytes 'A' and 'B', the Λ_m of 'A' increases 25 times while that of 'B' increases by 1.5 times. Which of the two electrolytes is strong ? Justify your answer graphically.",
    answer: [
      { text: "**'B' is the strong electrolyte.**" },
      {
        label: "Why the size of the rise gives it away",
        text: "Molar conductivity rises on dilution for _(both)_ kinds of electrolyte, but for completely different reasons and by completely different amounts.",
      },
      {
        table: [
          ["", "Strong electrolyte ('B')", "Weak electrolyte ('A')"],
          ["Already dissociated?", "Fully, at all concentrations", "Only partly"],
          ["Why Λ_m rises on dilution", "Ions get further apart, so interionic attraction falls", "Degree of dissociation α rises sharply"],
          ["Size of the rise", "Small — here 1.5 times", "Large — here 25 times"],
          ["Shape of the plot", "Almost linear in √c", "Rises very steeply near c → 0"],
        ],
      },
      {
        label: "The graph",
        text: "Plotting Λ_m against √c: **B** gives a nearly straight line of small slope that can be extrapolated back to the intercept Λ°_m. **A** stays low and flat over most of the range, then sweeps sharply upward as c approaches zero, so its Λ°_m **cannot** be found by extrapolation — it has to come from Kohlrausch's law instead.",
      },
      { equation: "$\\Lambda_m = \\Lambda^\\circ_m - A\\sqrt{c} \\qquad \\text{(strong electrolytes only)}$" },
    ],
    keyPoint:
      "A small rise in Λ_m on dilution means a strong electrolyte; a steep rise means a weak one.",
  },
  {
    id: "p23a-20b",
    chapter: 2,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Conductivity",
    years: [2023],
    question:
      "The electrical resistance of a column of 0.05 mol L^−1 NaOH solution of diameter 1 cm and length 50 cm is 5.55 × 10^3 ohm. Calculate the conductivity.",
    answer: [
      {
        label: "Step 1 — cross-sectional area",
        text: "The diameter is 1 cm, so the radius is 0.5 cm.",
      },
      { equation: "$A = \\pi r^2 = 3.14 \\times (0.5)^2 = 0.785\\ \\text{cm}^2$" },
      {
        label: "Step 2 — conductivity from resistance",
        text: "Resistance is related to the cell dimensions by R = ρ·l/A, and conductivity κ is the reciprocal of resistivity ρ. Rearranging:",
      },
      { equation: "$\\kappa = \\dfrac{1}{R}\\times\\dfrac{l}{A} = \\dfrac{l}{R \\times A}$" },
      {
        label: "Step 3 — substitute",
        text: "With l = 50 cm, R = 5.55 × 10^3 Ω and A = 0.785 cm^2:",
      },
      {
        equation:
          "$\\kappa = \\dfrac{50}{0.785 \\times (5.55 \\times 10^{3})} = 11.47 \\times 10^{-3}\\ \\text{S cm}^{-1}$",
      },
      {
        label: "Answer",
        text: "**κ = 11.47 × 10^−3 S cm^−1** (equivalently 1.147 S m^−1).",
      },
      {
        text: "The quantity l/A is the **cell constant**, here 50/0.785 = 63.7 cm^−1. Note the concentration 0.05 mol L^−1 is not needed for the conductivity itself — it would only be wanted if the question went on to ask for the _(molar)_ conductivity Λ_m = κ × 1000/c.",
      },
    ],
  },
  {
    id: "p23a-21",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Oxidising agents",
    years: [2023],
    question:
      "Complete the following equations :\n(a) 2MnO4^− + 5NO2^− + 6H^+ ->\n(b) Cr2O7^2− + 14H^+ + 6e^− ->",
    answer: [
      { label: "(a) Permanganate oxidising nitrite in acid" },
      { equation: "2MnO4^− + 5NO2^− + 6H^+ -> 2Mn^2+ + 5NO3^− + 3H2O" },
      {
        text: "MnO4^− is reduced from Mn(+7) to Mn(+2), a gain of 5 electrons each; NO2^− is oxidised from N(+3) to N(+5), a loss of 2 electrons each. Ten electrons are exchanged either way, which is where the 2 : 5 ratio comes from. The deep purple of permanganate fades to the almost colourless Mn^2+.",
      },
      { label: "(b) The dichromate half-reaction" },
      { equation: "Cr2O7^2− + 14H^+ + 6e^− -> 2Cr^3+ + 7H2O" },
      {
        text: "Each chromium goes from +6 to +3, so two chromiums take 6 electrons in total. The 14 H^+ mop up the seven oxygens as water. Orange dichromate turns green on reduction to Cr^3+, and E° for this couple is +1.33 V.",
      },
      {
        text: "Both equations balance on charge as well as atoms — worth checking every time. In (b) the left side carries (−2) + 14 − 6 = **+6**, and the right side 2 × (+3) = **+6**.",
      },
    ],
  },
  {
    id: "p23a-22",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Reaction chains",
    years: [2023],
    question:
      "Identify 'A' and 'B' in the following reactions :\n(a) CH3–CH(OH)–CH3 ->[PCl5] 'A' ->[AgCN] 'B'\n(b) CH3CH2CH2Cl + KOH ->[ethanol] 'A' ->[HBr] 'B'",
    answer: [
      { label: "(a) Propan-2-ol -> 2-chloropropane -> isopropyl isocyanide" },
      { equation: "CH3–CH(OH)–CH3 ->[PCl5] CH3–CHCl–CH3 + POCl3 + HCl" },
      { equation: "CH3–CHCl–CH3 ->[AgCN] CH3–CH(NC)–CH3" },
      {
        points: [
          "**A = 2-chloropropane**, CH3–CHCl–CH3.",
          "**B = isopropyl isocyanide** (propan-2-isonitrile), CH3–CH(NC)–CH3.",
        ],
      },
      {
        text: "The catch is **AgCN, not KCN**. The cyanide ion is ambident — it can attack through carbon or through nitrogen. Silver cyanide is largely covalent, so only the **nitrogen** lone pair is free and the product is the **isocyanide**. Potassium cyanide is ionic, the carbon is the better nucleophile, and it would give the **nitrile** CH3–CH(CN)–CH3 instead.",
      },
      { label: "(b) 1-Chloropropane -> propene -> 2-bromopropane" },
      { equation: "CH3CH2CH2Cl + KOH ->[ethanol][Δ] CH3–CH=CH2 + KCl + H2O" },
      { equation: "CH3–CH=CH2 + HBr -> CH3–CHBr–CH3" },
      {
        points: [
          "**A = propene**, CH3–CH=CH2.",
          "**B = 2-bromopropane**, CH3–CHBr–CH3.",
        ],
      },
      {
        text: "Two traps in one line. First, **alcoholic** KOH eliminates to the alkene, whereas **aqueous** KOH would substitute to give propan-1-ol. Second, HBr adds by **Markovnikov's rule** — the hydrogen goes to the carbon already carrying more hydrogens, so the bromine ends up on C-2, giving the secondary halide, not 1-bromopropane.",
      },
    ],
    keyPoint:
      "AgCN gives isocyanides, KCN gives nitriles; alcoholic KOH eliminates, aqueous KOH substitutes.",
  },
  {
    id: "p23a-23",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Acidity and boiling point",
    years: [2023],
    question:
      "Account for the following :\n(i) Phenol is a stronger acid than an alcohol.\n(ii) The boiling point of alcohols decreases with increase in branching of alkyl chain.",
    answer: [
      { label: "(i) Phenol is the stronger acid" },
      {
        text: "Because the **phenoxide ion is stabilised by resonance, while the alkoxide ion is not.**",
      },
      {
        text: "When phenol loses its proton, the negative charge on oxygen is delocalised into the benzene ring, spreading over the **ortho and para** carbons. That spreading lowers the energy of the anion, so the equilibrium sits further towards dissociation.",
      },
      {
        text: "An alkoxide RO^− has nowhere to put the charge — it stays localised on the one oxygen — and the alkyl group's **+I effect** actually pushes more electron density onto it, making matters worse. Phenol has pK_a ≈ 10 against ethanol's ≈ 16, a difference of about a million times.",
      },
      { label: "(ii) Branching lowers the boiling point" },
      {
        text: "Because **branching reduces the surface area**, and van der Waals forces fall with it.",
      },
      {
        text: "A straight chain is extended, so neighbouring molecules touch along their whole length and the dispersion forces between them are large. Branching pulls the molecule into a compact, more nearly spherical shape with less surface available for contact, so less energy is needed to separate the molecules.",
      },
      {
        table: [
          ["Isomer of C4H9OH", "Shape", "Boiling point"],
          ["Butan-1-ol", "Straight chain", "391 K"],
          ["2-Methylpropan-1-ol", "One branch", "381 K"],
          ["2-Methylpropan-2-ol", "Most compact", "355 K"],
        ],
      },
      {
        text: "Hydrogen bonding is the _(larger)_ effect setting alcohol boiling points overall, but it is much the same across these three isomers, so the trend within the set is decided by surface area.",
      },
    ],
  },
  {
    id: "p23a-23b",
    chapter: 7,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Mechanisms and named reactions",
    years: [2023],
    question:
      "(i) Write the mechanism of the following reaction :\nCH3CH2OH ->[H^+][443 K] CH2=CH2 + H2O\n(ii) Write the equation involved in Reimer-Tiemann reaction.",
    answer: [
      {
        label: "(i) Acid-catalysed dehydration of ethanol — an E1 mechanism",
        text: "The Marking Scheme awards the marks for **any two correct steps**.",
      },
      {
        label: "Step 1 — protonation (fast)",
        text: "The lone pair on oxygen picks up a proton, turning the poor leaving group –OH into the excellent one –OH2^+.",
      },
      { equation: "CH3CH2–OH + H^+ <=> CH3CH2–OH2^+" },
      {
        label: "Step 2 — loss of water (slow, rate-determining)",
        text: "The C–O bond breaks heterolytically and water leaves, giving a primary carbocation.",
      },
      { equation: "CH3CH2–OH2^+ <=> CH3–CH2^+ + H2O" },
      {
        label: "Step 3 — loss of a β-proton (fast)",
        text: "A base — another alcohol molecule or water — removes a proton from the carbon _(next to)_ the positive centre, and that pair of electrons becomes the π bond.",
      },
      { equation: "CH3–CH2^+ <=> CH2=CH2 + H^+" },
      {
        text: "The proton is regenerated at the end, which is what makes H2SO4 a **catalyst** here rather than a reagent. The high temperature, 443 K, favours elimination over the substitution that dominates at 413 K, where ethoxyethane is formed instead.",
      },
      { label: "(ii) Reimer-Tiemann reaction" },
      {
        text: "Phenol with **chloroform and aqueous NaOH**, followed by acid hydrolysis, gives **salicylaldehyde** (2-hydroxybenzaldehyde):",
      },
      {
        equation:
          "C6H5OH ->[(i) CHCl3 + aq. NaOH][(ii) H3O^+] 2-HO–C6H4–CHO",
      },
      {
        text: "The electrophile is **dichlorocarbene**, :CCl2, generated when NaOH removes a proton from chloroform. It attacks the _(ortho)_ position of the phenoxide ring; the resulting benzal chloride side group is then hydrolysed by the alkali to the –CHO group, and acidification finally frees the phenolic –OH.",
      },
      {
        text: "Substituting the carbonate ion source CCl4 for CHCl3 gives the closely related **Kolbe** route to salicylic acid instead.",
      },
    ],
    keyPoint:
      "E1 dehydration: protonate, lose water to a carbocation, then lose a β-proton. Reimer-Tiemann runs on :CCl2.",
  },
  {
    id: "p23a-24",
    chapter: 9,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2023],
    question: "Explain briefly :\n(a) Carbylamine reaction\n(b) Gabriel phthalimide synthesis",
    answer: [
      { label: "(a) Carbylamine reaction" },
      {
        text: "An **aliphatic or aromatic primary amine**, heated with chloroform and ethanolic KOH, gives an **isocyanide** (carbylamine) — a substance with an exceptionally foul smell.",
      },
      { equation: "R–NH2 + CHCl3 + 3KOH ->[Δ] R–NC + 3KCl + 3H2O" },
      {
        text: "The active electrophile is again **dichlorocarbene**, :CCl2. Because only **primary** amines respond — secondary and tertiary amines give nothing — this is a reliable **test for a 1° amine**. The smell alone identifies it.",
      },
      { label: "(b) Gabriel phthalimide synthesis" },
      {
        text: "A route to a **pure primary amine**, with no secondary or tertiary amine contaminating the product.",
      },
      {
        points: [
          "Phthalimide is treated with **ethanolic KOH**, which removes the acidic N–H proton to give **potassium phthalimide**.",
          "This salt is heated with an **alkyl halide**, R–X. The nitrogen displaces the halide (S_N2) to give N-alkylphthalimide.",
          "**Alkaline hydrolysis** (or hydrazinolysis) then cleaves the two C–N bonds, releasing the primary amine R–NH2 and the phthalate salt.",
        ],
      },
      { equation: "C6H4(CO)2NH ->[KOH] C6H4(CO)2N^−K^+ ->[R–X] C6H4(CO)2N–R ->[NaOH(aq)] R–NH2" },
      {
        text: "The advantage over direct ammonolysis is that the nitrogen can only be alkylated **once** — it is locked into the ring until hydrolysis — so no mixture results.",
      },
      {
        text: "The one real limitation: **aromatic primary amines cannot be made this way**, because an aryl halide will not undergo the S_N2 step with the phthalimide anion.",
      },
    ],
    keyPoint:
      "Carbylamine is a test for 1° amines; Gabriel makes pure 1° amines but fails for aromatic ones.",
  },
  {
    id: "p23a-25",
    chapter: 10,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Structure of glucose",
    years: [2023],
    question:
      "(a) Write chemical reaction to show that the open structure of D-glucose contains a straight chain.\n(b) What type of linkage is responsible for the formation of protein ?",
    answer: [
      { label: "(a) The evidence for an unbranched chain" },
      {
        text: "Glucose on prolonged heating with **hydroiodic acid** gives **n-hexane**:",
      },
      { equation: "CHO–(CHOH)4–CH2OH ->[HI][Δ] CH3–CH2–CH2–CH2–CH2–CH3" },
      {
        text: "HI reduces every oxygen-bearing carbon down to –CH2– or –CH3 without disturbing the carbon skeleton. Since the product is **n-hexane** — the straight-chain isomer, not 2-methylpentane or any other branched C6 — the six carbons of glucose must have been joined in an **unbranched chain** to begin with.",
      },
      {
        text: "That is the whole logic of the classic structure determination: reduce away the functional groups and see what skeleton is left.",
      },
      { label: "(b) The linkage in proteins" },
      { text: "The **peptide linkage**, –CO–NH–." },
      {
        text: "It forms when the **–COOH** group of one α-amino acid condenses with the **–NH2** group of the next, eliminating a molecule of water. The resulting C–N bond has partial double-bond character, which keeps the peptide unit planar and rigid.",
      },
      { equation: "H2N–CHR–COOH + H2N–CHR'–COOH -> H2N–CHR–CO–NH–CHR'–COOH + H2O" },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION C — short answer, 3 marks each                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p23a-26",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Raoult's law",
    years: [2023],
    question:
      "(a) Differentiate between an ideal solution and a non-ideal solution.\n(b) 30 g of urea is dissolved in 846 g of water. Calculate the vapour pressure of water for this solution if the vapour pressure of pure water at 298 K is 23.8 mm Hg.",
    answer: [
      { label: "(a) Ideal against non-ideal" },
      {
        table: [
          ["Ideal solution", "Non-ideal solution"],
          ["Obeys Raoult's law at **all** concentrations", "Does **not** obey Raoult's law"],
          ["Δ_mix H = 0 and Δ_mix V = 0", "Δ_mix H ≠ 0 and Δ_mix V ≠ 0"],
          ["A–B forces equal the A–A and B–B forces", "A–B forces differ from A–A and B–B"],
          ["e.g. benzene + toluene, n-hexane + n-heptane", "e.g. ethanol + water, chloroform + acetone"],
        ],
      },
      {
        text: "Any one row earns the mark. A non-ideal solution shows a **positive** deviation when the A–B attraction is weaker than the original ones (ethanol + water) and a **negative** deviation when it is stronger (chloroform + acetone, which hydrogen-bond to each other).",
      },
      { label: "(b) Vapour pressure of the solution" },
      {
        text: "Urea is a **non-volatile, non-electrolyte** solute, so only the water contributes to the vapour pressure and Raoult's law applies directly.",
      },
      {
        label: "Step 1 — moles of each component",
        text: "Urea, NH2CONH2, has M = 60 g mol^−1; water has M = 18 g mol^−1.",
      },
      { equation: "$n_B = \\dfrac{30}{60} = 0.5\\ \\text{mol (urea)}$" },
      { equation: "$n_A = \\dfrac{846}{18} = 47\\ \\text{mol (water)}$" },
      {
        label: "Step 2 — apply Raoult's law",
        text: "The vapour pressure of the solution equals the pure solvent's vapour pressure times the solvent's mole fraction:",
      },
      { equation: "$p_A = p^\\circ_A \\times x_A = p^\\circ_A \\times \\dfrac{n_A}{n_A + n_B}$" },
      {
        equation:
          "$p_A = 23.8 \\times \\dfrac{47}{47 + 0.5} = 23.8 \\times \\dfrac{47}{47.5} = 23.5\\ \\text{mm Hg}$",
      },
      {
        label: "Answer",
        text: "**p = 23.5 mm Hg**, a lowering of about 0.3 mm Hg.",
      },
      {
        text: "The scheme also accepts the equivalent route through relative lowering, (p° − p)/p° = n_B/n_A ≈ 0.5/47, which gives the same 23.5 mm Hg. It further notes that **full marks may be awarded if the student substitutes any symbol for the molar mass of urea**, since the question does not supply it.",
      },
    ],
  },
  {
    id: "p23a-27",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Substitution and elimination",
    years: [2023],
    question:
      "Write the main product formed when :\n(a) Methyl chloride is treated with NaI/Acetone.\n(b) 2,4,6-trinitrochlorobenzene is subjected to hydrolysis.\n(c) n-Butyl chloride is treated with alcoholic KOH.",
    answer: [
      { label: "(a) Finkelstein reaction -> methyl iodide" },
      { equation: "CH3–Cl + NaI ->[dry acetone] CH3–I + NaCl" },
      {
        text: "**Product: CH3I, iodomethane (methyl iodide).** The exchange is driven by solubility — NaI dissolves in dry acetone but **NaCl does not**, so it precipitates and pulls the equilibrium across.",
      },
      { label: "(b) Nucleophilic aromatic substitution -> picric acid" },
      {
        equation:
          "2,4,6-(O2N)3C6H2–Cl ->[H2O / warm] 2,4,6-(O2N)3C6H2–OH",
      },
      {
        text: "**Product: 2,4,6-trinitrophenol, picric acid.** A plain chlorobenzene resists hydrolysis and needs 623 K at 300 atm, but the three **nitro groups** — all ortho or para to the chlorine — withdraw electron density strongly and stabilise the negatively charged intermediate. The ring is so activated towards nucleophilic attack that warm water is enough.",
      },
      { label: "(c) Elimination -> but-1-ene" },
      { equation: "CH3CH2CH2CH2–Cl + KOH ->[ethanol][Δ] CH3CH2CH=CH2 + KCl + H2O" },
      {
        text: "**Product: but-1-ene.** **Alcoholic** KOH provides the strongly basic ethoxide ion, which pulls off a β-hydrogen and drives **elimination**. Aqueous KOH would instead give butan-1-ol by substitution.",
      },
      {
        text: "Here the halide is primary and the β-carbon is at the end of the chain, so only one alkene is possible and no Saytzeff/Hofmann choice arises.",
      },
    ],
  },
  {
    id: "p23a-28",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2023],
    question:
      "How do you carry out the following conversions ? (Any three)\n(a) Phenol to picric acid\n(b) Propanone to 2-methylpropan-2-ol\n(c) Phenol to anisole\n(d) Propene to propan-1-ol",
    answer: [
      { label: "(a) Phenol -> picric acid" },
      { equation: "C6H5OH ->[conc. HNO3] 2,4,6-(O2N)3C6H2OH" },
      {
        text: "Nitration with concentrated HNO3 (conventionally with conc. H2SO4) substitutes all three activated positions at once. The –OH group is strongly **activating and o,p-directing**, so the product is **2,4,6-trinitrophenol**.",
      },
      { label: "(b) Propanone -> 2-methylpropan-2-ol" },
      { equation: "CH3–CO–CH3 ->[(i) CH3MgBr][(ii) H2O / H^+] (CH3)3C–OH" },
      {
        text: "A **Grignard reagent** adds across the C=O double bond, and hydrolysis of the resulting magnesium alkoxide gives the alcohol. A ketone gives a **tertiary** alcohol, which is what is wanted here — the new methyl group plus the two already present make the three on the carbinol carbon.",
      },
      { label: "(c) Phenol -> anisole" },
      { equation: "C6H5OH + NaOH -> C6H5O^−Na^+ ->[CH3I] C6H5–OCH3 + NaI" },
      {
        text: "This is **Williamson's ether synthesis**. Phenol is first converted to the more nucleophilic **sodium phenoxide**, which then displaces iodide from methyl iodide by S_N2. Note the direction: the aryl part must supply the **alkoxide**, because the reverse pairing — methoxide plus a halobenzene — will not work.",
      },
      { label: "(d) Propene -> propan-1-ol" },
      { equation: "CH3–CH=CH2 ->[(i) B2H6 or (H–BH2)2][(ii) NaOH / H2O2] CH3–CH2–CH2–OH" },
      {
        text: "**Hydroboration–oxidation.** The boron adds to the _(less)_ substituted carbon, so the –OH ends up there too — an **anti-Markovnikov** addition, which is the only way to reach the _(primary)_ alcohol. Direct acid hydration would follow Markovnikov's rule and give propan-2-ol instead.",
      },
      {
        text: "Only three are required; the scheme accepts any correct alternative route for each.",
      },
    ],
    keyPoint:
      "Hydroboration–oxidation is the anti-Markovnikov route: it is the way to reach a primary alcohol from an alkene.",
  },
  {
    id: "p23a-29",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Reactivity of carbonyl compounds",
    years: [2023],
    question:
      "Explain why :\n(i) The carboxyl group in benzoic acid is meta directing.\n(ii) Sodium bisulphite is used for the purification of aldehydes and ketones.\n(iii) Carboxylic acids do not give the characteristic reactions of the carbonyl group.",
    answer: [
      { label: "(i) –COOH is meta directing" },
      {
        text: "Because it is an **electron-withdrawing, deactivating group** (−R and −I effects).",
      },
      {
        text: "Drawing the resonance structures of benzoic acid, the carboxyl group pulls electron density out of the ring and leaves a **partial positive charge on the ortho and para carbons**. An incoming electrophile therefore avoids those positions and attacks the **meta** carbon, which is the least deprived of the three.",
      },
      {
        text: "The ring is deactivated overall, so nitration of benzoic acid is slower than that of benzene and needs harsher conditions — but the product is **m-nitrobenzoic acid**.",
      },
      { label: "(ii) Sodium bisulphite purifies aldehydes and ketones" },
      {
        text: "Because the **bisulphite addition compound is a crystalline solid that can be filtered off, and the reaction is reversible.**",
      },
      { equation: "R–CO–R' + NaHSO3 <=> R–C(OH)(SO3Na)–R'" },
      {
        points: [
          "The impure carbonyl compound is shaken with saturated NaHSO3, and the **white crystalline** adduct separates out.",
          "It is filtered and washed, leaving the non-carbonyl impurities behind in solution.",
          "Treating the solid with **dilute acid or dilute alkali** reverses the addition and regenerates the **pure** aldehyde or ketone.",
        ],
      },
      {
        text: "The method is selective: it works for all aldehydes but only for **methyl ketones and cyclic ketones**, because larger ketones are too hindered for the bulky bisulphite ion to attack.",
      },
      { label: "(iii) Carboxylic acids do not behave like carbonyl compounds" },
      {
        text: "Because of **resonance**: the lone pair on the hydroxyl oxygen is delocalised onto the carbonyl carbon, so that carbon is **much less electrophilic**.",
      },
      { equation: "R–C(=O)–OH <-> R–C(–O^−)=OH^+" },
      {
        text: "In an aldehyde or ketone the carbonyl carbon carries a substantial δ+ and is readily attacked by nucleophiles such as HCN, NaHSO3 or a Grignard reagent. In a carboxylic acid that positive character is largely neutralised by the electron donation from –OH, so the usual **nucleophilic addition** reactions do not take place.",
      },
      {
        text: "The same delocalisation also explains why the C–O bonds in the carboxylate ion are equal in length, and why carboxylic acids are far more acidic than alcohols.",
      },
    ],
  },
  {
    id: "p23a-29b",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Structure determination",
    years: [2023],
    question:
      "An organic compound 'A', having the molecular formula C3H8O, on treatment with Cu at 573 K gives 'B'. 'B' does not reduce Fehling's solution but gives a yellow precipitate of compound 'C' with I2/NaOH. Deduce the structures of A, B and C.",
    answer: [
      {
        label: "Reading the clues",
        points: [
          "C3H8O with no degrees of unsaturation — so A is a **saturated alcohol or ether**. Since it reacts with hot copper, it must be an **alcohol**.",
          "Copper at 573 K **dehydrogenates** an alcohol. A 1° alcohol would give an aldehyde, a 2° alcohol a ketone, and a 3° alcohol would dehydrate to an alkene instead.",
          "B **does not reduce Fehling's solution** — so B is **not an aldehyde**. That rules out A being primary.",
          "B **gives a yellow precipitate with I2/NaOH** — the positive **iodoform test**, which needs a CH3–CO– group. So B is a **methyl ketone**.",
        ],
      },
      {
        label: "Putting it together",
        text: "The only C3 secondary alcohol is **propan-2-ol**, and oxidising it gives **propanone**, which is indeed a methyl ketone. The yellow precipitate is **iodoform**.",
      },
      { equation: "CH3–CH(OH)–CH3 ->[Cu][573 K] CH3–CO–CH3 ->[I2 / NaOH][Δ] CHI3↓" },
      {
        label: "Answer",
        table: [
          ["Compound", "Structure", "Name"],
          ["A", "CH3–CH(OH)–CH3", "Propan-2-ol"],
          ["B", "CH3–CO–CH3", "Propanone (acetone)"],
          ["C", "CHI3", "Iodoform (triiodomethane)"],
        ],
      },
      {
        text: "The full iodoform equation, if wanted: CH3COCH3 + 3I2 + 4NaOH -> CHI3 + CH3COONa + 3NaI + 3H2O. The other product is sodium ethanoate.",
      },
    ],
    keyPoint:
      "Fehling's negative rules out an aldehyde; a positive iodoform test demands a CH3–CO– group. Together they force a methyl ketone.",
  },
  {
    id: "p23a-30",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Disaccharides and polysaccharides",
    years: [2023],
    question:
      "(a) What are the hydrolysis products of (i) lactose, (ii) maltose ?\n(b) Give the basic structural difference between starch and cellulose.",
    answer: [
      { label: "(a) Hydrolysis products" },
      {
        table: [
          ["Disaccharide", "Hydrolysis products", "Linkage"],
          ["**Lactose** (milk sugar)", "**Glucose + galactose**", "β-1,4"],
          ["**Maltose** (malt sugar)", "**Glucose + glucose**", "α-1,4"],
        ],
      },
      {
        text: "Both are **reducing** sugars, because in each the second unit keeps a free anomeric –OH that can open to the aldehyde form. Sucrose is the odd one out among the common disaccharides: its two anomeric carbons are joined to each other, so it is non-reducing and hydrolyses to glucose + fructose.",
      },
      { label: "(b) Starch against cellulose" },
      {
        text: "**Starch is a polymer of α-glucose, cellulose a polymer of β-glucose.**",
      },
      {
        table: [
          ["", "Starch", "Cellulose"],
          ["Monomer", "α-D-glucose", "β-D-glucose"],
          ["Linkage", "C1–C4 α (plus C1–C6 α branches in amylopectin)", "C1–C4 β only"],
          ["Chain shape", "Coiled, helical", "Straight, extended"],
          ["Branching", "Amylopectin is branched", "Completely unbranched"],
          ["Digestible by humans?", "Yes", "No — we lack the β-glucosidase"],
        ],
      },
      {
        text: "That single stereochemical difference at C-1 has large consequences. The **β** linkage lets the chains lie flat and hydrogen-bond side by side into rigid fibres, which is what makes cellulose a structural material; the **α** linkage forces a helix, which suits starch to its role as a compact energy store.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION D — case-based, 4 marks each                             */
  /* ---------------------------------------------------------------- */
  {
    id: "p23a-31",
    chapter: 3,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Rate of reaction",
    years: [2023],
    passage:
      "The rate of reaction is concerned with decrease in concentration of reactants or increase in the concentration of products per unit time. It can be expressed as instantaneous rate at a particular instant of time and average rate over a large interval of time. Mathematical representation of rate of reaction is given by rate law. Rate constant and order of a reaction can be determined from rate law or its integrated rate equation.",
    question:
      "(i) What is the average rate of reaction ?\n(ii) Write two factors that affect the rate of reaction.\n(iii) (1) What happens to the rate of reaction for a zero order reaction?\n(2) What is the unit of k for a zero order reaction?\nOR\n(iii) (1) For a reaction P + 2Q -> Products, Rate = k[P]^1/2 [Q]^1. What is the order of the reaction?\n(2) Define a pseudo first order reaction with an example.",
    answer: [
      { label: "(i) Average rate" },
      {
        text: "The **change in the concentration of a reactant or a product per unit time**, measured over a finite interval rather than at an instant.",
      },
      { equation: "$r_{av} = -\\dfrac{\\Delta[R]}{\\Delta t} = +\\dfrac{\\Delta[P]}{\\Delta t}$" },
      { label: "(ii) Two factors that affect the rate — any two" },
      {
        points: [
          "**Concentration of the reactants** (or pressure, for gases).",
          "**Temperature** — a 10 K rise roughly doubles the rate.",
          "**Catalyst** — lowers the activation energy.",
          "**Surface area** of a solid reactant.",
          "**Nature of the reactants.**",
        ],
      },
      { label: "(iii) (1) Rate of a zero order reaction" },
      {
        text: "It is **independent of the concentration of the reactants** — the rate stays constant as the reaction proceeds, right up until the reactant is nearly exhausted.",
      },
      { equation: "$\\text{Rate} = k[\\mathrm{A}]^0 = k$" },
      {
        text: "A plot of [R] against t is therefore a **straight line** of slope −k. Such behaviour turns up where a surface or an enzyme is saturated, as in the decomposition of ammonia on a hot platinum surface.",
      },
      { label: "(iii) (2) Unit of k for a zero order reaction" },
      {
        text: "Since rate = k, the rate constant carries the units of rate itself: **mol L^−1 s^−1.**",
      },
      {
        text: "In general the unit of k is (mol L^−1)^1−n s^−1 for order n — so first order gives s^−1 and second order L mol^−1 s^−1.",
      },
      { label: "OR (iii) (1) Order of the reaction" },
      {
        text: "Order is the **sum of the exponents** in the experimentally determined rate law:",
      },
      { equation: "$\\text{order} = \\tfrac{1}{2} + 1 = \\tfrac{3}{2} = 1.5$" },
      {
        text: "Note the exponents come from experiment, not from the stoichiometric coefficients — the balanced equation would have suggested 1 + 2 = 3. A fractional order like this is a clear sign that the reaction is **not elementary**.",
      },
      { label: "OR (iii) (2) Pseudo first order reaction" },
      {
        text: "A reaction that **appears to be of a higher order but actually follows first-order kinetics**, because one reactant is present in such large excess that its concentration barely changes.",
      },
      {
        text: "**Example — hydrolysis of an ester:**",
      },
      { equation: "CH3COOC2H5 + H2O ->[H^+] CH3COOH + C2H5OH" },
      {
        text: "The true rate law is rate = k[ester][H2O], which is second order. But water is also the solvent and is present in vast excess, so [H2O] is effectively constant and can be folded into the constant: rate = k′[ester], with k′ = k[H2O]. The reaction then behaves as **first order**. Cane sugar inversion is the other standard example.",
      },
    ],
  },
  {
    id: "p23a-32",
    chapter: 5,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Werner's theory",
    years: [2023],
    passage:
      "In coordination compounds, metals show two types of linkages, primary and secondary. Primary valencies are ionisable and are satisfied by negatively charged ions. Secondary valencies are non-ionisable and are satisfied by neutral or negative ions having lone pair of electrons. Primary valencies are non-directional while secondary valencies decide the shape of the complexes.",
    question:
      "(i) If PtCl2 · 2NH3 does not react with AgNO3, what will be its formula ?\n(ii) What is the secondary valency of [Co(en)3]^3+ ?\n(iii) (1) Write the formula of iron(III) hexacyanidoferrate(II).\n(2) Write the IUPAC name of [Co(NH3)5Cl] Cl2.\nOR\n(iii) Write the hybridisation and magnetic behaviour of [Ni(CN)4]^2−. [Atomic number : Ni = 28]",
    answer: [
      { label: "(i) Formula of PtCl2 · 2NH3" },
      { text: "**[Pt(NH3)2Cl2]**" },
      {
        text: "Silver nitrate precipitates only **free, ionisable** chloride. Since there is **no reaction with AgNO3**, neither chloride is free — both must be inside the coordination sphere, bonded directly to platinum. The complex is therefore neutral, with no counter-ions at all, and is written entirely within the square brackets.",
      },
      {
        text: "This is exactly the reasoning Werner used. Compare [Pt(NH3)4]Cl2, which would give **two** moles of AgCl per mole of complex.",
      },
      { label: "(ii) Secondary valency of [Co(en)3]^3+" },
      { text: "**6.**" },
      {
        text: "Secondary valency is Werner's term for what we now call the **coordination number**. Ethane-1,2-diamine (en) is **bidentate** — each molecule donates two lone pairs through its two nitrogen atoms — so three en ligands occupy 3 × 2 = **6** coordination sites. The geometry is octahedral.",
      },
      {
        text: "Do not confuse it with the primary valency, which is **3** here and is satisfied by the counter-ions outside the sphere.",
      },
      { label: "(iii) (1) Iron(III) hexacyanidoferrate(II)" },
      { text: "**Fe4[Fe(CN)6]3**" },
      {
        text: "The anion is [Fe(CN)6]^4−, since Fe(II) with six CN^− gives 2 − 6 = −4. The cation is Fe^3+. Balancing the charges needs four Fe^3+ (+12) against three [Fe(CN)6]^4− (−12). This is **Prussian blue**, the compound behind the blue colour in the ferric–ferrocyanide test.",
      },
      { label: "(iii) (2) IUPAC name of [Co(NH3)5Cl]Cl2" },
      { text: "**Pentaamminechloridocobalt(III) chloride**" },
      {
        points: [
          "Ligands are named first, in **alphabetical** order — ammine (a) before chlorido (c) — with the multiplying prefix _(penta)_ ignored for alphabetising.",
          "The oxidation state of cobalt: x + 5(0) + (−1) = +2 total for the cation... the complex ion carries +2, so x − 1 = +2, giving **x = +3**.",
          "The counter-ion, chloride, is named last as a separate word.",
        ],
      },
      { label: "OR (iii) Hybridisation and magnetic behaviour of [Ni(CN)4]^2−" },
      { text: "**dsp^2 hybridised, square planar, and diamagnetic.**" },
      {
        points: [
          "Ni has Z = 28, configuration [Ar] 3d^8 4s^2. In Ni^2+ the two 4s electrons are lost, leaving **3d^8**.",
          "CN^− is a **strong field ligand**, so it forces the eight d electrons to pair up, emptying one 3d orbital.",
          "That empty 3d orbital together with the 4s and two 4p orbitals gives **dsp^2** hybridisation, and hence a **square planar** shape.",
          "With **no unpaired electrons**, the complex is **diamagnetic**, and μ = 0 BM.",
        ],
      },
      {
        text: "Contrast [NiCl4]^2−: chloride is a weak field ligand, the 3d^8 arrangement keeps two unpaired electrons, the hybridisation is **sp^3**, the shape **tetrahedral** and the complex **paramagnetic** with μ = 2.83 BM. Same metal ion, same oxidation state — the ligand alone decides.",
      },
    ],
    keyPoint:
      "Strong field CN^− pairs the 3d^8 electrons: dsp^2, square planar, diamagnetic. Weak field Cl^− does not: sp^3, tetrahedral, paramagnetic.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION E — long answer, 5 marks each                            */
  /* ---------------------------------------------------------------- */
  {
    id: "p23a-33",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "Nernst equation and Gibbs energy",
    years: [2023],
    question:
      "(a) (i) State Kohlrausch's law of independent migration of ions. Write an expression for the limiting molar conductivity of acetic acid according to Kohlrausch's law.\n(ii) Calculate the maximum work and log K_c for the given reaction at 298 K :\nNi (s) + 2Ag^+ (aq) <=> Ni^2+ (aq) + 2Ag (s)\nGiven : E°(Ni^2+/Ni) = −0.25 V, E°(Ag^+/Ag) = +0.80 V, 1 F = 96500 C mol^−1",
    answer: [
      { label: "(i) Kohlrausch's law" },
      {
        text: "**The limiting molar conductivity of an electrolyte is the sum of the individual contributions of its cation and anion**, each ion migrating independently of the other at infinite dilution.",
      },
      { equation: "$\\Lambda^\\circ_m = \\nu_+\\lambda^\\circ_+ + \\nu_-\\lambda^\\circ_-$" },
      { label: "For acetic acid" },
      { equation: "$\\Lambda^\\circ_m(\\mathrm{CH_3COOH}) = \\lambda^\\circ_{\\mathrm{CH_3COO^-}} + \\lambda^\\circ_{\\mathrm{H^+}}$" },
      {
        text: "This matters because acetic acid is a **weak** electrolyte: its Λ_m rises so steeply near infinite dilution that extrapolating the graph is hopeless. Kohlrausch's law lets us assemble Λ°_m from strong-electrolyte data instead — for instance from CH3COONa, HCl and NaCl.",
      },
      { label: "(ii) Step 1 — the standard cell potential" },
      {
        text: "Nickel is oxidised, so it is the anode; silver is reduced, so it is the cathode.",
      },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.80 - (-0.25) = 1.05\\ \\text{V}$" },
      {
        text: "Mind the double negative — this is where the marks are most often lost.",
      },
      { label: "Step 2 — maximum work" },
      {
        text: "The maximum useful (non-expansion) work a cell can do equals the fall in Gibbs energy:",
      },
      { equation: "$\\Delta_r G^\\circ = -nFE^\\circ_{cell}, \\qquad w_{max} = -\\Delta_r G^\\circ = nFE^\\circ_{cell}$" },
      {
        text: "Two electrons are transferred (Ni -> Ni^2+ + 2e^−), so n = 2:",
      },
      { equation: "$w_{max} = 2 \\times 96500 \\times 1.05 = 202650\\ \\text{J mol}^{-1}$" },
      { text: "**w_max = 202650 J mol^−1 = 202.65 kJ mol^−1**" },
      { label: "Step 3 — log K_c" },
      {
        text: "At equilibrium the cell potential is zero, and the Nernst equation reduces to:",
      },
      { equation: "$\\log K_c = \\dfrac{nE^\\circ_{cell}}{0.059}$" },
      { equation: "$\\log K_c = \\dfrac{2 \\times 1.05}{0.059} = 35.6$" },
      {
        text: "**log K_c = 35.6**, so K_c ≈ 4 × 10^35 — enormous, which says the reaction goes essentially to completion. That is consistent with the large positive E°_cell.",
      },
    ],
  },
  {
    id: "p23a-33b",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "medium",
    topic: "Faraday's laws and Nernst equation",
    years: [2023],
    question:
      "(b) (i) State Faraday's first law of electrolysis. How much charge, in terms of Faraday, is required for the reduction of 1 mol Cu^2+ to Cu ?\n(ii) Calculate the emf of the following cell at 298 K :\nMg (s) | Mg^2+ (0.1 M) || Cu^2+ (0.01 M) | Cu (s)\n[E°_cell = +2.71 V, 1 F = 96500 C mol^−1, log 10 = 1]",
    answer: [
      { label: "(i) Faraday's first law" },
      {
        text: "**The mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity (charge) passed through the electrolyte.**",
      },
      { equation: "$m \\propto Q \\qquad\\text{or}\\qquad m = Z I t$" },
      {
        text: "where Z is the electrochemical equivalent, I the current and t the time.",
      },
      { label: "Charge to reduce 1 mol Cu^2+" },
      { equation: "Cu^2+ + 2e^− -> Cu" },
      {
        text: "Two moles of electrons are needed per mole of copper, and one mole of electrons carries one faraday. So the charge required is **2 F**, which is 2 × 96500 = 193000 C.",
      },
      { label: "(ii) Step 1 — write the cell reaction" },
      {
        text: "Magnesium is on the left, so it is the anode and is oxidised; copper is the cathode.",
      },
      { equation: "Mg(s) + Cu^2+(aq) -> Mg^2+(aq) + Cu(s)" },
      { text: "Two electrons are transferred, so **n = 2**." },
      { label: "Step 2 — apply the Nernst equation" },
      {
        equation:
          "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0591}{n}\\log\\dfrac{[\\mathrm{Mg^{2+}}]}{[\\mathrm{Cu^{2+}}]}$",
      },
      {
        text: "The quotient carries **products over reactants** — the ion being formed on top, the ion being consumed underneath.",
      },
      { label: "Step 3 — substitute" },
      { equation: "$E_{cell} = 2.71 - \\dfrac{0.0591}{2}\\log\\dfrac{0.1}{0.01}$" },
      { equation: "$= 2.71 - \\dfrac{0.0591}{2}\\log 10 = 2.71 - 0.0295$" },
      { text: "**E_cell = 2.68 V**" },
      {
        text: "The value sits just below E°_cell, as it should: the product ion Mg^2+ is ten times more concentrated than the reactant ion Cu^2+, which by Le Chatelier's principle works slightly against the forward reaction. The Marking Scheme deducts ½ mark for a missing or wrong unit.",
      },
    ],
    keyPoint:
      "In the Nernst log term, products over reactants — and always deduce n from the balanced cell reaction.",
  },
  {
    id: "p23a-34",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Properties of transition elements",
    years: [2023],
    question:
      "Assign a reason for each of the following :\n(i) Manganese exhibits the highest oxidation state of +7 among the 3d series of transition elements.\n(ii) Transition metals and their compounds are generally found to be good catalysts.\n(iii) Cr^2+ is reducing in nature while with the same d-orbital configuration (d^4) Mn^3+ is an oxidising agent.\n(iv) Zn has the lowest enthalpy of atomisation.\n(v) Cu^+ is unstable in aqueous solution.",
    answer: [
      { label: "(i) Manganese reaches +7" },
      {
        text: "Because **all** of its 3d and 4s electrons can take part in bonding — it has the **maximum number of unpaired electrons** in the series.",
      },
      {
        text: "Mn is [Ar] 3d^5 4s^2. Losing all seven gives the +7 state, seen in **KMnO4** and Mn2O7. Elements after manganese have paired d electrons, which are held more tightly and are far harder to remove, so the maximum oxidation state falls away again across the rest of the series.",
      },
      { label: "(ii) Transition metals are good catalysts" },
      {
        text: "Because of their **variable oxidation states** — they can accept electrons from one reactant and pass them to another, forming intermediates and then reverting.",
      },
      {
        text: "The scheme also accepts the **large surface area** on which reactants adsorb, and the ability to form **complexes** with the reacting species. Vanadium(V) oxide in the Contact process and iron in the Haber process are the standard examples.",
      },
      { label: "(iii) Cr^2+ reducing but Mn^3+ oxidising" },
      {
        text: "Both are d^4, but each moves towards a different **stable half-filled arrangement**.",
      },
      {
        table: [
          ["Ion", "Change", "Result"],
          ["Cr^2+ (d^4)", "loses an electron -> Cr^3+ (d^3)", "gains the stable half-filled **t2g^3** set, so it acts as a **reducing agent**"],
          ["Mn^3+ (d^4)", "gains an electron -> Mn^2+ (d^5)", "gains the stable half-filled **d^5** shell, so it acts as an **oxidising agent**"],
        ],
      },
      {
        text: "Same starting configuration, opposite behaviour — because for chromium the stable configuration lies one electron _(below)_ d^4, and for manganese one electron _(above)_ it.",
      },
      { label: "(iv) Zinc has the lowest enthalpy of atomisation" },
      {
        text: "Because it has **no unpaired d electrons** available for metallic bonding.",
      },
      {
        text: "Zn^0 is [Ar] 3d^10 4s^2 — the d subshell is completely filled, so only the 4s electrons contribute to the metallic bond. The interatomic interaction is correspondingly weak, and little energy is needed to break the lattice into free atoms. This is also why zinc melts at only 693 K, far below the neighbouring transition metals.",
      },
      { label: "(v) Cu^+ is unstable in water" },
      {
        text: "Because it **disproportionates** to Cu^2+ and copper metal:",
      },
      { equation: "2Cu^+(aq) -> Cu^2+(aq) + Cu(s)" },
      {
        text: "The driving force is the much more negative **hydration enthalpy** of Cu^2+. Its higher charge and smaller size let it bind water molecules far more strongly, and the energy released more than pays for the second ionisation energy.",
      },
      {
        text: "Cu^+ is stable in the solid state and in insoluble compounds such as CuCl and Cu2O, where no hydration takes place — it is specifically **aqueous** solution that destroys it.",
      },
    ],
  },
  {
    id: "p23a-35",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Conversions and structure determination",
    years: [2023],
    question:
      "(a) (i) Carry out the following conversions :\n(1) Ethanal to but-2-en-1-al\n(2) Propanoic acid to 2-chloropropanoic acid\n(ii) An alkene 'A' with molecular formula C5H10 on ozonolysis gives a mixture of two compounds 'B' and 'C'. Compound 'B' gives a positive Fehling test and also reacts with iodine and NaOH solution. Compound 'C' does not give the Fehling solution test but forms iodoform. Identify the compounds 'A', 'B' and 'C'.",
    answer: [
      { label: "(i) (1) Ethanal -> but-2-en-1-al — aldol condensation" },
      {
        text: "Two molecules of ethanal combine under dilute alkali, then lose water on warming:",
      },
      { equation: "CH3CHO + CH3CHO ->[dil. NaOH] CH3–CH(OH)–CH2–CHO" },
      { equation: "CH3–CH(OH)–CH2–CHO ->[Δ][−H2O] CH3–CH=CH–CHO" },
      {
        text: "The first step is the **aldol addition** — the α-carbon of one molecule attacks the carbonyl carbon of the other, giving 3-hydroxybutanal. Heating then **dehydrates** it to the α,β-unsaturated aldehyde **but-2-en-1-al** (crotonaldehyde). The new double bond is conjugated with the C=O, which is what makes the elimination so favourable.",
      },
      { label: "(i) (2) Propanoic acid -> 2-chloropropanoic acid — the HVZ reaction" },
      { equation: "CH3CH2–COOH ->[(i) Cl2 / red P][(ii) H2O] CH3–CHCl–COOH" },
      {
        text: "This is the **Hell–Volhard–Zelinsky** reaction, and it is the standard way to halogenate specifically at the **α-carbon** of a carboxylic acid. Red phosphorus converts the acid to the acyl halide in situ; that enolises far more readily than the acid itself, the halogen attacks the α position, and hydrolysis returns the –COOH group.",
      },
      { label: "(ii) Identifying A, B and C" },
      {
        label: "Reading the clues",
        points: [
          "Ozonolysis **cleaves the C=C** and puts an oxygen on each of the two carbons, so B and C between them account for all five carbons of A.",
          "B gives a **positive Fehling test** — so B is an **aldehyde**. It also gives the **iodoform** reaction, which needs a CH3–CO– group; for an aldehyde that means **CH3CHO, ethanal**, the only aldehyde with a methyl next to the carbonyl.",
          "C **fails** Fehling's but **does** give iodoform — so C is a **methyl ketone**. With the two carbons of ethanal already used, three carbons remain, making C **propanone, CH3COCH3**.",
        ],
      },
      {
        label: "Rebuilding the alkene",
        text: "Rejoining the two carbonyl carbons with a double bond, CH3CH=O and O=C(CH3)2 give:",
      },
      { equation: "CH3–CH=C(CH3)–CH3" },
      {
        text: "That is **2-methylbut-2-ene**, C5H10 — the formula checks out.",
      },
      { equation: "CH3–CH=C(CH3)–CH3 ->[(i) O3][(ii) Zn / H2O] CH3CHO + CH3COCH3" },
      {
        label: "Answer",
        table: [
          ["Compound", "Structure", "Name"],
          ["A", "CH3–CH=C(CH3)–CH3", "2-Methylbut-2-ene"],
          ["B", "CH3CHO", "Ethanal (acetaldehyde)"],
          ["C", "CH3COCH3", "Propanone (acetone)"],
        ],
      },
    ],
    keyPoint:
      "Ozonolysis run backwards: join the two carbonyl carbons with a double bond to recover the alkene.",
  },
  {
    id: "p23a-35b",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Distinguishing tests and reaction chains",
    years: [2023],
    question:
      "(b) (i) Distinguish with a suitable chemical test :\n(1) CH3COCH2CH3 and CH3CH2CH2CHO\n(2) Ethanal and ethanoic acid\n(ii) Write the structure of the oxime of acetone.\n(iii) Identify A to D :\nCH3COOH ->[PCl5] A ->[H2 / Pd–BaSO4] B ->[(i) CH3MgBr, (ii) H3O^+] C\nand B ->[LiAlH4] D",
    answer: [
      { label: "(i) (1) Butanone against butanal — the iodoform test" },
      {
        text: "Add **iodine and NaOH** to each and warm.",
      },
      {
        table: [
          ["Compound", "Has a CH3–CO– group?", "Result"],
          ["CH3COCH2CH3 (butanone)", "Yes", "**Yellow precipitate** of CHI3"],
          ["CH3CH2CH2CHO (butanal)", "No", "No precipitate"],
        ],
      },
      {
        text: "Butanone is a methyl ketone, so it gives iodoform; butanal's carbonyl carries a propyl group and a hydrogen, so it does not. The **Tollens' or Fehling's test would also separate them**, the aldehyde reducing and the ketone not — either answer is accepted.",
      },
      { label: "(i) (2) Ethanal against ethanoic acid — the carbonate test" },
      {
        text: "Add **sodium hydrogen carbonate** solution to each.",
      },
      { equation: "CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2↑" },
      {
        text: "**Ethanoic acid** gives a **brisk effervescence** of CO2; **ethanal** gives no reaction, since it is not acidic enough to displace carbon dioxide. Tollens' reagent would work the other way round — the aldehyde gives a silver mirror and the acid does not.",
      },
      { label: "(ii) Oxime of acetone" },
      {
        text: "Acetone condenses with hydroxylamine, losing water, to give **propan-2-one oxime**:",
      },
      { equation: "CH3–CO–CH3 + NH2OH -> (CH3)2C=N–OH + H2O" },
      {
        text: "The structure is **(CH3)2C=N–OH** — the carbonyl oxygen is replaced by =N–OH, with the two methyl groups still on the carbon. This is a nucleophilic addition followed by elimination of water, and it is typical of the ammonia derivatives (hydrazine, phenylhydrazine, semicarbazide) that form the corresponding hydrazones and semicarbazones.",
      },
      { label: "(iii) The reaction chain" },
      { equation: "CH3COOH ->[PCl5] CH3COCl ->[H2 / Pd–BaSO4] CH3CHO ->[(i) CH3MgBr][(ii) H3O^+] (CH3)2CH–OH" },
      { equation: "CH3CHO ->[LiAlH4] CH3CH2OH" },
      {
        table: [
          ["", "Structure", "Name", "Step"],
          ["A", "CH3COCl", "Ethanoyl chloride", "PCl5 replaces –OH by –Cl"],
          ["B", "CH3CHO", "Ethanal", "**Rosenmund reduction**"],
          ["C", "(CH3)2CH–OH", "Propan-2-ol", "Grignard adds CH3, then hydrolysis"],
          ["D", "CH3CH2OH", "Ethanol", "LiAlH4 reduces the aldehyde"],
        ],
      },
      {
        text: "The key step is **Rosenmund reduction**: hydrogen over palladium **poisoned with BaSO4** stops the reduction cleanly at the aldehyde instead of running on to the alcohol. Without the poison, B would be ethanol and the branch to C would not work.",
      },
      {
        text: "Note that B is attacked by two different reagents. The **Grignard** adds a methyl group to the carbonyl carbon, so the two carbons of ethanal plus one make the three of propan-2-ol; **LiAlH4** simply reduces the C=O to CH–OH, keeping two carbons and giving ethanol.",
      },
    ],
    keyPoint:
      "Rosenmund's poisoned catalyst is what stops an acyl chloride at the aldehyde rather than the alcohol.",
  },
];
