import type { Question } from "@/types";

/** Unit 4 — The d- and f-Block Elements (7 marks). */
export const CH04: Question[] = [
  /* ---------------- MCQ ---------------- */
  {
    id: "d4-m1",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "General properties",
    years: [2024],
    question: "The general electronic configuration of d-block elements is",
    options: [
      "$(n-1)d^{1-10}\\,ns^{1-2}$",
      "$(n-1)d^{10}\\,ns^{1-2}$",
      "$(n-1)d^{10}\\,ns^{2-3}$",
      "$(n-1)d^{0}\\,ns^{1-2}$",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a)** $(n-1)d^{1-10}\\,ns^{1-2}$. The last electron enters the penultimate d sub-shell, which is what defines the d block. Chromium and copper are the familiar exceptions in the 3d series, adopting $3d^54s^1$ and $3d^{10}4s^1$ because half-filled and fully-filled d sub-shells are extra stable.",
      },
    ],
  },
  {
    id: "d4-m2",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Interstitial compounds",
    years: [2024],
    question:
      "Transition metals are known to form interstitial compounds. Formation of an interstitial compound makes the transition metal",
    options: [
      "more hard and less malleable",
      "softer and more malleable",
      "more reactive chemically",
      "a better conductor of electricity",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) more hard and less malleable.** Small atoms such as H, C, N and B occupy the interstitial voids in the metal lattice. They lock the layers of metal atoms so they can no longer slide over one another, so the solid becomes **harder, more rigid and less malleable**, with a higher melting point. Steel and cast iron are interstitial compounds of iron with carbon.",
      },
      { text: "Interstitial compounds are also chemically **inert** and retain metallic conductivity." },
    ],
  },
  {
    id: "d4-m3",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "Variable oxidation states",
    years: [2024],
    question: "From the 3d series, which element shows the maximum number of oxidation states?",
    options: ["Scandium", "Chromium", "Manganese", "Zinc"],
    correct: 2,
    answer: [
      {
        text: "**(c) Manganese.** Mn has the configuration $[\\text{Ar}]\\,3d^54s^2$ — seven electrons in total that can take part in bonding — so it shows every oxidation state from **+2 to +7**.",
      },
      {
        text: "Scandium has only three such electrons, and zinc ($3d^{10}4s^2$) has a filled d sub-shell and shows only +2.",
      },
    ],
  },
  {
    id: "d4-m4",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Magnetic properties",
    years: [2025],
    question:
      "The spin-only magnetic moment of Cr3+ (Z = 24) is",
    options: ["1.73 BM", "2.84 BM", "3.87 BM", "5.92 BM"],
    correct: 2,
    answer: [
      { text: "**(c) 3.87 BM.**" },
      { text: "Cr = $[\\text{Ar}]3d^54s^1$, so Cr³⁺ = $[\\text{Ar}]3d^3$ — **three unpaired electrons**." },
      { equation: "$\\mu = \\sqrt{n(n+2)} = \\sqrt{3 \\times 5} = \\sqrt{15} = 3.87\\ \\text{BM}$" },
      {
        text: "Always remove the ns electrons **first**, then the (n−1)d electrons, when writing the configuration of a transition metal ion.",
      },
    ],
    keyPoint: "μ = √[n(n+2)] BM, where n = number of unpaired electrons.",
  },
  {
    id: "d4-m5",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Catalytic behaviour",
    years: [2023],
    question: "Which property of transition metals enables them to behave as catalysts?",
    options: [
      "High melting point",
      "High ionisation enthalpy",
      "Ability to adopt variable oxidation states",
      "Alloy formation",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) variable oxidation states.** A transition metal can accept electrons from one reactant and pass them to another by moving between oxidation states, forming unstable intermediates that give the reaction a lower-energy path.",
      },
      {
        equations: ["2Fe^3+ + 2I^− -> 2Fe^2+ + I2", "2Fe^2+ + S2O8^2− -> 2Fe^3+ + 2SO4^2−"],
      },
      {
        text: "Their large surface area and ability to adsorb reactants also help in heterogeneous catalysis (e.g. Fe in the Haber process, V2O5 in the Contact process, Ni in hydrogenation).",
      },
    ],
  },
  {
    id: "d4-m6",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "easy",
    topic: "General properties",
    years: [2023],
    question: "Which one among the following metals of the 3d series has the lowest melting point?",
    options: ["Fe", "Mn", "Zn", "Cu"],
    correct: 2,
    answer: [
      {
        text: "**(c) Zn.** Melting point depends on the strength of the metallic bond, which in turn depends on the number of **unpaired d electrons** available for bonding. Zinc has $3d^{10}4s^2$ — a completely filled d sub-shell and no unpaired electrons — so only the 4s electrons contribute, the metallic bonding is weak, and Zn melts at just 693 K.",
      },
    ],
  },
  {
    id: "d4-m7",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2025],
    question: "Acidified KMnO4 oxidises sulphite to",
    options: ["S2O3^2−", "S2O8^2−", "SO2(g)", "SO4^2−"],
    correct: 3,
    answer: [
      { text: "**(d) sulphate, SO4^2−.** Sulphur is oxidised from +4 to +6." },
      { equation: "2MnO4^− + 5SO3^2− + 6H^+ -> 2Mn^2+ + 5SO4^2− + 3H2O" },
      {
        text: "The purple permanganate is decolourised as Mn goes from +7 to the almost colourless +2 — the basis of the standard test.",
      },
    ],
  },
  {
    id: "d4-m8",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2023, 2013],
    question: "Which of the following transition metals shows both +1 and +2 oxidation states most commonly?",
    options: ["Mn", "Zn", "Sc", "Cu"],
    correct: 3,
    answer: [
      {
        text: "**(d) Cu.** Copper is $[\\text{Ar}]3d^{10}4s^1$. Losing the single 4s electron gives Cu⁺ with a stable $3d^{10}$ configuration, so **+1 is common for copper alone** among the 3d metals. Losing a 3d electron as well gives the more familiar Cu²⁺.",
      },
      {
        text: "In aqueous solution Cu⁺ disproportionates, because the very high hydration enthalpy of Cu²⁺ more than compensates for the second ionisation enthalpy:",
      },
      { equation: "2Cu^+(aq) -> Cu^2+(aq) + Cu(s)" },
    ],
  },

  /* ---------------- Assertion–Reason ---------------- */
  {
    id: "d4-ar1",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Lanthanoid contraction",
    years: [2024, 2013],
    question:
      "**Assertion (A):** Zr and Hf have almost identical atomic radii.\n**Reason (R):** This is due to lanthanoid contraction.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Hafnium follows the 14 lanthanoids in the periodic table. Across that series the 4f electrons shield the nuclear charge very poorly, so the effective nuclear charge rises steadily and the size shrinks — this is the **lanthanoid contraction**.",
      },
      {
        text: "The contraction almost exactly cancels the expected increase in size from period 5 to period 6, so Zr (160 pm) and Hf (159 pm) have nearly the same radius. As a result the two have very similar chemistry and are notoriously difficult to separate.",
      },
    ],
    keyPoint: "Poor shielding by 4f electrons ⇒ lanthanoid contraction ⇒ Zr ≈ Hf.",
  },
  {
    id: "d4-ar2",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "General properties",
    years: [2020, 2023],
    question:
      "**Assertion (A):** Transition metals have high enthalpies of atomisation.\n**Reason (R):** They have a greater number of unpaired electrons, giving strong interatomic metallic bonding.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Transition metals have unpaired d electrons in addition to their s electrons, and all of these take part in metallic bonding. The resulting bonds are strong, so a large amount of energy is needed to break the lattice into gaseous atoms.",
      },
      {
        text: "This is why they have high melting points, high boiling points and are hard. The maximum occurs near the middle of each series (Cr, Mo, W), where the number of unpaired electrons is greatest; Zn, Cd and Hg, with filled d sub-shells and no unpaired electrons, have the lowest values and are soft metals.",
      },
    ],
  },
  {
    id: "d4-ar3",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2023],
    question:
      "**Assertion (A):** Transition metals show their highest oxidation state with oxygen.\n**Reason (R):** Oxygen has the ability to form multiple bonds with metals.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 0,
    answer: [
      {
        text: "**(a) Both true, R explains A.** Oxygen is small and highly electronegative, and it can form **multiple bonds (pπ–dπ)** with a metal by donating electron density into empty metal d orbitals. Fluorine, though more electronegative, can form only single bonds.",
      },
      {
        text: "This is why manganese reaches +7 with oxygen (in MnO4⁻ and Mn2O7) but only +4 with fluorine (MnF4), and why Cr reaches +6 in Cr2O7^2−.",
      },
    ],
  },
  {
    id: "d4-ar4",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "General properties",
    years: [2023],
    question:
      "**Assertion (A):** Copper is a non-transition element.\n**Reason (R):** Copper has completely filled d orbitals in its ground state.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 3,
    answer: [
      {
        text: "**(d) A is false but R is true.** The ground-state configuration of copper is indeed $[\\text{Ar}]3d^{10}4s^1$, so R is correct. But a transition element is defined as one whose **atom or any of its stable ions** has a partly filled d sub-shell.",
      },
      { text: "Cu²⁺ is $3d^9$ — partly filled — so **copper is a transition element**." },
      {
        text: "Contrast zinc: neither Zn ($3d^{10}4s^2$) nor Zn²⁺ ($3d^{10}$) has a partly filled d sub-shell, so zinc is **not** regarded as a transition element.",
      },
    ],
  },

  /* ---------------- Very short / short ---------------- */
  {
    id: "d4-v1",
    chapter: 4,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "General properties",
    years: [2024, 2025, 2014],
    question: "Why is zinc not regarded as a transition element?",
    answer: [
      {
        text: "A transition element must have a **partly filled d sub-shell** in its atom or in one of its stable ions. Zinc is $[\\text{Ar}]3d^{10}4s^2$ and its only ion Zn²⁺ is $[\\text{Ar}]3d^{10}$ — both have a **completely filled** d sub-shell. Zinc therefore fails the definition, and it also lacks the typical transition properties: it is colourless, diamagnetic, shows only the +2 state and is a poor catalyst.",
      },
    ],
  },
  {
    id: "d4-v2",
    chapter: 4,
    type: "very-short",
    marks: 1,
    difficulty: "easy",
    topic: "Lanthanoid contraction",
    years: [2024, 2025],
    question: "What is lanthanoid contraction?",
    answer: [
      {
        text: "The **steady decrease in atomic and ionic radii across the lanthanoid series** (La to Lu) as the atomic number increases. Each added electron enters the inner 4f sub-shell, whose diffuse shape shields the nuclear charge very poorly. The effective nuclear charge felt by the outer electrons therefore rises at every step and the electron cloud is pulled inward.",
      },
    ],
  },
  {
    id: "d4-v3",
    chapter: 4,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2017],
    question:
      "Write the formula of an oxo-anion of manganese in which manganese shows an oxidation state equal to its group number.",
    answer: [
      { text: "Manganese is in group 7, so the required oxidation state is +7:" },
      { equation: "MnO4^− — permanganate ion" },
      { text: "Check: x + 4(−2) = −1 ⇒ x = +7. ✓" },
    ],
  },
  {
    id: "d4-s1",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "General properties",
    years: [2019, 2017, 2015, 2020],
    question:
      "Give reasons: (i) Transition metals show variable oxidation states. (ii) Transition metals and their compounds act as catalysts. (iii) Transition metals form coloured compounds.",
    answer: [
      {
        label: "(i) Variable oxidation states",
        text: "The (n−1)d and ns orbitals are very close in energy, so electrons from **both** can take part in bonding. Any number of them may be lost, giving a range of oxidation states that usually differ by one — unlike p-block elements, where states differ by two.",
      },
      {
        label: "(ii) Catalytic activity",
        text: "Two reasons: they can switch between oxidation states, forming unstable intermediates that provide a lower-energy path; and they offer large surfaces on which reactants are **adsorbed**, increasing local concentration and weakening bonds. Examples: Fe in the Haber process, V2O5 in the Contact process, Ni in hydrogenation.",
      },
      {
        label: "(iii) Colour",
        text: "Their ions have **partly filled d orbitals**. In the presence of ligands these d orbitals split into two sets of slightly different energy, and an electron can absorb a photon of visible light to jump between them — a **d–d transition**. The colour seen is the complement of the light absorbed. Ions with $d^0$ (Sc³⁺, Ti⁴⁺) or $d^{10}$ (Zn²⁺, Cu⁺) configurations have no such transition and are colourless.",
      },
      { figure: { kind: "named", id: "cft-octahedral" } },
    ],
  },
  {
    id: "d4-s2",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Electrode potentials",
    years: [2024, 2025, 2019, 2018, 2023],
    question:
      "Give reasons: (a) E°(Mn2+/Mn) is −1.18 V, much more negative than for the neighbouring elements. (b) E°(Mn3+/Mn2+) is much more positive than E°(Cr3+/Cr2+). (c) Cr2+ is a strong reducing agent while Mn3+ is a strong oxidising agent.",
    answer: [
      {
        label: "(a)",
        text: "Mn²⁺ has the configuration $3d^5$ — a **half-filled** d sub-shell, which is exceptionally stable. Forming Mn²⁺ is therefore energetically very favourable, which makes the oxidation Mn → Mn²⁺ easy and the reduction potential strongly negative.",
      },
      {
        label: "(b)",
        text: "Reducing Mn³⁺ ($3d^4$) to Mn²⁺ ($3d^5$) **produces** a stable half-filled configuration, so it happens readily and E° is large and positive (+1.57 V). Reducing Cr³⁺ ($3d^3$) to Cr²⁺ ($3d^4$) **destroys** a stable half-filled $t_{2g}^3$ arrangement, so it is unfavourable and E° is negative (−0.41 V).",
      },
      {
        label: "(c)",
        text: "Both are $d^4$ species, but they move in opposite directions. Cr²⁺ readily **loses** an electron to reach the stable $d^3$ configuration, so it is a strong **reducing** agent. Mn³⁺ readily **gains** an electron to reach the stable $d^5$ configuration, so it is a strong **oxidising** agent.",
      },
    ],
    keyPoint: "Everything here follows from the extra stability of half-filled d⁵ and of t₂g³.",
  },
  {
    id: "d4-s3",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Lanthanoid contraction",
    years: [2025, 2015],
    question: "Write two consequences of the lanthanoid contraction.",
    answer: [
      {
        points: [
          "**Zr and Hf (and Nb/Ta, Mo/W) have almost identical radii**, so their chemistry is nearly identical and they occur together and are very hard to separate.",
          "**The size difference between successive lanthanoids is very small**, so their separation requires ion-exchange chromatography rather than simple chemical methods.",
          "**Basic strength of the hydroxides decreases** from La(OH)3 to Lu(OH)3, because the M–OH bond becomes more covalent as the cation gets smaller.",
        ],
      },
    ],
  },
  {
    id: "d4-s4",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Actinoids",
    years: [2023, 2015],
    question:
      "Why is the chemistry of the actinoids more complicated than that of the lanthanoids? Why is actinoid contraction greater than lanthanoid contraction?",
    answer: [
      {
        label: "More complicated chemistry",
        points: [
          "Actinoids show a **much wider range of oxidation states** (+3 to +7) because the 5f, 6d and 7s orbitals are very close in energy, whereas lanthanoids are almost always +3.",
          "All actinoids are **radioactive**, many with very short half-lives, so they are difficult and hazardous to study.",
          "The later actinoids are synthetic and available only in trace amounts.",
        ],
      },
      {
        label: "Greater contraction",
        text: "The **5f orbitals are more diffuse** than 4f orbitals and shield the nuclear charge even more poorly. The effective nuclear charge therefore rises more steeply across the actinoid series, giving a larger contraction in size.",
      },
    ],
  },
  {
    id: "d4-s5",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "General properties",
    years: [2019, 2017, 2014],
    question:
      "Give reasons: (i) Transition metals form alloys readily. (ii) Mn2O3 is basic whereas Mn2O7 is acidic. (iii) Transition metals form a large number of complex compounds.",
    answer: [
      {
        label: "(i) Alloys",
        text: "Transition metals have very **similar atomic radii** (they differ by only a few percent across a series), so one metal atom can replace another in the crystal lattice without distorting it. They readily form substitutional solid solutions — alloys such as brass, bronze and steel.",
      },
      {
        label: "(ii) Oxides",
        text: "As the oxidation state of the metal increases, the M–O bond becomes more **covalent** and the metal ion more polarising. In Mn2O3 manganese is in the low +3 state, the oxide is ionic and **basic**. In Mn2O7 manganese is in the high +7 state, the oxide is covalent, hydrolyses to HMnO4 and is **acidic**.",
      },
      {
        label: "(iii) Complex formation",
        text: "Three factors combine: **small size**, **high charge density** of the ions, and the availability of **vacant d orbitals of suitable energy** to accept lone pairs from ligands. Examples: $[\\text{Fe(CN)}_6]^{3-}$, $[\\text{Cu(NH}_3)_4]^{2+}$.",
      },
    ],
  },
  {
    id: "d4-s6",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Lanthanoids",
    years: [2024, 2019],
    question:
      "Give reasons: (a) Ce(III) is easily oxidised to Ce(IV). (b) Eu2+ is a strong reducing agent.",
    answer: [
      {
        label: "(a)",
        text: "Ce³⁺ is $[\\text{Xe}]4f^1$. Losing that single 4f electron gives Ce⁴⁺ with the **stable noble-gas configuration** $[\\text{Xe}]4f^0$, so the oxidation is easy. This is why Ce(IV) salts such as ceric ammonium sulphate are common oxidising agents.",
      },
      {
        label: "(b)",
        text: "Eu²⁺ is $[\\text{Xe}]4f^7$, and it readily loses one electron to give Eu³⁺ — but the driving force is that Eu³⁺ ($4f^6$) is the normal, far more stable lanthanoid state. Eu²⁺ is therefore unusually easy to oxidise, i.e. it is a strong **reducing** agent, and readily reduces water to hydrogen.",
      },
    ],
  },
  {
    id: "d4-s7",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2016],
    question:
      "Mn shows the highest oxidation state of +7 with oxygen but only +4 with fluorine. Why?",
    answer: [
      {
        text: "Fluorine is the more electronegative element, but it can form **only single bonds** — it has no low-lying d orbitals and only one unpaired electron. Oxygen, with two unpaired electrons, can form a **double bond**, and can also feed electron density back into empty metal d orbitals through **pπ–dπ bonding**.",
      },
      {
        text: "Oxygen can therefore satisfy a much higher oxidation state per atom. In MnO4⁻ each oxygen is doubly bonded, taking manganese to +7; in MnF4 four single bonds take it only to +4.",
      },
    ],
  },
  {
    id: "d4-s8",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2020, 2023],
    question:
      "From the ions Cr2+, Cu2+, Cu+, Fe2+, Fe3+ and Mn3+, identify the one which is (i) a strong reducing agent, (ii) unstable in aqueous solution, (iii) a strong oxidising agent. Justify.",
    answer: [
      {
        label: "(i) Strong reducing agent — Cr2+",
        text: "Cr²⁺ is $d^4$ and loses an electron easily to reach the stable $d^3$ ($t_{2g}^3$) configuration, so it is readily oxidised to Cr³⁺.",
      },
      {
        label: "(ii) Unstable in aqueous solution — Cu+",
        text: "Cu⁺ disproportionates in water because the very large hydration enthalpy of the small, doubly charged Cu²⁺ ion outweighs the second ionisation enthalpy:",
      },
      { equation: "2Cu^+(aq) -> Cu^2+(aq) + Cu(s)" },
      {
        label: "(iii) Strong oxidising agent — Mn3+",
        text: "Mn³⁺ is $d^4$ and gains an electron readily to reach the stable half-filled $d^5$ configuration of Mn²⁺.",
      },
    ],
  },

  /* ---------------- Case study ---------------- */
  {
    id: "d4-c1",
    chapter: 4,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "General properties",
    years: [2025, 2024],
    passage:
      "The elements of the 3d transition series are Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu and Zn. Their atoms have partly filled d orbitals, and it is this feature that gives them their characteristic properties: variable oxidation states, coloured ions, paramagnetism, catalytic activity, a tendency to form complexes and alloys, and high enthalpies of atomisation. Across the series the atomic radius decreases at first and then becomes almost constant, because the increasing nuclear charge is largely offset by the increasing screening from the added d electrons.",
    question:
      "(i) Name the element of the 3d series that shows the maximum number of oxidation states, and explain.\n(ii) Which two elements of the series form colourless ions, and why?\n(iii) Why do atomic radii remain nearly constant from Fe to Cu?\n(iv) Calculate the spin-only magnetic moment of Fe2+ (Z = 26).",
    answer: [
      {
        label: "(i)",
        text: "**Manganese.** Its configuration $[\\text{Ar}]3d^54s^2$ gives it seven electrons available for bonding, so it shows every oxidation state from +2 to +7.",
      },
      {
        label: "(ii)",
        text: "**Scandium and zinc.** Sc³⁺ is $3d^0$ and Zn²⁺ is $3d^{10}$ — in neither case is there a partly filled d sub-shell, so no d–d transition is possible and the ions are colourless.",
      },
      {
        label: "(iii)",
        text: "The increase in nuclear charge pulls the electrons in, but each added d electron also **screens** the outer electrons from the nucleus. From Fe to Cu these two effects almost exactly balance, so the effective nuclear charge — and hence the size — barely changes.",
      },
      {
        label: "(iv)",
        text: "Fe = $[\\text{Ar}]3d^64s^2$, so Fe²⁺ = $[\\text{Ar}]3d^6$. In a weak field this gives 4 unpaired electrons:",
      },
      { equation: "$\\mu = \\sqrt{4(4+2)} = \\sqrt{24} = 4.90\\ \\text{BM}$" },
    ],
  },

  /* ---------------- Long ---------------- */
  {
    id: "d4-l1",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Variable oxidation states",
    years: [2023],
    question:
      "(a) A transition element X has the electronic configuration [Ar] 3d3 4s2. Predict its likely oxidation states and identify it.\n(b) Why do transition metals exhibit paramagnetism? How is it measured?\n(c) Give reasons: (i) Sc3+ is colourless whereas Ti3+ is coloured. (ii) The E° value for the Cu2+/Cu couple is positive.",
    answer: [
      {
        label: "(a)",
        text: "Total electrons in Ar core = 18, plus 3 + 2 = **23**, so X is **vanadium**. The 4s and 3d electrons are close in energy and all five may be lost, so V shows the oxidation states **+2, +3, +4 and +5**, the highest being +5 (as in VO2⁺ and V2O5).",
      },
      {
        label: "(b) Paramagnetism",
        text: "Transition metal ions usually have **unpaired d electrons**. Each unpaired electron behaves as a tiny magnet, so the substance is attracted into a magnetic field — it is paramagnetic. It is measured by the **spin-only magnetic moment**:",
      },
      { equation: "$\\mu = \\sqrt{n(n+2)}\\ \\text{BM}$" },
      {
        text: "where n is the number of unpaired electrons. Experimentally μ is found with a Gouy balance, from the apparent gain in weight of a sample in a magnetic field.",
      },
      {
        label: "(c)(i)",
        text: "Sc³⁺ is $[\\text{Ar}]3d^0$ — no d electron is available, so no d–d transition can occur and the ion is **colourless**. Ti³⁺ is $[\\text{Ar}]3d^1$; its single d electron can be promoted from $t_{2g}$ to $e_g$ by absorbing visible light, so its solutions are **purple**.",
      },
      {
        label: "(c)(ii)",
        text: "E°(Cu²⁺/Cu) = +0.34 V is positive because the **high enthalpy of atomisation** of copper and its **high ionisation enthalpy** are not compensated by its hydration enthalpy. Converting solid Cu into hydrated Cu²⁺ is therefore energetically unfavourable — copper does not displace hydrogen from acids, and is the only 3d metal with a positive E°(M²⁺/M).",
      },
    ],
  },
  {
    id: "d4-l2",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "Lanthanoids",
    years: [2025, 2024, 2020],
    question:
      "(a) What are transition elements? Write three characteristics of transition elements.\n(b) Distinguish between lanthanoids and actinoids (three points).\n(c) Explain why the separation of a mixture of lanthanoid elements is difficult.",
    answer: [
      {
        label: "(a) Definition",
        text: "Elements whose **atom, or any of their stable ions, has a partly filled d sub-shell** are called transition elements. They occupy the d block, between the s block and the p block.",
      },
      {
        label: "Characteristics",
        points: [
          "**Variable oxidation states**, because (n−1)d and ns electrons are close in energy.",
          "**Coloured ions and compounds**, arising from d–d transitions.",
          "**Paramagnetism**, due to unpaired d electrons.",
          "**Catalytic activity** and the ability to form **complexes**, **alloys** and **interstitial compounds**.",
          "High melting points, high enthalpies of atomisation and high density.",
        ],
      },
      {
        label: "(b) Lanthanoids vs actinoids",
        table: [
          ["Lanthanoids", "Actinoids"],
          ["4f orbitals are progressively filled", "5f orbitals are progressively filled"],
          ["Mainly show the +3 oxidation state", "Show a wide range: +3 to +7"],
          ["Only promethium is radioactive", "**All** members are radioactive"],
          ["Smaller contraction in size", "Greater contraction (5f shields even more poorly)"],
          ["Do not form complexes readily", "Form complexes more readily"],
        ],
      },
      {
        label: "(c)",
        text: "Because of the **lanthanoid contraction**, the radii of successive lanthanoid ions differ by only about 1 pm, and they almost all show the same +3 oxidation state. Their chemical properties are therefore nearly identical, and ordinary precipitation or crystallisation cannot separate them. Modern separation uses **ion-exchange chromatography** or solvent extraction, which exploit the tiny differences in ionic radius and hence in complex stability.",
      },
    ],
  },
];
