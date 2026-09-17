import type { Question } from "@/types";

/** Unit 6 — short one-mark recall the board keeps returning to. */
export const CH06D: Question[] = [
  {
    id: "h6-x1",
    chapter: 6,
    type: "very-short",
    marks: 1,
    difficulty: "medium",
    topic: "Methods of preparation",
    years: [2023, 2018],
    question:
      "Which isomer of C5H10 gives a single monochloro compound C5H9Cl in bright sunlight?",
    answer: [
      { label: "Answer", text: "**Cyclopentane.**" },
      { equation: "C5H10 + Cl2 ->[hν] C5H9Cl + HCl" },
      {
        label: "The reasoning",
        text: "C5H10 has one degree of unsaturation, so it is either an **alkene** or a **cycloalkane**. Substitution in bright sunlight is a free-radical chain reaction, which is characteristic of an alkane skeleton — an alkene would add chlorine across the double bond instead, and would react in the dark as well.",
      },
      {
        text: "So the compound is a cycloalkane. Of the cycloalkanes with formula C5H10, only **cyclopentane** has all ten hydrogens equivalent, so replacing any one of them gives the **same** product. Methylcyclobutane or the dimethylcyclopropanes would each give several isomeric monochloro products.",
      },
      {
        figure: {
          kind: "chain",
          atoms: [
            { label: "CH2", bond: 1 },
            { label: "CH2", bond: 1 },
            { label: "CH2", bond: 1 },
            { label: "CH2", bond: 1 },
            { label: "CH2" },
          ],
          caption: "Cyclopentane — every C–H is equivalent, so chlorination can only give one product",
        },
      },
    ],
    keyPoint: "Single monosubstitution product ⇒ all the hydrogens are equivalent.",
  },
  {
    id: "h6-x2",
    chapter: 6,
    type: "short",
    marks: 2,
    difficulty: "medium",
    topic: "Physical properties",
    years: [2023, 2019, 2015],
    question:
      "(a) Why does p-dichlorobenzene have a higher melting point than the ortho and meta isomers?\n(b) Why is the boiling point of an alkyl halide higher than that of the corresponding alkane?",
    answer: [
      {
        label: "(a) Melting point of p-dichlorobenzene",
        text: "Melting point depends on how well the molecules **pack into a crystal lattice**, not only on the forces between them.",
      },
      {
        table: [
          ["Isomer", "Symmetry", "m.p. / K"],
          ["o-Dichlorobenzene", "Low", "256"],
          ["m-Dichlorobenzene", "Low", "249"],
          ["p-Dichlorobenzene", "**High**", "**323**"],
        ],
      },
      { figure: { kind: "named", id: "dichlorobenzenes" } },
      {
        text: "The **para** isomer is the most symmetrical of the three, so its molecules fit into the lattice far more closely and the crystal is held together more tightly. More energy is needed to break that arrangement down, so the melting point is much higher.",
      },
      {
        text: "Note that **boiling** point does not follow this pattern — in the liquid there is no lattice to break, so the ortho isomer, with the larger dipole moment, boils highest. A symmetry argument is a melting-point argument only.",
      },
      {
        label: "(b) Boiling point of a haloalkane vs the alkane",
        text: "Two reasons, both pointing the same way:",
      },
      {
        points: [
          "The **C–X bond is polar**, so haloalkane molecules attract one another by dipole–dipole forces on top of dispersion forces.",
          "A halogen atom is far heavier and has many more electrons than the hydrogen it replaced, so its electron cloud is more **polarisable** and the dispersion forces themselves are much stronger.",
        ],
      },
      {
        text: "For the same alkyl group the boiling point rises **RI > RBr > RCl > RF**, which is the order of increasing molecular size and polarisability — note that it is *not* the order of bond polarity, which runs the other way.",
      },
    ],
  },
];
