"use client";

/**
 * Skeletal-formula renderer for organic structures.
 *
 * Three primitives cover essentially every Class 12 structure:
 *
 *   <Arene />        benzene ring + substituents (haloarenes, phenols,
 *                    anilines, benzaldehyde, nitro compounds, ...)
 *   <Chain />        zig-zag carbon chain + substituents and multiple bonds
 *                    (haloalkanes, alcohols, aldehydes, acids, amines, ...)
 *   <Stereocentre /> a tetrahedral carbon in wedge/dash perspective, used on
 *                    its own or in mirror-image pairs for enantiomers
 *
 * Everything is plain SVG with real <text> labels, so structures stay sharp at
 * any zoom and the atom labels remain selectable.
 */

import { Fragment } from "react";
import { Chem } from "./Chem";
import { parseChem, type ChemNode } from "@/lib/chem-parse";

type Pt = { x: number; y: number };

/* ------------------------------------------------------------------ */
/* Label rendering inside SVG (subscripts as real tspans)              */
/* ------------------------------------------------------------------ */

function svgNodes(nodes: ChemNode[], keyBase = "n"): React.ReactNode {
  return nodes.map((n, i) => {
    const key = `${keyBase}-${i}`;
    switch (n.t) {
      case "text":
        return <Fragment key={key}>{n.v}</Fragment>;
      case "sub":
        return (
          <tspan key={key} dy="4" fontSize="0.72em">
            {n.v}
            <tspan dy="-4" />
          </tspan>
        );
      case "sup":
        return (
          <tspan key={key} dy="-5" fontSize="0.72em">
            {n.v}
            <tspan dy="5" />
          </tspan>
        );
      case "state":
        return (
          <tspan key={key} fontStyle="italic" fontSize="0.8em">
            ({n.v})
          </tspan>
        );
      case "bold":
        return (
          <tspan key={key} fontWeight={700}>
            {svgNodes(n.c, key)}
          </tspan>
        );
      case "italic":
        return (
          <tspan key={key} fontStyle="italic">
            {svgNodes(n.c, key)}
          </tspan>
        );
      default:
        return null;
    }
  });
}

/** A chemical label positioned inside an SVG, with true subscripts. */
export function SvgLabel({
  at,
  text,
  size = 14,
  anchor = "middle",
  tone = "ink",
  weight = 600,
  dy = 0,
}: {
  at: Pt;
  text: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
  tone?: "ink" | "muted" | "accent" | "alt";
  weight?: number;
  dy?: number;
}) {
  const cls =
    tone === "muted"
      ? "fill-[var(--ink-muted)]"
      : tone === "accent"
        ? "fill-[var(--atom-metal)]"
        : tone === "alt"
          ? "fill-[var(--atom-alt)]"
          : "fill-[var(--ink)]";
  return (
    <text
      x={at.x}
      y={at.y + dy}
      textAnchor={anchor}
      dominantBaseline="central"
      fontSize={size}
      fontWeight={weight}
      className={`${cls} chem-svg-label`}
    >
      {svgNodes(parseChem(text))}
    </text>
  );
}

/** Opaque plate behind a label so bonds do not run through the lettering. */
function LabelPlate({ at, width, height = 19 }: { at: Pt; width: number; height?: number }) {
  return (
    <rect
      x={at.x - width / 2}
      y={at.y - height / 2}
      width={width}
      height={height}
      rx={4}
      className="fill-[var(--surface)]"
    />
  );
}

function plateWidth(label: string) {
  return Math.max(18, label.replace(/[_^{}]/g, "").length * 8.2 + 8);
}

/* ------------------------------------------------------------------ */
/* Bonds                                                               */
/* ------------------------------------------------------------------ */

function line(from: Pt, to: Pt, shrinkFrom = 0, shrinkTo = 0) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x1: from.x + (dx / len) * shrinkFrom,
    y1: from.y + (dy / len) * shrinkFrom,
    x2: to.x - (dx / len) * shrinkTo,
    y2: to.y - (dy / len) * shrinkTo,
  };
}

