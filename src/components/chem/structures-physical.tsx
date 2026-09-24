"use client";

/**
 * Diagrams for the physical, inorganic and biomolecule chapters:
 * cells, graphs, crystal-field splitting, complex isomerism and
 * carbohydrate / protein / nucleic-acid structures.
 */

import { Figure, Bond, SvgLabel } from "./organic";
import { Octahedral, SquarePlanar } from "./geometry";

type Pt = { x: number; y: number };

/* ================================================================== */
/* Axes helper                                                         */
/* ================================================================== */

function Axes({
  x0,
  y0,
  x1,
  y1,
  xLabel,
  yLabel,
}: {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  xLabel: string;
  yLabel: string;
}) {
  return (
    <g>
      <line x1={x0} y1={y0} x2={x0} y2={y1} className="stroke-[var(--ink-muted)]" strokeWidth={1.6} />
      <line x1={x0} y1={y0} x2={x1} y2={y0} className="stroke-[var(--ink-muted)]" strokeWidth={1.6} />
      <SvgLabel at={{ x: (x0 + x1) / 2, y: y0 + 26 }} text={xLabel} size={12} tone="muted" weight={500} />
      <g transform={`rotate(-90 ${x0 - 30} ${(y0 + y1) / 2})`}>
        <SvgLabel at={{ x: x0 - 30, y: (y0 + y1) / 2 }} text={yLabel} size={12} tone="muted" weight={500} />
      </g>
    </g>
  );
}

/* ================================================================== */
/* Electrochemistry                                                    */
/* ================================================================== */

export function GalvanicCell() {
  const W = 560;
  const H = 330;
  return (
    <Figure
      width={W}
      height={H}
      caption="Daniell cell: Zn | Zn^2+ (1 M) || Cu^2+ (1 M) | Cu. Oxidation happens at the anode (left, negative), reduction at the cathode (right, positive); electrons flow through the wire and ions through the salt bridge."
      label="Daniell galvanic cell with salt bridge"
    >
      {/* beakers */}
      {[
        { x: 60, ion: "ZnSO4 (1 M)" },
        { x: 320, ion: "CuSO4 (1 M)" },
      ].map((b, i) => (
        <g key={i}>
          <path
            d={`M ${b.x} 120 L ${b.x} 262 Q ${b.x} 278 ${b.x + 16} 278 L ${b.x + 164} 278 Q ${b.x + 180} 278 ${b.x + 180} 262 L ${b.x + 180} 120`}
            className="fill-none stroke-[var(--ink-muted)]"
            strokeWidth={2}
          />
          <path
            d={`M ${b.x + 2} 168 L ${b.x + 2} 261 Q ${b.x + 2} 276 ${b.x + 17} 276 L ${b.x + 163} 276 Q ${b.x + 178} 276 ${b.x + 178} 261 L ${b.x + 178} 168 Z`}
            className="fill-[var(--plane-fill)]"
          />
          <SvgLabel at={{ x: b.x + 90, y: 300 }} text={b.ion} size={12} tone="muted" weight={500} />
        </g>
      ))}

      {/* electrodes */}
      <rect x={128} y={96} width={18} height={150} rx={2} className="fill-[var(--atom-ligand)] stroke-[var(--atom-ring)]" strokeWidth={1.4} />
      <rect x={414} y={96} width={18} height={150} rx={2} className="fill-[var(--atom-metal)] stroke-[var(--atom-ring)]" strokeWidth={1.4} />
      <SvgLabel at={{ x: 137, y: 172 }} text="Zn" size={14} />
      <SvgLabel at={{ x: 423, y: 172 }} text="Cu" size={14} />

      {/* external circuit */}
      <path d="M 137 96 L 137 52 L 423 52 L 423 96" className="fill-none stroke-[var(--ink)]" strokeWidth={2} />
      <circle cx={280} cy={52} r={19} className="fill-[var(--surface)] stroke-[var(--ink)]" strokeWidth={2} />
      <SvgLabel at={{ x: 280, y: 52 }} text="V" size={14} />
      <path d="M 200 40 L 240 40" className="stroke-[var(--atom-alt)]" strokeWidth={2} markerEnd="url(#eArrow)" />
      <SvgLabel at={{ x: 196, y: 26 }} text="e^−" size={12} tone="alt" anchor="end" />

      {/* salt bridge */}
      <path
        d="M 190 150 L 190 108 Q 190 92 208 92 L 352 92 Q 370 92 370 108 L 370 150"
        className="fill-none stroke-[var(--atom-ligand)]"
        strokeWidth={13}
        strokeLinecap="round"
      />
      <SvgLabel at={{ x: 280, y: 112 }} text="salt bridge (KCl)" size={11} tone="muted" weight={500} />

      {/* electrode labels */}
      <SvgLabel at={{ x: 137, y: 80 }} text="anode (−)" size={12} tone="muted" weight={600} />
      <SvgLabel at={{ x: 423, y: 80 }} text="cathode (+)" size={12} tone="muted" weight={600} />
      <SvgLabel at={{ x: 150, y: 220 }} text="Zn → Zn^2+ + 2e^−" size={11} tone="muted" weight={500} anchor="start" />
      <SvgLabel at={{ x: 330, y: 220 }} text="Cu^2+ + 2e^− → Cu" size={11} tone="muted" weight={500} anchor="start" />

      <defs>
        <marker id="eArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" className="fill-[var(--atom-alt)]" />
        </marker>
      </defs>
    </Figure>
  );
}

