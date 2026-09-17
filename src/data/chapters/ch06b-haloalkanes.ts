import type { Question } from "@/types";

/**
 * Unit 6 — Haloalkanes and Haloarenes, second tranche.
 *
 * Extracted from the board papers 2013–2025 and rewritten with correct
 * notation. Reactions that the PDFs carry only as vector drawings have been
 * reconstructed as equations and structures.
 */
export const CH06B: Question[] = [
  /* ---------------- Reactivity comparisons ---------------- */
  {
    id: "h6-v6",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2019],
    question:
      "Out of chlorobenzene and cyclohexyl chloride, which is more reactive towards nucleophilic substitution and why?",
    answer: [
      {
        text: "**Cyclohexyl chloride.** Its chlorine sits on an **sp³** carbon and the C–Cl bond is a pure single bond, so a nucleophile can displace it readily.",
      },
      {
        text: "In chlorobenzene the chlorine is on an **sp²** ring carbon and its lone pair is delocalised into the ring, giving the C–Cl bond **partial double-bond character**. That bond is shorter and stronger, and the electron-rich ring also repels the incoming nucleophile.",
      },
      { figure: { kind: "named", id: "haloalkane-vs-haloarene" } },
    ],
    keyPoint: "sp³ C–X breaks easily; sp² C–X with resonance does not.",
  },
  {
    id: "h6-s10",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Nucleophilic substitution",
    years: [2024],
    question:
      "Account for the following:\n(a) Haloalkanes react with AgCN to give isocyanide as the main product.\n(b) Allyl chloride is highly reactive towards SN1.\n(c) Benzyl chloride gives an SN1 reaction readily.",
    answer: [
      {
        label: "(a)",
        text: "AgCN is largely **covalent**, so no free cyanide ion exists. Only the **nitrogen** lone pair is available for donation, and attack through N gives the isocyanide:",
      },
      { equation: "R–X + AgCN -> R–NC + AgX" },
      {
        text: "With **ionic KCN** the free CN⁻ attacks through its more nucleophilic **carbon** instead, giving the cyanide R–CN.",
      },
      {
        label: "(b)",
        text: "Ionisation gives the **allyl carbocation**, in which the positive charge is delocalised over two carbons:",
      },
      { equation: "CH2=CH–CH2^+ <-> ^+CH2–CH=CH2" },
      { text: "A more stable carbocation means a faster rate-determining step, so SN1 is rapid." },
      {
        label: "(c)",
        text: "The **benzyl carbocation** is stabilised by resonance with the benzene ring — the charge is spread onto the ortho and para carbons. Being a resonance-stabilised intermediate, it forms easily and benzyl chloride undergoes SN1 readily.",
      },
      { figure: { kind: "named", id: "allyl-vinyl-benzyl" } },
    ],
  },
  {
    id: "h6-s11",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2017],
    question:
      "For 2-bromopentane, 2-bromo-2-methylbutane and 1-bromopentane, state which is:\n(a) most reactive towards SN2,\n(b) optically active,\n(c) most reactive towards β-elimination.",
    answer: [
      {
        label: "(a) Most reactive towards SN2 — **1-bromopentane**",
        text: "It is a **primary** halide, so there is least steric hindrance to backside attack by the nucleophile. SN2 reactivity runs 1° > 2° > 3°.",
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3" },
            {},
            {},
            {},
            { label: "CH2Br", highlight: true },
          ],
          caption: "1-Bromopentane — a primary halide, fastest by SN2",
        },
      },
      {
        label: "(b) Optically active — **2-bromopentane**",
        text: "Its C-2 carries four different groups — –CH3, –Br, –H and –C3H7 — so it is a **chiral centre** and the compound is optically active.",
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH3" },
            { label: "CH", down: "Br", highlight: true },
            {},
            {},
            { label: "CH3" },
          ],
          caption: "2-Bromopentane — C-2 is a chiral centre",
        },
      },
      {
        label: "(c) Most reactive towards β-elimination — **2-bromo-2-methylbutane**",
        text: "It is a **tertiary** halide with the greatest number of β-hydrogens, and elimination gives the most substituted, most stable alkene (Saytzeff's rule). Tertiary halides favour elimination over substitution.",
      },
    ],
    keyPoint: "Primary → SN2. Tertiary → SN1 and elimination.",
  },
  {
    id: "h6-s12",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of haloarenes",
    years: [2024],
    question:
      "(a) Write the IUPAC name of the compound with Br at position 1 and Cl at position 4 of a benzene ring.\n(b) Why does a –NO2 group at the ortho or para position increase the reactivity of haloarenes towards nucleophilic substitution?\n(c) What happens when ethyl chloride is treated with (i) alcoholic KOH, (ii) aqueous KOH?",
    answer: [
      { label: "(a)", text: "**1-Bromo-4-chlorobenzene** (p-bromochlorobenzene). Substituents are cited alphabetically, so bromo takes C-1." },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Br" },
            { pos: 4, label: "Cl" },
          ],
          caption: "1-Bromo-4-chlorobenzene",
        },
      },
      {
        label: "(b)",
        text: "When the nucleophile attacks, a negatively charged intermediate (a carbanion) is formed. A **–NO2 group at the ortho or para position** is strongly electron-withdrawing (−I and −R) and **delocalises that negative charge onto its own oxygen atoms**, stabilising the intermediate and lowering the activation energy.",
      },
      {
        text: "A nitro group at the **meta** position cannot delocalise the charge onto itself, so it has almost no activating effect. Adding more nitro groups makes substitution progressively easier.",
      },
      { label: "(c)(i) Alcoholic KOH — β-elimination", equation: "CH3CH2Cl + KOH ->[alcohol][Δ] CH2=CH2 + KCl + H2O" },
      { label: "(c)(ii) Aqueous KOH — nucleophilic substitution", equation: "CH3CH2Cl + KOH ->[aqueous] CH3CH2OH + KCl" },
      {
        text: "The solvent decides the outcome: in alcohol the alkoxide-rich medium favours the **base** behaviour of OH⁻, giving the alkene; in water the OH⁻ acts as a **nucleophile**, giving the alcohol.",
      },
    ],
    keyPoint: "Alcoholic KOH → alkene. Aqueous KOH → alcohol.",
  },

  /* ---------------- Conversions ---------------- */
  {
    id: "h6-s13",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2018, 2016],
    question:
      "Write the structure of the product when chlorobenzene is treated with methyl chloride in the presence of sodium metal and dry ether. Name the reaction.",
    answer: [
      { text: "This is the **Wurtz–Fittig reaction** — an aryl halide and an alkyl halide coupled by sodium in dry ether." },
      { equation: "C6H5Cl + CH3Cl + 2Na ->[dry ether] C6H5–CH3 + 2NaCl" },
      { figure: { kind: "arene", substituents: [{ pos: 1, label: "CH3", highlight: true }], caption: "Toluene (methylbenzene) — the Wurtz–Fittig product" } },
      {
        text: "Compare the related couplings: **Wurtz** joins two alkyl halides, **Fittig** joins two aryl halides to give biphenyl, and **Wurtz–Fittig** joins one of each to give an alkylarene.",
      },
    ],
  },
  {
    id: "h6-s14",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Reactions",
    years: [2020, 2018],
    question:
      "Write the structure of the major alkene formed when 1-bromo-1-methylcyclohexane is treated with alcoholic KOH, and justify your choice.",
    answer: [
      { text: "Dehydrohalogenation removes HBr. Two alkenes are possible, and **Saytzeff's rule** decides which predominates:" },
      { equation: "1-bromo-1-methylcyclohexane ->[alc. KOH][Δ] 1-methylcyclohexene (major) + methylenecyclohexane (minor)" },
      {
        text: "The major product is **1-methylcyclohexene**, in which the double bond is inside the ring and carries **three** alkyl substituents. The minor product, methylenecyclohexene, has an exocyclic double bond with only two.",
      },
      {
        text: "**Saytzeff's rule:** in an elimination, the alkene with the greater number of alkyl groups on the doubly bonded carbons is the major product, because hyperconjugation makes it the more stable.",
      },
    ],
    keyPoint: "Saytzeff: the more substituted alkene wins.",
  },
  {
    id: "h6-s15",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2025, 2016],
    question:
      "How do you carry out the following conversions?\n(a) Chlorobenzene to biphenyl\n(b) Propene to 1-iodopropane\n(c) Toluene to benzyl alcohol",
    answer: [
      { label: "(a) Fittig reaction", equation: "2C6H5Cl + 2Na ->[dry ether] C6H5–C6H5 + 2NaCl" },
      {
        label: "(b) Anti-Markovnikov addition, then Finkelstein",
        text: "Direct addition of HI would put the iodine on C-2, so add HBr in the presence of peroxide first:",
      },
      {
        equations: [
          "CH3CH=CH2 + HBr ->[peroxide] CH3CH2CH2Br",
          "CH3CH2CH2Br + NaI ->[dry acetone] CH3CH2CH2I + NaBr",
        ],
      },
      {
        text: "The **Finkelstein reaction** works because NaBr is insoluble in dry acetone and precipitates out, pulling the equilibrium across.",
      },
      {
        label: "(c) Free-radical halogenation, then hydrolysis",
        equations: [
          "C6H5CH3 + Cl2 ->[light][Δ] C6H5CH2Cl + HCl",
          "C6H5CH2Cl + KOH ->[aqueous] C6H5CH2OH + KCl",
        ],
      },
      {
        text: "Light (not a Lewis acid) is essential in the first step — it directs substitution into the **side chain** rather than the ring.",
      },
    ],
  },

  /* ---------------- Assertion–reason ---------------- */
  {
    id: "h6-ar4",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2023],
    question:
      "**Assertion (A):** Chlorobenzene is resistant to nucleophilic substitution at room temperature.\n**Reason (R):** The C–Cl bond gets weaker due to resonance.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Chlorobenzene is indeed very resistant — but resonance makes the C–Cl bond **stronger**, not weaker.",
      },
      {
        text: "Delocalisation of the chlorine lone pair into the ring gives the bond **partial double-bond character**, shortening it from 177 pm (in CH3Cl) to 169 pm and raising its bond energy. A stronger, shorter bond is harder for a nucleophile to break, which is exactly why the substitution does not occur under mild conditions.",
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
    ],
  },
  {
    id: "h6-ar5",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2022],
    question:
      "**Assertion (A):** Chlorobenzene is less reactive towards nucleophilic substitution.\n**Reason (R):** The nitro group in chlorobenzene increases its reactivity towards nucleophilic substitution.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) Both statements are true, but R does not explain A.** Chlorobenzene is genuinely unreactive, because of resonance and the sp² ring carbon. Separately, it is true that a nitro group (at the ortho or para position) activates a haloarene towards nucleophilic substitution.",
      },
      {
        text: "But plain chlorobenzene **has no nitro group**. The reason describes a different compound, so it cannot be the explanation of the assertion.",
      },
    ],
  },
  {
    id: "h6-ar6",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Reactions of ethers",
    years: [2020],
    question:
      "**Assertion (A):** (CH3)3C–O–CH3 gives (CH3)3C–I and CH3OH on treatment with HI.\n**Reason (R):** The reaction occurs by an SN1 mechanism.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** The ether oxygen is protonated first, turning the leaving group into a neutral alcohol:",
      },
      { equation: "(CH3)3C–O–CH3 + HI -> (CH3)3C–O^+(H)–CH3 + I^−" },
      {
        text: "Cleavage then occurs at the **tertiary** carbon, because that route gives the very stable tertiary carbocation — an **SN1** path:",
      },
      { equation: "(CH3)3C^+ + I^− -> (CH3)3C–I" },
      {
        text: "The methyl group departs as methanol. Had both groups been primary, the mechanism would instead be SN2 and the iodide would attack the **less hindered** carbon.",
      },
    ],
    keyPoint: "Ether + HI: tertiary side takes the halide (SN1); otherwise the less hindered side does (SN2).",
  },

  /* ---------------- Polyhalogen compounds ---------------- */
  {
    id: "h6-s16",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Polyhalogen compounds",
    years: [2020, 2016],
    question:
      "Write one use each of: (a) DDT, (b) chloroform, (c) iodoform, (d) freon. What is the environmental concern with the first and the last?",
    answer: [
      {
        table: [
          ["Compound", "Use"],
          ["DDT (p,p'-dichlorodiphenyltrichloroethane)", "Insecticide, historically against malarial mosquitoes"],
          ["Chloroform, CHCl3", "Industrial solvent; formerly an anaesthetic"],
          ["Iodoform, CHI3", "Antiseptic, for its liberated iodine"],
          ["Freon-12, CCl2F2", "Refrigerant and aerosol propellant"],
        ],
      },
      {
        label: "Environmental concern",
        points: [
          "**DDT** is not biodegradable. It accumulates in fatty tissue and concentrates up the food chain (biomagnification), harming birds and fish; most countries have banned it.",
          "**Freons** are chlorofluorocarbons. In the stratosphere UV light frees chlorine radicals, which catalytically destroy ozone — the cause of the ozone hole.",
        ],
      },
    ],
  },
  {
    id: "h6-v7",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Polyhalogen compounds",
    years: [2023],
    question: "Why is chloroform stored in dark brown bottles filled to the brim?",
    answer: [
      { text: "In air and light, chloroform is slowly oxidised to the extremely poisonous gas **phosgene**:" },
      { equation: "2CHCl3 + O2 ->[light] 2COCl2 + 2HCl" },
      {
        text: "The **dark bottle** keeps light out and **filling to the brim** leaves no air space, so neither condition for the reaction is available. About 1% ethanol is also added, which converts any phosgene formed into harmless diethyl carbonate.",
      },
    ],
  },

  /* ---------------- Numerical / structure identification ---------------- */
  {
    id: "h6-s17",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Optical isomerism",
    years: [2019, 2016],
    question:
      "Among the isomers of molecular formula C4H9Br, identify (a) the one that is optically active, (b) the one most reactive towards SN1, (c) the one that is a primary halide but achiral.",
    answer: [
      {
        text: "C4H9Br has four structural isomers:",
        table: [
          ["Isomer", "Class", "Note"],
          ["CH3CH2CH2CH2Br (1-bromobutane)", "1°", "achiral"],
          ["CH3CH2CH(Br)CH3 (2-bromobutane)", "2°", "**chiral**"],
          ["(CH3)2CHCH2Br (1-bromo-2-methylpropane)", "1°", "achiral"],
          ["(CH3)3CBr (2-bromo-2-methylpropane)", "3°", "achiral"],
        ],
      },
      {
        label: "(a) Optically active — **2-bromobutane**",
        text: "Its C-2 carries –CH3, –Br, –H and –C2H5: four different groups, so it is a chiral centre.",
      },
      { figure: { kind: "named", id: "butanol-enantiomers" } },
      {
        label: "(b) Most reactive towards SN1 — **2-bromo-2-methylpropane**",
        text: "It is tertiary, so it gives the most stable carbocation in the rate-determining step.",
      },
      {
        label: "(c) Primary but achiral — **1-bromobutane**",
        text: "(1-Bromo-2-methylpropane qualifies too.) Neither has a carbon bearing four different groups.",
      },
    ],
  },
  {
    id: "h6-v8",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2017],
    question: "Write the structure of 2,4-dinitrochlorobenzene.",
    answer: [
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Cl", highlight: true },
            { pos: 2, label: "NO2" },
            { pos: 4, label: "NO2" },
          ],
          numbering: true,
          caption: "2,4-Dinitrochlorobenzene",
        },
      },
      {
        text: "The two nitro groups at the ortho and para positions strongly activate the ring towards **nucleophilic** substitution — this compound is hydrolysed by aqueous NaOH at just 368 K, against 623 K and 300 atm for chlorobenzene itself.",
      },
    ],
  },
  {
    id: "h6-v9",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Nomenclature",
    years: [2017],
    question: "Write the structure of 1-bromo-4-chlorobut-2-ene.",
    answer: [
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH2Br", bond: 1, highlight: true },
            { label: "CH", bond: 2 },
            { label: "CH", bond: 1 },
            { label: "CH2Cl", highlight: true },
          ],
          caption: "1-Bromo-4-chlorobut-2-ene",
        },
      },
      {
        text: "Four carbons (but-), a double bond starting at C-2, bromine on C-1 and chlorine on C-4. Numbering starts from the end that gives the substituents the lower set of locants.",
      },
    ],
  },
  {
    id: "h6-s18",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "SN1 and SN2",
    years: [2022],
    question:
      "Arrange the following in increasing order of reactivity towards SN2 substitution:\n1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane.",
    answer: [
      { equation: "2-bromo-2-methylpropane < 2-bromobutane < 1-bromobutane" },
      {
        text: "SN2 proceeds through a crowded five-coordinate transition state in which the nucleophile attacks from the side opposite the leaving group. Every alkyl group added to the reacting carbon **blocks that approach** and raises the energy of the transition state.",
      },
      {
        table: [
          ["Halide", "Class", "Groups on the C–Br carbon", "SN2 rate"],
          ["1-bromobutane", "1°", "1 alkyl + 2 H", "fastest"],
          ["2-bromobutane", "2°", "2 alkyl + 1 H", "moderate"],
          ["2-bromo-2-methylpropane", "3°", "3 alkyl", "essentially nil"],
        ],
      },
      { text: "For **SN1** the order is exactly reversed, because there carbocation stability governs." },
    ],
    keyPoint: "SN2 is a steric contest; SN1 is a carbocation-stability contest.",
  },

  /* ---------------- Case study ---------------- */
  {
    id: "h6-c2",
    chapter: 6,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2023],
    passage:
      "Haloarenes show resonating structures in which the lone pair on the halogen is delocalised around the benzene ring, so the negative charge is spread over the ortho and para carbons and the carbon–halogen bond acquires partial double-bond character. This makes the bond shorter and stronger than the carbon–halogen bond of a haloalkane. Because of this, and because the sp2 ring carbon is more electronegative than an sp3 carbon, haloarenes are far less reactive towards nucleophilic substitution. Electron-withdrawing groups placed at the ortho or para positions reverse this by stabilising the intermediate formed on nucleophilic attack.",
    question:
      "(i) Why is the C–Cl bond length in chlorobenzene shorter than in CH3Cl?\n(ii) Why is the dipole moment of chlorobenzene lower than that of cyclohexyl chloride?\n(iii) Arrange in increasing order of reactivity towards nucleophilic substitution: chlorobenzene, p-nitrochlorobenzene, 2,4-dinitrochlorobenzene.\n(iv) Name the reaction and conditions by which chlorobenzene is converted to phenol.",
    answer: [
      {
        label: "(i)",
        text: "Two reasons act together. Resonance gives the bond **partial double-bond character**, and the ring carbon is **sp²** (33% s character) rather than sp³ (25%), so it holds the shared pair more tightly. The result is 169 pm against 177 pm.",
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
      {
        label: "(ii)",
        text: "The same resonance pushes electron density from chlorine **back into the ring**, partly cancelling the −I effect, and the bond is shorter. Both reduce the dipole: 1.69 D for chlorobenzene against 2.15 D for cyclohexyl chloride, where the sp³ carbon allows no such delocalisation.",
      },
      { label: "(iii)", equation: "chlorobenzene < p-nitrochlorobenzene < 2,4-dinitrochlorobenzene" },
      {
        text: "Each electron-withdrawing –NO2 group at an ortho or para position further stabilises the carbanion intermediate, so reactivity rises with the number of such groups.",
      },
      {
        label: "(iv)",
        text: "The **Dow process** — chlorobenzene is heated with aqueous NaOH at 623 K under 300 atm, and the sodium phenoxide formed is then acidified:",
      },
      { equations: ["C6H5Cl + NaOH ->[623 K][300 atm] C6H5ONa + NaCl", "C6H5ONa + HCl -> C6H5OH + NaCl"] },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "h6-l3",
    chapter: 6,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Methods of preparation",
    years: [2024, 2020],
    question:
      "(a) Write the equations for preparing an alkyl chloride from an alcohol using (i) SOCl2, (ii) PCl5, (iii) conc. HCl with anhydrous ZnCl2. Which is preferred and why?\n(b) Explain, with an equation, the Swarts reaction and the Finkelstein reaction.",
    answer: [
      { label: "(a)(i) Thionyl chloride", equation: "R–OH + SOCl2 -> R–Cl + SO2(g) + HCl(g)" },
      { label: "(a)(ii) Phosphorus pentachloride", equation: "R–OH + PCl5 -> R–Cl + POCl3 + HCl" },
      { label: "(a)(iii) Conc. HCl with anhydrous ZnCl2 (Lucas reagent)", equation: "R–OH + HCl ->[anhyd. ZnCl2] R–Cl + H2O" },
      {
        label: "Which is preferred",
        text: "**Thionyl chloride.** Both by-products, SO2 and HCl, are **gases** that escape from the reaction mixture, so the alkyl halide is left pure and needs no further separation. With PCl5 the liquid POCl3 must be separated, and the ZnCl2 route works well only for tertiary alcohols.",
      },
      {
        label: "(b) Swarts reaction",
        text: "An alkyl chloride or bromide is heated with a metallic fluoride — AgF, Hg2F2, CoF2 or SbF3 — to give the alkyl fluoride:",
      },
      { equation: "CH3–Br + AgF -> CH3–F + AgBr" },
      {
        label: "Finkelstein reaction",
        text: "An alkyl chloride or bromide is treated with sodium iodide in **dry acetone** to give the alkyl iodide:",
      },
      { equation: "R–Cl + NaI ->[dry acetone] R–I + NaCl" },
      {
        text: "NaI is soluble in dry acetone but NaCl and NaBr are not, so the by-product precipitates and Le Chatelier's principle drives the equilibrium to completion. Both reactions exist because direct halogenation with F2 is too violent and with I2 is reversible.",
      },
    ],
    keyPoint: "Swarts → fluorides. Finkelstein → iodides, driven by NaCl/NaBr precipitating.",
  },
  {
    id: "h6-l4",
    chapter: 6,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Optical isomerism",
    years: [2025, 2015],
    question:
      "(a) What is meant by optical activity? Define plane-polarised light, dextrorotatory and laevorotatory.\n(b) Explain, with the help of a diagram, why a racemic mixture is optically inactive.\n(c) 2-Bromobutane reacts with aqueous KOH. Predict the stereochemistry of the product if the reaction goes by (i) SN1, (ii) SN2.",
    answer: [
      {
        label: "(a) Optical activity",
        text: "The ability of a substance to **rotate the plane of plane-polarised light**. It arises when a molecule is chiral — non-superimposable on its mirror image, typically because a carbon carries four different groups.",
      },
      {
        points: [
          "**Plane-polarised light** — light whose vibrations occur in only one plane, obtained by passing ordinary light through a Nicol prism.",
          "**Dextrorotatory (d or +)** — rotates the plane to the **right** (clockwise).",
          "**Laevorotatory (l or −)** — rotates the plane to the **left** (anticlockwise).",
        ],
      },
      {
        label: "(b)",
        text: "A racemic mixture contains the two enantiomers in **exactly equal amounts**. Each rotates the plane by the same angle but in opposite directions, so the two rotations cancel and the net rotation is zero. The molecules are still individually chiral — the inactivity is a property of the mixture, and is called **external compensation**.",
      },
      { figure: { kind: "named", id: "butanol-enantiomers" } },
      {
        label: "(c)(i) By SN1",
        text: "The intermediate is a **planar carbocation**, open to attack from either face with equal probability. The product is therefore a **racemic mixture** of (R)- and (S)-butan-2-ol, and is optically inactive.",
      },
      { figure: { kind: "named", id: "sn1-mechanism" } },
      {
        label: "(c)(ii) By SN2",
        text: "The hydroxide attacks from the side **opposite** the bromine in one concerted step, so the configuration is **inverted** (Walden inversion). A single optically pure enantiomer of 2-bromobutane gives a single optically pure butan-2-ol of the opposite configuration.",
      },
      { figure: { kind: "named", id: "sn2-mechanism" } },
      {
        text: "In practice a secondary halide such as 2-bromobutane reacts by both paths at once, so the product is partly inverted and partly racemised.",
      },
    ],
  },
];
