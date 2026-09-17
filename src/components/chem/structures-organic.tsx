"use client";

/**
 * Named organic structures referenced from the question bank by id.
 * Each one is a self-contained figure; see `structures.tsx` for the registry.
 */

import { Arene, Chain, Figure, Bond, SvgLabel, Stereocentre, EnantiomerPair } from "./organic";

type Pt = { x: number; y: number };

/* ================================================================== */
/* Haloarenes                                                          */
/* ================================================================== */

export function Chlorobenzene() {
  return (
    <Arene
      substituents={[{ pos: 1, label: "Cl", highlight: true }]}
      caption="Chlorobenzene — the C–Cl bond is shortened by resonance"
      label="Structure of chlorobenzene"
    />
  );
}

/**
 * The four resonance contributors of chlorobenzene. This is the diagram the
 * "why is C–Cl in haloarenes shorter / less reactive" questions hang on.
 */
export function ChlorobenzeneResonance() {
  const W = 760;
  const H = 250;
  const centres = [95, 265, 435, 605];

  // Contributors II, III and IV carry the negative charge at the ortho (2),
  // para (4) and other ortho (6) positions respectively — never at meta.
  const negPos: Record<number, number> = { 1: 2, 2: 4, 3: 6 };
  const R = 46;

  /** Where to park the charge symbol: just outside its ring vertex. */
  function chargeAt(cx: number, cy: number, pos: number) {
    const angle = (-90 + (pos - 1) * 60) * (Math.PI / 180);
    return {
      x: cx + (R + 18) * Math.cos(angle),
      y: cy + (R + 18) * Math.sin(angle),
    };
  }

  return (
    <Figure
      width={W}
      height={H}
      caption="Resonance in chlorobenzene: the C–Cl bond acquires partial double-bond character, so it is shorter and stronger than in haloalkanes and is not replaced easily. The negative charge appears only at the **ortho** and **para** positions."
      label="Resonance structures of chlorobenzene"
    >
      {centres.map((cx, i) => (
        <g key={i}>
          <Arene
            bare
            cx={cx}
            cy={104}
            kekule
            substituents={[
              i === 0
                ? { pos: 1, label: "Cl" }
                : { pos: 1, label: "Cl^+", order: 2, highlight: true },
            ]}
          />
          {i > 0 && (
            <SvgLabel at={chargeAt(cx, 104, negPos[i])} text="⊖" tone="alt" size={17} />
          )}
          <text
            x={cx}
            y={H - 22}
            textAnchor="middle"
            fontSize={12}
            className="fill-[var(--ink-muted)]"
          >
            {["I", "II", "III", "IV"][i]}
          </text>
          {i < 3 && (
            <text
              x={cx + 85}
              y={104}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={20}
              className="fill-[var(--ink-muted)]"
            >
              {"\u27F7"}
            </text>
          )}
        </g>
      ))}
    </Figure>
  );
}

/** Side-by-side comparison of the C–Cl bond in a haloalkane and a haloarene. */
export function HaloalkaneVsHaloarene() {
  const W = 470;
  const H = 240;
  return (
    <Figure
      width={W}
      height={H}
      caption="sp^3 carbon in chloromethane vs sp^2 carbon in chlorobenzene. More s-character plus resonance makes the haloarene C–Cl bond shorter (169 pm vs 177 pm) and far less reactive."
      label="Comparison of carbon–chlorine bonds in haloalkanes and haloarenes"
    >
      {/* Haloalkane */}
      <Bond from={{ x: 78, y: 96 }} to={{ x: 148, y: 96 }} shrinkFrom={22} shrinkTo={12} />
      <SvgLabel at={{ x: 66, y: 96 }} text="H3C" size={15} />
      <SvgLabel at={{ x: 158, y: 96 }} text="Cl" size={15} tone="alt" />
      <SvgLabel at={{ x: 112, y: 128 }} text="177 pm" size={11} tone="muted" weight={500} />
      <SvgLabel at={{ x: 112, y: 66 }} text="sp^3 C" size={12} tone="muted" weight={500} />
      <text x={112} y={H - 26} textAnchor="middle" fontSize={12} className="fill-[var(--ink-muted)]">
        haloalkane
      </text>

      <line
        x1={236}
        y1={26}
        x2={236}
        y2={H - 48}
        className="stroke-[var(--bond-faint)]"
        strokeWidth={1.4}
        strokeDasharray="5 5"
      />

      {/* Haloarene */}
      <Arene
        bare
        cx={352}
        cy={100}
        substituents={[{ pos: 1, label: "Cl", partial: true, highlight: true }]}
      />
      <SvgLabel at={{ x: 412, y: 46 }} text="169 pm" size={11} tone="muted" weight={500} />
      <SvgLabel at={{ x: 352, y: 172 }} text="sp^2 C + resonance" size={12} tone="muted" weight={500} />
      <text x={352} y={H - 26} textAnchor="middle" fontSize={12} className="fill-[var(--ink-muted)]">
        haloarene
      </text>
    </Figure>
  );
}