export function MolarConductivityPlot() {
  const W = 460;
  const H = 280;
  return (
    <Figure
      width={W}
      height={H}
      caption="Molar conductivity against √c. A strong electrolyte (KCl) gives a straight line that extrapolates to Λ°_m; a weak electrolyte (CH3COOH) rises steeply near infinite dilution, so Λ°_m must be found indirectly from Kohlrausch's law."
      label="Molar conductivity versus square root of concentration"
    >
      <Axes x0={64} y0={228} x1={420} y1={34} xLabel="√c / (mol L^−1)^{1/2}" yLabel="Λ_m" />
      {/* strong electrolyte */}
      <line x1={64} y1={70} x2={392} y2={158} className="stroke-[var(--atom-metal)]" strokeWidth={2.4} strokeLinecap="round" />
      <SvgLabel at={{ x: 300, y: 118 }} text="KCl (strong)" size={12} tone="accent" weight={600} />
      {/* weak electrolyte */}
      <path
        d="M 66 52 C 86 168 120 206 392 214"
        className="fill-none stroke-[var(--atom-alt)]"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <SvgLabel at={{ x: 300, y: 196 }} text="CH3COOH (weak)" size={12} tone="alt" weight={600} />
      <circle cx={64} cy={70} r={4} className="fill-[var(--atom-metal)]" />
      <SvgLabel at={{ x: 50, y: 62 }} text="Λ°_m" size={12} anchor="end" />
    </Figure>
  );
}

/* ================================================================== */
/* Chemical kinetics                                                   */
/* ================================================================== */

export function OrderPlots() {
  const W = 620;
  const H = 250;
  return (
    <Figure
      width={W}
      height={H}
      caption="Integrated rate-law plots. Zero order: [R] falls linearly with t. First order: ln[R] falls linearly with t, slope = −k. These straight-line tests are how the order of a reaction is confirmed experimentally."
      label="Zero order and first order integrated rate plots"
    >
      {/* Zero order */}
      <Axes x0={64} y0={190} x1={268} y1={40} xLabel="t" yLabel="[R]" />
      <line x1={64} y1={58} x2={244} y2={176} className="stroke-[var(--atom-metal)]" strokeWidth={2.4} strokeLinecap="round" />
      <SvgLabel at={{ x: 190, y: 74 }} text="slope = −k" size={11} tone="muted" weight={500} />
      <text x={166} y={232} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        zero order
      </text>

      {/* First order */}
      <Axes x0={396} y0={190} x1={594} y1={40} xLabel="t" yLabel="ln[R]" />
      <line x1={396} y1={58} x2={572} y2={176} className="stroke-[var(--atom-alt)]" strokeWidth={2.4} strokeLinecap="round" />
      <SvgLabel at={{ x: 520, y: 74 }} text="slope = −k" size={11} tone="muted" weight={500} />
      <text x={494} y={232} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        first order
      </text>
    </Figure>
  );
}

