import type { Question } from "@/types";

/**
 * CBSE 2023 Main, paper 56/5/1 Set-1, with answers from the official Marking
 * Scheme bound into the same PDF.
 *
 * Questions repeating an earlier 2023 paper are left out.
 *
 * Two board concessions are recorded rather than smoothed over: Q16, where the
 * scheme accepts either (a) or (b), and Q34(b)(i), which prints "ethanal acid"
 * for "ethanal" and is marked correct if attempted.
 */
export const P2023_5651: Question[] = [
  /* ---------------------------------------------------------------- */
  /* SECTION A — MCQ, 1 mark each                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "p23e-3",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Galvanic cells",
    years: [2023],
    question:
      "A voltaic cell is made by connecting two half cells represented by the half equations below :\nSn^2+ (aq) + 2e^− -> Sn (s), E° = −0.14 V\nFe^3+ (aq) + e^− -> Fe^2+ (aq), E° = +0.77 V\nWhich statement is correct about this voltaic cell ?",
    options: [
      "Fe^2+ is oxidised and the voltage of the cell is −0.91 V",
      "Sn is oxidised and the voltage of the cell is 0.91 V",
      "Fe^2+ is oxidised and the voltage of the cell is 0.91 V",
      "Sn is oxidised and the voltage of the cell is 0.63 V",
    ],
    correct: 1,
    answer: [
      { text: "**Sn is oxidised and the voltage of the cell is 0.91 V.**" },
      {
        label: "Step 1 — which half-cell is the anode",
        text: "In a **spontaneous** cell the half-reaction with the **more negative** E° runs in reverse, as oxidation. Here that is the tin couple at −0.14 V, so **tin metal is oxidised**:",
      },
      { equation: "Sn(s) -> Sn^2+(aq) + 2e^−" },
      {
        text: "Fe^3+ is therefore **reduced** to Fe^2+, not oxidised — which rules out (a) and (c) immediately.",
      },
      { label: "Step 2 — the cell voltage" },
      {
        equation:
          "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.77 - (-0.14) = 0.91\\ \\text{V}$",
      },
      {
        text: "Option (d) subtracts the wrong way (0.77 − 0.14 = 0.63), which is the most common slip — mind the double negative.",
      },
      { label: "The overall cell reaction" },
      { equation: "Sn(s) + 2Fe^3+(aq) -> Sn^2+(aq) + 2Fe^2+(aq)" },
      {
        text: "The iron half-equation is doubled so the electrons balance, but **E° is not doubled** — electrode potential is an intensive property and does not depend on how the equation is written.",
      },
      {
        text: "A positive E°_cell confirms the reaction is spontaneous, which is what makes it a voltaic cell at all.",
      },
    ],
    keyPoint: "The more negative E° is the anode; E°cell = cathode − anode, and E° never scales with the equation.",
  },
  {
    id: "p23e-4",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Electrolysis",
    years: [2023],
    question:
      "Four half reactions I to IV are shown below :\nI. 2Cl^− -> Cl2 + 2e^−\nII. 4OH^− -> O2 + 2H2O + 2e^−\nIII. Na^+ + e^− -> Na\nIV. 2H^+ + 2e^− -> H2\nWhich two of these reactions are most likely to occur when concentrated brine is electrolysed ?",
    options: ["I and III", "I and IV", "II and III", "II and IV"],
    correct: 1,
    answer: [
      { text: "**I and IV.**" },
      {
        text: "Brine is concentrated aqueous NaCl, so four species compete — Na^+, Cl^−, and the H^+ and OH^− from water. One reaction happens at each electrode.",
      },
      {
        label: "At the anode (oxidation) — reaction I",
        text: "The candidates are chloride (I) and hydroxide/water (II). On standard potentials alone water should win, but **oxygen has a large overpotential** on most anode materials while chlorine has almost none. Adding that kinetic barrier in, **chlorine is evolved**.",
      },
      { equation: "2Cl^− -> Cl2 + 2e^−" },
      {
        label: "At the cathode (reduction) — reaction IV",
        text: "The candidates are sodium ion (III) and hydrogen ion (IV). Here it is not close:",
      },
      {
        table: [
          ["Half reaction", "E°", "Occurs?"],
          ["2H^+ + 2e^− -> H2", "**0.00 V**", "**Yes** — far easier to reduce"],
          ["Na^+ + e^− -> Na", "−2.71 V", "No"],
        ],
      },
      {
        text: "Sodium is one of the hardest ions to reduce, so **hydrogen is liberated** instead. (Sodium metal can only be obtained by electrolysing _(molten)_ NaCl, where no water is present — the Down's process.)",
      },
      {
        text: "This is the **chlor-alkali process**: chlorine at the anode, hydrogen at the cathode, and NaOH left in solution as the third product.",
      },
    ],
  },
  {
    id: "p23e-6",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Dichromate structure",
    years: [2023],
    question: "In the two tetrahedral structures of the dichromate ion :",
    options: [
      "4 Cr–O bonds are equivalent in length.",
      "6 Cr–O bonds are equivalent in length.",
      "All Cr–O bonds are equivalent in length.",
      "All Cr–O bonds are non-equivalent.",
    ],
    correct: 1,
    answer: [
      { text: "**6 Cr–O bonds are equivalent in length.**" },
      {
        text: "The dichromate ion, Cr2O7^2−, is built from **two CrO4 tetrahedra sharing one corner** — a single bridging oxygen between the two chromium atoms.",
      },
      {
        text: "Counting the oxygens: seven in total, of which **one is the bridge** and the other **six are terminal**, three on each chromium.",
      },
      {
        table: [
          ["Type of Cr–O bond", "How many", "Bond length", "Character"],
          ["**Terminal**", "**6**", "**~163 pm — all equal**", "Partial double bond"],
          ["Bridging (Cr–O–Cr)", "2", "~179 pm", "Single bond"],
        ],
      },
      {
        text: "The six terminal bonds are equivalent by symmetry and are **shorter**, because those oxygens can form π bonds with the chromium by donating into its empty d orbitals. The two bonds to the bridging oxygen are longer, since that oxygen's electrons are shared between two metal centres.",
      },
      {
        text: "So (c) is wrong because the bridging bonds differ, and (d) is wrong because the six terminal bonds _(are)_ equivalent. The Cr–O–Cr bridge angle is about 126°.",
      },
    ],
  },
  {
    id: "p23e-11",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Acidity of carboxylic acids",
    years: [2023],
    question: "Which one of the following has the lowest pK_a value ?",
    options: [
      "CH3–COOH",
      "O2N–CH2–COOH",
      "Cl–CH2–COOH",
      "HCOOH",
    ],
    correct: 1,
    answer: [
      { text: "**O2N–CH2–COOH, nitroethanoic acid.**" },
      {
        text: "Remember that **lowest pK_a means strongest acid**. Acid strength here is decided by how well the substituent stabilises the carboxylate ion by withdrawing electron density (−I effect).",
      },
      {
        table: [
          ["Acid", "Substituent effect", "pK_a"],
          ["**O2N–CH2–COOH**", "**–NO2, strongest −I**", "**1.68**"],
          ["Cl–CH2–COOH", "–Cl, strong −I", "2.86"],
          ["HCOOH", "Only –H, no alkyl group to donate", "3.75"],
          ["CH3–COOH", "–CH3 **releases** electrons (+I)", "4.76"],
        ],
      },
      {
        text: "The **nitro group** is the most powerful electron-withdrawing substituent of the set, acting by both −I and −R, so it spreads the negative charge of the carboxylate furthest and gives the most stable anion.",
      },
      {
        text: "At the other end, methanoic acid is stronger than ethanoic acid for the mirror-image reason: it has no alkyl group at all, so nothing pushes electron density onto the carboxylate to destabilise it.",
      },
    ],
  },
  {
    id: "p23e-13",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Order from initial rates",
    years: [2023],
    question:
      "The following experimental rate data were obtained for A (g) + B (g) -> C (g) + D (g) at 25 °C :\nExp 1: [A] = 3.0 × 10^−2, [B] = 2.0 × 10^−2, rate = 1.89 × 10^−4\nExp 2: [A] = 3.0 × 10^−2, [B] = 4.0 × 10^−2, rate = 1.89 × 10^−4\nExp 3: [A] = 6.0 × 10^−2, [B] = 4.0 × 10^−2, rate = 7.56 × 10^−4\n(all concentrations in mol dm^−3, rates in mol dm^−3 s^−1)\nWhat are the orders with respect to A and B ?",
    options: [
      "A: zero, B: second",
      "A: first, B: zero",
      "A: second, B: zero",
      "A: second, B: first",
    ],
    correct: 2,
    answer: [
      { text: "**Second order in A, zero order in B.**" },
      {
        label: "Order with respect to B — compare experiments 1 and 2",
        text: "Here [A] is **held constant** and [B] is doubled from 2.0 × 10^−2 to 4.0 × 10^−2:",
      },
      { equation: "$\\text{rate}: 1.89 \\times 10^{-4} \\longrightarrow 1.89 \\times 10^{-4}$" },
      {
        text: "The rate is **completely unchanged**. Doubling a reactant and getting no response means the reaction is **zero order in B**.",
      },
      {
        label: "Order with respect to A — compare experiments 2 and 3",
        text: "Now [B] is held constant and [A] is doubled from 3.0 × 10^−2 to 6.0 × 10^−2:",
      },
      { equation: "$\\dfrac{7.56 \\times 10^{-4}}{1.89 \\times 10^{-4}} = 4 = 2^2$" },
      {
        text: "Doubling [A] **quadruples** the rate, so the reaction is **second order in A**.",
      },
      { equation: "$\\text{Rate} = k[A]^2[B]^0 = k[A]^2$" },
      {
        text: "The overall order is therefore **2**, and the unit of k is L mol^−1 s^−1.",
      },
      {
        text: "The method is worth stating generally: to find the order in one reactant, pick the **two experiments where only that reactant changes**. Here experiments 1 and 2 isolate B, and 2 and 3 isolate A.",
      },
    ],
    keyPoint: "Isolate one reactant at a time by choosing the pair of experiments where only it changes.",
  },
  {
    id: "p23e-17",
    chapter: 8,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Hell-Volhard-Zelinsky reaction",
    years: [2023],
    question:
      "Assertion (A) : Acetic acid but not formic acid can be halogenated in the presence of red P and Cl2.\nReason (R) : Acetic acid is a weaker acid than formic acid.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 1,
    answer: [
      { text: "**(b)** — both true, but R does not explain A." },
      {
        label: "A is true — and the real reason is structural",
        text: "Halogenation with red phosphorus and a halogen is the **Hell-Volhard-Zelinsky** reaction, and it substitutes specifically at the **α-carbon**:",
      },
      { equation: "CH3–COOH ->[(i) Cl2 / red P][(ii) H2O] Cl–CH2–COOH" },
      {
        text: "Acetic acid has a **CH3 group next to the carboxyl**, so it has three α-hydrogens to replace. **Formic acid, HCOOH, has no α-carbon at all** — the carboxyl group is attached directly to a hydrogen. With nothing to substitute, the reaction simply cannot occur.",
      },
      {
        label: "R is true but irrelevant",
        text: "Acetic acid (pK_a 4.76) is indeed weaker than formic acid (pK_a 3.75), because the methyl group releases electron density onto the carboxylate while formic acid has no such group.",
      },
      {
        text: "But **acidity has nothing to do with it**. HVZ depends on the presence of an α-hydrogen, not on how readily the –COOH proton comes off. The two statements are both correct and entirely unconnected — which is precisely what (b) means.",
      },
      {
        text: "The same structural point explains why **benzoic acid** also fails to undergo HVZ: its carboxyl is attached to an aromatic ring carbon that bears no hydrogen.",
      },
    ],
    keyPoint: "HVZ needs an α-hydrogen. Formic and benzoic acids have no α-carbon, so neither responds.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION B — very short answer, 2 marks each                      */
  /* ---------------------------------------------------------------- */
  {
    id: "p23e-21",
    chapter: 5,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Ligands and linkage isomerism",
    years: [2023],
    question:
      "(a) Which of the following species cannot act as a ligand ? Give reason.\nOH^−, NH4^+, CH3NH2, H2O\n(b) The complex [Co(NH3)5(NO2)]Cl2 is red in colour. Give the IUPAC name of its linkage isomer.",
    answer: [
      { label: "(a) The species that cannot be a ligand" },
      { text: "**NH4^+, the ammonium ion.**" },
      {
        text: "**Reason: it has no lone pair of electrons to donate.** Nitrogen's lone pair has already been used to form the fourth N–H bond, so nothing remains for the metal.",
      },
      {
        table: [
          ["Species", "Lone pairs on the donor atom", "Ligand?"],
          ["OH^−", "Three, on oxygen", "Yes"],
          ["**NH4^+**", "**None**", "**No**"],
          ["CH3NH2", "One, on nitrogen", "Yes"],
          ["H2O", "Two, on oxygen", "Yes"],
        ],
      },
      {
        text: "Its **positive charge** is a second objection — the metal centre is usually a cation, so NH4^+ would be repelled rather than attracted.",
      },
      { label: "(b) The linkage isomer and its name" },
      {
        text: "Writing the ligand as **NO2** means it is bonded through **nitrogen**, so the red compound is the nitrito-N isomer. Its linkage isomer binds through **oxygen** instead, giving [Co(NH3)5(ONO)]Cl2:",
      },
      { text: "**Pentaamminenitrito-O-cobalt(III) chloride**" },
      {
        points: [
          "Ligands alphabetically — **ammine** before **nitrito**, the prefix _(penta)_ ignored for alphabetising.",
          "Cobalt's oxidation state: x + 5(0) + (−1) = +2, so **x = +3**.",
          "The counter-ion, chloride, is named last as a separate word.",
        ],
      },
      {
        text: "This is the textbook pair of **linkage isomers**. The N-bonded form is **yellow** and the O-bonded form **red**, so the colour alone identifies which is which — and the O-bonded isomer slowly rearranges to the more stable N-bonded one.",
      },
    ],
  },
  {
    id: "p23e-23",
    chapter: 7,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Phenols",
    years: [2023],
    question:
      "For the pair phenol and cyclohexanol, answer the following :\n(a) Why is phenol more acidic than cyclohexanol ?\n(b) Give one chemical test to distinguish between the two.",
    answer: [
      { label: "(a) Why phenol is the stronger acid" },
      {
        text: "Because the **phenoxide ion is stabilised by resonance**, while the cyclohexoxide ion is not.",
      },
      {
        text: "When phenol loses its proton, the negative charge on oxygen is **delocalised into the benzene ring**, spreading over the ortho and para carbons. Spreading the charge lowers the anion's energy, so the equilibrium sits further towards dissociation.",
      },
      {
        text: "Cyclohexanol has no such outlet. Its ring is **saturated** with no π system, so the charge stays localised on the single oxygen — and the alkyl ring's **+I effect** pushes even more electron density onto it, making matters worse.",
      },
      {
        table: [
          ["Compound", "Anion stabilised by resonance?", "pK_a"],
          ["**Phenol**", "**Yes**", "**10.0**"],
          ["Cyclohexanol", "No", "~18"],
        ],
      },
      {
        text: "That is a difference of about 10^8 in acid strength — the ring being aromatic rather than saturated is the whole of it.",
      },
      { label: "(b) A test to distinguish them" },
      {
        text: "Add **neutral ferric chloride** solution to each.",
      },
      {
        table: [
          ["Compound", "With neutral FeCl3", "With NaOH"],
          ["**Phenol**", "**Violet colouration**", "Dissolves, forming sodium phenoxide"],
          ["Cyclohexanol", "No colour change", "No reaction"],
        ],
      },
      {
        text: "Phenol gives a characteristic **violet or purple** colour with neutral FeCl3, from a coloured iron–phenoxide complex; cyclohexanol gives nothing.",
      },
      {
        text: "The **sodium hydroxide** test works equally well and follows directly from part (a): phenol is acidic enough to dissolve in aqueous NaOH, whereas cyclohexanol is not. Either answer earns the mark.",
      },
    ],
  },
  {
    id: "p23e-25",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Reactions of glucose",
    years: [2023],
    question:
      "Give the reaction of glucose with hydrogen cyanide. Presence of which group is confirmed by this reaction ?",
    answer: [
      { label: "The reaction" },
      {
        text: "Glucose adds HCN across its carbonyl group to give the **cyanohydrin**:",
      },
      { equation: "CHO–(CHOH)4–CH2OH + HCN -> NC–CH(OH)–(CHOH)4–CH2OH" },
      {
        text: "The cyanide ion attacks the carbonyl carbon and the proton goes to the oxygen, so the carbon that was the aldehyde now carries both **–CN** and **–OH**. This is ordinary **nucleophilic addition**, exactly as an aldehyde or ketone would undergo.",
      },
      { label: "What it confirms" },
      {
        text: "It confirms the presence of a **carbonyl group** — specifically the **aldehyde (–CHO) group** in glucose.",
      },
      {
        text: "Only a carbonyl carbon is electrophilic enough to be attacked by cyanide in this way; the five hydroxyl groups in glucose do not react with HCN at all.",
      },
      {
        label: "Where it fits in the structure determination",
        text: "This is one of the classic pieces of evidence for the open-chain structure of glucose, alongside the oxime it forms with hydroxylamine (also a carbonyl test), the silver mirror it gives with Tollens' reagent, and the **gluconic acid** produced by mild oxidation with bromine water.",
      },
      {
        text: "There is a subtlety worth knowing: glucose exists mainly in its **cyclic hemiacetal** form, where no free –CHO is present, so these reactions proceed through the small proportion of open-chain form in equilibrium with it. That is also why glucose does **not** give some other typical aldehyde tests, such as the Schiff test.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION C — short answer, 3 marks each                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p23e-26",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Rate of reaction and half-life",
    years: [2023],
    question:
      "(a) For the reaction 2N2O5 (g) -> 4NO2 (g) + O2 (g) at 318 K, calculate the rate of reaction if the rate of disappearance of N2O5 is 1.4 × 10^−3 mol L^−1 s^−1.\n(b) For a first order reaction derive the relationship t_99% = 2 t_90%.",
    answer: [
      { label: "(a) Rate of reaction" },
      {
        text: "The rate of reaction divides each species' rate of change by its stoichiometric coefficient:",
      },
      {
        equation:
          "$\\text{Rate} = -\\dfrac{1}{2}\\dfrac{d[\\mathrm{N_2O_5}]}{dt} = +\\dfrac{1}{4}\\dfrac{d[\\mathrm{NO_2}]}{dt} = +\\dfrac{d[\\mathrm{O_2}]}{dt}$",
      },
      {
        text: "The rate of disappearance of N2O5 is given as 1.4 × 10^−3 mol L^−1 s^−1, so:",
      },
      { equation: "$\\text{Rate} = \\tfrac{1}{2} \\times 1.4 \\times 10^{-3} = 7.0 \\times 10^{-4}\\ \\text{mol L}^{-1}\\text{s}^{-1}$" },
      { text: "**Rate of reaction = 7.0 × 10^−4 mol L^−1 s^−1**" },
      { label: "(b) Deriving t_99% = 2 t_90%" },
      {
        text: "Start from the integrated first order rate equation:",
      },
      { equation: "$t = \\dfrac{2.303}{k}\\log\\dfrac{[R]_0}{[R]}$" },
      { label: "For 90% completion" },
      {
        text: "90% has reacted, so 10% remains: [R] = [R]0/10.",
      },
      { equation: "$t_{90\\%} = \\dfrac{2.303}{k}\\log 10 = \\dfrac{2.303}{k}\\times 1 = \\dfrac{2.303}{k}$" },
      { label: "For 99% completion" },
      {
        text: "99% has reacted, so 1% remains: [R] = [R]0/100.",
      },
      { equation: "$t_{99\\%} = \\dfrac{2.303}{k}\\log 100 = \\dfrac{2.303}{k}\\times 2 = \\dfrac{2 \\times 2.303}{k}$" },
      { label: "Taking the ratio" },
      { equation: "$\\dfrac{t_{99\\%}}{t_{90\\%}} = \\dfrac{2 \\times 2.303/k}{2.303/k} = 2$" },
      { text: "**Hence t_99% = 2 t_90%** — as required." },
      {
        text: "The whole result rests on log 100 being exactly twice log 10. It also illustrates a general feature of first order kinetics: the time for each successive **tenfold** fall in concentration is the same, just as the half-life is the same for each successive halving.",
      },
    ],
    keyPoint: "For first order, equal fractional decreases take equal times — hence log 100 = 2 log 10.",
  },
  {
    id: "p23e-27",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Crystal field theory and VBT",
    years: [2023],
    question:
      "(a) On the basis of crystal field theory write the electronic configuration for a d^5 ion with a strong field ligand for which Δ_o > P.\n(b) [Ni(CO)4] has tetrahedral geometry while [Ni(CN)4]^2− has square planar geometry, yet both exhibit diamagnetism. Explain. [Atomic number : Ni = 28]",
    answer: [
      { label: "(a) d^5 in a strong octahedral field" },
      { text: "**t2g^5 eg^0**" },
      {
        text: "In an octahedral field the five d orbitals split into the lower **t2g** set (three orbitals) and the upper **eg** set (two orbitals), separated by Δ_o.",
      },
      {
        text: "Because **Δ_o > P**, promoting an electron to the eg set costs more than pairing it in the t2g set. All five electrons therefore crowd into t2g, pairing as they go: two pairs and one unpaired electron.",
      },
      {
        table: [
          ["", "Strong field (Δ_o > P)", "Weak field (Δ_o < P)"],
          ["Configuration", "**t2g^5 eg^0**", "t2g^3 eg^2"],
          ["Unpaired electrons", "**1**", "5"],
          ["Spin state", "**Low spin**", "High spin"],
          ["μ / BM", "1.73", "5.92"],
        ],
      },
      {
        text: "[Fe(CN)6]^3− is the standard example, and the contrast with [FeF6]^3− — same d^5 ion, weak field ligand, five unpaired electrons — is what makes the comparison worth remembering.",
      },
      { label: "(b) Two shapes, both diamagnetic" },
      {
        text: "The key is that **nickel is in different oxidation states** in the two complexes.",
      },
      {
        table: [
          ["", "[Ni(CO)4]", "[Ni(CN)4]^2−"],
          ["Oxidation state", "**0**", "**+2**"],
          ["Starting configuration", "3d^8 4s^2", "3d^8"],
          ["Effect of the strong field ligand", "The two 4s electrons move into 3d, giving **3d^10**", "The eight 3d electrons pair up, **emptying one 3d orbital**"],
          ["Orbitals hybridised", "4s + three 4p", "one 3d + 4s + two 4p"],
          ["Hybridisation", "**sp^3**", "**dsp^2**"],
          ["Shape", "**Tetrahedral**", "**Square planar**"],
          ["Unpaired electrons", "0", "0"],
          ["Magnetism", "**Diamagnetic**", "**Diamagnetic**"],
        ],
      },
      {
        text: "In **[Ni(CO)4]** the metal is neutral, so it still has its 4s electrons. CO drives them into the 3d subshell, filling it completely as 3d^10. With no 3d orbital free, bonding must use 4s and 4p — **sp^3**, hence tetrahedral.",
      },
      {
        text: "In **[Ni(CN)4]^2−** the 4s electrons are already gone. Cyanide pairs the 3d^8 electrons into four orbitals, which **frees one 3d orbital** for bonding — **dsp^2**, hence square planar.",
      },
      {
        text: "So both end up with **no unpaired electrons** and are diamagnetic, but by different routes: one by filling 3d completely, the other by pairing within it.",
      },
    ],
    keyPoint:
      "Ni(0) in CO fills 3d to d^10 (sp^3, tetrahedral); Ni(II) in CN^− frees a 3d orbital (dsp^2, square planar). Both diamagnetic.",
  },
  {
    id: "p23e-29",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Biomolecules — reasoning",
    years: [2023],
    question:
      "Give reasons for any 3 of the following observations :\n(a) Penta-acetate of glucose does not react with hydroxylamine.\n(b) Amino acids behave like salts.\n(c) Water soluble vitamins must be taken regularly in the diet.\n(d) The two strands in DNA are complementary to each other.",
    answer: [
      { label: "(a) Glucose penta-acetate does not react with hydroxylamine" },
      {
        text: "Because it has **no free –CHO group**.",
      },
      {
        text: "Hydroxylamine reacts with a free aldehyde to form an oxime, and glucose itself does so. But glucose exists mainly as a **cyclic hemiacetal**, in which the aldehyde carbon has become C-1 bearing an –OH. Acetylating all five hydroxyls **locks that ring shut**, so the open-chain aldehyde can no longer form and there is nothing for hydroxylamine to attack.",
      },
      {
        text: "This was a key piece of evidence that glucose is not simply an open-chain pentahydroxyhexanal.",
      },
      { label: "(b) Amino acids behave like salts" },
      {
        text: "Because they exist as **zwitterions** — internal salts with both a positive and a negative charge.",
      },
      { equation: "H2N–CHR–COOH <-> ^+H3N–CHR–COO^−" },
      {
        text: "The acidic –COOH group transfers its proton to the basic –NH2 group in the same molecule. The resulting **dipolar ion** carries full charges, so the crystal is held by strong electrostatic forces — exactly like an ionic salt.",
      },
      {
        text: "The salt-like behaviour follows: amino acids are **high-melting crystalline solids** (rather than the low-melting solids their molecular mass would suggest), they are **soluble in water but not in organic solvents**, and they are **amphoteric**, reacting with both acids and bases.",
      },
      { label: "(c) Water-soluble vitamins must be taken regularly" },
      {
        text: "Because they are **not stored in the body** — any excess is **excreted through the urine**.",
      },
      {
        text: "Being water soluble, vitamins B and C pass freely into the blood and are filtered out by the kidneys rather than accumulating. The body therefore has no reserve to draw on, and a daily supply is needed. Fat-soluble vitamins (A, D, E, K) are stored in the liver and fatty tissue, so they can be taken less often.",
      },
      { label: "(d) The two DNA strands are complementary" },
      {
        text: "Because the bases pair by **hydrogen bonding in fixed combinations**, so the sequence of one strand dictates the other.",
      },
      {
        table: [
          ["Base pair", "Hydrogen bonds"],
          ["**Adenine – Thymine**", "**2**"],
          ["**Guanine – Cytosine**", "**3**"],
        ],
      },
      {
        text: "The pairing is fixed by both **size and hydrogen-bonding pattern**: a large purine always pairs with a small pyrimidine, keeping the width of the double helix constant, and only these combinations put donors opposite acceptors.",
      },
      {
        text: "The consequence is **Chargaff's rule**, that A = T and G = C in any DNA — and, far more importantly, that each strand carries all the information needed to rebuild the other, which is what makes **replication** possible.",
      },
    ],
  },
  {
    id: "p23e-30",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Bonding and physical properties",
    years: [2023],
    question:
      "(i) Why is the C–O bond length in phenols less than that in methanol ?\n(ii) Arrange the following in order of increasing boiling point : ethoxyethane, butanal, butanol, n-butane\n(iii) How can phenol be prepared from anisole ? Give the reaction.",
    answer: [
      { label: "(i) Why phenol's C–O bond is shorter" },
      {
        text: "Because of **resonance**: the oxygen lone pair is delocalised into the benzene ring, giving the C–O bond **partial double-bond character**.",
      },
      { equation: "C6H5–OH <-> C6H4=O^+H (with negative charge at o/p carbons)" },
      {
        text: "The resonance structures place a formal positive charge on oxygen and a double bond between oxygen and the ring carbon. Since a double bond is shorter than a single bond, the real bond length lies between them.",
      },
      {
        table: [
          ["Compound", "C–O bond length", "Why"],
          ["**Phenol**", "**136 pm**", "Partial double bond from resonance; the carbon is **sp^2**"],
          ["Methanol", "**143 pm**", "Pure single bond; the carbon is **sp^3**"],
        ],
      },
      {
        text: "There is a second, reinforcing reason: phenol's carbon is **sp^2** hybridised and methanol's is **sp^3**. An sp^2 orbital has more s character, so it is more compact and forms a shorter bond.",
      },
      { label: "(ii) Increasing boiling point" },
      { text: "**n-Butane < ethoxyethane < butanal < butanol**" },
      {
        table: [
          ["Compound", "Formula", "Strongest intermolecular force", "B.p."],
          ["n-Butane", "C4H10", "Dispersion only", "−0.5 °C"],
          ["Ethoxyethane", "C2H5OC2H5", "Weak dipole–dipole (no O–H)", "34.6 °C"],
          ["Butanal", "C3H7CHO", "Stronger dipole–dipole (polar C=O)", "74.8 °C"],
          ["**Butanol**", "C4H9OH", "**Hydrogen bonding**", "**117.7 °C**"],
        ],
      },
      {
        text: "All four have a comparable molecular mass, so dispersion forces are similar and the order is decided entirely by **polarity and hydrogen bonding**.",
      },
      {
        text: "The instructive comparison is **ethoxyethane against butanol** — same molecular formula, C4H10O, yet a difference of more than 80 °C. The ether has an oxygen but **no O–H**, so it can accept hydrogen bonds but not donate them, and its molecules cannot bond to one another.",
      },
      { label: "(iii) Phenol from anisole" },
      { equation: "C6H5–OCH3 + HI -> C6H5–OH + CH3–I" },
      {
        text: "Anisole is cleaved by a hydrogen halide, usually **HI** since iodide is the best nucleophile. **Products: phenol and iodomethane.**",
      },
      {
        text: "The important point is **which bond breaks**. The halide attacks the **methyl** carbon, not the ring carbon, because the O–C(aryl) bond has partial double-bond character (the same resonance as in part (i)) and an sp^2 carbon resists nucleophilic attack in any case.",
      },
      {
        text: "So an aryl alkyl ether always gives the **phenol plus the alkyl halide** — never the aryl halide and the alcohol.",
      },
    ],
    keyPoint:
      "Resonance shortens phenol's C–O bond and also protects it during ether cleavage, so the alkyl–O bond is the one that breaks.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION D — case-based, 4 marks each                             */
  /* ---------------------------------------------------------------- */
  {
    id: "p23e-31",
    chapter: 6,
    type: "case-study",
    marks: 4,
    difficulty: "hard",
    topic: "Solvent effects on substitution",
    years: [2023],
    passage:
      "Nucleophilic substitution of a haloalkane can proceed by both S_N1 and S_N2 mechanisms. S_N1 is a two step reaction while S_N2 is a single step reaction. Which mechanism is followed depends on the structure of the haloalkane, the leaving group, the nucleophilic reagent and the solvent. In an S_N1 reaction the polarity of the system increases from the reactant to the transition state, so a polar solvent stabilises the transition state more than the reactant, reducing the activation energy and accelerating the reaction. In an S_N2 reaction the polarity does not change much from reactant to transition state and only charge dispersion occurs; a polar solvent then stabilises the nucleophile more than the transition state, increasing the activation energy and slowing the reaction. For example, the S_N1 decomposition of tertiary chlorobutane at 25 °C in water (dielectric constant 79) is 300000 times faster than in ethanol (dielectric constant 24). Generally a weakly polar solvent favours S_N2 while a strongly polar solvent favours S_N1.",
    question:
      "(a) Why does racemisation occur in S_N1 ?\n(b) Why is ethanol less polar than water ?\n(c) Which one of the following in each pair is more reactive towards an S_N2 reaction ?\n(i) CH3–CH2–I or CH3CH2–Cl\n(ii) C6H5–Cl or C6H5–CH2–Cl",
    answer: [
      { label: "(a) Why S_N1 racemises" },
      {
        text: "Because the reaction goes through a **planar carbocation** intermediate.",
      },
      {
        text: "In the slow first step the leaving group departs, leaving a carbon that is **sp^2 hybridised and flat**. The nucleophile can then attack from **either face with equal probability**, so the two enantiomers are produced in roughly equal amounts — a **racemic mixture**, which is optically inactive.",
      },
      {
        text: "Contrast S_N2, where the nucleophile must attack from the side **opposite** the leaving group in a single concerted step, so the configuration is cleanly **inverted** (Walden inversion) rather than scrambled.",
      },
      {
        text: "In practice S_N1 racemisation is rarely perfect: the departing halide lingers briefly and shields one face, so a small excess of the inverted product usually survives.",
      },
      { label: "(b) Why ethanol is less polar than water" },
      {
        text: "Because the **ethyl group is non-polar and hydrophobic**, and it makes up most of the molecule.",
      },
      {
        table: [
          ["", "Water, H2O", "Ethanol, C2H5OH"],
          ["O–H groups per molecule", "**Two**", "**One**"],
          ["Non-polar bulk", "None", "A C2H5 group"],
          ["Dielectric constant", "**79**", "**24**"],
        ],
      },
      {
        text: "Water has **two** O–H bonds and no hydrocarbon part at all, so essentially the whole molecule is polar and it can form up to four hydrogen bonds. Ethanol has only **one** O–H, and the bulky ethyl group dilutes the polarity of the molecule as a whole.",
      },
      {
        text: "The passage's figure makes the consequence concrete: a dielectric constant of 79 against 24 is why the S_N1 reaction runs 300000 times faster in water.",
      },
      { label: "(c) (i) CH3CH2–I or CH3CH2–Cl" },
      { text: "**CH3CH2–I, iodoethane, is more reactive.**" },
      {
        text: "Iodide is the **better leaving group**: the C–I bond is much weaker (234 kJ mol^−1) than C–Cl (351 kJ mol^−1), because iodine's large 5p orbital overlaps poorly with carbon's compact 2p orbital. The weaker bond breaks more readily, and the large iodide ion released is itself stable because its charge is spread over a big volume.",
      },
      { label: "(c) (ii) C6H5–Cl or C6H5–CH2–Cl" },
      { text: "**C6H5–CH2–Cl, benzyl chloride, is more reactive.**" },
      {
        text: "In **chlorobenzene** the chlorine is attached **directly to the ring**, and the C–Cl bond has **partial double-bond character** from resonance with the ring. That bond is short and strong, the carbon is sp^2, and the ring's π electrons repel an incoming nucleophile — so chlorobenzene is essentially **inert** to ordinary nucleophilic substitution.",
      },
      {
        text: "In **benzyl chloride** the chlorine sits on an **sp^3 CH2 carbon** one atom away from the ring, so none of that applies. It is an ordinary reactive halide — and it is unusually fast by **both** mechanisms, since the benzyl carbocation of an S_N1 path is resonance-stabilised too.",
      },
    ],
    keyPoint:
      "A halogen bonded directly to an aromatic ring is inert; move it one carbon out and it becomes highly reactive.",
  },
  {
    id: "p23e-32",
    chapter: 2,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Conductance measurement",
    years: [2023],
    passage:
      "Rahul set up an experiment to find the resistance of aqueous KCl solution at different concentrations at 298 K using a conductivity cell connected to a Wheatstone bridge. He fed the Wheatstone bridge with a.c. power in the audio frequency range 550 to 5000 cycles per second. Once the resistance was calculated from the null point he also calculated the conductivity κ and molar conductivity Λ_m, recording his readings in tabular form: at 1.00 M, κ = 111.3 × 10^−3 S cm^−1 and Λ_m = 111.3 S cm^2 mol^−1; at 0.10 M, κ = 12.9 × 10^−3 and Λ_m = 129.0; at 0.01 M, κ = 1.41 × 10^−3 and Λ_m = 141.0.",
    question:
      "(a) Why does conductivity decrease with dilution ?\n(b) If Λ°_m of KCl is 150.0 S cm^2 mol^−1, calculate the degree of dissociation of 0.01 M KCl.\n(c) If Rahul had used HCl instead of KCl, would you expect the Λ_m values to be more or less than those for KCl at a given concentration ? Justify.",
    answer: [
      { label: "(a) Why conductivity falls on dilution" },
      {
        text: "Because the **number of ions per unit volume decreases**.",
      },
      {
        text: "Conductivity κ is defined as the conductance of **one unit volume** of solution. Dilution does not change how many ions exist in total, but it spreads them through more solvent, so any given cubic centimetre contains fewer charge carriers and conducts less well. Rahul's own data show it: κ falls from 111.3 × 10^−3 to 1.41 × 10^−3 S cm^−1 as the solution is diluted a hundredfold.",
      },
      {
        text: "Notice that **Λ_m moves the other way** in the same table, rising from 111.3 to 141.0, because it is reckoned **per mole** rather than per unit volume — the same ions, now less hindered by one another, each carry more current. Both trends are in the data, and they are not in conflict.",
      },
      { label: "(b) Degree of dissociation of 0.01 M KCl" },
      { equation: "$\\alpha = \\dfrac{\\Lambda_m}{\\Lambda^\\circ_m} = \\dfrac{141.0}{150.0}$" },
      { text: "**α = 0.94**" },
      {
        text: "A word of caution on interpreting this: KCl is a **strong** electrolyte and is in fact fully dissociated at all concentrations. The shortfall from 1 is not undissociated KCl but the effect of **interionic attraction** slowing the ions down. For a strong electrolyte this ratio is better called the **conductance ratio**; it is only for a **weak** electrolyte that it genuinely measures the degree of dissociation.",
      },
      { label: "(c) HCl in place of KCl" },
      { text: "The Λ_m values would be **considerably higher** for HCl." },
      {
        text: "Both are strong electrolytes giving two ions per formula unit, so the difference lies entirely in **how fast the cation moves**. The H^+ ion is exceptionally mobile:",
      },
      {
        table: [
          ["Ion", "λ° / S cm^2 mol^−1"],
          ["**H^+**", "**349.6**"],
          ["K^+", "73.5"],
          ["Cl^−", "76.3"],
        ],
      },
      {
        text: "The reason is the **Grotthuss mechanism**: a proton does not have to travel through the solution as a particle at all. Instead it hops along a chain of hydrogen-bonded water molecules, each one passing a proton to the next, so the _(charge)_ moves far faster than any ion could physically migrate.",
      },
      {
        text: "Numerically, Λ°_m(HCl) = 349.6 + 76.3 = **425.9** against 150.0 for KCl — nearly three times as large.",
      },
    ],
    keyPoint:
      "κ falls and Λ_m rises on dilution — they count per volume and per mole. H^+ conducts abnormally fast via proton hopping.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION E — long answer, 5 marks each                            */
  /* ---------------------------------------------------------------- */
  {
    id: "p23e-33",
    chapter: 1,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "Colligative properties",
    years: [2023],
    question:
      "(i) Why is the boiling point of 1 M NaCl solution more than that of 1 M glucose solution ?\n(ii) A non-volatile solute 'X' (molar mass = 50 g mol^−1) when dissolved in 78 g of benzene reduced its vapour pressure to 90%. Calculate the mass of X dissolved in the solution.\n(iii) Calculate the boiling point elevation for a solution prepared by adding 10 g of MgCl2 to 200 g of water, assuming MgCl2 is completely dissociated.\n(K_b for water = 0.512 K kg mol^−1, molar mass MgCl2 = 95 g mol^−1)",
    answer: [
      { label: "(i) Why NaCl raises the boiling point more" },
      {
        text: "Because NaCl **dissociates** and glucose does not, so NaCl gives **more particles** in solution.",
      },
      { equation: "NaCl -> Na^+ + Cl^−" },
      {
        text: "Elevation of boiling point is a **colligative** property — it depends on the _(number)_ of dissolved particles, not their identity. One mole of NaCl gives two moles of ions (i ≈ 2) while one mole of glucose gives one mole of molecules (i = 1), so the elevation is roughly **twice** as large.",
      },
      { label: "(ii) Mass of solute X" },
      {
        text: "\"Reduced its vapour pressure to 90%\" means p = 0.9 p°, so the **relative lowering** is 0.1.",
      },
      { equation: "$\\dfrac{p^\\circ - p}{p^\\circ} = x_{solute} = \\dfrac{n_2}{n_1 + n_2}$" },
      {
        text: "Benzene, C6H6, has M = 78 g mol^−1, so n1 = 78/78 = **1 mol**. Let the mass of X be w, giving n2 = w/50:",
      },
      { equation: "$0.1 = \\dfrac{w/50}{1 + w/50}$" },
      { equation: "$0.1\\left(\\dfrac{w}{50} + 1\\right) = \\dfrac{w}{50}$" },
      {
        text: "Multiplying through by 50: 0.1(w + 50) = w, so 0.1w + 5 = w, giving 0.9w = 5:",
      },
      { text: "**w = 5.55 g**" },
      {
        text: "The Marking Scheme also accepts **5 g**, obtained from the dilute-solution approximation n2/(n1 + n2) ≈ n2/n1. It further notes that full marks may be awarded if the student carries the molar mass of benzene as a symbol, since the question does not supply it.",
      },
      { label: "(iii) Boiling point elevation for MgCl2" },
      {
        text: "MgCl2 is completely dissociated into **three** ions, so i = 3:",
      },
      { equation: "MgCl2 -> Mg^2+ + 2Cl^−" },
      { equation: "$\\Delta T_b = i\\,K_b\\,m = i\\,K_b\\times\\dfrac{w_B}{M_B}\\times\\dfrac{1000}{w_A}$" },
      {
        equation:
          "$\\Delta T_b = 3 \\times 0.512 \\times \\dfrac{10}{95} \\times \\dfrac{1000}{200}$",
      },
      {
        text: "The molality is (10/95) × (1000/200) = 0.1053 × 5 = 0.526 mol kg^−1, so:",
      },
      { equation: "$\\Delta T_b = 3 \\times 0.512 \\times 0.526 = 0.81\\ \\text{K}$" },
      { text: "**ΔT_b = 0.81 K**, so the solution boils at about 100.81 °C." },
      {
        text: "Forgetting the factor i = 3 would give 0.27 K — a third of the right answer, and much the commonest error in this question.",
      },
    ],
  },
  {
    id: "p23e-33b",
    chapter: 1,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2023],
    question:
      "(i) Why is the value of the van't Hoff factor for ethanoic acid in benzene close to 0.5 ?\n(ii) Determine the osmotic pressure of a solution prepared by dissolving 2.32 × 10^−2 g of K2SO4 in 2 L of solution at 25 °C, assuming that K2SO4 is completely dissociated. (R = 0.082 L atm K^−1 mol^−1, molar mass K2SO4 = 174 g mol^−1)\n(iii) When 25.6 g of sulphur was dissolved in 1000 g of benzene, the freezing point was lowered by 0.512 K. Calculate the formula of sulphur (S_x). (K_f for benzene = 5.12 K kg mol^−1, atomic mass of sulphur = 32 g mol^−1)",
    answer: [
      { label: "(i) Why i ≈ 0.5 for ethanoic acid in benzene" },
      {
        text: "Because ethanoic acid molecules **associate into dimers**, so the number of particles is reduced to nearly half.",
      },
      { equation: "2CH3COOH <=> (CH3COOH)2" },
      {
        text: "Two molecules pair through a **double hydrogen bond**, each –OH bonding to the other's carbonyl oxygen to close a stable eight-membered ring. Benzene is non-polar and cannot solvate the –OH groups, so nothing competes with that pairing and the association is nearly complete.",
      },
      { equation: "$i = \\dfrac{\\text{particles observed}}{\\text{particles expected}} \\approx \\dfrac{1}{2} = 0.5$" },
      {
        text: "In **water** the behaviour reverses entirely: the acid ionises instead and i rises slightly above 1. The solvent, not the acid, decides which happens.",
      },
      { label: "(ii) Osmotic pressure of the K2SO4 solution" },
      {
        text: "K2SO4 dissociates into **three** ions, so i = 3:",
      },
      { equation: "K2SO4 -> 2K^+ + SO4^2−" },
      { equation: "$\\pi = i\\,CRT = i\\,\\dfrac{w_B}{M_B \\times V}\\,RT$" },
      {
        equation:
          "$\\pi = 3 \\times \\dfrac{2.32 \\times 10^{-2}}{174 \\times 2} \\times 0.082 \\times 298$",
      },
      {
        text: "The concentration is (2.32 × 10^−2)/(174 × 2) = 6.67 × 10^−5 mol L^−1, so:",
      },
      { text: "**π = 4.88 × 10^−3 atm**" },
      {
        text: "Note T must be in kelvin: 25 + 273 = 298 K. The value is tiny because the solution is extremely dilute — which is exactly why osmometry can measure such small amounts.",
      },
      { label: "(iii) The molecular formula of sulphur" },
      {
        text: "Sulphur is a **non-electrolyte**, so no van't Hoff factor is needed. Use the freezing point depression to find its molar mass:",
      },
      { equation: "$\\Delta T_f = K_f \\times \\dfrac{w_B}{M_B} \\times \\dfrac{1000}{w_A}$" },
      {
        equation:
          "$0.512 = 5.12 \\times \\dfrac{25.6}{M_B} \\times \\dfrac{1000}{1000}$",
      },
      { equation: "$M_B = \\dfrac{5.12 \\times 25.6}{0.512} = 256\\ \\text{g mol}^{-1}$" },
      { label: "Convert to a formula" },
      { equation: "$32 \\times x = 256 \\;\\Rightarrow\\; x = \\dfrac{256}{32} = 8$" },
      { text: "**The formula is S8.**" },
      {
        text: "This is the correct and well-known answer: sulphur really does exist as **puckered eight-membered S8 rings** in its stable rhombic and monoclinic forms, and this colligative measurement is a classic way of demonstrating it.",
      },
    ],
    keyPoint:
      "Use i = 3 for K2SO4 but no i at all for sulphur — a colligative measurement then hands you the molecular formula directly.",
  },
  {
    id: "p23e-34",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Structure determination",
    years: [2023],
    question:
      "(i) Write the reaction involved in Cannizzaro's reaction.\n(ii) Why is the boiling point of aldehydes and ketones lower than that of the corresponding carboxylic acids ?\n(iii) An organic compound 'A' with molecular formula C5H8O2 is reduced to n-pentane with hydrazine followed by heating with NaOH and glycol. 'A' forms a dioxime with hydroxylamine and gives a positive iodoform and Tollens' test. Identify 'A' and give its reaction for the iodoform and Tollens' test.",
    answer: [
      { label: "(i) Cannizzaro's reaction" },
      {
        text: "An aldehyde with **no α-hydrogen**, treated with concentrated alkali, **disproportionates**: one molecule is reduced to the alcohol and another oxidised to the carboxylate.",
      },
      { equation: "2HCHO + conc. KOH -> CH3OH + HCOO^−K^+" },
      {
        text: "Benzaldehyde behaves the same way, giving benzyl alcohol and potassium benzoate. The reaction is only possible because there is no α-hydrogen for the base to remove — otherwise aldol condensation would take over.",
      },
      { label: "(ii) Why carboxylic acids boil higher" },
      {
        text: "Because carboxylic acids form **strong intermolecular hydrogen bonds**, whereas aldehydes and ketones have only **dipole–dipole** interactions.",
      },
      {
        text: "A carbonyl compound has no O–H, so although its C=O group is polar, its molecules cannot hydrogen bond to one another. A carboxylic acid has both an O–H to donate and a C=O to accept, and in fact pairs up into a **cyclic dimer** held by two hydrogen bonds at once — effectively doubling the particle that has to be vaporised.",
      },
      {
        table: [
          ["Compound", "Molar mass", "Strongest force between molecules", "B.p."],
          ["Propanone, CH3COCH3", "58", "Dipole–dipole", "56 °C"],
          ["Propanal, C2H5CHO", "58", "Dipole–dipole", "49 °C"],
          ["**Ethanoic acid, CH3COOH**", "**60**", "**Hydrogen bonding (dimer)**", "**118 °C**"],
        ],
      },
      { label: "(iii) Identifying A" },
      {
        label: "Reading the clues",
        points: [
          "**C5H8O2** has **two** degrees of unsaturation; with two oxygens and the tests below, that means **two C=O groups**.",
          "**Forms a dioxime** with hydroxylamine — confirms **two** carbonyl groups, since each forms one oxime.",
          "**Positive iodoform test** — requires a **CH3–CO–** group.",
          "**Positive Tollens' test** — requires an **aldehyde**, –CHO.",
          "**Reduced to n-pentane** by Wolff-Kishner — so both C=O groups become CH2, and the five carbons form an **unbranched** chain.",
        ],
      },
      {
        text: "Putting it together: a straight five-carbon chain with a methyl ketone at one end and an aldehyde at the other.",
      },
      { text: "**A = CH3–CO–CH2–CH2–CHO, 4-oxopentanal.**" },
      { label: "The iodoform test" },
      { equation: "CH3–CO–CH2CH2CHO ->[I2 / NaOH][Δ] CHI3↓ + ^−OOC–CH2CH2CHO" },
      {
        text: "The methyl ketone end gives the **yellow precipitate of iodoform**, CHI3.",
      },
      { label: "The Tollens' test" },
      {
        equation:
          "CH3–CO–CH2CH2CHO + 2[Ag(NH3)2]^+ + 3OH^− -> CH3–CO–CH2CH2–COO^− + 2Ag↓ + 4NH3 + 2H2O",
      },
      {
        text: "The aldehyde end is oxidised to the carboxylate and a **silver mirror** is deposited. Tollens' is a mild oxidant, so the **ketone is untouched** — which is precisely what makes it diagnostic for the aldehyde group in a molecule containing both.",
      },
    ],
    keyPoint:
      "A dioxime means two C=O; iodoform pins one as CH3–CO–; Tollens' pins the other as –CHO.",
  },
  {
    id: "p23e-34b",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Esters and acidity",
    years: [2023],
    question:
      "An organic compound 'A' with molecular formula C4H8O2 undergoes acid hydrolysis to form two compounds 'B' and 'C'. Oxidation of 'C' with acidified potassium permanganate also produces 'B'. The sodium salt of 'B' on heating with soda lime gives methane.\n(1) Identify 'A', 'B' and 'C'.\n(2) Out of 'B' and 'C', which will have the higher boiling point ? Give reason.",
    answer: [
      {
        label: "Work backwards from the strongest clue",
        text: "**The sodium salt of B with soda lime gives methane.** Decarboxylation removes the –COOH group and replaces it with –H, so B must be the acid whose alkyl group is a methyl:",
      },
      { equation: "CH3COONa ->[NaOH / CaO][Δ] CH4 + Na2CO3" },
      { text: "So **B = CH3COOH, ethanoic acid**." },
      {
        label: "Then use the oxidation clue",
        text: "**C is oxidised to B** by acidified KMnO4. An alcohol oxidises to the acid with the same number of carbons, so C is the two-carbon alcohol:",
      },
      { equation: "CH3CH2OH ->[KMnO4 / H^+] CH3COOH" },
      { text: "So **C = CH3CH2OH, ethanol**." },
      {
        label: "Finally assemble A",
        text: "A hydrolyses to an acid and an alcohol, so A is the **ester** formed from them — and the formula confirms it: CH3COOC2H5 is C4H8O2.",
      },
      { equation: "CH3COOC2H5 + H2O ->[H^+] CH3COOH + CH3CH2OH" },
      {
        label: "(1) Answer",
        table: [
          ["", "Structure", "Name"],
          ["**A**", "CH3COOC2H5", "Ethyl ethanoate (ethyl acetate)"],
          ["**B**", "CH3COOH", "Ethanoic acid (acetic acid)"],
          ["**C**", "CH3CH2OH", "Ethanol"],
        ],
      },
      { label: "(2) Which has the higher boiling point" },
      { text: "**B, ethanoic acid**, boils higher — 118 °C against ethanol's 78 °C." },
      {
        text: "**Reason: carboxylic acid molecules associate far more extensively through strong hydrogen bonding.**",
      },
      {
        text: "Ethanol has one O–H and forms a hydrogen-bonded network. Ethanoic acid does better on two counts: its O–H is **more polarised** (the adjacent C=O withdraws electron density, making the hydrogen more positive), and it has **both a donor and an acceptor** positioned to form a **cyclic dimer** held by two hydrogen bonds at once.",
      },
      { equation: "2CH3COOH <=> (CH3COOH)2" },
      { text: "The dimer is cyclic, held by **two** hydrogen bonds at once." },
      {
        text: "That dimer effectively doubles the size of the unit that must be vaporised, which is why the acid boils some 40 °C higher despite the two compounds having similar molar masses.",
      },
    ],
  },
  {
    id: "p23e-35",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Actinoids, disproportionation and melting points",
    years: [2023],
    question:
      "(a) Why is the chemistry of actinoids complicated as compared to lanthanoids ?\n(b) Complete the following reaction and justify that it is a disproportionation reaction :\n3MnO4^2− + 4H^+ -> ? + ? + 2H2O\n(c) The graph of melting points of transition metals shows chromium with the highest melting point in the 3d series and manganese with a lower one. Explain why.",
    answer: [
      { label: "(a) Why actinoid chemistry is complicated" },
      {
        text: "Because actinoids show a **much wider range of oxidation states**, and **all of them are radioactive**.",
      },
      {
        table: [
          ["", "Lanthanoids", "Actinoids"],
          ["Oxidation states", "Mainly **+3**", "**+3 to +7** — uranium shows +3, +4, +5, +6"],
          ["Radioactivity", "Non-radioactive (except Pm)", "**All radioactive**"],
          ["f-orbital shielding", "4f well shielded, buried", "5f poorly shielded, more exposed"],
          ["Energy of f, d, s levels", "4f well below 5d and 6s", "**5f, 6d and 7s comparable**"],
        ],
      },
      {
        text: "The root cause is that the **5f, 6d and 7s orbitals lie close in energy**, so electrons from all three can take part in bonding and many oxidation states become accessible. In the lanthanoids the 4f electrons are buried inside the atom and stay out of bonding, so +3 dominates almost everywhere.",
      },
      {
        text: "The radioactivity compounds the difficulty practically: the later actinoids have short half-lives and are available only in minute quantities, so their chemistry is hard to study at all.",
      },
      { label: "(b) Completing the equation" },
      { equation: "3MnO4^2− + 4H^+ -> 2MnO4^− + MnO2↓ + 2H2O" },
      {
        label: "Why it is a disproportionation",
        text: "A disproportionation is a reaction in which the **same element is simultaneously oxidised and reduced**. Track the oxidation state of manganese:",
      },
      {
        table: [
          ["Species", "Oxidation state of Mn", "What happened"],
          ["MnO4^2− (reactant)", "**+6**", "—"],
          ["MnO4^− (product)", "**+7**", "**Oxidised** — increase of 1"],
          ["MnO2 (product)", "**+4**", "**Reduced** — decrease of 2"],
        ],
      },
      {
        text: "Of the three Mn(VI) species that react, **two are oxidised** to Mn(VII) (losing 1 electron each, 2 in total) and **one is reduced** to Mn(IV) (gaining 2 electrons). The electrons balance exactly, which is why the 3 : 2 : 1 ratio appears.",
      },
      {
        text: "The colour change makes it visible: green manganate turns purple as permanganate forms, while brown MnO2 settles out. This is the second stage of the industrial preparation of KMnO4 from pyrolusite.",
      },
      { label: "(c) Why chromium melts highest and manganese lower" },
      {
        text: "Because melting point tracks the strength of **metallic bonding**, which depends on the number of **unpaired d electrons** available to contribute to it.",
      },
      {
        table: [
          ["Metal", "Configuration", "Unpaired electrons", "Metallic bonding", "M.p."],
          ["**Cr**", "3d^5 4s^1", "**6**", "**Strongest**", "**2130 K**"],
          ["**Mn**", "3d^5 4s^2", "5", "Weaker", "1519 K"],
        ],
      },
      {
        text: "**Chromium** has the maximum number of unpaired electrons in the series — five in 3d and one in 4s — and all six can take part in **strong interatomic metal–metal bonding**. That is why it sits at the top of the 3d curve.",
      },
      {
        text: "**Manganese** has one more electron, but it goes into the 4s orbital to give a **stable half-filled 3d^5 configuration** with paired 4s electrons. Those paired electrons are held tightly and contribute little to bonding, so despite having more electrons overall manganese has **weaker** metallic bonding and a markedly lower melting point.",
      },
      {
        text: "The same logic explains the whole shape of the curve — it rises to a maximum in the middle of each series and falls away at **zinc**, where the 3d subshell is full and only the 4s electrons bond at all.",
      },
    ],
    keyPoint:
      "Melting point follows unpaired d electrons available for metal–metal bonding, not simply electron count.",
  },
];