/** ortho / meta / para dichlorobenzene — the classic melting-point question. */
export function Dichlorobenzenes() {
  const W = 620;
  const H = 240;
  const sets: { cx: number; subs: number[]; name: string; mp: string }[] = [
    { cx: 105, subs: [1, 2], name: "ortho (1,2)", mp: "m.p. 256 K" },
    { cx: 310, subs: [1, 3], name: "meta (1,3)", mp: "m.p. 249 K" },
    { cx: 515, subs: [1, 4], name: "para (1,4)", mp: "m.p. 323 K" },
  ];
  return (
    <Figure
      width={W}
      height={H}
      caption="The para isomer is the most symmetrical, packs best in the crystal lattice and therefore melts highest — even though all three have almost the same boiling point."
      label="ortho, meta and para dichlorobenzene"
    >
      {sets.map((s, i) => (
        <g key={i}>
          <Arene
            bare
            cx={s.cx}
            cy={96}
            substituents={s.subs.map((p) => ({ pos: p, label: "Cl", highlight: i === 2 }))}
          />
          <text x={s.cx} y={190} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
            {s.name}
          </text>
          <text x={s.cx} y={210} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
            {s.mp}
          </text>
        </g>
      ))}
    </Figure>
  );
}

/* ================================================================== */
/* Substitution mechanisms                                             */
/* ================================================================== */

/** One methyl carbon of the SN2 picture, with its three hydrogens. */
function Sn2Carbon({ cx, planar = false }: { cx: number; planar?: boolean }) {
  const C = { x: cx, y: 112 };
  return (
    <g>
      <Bond from={C} to={{ x: cx, y: 58 }} shrinkFrom={11} shrinkTo={10} />
      <Bond from={C} to={{ x: cx - 40, y: 156 }} shrinkFrom={11} shrinkTo={10} />
      <Bond from={C} to={{ x: cx + 40, y: 156 }} shrinkFrom={11} shrinkTo={10} />
      <SvgLabel at={{ x: cx, y: 58 }} text="H" size={13} />
      <SvgLabel at={{ x: cx - 40, y: 156 }} text="H" size={13} />
      <SvgLabel at={{ x: cx + 40, y: 156 }} text="H" size={13} />
      <SvgLabel at={C} text="C" size={15} tone="accent" />
      {planar && (
        <text x={cx} y={196} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
          planar carbon
        </text>
      )}
    </g>
  );
}