export function ActivationEnergyProfile() {
  const W = 500;
  const H = 300;
  return (
    <Figure
      width={W}
      height={H}
      caption="Energy profile. E_a is the barrier the reactants must climb; a catalyst provides an alternative path with a **lower** E_a, so more molecules have enough energy and the rate rises — but ΔH, and therefore the position of equilibrium, is unchanged."
      label="Reaction energy profile with and without a catalyst"
    >
      <Axes x0={64} y0={250} x1={456} y1={30} xLabel="reaction coordinate" yLabel="potential energy" />
      {/* uncatalysed */}
      <path
        d="M 76 196 C 150 196 158 56 240 56 C 322 56 330 216 420 216"
        className="fill-none stroke-[var(--atom-metal)]"
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      {/* catalysed */}
      <path
        d="M 76 196 C 150 196 164 118 240 118 C 316 118 330 216 420 216"
        className="fill-none stroke-[var(--atom-alt)]"
        strokeWidth={2.4}
        strokeDasharray="7 5"
        strokeLinecap="round"
      />
      <line x1={110} y1={196} x2={110} y2={56} className="stroke-[var(--bond-faint)]" strokeWidth={1.4} strokeDasharray="4 4" />
      <SvgLabel at={{ x: 150, y: 120 }} text="E_a" size={13} tone="accent" />
      <SvgLabel at={{ x: 264, y: 136 }} text="E_a with catalyst" size={11} tone="alt" weight={500} anchor="start" />
      <line x1={396} y1={196} x2={396} y2={216} className="stroke-[var(--bond-faint)]" strokeWidth={1.4} />
      <SvgLabel at={{ x: 64, y: 196 }} text="reactants" size={11} tone="muted" weight={500} anchor="start" dy={-14} />
      <SvgLabel at={{ x: 424, y: 232 }} text="products" size={11} tone="muted" weight={500} anchor="end" />
      <SvgLabel at={{ x: 440, y: 206 }} text="ΔH" size={12} tone="muted" />
    </Figure>
  );
}

export function ArrheniusPlot() {
  const W = 420;
  const H = 270;
  return (
    <Figure
      width={W}
      height={H}
      caption="Arrhenius plot: ln k against 1/T is a straight line of slope −E_a/R and intercept ln A. Two (k, T) pairs are enough to find E_a from log(k2/k1) = E_a(T2−T1) / (2.303 R T1 T2)."
      label="Arrhenius plot of ln k against reciprocal temperature"
    >
      <Axes x0={70} y0={212} x1={380} y1={34} xLabel="1/T (K^−1)" yLabel="ln k" />
      <line x1={82} y1={56} x2={352} y2={192} className="stroke-[var(--atom-metal)]" strokeWidth={2.6} strokeLinecap="round" />
      <SvgLabel at={{ x: 258, y: 104 }} text="slope = −E_a/R" size={12} tone="accent" weight={600} />
      <circle cx={82} cy={56} r={4} className="fill-[var(--atom-alt)]" />
      <SvgLabel at={{ x: 62, y: 50 }} text="ln A" size={12} anchor="end" />
    </Figure>
  );
}

/* ================================================================== */
/* Solutions                                                           */
/* ================================================================== */

export function RaoultDeviations() {
  const W = 680;
  const H = 280;

  const panel = (x0: number, title: string, kind: "ideal" | "pos" | "neg") => {
    const x1 = x0 + 176;
    const yTop = 58;
    const yBot = 206;
    const pA = { x: x0, y: 106 }; // pure A end
    const pB = { x: x1, y: 82 };
    const curve =
      kind === "ideal"
        ? `M ${pA.x} ${pA.y} L ${pB.x} ${pB.y}`
        : kind === "pos"
          ? `M ${pA.x} ${pA.y} C ${x0 + 60} ${yTop} ${x1 - 60} ${yTop} ${pB.x} ${pB.y}`
          : `M ${pA.x} ${pA.y} C ${x0 + 60} ${yBot - 10} ${x1 - 60} ${yBot - 10} ${pB.x} ${pB.y}`;
    return (
      <g>
        <Axes x0={x0} y0={yBot} x1={x1 + 16} y1={40} xLabel="x_B →" yLabel="" />
        <line x1={pA.x} y1={pA.y} x2={pB.x} y2={pB.y} className="stroke-[var(--bond-faint)]" strokeWidth={1.8} strokeDasharray="5 4" />
        <path d={curve} className="fill-none stroke-[var(--atom-alt)]" strokeWidth={2.6} strokeLinecap="round" />
        <text x={x0 + 88} y={244} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
          {title}
        </text>
      </g>
    );
  };

  return (
    <Figure
      width={W}
      height={H}
      caption="Dashed line = Raoult's law. **Positive deviation** (ethanol + acetone: weaker A–B forces, ΔH_mix > 0) gives a minimum-boiling azeotrope. **Negative deviation** (chloroform + acetone: H-bonding between unlike molecules, ΔH_mix < 0) gives a maximum-boiling azeotrope."
      label="Ideal, positive and negative deviations from Raoult's law"
    >
      {panel(66, "ideal", "ideal")}
      {panel(282, "positive deviation", "pos")}
      {panel(498, "negative deviation", "neg")}
      <g transform="rotate(-90 26 130)">
        <SvgLabel at={{ x: 26, y: 130 }} text="vapour pressure" size={12} tone="muted" weight={500} />
      </g>
    </Figure>
  );
}

