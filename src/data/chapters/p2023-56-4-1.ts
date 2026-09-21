import type { Question } from "@/types";

/**
 * CBSE 2023 Main, paper 56/4/1 Set-1, with answers from the official Marking
 * Scheme bound into the same PDF.
 *
 * Questions repeating an earlier 2023 paper are left out, as is Q3, whose four
 * options are drawn Haworth projections of glucose anomers — the answer turns
 * entirely on which way one -OH points, so it cannot be posed honestly in text
 * and belongs with the structure work rather than here.
 */
export const P2023_5641: Question[] = [
  /* ---------------------------------------------------------------- */
  /* SECTION A — MCQ, 1 mark each                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "p23d-1",
    chapter: 1,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "van't Hoff factor",
    years: [2023],
    question:
      "A compound undergoes complete tetramerization in a given organic solvent. The van't Hoff factor 'i' is :",
    options: ["4.0", "0.25", "0.125", "2.0"],
    correct: 1,
    answer: [
      { text: "**0.25**" },
      {
        text: "The van't Hoff factor compares the particles actually present with the particles expected:",
      },
      {
        equation:
          "$i = \\dfrac{\\text{number of particles after association or dissociation}}{\\text{number of particles before}}$",
      },
      {
        text: "**Tetramerization** means four molecules combine into one:",
      },
      { equation: "4A -> A4" },
      {
        text: "Start with 4 particles, end with 1, and the association is **complete**, so:",
      },
      { equation: "$i = \\dfrac{1}{4} = 0.25$" },
      {
        text: "Option (a) is the trap — 4.0 would be the answer for complete **dissociation** into four ions, which is the opposite process. The rule to hold onto is that **i < 1 signals association** and **i > 1 signals dissociation**.",
      },
      {
        text: "In general, complete association of n molecules gives i = 1/n. Benzoic acid dimerising in benzene is the classic case, with i tending to 0.5.",
      },
    ],
    keyPoint: "Complete association of n molecules gives i = 1/n; i < 1 always means association.",
  },
  {
    id: "p23d-2",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Zero order kinetics",
    years: [2023],
    question:
      "The half-life for a zero order reaction equals : (where R is the initial concentration)",
    options: ["2k / R", "$\\frac{1}{2}\\,k/R^2$", "$R^2 / 2k$", "R / 2k"],
    correct: 3,
    answer: [
      { text: "**R / 2k**, that is [R]0 / 2k." },
      {
        text: "For a zero order reaction the rate is constant, so the concentration falls in a straight line:",
      },
      { equation: "$[R] = [R]_0 - kt$" },
      {
        text: "The half-life is the time for the concentration to fall to half its initial value, so put [R] = [R]0/2:",
      },
      { equation: "$\\dfrac{[R]_0}{2} = [R]_0 - k\\,t_{1/2}$" },
      { equation: "$k\\,t_{1/2} = \\dfrac{[R]_0}{2} \\;\\Rightarrow\\; t_{1/2} = \\dfrac{[R]_0}{2k}$" },
      {
        text: "The striking feature is that a zero order half-life **depends on the initial concentration** — start with twice as much and it takes twice as long. That is quite unlike a **first order** reaction, where t½ = 0.693/k is completely independent of concentration.",
      },
      {
        table: [
          ["Order", "Half-life", "Depends on [R]0?"],
          ["0", "**[R]0 / 2k**", "Yes, directly proportional"],
          ["1", "0.693 / k", "**No**"],
          ["2", "1 / (k[R]0)", "Yes, inversely proportional"],
        ],
      },
    ],
  },
  {
    id: "p23d-4",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Group 12 elements",
    years: [2023],
    question:
      "The ions of metals of Group 12 (Zn, Cd and Hg) have completely filled d orbitals and so they :",
    options: [
      "behave like semiconductors",
      "are very high melting solids",
      "do not behave like transition metals",
      "behave like superconductors",
    ],
    correct: 2,
    answer: [
      { text: "**Do not behave like transition metals.**" },
      {
        text: "A transition element needs a **partially filled d subshell** in the atom or in one of its stable ions. Zn^2+, Cd^2+ and Hg^2+ are all **d^10** — completely filled — so the defining property is absent.",
      },
      {
        text: "Every characteristic of transition metals follows from that partly filled subshell, and every one of them is therefore missing here:",
      },
      {
        table: [
          ["Transition metal property", "Why it needs a partly filled d subshell", "Group 12?"],
          ["Coloured compounds", "d–d transitions need an electron and a vacancy", "**No** — white or colourless"],
          ["Paramagnetism", "Needs unpaired d electrons", "**No** — diamagnetic"],
          ["Variable oxidation states", "Needs d electrons available to lose", "**No** — essentially +2 only"],
          ["Catalytic activity", "Needs variable oxidation states", "**No**"],
          ["High melting point", "d electrons strengthen metallic bonding", "**No** — mercury is liquid"],
        ],
      },
      {
        text: "Option (b) is exactly backwards and is worth noting: these metals have the **lowest** melting points in their rows, because only the s electrons contribute to metallic bonding. Mercury is famously liquid at room temperature.",
      },
    ],
  },
  {
    id: "p23d-6",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Elimination reactions",
    years: [2023],
    question:
      "The reaction of 1-phenyl-2-chloropropane with alcoholic KOH gives mainly :",
    options: [
      "1-phenylpropene",
      "3-phenylpropene",
      "1-phenylpropan-3-ol",
      "1-phenylpropan-2-ol",
    ],
    correct: 0,
    answer: [
      { text: "**1-Phenylpropene.**" },
      {
        text: "**Alcoholic** KOH means **elimination**, not substitution, which rules out (c) and (d) straight away — aqueous KOH would have been needed for an alcohol.",
      },
      {
        text: "The substrate is C6H5–CH2–CHCl–CH3. Chlorine sits on C-2, and there are β-hydrogens on **both** sides, so two alkenes are possible:",
      },
      {
        table: [
          ["Remove H from", "Alkene formed", "Stability"],
          ["**The benzylic CH2**", "**C6H5–CH=CH–CH3**, 1-phenylpropene", "Double bond **conjugated with the ring**"],
          ["The terminal CH3", "C6H5–CH2–CH=CH2, 3-phenylpropene", "Isolated double bond"],
        ],
      },
      {
        text: "The conjugated product wins decisively. Extending the π system into the benzene ring lowers the energy of the alkene substantially — far more than the usual Saytzeff preference for the more substituted double bond, and here both effects point the same way.",
      },
      {
        text: "This is the general principle: whenever elimination can place a double bond **in conjugation with an aromatic ring**, that is the major product.",
      },
    ],
    keyPoint: "Elimination prefers the alkene conjugated with the ring over the merely more substituted one.",
  },
  {
    id: "p23d-7",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Cleavage of ethers",
    years: [2023],
    question: "When diethyl ether is heated with excess of HI, it produces :",
    options: ["ethanol", "iodoform", "methyl iodide", "ethyl iodide"],
    correct: 3,
    answer: [
      { text: "**Ethyl iodide** — two molecules of it." },
      {
        text: "Ethers are cleaved by hydrogen halides, and HI is the most effective because iodide is the best nucleophile of the halides. With a **limited** amount of acid the reaction stops after one cleavage:",
      },
      { equation: "C2H5–O–C2H5 + HI -> C2H5–I + C2H5–OH" },
      {
        text: "But the question specifies **excess HI**, and the ethanol produced is itself attacked:",
      },
      { equation: "C2H5–OH + HI -> C2H5–I + H2O" },
      { equation: "Overall: C2H5–O–C2H5 + 2HI -> 2C2H5–I + H2O" },
      {
        text: "So the only organic product is **ethyl iodide**. Option (a) is what you would get with limited HI, which is exactly the distinction the word \"excess\" is testing.",
      },
      {
        label: "The rule for unsymmetrical ethers",
        text: "The halide attacks the **less hindered** alkyl group, so CH3–O–C2H5 gives methyl iodide and ethanol. The exception is an ether with a **tertiary** group, where the stable tertiary carbocation forms instead and the halide ends up on the bulky side.",
      },
    ],
  },
  {
    id: "p23d-8",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Reduction of nitriles",
    years: [2023],
    question: "The reduction of ethanenitrile with sodium and alcohol gives :",
    options: ["1-aminopropane", "1-aminoethane", "Ethanoic acid", "Ethanamide"],
    correct: 1,
    answer: [
      { text: "**1-Aminoethane** (ethanamine, ethylamine), CH3CH2NH2." },
      {
        text: "Sodium in alcohol is **Mendius reduction**, and it reduces the –C≡N group to –CH2–NH2 by adding four hydrogen atoms:",
      },
      { equation: "CH3–C≡N ->[Na / C2H5OH] CH3–CH2–NH2" },
      {
        label: "Count the carbons",
        text: "Ethanenitrile is CH3CN, with **two** carbons — the methyl carbon and the nitrile carbon. Reduction **keeps** the nitrile carbon, converting it into the CH2 that bears the nitrogen. So the amine also has two carbons.",
      },
      {
        text: "Option (a), 1-aminopropane, has three carbons and would need one to appear from nowhere. Options (c) and (d) are **oxidation or hydrolysis** products, not reduction products.",
      },
      {
        text: "LiAlH4 or catalytic hydrogenation over nickel do the same job. Contrast this with **Hoffmann bromamide degradation**, which starts from an amide and *loses* a carbon — the two routes go in opposite directions on chain length, and questions often turn on which is which.",
      },
    ],
  },
  {
    id: "p23d-9",
    chapter: 2,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Faraday's laws",
    years: [2023],
    question:
      "How many Faradays are required to reduce 1 mol of MnO4^− to Mn^2+ ?",
    options: ["4", "3", "6", "5"],
    correct: 3,
    answer: [
      { text: "**5 Faradays.**" },
      {
        label: "Step 1 — find the change in oxidation state",
        text: "In MnO4^−, manganese is **+7**: x + 4(−2) = −1 gives x = +7. The product Mn^2+ is **+2**.",
      },
      { equation: "$+7 \\longrightarrow +2 \\quad\\text{is a gain of }\\mathbf{5}\\text{ electrons}$" },
      { label: "Step 2 — convert to faradays" },
      { equation: "MnO4^− + 8H^+ + 5e^− -> Mn^2+ + 4H2O" },
      {
        text: "One mole of MnO4^− needs **5 moles of electrons**, and one mole of electrons is one **faraday**. So 5 F are required — that is 5 × 96500 = **482500 C**.",
      },
      {
        text: "This is the reduction that underlies every permanganate titration in acidic medium, and the factor of 5 is what makes KMnO4 such an efficient oxidising agent per mole.",
      },
      {
        text: "Note the medium matters: in **neutral or faintly alkaline** solution MnO4^− is reduced only to MnO2, a 3-electron change, so 3 F would be needed instead.",
      },
    ],
  },
  {
    id: "p23d-10",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Order of reaction",
    years: [2023],
    question:
      "In a reaction, the initial concentration of the reactants increases four fold and the rate becomes sixteen times its initial value. The order of the reaction is :",
    options: ["2.0", "3.5", "1.5", "2.5"],
    correct: 0,
    answer: [
      { text: "**2.0 — second order.**" },
      {
        text: "For a reaction of order n:",
      },
      { equation: "$\\text{Rate} = k[A]^n$" },
      {
        text: "Multiplying the concentration by 4 multiplies the rate by 4^n, and we are told that factor is 16:",
      },
      { equation: "$4^n = 16 = 4^2 \\;\\Rightarrow\\; n = 2$" },
      {
        text: "A quick way to see it without algebra: 16 is the **square** of 4, so the exponent must be 2.",
      },
      {
        table: [
          ["If concentration ×4, rate becomes", "Order"],
          ["Unchanged", "0"],
          ["×4", "1"],
          ["**×16**", "**2**"],
          ["×64", "3"],
          ["×2", "0.5"],
        ],
      },
      {
        text: "The general method, useful when the numbers are not neat, is to take logarithms: n = log(rate ratio) / log(concentration ratio) = log 16 / log 4 = 2.",
      },
    ],
  },
  {
    id: "p23d-12",
    chapter: 10,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Vitamins",
    years: [2023],
    question:
      "Deficiency of which of the following vitamins causes pernicious anaemia ?",
    options: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
    correct: 3,
    answer: [
      { text: "**Vitamin B12** (cyanocobalamin)." },
      {
        text: "B12 is needed for the maturation of red blood cells. Without it the marrow produces large, immature cells that cannot carry oxygen properly — the condition called **pernicious anaemia**.",
      },
      {
        table: [
          ["Vitamin", "Name", "Deficiency disease"],
          ["B1", "Thiamine", "Beri beri"],
          ["B2", "Riboflavin", "Cheilosis, digestive disorders"],
          ["B6", "Pyridoxine", "Convulsions"],
          ["**B12**", "**Cyanocobalamin**", "**Pernicious anaemia**"],
        ],
      },
      {
        text: "Two things make B12 unusual. It is the only vitamin that **contains a metal** — cobalt, held at the centre of a corrin ring. And it is the one vitamin essentially absent from plant foods, which is why strict vegetarian diets need a supplement.",
      },
      {
        text: "It is also, unusually for a water-soluble vitamin, **stored in the liver** in quantities that can last for years, so deficiency develops very slowly.",
      },
    ],
  },
  {
    id: "p23d-13",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Aldol condensation",
    years: [2023],
    question:
      "C6H5CHO + CH3COCH3 ->[OH^−][Δ] C6H5CH=CH–COCH3\nThis reaction is known as :",
    options: [
      "Aldol condensation",
      "Cross-Aldol condensation",
      "Cannizzaro's reaction",
      "Friedel-Crafts reaction",
    ],
    correct: 1,
    answer: [
      { text: "**Cross-aldol condensation.**" },
      {
        text: "An aldol condensation between **two different** carbonyl compounds is called a *cross* aldol. Here benzaldehyde and propanone are different molecules, so (b) rather than (a).",
      },
      {
        label: "Why it gives a single clean product",
        text: "Cross-aldol reactions normally give a mixture of four products — but not this one, because the two partners have **complementary** roles:",
      },
      {
        points: [
          "**Benzaldehyde has no α-hydrogen** (the carbon next to –CHO is an aromatic ring carbon), so it cannot form an enolate. It can only be the **electrophile**.",
          "**Propanone has six α-hydrogens**, so it readily forms the enolate and acts as the **nucleophile**.",
        ],
      },
      {
        text: "Only one combination is therefore possible. The aldol adduct then dehydrates on warming, and the resulting double bond is **conjugated with both the ring and the carbonyl**, which is what drives the elimination.",
      },
      { equation: "C6H5CHO + CH3COCH3 ->[dil. OH^−] C6H5CH(OH)CH2COCH3 ->[Δ][−H2O] C6H5CH=CH–COCH3" },
      {
        text: "Option (c) is the distractor worth understanding: benzaldehyde **alone** with concentrated alkali does give Cannizzaro's reaction, precisely because it has no α-hydrogen. Add a partner that does have one, and cross-aldol takes over.",
      },
    ],
    keyPoint:
      "A cross-aldol is clean when one partner has no α-H: it can only be the electrophile.",
  },
  {
    id: "p23d-14",
    chapter: 5,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Oxidation state",
    years: [2023],
    question:
      "In which of the following does the central atom exhibit an oxidation state of +3 ?",
    options: [
      "K2[Ni(CN)4]",
      "K4[Fe(CN)6]",
      "[Fe(C2O4)3]^3−",
      "[Cu(NH3)4]^2+",
    ],
    correct: 2,
    answer: [
      { text: "**[Fe(C2O4)3]^3−**" },
      {
        text: "Work each one out by letting x be the metal's oxidation state and remembering the charge each ligand carries.",
      },
      {
        table: [
          ["Complex", "Ligand charges", "Equation", "Oxidation state"],
          ["K2[Ni(CN)4]", "4 × CN^− = −4", "x − 4 = −2", "**+2**"],
          ["K4[Fe(CN)6]", "6 × CN^− = −6", "x − 6 = −4", "**+2**"],
          ["**[Fe(C2O4)3]^3−**", "3 × C2O4^2− = −6", "x − 6 = −3", "**+3**"],
          ["[Cu(NH3)4]^2+", "4 × NH3 = 0", "x + 0 = +2", "**+2**"],
        ],
      },
      {
        text: "The oxalate ion is the one to watch: **C2O4^2− carries −2**, not −1, so three of them contribute −6 rather than −3. Getting that wrong turns the answer into +0 and makes the question look unanswerable.",
      },
      {
        text: "For the potassium salts, remember the charge on the complex **anion** is set by the counter-ions: K2[...] means the anion is 2−, K4[...] means 4−.",
      },
    ],
  },
  {
    id: "p23d-15",
    chapter: 1,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Colligative properties",
    years: [2023],
    question:
      "Assertion (A) : When NaCl is added to water, a depression in freezing point is observed.\nReason (R) : The lowering of vapour pressure of a solution causes depression in the freezing point.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
    answer: [
      { text: "**(a)** — both true, and R explains A." },
      {
        label: "A is true",
        text: "NaCl is a non-volatile solute, so adding it depresses the freezing point of water. Being an electrolyte it does so twice over, giving two ions per formula unit (i ≈ 2).",
      },
      {
        label: "R is true, and it is the underlying mechanism",
        text: "The freezing point is the temperature at which the **vapour pressure of the liquid equals that of the solid**. Adding a non-volatile solute lowers the liquid's vapour pressure at every temperature, so the two curves now meet at a **lower** temperature — which is exactly what depression of freezing point means.",
      },
      { equation: "$\\Delta T_f = i\\,K_f\\,m$" },
      {
        text: "So R is not merely a related true statement; it is the reason A holds. Relative lowering of vapour pressure is the **parent** colligative property, and depression of freezing point and elevation of boiling point both follow from it.",
      },
      {
        text: "This is the chemistry behind salting icy roads and behind using salt in an ice-cream churn to get the mixture below 0 °C.",
      },
    ],
  },
  {
    id: "p23d-16",
    chapter: 2,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Molar conductivity",
    years: [2023],
    question:
      "Assertion (A) : Λ_m for weak electrolytes shows a sharp decrease when the electrolytic solution is diluted.\nReason (R) : For weak electrolytes, the degree of dissociation increases with dilution of solution.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
    answer: [
      { text: "**(d)** — A is false, R is true." },
      {
        label: "A is false — the direction is wrong",
        text: "Molar conductivity of a weak electrolyte shows a sharp **increase** on dilution, not a decrease. The increase is dramatic precisely near infinite dilution, which is why the Λ_m against √c plot for a weak electrolyte shoots up steeply instead of being nearly straight.",
      },
      {
        label: "R is true, and is in fact the reason A is false",
        text: "Dilution shifts the dissociation equilibrium to the right, so the degree of dissociation α rises:",
      },
      { equation: "CH3COOH <=> CH3COO^− + H^+" },
      {
        text: "More ions per mole of electrolyte means each mole conducts **better**, so Λ_m goes up.",
      },
      {
        text: "The statement that genuinely *decreases* on dilution is **conductivity κ**, which counts ions per unit volume rather than per mole. Confusing the two is what this question is built on:",
      },
      {
        table: [
          ["On dilution", "κ (per unit volume)", "Λ_m (per mole)"],
          ["Strong electrolyte", "Decreases", "Increases slightly"],
          ["Weak electrolyte", "Decreases", "**Increases sharply**"],
        ],
      },
    ],
    keyPoint: "Dilution raises Λ_m sharply for a weak electrolyte; it is κ that falls.",
  },
  {
    id: "p23d-17",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "hard",
    topic: "Lanthanoid contraction",
    years: [2023],
    question:
      "Assertion (A) : Zr and Hf have almost identical radii.\nReason (R) : Both Zr and Hf exhibit similar properties.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 1,
    answer: [
      { text: "**(b)** — both true, but R is not the explanation of A." },
      {
        label: "Both statements are true",
        text: "Zirconium and hafnium have almost the same atomic radius (160 pm and 159 pm), and they do behave so alike that separating them is one of the harder problems in inorganic chemistry.",
      },
      {
        label: "Why R does not explain A — the cause and effect are the wrong way round",
        text: "The real cause of the identical radii is the **lanthanoid contraction**. Hafnium comes immediately after the fourteen lanthanoids, and across that series the 4f electrons shield the growing nuclear charge very poorly, so the radii shrink steadily. By the time hafnium is reached, that accumulated contraction has cancelled out the increase expected from being a whole period lower than zirconium.",
      },
      {
        text: "So the chain of causation runs: **lanthanoid contraction → identical radii → similar properties.** R states the *consequence* of A, not its cause. That makes both statements true but leaves R unable to explain A — which is (b).",
      },
      {
        text: "The practical upshot is real: zirconium and hafnium always occur together and are separated only with difficulty, which matters because zirconium is used for nuclear reactor cladding (it barely absorbs neutrons) while hafnium absorbs them strongly and must be removed.",
      },
    ],
    keyPoint:
      "Lanthanoid contraction causes the identical Zr/Hf radii, which in turn cause the similar properties — R here is the effect, not the cause.",
  },
  {
    id: "p23d-18",
    chapter: 9,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Protecting groups",
    years: [2023],
    question:
      "Assertion (A) : Monobromination of aniline can be conveniently done by protecting the amino group by acetylation.\nReason (R) : Acetylation decreases the activating effect of the amino group.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
    answer: [
      { text: "**(a)** — both true, and R explains A." },
      {
        label: "The problem A solves",
        text: "Aniline is so strongly activated that bromine water substitutes **all three** available positions at once, giving 2,4,6-tribromoaniline. Stopping at one bromine is impossible directly.",
      },
      { equation: "C6H5NH2 + 3Br2(aq) -> 2,4,6-Br3–C6H2–NH2 + 3HBr" },
      {
        label: "R is the mechanism, so it explains A",
        text: "Acetylation converts aniline to **acetanilide**. In the amide the nitrogen lone pair is pulled towards the adjacent **carbonyl group**, which competes with the ring for it, so less electron density reaches the ring and the activation is **reduced**.",
      },
      { equation: "C6H5NH2 ->[(CH3CO)2O / pyridine] C6H5NHCOCH3" },
      { equation: "C6H5NHCOCH3 ->[Br2 / CH3COOH] 4-Br–C6H4–NHCOCH3 ->[H3O^+] 4-Br–C6H4–NH2" },
      {
        text: "With the ring only moderately activated, bromination stops cleanly at the **para** position — the bulky –NHCOCH3 group also blocking the ortho positions sterically. Hydrolysis then removes the protecting group and returns the amine.",
      },
      {
        text: "This is the standard laboratory route to **p-bromoaniline**, and the same protection makes controlled nitration of aniline possible.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION B — very short answer, 2 marks each                      */
  /* ---------------------------------------------------------------- */
  {
    id: "p23d-19",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Structure determination",
    years: [2023],
    question:
      "An alkyl halide (A) of molecular formula C6H13Cl on treatment with alcoholic KOH gives two isomeric alkenes (B) and (C) of molecular formula C6H12. Both alkenes on hydrogenation give 2,3-dimethylbutane. Write the structures of (A), (B) and (C).",
    answer: [
      {
        label: "Work backwards from the hydrogenation product",
        text: "Both alkenes hydrogenate to **2,3-dimethylbutane**, (CH3)2CH–CH(CH3)2. Hydrogenation only adds H2 across a double bond and never rearranges the skeleton, so **A, B and C all have that same carbon skeleton** — a four-carbon chain with methyl groups on C-2 and C-3.",
      },
      { label: "Locate the chlorine" },
      {
        text: "Elimination must be able to give **two different** alkenes, so the chlorine needs β-hydrogens on two inequivalent sides. Putting it on C-2 of the skeleton does exactly that:",
      },
      { text: "**A = 2-chloro-2,3-dimethylbutane**, (CH3)2CCl–CH(CH3)2." },
      { label: "The two alkenes" },
      { equation: "(CH3)2CCl–CH(CH3)2 ->[alc. KOH][Δ] (CH3)2C=C(CH3)2 + CH2=C(CH3)–CH(CH3)2" },
      {
        table: [
          ["", "Structure", "Name", "Formed by losing H from"],
          ["**B**", "(CH3)2C=C(CH3)2", "2,3-Dimethylbut-2-ene", "C-3 — the **Saytzeff**, major product"],
          ["**C**", "CH2=C(CH3)–CH(CH3)2", "2,3-Dimethylbut-1-ene", "A methyl group — the minor product"],
        ],
      },
      {
        text: "Either assignment of B and C is accepted, since the question does not say which is major.",
      },
      {
        text: "**B is the major product** by Saytzeff's rule: its double bond carries four alkyl groups against two in C, and the more substituted alkene is the more stable through hyperconjugation. Checking the formula, both are C6H12 as required, and both add H2 to give the same C6H14 alkane.",
      },
      {
        label: "The same halide with a bulky base goes the other way",
        text: "The board has also set this exact substrate with **potassium tert-butoxide** instead of alcoholic KOH. That base is too bulky to reach the crowded internal \u03b2-hydrogen, so it removes an accessible primary one and **C, the Hofmann product, predominates** \u2014 the reverse of the order here. The halide and the two alkenes are identical; only which one is major changes, and the base alone decides it.",
      },
    ],
    keyPoint:
      "Hydrogenation never moves the skeleton, so the alkane tells you the carbon framework of the halide.",
  },
  {
    id: "p23d-20",
    chapter: 1,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Deviations from Raoult's law",
    years: [2023],
    question:
      "What type of deviation from Raoult's law is shown by a mixture of ethanol and acetone ? Give reason.",
    answer: [
      { text: "**Positive deviation.**" },
      {
        label: "The reason",
        text: "Pure ethanol molecules are **hydrogen bonded to one another** through their –OH groups. Acetone has no O–H, so it cannot hydrogen bond to itself or to ethanol nearly as strongly.",
      },
      {
        text: "When acetone is added it gets **between** the ethanol molecules and **breaks up some of those hydrogen bonds**. The new ethanol–acetone interactions are weaker than the ethanol–ethanol ones they replace, so molecules escape more easily:",
      },
      { equation: "$p_{observed} > p^\\circ_A x_A + p^\\circ_B x_B$" },
      {
        table: [
          ["Quantity", "Sign for this mixture"],
          ["Vapour pressure", "**Higher** than Raoult's law predicts"],
          ["Δ_mix H", "**Positive** — heat is absorbed to break the H-bonds"],
          ["Δ_mix V", "**Positive** — the mixture expands slightly"],
          ["Azeotrope formed", "**Minimum boiling**"],
        ],
      },
      {
        text: "Ethanol + water and carbon disulphide + acetone behave the same way. The contrast is **chloroform + acetone**, which shows a *negative* deviation because those two form a hydrogen bond to each other that neither had on its own.",
      },
    ],
  },
  {
    id: "p23d-20b",
    chapter: 1,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Azeotropes",
    years: [2023],
    question:
      "Define azeotrope. What type of azeotrope is formed by negative deviation from Raoult's law ? Give an example.",
    answer: [
      { label: "Definition" },
      {
        text: "An **azeotrope** is a liquid binary mixture that **boils at a constant temperature and distils without any change in composition** — the vapour has the same composition as the liquid.",
      },
      {
        text: "That is precisely why the components of an azeotrope **cannot be separated by fractional distillation**.",
      },
      { label: "Type formed by negative deviation" },
      { text: "A **maximum boiling azeotrope**." },
      {
        text: "Negative deviation means the A–B attraction is **stronger** than the A–A and B–B attractions, so the vapour pressure is lower than predicted — and a lower vapour pressure means a **higher** boiling point, above that of either pure component.",
      },
      { label: "Example" },
      {
        text: "**Nitric acid and water**: the mixture of about **68% HNO3 and 32% H2O** boils at **393.5 K**, higher than pure HNO3 (359 K) or pure water (373 K).",
      },
      {
        text: "Hydrochloric acid and water (20.2% HCl, b.p. 383 K) is an equally good example, as is chloroform with acetone.",
      },
      {
        text: "For contrast, **positive** deviation gives a **minimum** boiling azeotrope — ethanol and water at 95% ethanol, boiling at 351.1 K, which is why ordinary distillation cannot produce absolute alcohol.",
      },
    ],
  },
  {
    id: "p23d-21",
    chapter: 2,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Batteries",
    years: [2023],
    question:
      "Name the cell which :\n(a) was used in the Apollo Space programme.\n(b) is used in automobiles and inverters.\n(c) is suitable for hearing aids and watches.\n(d) does not give a steady potential and is used in transistors.",
    answer: [
      {
        table: [
          ["", "Cell", "Why it suits that use"],
          ["(a)", "**Fuel cell** (H2–O2)", "High efficiency, and the only product is water — which the crew could drink"],
          ["(b)", "**Lead storage battery**", "**Rechargeable** (secondary cell) and delivers the large current a starter motor needs"],
          ["(c)", "**Mercury cell**", "Gives a **constant potential** of about 1.35 V throughout its life, and is small"],
          ["(d)", "**Dry cell** (Leclanché)", "Cheap, but its potential **falls steadily** as the cell is used"],
        ],
      },
      {
        label: "Why the mercury cell holds steady",
        text: "Its overall reaction involves only solids and a liquid:",
      },
      { equation: "Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l)" },
      {
        text: "No ion in the reaction changes concentration, so by the Nernst equation the potential does not drift — exactly what a watch or hearing aid needs.",
      },
      {
        label: "Why the dry cell does not",
        text: "Its reaction produces NH4^+ and Zn^2+ in solution, whose concentrations rise as the cell discharges. The Nernst equation then predicts a falling voltage, which is what is observed — a 1.5 V dry cell is well below that long before it is exhausted.",
      },
    ],
  },
  {
    id: "p23d-22",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "hard",
    topic: "Arrhenius equation",
    years: [2023],
    question:
      "The rate constant for the first order decomposition of N2O5 is given by the following equation :\nlog k = 23.6 − (2 × 10^4 K)/T\nCalculate E_a for this reaction. [R = 8.314 J K^−1 mol^−1]",
    answer: [
      {
        label: "Step 1 — put the Arrhenius equation in the same form",
        text: "Taking logarithms of the Arrhenius equation $k = A\\,e^{-E_a/RT}$ and converting to base 10:",
      },
      { equation: "$\\log k = \\log A - \\dfrac{E_a}{2.303\\,R\\,T}$" },
      {
        label: "Step 2 — compare coefficients",
        text: "The given equation is log k = 23.6 − (2 × 10^4 K)/T. Matching the term in 1/T:",
      },
      { equation: "$\\dfrac{E_a}{2.303\\,R} = 2 \\times 10^{4}\\ \\text{K}$" },
      {
        text: "(Matching the constant term also gives log A = 23.6, though the question does not ask for it.)",
      },
      { label: "Step 3 — solve for E_a" },
      {
        equation:
          "$E_a = 2.303 \\times 8.314 \\times 2 \\times 10^{4} = 19.147 \\times 2 \\times 10^{4}$",
      },
      { text: "**E_a = 3.830 × 10^5 J mol^−1 = 383 kJ mol^−1**" },
      {
        text: "The value is believable: N2O5 decomposition requires breaking a strong N–O bond, so a large activation energy is expected. Note the units work out because the coefficient of 1/T was quoted **in kelvin**, which cancels against the K^−1 in R.",
      },
      {
        text: "The technique generalises — whenever a rate constant is given as a linear function of 1/T, the **slope carries E_a** and the intercept carries the frequency factor.",
      },
    ],
    keyPoint: "Compare the given log k equation term by term with log A − Ea/2.303RT.",
  },
  {
    id: "p23d-24",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Cannizzaro and ammonia derivatives",
    years: [2023],
    question:
      "Write the products of the following reactions :\n(i) C6H5CHO ->[conc. NaOH][Δ]\n(ii) Cyclopentanone + H2N–NH–CO–NH2 ->[H^+]",
    answer: [
      { label: "(i) Benzaldehyde with concentrated alkali — Cannizzaro's reaction" },
      {
        text: "Benzaldehyde has **no α-hydrogen**, so it cannot undergo aldol condensation. Instead two molecules **disproportionate**: one is reduced to the alcohol and the other oxidised to the carboxylate.",
      },
      { equation: "2C6H5CHO + conc. NaOH -> C6H5CH2OH + C6H5COO^−Na^+" },
      {
        text: "**Products: benzyl alcohol and sodium benzoate.** Acidifying afterwards would give benzoic acid.",
      },
      {
        text: "This is the defining reaction of aldehydes with no α-hydrogen — HCHO and (CH3)3C–CHO behave the same way.",
      },
      { label: "(ii) Cyclopentanone with semicarbazide" },
      {
        text: "H2N–NH–CO–NH2 is **semicarbazide**. Its free –NH2 group adds to the carbonyl carbon and water is eliminated:",
      },
      { equation: "C5H8O + H2N–NH–CO–NH2 ->[H^+] C5H8=N–NH–CO–NH2 + H2O" },
      {
        text: "**Product: cyclopentanone semicarbazone**, in which the ring carbonyl oxygen has been replaced by =N–NH–CO–NH2.",
      },
      {
        text: "Note which nitrogen reacts. Semicarbazide has two –NH2 groups, but the one attached to the carbonyl has its lone pair tied up by resonance with that C=O; only the nitrogen **bonded to the other nitrogen** is nucleophilic.",
      },
      {
        text: "The trace of acid is a genuine catalyst here, and the pH matters: too little acid and the carbonyl is not activated, too much and the weakly basic semicarbazide is protonated and stops being a nucleophile.",
      },
    ],
  },
  {
    id: "p23d-25",
    chapter: 5,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2023],
    question:
      "Write IUPAC names of the following coordination entities :\n(a) [Co(NH3)4Cl(NO2)]Cl\n(b) [PtCl2(en)2]^2+",
    answer: [
      { label: "(a) [Co(NH3)4Cl(NO2)]Cl" },
      { text: "**Tetraamminechloridonitrito-N-cobalt(III) chloride**" },
      {
        points: [
          "Ligands in **alphabetical** order: **ammine**, then **chlorido**, then **nitrito** — the multiplying prefix *tetra* is ignored for alphabetising.",
          "Written as **NO2** rather than ONO, the ligand is bonded through **nitrogen**, hence *nitrito-N* (*nitrito-κN* in strict modern usage).",
          "Cobalt's oxidation state: x + 4(0) + (−1) + (−1) = +1, so **x = +3**.",
          "The counter-ion, chloride, is named last as a separate word.",
        ],
      },
      {
        text: "Bonded through oxygen instead, the same formula would be written [Co(NH3)4Cl(ONO)]Cl and named *nitrito-O* — the two are **linkage isomers**.",
      },
      { label: "(b) [PtCl2(en)2]^2+" },
      { text: "**Dichloridobis(ethane-1,2-diamine)platinum(IV) ion**" },
      {
        points: [
          "Alphabetical order: **chlorido** before **ethane-1,2-diamine**.",
          "**bis**, not *di*, because the ligand's own name already contains numerals — the same rule gives *tris*, *tetrakis* and so on.",
          "Platinum's oxidation state: x + 2(−1) + 2(0) = +2, so **x = +4**.",
          "The species is a cation with no counter-ion given, so the name ends in *ion*.",
        ],
      },
      {
        text: "With two chlorides and two bidentate en ligands on an octahedral centre, this complex exists as **cis and trans** geometrical isomers, and the cis form is optically active.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION C — short answer, 3 marks each                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p23d-26",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of ethers and phenols",
    years: [2023],
    question:
      "(i) Write the hydroboration-oxidation reaction with an example.\n(ii) Write the products of the following reaction : C6H5–OCH3 + HBr ->\n(iii) Why is p-nitrophenol more acidic than phenol ?",
    answer: [
      { label: "(i) Hydroboration–oxidation" },
      {
        text: "An alkene is treated with diborane and the resulting trialkylborane oxidised with alkaline hydrogen peroxide, giving an alcohol by **anti-Markovnikov** addition of water.",
      },
      { equation: "CH3–CH=CH2 ->[(i) B2H6 or (H–BH2)2][(ii) NaOH / H2O2] CH3–CH2–CH2–OH" },
      {
        text: "Boron adds to the **less substituted** carbon — partly because it is less hindered, partly because boron is the electron-poor atom and goes where the electron density is lower. The –OH ends up in boron's place, so **propene gives propan-1-ol**, not propan-2-ol.",
      },
      {
        text: "This is the only convenient way to make a **primary** alcohol from a terminal alkene; acid-catalysed hydration follows Markovnikov's rule and would give the secondary alcohol.",
      },
      { label: "(ii) Anisole with HBr" },
      { equation: "C6H5–OCH3 + HBr -> C6H5–OH + CH3–Br" },
      {
        text: "**Products: phenol and bromomethane.**",
      },
      {
        text: "The key point is **which bond breaks**. The halide attacks the **methyl** carbon, not the ring carbon, because the O–C(aryl) bond has **partial double bond character** from the oxygen lone pair delocalising into the ring, and an sp^2 carbon is in any case not open to nucleophilic attack.",
      },
      {
        text: "So an aryl alkyl ether always gives the **phenol and the alkyl halide** — never the aryl halide and the alcohol.",
      },
      { label: "(iii) Why p-nitrophenol is more acidic than phenol" },
      {
        text: "Because the **nitro group stabilises the phenoxide ion** by withdrawing electron density, both inductively (−I) and by resonance (−R).",
      },
      {
        text: "In the p-nitrophenoxide ion the negative charge can be delocalised right onto the **oxygens of the nitro group**, which is possible only because the nitro group is **para** (or ortho) to the –O^−. Spreading the charge further lowers the energy of the anion, so dissociation is more favourable.",
      },
      {
        table: [
          ["Compound", "pK_a"],
          ["Phenol", "10.0"],
          ["**p-Nitrophenol**", "**7.1**"],
          ["2,4,6-Trinitrophenol (picric acid)", "0.4"],
        ],
      },
      {
        text: "The effect compounds: three nitro groups make picric acid stronger than many mineral acids. An **m-nitrophenol** is less acidic than the para isomer, because from the meta position the −R effect cannot reach the oxygen and only the weaker −I effect operates.",
      },
    ],
    keyPoint:
      "In an aryl alkyl ether the alkyl–O bond breaks, giving phenol plus the alkyl halide.",
  },
  {
    id: "p23d-26b",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Substitution versus elimination",
    years: [2023],
    question:
      "Why does the reaction of CH3ONa with (CH3)3C–Br give 2-methylpropene and not (CH3)3C–OCH3 ?",
    answer: [
      {
        text: "Because the halide is **tertiary**, so the S_N2 substitution that Williamson's synthesis needs is blocked, and the methoxide ion acts as a **base** instead of a nucleophile.",
      },
      { equation: "(CH3)3C–Br + CH3O^−Na^+ -> (CH3)2C=CH2 + CH3OH + NaBr" },
      {
        label: "Why substitution fails",
        text: "An S_N2 reaction requires the nucleophile to attack the carbon from the side **opposite** the leaving group. In (CH3)3C–Br that face is completely shielded by three methyl groups, so the approach is impossible and the rate is effectively zero.",
      },
      {
        label: "Why elimination takes over",
        text: "Methoxide is not only a nucleophile but a **strong base**. Blocked from the carbon, it removes a **β-hydrogen** instead — and those hydrogens are on the outside of the molecule, perfectly accessible. The electrons left behind form the π bond, giving **2-methylpropene** by E2.",
      },
      {
        table: [
          ["Factor", "Pushes towards"],
          ["Tertiary substrate", "Elimination"],
          ["Strong, bulky base (CH3O^−, (CH3)3CO^−)", "Elimination"],
          ["High temperature", "Elimination"],
          ["Primary substrate, weak base", "Substitution"],
        ],
      },
      {
        label: "The practical lesson for Williamson's synthesis",
        text: "To make (CH3)3C–OCH3 the partners must be **swapped**: use the tertiary **alkoxide** with the primary **halide**.",
      },
      { equation: "(CH3)3C–O^−Na^+ + CH3–Br -> (CH3)3C–O–CH3 + NaBr" },
      {
        text: "Now the attack is on a methyl carbon, which is completely unhindered, and substitution succeeds. For an unsymmetrical ether there is usually only one workable combination — always put the **alkoxide on the more hindered side**.",
      },
    ],
    keyPoint:
      "In Williamson's synthesis the halide must be primary; pair the hindered partner as the alkoxide.",
  },
  {
    id: "p23d-27",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactivity and optical activity",
    years: [2023],
    question:
      "Account for the following :\n(a) Benzyl chloride is highly reactive towards S_N1 reaction.\n(b) (±)-Butan-2-ol is optically inactive, though it contains a chiral carbon atom.\n(c) Chloroform is stored in closed dark coloured bottles.",
    answer: [
      { label: "(a) Why benzyl chloride is so reactive towards S_N1" },
      {
        text: "Because the **benzyl carbocation formed in the slow step is stabilised by resonance** with the benzene ring.",
      },
      { equation: "C6H5–CH2–Cl -> C6H5–CH2^+ + Cl^−" },
      {
        text: "The positive charge is not confined to the CH2 carbon: it is delocalised into the ring, spreading over the ortho and para carbons as well. Four resonance structures can be drawn, and that delocalisation lowers the energy of the intermediate a great deal.",
      },
      {
        text: "Since S_N1 rate depends on how readily the carbocation forms, benzyl chloride reacts faster than a simple primary halide — and even competes with tertiary halides, despite being primary itself. Allyl halides are fast for the same reason.",
      },
      { label: "(b) Why (±)-butan-2-ol is optically inactive" },
      {
        text: "Because the **(±)** prefix means it is a **racemic mixture** — an equimolar mixture of the two enantiomers of butan-2-ol.",
      },
      {
        text: "Each individual molecule *is* chiral: C-2 carries H, OH, CH3 and C2H5, four different groups. But the d form rotates plane-polarised light clockwise and the l form rotates it anticlockwise by **exactly the same angle**. With equal amounts of each, the two rotations **cancel exactly** and the net rotation is zero.",
      },
      {
        text: "This is **external compensation**, and it is why a racemic mixture is described as optically inactive rather than achiral. Contrast a **meso** compound, which is inactive by *internal* compensation — it has chiral centres but an internal plane of symmetry, so a single molecule is already achiral.",
      },
      { label: "(c) Why chloroform is kept in dark bottles" },
      {
        text: "Because in the presence of **air and light** it is slowly oxidised to **phosgene**, COCl2, an extremely poisonous gas.",
      },
      { equation: "2CHCl3 + O2 ->[light] 2COCl2 + 2HCl" },
      {
        text: "**Dark** bottles keep out the light that initiates the reaction, and **closed** bottles keep out the oxygen it needs — so the two precautions address the two reactants.",
      },
      {
        text: "As a further safeguard, chloroform is usually stored **filled to the brim** to exclude air, with about 1% ethanol added, which converts any phosgene formed into harmless diethyl carbonate.",
      },
    ],
    keyPoint:
      "A racemic mixture is inactive by external compensation; a meso compound by internal compensation.",
  },
  {
    id: "p23d-28",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "VBT and isomerism",
    years: [2023],
    question:
      "Answer any three :\n(a) Explain the type of hybridization in [Fe(CN)6]^3− on the basis of valence bond theory. (Atomic number of Fe = 26)\n(b) Draw the geometrical isomers of [PtCl2(en)2]^2+ ion.\n(c) [NiCl4]^2− is paramagnetic while [Ni(CO)4] is diamagnetic though both are tetrahedral. Why ?\n(d) Name the type of isomerism when ambidentate ligands are attached to the central metal ion. Give one example of an ambidentate ligand.",
    answer: [
      { label: "(a) Hybridisation in [Fe(CN)6]^3−" },
      {
        points: [
          "Fe has Z = 26, so the atom is [Ar] 3d^6 4s^2 and **Fe^3+ is [Ar] 3d^5**.",
          "In the free ion those five electrons are spread one to each 3d orbital, all unpaired.",
          "**CN^− is a strong field ligand**, so it forces pairing: the five electrons rearrange as t2g^5, filling two 3d orbitals and leaving **one unpaired electron** and **two vacant 3d orbitals**.",
          "Those two empty 3d orbitals, with the 4s and three 4p, hybridise to give **d^2sp^3** — six equivalent orbitals pointing to the corners of an **octahedron**.",
          "Each CN^− then donates a lone pair into one of them.",
        ],
      },
      {
        text: "Because **inner** 3d orbitals are used, this is called an **inner orbital** or low spin complex. With one unpaired electron it is **paramagnetic**, μ = 1.73 BM.",
      },
      { label: "(b) Geometrical isomers of [PtCl2(en)2]^2+" },
      {
        table: [
          ["Isomer", "The two chlorides", "Optically active?"],
          ["**cis**", "Adjacent, 90° apart", "**Yes** — no plane of symmetry, so d and l forms exist"],
          ["**trans**", "Opposite, 180° apart", "**No** — has a plane of symmetry"],
        ],
      },
      {
        text: "In both the two bidentate en ligands occupy the four remaining coordination positions. The trans isomer's mirror image is superimposable on itself, so only the cis form is chiral.",
      },
      { label: "(c) [NiCl4]^2− paramagnetic but [Ni(CO)4] diamagnetic" },
      {
        text: "The difference is entirely the **ligand field strength**, even though both complexes are tetrahedral.",
      },
      {
        table: [
          ["", "[NiCl4]^2−", "[Ni(CO)4]"],
          ["Oxidation state of Ni", "+2", "**0**"],
          ["Configuration", "3d^8", "3d^8 4s^2"],
          ["Ligand", "Cl^−, **weak field**", "CO, **strong field**"],
          ["Effect", "No pairing — 2 unpaired electrons remain", "Pairing occurs; 4s electrons shift into 3d, giving **3d^10**"],
          ["Hybridisation", "sp^3", "sp^3"],
          ["Magnetism", "**Paramagnetic**, μ = 2.83 BM", "**Diamagnetic**, μ = 0"],
        ],
      },
      {
        text: "So the shape is the same but the electron count underneath is not: chloride leaves the 3d^8 arrangement alone, while carbon monoxide drives it to a completely filled 3d^10.",
      },
      { label: "(d) Isomerism from ambidentate ligands" },
      { text: "**Linkage isomerism.**" },
      {
        text: "An **ambidentate** ligand has two different donor atoms and can bind through either one, giving two compounds with the same formula but different structures.",
      },
      {
        table: [
          ["Ambidentate ligand", "Can bind through"],
          ["**NO2^−**", "N (nitrito-N) or O (nitrito-O)"],
          ["SCN^−", "S (thiocyanato) or N (isothiocyanato)"],
          ["CN^−", "C (cyanido) or N (isocyanido)"],
        ],
      },
      {
        text: "The classic pair is [Co(NH3)5(NO2)]^2+, which is yellow, against [Co(NH3)5(ONO)]^2+, which is red — same formula, different colour, because the donor atom differs.",
      },
    ],
  },
  {
    id: "p23d-29",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Osmotic pressure and association",
    years: [2023],
    question:
      "If benzoic acid (M = 122 g mol^−1) is associated into a dimer when dissolved in benzene, and the osmotic pressure of a solution of 6.1 g of benzoic acid in 100 mL benzene is 6.5 atm at 27 °C, what is the percentage association of benzoic acid ?\n(Given : R = 0.0821 L atm K^−1 mol^−1)",
    answer: [
      {
        label: "Step 1 — write the osmotic pressure equation with i",
      },
      {
        equation:
          "$\\pi = i\\,\\dfrac{n_B}{V}RT = i\\,\\dfrac{w_B}{M_B}\\times\\dfrac{1000}{V\\ (\\text{mL})}\\times RT$",
      },
      { label: "Step 2 — substitute" },
      {
        text: "T = 27 + 273 = **300 K**, w_B = 6.1 g, M_B = 122 g mol^−1, V = 100 mL:",
      },
      {
        equation:
          "$6.5 = i \\times \\dfrac{6.1}{122} \\times \\dfrac{1000}{100} \\times 0.0821 \\times 300$",
      },
      {
        text: "The concentration is (6.1/122) × (1000/100) = 0.05 × 10 = 0.5 mol L^−1, so:",
      },
      {
        equation:
          "$i = \\dfrac{6.5 \\times 122}{6.1 \\times 0.0821 \\times 300 \\times 10} = 0.528$",
      },
      {
        text: "**i < 1**, confirming **association** rather than dissociation.",
      },
      { label: "Step 3 — degree of association" },
      { equation: "2C6H5COOH <=> (C6H5COOH)2" },
      {
        text: "Two molecules give one dimer, so n = 2:",
      },
      { equation: "$\\alpha = \\dfrac{1 - i}{1 - \\frac{1}{n}} = \\dfrac{1 - 0.528}{1 - \\frac{1}{2}} = \\dfrac{0.472}{0.5}$" },
      { text: "**α = 0.944, that is 94.4% association.**" },
      {
        label: "Why benzoic acid dimerises in benzene",
        text: "Two molecules pair through a **double hydrogen bond**, each –OH bonding to the other's carbonyl oxygen to close a stable eight-membered ring. Benzene is non-polar and cannot solvate the –OH groups, so nothing competes with that pairing — hence the very high figure.",
      },
      {
        text: "In **water** the behaviour reverses: the acid ionises instead and i rises above 1. The solvent, not the acid, decides which happens.",
      },
    ],
    keyPoint: "For association use α = (1 − i)/(1 − 1/n); i < 1 is the giveaway.",
  },
  {
    id: "p23d-30",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "First order kinetics from pressure",
    years: [2023],
    question:
      "The following data were obtained during the first order thermal decomposition of C2H5Cl at constant volume :\nC2H5Cl (g) -> C2H4 (g) + HCl (g)\nExperiment 1: time = 0 s, total pressure = 0.4 atm\nExperiment 2: time = 100 s, total pressure = 0.6 atm\nCalculate the rate constant. (Given : log 2 = 0.3010, log 3 = 0.4771, log 4 = 0.6021)",
    answer: [
      {
        label: "Step 1 — see what the total pressure is telling you",
        text: "One molecule of gas becomes **two**, so the total pressure rises as the reaction proceeds. Let p be the pressure of C2H5Cl that has decomposed after time t:",
      },
      {
        table: [
          ["", "C2H5Cl", "C2H4", "HCl", "Total"],
          ["At t = 0", "p_i", "0", "0", "p_i"],
          ["At time t", "p_i − p", "p", "p", "**p_i + p**"],
        ],
      },
      {
        text: "So p_t = p_i + p, giving **p = p_t − p_i**, and the pressure of unreacted C2H5Cl is:",
      },
      { equation: "$p_{\\mathrm{C_2H_5Cl}} = p_i - p = p_i - (p_t - p_i) = 2p_i - p_t$" },
      { label: "Step 2 — apply the first order equation" },
      {
        text: "Pressure may be used in place of concentration for a gas at constant volume:",
      },
      { equation: "$k = \\dfrac{2.303}{t}\\log\\dfrac{p_i}{2p_i - p_t}$" },
      { label: "Step 3 — substitute" },
      {
        text: "With p_i = 0.4 atm, p_t = 0.6 atm at t = 100 s, the denominator is 2(0.4) − 0.6 = 0.8 − 0.6 = **0.2**:",
      },
      { equation: "$k = \\dfrac{2.303}{100}\\log\\dfrac{0.4}{0.2} = \\dfrac{2.303}{100}\\log 2$" },
      { equation: "$k = \\dfrac{2.303 \\times 0.3010}{100} = 0.0069\\ \\text{s}^{-1}$" },
      { text: "**k = 6.9 × 10^−3 s^−1** (the scheme also accepts 0.007 s^−1)." },
      {
        text: "A neat check: the pressure of C2H5Cl has fallen from 0.4 to 0.2 atm, exactly half, so 100 s is one **half-life**. Then k = 0.693/100 = 0.00693 s^−1, which agrees.",
      },
      {
        text: "The scheme **deducts ½ mark for a missing or incorrect unit**. First order rate constants always carry s^−1.",
      },
    ],
    keyPoint:
      "When one gas molecule becomes two, the reactant's partial pressure is 2p_i − p_t.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION D — case-based, 4 marks each                             */
  /* ---------------------------------------------------------------- */
  {
    id: "p23d-31",
    chapter: 10,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Proteins and carbohydrates",
    years: [2023],
    passage:
      "Living systems are made up of various complex biomolecules like carbohydrates, proteins, nucleic acids, lipids, etc. Carbohydrates are optically active polyhydroxy aldehydes or ketones or molecules which provide such units on hydrolysis. They are broadly classified into three groups — monosaccharides, oligosaccharides and polysaccharides. Monosaccharides are held together by glycosidic linkages to form disaccharides like sucrose, maltose or polysaccharides like starch and cellulose. Proteins are polymers of α-amino acids which are linked by peptide bonds. Ten amino acids are called essential amino acids. Structure and shape of proteins can be studied at four different levels i.e. primary, secondary, tertiary and quaternary, each level being more complex than the previous one.",
    question:
      "(i) What is the difference between a glycosidic linkage and a peptide linkage ?\n(ii) Which amino acids are called essential amino acids ?\n(iii) What are the common types of secondary structures of proteins ? Write any two forces which stabilise the secondary and tertiary structures of protein.\nOR\n(iii) Define denaturation of protein with an example. During denaturation which structures of protein lose their biological activity ?",
    answer: [
      { label: "(i) Glycosidic against peptide linkage" },
      {
        table: [
          ["", "Glycosidic linkage", "Peptide linkage"],
          ["Structure", "**–O–** bridge", "**–CO–NH–**"],
          ["Joins", "Two monosaccharide units", "Two α-amino acids"],
          ["Formed from", "The –OH groups of two sugars", "–COOH of one and –NH2 of the next"],
          ["Found in", "Disaccharides, polysaccharides", "Proteins, polypeptides"],
        ],
      },
      {
        text: "Both are **condensation** linkages formed with loss of water; the difference is which atom bridges the units — **oxygen** in a glycoside, **nitrogen** in a peptide.",
      },
      { label: "(ii) Essential amino acids" },
      {
        text: "Those which the **body cannot synthesise** and which must therefore be **obtained through the diet**.",
      },
      {
        text: "Ten of the twenty amino acids found in proteins fall into this group — among them valine, leucine, isoleucine, lysine and phenylalanine. The remaining ten, which the body can make for itself, are called **non-essential** amino acids.",
      },
      {
        text: "The word \"essential\" is about dietary necessity, not biological importance: all twenty are equally needed to build proteins.",
      },
      { label: "(iii) Secondary structures and the forces that hold them" },
      {
        text: "The two common secondary structures are the **α-helix** and the **β-pleated sheet**.",
      },
      {
        points: [
          "In the **α-helix** the chain coils into a right-handed spiral, held by hydrogen bonds between the C=O of one residue and the N–H of the residue four places along.",
          "In the **β-pleated sheet** the chains lie side by side, hydrogen bonded between adjacent strands, giving a flat pleated arrangement.",
        ],
      },
      {
        label: "Two stabilising forces — any two earn the marks",
        points: [
          "**Hydrogen bonding** — the dominant force in the secondary structure.",
          "**Disulphide linkages**, –S–S–, covalent bridges between cysteine residues.",
          "**van der Waals forces** between non-polar side chains.",
          "**Electrostatic attraction** (salt bridges) between oppositely charged side chains.",
        ],
      },
      { label: "OR (iii) Denaturation" },
      {
        text: "**Denaturation** is the **loss of biological activity** that occurs when a protein in its native form is subjected to a change of temperature, pH or similar conditions.",
      },
      {
        text: "**Example: coagulation of egg white on boiling**, or the curdling of milk. Both are irreversible.",
      },
      {
        text: "It is the **secondary and tertiary structures** that are destroyed — the hydrogen bonds and disulphide bridges holding the chain folded are broken, and the globular protein uncoils into a random shape. The **primary structure**, the sequence of amino acids, survives intact, because the peptide bonds themselves are not broken.",
      },
      {
        text: "That distinction is the whole point: the sequence is unchanged, yet the protein no longer works — which shows that biological activity depends on **shape**, not merely on composition.",
      },
    ],
    keyPoint:
      "Denaturation destroys secondary and tertiary structure while leaving the primary sequence intact.",
  },
  {
    id: "p23d-32",
    chapter: 9,
    type: "case-study",
    marks: 4,
    difficulty: "hard",
    topic: "Basicity and reaction chains",
    years: [2023],
    passage:
      "Amines are usually formed from nitro compounds, halides, amides, imides, etc. They exhibit hydrogen bonding which influences their physical properties. In alkyl amines, a combination of electron releasing, steric and hydrogen bonding factors influence the stability of the substituted ammonium cations in protic polar solvents and thus affect the basic nature of amines. In aromatic amines, electron releasing and withdrawing groups respectively increase and decrease their basic character. Influence of the number of hydrogen atoms at nitrogen atom on the type of reactions and nature of products is responsible for identification and distinction between primary, secondary and tertiary amines. Presence of amino group in aromatic ring enhances reactivity of the aromatic amines. Aryl diazonium salts provide advantageous methods for producing aryl halides, cyanides, phenols and arenes by reductive removal of the diazo group.",
    question:
      "(i) Arrange the following in the increasing order of their pK_b values in aqueous solution : C2H5NH2, (C2H5)2NH, (C2H5)3N\n(ii) Aniline on nitration gives a substantial amount of m-nitroaniline, though the amino group is o/p directing. Why ?\n(iii) An aromatic compound 'A' of molecular formula C7H6O2 on treatment with aqueous ammonia and heating forms compound 'B'. Compound 'B' on heating with Br2 and aqueous KOH gives a compound 'C' of molecular formula C6H7N. Write the structures of A, B and C.",
    answer: [
      { label: "(i) Increasing order of pK_b" },
      { text: "**(C2H5)2NH < (C2H5)3N < C2H5NH2**" },
      {
        text: "Remember that **pK_b runs opposite to basicity** — a lower pK_b means a stronger base. So this order says the basicity runs (C2H5)2NH > (C2H5)3N > C2H5NH2.",
      },
      {
        text: "Three effects compete in water: the **+I effect** of the ethyl groups (favours 3° > 2° > 1°), **solvation** of the cation formed, which needs N–H bonds (favours 1° > 2° > 3°), and **steric crowding** around the lone pair (penalises 3°). The secondary amine strikes the best balance.",
      },
      {
        label: "A trap worth flagging",
        text: "For the **ethyl** series the tertiary amine comes **second**, not last. The **methyl** series is genuinely different — (CH3)2NH > CH3NH2 > (CH3)3N — because an ethyl group releases electrons more strongly than a methyl. The board has asked both, so check which series is in front of you.",
      },
      { label: "(ii) Why aniline nitrates substantially at the meta position" },
      {
        text: "Because in the strongly acidic nitrating mixture **aniline is protonated to the anilinium ion**, and that ion is **meta-directing**.",
      },
      { equation: "C6H5NH2 + H^+ -> C6H5NH3^+" },
      {
        text: "Once protonated the nitrogen carries a **full positive charge** and can no longer donate its lone pair to the ring. Instead it withdraws electron density strongly (−I), deactivating the ring and directing the electrophile to the **meta** position.",
      },
      {
        text: "The product is a mixture — roughly 47% meta, the rest ortho and para from the unprotonated aniline still present. Acetylating the amine first avoids the problem entirely.",
      },
      { label: "(iii) Identifying A, B and C" },
      {
        label: "Reading the clues",
        points: [
          "**C7H6O2** with an aromatic ring and reacting with ammonia points to **benzoic acid**, C6H5COOH.",
          "Aqueous ammonia plus heat converts a carboxylic acid to the **amide**, through the ammonium salt.",
          "**Br2 with aqueous KOH** is **Hoffmann bromamide degradation**, which turns an amide into an amine with **one carbon fewer** — and C6H7N is indeed one carbon down from C7H7NO.",
        ],
      },
      {
        equation:
          "C6H5COOH ->[NH3][Δ] C6H5CONH2 ->[Br2 / aq. KOH] C6H5NH2",
      },
      {
        table: [
          ["", "Structure", "Name", "Formula"],
          ["A", "C6H5COOH", "Benzoic acid", "C7H6O2"],
          ["B", "C6H5CONH2", "Benzamide", "C7H7NO"],
          ["C", "C6H5NH2", "Aniline", "C6H7N"],
        ],
      },
      {
        text: "The carbon count confirms it: the carbonyl carbon is lost as carbonate, so seven carbons become six — exactly matching the C6H7N given in the question.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION E — long answer, 5 marks each                            */
  /* ---------------------------------------------------------------- */
  {
    id: "p23d-33",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "hard",
    topic: "Nernst equation",
    years: [2023],
    question:
      "(i) Calculate the emf of the following cell at 298 K :\nAl (s) | Al^3+ (0.001 M) || Ni^2+ (0.1 M) | Ni (s)\n[Given : E°(Al^3+/Al) = −1.66 V, E°(Ni^2+/Ni) = −0.25 V, log 10 = 1]\n(ii) With the help of a graph explain why it is not possible to determine Λ°_m for a weak electrolyte by extrapolating the molar conductivity (Λ_m) versus C^1/2 curve as for a strong electrolyte.",
    answer: [
      { label: "(i) Step 1 — the cell reaction and E°" },
      {
        text: "Aluminium is on the left, so it is the **anode**; nickel is the cathode. Balancing electrons, 2 Al lose 6 and 3 Ni^2+ gain 6:",
      },
      { equation: "2Al(s) + 3Ni^2+(aq) -> 2Al^3+(aq) + 3Ni(s), \\quad n = 6" },
      {
        equation:
          "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = -0.25 - (-1.66) = 1.41\\ \\text{V}$",
      },
      { label: "Step 2 — Nernst equation" },
      {
        text: "The exponents in the reaction quotient come from the balanced equation — **squared** for Al^3+, **cubed** for Ni^2+:",
      },
      {
        equation:
          "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.059}{6}\\log\\dfrac{[\\mathrm{Al^{3+}}]^2}{[\\mathrm{Ni^{2+}}]^3}$",
      },
      { label: "Step 3 — substitute" },
      {
        equation:
          "$E_{cell} = 1.41 - \\dfrac{0.059}{6}\\log\\dfrac{(0.001)^2}{(0.1)^3} = 1.41 - \\dfrac{0.059}{6}\\log\\dfrac{10^{-6}}{10^{-3}}$",
      },
      { equation: "$= 1.41 - \\dfrac{0.059}{6}\\log 10^{-3} = 1.41 + \\dfrac{0.059 \\times 3}{6}$" },
      { text: "**E_cell = 1.41 + 0.0295 = 1.4395 V**" },
      {
        text: "Note the emf comes out **above** E°_cell, because the log term is negative — the reactant ion Ni^2+ is more concentrated than the product ion Al^3+, which favours the forward reaction.",
      },
      { label: "(ii) Why extrapolation fails for a weak electrolyte" },
      {
        text: "For a **strong** electrolyte, Λ_m varies with √c as a nearly straight line of gentle slope:",
      },
      { equation: "$\\Lambda_m = \\Lambda^\\circ_m - A\\sqrt{c}$" },
      {
        text: "The line can simply be extended back to √c = 0, where it meets the axis at **Λ°_m**. Dissociation is already complete at every concentration; all that changes on dilution is how much the ions hinder each other.",
      },
      {
        text: "For a **weak** electrolyte the situation is quite different. Its degree of dissociation α is small at ordinary concentrations, so Λ_m stays low over most of the range. As c approaches zero, α rises steeply towards 1, and Λ_m **shoots upward almost vertically**.",
      },
      {
        text: "The curve therefore runs **nearly parallel to the Λ_m axis** near the origin and never settles to a straight line, so extending it backwards gives **no definite intercept** — Λ°_m cannot be read off.",
      },
      {
        label: "What is done instead",
        text: "Λ°_m for a weak electrolyte is assembled from strong-electrolyte data using **Kohlrausch's law of independent migration**. For acetic acid, for instance:",
      },
      {
        equation:
          "$\\Lambda^\\circ_m(\\mathrm{CH_3COOH}) = \\Lambda^\\circ_m(\\mathrm{CH_3COONa}) + \\Lambda^\\circ_m(\\mathrm{HCl}) - \\Lambda^\\circ_m(\\mathrm{NaCl})$",
      },
    ],
    keyPoint:
      "Exponents in the Nernst log term come from the balanced equation; a weak electrolyte's Λ_m curve has no usable intercept.",
  },
  {
    id: "p23d-33b",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "medium",
    topic: "Conductivity and electrode potential",
    years: [2023],
    question:
      "(i) The molar conductivities of NH4^+ and Cl^− ions are 73.8 S cm^2 mol^−1 and 76.2 S cm^2 mol^−1 respectively. The conductivity of 0.1 M NH4Cl is 1.29 × 10^−2 S cm^−1. Calculate its molar conductivity and degree of dissociation.\n(ii) Calculate the half-cell potential at 298 K for the reaction Zn^2+ + 2e^− -> Zn if [Zn^2+] = 0.1 M and E°(Zn^2+/Zn) = −0.76 V.",
    answer: [
      { label: "(i) Step 1 — limiting molar conductivity from Kohlrausch's law" },
      {
        equation:
          "$\\Lambda^\\circ_m(\\mathrm{NH_4Cl}) = \\lambda^\\circ_{\\mathrm{NH_4^+}} + \\lambda^\\circ_{\\mathrm{Cl^-}} = 73.8 + 76.2$",
      },
      { text: "**Λ°_m = 150.0 S cm^2 mol^−1**" },
      { label: "Step 2 — molar conductivity at this concentration" },
      { equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{c} = \\dfrac{1.29 \\times 10^{-2} \\times 1000}{0.1}$" },
      { text: "**Λ_m = 129 S cm^2 mol^−1**" },
      { label: "Step 3 — degree of dissociation" },
      { equation: "$\\alpha = \\dfrac{\\Lambda_m}{\\Lambda^\\circ_m} = \\dfrac{129}{150} = 0.86$" },
      { text: "**α = 0.86, that is 86% dissociated.**" },
      {
        text: "The value is sensible for a salt of a weak base with a strong acid at this concentration — high, but not quite complete, the shortfall being due to interionic attraction.",
      },
      { label: "(ii) Half-cell potential" },
      {
        text: "The Nernst equation applies to a single electrode just as it does to a whole cell. For a reduction, the reduced form is the product:",
      },
      {
        equation:
          "$E = E^\\circ - \\dfrac{0.059}{n}\\log\\dfrac{1}{[\\mathrm{Zn^{2+}}]}$",
      },
      {
        text: "Zinc metal is a pure solid so its activity is 1 and it does not appear. With n = 2 and [Zn^2+] = 0.1 M:",
      },
      { equation: "$E = -0.76 - \\dfrac{0.059}{2}\\log\\dfrac{1}{0.1} = -0.76 - \\dfrac{0.059}{2}\\log 10$" },
      { equation: "$E = -0.76 - 0.0295$" },
      { text: "**E = −0.7895 V**" },
      {
        text: "The potential has become **more negative** than E°, which is what should happen: lowering the concentration of Zn^2+ below the standard 1 M makes the reduction less favourable, so zinc is a slightly better reducing agent under these conditions than in its standard state.",
      },
    ],
  },
  {
    id: "p23d-34",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Properties and oxidising action",
    years: [2023],
    question:
      "(i) Account for the following :\n(1) Zn^2+ salts are colourless while Ni^2+ salts are coloured.\n(2) Cr^2+ is a strong reducing agent.\n(3) Transition metals and their compounds show catalytic activities.\n(ii) Write the ionic equations for the oxidising action of MnO4^− in acidic medium with\n(1) I^− ion, and (2) Fe^2+ ion.",
    answer: [
      { label: "(i) (1) Zn^2+ colourless but Ni^2+ coloured" },
      {
        text: "Colour in these ions comes from **d–d transitions**, which need both an electron to promote and a vacancy to promote it into.",
      },
      {
        table: [
          ["Ion", "Configuration", "d–d transition possible?", "Colour"],
          ["**Zn^2+**", "3d^10 — **completely filled**", "No — nowhere for an electron to go", "**Colourless**"],
          ["**Ni^2+**", "3d^8 — partly filled", "Yes", "**Green**"],
        ],
      },
      {
        text: "In an octahedral field the d orbitals split into t2g and eg sets. Ni^2+ has vacancies in the eg set, so an electron can absorb visible light and jump; the colour seen is the complement of the light absorbed. Zn^2+ has every d orbital full, so no such jump is possible and it absorbs nothing in the visible range.",
      },
      { label: "(i) (2) Why Cr^2+ is a strong reducing agent" },
      {
        text: "Because losing one electron takes it to **Cr^3+**, which has the extra-stable half-filled **t2g^3** configuration.",
      },
      { equation: "Cr^2+ (d^4) -> Cr^3+ (d^3) + e^−" },
      {
        text: "In an octahedral field d^3 puts exactly one electron in each of the three t2g orbitals — a symmetrical, low-energy arrangement. Reaching it is so favourable that Cr^2+ gives up an electron readily, which is what being a reducing agent means. E°(Cr^3+/Cr^2+) = **−0.41 V**.",
      },
      {
        text: "Cr^2+ solutions are so strongly reducing that they reduce water itself, slowly liberating hydrogen.",
      },
      { label: "(i) (3) Why transition metals are catalysts" },
      {
        text: "Chiefly because of their **variable oxidation states**: the metal can accept electrons from one reactant and pass them to another, forming an intermediate and then reverting to its original state.",
      },
      {
        text: "Two further reasons are accepted: they provide a **large surface area** on which reactants adsorb and are held in the right orientation, and they form **complexes** with the reacting species, weakening the bonds to be broken.",
      },
      {
        text: "V2O5 in the Contact process, finely divided iron in the Haber process and nickel in hydrogenation are the standard examples.",
      },
      { label: "(ii) (1) Permanganate with iodide" },
      { equation: "2MnO4^− + 16H^+ + 10I^− -> 2Mn^2+ + 5I2 + 8H2O" },
      {
        text: "Each MnO4^− takes 5 electrons going from Mn(+7) to Mn(+2); each I^− gives up 1 going to iodine. Ten electrons are exchanged, hence the 2 : 10 ratio. The purple colour fades and iodine appears.",
      },
      { label: "(ii) (2) Permanganate with iron(II)" },
      { equation: "MnO4^− + 8H^+ + 5Fe^2+ -> Mn^2+ + 5Fe^3+ + 4H2O" },
      {
        text: "Here each Fe^2+ gives one electron, so five are needed per permanganate. This is the basis of the standard **permanganate titration of iron(II)**, which is self-indicating: the first drop of excess MnO4^− turns the solution permanently pink.",
      },
      {
        text: "Check the charges on the second equation: left side (−1) + 8 + 10 = **+17**, right side 2 + 15 = **+17**.",
      },
    ],
  },
  {
    id: "p23d-34b",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Oxometal anions and configurations",
    years: [2023],
    question:
      "(i) Name two oxometal anions of the 3d series of the transition metals in which the metal exhibits the oxidation state equal to its group number.\n(ii) What is the effect of increasing pH on a solution of K2Cr2O7 ?\n(iii) Why is Cu^+ not stable in aqueous solution ?\n(iv) Name a member of the lanthanoid series which is well-known to exhibit +4 oxidation state.\n(v) Name two elements of the 3d series which show anomalous electronic configuration.",
    answer: [
      { label: "(i) Two oxometal anions at the group oxidation state" },
      {
        table: [
          ["Anion", "Metal", "Group", "Oxidation state"],
          ["**MnO4^−** (permanganate)", "Mn", "7", "**+7**"],
          ["**Cr2O7^2−** (dichromate)", "Cr", "6", "**+6**"],
        ],
      },
      {
        text: "CrO4^2− (chromate) and VO3^− (vanadate, group 5, +5) are equally acceptable. In each the metal has used **all** its 3d and 4s electrons in bonding, which is only possible when highly electronegative oxygen is the partner.",
      },
      { label: "(ii) Effect of increasing pH on K2Cr2O7" },
      {
        text: "The **orange dichromate** is converted to **yellow chromate**:",
      },
      { equation: "Cr2O7^2− + 2OH^− -> 2CrO4^2− + H2O" },
      {
        text: "This is **not** a redox change — chromium remains at **+6** throughout. It is a pH-dependent equilibrium:",
      },
      { equation: "2CrO4^2− + 2H^+ <=> Cr2O7^2− + H2O" },
      {
        text: "Raising the pH removes H^+ and shifts the equilibrium to the left, so the yellow chromate dominates. Acidifying reverses it back to orange. The colour is therefore a direct indicator of the pH.",
      },
      { label: "(iii) Why Cu^+ is not stable in water" },
      { text: "Because it **disproportionates**:" },
      { equation: "2Cu^+(aq) -> Cu^2+(aq) + Cu(s)" },
      {
        text: "The driving force is the far more negative **hydration enthalpy of Cu^2+** — about −2121 kJ mol^−1 against −582 for Cu^+. Its higher charge and smaller size bind water molecules much more strongly, and the energy released outweighs the second ionisation energy.",
      },
      {
        text: "Cu^+ is perfectly stable where no hydration occurs, as in solid CuCl and Cu2O. It is aqueous solution specifically that destroys it.",
      },
      { label: "(iv) A lanthanoid with a well-known +4 state" },
      { text: "**Cerium (Ce)**, as Ce^4+." },
      {
        text: "Ce^4+ has the configuration [Xe] 4f^0 — the empty f subshell is what makes the state accessible. It reverts readily to the usual +3, so it is a **strong oxidising agent** (E° = +1.74 V), and ceric ammonium sulphate is used as a volumetric oxidant. Terbium also shows +4, though less commonly.",
      },
      { label: "(v) Two elements with anomalous configurations" },
      { text: "**Chromium (Cr)** and **copper (Cu)**." },
      {
        table: [
          ["Element", "Expected", "Actual", "Why"],
          ["**Cr**", "3d^4 4s^2", "**3d^5 4s^1**", "A half-filled 3d^5 set is extra stable"],
          ["**Cu**", "3d^9 4s^2", "**3d^10 4s^1**", "A completely filled 3d^10 set is extra stable"],
        ],
      },
      {
        text: "The 3d and 4s levels are very close in energy, so promoting one 4s electron costs little and is repaid by the **symmetry and exchange energy** of a half-filled or fully filled subshell.",
      },
    ],
  },
  {
    id: "p23d-35",
    chapter: 8,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Carbonyl reactions and acidity",
    years: [2023],
    question:
      "(a) Draw the structure of the 2,4-dinitrophenylhydrazone of benzaldehyde.\n(b) Which acid of the following pair is a stronger acid : F3C–C6H4–COOH or H3C–C6H4–COOH ?\n(c) Write the chemical equation involved in Rosenmund's reduction.\n(d) Why are α-hydrogen atoms of aldehydes and ketones acidic in nature ?\n(e) Write a chemical test to distinguish between benzaldehyde and benzoic acid.",
    answer: [
      { label: "(a) 2,4-Dinitrophenylhydrazone of benzaldehyde" },
      {
        text: "2,4-DNP condenses with the carbonyl group, losing water:",
      },
      {
        equation:
          "C6H5–CHO + H2N–NH–C6H3(NO2)2 -> C6H5–CH=N–NH–C6H3(NO2)2 + H2O",
      },
      {
        text: "**Structure: C6H5–CH=N–NH–C6H3(NO2)2** — the benzaldehyde carbonyl oxygen replaced by =N–NH–, joined to a benzene ring carrying nitro groups at positions 2 and 4.",
      },
      {
        text: "These derivatives are **bright orange-red crystalline solids** with sharp melting points, which is why 2,4-DNP (Brady's reagent) is the classic test for an aldehyde or ketone: an orange precipitate confirms a carbonyl group, and the melting point identifies which one.",
      },
      { label: "(b) Which acid is stronger" },
      { text: "**F3C–C6H4–COOH**, the trifluoromethyl-substituted acid." },
      {
        text: "The two substituents pull in opposite directions:",
      },
      {
        table: [
          ["Group", "Effect", "Consequence for the carboxylate", "Acid strength"],
          ["**–CF3**", "Strongly **electron withdrawing** (−I)", "Disperses the negative charge, stabilising it", "**Stronger**"],
          ["–CH3", "Electron **releasing** (+I)", "Intensifies the negative charge, destabilising it", "Weaker"],
        ],
      },
      {
        text: "Three highly electronegative fluorine atoms make –CF3 one of the most powerful electron-withdrawing groups in organic chemistry. Pulling electron density away from the –COO^− spreads the charge and lowers the anion's energy, so the acid dissociates more readily. The methyl group does the reverse — which is why p-toluic acid is weaker even than benzoic acid itself.",
      },
      { label: "(c) Rosenmund's reduction" },
      { equation: "CH3–CO–Cl ->[H2 / Pd–BaSO4][boiling xylene] CH3–CHO + HCl" },
      {
        text: "An **acyl chloride** is hydrogenated over palladium supported on barium sulphate to give the **aldehyde**.",
      },
      {
        text: "The essential feature is the **poisoned catalyst**. Barium sulphate — usually with a little sulphur or quinoline — deliberately reduces the palladium's activity so that the reduction **stops at the aldehyde** instead of running on to the primary alcohol. Without the poison the product would be ethanol.",
      },
      { label: "(d) Why α-hydrogens are acidic" },
      {
        text: "Because the **carbanion left behind is stabilised by resonance** with the carbonyl group.",
      },
      { equation: "–CH2–CO– <-> –CH=C(–O^−)–" },
      {
        text: "When a base removes an α-hydrogen, the negative charge does not stay on carbon: it is delocalised onto the **electronegative carbonyl oxygen**, which accommodates it far better. That delocalised anion is the **enolate ion**, and its stability is what makes the proton removable.",
      },
      {
        text: "The **−I effect** of the carbonyl group helps too, drawing electron density away from the α-carbon and weakening the C–H bond.",
      },
      {
        text: "The acidity is modest — pK_a around 19–20, far weaker than a carboxylic acid — but it is enough for a strong base to generate the enolate, which is why α-hydrogens are behind **aldol condensation**, the **iodoform** reaction and α-halogenation.",
      },
      { label: "(e) Distinguishing benzaldehyde from benzoic acid" },
      {
        text: "Add **sodium hydrogen carbonate** solution to each.",
      },
      { equation: "C6H5COOH + NaHCO3 -> C6H5COONa + H2O + CO2↑" },
      {
        table: [
          ["Compound", "With NaHCO3", "With Tollens' reagent"],
          ["**Benzoic acid**", "**Brisk effervescence** of CO2", "No reaction"],
          ["**Benzaldehyde**", "No reaction", "**Silver mirror**"],
        ],
      },
      {
        text: "Either test distinguishes them, and they work in opposite directions, which makes the pair a useful confirmation. The carbonate test relies on benzoic acid being a stronger acid than carbonic acid; benzaldehyde is not acidic at all.",
      },
    ],
    keyPoint:
      "Rosenmund's poisoned catalyst stops an acyl chloride at the aldehyde; α-hydrogens are acidic because the enolate delocalises onto oxygen.",
  },
];