export function Bond({
  from,
  to,
  order = 1,
  dashed = false,
  partial = false,
  shrinkFrom = 0,
  shrinkTo = 0,
}: {
  from: Pt;
  to: Pt;
  order?: 1 | 2 | 3;
  dashed?: boolean;
  /** Draw as a solid line plus a dashed parallel line (partial double bond). */
  partial?: boolean;
  shrinkFrom?: number;
  shrinkTo?: number;
}) {
  const g = line(from, to, shrinkFrom, shrinkTo);
  const dx = g.x2 - g.x1;
  const dy = g.y2 - g.y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * 3.2;
  const ny = (dx / len) * 3.2;
  const stroke = "stroke-[var(--bond)]";

  if (partial) {
    return (
      <g>
        <line {...g} className={stroke} strokeWidth={2} strokeLinecap="round" />
        <line
          x1={g.x1 + nx * 1.6}
          y1={g.y1 + ny * 1.6}
          x2={g.x2 + nx * 1.6}
          y2={g.y2 + ny * 1.6}
          className={stroke}
          strokeWidth={1.7}
          strokeDasharray="4 3.5"
          strokeLinecap="round"
        />
      </g>
    );
  }
  if (order === 1) {
    return (
      <line
        {...g}
        className={dashed ? "stroke-[var(--bond-faint)]" : stroke}
        strokeWidth={2}
        strokeDasharray={dashed ? "4 4" : undefined}
        strokeLinecap="round"
      />
    );
  }
  if (order === 2) {
    return (
      <g>
        <line
          x1={g.x1 + nx}
          y1={g.y1 + ny}
          x2={g.x2 + nx}
          y2={g.y2 + ny}
          className={stroke}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <line
          x1={g.x1 - nx}
          y1={g.y1 - ny}
          x2={g.x2 - nx}
          y2={g.y2 - ny}
          className={stroke}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
    );
  }
  return (
    <g>
      <line {...g} className={stroke} strokeWidth={2} strokeLinecap="round" />
      <line
        x1={g.x1 + nx * 1.8}
        y1={g.y1 + ny * 1.8}
        x2={g.x2 + nx * 1.8}
        y2={g.y2 + ny * 1.8}
        className={stroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <line
        x1={g.x1 - nx * 1.8}
        y1={g.y1 - ny * 1.8}
        x2={g.x2 - nx * 1.8}
        y2={g.y2 - ny * 1.8}
        className={stroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Figure wrapper                                                      */
/* ------------------------------------------------------------------ */

export function Figure({
  children,
  caption,
  width,
  height,
  label,
}: {
  children: React.ReactNode;
  caption?: string;
  width: number;
  height: number;
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
/* Arene — benzene ring with substituents                              */
/* ------------------------------------------------------------------ */

export interface Substituent {
  /** Ring position, 1–6, counted clockwise from the top vertex. */
  pos: number;
  /** Label drawn outside the ring, e.g. "Cl", "OH", "NO2", "CH3". */
  label: string;
  /** Bond order from ring carbon to the substituent. */
  order?: 1 | 2;
  /** Draw the ring–substituent bond with partial double-bond character. */
  partial?: boolean;
  /** Tint the label to draw the eye to it. */
  highlight?: boolean;
}

const RING_R = 46;

function ringVertex(pos: number, cx: number, cy: number, r = RING_R): Pt {
  // Position 1 at the top, going clockwise.
  const angle = (-90 + (pos - 1) * 60) * (Math.PI / 180);
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

export function Arene({
  substituents = [],
  kekule = false,
  numbering = false,
  caption,
  label,
  width = 230,
  height = 210,
  cx,
  cy,
  bare = false,
}: {
  substituents?: Substituent[];
  /** Alternating double bonds instead of the aromatic circle. */
  kekule?: boolean;
  numbering?: boolean;
  caption?: string;
  label?: string;
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  /** Render the ring only (no <figure> wrapper) for use inside a bigger scene. */
  bare?: boolean;
}) {
  const CX = cx ?? width / 2;
  const CY = cy ?? height / 2 - 4;
  const V = [1, 2, 3, 4, 5, 6].map((p) => ringVertex(p, CX, CY));

  const body = (
    <>
      {/* ring skeleton */}
      {V.map((v, i) => {
        const next = V[(i + 1) % 6];
        const isDouble = kekule && i % 2 === 0;
        return <Bond key={i} from={v} to={next} order={isDouble ? 2 : 1} />;
      })}
      {!kekule && (
        <circle
          cx={CX}
          cy={CY}
          r={RING_R * 0.58}
          className="fill-none stroke-[var(--bond)]"
          strokeWidth={2}
        />
      )}

      {numbering &&
        V.map((v, i) => {
          const out = {
            x: CX + (v.x - CX) * 0.62,
            y: CY + (v.y - CY) * 0.62,
          };
          return (
            <text
              key={`n${i}`}
              x={out.x}
              y={out.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={10}
              className="fill-[var(--ink-muted)]"
            >
              {i + 1}
            </text>
          );
        })}

      {/* substituents */}
      {substituents.map((s, i) => {
        const v = ringVertex(s.pos, CX, CY);
        const dir = { x: v.x - CX, y: v.y - CY };
        const len = Math.hypot(dir.x, dir.y) || 1;
        const outer = {
          x: v.x + (dir.x / len) * 32,
          y: v.y + (dir.y / len) * 32,
        };
        const w = plateWidth(s.label);
        return (
          <g key={`s${i}`}>
            <Bond
              from={v}
              to={outer}
              order={s.order ?? 1}
              partial={s.partial}
              shrinkTo={w / 2 - 2}
            />
            <LabelPlate at={outer} width={w} />
            <SvgLabel at={outer} text={s.label} tone={s.highlight ? "alt" : "ink"} />
          </g>
        );
      })}
    </>
  );

  if (bare) return <g>{body}</g>;

  return (
    <Figure
      width={width}
      height={height}
      caption={caption}
      label={label ?? caption ?? "Benzene ring structure"}
    >
      {body}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Chain — zig-zag skeletal chain                                      */
/* ------------------------------------------------------------------ */

export interface ChainAtom {
  /** Label at this vertex. Leave empty for a plain skeletal CH2 vertex. */
  label?: string;
  /** Bond order to the *next* atom in the chain. */
  bond?: 1 | 2 | 3;
  /** Substituent drawn above the vertex. */
  up?: string;
  /** Substituent drawn below the vertex. */
  down?: string;
  /** Bond order for the `up` substituent (2 gives e.g. C=O). */
  upOrder?: 1 | 2;
  downOrder?: 1 | 2;
  highlight?: boolean;
}

export function Chain({
  atoms,
  caption,
  label,
  step = 46,
  rise = 26,
  padX = 44,
  padY = 58,
}: {
  atoms: ChainAtom[];
  caption?: string;
  label?: string;
  step?: number;
  rise?: number;
  padX?: number;
  padY?: number;
}) {
  const pts: Pt[] = atoms.map((_, i) => ({
    x: padX + i * step,
    y: padY + (i % 2 === 0 ? 0 : rise),
  }));
  const width = padX * 2 + (atoms.length - 1) * step;
  const height = padY * 2 + rise;

  return (
    <Figure
      width={width}
      height={height}
      caption={caption}
      label={label ?? caption ?? "Organic skeletal structure"}
    >
      {/* backbone */}
      {pts.slice(0, -1).map((p, i) => {
        const a = atoms[i];
        const wFrom = a.label ? plateWidth(a.label) / 2 : 0;
        const wTo = atoms[i + 1].label ? plateWidth(atoms[i + 1].label!) / 2 : 0;
        return (
          <Bond
            key={`b${i}`}
            from={p}
            to={pts[i + 1]}
            order={a.bond ?? 1}
            shrinkFrom={wFrom}
            shrinkTo={wTo}
          />
        );
      })}

      {/* vertical substituents */}
      {atoms.map((a, i) => {
        const p = pts[i];
        const out: React.ReactNode[] = [];
        if (a.up) {
          const target = { x: p.x, y: p.y - 40 };
          const w = plateWidth(a.up);
          out.push(
            <g key={`u${i}`}>
              <Bond
                from={p}
                to={target}
                order={a.upOrder ?? 1}
                shrinkFrom={a.label ? 11 : 0}
                shrinkTo={10}
              />
              <LabelPlate at={target} width={w} />
              <SvgLabel at={target} text={a.up} tone={a.highlight ? "alt" : "ink"} />
            </g>,
          );
        }
        if (a.down) {
          const target = { x: p.x, y: p.y + 40 };
          const w = plateWidth(a.down);
          out.push(
            <g key={`d${i}`}>
              <Bond
                from={p}
                to={target}
                order={a.downOrder ?? 1}
                shrinkFrom={a.label ? 11 : 0}
                shrinkTo={10}
              />
              <LabelPlate at={target} width={w} />
              <SvgLabel at={target} text={a.down} tone={a.highlight ? "alt" : "ink"} />
            </g>,
          );
        }
        return out;
      })}

      {/* vertex labels last so they sit on top of the bonds */}
      {atoms.map((a, i) =>
        a.label ? (
          <g key={`l${i}`}>
            <LabelPlate at={pts[i]} width={plateWidth(a.label)} />
            <SvgLabel at={pts[i]} text={a.label} tone={a.highlight ? "alt" : "ink"} />
          </g>
        ) : null,
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* Stereocentre — tetrahedral carbon in perspective                    */
/* ------------------------------------------------------------------ */

function WedgeShape({ from, to, hashed, mirror }: { from: Pt; to: Pt; hashed?: boolean; mirror?: boolean }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * 5;
  const ny = (dx / len) * 5;
  void mirror;
  if (!hashed) {
    return (
      <polygon
        points={`${from.x},${from.y} ${to.x + nx},${to.y + ny} ${to.x - nx},${to.y - ny}`}
        className="fill-[var(--bond)]"
      />
    );
  }
  const rungs = 5;
  return (
    <g>
      {Array.from({ length: rungs }, (_, i) => {
        const t = (i + 1) / (rungs + 0.4);
        const cx = from.x + dx * t;
        const cy = from.y + dy * t;
        return (
          <line
            key={i}
            x1={cx + nx * t}
            y1={cy + ny * t}
            x2={cx - nx * t}
            y2={cy - ny * t}
            className="stroke-[var(--bond)]"
            strokeWidth={1.8}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

export interface StereoGroups {
  /** Group drawn straight up, in the plane of the paper. */
  up: string;
  /** Group drawn straight down, in the plane of the paper. */
  down: string;
  /** Group on a bold wedge (toward the viewer). */
  wedge: string;
  /** Group on a hashed wedge (behind the paper). */
  hash: string;
  /** Central atom label, defaults to "C". */
  center?: string;
}

export function Stereocentre({
  groups,
  caption,
  flip = false,
  width = 210,
  height = 210,
  bare = false,
  cx,
  cy,
}: {
  groups: StereoGroups;
  caption?: string;
  /** Mirror the wedge/hash pair — use for the second enantiomer. */
  flip?: boolean;
  width?: number;
  height?: number;
  bare?: boolean;
  cx?: number;
  cy?: number;
}) {
  const CX = cx ?? width / 2;
  const CY = cy ?? height / 2;
  const C: Pt = { x: CX, y: CY };
  const P = {
    up: { x: CX, y: CY - 62 },
    down: { x: CX, y: CY + 62 },
    left: { x: CX - 66, y: CY + 30 },
    right: { x: CX + 66, y: CY + 30 },
  };
  const wedgeAt = flip ? P.left : P.right;
  const hashAt = flip ? P.right : P.left;

  const body = (
    <>
      <Bond from={C} to={P.up} shrinkFrom={12} shrinkTo={11} />
      <Bond from={C} to={P.down} shrinkFrom={12} shrinkTo={11} />
      <WedgeShape from={C} to={wedgeAt} />
      <WedgeShape from={C} to={hashAt} hashed />

      {(
        [
          [P.up, groups.up],
          [P.down, groups.down],
          [wedgeAt, groups.wedge],
          [hashAt, groups.hash],
        ] as [Pt, string][]
      ).map(([p, text], i) => (
        <g key={i}>
          <LabelPlate at={p} width={plateWidth(text)} />
          <SvgLabel at={p} text={text} />
        </g>
      ))}
      <LabelPlate at={C} width={plateWidth(groups.center ?? "C")} />
      <SvgLabel at={C} text={groups.center ?? "C"} tone="accent" size={15} />
    </>
  );

  if (bare) return <g>{body}</g>;
  return (
    <Figure width={width} height={height} caption={caption} label={caption ?? "Chiral centre"}>
      {body}
    </Figure>
  );
}

/** Two enantiomers side by side with the mirror plane drawn between them. */
export function EnantiomerPair({
  groups,
  caption,
  leftLabel = "(R)",
  rightLabel = "(S)",
}: {
  groups: StereoGroups;
  caption?: string;
  leftLabel?: string;
  rightLabel?: string;
}) {
  const W = 440;
  const H = 230;
  return (
    <Figure width={W} height={H} caption={caption} label={caption ?? "Pair of enantiomers"}>
      <line
        x1={W / 2}
        y1={14}
        x2={W / 2}
        y2={H - 34}
        className="stroke-[var(--bond-faint)]"
        strokeWidth={1.6}
        strokeDasharray="6 5"
      />
      <text
        x={W / 2}
        y={H - 16}
        textAnchor="middle"
        fontSize={11}
        className="fill-[var(--ink-muted)]"
      >
        mirror plane
      </text>
      <Stereocentre groups={groups} bare cx={112} cy={102} />
      <Stereocentre groups={groups} bare flip cx={W - 112} cy={102} />
      <text x={112} y={H - 40} textAnchor="middle" fontSize={12} fontWeight={600} className="fill-[var(--ink-muted)]">
        {leftLabel}
      </text>
      <text
        x={W - 112}
        y={H - 40}
        textAnchor="middle"
        fontSize={12}
        fontWeight={600}
        className="fill-[var(--ink-muted)]"
      >
        {rightLabel}
      </text>
    </Figure>
  );
}
