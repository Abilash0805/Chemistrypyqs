"use client";

import { OrganicStructures } from "./structures-organic";
import { PhysicalStructures } from "./structures-physical";
import { Geometry, type GeometryName } from "./geometry";
import { Arene, Chain, type Substituent, type ChainAtom } from "./organic";

const REGISTRY = { ...OrganicStructures, ...PhysicalStructures };

export type StructureId = keyof typeof REGISTRY;

/**
 * A figure attached to a question or an answer.
 *
 * `named`    — one of the hand-drawn diagrams in the registry
 * `geometry` — a coordination polyhedron built on the fly
 * `arene`    — a benzene ring with arbitrary substituents
 * `chain`    — a skeletal chain with arbitrary substituents
 */
export type FigureSpec =
  | { kind: "named"; id: StructureId }
  | {
      kind: "geometry";
      shape: GeometryName;
      center: string;
      ligands: string[];
      alt?: number[];
      caption?: string;
    }
  | {
      kind: "arene";
      substituents: Substituent[];
      kekule?: boolean;
      numbering?: boolean;
      caption?: string;
    }
  | { kind: "chain"; atoms: ChainAtom[]; caption?: string };

export function Structure({ spec }: { spec: FigureSpec }) {
  switch (spec.kind) {
    case "named": {
      const Cmp = REGISTRY[spec.id];
      if (!Cmp) return null;
      return <Cmp />;
    }
    case "geometry":
      return (
        <Geometry
          shape={spec.shape}
          center={spec.center}
          ligands={spec.ligands}
          alt={spec.alt}
          caption={spec.caption}
        />
      );
    case "arene":
      return (
        <Arene
          substituents={spec.substituents}
          kekule={spec.kekule}
          numbering={spec.numbering}
          caption={spec.caption}
        />
      );
    case "chain":
      return <Chain atoms={spec.atoms} caption={spec.caption} />;
    default:
      return null;
  }
}

export function Structures({ specs }: { specs?: FigureSpec[] }) {
  if (!specs?.length) return null;
  return (
    <div className="chem-figures">
      {specs.map((s, i) => (
        <Structure key={i} spec={s} />
      ))}
    </div>
  );
}

export const STRUCTURE_IDS = Object.keys(REGISTRY) as StructureId[];
