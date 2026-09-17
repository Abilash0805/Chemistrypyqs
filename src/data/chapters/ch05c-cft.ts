import type { Question } from "@/types";

/** Unit 5 — the coordination patterns the board repeats most: naming, isomers, CFT configurations. */
export const CH05C: Question[] = [
  {
    id: "c5-r1",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "IUPAC nomenclature",
    years: [2024, 2017, 2013],
    question:
      "Write the IUPAC names of the following coordination compounds:\n(a) K3[Fe(CN)6]\n(b) [Co(NH3)4Cl(NO2)]Cl\n(c) K3[Cr(C2O4)3]\n(d) [Zn(OH)4]^2−",
    answer: [
      {
        table: [
          ["Formula", "IUPAC name", "Oxidation state"],
          ["K3[Fe(CN)6]", "Potassium hexacyanidoferrate(III)", "Fe: +3"],
          ["[Co(NH3)4Cl(NO2)]Cl", "Tetraamminechloridonitrito-N-cobalt(III) chloride", "Co: +3"],
          ["K3[Cr(C2O4)3]", "Potassium trioxalatochromate(III)", "Cr: +3"],
          ["[Zn(OH)4]^2−", "Tetrahydroxidozincate(II) ion", "Zn: +2"],
        ],
      },
      {
        label: "The rules you are being tested on",
        points: [
          "**Cation first**, then the anion — as in any salt, regardless of which one is the complex.",
          "Ligands are named **alphabetically**, ignoring the multiplying prefixes di-, tri-, tetra-.",
          "Anionic ligands end in **-ido** in the current IUPAC recommendation: chlorido, cyanido, hydroxido, oxalato.",
          "Use bis-, tris-, tetrakis- when the ligand name already contains a prefix (tris(ethane-1,2-diamine), not triethylenediamine).",
          "If the **complex ion is negative**, the metal takes the **-ate** suffix, often with its Latin stem: ferrate, cuprate, argentate, aurate, plumbate, stannate.",
          "The oxidation state of the metal goes in Roman numerals in brackets, with no space.",
        ],
      },
      {
        label: "Working out one oxidation state",
        text: "For K3[Fe(CN)6]: three K^+ means the complex ion is 3−. Six cyanido ligands carry 6−, so x + (−6) = −3, giving **x = +3**.",
      },
      {
        text: "The nitrito ligand is ambidentate. Bound through nitrogen it is **nitrito-N** (older name nitro); bound through oxygen it is **nitrito-O** (older name nitrito).",
      },
    ],
    keyPoint: "Alphabetical ligands · -ido endings · -ate if the complex ion is an anion · Roman numeral for the metal.",
  },
  {
    id: "c5-r2",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2024, 2023, 2015],
    question:
      "On the basis of crystal field theory, write the electronic configuration of:\n(a) a d^4 ion when Δ_o < P\n(b) a d^4 ion when Δ_o > P\n(c) a d^5 ion when Δ_o > P\nand state the number of unpaired electrons in each.",
    answer: [
      { figure: { kind: "named", id: "cft-octahedral" } },
      {
        label: "The competition",
        text: "After the first three electrons have gone singly into t_2g, the fourth has a choice: go up to the higher e_g set at an energy cost of **Δ_o**, or pair up in t_2g at a cost of the **pairing energy P**. Whichever is cheaper wins.",
      },
      {
        table: [
          ["Case", "Configuration", "Unpaired e⁻", "Spin state", "Ligand type"],
          ["d^4, Δ_o < P", "t_2g^3 e_g^1", "4", "High spin", "Weak field, e.g. H2O, F^−"],
          ["d^4, Δ_o > P", "t_2g^4 e_g^0", "2", "Low spin", "Strong field, e.g. CN^−, CO"],
          ["d^5, Δ_o > P", "t_2g^5 e_g^0", "1", "Low spin", "Strong field"],
          ["d^5, Δ_o < P", "t_2g^3 e_g^2", "5", "High spin", "Weak field"],
        ],
      },
      {
        label: "Worked example",
        text: "[Fe(CN)6]^3−: Fe is +3, so d^5. Cyanide is a strong field ligand, so Δ_o > P and the configuration is **t_2g^5 e_g^0** — one unpaired electron, so the complex is weakly paramagnetic. [FeF6]^3− is also d^5, but fluoride is weak field, so it is t_2g^3 e_g^2 with **five** unpaired electrons and is strongly paramagnetic.",
      },
      {
        text: "Magnetic moment follows from n: **μ = √(n(n+2)) BM**. So n = 1 gives 1.73 BM, n = 2 gives 2.83 BM, n = 4 gives 4.90 BM and n = 5 gives 5.92 BM.",
      },
      {
        text: "Note that **tetrahedral** complexes are almost always high spin, because Δ_t = (4/9)Δ_o is too small to beat the pairing energy — this is why low-spin tetrahedral complexes are rarely observed.",
      },
    ],
    keyPoint: "Δ_o < P → high spin, electrons spread out. Δ_o > P → low spin, electrons pair up in t₂g.",
  },
  {
    id: "c5-r3",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Isomerism",
    years: [2024, 2019, 2015],
    question:
      "(a) Draw the geometrical isomers of [Pt(NH3)2Cl2].\n(b) What type of isomerism is shown by [Co(en)3]^3+?\n(c) What is an ambidentate ligand? How does it differ from a chelating ligand?",
    answer: [
      { label: "(a) Geometrical isomers of [Pt(NH3)2Cl2]", text: "The complex is **square planar**, so an MA2B2 arrangement gives two distinct isomers:" },
      { figure: { kind: "named", id: "cis-trans-complex" } },
      {
        table: [
          ["", "cis", "trans"],
          ["Like ligands", "Adjacent, 90° apart", "Opposite, 180° apart"],
          ["Dipole moment", "Non-zero", "Zero"],
          ["Colour", "Orange-yellow", "Pale yellow"],
          ["Note", "This isomer is **cisplatin**, the anticancer drug", "Therapeutically inactive"],
        ],
      },
      {
        text: "A **tetrahedral** MA2B2 complex shows no geometrical isomerism at all, because every pair of positions in a tetrahedron is equivalent.",
      },
      {
        label: "(b) [Co(en)3]^3+ — optical isomerism",
        text: "With three symmetrical bidentate chelate rings the ion has **no plane of symmetry**, so it is chiral. It exists as a non-superimposable pair of enantiomers, **d (Δ)** and **l (Λ)**, which rotate plane-polarised light in opposite directions.",
      },
      { figure: { kind: "named", id: "optical-isomers-en" } },
      {
        label: "(c) Ambidentate vs chelating",
        table: [
          ["", "Ambidentate ligand", "Chelating ligand"],
          ["Donor atoms", "Two or more, but only **one** binds at a time", "Two or more, **all** bind at once"],
          ["Denticity", "Unidentate in practice", "Bidentate or higher"],
          ["Result", "Linkage isomerism", "A ring, with extra stability (the chelate effect)"],
          ["Examples", "NO2^− (N or O), SCN^− (S or N), CN^− (C or N)", "en, C2O4^2−, EDTA^4−"],
        ],
      },
    ],
  },
  {
    id: "c5-r4",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Valence bond theory",
    years: [2017, 2023, 2020],
    question:
      "Why is [NiCl4]^2− paramagnetic while [Ni(CN)4]^2− is diamagnetic, though both are four-coordinate? (Atomic number of Ni = 28)",
    answer: [
      {
        label: "The common starting point",
        text: "Ni is [Ar]3d^8 4s^2, so **Ni^2+ is 3d^8** in both complexes. The difference is entirely in the ligand.",
      },
      {
        label: "[NiCl4]^2− — weak field chloride",
        text: "Cl^− cannot force the 3d electrons to pair up. The 3d^8 configuration keeps **two unpaired electrons**, so no 3d orbital is free. Nickel therefore uses **sp^3** hybridisation of 4s and 4p.",
      },
      {
        figure: {
          kind: "geometry",
          shape: "tetrahedral",
          center: "Ni",
          ligands: ["Cl", "Cl", "Cl", "Cl"],
          caption: "[NiCl4]²⁻ — sp³, tetrahedral, 2 unpaired electrons, μ = 2.83 BM, paramagnetic",
        },
      },
      {
        label: "[Ni(CN)4]^2− — strong field cyanide",
        text: "CN^− is a strong field ligand and **pairs the 3d electrons up**, giving 3d^8 as four filled orbitals and one empty 3d orbital. That empty orbital joins 4s and two 4p orbitals in **dsp^2** hybridisation.",
      },
      {
        figure: {
          kind: "geometry",
          shape: "square-planar",
          center: "Ni",
          ligands: ["CN", "CN", "CN", "CN"],
          caption: "[Ni(CN)₄]²⁻ — dsp², square planar, 0 unpaired electrons, μ = 0, diamagnetic",
        },
      },
      {
        table: [
          ["", "[NiCl4]^2−", "[Ni(CN)4]^2−"],
          ["Ligand field", "Weak", "Strong"],
          ["Hybridisation", "sp^3", "dsp^2"],
          ["Geometry", "Tetrahedral", "Square planar"],
          ["Unpaired electrons", "2", "0"],
          ["Magnetic behaviour", "Paramagnetic", "Diamagnetic"],
        ],
      },
      {
        text: "Note that [Ni(CO)4] is also four-coordinate but **tetrahedral and diamagnetic**: CO is strong enough to pair the electrons, but here nickel is in the **zero** oxidation state (3d^10 4s^0), so there is no unpaired electron to begin with and sp^3 is used.",
      },
    ],
    keyPoint: "Same metal ion, different ligand strength → different hybridisation → different geometry and magnetism.",
  },
  {
    id: "c5-r5",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "IUPAC nomenclature",
    years: [2019, 2022],
    question:
      "Using IUPAC norms, write the formulae for:\n(a) hexaamminecobalt(III) sulphate\n(b) potassium trioxalatochromate(III)\n(c) pentaamminenitrito-O-cobalt(III) chloride\n(d) tetrahydroxidozincate(II) ion",
    answer: [
      {
        table: [
          ["Name", "Formula"],
          ["Hexaamminecobalt(III) sulphate", "[Co(NH3)6]2(SO4)3"],
          ["Potassium trioxalatochromate(III)", "K3[Cr(C2O4)3]"],
          ["Pentaamminenitrito-O-cobalt(III) chloride", "[Co(NH3)5(ONO)]Cl2"],
          ["Tetrahydroxidozincate(II) ion", "[Zn(OH)4]^2−"],
        ],
      },
      {
        label: "How to build the formula",
        points: [
          "Work out the **charge on the complex ion** from the metal's oxidation state and the ligand charges.",
          "Balance that charge with the counter ion, then write the whole complex in **square brackets**: [Co(NH3)6]^3+ needs three SO4^2− for every two ions, hence [Co(NH3)6]2(SO4)3.",
          "Inside the brackets the **metal comes first**, then the ligands in alphabetical order.",
          "Enclose polyatomic ligands in round brackets: (NH3), (C2O4), (ONO), (en).",
          "**–ONO** means bound through oxygen (nitrito-O); **–NO2** means bound through nitrogen (nitrito-N). The two are linkage isomers.",
        ],
      },
    ],
  },
];