export function OsmosisDiagram() {
  const W = 460;
  const H = 300;
  return (
    <Figure
      width={W}
      height={H}
      caption="Osmosis: solvent flows through the semipermeable membrane into the solution. The excess pressure that just stops that flow is the osmotic pressure π = CRT. Applying a pressure greater than π reverses the flow — the basis of desalination by reverse osmosis."
      label="Osmosis across a semipermeable membrane"
    >
      <path d="M 70 70 L 70 250 L 390 250 L 390 70" className="fill-none stroke-[var(--ink-muted)]" strokeWidth={2} />
      {/* membrane */}
      <line x1={230} y1={70} x2={230} y2={250} className="stroke-[var(--atom-metal)]" strokeWidth={4} strokeDasharray="6 4" />
      <SvgLabel at={{ x: 230, y: 54 }} text="semipermeable membrane" size={11} tone="muted" weight={500} />
      {/* liquid levels */}
      <rect x={72} y={168} width={156} height={80} className="fill-[var(--plane-fill)]" />
      <rect x={232} y={120} width={156} height={128} className="fill-[var(--plane-fill)]" />
      <line x1={72} y1={168} x2={228} y2={168} className="stroke-[var(--atom-ligand)]" strokeWidth={2.4} />
      <line x1={232} y1={120} x2={388} y2={120} className="stroke-[var(--atom-alt)]" strokeWidth={2.4} />
      <SvgLabel at={{ x: 150, y: 210 }} text="pure solvent" size={12} tone="muted" weight={500} />
      <SvgLabel at={{ x: 310, y: 190 }} text="solution" size={12} tone="muted" weight={500} />
      {/* flow arrow */}
      <path d="M 196 200 L 266 200" className="stroke-[var(--atom-alt)]" strokeWidth={2.4} markerEnd="url(#flowArrow)" />
      {/* osmotic head */}
      <line x1={410} y1={120} x2={410} y2={168} className="stroke-[var(--ink)]" strokeWidth={1.6} />
      <SvgLabel at={{ x: 424, y: 144 }} text="π" size={15} anchor="start" />
      <defs>
        <marker id="flowArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" className="fill-[var(--atom-alt)]" />
        </marker>
      </defs>
    </Figure>
  );
}

/* ================================================================== */
/* Coordination chemistry                                              */
/* ================================================================== */

export function CrystalFieldOctahedral() {
  const W = 480;
  const H = 300;
  const lvl = (x: number, y: number, w = 44) => (
    <line x1={x} y1={y} x2={x + w} y2={y} className="stroke-[var(--atom-metal)]" strokeWidth={3} strokeLinecap="round" />
  );
  return (
    <Figure
      width={W}
      height={H}
      caption="Crystal-field splitting in an octahedral field. The d_{x^2−y^2} and d_{z^2} orbitals point straight at the ligands, so they are raised by 0.6Δₒ; the t_{2g} set is lowered by 0.4Δₒ. Whether the complex is high- or low-spin depends on Δₒ against the pairing energy."
      label="Crystal field splitting diagram for an octahedral complex"
    >
      {/* free ion */}
      {lvl(52, 160, 64)}
      <SvgLabel at={{ x: 84, y: 182 }} text="free ion" size={11} tone="muted" weight={500} />

      {/* barycentre */}
      <line x1={172} y1={160} x2={330} y2={160} className="stroke-[var(--bond-faint)]" strokeWidth={1.6} strokeDasharray="5 4" />
      <SvgLabel at={{ x: 344, y: 160 }} text="barycentre" size={11} tone="muted" weight={500} anchor="start" />

      {/* eg */}
      {lvl(200, 92)}
      {lvl(256, 92)}
      <SvgLabel at={{ x: 278, y: 72 }} text="e_g" size={13} />
      {/* t2g */}
      {lvl(176, 214)}
      {lvl(228, 214)}
      {lvl(280, 214)}
      <SvgLabel at={{ x: 302, y: 236 }} text="t_{2g}" size={13} />

      {/* splitting bracket */}
      <line x1={150} y1={92} x2={150} y2={214} className="stroke-[var(--ink)]" strokeWidth={1.6} />
      <line x1={146} y1={92} x2={154} y2={92} className="stroke-[var(--ink)]" strokeWidth={1.6} />
      <line x1={146} y1={214} x2={154} y2={214} className="stroke-[var(--ink)]" strokeWidth={1.6} />
      <SvgLabel at={{ x: 132, y: 153 }} text="Δₒ" size={15} anchor="end" />
      <SvgLabel at={{ x: 396, y: 112 }} text="+0.6Δₒ" size={11} tone="muted" weight={500} />
      <SvgLabel at={{ x: 396, y: 206 }} text="−0.4Δₒ" size={11} tone="muted" weight={500} />
    </Figure>
  );
}

