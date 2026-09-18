import type { Question } from "@/types";

/** Unit 5 — Coordination Compounds, second tranche (board papers 2013–2025). */
export const CH05B: Question[] = [
  /* ---------------- Nomenclature ---------------- */
  {
    id: "c5-s12",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2013, 2019],
    question:
      "Write the IUPAC names of:\n(a) [Cr(NH3)3Cl3]\n(b) K3[Fe(CN)6]\n(c) [CoBr2(en)2]+ (en = ethane-1,2-diamine)",
    answer: [
      {
        label: "(a)",
        text: "**Triamminetrichloridochromium(III).** The complex is neutral: x + 3(0) + 3(−1) = 0, so x = +3. No counter-ion, so no second word.",
      },
      {
        label: "(b)",
        text: "**Potassium hexacyanidoferrate(III).** The complex is an anion, so the metal takes the Latin stem with the '-ate' suffix: x + 6(−1) = −3, so x = +3.",
      },
      {
        label: "(c)",
        text: "**Dibromidobis(ethane-1,2-diamine)cobalt(III) ion.** 'Bis' is used because the ligand name already contains 'di'. Oxidation state: x + 2(−1) + 2(0) = +1, so x = +3.",
      },
      {
        text: "**Latin stems for anionic complexes:** Fe → ferrate, Cu → cuprate, Ag → argentate, Au → aurate, Pb → plumbate, Sn → stannate. Other metals simply take '-ate' (chromate, cobaltate, nickelate).",
      },
    ],
    keyPoint: "Anionic complex ⇒ metal ends in -ate, often from the Latin stem.",
  },
  {
    id: "c5-s13",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2025],
    question:
      "Write the IUPAC names of:\n(a) [Fe(en)2Cl2]+\n(b) [Co(NH3)4(H2O)Br]SO4\n(c) [Ni(CN)4]2−",
    answer: [
      { label: "(a)", text: "**Dichloridobis(ethane-1,2-diamine)iron(III) ion.** x − 2 + 0 = +1 ⇒ x = +3." },
      {
        label: "(b)",
        text: "**Tetraammineaquabromidocobalt(III) sulphate.** Ligands alphabetically: ammine, aqua, bromido. Charge: x + 0 + 0 − 1 = +2 ⇒ x = +3.",
      },
      { label: "(c)", text: "**Tetracyanidonickelate(II) ion.** x + 4(−1) = −2 ⇒ x = +2. Anionic, so 'nickelate'." },
      {
        text: "Alphabetical ordering ignores the multiplying prefixes — you alphabetise on **ammine**, **aqua**, **bromido**, not on tetra-, di- and so on.",
      },
    ],
  },

  /* ---------------- Isomerism ---------------- */
  {
    id: "c5-s14",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Isomerism",
    years: [2017, 2014],
    question:
      "(a) What type of isomerism is shown by [Co(en)3]3+?\n(b) What type is shown by [Co(NH3)5(SCN)]2+?\n(c) What type is shown by [Co(NH3)6][Cr(CN)6]?",
    answer: [
      {
        label: "(a) Optical isomerism",
        text: "The complex has three bidentate 'en' ligands arranged as a **propeller** around cobalt. It has no plane of symmetry, so it exists as a pair of non-superimposable mirror images — the Δ and Λ forms.",
      },
      { figure: { kind: "named", id: "optical-isomers-en" } },
      {
        label: "(b) Linkage isomerism",
        text: "Thiocyanate is **ambidentate** — it can bind through sulphur (thiocyanato-S, –SCN) or through nitrogen (thiocyanato-N, –NCS), giving two distinct compounds.",
      },
      {
        label: "(c) Coordination isomerism",
        text: "Both the cation and the anion are complexes, so the **ligands can be exchanged between the two metal centres**:",
      },
      { equation: "[Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6]" },
    ],
  },
  {
    id: "c5-s15",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Isomerism",
    years: [2019],
    question:
      "Write the IUPAC name of [Cr(NH3)4Cl2]+ and draw the structures of its geometrical isomers.",
    answer: [
      { label: "IUPAC name", text: "**Tetraamminedichloridochromium(III) ion.** x + 4(0) + 2(−1) = +1 ⇒ x = +3." },
      {
        text: "The complex is octahedral with two chloride ligands, which may be adjacent (**cis**, 90°) or opposite (**trans**, 180°):",
      },
      {
        figure: {
          kind: "geometry",
          shape: "octahedral",
          center: "Cr",
          ligands: ["Cl", "Cl", "NH3", "NH3", "NH3", "NH3"],
          alt: [0, 1],
          caption: "trans-[Cr(NH3)4Cl2]^+ — the two chlorides are 180° apart (green)",
        },
      },
      {
        figure: {
          kind: "geometry",
          shape: "octahedral",
          center: "Cr",
          ligands: ["Cl", "NH3", "Cl", "NH3", "NH3", "NH3"],
          alt: [0, 2],
          caption: "cis-[Cr(NH3)4Cl2]^+ — the two chlorides are 90° apart",
        },
      },
      {
        text: "Neither isomer is optically active: the **trans** form has a plane of symmetry through the two chlorides, and the **cis** form also possesses a mirror plane because the four ammine ligands are identical.",
      },
    ],
  },

  /* ---------------- VBT / CFT ---------------- */
  {
    id: "c5-s16",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Valence bond theory",
    years: [2019, 2016],
    question:
      "Using valence bond theory, give the hybridisation, geometry and magnetic character of:\n(a) [Fe(CN)6]4−\n(b) [Fe(H2O)6]3+\n(c) [Co(C2O4)3]3−\n[At. nos: Fe = 26, Co = 27]",
    answer: [
      {
        label: "(a) [Fe(CN)6]^4−",
        text: "Fe²⁺ is $3d^6$. Cyanide is a **strong field ligand**, so all six electrons pair into three orbitals, freeing two 3d orbitals. Hybridisation **$d^2sp^3$**, **octahedral**, **zero unpaired electrons** — **diamagnetic** (an inner-orbital, low-spin complex).",
      },
      {
        label: "(b) [Fe(H2O)6]^3+",
        text: "Fe³⁺ is $3d^5$. Water is a **weak field ligand**, so no pairing occurs and all five electrons stay unpaired; the inner 3d orbitals are unavailable, so the outer 4d set is used. Hybridisation **$sp^3d^2$**, **octahedral**, **5 unpaired electrons**, μ = 5.92 BM — strongly **paramagnetic** (outer-orbital, high-spin).",
      },
      {
        label: "(c) [Co(C2O4)3]^3−",
        text: "Oxalate is bidentate and the charge works out as x + 3(−2) = −3, so Co is **+3**, i.e. $3d^6$. Oxalate acts as a moderately strong field ligand here, so the electrons pair: **$d^2sp^3$**, **octahedral**, **diamagnetic**.",
      },
      { figure: { kind: "geometry", shape: "octahedral", center: "Fe", ligands: ["CN", "CN", "CN", "CN", "CN", "CN"], caption: "[Fe(CN)6]^4− — d^2sp^3, low spin, diamagnetic" } },
    ],
    keyPoint: "Work out the oxidation state first, then the d-count, then apply the ligand's field strength.",
  },
  {
    id: "c5-s17",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2024, 2015],
    question:
      "On the basis of crystal field theory, write the electronic configuration of a d4 ion when (a) Δₒ < P and (b) Δₒ > P. State the number of unpaired electrons in each.",
    answer: [
      {
        label: "(a) Weak field, Δₒ < P — high spin",
        text: "Promotion to the upper $e_g$ set costs less than pairing, so the fourth electron goes up rather than pairing:",
      },
      { equation: "$t_{2g}^3\\,e_g^1$ — **4 unpaired electrons**, μ = 4.90 BM" },
      {
        label: "(b) Strong field, Δₒ > P — low spin",
        text: "Pairing costs less than promotion, so the fourth electron pairs up in the lower set:",
      },
      { equation: "$t_{2g}^4\\,e_g^0$ — **2 unpaired electrons**, μ = 2.83 BM" },
      { figure: { kind: "named", id: "cft-octahedral" } },
      {
        text: "The two cases are distinguished experimentally by measuring the magnetic moment — which is exactly how high-spin and low-spin complexes are identified.",
      },
    ],
  },
  {
    id: "c5-s18",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Stability",
    years: [2014],
    question:
      "Which is the more stable complex and why: [Co(NH3)6]3+ or [Co(en)3]3+?",
    answer: [
      { text: "**[Co(en)3]^3+ is far more stable.**" },
      {
        text: "Both bind cobalt through six nitrogen donor atoms, so the bond strengths are comparable. The difference is that **'en' is bidentate** and forms three five-membered **chelate rings**, whereas ammonia is monodentate.",
      },
      {
        label: "Why chelation stabilises — the chelate effect",
        text: "Replacing six NH3 ligands by three 'en' ligands **increases the number of free particles** in solution:",
      },
      { equation: "[Co(NH3)6]^3+ + 3en -> [Co(en)3]^3+ + 6NH3" },
      {
        text: "Four species become seven, so ΔS is large and positive. Since ΔG = ΔH − TΔS, that entropy gain makes ΔG more negative and the chelate complex much more stable. Five- and six-membered chelate rings are the most stable.",
      },
    ],
    keyPoint: "The chelate effect is fundamentally an entropy effect.",
  },
  {
    id: "c5-s19",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Ligands",
    years: [2019],
    question:
      "Define with one example each: (a) polydentate ligand, (b) homoleptic complex, (c) coordination number.",
    answer: [
      {
        label: "(a) Polydentate ligand",
        text: "A ligand with **several donor atoms**, all able to bind the same metal ion at once. Example: **EDTA⁴⁻**, which is hexadentate, binding through two nitrogen and four oxygen atoms.",
      },
      {
        label: "(b) Homoleptic complex",
        text: "A complex in which the metal is bound to **only one kind of ligand**. Example: $[\\text{Co(NH}_3)_6]^{3+}$. A complex bound to more than one kind, such as $[\\text{Co(NH}_3)_4\\text{Cl}_2]^+$, is **heteroleptic**.",
      },
      {
        label: "(c) Coordination number",
        text: "The number of **donor atoms** (not ligands) directly bonded to the central metal ion. In $[\\text{Co(en)}_3]^{3+}$ there are only three ligands but the coordination number is **6**, because each 'en' donates two nitrogen lone pairs.",
      },
    ],
  },
  {
    id: "c5-m12",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Colour",
    years: [2017],
    question:
      "A solution of [Ni(H2O)6]2+ is green, but on adding excess ammonia it turns blue-violet. The best explanation is",
    options: [
      "Nickel changes its oxidation state",
      "Ammonia is a stronger field ligand than water, so Δₒ increases and the light absorbed changes",
      "The complex becomes tetrahedral",
      "The solution becomes more concentrated",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b).** The colour of a transition metal complex is set by the size of the crystal-field splitting Δₒ, because that is the energy an electron absorbs in a **d–d transition**.",
      },
      { equation: "[Ni(H2O)6]^2+ + 6NH3 -> [Ni(NH3)6]^2+ + 6H2O" },
      {
        text: "Ammonia lies **above water** in the spectrochemical series, so replacing water by ammonia **increases Δₒ**. A larger gap means light of shorter wavelength (higher energy) is absorbed, and the transmitted colour shifts from green to blue-violet.",
      },
      { equation: "I^− < Br^− < Cl^− < F^− < OH^− < H2O < NH3 < en < NO2^− < CN^− < CO" },
      { text: "The nickel stays in the +2 state throughout, and the geometry remains octahedral." },
    ],
    keyPoint: "Stronger field ligand ⇒ larger Δₒ ⇒ shorter wavelength absorbed ⇒ different colour.",
  },
  {
    id: "c5-l3",
    chapter: 5,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Werner's theory",
    years: [2020, 2016],
    question:
      "(a) State the main postulates of Werner's theory of coordination compounds.\n(b) A compound of formula CoCl3·4NH3 gives only one mole of AgCl per mole on treatment with excess AgNO3, and its aqueous solution conducts electricity as though it gives two ions. Deduce its structural formula and IUPAC name.\n(c) What isomerism does it show?",
    answer: [
      {
        label: "(a) Werner's postulates",
        points: [
          "A metal exhibits **two kinds of valency**: a **primary (ionisable)** valency, satisfied by negative ions, and a **secondary (non-ionisable)** valency, satisfied by ligands.",
          "The **primary valency** equals the oxidation state and is written **outside** the coordination sphere.",
          "The **secondary valency** equals the coordination number, is **fixed** for a given metal, and is written **inside** the square brackets.",
          "The secondary valencies are directed to **fixed positions in space**, which gives the complex its definite geometry — and hence the possibility of isomerism.",
        ],
      },
      {
        label: "(b) Deduction",
        text: "One mole of AgCl means only **one chloride is ionisable**; the other two must be inside the coordination sphere. Two ions in solution confirms this:",
      },
      { equation: "[Co(NH3)4Cl2]Cl -> [Co(NH3)4Cl2]^+ + Cl^−" },
      {
        text: "Coordination number = 4 (from NH3) + 2 (from Cl) = **6**, as expected for cobalt(III). Oxidation state: x − 2 = +1, so x = **+3**. ✓",
      },
      { text: "**IUPAC name: tetraamminedichloridocobalt(III) chloride.**" },
      {
        label: "(c) Isomerism",
        text: "It shows **geometrical isomerism** — the two chlorides inside the sphere may be cis (90°) or trans (180°):",
      },
      {
        figure: {
          kind: "geometry",
          shape: "octahedral",
          center: "Co",
          ligands: ["Cl", "NH3", "Cl", "NH3", "NH3", "NH3"],
          alt: [0, 2],
          caption: "cis-[Co(NH3)4Cl2]^+",
        },
      },
      {
        text: "Neither isomer is optically active, since both possess a plane of symmetry. It would also show **ionisation isomerism** with [Co(NH3)4Cl(Cl)]Cl-type rearrangements if a different anion were present.",
      },
    ],
  },
];
