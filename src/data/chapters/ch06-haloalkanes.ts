import type { Question } from "@/types";

/** Unit 6 — Haloalkanes and Haloarenes (6 marks). */
export const CH06: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "h6-m1",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Polyhalogen compounds",
    years: [2024, 2023],
    question: "Auto-oxidation of chloroform in air and light produces a poisonous gas known as",
    options: ["Phosphine", "Mustard gas", "Phosgene", "Tear gas"],
    correct: 2,
    answer: [
      { text: "**(c) Phosgene** (carbonyl chloride, COCl2), which is extremely toxic." },
      { equation: "2CHCl3 + O2 ->[light] 2COCl2 + 2HCl" },
      {
        text: "This is why chloroform is stored in **dark brown bottles filled to the brim** (to exclude air) and why about 1% ethanol is added — the ethanol converts any phosgene formed into harmless diethyl carbonate.",
      },
    ],
  },
  {
    id: "h6-m2",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2024],
    question: "Which alkyl halide from the given options will undergo an SN1 reaction fastest?",
    options: ["(CH3)3C–Br", "(CH3)2CH–Br", "CH3–CH2–Br", "CH3–Br"],
    correct: 0,
    answer: [
      {
        text: "**(a) (CH3)3C–Br.** The rate-determining step of an SN1 reaction is the formation of a carbocation, so the faster the halide can make a **stable** carbocation, the faster it reacts.",
      },
      { equation: "3° > 2° > 1° > CH3^+" },
      {
        text: "The tertiary carbocation is stabilised by the +I effect and hyperconjugation from three alkyl groups, so tert-butyl bromide is by far the fastest. The order for SN2 is exactly the **reverse**, because there steric hindrance dominates.",
      },
      { figure: { kind: "named", id: "sn1-mechanism" } },
    ],
    keyPoint: "SN1: 3° > 2° > 1°. SN2: 1° > 2° > 3°.",
  },
  {
    id: "h6-m3",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2025, 2023],
    question: "Alkyl halides undergoing nucleophilic bimolecular substitution involve",
    options: [
      "retention of configuration",
      "formation of a racemic mixture",
      "inversion of configuration",
      "no change in configuration",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) inversion of configuration.** In SN2 the nucleophile attacks from the side **opposite** the leaving group. The carbon passes through a planar transition state and the three remaining bonds flip over, like an umbrella in the wind.",
      },
      { text: "This is called **Walden inversion**. An optically pure substrate therefore gives a product of the opposite configuration." },
      { figure: { kind: "named", id: "sn2-mechanism" } },
    ],
  },
  {
    id: "h6-m4",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "SN1 and SN2",
    years: [2023],
    question: "Racemisation occurs in",
    options: [
      "SN1 reaction",
      "SN2 reaction",
      "neither SN1 nor SN2",
      "both SN1 and SN2",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) SN1.** The intermediate carbocation is **planar (sp²)**, so the nucleophile can attack with equal probability from either face. Half the product has the original configuration and half the inverted one, giving an optically inactive **racemic mixture**.",
      },
      { figure: { kind: "named", id: "sn1-mechanism" } },
      { text: "In practice there is often a slight excess of the inverted product, because the departing halide ion partly shields the face it left from." },
    ],
  },
  {
    id: "h6-m5",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Optical isomerism",
    years: [2022],
    question: "Which of the following is optically inactive?",
    options: [
      "(+)-Butan-2-ol",
      "(−)-Butan-2-ol",
      "(±)-Butan-2-ol",
      "(+)-2-Bromobutane",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) (±)-Butan-2-ol.** The (±) sign denotes a **racemic mixture** — an equimolar mixture of the (+) and (−) enantiomers. Each rotates plane-polarised light by the same angle but in opposite directions, so the rotations cancel exactly and the mixture is optically inactive.",
      },
      { text: "This is called **inactivity by external compensation** — the individual molecules are still chiral." },
      { figure: { kind: "named", id: "butanol-enantiomers" } },
    ],
  },
  {
    id: "h6-m6",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Optical isomerism",
    years: [2022],
    question: "Enantiomers differ only in",
    options: ["boiling point", "rotation of polarised light", "melting point", "solubility"],
    correct: 1,
    answer: [
      {
        text: "**(b) rotation of plane-polarised light.** Enantiomers are non-superimposable mirror images. They have **identical** physical properties — melting point, boiling point, density, solubility, refractive index — and identical chemical properties towards achiral reagents.",
      },
      {
        text: "They differ in exactly two ways: the **direction in which they rotate plane-polarised light** (equal magnitude, opposite sign), and their behaviour towards other chiral substances (which is why one enantiomer of a drug can be active and the other not).",
      },
    ],
  },
  {
    id: "h6-m7",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2022],
    question: "Which one of the following halides contains a C_sp2–X bond?",
    options: ["Allyl halide", "Alkyl halide", "Benzyl halide", "Vinyl halide"],
    correct: 3,
    answer: [
      {
        text: "**(d) Vinyl halide.** In CH2=CH–Cl the carbon bearing the halogen is part of the double bond and is therefore **sp² hybridised**. (Aryl halides such as chlorobenzene are the other sp² case.)",
      },
      {
        text: "In allyl (CH2=CH–CH2–X) and benzyl (C6H5–CH2–X) halides the halogen sits on an **sp³** carbon _(next to)_ the unsaturation — which is why they are highly reactive, unlike vinyl and aryl halides.",
      },
      { figure: { kind: "named", id: "allyl-vinyl-benzyl" } },
    ],
  },
  {
    id: "h6-m8",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Optical isomerism",
    years: [2023],
    question: "Which of the following molecules has a chiral centre correctly labelled with an asterisk (*)?",
    options: [
      "CH3–C*H(Br)–CH3",
      "CH3–C*H(Cl)–CH2Br",
      "HOCH2–C*H(OH)–CH2OH",
      "CH3–C*Br2–CH3",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) CH3–C*H(Cl)–CH2Br.** A chiral centre must carry **four different groups**. Here they are –CH3, –H, –Cl and –CH2Br — all different. ✓",
      },
      {
        points: [
          "(a) has two identical –CH3 groups — not chiral.",
          "(c) has two identical –CH2OH groups — not chiral.",
          "(d) has two identical –Br and two identical –CH3 — not chiral.",
        ],
      },
      { figure: { kind: "named", id: "chiral-centre" } },
    ],
  },
  {
    id: "h6-m9",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2020],
    question: "Out of CH3CH2CH2Cl and CH2=CH–CH2–Cl, which one is more reactive towards SN1?",
    options: [
      "CH3CH2CH2Cl",
      "CH2=CH–CH2–Cl",
      "Both equally",
      "Neither reacts by SN1",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b) allyl chloride, CH2=CH–CH2–Cl.** On ionisation it gives an **allyl carbocation**, which is stabilised by resonance — the positive charge is delocalised over two carbons:",
      },
      { equation: "CH2=CH–CH2^+ <-> ^+CH2–CH=CH2" },
      {
        text: "The n-propyl cation has no such stabilisation. Since the rate-determining step of SN1 is carbocation formation, allyl chloride reacts much faster.",
      },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "h6-ar1",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2024],
    question:
      "**Assertion (A):** Inversion of configuration is observed in an SN2 reaction.\n**Reason (R):** The reaction proceeds through the formation of a carbocation.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Inversion (Walden inversion) certainly does occur in SN2 — but **no carbocation is formed**. SN2 is a single-step, concerted process: the nucleophile attacks from the back as the leaving group departs, passing through a five-coordinate **transition state**, not an intermediate.",
      },
      { text: "It is the **SN1** mechanism that involves a carbocation intermediate — and that gives racemisation, not inversion." },
      { figure: { kind: "named", id: "sn2-mechanism" } },
    ],
  },
  {
    id: "h6-ar2",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2025],
    question:
      "**Assertion (A):** The boiling points of alkyl halides decrease in the order RI > RBr > RCl > RF.\n**Reason (R):** The boiling points of alkyl halides depend on the strength of the van der Waals forces between molecules.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Going down the halogen group the halogen atom becomes larger and its electron cloud more **polarisable**, so the van der Waals (London dispersion) forces between molecules become stronger.",
      },
      { text: "Stronger intermolecular forces need more energy to overcome, so the boiling point rises: RF < RCl < RBr < RI." },
      {
        text: "The same reasoning explains why, for the same halogen, boiling point rises with chain length, and why a branched isomer boils lower than its straight-chain counterpart (branching reduces the surface area of contact).",
      },
    ],
  },
  {
    id: "h6-ar3",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2022, 2023],
    question:
      "**Assertion (A):** Chlorobenzene is resistant to nucleophilic substitution.\n**Reason (R):** The C–Cl bond in chlorobenzene acquires partial double-bond character due to resonance.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** The lone pair on chlorine is delocalised into the ring, so the C–Cl bond gains **partial double-bond character**. It is therefore shorter (169 pm vs 177 pm in CH3Cl) and much stronger, and far harder for a nucleophile to break.",
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
      {
        text: "Two further reasons reinforce it: the carbon is **sp²** (more electronegative, holds the halogen more tightly), and the electron-rich π cloud of the ring **repels** the incoming nucleophile.",
      },
    ],
  },

  /* ---------------- Very short ---------------- */
  {
    id: "h6-v1",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Nomenclature",
    years: [2013],
    question: "Write the IUPAC name of CH3–CH(Cl)–CH2–CH=CH2.",
    answer: [
      {
        text: "**4-Chloropent-1-ene.** Number the chain so that the double bond gets the lowest locant (C-1 at the =CH2 end); the chlorine then falls on C-4.",
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH2", bond: 2 },
            { label: "CH", bond: 1 },
            { label: "CH2", bond: 1 },
            { label: "CH", down: "Cl", bond: 1, highlight: true },
            { label: "CH3" },
          ],
          caption: "4-Chloropent-1-ene",
        },
      },
    ],
  },
  {
    id: "h6-v2",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Nucleophilic substitution",
    years: [2013],
    question: "What happens when CH3Br is treated with KCN?",
    answer: [
      { text: "The cyanide ion substitutes the bromide by an SN2 mechanism, giving a **nitrile**:" },
      { equation: "CH3Br + KCN ->[ethanol] CH3CN + KBr" },
      {
        text: "KCN is **ionic**, so the free cyanide ion attacks through its **carbon** (the more nucleophilic end), giving methyl cyanide (ethanenitrile) as the major product. With AgCN, which is covalent, attack occurs through **nitrogen** instead and the isocyanide CH3NC is the main product.",
      },
    ],
  },
  {
    id: "h6-v3",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2019, 2018],
    question:
      "Out of chlorobenzene and p-nitrochlorobenzene, which is more reactive towards nucleophilic substitution and why?",
    answer: [
      {
        text: "**p-Nitrochlorobenzene.** The nitro group is strongly **electron-withdrawing** (−R and −I). At the ortho or para position it pulls electron density away from the carbon bearing the chlorine, making it more electrophilic, and — crucially — it **stabilises the negatively charged intermediate** (the Meisenheimer complex) formed when the nucleophile attacks, by delocalising the charge onto its own oxygen atoms.",
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Cl", highlight: true },
            { pos: 4, label: "NO2" },
          ],
          caption: "p-Nitrochlorobenzene — the –NO2 group activates the ring toward nucleophilic attack",
        },
      },
      { text: "A nitro group at the **meta** position gives no such stabilisation and has almost no activating effect." },
    ],
  },
  {
    id: "h6-v4",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2018],
    question:
      "Out of chlorobenzene and benzyl chloride, which is hydrolysed more easily by aqueous NaOH and why?",
    answer: [
      {
        text: "**Benzyl chloride.** Its chlorine sits on an **sp³** carbon outside the ring, and on ionisation it gives a **benzyl carbocation** that is strongly stabilised by resonance with the ring.",
      },
      {
        text: "In chlorobenzene the chlorine is attached directly to an **sp²** ring carbon, the C–Cl bond has partial double-bond character, and the π cloud repels the incoming OH⁻. Chlorobenzene needs 623 K and 300 atm (the Dow process) to be hydrolysed at all.",
      },
      { figure: { kind: "named", id: "allyl-vinyl-benzyl" } },
    ],
  },
  {
    id: "h6-v5",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "SN1 and SN2",
    years: [2019],
    question: "Write one stereochemical difference between SN1 and SN2 reactions.",
    answer: [
      {
        text: "**SN2** proceeds with complete **inversion of configuration** (Walden inversion), because the nucleophile attacks from the side opposite the leaving group.",
      },
      {
        text: "**SN1** proceeds through a planar carbocation which can be attacked from either face, giving a **racemic mixture** — roughly equal amounts of the retained and inverted products.",
      },
    ],
  },

  /* ---------------- Short ---------------- */
  {
    id: "h6-s1",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2013, 2025, 2016],
    question: "Chlorobenzene is extremely unreactive towards nucleophilic substitution. Give two reasons.",
    answer: [
      {
        label: "1. Resonance",
        text: "The lone pair on chlorine is delocalised into the benzene ring, giving the C–Cl bond **partial double-bond character**. The bond is shorter (169 pm) and stronger than the C–Cl bond in a haloalkane (177 pm), so it is much harder to break.",
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
      {
        label: "2. Hybridisation of carbon",
        text: "The carbon holding the halogen is **sp²** (33% s character) rather than sp³ (25%). The greater s character makes it more electronegative, so it holds the shared electron pair more tightly and the bond is stronger and shorter.",
      },
      {
        label: "Further reasons",
        points: [
          "**Repulsion:** the electron-rich π cloud of the ring repels the approaching nucleophile.",
          "**Instability of the intermediate:** the carbanion formed on nucleophilic attack is unstable unless electron-withdrawing groups are present.",
        ],
      },
      { figure: { kind: "named", id: "haloalkane-vs-haloarene" } },
    ],
    keyPoint: "Resonance + sp² carbon + π-cloud repulsion = an unreactive C–X bond.",
  },
  {
    id: "h6-s2",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2023],
    question:
      "Why is the boiling point of o-dichlorobenzene higher than that of p-dichlorobenzene, but the melting point of the para isomer higher than that of the ortho isomer?",
    answer: [
      {
        label: "Boiling point",
        text: "Boiling point depends on **dipole moment**. In the **ortho** isomer the two C–Cl bond dipoles are at 60° to one another and reinforce, giving a net dipole moment; the para isomer has its two dipoles exactly opposed, so they cancel and μ = 0. The greater dipole–dipole attraction in the ortho isomer means it boils higher.",
      },
      {
        label: "Melting point",
        text: "Melting point depends on how well the molecules **pack in the crystal lattice**. The **para** isomer is highly **symmetrical**, so its molecules fit closely and neatly into the lattice, and a great deal of energy is needed to break it. The ortho isomer packs poorly, so it melts lower.",
      },
      { figure: { kind: "named", id: "dichlorobenzenes" } },
    ],
  },
  {
    id: "h6-s3",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Nucleophilic substitution",
    years: [2024],
    question:
      "Account for the following:\n(a) Haloalkanes react with KCN to form alkyl cyanides as the main product, whereas with AgCN they form isocyanides.\n(b) Allyl chloride is highly reactive but vinyl chloride is unreactive towards nucleophilic substitution.\n(c) Thionyl chloride is preferred for preparing alkyl chlorides from alcohols.",
    answer: [
      {
        label: "(a)",
        text: "Cyanide is an **ambident nucleophile** — it can attack through carbon or through nitrogen.",
      },
      {
        points: [
          "**KCN is ionic**, so free CN⁻ ions exist in solution. The **carbon** end is the more nucleophilic, so attack occurs through C, giving the **cyanide** R–CN.",
          "**AgCN is largely covalent**, so the cyanide is not free; only the **nitrogen** lone pair is available for donation, giving the **isocyanide** R–NC.",
        ],
      },
      { equations: ["R–X + KCN -> R–CN + KX", "R–X + AgCN -> R–NC + AgX"] },
      {
        label: "(b)",
        text: "**Allyl chloride** ionises to give a resonance-stabilised **allyl carbocation**, so SN1 is fast. **Vinyl chloride** has its chlorine on an **sp² carbon**, and the chlorine lone pair is delocalised into the double bond, giving the C–Cl bond partial double-bond character — so it is short, strong and very hard to break.",
      },
      { figure: { kind: "named", id: "allyl-vinyl-benzyl" } },
      {
        label: "(c)",
        text: "Because both by-products are **gases** that simply escape, leaving a pure alkyl halide with no need for further separation:",
      },
      { equation: "R–OH + SOCl2 -> R–Cl + SO2(g) + HCl(g)" },
      { text: "This is known as the Darzens procedure." },
    ],
  },
  {
    id: "h6-s4",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2024, 2015, 2017],
    question:
      "(a) Which compound in the pair CH3CH2I and CH3CH2Br undergoes SN2 faster and why?\n(b) Arrange 1-bromopentane, 2-bromopentane and 2-bromo-2-methylbutane in increasing order of SN1 reactivity.",
    answer: [
      {
        label: "(a)",
        text: "**CH3CH2I.** Iodide is the **better leaving group**: the C–I bond is the weakest of the carbon–halogen bonds (largest halogen, poorest orbital overlap), and I⁻ is the most stable anion because its large size spreads the charge. So the order of reactivity is R–I > R–Br > R–Cl > R–F.",
      },
      {
        label: "(b)",
        text: "SN1 rate follows carbocation stability, so it increases with the degree of substitution:",
      },
      { equation: "1-bromopentane (1°) < 2-bromopentane (2°) < 2-bromo-2-methylbutane (3°)" },
      {
        text: "For **SN2** the order would be exactly reversed, because there the bottleneck is steric access to the carbon.",
      },
    ],
  },
  {
    id: "h6-s5",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Optical isomerism",
    years: [2025, 2015],
    question:
      "(a) Define (i) enantiomers, (ii) racemic mixture, (iii) retention of configuration.\n(b) Why is a racemic mixture optically inactive?",
    answer: [
      {
        label: "(i) Enantiomers",
        text: "Stereoisomers that are **non-superimposable mirror images** of each other. They have identical physical and chemical properties except that they rotate plane-polarised light by equal amounts in opposite directions.",
      },
      { figure: { kind: "named", id: "butanol-enantiomers" } },
      {
        label: "(ii) Racemic mixture",
        text: "An **equimolar (50:50) mixture of a pair of enantiomers**, written (±) or dl. It is optically inactive.",
      },
      {
        label: "(iii) Retention of configuration",
        text: "The preservation of the **same spatial arrangement of groups** around a chiral centre before and after a reaction — the bonds to the stereocentre are not broken, or are broken and reformed on the same side.",
      },
      {
        label: "(b)",
        text: "The two enantiomers rotate plane-polarised light by exactly the **same angle in opposite directions**. In a 50:50 mixture the two rotations cancel completely, so the net rotation is zero. This is called **external compensation**.",
      },
    ],
  },
  {
    id: "h6-s6",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2015],
    question:
      "Give reasons: (a) n-Butyl bromide has a higher boiling point than tert-butyl bromide. (b) Alkyl halides, though polar, are insoluble in water.",
    answer: [
      {
        label: "(a)",
        text: "Both are C4H9Br, so they have the same molar mass. But **n-butyl bromide is a straight chain**, so its molecules have a larger surface area of contact and stronger van der Waals forces. **tert-Butyl bromide is highly branched** and nearly spherical, which minimises contact area, so its intermolecular forces are weaker and it boils lower.",
      },
      {
        label: "(b)",
        text: "To dissolve in water, a solute must be able to **break the hydrogen bonds between water molecules and form new ones of comparable strength**. Alkyl halides cannot form hydrogen bonds with water — they have no O–H or N–H — and the energy released by the weak new dipole–dipole interactions is not enough to compensate. They are, however, soluble in organic solvents, where the forces broken and formed are of similar strength.",
      },
    ],
  },
  {
    id: "h6-s7",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Conversions",
    years: [2016, 2025],
    question:
      "How do you convert: (i) chlorobenzene to biphenyl, (ii) propene to 1-iodopropane, (iii) 2-bromobutane to but-2-ene?",
    answer: [
      { label: "(i) Fittig reaction", equation: "2C6H5Cl + 2Na ->[dry ether] C6H5–C6H5 + 2NaCl" },
      {
        label: "(ii) Anti-Markovnikov addition, then Finkelstein",
        text: "Direct addition of HI would give 2-iodopropane, so use peroxide with HBr first:",
      },
      {
        equations: [
          "CH3CH=CH2 + HBr ->[peroxide] CH3CH2CH2Br",
          "CH3CH2CH2Br + NaI ->[dry acetone] CH3CH2CH2I + NaBr",
        ],
      },
      {
        text: "The second step is the **Finkelstein reaction**: it works because NaBr is insoluble in dry acetone and precipitates out, driving the equilibrium forward.",
      },
      { label: "(iii) β-elimination (dehydrohalogenation)", equation: "CH3CH(Br)CH2CH3 + KOH ->[alcohol][Δ] CH3CH=CHCH3 + KBr + H2O" },
      {
        text: "By **Saytzeff's rule** the more substituted alkene predominates, so but-2-ene is the major product rather than but-1-ene. Note that **alcoholic** KOH gives elimination, while **aqueous** KOH would give substitution to the alcohol.",
      },
    ],
    keyPoint: "Alcoholic KOH → elimination (alkene). Aqueous KOH → substitution (alcohol).",
  },
  {
    id: "h6-s8",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Haloarenes",
    years: [2025],
    question:
      "Why does p-chloronitrobenzene react with aqueous NaOH at 443 K to give p-nitrophenol, whereas chlorobenzene requires 623 K and 300 atm?",
    answer: [
      {
        text: "The **nitro group at the para position** is strongly electron-withdrawing. When OH⁻ attacks the carbon bearing the chlorine, a negatively charged intermediate (a carbanion) is formed. The –NO2 group **delocalises that negative charge onto its own oxygen atoms**, so the intermediate is far more stable and the activation energy is much lower.",
      },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Cl", highlight: true },
            { pos: 4, label: "NO2" },
          ],
          caption: "The –NO2 group at the para position stabilises the intermediate carbanion",
        },
      },
      {
        text: "Chlorobenzene has no such stabilising group, so the intermediate is very unstable and forcing conditions (623 K, 300 atm — the Dow process) are needed. Adding more nitro groups makes it easier still: 2,4-dinitrochlorobenzene reacts at 368 K and 2,4,6-trinitrochlorobenzene with warm water alone.",
      },
    ],
  },
  {
    id: "h6-s9",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Reactions",
    years: [2023],
    question:
      "Write equations for: (a) oxidation of chloroform by air and light, (b) reaction of chlorobenzene with CH3Cl in the presence of anhydrous AlCl3.",
    answer: [
      { label: "(a) Auto-oxidation", equation: "2CHCl3 + O2 ->[light] 2COCl2 + 2HCl" },
      { text: "The product phosgene (COCl2) is highly poisonous — hence the dark bottles and the added ethanol." },
      { label: "(b) Friedel–Crafts alkylation", text: "Chlorine is o/p-directing, so a mixture results:" },
      { equation: "C6H5Cl + CH3Cl ->[anhyd. AlCl3] o-ClC6H4CH3 + p-ClC6H4CH3 + HCl" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "Cl" },
            { pos: 4, label: "CH3", highlight: true },
          ],
          caption: "4-Chlorotoluene — the major (para) product",
        },
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "h6-c1",
    chapter: 6,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "SN1 and SN2",
    years: [2023],
    passage:
      "Nucleophilic substitution of haloalkanes can proceed by either of two mechanisms. The SN2 route is a single concerted step in which the nucleophile attacks the carbon from the side opposite the leaving group; both reactants appear in the rate law, so the reaction is second order, and the configuration at the carbon is inverted. The SN1 route has two steps: a slow ionisation to a planar carbocation, followed by rapid attack by the nucleophile. Only the halide appears in the rate law, so the reaction is first order, and because the carbocation is planar the product is racemic. Steric bulk slows SN2; carbocation stability speeds up SN1.",
    question:
      "(i) Write the order of reactivity of primary, secondary and tertiary halides towards SN2, with a reason.\n(ii) Which mechanism gives a racemic product, and why?\n(iii) What kind of solvent favours SN1?\n(iv) Why does a tertiary halide practically never react by SN2?",
    answer: [
      {
        label: "(i)",
        text: "**1° > 2° > 3°.** SN2 requires the nucleophile to reach the carbon from the back. The more alkyl groups attached, the more **steric hindrance** blocks that approach, and the more crowded the five-coordinate transition state becomes. Methyl halides react fastest of all.",
      },
      {
        label: "(ii)",
        text: "**SN1.** Its intermediate carbocation is **planar and sp² hybridised**, so the nucleophile attacks with equal probability from either face. Equal amounts of the two enantiomers are produced — a racemic mixture.",
      },
      { figure: { kind: "named", id: "sn1-mechanism" } },
      {
        label: "(iii)",
        text: "A **polar protic solvent** (water, alcohols, aqueous acetone). It stabilises the carbocation and the leaving halide ion by solvation, lowering the energy of the rate-determining ionisation step. Polar aprotic solvents (acetone, DMSO) favour SN2 instead, because they leave the nucleophile 'naked' and reactive.",
      },
      {
        label: "(iv)",
        text: "The three bulky alkyl groups **physically block** the backside approach of the nucleophile, so the SN2 transition state is prohibitively high in energy. At the same time the tertiary carbocation is very stable, so SN1 is easy — the tertiary halide simply takes the other route.",
      },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "h6-l1",
    chapter: 6,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "SN1 and SN2",
    years: [2024, 2023],
    question:
      "(a) Write the mechanism of the SN2 reaction of hydroxide ion with bromomethane, and explain the stereochemical outcome.\n(b) Write the mechanism of the SN1 hydrolysis of tert-butyl bromide.\n(c) Give three points of difference between SN1 and SN2.",
    answer: [
      {
        label: "(a) SN2 mechanism",
        text: "One concerted step. The hydroxide ion attacks the carbon from the side **opposite** the bromine; the C–O bond forms as the C–Br bond breaks, through a transition state in which carbon is bonded to five groups and the three hydrogens lie in a plane.",
      },
      { equation: "HO^− + CH3Br -> [HO···CH3···Br]^{‡} -> CH3OH + Br^−" },
      { equation: "$\\text{Rate} = k[\\text{CH}_3\\text{Br}][\\text{OH}^-]$ — second order" },
      { figure: { kind: "named", id: "sn2-mechanism" } },
      {
        text: "**Stereochemistry:** because attack is from the back, the other three bonds are pushed through the plane like an umbrella turning inside out. The product has the **inverted** configuration — Walden inversion.",
      },
      {
        label: "(b) SN1 mechanism",
        text: "Two steps.",
      },
      {
        equations: [
          "Step 1 (slow): (CH3)3C–Br -> (CH3)3C^+ + Br^−",
          "Step 2 (fast): (CH3)3C^+ + H2O -> (CH3)3C–OH2^+ -> (CH3)3C–OH + H^+",
        ],
      },
      { equation: "$\\text{Rate} = k[(\\text{CH}_3)_3\\text{CBr}]$ — first order" },
      { figure: { kind: "named", id: "sn1-mechanism" } },
      {
        text: "The carbocation is planar, so attack occurs from both faces and the product is **racemic**.",
      },
      {
        label: "(c) Differences",
        table: [
          ["SN1", "SN2"],
          ["Two steps, via a carbocation intermediate", "One concerted step, via a transition state"],
          ["First order: rate = k[RX]", "Second order: rate = k[RX][Nu]"],
          ["Reactivity 3° > 2° > 1° (carbocation stability)", "Reactivity 1° > 2° > 3° (steric hindrance)"],
          ["Gives a racemic mixture", "Gives inversion of configuration"],
          ["Favoured by polar protic solvents", "Favoured by polar aprotic solvents"],
        ],
      },
    ],
  },
  {
    id: "h6-l2",
    chapter: 6,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Haloarenes",
    years: [2025, 2016],
    question:
      "(a) Explain, with resonance structures, why the C–Cl bond in chlorobenzene is shorter than in CH3Cl.\n(b) Why is the dipole moment of chlorobenzene lower than that of cyclohexyl chloride?\n(c) Write the products of: (i) chlorobenzene + Cl2/anhydrous FeCl3, (ii) chlorobenzene + Na/dry ether, (iii) chloroform + conc. HNO3.",
    answer: [
      {
        label: "(a)",
        text: "In chlorobenzene the lone pair on chlorine overlaps with the π system of the ring, so the molecule is a resonance hybrid of four contributing structures. In three of them the C–Cl bond is written as a **double** bond, so in the hybrid it has **partial double-bond character**.",
      },
      { figure: { kind: "named", id: "chlorobenzene-resonance" } },
      {
        text: "A partial double bond is shorter and stronger than a single bond. Additionally the ring carbon is **sp²** (33% s character) rather than sp³ (25%), and greater s character means a shorter, stronger bond. The result: 169 pm in chlorobenzene against 177 pm in CH3Cl.",
      },
      { figure: { kind: "named", id: "haloalkane-vs-haloarene" } },
      {
        label: "(b)",
        text: "Dipole moment depends on both the magnitude of the charge separation and the bond length. In chlorobenzene the resonance described above pushes electron density from chlorine **back into the ring**, partly opposing the −I effect. The C–Cl bond is also shorter. Both effects reduce the dipole moment — 1.69 D for chlorobenzene against 2.15 D for cyclohexyl chloride, where the carbon is sp³ and no resonance is possible.",
      },
      { label: "(c)(i) Electrophilic substitution — Cl is o/p directing", equation: "C6H5Cl + Cl2 ->[anhyd. FeCl3] o-C6H4Cl2 + p-C6H4Cl2 + HCl" },
      { figure: { kind: "named", id: "dichlorobenzenes" } },
      { label: "(c)(ii) Fittig reaction", equation: "2C6H5Cl + 2Na ->[dry ether] C6H5–C6H5 + 2NaCl" },
      { label: "(c)(iii) Nitration of chloroform", equation: "CHCl3 + HNO3 -> CCl3NO2 + H2O" },
      { text: "The product, trichloronitromethane, is **chloropicrin** — used as an insecticide and once as a war gas." },
    ],
  },
];
