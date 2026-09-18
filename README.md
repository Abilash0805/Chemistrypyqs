# Chemistry PYQs — CBSE Class 12 (2026–27 syllabus)

A revision app for CBSE Class 12 Chemistry previous year questions, scoped to the
**ten units still in the 2026–27 syllabus**, with exam-ready answers, correctly
typeset chemical notation and vector structural diagrams.

## What is in here

- **300 questions** drawn from CBSE board papers 2013–2025 and the chapter-wise
  important-question sets, rewritten with correct notation.
- **Every question type on the paper** — MCQ, assertion–reason, case study,
  very short (1 mark), short (2–3 marks), long (5 marks) and numericals.
- **Exam-ready answers** written to the marking scheme: numericals show every
  step with the formula quoted; reason-based questions name the effect at work
  and close with the conclusion.
- **Only in-syllabus content.** The six units removed in the NCERT
  rationalisation — Solid State, Surface Chemistry, Isolation of Elements, the
  p-Block Elements, Polymers and Chemistry in Everyday Life — are excluded, and
  so is every board question that belonged to them.

## Chemical notation

Content is authored as prose and typeset at render time by
`src/lib/chem-parse.ts`:

| You write | You get |
|---|---|
| `H2SO4`, `CH3COOH` | auto-subscripted formulae |
| `Cu^2+`, `MnO4^-`, `SO4^2-` | superscripted charges |
| `H2O(l)`, `NaCl(aq)` | italic state symbols |
| `A ->[Ni][573 K] B` | reaction arrow with reagent above, conditions below |
| `A <=> B`, `A <-> B` | equilibrium / resonance arrows |
| `S_N2`, `sp^3d^2`, `t_{2g}` | sub/superscripts outside formulae |
| `$E = E^\circ - ...$` | KaTeX maths |
| `\Delta`, `\alpha`, `\lambda` | Greek letters |

## Structures

Diagrams are hand-built inline SVG — no images, so they stay sharp at any zoom
and adapt to both themes. Three primitives compose almost everything:

- `<Arene />` — benzene ring with substituents at any position, aromatic circle
  or Kekulé, used for haloarenes, phenols, anilines and the rest.
- `<Chain />` — skeletal carbon chains with substituents and multiple bonds.
- `<Stereocentre />` / `<EnantiomerPair />` — wedge/dash perspective for chiral
  carbons and mirror-image pairs.

On top of these sit named figures (`src/components/chem/structures-*.tsx`):
chlorobenzene resonance, SN1/SN2 mechanisms, o/m/p-dichlorobenzenes, phenol and
aniline resonance, the Daniell cell, crystal-field splitting, octahedral and
square planar complexes, Haworth glucose anomers, the peptide bond, the α-helix
and the DNA double helix.

3-D geometries (`src/components/chem/geometry.tsx`) use one consistent
projection so students can compare them: solid line = in the plane of the paper,
solid wedge = toward the viewer, hashed wedge = behind it, dotted grey =
polyhedron construction edges rather than bonds.

## Tech

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with a token-based theme (light + dark)
- **Framer Motion** for entry staggers and panel transitions
- **Lenis** for smooth scrolling (disabled under `prefers-reduced-motion`)
- **KaTeX** for mathematical expressions

Design direction (palette, motion tier, soft-clay depth) came from the
[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) design
system generator; the recommended display face was swapped for Sora + Fraunces,
since a rounded face makes subscripts and superscripts hard to read at the sizes
chemistry needs.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
npm run lint
```

## Project layout

```
src/
├── app/                        routes: home, chapters, browse, bookmarks, syllabus
├── components/
│   ├── chem/                   notation renderer, geometry, organic, named structures
│   ├── QuestionCard.tsx        one question + its exam-ready answer
│   └── QuestionBrowser.tsx     search, filters, sort, reveal-all
├── data/
│   ├── chapters.ts             the ten units and their syllabus topics
│   └── chapters/ch01…ch10.ts   the question bank, one file per unit
├── hooks/useProgress.ts        bookmarks + solved tracking (localStorage)
├── lib/chem-parse.ts           chemistry notation parser
└── types/index.ts
```

## A note on the answers

These are written for revision. Always cross-check against NCERT and the
official CBSE marking scheme before relying on them in an exam.