/** SN2: backside attack through a trigonal bipyramidal transition state. */
export function Sn2Mechanism() {
  const W = 700;
  const H = 250;
  const stage = (cx: number) => ({ x: cx, y: 112 });

  return (
    <Figure
      width={W}
      height={H}
      caption="S_N2: the nucleophile attacks from the side opposite the leaving group. Bond making and breaking are simultaneous, so the reaction is second order and the configuration is **inverted** (Walden inversion)."
      label="SN2 mechanism with inversion of configuration"
    >
      {/* Reactant */}
      <Sn2Carbon cx={118} />
      <SvgLabel at={{ x: 28, y: 112 }} text="HO^−" size={14} tone="alt" />
      <Bond from={{ x: 176, y: 112 }} to={{ x: 210, y: 112 }} />
      <SvgLabel at={{ x: 222, y: 112 }} text="Br" size={14} />
      <path
        d="M 44 128 Q 78 152 100 122"
        className="fill-none stroke-[var(--atom-alt)]"
        strokeWidth={1.8}
        markerEnd="url(#arrowAlt)"
      />

      <text x={276} y={112} textAnchor="middle" dominantBaseline="central" fontSize={20} className="fill-[var(--ink-muted)]">
        {"⟶"}
      </text>

      {/* Transition state */}
      <Sn2Carbon cx={378} planar />
      <SvgLabel at={{ x: 300, y: 112 }} text="HO" size={13} tone="alt" />
      <SvgLabel at={{ x: 458, y: 112 }} text="Br" size={13} />
      <line x1={316} y1={112} x2={362} y2={112} className="stroke-[var(--bond)]" strokeWidth={1.7} strokeDasharray="4 3" />
      <line x1={394} y1={112} x2={442} y2={112} className="stroke-[var(--bond)]" strokeWidth={1.7} strokeDasharray="4 3" />
      <SvgLabel at={{ x: 378, y: 30 }} text="[ transition state ]^{‡}" size={12} tone="muted" weight={500} />

      <text x={512} y={112} textAnchor="middle" dominantBaseline="central" fontSize={20} className="fill-[var(--ink-muted)]">
        {"⟶"}
      </text>

      {/* Product — inverted */}
      <g>
        <Bond from={stage(606)} to={{ x: 606, y: 58 }} shrinkFrom={11} shrinkTo={10} />
        <Bond from={stage(606)} to={{ x: 566, y: 156 }} shrinkFrom={11} shrinkTo={10} />
        <Bond from={stage(606)} to={{ x: 646, y: 156 }} shrinkFrom={11} shrinkTo={10} />
        <SvgLabel at={{ x: 606, y: 58 }} text="H" size={13} />
        <SvgLabel at={{ x: 566, y: 156 }} text="H" size={13} />
        <SvgLabel at={{ x: 646, y: 156 }} text="H" size={13} />
        <SvgLabel at={stage(606)} text="C" size={15} tone="accent" />
        <Bond from={stage(606)} to={{ x: 672, y: 112 }} shrinkFrom={11} shrinkTo={14} />
        <SvgLabel at={{ x: 678, y: 112 }} text="OH" size={13} tone="alt" />
        <SvgLabel at={{ x: 606, y: 196 }} text="+ Br^−" size={12} tone="muted" weight={500} />
      </g>

      <defs>
        <marker id="arrowAlt" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" className="fill-[var(--atom-alt)]" />
        </marker>
      </defs>
    </Figure>
  );
}

/** SN1: rate-determining ionisation to a planar carbocation, then racemisation. */
export function Sn1Mechanism() {
  const W = 700;
  const H = 260;
  return (
    <Figure
      width={W}
      height={H}
      caption="S_N1: slow ionisation gives a **planar** carbocation, which the nucleophile attacks equally from either face — so an optically pure substrate gives a racemic mixture. Rate depends only on the halide, hence first order."
      label="SN1 mechanism via a planar carbocation"
    >
      {/* Step 1 */}
      <SvgLabel at={{ x: 82, y: 100 }} text="(CH3)3C–Br" size={15} />
      <text x={190} y={100} textAnchor="middle" dominantBaseline="central" fontSize={20} className="fill-[var(--ink-muted)]">
        {"⟶"}
      </text>
      <SvgLabel at={{ x: 190, y: 76 }} text="slow" size={11} tone="muted" weight={500} />
      <SvgLabel at={{ x: 190, y: 126 }} text="–Br^−" size={11} tone="muted" weight={500} />

      {/* Planar carbocation */}
      <g>
        <Bond from={{ x: 300, y: 100 }} to={{ x: 300, y: 46 }} shrinkFrom={12} shrinkTo={16} />
        <Bond from={{ x: 300, y: 100 }} to={{ x: 254, y: 148 }} shrinkFrom={12} shrinkTo={16} />
        <Bond from={{ x: 300, y: 100 }} to={{ x: 346, y: 148 }} shrinkFrom={12} shrinkTo={16} />
        <SvgLabel at={{ x: 300, y: 46 }} text="CH3" size={12} />
        <SvgLabel at={{ x: 250, y: 148 }} text="CH3" size={12} />
        <SvgLabel at={{ x: 350, y: 148 }} text="CH3" size={12} />
        <SvgLabel at={{ x: 300, y: 100 }} text="C^+" size={16} tone="accent" />
        <ellipse
          cx={300}
          cy={100}
          rx={62}
          ry={20}
          className="fill-none stroke-[var(--bond-faint)]"
          strokeWidth={1.4}
          strokeDasharray="4 4"
        />
        <SvgLabel at={{ x: 300, y: 196 }} text="planar, sp^2" size={11} tone="muted" weight={500} />
      </g>

      <text x={418} y={100} textAnchor="middle" dominantBaseline="central" fontSize={20} className="fill-[var(--ink-muted)]">
        {"⟶"}
      </text>
      <SvgLabel at={{ x: 418, y: 76 }} text="fast" size={11} tone="muted" weight={500} />
      <SvgLabel at={{ x: 418, y: 126 }} text="OH^−" size={11} tone="alt" weight={500} />

      {/* The nucleophile attacks either face of the planar cation */}
      <path
        d="M 404 96 Q 368 62 330 84"
        className="fill-none stroke-[var(--atom-alt)]"
        strokeWidth={1.7}
        markerEnd="url(#arrowAlt2)"
      />
      <path
        d="M 404 110 Q 368 146 330 120"
        className="fill-none stroke-[var(--atom-alt)]"
        strokeWidth={1.7}
        markerEnd="url(#arrowAlt2)"
      />

      <SvgLabel at={{ x: 560, y: 84 }} text="(CH3)3C–OH" size={14} />
      <SvgLabel at={{ x: 560, y: 120 }} text="racemic mixture" size={12} tone="muted" weight={500} />

      <defs>
        <marker id="arrowAlt2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0, 7 3.5, 0 7" className="fill-[var(--atom-alt)]" />
        </marker>
      </defs>
    </Figure>
  );
}

