import type { Question } from "@/types";

/** Unit 9 — the reasoning and ordering questions that recur in almost every paper. */
export const CH09D: Question[] = [
  {
    id: "n9-r1",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2025, 2016],
    question:
      "(a) Arrange in increasing order of boiling point: (CH3)2NH, CH3CH2NH2, CH3CH2OH.\n(b) Why do primary amines boil higher than tertiary amines of comparable molar mass?",
    answer: [
      {
        label: "(a) The order",
        text: "**(CH3)2NH < CH3CH2NH2 < CH3CH2OH**",
      },
      {
        table: [
          ["Compound", "M (g mol⁻¹)", "N–H or O–H bonds", "b.p. / K"],
          ["(CH3)2NH, dimethylamine", "45", "1 on N", "280"],
          ["CH3CH2NH2, ethanamine", "45", "2 on N", "289"],
          ["CH3CH2OH, ethanol", "46", "1 on O", "351"],
        ],
      },
      {
        label: "The reasoning",
        points: [
          "All three have essentially the **same molar mass**, so the difference is entirely in hydrogen bonding.",
          "Dimethylamine has only **one** N–H bond, so it forms the fewest intermolecular hydrogen bonds.",
          "Ethanamine has **two** N–H bonds and so associates more extensively — hence the higher boiling point.",
          "Ethanol is far ahead of both because **oxygen is more electronegative than nitrogen**, so O–H···O hydrogen bonds are much stronger than N–H···N ones.",
        ],
      },
      {
        label: "(b) Primary vs tertiary amines",
        text: "A **tertiary** amine has **no N–H bond at all**, so its molecules cannot hydrogen bond to one another — only weak dipole–dipole and dispersion forces hold them together. A primary amine has two N–H bonds and associates strongly, so it needs more energy to vaporise.",
      },
      {
        table: [
          ["Amine", "N–H bonds", "Intermolecular H-bonding", "b.p. / K"],
          ["CH3CH2CH2NH2 (1°)", "2", "Extensive", "321"],
          ["CH3NHCH2CH3 (2°)", "1", "Limited", "309"],
          ["(CH3)3N (3°)", "0", "None", "276"],
        ],
      },
      { text: "So the boiling point order for isomeric amines is **1° > 2° > 3°**, the reverse of what molecular shape alone would suggest." },
    ],
    keyPoint: "Count the N–H bonds. More N–H bonds → more hydrogen bonding → higher boiling point.",
  },
  {
    id: "n9-r2",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Basic character",
    years: [2025, 2013, 2021],
    question:
      "(a) Arrange in decreasing order of pKb: aniline, p-nitroaniline, p-methylaniline.\n(b) Arrange in increasing order of basic strength in aqueous solution: CH3NH2, (CH3)2NH, (CH3)3N.\nJustify both orders.",
    answer: [
      {
        label: "(a) Decreasing pKb",
        text: "**p-methylaniline > aniline > p-nitroaniline**",
      },
      {
        text: "Remember that a **larger pKb means a weaker base**, so this is the order of _(increasing)_ basic strength read backwards.",
      },
      {
        table: [
          ["Compound", "Substituent effect", "Basic strength", "pKb"],
          ["p-Methylaniline", "–CH3 is electron **releasing** (+I, hyperconjugation)", "Strongest of the three", "8.92"],
          ["Aniline", "Reference", "Middle", "9.38"],
          ["p-Nitroaniline", "–NO2 is strongly electron **withdrawing** (–I, –R)", "Weakest", "13.0"],
        ],
      },
      { figure: { kind: "named", id: "aniline-basicity" } },
      {
        text: "An electron-releasing group pushes density towards nitrogen and makes the lone pair more available, so the base is stronger and pKb smaller. An electron-withdrawing group does the opposite — the nitro group in particular drains the lone pair by resonance, making p-nitroaniline about 4000 times weaker a base than aniline.",
      },
      {
        label: "(b) Increasing basic strength in water",
        text: "**(CH3)3N < CH3NH2 < (CH3)2NH**",
      },
      {
        label: "Why the order is not simply 3° > 2° > 1°",
        text: "Three effects pull against one another once water is the solvent:",
      },
      {
        points: [
          "**+I effect:** each methyl group pushes electron density onto nitrogen, so on this count alone 3° > 2° > 1°. In the **gas phase**, where nothing else operates, that is exactly the observed order.",
          "**Solvation:** the conjugate acid is stabilised by hydrogen bonding to water, and the more N–H bonds it has the better. CH3NH3^+ has three, (CH3)2NH2^+ has two, (CH3)3NH^+ only one — so this effect favours 1° > 2° > 3°.",
          "**Steric hindrance:** three bulky methyl groups crowd the lone pair and obstruct both protonation and solvation, which penalises the tertiary amine heavily.",
        ],
      },
      {
        text: "The secondary amine sits at the optimum: enough methyl groups for a useful inductive push, still enough N–H bonds and room for good solvation. Hence **(CH3)2NH is the strongest base in water**, and the trimethylamine is the weakest.",
      },
      {
        table: [
          ["Amine", "pKb in water"],
          ["(CH3)2NH", "3.27 — strongest"],
          ["CH3NH2", "3.38"],
          ["(CH3)3N", "4.22 — weakest"],
        ],
      },
    ],
    keyPoint: "In water, basicity is a three-way compromise between +I, solvation and steric crowding — 2° usually wins.",
  },
  {
    id: "n9-r3",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions",
    years: [2025, 2020, 2016],
    question:
      "Give reasons:\n(a) Aniline does not undergo the Friedel–Crafts reaction.\n(b) Aromatic primary amines cannot be prepared by Gabriel phthalimide synthesis.\n(c) Although –NH2 is o/p directing, nitration of aniline gives a significant amount of the meta product.",
    answer: [
      {
        label: "(a) Friedel–Crafts fails with aniline",
        text: "The catalyst is **anhydrous AlCl3**, a Lewis acid. The nitrogen lone pair of aniline attacks it at once to form a salt:",
      },
      { equation: "C6H5NH2 + AlCl3 -> C6H5N^+H2–AlCl3^−" },
      {
        text: "Nitrogen now carries a **positive charge**, so it becomes powerfully electron withdrawing and deactivates the ring towards any electrophile. The catalyst is also used up. Both effects kill the reaction.",
      },
      {
        label: "(b) Gabriel synthesis fails for aryl amines",
        text: "The key step is an **SN2** displacement in which the phthalimide anion attacks an alkyl halide:",
      },
      { equation: "potassium phthalimide + R–X -> N-alkylphthalimide ->[NaOH(aq)][Δ] R–NH2" },
      {
        text: "An **aryl halide will not undergo SN2**. The C–X bond has partial double-bond character, the sp^2 carbon holds the halogen tightly, and the electron-rich ring repels the incoming nucleophile. So no N-aryl phthalimide can be formed, and aromatic primary amines are out of reach by this route.",
      },
      {
        text: "The method is still valuable because it gives a **pure primary** amine — there is no way for the product to be alkylated further, unlike ammonolysis.",
      },
      {
        label: "(c) Meta product on nitration of aniline",
        text: "Nitration uses a mixture of **conc. HNO3 and conc. H2SO4**, which is strongly acidic. Most of the aniline is therefore protonated to the **anilinium ion**:",
      },
      { equation: "C6H5NH2 + H^+ <=> C6H5N^+H3" },
      {
        text: "The –N^+H3 group has no lone pair to donate and is strongly electron withdrawing, so it is **meta directing**. The unprotonated aniline that remains still directs ortho/para. The product is therefore a mixture — roughly **47% meta**, 51% para and 2% ortho.",
      },
      {
        text: "To avoid this, **acetylate the amine first**. Acetanilide is much less basic, is not protonated under the reaction conditions, and gives mainly the para product, which is then hydrolysed back to p-nitroaniline.",
      },
    ],
  },
  {
    id: "n9-r4",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2019, 2024, 2017],
    question:
      "Write the equations for:\n(a) coupling reaction of benzenediazonium chloride with phenol\n(b) Gattermann reaction\n(c) Gabriel phthalimide synthesis of ethanamine",
    answer: [
      { label: "(a) Azo coupling with phenol", equation: "C6H5N2^+Cl^− + C6H5OH ->[NaOH, 273–278 K] p-HO–C6H4–N=N–C6H5 + HCl" },
      {
        figure: {
          kind: "arene",
          substituents: [
            { pos: 1, label: "OH" },
            { pos: 4, label: "N=N–C6H5", highlight: true },
          ],
          caption: "p-Hydroxyazobenzene — an orange dye",
        },
      },
      {
        text: "This is an **electrophilic substitution**: the diazonium ion is a weak electrophile, so it only attacks strongly activated rings — phenols and amines. Coupling with phenol needs **mildly alkaline** conditions (which make the more reactive phenoxide ion); coupling with aniline needs **mildly acidic** ones (strong acid would protonate the amine and deactivate it).",
      },
      { equation: "C6H5N2^+Cl^− + C6H5NH2 ->[mildly acidic] p-H2N–C6H4–N=N–C6H5 + HCl" },
      {
        text: "The extended conjugation through the **–N=N–** azo linkage is what makes these compounds intensely coloured — the basis of the azo dye industry.",
      },
      { label: "(b) Gattermann reaction", equations: ["C6H5N2^+Cl^− + Cu ->[HCl] C6H5Cl + N2(g)", "C6H5N2^+Br^− + Cu ->[HBr] C6H5Br + N2(g)"] },
      {
        text: "Copper **powder** with the corresponding halogen acid does the same job as the Sandmeyer reaction's cuprous halide, though the yield is lower. Remember the pairing: **Sandmeyer uses CuCl/CuBr/CuCN; Gattermann uses Cu/HX**.",
      },
      { label: "(c) Gabriel synthesis of ethanamine", equations: ["phthalimide + KOH -> potassium phthalimide + H2O", "potassium phthalimide + CH3CH2Br -> N-ethylphthalimide + KBr", "N-ethylphthalimide + 2NaOH ->[H2O][Δ] CH3CH2NH2 + sodium phthalate"] },
      {
        text: "Hydrolysis can also be done with **hydrazine**, which is gentler. The route's whole value is that it gives an **exclusively primary** amine, free of the secondary and tertiary amines that ammonolysis of an alkyl halide always produces alongside.",
      },
    ],
    keyPoint: "Coupling needs an activated ring: phenol in mild alkali, aniline in mild acid. Never strong acid or strong alkali.",
  },
];
