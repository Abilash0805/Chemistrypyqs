#!/usr/bin/env python3
"""Curated bank of high-yield CBSE Class 12 Chemistry questions with exam-ready answers.
Appends to src/data/questions.json with correct structure and chapter mapping.
"""
import json, re

# (chapter, marks, type, question, answer)
NEW = [
# ── CH 1: SOLUTIONS ──────────────────────────────────────────────────────────
(1,1,'short_answer',"Define the term 'molality' of a solution.",
 "Molality (m) is the number of moles of solute dissolved per kilogram of solvent. m = (moles of solute) / (mass of solvent in kg). Its unit is mol/kg. Unlike molarity, molality is independent of temperature because it involves mass, not volume."),
(1,2,'short_answer',"State Raoult's law for a solution of two volatile liquids. How is it modified for a solution containing a non-volatile solute?",
 "Raoult's law states that for a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction: pA = pA° xA and pB = pB° xB. For a non-volatile solute, the vapour pressure of the solution equals the vapour pressure of the solvent multiplied by its mole fraction: p = p° x(solvent), since the solute contributes no vapour pressure."),
(1,2,'numerical',"Calculate the mole fraction of ethanol (C2H5OH) in a solution containing 46 g of ethanol and 18 g of water.",
 "Moles of ethanol = 46/46 = 1 mol. Moles of water = 18/18 = 1 mol. Mole fraction of ethanol = 1/(1+1) = 0.5."),
(1,3,'long_answer',"What are azeotropes? Give one example each of minimum boiling and maximum boiling azeotropes.",
 "Azeotropes are binary liquid mixtures that boil at a constant temperature and have the same composition in both liquid and vapour phases, so they cannot be separated by fractional distillation. Minimum boiling azeotrope: ethanol-water (95% ethanol), formed by solutions showing large positive deviation from Raoult's law. Maximum boiling azeotrope: nitric acid-water (68% HNO3), formed by solutions showing large negative deviation from Raoult's law."),
(1,2,'short_answer',"Why is the vapour pressure of a solution of glucose in water lower than that of pure water?",
 "When a non-volatile solute like glucose is dissolved in water, some of the surface is occupied by solute molecules, reducing the number of solvent molecules escaping into the vapour phase. This lowers the escaping tendency of the solvent, so the vapour pressure of the solution becomes lower than that of pure water (relative lowering = mole fraction of solute)."),
(1,3,'long_answer',"State Henry's law. Mention two of its important applications.",
 "Henry's law states that the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid: p = KH x, where KH is Henry's constant and x is the mole fraction of the gas. Applications: (i) To increase the solubility of CO2 in soft drinks, the bottles are sealed under high pressure. (ii) Scuba divers' tanks use diluted air (with helium) to avoid 'bends' caused by high solubility of N2 in blood at high pressure."),
(1,2,'short_answer',"Define van't Hoff factor (i). What is its value for a strong electrolyte like NaCl in dilute solution?",
 "The van't Hoff factor (i) is the ratio of the observed colligative property to the calculated (normal) colligative property: i = (observed value)/(calculated value) = (total moles after dissociation/association)/(moles before). For NaCl, which dissociates completely into Na+ and Cl-, i = 2 in dilute solution."),
(1,3,'numerical',"18 g of glucose (molar mass 180 g/mol) is dissolved in 1 kg of water. Calculate the boiling point elevation. (Kb for water = 0.52 K kg/mol)",
 "Moles of glucose = 18/180 = 0.1 mol. Molality m = 0.1/1 = 0.1 mol/kg. Delta Tb = Kb x m = 0.52 x 0.1 = 0.052 K. So the boiling point is raised by 0.052 K (boiling point = 100.052 C)."),
(1,1,'short_answer',"What is meant by 'reverse osmosis'? State one application.",
 "Reverse osmosis is the flow of solvent from a solution to pure solvent through a semipermeable membrane when a pressure greater than the osmotic pressure is applied on the solution side. It is used for the desalination of sea water to obtain pure drinking water."),
(1,2,'short_answer',"Why do colligative properties depend only on the number of solute particles and not on their nature?",
 "Colligative properties (relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, osmotic pressure) arise from the reduction in the escaping tendency and chemical potential of the solvent caused by the presence of solute particles. This depends only on how many solute particles are present, not on their chemical identity, so equimolar amounts of different non-electrolytes give the same value."),

# ── CH 2: ELECTROCHEMISTRY ───────────────────────────────────────────────────
(2,2,'short_answer',"State Kohlrausch's law of independent migration of ions. Give one application.",
 "Kohlrausch's law states that the limiting molar conductivity of an electrolyte is the sum of the individual contributions of the cation and anion: Lambda°m = v+ lambda°+ + v- lambda°-. Application: It is used to calculate the limiting molar conductivity of weak electrolytes (e.g. acetic acid) which cannot be determined directly by extrapolation."),
(2,3,'long_answer',"Define molar conductivity. How does it vary with concentration for strong and weak electrolytes?",
 "Molar conductivity (Lambda m) is the conductance of all the ions produced by one mole of an electrolyte dissolved in a solution, given by Lambda m = (kappa x 1000)/C. For strong electrolytes, Lambda m increases slightly with dilution and the increase is small (due to reduced interionic attraction), reaching a limiting value Lambda°m by extrapolation. For weak electrolytes, Lambda m increases sharply on dilution because the degree of dissociation increases, and Lambda°m cannot be obtained by extrapolation."),
(2,3,'numerical',"Calculate the standard cell potential of a cell: Zn | Zn2+ || Cu2+ | Cu. Given E°(Zn2+/Zn) = -0.76 V and E°(Cu2+/Cu) = +0.34 V.",
 "E°cell = E°cathode - E°anode = E°(Cu2+/Cu) - E°(Zn2+/Zn) = 0.34 - (-0.76) = +1.10 V. Since E°cell is positive, the reaction is spontaneous."),
(2,2,'short_answer',"Write the Nernst equation for the electrode reaction: Mn+ + ne- -> M. State the meaning of each term.",
 "The Nernst equation is E = E° - (RT/nF) ln(1/[Mn+]), or at 298 K, E = E° - (0.0591/n) log(1/[Mn+]). Here E° is the standard electrode potential, R is the gas constant, T is the temperature, n is the number of electrons transferred, F is Faraday's constant (96500 C/mol), and [Mn+] is the molar concentration of the metal ion."),
(2,2,'short_answer',"State Faraday's first law of electrolysis.",
 "Faraday's first law states that the amount of a substance deposited or liberated at an electrode during electrolysis is directly proportional to the quantity of electricity (charge) passed through the electrolyte: m = Z x Q = Z x I x t, where Z is the electrochemical equivalent, I is the current and t is the time."),
(2,3,'numerical',"How much charge is required to reduce 1 mole of Cu2+ to Cu? (F = 96500 C/mol)",
 "The reduction is Cu2+ + 2e- -> Cu, requiring 2 moles of electrons per mole of Cu2+. Charge = 2 x F = 2 x 96500 = 193000 C (1.93 x 10^5 C)."),
(2,2,'short_answer',"Why does the conductivity of an electrolyte solution decrease with dilution?",
 "Conductivity (kappa) is the conductance of ions present in 1 cubic cm of solution. On dilution, the number of ions per unit volume decreases because the same amount of electrolyte is spread over a larger volume. Hence conductivity decreases with dilution, even though molar conductivity increases."),
(2,3,'long_answer',"Explain the construction and working of a hydrogen-oxygen fuel cell.",
 "In a hydrogen-oxygen fuel cell, H2 and O2 gases are bubbled through porous carbon electrodes into concentrated aqueous NaOH or KOH solution. At the anode, H2 is oxidised: 2H2 + 4OH- -> 4H2O + 4e-. At the cathode, O2 is reduced: O2 + 2H2O + 4e- -> 4OH-. The overall reaction is 2H2 + O2 -> 2H2O. The cell continuously converts chemical energy into electrical energy as long as the reactants are supplied, with about 70% efficiency and water as the only product (pollution-free)."),
(2,1,'short_answer',"What is a primary cell? Give one example.",
 "A primary cell is an electrochemical cell in which the redox reaction occurs only once and cannot be reversed; it becomes dead after use and cannot be recharged. Example: the dry cell (Leclanche cell)."),
(2,2,'short_answer',"Define corrosion. Write the chemical reaction for the rusting of iron.",
 "Corrosion is the slow conversion of a metal into its undesirable compounds (oxides, carbonates, etc.) by reaction with moisture and gases in the environment. In rusting, iron is oxidised at the anode: Fe -> Fe2+ + 2e-; oxygen is reduced at the cathode: O2 + 4H+ + 4e- -> 2H2O; and finally Fe2+ is oxidised to rust, Fe2O3.xH2O (hydrated iron(III) oxide)."),

# ── CH 3: CHEMICAL KINETICS ──────────────────────────────────────────────────
(3,2,'short_answer',"Define order and molecularity of a reaction.",
 "Order of a reaction is the sum of the powers of the concentration terms in the experimentally determined rate law; it can be zero, fractional or integral. Molecularity is the number of reacting species (atoms, ions or molecules) that collide simultaneously in an elementary reaction to bring about the reaction; it is always a whole number and never zero or fractional."),
(3,3,'long_answer',"Derive the integrated rate equation for a first order reaction.",
 "For a first order reaction A -> products, rate = -d[A]/dt = k[A]. Rearranging, d[A]/[A] = -k dt. Integrating from [A]0 at t=0 to [A] at time t: ln([A]/[A]0) = -kt, or k = (2.303/t) log([A]0/[A]). This is the integrated first order rate equation; a plot of log[A] versus t is a straight line with slope -k/2.303."),
(3,2,'numerical',"A first order reaction has a rate constant of 1.15 x 10^-3 s^-1. How long will it take for 5 g of the reactant to reduce to 3 g?",
 "For first order, t = (2.303/k) log([A]0/[A]) = (2.303/1.15x10^-3) log(5/3) = (2.303/1.15x10^-3) x 0.2218 = 444 s (approximately 7.4 minutes)."),
(3,2,'short_answer',"Show that the half-life of a first order reaction is independent of initial concentration.",
 "For a first order reaction, k = (2.303/t) log([A]0/[A]). At half-life, [A] = [A]0/2, so t(1/2) = (2.303/k) log 2 = 0.693/k. Since this expression contains only k, the half-life is independent of the initial concentration of the reactant."),
(3,3,'long_answer',"What is activation energy? Explain how a catalyst increases the rate of a reaction using a potential energy diagram.",
 "Activation energy (Ea) is the minimum extra energy that reactant molecules must possess above their average energy to form the activated complex and undergo reaction. A catalyst provides an alternative reaction pathway with a lower activation energy. On a potential energy diagram, the catalysed path has a lower energy barrier than the uncatalysed path, so a larger fraction of molecules can cross the barrier, greatly increasing the rate of reaction without being consumed."),
(3,2,'short_answer',"For a reaction, the rate law is Rate = k[A][B]^2. What is the overall order, and what happens to the rate if the concentration of B is doubled?",
 "The overall order = 1 + 2 = 3 (third order). If [B] is doubled, the rate becomes k[A](2[B])^2 = 4 k[A][B]^2, i.e. the rate increases by a factor of 4."),
(3,2,'short_answer',"What are pseudo first order reactions? Give one example.",
 "Pseudo first order reactions are reactions that are actually of higher order but appear to be first order because one of the reactants is present in large excess and its concentration remains practically constant. Example: acid-catalysed hydrolysis of an ester, CH3COOC2H5 + H2O -> CH3COOH + C2H5OH, where water is in large excess."),
(3,3,'long_answer',"State the Arrhenius equation and explain the significance of each term.",
 "The Arrhenius equation is k = A e^(-Ea/RT), where k is the rate constant, A is the Arrhenius (frequency) factor related to the frequency of collisions and their orientation, Ea is the activation energy, R is the gas constant and T is the absolute temperature. Taking logarithms: ln k = ln A - Ea/RT. A plot of ln k versus 1/T is a straight line with slope -Ea/R, which is used to determine the activation energy."),
(3,1,'short_answer',"What is the effect of temperature on the rate constant of a reaction?",
 "The rate constant increases with an increase in temperature. For many reactions, the rate constant (and hence the rate) approximately doubles for every 10 degree rise in temperature, because a larger fraction of molecules acquire energy equal to or greater than the activation energy."),
(3,2,'short_answer',"For a zero order reaction, write the integrated rate equation and the expression for half-life.",
 "For a zero order reaction A -> products, rate = k (constant). The integrated rate equation is [A] = [A]0 - kt, so k = ([A]0 - [A])/t. The half-life is t(1/2) = [A]0/2k, which is directly proportional to the initial concentration."),

# ── CH 4: d- and f-BLOCK ELEMENTS ────────────────────────────────────────────
(4,2,'short_answer',"Why do transition metals show variable oxidation states?",
 "Transition metals show variable oxidation states because the energies of the (n-1)d and ns orbitals are very close, so electrons from both the d and s subshells can participate in bond formation. The small energy difference allows the loss of different numbers of electrons, giving a range of oxidation states that often differ by one unit."),
(4,2,'short_answer',"What is lanthanoid contraction? State its one consequence.",
 "Lanthanoid contraction is the steady decrease in atomic and ionic radii of the lanthanoids with increasing atomic number, caused by the poor shielding of the nuclear charge by the diffuse 4f electrons. A consequence is that the second and third transition series elements (e.g. Zr and Hf) have almost identical radii, making them very difficult to separate."),
(4,3,'long_answer',"Why are transition metals and their compounds good catalysts? Give two examples.",
 "Transition metals and their compounds act as good catalysts because (i) they show variable oxidation states, allowing them to form unstable intermediate compounds and provide a new low-energy reaction path, and (ii) they have the ability to adsorb reactant molecules on their surface (large surface area) and form weak bonds with reactants. Examples: iron is used in the Haber process for ammonia synthesis, and V2O5 is used in the Contact process for sulphuric acid manufacture."),
(4,2,'short_answer',"Why are Zn, Cd and Hg not regarded as transition elements?",
 "A transition element is defined as one having a partially filled d-subshell in its ground state or in one of its common oxidation states. Zn, Cd and Hg have completely filled d10 configuration in both their atomic state and their common +2 oxidation state, so they do not show typical transition metal properties and are not regarded as transition elements."),
(4,3,'long_answer',"Account for the following: (i) Cr2+ is a strong reducing agent while Mn3+ is a strong oxidising agent. (ii) The transition metals form coloured compounds.",
 "(i) Cr2+ (3d4) is a strong reducing agent because it readily loses an electron to become Cr3+ (3d3), which has a stable half-filled t2g configuration. Mn3+ (3d4) is a strong oxidising agent because it readily gains an electron to become Mn2+ (3d5), which has an extra-stable half-filled d-subshell. (ii) Transition metals form coloured compounds because their ions have partially filled d-orbitals; a d-electron can be excited from a lower to a higher energy d-orbital (d-d transition) by absorbing visible light, and the complementary colour is transmitted."),
(4,2,'short_answer',"Why do the transition metals have high enthalpies of atomisation?",
 "Transition metals have high enthalpies of atomisation because they have a large number of unpaired d-electrons, which leads to strong metallic bonding (strong interatomic attraction) in the solid state. The greater the number of unpaired electrons, the stronger the bonding and the higher the enthalpy of atomisation."),
(4,1,'short_answer',"What is the general electronic configuration of transition elements?",
 "The general electronic configuration of transition elements is (n-1)d^1-10 ns^1-2, where (n-1) is the penultimate shell whose d-orbitals are progressively filled."),
(4,3,'long_answer',"Describe the preparation of potassium permanganate (KMnO4) from pyrolusite ore.",
 "Pyrolusite ore (MnO2) is fused with KOH in the presence of an oxidising agent like air (O2) or KNO3 to give green potassium manganate: 2MnO2 + 4KOH + O2 -> 2K2MnO4 + 2H2O. The manganate ion (MnO4^2-, green) is then oxidised to permanganate (MnO4^-, purple) either by electrolytic oxidation or by treatment with chlorine/ozone: 2MnO4^2- + Cl2 -> 2MnO4^- + 2Cl-. KMnO4 crystallises out as dark purple crystals."),
(4,2,'short_answer',"Write two characteristics of the elements with atomic numbers 58 to 71 (lanthanoids).",
 "(i) Lanthanoids show a common and most stable oxidation state of +3, though some also show +2 and +4. (ii) They exhibit lanthanoid contraction, a gradual decrease in atomic/ionic size with increasing atomic number, and are typically silvery-white, soft metals that tarnish in air."),
(4,2,'short_answer',"Why is the highest oxidation state of a metal exhibited in its oxide or fluoride?",
 "The highest oxidation state of a transition metal is shown in its oxides and fluorides because oxygen and fluorine are small, highly electronegative elements that can oxidise the metal to its maximum state. They can form multiple bonds (oxygen) or many single bonds (fluorine) with the metal, stabilising high oxidation states (e.g. Mn in Mn2O7, V in VF5)."),

# ── CH 5: COORDINATION COMPOUNDS ─────────────────────────────────────────────
(5,2,'short_answer',"Define the following: (i) Coordination number (ii) Ligand.",
 "(i) Coordination number is the number of ligand donor atoms directly bonded to the central metal atom or ion through coordinate bonds. For example, in [PtCl6]^2-, the coordination number of Pt is 6. (ii) A ligand is an ion or molecule that has at least one lone pair of electrons and can donate it to the central metal atom/ion to form a coordinate bond (e.g. Cl-, NH3, H2O, CN-)."),
(5,3,'long_answer',"Using Werner's theory, explain the bonding in CoCl3.6NH3.",
 "According to Werner's theory, a metal shows two types of valencies: primary (ionisable) valency, satisfied by negative ions, and secondary (non-ionisable) valency, satisfied by ligands and equal to the coordination number. In CoCl3.6NH3, cobalt has a primary valency of 3 (satisfied by 3 Cl-) and a secondary valency of 6 (satisfied by 6 NH3). The complex is written as [Co(NH3)6]^3+ 3Cl-, and all three Cl- ions are ionisable, giving a precipitate with AgNO3."),
(5,2,'short_answer',"What is meant by the chelate effect? Give one example.",
 "The chelate effect is the extra stability shown by complexes containing chelating (polydentate) ligands compared to those with similar monodentate ligands. The ring formation increases stability. For example, [Ni(en)3]^2+ (en = ethylenediamine, bidentate) is more stable than [Ni(NH3)6]^2+, because of the formation of stable five-membered chelate rings."),
(5,3,'long_answer',"Write the IUPAC name and predict the geometry and magnetic behaviour of [Ni(CN)4]^2-. (At. no. Ni = 28)",
 "IUPAC name: tetracyanidonickelate(II) ion. Ni is in the +2 state: Ni2+ = 3d8. CN- is a strong field ligand, so it causes pairing of the d-electrons, giving the configuration with all 8 electrons paired in four d-orbitals and one empty 3d orbital. The hybridisation is dsp2, giving a square planar geometry. Since there are no unpaired electrons, the complex is diamagnetic."),
(5,3,'long_answer',"Explain the difference between a double salt and a coordination compound with examples.",
 "A double salt is an addition compound that is stable in the solid state but dissociates completely into its constituent ions when dissolved in water, e.g. Mohr's salt FeSO4.(NH4)2SO4.6H2O gives Fe2+, NH4+ and SO4^2- ions in solution. A coordination compound is an addition compound that retains its identity (the complex ion) both in the solid state and in solution and does not dissociate into all its ions, e.g. K4[Fe(CN)6] gives K+ and the complex [Fe(CN)6]^4- ion, not free Fe2+ or CN- ions."),
(5,2,'short_answer',"What type of isomerism is shown by [Co(NH3)5(NO2)]Cl2 and [Co(NH3)5(ONO)]Cl2?",
 "These complexes show linkage isomerism. It arises because the ambidentate ligand NO2- can bind to the metal either through nitrogen (nitro, -NO2) or through oxygen (nitrito, -ONO). The two forms have the same formula but differ in the donor atom of the ligand."),
(5,2,'short_answer',"On the basis of crystal field theory, write the electronic configuration of d4 in an octahedral field when (i) Delta o > P and (ii) Delta o < P.",
 "(i) When Delta o > P (strong field, low spin): the configuration is t2g^4 eg^0, with two electrons paired, giving 2 unpaired electrons. (ii) When Delta o < P (weak field, high spin): the configuration is t2g^3 eg^1, with all electrons unpaired, giving 4 unpaired electrons. Here P is the pairing energy and Delta o is the crystal field splitting energy."),
(5,3,'long_answer',"What is crystal field splitting? Compare the splitting of d-orbitals in octahedral and tetrahedral fields.",
 "Crystal field splitting is the splitting of the degenerate d-orbitals of a metal ion into different energy levels due to the electrostatic field of the surrounding ligands. In an octahedral field, the d-orbitals split into a lower energy set t2g (dxy, dyz, dzx) and a higher energy set eg (dz2, dx2-y2), with splitting energy Delta o. In a tetrahedral field, the splitting is reversed: the e set is lower and the t2 set is higher, and the splitting is smaller, Delta t = (4/9) Delta o; hence tetrahedral complexes are usually high spin."),
(5,1,'short_answer',"Write the formula of the coordination compound 'potassium hexacyanidoferrate(II)'.",
 "The formula is K4[Fe(CN)6]. Iron is in the +2 oxidation state, surrounded by six cyanide ligands, and four potassium ions balance the -4 charge of the complex ion."),
(5,2,'short_answer',"Why is [Fe(CN)6]^4- diamagnetic while [Fe(H2O)6]^2+ is paramagnetic? (At. no. Fe = 26)",
 "In both complexes Fe is +2 (3d6). CN- is a strong field ligand: it causes pairing of all six d-electrons (t2g^6 eg^0), leaving no unpaired electrons, so [Fe(CN)6]^4- is diamagnetic (d2sp3, inner orbital). H2O is a weak field ligand: it does not cause pairing (t2g^4 eg^2), leaving 4 unpaired electrons, so [Fe(H2O)6]^2+ is paramagnetic (sp3d2, outer orbital)."),

# ── CH 6: HALOALKANES AND HALOARENES ─────────────────────────────────────────
(6,2,'short_answer',"Why are haloalkanes more reactive than haloarenes towards nucleophilic substitution?",
 "Haloalkanes are more reactive than haloarenes because in haloarenes the C-X bond has partial double bond character due to resonance (delocalisation of halogen lone pair into the ring), making it shorter and stronger and harder to break. Also, the sp2 carbon in haloarenes holds the bonding electrons more tightly than the sp3 carbon in haloalkanes, and the partial negative charge on the ring repels the incoming nucleophile."),
(6,3,'long_answer',"Distinguish between SN1 and SN2 mechanisms of nucleophilic substitution.",
 "SN1 (unimolecular) proceeds in two steps via formation of a carbocation intermediate; it is first order (rate depends only on the substrate), favoured by polar protic solvents and tertiary halides, and gives a racemic mixture due to the planar carbocation. SN2 (bimolecular) proceeds in a single step through a transition state where the nucleophile attacks from the side opposite to the leaving group; it is second order (rate depends on substrate and nucleophile), favoured by polar aprotic solvents and primary halides, and proceeds with inversion of configuration (Walden inversion)."),
(6,2,'short_answer',"What is the Wurtz reaction? Give its general equation.",
 "The Wurtz reaction is the formation of a higher symmetrical alkane when an alkyl halide is treated with sodium metal in dry ether. General equation: 2R-X + 2Na -> R-R + 2NaX. For example, 2CH3CH2Br + 2Na -> CH3CH2CH2CH3 (n-butane) + 2NaBr."),
(6,2,'short_answer',"Why is the dipole moment of chlorobenzene lower than that of cyclohexyl chloride?",
 "In chlorobenzene, the C-Cl bond carbon is sp2 hybridised (more electronegative, holding electrons tightly) and the lone pair of chlorine is partially delocalised into the ring by resonance, which reduces the polarity of the C-Cl bond. In cyclohexyl chloride, the carbon is sp3 and there is no such delocalisation, so the full inductive effect operates, giving a higher dipole moment."),
(6,3,'long_answer',"What happens when (i) chlorobenzene is treated with Cl2/anhydrous FeCl3, (ii) bromoethane is heated with alcoholic KOH?",
 "(i) Chlorobenzene undergoes electrophilic substitution (chlorination); since -Cl is an ortho/para director, the products are 1,2-dichlorobenzene and 1,4-dichlorobenzene (para being the major product). (ii) Bromoethane heated with alcoholic KOH undergoes dehydrohalogenation (beta-elimination), removing HBr to give ethene: CH3CH2Br + KOH(alc) -> CH2=CH2 + KBr + H2O."),
(6,2,'short_answer',"Arrange the following in increasing order of reactivity towards SN2 reaction: 1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane.",
 "Increasing order of SN2 reactivity: 2-bromo-2-methylpropane (tertiary) < 2-bromobutane (secondary) < 1-bromobutane (primary). SN2 reactivity decreases with increasing steric hindrance around the carbon bearing the halogen, so primary halides react fastest and tertiary slowest."),
(6,1,'short_answer',"What is a racemic mixture?",
 "A racemic mixture is an equimolar (1:1) mixture of the two enantiomers (dextrorotatory and laevorotatory forms) of a chiral compound. It is optically inactive because the rotation of plane-polarised light by one enantiomer is exactly cancelled by the equal and opposite rotation of the other."),
(6,3,'long_answer',"How is chloroform prepared from ethanol? Why is it stored in dark coloured bottles filled to the brim?",
 "Chloroform is prepared by the haloform reaction: ethanol (or acetaldehyde) is treated with bleaching powder (which provides Cl2 and Ca(OH)2). Oxidation and chlorination give trichloroacetaldehyde, which is then hydrolysed to chloroform: CH3CHO + 3Cl2 -> CCl3CHO + 3HCl, then 2CCl3CHO + Ca(OH)2 -> 2CHCl3 + (HCOO)2Ca. It is stored in dark bottles filled to the brim because in the presence of light and air it is slowly oxidised to the poisonous gas phosgene (COCl2): 2CHCl3 + O2 -> 2COCl2 + 2HCl. Filling to the brim excludes air."),
(6,2,'short_answer',"Identify the chiral molecule among: 2-bromobutane and 1-bromobutane. Justify.",
 "2-bromobutane (CH3-CHBr-CH2-CH3) is chiral because its second carbon is attached to four different groups (-H, -Br, -CH3, -C2H5), making it a stereocentre, so it can exist as two non-superimposable mirror images. 1-bromobutane (CH3CH2CH2CH2Br) is achiral because no carbon bears four different groups."),
(6,2,'short_answer',"What is the Finkelstein reaction?",
 "The Finkelstein reaction is the conversion of an alkyl chloride or bromide into an alkyl iodide by treatment with sodium iodide in dry acetone: R-Cl + NaI -> R-I + NaCl. NaCl and NaBr are insoluble in acetone and precipitate out, driving the equilibrium to the right (Le Chatelier's principle)."),

# ── CH 7: ALCOHOLS, PHENOLS AND ETHERS ───────────────────────────────────────
(7,2,'short_answer',"Why is phenol more acidic than ethanol?",
 "Phenol is more acidic than ethanol because the phenoxide ion formed after losing a proton is stabilised by resonance (the negative charge is delocalised over the ortho and para carbons of the ring), whereas the ethoxide ion is not resonance stabilised. Moreover, the sp2 carbon of phenol is more electronegative and the -OH oxygen is positively polarised, facilitating the release of H+."),
(7,3,'long_answer',"How is phenol manufactured by the cumene process?",
 "In the cumene process, benzene is alkylated with propene in the presence of an acid catalyst to form cumene (isopropylbenzene). Cumene is then oxidised by air to cumene hydroperoxide. On treatment with dilute acid, cumene hydroperoxide undergoes rearrangement and hydrolysis to give phenol and acetone as a by-product: C6H5CH(CH3)2 + O2 -> C6H5C(CH3)2OOH; then C6H5C(CH3)2OOH + H+(dil) -> C6H5OH + (CH3)2CO."),
(7,2,'short_answer',"What happens when phenol is treated with bromine water? Write the equation.",
 "When phenol is treated with bromine water, a white precipitate of 2,4,6-tribromophenol is formed. The -OH group is strongly activating and ortho/para directing, so all three positions are brominated even without a catalyst: C6H5OH + 3Br2 -> C6H2Br3OH (2,4,6-tribromophenol) + 3HBr."),
(7,3,'long_answer',"Distinguish between primary, secondary and tertiary alcohols using the Lucas test.",
 "The Lucas test uses Lucas reagent (concentrated HCl + anhydrous ZnCl2). Tertiary alcohols react immediately, giving turbidity (cloudiness) at once due to formation of an insoluble alkyl chloride. Secondary alcohols give turbidity within about 5 minutes. Primary alcohols do not react at room temperature and give no turbidity (turbidity appears only on heating). The rate corresponds to the ease of carbocation formation: 3 > 2 > 1."),
(7,2,'short_answer',"What is the Williamson synthesis? Give one example.",
 "Williamson synthesis is a method for preparing ethers (symmetrical or unsymmetrical) by heating an alkyl halide with sodium alkoxide. It proceeds by an SN2 mechanism: R-O-Na+ + R'-X -> R-O-R' + NaX. For example, sodium ethoxide reacts with methyl iodide to give ethyl methyl ether: C2H5ONa + CH3I -> C2H5OCH3 + NaI."),
(7,2,'short_answer',"Why is the boiling point of ethanol higher than that of dimethyl ether although both have the same molecular formula?",
 "Ethanol and dimethyl ether are isomers (C2H6O), but ethanol has an -OH group and can form intermolecular hydrogen bonds, which require extra energy to break, giving it a high boiling point. Dimethyl ether has no -OH hydrogen and cannot form hydrogen bonds, so it has weaker dipole-dipole interactions and a much lower boiling point."),
(7,3,'long_answer',"Explain Kolbe's reaction and Reimer-Tiemann reaction with equations.",
 "Kolbe's reaction: sodium phenoxide is heated with CO2 under pressure followed by acidification to give salicylic acid (2-hydroxybenzoic acid); the -OH directs the carboxyl group to the ortho position: C6H5ONa + CO2 -> ortho-HO-C6H4-COONa, then H+ gives salicylic acid. Reimer-Tiemann reaction: phenol is treated with chloroform and aqueous NaOH, introducing a -CHO group at the ortho position to give salicylaldehyde (2-hydroxybenzaldehyde) after hydrolysis: C6H5OH + CHCl3 + 3NaOH -> ortho-HO-C6H4-CHO + 3NaCl + 2H2O."),
(7,1,'short_answer',"Give the IUPAC name of the simplest aromatic alcohol with formula C6H5CH2OH.",
 "The IUPAC name of C6H5CH2OH is phenylmethanol (common name: benzyl alcohol)."),
(7,2,'short_answer',"How can you distinguish between methanol and ethanol chemically?",
 "Methanol and ethanol can be distinguished by the iodoform test. Ethanol, on warming with I2 and NaOH (sodium hypoiodite), gives a yellow precipitate of iodoform (CHI3) because it contains the CH3CH(OH)- group. Methanol does not give the iodoform test, so no yellow precipitate forms."),
(7,2,'short_answer',"What happens when ethanol is heated with concentrated H2SO4 at 443 K?",
 "When ethanol is heated with excess concentrated H2SO4 at 443 K (170 C), it undergoes dehydration (intramolecular elimination of water) to form ethene: C2H5OH -> CH2=CH2 + H2O. Concentrated H2SO4 acts as a dehydrating agent."),

# ── CH 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS ────────────────────────────
(8,2,'short_answer',"Why are aldehydes more reactive than ketones towards nucleophilic addition?",
 "Aldehydes are more reactive than ketones towards nucleophilic addition for two reasons: (i) Electronic effect: ketones have two electron-donating alkyl groups that reduce the positive charge on the carbonyl carbon, while aldehydes have only one, so the carbonyl carbon of an aldehyde is more electrophilic. (ii) Steric effect: the two bulky alkyl groups in ketones hinder the approach of the nucleophile, whereas aldehydes have only one such group."),
(8,3,'long_answer',"What is the aldol condensation? Explain with an example.",
 "Aldol condensation is a reaction in which two molecules of an aldehyde or ketone containing at least one alpha-hydrogen combine in the presence of a dilute base (NaOH) to form a beta-hydroxy aldehyde or ketone (an aldol). On heating, the aldol readily loses water to give an alpha,beta-unsaturated carbonyl compound. Example: two molecules of acetaldehyde give 3-hydroxybutanal, which on heating gives but-2-enal: 2CH3CHO -> CH3CH(OH)CH2CHO -> CH3CH=CHCHO + H2O."),
(8,2,'short_answer',"Distinguish between the Cannizzaro reaction and aldol condensation.",
 "The Cannizzaro reaction is given by aldehydes that do NOT have an alpha-hydrogen (e.g. HCHO, C6H5CHO); on treatment with concentrated alkali they undergo disproportionation, one molecule being oxidised to an acid (salt) and another reduced to an alcohol. The aldol condensation is given by aldehydes/ketones that DO have an alpha-hydrogen, which combine to form a beta-hydroxy carbonyl compound. The key difference is the presence or absence of an alpha-hydrogen."),
(8,3,'long_answer',"How will you convert benzaldehyde into (i) benzoic acid (ii) benzyl alcohol (iii) cinnamaldehyde?",
 "(i) Benzaldehyde is oxidised to benzoic acid using an oxidising agent like KMnO4 or by air: C6H5CHO + [O] -> C6H5COOH. (ii) Benzaldehyde is reduced to benzyl alcohol using NaBH4 or LiAlH4: C6H5CHO + 2[H] -> C6H5CH2OH. (iii) Benzaldehyde undergoes cross-aldol condensation with acetaldehyde (which has alpha-H) in dilute NaOH, followed by dehydration, to give cinnamaldehyde: C6H5CHO + CH3CHO -> C6H5CH=CHCHO + H2O."),
(8,2,'short_answer',"Why is the boiling point of carboxylic acids higher than those of alcohols of comparable molecular mass?",
 "Carboxylic acids have higher boiling points than alcohols of comparable molecular mass because carboxylic acid molecules form two hydrogen bonds with each other, existing as stable cyclic dimers in the liquid (and even vapour) state. This extensive, strong intermolecular hydrogen bonding requires more energy to break than the single hydrogen bonds in alcohols."),
(8,3,'long_answer',"Describe the Hell-Volhard-Zelinsky (HVZ) reaction.",
 "The Hell-Volhard-Zelinsky reaction is the alpha-halogenation of carboxylic acids. A carboxylic acid containing an alpha-hydrogen is treated with chlorine or bromine in the presence of a small amount of red phosphorus to give the alpha-halo carboxylic acid: CH3COOH + Cl2 (red P) -> ClCH2COOH + HCl. The alpha-halo acid can be further halogenated. This reaction is used to introduce a halogen at the alpha position, which can then be substituted to make amino or hydroxy acids."),
(8,2,'short_answer',"What is the Tollens' test? What does a positive result indicate?",
 "Tollens' test uses Tollens' reagent (ammoniacal silver nitrate, [Ag(NH3)2]+). When warmed with an aldehyde, the aldehyde is oxidised to a carboxylate while Ag+ is reduced to metallic silver, which deposits as a shiny silver mirror on the inside of the tube. A positive result (silver mirror) indicates the presence of an aldehyde group (ketones do not respond)."),
(8,2,'short_answer',"Arrange the following in increasing order of acidic strength: CH3COOH, ClCH2COOH, FCH2COOH.",
 "Increasing order of acidic strength: CH3COOH < ClCH2COOH < FCH2COOH. Electron-withdrawing halogens stabilise the carboxylate ion by the -I effect, increasing acidity. Since fluorine is more electronegative than chlorine, FCH2COOH is the strongest acid, while CH3COOH (with an electron-donating methyl group) is the weakest."),
(8,1,'short_answer',"Which reagent is used to convert an acid chloride into an aldehyde (Rosenmund reduction)?",
 "The Rosenmund reduction uses hydrogen gas (H2) in the presence of palladium catalyst supported on barium sulphate (Pd/BaSO4), which is partially poisoned with sulphur or quinoline to prevent over-reduction: RCOCl + H2 -> RCHO + HCl."),
(8,2,'short_answer',"Give a chemical test to distinguish between propanal and propanone.",
 "Propanal and propanone can be distinguished using Tollens' reagent (or Fehling's solution). Propanal (an aldehyde) reduces Tollens' reagent to give a silver mirror (or gives a red precipitate of Cu2O with Fehling's solution), whereas propanone (a ketone) gives no such reaction. Alternatively, propanone gives a positive iodoform test (yellow precipitate) but propanal does not."),

# ── CH 9: AMINES ─────────────────────────────────────────────────────────────
(9,2,'short_answer',"Why are aliphatic amines stronger bases than ammonia?",
 "Aliphatic amines are stronger bases than ammonia because the alkyl groups attached to nitrogen are electron-donating (+I effect). They increase the electron density on the nitrogen atom, making its lone pair more available for donation to a proton, and they also stabilise the resulting substituted ammonium cation. Hence aliphatic amines accept protons more readily than ammonia."),
(9,2,'short_answer',"Why is aniline a weaker base than ammonia?",
 "Aniline is a weaker base than ammonia because the lone pair of electrons on its nitrogen atom is delocalised into the benzene ring by resonance. This makes the lone pair less available for donation to a proton. In ammonia, the lone pair is fully localised on nitrogen and freely available, so ammonia is a stronger base than aniline."),
(9,3,'long_answer',"Describe the Hofmann bromamide degradation reaction with an example.",
 "In the Hofmann bromamide degradation, an amide is treated with bromine in an aqueous or alcoholic solution of NaOH (or KOH) to give a primary amine with one carbon atom less than the starting amide. The reaction: RCONH2 + Br2 + 4NaOH -> RNH2 + Na2CO3 + 2NaBr + 2H2O. For example, acetamide gives methylamine: CH3CONH2 -> CH3NH2. It is used to step down a homologous series."),
(9,3,'long_answer',"How is aniline converted into (i) benzene diazonium chloride and (ii) chlorobenzene (Sandmeyer reaction)?",
 "(i) Aniline is treated with nitrous acid (NaNO2 + dilute HCl) at 273-278 K (0-5 C) to form benzene diazonium chloride: C6H5NH2 + NaNO2 + 2HCl -> C6H5N2+Cl- + NaCl + 2H2O. (ii) In the Sandmeyer reaction, benzene diazonium chloride is treated with cuprous chloride (CuCl/HCl); the diazonium group is replaced by -Cl to give chlorobenzene: C6H5N2+Cl- + CuCl -> C6H5Cl + N2 + CuCl."),
(9,2,'short_answer',"What is the carbylamine reaction? What is it used to detect?",
 "In the carbylamine reaction, a primary amine is heated with chloroform and alcoholic KOH to form a foul-smelling isocyanide (carbylamine): RNH2 + CHCl3 + 3KOH -> RNC + 3KCl + 3H2O. Only primary amines give this reaction, so it is used as a test to detect (distinguish) primary amines; secondary and tertiary amines do not respond."),
(9,3,'long_answer',"Distinguish between primary, secondary and tertiary amines using the Hinsberg test.",
 "In the Hinsberg test, the amine is treated with benzenesulphonyl chloride (C6H5SO2Cl). A primary amine gives an N-substituted sulphonamide that has an acidic N-H and dissolves in alkali (KOH) to give a clear solution. A secondary amine gives a sulphonamide with no N-H, which is insoluble in alkali and remains as a precipitate. A tertiary amine has no replaceable N-H and does not react at all (no reaction). Thus the three classes are distinguished by their solubility behaviour in alkali."),
(9,2,'short_answer',"Arrange the following in increasing order of basic strength in aqueous solution: NH3, CH3NH2, (CH3)2NH, (CH3)3N.",
 "In aqueous solution the order is NH3 < (CH3)3N < CH3NH2 < (CH3)2NH. Basicity is governed by a balance of the +I effect, steric hindrance and solvation (hydrogen bonding) of the cation. The secondary amine (CH3)2NH is the strongest base because it offers the best combination of inductive and solvation effects, while the tertiary amine is weakened by steric hindrance and poor solvation."),
(9,1,'short_answer',"Write the IUPAC name of CH3CH2CH2NH2.",
 "The IUPAC name of CH3CH2CH2NH2 is propan-1-amine (common name: n-propylamine)."),
(9,2,'short_answer',"What is the Gabriel phthalimide synthesis used for? Why does it fail for aromatic primary amines?",
 "The Gabriel phthalimide synthesis is used to prepare pure aliphatic primary amines. Phthalimide is treated with KOH to form potassium phthalimide, which on reaction with an alkyl halide followed by hydrolysis gives a primary amine. It fails for aromatic primary amines (like aniline) because aryl halides do not undergo nucleophilic substitution with potassium phthalimide easily, owing to the partial double bond character of the C-X bond in aryl halides."),
(9,2,'short_answer',"What happens when benzene diazonium chloride reacts with phenol in mildly alkaline medium?",
 "Benzene diazonium chloride couples with phenol in a mildly alkaline medium to form a coloured azo dye, p-hydroxyazobenzene (an orange dye). This is an electrophilic substitution (diazo coupling) that occurs at the para position of phenol: C6H5N2+Cl- + C6H5OH -> p-(HO)C6H4-N=N-C6H5 + HCl."),
(9,2,'short_answer',"Why cannot aromatic primary amines be prepared by the Gabriel phthalimide synthesis but can be prepared by reduction of nitro compounds?",
 "Aromatic primary amines cannot be made by the Gabriel synthesis because aryl halides do not undergo the required nucleophilic substitution with potassium phthalimide. However, they are readily prepared by reducing aromatic nitro compounds, e.g. nitrobenzene is reduced with Sn/HCl or H2/Pd to give aniline: C6H5NO2 + 6[H] -> C6H5NH2 + 2H2O."),

# ── CH 10: BIOMOLECULES ──────────────────────────────────────────────────────
(10,2,'short_answer',"Define the following: (i) Reducing sugar (ii) Invert sugar.",
 "(i) A reducing sugar is a carbohydrate that can reduce Tollens' reagent or Fehling's solution because it contains a free aldehyde or keto group (a free anomeric -OH); all monosaccharides and most disaccharides (except sucrose) are reducing sugars. (ii) Invert sugar is the equimolar mixture of glucose and fructose obtained by the hydrolysis of sucrose; the name arises because the optical rotation changes (inverts) from dextro to laevo during hydrolysis."),
(10,2,'short_answer',"What is the difference between a nucleoside and a nucleotide?",
 "A nucleoside consists of a nitrogenous base (purine or pyrimidine) attached to a pentose sugar (ribose or deoxyribose): base + sugar. A nucleotide consists of a nitrogenous base, a pentose sugar and a phosphate group: base + sugar + phosphate. In short, nucleotide = nucleoside + phosphoric acid. Nucleotides are the building blocks (monomers) of nucleic acids."),
(10,3,'long_answer',"What are essential and non-essential amino acids? Give one example of each.",
 "Essential amino acids are those which cannot be synthesised by the human body and must be obtained from the diet, e.g. valine, leucine, lysine. Non-essential amino acids are those which can be synthesised in the body itself and need not necessarily be supplied through food, e.g. glycine, alanine. Both types are required for the synthesis of proteins."),
(10,2,'short_answer',"What is meant by the denaturation of a protein? Give one example.",
 "Denaturation is the process in which a protein loses its native three-dimensional structure (secondary and tertiary structure) due to physical or chemical changes such as heat, change in pH, or addition of urea/heavy metals, while the primary structure (sequence of amino acids) remains intact. As a result the protein loses its biological activity. Example: the coagulation of egg white (albumin) on boiling, or the curdling of milk."),
(10,3,'long_answer',"Describe the structure of starch. How does it differ from cellulose?",
 "Starch is a polysaccharide consisting of two components: amylose (about 15-20%), a long unbranched chain of alpha-D-glucose units joined by C1-C4 glycosidic linkages, which is water soluble; and amylopectin (about 80-85%), a branched chain with C1-C4 and C1-C6 linkages, which is insoluble. Cellulose is a straight-chain polysaccharide of beta-D-glucose units joined only by C1-C4 glycosidic linkages. The key difference is the type of glucose linkage (alpha in starch, beta in cellulose); humans can digest starch but not cellulose because we lack the enzyme to hydrolyse beta-linkages."),
(10,2,'short_answer',"What are vitamins? How are they classified?",
 "Vitamins are organic compounds required in small amounts in the diet for the normal growth and maintenance of the body, which the body cannot synthesise in sufficient quantity. They are classified into two groups: fat-soluble vitamins (A, D, E and K), which are stored in the liver and fatty tissues, and water-soluble vitamins (B-group and C), which must be supplied regularly in the diet as they are readily excreted and not stored."),
(10,2,'short_answer',"Write the Haworth structure description and name the two functional groups present in glucose.",
 "Glucose exists mainly as a cyclic six-membered pyranose ring (Haworth structure) formed by reaction of the C5 -OH with the C1 aldehyde group, creating a hemiacetal with a new -OH at C1 (anomeric carbon). The open-chain form contains an aldehyde group (-CHO) at C1 and five hydroxyl groups (-OH); hence glucose is an aldohexose (a polyhydroxy aldehyde)."),
(10,3,'long_answer',"What are the main structural features that distinguish DNA from RNA?",
 "DNA and RNA differ in three main features: (i) Sugar: DNA contains 2-deoxyribose, while RNA contains ribose. (ii) Bases: both have adenine, guanine and cytosine, but DNA has thymine whereas RNA has uracil instead of thymine. (iii) Structure: DNA is usually a double helix of two complementary strands held by hydrogen bonds (A-T, G-C), while RNA is generally single-stranded. DNA stores and transmits genetic information; RNA is mainly involved in protein synthesis."),
(10,1,'short_answer',"What type of linkage holds together the monomers in proteins?",
 "The monomers (alpha-amino acids) in proteins are held together by peptide bonds (-CO-NH-), which are amide linkages formed by the condensation of the -COOH group of one amino acid with the -NH2 group of the next, with loss of a water molecule."),
(10,2,'short_answer',"Why is glucose not able to form the hydrogencarbonate addition product with NaHSO3 completely, and why does it not give the Schiff's test?",
 "Glucose shows certain unexpected behaviours because it exists predominantly in the cyclic hemiacetal (pyranose) form, in which the aldehyde group is not free but is locked as a -OH at the anomeric carbon. Therefore glucose does not give the Schiff's test and forms the bisulphite addition product only partially, since only the small amount of open-chain form present has a free -CHO group. This was one of the evidences for the cyclic structure of glucose."),
]

