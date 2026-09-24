import type { Question } from "@/types";

/**
 * CBSE 2022 Term-II, paper 56/2/1, with answers from the official Marking
 * Scheme bound into the same PDF, plus the case-based Q12 of 56/1/1, which was
 * the one question of that paper still missing from the bank.
 *
 * Term-II 2022 covered only the second half of the course, and two of its
 * topics — Surface Chemistry and the colloid questions built on it — were
 * removed by rationalisation and are not in the 2026-27 syllabus. Q10 of 56/1/1
 * and Q8 of 56/2/1 are therefore left out rather than transcribed, as is Q7 of
 * 56/2/1 — a first order 75 %-decomposition numerical the bank already carries,
 * down to the two-half-lives shortcut.
 *
 * The scheme's own note on Q12(ii) is worth keeping in view: it accepts both
 * the aqueous and the gas-phase order of amine basicity "as no medium
 * (aqueous/gaseous) or phase is given", which is the same distinction the 2023
 * compartment paper turned on.
 */
export const P2022_5621: Question[] = [
  /* ---------------------------------------------------------------- */
  /* 56/1/1 — the case study                                          */
  /* ---------------------------------------------------------------- */
  {
    id: "p22b-1",
    chapter: 8,
    type: "case-study",
    marks: 5,
    difficulty: "medium",
    topic: "Carbonyl compounds",
    years: [2022],
    passage:
      "Aldehydes, ketones and carboxylic acids are some of the important classes of organic compounds containing carbonyl group. These are highly polar molecules due to higher electro-negativity of oxygen relative to carbon in the carbonyl group. Aldehydes are prepared by dehydrogenation or controlled oxidation of primary alcohols and controlled reduction of acyl halides. Ketones are prepared by oxidation of secondary alcohols and hydration of alkynes.\nAldehydes and ketones undergo nucleophilic addition reactions onto the carbonyl group but carboxylic acid does not undergo nucleophilic addition reaction. The alpha (α) – hydrogens of aldehydes and ketones are acidic. Therefore aldehydes and ketones having at least one α-hydrogen undergo Aldol condensation.\nAldehydes are easily oxidised by mild oxidising agents such as Tollens' reagent and Fehling's reagent. Carboxylic acids are prepared by the oxidation of primary alcohols, aldehydes and by hydrolysis of nitriles. Aromatic carboxylic acids are prepared by side-chain oxidation of alkyl benzenes. Carboxylic acids are considerably more acidic than alcohols and most of simple phenols.",
    question:
      "(a) Arrange the following in the increasing order of their reactivity towards nucleophilic addition reaction :\nCH3COCH3, CH3CHO, HCHO, C6H5COCH3\n(b) Give a simple chemical test to distinguish between Ethanal and Propanone.\n(c) Why carboxylic acid does not give nucleophilic addition reactions like aldehydes and ketones ?\n(d) (i) Why α-hydrogen of aldehydes and ketones are acidic in nature ?\n(ii) Write the products in the following :\n2C6H5CHO + conc. NaOH -> ?",
    answer: [
      {
        label: "(a) Increasing reactivity towards nucleophilic addition",
        text: "**C6H5COCH3 < CH3COCH3 < CH3CHO < HCHO.**",
      },
      {
        text: "Two effects run in the same direction here, and both favour the aldehyde end of the list:",
      },
      {
        table: [
          ["Compound", "Groups on C=O", "Electronic effect", "Steric hindrance"],
          ["HCHO", "Two H", "None — carbon most positive", "Least"],
          ["CH3CHO", "One CH3, one H", "One +I group", "Small"],
          ["CH3COCH3", "Two CH3", "Two +I groups", "Moderate"],
          ["C6H5COCH3", "Phenyl and CH3", "+I plus resonance donation from the ring", "Greatest"],
        ],
      },
      {
        text: "Every alkyl group **releases electron density** onto the carbonyl carbon, reducing the positive charge that the nucleophile attacks, and every group also **blocks** the approach. Acetophenone is worst on both counts: the benzene ring donates into the carbonyl by resonance and is bulky.",
      },
      {
        label: "(b) Distinguishing ethanal from propanone",
        text: "**Tollens' test.** On warming with Tollens' reagent, ethanal gives a **silver mirror**; propanone does not react.",
      },
      { equation: "CH3CHO + 2[Ag(NH3)2]^+ + 3OH^− -> CH3COO^− + 2Ag↓ + 4NH3 + 2H2O" },
      {
        text: "Fehling's solution works equally: ethanal gives a red-brown precipitate of Cu2O, propanone does not. Note that the **iodoform test fails to separate them** — both have a CH3 next to the carbonyl, so both give a yellow precipitate.",
      },
      {
        label: "(c) Why carboxylic acids resist nucleophilic addition",
        text: "Because of **resonance involving the –OH group**. The lone pair on the hydroxyl oxygen is delocalised into the carbonyl, which reduces the electrophilicity of the carboxyl carbon:",
      },
      {
        text: "The carbon therefore **loses much of its carbonyl character** and the partial positive charge a nucleophile would attack is largely neutralised. The C–O bond also gains partial double bond character, so the group behaves as a unit rather than as an isolated C=O.",
      },
      {
        text: "Carboxylic acids undergo **nucleophilic acyl substitution** instead, in which –OH is replaced by another group.",
      },
      {
        label: "(d)(i) Why α-hydrogens are acidic",
        text: "Because of the **strong electron-withdrawing effect of the carbonyl group** and, more importantly, the **resonance stabilisation of the conjugate base**. Removing an α-hydrogen leaves a carbanion whose charge is delocalised onto the carbonyl oxygen:",
      },
      { equation: "CH3CHO + B^− <=> [CH2–CHO <=> CH2=CH–O^−] + BH" },
      {
        text: "That delocalised **enolate** is far more stable than an ordinary carbanion, which is why an α-hydrogen comes off (pK_a ≈ 20) while an ordinary alkane C–H does not (pK_a ≈ 50). It is exactly this that makes the aldol condensation possible.",
      },
      {
        label: "(d)(ii) Benzaldehyde with concentrated NaOH",
        text: "Benzaldehyde has **no α-hydrogen**, so instead of the aldol it undergoes the **Cannizzaro reaction** — a disproportionation:",
      },
      { equation: "2C6H5CHO + conc. NaOH -> C6H5CH2OH + C6H5COO^−Na^+" },
      {
        text: "One molecule is **reduced** to benzyl alcohol and the other **oxidised** to sodium benzoate.",
      },
    ],
    keyPoint:
      "Nucleophilic addition falls as alkyl and aryl groups crowd and feed the carbonyl; no α-hydrogen means Cannizzaro rather than aldol.",
  },
  /* ---------------------------------------------------------------- */
  /* 56/2/1 — SECTION A, 2 marks each                                 */
  /* ---------------------------------------------------------------- */
  {
    id: "p22b-2",
    chapter: 8,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Conversions",
    years: [2022],
    question:
      "How will you carry out the following conversions : (Any two)\n(i) Propanal to Propane\n(ii) Ethanal to But-2-enal\n(iii) Ethanoic acid to ethanamide",
    answer: [
      {
        label: "(i) Propanal to propane",
        text: "**Clemmensen reduction** — zinc amalgam with concentrated hydrochloric acid reduces the C=O straight to CH2:",
      },
      { equation: "CH3CH2CHO ->[Zn(Hg)][conc. HCl] CH3CH2CH3 + H2O" },
      {
        text: "**Wolff–Kishner** reduction does the same job under basic conditions (NH2NH2 then KOH in ethylene glycol at 453–473 K) and is the route to choose if the molecule carries acid-sensitive groups.",
      },
      {
        label: "(ii) Ethanal to but-2-enal",
        text: "**Aldol condensation** — two molecules of ethanal join over dilute alkali, then the aldol loses water on heating:",
      },
      {
        equations: [
          "2CH3CHO ->[dil. NaOH] CH3CH(OH)CH2CHO",
          "CH3CH(OH)CH2CHO ->[Δ][-H2O] CH3CH=CH–CHO",
        ],
      },
      {
        text: "The dehydration is favoured because the new double bond is **conjugated** with the carbonyl. But-2-enal is the classic aldol product and this conversion doubles the carbon count from two to four.",
      },
      {
        label: "(iii) Ethanoic acid to ethanamide",
        text: "Heat the acid with **ammonia**. The ammonium salt forms first and loses water on further heating:",
      },
      { equation: "CH3COOH + NH3 ->[Δ] CH3CONH2 + H2O" },
      {
        text: "Via the acid chloride is the higher-yielding laboratory route: CH3COOH ->[SOCl2] CH3COCl ->[NH3] CH3CONH2.",
      },
    ],
    keyPoint:
      "Clemmensen and Wolff–Kishner take C=O to CH2; aldol builds the chain; NH3 with heat gives the amide.",
  },
  {
    id: "p22b-3",
    chapter: 3,
    type: "numerical",
    marks: 2,
    difficulty: "medium",
    topic: "Rate of reaction",
    years: [2022],
    question:
      "In the given reaction\nN2 (g) + 3H2 (g) -> 2NH3 (g)\nthe rate of formation of NH3 is 3·6 × 10^−4 mol L^−1 s^−1. Calculate the\n(i) rate of reaction, and\n(ii) rate of disappearance of H2 (g).",
    answer: [
      {
        text: "The rate of reaction is defined so that it comes out the **same number whichever species you measure** — each concentration change is divided by its stoichiometric coefficient:",
      },
      {
        equation:
          "$\\text{Rate} = -\\dfrac{\\Delta[\\mathrm{N_2}]}{\\Delta t} = -\\dfrac{1}{3}\\dfrac{\\Delta[\\mathrm{H_2}]}{\\Delta t} = +\\dfrac{1}{2}\\dfrac{\\Delta[\\mathrm{NH_3}]}{\\Delta t}$",
      },
      { label: "(i) Rate of reaction", text: "Ammonia has coefficient 2, so halve its rate of formation:" },
      {
        equation:
          "$\\text{Rate} = \\dfrac{1}{2} \\times 3.6 \\times 10^{-4} = 1.8 \\times 10^{-4}\\ \\text{mol L}^{-1}\\text{s}^{-1}$",
      },
      { label: "(ii) Rate of disappearance of H2", text: "Hydrogen has coefficient 3, so it disappears three times faster than the reaction rate:" },
      {
        equation:
          "$-\\dfrac{\\Delta[\\mathrm{H_2}]}{\\Delta t} = 3 \\times 1.8 \\times 10^{-4} = 5.4 \\times 10^{-4}\\ \\text{mol L}^{-1}\\text{s}^{-1}$",
      },
      {
        text: "A check that catches sign and factor errors at once: hydrogen is consumed **3/2 times** as fast as ammonia is formed, and 5.4 = 1.5 × 3.6. ✓",
      },
      {
        text: "The minus signs are part of the definition, not the answer — rates quoted as 'rate of disappearance' are reported as positive numbers.",
      },
    ],
    keyPoint:
      "Divide each species' rate by its coefficient to get the one rate of reaction; multiply back to move between species.",
  },
  {
    id: "p22b-4",
    chapter: 2,
    type: "numerical",
    marks: 2,
    difficulty: "easy",
    topic: "Degree of dissociation",
    years: [2022],
    question:
      "(i) State Kohlrausch's law of independent migration of ions.\n(ii) Calculate the degree of dissociation (α) of CH3COOH if Λm and Λ°m of CH3COOH are 48 S cm^2 mol^−1 and 400 S cm^2 mol^−1 respectively.",
    answer: [
      {
        label: "(i) Kohlrausch's law",
        text: "**Limiting molar conductivity is equal to the sum of the individual contributions of the anion and the cation of the electrolyte.** At infinite dilution the ions move independently of one another.",
      },
      { equation: "$\\Lambda_m^\\circ = \\nu_+\\lambda_+^\\circ + \\nu_-\\lambda_-^\\circ$" },
      {
        label: "(ii) Degree of dissociation",
        text: "For a weak electrolyte, α is the ratio of the molar conductivity at the given concentration to the value at infinite dilution:",
      },
      { equation: "$\\alpha = \\dfrac{\\Lambda_m}{\\Lambda_m^\\circ}$" },
      { equation: "$\\alpha = \\dfrac{48}{400} = 0.12$" },
      {
        text: "So acetic acid is **12 % dissociated** at this concentration. α is a ratio of two like quantities and is therefore **dimensionless** — writing S cm^2 mol^−1 after it is an error.",
      },
      {
        text: "The value also feeds straight into the dissociation constant, which is the usual follow-up: K_a = cα²/(1 − α).",
      },
    ],
    keyPoint: "α = Λm / Λ°m for a weak electrolyte, and Λ°m itself comes from Kohlrausch's law.",
  },
  /* ---------------------------------------------------------------- */
  /* 56/2/1 — SECTION B, 3 marks each                                 */
  /* ---------------------------------------------------------------- */
  {
    id: "p22b-5",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Valence bond theory",
    years: [2022],
    question:
      "Write the hybridisation and magnetic character of the following complexes :\n(i) [NiCl4]^2−\n(ii) [Co(NH3)6]^3+\n(iii) [FeF6]^3−\n[Atomic number : Ni = 28, Co = 27, Fe = 26]",
    answer: [
      {
        table: [
          ["Complex", "Metal ion", "d config", "Ligand field", "Hybridisation", "Unpaired e^−", "Magnetic character"],
          ["[NiCl4]^2−", "Ni^2+", "d^8", "Weak (Cl^−)", "sp^3", "2", "Paramagnetic"],
          ["[Co(NH3)6]^3+", "Co^3+", "d^6", "Strong (NH3)", "d^2sp^3", "0", "Diamagnetic"],
          ["[FeF6]^3−", "Fe^3+", "d^5", "Weak (F^−)", "sp^3d^2", "5", "Paramagnetic"],
        ],
      },
      {
        label: "(i) [NiCl4]^2−  — sp^3, paramagnetic",
        text: "Ni is [Ar] 3d^8 4s^2, so Ni^2+ is **3d^8**. Chloride is a **weak field** ligand and cannot force pairing, so two electrons stay unpaired and no 3d orbital is freed. The 4s and three 4p orbitals hybridise to **sp^3** — tetrahedral.",
      },
      { equation: "$\\mu = \\sqrt{2(2+2)} = \\sqrt{8} = 2.83 \\text{ BM}$" },
      {
        text: "Contrast [Ni(CN)4]^2−: cyanide is strong field, forces pairing, frees one 3d orbital, and gives **dsp^2** — square planar and diamagnetic. Same metal, same oxidation state, opposite answer.",
      },
      {
        label: "(ii) [Co(NH3)6]^3+  — d^2sp^3, diamagnetic",
        text: "Co^3+ is **3d^6**. Ammonia is a **strong field** ligand, so all six electrons pair into three 3d orbitals, vacating two. Those two inner 3d orbitals with the 4s and 4p give **d^2sp^3** — an octahedral, inner-orbital, low-spin complex with μ = 0.",
      },
      {
        label: "(iii) [FeF6]^3−  — sp^3d^2, paramagnetic",
        text: "Fe^3+ is **3d^5**. Fluoride is the **weakest** common field ligand, so all five electrons stay unpaired and no 3d orbital is available. The metal must use the outer **4d** orbitals: 4s, 4p and 4d give **sp^3d^2** — octahedral, outer-orbital, high spin.",
      },
      { equation: "$\\mu = \\sqrt{5(5+2)} = \\sqrt{35} = 5.92 \\text{ BM}$" },
      {
        text: "The pattern to carry: **inner orbital (d^2sp^3) means strong field and low spin; outer orbital (sp^3d^2) means weak field and high spin** — and the two are told apart experimentally by the magnetic moment.",
      },
    ],
    keyPoint:
      "The ligand's field strength decides whether pairing happens, and pairing decides inner vs outer hybridisation and the magnetic moment.",
  },
  {
    id: "p22b-6",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Ligands and stability",
    years: [2022],
    question:
      "(i) Write the IUPAC name of the following complex :\n[Co(NH3)4(H2O)Cl]Cl2\n(ii) What is the difference between an Ambidentate ligand and a Bidentate ligand ?\n(iii) Out of [Fe(NH3)6]^3+ and [Fe(C2O4)3]^3−, which complex is more stable and why ?",
    answer: [
      {
        label: "(i) IUPAC name",
        text: "**Tetraamminaquachloridocobalt(III) chloride.**",
      },
      {
        text: "Built up in the usual order — ligands alphabetically, then the metal with its oxidation state, then the counter ion:",
      },
      {
        table: [
          ["Part", "Contribution"],
          ["4 NH3", "tetraammine (alphabetised under 'a' for ammine)"],
          ["1 H2O", "aqua"],
          ["1 Cl^− inside", "chlorido"],
          ["Co", "cobalt(III) — x + 0 + 0 + (−1) = +2, so x = +3"],
          ["2 Cl^− outside", "chloride"],
        ],
      },
      {
        text: "The oxidation state comes from the complex ion's charge: two chlorides outside mean [Co(NH3)4(H2O)Cl]^2+.",
      },
      {
        label: "(ii) Ambidentate against bidentate",
        text: "**An ambidentate ligand has two different donor atoms but binds through only one of them at a time; a bidentate ligand binds through two donor atoms at once.**",
      },
      {
        table: [
          ["", "Ambidentate", "Bidentate"],
          ["Donor atoms available", "Two, different", "Two"],
          ["Donor atoms used at once", "One", "Both"],
          ["Coordination sites occupied", "One", "Two"],
          ["Ring formed ?", "No", "Yes — a chelate ring"],
          ["Examples", "NO2^− (N or O), SCN^− (S or N), CN^− (C or N)", "en, C2O4^2−, glycinate"],
        ],
      },
      {
        text: "The distinction shows up as **linkage isomerism** for ambidentate ligands — [Co(NH3)5(NO2)]^2+ and [Co(NH3)5(ONO)]^2+ are different compounds with different colours.",
      },
      {
        label: "(iii) Which complex is more stable",
        text: "**[Fe(C2O4)3]^3−**, because of the **chelate effect**.",
      },
      {
        text: "Oxalate is **bidentate**, so each of the three ligands grips the iron through two oxygens and closes a **five-membered ring**. Ammonia is monodentate and forms no ring. A chelated complex is far harder to break apart, because releasing the metal requires both bonds of a ring to break at once — and it is also favoured entropically, since three oxalates displace six water molecules.",
      },
    ],
    keyPoint:
      "Ambidentate offers a choice of donor atom; bidentate uses both and chelates, which is why oxalate complexes outlast ammine ones.",
  },
  {
    id: "p22b-7",
    chapter: 2,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Nernst equation",
    years: [2022],
    question:
      "Calculate the emf of the following cell :\nZn (s) | Zn^2+ (0·01 M) || (0·001 M) Ag^+ | Ag (s)\nGiven : E°(Zn^2+/Zn) = − 0·76 V and E°(Ag^+/Ag) = + 0·80 V\n[log 2 = 0·3010, log 3 = 0·4771, log 10 = 1]",
    answer: [
      { label: "The cell reaction", text: "Zinc is on the left, so it is the anode and is oxidised. Two electrons are transferred, so **two** silver ions are reduced:" },
      {
        equations: [
          "Anode : Zn(s) -> Zn^2+(aq) + 2e^−",
          "Cathode : 2Ag^+(aq) + 2e^− -> 2Ag(s)",
          "Overall : Zn(s) + 2Ag^+(aq) -> Zn^2+(aq) + 2Ag(s)",
        ],
      },
      { label: "Standard emf", text: "" },
      { equation: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.80 - (-0.76) = 1.56 \\text{ V}$" },
      { label: "Apply the Nernst equation", text: "n = 2, and note the **square** on [Ag^+] — the coefficient 2 becomes an exponent in the reaction quotient:" },
      {
        equation:
          "$E_{cell} = E^\\circ_{cell} - \\dfrac{0.059}{2}\\log\\dfrac{[\\mathrm{Zn^{2+}}]}{[\\mathrm{Ag^{+}}]^{2}}$",
      },
      {
        equation:
          "$E_{cell} = 1.56 - \\dfrac{0.059}{2}\\log\\dfrac{0.01}{(0.001)^{2}} = 1.56 - \\dfrac{0.059}{2}\\log\\dfrac{10^{-2}}{10^{-6}}$",
      },
      { equation: "$E_{cell} = 1.56 - \\dfrac{0.059}{2}\\log 10^{4} = 1.56 - \\dfrac{0.059}{2} \\times 4$" },
      { equation: "$E_{cell} = 1.56 - 0.118 = 1.442 \\text{ V}$" },
      {
        text: "The exponent is where marks are usually lost. Forgetting to square [Ag^+] gives log 10 = 1 and an answer of 1.53 V — close enough to look plausible and still wrong. The scheme also deducts half a mark for an answer written without the volt.",
      },
    ],
    keyPoint:
      "Stoichiometric coefficients become exponents in the Nernst quotient, so a 2:1 cell squares the ion concentration.",
  },
  {
    id: "p22b-8",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Reactions of carbonyl compounds",
    years: [2022],
    question:
      "Write the major products in the following :\n(i) C6H5CHO ->[HNO3 + H2SO4][273-283 K] ?\n(ii) C6H11COONa + NaOH ->[CaO][Δ] ?\n(iii) CH3CHO + NH2OH -> ?",
    answer: [
      {
        label: "(i) Nitration of benzaldehyde",
        text: "**_(m)_-Nitrobenzaldehyde.** The –CHO group is **electron withdrawing** and therefore deactivating and **meta directing**:",
      },
      { equation: "C6H5CHO + HNO3 ->[conc. H2SO4][273-283 K] m-O2N–C6H4–CHO + H2O" },
      {
        text: "The carbonyl pulls electron density out of the ring, and resonance leaves the ortho and para positions most depleted — so the electrophile attacks the **meta** position by default. The low temperature keeps the reaction to a single substitution.",
      },
      {
        label: "(ii) Decarboxylation with soda lime",
        text: "**Cyclohexane.** Sodium hydroxide with calcium oxide — soda lime — removes the –COONa group and replaces it with hydrogen:",
      },
      { equation: "C6H11COONa + NaOH ->[CaO][Δ] C6H12 + Na2CO3" },
      {
        text: "The product has **one carbon fewer** than the salt. CaO is present to keep the NaOH dry and to stop it attacking the glass.",
      },
      {
        label: "(iii) Ethanal with hydroxylamine",
        text: "**Ethanal oxime**, CH3CH=N–OH. Hydroxylamine attacks the carbonyl carbon and the adduct loses water:",
      },
      { equation: "CH3CHO + NH2OH -> CH3CH=N–OH + H2O" },
      {
        text: "This is one of a family of nucleophilic addition–elimination reactions with ammonia derivatives, all of which replace the carbonyl oxygen with =N–Z:",
      },
      {
        table: [
          ["Reagent", "Product"],
          ["NH2OH (hydroxylamine)", "Oxime"],
          ["NH2NH2 (hydrazine)", "Hydrazone"],
          ["2,4-DNP reagent", "2,4-Dinitrophenylhydrazone — orange solid, the carbonyl test"],
          ["NH2CONHNH2 (semicarbazide)", "Semicarbazone"],
        ],
      },
    ],
    keyPoint:
      "–CHO is meta directing; soda lime decarboxylates and shortens the chain; ammonia derivatives give =N–Z from C=O.",
  },
  {
    id: "p22b-9",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Distinguishing carbonyl compounds",
    years: [2022],
    question:
      "(i) Oxidation of propanal is easier than propanone. Why ?\n(ii) How can you distinguish between Acetophenone and Benzophenone ?\n(iii) Draw the structure of the following derivative :\n2,4-Dinitrophenylhydrazone of Propanone",
    answer: [
      {
        label: "(i) Why propanal oxidises more readily",
        text: "Because oxidising an aldehyde only needs a **C–H bond** to break, while oxidising a ketone requires breaking a **C–C bond**, which is much stronger.",
      },
      {
        table: [
          ["", "Propanal, CH3CH2CHO", "Propanone, CH3COCH3"],
          ["Carbonyl carbon carries", "An H", "Two carbons"],
          ["Bond broken on oxidation", "C–H (≈ 414 kJ mol^−1)", "C–C (≈ 347 kJ mol^−1 but in a chain)"],
          ["Conditions needed", "Mild — Tollens', Fehling's", "Vigorous — hot conc. KMnO4"],
          ["Product", "Propanoic acid, same carbon count", "A mixture of shorter acids"],
        ],
      },
      {
        text: "This is why **Tollens' and Fehling's reagents distinguish aldehydes from ketones** at all: they are mild enough to take the C–H but not the C–C.",
      },
      { equation: "CH3CH2CHO ->[[O]] CH3CH2COOH" },
      {
        label: "(ii) Acetophenone against benzophenone",
        text: "The **iodoform test**. Warm each with iodine and sodium hydroxide:",
      },
      {
        points: [
          "**Acetophenone**, C6H5COCH3, has a CH3 attached to the carbonyl — a methyl ketone — so it gives a **yellow precipitate of iodoform**.",
          "**Benzophenone**, C6H5COC6H5, carries two phenyl groups and no CH3, so there is **no reaction**.",
        ],
      },
      { equation: "C6H5COCH3 + 3I2 + 4NaOH -> CHI3↓ + C6H5COONa + 3NaI + 3H2O" },
      {
        label: "(iii) 2,4-DNP derivative of propanone",
        text: "The carbonyl oxygen is replaced by =N–NH–Ar, where Ar is the 2,4-dinitrophenyl ring:",
      },
      { equation: "(CH3)2C=N–NH–C6H3(NO2)2" },
      {
        text: "Written out: the two methyl groups sit on the former carbonyl carbon, which is now doubly bonded to nitrogen; that nitrogen connects through –NH– to a benzene ring bearing nitro groups at positions 2 and 4.",
      },
      { equation: "(CH3)2C=O + H2N–NH–C6H3(NO2)2 -> (CH3)2C=N–NH–C6H3(NO2)2 + H2O" },
      {
        text: "These derivatives are **orange to red crystalline solids** with sharp melting points, which is what makes 2,4-DNP both a test for the carbonyl group and a way of identifying which carbonyl it is.",
      },
    ],
    keyPoint:
      "Aldehydes oxidise easily because only a C–H breaks; iodoform picks out the methyl ketone; 2,4-DNP swaps O for =N–NH–Ar.",
  },
  {
    id: "p22b-11",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Standard electrode potentials",
    years: [2022],
    question:
      "The E°(M^2+/M) values of the first row transition elements are :\nCr −0·91, Mn −1·18, Fe −0·44, Co −0·28, Ni −0·25, Cu +0·34, Zn −0·76 (all in V)\n(i) Why is E°(Mn^2+/Mn) value highly negative as compared to other elements ?\n(ii) What is the reason for the irregularity in the above E° values ?\n(iii) Why is E°(Cu^2+/Cu) value exceptionally positive ?",
    answer: [
      {
        label: "(i) Why manganese is the most negative",
        text: "Because of the **stable half-filled 3d^5 configuration of Mn^2+**:",
      },
      { equation: "Mn (Z = 25) : [Ar] 3d^5 4s^2   ->   Mn^2+ : [Ar] 3d^5" },
      {
        text: "Losing its two 4s electrons leaves manganese with the extra-stable half-filled d subshell, so the ion is unusually favourable to form — which is exactly what a **highly negative** E° for M^2+/M reports. Zinc (−0·76 V) is negative for the mirror reason: Zn^2+ has the stable **full** 3d^10 shell.",
      },
      {
        label: "(ii) Why the values are irregular",
        text: "Because E°(M^2+/M) is the net result of **three** separate enthalpy terms, and they do not vary smoothly across the series:",
      },
      {
        table: [
          ["Step", "Enthalpy", "Sign"],
          ["M(s) -> M(g)", "Enthalpy of atomisation, Δ_aH°", "Endothermic"],
          ["M(g) -> M^2+(g) + 2e^−", "Sum of the first two ionisation enthalpies, Δ_iH1 + Δ_iH2", "Endothermic"],
          ["M^2+(g) -> M^2+(aq)", "Hydration enthalpy, Δ_hydH°", "Exothermic"],
        ],
      },
      {
        text: "The scheme's wording is that the **sum (Δ_iH1 + Δ_iH2) is irregular**, and that manganese and vanadium have **much lower sublimation enthalpies** than their neighbours. Because the three terms are comparable in size and each varies in its own way, the total shows no smooth trend.",
      },
      {
        label: "(iii) Why copper alone is positive",
        text: "Because copper has a **high enthalpy of atomisation** and a **low enthalpy of hydration** for Cu^2+ — so the energy put in to atomise and ionise the metal is not paid back by hydrating the ion.",
      },
      {
        text: "The overall change for Cu(s) -> Cu^2+(aq) is therefore **endothermic**, which makes E° positive and means copper **does not displace hydrogen from acids**. It dissolves only in oxidising acids such as nitric acid, where the anion rather than H^+ does the oxidising.",
      },
      {
        text: "Copper is the only first-row transition metal with a positive E°(M^2+/M), which is also why it occurs native and is used for plumbing and coinage.",
      },
    ],
    keyPoint:
      "E° is a balance of atomisation, ionisation and hydration; d^5 and d^10 stability push Mn and Zn negative, and poor hydration pushes Cu positive.",
  },
  {
    id: "p22b-12",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Named reactions",
    years: [2022],
    question:
      "Write the equation involved in the following reactions :\n(i) Rosenmund reduction\n(ii) Etard reaction\n(iii) Stephen reaction",
    answer: [
      {
        label: "(i) Rosenmund reduction",
        text: "An **acyl chloride** is hydrogenated to an **aldehyde** over palladium supported on barium sulphate and poisoned with sulphur or quinoline:",
      },
      { equation: "RCOCl + H2 ->[Pd / BaSO4] RCHO + HCl" },
      { equation: "CH3COCl + H2 ->[Pd / BaSO4][S or quinoline] CH3CHO + HCl" },
      {
        text: "The **poison** is what makes it useful: unpoisoned palladium would reduce the aldehyde on to the primary alcohol. This is a partial reduction, stopped deliberately part-way.",
      },
      {
        label: "(ii) Etard reaction",
        text: "**Toluene** is oxidised to **benzaldehyde** by chromyl chloride in carbon disulphide, through a chromium complex that is hydrolysed in the second step:",
      },
      {
        equations: [
          "C6H5CH3 + CrO2Cl2 ->[CS2] C6H5CH(OCrOHCl2)2",
          "C6H5CH(OCrOHCl2)2 ->[H3O^+][Δ] C6H5CHO",
        ],
      },
      {
        text: "Again the point is **controlled** oxidation. The chromium complex protects the carbon from going on to benzoic acid, which is what hot KMnO4 would give.",
      },
      {
        label: "(iii) Stephen reaction",
        text: "A **nitrile** is reduced by stannous chloride and hydrochloric acid to an imine, which is then hydrolysed to the **aldehyde**:",
      },
      {
        equations: [
          "RCN + SnCl2 + HCl -> RCH=NH",
          "RCH=NH + H3O^+ -> RCHO + NH3",
        ],
      },
      {
        text: "All three routes share one purpose — **making an aldehyde without overshooting it** — which is why they are examined together. DIBAL-H at low temperature achieves the same from a nitrile or an ester.",
      },
    ],
    keyPoint:
      "Rosenmund from an acyl chloride, Etard from a methylbenzene, Stephen from a nitrile — three controlled routes to an aldehyde.",
  },
  {
    id: "p22b-13",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Acidity of carboxylic acids",
    years: [2022],
    question:
      "(i) Which acid of each pair would you expect to be stronger ? Give reason.\n(I) CH3COOH or F–CH2–COOH\n(II) C6H5OH or CH3COOH\n(ii) Distinguish between Pentan-2-one and Pentan-3-one.",
    answer: [
      {
        label: "(i)(I) CH3COOH or FCH2COOH",
        text: "**FCH2COOH — fluoroacetic acid — is stronger**, because of the **–I effect of fluorine**.",
      },
      {
        text: "Fluorine is the most electronegative element and pulls electron density along the C–C bond away from the carboxylate. That **disperses the negative charge** of the conjugate base and stabilises it, so the proton leaves more readily:",
      },
      {
        table: [
          ["Acid", "Substituent", "Effect on the carboxylate", "pK_a"],
          ["FCH2COOH", "–F, strong –I", "Charge dispersed — stabilised", "2.6"],
          ["CH3COOH", "–CH3, +I", "Charge concentrated — destabilised", "4.76"],
        ],
      },
      {
        text: "The methyl group does the opposite: it **pushes** electron density in, intensifying the negative charge and making acetic acid the weaker of the two by over two pK_a units.",
      },
      {
        label: "(i)(II) C6H5OH or CH3COOH",
        text: "**CH3COOH is stronger**, because the **acetate ion is more resonance stabilised than the phenoxide ion**.",
      },
      {
        table: [
          ["", "Acetate, CH3COO^−", "Phenoxide, C6H5O^−"],
          ["Charge delocalised onto", "Two oxygens", "The ring's carbons"],
          ["Equivalent structures", "Two, identical", "Several, but not equivalent"],
          ["Electronegativity of the carrier", "Oxygen — holds charge well", "Carbon — holds it poorly"],
          ["pK_a", "4.76", "10.0"],
        ],
      },
      {
        text: "In acetate the charge is shared equally between **two oxygen atoms**, both well suited to carrying it, and the two resonance forms are identical. In phenoxide the charge is pushed onto ring **carbons**, which are far less electronegative. So acetic acid is about 20 000 times the stronger acid.",
      },
      {
        label: "(ii) Pentan-2-one against pentan-3-one",
        text: "The **iodoform test**. Heat both with iodine and sodium hydroxide:",
      },
      {
        points: [
          "**Pentan-2-one**, CH3COCH2CH2CH3, is a methyl ketone, so it gives a **yellow precipitate of iodoform**.",
          "**Pentan-3-one**, CH3CH2COCH2CH3, has ethyl groups on both sides and **does not react**.",
        ],
      },
      { equation: "CH3COCH2CH2CH3 + 3I2 + 4NaOH -> CHI3↓ + CH3CH2CH2COONa + 3NaI + 3H2O" },
    ],
    keyPoint:
      "–I groups strengthen an acid and +I groups weaken it; acetate beats phenoxide because oxygen carries charge better than carbon.",
  },
  {
    id: "p22b-14",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Properties of transition elements",
    years: [2022],
    question:
      "Account for the following :\n(i) Transition metals and their compounds show catalytic activities.\n(ii) Zn, Cd and Hg are non-transition elements.\n(iii) Zr and Hf are of almost identical atomic radii.",
    answer: [
      {
        label: "(i) Why they are catalysts",
        text: "Because of their **variable oxidation states** and their ability to **form complexes**, both of which let them take part in a reaction and then return to their original state.",
      },
      {
        points: [
          "**Variable oxidation state** lets the metal accept electrons from one reactant and pass them to another, providing a low-energy path. Iron in the Haber process and V2O5 in the Contact process both work this way.",
          "**Complex formation** using the (n−1)d and ns orbitals lets the metal bind reactants and hold them in the right orientation.",
          "In heterogeneous catalysis the surface provides a **large area for adsorption**, weakening the bonds in the adsorbed molecules.",
        ],
      },
      {
        table: [
          ["Catalyst", "Process"],
          ["Fe", "Haber — ammonia synthesis"],
          ["V2O5", "Contact — SO2 to SO3"],
          ["Ni", "Hydrogenation of oils"],
          ["TiCl4 with Al(C2H5)3", "Ziegler–Natta polymerisation"],
        ],
      },
      {
        label: "(ii) Why Zn, Cd and Hg are not transition elements",
        text: "Because they have **completely filled d orbitals in the ground state as well as in the oxidised state**, and a transition element is defined as one with a **partially** filled d subshell in the atom or in a common ion.",
      },
      {
        equations: [
          "Zn : [Ar] 3d^10 4s^2   ->   Zn^2+ : [Ar] 3d^10",
          "Cd : [Kr] 4d^10 5s^2   ->   Cd^2+ : [Kr] 4d^10",
          "Hg : [Xe] 4f^14 5d^10 6s^2   ->   Hg^2+ : [Xe] 4f^14 5d^10",
        ],
      },
      {
        text: "Each loses only its two s electrons, leaving the d^10 shell intact. They are therefore **colourless, diamagnetic**, limited to +2, and low melting — none of the usual transition-metal behaviour.",
      },
      {
        label: "(iii) Why Zr and Hf have the same radius",
        text: "Because of the **lanthanoid contraction** — the steady decrease in size across the fourteen lanthanoids, caused by the **poor shielding effect of the 4f orbitals**.",
      },
      {
        text: "Hafnium sits immediately after the lanthanoids in the third transition series. Going from lanthanum to lutetium, each added 4f electron shields the increased nuclear charge badly, so the effective nuclear charge rises and the atoms contract. By the time the series ends, that contraction has cancelled almost exactly the increase in size expected from the extra shell.",
      },
      {
        table: [
          ["Element", "Series", "Atomic radius"],
          ["Zr", "Second (4d)", "160 pm"],
          ["Hf", "Third (5d)", "159 pm"],
        ],
      },
      {
        text: "The practical consequence is that zirconium and hafnium have nearly identical chemistry and occur together, and are notoriously difficult to separate.",
      },
    ],
    keyPoint:
      "Variable oxidation states make transition metals catalysts; a full d shell excludes Zn, Cd and Hg; lanthanoid contraction pairs Zr with Hf.",
  },
  /* ---------------------------------------------------------------- */
  /* 56/2/1 — SECTION C, case-based, 5 marks                          */
  /* ---------------------------------------------------------------- */
  {
    id: "p22b-15",
    chapter: 9,
    type: "case-study",
    marks: 5,
    difficulty: "medium",
    topic: "Amines",
    years: [2022],
    passage:
      "Amines constitute an important class of organic compounds derived by replacing one or more hydrogen atoms of ammonia molecule by alkyl/aryl groups. Amines are usually formed from nitro compounds, halides, amides, etc. They exhibit hydrogen bonding which influences their physical properties. Alkyl amines are found to be stronger bases than ammonia. In aromatic amines, electron releasing and withdrawing groups, respectively increase and decrease their basic character. Reactions of amines are governed by availability of the unshared pair of electrons on nitrogen. Influence of the number of hydrogen atoms at nitrogen atom on the type of reactions and nature of products is responsible for identification and distinction between primary, secondary and tertiary amines. Reactivity of aromatic amines can be controlled by acylation process.",
    question:
      "(i) Why does aniline not give Friedel-Crafts reaction ?\n(ii) Arrange the following in the increasing order of their pK_b values :\nC6H5NH2, NH3, C2H5NH2, (CH3)3N\n(iii) How can you distinguish between CH3CH2NH2 and (CH3CH2)2NH by Hinsberg test ?\n(iv) Write the structures of A and B in the following reactions :\n(I) C6H5NO2 ->[Sn + HCl] A ->[Br2 water] B\n(II) CH3CH2CONH2 ->[Br2 / alc. KOH] A ->[CH3COCl / pyridine] B",
    answer: [
      {
        label: "(i) Why aniline fails the Friedel–Crafts reaction",
        text: "Because **aniline is a Lewis base and reacts with the AlCl3 catalyst** to form a salt. The nitrogen's lone pair is donated to the aluminium, so the nitrogen **acquires a positive charge**:",
      },
      { equation: "C6H5NH2 + AlCl3 -> C6H5N^+H2–AlCl3^−" },
      {
        text: "That –N^+H2–AlCl3^− group is **strongly electron withdrawing**, so it deactivates the ring exactly as –NO2 would. The ring becomes too electron-poor for the electrophile, and no alkylation or acylation occurs.",
      },
      {
        text: "The same protonation problem is why aniline cannot be nitrated directly in acid either, and why the –NH2 group is **acetylated first** when controlled substitution is wanted.",
      },
      {
        label: "(ii) Increasing order of pK_b",
        text: "**C2H5NH2 < (CH3)3N < NH3 < C6H5NH2.**",
      },
      {
        text: "pK_b runs **opposite** to basic strength — a low pK_b means a strong base — so this is the order from strongest base to weakest:",
      },
      {
        table: [
          ["Compound", "pK_b", "Basic strength"],
          ["C2H5NH2", "3.29", "Strongest"],
          ["(CH3)3N", "4.22", ""],
          ["NH3", "4.75", ""],
          ["C6H5NH2", "9.38", "Weakest"],
        ],
      },
      {
        text: "Alkyl amines beat ammonia because the **+I effect** raises electron density on nitrogen. Trimethylamine falls below ethylamine despite having three alkyl groups, because **steric crowding** hinders both solvation of its cation and approach of the proton. Aniline is far the weakest: its lone pair is **delocalised into the benzene ring**, so it is not freely available to a proton at all.",
      },
      {
        text: "The scheme notes that as the question names no medium, the gas-phase order (CH3)3N < C2H5NH2 < NH3 < C6H5NH2 is also accepted. In the gas phase only the +I effect operates, so the tertiary amine is the strongest base and has the lowest pK_b.",
      },
      {
        label: "(iii) Hinsberg test",
        text: "Add **Hinsberg's reagent — benzenesulphonyl chloride, C6H5SO2Cl** — to each, then treat the product with alkali:",
      },
      {
        table: [
          ["", "CH3CH2NH2 (primary)", "(CH3CH2)2NH (secondary)"],
          ["Product", "N-Ethylbenzenesulphonamide", "N,N-Diethylbenzenesulphonamide"],
          ["H left on N ?", "Yes — one", "No"],
          ["In alkali", "Precipitate **dissolves**", "Precipitate stays **insoluble**"],
        ],
      },
      {
        equations: [
          "C6H5SO2Cl + CH3CH2NH2 -> C6H5SO2NH–CH2CH3 + HCl",
          "C6H5SO2Cl + (CH3CH2)2NH -> C6H5SO2N(CH2CH3)2 + HCl",
        ],
      },
      {
        text: "The **primary** amine's product keeps one hydrogen on nitrogen. That hydrogen is made acidic by the two flanking sulphonyl oxygens, so alkali removes it and the salt dissolves. The **secondary** amine's product has no such hydrogen and cannot dissolve. A tertiary amine gives no reaction at all, so the test separates all three classes.",
      },
      { label: "(iv)(I) Nitrobenzene to a tribromoaniline", text: "" },
      {
        points: [
          "**A = aniline, C6H5NH2** — Sn/HCl reduces the nitro group to an amino group.",
          "**B = 2,4,6-tribromoaniline** — bromine water brominates all three activated positions at once.",
        ],
      },
      {
        equations: [
          "C6H5NO2 ->[Sn + HCl] C6H5NH2",
          "C6H5NH2 + 3Br2 ->[Br2 water] 2,4,6-Br3C6H2NH2 + 3HBr",
        ],
      },
      {
        text: "The **–NH2 group is so strongly activating** that bromination cannot be stopped at one substitution — no catalyst is needed and all three of the ortho and para positions react. Getting the monobromo product requires acetylating the amine first.",
      },
      { label: "(iv)(II) Propanamide to an acetylated amine", text: "" },
      {
        points: [
          "**A = ethanamine, CH3CH2NH2** — the Hofmann bromamide degradation, which loses one carbon.",
          "**B = N-ethylethanamide, CH3CH2NHCOCH3** — acetylation of the amine.",
        ],
      },
      {
        equations: [
          "CH3CH2CONH2 + Br2 + 4KOH -> CH3CH2NH2 + K2CO3 + 2KBr + 2H2O",
          "CH3CH2NH2 + CH3COCl ->[pyridine] CH3CH2NHCOCH3 + HCl",
        ],
      },
      {
        text: "Note the **carbon count**: propanamide has three carbons and ethanamine two, because the carbonyl carbon leaves as carbonate. Pyridine in the second step mops up the HCl produced, driving the acylation to completion.",
      },
    ],
    keyPoint:
      "Aniline poisons AlCl3 and so resists Friedel–Crafts; low pK_b means a strong base; Hinsberg separates 1°, 2° and 3° by solubility in alkali.",
  },
];
