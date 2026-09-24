"use client";

/**
 * 3-D coordination geometries.
 *
 * Every shape is drawn in a consistent isometric projection with the same
 * conventions so students can compare them at a glance:
 *
 *   solid line   bond in the plane of the paper
 *   solid wedge  bond coming toward the viewer
 *   hashed wedge bond going behind the paper
 *   dotted grey  construction edges of the polyhedron (not bonds)
 *
 * Atom labels are real text (not paths) so they stay crisp at any zoom and
 * remain selectable and screen-reader friendly.
 */

import { Chem } from "./Chem";

export type GeometryName =
  | "octahedral"
  | "tetrahedral"
  | "square-planar"
  | "linear"
  | "trigonal-bipyramidal"
  | "square-pyramidal";

type Pt = { x: number; y: number };

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

function Wedge({ from, to, hashed = false }: { from: Pt; to: Pt; hashed?: boolean }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * 5.5;
  const ny = (dx / len) * 5.5;

  if (!hashed) {
    return (
      <polygon
        points={`${from.x},${from.y} ${to.x + nx},${to.y + ny} ${to.x - nx},${to.y - ny}`}
        className="fill-[var(--bond)]"
      />
    );
  }
  // Hashed wedge: rungs that widen toward the far atom.
  const rungs = 6;
  const lines = [];
  for (let i = 1; i <= rungs; i++) {
    const t = i / (rungs + 0.4);
    const cx = from.x + dx * t;
    const cy = from.y + dy * t;
    const w = t;
    lines.push(
      <line
        key={i}
        x1={cx + nx * w}
        y1={cy + ny * w}
        x2={cx - nx * w}
        y2={cy - ny * w}
        className="stroke-[var(--bond)]"
        strokeWidth={1.8}
        strokeLinecap="round"
      />,
    );
  }
  return <g>{lines}</g>;
}

function Bond({ from, to, dashed = false }: { from: Pt; to: Pt; dashed?: boolean }) {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      className={dashed ? "stroke-[var(--bond-faint)]" : "stroke-[var(--bond)]"}
      strokeWidth={dashed ? 1.4 : 2.2}
      strokeDasharray={dashed ? "4 4" : undefined}
      strokeLinecap="round"
    />
  );
}

function Atom({ at, label, tone = "ligand" }: { at: Pt; label: string; tone?: "metal" | "ligand" | "alt" }) {
  const r = tone === "metal" ? 17 : Math.max(13, 7 + label.length * 3.6);
  const fill =
    tone === "metal"
      ? "fill-[var(--atom-metal)]"
      : tone === "alt"
        ? "fill-[var(--atom-alt)]"
        : "fill-[var(--atom-ligand)]";
  const text =
    tone === "metal"
      ? "fill-[var(--atom-metal-ink)]"
      : tone === "alt"
        ? "fill-[var(--atom-alt-ink)]"
        : "fill-[var(--atom-ligand-ink)]";
  return (
    <g>
      <ellipse cx={at.x} cy={at.y} rx={r} ry={tone === "metal" ? 17 : 14} className={fill} />
      <ellipse
        cx={at.x}
        cy={at.y}
        rx={r}
        ry={tone === "metal" ? 17 : 14}
        className="fill-none stroke-[var(--atom-ring)]"
        strokeWidth={1.6}
      />
      <text
        x={at.x}
        y={at.y}
        textAnchor="middle"
        dominantBaseline="central"
        className={`${text} select-text`}
        fontSize={13}
        fontWeight={600}
      >
        {label}
      </text>
    </g>
  );
}

