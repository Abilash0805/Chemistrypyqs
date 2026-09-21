import type { Question } from "@/types";

/**
 * CBSE 2023 Main, paper 56/2/1 Set-1, with answers from the official Marking
 * Scheme bound into the same PDF.
 *
 * A handful of this paper's questions are word-for-word repeats of 56/1/1 —
 * the alpha-helix MCQ, Reimer-Tiemann plus acetylation of salicylic acid, the
 * carbylamine and Gabriel pair, and the Delta-G / log Kc calculation for the
 * Ni/Ag cell. Those are left out rather than duplicated; everything else from
 * the paper is here.
 *
 * One transcription note: the scheme prints the carbylamine equation with
 * NaOH and H2O uncancelled (R-NH2 + CHCl3 + NaOH -> RNC + 3NaCl + H2O), which
 * does not balance. The balanced form is used here.
 */
export const P2023_5621: Question[] = [
  /* ---------------------------------------------------------------- */
  /* SECTION A — MCQ, 1 mark each                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "p23b-1",
    chapter: 6,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Elimination reactions",
    years: [2023],
    question:
      "The conversion of an alkyl halide into an alkene by alcoholic KOH is classified as",
    options: [
      "a substitution reaction",
      "an addition reaction",
      "a dehydrohalogenation reaction",
      "a dehydration reaction",
    ],
    correct: 2,
    answer: [
      { text: "**A dehydrohalogenation reaction.**" },
      {
        text: "The name says exactly what leaves: a **hydrogen** and a **halogen** are removed from adjacent carbons, and the electrons left behind form the π bond. It is a **β-elimination**, because the hydrogen comes from the carbon β to the one bearing the halide.",
      },
      { equation: "CH3CH2CH2–Br + KOH ->[ethanol][Δ] CH3–CH=CH2 + KBr + H2O" },
      {
        text: "Option (d) is the trap. **Dehydration** means loss of _(water)_, which is what happens to an alcohol with concentrated H2SO4 — not to a halide. And it is not substitution, because nothing replaces the halogen.",
      },
      {
        text: "Remember the solvent decides the path: **alcoholic** KOH gives elimination, **aqueous** KOH gives substitution to the alcohol.",
      },
    ],
  },
  {
    id: "p23b-3",
    chapter: 9,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Basic character of amines",
    years: [2023],
    question: "Among the following, which is the strongest base ?",
    options: [
      "C6H5NH2 (aniline)",
      "p-CH3–C6H4–NH2 (p-toluidine)",
      "C6H5–CH2–NH2 (benzylamine)",
      "p-O2N–C6H4–NH2 (p-nitroaniline)",
    ],
    correct: 2,
    answer: [
      { text: "**Benzylamine, C6H5–CH2–NH2.**" },
      {
        text: "The decisive point is **where the –NH2 group is attached**. In benzylamine it sits on a CH2 group, one carbon away from the ring, so the nitrogen lone pair is **not** conjugated with the ring at all. Benzylamine therefore behaves as an ordinary **alkyl amine** and is far more basic than any of the anilines.",
      },
      {
        text: "In the other three the –NH2 is bonded directly to the ring, so the lone pair is delocalised into it and is much less available.",
      },
      {
        table: [
          ["Compound", "Substituent effect", "Basicity"],
          ["Benzylamine", "No conjugation with the ring", "**Strongest**"],
          ["p-Toluidine", "–CH3 is electron-releasing, so it partly offsets the delocalisation", "Next"],
          ["Aniline", "Lone pair delocalised into the ring", "Weaker"],
          ["p-Nitroaniline", "–NO2 withdraws further electron density", "**Weakest**"],
        ],
      },
      {
        text: "The nitro group in the para position is especially damaging because its **−R effect** works through the ring straight onto the nitrogen's lone pair.",
      },
    ],
    keyPoint:
      "An –NH2 one carbon off the ring keeps its lone pair; attached directly to the ring, it loses it to resonance.",
  },
  {
    id: "p23b-4",
    chapter: 3,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "First order kinetics",
    years: [2023],
    question: "The slope in the plot of ln[R] vs. time for a first order reaction is",
    options: ["+ k / 2.303", "− k", "− k / 2.303", "+ k"],
    correct: 1,
    answer: [
      { text: "**−k**" },
      {
        text: "The integrated rate law for a first order reaction, in **natural** logarithms, is:",
      },
      { equation: "$\\ln[R] = \\ln[R]_0 - kt$" },
      {
        text: "That is the straight line y = mx + c with y = ln[R] and x = t, so the **slope is −k** and the intercept is ln[R]0. The slope is negative simply because the reactant is being used up.",
      },
      {
        label: "Where the 2.303 belongs",
        text: "Options (a) and (c) are there to catch the confusion with the **base-10** form. Converting gives:",
      },
      { equation: "$\\log[R] = \\log[R]_0 - \\dfrac{kt}{2.303}$" },
      {
        text: "So a plot of **log[R]** against t has slope **−k/2.303**, while a plot of **ln[R]** against t has slope **−k**. Read which logarithm the question uses before picking.",
      },
    ],
  },
  {
    id: "p23b-9",
    chapter: 7,
    type: "mcq",
    marks: 1,
    difficulty: "hard",
    topic: "Williamson synthesis",
    years: [2023],
    question:
      "Which of the following reactions are feasible ?\n(a) CH3CH2Br + Na^+ ^−O–C(CH3)3 -> CH3CH2–O–C(CH3)3\n(b) (CH3)3C–Cl + Na^+ ^−O–CH2CH3 -> CH3CH2–O–C(CH3)3",
    options: ["(a) only", "(b) only", "Both (a) and (b)", "Neither (a) nor (b)"],
    correct: 0,
    answer: [
      { text: "**(a) only.**" },
      {
        text: "Both routes would give the _(same)_ ether on paper, but Williamson's synthesis proceeds by **S_N2**, and S_N2 is extremely sensitive to crowding at the carbon being attacked.",
      },
      {
        label: "Why (a) works",
        text: "The halide is **primary** (CH3CH2Br). Its carbon is open to backside attack, so even the bulky tert-butoxide ion can reach it and substitution succeeds.",
      },
      {
        label: "Why (b) fails",
        text: "The halide is **tertiary** ((CH3)3C–Cl). Three methyl groups block the approach completely, so S_N2 cannot happen. Instead the ethoxide ion acts as a **base**, pulls off a β-hydrogen, and the reaction gives **2-methylpropene** by elimination.",
      },
      { equation: "(CH3)3C–Cl + CH3CH2O^−Na^+ -> (CH3)2C=CH2 + CH3CH2OH + NaCl" },
      {
        text: "The rule to carry away: in Williamson's synthesis always pair the **alkoxide from the more hindered partner** with the **halide from the less hindered one**. For an unsymmetrical ether there is usually only one combination that works.",
      },
    ],
    keyPoint:
      "Williamson is S_N2: the alkyl halide must be primary. A tertiary halide eliminates instead.",
  },
  {
    id: "p23b-10",
    chapter: 8,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Nucleophilic addition",
    years: [2023],
    question: "Which of the following is most reactive in nucleophilic addition reactions ?",
    options: ["HCHO", "CH3CHO", "CH3COCH3", "CH3COC2H5"],
    correct: 0,
    answer: [
      { text: "**HCHO, methanal.**" },
      {
        text: "Reactivity towards nucleophilic addition falls as alkyl groups are added to the carbonyl carbon, for two reasons that push the same way:",
      },
      {
        points: [
          "**Inductive effect.** An alkyl group releases electron density (+I), which reduces the δ+ on the carbonyl carbon and makes it less attractive to a nucleophile.",
          "**Steric hindrance.** Alkyl groups physically block the nucleophile's approach, and the crowding gets worse in the tetrahedral product than it was in the planar reactant.",
        ],
      },
      {
        text: "Methanal has **two hydrogens** and therefore neither disadvantage, so it is the most reactive of all carbonyl compounds. The order across the options is:",
      },
      { equation: "HCHO > CH3CHO > CH3COCH3 > CH3COC2H5" },
      {
        text: "The same reasoning gives the general rule **aldehydes > ketones** in nucleophilic addition — and it is exactly why methanal is so reactive that in water it exists largely as its hydrate.",
      },
    ],
  },
  {
    id: "p23b-18",
    chapter: 6,
    type: "assertion-reason",
    marks: 1,
    difficulty: "easy",
    topic: "Reactivity of haloalkanes",
    years: [2023],
    question:
      "Assertion (A) : Nucleophilic substitution of iodoethane is easier than chloroethane.\nReason (R) : Bond enthalpy of the C–I bond is less than that of the C–Cl bond.",
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
        text: "The rate-determining business of a nucleophilic substitution is breaking the **carbon–halogen bond**. The weaker that bond, the easier the halide leaves and the faster the reaction.",
      },
      {
        table: [
          ["Bond", "Bond enthalpy / kJ mol^−1", "Leaving ability"],
          ["C–F", "452", "Poorest"],
          ["C–Cl", "351", "↓"],
          ["C–Br", "293", "↓"],
          ["C–I", "234", "**Best**"],
        ],
      },
      {
        text: "Iodine is a large atom, so its orbital overlaps poorly with carbon's much smaller 2p orbital. The resulting long, weak bond breaks readily, making **iodide the best leaving group** of the four. R gives precisely this reason, so it is the correct explanation.",
      },
      {
        text: "There is a second, consistent argument: **I^− is the most stable halide ion** once released, because its charge is spread over the largest volume. A stable leaving group is a good leaving group. The overall reactivity order is R–I > R–Br > R–Cl > R–F.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION B — very short answer, 2 marks each                      */
  /* ---------------------------------------------------------------- */
  {
    id: "p23b-20",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Batteries and conductance",
    years: [2023],
    question:
      "Give reasons :\n(i) A mercury cell delivers a constant potential during its lifetime.\n(ii) In the experimental determination of electrolytic conductance, direct current (DC) is not used.",
    answer: [
      { label: "(i) The mercury cell's constant potential" },
      {
        text: "Because **the overall cell reaction involves no ion whose concentration changes** during discharge.",
      },
      { equation: "Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l)" },
      {
        text: "Everything here is a **solid or a pure liquid**. The electrolyte — a paste of KOH and ZnO — is not consumed; it only carries charge. Since the Nernst equation depends on the concentrations of the species in the reaction quotient, and none of them changes, the potential stays at about **1.35 V** for almost the whole life of the cell.",
      },
      {
        text: "That steadiness is why mercury cells were chosen for hearing aids and watches, where a drifting voltage would be a nuisance.",
      },
      { label: "(ii) Why DC is not used for conductance measurements" },
      {
        text: "Because **direct current would electrolyse the solution and change its composition.**",
      },
      {
        points: [
          "A steady current drives a genuine redox reaction at each electrode, so the ions being measured are steadily removed.",
          "The products collect on the electrodes as **polarisation**, which sets up a back-emf and gives a falsely high resistance.",
          "The concentration therefore drifts during the measurement, and the reading never settles.",
        ],
      },
      {
        text: "**Alternating current** avoids all of this. The polarity reverses hundreds of times a second, so no net electrolysis occurs and nothing accumulates at the electrodes. This is why conductance is measured with an AC source and a **Wheatstone bridge**, with platinised platinum electrodes to spread the current further.",
      },
    ],
  },
  {
    id: "p23b-20b",
    chapter: 2,
    type: "short",
    marks: 2,
    difficulty: "easy",
    topic: "Fuel cells",
    years: [2023],
    question:
      "Define a fuel cell with an example. What advantages do fuel cells have over primary and secondary batteries ?",
    answer: [
      { label: "Definition" },
      {
        text: "A **fuel cell** is a galvanic cell that converts the energy of **combustion of a fuel** directly into electrical energy, instead of burning the fuel to raise steam and drive a generator.",
      },
      {
        text: "Its distinguishing feature is that the reactants are **fed in continuously** from outside rather than being stored inside the cell, so it never 'runs down' as long as fuel is supplied.",
      },
      { label: "Example — the H2–O2 fuel cell" },
      { equation: "At the anode: 2H2(g) + 4OH^−(aq) -> 4H2O(l) + 4e^−" },
      { equation: "At the cathode: O2(g) + 2H2O(l) + 4e^− -> 4OH^−(aq)" },
      { equation: "Overall: 2H2(g) + O2(g) -> 2H2O(l)" },
      {
        text: "Hydrogen and oxygen are bubbled through porous carbon electrodes containing a finely divided platinum or palladium catalyst, into concentrated aqueous KOH. It was used in the **Apollo space programme**, where the water produced was drinking water for the crew.",
      },
      { label: "Advantages — any two earn the marks" },
      {
        points: [
          "**High efficiency.** Around 70%, against roughly 40% for a thermal power station, because the chemical energy is not first turned into heat.",
          "**Pollution free.** The only product of the H2–O2 cell is water — no CO2, no oxides of nitrogen or sulphur.",
          "**Continuous supply.** It does not need recharging or replacing; it runs as long as fuel is fed in.",
          "**No storage of reactants**, so the cell itself is lighter for the energy delivered.",
        ],
      },
    ],
  },
  {
    id: "p23b-22",
    chapter: 5,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Nomenclature",
    years: [2023],
    question:
      "Write the IUPAC names of the following :\n(i) [Co(NH3)5(ONO)]^2+\n(ii) K2[NiCl4]",
    answer: [
      { label: "(i) [Co(NH3)5(ONO)]^2+" },
      { text: "**Pentaamminenitrito-O-cobalt(III) ion**" },
      {
        points: [
          "Ligands alphabetically: **ammine** before **nitrito**, with the prefix _(penta)_ ignored for alphabetising.",
          "The ligand is written **ONO**, not NO2, which tells us it is bonded through **oxygen** — hence _(nitrito-O)_ (written _(nitrito-κO)_ in strict modern IUPAC).",
          "Oxidation state: x + 5(0) + (−1) = +2, so **x = +3**.",
          "The whole species is a cation, so it ends in _(ion)_ with no separate counter-ion named.",
        ],
      },
      {
        text: "This is one half of a classic pair of **linkage isomers**. Bonded through nitrogen the same ligand gives [Co(NH3)5(NO2)]^2+, **pentaamminenitrito-N-cobalt(III) ion**, which is yellow where the O-bonded form is red.",
      },
      { label: "(ii) K2[NiCl4]" },
      { text: "**Potassium tetrachloridonickelate(II)**" },
      {
        points: [
          "The complex is the **anion** here, so its metal name takes the **-ate** ending: nickel becomes **nickelate**.",
          "The cation, potassium, is named first as a separate word.",
          "Oxidation state: x + 4(−1) = −2, so **x = +2**.",
          "Chloride as a ligand is **chlorido** in current IUPAC usage.",
        ],
      },
      {
        text: "For reference, [NiCl4]^2− is **tetrahedral** and paramagnetic — chloride is a weak field ligand, so the 3d^8 electrons stay unpaired and the hybridisation is sp^3.",
      },
    ],
  },
  {
    id: "p23b-22b",
    chapter: 5,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Types of complexes",
    years: [2023],
    question:
      "(i) What is a chelate complex ? Give one example.\n(ii) What are heteroleptic complexes ? Give one example.",
    answer: [
      { label: "(i) Chelate complex" },
      {
        text: "A complex formed when a **didentate or polydentate ligand** binds the same metal ion through two or more donor atoms, closing a **ring** that includes the metal.",
      },
      { text: "**Example: [Co(ox)3]^3−** — three oxalate ions, each binding through two oxygen atoms to give three five-membered rings. [Ni(en)3]^2+ and [Ca(EDTA)]^2− are equally good answers." },
      {
        text: "Such complexes are unusually stable, an effect known as the **chelate effect**. Once one end of the ligand is attached the other is held right next to the metal, so it binds readily, and releasing the ligand needs _(both)_ bonds to break at once. Five- and six-membered rings are the most stable.",
      },
      {
        text: "This stability is what makes EDTA useful for softening hard water and for treating lead poisoning.",
      },
      { label: "(ii) Heteroleptic complex" },
      {
        text: "A complex in which the metal is bound to **more than one kind of ligand**.",
      },
      { text: "**Example: [Co(NH3)4Cl2]^+** — four ammine ligands and two chlorido ligands on the same cobalt." },
      {
        text: "The contrast is with a **homoleptic** complex, where every ligand is the same, as in [Co(NH3)6]^3+ or [Ni(CO)4].",
      },
      {
        text: "Heteroleptic complexes matter because having two different ligands is what makes **geometrical isomerism** possible — [Co(NH3)4Cl2]^+ exists as distinct cis and trans forms, whereas a homoleptic octahedral complex has only one arrangement.",
      },
    ],
  },
  {
    id: "p23b-24",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Conversions",
    years: [2023],
    question:
      "Do the following conversions in not more than two steps :\n(a) CH3CN to CH3–CO–CH3\n(b) Benzoic acid (C6H5COOH) to benzene",
    answer: [
      { label: "(a) Ethanenitrile -> propanone" },
      {
        text: "A **Grignard reagent** adds to the carbon of a nitrile to give an imine salt, which hydrolyses straight to the ketone:",
      },
      { equation: "CH3–C≡N ->[(i) CH3MgBr, dry ether][(ii) H3O^+] CH3–CO–CH3" },
      {
        text: "The count works out: the nitrile supplies two carbons, the Grignard adds a third, giving propanone. This is a standard one-pot method for making ketones from nitriles, and the intermediate is the magnesium salt of the imine, CH3–C(=NMgBr)–CH3, which the acidic work-up hydrolyses.",
      },
      { label: "(b) Benzoic acid -> benzene" },
      {
        text: "**Decarboxylation** — heating the sodium salt with soda lime removes the carboxyl group as carbonate:",
      },
      { equation: "C6H5COOH + NaOH -> C6H5COONa + H2O" },
      { equation: "C6H5COONa ->[NaOH / CaO][Δ] C6H6 + Na2CO3" },
      {
        text: "Soda lime is NaOH mixed with CaO; the calcium oxide keeps the sodium hydroxide from absorbing water and attacking the glass. The two steps can be written as one if the acid is heated directly with soda lime.",
      },
      {
        text: "This is the general laboratory method for shortening a chain by one carbon — it works for aliphatic acids too, turning sodium ethanoate into methane.",
      },
    ],
  },
  {
    id: "p23b-25",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Nucleic acids",
    years: [2023],
    question: "Write two differences between DNA and RNA.",
    answer: [
      {
        table: [
          ["", "DNA", "RNA"],
          ["Sugar", "**2-Deoxy-D-ribose** — no –OH at C-2", "**D-Ribose** — –OH present at C-2"],
          ["Bases", "Adenine, Guanine, Cytosine, **Thymine**", "Adenine, Guanine, Cytosine, **Uracil**"],
          ["Structure", "Double stranded helix", "Usually single stranded"],
          ["Function", "Stores and transmits hereditary information", "Carries out protein synthesis"],
          ["Stability", "More stable; does not hydrolyse easily", "Less stable, hydrolysed by alkali"],
        ],
      },
      {
        text: "Any two rows earn the marks, but the **sugar** and the **base** differences are the ones to give — they are what the names stand for and what every other difference follows from.",
      },
      {
        text: "The missing 2-hydroxyl in DNA is the reason for its greater stability: in RNA that –OH sits right next to the phosphate ester and can attack it, so RNA is readily cleaved by alkali while DNA is not. That is exactly what suits DNA to long-term storage and RNA to a short working life.",
      },
      {
        text: "On the bases: **thymine is 5-methyluracil**, so DNA and RNA differ only by that one methyl group in this pair.",
      },
    ],
    keyPoint: "Sugar and base are the two core differences: deoxyribose/thymine against ribose/uracil.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION C — short answer, 3 marks each                           */
  /* ---------------------------------------------------------------- */
  {
    id: "p23b-26",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Mechanisms and hydrogen bonding",
    years: [2023],
    question:
      "(i) Write the mechanism of the following reaction :\n2CH3CH2OH ->[H^+][413 K] CH3–CH2–O–CH2–CH3 + H2O\n(ii) Why is ortho-nitrophenol steam volatile while para-nitrophenol is not ?",
    answer: [
      {
        label: "(i) Acid-catalysed formation of ethoxyethane — an S_N2 path",
        text: "At **413 K** the reaction takes the substitution route to the ether. (At the higher 443 K, elimination wins and ethene is formed instead.)",
      },
      { label: "Step 1 — protonation" },
      { equation: "CH3CH2–OH + H^+ <=> CH3CH2–OH2^+" },
      {
        text: "Protonating the oxygen converts –OH, a poor leaving group, into –OH2^+, an excellent one.",
      },
      { label: "Step 2 — nucleophilic attack (slow, rate-determining)" },
      { equation: "CH3CH2–OH + CH3CH2–OH2^+ -> CH3CH2–O^+(H)–CH2CH3 + H2O" },
      {
        text: "A **second, unprotonated** alcohol molecule attacks the carbon from behind, displacing water. This is the key step and it is **S_N2**, which is why the method works well only for primary alcohols — a tertiary alcohol would be too hindered and would eliminate instead.",
      },
      { label: "Step 3 — deprotonation" },
      { equation: "CH3CH2–O^+(H)–CH2CH3 <=> CH3CH2–O–CH2CH3 + H^+" },
      {
        text: "Loss of the proton gives the ether and regenerates the catalyst.",
      },
      { label: "(ii) Why o-nitrophenol is steam volatile" },
      {
        text: "Because it forms **intramolecular** hydrogen bonds, while p-nitrophenol forms **intermolecular** ones.",
      },
      {
        table: [
          ["", "o-Nitrophenol", "p-Nitrophenol"],
          ["–OH and –NO2 positions", "Adjacent", "Opposite ends of the ring"],
          ["Hydrogen bonding", "**Intramolecular** — within one molecule, forming a six-membered chelate ring", "**Intermolecular** — between molecules"],
          ["Association between molecules", "None", "Extensive"],
          ["Volatility", "**High — steam volatile**", "Low"],
          ["Melting point", "45 °C", "114 °C"],
        ],
      },
      {
        text: "In the ortho isomer the –OH hydrogen reaches the neighbouring nitro oxygen and bonds to it **inside the same molecule**. That hydrogen is then unavailable to bond to other molecules, so the molecules barely attract one another and the solid is easily vaporised.",
      },
      {
        text: "In the para isomer the two groups are too far apart for that, so each –OH bonds to a _(neighbouring)_ molecule. The resulting network has to be broken before anything can evaporate, which takes far more energy.",
      },
      {
        text: "This difference is genuinely useful: a mixture of the two isomers is separated by **steam distillation**, the ortho isomer coming over with the steam and the para isomer staying behind.",
      },
    ],
    keyPoint:
      "Intramolecular H-bonding (ortho) frees molecules from each other and raises volatility; intermolecular (para) locks them together.",
  },
  {
    id: "p23b-26b",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of phenols and ethers",
    years: [2023],
    question:
      "What happens when :\n(i) Anisole is treated with CH3Cl / anhydrous AlCl3 ?\n(ii) Phenol is oxidised with Na2Cr2O7 / H^+ ?\n(iii) (CH3)3C–OH is heated with Cu at 573 K ?\nWrite the chemical equation in support of your answer.",
    answer: [
      { label: "(i) Friedel-Crafts alkylation of anisole" },
      {
        text: "The **–OCH3 group is strongly activating and o,p-directing**, so methylation occurs at the ortho and para positions. The para product dominates because the ortho positions are hindered by the methoxy group.",
      },
      { equation: "C6H5–OCH3 + CH3Cl ->[anhyd. AlCl3] 2-CH3–C6H4–OCH3 + 4-CH3–C6H4–OCH3 + HCl" },
      {
        text: "**Products: 2-methylanisole and 4-methylanisole**, with 4-methylanisole the major one.",
      },
      {
        text: "Note that an ether _(can)_ undergo Friedel-Crafts where aniline cannot: the ether oxygen is a much weaker Lewis base than an amino nitrogen, so it does not tie up the AlCl3 catalyst.",
      },
      { label: "(ii) Oxidation of phenol" },
      {
        text: "Phenol is oxidised to **benzoquinone** (cyclohexa-2,5-diene-1,4-dione), a conjugated diketone:",
      },
      { equation: "C6H5OH ->[Na2Cr2O7 / H^+] C6H4O2 (benzoquinone)" },
      {
        text: "Two hydrogens are removed — one from the –OH and one from the para position — and the para carbon picks up an oxygen. The aromatic ring is **lost** in the process, which is unusual and is only possible because the resulting quinone is itself stabilised by conjugation.",
      },
      {
        text: "The product is a bright **yellow** solid, and the colour change is a useful indication that the oxidation has worked.",
      },
      { label: "(iii) 2-Methylpropan-2-ol with hot copper" },
      {
        text: "A **tertiary** alcohol has no hydrogen on the carbinol carbon, so it cannot be dehydrogenated to a carbonyl compound. Instead hot copper causes **dehydration**, and an alkene is formed:",
      },
      { equation: "(CH3)3C–OH ->[Cu][573 K] (CH3)2C=CH2 + H2O" },
      {
        text: "**Product: 2-methylpropene.**",
      },
      {
        text: "This is the basis of a neat classification test with Cu at 573 K: a **1°** alcohol gives an aldehyde, a **2°** alcohol gives a ketone, and a **3°** alcohol gives an alkene.",
      },
    ],
  },
  {
    id: "p23b-27",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactivity and Grignard reagents",
    years: [2023],
    question:
      "Answer any three of the following :\n(a) Which isomer of C5H10 gives a single monochloro compound C5H9Cl in bright sunlight ?\n(b) Arrange the following compounds in increasing order of reactivity towards S_N2 reaction: 2-bromopentane, 1-bromopentane, 2-bromo-2-methylbutane\n(c) Why does p-dichlorobenzene have a higher melting point than the ortho- and meta-isomers ?\n(d) Identify A and B: cyclobutyl bromide ->[Mg / dry ether] A ->[H2O] B",
    answer: [
      { label: "(a) The isomer giving one monochloro product" },
      { text: "**Cyclopentane.**" },
      {
        text: "C5H10 has one degree of unsaturation, so it is either a pentene or a cycloalkane. For free-radical chlorination to give a **single** product, every hydrogen in the molecule must be **equivalent**.",
      },
      {
        text: "In cyclopentane all ten hydrogens sit on identical CH2 groups of a symmetrical ring, so replacing any one of them gives the same chlorocyclopentane. The pentene isomers all have several different kinds of hydrogen and would give mixtures.",
      },
      { label: "(b) Increasing order of S_N2 reactivity" },
      { text: "**2-Bromo-2-methylbutane < 2-bromopentane < 1-bromopentane**" },
      {
        text: "S_N2 needs the nucleophile to attack the carbon from the **side opposite** the leaving group, so anything crowding that carbon slows it down. Reactivity therefore runs **1° > 2° > 3°** — the exact reverse of the S_N1 order.",
      },
      {
        table: [
          ["Compound", "Class", "Groups on the carbon", "S_N2 rate"],
          ["2-Bromo-2-methylbutane", "3°", "Three alkyl", "Slowest"],
          ["2-Bromopentane", "2°", "Two alkyl", "Middle"],
          ["1-Bromopentane", "1°", "One alkyl", "**Fastest**"],
        ],
      },
      { label: "(c) Why p-dichlorobenzene melts highest" },
      {
        text: "Because the **para isomer is more symmetrical**, so it packs more closely and regularly into the crystal lattice.",
      },
      {
        text: "A well-fitting lattice has stronger overall intermolecular forces, and more energy is needed to break it down — so the melting point is higher. The ortho and meta isomers are less symmetrical, pack awkwardly, and melt lower.",
      },
      {
        table: [
          ["Isomer", "Melting point"],
          ["o-Dichlorobenzene", "−17 °C"],
          ["m-Dichlorobenzene", "−25 °C"],
          ["**p-Dichlorobenzene**", "**+53 °C**"],
        ],
      },
      {
        text: "Note this is about **melting**, not boiling. Boiling points follow dipole moment instead, and there the ortho isomer wins because its two C–Cl dipoles reinforce rather than cancel.",
      },
      { label: "(d) The Grignard reagent and its hydrolysis" },
      { equation: "C4H7–Br ->[Mg / dry ether] C4H7–MgBr ->[H2O] C4H8 + Mg(OH)Br" },
      {
        points: [
          "**A = cyclobutylmagnesium bromide**, C4H7MgBr — the Grignard reagent.",
          "**B = cyclobutane**, C4H8.",
        ],
      },
      {
        text: "The carbon bonded to magnesium is strongly **nucleophilic** — effectively a carbanion — so it grabs a proton from any source with an acidic hydrogen. Water is quite acidic enough, and the alkane is the result.",
      },
      {
        text: "This is precisely why Grignard reagents must be prepared and used under **strictly anhydrous** conditions: a trace of moisture destroys the reagent before it can do anything useful.",
      },
    ],
  },
  {
    id: "p23b-28",
    chapter: 3,
    type: "numerical",
    marks: 3,
    difficulty: "hard",
    topic: "Arrhenius equation",
    years: [2023],
    question:
      "A first order reaction is 50% complete in 30 minutes at 300 K and in 10 minutes at 320 K. Calculate the activation energy (E_a) for the reaction.\n[R = 8.314 J K^−1 mol^−1; log 2 = 0.3010, log 3 = 0.4771, log 4 = 0.6021]",
    answer: [
      {
        label: "Step 1 — turn the half-lives into rate constants",
        text: "\"50% complete\" is the **half-life**, and for a first order reaction:",
      },
      { equation: "$k = \\dfrac{0.693}{t_{1/2}}$" },
      { equation: "$k_1 = \\dfrac{0.693}{30}\\ \\text{min}^{-1}, \\qquad k_2 = \\dfrac{0.693}{10}\\ \\text{min}^{-1}$" },
      {
        label: "Step 2 — note the ratio",
        text: "The 0.693 cancels, which is why the units of k never matter here:",
      },
      { equation: "$\\dfrac{k_2}{k_1} = \\dfrac{30}{10} = 3$" },
      {
        label: "Step 3 — apply the Arrhenius equation in two-temperature form",
      },
      {
        equation:
          "$\\log\\dfrac{k_2}{k_1} = \\dfrac{E_a}{2.303\\,R}\\left[\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right]$",
      },
      {
        equation:
          "$\\log 3 = \\dfrac{E_a}{2.303 \\times 8.314}\\left[\\dfrac{1}{300} - \\dfrac{1}{320}\\right]$",
      },
      {
        label: "Step 4 — simplify the bracket",
        text: "The difference of the reciprocals is (320 − 300)/(300 × 320) = 20/96000:",
      },
      {
        equation:
          "$E_a = \\dfrac{0.4771 \\times 19.147 \\times 300 \\times 320}{20}$",
      },
      { text: "**E_a = 43848 J mol^−1 = 43.85 kJ mol^−1**" },
      {
        text: "The Marking Scheme accepts 43848 J mol^−1, 43.848 kJ mol^−1 or 43.85 kJ mol^−1, and **deducts ½ mark for a missing or incorrect unit**.",
      },
      {
        text: "A sanity check: 2.303 × 8.314 = 19.147 is worth memorising, and an E_a of roughly 40–50 kJ mol^−1 is a very ordinary value for a reaction whose rate trebles over 20 K.",
      },
    ],
  },
  {
    id: "p23b-30",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Isomerism and hybridisation",
    years: [2023],
    question:
      "(a) Draw the geometrical isomers of [Co(en)2Cl2]^2+. Which geometrical isomer of [Co(en)2Cl2]^2+ is not optically active and why ?\n(b) Write the hybridisation and magnetic behaviour of [CoF6]^3−. [Atomic number of Co = 27]",
    answer: [
      { label: "(a) The two geometrical isomers" },
      {
        text: "With two bidentate en ligands and two chlorides on an octahedral cobalt, the chlorides can be adjacent or opposite:",
      },
      {
        table: [
          ["Isomer", "Arrangement of the two Cl", "Optically active?"],
          ["**cis**", "Adjacent, at 90° to each other", "**Yes** — exists as a d/l pair"],
          ["**trans**", "Opposite, at 180°", "**No**"],
        ],
      },
      {
        label: "Which is not optically active, and why",
        text: "The **trans** isomer is **not optically active**, because its **mirror image is superimposable on itself**.",
      },
      {
        text: "The trans arrangement has a **plane of symmetry**: with the two chlorides directly opposite each other, the plane containing them and bisecting the two en ligands reflects the molecule onto itself. Any molecule with such a plane is achiral.",
      },
      {
        text: "The **cis** isomer has no plane of symmetry, so it and its mirror image are non-superimposable — a genuine pair of enantiomers, labelled d and l.",
      },
      {
        label: "A note on the charge printed in the paper",
        text: "The paper writes the ion as [Co(en)2Cl2]^2+, which would make cobalt **+4** \u2014 a very unusual oxidation state. The chemically normal species is [Co(en)2Cl2]^+, with cobalt in its familiar **+3** state. CBSE evidently noticed: the Marking Scheme directs that full marks be awarded **whether the student writes the charge as +2 or +1**. The isomerism argument is unaffected either way, since it turns on the geometry rather than the charge.",
      },
      { label: "(b) [CoF6]^3− — hybridisation and magnetism" },
      { text: "**sp^3d^2 hybridised, octahedral, and paramagnetic.**" },
      {
        points: [
          "Co has Z = 27, so Co^3+ is **[Ar] 3d^6**.",
          "**F^− is a weak field ligand** — it sits at the bottom of the spectrochemical series — so Δ_o is smaller than the pairing energy and **no extra pairing occurs**. The six d electrons stay spread out as t2g^4 eg^2.",
          "With the 3d orbitals still occupied, the metal must use the **outer** 4d orbitals for bonding, giving **sp^3d^2** hybridisation. This is an **outer orbital**, or high spin, complex.",
          "**Four unpaired electrons** remain, so the complex is **paramagnetic**, with μ = √(4 × 6) = **4.90 BM**.",
        ],
      },
      {
        text: "Contrast [Co(NH3)6]^3+: ammonia is a strong field ligand, so the same 3d^6 ion pairs up completely, two inner 3d orbitals are freed, the hybridisation is **d^2sp^3**, and the complex is **diamagnetic**. Same metal, same oxidation state — the ligand alone decides.",
      },
    ],
    keyPoint:
      "Weak field F^− leaves 3d^6 high spin: outer-orbital sp^3d^2, paramagnetic. Strong field NH3 pairs it: inner-orbital d^2sp^3, diamagnetic.",
  },

  /* ---------------------------------------------------------------- */
  /* SECTION D — case-based, 4 marks each                             */
  /* ---------------------------------------------------------------- */
  {
    id: "p23b-31",
    chapter: 8,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Carbonyl reactivity and acidity",
    years: [2023],
    passage:
      "The carbon–oxygen double bond is polarised in aldehydes and ketones due to the higher electronegativity of oxygen relative to carbon. Therefore they undergo nucleophilic addition reactions with a number of nucleophiles such as HCN, NaHSO3, alcohols, ammonia derivatives and Grignard reagents. Aldehydes are easily oxidised by mild oxidising agents as compared to ketones. The carbonyl group of carboxylic acid does not give reactions of aldehydes and ketones. Carboxylic acids are considerably more acidic than alcohols and most of simple phenols.",
    question:
      "(a) Write the name of the product when an aldehyde reacts with excess alcohol in presence of dry HCl.\n(b) Why is a carboxylic acid a stronger acid than phenol ?\n(c) (i) Arrange the following compounds in increasing order of their reactivity towards CH3MgBr: CH3CHO, (CH3)3C–CO–CH3, CH3–CO–CH3\n(ii) Write a chemical test to distinguish between propanal and propanone.",
    answer: [
      { label: "(a) Aldehyde with excess alcohol and dry HCl" },
      { text: "The product is an **acetal**." },
      { equation: "R–CHO + 2R'OH ->[dry HCl] R–CH(OR')2 + H2O" },
      {
        text: "The reaction goes in two stages: one molecule of alcohol adds to give the **hemiacetal**, R–CH(OH)(OR'), and the second replaces the remaining –OH to give the **acetal**. Dry HCl is essential — water would push the equilibrium straight back.",
      },
      {
        text: "Acetals are stable to base, which makes them a standard way of **protecting** a carbonyl group while something else in the molecule is attacked; dilute acid removes the protection afterwards.",
      },
      { label: "(b) Why a carboxylic acid beats phenol" },
      {
        text: "Because the **carboxylate ion is more resonance-stabilised than the phenoxide ion.**",
      },
      {
        table: [
          ["", "Carboxylate RCOO^−", "Phenoxide C6H5O^−"],
          ["Charge spread over", "**Two oxygen atoms**", "One oxygen and three ring carbons"],
          ["Atoms bearing the charge", "Both highly electronegative", "Carbon is poor at holding negative charge"],
          ["Equivalent structures", "Two, exactly equivalent", "Several, but not equivalent"],
          ["Aromaticity", "Not affected", "Delocalisation disturbs the aromatic sextet"],
        ],
      },
      {
        text: "In the carboxylate ion the negative charge is shared **equally between two oxygens**, and both C–O bonds become identical in length. In phenoxide the charge is pushed onto ring **carbons**, which are far less able to accommodate it.",
      },
      {
        text: "The numbers bear this out: ethanoic acid has pK_a ≈ 4.76 against phenol's ≈ 10, so the acid is about 10^5 times stronger.",
      },
      { label: "(c) (i) Increasing reactivity towards CH3MgBr" },
      { text: "**(CH3)3C–CO–CH3 < CH3–CO–CH3 < CH3CHO**" },
      {
        text: "A Grignard reagent attacks the carbonyl carbon, so reactivity falls as that carbon gets more crowded and more electron-rich. The tert-butyl ketone has a very bulky group next to the carbonyl and reacts most slowly; ethanal, with only a hydrogen and a methyl, reacts fastest.",
      },
      { label: "(c) (ii) Distinguishing propanal from propanone" },
      {
        text: "Use the **iodoform test**: warm each with iodine and NaOH.",
      },
      {
        points: [
          "**Propanone, CH3COCH3** — has a CH3–CO– group, so it gives a **yellow precipitate** of iodoform, CHI3.",
          "**Propanal, CH3CH2CHO** — has no methyl next to the carbonyl, so there is **no precipitate**.",
        ],
      },
      {
        text: "**Tollens' reagent** works equally well and the scheme accepts it: propanal reduces it to a **silver mirror**, propanone does not. Either answer is fine, but the iodoform test is the one that turns on the structural difference rather than on aldehyde/ketone oxidation.",
      },
    ],
  },
  {
    id: "p23b-31b",
    chapter: 8,
    type: "short",
    marks: 2,
    difficulty: "hard",
    topic: "Selective oxidation and ammonia derivatives",
    years: [2023],
    question:
      "Write the main product in the following :\n(i) 3-oxocyclohexane-1-carbaldehyde ->[[Ag(NH3)2]^+]\n(ii) C6H5CHO ->[H2NCONHNH2]",
    answer: [
      { label: "(i) Tollens' reagent on a keto-aldehyde" },
      {
        text: "The molecule carries **both** a ketone (in the ring) and an aldehyde (the –CHO on the ring). Tollens' reagent is a **mild** oxidising agent, so it attacks only the **aldehyde** and leaves the ketone untouched.",
      },
      {
        text: "The product is the **carboxylate**: the –CHO becomes –COO^−, with the ring ketone still in place. Silver metal is deposited as the familiar mirror.",
      },
      { equation: "R–CHO + 2[Ag(NH3)2]^+ + 3OH^− -> R–COO^− + 2Ag↓ + 4NH3 + 2H2O" },
      {
        text: "The product is written as the carboxyl**ate** rather than the acid because the reagent is alkaline. This selectivity is the whole point of the question: it demonstrates that aldehydes are oxidised far more readily than ketones.",
      },
      { label: "(ii) Benzaldehyde with semicarbazide" },
      {
        text: "H2N–CO–NH–NH2 is **semicarbazide**, one of the ammonia derivatives. Its free –NH2 group adds to the carbonyl carbon and water is then eliminated:",
      },
      { equation: "C6H5–CHO + H2N–NH–CO–NH2 -> C6H5–CH=N–NH–CO–NH2 + H2O" },
      {
        text: "The product is **benzaldehyde semicarbazone**, C6H5CH=N–NH–CONH2.",
      },
      {
        text: "Note **which** nitrogen reacts. Semicarbazide has two –NH2 groups, but only the one attached to the other nitrogen is nucleophilic; the other is flanked by the carbonyl, which ties up its lone pair by resonance.",
      },
      {
        text: "Semicarbazones are crystalline solids with sharp melting points, which is why they were the classical way to identify an unknown carbonyl compound — alongside the oximes, hydrazones and 2,4-DNP derivatives formed the same way.",
      },
    ],
  },
  {
    id: "p23b-32",
    chapter: 10,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Carbohydrates, proteins and vitamins",
    years: [2023],
    passage:
      "Carbohydrates are optically active polyhydroxy aldehydes and ketones. They are also called saccharides. All those carbohydrates which reduce Fehling's solution and Tollens' reagent are referred to as reducing sugars. Glucose, the most important source of energy for mammals, is obtained by the hydrolysis of starch. Vitamins are accessory food factors required in the diet. Proteins are the polymers of α-amino acids and perform various structural and dynamic functions in the organisms. Deficiency of vitamins leads to many diseases.",
    question:
      "(a) The penta-acetate of glucose does not react with hydroxylamine. What does it indicate ?\n(b) Why cannot vitamin C be stored in our body ?\n(c) Define the following as related to proteins :\n(i) Peptide linkage (ii) Denaturation\nOR\n(c) Define the following as related to carbohydrates :\n(i) Anomers (ii) Glycosidic linkage",
    answer: [
      { label: "(a) What the penta-acetate tells us" },
      {
        text: "It indicates the **absence of a free –CHO group** in the penta-acetate of glucose.",
      },
      {
        text: "Hydroxylamine reacts with a free aldehyde to give an oxime. Glucose itself **does** form an oxime, so a free –CHO must be available to it. But once all five hydroxyl groups are acetylated, the reaction stops — which means the aldehyde is no longer accessible.",
      },
      {
        text: "The explanation is that glucose exists mainly in the **cyclic hemiacetal** form, where what was the aldehyde carbon is now C-1 bearing an –OH. Acetylating that –OH **locks the ring shut**, so the open-chain aldehyde can no longer form.",
      },
      {
        text: "This was a key piece of evidence that glucose is not simply an open-chain pentahydroxyhexanal — it also explains why glucose fails the Schiff's test and does not react with NaHSO3.",
      },
      { label: "(b) Why vitamin C is not stored" },
      {
        text: "Because it is **water soluble**, so any excess is simply **excreted through the urine** rather than retained.",
      },
      {
        table: [
          ["", "Water-soluble (B, C)", "Fat-soluble (A, D, E, K)"],
          ["Stored in the body?", "**No**", "Yes — in liver and adipose tissue"],
          ["Excess is", "Excreted in urine", "Retained, and can build up"],
          ["Dietary need", "Must be supplied **regularly**", "Less frequent supply suffices"],
        ],
      },
      {
        text: "This is why vitamin C has to be taken in the diet every day, and why its deficiency produces **scurvy** so readily. The same property makes it hard to overdose on — unlike the fat-soluble vitamins, where excess A or D accumulates and becomes toxic.",
      },
      { label: "(c) (i) Peptide linkage" },
      {
        text: "The **–CO–NH– linkage between two amino acids**, formed when the –COOH group of one condenses with the –NH2 group of the next, with loss of water.",
      },
      { equation: "H2N–CHR–COOH + H2N–CHR'–COOH -> H2N–CHR–CO–NH–CHR'–COOH + H2O" },
      { label: "(c) (ii) Denaturation" },
      {
        text: "The **loss of biological activity** of a protein when it is subjected to a change of temperature, pH or similar conditions.",
      },
      {
        text: "The **secondary and tertiary** structures are destroyed — the hydrogen bonds and disulphide bridges that held the chain folded are broken — while the **primary** structure, the sequence of amino acids, survives intact. Boiling an egg and curdling milk are everyday examples, and both are irreversible.",
      },
      { label: "OR (c) (i) Anomers" },
      {
        text: "Isomers of a carbohydrate that differ **only in the configuration at C-1 for an aldose** (or C-2 for a ketose) — the carbon that becomes chiral when the ring closes.",
      },
      {
        text: "Glucose has two: **α-D-glucose**, melting at 419 K with specific rotation +111°, and **β-D-glucose**, melting at 423 K with +19.2°. In solution they interconvert through the open-chain form until the rotation settles at +52.5°, a process called **mutarotation**.",
      },
      { label: "OR (c) (ii) Glycosidic linkage" },
      {
        text: "The **linkage joining two monosaccharides through an oxygen atom**, formed by loss of water between their hydroxyl groups.",
      },
      {
        text: "It is what holds disaccharides and polysaccharides together: **C1–C4 α** in maltose and starch, **C1–C4 β** in cellulose, and **C1–C2** between glucose and fructose in sucrose.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* SECTION E — long answer, 5 marks each                            */
  /* ---------------------------------------------------------------- */
  {
    id: "p23b-33",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Transition and inner transition elements",
    years: [2023],
    question:
      "(I) Account for the following :\n(i) The E° value for the Mn^3+/Mn^2+ couple is much more positive than that for Cr^3+/Cr^2+.\n(ii) Sc^3+ is colourless whereas Ti^3+ is coloured in aqueous solution.\n(iii) Actinoids show a wide range of oxidation states.\n(II) Write the chemical equations for the preparation of KMnO4 from MnO2.",
    answer: [
      { label: "(I) (i) Mn^3+/Mn^2+ against Cr^3+/Cr^2+" },
      {
        text: "Because each ion is moving towards a **stable half-filled configuration**, but in opposite directions.",
      },
      {
        table: [
          ["Couple", "Change on reduction", "Stability gained", "E°"],
          ["Mn^3+/Mn^2+", "d^4 -> **d^5**", "Reaching the stable half-filled d^5 shell", "**+1.57 V** — strongly favoured"],
          ["Cr^3+/Cr^2+", "**d^3** -> d^4", "Losing the stable half-filled t2g^3 set", "**−0.41 V** — unfavourable"],
        ],
      },
      {
        text: "Reducing Mn^3+ **creates** a half-filled d^5 shell, which is a strong driving force, so the potential is large and positive. Reducing Cr^3+ **destroys** the stable t2g^3 arrangement, so the process is resisted and E° is negative.",
      },
      {
        text: "The practical consequence: Mn^3+ is a good **oxidising** agent, while Cr^2+ is a good **reducing** agent.",
      },
      { label: "(I) (ii) Sc^3+ colourless, Ti^3+ coloured" },
      {
        text: "Colour in these ions comes from **d–d transitions**, which need at least one d electron to promote and at least one vacancy to promote it into.",
      },
      {
        points: [
          "**Sc^3+ is 3d^0** — there are **no d electrons at all**, so no d–d transition is possible and the ion is **colourless**.",
          "**Ti^3+ is 3d^1** — one unpaired electron can absorb visible light and jump from the t2g to the eg set, so the ion is **coloured** (purple).",
        ],
      },
      {
        text: "The same rule explains the other ends of the series: Zn^2+ (3d^10) is colourless because the d subshell is **full**, leaving nowhere for an electron to go. Colour needs a **partly** filled d subshell — neither empty nor complete.",
      },
      { label: "(I) (iii) Why actinoids show many oxidation states" },
      {
        text: "Because the **5f, 6d and 7s orbitals are of comparable energy**, so electrons from all three can take part in bonding.",
      },
      {
        text: "In the lanthanoids the 4f orbitals lie well below the 5d and 6s and are buried inside the atom, so they stay out of bonding and +3 dominates. The actinoid 5f orbitals are much less shielded and are energetically close to their neighbours, so removing different numbers of electrons costs about the same.",
      },
      {
        text: "Uranium illustrates the range, showing +3, +4, +5 and +6, and neptunium reaches +7.",
      },
      { label: "(II) Preparation of KMnO4 from MnO2" },
      {
        text: "**Step 1 — fusion with alkali in air**, oxidising Mn(IV) to the green manganate(VI):",
      },
      { equation: "2MnO2 + 4KOH + O2 ->[fuse] 2K2MnO4 + 2H2O" },
      {
        text: "**Step 2 — disproportionation** of manganate in acid or neutral solution to give the purple permanganate:",
      },
      { equation: "3MnO4^2− + 4H^+ -> 2MnO4^− + MnO2↓ + 2H2O" },
      {
        text: "The second step is a genuine **disproportionation**: of the three Mn(VI) species, two are oxidised to Mn(VII) and one is reduced to Mn(IV). The colour change from green to purple is the visible sign of it, and MnO2 drops out as a brown solid.",
      },
      {
        text: "Industrially the second step is done by **electrolytic oxidation** of the manganate instead, which avoids throwing away a third of the manganese as MnO2.",
      },
    ],
  },
  {
    id: "p23b-33b",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Lanthanoids and actinoids",
    years: [2023],
    question:
      "(I) Account for the following :\n(i) Transition metals form alloys.\n(ii) Ce^4+ is a strong oxidising agent.\n(II) Write one similarity and one difference between the chemistry of lanthanoids and actinoids.\n(III) Complete the following ionic equation : Cr2O7^2− + 2OH^− ->",
    answer: [
      { label: "(I) (i) Why transition metals form alloys" },
      {
        text: "Because they have **almost identical atomic radii**, so one metal's atoms can replace another's in the crystal lattice without disturbing it.",
      },
      {
        text: "Across a transition series the radii change very little — the added d electrons shield the growing nuclear charge almost completely. Atoms of similar size therefore substitute freely for one another, giving **substitutional alloys** that are homogeneous over a wide range of composition.",
      },
      {
        text: "Brass (copper and zinc), bronze (copper and tin) and stainless steel (iron, chromium and nickel) are the familiar examples, and the resulting alloys are usually harder and more corrosion-resistant than the pure metals.",
      },
      { label: "(I) (ii) Why Ce^4+ is a strong oxidising agent" },
      {
        text: "Because it readily **reverts to the common +3 oxidation state** of the lanthanoids.",
      },
      {
        text: "Ce^4+ has the configuration [Xe] 4f^0. Gaining one electron takes it to Ce^3+, [Xe] 4f^1 — the stable state that essentially all lanthanoids prefer. Since taking an electron is exactly what an oxidising agent does, Ce^4+ is a good one, with E° for Ce^4+/Ce^3+ around +1.74 V.",
      },
      {
        text: "This is why ceric ammonium sulphate is used as an oxidising titrant in volumetric analysis. **Eu^2+** is the mirror image: it readily loses an electron to reach the +3 state, so it is a strong _(reducing)_ agent.",
      },
      { label: "(II) Lanthanoids compared with actinoids" },
      {
        table: [
          ["", "Lanthanoids", "Actinoids"],
          ["**Similarity**", "Show a contraction in size across the series; +3 is the principal oxidation state", "Same — actinoid contraction, and +3 is common"],
          ["**Difference**", "Mainly **non-radioactive** (except promethium)", "**All are radioactive**"],
          ["Oxidation states", "Largely restricted to +3", "Wide range, +3 to +7"],
          ["4f / 5f shielding", "4f well shielded", "5f poorly shielded"],
        ],
      },
      {
        text: "One similarity and one difference are all that is asked; the scheme accepts any correct pair.",
      },
      { label: "(III) Dichromate in alkali" },
      { equation: "Cr2O7^2− + 2OH^− -> 2CrO4^2− + H2O" },
      {
        text: "Adding alkali converts **orange dichromate** into **yellow chromate**. It is not a redox change — chromium stays at **+6** on both sides — but simply a pH-dependent equilibrium:",
      },
      { equation: "2CrO4^2− + 2H^+ <=> Cr2O7^2− + H2O" },
      {
        text: "Acid drives it towards orange dichromate; alkali drives it back to yellow chromate. The colour therefore tracks the pH, which is an easy way to remember which form dominates where.",
      },
    ],
  },
  {
    id: "p23b-34",
    chapter: 9,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Reactions and basicity of amines",
    years: [2023],
    question:
      "(I) Give reasons :\n(i) Aniline on nitration gives a good amount of m-nitroaniline, though the –NH2 group is o/p directing in electrophilic substitution reactions.\n(ii) (CH3)2NH is more basic than (CH3)3N in an aqueous solution.\n(iii) Ammonolysis of alkyl halides is not a good method to prepare pure primary amines.\n(II) Write the reaction involved in the following :\n(i) Carbylamine test (ii) Gabriel phthalimide synthesis",
    answer: [
      { label: "(I) (i) Why aniline gives meta-nitroaniline" },
      {
        text: "Because in the strongly acidic nitrating mixture **aniline is protonated** to the anilinium ion, and **that** ion is meta-directing.",
      },
      { equation: "C6H5NH2 + H^+ -> C6H5NH3^+" },
      {
        text: "Nitration needs concentrated HNO3 with concentrated H2SO4. In that medium much of the aniline exists as C6H5NH3^+, where the nitrogen carries a **full positive charge** and can no longer donate its lone pair. Instead it withdraws electron density strongly (−I), which deactivates the ring and directs the incoming electrophile to the **meta** position.",
      },
      {
        text: "The product is therefore a mixture — roughly 47% meta alongside the ortho and para products from the unprotonated aniline that remains.",
      },
      {
        text: "The way round this is **acetylation first**: converting aniline to acetanilide removes the basic lone pair from play, so the ring stays activated and nitration gives cleanly the para product. Hydrolysis afterwards returns the amine.",
      },
      { label: "(I) (ii) Why (CH3)2NH beats (CH3)3N in water" },
      {
        text: "Because of the **combination of the inductive effect and the solvation effect.**",
      },
      {
        text: "Two influences pull in opposite directions once water is the solvent:",
      },
      {
        table: [
          ["Effect", "Favours", "Why"],
          ["**+I effect** of methyl groups", "3° > 2° > 1°", "More alkyl groups push more electron density onto nitrogen"],
          ["**Solvation** of the ion formed", "1° > 2° > 3°", "The cation is stabilised by H-bonds, which need N–H bonds to make"],
          ["**Steric hindrance**", "1° > 2° > 3°", "Bulky groups block the approach of the proton"],
        ],
      },
      {
        text: "In (CH3)3N there is **no N–H left** once it is protonated, so the resulting cation is poorly hydrated, and the three methyl groups also crowd the lone pair. In (CH3)2NH the balance is best: enough alkyl groups for a useful +I effect, and still an N–H for solvation.",
      },
      {
        text: "The full order in water is **(CH3)2NH > CH3NH2 > (CH3)3N > NH3**. In the gas phase, where there is no solvent, the inductive effect alone decides and the order becomes the simple 3° > 2° > 1° > NH3.",
      },
      { label: "(I) (iii) Why ammonolysis gives impure primary amines" },
      {
        text: "Because it **forms a mixture of amines that is difficult to separate.**",
      },
      {
        text: "The primary amine produced in the first step is itself a **better nucleophile** than ammonia, so it attacks a second molecule of alkyl halide, and so on:",
      },
      { equation: "R–X ->[NH3] R–NH2 ->[R–X] R2NH ->[R–X] R3N ->[R–X] R4N^+X^−" },
      {
        text: "The result is a mixture of primary, secondary and tertiary amines plus the quaternary ammonium salt, all with similar boiling points and hard to separate.",
      },
      {
        text: "Using a **large excess of ammonia** helps by making it statistically more likely that the halide meets ammonia than a product amine — but for a genuinely pure primary amine the **Gabriel synthesis** or **Hoffmann bromamide degradation** is the right choice.",
      },
      { label: "(II) (i) Carbylamine test" },
      { equation: "R–NH2 + CHCl3 + 3KOH ->[Δ] R–NC + 3KCl + 3H2O" },
      {
        text: "A primary amine heated with chloroform and alcoholic KOH gives an **isocyanide** with an extremely offensive smell. Only **primary** amines respond, so this is a reliable test for them.",
      },
      { label: "(II) (ii) Gabriel phthalimide synthesis" },
      { equation: "C6H4(CO)2NH ->[KOH] C6H4(CO)2N^−K^+ ->[R–X] C6H4(CO)2N–R ->[NaOH(aq)] R–NH2 + C6H4(COONa)2" },
      {
        text: "Potassium phthalimide displaces halide from an alkyl halide, and alkaline hydrolysis then frees the **pure primary amine** together with the phthalate salt. The nitrogen cannot be alkylated twice because it is held inside the ring, which is exactly what ammonolysis fails to prevent.",
      },
      {
        text: "It does not work for **aromatic** primary amines, since an aryl halide will not undergo the S_N2 step.",
      },
    ],
  },
  {
    id: "p23b-34b",
    chapter: 9,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Reaction chains of amines",
    years: [2023],
    question:
      "(I) Write the structures of A, B and C in the following reactions :\n(i) C6H5N2^+Cl^− ->[CuCN] A ->[H2O / H^+] B ->[NH3, Δ] C\n(ii) C6H5NO2 ->[Fe / HCl] A ->[NaNO2 + HCl][273 K] B ->[C2H5OH] C\n(II) Why does aniline not undergo Friedel-Crafts reaction ?\n(III) Arrange the following in increasing order of their boiling point: C2H5OH, C2H5NH2, (C2H5)3N",
    answer: [
      { label: "(I) (i) From benzenediazonium chloride to benzamide" },
      { equation: "C6H5N2^+Cl^− ->[CuCN] C6H5CN ->[H2O / H^+] C6H5COOH ->[NH3][Δ] C6H5CONH2" },
      {
        table: [
          ["", "Structure", "Name", "Step"],
          ["A", "C6H5CN", "Benzonitrile", "**Sandmeyer reaction** — CuCN replaces the diazonium group"],
          ["B", "C6H5COOH", "Benzoic acid", "Acidic hydrolysis of the nitrile"],
          ["C", "C6H5CONH2", "Benzamide", "Ammonium salt formed, then heated to lose water"],
        ],
      },
      {
        text: "The last step goes through the ammonium salt: C6H5COOH + NH3 -> C6H5COONH4, which on heating loses water to give the amide.",
      },
      { label: "(I) (ii) From nitrobenzene to benzene" },
      { equation: "C6H5NO2 ->[Fe / HCl] C6H5NH2 ->[NaNO2 + HCl][273 K] C6H5N2^+Cl^− ->[C2H5OH] C6H6" },
      {
        table: [
          ["", "Structure", "Name", "Step"],
          ["A", "C6H5NH2", "Aniline", "Reduction of the nitro group"],
          ["B", "C6H5N2^+Cl^−", "Benzenediazonium chloride", "**Diazotisation** at 273–278 K"],
          ["C", "C6H6", "Benzene", "Ethanol reduces the diazonium group to H"],
        ],
      },
      {
        text: "Two details worth holding on to. Diazotisation must be done at **273–278 K** — the diazonium salt decomposes to the phenol above about 278 K. And ethanol acts here as a **reducing agent**, replacing the –N2^+ group with –H and being oxidised to ethanal itself.",
      },
      {
        text: "This sequence is the standard way to _(remove)_ a substituent from a ring: the –NO2 group can be put on where it directs the chemistry you want, then converted through the amine and the diazonium salt and finally stripped off.",
      },
      { label: "(II) Why aniline fails Friedel-Crafts" },
      {
        text: "Because of the **formation of a salt with the Lewis acid, anhydrous AlCl3.**",
      },
      { equation: "C6H5NH2 + AlCl3 -> C6H5N^+H2–AlCl3^−" },
      {
        text: "The nitrogen lone pair is a Lewis base and the catalyst is a Lewis acid, so they combine. The nitrogen then carries a **positive charge**, which strongly deactivates the ring by the −I effect, and no electrophilic substitution takes place. The catalyst is also consumed, so there is none left to generate the electrophile.",
      },
      { label: "(III) Increasing boiling point" },
      { text: "**(C2H5)3N < C2H5NH2 < C2H5OH**" },
      {
        text: "The order follows the **strength and number of hydrogen bonds** each compound can form:",
      },
      {
        table: [
          ["Compound", "H-bonding site", "Strength", "B.p."],
          ["(C2H5)3N", "**No N–H at all** — cannot donate", "None between molecules", "**89 °C**"],
          ["C2H5NH2", "Two N–H bonds", "Moderate — N is less electronegative", "**16.6 °C**"],
          ["C2H5OH", "One O–H bond", "**Strongest** — O is most electronegative", "**78.5 °C**"],
        ],
      },
      {
        text: "Triethylamine has no N–H, so its molecules cannot hydrogen bond to each other at all; its relatively high boiling point of 89 °C comes from its much larger size and stronger dispersion forces, not from hydrogen bonding. Comparing the two of similar mass, **ethanol boils well above ethylamine** because O–H···O bonds are considerably stronger than N–H···N bonds.",
      },
    ],
    keyPoint:
      "Diazotisation needs 273–278 K; ethanol reduces a diazonium salt to the bare arene.",
  },
  {
    id: "p23b-35",
    chapter: 2,
    type: "numerical",
    marks: 5,
    difficulty: "medium",
    topic: "Molar conductivity and dissociation",
    years: [2023],
    question:
      "The conductivity of a 2 × 10^−3 M methanoic acid solution is 8 × 10^−5 S cm^−1. Calculate its molar conductivity and degree of dissociation if Λ°_m for methanoic acid is 404 S cm^2 mol^−1.",
    answer: [
      {
        label: "Step 1 — molar conductivity from conductivity",
        text: "Molar conductivity is the conductivity divided by the concentration, with the factor of 1000 converting litres to cm^3:",
      },
      { equation: "$\\Lambda_m = \\dfrac{\\kappa \\times 1000}{c}$" },
      {
        equation:
          "$\\Lambda_m = \\dfrac{8 \\times 10^{-5}}{2 \\times 10^{-3}} \\times 1000\\ \\text{S cm}^2\\ \\text{mol}^{-1}$",
      },
      { text: "**Λ_m = 40 S cm^2 mol^−1**" },
      {
        label: "Step 2 — degree of dissociation",
        text: "For a weak electrolyte, α is the ratio of the actual molar conductivity to the value at infinite dilution, where dissociation would be complete:",
      },
      { equation: "$\\alpha = \\dfrac{\\Lambda_m}{\\Lambda^\\circ_m}$" },
      { equation: "$\\alpha = \\dfrac{40}{404} = 0.099$" },
      { text: "**α = 0.099, that is about 9.9% dissociated.**" },
      {
        text: "That is a thoroughly believable figure for a weak acid at this concentration — methanoic acid is the strongest of the simple carboxylic acids, but still only about a tenth dissociated here.",
      },
      {
        label: "Worth knowing — the dissociation constant follows",
        text: "Ostwald's dilution law would take this one step further:",
      },
      {
        equation:
          "$K_a = \\dfrac{c\\alpha^2}{1-\\alpha} = \\dfrac{2\\times10^{-3}\\times(0.099)^2}{1-0.099} \\approx 2.2\\times10^{-5}$",
      },
      {
        text: "Watch the units throughout: κ in S cm^−1, c in mol L^−1, and Λ_m in S cm^2 mol^−1. The 1000 is what reconciles them, and forgetting it is the commonest error in this calculation.",
      },
    ],
  },
];