def get_diff(m): return 'easy' if m == 1 else ('medium' if m <= 3 else 'hard')

CH_NAMES = {
    1: 'Solutions', 2: 'Electrochemistry', 3: 'Chemical Kinetics',
    4: 'The d- and f-Block Elements', 5: 'Coordination Compounds',
    6: 'Haloalkanes and Haloarenes', 7: 'Alcohols, Phenols and Ethers',
    8: 'Aldehydes, Ketones and Carboxylic Acids', 9: 'Amines', 10: 'Biomolecules',
}

def main():
    with open('src/data/questions.json') as f:
        data = json.load(f)
    # match chapterName from existing data
    existing_names = {q['chapter']: q['chapterName'] for q in data['questions']}
    # find max numeric id
    maxid = 0
    for q in data['questions']:
        m = re.match(r'q(\d+)', q['id'])
        if m:
            maxid = max(maxid, int(m.group(1)))
    nid = maxid + 1
    added = 0
    for (ch, marks, qtype, question, answer) in NEW:
        cname = existing_names.get(ch, CH_NAMES[ch])
        data['questions'].append({
            'id': f'q{nid}',
            'question': question,
            'answer': answer,
            'chapter': ch,
            'chapterName': cname,
            'marks': marks,
            'year': None,
            'difficulty': get_diff(marks),
            'type': qtype,
            'source': 'chapter_pdf',
            'isImportant': True,
            'frequency': 1,
        })
        nid += 1
        added += 1
    data['totalQuestions'] = len(data['questions'])
    with open('src/data/questions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f'Added {added} curated questions. New total: {len(data["questions"])}')

if __name__ == '__main__':
    main()
