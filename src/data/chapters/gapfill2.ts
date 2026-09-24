import type { Question } from "@/types";

/**
 * A second round of gap-fill, from a finer audit than the first.
 *
 * The first audit checked the bank against the `topics[]` list in
 * src/data/chapters.ts — which is circular, because that list lives in the
 * same repo, so anything it omitted stayed invisible. It was also too coarse:
 * "Reactions of alcohols" counted as one item though it covers eight distinct
 * reactions.
 *
 * scratchpad/deep.mts re-runs the check against an inventory itemised from the
 * NCERT chapter contents instead, 256 concepts rather than 67. Twelve came
 * back absent; four of those were false alarms from over-tight keywords, and
 * the eight real ones are covered here.
 *
 * Authored rather than transcribed, so `years` is empty and no year badge
 * shows.
 */
export const GAPFILL2: Question[] = [
  /* ---------------------------------------------------------------- */
  /* ch1 — the opening two sections of the chapter                    */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-1-1",
    chapter: 1,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Types of solutions",
    years: [],
    question:
      "(i) What is a solution ? Name the two components of a binary solution.\n(ii) Solutions are classified into nine types by the physical state of solute and solvent. Give one example each of a gas dissolved in a liquid, a gas dissolved in a solid, and a solid dissolved in a solid.",
    answer: [
      {
        label: "(i) What a solution is",
        text: "**A solution is a homogeneous mixture of two or more components whose composition and properties are uniform throughout.** A **binary** solution has two components:",
      },
      {
        points: [
          "The **solvent** — the component present in the larger amount, which determines the physical state of the solution.",
          "The **solute** — the component or components present in smaller amount.",
        ],
      },
      {
        label: "(ii) The nine types",
        text: "Both solute and solvent may be gas, liquid or solid, giving 3 × 3 = **nine** possible types:",
      },
      {
        table: [
          ["Solute", "Solvent", "Example"],
          ["Gas", "Gas", "Air — a mixture of oxygen and nitrogen"],
          ["Liquid", "Gas", "Water vapour in air (humidity)"],
          ["Solid", "Gas", "Camphor vapour in nitrogen; iodine vapour in air"],
          ["**Gas**", "**Liquid**", "**Oxygen dissolved in water; aerated drinks**"],
          ["Liquid", "Liquid", "Ethanol dissolved in water"],
          ["Solid", "Liquid", "Glucose or salt dissolved in water"],
          ["**Gas**", "**Solid**", "**Hydrogen adsorbed in palladium**"],
          ["Liquid", "Solid", "Amalgam of mercury with sodium"],
          ["**Solid**", "**Solid**", "**Brass, bronze and other alloys**"],
        ],
      },
      {
        text: "The three the question asks for are the rows in bold. The whole chapter then concentrates on **liquid solutions** — solid in liquid, liquid in liquid and gas in liquid — because those are the ones whose colligative properties matter.",
      },
      {
        text: "A solution is **homogeneous**, which is what distinguishes it from a suspension or a colloid: the particles are of molecular or ionic size, so no boundary between the components can be seen even under a microscope.",
      },
    ],
    keyPoint:
      "Nine types from three states each way; the solvent is the component in excess and sets the state of the solution.",
  },
  {
    id: "g2-1-2",
    chapter: 1,
    type: "numerical",
    marks: 3,
    difficulty: "medium",
    topic: "Concentration terms",
    years: [],
    question:
      "(a) Define (i) mass percentage and (ii) parts per million (ppm). When is ppm used in preference to percentage ?\n(b) A sample of drinking water was found to be severely contaminated with chloroform, CHCl3, at 15 ppm by mass. Calculate (i) the percentage by mass of chloroform and (ii) the molality of the solution.\n[Molar mass of CHCl3 = 119·5 g mol^−1]",
    answer: [
      {
        label: "(a)(i) Mass percentage",
        text: "**The mass of the component present in 100 g of the solution.**",
      },
      {
        equation:
          "$\\text{Mass \\%} = \\dfrac{\\text{mass of the component}}{\\text{total mass of the solution}} \\times 100$",
      },
      {
        label: "(a)(ii) Parts per million",
        text: "**The number of parts of the component per million parts of the solution.**",
      },
      {
        equation:
          "$\\text{ppm} = \\dfrac{\\text{mass of the component}}{\\text{total mass of the solution}} \\times 10^{6}$",
      },
      {
        text: "ppm is used when the solute is present in a **very small trace**, where a percentage would be an inconveniently small decimal. Pollutants in air and water, and impurities in a reagent, are quoted this way — 15 ppm reads more naturally than 0·0015 %.",
      },
      {
        text: "Note that mass percentage, ppm, mole fraction and molality are all **independent of temperature**, because they are ratios of masses or moles. **Molarity is not**, since it involves a volume that expands on heating.",
      },
      {
        label: "(b)(i) Percentage by mass",
        text: "15 ppm means 15 g of chloroform in 10⁶ g of solution:",
      },
      {
        equation:
          "$\\text{Mass \\%} = \\dfrac{15}{10^{6}} \\times 100 = 1.5 \\times 10^{-3}\\,\\%$",
      },
      {
        text: "So the chloroform is **0·0015 %** by mass — which is exactly why the figure is quoted in ppm instead.",
      },
      { label: "(b)(ii) Molality", text: "Molality is moles of solute per **kilogram of solvent**:" },
      { equation: "$\\text{Moles of CHCl}_3 = \\dfrac{15}{119.5} = 0.1255\\ \\text{mol}$" },
      {
        text: "The solvent mass is the solution mass less the solute: 10⁶ − 15 = 999 985 g. Since the solute is a trace, this is very nearly 10⁶ g = 1000 kg:",
      },
      { equation: "$m = \\dfrac{0.1255}{1000} = 1.255 \\times 10^{-4}\\ \\text{mol kg}^{-1}$" },
      {
        text: "Subtracting the 15 g changes the answer by about 0·0015 %, well inside the rounding — but the **definition** still requires the mass of solvent, not of solution, and that distinction matters for a concentrated solution.",
      },
    ],
    keyPoint:
      "ppm = (mass of component / mass of solution) × 10⁶, used for traces; molality uses the mass of solvent, and only molarity varies with temperature.",
  },
  /* ---------------------------------------------------------------- */
  /* ch3 — the activated complex                                      */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-3-1",
    chapter: 3,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Collision theory",
    years: [],
    question:
      "(i) What is meant by threshold energy and activation energy ? How are they related ?\n(ii) What is an activated complex ?\n(iii) Two colliding molecules may both possess more than the threshold energy and still not react. Why ?",
    answer: [
      {
        label: "(i) Threshold and activation energy",
        text: "**Threshold energy is the minimum total energy that colliding molecules must possess for the collision to lead to reaction.** **Activation energy is the extra energy the reactants must absorb, over and above their average energy, to reach that threshold.**",
      },
      { equation: "$E_a = E_{threshold} - E_{reactants}$" },
      {
        text: "So they measure the same barrier from different baselines — the threshold from zero, the activation energy from where the reactants already are. A reaction with a **small Ea** is fast, because a large fraction of molecules already have enough energy; a large Ea makes the reaction slow.",
      },
      {
        label: "(ii) The activated complex",
        text: "**The activated complex, or transition state, is the unstable arrangement of atoms formed momentarily at the top of the energy barrier**, in which old bonds are partly broken and new bonds partly formed.",
      },
      {
        text: "It sits at the **maximum** of the energy profile, so it cannot be isolated — it falls apart at once, either forward to products or back to reactants. It is not an intermediate: an intermediate sits in a **dip** in the profile and can sometimes be detected.",
      },
      {
        table: [
          ["", "Activated complex", "Intermediate"],
          ["Position on the profile", "At the **peak**", "In a **dip** between peaks"],
          ["Lifetime", "Fleeting", "Longer — sometimes isolable"],
          ["Bonds", "Partly formed and partly broken", "Fully formed"],
        ],
      },
      {
        label: "(iii) Why energetic collisions can still fail",
        text: "Because the molecules must also be **correctly oriented** when they collide. Energy alone is not enough — the reacting parts of the two molecules have to meet.",
      },
      {
        text: "Collision theory therefore counts only the collisions that are both energetic **and** properly aligned. The **steric or probability factor P** is the fraction that satisfy the orientation requirement:",
      },
      { equation: "$\\text{Rate} = P\\,Z_{AB}\\,e^{-E_a/RT}$" },
      {
        text: "Here **Z_AB** is the collision frequency and the exponential is the fraction with at least Ea. A collision that is energetic but badly oriented is an **ineffective collision**, and this is why calculated rates from collision frequency alone come out far too high for reactions between complex molecules.",
      },
    ],
    keyPoint:
      "Ea is the gap from the reactants up to the threshold; the activated complex sits at the peak, and a collision must be energetic AND correctly oriented.",
  },
  /* ---------------------------------------------------------------- */
  /* ch5 — double salts, and the importance of the compounds          */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-5-1",
    chapter: 5,
    type: "very-short",
    marks: 2,
    difficulty: "medium",
    topic: "Werner's theory and terminology",
    years: [],
    question:
      "Distinguish between a double salt and a coordination compound, with one example of each. Use the behaviour of Mohr's salt and potassium ferrocyanide in water to illustrate the difference.",
    answer: [
      {
        text: "**Both are addition compounds of two simple salts, and the difference is what happens when they dissolve.**",
      },
      {
        table: [
          ["", "Double salt", "Coordination compound"],
          ["In the solid state", "Two salts in a definite ratio", "Two salts in a definite ratio"],
          ["On dissolving in water", "**Dissociates completely** into all its simple ions", "The complex ion **keeps its identity**"],
          ["Do the component ions retain their properties ?", "**Yes**", "**No** — they are lost"],
          ["Example", "Mohr's salt, FeSO4·(NH4)2SO4·6H2O", "Potassium ferrocyanide, K4[Fe(CN)6]"],
        ],
      },
      {
        label: "Mohr's salt — a double salt",
        text: "In water it breaks up completely, releasing free Fe^2+:",
      },
      { equation: "FeSO4·(NH4)2SO4·6H2O -> Fe^2+ + 2NH4^+ + 2SO4^2− + 6H2O" },
      {
        text: "Because the Fe^2+ is free, the solution gives **all the ordinary tests for iron(II)** — it turns NaOH solution to a dirty green precipitate of Fe(OH)2.",
      },
      {
        label: "Potassium ferrocyanide — a coordination compound",
        text: "Only the potassium ions come off. The hexacyanoferrate(II) ion survives intact:",
      },
      { equation: "K4[Fe(CN)6] -> 4K^+ + [Fe(CN)6]^4−" },
      {
        text: "There is **no free Fe^2+ in solution**, so the usual iron(II) tests fail — NaOH gives no precipitate of Fe(OH)2. The iron is locked inside the complex ion and has lost its individual identity, which is precisely Werner's point about the **secondary valency** being non-ionisable.",
      },
      {
        text: "Other double salts worth knowing are **potash alum**, K2SO4·Al2(SO4)3·24H2O, and **carnallite**, KCl·MgCl2·6H2O.",
      },
    ],
    keyPoint:
      "A double salt loses its identity in water and gives all its simple ions; a complex keeps the coordination sphere intact, so the metal's usual tests fail.",
  },
  {
    id: "g2-5-2",
    chapter: 5,
    type: "short",
    marks: 3,
    difficulty: "easy",
    topic: "Importance and applications",
    years: [],
    question:
      "Give the importance of coordination compounds in each of the following, naming the complex or the metal involved :\n(i) biological systems,\n(ii) analytical chemistry and water treatment,\n(iii) extraction of metals and electroplating,\n(iv) medicine.",
    answer: [
      { label: "(i) Biological systems", text: "" },
      {
        table: [
          ["Complex", "Central metal", "Role"],
          ["**Haemoglobin**", "Fe", "Carries oxygen in the blood"],
          ["**Chlorophyll**", "Mg", "Absorbs light in photosynthesis"],
          ["**Vitamin B12** (cyanocobalamin)", "Co", "Coenzyme; its deficiency causes pernicious anaemia"],
          ["Carboxypeptidase-A", "Zn", "An enzyme"],
        ],
      },
      {
        text: "Haemoglobin and chlorophyll make the point together: both are **porphyrin** complexes with almost the same ring, and it is the **metal at the centre** — iron against magnesium — that decides whether the molecule carries oxygen or harvests light.",
      },
      { label: "(ii) Analytical chemistry and water treatment", text: "" },
      {
        points: [
          "**EDTA** forms very stable chelates with Ca^2+ and Mg^2+, which is how the **hardness of water** is estimated by titration and how those ions are sequestered in softening.",
          "Metal ions are **detected and estimated** through complexes of characteristic colour — the blood-red Fe^3+ thiocyanate, the deep blue [Cu(NH3)4]^2+, and Ni^2+ with dimethylglyoxime.",
          "**EDTA** is also used in treating lead poisoning, because it chelates the lead and carries it out of the body.",
        ],
      },
      { label: "(iii) Extraction of metals and electroplating", text: "" },
      {
        text: "**Silver and gold** are extracted from their ores as **cyanide complexes** — the Mac Arthur–Forrest process — and then displaced with zinc:",
      },
      {
        equations: [
          "4Au + 8CN^− + 2H2O + O2 -> 4[Au(CN)2]^− + 4OH^−",
          "2[Au(CN)2]^− + Zn -> [Zn(CN)4]^2− + 2Au",
        ],
      },
      {
        text: "**Nickel and copper** are refined through the Mond process and electrolytic refining. In **electroplating**, a complex such as [Ag(CN)2]^− is used rather than a simple silver salt, because the complex releases Ag^+ slowly and gives a **smooth, even, adherent** deposit instead of a loose one.",
      },
      { label: "(iv) Medicine", text: "" },
      {
        points: [
          "**_(cis)_-Platin, cis-[Pt(NH3)2Cl2]** — used in chemotherapy to inhibit the growth of tumours. The **trans** isomer is inactive.",
          "**EDTA** in the treatment of lead poisoning, as above.",
          "**Gold complexes** in some treatments for arthritis.",
        ],
      },
      {
        text: "Coordination compounds also matter industrially as **catalysts** — Wilkinson's catalyst for hydrogenation, and the Ziegler–Natta system for polymerisation.",
      },
    ],
    keyPoint:
      "Haemoglobin (Fe), chlorophyll (Mg) and B12 (Co) biologically; EDTA analytically; cyanide complexes in extraction and plating; cisplatin medicinally.",
  },
  /* ---------------------------------------------------------------- */
  /* ch7 — preparations the bank had only for cumene                  */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-7-1",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Preparation of phenols",
    years: [],
    question:
      "Write the equations for the preparation of phenol from :\n(i) chlorobenzene,\n(ii) benzenesulphonic acid,\n(iii) benzenediazonium chloride.\nState one condition that each route requires.",
    answer: [
      {
        label: "(i) From chlorobenzene — the Dow process",
        text: "Chlorobenzene is heated with aqueous sodium hydroxide under **forcing conditions**, and the sodium phenoxide formed is then acidified:",
      },
      {
        equations: [
          "C6H5Cl + NaOH ->[623 K][300 atm] C6H5ONa + NaCl",
          "C6H5ONa + H^+ -> C6H5OH + Na^+",
        ],
      },
      {
        text: "**The condition is the severity: 623 K and 300 atm.** They are needed because the C–Cl bond of an aryl halide has **partial double bond character** from resonance and resists nucleophilic substitution — chloroethane would react with aqueous alkali on gentle warming.",
      },
      {
        label: "(ii) From benzenesulphonic acid",
        text: "The sulphonic acid is neutralised, then the sodium salt is **fused with solid sodium hydroxide**, and the phenoxide acidified:",
      },
      {
        equations: [
          "C6H6 + H2SO4 ->[Δ] C6H5SO3H",
          "C6H5SO3H + NaOH -> C6H5SO3Na + H2O",
          "C6H5SO3Na + NaOH ->[fuse, 570-620 K] C6H5ONa + Na2SO3",
          "C6H5ONa + H^+ -> C6H5OH",
        ],
      },
      {
        text: "**The condition is fusion with molten alkali at high temperature** — aqueous alkali will not do it, because the –SO3^− group is a poor leaving group.",
      },
      {
        label: "(iii) From benzenediazonium chloride",
        text: "The diazonium salt is simply **warmed with water**, and nitrogen is lost:",
      },
      {
        equations: [
          "C6H5NH2 + NaNO2 + 2HCl ->[273-278 K] C6H5N2^+Cl^− + NaCl + 2H2O",
          "C6H5N2^+Cl^− + H2O ->[warm, 283 K] C6H5OH + N2↑ + HCl",
        ],
      },
      {
        text: "**The condition is the temperature, and it cuts both ways**: the diazotisation must be kept at **273–278 K** because the salt decomposes above about 5 °C, and the hydrolysis then needs only gentle warming. This is the **mildest** of the three routes, which is why it is the laboratory method of choice.",
      },
      {
        text: "The fourth route, and the industrial one, is from **cumene** — oxidation to cumene hydroperoxide followed by acid cleavage, which gives acetone as a valuable co-product.",
      },
    ],
    keyPoint:
      "Chlorobenzene needs 623 K and 300 atm, the sulphonate needs fusion with solid alkali, and the diazonium salt needs only warm water — mildest of the three.",
  },
  {
    id: "g2-7-2",
    chapter: 7,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Preparation of alcohols",
    years: [],
    question:
      "(i) How are alcohols prepared by the reduction of (1) an aldehyde, (2) a ketone and (3) a carboxylic acid ? Name the reagent and the class of alcohol obtained in each case.\n(ii) Why is NaBH4 preferred to LiAlH4 when an ester in the molecule must be left untouched ?",
    answer: [
      {
        label: "(i)(1) From an aldehyde — a primary alcohol",
        text: "Sodium borohydride or lithium aluminium hydride adds hydrogen across the carbonyl:",
      },
      { equation: "CH3CHO ->[NaBH4 or LiAlH4] CH3CH2OH" },
      { label: "(i)(2) From a ketone — a secondary alcohol", text: "" },
      { equation: "CH3COCH3 ->[NaBH4 or LiAlH4] (CH3)2CH–OH" },
      {
        text: "**Catalytic hydrogenation** over nickel, platinum or palladium does the same job, and is the choice on an industrial scale — but it also reduces any C=C double bond in the molecule, whereas the hydride reagents leave it alone.",
      },
      { label: "(i)(3) From a carboxylic acid — a primary alcohol", text: "This needs the stronger reagent:" },
      { equation: "CH3COOH ->[LiAlH4 / ether] CH3CH2OH" },
      {
        text: "Or, better on scale, by converting the acid to its **ester** first and then reducing that — the acid itself is reduced only with difficulty:",
      },
      { equation: "CH3COOH ->[C2H5OH / H^+] CH3COOC2H5 ->[H2 / catalyst] CH3CH2OH + C2H5OH" },
      {
        table: [
          ["Starting material", "Reagent", "Alcohol obtained"],
          ["Aldehyde", "NaBH4, LiAlH4 or H2/Ni", "**Primary**"],
          ["Ketone", "NaBH4, LiAlH4 or H2/Ni", "**Secondary**"],
          ["Carboxylic acid", "**LiAlH4** (or via the ester)", "**Primary**"],
        ],
      },
      {
        label: "(ii) Why NaBH4 is the selective choice",
        text: "Because **NaBH4 is a much milder reducing agent than LiAlH4**. It reduces an aldehyde or ketone readily but is **too weak to touch a carboxylic acid or an ester**, so those groups survive.",
      },
      {
        table: [
          ["", "NaBH4", "LiAlH4"],
          ["Aldehydes and ketones", "Reduced", "Reduced"],
          ["Esters and carboxylic acids", "**Not reduced**", "Reduced"],
          ["Reaction with water", "Stable in water and alcohol", "Reacts violently — needs dry ether"],
        ],
      },
      {
        text: "So a molecule carrying both a ketone and an ester can be reduced at the ketone alone with NaBH4. LiAlH4 would attack both, and would also have to be used in **dry ether** because it reacts violently with water.",
      },
    ],
    keyPoint:
      "Aldehyde gives 1°, ketone gives 2°, acid needs LiAlH4; NaBH4 is mild enough to leave esters and acids alone.",
  },
  /* ---------------------------------------------------------------- */
  /* ch8 — Gattermann–Koch                                            */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-8-1",
    chapter: 8,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Preparation of aldehydes",
    years: [],
    question:
      "(i) Write the equation for the Gattermann–Koch reaction and name the reagents.\n(ii) Why can benzaldehyde not be prepared by an ordinary Friedel–Crafts acylation of benzene ?\n(iii) Name two other methods of preparing benzaldehyde and write one equation for each.",
    answer: [
      {
        label: "(i) The Gattermann–Koch reaction",
        text: "Benzene is treated with **carbon monoxide and hydrogen chloride** in the presence of **anhydrous aluminium chloride with cuprous chloride**, giving benzaldehyde:",
      },
      { equation: "C6H6 + CO + HCl ->[anhyd. AlCl3 / CuCl] C6H5CHO" },
      {
        text: "This is a **formylation** — a –CHO group is introduced directly onto the ring. The CO and HCl together behave as the source of the formyl electrophile, and the **CuCl** helps by absorbing the carbon monoxide.",
      },
      {
        label: "(ii) Why Friedel–Crafts cannot do it",
        text: "Because a Friedel–Crafts acylation needs an **acyl halide, RCOCl**, and the acyl halide that would be required here is **formyl chloride, HCOCl** — which is **too unstable to exist** at ordinary temperatures. It decomposes at once to carbon monoxide and hydrogen chloride:",
      },
      { equation: "HCOCl -> CO + HCl" },
      {
        text: "The Gattermann–Koch reaction is the elegant way round the problem: instead of trying to make formyl chloride and add it, it supplies **CO and HCl separately** and lets them generate the electrophile in situ. So the reaction is best understood as a Friedel–Crafts that works because the unstable reagent is never isolated.",
      },
      { label: "(iii) Two other routes to benzaldehyde", text: "" },
      {
        label: "Etard reaction",
        text: "Toluene is oxidised by chromyl chloride in carbon disulphide, and the chromium complex is hydrolysed:",
      },
      { equation: "C6H5CH3 + CrO2Cl2 ->[CS2] C6H5CH(OCrOHCl2)2 ->[H3O^+] C6H5CHO" },
      {
        label: "Rosenmund reduction",
        text: "Benzoyl chloride is hydrogenated over palladium poisoned with barium sulphate:",
      },
      { equation: "C6H5COCl + H2 ->[Pd / BaSO4][S or quinoline] C6H5CHO + HCl" },
      {
        text: "**Side-chain chlorination then hydrolysis** is a third: toluene with chlorine and light gives benzal chloride, C6H5CHCl2, which hydrolyses to the aldehyde. All of these are **controlled** oxidations or reductions — the difficulty with benzaldehyde is always stopping at the aldehyde rather than going on to benzoic acid or benzyl alcohol.",
      },
    ],
    keyPoint:
      "Gattermann–Koch formylates benzene with CO and HCl over AlCl3/CuCl, because formyl chloride is too unstable to use in an ordinary Friedel–Crafts.",
  },
  /* ---------------------------------------------------------------- */
  /* ch4 — dichromate preparation, which only permanganate had        */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-4-1",
    chapter: 4,
    type: "short",
    marks: 3,
    difficulty: "medium",
    topic: "Potassium dichromate",
    years: [],
    question:
      "(i) Describe the preparation of potassium dichromate from chromite ore, writing the equations.\n(ii) Why is potassium dichromate, and not sodium dichromate, obtained as the final crystalline product ?\n(iii) What happens when the pH of a potassium dichromate solution is raised ? Write the ionic equation.",
    answer: [
      {
        label: "(i) Preparation from chromite ore, FeCr2O4",
        text: "**Step 1 — fusion with alkali in air.** The ore is roasted with sodium carbonate in excess air, oxidising chromium(III) to chromate(VI):",
      },
      { equation: "4FeCr2O4 + 8Na2CO3 + 7O2 ->[fuse] 8Na2CrO4 + 2Fe2O3 + 8CO2" },
      {
        text: "The yellow sodium chromate is leached out with water, leaving the insoluble iron(III) oxide behind.",
      },
      {
        label: "Step 2 — acidify to the dichromate",
        text: "Acidifying the chromate solution converts it to the orange dichromate:",
      },
      { equation: "2Na2CrO4 + 2H^+ -> Na2Cr2O7 + 2Na^+ + H2O" },
      {
        label: "Step 3 — convert to the potassium salt",
        text: "Treating the sodium dichromate solution with potassium chloride gives potassium dichromate:",
      },
      { equation: "Na2Cr2O7 + 2KCl -> K2Cr2O7 + 2NaCl" },
      {
        text: "Orange crystals of K2Cr2O7 separate out on cooling.",
      },
      {
        label: "(ii) Why the potassium salt crystallises",
        text: "Because **potassium dichromate is much less soluble in water than sodium dichromate**, so it is the salt that comes out of solution first as the liquid is concentrated and cooled.",
      },
      {
        text: "There is a second practical reason: sodium dichromate is **deliquescent** — it absorbs moisture from the air — so it cannot be obtained as a dry, weighable solid. Potassium dichromate is not, which is why it is the one used as a **primary standard** in volumetric analysis.",
      },
      {
        label: "(iii) Raising the pH",
        text: "The orange solution turns **yellow**, because the dichromate is converted to chromate. The two exist in a pH-dependent equilibrium:",
      },
      { equation: "Cr2O7^2− + 2OH^− <=> 2CrO4^2− + H2O" },
      {
        text: "Written the other way, acidifying reverses it:",
      },
      { equation: "2CrO4^2− + 2H^+ <=> Cr2O7^2− + H2O" },
      {
        table: [
          ["Condition", "Species present", "Colour"],
          ["Acidic — low pH", "Dichromate, Cr2O7^2−", "**Orange**"],
          ["Alkaline — high pH", "Chromate, CrO4^2−", "**Yellow**"],
        ],
      },
      {
        text: "The chromium stays in the **+6 oxidation state** throughout — this is not a redox change, only a change of which oxoanion is favoured. Both ions are built from CrO4 tetrahedra; in the dichromate two of them share a corner oxygen.",
      },
    ],
    keyPoint:
      "Chromite is fused with alkali in air, acidified, then treated with KCl; K2Cr2O7 crystallises because it is the less soluble and non-deliquescent salt.",
  },
  /* ---------------------------------------------------------------- */
  /* ch10 — preparation of glucose                                    */
  /* ---------------------------------------------------------------- */
  {
    id: "g2-10-1",
    chapter: 10,
    type: "very-short",
    marks: 2,
    difficulty: "easy",
    topic: "Preparation of glucose",
    years: [],
    question:
      "How is glucose prepared (i) from sucrose and (ii) from starch ? Write the equations and state the conditions.",
    answer: [
      {
        label: "(i) From sucrose",
        text: "Boiling sucrose with **dilute hydrochloric or sulphuric acid** in alcoholic solution hydrolyses the glycosidic linkage, giving equal amounts of glucose and fructose:",
      },
      { equation: "C12H22O11 + H2O ->[dil. HCl] C6H12O6 + C6H12O6" },
      {
        text: "The glucose is the less soluble of the two in alcohol, so it **crystallises out** while the fructose stays in solution — which is how they are separated.",
      },
      {
        text: "The same hydrolysis happens under the enzyme **invertase**, and the product mixture is **invert sugar**: sucrose is dextrorotatory at +66·5°, but the mixture comes out laevorotatory at about −20°, because fructose rotates further in the opposite direction than glucose does.",
      },
      {
        label: "(ii) From starch — the commercial method",
        text: "Starch is hydrolysed by boiling with **dilute sulphuric acid at 393 K under 2–3 atmospheres** of pressure:",
      },
      { equation: "(C6H10O5)n + nH2O ->[dil. H2SO4][393 K, 2-3 atm] nC6H12O6" },
      {
        text: "This is the **industrial route**, because starch from maize or potato is cheap and abundant. The pressure and temperature are needed because a polysaccharide has very many glycosidic bonds to break.",
      },
      {
        table: [
          ["Source", "Reagent and conditions", "Products"],
          ["Sucrose", "dil. HCl or H2SO4, alcoholic solution", "Glucose **and** fructose"],
          ["Starch", "dil. H2SO4, 393 K, 2–3 atm", "Glucose **only**"],
        ],
      },
      {
        text: "Starch gives glucose alone because it is a polymer of glucose throughout, whereas sucrose is built from one glucose and one fructose — which is why the starch route needs no separation step and is the one used on scale.",
      },
    ],
    keyPoint:
      "Sucrose with dilute acid gives glucose plus fructose; starch with dilute H2SO4 at 393 K and 2–3 atm gives glucose alone, and is the commercial route.",
  },
];