export function CisTransComplex() {
  const W = 540;
  const H = 300;
  return (
    <figure className="chem-figure">
      <div className="chem-figure-row">
        <SquarePlanar
          center="Pt"
          ligands={["NH3", "Cl", "Cl", "NH3"]}
          alt={[1, 2]}
          caption="cis-[Pt(NH3)2Cl2] — identical ligands adjacent (90°). This is cisplatin, the anticancer drug."
        />
        <SquarePlanar
          center="Pt"
          ligands={["NH3", "Cl", "NH3", "Cl"]}
          alt={[1, 3]}
          caption="trans-[Pt(NH3)2Cl2] — identical ligands opposite (180°), and biologically inactive."
        />
      </div>
      <figcaption className="chem-figcaption">
        Geometrical isomerism in a square planar MA₂B₂ complex. A tetrahedral MA₂B₂
        complex cannot show this, because all four positions are adjacent.
      </figcaption>
      <svg width={0} height={0} aria-hidden viewBox={`0 0 ${W} ${H}`} />
    </figure>
  );
}

export function OpticalIsomersEn() {
  return (
    <figure className="chem-figure">
      <div className="chem-figure-row">
        <Octahedral
          center="Co"
          ligands={["en", "en", "en", "en", "en", "en"]}
          caption="Λ (left-handed) form"
        />
        <Octahedral
          center="Co"
          ligands={["en", "en", "en", "en", "en", "en"]}
          alt={[2, 3]}
          caption="Δ (right-handed) form"
        />
      </div>
      <figcaption className="chem-figcaption">
        [Co(en)₃]³⁺ has no plane of symmetry, so the two propeller forms are
        non-superimposable mirror images — a pair of optical isomers
        (enantiomers) that rotate plane-polarised light in opposite directions.
      </figcaption>
    </figure>
  );
}

/* ================================================================== */
/* Biomolecules                                                        */
/* ================================================================== */

