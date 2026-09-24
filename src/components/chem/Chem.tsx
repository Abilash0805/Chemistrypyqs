"use client";

import { Fragment, memo, useMemo } from "react";
import katex from "katex";
import { parseChem, type ChemNode, type ArrowKind } from "@/lib/chem-parse";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Arrows                                                              */
/* ------------------------------------------------------------------ */

const ARROW_GLYPH: Record<ArrowKind, string> = {
  forward: "⟶",
  reverse: "⟵",
  equilibrium: "⇌",
  resonance: "⟷",
};

function Arrow({ kind, top, bottom }: { kind: ArrowKind; top?: string; bottom?: string }) {
  const glyph = ARROW_GLYPH[kind];
  if (!top && !bottom) {
    return <span className="chem-arrow mx-1 inline-block align-middle">{glyph}</span>;
  }
  return (
    <span className="chem-arrow-stack mx-1.5 inline-flex flex-col items-center align-middle leading-none">
      {top ? (
        <span className="chem-arrow-label px-1 pb-0.5">
          <Chem text={top} />
        </span>
      ) : (
        <span className="chem-arrow-label pb-0.5">&nbsp;</span>
      )}
      <span className="chem-arrow block">{glyph}</span>
      {bottom ? (
        <span className="chem-arrow-label px-1 pt-0.5">
          <Chem text={bottom} />
        </span>
      ) : (
        <span className="chem-arrow-label pt-0.5">&nbsp;</span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Maths                                                               */
/* ------------------------------------------------------------------ */

function Math({ tex }: { tex: string }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        throwOnError: false,
        displayMode: false,
        output: "html",
      });
    } catch {
      return tex;
    }
  }, [tex]);
  return <span className="chem-math" dangerouslySetInnerHTML={{ __html: html }} />;
}

/* ------------------------------------------------------------------ */
/* Node renderer                                                       */
/* ------------------------------------------------------------------ */

function renderNodes(nodes: ChemNode[]): React.ReactNode {
  return nodes.map((n, i) => {
    switch (n.t) {
      case "text":
        return <Fragment key={i}>{n.v}</Fragment>;
      case "sub":
        return <sub key={i}>{n.v}</sub>;
      case "sup":
        return <sup key={i}>{n.v}</sup>;
      case "state":
        return (
          <span key={i} className="chem-state">
            ({n.v})
          </span>
        );
      case "math":
        return <Math key={i} tex={n.v} />;
      case "bold":
        return <strong key={i}>{renderNodes(n.c)}</strong>;
      case "italic":
        return <em key={i}>{renderNodes(n.c)}</em>;
      case "arrow":
        return <Arrow key={i} kind={n.kind} top={n.top} bottom={n.bottom} />;
      default:
        return null;
    }
  });
}

/* ------------------------------------------------------------------ */
/* Public components                                                   */
/* ------------------------------------------------------------------ */

/** Inline chemistry-aware text. */
export const Chem = memo(function Chem({ text, className }: { text: string; className?: string }) {
  const nodes = useMemo(() => parseChem(text), [text]);
  return <span className={cn("chem", className)}>{renderNodes(nodes)}</span>;
});

/**
 * A balanced equation on its own line. Renders in a tinted, horizontally
 * scrollable slab so long multi-step syntheses never break the layout.
 */
export const Equation = memo(function Equation({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const nodes = useMemo(() => parseChem(text), [text]);
  return (
    <div className={cn("chem-equation", className)} role="math" aria-label={text}>
      <div className="chem-equation-inner">{renderNodes(nodes)}</div>
    </div>
  );
});