/* ================================================================== */
/* Other haloalkane structures                                         */
/* ================================================================== */

export function AllylVinylBenzylHalides() {
  const W = 620;
  const H = 230;
  return (
    <Figure
      width={W}
      height={H}
      caption="Allylic and benzylic halides ionise readily (resonance-stabilised carbocation) so they are very reactive; vinylic and aryl halides are unreactive because the C–X bond has partial double-bond character."
      label="Allyl, vinyl and benzyl halides"
    >
      {/* Allyl */}
      <Bond from={{ x: 42, y: 92 }} to={{ x: 84, y: 66 }} order={2} />
      <Bond from={{ x: 84, y: 66 }} to={{ x: 126, y: 92 }} />
      <Bond from={{ x: 126, y: 92 }} to={{ x: 158, y: 92 }} shrinkTo={12} />
      <SvgLabel at={{ x: 34, y: 92 }} text="CH2" size={13} anchor="end" />
      <SvgLabel at={{ x: 166, y: 92 }} text="Cl" size={13} tone="alt" anchor="start" />
      <text x={100} y={162} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        allyl chloride
      </text>
      <text x={100} y={182} textAnchor="middle" fontSize={11} className="fill-[var(--atom-alt)]">
        very reactive
      </text>

      {/* Vinyl */}
      <Bond from={{ x: 248, y: 92 }} to={{ x: 300, y: 92 }} order={2} />
      <Bond from={{ x: 300, y: 92 }} to={{ x: 336, y: 92 }} shrinkTo={12} partial />
      <SvgLabel at={{ x: 240, y: 92 }} text="CH2" size={13} anchor="end" />
      <SvgLabel at={{ x: 344, y: 92 }} text="Cl" size={13} anchor="start" />
      <text x={296} y={162} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        vinyl chloride
      </text>
      <text x={296} y={182} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
        unreactive
      </text>

      {/* Benzyl */}
      <Arene bare cx={478} cy={92} />
      <Bond from={{ x: 524, y: 92 }} to={{ x: 566, y: 92 }} shrinkTo={16} />
      <SvgLabel at={{ x: 578, y: 92 }} text="CH2Cl" size={13} tone="alt" anchor="middle" />
      <text x={498} y={162} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        benzyl chloride
      </text>
      <text x={498} y={182} textAnchor="middle" fontSize={11} className="fill-[var(--atom-alt)]">
        very reactive
      </text>
    </Figure>
  );
}

/* ================================================================== */
/* Phenol / aniline resonance                                          */
/* ================================================================== */