export function GlucoseHaworth() {
  const W = 620;
  const H = 300;

  const ring = (ox: number, anomer: "alpha" | "beta") => {
    // Haworth pyranose ring drawn in perspective: front edge bold.
    const p: Pt[] = [
      { x: ox + 34, y: 150 }, // C5 (left)
      { x: ox + 72, y: 118 }, // O (back-left)
      { x: ox + 148, y: 118 }, // C1 (back-right)
      { x: ox + 186, y: 150 }, // C2 (right)
      { x: ox + 148, y: 186 }, // C3 (front-right)
      { x: ox + 72, y: 186 }, // C4 (front-left)
    ];
    const anomOH = anomer === "alpha" ? { x: ox + 148, y: 78 } : { x: ox + 148, y: 78 };
    return (
      <g>
        {/* back edges thin, front edges bold */}
        <Bond from={p[0]} to={p[1]} />
        <Bond from={p[1]} to={p[2]} />
        <Bond from={p[2]} to={p[3]} />
        <line x1={p[3].x} y1={p[3].y} x2={p[4].x} y2={p[4].y} className="stroke-[var(--bond)]" strokeWidth={4} strokeLinecap="round" />
        <line x1={p[4].x} y1={p[4].y} x2={p[5].x} y2={p[5].y} className="stroke-[var(--bond)]" strokeWidth={4} strokeLinecap="round" />
        <line x1={p[5].x} y1={p[5].y} x2={p[0].x} y2={p[0].y} className="stroke-[var(--bond)]" strokeWidth={4} strokeLinecap="round" />

        <SvgLabel at={p[1]} text="O" size={13} />
        {/* C1 anomeric OH: down for alpha, up for beta */}
        <Bond
          from={p[2]}
          to={anomer === "alpha" ? { x: p[2].x, y: p[2].y + 46 } : anomOH}
          shrinkFrom={4}
          shrinkTo={11}
        />
        <SvgLabel
          at={anomer === "alpha" ? { x: p[2].x, y: p[2].y + 52 } : { x: p[2].x, y: p[2].y - 46 }}
          text="OH"
          size={12}
          tone="alt"
        />
        <SvgLabel at={{ x: p[2].x + 26, y: p[2].y + 8 }} text="C1" size={10} tone="muted" weight={500} />

        {/* the other hydroxyls */}
        <Bond from={p[3]} to={{ x: p[3].x, y: p[3].y + 40 }} shrinkFrom={4} shrinkTo={11} />
        <SvgLabel at={{ x: p[3].x, y: p[3].y + 46 }} text="OH" size={12} />
        <Bond from={p[4]} to={{ x: p[4].x, y: p[4].y - 44 }} shrinkFrom={4} shrinkTo={11} />
        <SvgLabel at={{ x: p[4].x + 2, y: p[4].y - 50 }} text="OH" size={12} />
        <Bond from={p[5]} to={{ x: p[5].x, y: p[5].y + 40 }} shrinkFrom={4} shrinkTo={11} />
        <SvgLabel at={{ x: p[5].x, y: p[5].y + 46 }} text="OH" size={12} />
        <Bond from={p[0]} to={{ x: p[0].x, y: p[0].y - 44 }} shrinkFrom={4} shrinkTo={14} />
        <SvgLabel at={{ x: p[0].x - 4, y: p[0].y - 52 }} text="CH2OH" size={12} />

        <text x={ox + 110} y={258} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
          {anomer === "alpha" ? "α-D-glucopyranose" : "β-D-glucopyranose"}
        </text>
        <text x={ox + 110} y={278} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
          {anomer === "alpha" ? "C-1 OH below the ring" : "C-1 OH above the ring"}
        </text>
      </g>
    );
  };

  return (
    <Figure
      width={W}
      height={H}
      caption="The two anomers of D-glucose. They differ **only** in the orientation of the OH at C-1, the anomeric carbon, and interconvert in solution through the open-chain form — which is why glucose shows mutarotation."
      label="Haworth projections of alpha and beta D-glucopyranose"
    >
      {ring(20, "alpha")}
      <line x1={310} y1={40} x2={310} y2={230} className="stroke-[var(--bond-faint)]" strokeWidth={1.4} strokeDasharray="5 5" />
      {ring(326, "beta")}
    </Figure>
  );
}

export function PeptideBond() {
  const W = 620;
  const H = 230;
  return (
    <Figure
      width={W}
      height={H}
      caption="Two α-amino acids condense: the –COOH of one and the –NH2 of the next lose a molecule of water to form the –CO–NH– **peptide (amide) linkage**. Repeating this gives the primary structure of a protein."
      label="Formation of a peptide bond between two amino acids"
    >
      <SvgLabel at={{ x: 92, y: 96 }} text="H2N–CHR–COOH" size={14} />
      <SvgLabel at={{ x: 246, y: 96 }} text="+" size={15} tone="muted" />
      <SvgLabel at={{ x: 372, y: 96 }} text="H2N–CHR'–COOH" size={14} />
      <text x={310} y={146} textAnchor="middle" fontSize={20} className="fill-[var(--ink-muted)]">
        {"↓"}
      </text>
      <SvgLabel at={{ x: 350, y: 146 }} text="−H2O" size={12} tone="muted" weight={500} anchor="start" />
      <SvgLabel at={{ x: 310, y: 190 }} text="H2N–CHR–CO–NH–CHR'–COOH" size={15} />
      <rect x={358} y={174} width={74} height={30} rx={6} className="fill-none stroke-[var(--atom-alt)]" strokeWidth={1.8} />
      <SvgLabel at={{ x: 395, y: 216 }} text="peptide bond" size={11} tone="alt" weight={600} />
    </Figure>
  );
}

