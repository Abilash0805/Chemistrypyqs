import type { Question } from "@/types";

/**
 * A third round of gap-fill: depth rather than presence.
 *
 * After the first two rounds no concept in the 256-item inventory was
 * unrepresented, but 23 rested on a single question — a floor, not coverage.
 * One card on Victor Meyer or Gattermann-Koch means a student who skips it
 * loses the topic entirely.
 *
 * Each question here gives a second angle on one or more of those 23, chosen
 * to be a different question type and a different facet rather than a restated
 * version: where the first card asked for a preparation, this one asks for the
 * reactions; where the first was a long answer, this one is an MCQ or an
 * assertion-reason.
 *
 * Authored rather than transcribed, so `years` is empty.
 */
export const GAPFILL3: Question[] = [
  /* ---------------------------------------------------------------- */
  /* ch1                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-1-1",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Concentration terms",
    years: [],
    question:
      "A sample of sea water contains 5·8 g of dissolved oxygen in 1000 kg of water. The concentration of oxygen in ppm is :",
    options: ["5.8", "58", "0.58", "5800"],
    correct: 0,
    answer: [
      { text: "**5.8 ppm.**" },
      { text: "ppm counts parts of the component per million parts of the solution:" },
      {
        equation:
          "$\\text{ppm} = \\dfrac{\\text{mass of component}}{\\text{mass of solution}} \\times 10^{6}$",
      },
      { text: "The mass of solution is 1000 kg = 10⁶ g, which makes the arithmetic immediate:" },
      { equation: "$\\text{ppm} = \\dfrac{5.8}{10^{6}} \\times 10^{6} = 5.8$" },
      {
        text: "The shortcut worth remembering is that **1 mg of solute in 1 kg of solution is exactly 1 ppm**, because 10⁶ mg = 1 kg. So 5·8 g in 1000 kg is 5800 mg in 1000 kg, which is 5·8 mg per kg — 5·8 ppm.",
      },
      {
        text: "Option (d) is the trap of forgetting that the solution mass is already 10⁶ g and dividing by 1000 instead.",
      },
      {
        text: "This is a realistic figure: dissolved oxygen in natural water runs at about **5–10 ppm**, and below roughly 6 ppm fish begin to suffer — which is why the quantity is reported in ppm rather than as 0·00058 %.",
      },
    ],
    keyPoint: "1 mg per kg of solution is 1 ppm; ppm is used because the percentage would be an awkward decimal.",
  },
  {
    id: "g3-1-2",
    chapter: 1,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Solubility",
    years: [],
    question:
      "(i) How does the solubility of a solid in a liquid change with temperature if dissolution is (1) endothermic and (2) exothermic ? Justify using Le Chatelier's principle.\n(ii) Why does pressure have almost no effect on the solubility of a solid in a liquid ?\n(iii) State one way in which the solubility of a gas in a liquid differs from that of a solid.",
    answer: [
      {
        label: "(i) Effect of temperature",
        text: "At saturation the dissolved and undissolved solute are in **dynamic equilibrium**, so Le Chatelier's principle applies:",
      },
      { equation: "Solute + Solvent <=> Solution" },
      {
        table: [
          ["Dissolution", "Heat is", "On raising T, equilibrium shifts", "Solubility"],
          ["**Endothermic**, Δ_solH > 0", "Absorbed", "Forward", "**Increases**"],
          ["**Exothermic**, Δ_solH < 0", "Released", "Backward", "**Decreases**"],
        ],
      },
      {
        text: "If dissolving takes heat in, supplying more heat pushes the equilibrium towards more dissolving — KNO3 and most salts behave this way. If dissolving gives heat out, added heat drives the equilibrium back and the solute comes out of solution; **Ce2(SO4)3** is the standard example, and calcium acetate behaves likewise.",
      },
      {
        label: "(ii) Why pressure barely matters",
        text: "Because **solids and liquids are almost incompressible**, so a change of pressure produces almost no change in their volume and therefore almost none in the equilibrium.",
      },
      {
        text: "Le Chatelier's principle only predicts a shift with pressure when there is an appreciable **volume change**, and dissolving a solid in a liquid involves hardly any. A gas is quite different, because it has a large volume that pressure can compress.",
      },
      {
        label: "(iii) How a gas differs",
        text: "**The solubility of a gas increases sharply with pressure**, as Henry's law describes, and **decreases with rising temperature** — whereas a solid's solubility is insensitive to pressure and usually rises with temperature.",
      },
      { equation: "$p = K_H \\, x$" },
      {
        text: "Dissolving a gas is **always exothermic**, because the gas molecules lose their freedom on entering the liquid, so heating always drives a gas out. That is why a warm fizzy drink goes flat faster, and why warm river water holds less dissolved oxygen.",
      },
    ],
    keyPoint:
      "Le Chatelier on the saturation equilibrium: endothermic dissolving rises with temperature, exothermic falls; pressure matters only for gases.",
  },
  {
    id: "g3-1-3",
    chapter: 1,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Abnormal molar mass",
    years: [],
    question:
      "(i) What is meant by abnormal molar mass ? Give one reason it arises.\n(ii) The molar mass of benzoic acid determined from the depression of freezing point in benzene comes out as 244 g mol^−1 instead of 122. Explain, and calculate the van't Hoff factor.\n(iii) Would KCl in water give a molar mass higher or lower than expected ? Give its value of i.",
    answer: [
      {
        label: "(i) What it means",
        text: "**An abnormal molar mass is one calculated from a colligative property that differs from the true molar mass.**",
      },
      {
        text: "It arises because colligative properties count **particles**, not molecules. If the solute **associates** in solution there are fewer particles than expected and the molar mass comes out too high; if it **dissociates** there are more and it comes out too low.",
      },
      {
        label: "(ii) Benzoic acid in benzene",
        text: "Benzoic acid **dimerises** in benzene. Two molecules join through a pair of hydrogen bonds into a cyclic dimer, so two molecules count as one particle:",
      },
      { equation: "2C6H5COOH <=> (C6H5COOH)2" },
      {
        text: "With half as many particles as expected, the observed depression is half as large, and the molar mass calculated from it comes out **twice** the true value — 244 instead of 122.",
      },
      {
        equation:
          "$i = \\dfrac{\\text{normal molar mass}}{\\text{observed molar mass}} = \\dfrac{122}{244} = 0.5$",
      },
      {
        text: "So **i = 0·5**, and complete association of n molecules gives i = 1/n. Benzene is the key to it: being non-polar, it cannot compete for the hydrogen bonds, so the dimer survives. In water the acid would dissociate instead and i would exceed 1.",
      },
      {
        label: "(iii) KCl in water",
        text: "**Lower than expected**, and **i = 2**.",
      },
      { equation: "KCl -> K^+ + Cl^−" },
      {
        text: "One formula unit gives two ions, so there are twice as many particles as expected, the depression is twice as large, and the molar mass calculated from it is **half** the true value — about 37·25 instead of 74·5.",
      },
      {
        table: [
          ["Behaviour", "Particles", "i", "Observed molar mass"],
          ["Association", "Fewer", "**< 1**", "Higher than true"],
          ["Normal", "As expected", "**= 1**", "Correct"],
          ["Dissociation", "More", "**> 1**", "Lower than true"],
        ],
      },
    ],
    keyPoint:
      "i < 1 means association and an inflated molar mass; i > 1 means dissociation and a deflated one.",
  },
  /* ---------------------------------------------------------------- */
  /* ch3                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-3-1",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Temperature dependence",
    years: [],
    question:
      "For most reactions near room temperature, a rise of 10 K multiplies the rate constant by a factor known as the temperature coefficient. Its usual value is :",
    options: ["about 2 to 3", "about 10", "about 0.5", "exactly 1"],
    correct: 0,
    answer: [
      { text: "**About 2 to 3.**" },
      { text: "The temperature coefficient is defined as the ratio of the rate constants ten degrees apart:" },
      { equation: "$\\text{Temperature coefficient} = \\dfrac{k_{T+10}}{k_{T}} \\approx 2 \\text{ to } 3$" },
      {
        text: "That a modest 10 K should double or treble the rate is striking, because the **average kinetic energy rises by only about 3 %** over the same interval. The explanation is that the rate depends not on the average but on the **fraction of molecules above the activation energy** — the thin tail of the Maxwell–Boltzmann distribution, whose area roughly doubles.",
      },
      {
        text: "Option (b) confuses it with the size of the temperature step. Option (d) would mean temperature has no effect at all, which is false for any reaction with a positive Ea.",
      },
      {
        text: "The figure is a **rule of thumb, not a law** — it holds near room temperature and for a typical Ea of 50 kJ mol⁻¹, and it is smaller at high temperature and for reactions with a small Ea. It is also the practical basis for the exam question that gives a doubled rate constant between 298 K and 308 K and asks for Ea.",
      },
    ],
    keyPoint:
      "A 10 K rise multiplies k by roughly 2–3, because it fills the high-energy tail rather than raising the average energy much.",
  },
  {
    id: "g3-3-2",
    chapter: 3,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Collision theory",
    years: [],
    question:
      "**Assertion (A) :** An activated complex cannot be isolated from a reaction mixture.\n**Reason (R) :** The activated complex lies at the maximum of the potential energy profile and so has a fleeting existence.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
    answer: [
      { text: "**(a)** — both true, and (R) is exactly why (A) holds." },
      {
        label: "(A) is true",
        text: "The activated complex has never been isolated from any reaction mixture. It can be studied only by very fast spectroscopic methods, never separated and bottled.",
      },
      {
        label: "(R) is true and explains it",
        text: "It sits at the **peak** of the energy profile — the point of highest energy along the reaction path. Anything at an energy maximum is in **unstable equilibrium**: the smallest displacement sends it downhill, either forward to products or back to reactants.",
      },
      {
        text: "In it the old bonds are **partly broken** and the new ones **partly formed**, so it is not a compound with a full set of bonds at all. Its lifetime is of the order of a bond vibration, around 10^−13 s.",
      },
      {
        text: "Contrast a **reaction intermediate**, which sits in a **dip** between two peaks. That is a local minimum, so an intermediate is genuinely stable for a while and can sometimes be isolated — a carbocation in an SN1 reaction, or the IO^− of the iodide-catalysed decomposition of hydrogen peroxide.",
      },
      {
        table: [
          ["", "Activated complex", "Intermediate"],
          ["Position on the profile", "Maximum", "Minimum between maxima"],
          ["Stability", "Unstable in both directions", "Locally stable"],
          ["Can it be isolated ?", "**No**", "Sometimes"],
        ],
      },
    ],
    keyPoint:
      "A maximum on the energy profile is unstable in both directions, so the activated complex cannot be isolated; an intermediate sits in a dip and sometimes can.",
  },
  /* ---------------------------------------------------------------- */
  /* ch4                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-4-1",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Potassium dichromate",
    years: [],
    question:
      "(i) Write the ionic equation for the oxidation by acidified potassium dichromate of (1) iron(II) to iron(III) and (2) iodide to iodine.\n(ii) Draw or describe the structure of the dichromate ion.\n(iii) Why is acidified K2Cr2O7 used as a primary standard in volumetric analysis, while KMnO4 is not ?",
    answer: [
      {
        label: "(i)(1) Iron(II) to iron(III)",
        text: "Chromium falls from +6 to +3, a **six**-electron change per dichromate, so six Fe^2+ are oxidised:",
      },
      { equation: "Cr2O7^2− + 14H^+ + 6Fe^2+ -> 2Cr^3+ + 7H2O + 6Fe^3+" },
      { label: "(i)(2) Iodide to iodine", text: "Likewise six iodides give three molecules of iodine:" },
      { equation: "Cr2O7^2− + 14H^+ + 6I^− -> 2Cr^3+ + 7H2O + 3I2" },
      {
        text: "The half-reaction behind both is the same, and worth knowing on its own:",
      },
      { equation: "Cr2O7^2− + 14H^+ + 6e^− -> 2Cr^3+ + 7H2O   (E° = +1.33 V)" },
      {
        text: "The orange solution turns **green** as Cr^3+ forms, which is the visible signal that the oxidation has run.",
      },
      {
        label: "(ii) Structure of the dichromate ion",
        text: "**Two CrO4 tetrahedra sharing one corner oxygen** — a bridging Cr–O–Cr link with three terminal oxygens on each chromium:",
      },
      {
        table: [
          ["Type of Cr–O bond", "How many", "Length", "Character"],
          ["Terminal", "6", "≈ 163 pm — all equal", "Partial double bond"],
          ["Bridging (Cr–O–Cr)", "2", "≈ 179 pm", "Single bond"],
        ],
      },
      {
        text: "The Cr–O–Cr bridge angle is about **126°**. The six terminal bonds are shorter because those oxygens can form π bonds into the chromium's empty d orbitals, while the bridging oxygen's electrons are shared between two metal centres.",
      },
      {
        label: "(iii) Why dichromate is a primary standard",
        text: "Because potassium dichromate can be obtained **pure, dry and stable**, so a known mass gives a solution of accurately known concentration without needing standardisation.",
      },
      {
        table: [
          ["", "K2Cr2O7", "KMnO4"],
          ["Obtainable pure", "**Yes**", "Usually contains MnO2"],
          ["Deliquescent ?", "No", "—"],
          ["Solution stability", "**Stable indefinitely**", "Decomposes slowly in light"],
          ["Needs standardising ?", "No", "**Yes**, before each use"],
          ["Use as a primary standard", "**Yes**", "No"],
        ],
      },
      {
        text: "Permanganate solutions decompose slowly, catalysed by light and by the MnO2 they deposit, so their concentration drifts. Dichromate does not, which is why it is the reagent of choice for accurate iron determinations — though it needs an external indicator, since it is not self-indicating the way permanganate is.",
      },
    ],
    keyPoint:
      "Cr2O7²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H2O; two corner-sharing tetrahedra; pure, dry and stable, hence a primary standard.",
  },
  /* ---------------------------------------------------------------- */
  /* ch5                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-5-1",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Isomerism in coordination compounds",
    years: [],
    question:
      "Name and explain the type of structural isomerism shown by each of the following pairs :\n(i) [Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2·H2O\n(ii) [Co(NH3)5(SO4)]Br and [Co(NH3)5Br]SO4\n(iii) [Cr(NH3)6][Co(CN)6] and [Co(NH3)6][Cr(CN)6]",
    answer: [
      {
        label: "(i) Hydrate (solvate) isomerism",
        text: "**The isomers differ in how many water molecules are inside the coordination sphere and how many are simply water of crystallisation.**",
      },
      {
        table: [
          ["Isomer", "Colour", "Water inside", "Free Cl^− per formula", "mol AgCl with AgNO3"],
          ["[Cr(H2O)6]Cl3", "Violet", "6", "3", "3"],
          ["[Cr(H2O)5Cl]Cl2·H2O", "Blue-green", "5", "2", "2"],
          ["[Cr(H2O)4Cl2]Cl·2H2O", "Dark green", "4", "1", "1"],
        ],
      },
      {
        text: "All three have the formula CrCl3·6H2O, yet they are different compounds with different colours. **Silver nitrate distinguishes them**, since it precipitates only the chloride outside the sphere; they can also be told apart by drying over concentrated sulphuric acid, which removes only the water of crystallisation.",
      },
      {
        label: "(ii) Ionisation isomerism",
        text: "**The isomers exchange an ion inside the coordination sphere with the counter ion outside it**, so each gives a different ion in solution:",
      },
      {
        equations: [
          "[Co(NH3)5(SO4)]Br -> [Co(NH3)5(SO4)]^+ + Br^−",
          "[Co(NH3)5Br]SO4 -> [Co(NH3)5Br]^2+ + SO4^2−",
        ],
      },
      {
        text: "A simple test separates them: the **first** gives a cream precipitate of AgBr with silver nitrate but nothing with barium chloride; the **second** gives a white precipitate of BaSO4 with barium chloride but nothing with silver nitrate.",
      },
      {
        label: "(iii) Coordination isomerism",
        text: "**The ligands are distributed differently between a complex cation and a complex anion.** Both metals are present in both isomers, but they have swapped ligand sets:",
      },
      {
        table: [
          ["Isomer", "In the cation", "In the anion"],
          ["[Cr(NH3)6][Co(CN)6]", "Cr with NH3", "Co with CN^−"],
          ["[Co(NH3)6][Cr(CN)6]", "Co with NH3", "Cr with CN^−"],
        ],
      },
      {
        text: "This can only arise when **both** the cation and the anion are complex ions — which is what distinguishes it from ionisation isomerism, where only one of them is.",
      },
      {
        text: "The fourth kind of structural isomerism is **linkage isomerism**, from an ambidentate ligand binding through a different donor atom, as in the nitro and nitrito forms of [Co(NH3)5(NO2)]^2+.",
      },
    ],
    keyPoint:
      "Hydrate isomers move water in or out of the sphere, ionisation isomers swap a ligand with the counter ion, coordination isomers swap ligands between two complex ions.",
  },
  {
    id: "g3-5-2",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Crystal field theory",
    years: [],
    question:
      "(i) State three limitations of valence bond theory.\n(ii) Calculate the crystal field stabilisation energy of a d^6 ion in an octahedral field that is (1) high spin and (2) low spin, in units of Δo.\n(iii) Why does crystal field theory explain the colour of complexes where valence bond theory cannot ?",
    answer: [
      { label: "(i) Limitations of VBT", text: "Any three of the following:" },
      {
        points: [
          "It gives **no quantitative account of magnetic data** — it says how many electrons are unpaired but not the exact magnetic moments, and cannot handle temperature dependence.",
          "It offers **no explanation of colour**, because it says nothing about the energies of the d orbitals.",
          "It does not predict whether a complex will be **inner or outer orbital** — the hybridisation is chosen to fit the observed magnetism rather than predicted in advance.",
          "It cannot explain the **spectrochemical series** — why one ligand produces pairing and another does not.",
          "It gives no account of the **relative stabilities** of different complexes of the same metal.",
        ],
      },
      { label: "(ii) CFSE for a d^6 ion", text: "The t2g set lies 0·4Δo below the barycentre and the eg set 0·6Δo above it:" },
      { equation: "$\\text{CFSE} = (-0.4\\,n_{t_{2g}} + 0.6\\,n_{e_g})\\,\\Delta_o$" },
      { label: "(1) High spin, weak field: t2g⁴ eg²", text: "" },
      { equation: "$\\text{CFSE} = [(-0.4 \\times 4) + (0.6 \\times 2)]\\Delta_o = (-1.6 + 1.2)\\Delta_o$" },
      { equation: "$\\text{CFSE} = -0.4\\,\\Delta_o$" },
      { label: "(2) Low spin, strong field: t2g⁶ eg⁰", text: "" },
      { equation: "$\\text{CFSE} = [(-0.4 \\times 6) + (0.6 \\times 0)]\\Delta_o = -2.4\\,\\Delta_o$" },
      {
        text: "So the low spin arrangement is stabilised by **six times** as much. The gain is not free, though — it costs the **pairing energy** of the two extra pairs, which is why the low spin form is adopted only when Δo exceeds P. d^6 shows the largest difference of any configuration, which is why Co(III) and Fe(II) complexes are so often low spin.",
      },
      {
        label: "(iii) Why CFT explains colour",
        text: "Because CFT is built on the idea that the ligand field **splits the d orbitals into two sets of different energy**, separated by Δo. An electron can absorb a photon whose energy matches that gap and jump from t2g to eg — a **d–d transition** — and the complex shows the **complementary** colour to the light absorbed.",
      },
      {
        text: "Since Δo depends on the ligand, the theory also predicts that the **same metal gives different colours with different ligands** — [Cu(H2O)4]^2+ is pale blue and [Cu(NH3)4]^2+ deep blue — and it correctly predicts that d^0 and d^10 ions are colourless.",
      },
      {
        text: "**VBT has no such gap.** It describes only the bonding orbitals used for hybridisation and assigns the d orbitals no relative energies, so there is nothing for a photon to promote an electron across. This gap in VBT is precisely why crystal field theory was developed.",
      },
    ],
    keyPoint:
      "CFSE = (−0.4 n_t2g + 0.6 n_eg)Δo — d⁶ gives −0.4Δo high spin and −2.4Δo low spin; only CFT supplies the energy gap that colour requires.",
  },
  {
    id: "g3-5-3",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Importance and applications",
    years: [],
    question:
      "Which of the following pairs correctly matches a biologically important coordination compound with its central metal ion ?",
    options: [
      "Chlorophyll — Fe^2+",
      "Vitamin B12 — Co^3+",
      "Haemoglobin — Mg^2+",
      "Carboxypeptidase-A — Cu^2+",
    ],
    correct: 1,
    answer: [
      { text: "**Vitamin B12 — Co^3+.**" },
      {
        table: [
          ["Compound", "Correct metal", "Function"],
          ["Haemoglobin", "**Fe^2+**", "Carries oxygen in the blood"],
          ["Chlorophyll", "**Mg^2+**", "Absorbs light in photosynthesis"],
          ["Vitamin B12 (cyanocobalamin)", "**Co^3+**", "Coenzyme; deficiency gives pernicious anaemia"],
          ["Carboxypeptidase-A", "**Zn^2+**", "A digestive enzyme"],
        ],
      },
      {
        text: "Options (a) and (c) have **swapped** the metals of chlorophyll and haemoglobin, which is the trap the question is built on. Option (d) puts copper where zinc belongs.",
      },
      {
        text: "Haemoglobin and chlorophyll are worth learning together precisely because they are so alike: both are **porphyrin** complexes with a very similar ring system, and it is the **metal at the centre** that decides the function. Iron gives a molecule that binds and releases oxygen; magnesium gives one that harvests light.",
      },
      {
        text: "The iron in haemoglobin must stay as **Fe^2+** to carry oxygen. Carbon monoxide poisoning works by binding to that iron about 200 times more strongly than oxygen does, blocking the site.",
      },
    ],
    keyPoint: "Haemoglobin Fe, chlorophyll Mg, vitamin B12 Co, carboxypeptidase-A Zn.",
  },
  /* ---------------------------------------------------------------- */
  /* ch6                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-6-1",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Polyhalogen compounds",
    years: [],
    question:
      "Give one use and one hazard of each of the following :\n(i) dichloromethane,\n(ii) tetrachloromethane,\n(iii) iodoform.\nWrite the equation for the laboratory preparation of iodoform from ethanol.",
    answer: [
      {
        table: [
          ["Compound", "Use", "Hazard"],
          ["**Dichloromethane**, CH2Cl2", "Paint remover; propellant; process solvent for decaffeinating coffee", "Harms the central nervous system; causes dizziness and nausea; damages the cornea"],
          ["**Tetrachloromethane**, CCl4", "Solvent; formerly in fire extinguishers and dry cleaning", "Damages the liver; in a fire it gives **phosgene**; depletes ozone"],
          ["**Iodoform**, CHI3", "Formerly an antiseptic", "The antiseptic action is from the iodine it releases, and its own **objectionable smell** ended its use"],
        ],
      },
      {
        label: "Preparation of iodoform from ethanol",
        text: "Warming ethanol with iodine and alkali gives the yellow precipitate of iodoform:",
      },
      { equation: "CH3CH2OH + 4I2 + 6NaOH -> CHI3↓ + HCOONa + 5NaI + 5H2O" },
      {
        text: "Ethanol works because it carries the **CH3CH(OH)– group**, which the alkaline iodine first oxidises to the methyl ketone CH3CHO — and it is the CH3CO– group that the reaction actually needs.",
      },
      {
        text: "This is why the **iodoform test** is positive for ethanol and for any alcohol of the form CH3CH(OH)R, as well as for methyl ketones. Methanol and propan-1-ol give nothing.",
      },
      {
        label: "On tetrachloromethane in a fire",
        text: "It was abandoned as a fire extinguisher for the reason that made it dangerous:",
      },
      { equation: "2CCl4 + O2 ->[high temperature] 2COCl2 + 2Cl2" },
      {
        text: "Phosgene, COCl2, is the same extremely poisonous gas that chloroform forms slowly on standing in air and light — which is why chloroform is kept in dark, full, air-tight bottles.",
      },
    ],
    keyPoint:
      "Iodoform needs a CH3CO– or CH3CH(OH)– group; CCl4 and CHCl3 both give phosgene, which is why neither is used as it once was.",
  },
  /* ---------------------------------------------------------------- */
  /* ch7                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-7-1",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Distinguishing alcohols",
    years: [],
    question:
      "Three unlabelled bottles contain butan-1-ol, butan-2-ol and 2-methylpropan-2-ol.\n(i) How would the Lucas test distinguish them ?\n(ii) How would controlled oxidation distinguish them ?\n(iii) Which of the three gives a positive iodoform test, and why ?",
    answer: [
      {
        label: "(i) The Lucas test",
        text: "Lucas reagent is **concentrated HCl with anhydrous ZnCl2**. The alcohol is converted to the alkyl chloride, which is insoluble and shows as a **cloudiness**; how fast it appears distinguishes the three:",
      },
      {
        table: [
          ["Alcohol", "Class", "Cloudiness appears"],
          ["2-Methylpropan-2-ol", "3°", "**Immediately**"],
          ["Butan-2-ol", "2°", "In about **5 minutes**"],
          ["Butan-1-ol", "1°", "**Not** at room temperature — needs heating"],
        ],
      },
      { equation: "R–OH + HCl ->[anhyd. ZnCl2] R–Cl↓ + H2O" },
      {
        text: "The order follows **carbocation stability**, because the reaction goes by SN1 for the tertiary and secondary alcohols: 3° > 2° > 1°. The zinc chloride is a Lewis acid that helps the –OH leave.",
      },
      {
        label: "(ii) Controlled oxidation",
        text: "The three give three different kinds of product, which is often the more convenient distinction:",
      },
      {
        table: [
          ["Alcohol", "Product with mild oxidant", "With a strong oxidant"],
          ["Butan-1-ol (1°)", "Butanal, an **aldehyde**", "Butanoic acid — same carbon count"],
          ["Butan-2-ol (2°)", "Butan-2-one, a **ketone**", "Ketone, resistant to further oxidation"],
          ["2-Methylpropan-2-ol (3°)", "**No reaction**", "Cleaves the chain, giving shorter acids"],
        ],
      },
      {
        equations: [
          "CH3CH2CH2CH2OH ->[PCC] CH3CH2CH2CHO",
          "CH3CH(OH)CH2CH3 ->[PCC] CH3COCH2CH3",
        ],
      },
      {
        text: "A tertiary alcohol has **no hydrogen on the carbon bearing the –OH**, so there is nothing to remove; oxidising it at all means breaking a C–C bond, which needs forcing conditions.",
      },
      {
        label: "(iii) The iodoform test",
        text: "**Butan-2-ol alone** gives a positive test — a yellow precipitate of CHI3.",
      },
      { equation: "CH3CH(OH)CH2CH3 + 4I2 + 6NaOH -> CHI3↓ + CH3CH2COONa + 5NaI + 5H2O" },
      {
        text: "The test responds to the **CH3CH(OH)– group**, which alkaline iodine oxidises to the methyl ketone CH3CO–. Butan-2-ol has it; butan-1-ol's –OH carbon carries no methyl, and the tertiary alcohol cannot be oxidised to a ketone at all.",
      },
      {
        text: "**Victor Meyer's test** would separate all three at once: red for the primary, blue for the secondary and colourless for the tertiary.",
      },
    ],
    keyPoint:
      "Lucas ranks by carbocation stability (3° fastest); oxidation gives aldehyde, ketone or nothing; iodoform needs the CH3CH(OH)– group.",
  },
  {
    id: "g3-7-2",
    chapter: 7,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Preparation of alcohols and phenols",
    years: [],
    question:
      "(i) Write the equation for the preparation of phenol from cumene and name the by-product. Why is this the industrial method ?\n(ii) Propan-1-ol and propan-2-ol are both C3H8O. Which alkene would you hydrate, and with which method, to obtain each ?",
    answer: [
      {
        label: "(i) Phenol from cumene",
        text: "Cumene — isopropylbenzene — is oxidised by air to cumene hydroperoxide, which is then cleaved with dilute acid:",
      },
      {
        equations: [
          "C6H5CH(CH3)2 + O2 -> C6H5C(CH3)2OOH",
          "C6H5C(CH3)2OOH ->[dil. H2SO4] C6H5OH + CH3COCH3",
        ],
      },
      {
        text: "The by-product is **acetone (propanone)**, and that is exactly why this is the industrial route: it produces **two saleable chemicals from one process**, in roughly the proportions the market wants. The other routes throw away their by-products.",
      },
      {
        text: "The conditions are also mild — air and dilute acid — against the 623 K and 300 atm that the chlorobenzene route needs.",
      },
      {
        label: "(ii) Making the two propanols from propene",
        text: "Both come from the **same alkene, propene** — the difference is the method, and it is a textbook case of opposite regiochemistry:",
      },
      {
        table: [
          ["Product", "Method", "Rule followed"],
          ["**Propan-2-ol**", "Acid-catalysed hydration, H2O/H^+", "**Markovnikov** — OH to the more substituted carbon"],
          ["**Propan-1-ol**", "Hydroboration–oxidation, B2H6 then H2O2/OH^−", "**Anti-Markovnikov** — OH to the less substituted carbon"],
        ],
      },
      {
        equations: [
          "CH3CH=CH2 + H2O ->[H^+] CH3CH(OH)CH3   (propan-2-ol)",
          "CH3CH=CH2 ->[1. B2H6][2. H2O2 / OH^−] CH3CH2CH2OH   (propan-1-ol)",
        ],
      },
      {
        text: "Acid-catalysed hydration goes through the **more stable secondary carbocation**, which puts the –OH on the middle carbon. Hydroboration has no carbocation at all — boron adds to the less hindered carbon and is then replaced by –OH with **retention**, so the product is the primary alcohol.",
      },
    ],
    keyPoint:
      "Cumene gives phenol and acetone together, which is why it is industrial; hydration is Markovnikov, hydroboration anti-Markovnikov.",
  },
  /* ---------------------------------------------------------------- */
  /* ch8                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-8-1",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Preparation of ketones",
    years: [],
    question:
      "Write the equations for preparing a ketone by each of the following, naming the product :\n(i) hydration of propyne,\n(ii) reaction of ethanoyl chloride with dimethylcadmium,\n(iii) Friedel–Crafts acylation of benzene.\nWhy is a dialkylcadmium preferred to a Grignard reagent in (ii) ?",
    answer: [
      {
        label: "(i) Hydration of propyne",
        text: "Water adds across the triple bond over mercury(II) sulphate in dilute sulphuric acid, following **Markovnikov's rule**. The enol formed at once tautomerises to the ketone:",
      },
      {
        equations: [
          "CH3C≡CH + H2O ->[HgSO4 / dil. H2SO4][333 K] CH3C(OH)=CH2",
          "CH3C(OH)=CH2 <=> CH3COCH3",
        ],
      },
      {
        text: "The product is **propanone**. Note that **ethyne is the exception**: being symmetrical and terminal at both ends, it gives ethanal, an aldehyde. Every other alkyne gives a ketone.",
      },
      {
        label: "(ii) Ethanoyl chloride with dimethylcadmium",
        text: "The cadmium reagent delivers a methyl group to the acyl carbon:",
      },
      { equation: "2CH3COCl + (CH3)2Cd -> 2CH3COCH3 + CdCl2" },
      { text: "The product is again **propanone**." },
      {
        label: "(iii) Friedel–Crafts acylation",
        text: "An acyl chloride with anhydrous aluminium chloride acylates the ring:",
      },
      { equation: "C6H6 + CH3COCl ->[anhyd. AlCl3] C6H5COCH3 + HCl" },
      {
        text: "The product is **acetophenone**. The acid anhydride works equally well in place of the acyl chloride.",
      },
      {
        label: "Why dialkylcadmium rather than a Grignard",
        text: "Because **a dialkylcadmium is far less reactive and stops cleanly at the ketone**, whereas a Grignard reagent would not stop there.",
      },
      {
        text: "A ketone is itself a carbonyl compound, so it is open to attack by a second molecule of reagent. A Grignard is reactive enough to add again and give a **tertiary alcohol**:",
      },
      {
        equations: [
          "CH3COCl + CH3MgBr -> CH3COCH3",
          "CH3COCH3 + CH3MgBr -> (CH3)3C–OMgBr ->[H2O] (CH3)3C–OH",
        ],
      },
      {
        text: "R2Cd is too weak to attack the ketone once formed, so the reaction halts at the right stage. It is the same principle as the **poisoned catalyst** of the Rosenmund reduction — deliberately weakening a reagent to stop it overshooting.",
      },
    ],
    keyPoint:
      "Alkyne hydration is Markovnikov and gives a ketone (ethyne excepted); R2Cd stops at the ketone where a Grignard would go on to a 3° alcohol.",
  },
  {
    id: "g3-8-2",
    chapter: 8,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [],
    question:
      "Arrange Tollens', Fehling's and Benedict's reagents according to what each one detects, and state which of them would give a positive result with (i) benzaldehyde, (ii) glucose and (iii) propanone. Give reasons.",
    answer: [
      {
        table: [
          ["Reagent", "Contains", "Positive result", "Detects"],
          ["**Tollens'**", "[Ag(NH3)2]^+ in ammonia", "**Silver mirror**", "Aliphatic **and aromatic** aldehydes"],
          ["**Fehling's**", "Cu^2+ with tartrate in NaOH", "**Red-brown Cu2O**", "**Aliphatic** aldehydes only"],
          ["**Benedict's**", "Cu^2+ with citrate in Na2CO3", "**Brick-red Cu2O**", "**Aliphatic** aldehydes and reducing sugars"],
        ],
      },
      {
        label: "(i) Benzaldehyde",
        text: "**Tollens' only.** It gives a silver mirror, but **no** result with Fehling's or Benedict's.",
      },
      {
        text: "Both copper reagents fail with **aromatic** aldehydes. The ring is electron-donating and stabilises the carbonyl by conjugation, so benzaldehyde is not easily oxidised by the relatively weak copper(II) complex — while the silver(I) of Tollens' is a strong enough oxidant to manage it.",
      },
      {
        label: "(ii) Glucose",
        text: "**All three.** Glucose is a **reducing sugar**: its open-chain form carries a free aliphatic –CHO group, so silver and both copper reagents are reduced.",
      },
      { equation: "CH2OH(CHOH)4CHO + 2Cu^2+ + 5OH^− -> CH2OH(CHOH)4COO^− + Cu2O↓ + 3H2O" },
      {
        text: "Fructose also gives a positive result with all three, even though it is a **ketose** — because the alkaline medium isomerises it to glucose first. Bromine water, being neutral, does not, and that is what distinguishes the two.",
      },
      {
        label: "(iii) Propanone",
        text: "**None.** It is a ketone, so there is no C–H on the carbonyl carbon to remove, and oxidation would require breaking a C–C bond — beyond all three mild reagents.",
      },
      {
        text: "Propanone would instead give a **positive iodoform test**, which benzaldehyde does not. Pairing the two tests separates all three compounds.",
      },
    ],
    keyPoint:
      "Tollens' takes aromatic aldehydes too; Fehling's and Benedict's are aliphatic-only; none responds to a ketone.",
  },
  {
    id: "g3-8-3",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Preparation of aldehydes",
    years: [],
    question:
      "Benzene is treated with a mixture of carbon monoxide and hydrogen chloride in the presence of anhydrous AlCl3 and CuCl. The product is :",
    options: ["Benzoic acid", "Benzaldehyde", "Acetophenone", "Chlorobenzene"],
    correct: 1,
    answer: [
      { text: "**Benzaldehyde** — this is the **Gattermann–Koch** reaction." },
      { equation: "C6H6 + CO + HCl ->[anhyd. AlCl3 / CuCl] C6H5CHO" },
      {
        text: "The reaction **formylates** the ring, attaching a –CHO group directly. CO and HCl together act as the source of the formyl electrophile, and the **CuCl** assists by absorbing the carbon monoxide.",
      },
      {
        label: "Why not an ordinary Friedel–Crafts",
        text: "Because that would need **formyl chloride, HCOCl**, which is too unstable to exist — it decomposes immediately:",
      },
      { equation: "HCOCl -> CO + HCl" },
      {
        text: "Gattermann–Koch sidesteps the problem by supplying CO and HCl **separately** and generating the electrophile in the flask. So it is best understood as the Friedel–Crafts that works precisely because the unstable reagent is never isolated.",
      },
      {
        text: "Option (c) is what an acyl chloride would give — CH3COCl with AlCl3 gives acetophenone. Option (a) would require oxidation of a side chain, and option (d) chlorination with a halogen carrier. Neither CO nor HCl alone chlorinates benzene.",
      },
    ],
    keyPoint:
      "CO + HCl over AlCl3/CuCl formylates benzene to benzaldehyde, because formyl chloride is too unstable to use directly.",
  },
  /* ---------------------------------------------------------------- */
  /* ch9                                                              */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-9-1",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Reactions of amines",
    years: [],
    question:
      "Pentan-2-amine is treated with excess methyl iodide, then with moist silver oxide, and the product is heated. The major alkene formed is :",
    options: ["Pent-2-ene", "Pent-1-ene", "2-Methylbut-2-ene", "Penta-1,3-diene"],
    correct: 1,
    answer: [
      { text: "**Pent-1-ene** — the least substituted alkene, by **Hofmann's rule**." },
      {
        text: "The three steps are exhaustive methylation, conversion to the hydroxide, and elimination on heating:",
      },
      {
        equations: [
          "CH3CH(NH2)CH2CH2CH3 + 3CH3I ->[excess] CH3CH(N^+(CH3)3)CH2CH2CH3 I^−",
          "R–N^+(CH3)3 I^− + AgOH -> R–N^+(CH3)3 OH^− + AgI↓",
          "CH3CH(N^+(CH3)3)CH2CH2CH3 OH^− ->[Δ] CH2=CHCH2CH2CH3 + N(CH3)3 + H2O",
        ],
      },
      {
        text: "There are β-hydrogens on both sides of the nitrogen — on C-1 and on C-3 — so two alkenes are possible. **Pent-1-ene** dominates.",
      },
      {
        table: [
          ["", "Saytzeff (from a halide)", "Hofmann (from R4N^+OH^−)"],
          ["Leaving group", "Halide — small", "Trialkylamine — **bulky**"],
          ["What decides the product", "Stability of the alkene", "Access to the β-hydrogen"],
          ["Major product here", "Pent-2-ene", "**Pent-1-ene**"],
        ],
      },
      {
        text: "Option (a) is the trap — it is what 2-bromopentane would give with alcoholic KOH, by Saytzeff. The bulky –N(CH3)3 group blocks the crowded internal β-hydrogen, so the base takes the **more accessible terminal** one; there are also more terminal hydrogens statistically, and those C–H bonds are the most acidic, being next to the positive nitrogen.",
      },
      {
        text: "Option (c) has a carbon skeleton that does not exist in the starting material, and option (d) would require a second elimination.",
      },
    ],
    keyPoint:
      "A bulky leaving group sends elimination to the accessible β-hydrogen, so Hofmann gives the terminal alkene where Saytzeff gives the internal one.",
  },
  /* ---------------------------------------------------------------- */
  /* ch10                                                             */
  /* ---------------------------------------------------------------- */
  {
    id: "g3-10-1",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Preparation of glucose",
    years: [],
    question:
      "Glucose is prepared commercially by hydrolysing starch with dilute sulphuric acid. The conditions used are :",
    options: [
      "273 K at atmospheric pressure",
      "393 K under 2–3 atm pressure",
      "623 K under 300 atm pressure",
      "Room temperature with an enzyme",
    ],
    correct: 1,
    answer: [
      { text: "**393 K under 2–3 atm pressure.**" },
      { equation: "(C6H10O5)n + nH2O ->[dil. H2SO4][393 K, 2-3 atm] nC6H12O6" },
      {
        text: "Starch is a **polysaccharide** with a great many glycosidic bonds to break, so the hydrolysis needs both heat and pressure. This is the commercial route because starch from maize or potato is cheap and abundant, and because starch is a polymer of glucose alone — so no separation step is needed afterwards.",
      },
      {
        text: "Option (c) gives the conditions of the **Dow process** for making phenol from chlorobenzene, not for hydrolysing starch. Option (a) is the temperature at which a **diazonium salt** is prepared.",
      },
      {
        label: "The other route",
        text: "From **sucrose**, boiled with dilute HCl or H2SO4 in alcoholic solution:",
      },
      { equation: "C12H22O11 + H2O ->[dil. HCl] C6H12O6 + C6H12O6" },
      {
        text: "That one gives **glucose and fructose together**, and they are separated by crystallising out the glucose, which is the less soluble of the two in alcohol. The enzyme **invertase** does the same hydrolysis under mild conditions, but the acid route is cheaper on scale.",
      },
    ],
    keyPoint:
      "Starch with dilute H2SO4 at 393 K and 2–3 atm gives glucose alone, which is why it is the commercial route.",
  },
];