export function PhenolAcidity() {
  const W = 620;
  const H = 250;
  return (
    <Figure
      width={W}
      height={H}
      caption="Phenol is more acidic than an alcohol because the phenoxide ion is resonance-stabilised: the negative charge is delocalised over the ortho and para carbons of the ring."
      label="Resonance stabilisation of the phenoxide ion"
    >
      <Arene bare cx={96} cy={104} substituents={[{ pos: 1, label: "OH" }]} />
      <text x={200} y={104} textAnchor="middle" dominantBaseline="central" fontSize={18} className="fill-[var(--ink-muted)]">
        {"⇌"}
      </text>
      <SvgLabel at={{ x: 200, y: 78 }} text="−H^+" size={11} tone="muted" weight={500} />

      <Arene bare cx={306} cy={104} substituents={[{ pos: 1, label: "O^−", highlight: true }]} />
      <text x={410} y={104} textAnchor="middle" dominantBaseline="central" fontSize={18} className="fill-[var(--ink-muted)]">
        {"⟷"}
      </text>
      <Arene
        bare
        cx={516}
        cy={104}
        kekule
        substituents={[{ pos: 1, label: "O", order: 2, highlight: true }]}
      />
      <SvgLabel at={{ x: 580, y: 150 }} text="⊖" size={15} tone="alt" />

      <text x={W / 2} y={H - 22} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
        negative charge delocalised into the ring
      </text>
    </Figure>
  );
}

export function AnilineBasicity() {
  const W = 560;
  const H = 240;
  return (
    <Figure
      width={W}
      height={H}
      caption="In aniline the lone pair on nitrogen is delocalised into the ring, so it is far less available for donation — aniline is a **weaker** base than aliphatic amines such as ethylamine."
      label="Resonance in aniline reduces its basicity"
    >
      <Arene bare cx={108} cy={100} substituents={[{ pos: 1, label: "NH2", highlight: true }]} />
      <text x={222} y={100} textAnchor="middle" dominantBaseline="central" fontSize={18} className="fill-[var(--ink-muted)]">
        {"⟷"}
      </text>
      <Arene
        bare
        cx={336}
        cy={100}
        kekule
        substituents={[{ pos: 1, label: "NH2^+", order: 2, highlight: true }]}
      />
      <SvgLabel at={{ x: 400, y: 146 }} text="⊖" size={15} tone="alt" />
      <SvgLabel at={{ x: 470, y: 100 }} text="... and more" size={12} tone="muted" weight={500} />
      <text x={W / 2} y={H - 22} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
        lone pair tied up in the ring
      </text>
    </Figure>
  );
}

/* ================================================================== */
/* Stereochemistry                                                     */
/* ================================================================== */

export function ButanolEnantiomers() {
  return (
    <EnantiomerPair
      groups={{ up: "OH", down: "C2H5", wedge: "CH3", hash: "H", center: "C" }}
      caption="Butan-2-ol has four different groups on C-2, so it is chiral and exists as a pair of non-superimposable mirror images (enantiomers) that rotate plane-polarised light equally but oppositely."
      leftLabel="(R)-butan-2-ol"
      rightLabel="(S)-butan-2-ol"
    />
  );
}

export function ChiralCentre() {
  return (
    <Stereocentre
      groups={{ up: "Br", down: "H", wedge: "CH3", hash: "C2H5", center: "C" }}
      caption="A carbon bonded to four **different** groups is a chiral (asymmetric) centre — the molecule has no plane of symmetry and is optically active."
    />
  );
}

/* ================================================================== */
/* Simple named molecules used across chapters                         */
/* ================================================================== */

export function Phenol() {
  return <Arene substituents={[{ pos: 1, label: "OH" }]} caption="Phenol" label="Structure of phenol" />;
}

export function Aniline() {
  return <Arene substituents={[{ pos: 1, label: "NH2" }]} caption="Aniline" label="Structure of aniline" />;
}

export function Anisole() {
  return <Arene substituents={[{ pos: 1, label: "OCH3" }]} caption="Anisole (methoxybenzene)" label="Structure of anisole" />;
}

export function Benzaldehyde() {
  return (
    <Arene
      substituents={[{ pos: 1, label: "CHO" }]}
      caption="Benzaldehyde"
      label="Structure of benzaldehyde"
    />
  );
}

export function BenzoicAcid() {
  return (
    <Arene
      substituents={[{ pos: 1, label: "COOH" }]}
      caption="Benzoic acid"
      label="Structure of benzoic acid"
    />
  );
}

export function Nitrobenzene() {
  return (
    <Arene substituents={[{ pos: 1, label: "NO2" }]} caption="Nitrobenzene" label="Structure of nitrobenzene" />
  );
}

export function Acetophenone() {
  return (
    <Arene
      substituents={[{ pos: 1, label: "COCH3" }]}
      caption="Acetophenone (1-phenylethanone)"
      label="Structure of acetophenone"
    />
  );
}