export function DnaDoubleHelix() {
  const W = 420;
  const H = 320;
  const turns = 2.4;
  const pts = (phase: number) =>
    Array.from({ length: 70 }, (_, i) => {
      const t = i / 69;
      const y = 26 + t * 268;
      const x = 210 + 72 * Math.sin(t * turns * 2 * Math.PI + phase);
      return `${x},${y}`;
    }).join(" ");

  return (
    <Figure
      width={W}
      height={H}
      caption="The Watson–Crick double helix: two antiparallel polynucleotide strands wound about a common axis, held together by hydrogen bonds between complementary bases — A pairs with T (two H-bonds) and G pairs with C (three H-bonds)."
      label="DNA double helix with complementary base pairs"
    >
      <polyline points={pts(0)} className="fill-none stroke-[var(--atom-metal)]" strokeWidth={3.4} strokeLinecap="round" />
      <polyline points={pts(Math.PI)} className="fill-none stroke-[var(--atom-alt)]" strokeWidth={3.4} strokeLinecap="round" />
      {Array.from({ length: 13 }, (_, i) => {
        const t = (i + 0.5) / 13;
        const y = 26 + t * 268;
        const x1 = 210 + 72 * Math.sin(t * turns * 2 * Math.PI);
        const x2 = 210 + 72 * Math.sin(t * turns * 2 * Math.PI + Math.PI);
        const pair = i % 2 === 0 ? "A–T" : "G–C";
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              className="stroke-[var(--bond-faint)]"
              strokeWidth={1.8}
              strokeDasharray="3 3"
            />
            {Math.abs(x1 - x2) > 60 && (
              <text
                x={(x1 + x2) / 2}
                y={y - 5}
                textAnchor="middle"
                fontSize={9.5}
                className="fill-[var(--ink-muted)]"
              >
                {pair}
              </text>
            )}
          </g>
        );
      })}
      <SvgLabel at={{ x: 30, y: 30 }} text="5'" size={12} tone="muted" anchor="start" />
      <SvgLabel at={{ x: 390, y: 30 }} text="3'" size={12} tone="muted" anchor="end" />
      <SvgLabel at={{ x: 30, y: 300 }} text="3'" size={12} tone="muted" anchor="start" />
      <SvgLabel at={{ x: 390, y: 300 }} text="5'" size={12} tone="muted" anchor="end" />
    </Figure>
  );
}

export function AlphaHelix() {
  const W = 300;
  const H = 320;
  const pts = Array.from({ length: 120 }, (_, i) => {
    const t = i / 119;
    const y = 30 + t * 258;
    const x = 150 + 58 * Math.sin(t * 3.6 * 2 * Math.PI);
    return `${x},${y}`;
  }).join(" ");
  return (
    <Figure
      width={W}
      height={H}
      caption="The α-helix is a **secondary** structure: the polypeptide chain coils as a right-handed screw, stabilised by intramolecular hydrogen bonds between the C=O of one residue and the N–H four residues along the chain."
      label="Alpha helix secondary structure of a protein"
    >
      <polyline points={pts} className="fill-none stroke-[var(--atom-metal)]" strokeWidth={4} strokeLinecap="round" />
      {Array.from({ length: 7 }, (_, i) => {
        const y = 54 + i * 36;
        return (
          <g key={i}>
            <line x1={118} y1={y} x2={182} y2={y} className="stroke-[var(--atom-alt)]" strokeWidth={1.6} strokeDasharray="3 3" />
          </g>
        );
      })}
      <SvgLabel at={{ x: 236, y: 160 }} text="H-bonds" size={11} tone="alt" weight={600} anchor="start" />
    </Figure>
  );
}

export const PhysicalStructures = {
  "galvanic-cell": GalvanicCell,
  "molar-conductivity": MolarConductivityPlot,
  "order-plots": OrderPlots,
  "activation-energy": ActivationEnergyProfile,
  "arrhenius-plot": ArrheniusPlot,
  "raoult-deviations": RaoultDeviations,
  osmosis: OsmosisDiagram,
  "cft-octahedral": CrystalFieldOctahedral,
  "cis-trans-complex": CisTransComplex,
  "optical-isomers-en": OpticalIsomersEn,
  "glucose-haworth": GlucoseHaworth,
  "peptide-bond": PeptideBond,
  "dna-helix": DnaDoubleHelix,
  "alpha-helix": AlphaHelix,
} as const;
