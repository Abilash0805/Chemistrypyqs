import type { Question } from "@/types";

/**
 * CBSE 2023 Supplementary (Compartment) Examination, July 2023, paper 56/C/3,
 * with answers from the official Marking Scheme bound into the same PDF.
 *
 * Questions repeating one of the five main 2023 codes, or a question already
 * in the bank, are left out — among them Q8 ([Co(en)3]3+ isomerism), Q12
 * (lanthanoid oxidation state), Q13 (units of a zero order rate constant),
 * Q15 (Zn, Cd, Hg as transition elements), Q21 (Ea from a rate ratio) and
 * Q24 (Arrhenius equation and half-life).
 *
 * Three places where the printed scheme and the chemistry disagree are recorded
 * on the question rather than smoothed over: Q7, whose key contradicts the
 * gas-phase rule the question asks about; Q28(b), whose formula prints w2 in
 * both numerator and denominator though the substitution uses w1 correctly; and
 * Q35(b), whose stem names two different products for the same oxidation, which
 * the scheme covers with an explicit concession.
 */
export const P2023_56C3: Question[] = [
  /* ---------------------------------------------------------------- */
  /* SECTION A — MCQ, 1 mark each                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "p23f-1",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Iodoform test",
    years: [2023],
    question: "Pentan-2-one and Pentan-3-one can be distinguished by :",
    options: [
      "Fehling's test",
      "Sodium bicarbonate test",
      "Tollens' test",
      "Iodoform test",
    ],
    correct: 3,
    answer: [
      { text: "**Iodoform test.**" },
      {
        text: "The iodoform test responds to a **methyl ketone** — a CH3 group attached directly to the carbonyl carbon. Only pentan-2-one has one:",
      },
      {
        table: [
          ["Compound", "Structure", "CH3 next to C=O ?", "I2 / NaOH"],
          ["Pentan-2-one", "CH3–CO–CH2CH2CH3", "Yes", "Yellow CHI3 precipitate"],
          ["Pentan-3-one", "CH3CH2–CO–CH2CH3", "No", "No reaction"],
        ],
      },
      { equation: "CH3COCH2CH2CH3 + 3I2 + 4NaOH -> CHI3 + CH3CH2CH2COONa + 3NaI + 3H2O" },
      {
        text: "The other three fail because they do not distinguish the pair at all:",
      },
      {
        points: [
          "**Fehling's** and **Tollens'** test for an aldehyde — both compounds are ketones, so both are negative.",
          "**Sodium bicarbonate** tests for a carboxylic acid — neither compound is one, so both are negative.",
        ],
      },
    ],
    keyPoint:
      "Iodoform separates a methyl ketone from any other ketone; Fehling and Tollens only separate aldehydes from ketones.",
  },
  {
    id: "p23f-2",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Grignard reagent",
    years: [2023],
    question:
      "What would be the major product of the given reaction ?\nHCHO + CH3MgI ->[H2O] ?",
    options: ["Ethanal", "Propanol", "Ethanol", "Propanal"],
    correct: 2,
    answer: [
      { text: "**Ethanol.**" },
      {
        text: "A Grignard reagent adds its alkyl group to the carbonyl carbon; hydrolysis then puts an H on the oxygen. Count the carbons and the answer follows:",
      },
      {
        equations: [
          "HCHO + CH3MgI -> CH3CH2OMgI",
          "CH3CH2OMgI + H2O -> CH3CH2OH + Mg(OH)I",
        ],
      },
      {
        text: "One carbon from formaldehyde plus one from the methyl group gives a **two-carbon** product, which rules out both propanol and propanal immediately.",
      },
      {
        text: "The carbonyl decides the class of alcohol, and this is the one case that gives a primary alcohol:",
      },
      {
        table: [
          ["Carbonyl", "Product with RMgX, then H2O"],
          ["Methanal (HCHO)", "Primary alcohol"],
          ["Any other aldehyde", "Secondary alcohol"],
          ["Ketone", "Tertiary alcohol"],
        ],
      },
      {
        text: "Ethanal would need an oxidation afterwards, so it cannot be the direct product.",
      },
    ],
    keyPoint: "HCHO is the only carbonyl whose Grignard product is a primary alcohol.",
  },
  {
    id: "p23f-3",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Electrolytic cells",
    years: [2023],
    question: "A galvanic cell can behave as an electrolytic cell when :",
    options: ["E_cell = E_ext", "E_cell > E_ext", "E_cell = 0", "E_ext > E_cell"],
    correct: 3,
    answer: [
      { text: "**E_ext > E_cell.**" },
      {
        text: "Apply an opposing external voltage to a galvanic cell and three things can happen, depending on how it compares with the cell's own emf:",
      },
      {
        table: [
          ["Condition", "What happens", "Cell behaves as"],
          ["E_ext < E_cell", "Electrons flow the spontaneous way; zinc dissolves", "Galvanic"],
          ["E_ext = E_cell", "No current at all — the cell is balanced", "Neither"],
          ["E_ext > E_cell", "Current is driven backwards; zinc is deposited", "Electrolytic"],
        ],
      },
      {
        text: "Only when the external source **exceeds** the cell emf is the spontaneous reaction forced into reverse, which is exactly what an electrolytic cell does — electrical energy driving a non-spontaneous change.",
      },
      {
        text: "Option (a) is the condition for **zero current**, used in the potentiometric measurement of emf. Option (c), E_cell = 0, describes a **dead cell** at equilibrium, which cannot be driven by itself.",
      },
    ],
    keyPoint: "E_ext > E_cell reverses the cell reaction; E_ext = E_cell stops it.",
  },
  {
    id: "p23f-4",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Order of reaction",
    years: [2023],
    question:
      "A reaction is first order in A and second order in B. How is rate affected when concentration of both A and B are doubled ? Choose the correct option :",
    options: ["eight times", "three times", "four times", "two times"],
    correct: 0,
    answer: [
      { text: "**Eight times.**" },
      { text: "Write the rate law from the stated orders:" },
      { equation: "Rate = k[A]^1[B]^2" },
      { text: "Now double both concentrations and compare:" },
      { equation: "Rate' = k(2[A])^1(2[B])^2 = k × 2 × 4 × [A][B]^2 = 8 × Rate" },
      {
        text: "The doubling in A contributes a factor of **2** and the doubling in B a factor of **2² = 4**, and the two multiply.",
      },
      {
        text: "A quick check: the overall order is 1 + 2 = **3**, and doubling _(every)_ concentration in a reaction of order n multiplies the rate by 2^n — here 2³ = 8. Option (b), three times, is the trap of adding the orders instead of using them as exponents.",
      },
    ],
    keyPoint:
      "Doubling every concentration raises the rate by 2 to the power of the overall order.",
  },
  {
    id: "p23f-5",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Molecularity",
    years: [2023],
    question:
      "Given below is the decomposition of hydrogen peroxide in alkaline medium, which is catalysed by iodide ions :\n2H2O2 ->[I^−][alkaline medium] 2H2O + O2\nThe above reaction takes place in two steps :\nStep I : H2O2 + I^− -> H2O + IO^− (slow)\nStep II : H2O2 + IO^− -> H2O + I^− + O2\nMolecularity of Step I and Step II is :",
    options: [
      "Step I – 2, Step II – 2",
      "Step I – 1, Step II – 2",
      "Step I – 2, Step II – 1",
      "Step I – 3, Step II – 1",
    ],
    correct: 0,
    answer: [
      { text: "**Step I – 2, Step II – 2.**" },
      {
        text: "Molecularity is simply the **number of species colliding in that one elementary step**, read straight off the left-hand side. Both steps have two:",
      },
      {
        table: [
          ["Step", "Species colliding", "Molecularity"],
          ["I : H2O2 + I^− -> H2O + IO^−", "H2O2 and I^−", "2 — bimolecular"],
          ["II : H2O2 + IO^− -> H2O + I^− + O2", "H2O2 and IO^−", "2 — bimolecular"],
        ],
      },
      {
        text: "Two cautions that this question is built on. First, molecularity is counted **per elementary step**, never for the overall equation — the overall 2H2O2 -> 2H2O + O2 has no molecularity at all. Second, molecularity is about reactant _(species)_, and an **ion counts**: I^− and IO^− are each one colliding particle.",
      },
      {
        text: "The order, by contrast, comes from the **slow** step: Rate = k[H2O2][I^−], first order in each and second order overall. Iodide is regenerated in Step II, which is what makes it a catalyst rather than a reactant.",
      },
    ],
    keyPoint:
      "Molecularity is counted per elementary step and is always a small whole number; the overall reaction has none.",
  },
  {
    id: "p23f-6",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Acidity of phenols",
    years: [2023],
    question: "Choose the compound which is more acidic than phenol :",
    options: ["_(o)_-nitrophenol", "ethanol", "_(o)_-methylphenol", "_(o)_-methoxyphenol"],
    correct: 0,
    answer: [
      { text: "**_(o)_-Nitrophenol.**" },
      {
        text: "Acidity of a phenol is decided by what the ring substituent does to the **phenoxide** ion left behind. An electron-withdrawing group spreads the negative charge and stabilises it, so the proton comes off more readily.",
      },
      {
        table: [
          ["Compound", "Substituent effect", "Phenoxide", "vs phenol"],
          ["_(o)_-Nitrophenol", "–NO2 strongly withdrawing (–I, –R)", "Stabilised", "More acidic"],
          ["_(o)_-Methylphenol", "–CH3 releasing (+I)", "Destabilised", "Less acidic"],
          ["_(o)_-Methoxyphenol", "–OCH3 releasing (+R dominant)", "Destabilised", "Less acidic"],
          ["Ethanol", "No ring at all", "No delocalisation", "Far less acidic"],
        ],
      },
      {
        text: "The nitro group withdraws both **inductively** and by **resonance**, and from the ortho position it can also hydrogen bond to the O–H, which helps the proton leave. Its pK_a is about 7.2 against 10.0 for phenol.",
      },
      {
        text: "Ethanol is the instructive wrong answer. Its conjugate base, ethoxide, has the charge stuck on one oxygen with nothing to delocalise into, so ethanol (pK_a ≈ 16) is **weaker** than phenol by six orders of magnitude, not stronger.",
      },
    ],
    keyPoint:
      "Electron-withdrawing groups strengthen a phenol; electron-releasing groups and plain alcohols weaken it.",
  },
  {
    id: "p23f-7",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Basicity of amines",
    years: [2023],
    question:
      "Three compounds are given below :\n(C2H5)3N (I),  C2H5NH2 (II),  (C2H5)2NH (III)\nIdentify the correct decreasing order of their basic strength in gas phase :",
    options: ["II > III > I", "III > I > II", "III > II > I", "I > III > II"],
    correct: 3,
    answer: [
      { text: "**I > III > II**, that is (C2H5)3N > (C2H5)2NH > C2H5NH2." },
      {
        text: "In the **gas phase** there is no solvent, so solvation of the ammonium ion plays no part. The only thing left is the **+I effect** of the alkyl groups pushing electron density onto nitrogen and making its lone pair more available:",
      },
      {
        table: [
          ["Amine", "Ethyl groups on N", "Electron density on N"],
          ["(C2H5)3N  (I)", "3", "Highest — strongest base"],
          ["(C2H5)2NH  (III)", "2", "Intermediate"],
          ["C2H5NH2  (II)", "1", "Lowest — weakest base"],
        ],
      },
      {
        text: "So gas-phase basicity rises steadily with substitution: **3° > 2° > 1° > NH3**. NCERT states exactly this for the methylamines, and the ethyl series behaves the same way.",
      },
      {
        label: "Why the aqueous order is different",
        text: "In **water** three effects compete — the +I effect, the **steric** crowding that hinders solvation, and the **number of N–H bonds** available to hydrogen bond to water. A tertiary amine has no N–H left, so its cation is poorly solvated and it falls in the order. For ethylamines in water the order becomes (C2H5)2NH > (C2H5)3N > C2H5NH2, and for methylamines (CH3)2NH > CH3NH2 > (CH3)3N.",
      },
      {
        label: "A note on the marking scheme",
        text: "The official key for this question prints **(c)**, III > II > I. That is the _(aqueous)_ pattern of the methylamines, not the gas-phase order the question asks for. On the rule the question is testing, the answer is **(d)**. Write the gas-phase order and state the +I reasoning — that is what earns the mark on the same rule in every other paper.",
      },
      {
        text: "The board has acknowledged the distinction elsewhere. On the 2022 Term-II paper 56/2/1, which set the same ordering without naming a medium, the scheme accepted **both** answers \"as no medium (aqueous/gaseous) or phase is given\" — so the phase is exactly what decides the order, and this question does name it.",
      },
    ],
    keyPoint:
      "Gas phase: basicity follows the +I effect alone, so 3° > 2° > 1°. Water reverses parts of it because solvation and sterics enter.",
  },
  {
    id: "p23f-9",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Hofmann bromamide reaction",
    years: [2023],
    question:
      "Hoffmann Bromamide Degradation reaction is given by :",
    options: [
      "Nitrobenzene, C6H5NO2",
      "Phthalimide, the cyclic imide of benzene-1,2-dicarboxylic acid",
      "CH3–C≡N (ethanenitrile)",
      "CH3–CH2–CO–NH2 (propanamide)",
    ],
    correct: 3,
    answer: [
      { text: "**CH3–CH2–CO–NH2, propanamide.**" },
      {
        text: "The Hofmann bromamide degradation needs an **unsubstituted amide**, RCONH2. It converts that amide into a primary amine with **one carbon fewer**:",
      },
      { equation: "CH3CH2CONH2 + Br2 + 4NaOH -> CH3CH2NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        text: "Propanamide (three carbons) therefore gives **ethanamine** (two carbons) — the carbonyl carbon is lost as carbonate.",
      },
      {
        text: "Why the others cannot react:",
      },
      {
        points: [
          "**Nitrobenzene** has no –CONH2 group; it is reduced to aniline by Sn/HCl instead.",
          "**Phthalimide** is a cyclic imide with the N between two carbonyls, and its N–H carries no free NH2 — it is the substrate for the _(Gabriel)_ phthalimide synthesis, a different named reaction.",
          "**Ethanenitrile** is a nitrile, reduced to ethanamine by LiAlH4 or Na/C2H5OH — no carbon is lost there.",
        ],
      },
      {
        label: "The step that loses the carbon",
        text: "Bromine and alkali convert the amide to an N-bromoamide, which rearranges to an **isocyanate**; the isocyanate is then hydrolysed by the alkali to the amine and carbonate.",
      },
    ],
    keyPoint:
      "Hofmann bromamide needs RCONH2 and shortens the chain by one carbon; Gabriel needs phthalimide and does not.",
  },
  {
    id: "p23f-10",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Oxidation state in complexes",
    years: [2023],
    question:
      "Oxidation state of central metal atom in the given complex is :\n[Co(NH3)4(H2O)2]Cl3",
    options: ["+ 2", "+ 3", "+ 1", "+ 4"],
    correct: 1,
    answer: [
      { text: "**+3.**" },
      {
        text: "Three chlorides sit **outside** the square brackets as counter ions, so the complex ion itself must carry a 3+ charge:",
      },
      { equation: "[Co(NH3)4(H2O)2]Cl3 -> [Co(NH3)4(H2O)2]^3+ + 3Cl^−" },
      { text: "Now balance the charge inside the brackets. Both ligands are **neutral**:" },
      {
        table: [
          ["Species", "Number", "Charge each", "Total"],
          ["NH3", "4", "0", "0"],
          ["H2O", "2", "0", "0"],
          ["Co", "1", "x", "x"],
        ],
      },
      { equation: "$x + 4(0) + 2(0) = +3 \\;\\Rightarrow\\; x = +3$" },
      {
        text: "The trap is counting the chlorides as ligands. They are not coordinated here — the formula puts them outside the bracket, which is exactly how ionisation isomers are told apart.",
      },
    ],
    keyPoint:
      "Charge inside the bracket = sum of ligand charges + metal oxidation state; ions written outside are counter ions.",
  },
  {
    id: "p23f-11",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Molar conductivity and dilution",
    years: [2023],
    question:
      "Solutions of two electrolytes X and Y are diluted. Molar conductivity of X increases 25 times whereas that of Y increases 1·5 times. Which one is a stronger electrolyte ?",
    options: ["X", "Y", "Both X and Y", "None of the above"],
    correct: 1,
    answer: [
      { text: "**Y.**" },
      {
        text: "Molar conductivity rises on dilution for **every** electrolyte, but for two completely different reasons — and the _(size)_ of the rise is what tells them apart:",
      },
      {
        table: [
          ["", "Strong electrolyte", "Weak electrolyte"],
          ["Already dissociated ?", "Fully, at all concentrations", "Only partly"],
          ["Why Λm rises on dilution", "Ions get further apart, so interionic attraction falls", "Degree of dissociation α rises sharply"],
          ["Size of the rise", "Small", "Very large"],
          ["Approach to Λm°", "Gradual and linear in √c", "Steep, near infinite dilution"],
        ],
      },
      {
        text: "X rises **25 times** — that is the signature of a weak electrolyte whose α climbs from a small fraction towards 1. Y rises only **1·5 times**, the modest change expected when the ions were already all there and merely had to move apart. So **Y is the stronger electrolyte**.",
      },
      {
        text: "The counter-intuitive part is worth stating plainly: a _(larger)_ increase in molar conductivity means a _(weaker)_ electrolyte.",
      },
    ],
    keyPoint:
      "Small rise in Λm on dilution = strong electrolyte; a large rise means α was small to begin with.",
  },
  {
    id: "p23f-14",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Finkelstein reaction",
    years: [2023],
    question:
      "Which of the following reactions is a halogen exchange reaction :",
    options: [
      "C=C + HX -> CH–CX (Markovnikov addition)",
      "R–X + NaI ->[dry acetone] R–I + NaX",
      "R–OH + HCl ->[ZnCl2] R–Cl + H2O",
      "Toluene + Br2 ->[Fe][dark] o- and p-bromotoluene",
    ],
    correct: 1,
    answer: [
      { text: "**R–X + NaI ->[dry acetone] R–I + NaX** — the Finkelstein reaction." },
      {
        text: "A halogen **exchange** reaction swaps one halogen for another on a carbon that already carries a halogen. Only option (b) does that: the C–X bond is replaced by C–I, with X leaving as NaX.",
      },
      { equation: "R–Cl + NaI ->[dry acetone] R–I + NaCl↓" },
      {
        label: "Why dry acetone",
        text: "NaI dissolves in acetone but **NaCl and NaBr do not**. The precipitate leaves the solution, and by Le Chatelier's principle the equilibrium is pulled to the right. Water would defeat this by dissolving all three salts.",
      },
      { text: "The others are different reaction types entirely:" },
      {
        points: [
          "(a) **Electrophilic addition** of HX across a double bond — a halogen is added, not exchanged.",
          "(c) **Nucleophilic substitution** of –OH by –Cl (the Groves process, ZnCl2/HCl) — this _(introduces)_ the first halogen.",
          "(d) **Electrophilic aromatic substitution** — Br replaces a ring H, again introducing rather than exchanging.",
        ],
      },
      {
        label: "The related fluoride route",
        text: "Swarts reaction exchanges for fluorine instead, using a metal fluoride: CH3Br + AgF -> CH3F + AgBr.",
      },
    ],
    keyPoint:
      "Finkelstein exchanges X for I in dry acetone, driven by NaX precipitating; Swarts does the same for F.",
  },
  /* ---------------------------------------------------------------- */
  /* SECTION A — Assertion–Reason, 1 mark each                        */
  /* ---------------------------------------------------------------- */
  {
    id: "p23f-16",
    chapter: 10,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Oxidation of glucose",
    years: [2023],
    question:
      "**Assertion (A) :** Glucose gets oxidised to six carbon carboxylic acid on reaction with bromine water.\n**Reason (R) :** Glucose contains a ketonic group.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
    answer: [
      { text: "**(c)** — the assertion is true, the reason is false." },
      {
        label: "(A) is true",
        text: "Bromine water is a **mild** oxidising agent. It oxidises only the –CHO group, giving the six-carbon **gluconic acid**:",
      },
      { equation: "CH2OH(CHOH)4CHO + Br2 + H2O -> CH2OH(CHOH)4COOH + 2HBr" },
      {
        label: "(R) is false",
        text: "Glucose contains an **aldehydic** group, not a ketonic one. It is an **aldohexose**; the ketohexose is fructose. The very fact that bromine water oxidises it confirms the aldehyde — a ketone would not respond.",
      },
      {
        text: "This is the classic test that **separates glucose from fructose**: bromine water oxidises glucose but leaves fructose alone, whereas Tollens' and Fehling's reagents are alkaline and give a positive result with both, because the base isomerises fructose to glucose first.",
      },
      {
        text: "Note the contrast with a strong oxidant. Concentrated HNO3 attacks **both** ends, oxidising the terminal –CH2OH as well to give the dicarboxylic **saccharic (glucaric) acid**.",
      },
    ],
    keyPoint:
      "Bromine water: aldehyde only, gluconic acid. Conc. HNO3: both ends, saccharic acid. Glucose is an aldose throughout.",
  },
  {
    id: "p23f-17",
    chapter: 9,
    type: "assertion-reason",
    marks: 1,
    difficulty: "easy",
    topic: "Diazonium salts",
    years: [2023],
    question:
      "**Assertion (A) :** Benzene diazonium salt is stable and can be easily stored.\n**Reason (R) :** Benzene diazonium chloride decomposes easily.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
    answer: [
      { text: "**(d)** — the assertion is false, the reason is true." },
      {
        text: "The two statements **contradict** each other, which is the quickest route to the answer: they cannot both be true, so the choice is between (c) and (d), and deciding either one settles it.",
      },
      {
        label: "(A) is false",
        text: "Benzene diazonium chloride is a colourless crystalline solid that is **stable only in cold aqueous solution below 5 °C**. It cannot be stored.",
      },
      {
        label: "(R) is true",
        text: "Warmed above about 5 °C, or isolated dry, it decomposes — and dry it is **explosive**. In water it loses nitrogen to give phenol:",
      },
      { equation: "C6H5N2^+Cl^− + H2O ->[Δ] C6H5OH + N2↑ + HCl" },
      {
        text: "The instability is exactly what makes diazonium salts synthetically valuable: the –N2^+ group is an outstanding leaving group, escaping as nitrogen gas, which is why it converts to –OH, –Cl, –Br, –I, –CN, –NO2 or –H on demand.",
      },
      {
        text: "Preparation therefore keeps to 273–278 K throughout, and the salt is used **in situ** rather than stored:",
      },
      { equation: "C6H5NH2 + NaNO2 + 2HCl ->[273-278 K] C6H5N2^+Cl^− + NaCl + 2H2O" },
    ],
    keyPoint:
      "Diazonium salts are made cold and used at once; their instability is the point, not a defect.",
  },
  {
    id: "p23f-18",
    chapter: 7,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Nitration of phenol",
    years: [2023],
    question:
      "**Assertion (A) :** Phenol gives 2,4,6-trinitrophenol on treatment with concentrated HNO3 and concentrated H2SO4.\n**Reason (R) :** –OH group in phenol is _(m)_-directing.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
    answer: [
      { text: "**(c)** — the assertion is true, the reason is false." },
      {
        label: "(A) is true",
        text: "Concentrated nitric acid with concentrated sulphuric acid nitrates phenol three times over, giving **2,4,6-trinitrophenol** — picric acid:",
      },
      { equation: "C6H5OH + 3HNO3 ->[conc. H2SO4] C6H2(NO2)3OH + 3H2O" },
      {
        label: "(R) is false",
        text: "The –OH group is **ortho and para directing**, not meta. Its oxygen donates a lone pair into the ring by resonance, building up electron density at exactly the **2, 4 and 6** positions — which is why those three are the ones nitrated.",
      },
      {
        text: "So the assertion's product actually **disproves** the reason. Were –OH meta-directing, the product would be 3,5-dinitrophenol, not the 2,4,6 isomer.",
      },
      {
        text: "Two related facts worth carrying: –OH is a **strong activator**, so phenol nitrates far more readily than benzene — dilute HNO3 alone at 298 K already gives a mixture of _(o)_- and _(p)_-nitrophenol. And picric acid is a notably strong acid (pK_a ≈ 0.4) because three nitro groups stabilise the phenoxide.",
      },
    ],
    keyPoint:
      "–OH activates and directs ortho/para. Meta direction belongs to deactivators like –NO2 and –COOH.",
  },
  /* ---------------------------------------------------------------- */
  /* SECTION B — Very short answer, 2 marks each                      */
  /* ---------------------------------------------------------------- */
  {
    id: "p23f-19",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Nucleic acids and vitamins",
    years: [2023],
    question:
      "(i) Name any two bases which are common to both DNA and RNA.\n(ii) Which vitamin deficiency causes :\n(1) Bone deformities in children ?\n(2) Pernicious anaemia ?",
    answer: [
      { label: "(i) Bases common to DNA and RNA", text: "**Adenine, guanine and cytosine** — any two." },
      {
        table: [
          ["Base", "Type", "DNA", "RNA"],
          ["Adenine", "Purine", "Yes", "Yes"],
          ["Guanine", "Purine", "Yes", "Yes"],
          ["Cytosine", "Pyrimidine", "Yes", "Yes"],
          ["Thymine", "Pyrimidine", "Yes", "No"],
          ["Uracil", "Pyrimidine", "No", "Yes"],
        ],
      },
      {
        text: "Only the fifth base differs: DNA uses **thymine**, RNA replaces it with **uracil**. The other three are shared.",
      },
      { label: "(ii)(1) Bone deformities in children", text: "**Vitamin D** — its deficiency causes **rickets** in children and osteomalacia in adults." },
      { label: "(ii)(2) Pernicious anaemia", text: "**Vitamin B12** (cyanocobalamin)." },
    ],
    keyPoint: "A, G, C are shared; T is DNA-only and U is RNA-only. Rickets → vitamin D, pernicious anaemia → B12.",
  },
  {
    id: "p23f-19b",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Amino acids and glucose",
    years: [2023],
    question:
      "(i) Why do amino acids show amphoteric behaviour ?\n(ii) What happens when D-Glucose is treated with hydroxylamine ?",
    answer: [
      {
        label: "(i) Amphoteric behaviour",
        text: "Because the **same molecule carries both an acidic –COOH group and a basic –NH2 group**. In the solid and in solution the proton moves from one to the other, giving a **zwitterion** that can react with either an acid or a base:",
      },
      { equation: "H2N–CHR–COOH <=> H3N^+–CHR–COO^−" },
      {
        text: "The zwitterion then responds to whatever it meets:",
      },
      {
        equations: [
          "H3N^+–CHR–COO^− + H^+ -> H3N^+–CHR–COOH",
          "H3N^+–CHR–COO^− + OH^− -> H2N–CHR–COO^− + H2O",
        ],
      },
      {
        text: "The zwitterion also explains why amino acids are **crystalline solids with high melting points**, soluble in water but not in organic solvents — they are effectively internal salts.",
      },
      {
        label: "(ii) Glucose with hydroxylamine",
        text: "The aldehyde group condenses with NH2OH to give **glucose oxime**:",
      },
      { equation: "CH2OH(CHOH)4CHO + NH2OH -> CH2OH(CHOH)4CH=N–OH + H2O" },
      {
        text: "This is one of the reactions that **proves glucose contains a –CHO group**, alongside its reduction of Tollens' and Fehling's reagents and its oxidation by bromine water to gluconic acid.",
      },
    ],
    keyPoint:
      "Amino acids exist as zwitterions, so they neutralise both acid and base; NH2OH gives glucose oxime and proves the –CHO.",
  },
  {
    id: "p23f-20",
    chapter: 6,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Alkyl halide preparation",
    years: [2023],
    question:
      "(i) Write the structure of 1-chloro-4-ethylcyclohexane.\n(ii) Why is sulphuric acid not used during the reactions of alcohols with KI ?",
    answer: [
      {
        label: "(i) Structure",
        text: "A cyclohexane ring carrying **–Cl at C-1** and **–CH2CH3 at C-4**, the two groups directly opposite each other across the ring:",
      },
      { equation: "Cl–C6H10–CH2CH3    (1,4-disubstituted cyclohexane)" },
      {
        text: "Number the ring so the chlorine takes C-1 and the ethyl group lands on C-4 — the para-type positions, three carbons apart either way round.",
      },
      {
        label: "(ii) Why not H2SO4 with KI",
        text: "Because concentrated sulphuric acid is a strong **oxidising agent**. It first converts KI to HI, then promptly oxidises that HI to iodine, so the reagent is destroyed before it can react with the alcohol:",
      },
      {
        equations: [
          "KI + H2SO4 -> KHSO4 + HI",
          "2HI + H2SO4 -> I2 + SO2 + 2H2O",
        ],
      },
      {
        text: "With the HI gone, the intended substitution R–OH + HI -> R–I + H2O cannot proceed and the yield collapses.",
      },
      {
        text: "The standard fix is to use a **non-oxidising acid** instead — H3PO4 — which supplies the proton without destroying the iodide. The same problem arises with bromides, which is why NaBr/H2SO4 gives poor yields and KBr with H3PO4 is preferred.",
      },
    ],
    keyPoint:
      "Conc. H2SO4 oxidises HI to I2, so alcohols are converted to iodides using H3PO4 instead.",
  },
  {
    id: "p23f-20b",
    chapter: 6,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Boiling points and ambident nucleophiles",
    years: [2023],
    question:
      "(i) Arrange the following in increasing order of their boiling points :\n1-chloropropane, 2-chloropropane, 1-chlorobutane\n(ii) What is an ambident nucleophile ? Give one example.",
    answer: [
      {
        label: "(i) Increasing boiling point",
        text: "**2-chloropropane < 1-chloropropane < 1-chlorobutane.**",
      },
      {
        table: [
          ["Compound", "Carbons", "Chain", "Boiling point"],
          ["2-Chloropropane", "3", "Branched", "36 °C"],
          ["1-Chloropropane", "3", "Straight", "47 °C"],
          ["1-Chlorobutane", "4", "Straight", "78 °C"],
        ],
      },
      {
        text: "Two rules, applied in order. Within the **same** number of carbons, a **branched** isomer boils lower — branching makes the molecule more spherical, shrinking the surface area available for van der Waals contact. Across **different** chain lengths, more carbons mean a larger surface and stronger dispersion forces, so 1-chlorobutane boils highest.",
      },
      {
        label: "(ii) Ambident nucleophile",
        text: "A nucleophile with **two different nucleophilic sites**, so it can attack through either atom and give two different products.",
      },
      {
        text: "**Cyanide ion, CN^−**, is the standard example. It can attack through carbon or through nitrogen:",
      },
      {
        equations: [
          "R–X + KCN -> R–C≡N   (alkyl cyanide, carbon attacks)",
          "R–X + AgCN -> R–N≡C   (alkyl isocyanide, nitrogen attacks)",
        ],
      },
      {
        text: "Which site wins depends on the counter-ion: **KCN is largely ionic**, so the free CN^− attacks through the carbon that bears the higher electron density. **AgCN is largely covalent**, leaving only the nitrogen lone pair free. The nitrite ion, NO2^−, is ambident in the same way — KNO2 gives the nitroalkane, AgNO2 the alkyl nitrite.",
      },
    ],
    keyPoint:
      "Branching lowers boiling point at equal carbon count; KCN gives cyanides, AgCN gives isocyanides.",
  },
  {
    id: "p23f-22",
    chapter: 5,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Colour and nomenclature",
    years: [2023],
    question:
      "(a) Why is ZnSO4 salt white in colour ?\n(b) Write IUPAC name of the given complex :\nK2[Ni(CN)4]",
    answer: [
      {
        label: "(a) Why ZnSO4 is white",
        text: "Because **Zn^2+ has no unpaired electrons in its d orbitals** — the subshell is completely full:",
      },
      { equation: "Zn (Z = 30) : [Ar] 3d^10 4s^2   ->   Zn^2+ : [Ar] 3d^10" },
      {
        text: "Colour in a transition metal compound comes from a **d–d transition**: an electron absorbs visible light and jumps from a lower to a higher d level split by the ligand field. With d^10 there is no vacancy to jump into, so no visible light is absorbed and the salt appears **white**.",
      },
      {
        text: "This is why the whole Zn, Cd, Hg group gives colourless compounds, while Cu^2+ (d^9) is blue and Ni^2+ (d^8) is green.",
      },
      { label: "(b) IUPAC name of K2[Ni(CN)4]", text: "**Potassium tetracyanidonickelate(II).**" },
      {
        text: "Building it up:",
      },
      {
        points: [
          "Two K^+ outside, so the complex ion is [Ni(CN)4]^2−.",
          "Four CN^− at −1 each gives −4, so nickel is **+2**: x + 4(−1) = −2.",
          "Cation first: **potassium**.",
          "Ligand with its count: four cyanide → **tetracyanido** (the older form _(tetracyano)_ is also accepted).",
          "The complex ion is an **anion**, so the metal takes the –ate suffix: nickel → **nickelate**, with the oxidation state in Roman numerals.",
        ],
      },
      {
        text: "This complex is square planar and **diamagnetic** — the strong-field cyanide pairs up the d^8 electrons, leaving one d orbital empty for dsp^2 hybridisation.",
      },
    ],
    keyPoint:
      "d^10 means no d–d transition and no colour; an anionic complex always ends in –ate.",
  },
  {
    id: "p23f-23",
    chapter: 2,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Batteries and fuel cells",
    years: [2023],
    question:
      "(a) Why is lead storage battery regarded as a secondary cell ?\n(b) Give two examples of the fuels used in the fuel cell.",
    answer: [
      {
        label: "(a) Why it is a secondary cell",
        text: "Because **it can be recharged** — the cell reaction is reversible. Passing current back through the battery from an external source reverses the discharge reaction and regenerates the original electrodes, so it can be used through many cycles.",
      },
      { label: "On discharge", text: "" },
      {
        equations: [
          "Anode : Pb(s) + SO4^2−(aq) -> PbSO4(s) + 2e^−",
          "Cathode : PbO2(s) + SO4^2−(aq) + 4H^+(aq) + 2e^− -> PbSO4(s) + 2H2O(l)",
          "Overall : Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O",
        ],
      },
      {
        text: "On **charging**, the same equation runs right to left: the lead sulphate on both plates is converted back to Pb and PbO2, and the sulphuric acid is regenerated.",
      },
      {
        text: "Contrast a **primary** cell such as the dry cell, where the reaction cannot be reversed usefully and the cell is discarded once spent.",
      },
      { label: "(b) Fuels used in fuel cells", text: "**Hydrogen** and **methane** — methanol is equally acceptable." },
      {
        text: "In the H2–O2 fuel cell the gases are bubbled over porous carbon electrodes containing a catalyst, in concentrated aqueous NaOH:",
      },
      {
        equations: [
          "Anode : 2H2(g) + 4OH^−(aq) -> 4H2O(l) + 4e^−",
          "Cathode : O2(g) + 2H2O(l) + 4e^− -> 4OH^−(aq)",
          "Overall : 2H2(g) + O2(g) -> 2H2O(l)",
        ],
      },
      {
        text: "A fuel cell is neither primary nor secondary: it is never charged or discharged, but runs continuously as long as fuel is supplied. Its efficiency reaches about 70 % against 40 % for a thermal plant, and the only product is water.",
      },
    ],
    keyPoint:
      "Secondary = rechargeable because the cell reaction reverses; a fuel cell instead runs continuously on supplied fuel.",
  },
  {
    id: "p23f-25",
    chapter: 8,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Acid strength and Stephen's reaction",
    years: [2023],
    question:
      "(a) Why is CH3CHFCH2COOH a stronger acid than CH2FCH2CH2COOH ?\n(b) Write chemical equation for Stephen's reaction.",
    answer: [
      {
        label: "(a) Why the first acid is stronger",
        text: "Because the **–I effect of fluorine weakens sharply with distance from the –COOH group**. In CH3CHFCH2COOH the fluorine sits on the β-carbon, two bonds from the carboxyl; in CH2FCH2CH2COOH it is pushed out to the γ-carbon, three bonds away.",
      },
      {
        table: [
          ["Acid", "Position of F", "–I effect felt at –COOH", "Acid strength"],
          ["CH3CHFCH2COOH", "β (C-3)", "Stronger", "More acidic"],
          ["CH2FCH2CH2COOH", "γ (C-4)", "Weaker", "Less acidic"],
        ],
      },
      {
        text: "The electron-withdrawing fluorine pulls electron density away from the carboxylate, **delocalising and stabilising the negative charge** of the conjugate base. The closer it sits, the more charge it can drain, and the more readily the proton leaves.",
      },
      {
        text: "The inductive effect falls off steeply along a σ chain — roughly to a third with each additional carbon — so by the γ-position it is almost spent.",
      },
      {
        label: "(b) Stephen's reaction",
        text: "A nitrile is reduced by stannous chloride and hydrochloric acid to an imine, which on hydrolysis gives an **aldehyde**:",
      },
      {
        equations: [
          "RCN + SnCl2 + HCl -> RCH=NH",
          "RCH=NH + H3O^+ -> RCHO + NH3",
        ],
      },
      {
        text: "The value of the reaction is that it **stops at the aldehyde** — the imine intermediate is hydrolysed rather than reduced further, so no alcohol is formed. DIBAL-H achieves the same conversion.",
      },
    ],
    keyPoint:
      "The –I effect of a halogen dies away with distance, so a nearer substituent gives the stronger acid; Stephen's reaction takes RCN to RCHO.",
  },
  /* ---------------------------------------------------------------- */
  /* SECTION C — Short answer, 3 marks each                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p23f-26",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of phenols and ethers",
    years: [2023],
    question:
      "Write chemical equations for the following :\n(a) Reaction between phenol and Zn dust.\n(b) Reaction of anisole with bromine in ethanoic acid.\n(c) Reaction between methoxybenzene and HI.",
    answer: [
      {
        label: "(a) Phenol with zinc dust",
        text: "Zinc dust **reduces** phenol to benzene, taking the oxygen away as zinc oxide:",
      },
      { equation: "C6H5OH + Zn ->[Δ] C6H6 + ZnO" },
      {
        text: "This is the standard laboratory route from a phenol back to the parent arene, and it works because the C–O bond in phenol is weak enough for zinc to strip at high temperature.",
      },
      {
        label: "(b) Anisole with bromine in ethanoic acid",
        text: "The –OCH3 group is strongly **activating and ortho/para directing**, so bromination needs no Lewis acid catalyst at all. In ethanoic acid the **para** product dominates:",
      },
      { equation: "C6H5OCH3 + Br2 ->[CH3COOH] p-BrC6H4OCH3 + o-BrC6H4OCH3 + HBr" },
      {
        text: "The para isomer forms in about 90 % yield because the ortho positions are shielded by the methoxy group. The acetic acid is important: it is a **polar but non-ionising** solvent, which keeps the bromination from running away to the tribromo product the way it does with phenol in water.",
      },
      {
        label: "(c) Methoxybenzene with HI",
        text: "Anisole and methoxybenzene are the same compound. HI cleaves the ether, and the cleavage is **selective** — the iodide attacks the **methyl** carbon, not the ring carbon:",
      },
      { equation: "C6H5OCH3 + HI -> C6H5OH + CH3I" },
      {
        text: "The products are **phenol and iodomethane**, never iodobenzene and methanol. The reason is that the C–O bond to the ring has **partial double bond character** from resonance and resists nucleophilic attack, while the methyl carbon is an ordinary sp^3 centre open to SN2.",
      },
    ],
    keyPoint:
      "Aryl alkyl ethers always cleave at the alkyl–O bond, giving phenol plus the alkyl halide.",
  },
  {
    id: "p23f-27",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "SN1 and haloalkane properties",
    years: [2023],
    question:
      "(i) Why do tertiary alkyl halides undergo S_N1 reaction at a faster rate ?\n(ii) Define Enantiomers.\n(iii) Why is chloroform stored in dark coloured air tight bottles ?",
    answer: [
      {
        label: "(i) Why 3° halides are fastest in SN1",
        text: "Because SN1 goes through a **carbocation**, and a tertiary carbocation is the most stable one available. The slow, rate-determining step is the ionisation:",
      },
      { equation: "R3C–X ->[slow] R3C^+ + X^−" },
      {
        text: "Three alkyl groups stabilise that cation two ways — by **+I**, pushing electron density towards the positive carbon, and by **hyperconjugation**, with nine α-hydrogens available to delocalise the charge. The more stable the cation, the lower the activation energy and the faster the step.",
      },
      { equation: "3° > 2° > 1° > CH3^+   (order of carbocation stability, and of SN1 rate)" },
      {
        text: "Bulk helps as well: the crowded tertiary carbon relieves steric strain on going from tetrahedral sp^3 to planar sp^2, and the same crowding blocks the back-side attack that SN2 would need.",
      },
      {
        label: "(ii) Enantiomers",
        text: "**Optically active isomers that are related to each other as non-superimposable mirror images.**",
      },
      {
        text: "They have identical physical properties — melting point, boiling point, solubility, density — and differ only in **rotating plane-polarised light by equal amounts in opposite directions**, and in their behaviour towards other chiral reagents. A 1:1 mixture of the two is a **racemic mixture**, optically inactive by external compensation.",
      },
      {
        label: "(iii) Why chloroform is stored in dark air-tight bottles",
        text: "Because chloroform is **slowly oxidised by air in the presence of light** to **carbonyl chloride (phosgene)**, an extremely poisonous gas:",
      },
      { equation: "2CHCl3 + O2 ->[light] 2COCl2 + 2HCl" },
      {
        text: "Dark bottles keep the light out and air-tight closures keep the oxygen out, so neither reagent for the oxidation is available. For extra safety the bottles are filled **to the brim** to exclude air, and about 1 % ethanol is added — it converts any phosgene formed into harmless diethyl carbonate.",
      },
    ],
    keyPoint:
      "SN1 rate follows carbocation stability, so 3° is fastest; chloroform + O2 + light gives phosgene, hence dark full bottles.",
  },
  {
    id: "p23f-27b",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Elimination and SN2",
    years: [2023],
    question:
      "(i) Write the major alkene that would be formed by dehydrohalogenation of 2-Bromopentane.\n(ii) Which would undergo S_N2 reaction at a faster rate and why ?\nCH3–CH2–Br and (CH3)3C–Br\n(iii) Why is chlorobenzene less reactive towards nucleophilic substitution reaction ?",
    answer: [
      {
        label: "(i) Major alkene from 2-bromopentane",
        text: "**Pent-2-ene**, CH3–CH=CH–CH2CH3.",
      },
      {
        text: "Dehydrohalogenation removes the bromine together with a **β-hydrogen**, and 2-bromopentane has β-hydrogens on two different sides — C-1 and C-3:",
      },
      {
        equations: [
          "CH3CHBrCH2CH2CH3 ->[alc. KOH] CH3CH=CHCH2CH3   (pent-2-ene, major)",
          "CH3CHBrCH2CH2CH3 ->[alc. KOH] CH2=CHCH2CH2CH3   (pent-1-ene, minor)",
        ],
      },
      {
        text: "**Saytzeff's rule** decides between them: the major product is the **more substituted**, and therefore more stable, alkene. Pent-2-ene is disubstituted while pent-1-ene is monosubstituted, so pent-2-ene wins — its double bond is stabilised by hyperconjugation from more alkyl groups.",
      },
      {
        label: "(ii) Which is faster in SN2",
        text: "**CH3CH2Br**, because it is a **primary** alkyl halide.",
      },
      {
        text: "SN2 is a single-step reaction in which the nucleophile attacks from the side **opposite** the leaving group, passing through a crowded five-coordinate transition state. Steric access to the carbon is therefore everything:",
      },
      {
        table: [
          ["Halide", "Class", "Groups blocking attack", "SN2 rate"],
          ["CH3CH2Br", "1°", "One CH3 and two H", "Fast"],
          ["(CH3)3CBr", "3°", "Three bulky CH3", "Effectively zero"],
        ],
      },
      {
        text: "The tertiary halide is so hindered that it takes the SN1 route instead. The SN2 order is the exact reverse of SN1: **CH3 > 1° > 2° > 3°**.",
      },
      {
        label: "(iii) Why chlorobenzene resists nucleophilic substitution",
        text: "Because the **C–Cl bond acquires partial double bond character through resonance**. A lone pair on chlorine is delocalised into the ring:",
      },
      {
        text: "That shortens and strengthens the bond, so it is far harder to break than the ordinary single C–Cl bond of an alkyl halide. Three further factors compound it — the carbon is **sp^2** and so more electronegative, holding its electrons more tightly; the **ring's π electrons repel** an approaching nucleophile; and the phenyl cation that SN1 would require is highly unstable.",
      },
      {
        text: "Chlorobenzene therefore needs forcing conditions — NaOH at 623 K and 300 atm (the Dow process) — where chloroethane reacts with aqueous alkali on warming.",
      },
    ],
    keyPoint:
      "Saytzeff gives the more substituted alkene; SN2 favours the least hindered carbon; aryl halides resist substitution because C–X is partly double.",
  },
  {
    id: "p23f-28",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "van't Hoff factor and molar mass",
    years: [2023],
    question:
      "(a) What will be the van't Hoff factor for a dilute solution of K2SO4, assuming complete dissociation ?\n(b) 1·00 g of non-electrolyte solute dissolved in 50 g of benzene lowered the freezing point of benzene by 0·40 K. Find the molar mass of the solute. (K_f for benzene = 5·12 K kg mol^−1)",
    answer: [
      { label: "(a) van't Hoff factor for K2SO4", text: "**i = 3.**" },
      { equation: "K2SO4 -> 2K^+ + SO4^2−" },
      {
        text: "One formula unit gives **three** ions — two potassium and one sulphate. With dissociation complete and the solution dilute enough for ion pairing to be negligible:",
      },
      {
        equation:
          "$i = \\dfrac{\\text{particles after dissociation}}{\\text{particles before}} = \\dfrac{3}{1} = 3$",
      },
      { label: "(b) Molar mass from freezing point depression", text: "" },
      {
        text: "The solute is a **non-electrolyte**, so i = 1 and the ordinary depression formula applies. Rearranged for molar mass:",
      },
      {
        equation:
          "$M_2 = \\dfrac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1}$",
      },
      { label: "Given", text: "K_f = 5·12 K kg mol^−1, w2 = 1·00 g solute, w1 = 50 g benzene, ΔT_f = 0·40 K." },
      { equation: "$M_2 = \\dfrac{5.12 \\times 1.00 \\times 1000}{0.40 \\times 50} = \\dfrac{5120}{20}$" },
      { equation: "$M_2 = 256 \\text{ g mol}^{-1}$" },
      {
        text: "Note which mass goes where: **w2 is the solute** in the numerator and **w1 the solvent** in the denominator. The official scheme prints w2 in both places, but substitutes 50 — the solvent — so the printed working is right even though the formula as typed is not. Carrying the unit matters too; the scheme deducts half a mark for an answer given without g mol^−1.",
      },
    ],
    keyPoint:
      "i counts the ions one formula unit releases; for a non-electrolyte i = 1 and M2 = Kf·w2·1000 / (ΔTf·w1).",
  },
  {
    id: "p23f-29",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Properties of amines",
    years: [2023],
    question:
      "Answer any **three** of the following questions. Give reasons for the following :\n(a) Diazonium salts of aromatic amines are more stable than aliphatic amines.\n(b) Amines are less soluble in water as compared to alcohols.\n(c) How is the basic strength of aromatic amines affected by the presence of an electron releasing group ?\n(d) Why does amino group in aniline act as a powerful activator and ortho and para directing towards electrophilic substitution ?",
    answer: [
      {
        label: "(a) Aromatic diazonium salts are more stable",
        text: "Because of **resonance**. In an aryl diazonium ion the –N2^+ group is conjugated with the benzene ring, so the positive charge is delocalised over the ring as well as the two nitrogens, and the C–N bond gains partial double bond character.",
      },
      {
        text: "An **aliphatic** diazonium ion has no such delocalisation. The charge stays on the nitrogens and the salt decomposes immediately, losing N2 even at 273 K, which is why aliphatic diazonium salts cannot be isolated at all while benzene diazonium chloride survives in cold solution.",
      },
      {
        label: "(b) Amines are less soluble than alcohols",
        text: "Because the **N–H bond is less polar than the O–H bond** — nitrogen is less electronegative than oxygen — so amines form **weaker hydrogen bonds** with water.",
      },
      {
        table: [
          ["", "Alcohols", "Amines"],
          ["Bond to H", "O–H", "N–H"],
          ["Electronegativity", "O = 3.5", "N = 3.0"],
          ["H-bond to water", "Stronger", "Weaker"],
          ["Solubility", "Higher", "Lower"],
        ],
      },
      {
        text: "Within the amines, solubility falls **3° < 2° < 1°**, since a tertiary amine has no N–H left to donate a hydrogen bond at all, and falls with chain length as the hydrocarbon part grows.",
      },
      {
        label: "(c) Effect of an electron releasing group",
        text: "An electron releasing group **increases basic strength**. It pushes electron density into the ring and onto the nitrogen, making the lone pair more available to a proton and stabilising the ammonium ion formed.",
      },
      { equation: "p-toluidine > aniline > p-nitroaniline" },
      {
        text: "So _(p)_-toluidine, with its +I methyl group, is a stronger base than aniline, while the electron-withdrawing nitro group makes _(p)_-nitroaniline far weaker.",
      },
      {
        label: "(d) Why –NH2 activates and directs ortho/para",
        text: "Because the **nitrogen lone pair is delocalised into the ring** by resonance. Electron density builds up specifically at the **ortho and para** positions, so the ring is far more nucleophilic than benzene and the electrophile attacks where the density is greatest.",
      },
      {
        text: "The activation is so strong that aniline brominates three times over without a catalyst, giving 2,4,6-tribromoaniline. Controlling it requires acetylation of the –NH2 first, which moderates the donation.",
      },
      {
        text: "One consequence worth remembering: aniline **cannot be nitrated or Friedel–Crafts alkylated directly** in acid, because the acid protonates the nitrogen to –NH3^+, which is strongly deactivating and _(meta)_-directing.",
      },
    ],
    keyPoint:
      "Resonance stabilises aryl diazonium ions and makes –NH2 an o/p activator; weaker N–H hydrogen bonding makes amines less soluble than alcohols.",
  },
  {
    id: "p23f-30",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Valence bond theory",
    years: [2023],
    question:
      "Using valence bond theory, predict :\n(a) Hybridisation of central metal atom of the complex [Co(NH3)6]^3+.\n(b) Its shape and magnetic behaviour.\n(c) Whether it is a high spin or a low spin complex.\n[Atomic number : Co = 27]",
    answer: [
      { label: "(a) Hybridisation", text: "**d^2sp^3.**" },
      { text: "Start from the metal ion. Cobalt is Z = 27, so:" },
      {
        equations: [
          "Co : [Ar] 3d^7 4s^2",
          "Co^3+ : [Ar] 3d^6",
        ],
      },
      {
        text: "Free Co^3+ has d^6 spread as four unpaired electrons. **NH3 is a strong field ligand**, so it forces those six electrons to pair up into three of the five 3d orbitals, vacating **two inner 3d orbitals**. Those two, with the 4s and the three 4p, hybridise to give six equivalent **d^2sp^3** orbitals, each accepting a lone pair from one ammonia.",
      },
      { label: "(b) Shape and magnetic behaviour", text: "**Octahedral** and **diamagnetic**." },
      {
        text: "Six d^2sp^3 orbitals point to the corners of an octahedron. All six d electrons are paired, so n = 0 and:",
      },
      { equation: "$\\mu = \\sqrt{n(n+2)} = \\sqrt{0} = 0 \\text{ BM}$" },
      { label: "(c) High spin or low spin", text: "**Low spin** — an inner orbital complex." },
      {
        text: "Because the pairing happens _(before)_ hybridisation, inner 3d orbitals are used, which is what 'inner orbital' and 'low spin' mean. Contrast the same metal with a weak field ligand:",
      },
      {
        table: [
          ["Complex", "Ligand field", "Hybridisation", "Unpaired e^−", "Magnetism"],
          ["[Co(NH3)6]^3+", "Strong", "d^2sp^3 (inner)", "0", "Diamagnetic"],
          ["[CoF6]^3−", "Weak", "sp^3d^2 (outer)", "4", "Paramagnetic"],
        ],
      },
      {
        text: "Fluoride cannot force pairing, so the d^6 stays spread out and the empty **4d** orbitals must be used instead — an outer orbital, high spin complex with μ = √24 ≈ 4·9 BM.",
      },
    ],
    keyPoint:
      "Strong field → pairing → inner d^2sp^3 → low spin, diamagnetic. Weak field → outer sp^3d^2 → high spin, paramagnetic.",
  },
  /* ---------------------------------------------------------------- */
  /* SECTION D — Case-based, 4 marks each                             */
  /* ---------------------------------------------------------------- */
  {
    id: "p23f-31",
    chapter: 10,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Carbohydrates",
    years: [2023],
    passage:
      "Carbohydrates are the major components of all living organisms. Sugars are carbohydrates. The major types of sugars include monosaccharides and disaccharides. The main difference between monosaccharides, disaccharides and polysaccharides is that monosaccharides are monomer of sugars and disaccharides are composed of two monomers, whereas polysaccharides are composed of a large number of monomers. Monosaccharides are single sugar molecules which act as the building blocks of disaccharides and polysaccharides. Disaccharides are also simple sugars. Disaccharides are classified into two groups according to their reducing strength : Reducing and Non-reducing sugars. When a polymer is formed from a monomer, a condensation reaction occurs that forms a glycosidic bond and water molecule is lost. Starch, glycogen and cellulose are examples of polysaccharides. Starch is found in many parts of plant cell and consists of amylose and amylopectin. Glycogen is the major carbohydrate storage product found in humans. It is present in liver, muscles and brain.\nCellulose is the most abundant organic molecule on Earth. It makes up around 50% of all organic carbon.",
    question:
      "(a) Name the linkage which connects monosaccharide units in polysaccharides.\n(b) Carbohydrates are classified on the basis of their behaviour on hydrolysis. Write the hydrolysis products of sucrose.\n(c) Write two differences between Amylose and Amylopectin.",
    answer: [
      { label: "(a) The linkage", text: "**Glycosidic linkage** — a C–O–C bridge formed when two –OH groups condense and a molecule of water is lost." },
      {
        label: "(b) Hydrolysis products of sucrose",
        text: "**D-(+)-Glucose and D-(−)-Fructose**, one molecule of each:",
      },
      { equation: "C12H22O11 + H2O ->[H^+ or invertase] C6H12O6 + C6H12O6" },
      {
        text: "Sucrose is a **non-reducing** sugar because its glycosidic linkage ties up the anomeric carbon of both units — C-1 of glucose and C-2 of fructose — leaving no free aldehyde or ketone. Hydrolysis frees them, so the products **are** reducing sugars.",
      },
      { label: "(c) Amylose against amylopectin", text: "" },
      {
        table: [
          ["Amylose", "Amylopectin"],
          ["Soluble in water", "Insoluble in water"],
          ["Linear, unbranched long chain", "Branched chain polymer"],
          ["About 15–20 % of starch", "About 80–85 % of starch"],
          ["Only C-1→C-4 glycosidic links", "C-1→C-4 links plus C-1→C-6 links at branch points"],
        ],
      },
      {
        text: "Either of the first two pairs earns the marks. Both are polymers of α-D-glucose; they differ only in whether the chain branches.",
      },
    ],
    keyPoint:
      "Glycosidic linkage joins monosaccharides; sucrose hydrolyses to glucose + fructose; amylose is linear and soluble, amylopectin branched and insoluble.",
  },
  {
    id: "p23f-31b",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Reducing sugars and invert sugar",
    years: [2023],
    question:
      "(i) What are reducing sugars ?\n(ii) Sucrose is dextrorotatory but the mixture obtained after hydrolysis is laevorotatory. Why ?",
    answer: [
      {
        label: "(i) Reducing sugars",
        text: "**Sugars which reduce Fehling's or Tollens' reagent.** They do so because they carry a **free aldehydic or ketonic group** — an anomeric carbon not locked into a glycosidic linkage — so the ring can open in solution and expose the carbonyl.",
      },
      {
        text: "All monosaccharides are reducing. Among the disaccharides, **maltose and lactose** are reducing; **sucrose** is not.",
      },
      {
        label: "(ii) Why the hydrolysate is laevorotatory",
        text: "Because hydrolysis of sucrose produces an equimolar mixture of **dextrorotatory glucose** and **laevorotatory fructose**, and the fructose rotates light more strongly than the glucose, so the sum comes out negative:",
      },
      {
        table: [
          ["Species", "Specific rotation", "Sense"],
          ["Sucrose", "+66.5°", "Dextrorotatory"],
          ["D-(+)-Glucose", "+52.5°", "Dextrorotatory"],
          ["D-(−)-Fructose", "−92.4°", "Laevorotatory"],
          ["Equimolar mixture", "(+52.5 − 92.4)/2 = −20.0°", "Laevorotatory"],
        ],
      },
      { equation: "C12H22O11 + H2O ->[H^+] C6H12O6 (glucose) + C6H12O6 (fructose)" },
      {
        text: "Because the sign of rotation **inverts** from + to −, the process is called **inversion** and the product mixture is **invert sugar**.",
      },
    ],
    keyPoint:
      "Reducing sugars have a free anomeric carbon; fructose's −92.4° outweighs glucose's +52.5°, so invert sugar is laevorotatory.",
  },
  {
    id: "p23f-32",
    chapter: 1,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Raoult's law and deviations",
    years: [2023],
    passage:
      "Raoult's law for volatile liquids states that the partial vapour pressure of each component in the solution is directly proportional to its mole fraction, whereas for a non-volatile solute, it states that the vapour pressure of a solution of a non-volatile solute is equal to the vapour pressure of the pure solvent at that temperature multiplied by its mole fraction. Two liquids A and B are mixed with each other to form a solution, the vapour phase consists of both components of the solution. Once the components in the solution have reached equilibrium, the total vapour pressure of the solution can be determined by combining Raoult's law with Dalton's law of partial pressures. If a non-volatile solute B is dissolved into a solvent A to form a solution, the vapour pressure of the solution will be lower than that of the pure solvent. The solutions which obey Raoult's law over the entire range of concentration are ideal solutions, whereas the solutions for which vapour pressure is either higher or lower than that predicted by Raoult's law are called non-ideal solutions. Non-ideal solutions are identified by determining the strength of the intermolecular forces between the different molecules in that particular solution. They can either show positive or negative deviation from Raoult's law depending on whether the A – B interactions in solution are stronger or weaker than A – A and B – B interactions.",
    question:
      "(a) 20 mL of a liquid A was mixed with 20 mL of liquid B. The volume of resulting solution was found to be less than 40 mL. What do you conclude from the above data ?\n(b) Which of the following show positive deviation from Raoult's law ?\nCarbon disulphide and Acetone; Phenol and Aniline; Ethanol and Acetone\n(c) The vapour pressure of a solution of glucose in water is 750 mm Hg at 100°C. Calculate the mole fraction of solute.\n(Vapour pressure of water at 373 K = 760 mm Hg)",
    answer: [
      {
        label: "(a) What the volume contraction tells you",
        text: "The solution shows a **negative deviation from Raoult's law**. The A–B interactions are **stronger** than the A–A and B–B interactions, so the molecules are pulled closer together and the mixture occupies less space than the sum of its parts.",
      },
      {
        text: "The accompanying signs all follow from that one fact:",
      },
      {
        table: [
          ["Property", "Negative deviation", "Positive deviation"],
          ["A–B vs A–A, B–B", "Stronger", "Weaker"],
          ["ΔV on mixing", "Negative (contraction)", "Positive (expansion)"],
          ["ΔH on mixing", "Negative (heat given out)", "Positive (heat absorbed)"],
          ["Vapour pressure", "Lower than predicted", "Higher than predicted"],
          ["Azeotrope", "Maximum boiling", "Minimum boiling"],
        ],
      },
      {
        label: "(b) Which pairs deviate positively",
        text: "**Carbon disulphide and acetone**, and **ethanol and acetone**.",
      },
      {
        text: "In each of those, mixing **breaks** hydrogen bonds or dipole interactions without replacing them with anything as strong — ethanol's hydrogen-bonded network is disrupted by acetone, which cannot donate a hydrogen bond in return. **Phenol and aniline** is the odd one out: a strong O–H···N hydrogen bond forms between them, so that pair deviates **negatively**.",
      },
      { label: "(c) Mole fraction of glucose", text: "" },
      { text: "Glucose is non-volatile, so Raoult's law applies to the solvent alone:" },
      { equation: "$p_1 = p_1^{\\,0}\\,x_1 \\quad\\Rightarrow\\quad x_1 = \\dfrac{p_1}{p_1^{\\,0}}$" },
      { equation: "$x_1 = \\dfrac{750}{760} = 0.987$" },
      { text: "The mole fractions sum to 1, so for the **solute**:" },
      { equation: "$x_2 = 1 - x_1 = 1 - 0.987 = 0.013$" },
      {
        text: "Read the question carefully here — it asks for the **solute**, so 0.987 is the trap answer. A sanity check: a mole fraction of about 0.013 is a dilute solution, which is what a 10 mm Hg lowering out of 760 should give.",
      },
    ],
    keyPoint:
      "Volume contraction on mixing means stronger A–B forces and negative deviation; for a non-volatile solute x2 = 1 − p/p°.",
  },
  {
    id: "p23f-32b",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Volatile and non-volatile solutes",
    years: [2023],
    question:
      "The boiling point of solution increases when 1 mol of NaCl is added to 1 litre of water while addition of 1 mol of methanol to one litre of water decreases its boiling point. Explain the above observations.",
    answer: [
      {
        label: "NaCl raises the boiling point",
        text: "NaCl is a **non-volatile** solute. Its ions occupy part of the surface and contribute nothing to the vapour, so the **vapour pressure of the solution falls** below that of pure water. A lower vapour pressure must be heated further to reach atmospheric pressure, so the **boiling point rises**.",
      },
      {
        text: "The effect is doubled here, since NaCl gives two ions per formula unit — i = 2 — and boiling point elevation depends on the number of particles, not their identity:",
      },
      { equation: "ΔT_b = i K_b m" },
      {
        label: "Methanol lowers it",
        text: "Methanol is a **volatile** solute — it boils at 338 K, well below water. It adds its own partial pressure to the mixture, so the **total vapour pressure of the solution is higher** than that of pure water. Atmospheric pressure is then reached at a lower temperature, so the **boiling point falls**.",
      },
      {
        text: "The contrast is the whole point: colligative properties such as boiling point elevation are defined for a **non-volatile** solute. Once the solute contributes vapour of its own, the reasoning reverses.",
      },
      {
        table: [
          ["Solute added to water", "Volatility", "Vapour pressure of solution", "Boiling point"],
          ["NaCl", "Non-volatile", "Decreases", "Increases"],
          ["Methanol", "Volatile", "Increases", "Decreases"],
        ],
      },
    ],
    keyPoint:
      "Boiling point elevation is a colligative property only for non-volatile solutes; a volatile solute raises the vapour pressure and lowers the boiling point.",
  },
  /* ---------------------------------------------------------------- */
  /* SECTION E — Long answer, 5 marks each                            */
  /* ---------------------------------------------------------------- */
  {
    id: "p23f-33",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "d- and f-block properties",
    years: [2023],
    question:
      "Answer the following questions :\n(a) The chemistry of the actinoids is more complex as compared to lanthanoids. Why ?\n(b) Why is E° for Mn^3+/Mn^2+ redox couple more positive ?\n(c) Why do transition metals form large numbers of complex compounds ?\n(d) How does acidified potassium permanganate solution react with Fe^2+ ions ? Write ionic equation.\n(e) Calculate the 'spin only' magnetic moment of a divalent ion of a metal M in aqueous solution. The atomic number of the metal M is 25.",
    answer: [
      {
        label: "(a) Why actinoid chemistry is more complex",
        text: "Because many of the actinoids are **radioactive**, and they **exist in a far wider range of oxidation states**.",
      },
      {
        table: [
          ["", "Lanthanoids", "Actinoids"],
          ["Common oxidation states", "Mainly +3", "+3 to +7"],
          ["Radioactivity", "Only promethium", "All of them"],
          ["5f vs 4f orbitals", "4f well shielded", "5f more exposed, take part in bonding"],
        ],
      },
      {
        text: "The **5f orbitals are less shielded** than the 4f, so they extend further out and participate in bonding, which opens up the extra oxidation states. Uranium alone shows +3, +4, +5 and +6. Radioactivity makes the later members short-lived and hard to study at all.",
      },
      {
        label: "(b) Why E°(Mn^3+/Mn^2+) is strongly positive",
        text: "Because Mn^2+ has the **stable half-filled d^5 configuration**, so Mn^3+ is reduced to it very readily:",
      },
      { equation: "Mn^3+ + e^− -> Mn^2+   (E° = +1.51 V)" },
      {
        text: "Mn^3+ is d^4; gaining one electron takes it to the extra-stable d^5. The same point can be put the other way round, as the scheme does — the **third ionisation enthalpy of manganese is much larger** than its neighbours', because that third electron has to come out of the half-filled shell.",
      },
      {
        text: "This is why Mn^3+ is a strong oxidising agent, while Cr^3+ (d^3, stable half-filled t2g) is not reduced easily at all.",
      },
      {
        label: "(c) Why transition metals form many complexes",
        text: "Three reasons acting together:",
      },
      {
        points: [
          "**Small size** of the atoms and ions, giving a high charge-to-size ratio that pulls ligands in strongly.",
          "**High ionic charge** on the cations, which polarises the ligand and strengthens the bond.",
          "**Availability of vacant d orbitals** of the right energy and symmetry to accept lone pairs from ligands.",
        ],
      },
      {
        label: "(d) Acidified KMnO4 with Fe^2+",
        text: "Permanganate oxidises iron(II) to iron(III) and is itself reduced to Mn^2+:",
      },
      { equation: "MnO4^− + 8H^+ + 5Fe^2+ -> Mn^2+ + 4H2O + 5Fe^3+" },
      {
        text: "Manganese falls from +7 to +2, a five-electron change, so **five** Fe^2+ are needed per permanganate. The deep purple colour discharges as the reaction ends, which is what makes this a **self-indicating** titration.",
      },
      { label: "(e) Spin-only magnetic moment", text: "The metal is Z = 25, manganese, so the divalent ion is **Mn^2+**:" },
      {
        equations: [
          "Mn (Z = 25) : [Ar] 3d^5 4s^2",
          "Mn^2+ : [Ar] 3d^5   ->   n = 5 unpaired electrons",
        ],
      },
      { equation: "$\\mu = \\sqrt{n(n+2)} = \\sqrt{5(5+2)} = \\sqrt{35}$" },
      { equation: "$\\mu = 5.91 \\text{ BM}$" },
      {
        text: "Water is a weak field ligand, so no pairing occurs and all five d electrons stay unpaired — the maximum for any first-row transition metal ion, which is why 5·91 BM is the largest spin-only value in the series.",
      },
    ],
    keyPoint:
      "d^5 stability drives both the high E°(Mn^3+/Mn^2+) and the maximum spin-only moment of 5.91 BM for Mn^2+.",
  },
  {
    id: "p23f-34",
    chapter: 2,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Nernst equation and thermodynamics",
    years: [2023],
    question:
      "(i) A cell and its emf is given below :\nPt (s) | H2 (g, 1 bar) | H^+ (aq, 1 M) || Cu^2+ (aq, 1 M) | Cu (s), emf of the cell = + 0·34 V\nWrite the reduction half-reaction at cathode.\n(ii) How is standard Gibbs energy for a reaction related to equilibrium constant ?\n(iii) Calculate emf of the given cell :\nMg (s) | Mg^2+ (0·1 M) || Cu^2+ (1·0 × 10^−3 M) | Cu (s)\nGiven : E°(Cu^2+/Cu) = + 0·34 V, E°(Mg^2+/Mg) = − 2·37 V  (log 100 = 2)",
    answer: [
      {
        label: "(i) Reduction half-reaction at the cathode",
        text: "The cathode is written on the **right** of the cell diagram, and that is where reduction happens:",
      },
      { equation: "Cu^2+(aq) + 2e^− -> Cu(s)" },
      {
        text: "The left-hand electrode is the standard hydrogen electrode, whose E° is 0 V by definition, so the measured cell emf of +0·34 V **is** E°(Cu^2+/Cu).",
      },
      {
        label: "(ii) Standard Gibbs energy and the equilibrium constant",
        text: "",
      },
      { equation: "$\\Delta_r G^\\circ = -RT \\ln K$" },
      {
        text: "Equivalently, in base-ten logarithms and via the cell potential:",
      },
      {
        equations: [
          "$\\Delta_r G^\\circ = -2.303\\,RT \\log K$",
          "$\\Delta_r G^\\circ = -nFE^\\circ_{cell}$",
        ],
      },
      {
        text: "A **negative** ΔG° therefore means K > 1 and a spontaneous reaction; the two expressions together give log K = nE°/0·059 at 298 K.",
      },
      { label: "(iii) emf of the magnesium–copper cell", text: "" },
      { text: "Magnesium, with the more negative E°, is the anode; copper the cathode:" },
      {
        equations: [
          "Anode : Mg(s) -> Mg^2+(aq) + 2e^−",
          "Cathode : Cu^2+(aq) + 2e^− -> Cu(s)",
          "Overall : Mg(s) + Cu^2+(aq) -> Mg^2+(aq) + Cu(s)",
        ],
      },
      { label: "Standard emf", text: "" },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.34 - (-2.37) = 2.71 \\text{ V}$" },
      { label: "Apply the Nernst equation", text: "n = 2, and the quotient uses products over reactants:" },
      {
        equation:
          "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.059}{2}\\log\\dfrac{[\\mathrm{Mg^{2+}}]}{[\\mathrm{Cu^{2+}}]}$",
      },
      {
        equation:
          "$E_{cell} = 2.71 - \\dfrac{0.059}{2}\\log\\dfrac{10^{-1}}{10^{-3}} = 2.71 - \\dfrac{0.059}{2}\\log 10^{2}$",
      },
      { equation: "$E_{cell} = 2.71 - \\dfrac{0.059}{2} \\times 2 = 2.71 - 0.059$" },
      { equation: "$E_{cell} = 2.65 \\text{ V}$" },
      {
        text: "Note that the solids Mg and Cu do not enter the quotient, and that the answer sits just **below** E° because the product ion is more concentrated than the reactant ion. The scheme deducts half a mark for an answer written without the volt.",
      },
    ],
    keyPoint:
      "ΔG° = −nFE° = −2.303RT log K; in the Nernst quotient products go on top and solids are omitted.",
  },
  {
    id: "p23f-34b",
    chapter: 2,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Kohlrausch's law, Faraday and Kc",
    years: [2023],
    question:
      "(i) State Kohlrausch's law of independent migration of ions.\n(ii) How much electricity in terms of Faraday is required to produce 40 g of Al from molten Al2O3 ? (Given : atomic mass of Al = 27 u)\n(iii) Calculate log K_c for the following reaction at 298 K :\nZn (s) + Cu^2+ (aq) <=> Zn^2+ (aq) + Cu (s)\nGiven : E°(Zn^2+/Zn) = − 0·76 V, E°(Cu^2+/Cu) = + 0·34 V",
    answer: [
      {
        label: "(i) Kohlrausch's law",
        text: "**The limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and the cation of the electrolyte.**",
      },
      { equation: "$\\Lambda_m^\\circ = \\nu_+\\lambda_+^\\circ + \\nu_-\\lambda_-^\\circ$" },
      {
        text: "At infinite dilution the ions are so far apart that each migrates independently of the other, so each contributes a fixed amount whatever its partner. This is what allows Λm° of a **weak** electrolyte — which can never be measured by extrapolation — to be assembled from strong electrolyte values.",
      },
      { label: "(ii) Faraday needed for 40 g of aluminium", text: "The reduction at the cathode is a three-electron change:" },
      { equation: "Al^3+ + 3e^− -> Al" },
      {
        text: "So **27 g of Al (1 mol) requires 3 F**. By proportion:",
      },
      { equation: "$\\text{Electricity} = \\dfrac{3 \\times 40}{27} = 4.44 \\text{ F}$" },
      {
        text: "Aluminium's 3+ charge is what makes its extraction so power-hungry — three faradays per mole against two for copper or zinc.",
      },
      { label: "(iii) log Kc for the Daniell cell reaction", text: "Zinc is oxidised, so it is the anode:" },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.34 - (-0.76) = 1.10 \\text{ V}$" },
      { text: "Two electrons are transferred, so n = 2. At 298 K:" },
      { equation: "$\\log K_c = \\dfrac{n E^\\circ_{cell}}{0.059}$" },
      { equation: "$\\log K_c = \\dfrac{2 \\times 1.10}{0.059} = 37.22$" },
      {
        text: "A log Kc of 37 means Kc ≈ 10^37 — the reaction goes essentially to completion, which is why a zinc rod dipped in copper sulphate solution strips the copper out almost entirely.",
      },
      {
        text: "The 0·059 comes from 2·303RT/F evaluated at 298 K; at any other temperature the full expression must be used.",
      },
    ],
    keyPoint:
      "Λm° adds ionic contributions; moles of electrons = n × moles of metal; log Kc = nE°/0.059 at 298 K.",
  },
  {
    id: "p23f-35",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Rosenmund and Cannizzaro reactions",
    years: [2023],
    question:
      "Compound A undergoes Rosenmund reduction to give compound B with molecular formula C7H6O. Compound B does not give Fehling's test but reacts with conc. NaOH to give C and D.\nIdentify A, B, C and D and write all the reactions involved.\nWrite one chemical test to distinguish between compound B and propanone.",
    answer: [
      { label: "The four compounds", text: "" },
      {
        table: [
          ["Compound", "Name", "Formula"],
          ["A", "Benzoyl chloride", "C6H5COCl"],
          ["B", "Benzaldehyde", "C6H5CHO"],
          ["C", "Benzyl alcohol", "C6H5CH2OH"],
          ["D", "Sodium benzoate", "C6H5COONa"],
        ],
      },
      {
        label: "Step 1 — work back from the Rosenmund reduction",
        text: "Rosenmund reduction converts an **acid chloride** to an **aldehyde**, using hydrogen over palladium poisoned with barium sulphate. B has the formula C7H6O, which is benzaldehyde, so A must be benzoyl chloride:",
      },
      { equation: "C6H5COCl + H2 ->[Pd / BaSO4] C6H5CHO + HCl" },
      {
        text: "The **poisoned** catalyst is essential: unpoisoned palladium would carry the reduction on past the aldehyde to the alcohol. Barium sulphate lowers its activity just enough to stop at B.",
      },
      {
        label: "Step 2 — the Fehling's clue",
        text: "Benzaldehyde **does not** give Fehling's test, although it is an aldehyde. Fehling's solution works for aliphatic aldehydes only; **aromatic aldehydes do not respond**. This confirms B is aromatic rather than an aliphatic C7 aldehyde. Benzaldehyde does still reduce Tollens' reagent.",
      },
      {
        label: "Step 3 — conc. NaOH gives C and D",
        text: "Benzaldehyde has **no α-hydrogen**, so with concentrated alkali it undergoes the **Cannizzaro reaction** — a disproportionation in which one molecule is reduced to the alcohol and another oxidised to the salt of the acid:",
      },
      { equation: "2C6H5CHO + conc. NaOH ->[Δ] C6H5CH2OH + C6H5COONa" },
      {
        text: "So **C = benzyl alcohol** and **D = sodium benzoate**. An aldehyde with an α-hydrogen would have given the aldol condensation instead.",
      },
      {
        label: "Test to distinguish benzaldehyde from propanone",
        text: "The **iodoform test**. Warm each with iodine and sodium hydroxide:",
      },
      {
        points: [
          "**Propanone**, CH3COCH3, is a methyl ketone, so it gives a **yellow precipitate of iodoform, CHI3** — a positive test.",
          "**Benzaldehyde**, C6H5CHO, has no CH3 attached to the carbonyl, so there is **no reaction**.",
        ],
      },
      { equation: "CH3COCH3 + 3I2 + 4NaOH -> CHI3↓ + CH3COONa + 3NaI + 3H2O" },
      {
        text: "Tollens' reagent would serve equally: benzaldehyde gives a silver mirror and propanone does not.",
      },
    ],
    keyPoint:
      "Rosenmund stops at the aldehyde thanks to the poisoned catalyst; no α-hydrogen means Cannizzaro, not aldol.",
  },
  {
    id: "p23f-35b",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Aldol condensation and oxidation",
    years: [2023],
    question:
      "Compound A with molecular formula (C2H6O) on oxidation by PCC gives compound B, which on treatment with dilute alkali forms compound C which is a β-hydroxy aldehyde. B on oxidation by potassium permanganate forms D. Identify A, B, C and D and write all the chemical equations involved.",
    answer: [
      { label: "The four compounds", text: "" },
      {
        table: [
          ["Compound", "Name", "Formula"],
          ["A", "Ethanol", "CH3CH2OH"],
          ["B", "Ethanal", "CH3CHO"],
          ["C", "3-Hydroxybutanal", "CH3CH(OH)CH2CHO"],
          ["D", "Ethanoic acid", "CH3COOH"],
        ],
      },
      {
        label: "Step 1 — A from its formula",
        text: "C2H6O with an oxidation that gives an aldehyde must be the **primary alcohol**, ethanol, not dimethyl ether. **PCC** oxidises a primary alcohol to the aldehyde and stops there:",
      },
      { equation: "CH3CH2OH ->[PCC] CH3CHO" },
      {
        text: "That selectivity is the reason PCC is specified. A stronger oxidant would carry ethanol straight through to the acid.",
      },
      {
        label: "Step 2 — dilute alkali gives the β-hydroxy aldehyde",
        text: "Ethanal **has α-hydrogens**, so dilute alkali brings about the **aldol condensation**. Two molecules join, and the product carries an –OH on the carbon β to the –CHO:",
      },
      { equation: "2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO" },
      {
        text: "So **C = 3-hydroxybutanal**, the aldol itself. On heating it would lose water to give but-2-enal, but the question stops at the β-hydroxy aldehyde.",
      },
      {
        label: "Step 3 — the permanganate oxidation",
        text: "**KMnO4 is a strong oxidising agent**, so it carries ethanal on to the carboxylic acid:",
      },
      { equation: "CH3CHO ->[KMnO4] CH3COOH" },
      {
        text: "**D = ethanoic acid.** The same reagent takes ethanol all the way to the acid in one step, which is the contrast PCC was chosen to avoid:",
      },
      { equation: "CH3CH2OH ->[KMnO4] CH3COOH" },
      {
        label: "A note on the question's wording",
        text: "The stem says the alkali gives C _(and)_ that permanganate oxidation of B gives C, which cannot both be true — the two products are different compounds. The marking scheme resolves it by identifying the oxidation product as **D** and states that **full marks are awarded if the candidate identifies D and writes the oxidation of B in any reasonable way**. Answer as set out above and the mark is safe either way.",
      },
    ],
    keyPoint:
      "PCC stops at the aldehyde, KMnO4 goes through to the acid, and an α-hydrogen is what makes the aldol possible.",
  },
];
