import type { Question } from "@/types";

/**
 * CBSE 2022 Term-II, paper 56/1/1 Set-1.
 *
 * Organised by paper rather than by chapter, because the questions come from a
 * single sitting and keeping their provenance together makes them easy to check
 * against the original. The `chapter` field still routes each one to its unit.
 *
 * The source listing is a blank question paper with no marking scheme, so every
 * answer here is written to the CBSE scheme rather than transcribed.
 */
export const P2022T2: Question[] = [
  {
    id: "p22-1",
    chapter: 3,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Rate of reaction",
    years: [2022],
    question: "Define rate of reaction. Write two factors that affect the rate of reaction.",
    answer: [
      {
        label: "Definition",
        text: "The **rate of a reaction** is the change in the concentration of a reactant or a product per unit time.",
      },
      { text: "$\\text{Rate} = -\\dfrac{d[R]}{dt} = +\\dfrac{d[P]}{dt}$" },
      {
        text: "The minus sign appears because the concentration of a reactant **falls** with time, and rate is always quoted as a positive quantity. The usual unit is mol L^−1 s^−1.",
      },
      {
        label: "Two factors that affect it",
        points: [
          "**Concentration of the reactants.** More particles per unit volume means more collisions per second, so the rate rises. For a gas, pressure does the same job.",
          "**Temperature.** A rise of 10 K roughly doubles the rate, because a much larger fraction of molecules then has energy greater than the activation energy.",
        ],
      },
      {
        text: "Any two are enough for the marks. Others that would be accepted: the presence of a **catalyst**, which lowers the activation energy; the **surface area** of a solid reactant; and the **nature of the reactants** themselves.",
      },
    ],
  },
  {
    id: "p22-2",
    chapter: 9,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Basic character",
    years: [2022],
    question:
      "Arrange the following compounds as directed (any two):\n(i) In decreasing order of basic strength in aqueous solution: C2H5NH2, (C2H5)2NH, (C2H5)3N\n(ii) In increasing order of solubility in water: (C2H5)2NH, C2H5NH2, C6H5NH2\n(iii) In decreasing order of their pKb values: C6H5NH2, C2H5NH2, NH3",
    answer: [
      {
        label: "(i) Decreasing basic strength in water",
        text: "**(C2H5)2NH > (C2H5)3N > C2H5NH2**",
      },
      {
        text: "Three effects compete once water is the solvent: the **+I effect** of the ethyl groups (favours 3° > 2° > 1°), **solvation** of the conjugate acid, which needs N–H bonds (favours 1° > 2° > 3°), and **steric crowding** around the lone pair (penalises 3°).",
      },
      {
        text: "Watch the trap here: for the **ethyl** series the tertiary amine comes **second**, not last, because an ethyl group donates electrons more strongly than a methyl group. The methyl series runs (CH3)2NH > CH3NH2 > (CH3)3N instead — the two orders are genuinely different, and the board has asked both.",
      },
      {
        label: "(ii) Increasing solubility in water",
        text: "**C6H5NH2 < (C2H5)2NH < C2H5NH2**",
      },
      {
        table: [
          ["Amine", "N–H bonds", "Hydrophobic bulk"],
          ["C6H5NH2, aniline", "2", "A whole benzene ring — least soluble"],
          ["(C2H5)2NH", "1", "Two ethyl groups"],
          ["C2H5NH2", "2", "One ethyl group — most soluble"],
        ],
      },
      {
        text: "Solubility comes from **hydrogen bonding to water**, so more N–H bonds and less hydrocarbon bulk both help. Aniline loses on both counts, and its lone pair is tied up in the ring as well.",
      },
      {
        label: "(iii) Decreasing pKb",
        text: "**C6H5NH2 > NH3 > C2H5NH2**",
      },
      {
        table: [
          ["Compound", "pKb", "Basic strength"],
          ["C6H5NH2, aniline", "9.38", "Weakest"],
          ["NH3", "4.75", "Middle"],
          ["C2H5NH2", "3.29", "Strongest"],
        ],
      },
      {
        text: "Remember the inversion: a **larger pKb means a weaker base**, so decreasing pKb is increasing basic strength read backwards. Aniline is weakest because its nitrogen lone pair is delocalised into the ring; ethylamine is strongest because the ethyl group pushes electron density onto nitrogen.",
      },
    ],
    keyPoint: "Large pKb = weak base. And the ethyl amine order in water is not the same as the methyl one.",
  },
  {
    id: "p22-3",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2022],
    question:
      "For the cell reaction Zn(s) + Cu^2+(aq) → Zn^2+(aq) + Cu(s), how will E_cell be affected when the concentration of\n(i) Cu^2+ ions is increased, and\n(ii) Zn^2+ ions is increased?",
    answer: [
      { label: "Start from the Nernst equation", text: "Two electrons are transferred, so n = 2:" },
      { text: "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0591}{2}\\log\\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{Cu^{2+}}]}$" },
      {
        text: "The solids Zn and Cu do not appear — their activity is taken as 1. So everything turns on the **ratio** of the two ion concentrations.",
      },
      {
        label: "(i) [Cu^2+] increased → E_cell increases",
        text: "A larger denominator makes the ratio smaller, so log(ratio) becomes more negative. Subtracting a negative quantity **adds** to E°_cell, so the cell potential **rises**.",
      },
      {
        label: "(ii) [Zn^2+] increased → E_cell decreases",
        text: "A larger numerator makes the ratio bigger and log(ratio) more positive, so more is subtracted from E°_cell and the potential **falls**.",
      },
      {
        table: [
          ["Change", "Effect on [Zn^2+]/[Cu^2+]", "E_cell"],
          ["[Cu^2+] increased", "Decreases", "**Increases**"],
          ["[Zn^2+] increased", "Increases", "**Decreases**"],
        ],
      },
      {
        text: "Le Chatelier's principle gives the same answer without any algebra: adding Cu^2+ pushes the forward reaction, so the cell works harder; adding Zn^2+ opposes it. When the ratio reaches K_c the cell is dead and E_cell = 0.",
      },
    ],
  },
  {
    id: "p22-4",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2022],
    question:
      "The following ions of the 3d transition series are given: Ti^4+, V^3+, Cr^3+, Mn^3+ (atomic numbers Ti = 22, V = 23, Cr = 24, Mn = 25). Identify the ion which is\n(i) most stable in aqueous solution\n(ii) a strong oxidising agent\n(iii) colourless in aqueous solution.\nGive a suitable reason in each case.",
    answer: [
      {
        label: "First write the d-configurations",
        table: [
          ["Ion", "Z of the metal", "Configuration", "Unpaired d electrons"],
          ["Ti^4+", "22", "3d^0", "0"],
          ["V^3+", "23", "3d^2", "2"],
          ["Cr^3+", "24", "3d^3", "3"],
          ["Mn^3+", "25", "3d^4", "4"],
        ],
      },
      {
        label: "(i) Most stable in aqueous solution — Cr^3+",
        text: "Cr^3+ is **3d^3**. In an octahedral aqua complex those three electrons occupy the three t_2g orbitals singly, giving a **half-filled t_2g set** and the largest crystal field stabilisation energy of the four. That is why [Cr(H2O)6]^3+ is so notably inert.",
      },
      {
        label: "(ii) Strong oxidising agent — Mn^3+",
        text: "Mn^3+ is **3d^4**. Gaining one electron takes it to Mn^2+, which is **3d^5** — an exactly half-filled d subshell and therefore especially stable. The strong drive to reach that configuration makes Mn^3+ readily accept an electron, which is what being a good oxidising agent means.",
      },
      {
        label: "(iii) Colourless — Ti^4+",
        text: "Ti^4+ is **3d^0**. Colour in a transition metal ion comes from **d–d transitions**, in which an electron is promoted from t_2g to e_g and absorbs part of the visible spectrum. With no d electrons at all there is nothing to promote, so Ti^4+ is colourless. Sc^3+ and Zn^2+ are colourless for the matching reasons — d^0 and d^10.",
      },
      {
        text: "The other three ions are all coloured: V^3+ green, Cr^3+ violet, Mn^3+ violet.",
      },
    ],
    keyPoint: "d⁰ or d¹⁰ → colourless. Half-filled t₂g → stable. One short of d⁵ → oxidising.",
  },
  {
    id: "p22-5",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Crystal field theory",
    years: [2022],
    question:
      "(a) (i) On the basis of crystal field theory, write the electronic configuration for a d^4 ion if Δ_o < P.\n(ii) Using valence bond theory, predict the hybridisation and magnetic character of [Ni(CN)4]^2−. (Atomic number of Ni = 28)\n(iii) Write the formula of dichloridobis(ethane-1,2-diamine)cobalt(III) using IUPAC norms.\nOR\n(b) When the coordination compound NiCl2·6H2O is mixed with AgNO3, 2 moles of AgCl are precipitated per mole of the compound. Write\n(i) the structural formula of the complex\n(ii) the secondary valency of Ni in the complex\n(iii) the IUPAC name of the complex.",
    answer: [
      {
        label: "(a)(i) d^4 with Δ_o < P",
        text: "**t_2g^3 e_g^1** — four unpaired electrons, a **high spin** complex.",
      },
      {
        text: "When Δ_o is smaller than the pairing energy P, it costs less to promote the fourth electron into the higher e_g set than to pair it in t_2g. A weak field ligand such as H2O or F^− gives this case.",
      },
      { figure: { kind: "named", id: "cft-octahedral" } },
      {
        label: "(a)(ii) [Ni(CN)4]^2−",
        text: "Ni is [Ar]3d^8 4s^2, so **Ni^2+ is 3d^8**. Cyanide is a strong field ligand and forces the 3d electrons to pair up, which empties one 3d orbital.",
      },
      {
        table: [
          ["", "Result"],
          ["Hybridisation", "**dsp^2**"],
          ["Geometry", "Square planar"],
          ["Unpaired electrons", "0"],
          ["Magnetic character", "**Diamagnetic**, μ = 0"],
        ],
      },
      {
        figure: {
          kind: "geometry",
          shape: "square-planar",
          center: "Ni",
          ligands: ["CN", "CN", "CN", "CN"],
          caption: "[Ni(CN)₄]²⁻ — dsp², square planar, diamagnetic",
        },
      },
      {
        label: "(a)(iii) Dichloridobis(ethane-1,2-diamine)cobalt(III)",
        text: "**[CoCl2(en)2]^+**",
      },
      {
        text: "Check the charge: cobalt is +3, the two chlorido ligands carry 2−, and ethane-1,2-diamine is neutral. So 3 − 2 = **+1** on the complex ion. 'Bis' is used rather than 'di' because the ligand name already contains a numerical prefix.",
      },
      {
        label: "(b) NiCl2·6H2O giving 2 mol AgCl",
        text: "Only the chloride that is **outside** the coordination sphere is free to precipitate with silver nitrate. Two moles of AgCl per mole of compound means **both** chlorides are ionisable, so neither is coordinated and all six water molecules must be.",
      },
      { equation: "[Ni(H2O)6]Cl2 + 2AgNO3 -> 2AgCl(s) + [Ni(H2O)6](NO3)2" },
      {
        table: [
          ["", "Answer"],
          ["(i) Structural formula", "**[Ni(H2O)6]Cl2**"],
          ["(ii) Secondary valency of Ni", "**6** — the coordination number"],
          ["(iii) IUPAC name", "**Hexaaquanickel(II) chloride**"],
        ],
      },
      {
        text: "In Werner's language the **primary valency** is the oxidation state, here +2, satisfied by the two chloride ions outside the sphere; the **secondary valency** is the coordination number, here 6, satisfied by the six water molecules inside it.",
      },
    ],
  },
  {
    id: "p22-6",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Integrated rate equations",
    years: [2022],
    question:
      "A first order reaction is 50% complete in 40 minutes. Calculate the time required for 90% completion of the reaction. (log 2 = 0.3010, log 10 = 1)",
    answer: [
      { label: "Step 1 — get k from the half-life", text: "50% complete means t½ = 40 min. For a first order reaction:" },
      { text: "$k = \\dfrac{0.693}{t_{1/2}} = \\dfrac{0.693}{40} = 1.733\\times10^{-2}\\ \\text{min}^{-1}$" },
      { label: "Step 2 — apply the first order equation to 90% completion", text: "If 90% has reacted, 10% of the original amount is left, so [R]0/[R] = 100/10 = 10." },
      { text: "$t = \\dfrac{2.303}{k}\\log\\dfrac{[R]_0}{[R]} = \\dfrac{2.303}{1.733\\times10^{-2}}\\log 10$" },
      { text: "$t = \\dfrac{2.303}{1.733\\times10^{-2}} \\times 1 = 132.9\\ \\text{min}$" },
      { label: "Answer", text: "**t ≈ 133 minutes** (about 2 hours 13 minutes)." },
      {
        label: "A faster route",
        text: "For a first order reaction t_90 is always **3.32 × t½**, because reducing the amount to one tenth takes log₂10 = 3.32 half-lives. So t_90 = 3.32 × 40 = 132.9 min — the same answer in one line, and a useful check.",
      },
      {
        table: [
          ["Completion", "Fraction left", "In half-lives", "Here"],
          ["50%", "1/2", "1", "40 min"],
          ["75%", "1/4", "2", "80 min"],
          ["90%", "1/10", "3.32", "**133 min**"],
          ["99%", "1/100", "6.64", "266 min"],
          ["99.9%", "1/1000", "10", "400 min"],
        ],
      },
      {
        text: "Notice that the time for a given **fraction** to react does not depend on the starting concentration at all — that is the defining feature of first order kinetics.",
      },
    ],
    keyPoint: "t₉₀ = 3.32 × t½, and t₉₉.₉ = 10 × t½. Worth memorising — both are asked repeatedly.",
  },
  {
    id: "p22-7",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2022],
    question:
      "(a) Illustrate the following reactions, giving a suitable example in each case:\n(i) Gabriel phthalimide synthesis\n(ii) carbylamine reaction\n(iii) Hoffmann bromamide degradation.\nOR\n(b) Write the structures of A, B and C:\n(i) CH3CH2Cl →(KCN) A →(LiAlH4) B →(HNO2, 273 K) C\n(ii) CH3COOH →(NH3, Δ) A →(LiAlH4, then H2O) B →(C6H5SO2Cl) C",
    answer: [
      {
        label: "(a)(i) Gabriel phthalimide synthesis",
        equations: [
          "phthalimide + KOH -> potassium phthalimide + H2O",
          "potassium phthalimide + CH3CH2Br -> N-ethylphthalimide + KBr",
          "N-ethylphthalimide + 2NaOH ->[H2O][Δ] CH3CH2NH2 + sodium phthalate",
        ],
      },
      {
        text: "Gives an **exclusively primary** amine — the product cannot be alkylated further, unlike in ammonolysis. It fails for **aromatic** primary amines, because an aryl halide will not undergo the SN2 step.",
      },
      { label: "(a)(ii) Carbylamine reaction", equation: "CH3CH2NH2 + CHCl3 + 3KOH ->[Δ] CH3CH2NC + 3KCl + 3H2O" },
      {
        text: "The foul-smelling isocyanide is formed. **Only primary amines** respond, so this is a test for them; secondary and tertiary amines give nothing.",
      },
      { label: "(a)(iii) Hoffmann bromamide degradation", equation: "CH3CH2CONH2 + Br2 + 4NaOH -> CH3CH2NH2 + Na2CO3 + 2NaBr + 2H2O" },
      {
        text: "An amide gives a primary amine with **one carbon fewer** — the carbonyl carbon leaves as carbonate. Propanamide (3 C) gives ethanamine (2 C).",
      },
      {
        label: "(b)(i) The nitrile route",
        table: [
          ["", "Compound", "Formula"],
          ["A", "Propanenitrile", "CH3CH2CN"],
          ["B", "Propan-1-amine", "CH3CH2CH2NH2"],
          ["C", "Propan-1-ol", "CH3CH2CH2OH"],
        ],
      },
      {
        equations: [
          "CH3CH2Cl + KCN ->[aq. ethanol] CH3CH2CN + KCl",
          "CH3CH2CN + 4[H] ->[LiAlH4] CH3CH2CH2NH2",
          "CH3CH2CH2NH2 + HNO2 ->[273 K] CH3CH2CH2OH + N2(g) + H2O",
        ],
      },
      { text: "Cyanide **adds a carbon**, so a two-carbon halide ends up as a three-carbon amine and then a three-carbon alcohol." },
      {
        label: "(b)(ii) The amide route",
        table: [
          ["", "Compound", "Formula"],
          ["A", "Ethanamide (acetamide)", "CH3CONH2"],
          ["B", "Ethanamine", "CH3CH2NH2"],
          ["C", "N-Ethylbenzenesulphonamide", "C6H5SO2NHC2H5"],
        ],
      },
      {
        equations: [
          "CH3COOH + NH3 -> CH3COONH4 ->[Δ][−H2O] CH3CONH2",
          "CH3CONH2 + 4[H] ->[LiAlH4] CH3CH2NH2 + H2O",
          "CH3CH2NH2 + C6H5SO2Cl -> C6H5SO2NHC2H5 + HCl",
        ],
      },
      {
        text: "Note the contrast with (a)(iii): **LiAlH4 keeps both carbons** of the amide, while Hoffmann bromamide would have removed one and given methanamine instead. The last step is **Hinsberg's test** — B is primary, so the sulphonamide keeps an acidic N–H and dissolves in aqueous KOH.",
      },
    ],
    keyPoint: "KCN adds a carbon; Hoffmann removes one; LiAlH₄ on an amide keeps the count.",
  },
  {
    id: "p22-8",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "General properties",
    years: [2022],
    question:
      "(a) Account for the following:\n(i) Transition elements have high enthalpies of atomisation.\n(ii) Separation of a mixture of lanthanoid elements is difficult.\n(iii) The E°(M^2+/M) value for copper is positive.\nOR\n(b) Define transition elements. Which d-block elements may not be regarded as transition elements? Why do transition metals generally form coloured compounds?",
    answer: [
      {
        label: "(a)(i) High enthalpies of atomisation",
        text: "Transition metals have a large number of **unpaired d electrons**, and these take part in the metallic bonding alongside the s electrons. The resulting interatomic bonds are strong, so a great deal of energy is needed to break the lattice into free atoms.",
      },
      {
        text: "The trend follows the number of unpaired electrons across a series, which is why **manganese** dips — its 3d^5 4s^2 configuration has a stable half-filled subshell whose electrons take part in bonding only reluctantly.",
      },
      {
        label: "(a)(ii) Lanthanoids are hard to separate",
        text: "Because of the **lanthanoid contraction**, the atomic and ionic radii decrease only very gradually across the series — from La^3+ to Lu^3+ the change is barely 20 pm over fourteen elements. All of them also share the same **stable +3 oxidation state**.",
      },
      {
        text: "Nearly identical size and identical charge mean nearly identical chemistry, so ordinary chemical methods cannot tell them apart. Separation relies on **ion-exchange chromatography**, which exploits the tiny remaining differences.",
      },
      {
        label: "(a)(iii) E°(Cu^2+/Cu) is positive",
        text: "It is the only 3d metal with a positive value, at **+0.34 V**, which is why copper does not liberate hydrogen from acids.",
      },
      {
        text: "The value is the sum of three terms: the enthalpy of **atomisation**, the **ionisation enthalpy** and the **hydration enthalpy**. For copper the first two are exceptionally high, and the hydration enthalpy of Cu^2+ is not large enough to compensate. The overall energy change therefore does not favour Cu^2+(aq) over the metal.",
      },
      {
        label: "(b) Definition",
        text: "A **transition element** is one that has a **partially filled d subshell in its ground state, or which can give rise to a cation with a partially filled d subshell**.",
      },
      {
        label: "(b) Which d-block elements are not transition elements",
        text: "**Zn, Cd and Hg** (group 12). Their configuration is (n−1)d^10 ns^2, and the only common ion, M^2+, is **d^10** — completely filled in both the atom and the ion. They therefore fail the definition, even though they sit in the d block.",
      },
      {
        table: [
          ["", "Atom", "Common ion", "Transition element?"],
          ["Cu", "3d^10 4s^1", "Cu^2+ = 3d^9", "**Yes** — the ion is partially filled"],
          ["Zn", "3d^10 4s^2", "Zn^2+ = 3d^10", "**No**"],
        ],
      },
      { text: "Copper is the instructive contrast: its atom has a full d subshell, but Cu^2+ does not, so it qualifies." },
      {
        label: "(b) Why they are coloured",
        text: "In a complex the five d orbitals are **split** by the ligand field into two sets separated by Δ. An electron absorbs light of exactly that energy and jumps from the lower set to the higher one — a **d–d transition**. The colour seen is the **complement** of the light absorbed.",
      },
      {
        text: "This requires **partially filled** d orbitals, which is why Sc^3+ (d^0) and Zn^2+ (d^10) are both colourless — one has no electron to promote, the other no vacancy to promote it into.",
      },
    ],
  },
  {
    id: "p22-9",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Identification",
    years: [2022],
    question:
      "An organic compound 'X' with molecular formula C5H10O forms a 2,4-DNP derivative, does not reduce Tollens' reagent, but gives a positive iodoform test on heating with I2 in the presence of NaOH. 'X' gives ethanoic acid and propanoic acid on vigorous oxidation. Write\n(i) the structure of 'X'\n(ii) the structure of the product with 2,4-DNP reagent\n(iii) the structures of the products when 'X' is heated with I2 and NaOH.",
    answer: [
      {
        label: "Reading the clues",
        table: [
          ["Observation", "What it tells you"],
          ["Forms a 2,4-DNP derivative", "A carbonyl group is present"],
          ["Does **not** reduce Tollens' reagent", "It is a **ketone**, not an aldehyde"],
          ["Positive iodoform test", "It contains the **CH3CO–** grouping"],
          ["Oxidation gives ethanoic + propanoic acid", "Cleavage either side of C=O gives a C2 and a C3 fragment"],
        ],
      },
      {
        label: "Putting it together",
        text: "A C5 ketone with a methyl group on the carbonyl leaves a propyl group on the other side. Vigorous oxidation cleaves the bond between the carbonyl carbon and C-3, giving **CH3COOH** (two carbons) and **CH3CH2COOH** (three carbons) — 2 + 3 = 5. ✓",
      },
      {
        label: "(i) X = pentan-2-one",
        text: "**CH3–CO–CH2–CH2–CH3**",
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3", bond: 1 },
            { label: "C", up: "O", upOrder: 2, bond: 1, highlight: true },
            { label: "CH2", bond: 1 },
            { label: "CH2", bond: 1 },
            { label: "CH3" },
          ],
          caption: "Pentan-2-one, C5H10O — the CH3 next to the C=O is what makes the iodoform test positive",
        },
      },
      {
        label: "(ii) With 2,4-DNP reagent",
        equation: "CH3COCH2CH2CH3 + H2N–NH–C6H3(NO2)2 ->[H^+] CH3C(=N–NH–C6H3(NO2)2)CH2CH2CH3 + H2O",
      },
      {
        text: "The product is **pentan-2-one 2,4-dinitrophenylhydrazone**, an **orange-red precipitate**. The C=O has become C=N–NH–Ar, with the loss of water.",
      },
      {
        label: "(iii) With I2 and NaOH — the iodoform reaction",
        equation: "CH3COCH2CH2CH3 + 3I2 + 4NaOH -> CHI3(s) + CH3CH2CH2COONa + 3NaI + 3H2O",
      },
      {
        table: [
          ["Product", "Formula", "Note"],
          ["Iodoform", "CHI3", "**Yellow precipitate**, antiseptic smell — the positive result"],
          ["Sodium butanoate", "CH3CH2CH2COONa", "Keeps the remaining four carbons"],
        ],
      },
      {
        text: "The methyl group attached to the carbonyl is the part that becomes iodoform; everything else leaves as the carboxylate. Check the carbons: 1 in CHI3 plus 4 in butanoate makes 5. ✓",
      },
      {
        text: "The other C5H10O ketone, pentan-3-one (CH3CH2COCH2CH3), fails both remaining tests — it has no CH3CO– group, so no iodoform, and oxidation would give propanoic acid twice, not two different acids.",
      },
    ],
    keyPoint: "Iodoform positive ⇒ CH₃CO– or CH₃CH(OH)–. The oxidation fragments then fix which side is which.",
  },
  {
    id: "p22-11",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Gibbs energy",
    years: [2022],
    question:
      "(a) The standard Gibbs energy ΔG° for the cell reaction Zn(s) + 2Ag^+(aq) → Zn^2+(aq) + 2Ag(s) is −300 kJ mol^−1. Calculate E°_cell. (1 F = 96500 C mol^−1)\n(b) Calculate Λ°_m for MgCl2 if Λ°_m for Mg^2+ and Cl^− are 106 and 76.3 S cm^2 mol^−1 respectively.",
    answer: [
      { label: "(a) Gibbs energy to cell potential", text: "The two are linked by:" },
      { text: "$\\Delta G^\\circ = -nFE^\\circ_{cell}$" },
      {
        text: "Count the electrons first. Zinc goes from 0 to +2, so **n = 2** — the coefficient 2 in front of Ag^+ is a consequence of that, not a separate factor.",
      },
      { text: "$-300\\,000\\ \\text{J mol}^{-1} = -(2)(96\\,500)E^\\circ_{cell}$" },
      { text: "$E^\\circ_{cell} = \\dfrac{300\\,000}{193\\,000} = 1.554\\ \\text{V}$" },
      { label: "Answer (a)", text: "**E°_cell = 1.55 V**" },
      {
        text: "Convert kJ to J before substituting — dropping the factor of 1000 is the commonest way to lose the mark here. The positive E° confirms the reaction is **spontaneous**, as a negative ΔG° requires.",
      },
      { label: "(b) Kohlrausch's law", text: "The limiting molar conductivity is the sum of the ionic contributions, each weighted by how many of that ion the formula unit provides:" },
      { text: "$\\Lambda^\\circ_m(\\mathrm{MgCl_2}) = \\lambda^\\circ(\\mathrm{Mg^{2+}}) + 2\\,\\lambda^\\circ(\\mathrm{Cl^-})$" },
      { text: "$= 106 + 2(76.3) = 106 + 152.6$" },
      { label: "Answer (b)", text: "**Λ°_m(MgCl2) = 258.6 S cm^2 mol^−1**" },
      {
        text: "The factor of **2** on chloride is the whole point of the question — one formula unit of MgCl2 releases two chloride ions, and each carries current. Forgetting it gives 182.3 and loses the mark.",
      },
    ],
  },
];