function Frame({
  children,
  caption,
  width = 340,
  height = 260,
  label,
}: {
  children: React.ReactNode;
  caption?: string;
  width?: number;
  height?: number;
  label: string;
}) {
  return (
    <figure className="chem-figure">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="chem-svg"
        role="img"
        aria-label={label}
        preserveAspectRatio="xMidYMid meet"
      >
        {children}
      </svg>
      {caption ? (
        <figcaption className="chem-figcaption">
          <Chem text={caption} />
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Geometries                                                          */
/* ------------------------------------------------------------------ */

export interface GeometryProps {
  /** Central atom label, e.g. "Co" or "Ni". */
  center: string;
  /**
   * Ligand labels in positional order. Octahedral order is
   * [top, bottom, front-left, front-right, back-left, back-right].
   * Shorter arrays repeat the last entry.
   */
  ligands: string[];
  /** Highlight a subset of positions in the "alt" colour (for cis/trans). */
  alt?: number[];
  caption?: string;
}

function pick(ligands: string[], i: number) {
  return ligands[Math.min(i, ligands.length - 1)] ?? "L";
}

export function Octahedral({ center, ligands, alt = [], caption }: GeometryProps) {
  const M: Pt = { x: 170, y: 132 };
  const P: Pt[] = [
    { x: 170, y: 36 }, // axial top
    { x: 170, y: 228 }, // axial bottom
    { x: 74, y: 172 }, // front-left  (toward viewer)
    { x: 266, y: 172 }, // front-right (toward viewer)
    { x: 92, y: 88 }, // back-left  (away)
    { x: 248, y: 88 }, // back-right (away)
  ];
  const tone = (i: number) => (alt.includes(i) ? ("alt" as const) : ("ligand" as const));

  return (
    <Frame label={`Octahedral complex of ${center}`} caption={caption}>
      {/* polyhedron edges */}
      <g>
        {[
          [0, 2],
          [0, 3],
          [0, 4],
          [0, 5],
          [1, 2],
          [1, 3],
          [1, 4],
          [1, 5],
          [2, 4],
          [3, 5],
          [2, 3],
          [4, 5],
        ].map(([a, b], i) => (
          <Bond key={i} from={P[a]} to={P[b]} dashed />
        ))}
      </g>
      {/* in-plane axial bonds */}
      <Bond from={M} to={P[0]} />
      <Bond from={M} to={P[1]} />
      {/* receding bonds */}
      <Wedge from={M} to={P[4]} hashed />
      <Wedge from={M} to={P[5]} hashed />
      {/* advancing bonds */}
      <Wedge from={M} to={P[2]} />
      <Wedge from={M} to={P[3]} />

      {P.map((p, i) => (
        <Atom key={i} at={p} label={pick(ligands, i)} tone={tone(i)} />
      ))}
      <Atom at={M} label={center} tone="metal" />
    </Frame>
  );
}

export function Tetrahedral({ center, ligands, alt = [], caption }: GeometryProps) {
  const M: Pt = { x: 170, y: 128 };
  const P: Pt[] = [
    { x: 170, y: 34 }, // up, in plane
    { x: 72, y: 190 }, // down-left, in plane
    { x: 250, y: 200 }, // toward viewer
    { x: 118, y: 92 }, // away from viewer
  ];
  const tone = (i: number) => (alt.includes(i) ? ("alt" as const) : ("ligand" as const));
  return (
    <Frame label={`Tetrahedral complex of ${center}`} caption={caption}>
      <g>
        {[
          [0, 1],
          [0, 2],
          [0, 3],
          [1, 2],
          [1, 3],
          [2, 3],
        ].map(([a, b], i) => (
          <Bond key={i} from={P[a]} to={P[b]} dashed />
        ))}
      </g>
      <Bond from={M} to={P[0]} />
      <Bond from={M} to={P[1]} />
      <Wedge from={M} to={P[2]} />
      <Wedge from={M} to={P[3]} hashed />
      {P.map((p, i) => (
        <Atom key={i} at={p} label={pick(ligands, i)} tone={tone(i)} />
      ))}
      <Atom at={M} label={center} tone="metal" />
    </Frame>
  );
}

export function SquarePlanar({ center, ligands, alt = [], caption }: GeometryProps) {
  const M: Pt = { x: 170, y: 130 };
  // Drawn as a rhombus in perspective so the "flat" nature is obvious.
  const P: Pt[] = [
    { x: 170, y: 52 }, // back
    { x: 278, y: 130 }, // right
    { x: 170, y: 208 }, // front
    { x: 62, y: 130 }, // left
  ];
  const tone = (i: number) => (alt.includes(i) ? ("alt" as const) : ("ligand" as const));
  return (
    <Frame label={`Square planar complex of ${center}`} caption={caption}>
      <polygon
        points={P.map((p) => `${p.x},${p.y}`).join(" ")}
        className="fill-[var(--plane-fill)] stroke-[var(--bond-faint)]"
        strokeWidth={1.4}
        strokeDasharray="4 4"
      />
      {P.map((p, i) => (
        <Bond key={i} from={M} to={p} />
      ))}
      {P.map((p, i) => (
        <Atom key={i} at={p} label={pick(ligands, i)} tone={tone(i)} />
      ))}
      <Atom at={M} label={center} tone="metal" />
    </Frame>
  );
}

export function Linear({ center, ligands, caption }: GeometryProps) {
  const M: Pt = { x: 170, y: 100 };
  const P: Pt[] = [
    { x: 56, y: 100 },
    { x: 284, y: 100 },
  ];
  return (
    <Frame label={`Linear complex of ${center}`} caption={caption} height={180}>
      <Bond from={P[0]} to={M} />
      <Bond from={M} to={P[1]} />
      <text
        x={170}
        y={150}
        textAnchor="middle"
        className="fill-[var(--ink-muted)]"
        fontSize={12}
      >
        bond angle 180°
      </text>
      {P.map((p, i) => (
        <Atom key={i} at={p} label={pick(ligands, i)} />
      ))}
      <Atom at={M} label={center} tone="metal" />
    </Frame>
  );
}

export function TrigonalBipyramidal({ center, ligands, caption }: GeometryProps) {
  const M: Pt = { x: 170, y: 132 };
  const P: Pt[] = [
    { x: 170, y: 32 }, // axial up
    { x: 170, y: 232 }, // axial down
    { x: 60, y: 150 }, // equatorial left (in plane)
    { x: 272, y: 116 }, // equatorial back (away)
    { x: 236, y: 190 }, // equatorial front (toward viewer)
  ];
  return (
    <Frame label={`Trigonal bipyramidal complex of ${center}`} caption={caption}>
      <g>
        {[
          [0, 2],
          [0, 3],
          [0, 4],
          [1, 2],
          [1, 3],
          [1, 4],
          [2, 3],
          [3, 4],
          [2, 4],
        ].map(([a, b], i) => (
          <Bond key={i} from={P[a]} to={P[b]} dashed />
        ))}
      </g>
      <Bond from={M} to={P[0]} />
      <Bond from={M} to={P[1]} />
      <Bond from={M} to={P[2]} />
      <Wedge from={M} to={P[3]} hashed />
      <Wedge from={M} to={P[4]} />
      {P.map((p, i) => (
        <Atom key={i} at={p} label={pick(ligands, i)} />
      ))}
      <Atom at={M} label={center} tone="metal" />
    </Frame>
  );
}

export function SquarePyramidal({ center, ligands, caption }: GeometryProps) {
  const M: Pt = { x: 170, y: 150 };
  const P: Pt[] = [
    { x: 170, y: 38 }, // apex
    { x: 96, y: 118 }, // back-left
    { x: 250, y: 118 }, // back-right
    { x: 72, y: 202 }, // front-left
    { x: 272, y: 202 }, // front-right
  ];
  return (
    <Frame label={`Square pyramidal complex of ${center}`} caption={caption}>
      <g>
        {[
          [1, 2],
          [2, 4],
          [4, 3],
          [3, 1],
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
        ].map(([a, b], i) => (
          <Bond key={i} from={P[a]} to={P[b]} dashed />
        ))}
      </g>
      <Bond from={M} to={P[0]} />
      <Wedge from={M} to={P[3]} />
      <Wedge from={M} to={P[4]} />
      <Wedge from={M} to={P[1]} hashed />
      <Wedge from={M} to={P[2]} hashed />
      {P.map((p, i) => (
        <Atom key={i} at={p} label={pick(ligands, i)} />
      ))}
      <Atom at={M} label={center} tone="metal" />
    </Frame>
  );
}

const GEOMETRIES = {
  octahedral: Octahedral,
  tetrahedral: Tetrahedral,
  "square-planar": SquarePlanar,
  linear: Linear,
  "trigonal-bipyramidal": TrigonalBipyramidal,
  "square-pyramidal": SquarePyramidal,
} as const;

export function Geometry({ shape, ...props }: GeometryProps & { shape: GeometryName }) {
  const Cmp = GEOMETRIES[shape];
  return <Cmp {...props} />;
}
