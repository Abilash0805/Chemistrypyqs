import type { Question } from "@/types";

/** Unit 4 — The d- and f-Block Elements, second tranche (board papers 2013–2025). */
export const CH04B: Question[] = [
  {
    id: "d4-s9",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "General properties",
    years: [2019, 2017],
    question:
      "Give reasons:\n(a) Transition metals have high enthalpies of atomisation.\n(b) Manganese has a lower melting point than chromium, even though it lies next to it.\n(c) Zn, Cd and Hg are soft metals.",
    answer: [
      {
        label: "(a)",
        text: "Transition metals have **unpaired d electrons in addition to their s electrons**, and all of these take part in metallic bonding. The resulting interatomic bonds are strong, so a large amount of energy is needed to break the lattice into free gaseous atoms.",
      },
      {
        label: "(b)",
        text: "Melting point tracks the number of **unpaired electrons available for bonding**, not simply the position in the series. Chromium is $3d^54s^1$ — six unpaired electrons, the maximum in the series. Manganese is $3d^54s^2$, in which the 4s electrons are **paired**, so only five electrons are available. Fewer bonding electrons means weaker metallic bonding, and manganese melts lower (1519 K) than chromium (2130 K).",
      },
      {
        label: "(c)",
        text: "All three have **completely filled d sub-shells** — $3d^{10}4s^2$, $4d^{10}5s^2$ and $5d^{10}6s^2$. With no unpaired d electrons, only the two s electrons contribute to metallic bonding, which is therefore weak. Hence they are soft, have low melting points and low enthalpies of atomisation; mercury is liquid at room temperature.",
      },
    ],
    keyPoint: "Unpaired d electrons ⇒ strong metallic bonding ⇒ hard, high-melting metals.",
  },
  {
    id: "d4-s10",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Lanthanoids",
    years: [2015, 2020],
    question:
      "Give reasons:\n(a) Actinoid contraction is greater than lanthanoid contraction.\n(b) The separation of a mixture of lanthanoid elements is difficult.\n(c) Actinoids show a wider range of oxidation states than lanthanoids.",
    answer: [
      {
        label: "(a)",
        text: "The **5f orbitals of the actinoids are more diffuse** than the 4f orbitals of the lanthanoids, so they shield the nuclear charge even more poorly. The effective nuclear charge felt by the outer electrons therefore rises more steeply across the series, and the contraction in size is correspondingly greater.",
      },
      {
        label: "(b)",
        text: "Because of the lanthanoid contraction, the ionic radii of successive lanthanoids differ by only about **1 pm**, and almost all of them show the same **+3** oxidation state. Their chemical properties are consequently nearly identical, so ordinary precipitation or crystallisation cannot separate them. Modern practice uses **ion-exchange chromatography** or solvent extraction, which exploit the tiny differences in the stability of their complexes.",
      },
      {
        label: "(c)",
        text: "In the actinoids the **5f, 6d and 7s orbitals are very close in energy**, so electrons from all three can take part in bonding and a wide range of oxidation states (+3 to +7) results. In the lanthanoids the 4f orbitals lie well below the 5d and 6s, are effectively buried, and take little part in bonding — so the +3 state dominates almost exclusively.",
      },
    ],
  },
  {
    id: "d4-s11",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Variable oxidation states",
    years: [2014, 2013],
    question:
      "Complete and balance the following:\n(a) Cr2O7^2− + 2OH− →\n(b) MnO4− + 8H+ + 5e− →\n(c) Cr2O7^2− + 6Fe2+ + 14H+ →",
    answer: [
      { label: "(a) Dichromate → chromate in alkali", equation: "Cr2O7^2− + 2OH^− -> 2CrO4^2− + H2O" },
      {
        text: "The interconversion is pH-controlled: **orange** dichromate in acid, **yellow** chromate in alkali. Adding acid reverses it:",
      },
      { equation: "2CrO4^2− + 2H^+ -> Cr2O7^2− + H2O" },
      { label: "(b) Permanganate reduced in acid", equation: "MnO4^− + 8H^+ + 5e^− -> Mn^2+ + 4H2O" },
      {
        text: "Manganese goes from +7 to +2, a five-electron change — which is why permanganate's equivalent mass in acid medium is M/5. The deep purple colour is discharged.",
      },
      { label: "(c) Dichromate oxidising iron(II)", equation: "Cr2O7^2− + 6Fe^2+ + 14H^+ -> 2Cr^3+ + 6Fe^3+ + 7H2O" },
      {
        text: "Chromium falls from +6 to +3 (3 electrons per Cr, 6 in total) while six Fe²⁺ are each oxidised to Fe³⁺. This is the basis of the standard volumetric estimation of iron.",
      },
    ],
  },
  {
    id: "d4-s12",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Variable oxidation states",
    years: [2014, 2023],
    question:
      "Give reasons:\n(a) Mn2+ is more stable than Fe2+ towards oxidation to the +3 state.\n(b) The lowest oxide of a transition metal is basic while the highest is acidic or amphoteric.\n(c) Transition metals form interstitial compounds.",
    answer: [
      {
        label: "(a)",
        text: "Mn²⁺ is $3d^5$ — an **exactly half-filled** d sub-shell, which is a specially stable arrangement. Oxidising it to Mn³⁺ ($3d^4$) would destroy that stability, so it resists oxidation.",
      },
      {
        text: "Fe²⁺ is $3d^6$; losing one electron **produces** the stable $3d^5$ configuration of Fe³⁺, so the oxidation is favourable and Fe²⁺ is readily oxidised in air.",
      },
      {
        label: "(b)",
        text: "As the oxidation state rises, the metal ion becomes **smaller and more highly charged**, so its polarising power increases and the M–O bond becomes more **covalent**. A low-oxidation-state oxide such as MnO is ionic and therefore basic; a high-oxidation-state oxide such as Mn2O7 is covalent, hydrolyses to an oxo-acid and is acidic.",
      },
      { equation: "MnO (basic) < Mn2O3 (basic) < MnO2 (amphoteric) < Mn2O7 (acidic)" },
      {
        label: "(c)",
        text: "Transition metal lattices contain **interstitial voids** large enough to accommodate small atoms such as H, C, N and B. These atoms slot in without disturbing the lattice, giving non-stoichiometric compounds that are **harder, less malleable and higher-melting** than the parent metal, yet retain its metallic conductivity. Steel is the familiar example.",
      },
    ],
  },
  {
    id: "d4-ar5",
    chapter: 4,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "General properties",
    years: [2020],
    question:
      "**Assertion (A):** Transition metals have high melting points.\n**Reason (R):** Transition metals have completely filled d orbitals.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    correct: 2,
    answer: [
      {
        text: "**(c) A is true but R is false.** Transition metals do have high melting points — but precisely because their d orbitals are **partly filled**, not completely filled.",
      },
      {
        text: "Unpaired d electrons participate in metallic bonding alongside the s electrons, making the interatomic bonds strong. The elements with **completely filled** d sub-shells — Zn, Cd and Hg — are the exceptions with the **lowest** melting points in their series, mercury being liquid at room temperature.",
      },
    ],
  },
  {
    id: "d4-m9",
    chapter: 4,
    type: "mcq",
    marks: 1,
    difficulty: "medium",
    topic: "Catalytic behaviour",
    years: [2023],
    question:
      "Which characteristic of transition metals is most directly associated with their catalytic activity?",
    options: [
      "High enthalpy of atomisation",
      "Ability to adopt variable oxidation states and to adsorb reactants",
      "Formation of coloured ions",
      "Large atomic size",
    ],
    correct: 1,
    answer: [
      {
        text: "**(b).** Catalysis by a transition metal rests on two abilities that work together:",
      },
      {
        points: [
          "**Variable oxidation states** let the metal accept electrons from one reactant and pass them to another, forming unstable intermediates that provide a lower-energy route.",
          "**Adsorption** on the metal surface concentrates the reactants and weakens their bonds, so they react more readily.",
        ],
      },
      { equations: ["2Fe^3+ + 2I^− -> 2Fe^2+ + I2", "2Fe^2+ + S2O8^2− -> 2Fe^3+ + 2SO4^2−"] },
      {
        text: "Notice that Fe³⁺ is regenerated, so it is a true catalyst. Industrial examples: Fe in the Haber process, V2O5 in the Contact process, Ni in hydrogenation.",
      },
    ],
  },
  {
    id: "d4-s13",
    chapter: 4,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Magnetic properties",
    years: [2024, 2019],
    question:
      "Calculate the spin-only magnetic moment of (a) Ti3+ (Z = 22), (b) Mn2+ (Z = 25), (c) Cu2+ (Z = 29), and say which is the most paramagnetic.",
    answer: [
      { equation: "$\\mu = \\sqrt{n(n+2)}\\ \\text{BM}$" },
      {
        table: [
          ["Ion", "Configuration", "Unpaired e⁻ (n)", "μ / BM"],
          ["Ti³⁺", "$[\\text{Ar}]3d^1$", "1", "1.73"],
          ["Mn²⁺", "$[\\text{Ar}]3d^5$", "5", "5.92"],
          ["Cu²⁺", "$[\\text{Ar}]3d^9$", "1", "1.73"],
        ],
      },
      {
        text: "**Mn²⁺ is by far the most paramagnetic**, with five unpaired electrons in a half-filled $3d^5$ sub-shell giving μ = √35 = 5.92 BM.",
      },
      {
        text: "Always remove the **ns electrons first**: Mn is $[\\text{Ar}]3d^54s^2$, so Mn²⁺ is $3d^5$ — not $3d^34s^2$.",
      },
    ],
  },
  {
    id: "d4-c2",
    chapter: 4,
    type: "case-study",
    marks: 4,
    difficulty: "medium",
    topic: "Electrode potentials",
    years: [2023, 2019],
    passage:
      "The standard electrode potentials E°(M2+/M) of the first transition series show an irregular trend. The values depend on the balance of three quantities: the enthalpy of atomisation of the metal, the sum of its first two ionisation enthalpies, and the hydration enthalpy of the resulting M2+ ion. Where a particularly stable electronic configuration is produced or destroyed, the trend departs sharply from expectation. Copper is unique in the series in having a positive E°(M2+/M).",
    question:
      "(i) Why is E°(Cu2+/Cu) positive while every other E°(M2+/M) in the series is negative?\n(ii) Why is E°(Zn2+/Zn) more negative than expected?\n(iii) Why is E°(Mn2+/Mn) more negative than that of its neighbours?\n(iv) What does a positive E°(M2+/M) imply about the metal's reaction with dilute acids?",
    answer: [
      {
        label: "(i)",
        text: "Copper has a **high enthalpy of atomisation** and **high ionisation enthalpies**, and these are not compensated by its hydration enthalpy. Converting solid Cu into hydrated Cu²⁺ is therefore energetically unfavourable overall, giving E° = **+0.34 V**.",
      },
      {
        label: "(ii)",
        text: "Zn²⁺ has the **completely filled, very stable $3d^{10}$** configuration. Forming it is energetically favourable, so zinc is easily oxidised and E° is strongly negative (−0.76 V).",
      },
      {
        label: "(iii)",
        text: "Mn²⁺ has the **stable half-filled $3d^5$** configuration. Its formation is likewise favourable, so E°(Mn²⁺/Mn) = −1.18 V, markedly more negative than chromium or iron on either side.",
      },
      {
        label: "(iv)",
        text: "A positive E°(M²⁺/M) means the metal lies **below hydrogen** in the electrochemical series, so it **cannot displace hydrogen from dilute acids**. Copper therefore does not dissolve in dilute HCl or H2SO4; it dissolves only in oxidising acids such as conc. HNO3, where the anion rather than H⁺ does the oxidising.",
      },
      { equation: "Cu(s) + 2H^+(aq) -> Cu^2+(aq) + H2(g), E° = −0.34 V (non-spontaneous)" },
    ],
  },
  {
    id: "d4-l3",
    chapter: 4,
    type: "long",
    marks: 5,
    difficulty: "hard",
    topic: "General properties",
    years: [2024, 2025],
    question:
      "Answer any five:\n(a) Why is Ce(III) easily oxidised to Ce(IV)?\n(b) Why is E°(Mn2+/Mn) highly negative compared with its neighbours?\n(c) What is lanthanoid contraction?\n(d) Why do transition metals form coloured compounds?\n(e) Why is zinc not regarded as a transition element?\n(f) Why is Cr2+ strongly reducing while Mn3+ is strongly oxidising?",
    answer: [
      {
        label: "(a)",
        text: "Ce³⁺ is $[\\text{Xe}]4f^1$. Losing that single 4f electron gives the **noble-gas configuration** $[\\text{Xe}]4f^0$, which is especially stable — so the oxidation happens readily and Ce(IV) salts are common oxidising agents.",
      },
      {
        label: "(b)",
        text: "Mn²⁺ is $3d^5$, an **exactly half-filled** sub-shell of unusual stability. Because the product of oxidation is so favourable, Mn → Mn²⁺ is easy and the reduction potential is correspondingly very negative (−1.18 V).",
      },
      {
        label: "(c)",
        text: "The **steady decrease in atomic and ionic radii across the lanthanoid series**. Each added electron enters the inner 4f sub-shell, which shields the nuclear charge poorly, so the effective nuclear charge rises at every step and the electron cloud is drawn inward.",
      },
      {
        label: "(d)",
        text: "Their ions have **partly filled d orbitals**. A ligand field splits these into two sets of slightly different energy, and an electron can absorb visible light to jump between them — a **d–d transition**. The colour seen is complementary to the light absorbed. Ions with $d^0$ or $d^{10}$ configurations have no such transition and are colourless.",
      },
      { figure: { kind: "named", id: "cft-octahedral" } },
      {
        label: "(e)",
        text: "A transition element must have a **partly filled d sub-shell** in its atom or in a stable ion. Zinc is $3d^{10}4s^2$ and Zn²⁺ is $3d^{10}$ — both completely filled. Zinc accordingly lacks the characteristic properties: it is colourless, diamagnetic, shows only +2 and is a poor catalyst.",
      },
      {
        label: "(f)",
        text: "Both are $d^4$ ions, but they move in opposite directions to reach stability. **Cr²⁺** readily **loses** an electron to become $d^3$ ($t_{2g}^3$, a stable half-filled $t_{2g}$ set), so it is a strong **reducing** agent. **Mn³⁺** readily **gains** an electron to become $d^5$ (half-filled d sub-shell), so it is a strong **oxidising** agent.",
      },
    ],
    keyPoint: "Almost every anomaly in this chapter traces back to the stability of d⁵, d¹⁰ or t₂g³.",
  },
];
