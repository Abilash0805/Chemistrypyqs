import type { Question } from "@/types";

/**
 * Gap-fill questions, written to close what a syllabus-coverage audit found
 * missing rather than transcribed from a board paper.
 *
 * The audit (scratchpad/coverage.mts and named.mts) checked every prescribed
 * sub-topic and a checklist of named reactions against the bank. Coverage was
 * complete at sub-topic level, but six named items had no question at all
 * (Victor Meyer, Hofmann elimination, Haworth projection, enzyme specificity,
 * Benedict's test, and misch metal), three rested on a single card, Enzymes
 * had only three questions, and Kinetics and Coordination Compounds had almost
 * nothing at full 5-mark length despite both regularly carrying a long answer.
 *
 * These are modelled on board patterns but are not transcriptions, so `years`
 * is deliberately left empty — the card then shows no year badge, and the year
 * filter and "Repeated" chip stay honest about what came from a real paper.
 */
export const GAPFILL: Question[] = [
  /* ---------------------------------------------------------------- */
  /* ch4 — misch metal, which rested on one card                      */
  /* ---------------------------------------------------------------- */
  {
    id: "g-4-1",
    chapter: 4,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Lanthanoids",
    years: [],
    question:
      "(i) What is misch metal ? Give its composition.\n(ii) State two uses of misch metal.",
    answer: [
      {
        label: "(i) What it is",
        text: "**Misch metal is an alloy of the lanthanoids**, used wherever a cheap mixture of rare earths will do and separating the individual metals would not be worth the cost.",
      },
      {
        table: [
          ["Component", "Approximate proportion"],
          ["Lanthanoid metals (mostly cerium)", "≈ 95 %"],
          ["Iron", "≈ 5 %"],
          ["Traces of S, C, Ca, Al", "remainder"],
        ],
      },
      {
        text: "The lanthanoids are so alike chemically — because they are nearly the same size and almost all show only +3 — that they occur together and are difficult to separate. Misch metal takes advantage of that rather than fighting it.",
      },
      { label: "(ii) Uses", text: "" },
      {
        points: [
          "In **Mg-based alloys** to make pyrophoric alloys for **tracer bullets** and shells — the alloy sparks on impact.",
          "As the **flint of a lighter**, again because it is pyrophoric and sparks when struck.",
          "As a **deoxidiser and desulphuriser** in steelmaking, where the lanthanoids scavenge oxygen and sulphur.",
        ],
      },
      {
        text: "Any two earn the marks. The underlying reason in every case is the same: the lanthanoids are **electropositive and readily oxidised**, so the alloy burns or sparks easily.",
      },
    ],
    keyPoint:
      "Misch metal is ≈95 % lanthanoids (mostly Ce) with ≈5 % Fe; pyrophoric, so it is used in lighter flints and tracer bullets.",
  },
  /* ---------------------------------------------------------------- */
  /* ch6 — Freon and DDT, which shared a single card                  */
  /* ---------------------------------------------------------------- */
  {
    id: "g-6-1",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Polyhalogen compounds",
    years: [],
    question:
      "(i) What are freons ? Write the formula and name of the most common one.\n(ii) Give two uses of freons.\n(iii) Why has the use of freons been restricted ?",
    answer: [
      {
        label: "(i) What freons are",
        text: "**Freons are the chlorofluorocarbons (CFCs) of methane and ethane** — compounds in which every hydrogen has been replaced by chlorine or fluorine.",
      },
      {
        text: "The commonest is **Freon-12, dichlorodifluoromethane, CCl2F2**. It is made from tetrachloromethane by the Swarts reaction:",
      },
      { equation: "CCl4 + 2SbF3 ->[SbCl5] CCl2F2 + 2SbCl3" },
      { label: "(ii) Uses", text: "" },
      {
        points: [
          "As the **refrigerant** in refrigerators and air conditioners.",
          "As the **propellant** in aerosol sprays and for foam blowing.",
        ],
      },
      {
        text: "They were adopted because they are **unreactive, non-toxic, non-corrosive and easily liquefied** — which is exactly the property that turned out to be the problem.",
      },
      {
        label: "(iii) Why they are restricted",
        text: "Because they **deplete the ozone layer**. Being so unreactive, they are not destroyed in the troposphere and drift up into the stratosphere, where ultraviolet light breaks a C–Cl bond and releases a **chlorine free radical**:",
      },
      {
        equations: [
          "CF2Cl2 ->[UV] ĊF2Cl + Ċl",
          "Ċl + O3 -> ClȮ + O2",
          "ClȮ + Ȯ -> Ċl + O2",
        ],
      },
      {
        text: "The chlorine radical is **regenerated** in the third step, so one atom destroys ozone over and over — a single chlorine radical can take out around 100 000 ozone molecules. That chain is why the **Montreal Protocol (1987)** phased them out in favour of HFCs, which carry no chlorine.",
      },
    ],
    keyPoint:
      "Freons are CFCs — useful because they are unreactive, restricted because that lets them reach the stratosphere and release Cl radicals that catalytically destroy ozone.",
  },
  {
    id: "g-6-2",
    chapter: 6,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Polyhalogen compounds",
    years: [],
    question:
      "(i) Write the full name of DDT and state its use.\n(ii) Why is DDT no longer used in many countries ?\n(iii) Why does DDT become less effective against insects over time ?",
    answer: [
      {
        label: "(i) Name and use",
        text: "**DDT is _(p,p)_-dichlorodiphenyltrichloroethane**, the first of the chlorinated organic **insecticides**.",
      },
      { equation: "(ClC6H4)2CH–CCl3" },
      {
        text: "It was used mainly against the **mosquito** and so against **malaria**, and against the typhus-carrying louse. Its discovery as an insecticide earned Paul Müller the Nobel Prize in Medicine in 1948, and its production in the United States rose from 10 kg in 1944 to 30 000 kg by 1963.",
      },
      {
        label: "(ii) Why it was withdrawn",
        text: "For two reasons, both following from the same property — it is **extremely stable and not readily metabolised**.",
      },
      {
        points: [
          "It is **not biodegradable**, so it persists in soil and water for years.",
          "It is **fat-soluble**, so it is stored in the fatty tissue of animals rather than excreted, and **accumulates up the food chain**. Concentrations high enough to harm birds and fish build up from levels that were harmless where they were sprayed.",
        ],
      },
      {
        text: "The United States banned it in 1973. Its use continues in some countries for malaria control, where the disease burden is judged the greater harm.",
      },
      {
        label: "(iii) Why it loses effectiveness",
        text: "Because the insects **develop resistance**. Individuals carrying an enzyme that converts DDT into the far less toxic **DDE** survive the spraying and breed, so that resistance spreads rapidly through the population.",
      },
      {
        text: "This is ordinary natural selection operating on a very short generation time — which is why a compound that worked spectacularly against houseflies in the 1940s was already failing against them by 1949.",
      },
    ],
    keyPoint:
      "DDT is a persistent, fat-soluble insecticide: it bioaccumulates up the food chain, and insects that can metabolise it to DDE are selected for.",
  },
  /* ---------------------------------------------------------------- */
  /* ch7 — Victor Meyer test, absent                                  */
  /* ---------------------------------------------------------------- */
  {
    id: "g-7-1",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Distinguishing alcohols",
    years: [],
    question:
      "How would you distinguish between primary, secondary and tertiary alcohols by Victor Meyer's test ? Write the reactions involved and the colour obtained in each case.",
    answer: [
      {
        text: "All three alcohols are put through the **same three steps**, and only the last one distinguishes them:",
      },
      {
        label: "Step 1 — convert to the alkyl iodide",
        text: "Red phosphorus and iodine (or HI) replace the –OH:",
      },
      { equation: "R–OH + HI -> R–I + H2O" },
      {
        label: "Step 2 — convert to the nitroalkane",
        text: "Silver nitrite gives the nitroalkane. Silver nitrite is used rather than the potassium salt because AgNO2 is largely **covalent**, so attack comes through nitrogen and the nitro compound forms rather than the nitrite ester:",
      },
      { equation: "R–I + AgNO2 -> R–NO2 + AgI↓" },
      {
        label: "Step 3 — treat with nitrous acid, then alkali",
        text: "This is the step that separates them, because it needs an **α-hydrogen on the carbon bearing the nitro group** — and the three classes have two, one and none:",
      },
      {
        table: [
          ["Alcohol", "α-hydrogens on C–NO2", "Product with HNO2", "Colour with NaOH"],
          ["Primary, RCH2OH", "2", "Nitrolic acid, RC(NO2)=NOH", "**Red**"],
          ["Secondary, R2CHOH", "1", "Pseudonitrole, R2C(NO2)NO", "**Blue**"],
          ["Tertiary, R3COH", "0", "No reaction", "**Colourless**"],
        ],
      },
      {
        equations: [
          "RCH2NO2 + HNO2 -> RC(NO2)=NOH + H2O   (1° : red salt with alkali)",
          "R2CHNO2 + HNO2 -> R2C(NO2)NO + H2O   (2° : blue)",
          "R3CNO2 + HNO2 -> no reaction   (3° : colourless)",
        ],
      },
      {
        text: "So **red means primary, blue means secondary, no colour means tertiary**. The reason is structural rather than arbitrary: nitrous acid has to attack an α-hydrogen, and a tertiary carbon carrying the nitro group has none left.",
      },
      {
        label: "Compare the Lucas test",
        text: "Lucas reagent (conc. HCl with anhydrous ZnCl2) distinguishes the same three by **how fast a cloudiness appears** — immediately for tertiary, in about five minutes for secondary, and not at room temperature for primary. That order is the reverse of Victor Meyer's, because Lucas depends on carbocation stability while Victor Meyer depends on α-hydrogens.",
      },
    ],
    keyPoint:
      "Victor Meyer: R–OH → R–I → R–NO2 → then HNO2/NaOH gives red for 1°, blue for 2°, colourless for 3°.",
  },
  /* ---------------------------------------------------------------- */
  /* ch8 — Benedict's test, absent                                    */
  /* ---------------------------------------------------------------- */
  {
    id: "g-8-1",
    chapter: 8,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Distinguishing tests",
    years: [],
    question:
      "(i) What is Benedict's solution ?\n(ii) What is observed when glucose is warmed with Benedict's solution, and how does the test differ from Fehling's test ?",
    answer: [
      {
        label: "(i) What it is",
        text: "**Benedict's solution is an alkaline solution of a copper(II) citrate complex** — copper(II) sulphate with sodium citrate and sodium carbonate. The citrate holds the Cu^2+ in solution so the carbonate does not precipitate it as the hydroxide.",
      },
      {
        label: "(ii) What is observed",
        text: "A **brick-red precipitate of copper(I) oxide, Cu2O**, forms on warming. The blue colour of the solution fades as the copper(II) is reduced:",
      },
      { equation: "RCHO + 2Cu^2+ + 5OH^− -> RCOO^− + Cu2O↓ + 3H2O" },
      {
        text: "Glucose gives a positive result because its open-chain form carries a **free aldehyde group**, which is why glucose is a reducing sugar.",
      },
      {
        label: "How it differs from Fehling's",
        text: "Both detect the same thing by the same chemistry. The difference is practical:",
      },
      {
        table: [
          ["", "Benedict's", "Fehling's"],
          ["Complexing agent", "Citrate", "Tartrate (Rochelle salt)"],
          ["Alkali", "Sodium carbonate — mildly basic", "Sodium hydroxide — strongly basic"],
          ["Preparation", "**One** stable solution, stored ready to use", "**Two** solutions, mixed immediately before use"],
          ["Sensitivity", "Slightly less", "Slightly more"],
        ],
      },
      {
        text: "Because Benedict's is a single stable reagent and only mildly alkaline, it is the one used for clinical sugar testing — Fehling's strong alkali would decompose the sample.",
      },
      {
        text: "Both give a **negative result with ketones and with aromatic aldehydes**, so like Tollens' they separate aliphatic aldehydes from everything else.",
      },
    ],
    keyPoint:
      "Benedict's is one stable citrate-complexed Cu(II) reagent; a brick-red Cu2O precipitate marks a reducing sugar or aliphatic aldehyde.",
  },
  /* ---------------------------------------------------------------- */
  /* ch9 — Hofmann elimination, absent                                */
  /* ---------------------------------------------------------------- */
  {
    id: "g-9-1",
    chapter: 9,
    type: "short",
    marks: 3,
    difficulty: "hard",
    topic: "Reactions of amines",
    years: [],
    question:
      "(i) What is exhaustive methylation of an amine ? Write the reaction.\n(ii) State Hofmann's rule and write the major product formed when butan-2-amine is exhaustively methylated and the product heated.\n(iii) Why is the major product different from that given by Saytzeff's rule ?",
    answer: [
      {
        label: "(i) Exhaustive methylation",
        text: "**Treating an amine with excess methyl iodide until every hydrogen on nitrogen has been replaced**, giving a **quaternary ammonium salt**. Moist silver oxide then converts the salt to the hydroxide:",
      },
      {
        equations: [
          "CH3CH2CH(NH2)CH3 + 3CH3I ->[excess] CH3CH2CH(N^+(CH3)3)CH3 I^−",
          "R–N^+(CH3)3 I^− + AgOH -> R–N^+(CH3)3 OH^− + AgI↓",
        ],
      },
      {
        text: "On heating, that quaternary ammonium hydroxide eliminates to give an **alkene** plus a tertiary amine and water. This is the **Hofmann elimination**.",
      },
      {
        label: "(ii) Hofmann's rule and the product",
        text: "**Hofmann's rule: the alkene with the fewest alkyl substituents on the doubly bonded carbons — the least substituted alkene — is the major product.**",
      },
      {
        text: "Butan-2-amine gives, after exhaustive methylation and heating, **but-1-ene** as the major product:",
      },
      {
        equations: [
          "CH3CH2CH(N^+(CH3)3)CH3 OH^− ->[Δ] CH3CH2CH=CH2 + N(CH3)3 + H2O   (but-1-ene, major)",
          "CH3CH2CH(N^+(CH3)3)CH3 OH^− ->[Δ] CH3CH=CHCH3 + N(CH3)3 + H2O   (but-2-ene, minor)",
        ],
      },
      {
        label: "(iii) Why it differs from Saytzeff",
        text: "Because the two rules are decided by **different things** — and only one of them is about product stability.",
      },
      {
        table: [
          ["", "Saytzeff (dehydrohalogenation)", "Hofmann (quaternary ammonium)"],
          ["Leaving group", "Halide — small", "Trialkylamine — **very bulky**"],
          ["What controls the outcome", "Stability of the alkene formed", "Access to the β-hydrogen"],
          ["Major product", "**More** substituted alkene", "**Less** substituted alkene"],
          ["From butan-2-yl", "But-2-ene", "But-1-ene"],
        ],
      },
      {
        text: "The bulky –N(CH3)3 group blocks the base from the crowded internal β-hydrogen, so it removes the **more accessible terminal** one instead. There are also more of those terminal hydrogens to choose from, and the C–H bonds next to the positively charged nitrogen are the most acidic. All three effects push towards the terminal alkene.",
      },
    ],
    keyPoint:
      "A bulky leaving group makes elimination follow the accessible β-hydrogen, so Hofmann gives the least substituted alkene where Saytzeff gives the most.",
  },
  /* ---------------------------------------------------------------- */
  /* ch10 — Haworth projection and the thin Enzymes sub-topic         */
  /* ---------------------------------------------------------------- */
  {
    id: "g-10-1",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Structure of glucose",
    years: [],
    question:
      "(i) Why does glucose exist in a cyclic form ? Name the ring and the carbon that closes it.\n(ii) What is an anomeric carbon, and how do α-D-glucose and β-D-glucose differ ?\n(iii) Give one piece of evidence that glucose is cyclic rather than open-chain.",
    answer: [
      {
        label: "(i) Why the ring forms",
        text: "Because the **–OH on C-5 attacks the aldehyde carbon C-1** in an intramolecular nucleophilic addition, giving a cyclic **hemiacetal**. The ring so formed has six members — five carbons and one oxygen — and is called the **pyranose** ring, so the sugar is α- or β-D-glucopyranose.",
      },
      { equation: "CH2OH(CHOH)4CHO <=> cyclic hemiacetal (C-5 OH attacks C-1)" },
      {
        text: "A six-membered ring is strain-free, which is why it dominates. Attack by the C-4 –OH would give a five-membered **furanose** ring, which is the form fructose prefers.",
      },
      {
        label: "(ii) The anomeric carbon",
        text: "**The anomeric carbon is C-1** — the former aldehyde carbon, which becomes a new chiral centre when the ring closes. Because the attack can happen from either face, two isomers form. They differ **only at C-1** and are called **anomers**:",
      },
      {
        table: [
          ["", "α-D-Glucose", "β-D-Glucose"],
          ["–OH at C-1 in a Haworth projection", "points **down**", "points **up**"],
          ["Relative to the C-6 CH2OH", "opposite side", "same side"],
          ["Specific rotation", "+111°", "+19.2°"],
          ["Melting point", "419 K", "423 K"],
        ],
      },
      {
        text: "In a **Haworth projection** the pyranose ring is drawn as a flat hexagon seen edge-on, with the ring oxygen at the back right and C-1 at the right-hand corner; substituents point straight up or straight down from the ring.",
      },
      {
        text: "Dissolved in water, either anomer slowly converts into an equilibrium mixture of both and the rotation drifts to +52.5°. That change is **mutarotation**, and it happens because the ring must open through the aldehyde to re-close the other way.",
      },
      {
        label: "(iii) Evidence for the cyclic form",
        text: "**Glucose does not give the 2,4-DNP, Schiff's or NaHSO3 addition reactions of an ordinary aldehyde**, and its pentaacetate does not react with hydroxylamine — showing there is no free –CHO group present.",
      },
      {
        text: "**Mutarotation** itself is the second piece of evidence: an open-chain aldehyde has no second form to equilibrate with. The existence of **two crystalline anomers** with different melting points and rotations is the third.",
      },
    ],
    keyPoint:
      "The C-5 OH closes onto C-1 to give a pyranose hemiacetal; C-1 is the anomeric carbon, down for α and up for β in a Haworth projection.",
  },
  {
    id: "g-10-2",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Enzymes",
    years: [],
    question:
      "(i) What are enzymes ? To which class of biomolecules do they belong ?\n(ii) Name the enzyme that catalyses each of the following :\n(1) hydrolysis of maltose  (2) hydrolysis of sucrose  (3) conversion of glucose to ethanol",
    answer: [
      {
        label: "(i) What enzymes are",
        text: "**Enzymes are biocatalysts** — they catalyse the reactions of living systems. Chemically they are **globular proteins**, with a very specific three-dimensional shape on which their activity depends.",
      },
      {
        text: "What sets them apart from ordinary catalysts is the scale of the effect. An enzyme can raise a rate by a factor of **10⁶ to 10²⁰**, and does it under mild conditions — body temperature and near-neutral pH — where an industrial catalyst would need heat and pressure.",
      },
      {
        label: "(ii) Naming the enzymes",
        text: "The convention is to take the substrate and add **-ase**:",
      },
      {
        table: [
          ["Reaction", "Enzyme"],
          ["Maltose -> glucose + glucose", "**Maltase**"],
          ["Sucrose -> glucose + fructose", "**Invertase** (sucrase)"],
          ["Glucose -> ethanol + CO2", "**Zymase**"],
        ],
      },
      {
        equations: [
          "C12H22O11 + H2O ->[maltase] 2C6H12O6",
          "C12H22O11 + H2O ->[invertase] C6H12O6 + C6H12O6",
          "C6H12O6 ->[zymase] 2C2H5OH + 2CO2",
        ],
      },
      {
        text: "Others worth knowing: **urease** hydrolyses urea, **lactase** hydrolyses lactose, **pepsin** and **trypsin** hydrolyse proteins, and **amylase** hydrolyses starch. Invertase is the exception to the naming rule — it is named for what it does to the rotation rather than for its substrate.",
      },
    ],
    keyPoint:
      "Enzymes are globular proteins acting as biocatalysts, named by adding -ase to the substrate: maltase, invertase, zymase.",
  },
  {
    id: "g-10-3",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Enzymes",
    years: [],
    question:
      "(i) What is meant by the specificity of an enzyme ? Explain with the lock-and-key idea.\n(ii) What is an active site ?\n(iii) Write the two steps by which an enzyme catalyses a reaction.",
    answer: [
      {
        label: "(i) Specificity",
        text: "**An enzyme catalyses one reaction, or one narrow class of reaction, and no other.** Urease hydrolyses urea and nothing else; maltase acts on maltose but not on the closely related lactose.",
      },
      {
        text: "The **lock-and-key** idea explains why. The enzyme's active site has a definite shape and a definite arrangement of functional groups, and only a substrate whose shape and groups **match** it can bind — as only one key turns a given lock. A molecule that does not fit is simply not held long enough to react.",
      },
      {
        text: "The match is three-dimensional, which is why specificity can extend to **stereochemistry**: an enzyme will commonly act on one enantiomer of a substrate and ignore its mirror image.",
      },
      {
        label: "(ii) The active site",
        text: "**The active site is a cavity on the enzyme's surface, lined with functional groups positioned to bind the substrate and weaken the bond that is to break.** It is a small part of a large molecule — most of the protein exists to hold that cavity in the right shape.",
      },
      {
        text: "Because the shape is what matters, anything that **unfolds the protein destroys the activity**. Heating above the optimum, or a large change in pH, denatures the enzyme and the catalysis stops even though the chemical composition is unchanged.",
      },
      {
        label: "(iii) The two steps",
        text: "**Step 1 — binding.** The substrate binds to the active site, giving an **enzyme–substrate complex**:",
      },
      { equation: "E + S <=> E–S" },
      {
        text: "**Step 2 — reaction and release.** The complex breaks down to the product and the free enzyme, which is then available again:",
      },
      { equation: "E–S -> E + P" },
      {
        text: "The enzyme is **regenerated** unchanged in the second step, which is what makes it a catalyst rather than a reactant — a few molecules can turn over a great deal of substrate.",
      },
    ],
    keyPoint:
      "Specificity comes from shape matching at the active site; the enzyme binds the substrate as E–S, then releases the product and is regenerated.",
  },
  {
    id: "g-10-4",
    chapter: 10,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Enzymes",
    years: [],
    question:
      "(i) How is enzyme activity affected by (1) temperature and (2) pH ?\n(ii) Why does an enzyme lose its activity on heating, even though its composition is unchanged ?\n(iii) What is an enzyme inhibitor ?",
    answer: [
      {
        label: "(i)(1) Temperature",
        text: "Activity **rises to a maximum at an optimum temperature and then falls sharply**. For most human enzymes the optimum is about **310 K (37 °C)**.",
      },
      {
        text: "Two opposing effects produce that peak. Below the optimum, raising the temperature simply speeds the reaction as it would any reaction. Above it, the protein begins to **unfold**, and the loss of active sites outweighs the gain in rate.",
      },
      {
        label: "(i)(2) pH",
        text: "Activity again shows a **maximum at an optimum pH**, and falls off on either side. Most enzymes work best near **pH 7**, but the optimum matches where the enzyme has to operate:",
      },
      {
        table: [
          ["Enzyme", "Where it works", "Optimum pH"],
          ["Pepsin", "Stomach", "≈ 2 — strongly acidic"],
          ["Salivary amylase", "Mouth", "≈ 6.8"],
          ["Trypsin", "Small intestine", "≈ 8 — slightly alkaline"],
        ],
      },
      {
        text: "pH matters because the acidic and basic side-chains at the active site must carry the **right charges** to bind the substrate, and those charges change as the pH changes.",
      },
      {
        label: "(ii) Why heating destroys activity",
        text: "Because heating **denatures** the protein. The hydrogen bonds, disulphide bridges and hydrophobic contacts that hold the chain in its folded shape are broken, so the globular protein uncoils into a random shape and the **active site is destroyed**.",
      },
      {
        text: "The **primary structure survives** — no peptide bond is broken and the amino acid sequence is unchanged — which is exactly why composition alone cannot account for the loss. Enzyme activity depends on the **secondary and tertiary structure**, and it is those that heat undoes. The change is usually irreversible, which is why a boiled egg does not un-boil.",
      },
      {
        label: "(iii) Enzyme inhibitors",
        text: "**An inhibitor is a substance that blocks an enzyme's action.** A competitive inhibitor resembles the substrate closely enough to occupy the **active site** without reacting, so the real substrate is shut out.",
      },
      {
        text: "This is how many drugs work, and it is the reason specificity matters medically — the **sulpha drugs** inhibit a bacterial enzyme by mimicking its substrate, and the bacterium cannot make folic acid.",
      },
    ],
    keyPoint:
      "Activity peaks at an optimum temperature and pH; heat denatures the tertiary structure and destroys the active site while leaving the sequence intact.",
  },
  {
    id: "g-10-5",
    chapter: 10,
    type: "assertion-reason",
    marks: 1,
    difficulty: "medium",
    topic: "Enzymes",
    years: [],
    question:
      "**Assertion (A) :** An enzyme loses its catalytic activity when heated strongly.\n**Reason (R) :** Strong heating breaks the peptide bonds of the enzyme and changes its amino acid sequence.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
    answer: [
      { text: "**(c)** — the assertion is true, the reason is false." },
      {
        label: "(A) is true",
        text: "Strong heating does destroy catalytic activity. An enzyme is a **globular protein** whose activity depends on the precise shape of its active site, and heat unfolds it.",
      },
      {
        label: "(R) is false",
        text: "Denaturation does **not** break peptide bonds and does **not** change the amino acid sequence. What breaks are the weaker interactions — **hydrogen bonds, disulphide bridges and hydrophobic contacts** — that hold the folded shape:",
      },
      {
        table: [
          ["Level of structure", "What it is", "Survives denaturation ?"],
          ["Primary", "The amino acid sequence, held by peptide bonds", "**Yes** — unchanged"],
          ["Secondary", "α-helix and β-pleated sheet, held by H-bonds", "No — lost"],
          ["Tertiary", "The overall folded globular shape", "No — lost"],
        ],
      },
      {
        text: "So the **primary structure is retained and the secondary and tertiary structures are destroyed**. The enzyme has the same composition and the same sequence, and no activity — which is the whole point of the question.",
      },
      {
        text: "Breaking peptide bonds would be **hydrolysis**, not denaturation, and that needs acid, alkali or a protease rather than heat alone. Coagulation of egg white and curdling of milk are the everyday examples of denaturation.",
      },
    ],
    keyPoint:
      "Denaturation destroys secondary and tertiary structure but leaves the primary sequence intact; breaking peptide bonds is hydrolysis, not denaturation.",
  },
  /* ---------------------------------------------------------------- */
  /* ch3 — long answers, where the bank had only two                  */
  /* ---------------------------------------------------------------- */
  {
    id: "g-3-3",
    chapter: 3,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Arrhenius equation and catalysis",
    years: [],
    question:
      "(a) Write the Arrhenius equation and explain each term.\n(b) Why does the rate of a reaction increase sharply with a small rise in temperature ?\n(c) The rate constant of a reaction doubles when the temperature is raised from 298 K to 308 K. Calculate the activation energy.\n[R = 8·314 J K^−1 mol^−1, log 2 = 0·3010]\n(d) How does a catalyst increase the rate of a reaction ? Does it change ΔH of the reaction ?",
    answer: [
      { label: "(a) The Arrhenius equation", text: "" },
      { equation: "$k = A\\,e^{-E_a/RT}$" },
      {
        table: [
          ["Term", "Meaning"],
          ["k", "Rate constant"],
          ["A", "Frequency or pre-exponential factor — the collision frequency with correct orientation"],
          ["E_a", "Activation energy — the minimum energy colliding molecules must have to react"],
          ["R", "Gas constant, 8·314 J K^−1 mol^−1"],
          ["T", "Absolute temperature"],
        ],
      },
      {
        text: "The factor $e^{-E_a/RT}$ is the fraction of collisions in which the molecules carry at least Ea. Taking logarithms gives the straight-line form used to find Ea from experiment:",
      },
      { equation: "$\\ln k = \\ln A - \\dfrac{E_a}{RT}$" },
      {
        text: "A plot of **ln k against 1/T** is therefore linear with slope −Ea/R.",
      },
      {
        label: "(b) Why a small temperature rise has a large effect",
        text: "Because temperature does not raise every molecule's energy a little — it **sharply increases the fraction of molecules whose energy exceeds Ea**. The observed ratio of the rate constants ten degrees apart is the **temperature coefficient**, and for most reactions near room temperature it comes out at about **2 to 3** — which is what part (c) works out.",
      },
      {
        text: "On a Maxwell–Boltzmann distribution, the molecules that can react are those in the **high-energy tail** beyond Ea. That tail is thin, so a small shift of the whole curve to the right roughly **doubles the area** under it. Near room temperature a rise of 10 K commonly doubles the rate, even though the average kinetic energy rises by only about 3 %.",
      },
      {
        text: "This is why the effect is on the **exponential** term and not on the collision frequency, which increases only as √T.",
      },
      { label: "(c) The activation energy", text: "Use the two-temperature form, with k2 = 2k1:" },
      {
        equation:
          "$\\log\\dfrac{k_2}{k_1} = \\dfrac{E_a}{2.303\\,R}\\left(\\dfrac{T_2-T_1}{T_1T_2}\\right)$",
      },
      {
        equation:
          "$0.3010 = \\dfrac{E_a}{2.303 \\times 8.314}\\left(\\dfrac{308-298}{298 \\times 308}\\right)$",
      },
      {
        equation:
          "$E_a = \\dfrac{0.3010 \\times 2.303 \\times 8.314 \\times 298 \\times 308}{10}$",
      },
      { equation: "$E_a = 5.29 \\times 10^{4}\\ \\text{J mol}^{-1} = 52.9\\ \\text{kJ mol}^{-1}$" },
      {
        text: "Put the larger temperature as T₂ so the bracket stays positive, and convert to kJ at the end — an Ea in the tens of kJ mol⁻¹ is the expected size.",
      },
      {
        label: "(d) How a catalyst works",
        text: "A catalyst provides an **alternative path with a lower activation energy**. It does not push molecules over the old barrier; it offers a smaller one, usually by forming an intermediate with a reactant.",
      },
      {
        text: "**No — it does not change ΔH.** A catalyst lowers the peak of the energy profile but leaves the energies of the reactants and the products exactly where they were, and ΔH is the difference between those two:",
      },
      {
        table: [
          ["Quantity", "Effect of a catalyst"],
          ["Activation energy Ea", "**Lowered**"],
          ["Rate constant k", "**Increased**"],
          ["ΔH of the reaction", "Unchanged"],
          ["ΔG and the equilibrium constant K", "Unchanged"],
          ["Position of equilibrium", "Unchanged"],
        ],
      },
      {
        text: "Because the barrier is lowered for the reverse reaction by exactly the same amount, a catalyst **speeds both directions equally** and so cannot shift the equilibrium — it only brings the system to equilibrium sooner.",
      },
    ],
    keyPoint:
      "In the Arrhenius equation temperature works on the exponential term by filling the high-energy tail, and a catalyst lowers Ea without touching ΔH or K.",
  },
  /* ---------------------------------------------------------------- */
  /* ch5 — long answers, where the bank had only three                */
  /* ---------------------------------------------------------------- */
  {
    id: "g-5-1",
    chapter: 5,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Valence bond theory",
    years: [],
    question:
      "Using valence bond theory, for each of the complexes [Cr(NH3)6]^3+, [Ni(CN)4]^2− and [NiCl4]^2− state :\n(a) the oxidation state of the metal and its d configuration,\n(b) the hybridisation and shape,\n(c) the number of unpaired electrons and the spin-only magnetic moment,\n(d) whether the complex is an inner or outer orbital complex.\nExplain why the two nickel complexes differ.\n[Atomic numbers : Cr = 24, Ni = 28]",
    answer: [
      {
        table: [
          ["", "[Cr(NH3)6]^3+", "[Ni(CN)4]^2−", "[NiCl4]^2−"],
          ["Oxidation state", "+3", "+2", "+2"],
          ["d configuration", "d^3", "d^8", "d^8"],
          ["Ligand field", "Strong", "Strong", "Weak"],
          ["Hybridisation", "d^2sp^3", "dsp^2", "sp^3"],
          ["Shape", "Octahedral", "Square planar", "Tetrahedral"],
          ["Unpaired electrons", "3", "0", "2"],
          ["μ / BM", "3.87", "0", "2.83"],
          ["Magnetism", "Paramagnetic", "Diamagnetic", "Paramagnetic"],
          ["Orbital type", "Inner", "Inner", "Outer"],
        ],
      },
      {
        label: "[Cr(NH3)6]^3+",
        text: "Chromium is [Ar] 3d^5 4s^1, so Cr^3+ is **3d^3**. Three electrons in five d orbitals leaves two 3d orbitals empty **whatever the ligand does** — no pairing is needed. Those two, with the 4s and three 4p, give **d^2sp^3**: octahedral, inner orbital, and three unpaired electrons remain.",
      },
      { equation: "$\\mu = \\sqrt{3(3+2)} = \\sqrt{15} = 3.87\\ \\text{BM}$" },
      {
        text: "This is why **every** octahedral Cr(III) complex is d^2sp^3 and paramagnetic with μ ≈ 3.9 BM — the ligand cannot change the answer.",
      },
      {
        label: "[Ni(CN)4]^2−",
        text: "Ni^2+ is **3d^8**. Cyanide is a **strong field** ligand, so it forces the two electrons of the eighth pair together, emptying one 3d orbital. That orbital with the 4s and two 4p gives **dsp^2** — square planar, diamagnetic, μ = 0.",
      },
      {
        label: "[NiCl4]^2−",
        text: "Ni^2+ is again **3d^8**, but chloride is a **weak field** ligand and cannot force pairing. No 3d orbital is freed, so the metal must use the 4s and all three 4p: **sp^3** — tetrahedral, with two unpaired electrons left.",
      },
      { equation: "$\\mu = \\sqrt{2(2+2)} = \\sqrt{8} = 2.83\\ \\text{BM}$" },
      {
        label: "Why the two nickel complexes differ",
        text: "The metal, its oxidation state and its d configuration are **identical** in both — the only difference is the **field strength of the ligand**, and that decides everything downstream:",
      },
      {
        points: [
          "**CN^−** is high in the spectrochemical series. The splitting it produces exceeds the pairing energy, so pairing happens, a 3d orbital is vacated, and dsp^2 becomes possible.",
          "**Cl^−** is low in the series. Its splitting is smaller than the pairing energy, so the electrons stay spread out, no inner orbital is available, and only sp^3 is left.",
        ],
      },
      {
        text: "The two are told apart **experimentally by magnetic measurement**: the cyanide complex is diamagnetic and the chloride paramagnetic, which is the evidence for the shapes rather than an assumption behind them.",
      },
      {
        text: "Note also that square planar and tetrahedral both have coordination number 4 — the number of ligands does **not** fix the geometry, the hybridisation does.",
      },
    ],
    keyPoint:
      "Field strength decides pairing, pairing decides whether an inner d orbital is free, and that decides hybridisation, shape and magnetism.",
  },
  /* ---------------------------------------------------------------- */
  /* ch3 — zero order at length, which the bank had only in MCQs      */
  /* ---------------------------------------------------------------- */
  {
    id: "g-3-4",
    chapter: 3,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Zero order kinetics",
    years: [],
    question:
      "(a) Derive the integrated rate equation for a zero order reaction.\n(b) Derive an expression for its half-life and state how it differs from that of a first order reaction.\n(c) Sketch and describe the graph of [R] against t for a zero order reaction, and state how k is obtained from it.\n(d) Give two examples of zero order reactions with equations, and explain why they are zero order.\n(e) A zero order reaction has k = 2·0 × 10^−2 mol L^−1 s^−1 and [R]0 = 0·50 mol L^−1. How long will it take for the reaction to go to completion ?",
    answer: [
      { label: "(a) Deriving the integrated equation", text: "For a zero order reaction R -> P the rate does not depend on the concentration at all:" },
      { equation: "$\\text{Rate} = -\\dfrac{d[R]}{dt} = k[R]^0 = k$" },
      { text: "Rearrange and integrate:" },
      { equation: "$-d[R] = k\\,dt \;\\Rightarrow\; -\\int d[R] = k\\int dt$" },
      { equation: "$-[R] = kt + C$" },
      { text: "At t = 0 the concentration is [R]₀, so C = −[R]₀. Substituting and rearranging:" },
      { equation: "$[R] = [R]_0 - kt \;\\Rightarrow\; k = \\dfrac{[R]_0 - [R]}{t}$" },
      { label: "(b) The half-life", text: "At the half-life, [R] = [R]₀/2:" },
      { equation: "$k = \\dfrac{[R]_0 - [R]_0/2}{t_{1/2}} = \\dfrac{[R]_0}{2\\,t_{1/2}} \;\\Rightarrow\; t_{1/2} = \\dfrac{[R]_0}{2k}$" },
      {
        text: "The contrast with first order is the point worth carrying:",
      },
      {
        table: [
          ["", "Zero order", "First order"],
          ["Integrated equation", "[R] = [R]₀ − kt", "k = (2.303/t) log([R]₀/[R])"],
          ["Half-life", "t½ = [R]₀ / 2k", "t½ = 0.693 / k"],
          ["Depends on [R]₀ ?", "**Yes** — proportional to it", "**No** — [R]₀ cancels"],
          ["Units of k", "mol L^−1 s^−1", "s^−1"],
          ["Goes to completion ?", "**Yes**, in finite time", "No — approaches zero asymptotically"],
        ],
      },
      {
        text: "So doubling the starting amount **doubles** the half-life of a zero order reaction but leaves a first order half-life untouched.",
      },
      { label: "(c) The graph", text: "[R] = [R]₀ − kt is already in straight-line form, so a plot of **[R] against t is a straight line**:" },
      {
        points: [
          "**Intercept** on the concentration axis = [R]₀.",
          "**Slope** = −k, so k = −slope; the line falls steadily rather than curving.",
          "It meets the time axis at t = [R]₀/k, the moment the reactant runs out.",
        ],
      },
      {
        text: "Compare the first order case, where **[R] against t is an exponential decay** and it is log[R] against t that gives the straight line. A straight [R]-versus-t plot is therefore the test for zero order.",
      },
      { label: "(d) Two examples", text: "" },
      { equation: "2NH3(g) ->[1130 K][Pt catalyst] N2(g) + 3H2(g)" },
      { equation: "2HI(g) ->[Au surface] H2(g) + I2(g)" },
      {
        text: "Both are **heterogeneously catalysed reactions on a metal surface**, and that is the reason they are zero order. At high pressure the surface is **completely covered** with adsorbed gas, so adding more gas cannot increase the amount that is adsorbed and ready to react. The rate is then fixed by the surface area rather than by the concentration.",
      },
      {
        text: "**Photochemical** reactions such as the combination of hydrogen and chlorine over water are zero order for the analogous reason: the rate is set by the **intensity of light absorbed**, not by how much reactant is present. Zero order behaviour is therefore always a sign that something other than concentration is the bottleneck.",
      },
      { label: "(e) Time for completion", text: "The reaction is complete when [R] = 0:" },
      { equation: "$[R] = [R]_0 - kt \;\\Rightarrow\; 0 = 0.50 - (2.0 \\times 10^{-2})t$" },
      { equation: "$t = \\dfrac{0.50}{2.0 \\times 10^{-2}} = 25\\ \\text{s}$" },
      {
        text: "A first order reaction could never be answered this way — it never truly finishes, which is why such questions always ask for 90 % or 99 % completion instead.",
      },
    ],
    keyPoint:
      "[R] = [R]₀ − kt gives a straight line of slope −k and t½ = [R]₀/2k; surface-catalysed and photochemical reactions are zero order because something other than concentration limits them.",
  },
  /* ---------------------------------------------------------------- */
  /* ch5 — magnetism and colour compared, at length                   */
  /* ---------------------------------------------------------------- */
  {
    id: "g-5-4",
    chapter: 5,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Colour and magnetic properties",
    years: [],
    question:
      "(a) [Fe(H2O)6]^2+ is paramagnetic with four unpaired electrons while [Fe(CN)6]^4− is diamagnetic. Write the t2g and eg configuration of each and calculate the spin-only magnetic moment. [Fe = 26]\n(b) Arrange [CoF6]^3−, [Co(NH3)6]^3+ and [Co(CN)6]^3− in increasing order of Δo and state which are low spin. [Co = 27]\n(c) Why is [Ti(H2O)6]^3+ violet while [Sc(H2O)6]^3+ is colourless ? [Ti = 22, Sc = 21]\n(d) Why is anhydrous copper(II) sulphate white while the pentahydrate is blue ?",
    answer: [
      { label: "(a) The two iron(II) complexes", text: "Iron is [Ar] 3d^6 4s^2, so Fe^2+ is **3d^6** in both. Only the ligand differs, and that is enough to change everything:" },
      {
        table: [
          ["Complex", "Ligand field", "Configuration", "Unpaired e^−", "μ / BM", "Magnetism"],
          ["[Fe(H2O)6]^2+", "Weak", "t2g^4 eg^2", "4", "4.90", "Paramagnetic"],
          ["[Fe(CN)6]^4−", "Strong", "t2g^6 eg^0", "0", "0", "Diamagnetic"],
        ],
      },
      { equation: "$\\mu = \\sqrt{n(n+2)}$" },
      {
        equations: [
          "$\\mu = \\sqrt{4(4+2)} = \\sqrt{24} = 4.90\\ \\text{BM}$   (water)",
          "$\\mu = \\sqrt{0(0+2)} = 0\\ \\text{BM}$   (cyanide)",
        ],
      },
      {
        text: "**Water is a weak field ligand**, so Δo is smaller than the pairing energy P and the fifth and sixth electrons go up into eg rather than pair — leaving four unpaired. **Cyanide is a strong field ligand**, so Δo exceeds P and all six electrons pair into the three t2g orbitals, leaving none.",
      },
      { label: "(b) Increasing order of Δo", text: "**[CoF6]^3− < [Co(NH3)6]^3+ < [Co(CN)6]^3−**, following the spectrochemical series F^− < NH3 < CN^−." },
      {
        table: [
          ["Complex", "Δo", "d^6 filling", "Unpaired e^−", "Spin state"],
          ["[CoF6]^3−", "Smallest", "t2g^4 eg^2", "4", "**High spin**"],
          ["[Co(NH3)6]^3+", "Larger", "t2g^6 eg^0", "0", "**Low spin**"],
          ["[Co(CN)6]^3−", "Largest", "t2g^6 eg^0", "0", "**Low spin**"],
        ],
      },
      {
        text: "The metal and its oxidation state are identical in all three — Co^3+, d^6 — so the ligand alone decides. **Two are low spin**: the ammine and the cyanide. Only fluoride is too weak a field to force pairing.",
      },
      { label: "(c) Violet against colourless", text: "Because colour here comes from a **d–d transition**, which needs both an electron to promote and a vacancy to receive it:" },
      {
        table: [
          ["Ion", "Configuration", "Electron available ?", "Colour"],
          ["Ti^3+", "3d^1", "Yes — t2g^1", "**Violet**"],
          ["Sc^3+", "3d^0", "No", "**Colourless**"],
        ],
      },
      {
        text: "In [Ti(H2O)6]^3+ the single d electron absorbs a photon and jumps **t2g -> eg**. The gap matches yellow-green light, so that is absorbed and the **complementary** colour, violet, is what we see — which is why the observed colour is not the absorbed one.",
      },
      {
        text: "**Sc^3+ has no d electrons at all**, so no transition is possible, nothing in the visible range is absorbed, and the complex is colourless. Zn^2+ (d^10) is colourless for the opposite reason — full, so no vacancy.",
      },
      { label: "(d) Anhydrous against hydrated copper sulphate", text: "Because the **water molecules are the ligands that split the d orbitals**. Remove them and there is nothing to split." },
      {
        text: "In **CuSO4·5H2O** the Cu^2+ (3d^9) is surrounded by water, whose field splits the d orbitals by an amount matching red-orange light. That is absorbed and the complementary **blue** transmitted.",
      },
      { equation: "CuSO4(s, white) + 5H2O -> CuSO4·5H2O (blue)" },
      {
        text: "In **anhydrous CuSO4** there are no ligands to generate a crystal field, so the d orbitals stay degenerate, no d–d transition is possible, and the solid is **white**. Adding water restores the ligand field and the blue with it — which is why anhydrous copper sulphate is used as a test for water.",
      },
      {
        text: "The general lesson: colour in these compounds is a property of the **complex**, not of the metal ion alone. The same Cu^2+ is white with no ligands, blue with water and deep blue with ammonia.",
      },
    ],
    keyPoint:
      "The ligand alone sets Δo and so the spin state and the colour; a d–d transition needs an electron, a vacancy and a ligand field to split the orbitals.",
  },
  /* ---------------------------------------------------------------- */
  /* ch5 — nomenclature and isomerism applied, at length              */
  /* ---------------------------------------------------------------- */
  {
    id: "g-5-5",
    chapter: 5,
    type: "long",
    marks: 5,
    difficulty: "medium",
    topic: "Nomenclature and isomerism",
    years: [],
    question:
      "(a) Write the IUPAC names of : (i) [Cr(NH3)4Cl2]Cl  (ii) K3[Fe(CN)6]  (iii) [Co(NH3)5(NO2)]Cl2\n(b) Write the formula of potassium trioxalatoaluminate(III) and state the coordination number of aluminium.\n(c) Name the type of isomerism in each pair and describe the isomers :\n(i) [Co(NH3)5(NO2)]Cl2 and [Co(NH3)5(ONO)]Cl2\n(ii) [Pt(NH3)2Cl2]\n(d) How many moles of AgCl are precipitated when excess AgNO3 is added to one mole each of CoCl3·6NH3, CoCl3·5NH3 and CoCl3·4NH3 ? Write the structural formula of each.",
    answer: [
      { label: "(a) IUPAC names", text: "" },
      {
        table: [
          ["Complex", "Name"],
          ["[Cr(NH3)4Cl2]Cl", "Tetraamminedichloridochromium(III) chloride"],
          ["K3[Fe(CN)6]", "Potassium hexacyanidoferrate(III)"],
          ["[Co(NH3)5(NO2)]Cl2", "Pentaamminenitrito-κN-cobalt(III) chloride"],
        ],
      },
      {
        text: "Three rules do the work: ligands are named **alphabetically** before the metal; an **anionic** complex takes the –ate suffix, so iron becomes **ferrate**; and the oxidation state follows in Roman numerals. For the third, x + 5(0) + (−1) = +2 gives Co(III), and **κN** records that the nitrite binds through nitrogen.",
      },
      { label: "(b) Formula and coordination number", text: "**K3[Al(C2O4)3]**, with a coordination number of **6**." },
      {
        text: "Oxalate carries −2, so three give −6; with Al at +3 the complex ion is [Al(C2O4)3]^3− and three potassiums balance it. The coordination number is 6 rather than 3 because oxalate is **bidentate** — each one occupies two sites. Counting ligands instead of donor atoms is the usual slip here.",
      },
      { label: "(c)(i) Linkage isomerism", text: "Shown when an **ambidentate** ligand can bind through either of two different donor atoms:" },
      {
        table: [
          ["Isomer", "Binds through", "Name"],
          ["[Co(NH3)5(NO2)]^2+", "Nitrogen", "Nitrito-κN, the nitro form"],
          ["[Co(NH3)5(ONO)]^2+", "Oxygen", "Nitrito-κO, the nitrito form"],
        ],
      },
      {
        text: "These are **different compounds** with different colours and different infrared spectra. SCN^− behaves the same way, binding through sulphur or nitrogen.",
      },
      { label: "(c)(ii) Geometrical isomerism", text: "[Pt(NH3)2Cl2] is square planar with two pairs of identical ligands, so it shows **cis–trans isomerism**:" },
      {
        points: [
          "**cis** — the two chlorides on **adjacent** corners, 90° apart. This is **cisplatin**, used in chemotherapy.",
          "**trans** — the two chlorides on **opposite** corners, 180° apart, and medicinally inactive.",
        ],
      },
      {
        text: "Neither is optically active, because a square planar complex is flat and so has a plane of symmetry. That one isomer is a drug and the other is not is the clearest evidence that geometrical isomers are genuinely different substances.",
      },
      { label: "(d) The silver nitrate test", text: "Only chloride that is **free in solution** is precipitated, so counting AgCl reveals how many chlorides lie **outside** the coordination sphere:" },
      {
        table: [
          ["Compound", "Structural formula", "mol AgCl", "Ions in solution"],
          ["CoCl3·6NH3", "[Co(NH3)6]Cl3", "**3**", "4"],
          ["CoCl3·5NH3", "[Co(NH3)5Cl]Cl2", "**2**", "3"],
          ["CoCl3·4NH3", "[Co(NH3)4Cl2]Cl", "**1**", "2"],
        ],
      },
      {
        equations: [
          "[Co(NH3)6]Cl3 -> [Co(NH3)6]^3+ + 3Cl^−",
          "[Co(NH3)5Cl]Cl2 -> [Co(NH3)5Cl]^2+ + 2Cl^−",
          "[Co(NH3)4Cl2]Cl -> [Co(NH3)4Cl2]^+ + Cl^−",
        ],
      },
      {
        text: "As ammonia is replaced by chloride **inside** the sphere, the count of free chloride falls — but the **coordination number stays 6 throughout**. That is the whole force of the experiment: it separates the chloride that is bonded to cobalt from the chloride that is merely balancing charge.",
      },
      {
        text: "**Conductivity measurements agree**, falling steadily as the number of ions drops from four to two, and CoCl3·3NH3 completes the series — [Co(NH3)3Cl3] gives **no** precipitate and does not conduct, because it is a neutral molecule with nothing outside the sphere.",
      },
    ],
    keyPoint:
      "Ligands alphabetically and –ate for anionic complexes; ambidentate gives linkage isomers, square planar gives cis–trans, and AgCl counting separates bonded from ionisable chloride.",
  },
];