export function BenzeneDiazoniumChloride() {
  return (
    <Arene
      substituents={[{ pos: 1, label: "N2^+Cl^−", highlight: true }]}
      width={270}
      caption="Benzenediazonium chloride — the gateway to a huge range of substituted arenes"
      label="Structure of benzenediazonium chloride"
    />
  );
}

/* ================================================================== */
/* Chains                                                              */
/* ================================================================== */

export function PropanoneVsPropanal() {
  const W = 470;
  const H = 210;
  const mk = (cx: number) => cx;
  void mk;
  return (
    <Figure
      width={W}
      height={H}
      caption="Both are C3H6O. The aldehyde has the carbonyl at the chain end with an H attached; the ketone has it between two carbons — which is why only the aldehyde is oxidised by Tollens' and Fehling's reagents."
      label="Propanal compared with propanone"
    >
      {/* Propanal */}
      <Bond from={{ x: 46, y: 104 }} to={{ x: 100, y: 78 }} shrinkFrom={20} />
      <Bond from={{ x: 100, y: 78 }} to={{ x: 154, y: 104 }} shrinkTo={18} />
      <Bond from={{ x: 154, y: 104 }} to={{ x: 154, y: 56 }} order={2} shrinkFrom={16} shrinkTo={10} />
      <SvgLabel at={{ x: 36, y: 104 }} text="CH3" size={13} />
      <SvgLabel at={{ x: 160, y: 104 }} text="CH" size={13} />
      <SvgLabel at={{ x: 154, y: 48 }} text="O" size={14} tone="alt" />
      <text x={104} y={162} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        propanal
      </text>
      <text x={104} y={182} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
        oxidised easily
      </text>

      <line x1={244} y1={30} x2={244} y2={H - 46} className="stroke-[var(--bond-faint)]" strokeWidth={1.4} strokeDasharray="5 5" />

      {/* Propanone */}
      <Bond from={{ x: 294, y: 104 }} to={{ x: 348, y: 78 }} shrinkFrom={20} shrinkTo={10} />
      <Bond from={{ x: 348, y: 78 }} to={{ x: 402, y: 104 }} shrinkFrom={10} shrinkTo={20} />
      <Bond from={{ x: 348, y: 78 }} to={{ x: 348, y: 40 }} order={2} shrinkFrom={10} shrinkTo={10} />
      <SvgLabel at={{ x: 284, y: 104 }} text="CH3" size={13} />
      <SvgLabel at={{ x: 412, y: 104 }} text="CH3" size={13} />
      <SvgLabel at={{ x: 348, y: 34 }} text="O" size={14} tone="alt" />
      <SvgLabel at={{ x: 348, y: 84 }} text="C" size={13} />
      <text x={348} y={162} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink)]">
        propanone
      </text>
      <text x={348} y={182} textAnchor="middle" fontSize={11} className="fill-[var(--ink-muted)]">
        resists oxidation
      </text>
    </Figure>
  );
}

export function GlyceryTriester() {
  return (
    <Chain
      atoms={[
        { label: "CH3", bond: 1 },
        { label: "CH2", bond: 1 },
        { label: "CH", up: "OH", bond: 1, highlight: true },
        { label: "CH3" },
      ]}
      caption="Butan-2-ol — the OH on C-2 makes it a secondary alcohol"
      label="Skeletal structure of butan-2-ol"
    />
  );
}

export const OrganicStructures = {
  chlorobenzene: Chlorobenzene,
  "chlorobenzene-resonance": ChlorobenzeneResonance,
  "haloalkane-vs-haloarene": HaloalkaneVsHaloarene,
  dichlorobenzenes: Dichlorobenzenes,
  "sn2-mechanism": Sn2Mechanism,
  "sn1-mechanism": Sn1Mechanism,
  "allyl-vinyl-benzyl": AllylVinylBenzylHalides,
  "phenol-acidity": PhenolAcidity,
  "aniline-basicity": AnilineBasicity,
  "butanol-enantiomers": ButanolEnantiomers,
  "chiral-centre": ChiralCentre,
  phenol: Phenol,
  aniline: Aniline,
  anisole: Anisole,
  benzaldehyde: Benzaldehyde,
  "benzoic-acid": BenzoicAcid,
  nitrobenzene: Nitrobenzene,
  acetophenone: Acetophenone,
  "benzenediazonium-chloride": BenzeneDiazoniumChloride,
  "propanal-vs-propanone": PropanoneVsPropanal,
  "butan-2-ol": GlyceryTriester,
} as const;

export type Pt_ = Pt;
