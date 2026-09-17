import type { Question } from "@/types";

/** Unit 6 — equation-based questions on haloalkanes and haloarenes. */
export const CH06C: Question[] = [
  {
    id: "h6-e1",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions",
    years: [2018, 2023],
    question:
      "Write the equations and name the products:\n(a) CH3CH2Br + KCN (aq. ethanol) →\n(b) CH3CH2Br + AgCN →\n(c) CH3CH2Br + AgNO2 →",
    answer: [
      {
        label: "The point of the question",
        text: "All three reagents are **ambident nucleophiles** — they have two donor atoms, and which one attacks is decided by the metal ion.",
      },
      { label: "(a) With KCN — attack through carbon", equation: "CH3CH2Br + KCN ->[aq. ethanol] CH3CH2CN + KBr" },
      {
        text: "KCN is largely ionic, so free CN^− attacks. Carbon is the better donor in the free ion, so the product is **propanenitrile** (an alkyl cyanide).",
      },
      { label: "(b) With AgCN — attack through nitrogen", equation: "CH3CH2Br + AgCN -> CH3CH2NC + AgBr(s)" },
      {
        text: "AgCN is essentially covalent, so only the **nitrogen** lone pair is available. The product is **ethyl isocyanide**, with its characteristic foul smell.",
      },
      { label: "(c) With AgNO2 — attack through nitrogen", equation: "CH3CH2Br + AgNO2 -> CH3CH2NO2 + AgBr(s)" },
      {
        text: "Silver nitrite is covalent, so nitrogen attacks and **nitroethane** results. With the ionic KNO2 the free NO2^− ion attacks through oxygen instead, giving ethyl nitrite, CH3CH2–O–N=O.",
      },
      {
        table: [
          ["Reagent", "Attacking atom", "Product"],
          ["KCN", "C", "CH3CH2CN, propanenitrile"],
          ["AgCN", "N", "CH3CH2NC, ethyl isocyanide"],
          ["KNO2", "O", "CH3CH2ONO, ethyl nitrite"],
          ["AgNO2", "N", "CH3CH2NO2, nitroethane"],
        ],
      },
    ],
    keyPoint: "Ionic K salt → the free ion attacks by its better donor (C of CN⁻, O of NO2⁻). Covalent Ag salt → nitrogen attacks.",
  },
  {
    id: "h6-e2",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2019, 2024],
    question:
      "Carry out the following conversions:\n(a) propene to 1-iodopropane\n(b) chlorobenzene to p-nitrophenol\n(c) aniline to chlorobenzene",
    answer: [
      { label: "(a) Propene → 1-iodopropane", text: "Iodide cannot be added directly, so make the bromide with anti-Markovnikov addition and then exchange the halogen:" },
      {
        equations: [
          "CH3CH=CH2 + HBr ->[(C6H5CO)2O2] CH3CH2CH2Br",
          "CH3CH2CH2Br + NaI ->[dry acetone] CH3CH2CH2I + NaBr(s)",
        ],
      },
      {
        text: "The peroxide effect puts the bromine on the **terminal** carbon; the second step is the **Finkelstein reaction**, which is driven forward because NaBr is insoluble in dry acetone and precipitates out.",
      },
      { label: "(b) Chlorobenzene → p-nitrophenol", text: "Chlorobenzene will not hydrolyse under ordinary conditions, so activate the ring with a nitro group first:" },
      {
        equations: [
          "C6H5Cl + HNO3 ->[conc. H2SO4][Δ] p-O2N–C6H4–Cl + H2O",
          "p-O2N–C6H4–Cl + NaOH ->[H2O][443 K] p-O2N–C6H4–ONa + NaCl",
          "p-O2N–C6H4–ONa + HCl -> p-O2N–C6H4–OH + NaCl",
        ],
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH", highlight: true },
            { pos: 4, label: "NO2" },
          ],
          caption: "p-Nitrophenol — the nitro group at the para position is what made the substitution possible",
        },
      },
      {
        text: "The –NO2 group withdraws electron density **by resonance** and so stabilises the carbanion intermediate; that is why it must sit ortho or para to the chlorine to help. Plain chlorobenzene needs 623 K and 300 atm (the Dow process) for the same substitution.",
      },
      { label: "(c) Aniline → chlorobenzene (Sandmeyer)", equations: ["C6H5NH2 + NaNO2 + 2HCl ->[273–278 K] C6H5N2^+Cl^− + NaCl + 2H2O", "C6H5N2^+Cl^− ->[CuCl/HCl] C6H5Cl + N2(g)"] },
      { text: "Replacing –N2^+ by chlorine needs **cuprous chloride**; with Cu/HCl the same conversion is called the **Gattermann reaction**, though the yield is lower." },
    ],
  },
  {
    id: "h6-e3",
    chapter: 6,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2020, 2023, 2025],
    question:
      "Write the chemical equation for each of the following, with the reagent and conditions:\n(a) Wurtz reaction\n(b) Fittig reaction\n(c) Wurtz–Fittig reaction\n(d) Finkelstein reaction\n(e) Swarts reaction",
    answer: [
      { label: "(a) Wurtz — two alkyl halides join", equation: "2CH3CH2Br + 2Na ->[dry ether] CH3CH2CH2CH3 + 2NaBr" },
      { text: "Only useful for a **symmetrical** alkane, because a mixture of two different halides would give three products." },
      { label: "(b) Fittig — two aryl halides join", equation: "2C6H5Cl + 2Na ->[dry ether] C6H5–C6H5 + 2NaCl" },
      { text: "Gives biphenyl." },
      { label: "(c) Wurtz–Fittig — one of each", equation: "C6H5Cl + CH3Cl + 2Na ->[dry ether] C6H5CH3 + 2NaCl" },
      { text: "An alkyl group is attached to the ring — a way of making toluene without Friedel–Crafts." },
      { label: "(d) Finkelstein — halogen exchange to iodide", equation: "CH3CH2Cl + NaI ->[dry acetone] CH3CH2I + NaCl(s)" },
      { text: "NaI dissolves in dry acetone but NaCl does not, so the precipitate pulls the equilibrium across." },
      { label: "(e) Swarts — halogen exchange to fluoride", equation: "CH3CH2Br + AgF -> CH3CH2F + AgBr(s)" },
      { text: "Hg2F2, CoF2 or SbF3 work equally well in place of AgF." },
      {
        table: [
          ["Reaction", "Reagent", "What it builds"],
          ["Wurtz", "Na / dry ether", "R–R, a symmetrical alkane"],
          ["Fittig", "Na / dry ether", "Ar–Ar, a biaryl"],
          ["Wurtz–Fittig", "Na / dry ether", "Ar–R, an alkylarene"],
          ["Finkelstein", "NaI / dry acetone", "R–I from R–Cl or R–Br"],
          ["Swarts", "AgF, Hg2F2, SbF3", "R–F"],
        ],
      },
    ],
    keyPoint: "Wurtz/Fittig build C–C bonds with sodium; Finkelstein and Swarts only swap one halogen for another.",
  },
  {
    id: "h6-e4",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2017, 2022],
    question:
      "Write the mechanism of the reaction of 2-bromo-2-methylpropane with aqueous KOH, and state what happens to the optical activity if the starting halide is optically active.",
    answer: [
      {
        label: "The reaction",
        equation: "(CH3)3C–Br + KOH ->[H2O] (CH3)3C–OH + KBr",
      },
      { figure: { kind: "named", id: "sn1-mechanism" } },
      {
        label: "Step 1 — slow, rate-determining",
        equation: "(CH3)3C–Br ->[slow] (CH3)3C^+ + Br^−",
      },
      {
        text: "The C–Br bond breaks heterolytically. The tertiary carbocation is stabilised by the **+I effect** of three methyl groups and by hyperconjugation (nine α-hydrogens), which is why this route is open at all.",
      },
      { label: "Step 2 — fast", equation: "(CH3)3C^+ + OH^− ->[fast] (CH3)3C–OH" },
      {
        label: "Rate law",
        text: "Only the halide appears in the slow step, so **rate = k[(CH3)3CBr]** — first order, and the concentration of hydroxide does not matter. Hence the name SN1.",
      },
      {
        label: "Optical activity",
        text: "The carbocation is **planar and sp^2 hybridised**, so the nucleophile can attack from either face with almost equal ease. An optically active halide therefore gives a nearly 50:50 mixture of the two enantiomers — a **racemic mixture**, which is optically inactive. This is racemisation.",
      },
      {
        text: "Contrast SN2, where the nucleophile must attack from the side opposite the leaving group, so the product has **inverted** configuration (Walden inversion) and stays optically active.",
      },
    ],
  },
  {
    id: "h6-e5",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Elimination",
    years: [2016, 2021, 2024],
    question:
      "What happens when 2-bromobutane is treated with (a) aqueous KOH and (b) alcoholic KOH? Write the equations and name the major product in (b), giving the rule you used.",
    answer: [
      { label: "(a) Aqueous KOH — substitution", equation: "CH3CH(Br)CH2CH3 + KOH ->[H2O] CH3CH(OH)CH2CH3 + KBr" },
      { text: "In water the hydroxide ion is heavily solvated and acts as a **nucleophile**, giving butan-2-ol." },
      { label: "(b) Alcoholic KOH — elimination", equations: ["CH3CH(Br)CH2CH3 + KOH ->[ethanol][Δ] CH3CH=CHCH3 + KBr + H2O", "CH3CH(Br)CH2CH3 + KOH ->[ethanol][Δ] CH2=CHCH2CH3 + KBr + H2O"] },
      {
        text: "In ethanol the base is the poorly solvated ethoxide/hydroxide pair, which is a **strong base** and pulls off a β-hydrogen instead. Both β-carbons can lose a hydrogen, so two alkenes are possible.",
      },
      {
        table: [
          ["Product", "β-H removed from", "Substituents on C=C", "Share"],
          ["But-2-ene", "C-3", "2", "**major**"],
          ["But-1-ene", "C-1", "1", "minor"],
        ],
      },
      {
        label: "Saytzeff's rule",
        text: "In a dehydrohalogenation the **major alkene is the more highly substituted one**, because more alkyl groups means more hyperconjugative structures and a more stable double bond. So **but-2-ene** predominates.",
      },
    ],
    keyPoint: "Aqueous KOH substitutes; alcoholic KOH eliminates — and Saytzeff picks the more substituted alkene.",
  },
  {
    id: "h6-e6",
    chapter: 6,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Identification",
    years: [2018, 2023],
    question:
      "An alkyl halide 'A' of molecular formula C6H13Cl, on treatment with potassium tert-butoxide, gives two isomeric alkenes 'B' and 'C' (C6H12). Both alkenes on hydrogenation give 2,3-dimethylbutane. Identify A, B and C and write all the equations.",
    answer: [
      {
        label: "Work backwards from the hydrogenation product",
        text: "Both alkenes give the same alkane, **2,3-dimethylbutane**, (CH3)2CH–CH(CH3)2. So B and C share that carbon skeleton and differ only in where the double bond sits.",
      },
      {
        table: [
          ["", "Compound", "Structure"],
          ["A", "2-Chloro-2,3-dimethylbutane", "(CH3)2C(Cl)–CH(CH3)2"],
          ["B", "2,3-Dimethylbut-2-ene", "(CH3)2C=C(CH3)2"],
          ["C", "2,3-Dimethylbut-1-ene", "CH2=C(CH3)–CH(CH3)2"],
        ],
      },
      {
        label: "Why A must be the 2-chloro compound",
        text: "Elimination can take a β-hydrogen from **either** side of the chlorine-bearing carbon. Removing one from C-3 gives the tetrasubstituted alkene B; removing one from a C-1 methyl gives the disubstituted alkene C. Only 2-chloro-2,3-dimethylbutane has two different sets of β-hydrogens, so only it gives two isomers.",
      },
      { label: "Equations", equations: ["(CH3)2C(Cl)–CH(CH3)2 + (CH3)3COK ->[(CH3)3COH][Δ] (CH3)2C=C(CH3)2 + (CH3)3COH + KCl", "(CH3)2C(Cl)–CH(CH3)2 + (CH3)3COK ->[(CH3)3COH][Δ] CH2=C(CH3)–CH(CH3)2 + (CH3)3COH + KCl"] },
      { equations: ["(CH3)2C=C(CH3)2 + H2 ->[Pt] (CH3)2CH–CH(CH3)2", "CH2=C(CH3)–CH(CH3)2 + H2 ->[Pt] (CH3)2CH–CH(CH3)2"] },
      {
        label: "Which isomer is major",
        text: "Potassium tert-butoxide is a **bulky** base. It cannot easily reach the crowded internal β-hydrogen, so it takes the accessible primary one and the **Hofmann product C predominates** — the reverse of what ordinary alcoholic KOH would give.",
      },
    ],
    keyPoint: "Small base (KOH/ethanol) → Saytzeff, more substituted alkene. Bulky base (t-BuOK) → Hofmann, less substituted alkene.",
  },
  {
    id: "h6-e7",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of haloarenes",
    years: [2019, 2022],
    question:
      "Write the equations for the reaction of chlorobenzene with:\n(a) Cl2 in the presence of anhydrous FeCl3\n(b) conc. HNO3 and conc. H2SO4 at 323 K\n(c) CH3COCl with anhydrous AlCl3\nExplain why the substituent goes where it does.",
    answer: [
      { label: "(a) Chlorination", equation: "C6H5Cl + Cl2 ->[anhyd. FeCl3] o- and p-C6H4Cl2 + HCl" },
      { figure: { kind: "named", id: "dichlorobenzenes" } },
      { label: "(b) Nitration", equation: "C6H5Cl + HNO3 ->[conc. H2SO4][323 K] o- and p-O2N–C6H4–Cl + H2O" },
      { label: "(c) Friedel–Crafts acylation", equation: "C6H5Cl + CH3COCl ->[anhyd. AlCl3] p-CH3CO–C6H4–Cl + HCl" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Cl" },
            { pos: 4, label: "COCH3", highlight: true },
          ],
          caption: "4-Chloroacetophenone — the para product dominates in acylation because the acyl group is bulky",
        },
      },
      {
        label: "Why ortho and para",
        text: "Chlorine is **deactivating but o/p directing** — the two effects have different origins, which is the whole point of the question.",
      },
      {
        points: [
          "**–I effect:** chlorine is more electronegative than carbon, so it pulls electron density out of the ring and slows every substitution down. Chlorobenzene reacts more slowly than benzene.",
          "**+R effect:** a lone pair on chlorine delocalises into the ring, and the resonance structures put the negative charge specifically on the **ortho and para** carbons.",
          "So the ring is poorer in electrons overall, but what density remains is concentrated at o and p — the electrophile goes there.",
        ],
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
      {
        text: "The **para** isomer usually predominates over the ortho, because the ortho positions are sterically crowded by the chlorine already present.",
      },
    ],
    keyPoint: "Chlorine deactivates by –I but directs o/p by +R. The two effects do not have to agree.",
  },
  {
    id: "h6-e8",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2015, 2021],
    question:
      "How will you bring about the following conversions?\n(a) Bromobenzene to benzoic acid\n(b) Chlorobenzene to phenol\n(c) Benzene to 4-bromonitrobenzene",
    answer: [
      { label: "(a) Bromobenzene → benzoic acid (Grignard route)", equations: ["C6H5Br + Mg ->[dry ether] C6H5MgBr", "C6H5MgBr + CO2 ->[dry ether] C6H5COOMgBr", "C6H5COOMgBr + H3O^+ -> C6H5COOH + Mg(OH)Br"] },
      {
        text: "Everything must be **scrupulously dry** — a Grignard reagent is destroyed instantly by water, giving benzene and Mg(OH)Br. Dry ice is the usual source of CO2.",
      },
      { label: "(b) Chlorobenzene → phenol (Dow process)", equations: ["C6H5Cl + NaOH ->[623 K][300 atm] C6H5ONa + NaCl", "C6H5ONa + HCl -> C6H5OH + NaCl"] },
      {
        text: "The forcing conditions are needed because the C–Cl bond in a haloarene has **partial double-bond character** and the sp^2 carbon holds it tightly, so nucleophilic substitution is very difficult.",
      },
      { label: "(c) Benzene → 4-bromonitrobenzene — order matters", equations: ["C6H6 + Br2 ->[anhyd. FeBr3] C6H5Br + HBr", "C6H5Br + HNO3 ->[conc. H2SO4][Δ] p-O2N–C6H4–Br + H2O"] },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Br" },
            { pos: 4, label: "NO2", highlight: true },
          ],
          caption: "4-Bromonitrobenzene",
        },
      },
      {
        text: "**Brominate first.** Bromine is o/p directing, so the nitro group lands at the para position. If you nitrated first, the –NO2 group is **meta directing** and you would get 3-bromonitrobenzene instead.",
      },
    ],
    keyPoint: "In a two-step aromatic synthesis, the first substituent decides where the second one goes — so choose the order deliberately.",
  },
];
