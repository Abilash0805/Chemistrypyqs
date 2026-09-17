import type { Question } from "@/types";

/** Unit 5 — Coordination Compounds (7 marks). */
export const CH05: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "c5-m1",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Isomerism",
    years: [2025],
    question:
      "The complex ions [Co(NH3)5(NO2)]2+ and [Co(NH3)5(ONO)]2+ are called",
    options: [
      "ionisation isomers",
      "linkage isomers",
      "coordination isomers",
      "geometrical isomers",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) linkage isomers.** The nitrite ion is an **ambidentate ligand** — it has two different donor atoms and can bind through either. Coordination through nitrogen gives the nitrito-N (yellow) complex; through oxygen it gives the nitrito-O (red) complex.",
      },
      {
        equations: ["[Co(NH3)5(NO2)]^2+ — nitrito-N, bonded through N", "[Co(NH3)5(ONO)]^2+ — nitrito-O, bonded through O"],
      },
      { text: "Other ambidentate ligands: SCN⁻/NCS⁻ and CN⁻/NC⁻." },
    ],
  },
  {
    id: "c5-m2",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2025, 2023],
    question: "The diamagnetic species among the following is [At. no. Ni = 28, Fe = 26, Co = 27]",
    options: ["[Ni(CN)4]^2−", "[NiCl4]^2−", "[Fe(CN)6]^3−", "[CoF6]^3−"],
    correct: 0,
    answer: [
      {
        text: "**(a) [Ni(CN)4]^2−.** Ni²⁺ is $3d^8$. Cyanide is a **strong field ligand**, so the eight d electrons pair up into four orbitals, leaving one 3d orbital free. The hybridisation is $dsp^2$, the shape is **square planar**, and with **no unpaired electrons** the complex is diamagnetic.",
      },
      {
        text: "In [NiCl4]²⁻ the weak-field chloride cannot force pairing, so Ni²⁺ keeps two unpaired electrons: $sp^3$, tetrahedral, paramagnetic. The other two also have unpaired electrons.",
      },
      { figure: { kind: "geometry", shape: "square-planar", center: "Ni", ligands: ["CN", "CN", "CN", "CN"], caption: "[Ni(CN)4]^2− — dsp^2, square planar, diamagnetic" } },
    ],
    keyPoint: "Strong field + d⁸ ⇒ dsp² square planar, diamagnetic.",
  },
  {
    id: "c5-m3",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Oxidation state",
    years: [2023, 2020],
    question: "The oxidation state of Fe in [Fe(CO)5] is",
    options: ["+2", "0", "+3", "+5"],
    correct: 1,
    answer: [
      {
        text: "**(b) 0.** Carbon monoxide is a **neutral** ligand and the complex carries no overall charge, so",
      },
      { equation: "$x + 5(0) = 0 \\;\\Rightarrow\\; x = 0$" },
      {
        text: "Metal carbonyls characteristically have the metal in the zero oxidation state, stabilised by synergic σ-donation from CO and π-back-donation from the filled metal d orbitals into the empty π* orbitals of CO.",
      },
    ],
  },
  {
    id: "c5-m4",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Werner's theory",
    years: [2023, 2020],
    question: "The secondary valency (coordination number) of cobalt in [Co(en)2Cl2]+ is",
    options: ["6", "4", "2", "8"],
    correct: 0,
    answer: [
      {
        text: "**(a) 6.** Ethane-1,2-diamine (en) is a **bidentate** ligand — it donates two lone pairs each. So two 'en' ligands occupy 4 coordination sites and the two chlorides occupy 2 more:",
      },
      { equation: "$(2 \\times 2) + 2 = 6$" },
      { text: "Do not confuse the number of **ligands** (4) with the coordination number (6)." },
    ],
  },
  {
    id: "c5-m5",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Isomerism",
    years: [2020],
    question: "The pair [Co(NH3)4Cl2]Br2 and [Co(NH3)4Br2]Cl2 will show",
    options: [
      "linkage isomerism",
      "hydrate isomerism",
      "ionisation isomerism",
      "coordination isomerism",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) ionisation isomerism.** The two compounds have the same molecular formula but exchange ions between the **coordination sphere** and the **ionisation sphere**, so they give different ions in solution.",
      },
      {
        points: [
          "[Co(NH3)4Cl2]Br2 gives Br⁻ in solution — a cream precipitate with AgNO3.",
          "[Co(NH3)4Br2]Cl2 gives Cl⁻ in solution — a white precipitate with AgNO3.",
        ],
      },
    ],
  },
  {
    id: "c5-m6",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Werner's theory",
    years: [2020],
    question: "How many ions are produced in solution from the complex [Co(NH3)5Cl]Cl2?",
    options: ["4", "2", "3", "5"],
    correct: 2,
    answer: [
      { text: "**(c) 3.** Only the ions **outside** the square brackets ionise:" },
      { equation: "[Co(NH3)5Cl]Cl2 -> [Co(NH3)5Cl]^2+ + 2Cl^−" },
      {
        text: "That is one complex cation plus two chloride ions = **3 ions**. The chloride inside the coordination sphere is firmly bonded to cobalt and does not ionise, so only 2 moles of AgCl would be precipitated per mole of compound.",
      },
    ],
  },
  {
    id: "c5-m7",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2020],
    question:
      "The crystal field splitting energies for octahedral (Δₒ) and tetrahedral (Δₜ) complexes are related as",
    options: [
      "$\\Delta_t = \\tfrac{2}{9}\\Delta_o$",
      "$\\Delta_t = \\tfrac{4}{9}\\Delta_o$",
      "$\\Delta_t = \\tfrac{5}{9}\\Delta_o$",
      "$\\Delta_t = \\tfrac{9}{4}\\Delta_o$",
    ],
    correct: 1,
    answer: [
      { text: "**(b)** $\\Delta_t = \\tfrac{4}{9}\\Delta_o$." },
      {
        text: "A tetrahedral field has only **four** ligands instead of six, and none of them points directly at a d orbital. The splitting is therefore much smaller — less than half the octahedral value.",
      },
      {
        text: "This is why Δₜ is almost always smaller than the pairing energy P, and hence **low-spin tetrahedral complexes are essentially unknown**.",
      },
    ],
  },
  {
    id: "c5-m8",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Stability",
    years: [2020, 2014],
    question: "Which of the following is the most stable complex?",
    options: ["[Fe(CO)5]", "[Fe(H2O)6]^3+", "[Fe(C2O4)3]^3−", "[Fe(CN)6]^3−"],
    correct: 2,
    answer: [
      {
        text: "**(c) [Fe(C2O4)3]^3−.** The oxalate ion is a **bidentate** ligand and forms five-membered **chelate rings** with the metal. Chelation gives a large positive entropy change (several small ligands are displaced by fewer large ones), so chelate complexes are markedly more stable than comparable complexes of monodentate ligands — the **chelate effect**.",
      },
      {
        text: "By the same reasoning, $[\\text{Co(en)}_3]^{3+}$ is more stable than $[\\text{Co(NH}_3)_6]^{3+}$, even though both bind through nitrogen.",
      },
    ],
    keyPoint: "Chelate effect: polydentate ligands give far more stable complexes.",
  },
  {
    id: "c5-m9",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Ligands",
    years: [2023],
    question: "Which of the following ligands is an ambidentate ligand?",
    options: ["CO", "NO2−", "NH3", "H2O"],
    correct: 1,
    answer: [
      {
        text: "**(b) NO2⁻.** An ambidentate ligand is a **monodentate** ligand with two different donor atoms, either of which may bind — though only one at a time.",
      },
      {
        table: [
          ["Ligand", "Donor atoms", "Names"],
          ["NO2⁻", "N or O", "nitrito-N / nitrito-O"],
          ["SCN⁻", "S or N", "thiocyanato-S / thiocyanato-N"],
          ["CN⁻", "C or N", "cyanido-C / cyanido-N"],
        ],
      },
    ],
  },
  {
    id: "c5-m10",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2023, 2020],
    question:
      "The formula of the complex dichloridobis(ethane-1,2-diamine)platinum(IV) nitrate is",
    options: [
      "[PtCl2(en)2](NO3)2",
      "[PtCl2(en)2]NO3",
      "[PtCl2(en)2(NO3)2]",
      "[Pt(en)2](NO3)2",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) [PtCl2(en)2](NO3)2.** Work out the charge on the cation: Pt is +4, the two chlorides contribute −2 and the two 'en' ligands are neutral, so",
      },
      { equation: "$+4 + (-2) + 0 = +2$" },
      { text: "Two nitrate ions are needed outside the sphere to balance the +2 charge." },
    ],
  },
  {
    id: "c5-m11",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Magnetic properties",
    years: [2023],
    question: "The magnetic moment of [NiCl4]2− is [At. no. Ni = 28]",
    options: ["1.82 BM", "2.82 BM", "4.42 BM", "5.46 BM"],
    correct: 1,
    answer: [
      { text: "**(b) 2.82 BM.**" },
      {
        text: "Ni²⁺ is $3d^8$. Chloride is a **weak field ligand**, so no pairing occurs and the complex is $sp^3$ tetrahedral with **two unpaired electrons**:",
      },
      { equation: "$\\mu = \\sqrt{2(2+2)} = \\sqrt{8} = 2.83\\ \\text{BM}$" },
      { figure: { kind: "geometry", shape: "tetrahedral", center: "Ni", ligands: ["Cl", "Cl", "Cl", "Cl"], caption: "[NiCl4]^2− — sp^3, tetrahedral, paramagnetic" } },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "c5-ar1",
    chapter: 5,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2020, 2025],
    question:
      "**Assertion (A):** Low spin tetrahedral complexes are rarely observed.\n**Reason (R):** The crystal field splitting energy of a tetrahedral field is less than the pairing energy.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      { text: "**(a) Both true, R explains A.** In a tetrahedral field" },
      { equation: "$\\Delta_t = \\tfrac{4}{9}\\Delta_o$" },
      {
        text: "because there are only four ligands and none points directly at a d orbital. Δₜ is therefore small — almost always **smaller than the pairing energy P**. Electrons prefer to occupy the upper set singly rather than pay the cost of pairing, so the complex is **high spin**.",
      },
    ],
  },
  {
    id: "c5-ar2",
    chapter: 5,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Ligands",
    years: [2023],
    question:
      "**Assertion (A):** EDTA is a hexadentate ligand.\n**Reason (R):** EDTA has 2 nitrogen and 4 oxygen donor atoms.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Ethylenediaminetetraacetate (EDTA⁴⁻) binds through the **two amine nitrogen atoms** and the **four carboxylate oxygen atoms**, giving six donor sites — hence hexadentate.",
      },
      {
        text: "It wraps entirely around a metal ion, forming five chelate rings and an exceptionally stable complex. This is why EDTA is used to estimate hardness of water, to treat lead poisoning and as a preservative.",
      },
      { figure: { kind: "geometry", shape: "octahedral", center: "M", ligands: ["N", "N", "O", "O", "O", "O"], caption: "EDTA occupies all six octahedral sites through 2 N and 4 O donors" } },
    ],
  },
  {
    id: "c5-ar3",
    chapter: 5,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Isomerism",
    years: [2023],
    question:
      "**Assertion (A):** trans-[CrCl2(ox)2]3− shows optical isomerism.\n**Reason (R):** Optical isomerism is common in octahedral complexes involving bidentate ligands.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) A is false but R is true.** In the **trans** isomer the two chlorides lie opposite one another and the molecule possesses a **plane of symmetry**. A molecule with a plane of symmetry is superimposable on its mirror image, so the trans isomer is **optically inactive**.",
      },
      {
        text: "It is the **cis** isomer that has no plane of symmetry and therefore exists as a pair of enantiomers. The reason, as a general statement, is correct — it just does not apply to the trans form.",
      },
      { figure: { kind: "named", id: "optical-isomers-en" } },
    ],
    keyPoint: "Trans isomers with a symmetry plane are never optically active; cis ones usually are.",
  },
  {
    id: "c5-ar4",
    chapter: 5,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Werner's theory",
    years: [2023],
    question:
      "**Assertion (A):** [Co(NH3)5SO4]Cl gives a white precipitate with silver nitrate solution.\n**Reason (R):** The complex dissociates to give a chloride ion in solution.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      { text: "**(a) Both true, R explains A.** Only species outside the coordination sphere ionise:" },
      { equation: "[Co(NH3)5SO4]Cl -> [Co(NH3)5SO4]^+ + Cl^−" },
      { equation: "Cl^− + Ag^+ -> AgCl(s) — white precipitate" },
      {
        text: "The sulphate stays bound to cobalt, so this complex gives **no** precipitate with BaCl2. Its ionisation isomer [Co(NH3)5Cl]SO4 behaves the opposite way.",
      },
    ],
  },
  {
    id: "c5-ar5",
    chapter: 5,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Werner's theory",
    years: [2025],
    question:
      "**Assertion (A):** [Cr(H2O)6]Cl2 and [Fe(H2O)6]Cl2 are examples of homoleptic complexes.\n**Reason (R):** All the ligands attached to the metal are of the same type.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** A **homoleptic** complex is one in which the metal is bound to only one kind of ligand. In both complexes the metal is surrounded by six water molecules and nothing else, so both are homoleptic.",
      },
      {
        text: "A complex bound to more than one kind of ligand — such as $[\\text{Co(NH}_3)_4\\text{Cl}_2]^+$ — is **heteroleptic**.",
      },
    ],
  },

  /* ---------------- Nomenclature ---------------- */
  {
    id: "c5-s1",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2024, 2025, 2023, 2019],
    question:
      "Write the IUPAC names of the following coordination compounds:\n(a) [Co(NH3)4Cl(NO2)]Cl\n(b) [Ni(NH3)6]Cl2\n(c) K3[Cr(C2O4)3]\n(d) [Pt(en)2Cl2]2+",
    answer: [
      {
        label: "(a)",
        text: "**Tetraamminechloridonitrito-N-cobalt(III) chloride.** Ligands are named alphabetically (ammine, chlorido, nitrito), then the metal with its oxidation state: x + 0 − 1 − 1 = +1, so x = +3.",
      },
      {
        label: "(b)",
        text: "**Hexaamminenickel(II) chloride.** x = +2 since ammine is neutral and two chlorides lie outside.",
      },
      {
        label: "(c)",
        text: "**Potassium trioxalatochromate(III).** The complex is an anion, so the metal takes the '-ate' suffix. x + 3(−2) = −3 ⇒ x = +3.",
      },
      {
        label: "(d)",
        text: "**Dichloridobis(ethane-1,2-diamine)platinum(IV) ion.** 'Bis' is used instead of 'di' because the ligand name already contains 'di'. x − 2 + 0 = +2 ⇒ x = +4.",
      },
      {
        text: "**Rules to remember:** cation first, then anion; ligands alphabetically before the metal; anionic ligands end in -o; use bis/tris/tetrakis for complex ligand names; oxidation state of the metal in Roman numerals in brackets.",
      },
    ],
  },
  {
    id: "c5-s2",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2025, 2015, 2014],
    question:
      "Name the following according to IUPAC norms:\n(a) [Co(NH3)4(H2O)Cl]Cl2\n(b) [CrCl2(en)2]Cl",
    answer: [
      {
        label: "(a)",
        text: "**Tetraammineaquachloridocobalt(III) chloride.** Oxidation state: x + 0 + 0 − 1 = +2 ⇒ x = +3.",
      },
      {
        label: "(b)",
        text: "**Dichloridobis(ethane-1,2-diamine)chromium(III) chloride.** Oxidation state: x − 2 + 0 = +1 ⇒ x = +3.",
      },
    ],
  },
  {
    id: "c5-v1",
    chapter: 5,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Werner's theory",
    years: [2018],
    question: "Write the coordination number and oxidation state of platinum in [Pt(en)2Cl2].",
    answer: [
      {
        text: "'en' is **bidentate**, so it occupies 2 sites each: coordination number = (2 × 2) + 2 = **6**.",
      },
      { text: "Oxidation state: x + 2(0) + 2(−1) = 0 ⇒ **x = +2**." },
    ],
  },

  /* ---------------- VBT / CFT ---------------- */
  {
    id: "c5-s3",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Valence bond theory",
    years: [2025, 2020, 2019, 2016],
    question:
      "For each of the following, give the hybridisation, shape and magnetic character:\n(a) [Fe(H2O)6]2+\n(b) [NiCl4]2−\n(c) [Fe(CN)6]3−\n[At. nos: Fe = 26, Ni = 28]",
    answer: [
      {
        label: "(a) [Fe(H2O)6]^2+",
        text: "Fe²⁺ = $3d^6$. Water is a **weak field ligand**, so no pairing occurs; the inner 3d orbitals are unavailable, so the outer 4d set is used. Hybridisation **$sp^3d^2$**, shape **octahedral (outer-orbital complex)**, **4 unpaired electrons**, paramagnetic, μ = 4.90 BM.",
      },
      {
        label: "(b) [NiCl4]^2−",
        text: "Ni²⁺ = $3d^8$. Chloride is a **weak field ligand**, so the two unpaired electrons remain. Hybridisation **$sp^3$**, shape **tetrahedral**, **2 unpaired electrons**, paramagnetic, μ = 2.83 BM.",
      },
      {
        label: "(c) [Fe(CN)6]^3−",
        text: "Fe³⁺ = $3d^5$. Cyanide is a **strong field ligand**, so the electrons pair up leaving two 3d orbitals free. Hybridisation **$d^2sp^3$**, shape **octahedral (inner-orbital complex)**, **1 unpaired electron**, paramagnetic, μ = 1.73 BM.",
      },
      { figure: { kind: "geometry", shape: "octahedral", center: "Fe", ligands: ["CN", "CN", "CN", "CN", "CN", "CN"], caption: "[Fe(CN)6]^3− — d^2sp^3, low spin octahedral" } },
    ],
    keyPoint: "d²sp³ = inner orbital (low spin); sp³d² = outer orbital (high spin).",
  },
  {
    id: "c5-s4",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Valence bond theory",
    years: [2025],
    question:
      "Explain why [Co(NH3)6]3+ is an inner orbital complex whereas [Ni(NH3)6]2+ is an outer orbital complex. [At. nos: Co = 27, Ni = 28]",
    answer: [
      {
        label: "[Co(NH3)6]^3+",
        text: "Co³⁺ = $3d^6$. Ammonia acts as a strong enough field ligand for Co(III), so the six d electrons **pair up** into three orbitals, leaving **two 3d orbitals empty**. These inner d orbitals are used in hybridisation: **$d^2sp^3$**, octahedral, diamagnetic — an **inner orbital (low spin)** complex.",
      },
      {
        label: "[Ni(NH3)6]^2+",
        text: "Ni²⁺ = $3d^8$. Even with pairing, eight electrons cannot be squeezed into fewer than four 3d orbitals, so **only one 3d orbital could ever be free** — not the two required for $d^2sp^3$. The metal must therefore use the outer 4d orbitals: **$sp^3d^2$**, octahedral, two unpaired electrons, paramagnetic — an **outer orbital (high spin)** complex.",
      },
    ],
  },
  {
    id: "c5-s5",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2023, 2024],
    question:
      "On the basis of crystal field theory, write the electronic configuration of a d5 ion (a) with a strong field ligand (Δₒ > P), (b) with a weak field ligand (Δₒ < P). State the number of unpaired electrons in each.",
    answer: [
      {
        label: "(a) Strong field, Δₒ > P",
        text: "The splitting costs more than pairing, so electrons fill the lower $t_{2g}$ set completely before entering $e_g$:",
      },
      { equation: "$t_{2g}^5\\,e_g^0$ — **1 unpaired electron**, low spin" },
      {
        label: "(b) Weak field, Δₒ < P",
        text: "Pairing costs more than promotion, so electrons spread out singly across all five orbitals (Hund's rule):",
      },
      { equation: "$t_{2g}^3\\,e_g^2$ — **5 unpaired electrons**, high spin" },
      { figure: { kind: "named", id: "cft-octahedral" } },
    ],
  },
  {
    id: "c5-s6",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Colour",
    years: [2023, 2017],
    question:
      "A solution of [Ni(H2O)6]2+ is green but a solution of [Ni(CO)4] is colourless. Explain. [At. no. Ni = 28]",
    answer: [
      {
        label: "[Ni(H2O)6]^2+",
        text: "Ni²⁺ is $3d^8$ — a **partly filled** d sub-shell. Water splits the d orbitals, and an electron can be promoted from $t_{2g}$ to $e_g$ by absorbing visible light (a **d–d transition**). Red light is absorbed and the complementary colour, **green**, is transmitted.",
      },
      {
        label: "[Ni(CO)4]",
        text: "Here nickel is in the **zero** oxidation state, $3d^{10}4s^0$. The d sub-shell is **completely filled**, so no d–d transition is possible; no visible light is absorbed and the compound is **colourless**. (It is $sp^3$ hybridised, tetrahedral and diamagnetic.)",
      },
    ],
  },
  {
    id: "c5-s7",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Magnetic properties",
    years: [2019, 2017],
    question:
      "Although both [NiCl4]2− and [Ni(CO)4] have sp3 hybridisation, [NiCl4]2− is paramagnetic while [Ni(CO)4] is diamagnetic. Explain.",
    answer: [
      {
        label: "[NiCl4]^2−",
        text: "Nickel is in the **+2** state, $3d^8$. Chloride is a **weak field ligand** and cannot force the two unpaired 3d electrons to pair, so the complex has 2 unpaired electrons and is **paramagnetic** (μ = 2.83 BM).",
      },
      {
        label: "[Ni(CO)4]",
        text: "Carbonyl is a **very strong field ligand**. It first causes the 4s electrons to shift into 3d, giving nickel(0) the configuration $3d^{10}4s^0$ — every electron paired. With no unpaired electrons the complex is **diamagnetic**.",
      },
      {
        text: "So the difference is not the hybridisation but the **oxidation state and the field strength of the ligand**.",
      },
    ],
  },

  /* ---------------- Isomerism ---------------- */
  {
    id: "c5-s8",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Isomerism",
    years: [2024, 2019, 2015, 2023],
    question:
      "Draw the geometrical isomers of [Pt(NH3)2Cl2]. Which of them is optically active and why? Would a tetrahedral MA2B2 complex show geometrical isomerism?",
    answer: [
      {
        text: "The complex is **square planar**, so the two chlorides can be adjacent (cis, 90°) or opposite (trans, 180°):",
      },
      { figure: { kind: "named", id: "cis-trans-complex" } },
      {
        label: "Optical activity",
        text: "**Neither is optically active.** A square planar complex is flat, so the molecular plane itself is a plane of symmetry — the molecule is always superimposable on its mirror image. Square planar complexes therefore essentially never show optical isomerism.",
      },
      {
        label: "Tetrahedral MA2B2",
        text: "**No.** In a tetrahedron every position is adjacent to every other, at 109.5° — there is no 'cis' or 'trans' distinction to make. Geometrical isomerism in coordination compounds requires a square planar or octahedral geometry.",
      },
      {
        text: "Incidentally, cis-[Pt(NH3)2Cl2] is **cisplatin**, an important anticancer drug; the trans isomer is biologically inactive.",
      },
    ],
  },
  {
    id: "c5-s9",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Isomerism",
    years: [2023, 2024],
    question:
      "Draw the geometrical isomers of [Co(en)2Cl2]+. Which geometrical isomer is not optically active, and why?",
    answer: [
      {
        text: "The complex is octahedral with two bidentate 'en' ligands and two chlorides. The chlorides may be **cis** (adjacent, 90°) or **trans** (opposite, 180°).",
      },
      {
        figure: {
          kind: "geometry",
          shape: "octahedral",
          center: "Co",
          ligands: ["Cl", "Cl", "en", "en", "en", "en"],
          alt: [0, 1],
          caption: "trans-[Co(en)2Cl2]^+ — the two Cl are opposite each other",
        },
      },
      {
        figure: {
          kind: "geometry",
          shape: "octahedral",
          center: "Co",
          ligands: ["Cl", "en", "Cl", "en", "en", "en"],
          alt: [0, 2],
          caption: "cis-[Co(en)2Cl2]^+ — the two Cl are adjacent",
        },
      },
      {
        label: "Optical activity",
        text: "The **trans isomer is not optically active**. It possesses a **plane of symmetry** passing through the two chlorine atoms and the metal, so it is superimposable on its mirror image (it is a meso-like, achiral arrangement).",
      },
      {
        text: "The **cis isomer has no plane of symmetry**, so it is chiral and exists as a pair of non-superimposable mirror images — d and l forms.",
      },
    ],
  },
  {
    id: "c5-s10",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Ligands",
    years: [2019, 2023],
    question:
      "Define with one example each: (a) a chelate complex, (b) an ambidentate ligand. Which of OH−, NH4+, CH3NH2 and H2O cannot act as a ligand, and why?",
    answer: [
      {
        label: "(a) Chelate complex",
        text: "A complex in which a **polydentate ligand binds to the same metal ion through two or more donor atoms, forming a ring**. Example: $[\\text{Co(en)}_3]^{3+}$, where each ethane-1,2-diamine forms a five-membered ring. Chelation makes the complex unusually stable — the chelate effect.",
      },
      {
        label: "(b) Ambidentate ligand",
        text: "A **monodentate** ligand with two different donor atoms, either of which can bond (but only one at a time). Example: NO2⁻, which binds through N (nitrito-N) or through O (nitrito-O).",
      },
      {
        label: "Which cannot be a ligand",
        text: "**NH4⁺.** To act as a ligand a species must have at least one **lone pair** to donate. In the ammonium ion the nitrogen lone pair has already been used to bond the fourth hydrogen, so no lone pair remains — and the positive charge would in any case repel a metal cation. OH⁻, CH3NH2 and H2O all have available lone pairs.",
      },
    ],
  },
  {
    id: "c5-s11",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Werner's theory",
    years: [2016],
    question:
      "When the coordination compound CoCl3·6NH3 is mixed with AgNO3, 3 moles of AgCl are precipitated per mole of the compound. Write (i) its structural formula and (ii) its IUPAC name.",
    answer: [
      {
        label: "(i) Structural formula",
        text: "3 moles of AgCl means all **three chlorides are ionisable**, i.e. all lie outside the coordination sphere. The six ammonia molecules must then fill all six coordination sites:",
      },
      { equation: "[Co(NH3)6]Cl3" },
      { equation: "[Co(NH3)6]Cl3 -> [Co(NH3)6]^3+ + 3Cl^−" },
      { label: "(ii) IUPAC name", text: "**Hexaamminecobalt(III) chloride.**" },
      {
        text: "Compare: if only 2 moles of AgCl formed, the compound would be [Co(NH3)5Cl]Cl2, with one chloride inside the sphere.",
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "c5-c1",
    chapter: 5,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Valence bond theory",
    years: [2024],
    passage:
      "Valence bond theory explains the bonding, structure and magnetic behaviour of coordination compounds. The central metal atom or ion makes available a number of empty orbitals equal to its coordination number, and these hybridise to give a set of equivalent orbitals of definite geometry. Each ligand donates a lone pair into one of these hybrid orbitals, forming a coordinate bond. When inner (n−1)d orbitals are used the complex is called an inner-orbital or low-spin complex; when outer nd orbitals are used it is an outer-orbital or high-spin complex.",
    question:
      "(i) Name the hybridisation and geometry associated with coordination number 6 in an inner-orbital complex.\n(ii) Why is [Co(NH3)6]3+ diamagnetic while [CoF6]3− is paramagnetic?\n(iii) What is the hybridisation of [Ni(CN)4]2−?\n(iv) State one limitation of valence bond theory.",
    answer: [
      { label: "(i)", text: "**$d^2sp^3$ hybridisation, octahedral geometry.** Two inner 3d orbitals, one 4s and three 4p orbitals are used." },
      {
        label: "(ii)",
        text: "Both contain Co³⁺, $3d^6$. Ammonia is a **strong field ligand**: it forces all six electrons to pair, leaving no unpaired electrons, so $[\\text{Co(NH}_3)_6]^{3+}$ is $d^2sp^3$ and **diamagnetic**. Fluoride is a **weak field ligand**: no pairing occurs, so four electrons remain unpaired, the complex is $sp^3d^2$ and **paramagnetic**.",
      },
      { label: "(iii)", text: "**$dsp^2$** — square planar and diamagnetic, because CN⁻ is a strong field ligand acting on $d^8$ Ni²⁺." },
      {
        label: "(iv)",
        text: "**Limitations of VBT:** it does not explain the **colour** of complexes; it gives no quantitative account of the relative strengths of ligands (the spectrochemical series); it cannot predict whether a given complex will be high or low spin without knowing the answer first; and it does not explain the thermodynamic or kinetic stability of complexes. Crystal field theory addresses several of these.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "c5-l1",
    chapter: 5,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Crystal field theory",
    years: [2025, 2023],
    question:
      "(a) Explain the postulates of crystal field theory for an octahedral complex, with a diagram.\n(b) What is the spectrochemical series? Write any four ligands in increasing order of field strength.\n(c) Why are low spin tetrahedral complexes not known?\n(d) Why is Co2+ easily oxidised to Co3+ in the presence of strong field ligands?",
    answer: [
      {
        label: "(a) Postulates",
        points: [
          "The metal–ligand bond is treated as purely **electrostatic** (ionic).",
          "In a free gaseous metal ion the five d orbitals are **degenerate** (equal in energy).",
          "When six ligands approach along the axes, they **repel** the d electrons. The $d_{x^2-y^2}$ and $d_{z^2}$ orbitals point directly at the ligands and are raised in energy; the $d_{xy}$, $d_{yz}$ and $d_{zx}$ orbitals point between them and are lowered.",
          "The degeneracy is thus lifted into an upper **$e_g$** set (raised by $0.6\\Delta_o$) and a lower **$t_{2g}$** set (lowered by $0.4\\Delta_o$). The energy gap is the crystal field splitting energy $\\Delta_o$.",
          "Whether the complex is high or low spin depends on $\\Delta_o$ against the pairing energy P: if $\\Delta_o > P$ the electrons pair (low spin); if $\\Delta_o < P$ they spread out (high spin).",
        ],
      },
      { figure: { kind: "named", id: "cft-octahedral" } },
      {
        label: "(b) Spectrochemical series",
        text: "The arrangement of ligands in order of their ability to split the d orbitals, i.e. in increasing $\\Delta$:",
      },
      { equation: "I^− < Br^− < Cl^− < F^− < OH^− < H2O < NH3 < en < NO2^− < CN^− < CO" },
      { text: "Weak field ligands (left) give high-spin complexes; strong field ligands (right) give low-spin complexes." },
      {
        label: "(c)",
        text: "In a tetrahedral field only four ligands are present and **none points directly at a d orbital**, so the splitting is much smaller:",
      },
      { equation: "$\\Delta_t = \\tfrac{4}{9}\\Delta_o$" },
      {
        text: "$\\Delta_t$ is almost always **less than the pairing energy P**, so electrons always prefer to remain unpaired. Low-spin tetrahedral complexes are therefore not observed.",
      },
      {
        label: "(d)",
        text: "Co²⁺ is $3d^7$ and Co³⁺ is $3d^6$. With a strong field ligand the $d^6$ ion adopts the **$t_{2g}^6\\,e_g^0$** configuration — a completely filled $t_{2g}$ set, which has a very large crystal field stabilisation energy. This extra stabilisation of the +3 state far outweighs the third ionisation energy, so Co²⁺ is readily oxidised to Co³⁺ in the presence of ligands such as NH3 or CN⁻.",
      },
    ],
  },
  {
    id: "c5-l2",
    chapter: 5,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Isomerism",
    years: [2025, 2024],
    question:
      "(a) For the complex [Fe(en)2Cl2]Cl, identify: (i) the oxidation number of iron, (ii) the hybridisation and shape, (iii) the type of isomerism it exhibits.\n(b) Classify the types of structural isomerism shown by coordination compounds, with one example of each.\n[At. no. Fe = 26]",
    answer: [
      {
        label: "(a)(i) Oxidation number",
        text: "'en' is neutral, two chlorides are inside the sphere and one outside:",
      },
      { equation: "$x + 2(0) + 2(-1) = +1 \\;\\Rightarrow\\; x = +3$" },
      {
        label: "(a)(ii) Hybridisation and shape",
        text: "Coordination number = (2 × 2) + 2 = **6**, so the geometry is **octahedral**. Fe³⁺ is $3d^5$; ethane-1,2-diamine is a reasonably strong field ligand, so the electrons pair to give $t_{2g}^5$, leaving two 3d orbitals free — **$d^2sp^3$** hybridisation, an inner-orbital complex with 1 unpaired electron.",
      },
      {
        label: "(a)(iii) Isomerism",
        text: "It shows **geometrical isomerism** (cis and trans arrangements of the two chlorides), and the **cis** form additionally shows **optical isomerism** because it has no plane of symmetry.",
      },
      {
        label: "(b) Structural isomerism",
        table: [
          ["Type", "Basis", "Example"],
          ["Ionisation", "Exchange of ions inside and outside the coordination sphere", "[Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br"],
          ["Hydrate (solvate)", "Water inside the sphere vs as water of crystallisation", "[Cr(H2O)6]Cl3 and [Cr(H2O)5Cl]Cl2·H2O"],
          ["Linkage", "Ambidentate ligand bound through a different donor atom", "[Co(NH3)5(NO2)]^2+ and [Co(NH3)5(ONO)]^2+"],
          ["Coordination", "Interchange of ligands between cationic and anionic complexes", "[Co(NH3)6][Cr(CN)6] and [Cr(NH3)6][Co(CN)6]"],
        ],
      },
    ],
  },
];
