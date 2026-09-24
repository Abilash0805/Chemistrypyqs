/**
 * Chemistry notation parser.
 *
 * Content across the question bank is authored as plain prose that happens to
 * contain chemical formulae, reaction arrows and the odd bit of maths. This
 * module turns that prose into a small AST which `<Chem />` renders with real
 * <sub>/<sup> elements, proper arrows and KaTeX — so nothing relies on the
 * author remembering to type Unicode subscripts.
 *
 * Authoring syntax
 * ----------------
 *   H2SO4, CH3COOH        auto-subscripted (digits after an element symbol)
 *   Cu^2+, MnO4^-, SO4^2- explicit charge -> superscript
 *   Cu2+                  trailing charge is detected without the caret too
 *   [Co(NH3)6]^3+         brackets, parentheses and charges all handled
 *   H2O(l), NaCl(aq)      state symbols rendered in italic
 *   A -> B                reaction arrow
 *   A ->[Ni][573 K] B     arrow with reagent above / conditions below
 *   A <=> B               equilibrium arrow
 *   $E = E^\circ - ...$   KaTeX maths
 *   **bold**  _italic_    light emphasis
 *   \(literal\)           escape hatch: never touched by the chemistry pass
 */

export type ChemNode =
  | { t: "text"; v: string }
  | { t: "sub"; v: string }
  | { t: "sup"; v: string }
  | { t: "state"; v: string }
  | { t: "math"; v: string }
  | { t: "bold"; c: ChemNode[] }
  | { t: "italic"; c: ChemNode[] }
  | { t: "arrow"; kind: ArrowKind; top?: string; bottom?: string };

export type ArrowKind = "forward" | "reverse" | "equilibrium" | "resonance";

/* ------------------------------------------------------------------ */
/* Element symbols                                                     */
/* ------------------------------------------------------------------ */

const ELEMENTS = new Set(
  (
    "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni " +
    "Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I " +
    "Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt " +
    "Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr"
  ).split(" "),
);

/**
 * Tokens that look like formulae but are ordinary English (or ordinary
 * chemistry prose) and must be left alone. Every entry is compared
 * case-sensitively against the whole token.
 */
const NOT_A_FORMULA = new Set([
  // element symbols that are also English words
  "In",
  "As",
  "At",
  "No",
  "Be",
  "I",
  "K",
  "S",
  "C",
  "N",
  "O",
  "P",
  "V",
  "W",
  "Y",
  "B",
  "H",
  "F",
  // common prose that matches the shape
  "IUPAC",
  "SN1",
  "SN2",
  "E1",
  "E2",
  "NCERT",
  "CBSE",
  "DNA",
  "RNA",
  "ATP",
  "ADP",
  "EMF",
  "SHE",
  "STP",
  "NTP",
  "MCQ",
  "IR",
  "UV",
  "PVC",
  "LCAO",
  "CFSE",
  "EAN",
]);

/**
 * A generic-group placeholder standing in for a real substituent at the START
 * of a formula: the R of `RCH2OH`, its primed variants, and the X of a generic
 * halide. These are not element symbols, so without this the whole token is
 * rejected and `RCONH2` renders with no subscripts at all.
 */
const GENERIC_GROUP = /^(?:R['\u2019]{0,2}|X)(?![a-z])/;

/**
 * A token is treated as a formula when it is built only out of element
 * symbols, digits, brackets, dots and charge markers — and carries at least
 * one thing worth typesetting (a digit, a charge, a state symbol or a dot
 * hydrate separator).
 */
function isFormula(token: string): boolean {
  if (NOT_A_FORMULA.has(token)) return false;
  if (!/^[A-Za-z0-9()[\]·.^+\-−'’]+$/.test(token)) return false;
  // Must start with a capital letter, a bracket or a digit-coefficient.
  if (!/^[A-Z([\d]/.test(token)) return false;
  // Needs something to typeset, otherwise it is just a word in caps.
  if (!/[\d^+\-−·]/.test(token)) return false;
  // Reject things like "1990" or "2-3".
  if (/^[\d.]+$/.test(token)) return false;
  if (!/[A-Za-z]/.test(token)) return false;

  // Walk the token: every alphabetic run must decompose into element symbols.
  let i = 0;
  // optional stoichiometric coefficient
  while (i < token.length && /\d/.test(token[i])) i++;
  // A leading R or X is a stand-in for a group, not an element. It does not
  // count as having seen an element, so a bare `R2` is still not a formula.
  const gen = token.slice(i).match(GENERIC_GROUP);
  if (gen) i += gen[0].length;
  let sawElement = false;
  while (i < token.length) {
    const ch = token[i];
    if (/[A-Z]/.test(ch)) {
      const two = token.slice(i, i + 2);
      if (/^[A-Z][a-z]$/.test(two) && ELEMENTS.has(two)) {
        i += 2;
      } else if (ELEMENTS.has(ch)) {
        i += 1;
      } else {
        return false;
      }
      sawElement = true;
    } else if (/[a-z]/.test(ch)) {
      // A lowercase letter that was not consumed as part of a symbol.
      return false;
    } else if (/[\d()[\]·.^+\-−'’]/.test(ch)) {
      i += 1;
    } else {
      return false;
    }
  }
  return sawElement;
}

/* ------------------------------------------------------------------ */
/* Formula -> nodes                                                    */
/* ------------------------------------------------------------------ */

const STATE_RE = /^\((aq|s|l|g|conc\.?|dil\.?|alc\.?)\)/i;

/** Turn a single recognised formula token into sub/sup/text nodes. */
function formulaNodes(token: string): ChemNode[] {
  const out: ChemNode[] = [];
  let buf = "";
  const flush = () => {
    if (buf) {
      out.push({ t: "text", v: buf });
      buf = "";
    }
  };

  let i = 0;
  // Leading stoichiometric coefficient stays full size.
  while (i < token.length && /\d/.test(token[i])) buf += token[i++];
  // A leading generic group is plain text, and any digit straight after it is
  // a count of those groups — the 2 of `R2CHOH` — so it subscripts like any
  // other count. The rest of the token then parses as usual.
  const gen = token.slice(i).match(GENERIC_GROUP);
  if (gen) {
    buf += gen[0];
    i += gen[0].length;
    const count = token.slice(i).match(/^\d+/);
    if (count) {
      flush();
      out.push({ t: "sub", v: count[0] });
      i += count[0].length;
    }
  }

  // A lone element carrying digits and a sign is an ion charge, not a count:
  // `Ca2+` is Ca²⁺, never Ca₂⁺. Without this the element-plus-count rule below
  // claims the digit first and the charge renders one line too low.
  //
  // The test is deliberately narrow — the whole remaining token must be one
  // element symbol, digits, then the sign. That leaves every polyatomic case
  // to the normal path, where the digit really is a count: `MnO4-` stays
  // MnO₄⁻, `SO42-` stays SO₄²⁻, and the diazonium `N2+X−` of `Ar–N2+X−` keeps
  // its two nitrogens.
  const loneIon = token.slice(i).match(/^([A-Z][a-z]?)(\d+)([+\-−]{1,3})$/);
  if (loneIon && (ELEMENTS.has(loneIon[1]) || loneIon[1].length === 1)) {
    buf += loneIon[1];
    flush();
    out.push({ t: "sup", v: normaliseCharge(loneIon[2] + loneIon[3]) });
    return out;
  }

  while (i < token.length) {
    const rest = token.slice(i);

    // State symbol: (aq), (s), (l), (g)
    const state = rest.match(STATE_RE);
    if (state) {
      flush();
      out.push({ t: "state", v: state[1] });
      i += state[0].length;
      continue;
    }

    // Explicit superscript: ^2+, ^3-, ^{2+}, ^o, ^n-
    if (token[i] === "^") {
      const m = rest.match(/^\^\{([^}]*)\}|^\^([0-9]*[+\-−]|[0-9]+|[a-zA-Zθ°∘][+\-−]?)/);
      if (m) {
        flush();
        out.push({ t: "sup", v: normaliseCharge(m[1] ?? m[2]) });
        i += m[0].length;
        continue;
      }
    }

    // Explicit subscript braces: _{n}
    if (token[i] === "_") {
      const m = rest.match(/^_\{([^}]*)\}|^_([A-Za-z0-9]+)/);
      if (m) {
        flush();
        out.push({ t: "sub", v: m[1] ?? m[2] });
        i += m[0].length;
        continue;
      }
    }

    // Element symbol followed by a count.
    const sym = rest.match(/^([A-Z][a-z]?)(\d+)?/);
    if (sym && (ELEMENTS.has(sym[1]) || sym[1].length === 1)) {
      buf += sym[1];
      i += sym[1].length;
      if (sym[2]) {
        flush();
        out.push({ t: "sub", v: sym[2] });
        i += sym[2].length;
      }
      continue;
    }

    // Closing bracket followed by a count -> subscript, or by a charge -> sup.
    if (/[)\]]/.test(token[i])) {
      buf += token[i++];
      const count = token.slice(i).match(/^\d+/);
      if (count) {
        flush();
        out.push({ t: "sub", v: count[0] });
        i += count[0].length;
      }
      continue;
    }

    // Bare charge, e.g. MnO4- or the N2+ of a diazonium salt. The lookahead
    // lets the charge sit mid-token, so `C6H5N2+Cl−` puts the plus over the
    // nitrogen instead of leaving it on the baseline; it still has to be
    // followed by a new species or the end, so arithmetic like `2+3` is left
    // alone.
    const charge = rest.match(/^(\d*)([+\-−]{1,3})(?=$|[A-Z])/);
    // A minus sitting mid-token in front of a new species is ambiguous:
    // `MnO4-` is an ion but the dash of `2,4,6-Br3C6H2NH2` or `2-Bromopentane`
    // is a locant. A real charge hangs off a species, so require the character
    // before it to be a letter or a closing bracket — a digit there means the
    // dash is punctuation. A trailing sign and a plus are never locants.
    const locant =
      charge !== null &&
      charge[2][0] !== "+" &&
      /[A-Z]/.test(rest[charge[0].length] ?? "") &&
      !/[A-Za-z)\]]/.test(token[i + charge[1].length - 1] ?? "");
    if (charge && !locant) {
      flush();
      out.push({ t: "sup", v: normaliseCharge(charge[1] + charge[2]) });
      i += charge[0].length;
      continue;
    }

    // Hydrate dot, brackets, apostrophes, anything else: pass through.
    buf += token[i++];
  }

  flush();
  return out;
}

function normaliseCharge(v: string): string {
  return v
    .replace(/-/g, "−") // real minus sign
    .replace(/^1([+−])$/, "$1")
    .replace(/\bo\b/, "°");
}

/* ------------------------------------------------------------------ */
/* Arrows                                                              */
/* ------------------------------------------------------------------ */

// ->[above][below]  <=>[above][below]  <-  <->
const ARROW_RE = /(<=>|<->|-->|->|<-{1,2}|⇌|→|←)(\[([^\]]*)\])?(\[([^\]]*)\])?/;

function arrowKind(raw: string): ArrowKind {
  if (raw === "<=>" || raw === "⇌") return "equilibrium";
  if (raw === "<->") return "resonance";
  if (raw === "<-" || raw === "<--" || raw === "←") return "reverse";
  return "forward";
}

/* ------------------------------------------------------------------ */
/* Greek / symbol shorthands                                           */
/* ------------------------------------------------------------------ */

const SYMBOLS: Record<string, string> = {
  "\\Delta": "Δ",
  "\\delta": "δ",
  "\\alpha": "α",
  "\\beta": "β",
  "\\gamma": "γ",
  "\\pi": "π",
  "\\sigma": "σ",
  "\\mu": "μ",
  "\\lambda": "λ",
  "\\Lambda": "Λ",
  "\\theta": "θ",
  "\\nu": "ν",
  "\\chi": "χ",
  "\\degree": "°",
  "\\deg": "°",
  "\\cdot": "·",
  "\\times": "×",
  "\\to": "→",
  "\\rightleftharpoons": "⇌",
  "\\ge": "≥",
  "\\le": "≤",
  "\\ne": "≠",
  "\\approx": "≈",
  "\\pm": "±",
  "\\infty": "∞",
  "\\ominus": "⊖",
  "\\prime": "′",
};

function applySymbols(s: string): string {
  return s.replace(/\\[A-Za-z]+/g, (m) => SYMBOLS[m] ?? m);
}

/* ------------------------------------------------------------------ */
/* Main parse                                                          */
/* ------------------------------------------------------------------ */

/** Split on $...$ maths, **bold**, _italic_ and \(literal\) first. */
export function parseChem(input: string): ChemNode[] {
  if (!input) return [];
  const nodes: ChemNode[] = [];
  // The bold group is non-greedy and allows a bare `*` inside it, because
  // chemistry content legitimately contains lone asterisks — `CH3–C*H(Cl)–CH2Br`
  // marks a chiral centre that way.
  const re = /\$([^$]+)\$|\*\*([\s\S]+?)\*\*|_\(([^)]*)\)_|\\\(([^)]*)\\\)/g;
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input))) {
    if (m.index > last) nodes.push(...chemPass(input.slice(last, m.index)));
    if (m[1] !== undefined) {
      nodes.push({ t: "math", v: m[1] });
    } else if (m[2] !== undefined) {
      // Recurse rather than going straight to chemPass, so `$maths$` and
      // `_(italic)_` still work inside a bold run — e.g. **_(o)_-nitrophenol**.
      // The non-greedy groups above guarantee the inner text has no matching
      // closer of its own, so this bottoms out.
      nodes.push({ t: "bold", c: parseChem(m[2]) });
    } else if (m[3] !== undefined) {
      nodes.push({ t: "italic", c: parseChem(m[3]) });
    } else if (m[4] !== undefined) {
      nodes.push({ t: "text", v: m[4] });
    }
    last = m.index + m[0].length;
  }
  if (last < input.length) nodes.push(...chemPass(input.slice(last)));
  return mergeText(nodes);
}

/** Chemistry-aware pass over a run of plain text. */
function chemPass(text: string): ChemNode[] {
  const out: ChemNode[] = [];
  let rest = applySymbols(text);

  while (rest.length) {
    const am = rest.match(ARROW_RE);
    if (!am || am.index === undefined) {
      out.push(...wordPass(rest));
      break;
    }
    if (am.index > 0) out.push(...wordPass(rest.slice(0, am.index)));
    out.push({
      t: "arrow",
      kind: arrowKind(am[1]),
      top: am[3]?.trim() || undefined,
      bottom: am[5]?.trim() || undefined,
    });
    rest = rest.slice(am.index + am[0].length);
  }
  return out;
}

/**
 * Explicit `_` / `^` markers on an ordinary word — `S_N2`, `sp^3`, `t_{2g}`,
 * `Λ°_m`. These carry no element symbols, so `isFormula` rejects them; they still
 * need real <sub>/<sup> elements.
 */
function markupNodes(token: string): ChemNode[] {
  const out: ChemNode[] = [];
  let buf = "";
  const flush = () => {
    if (buf) {
      out.push({ t: "text", v: buf });
      buf = "";
    }
  };

  let i = 0;
  while (i < token.length) {
    const ch = token[i];
    if (ch === "^" || ch === "_") {
      const rest = token.slice(i + 1);
      const braced = rest.match(/^\{([^}]*)\}/);
      // Unbraced forms differ by direction:
      //   superscript — a charge (`2+`, `−`), a digit run (`3`) or a single
      //     letter with an optional sign (`n+`). Stopping at one digit run is
      //     what makes `sp^3d^2` come out as sp³d² rather than sp^(3d).
      //   subscript — a word or a digit run, so `S_N2`, `_cell` and `_2g` all
      //     work. A digit run may be followed only by LOWERCASE letters: that
      //     keeps orbital labels like `t_2g` together while letting `R_2NH`
      //     subscript the 2 alone and leave NH on the baseline, since an
      //     uppercase letter starts a new element or group.
      const bare =
        ch === "^"
          ? rest.match(/^([0-9]*[+\-−]|[0-9]+|[A-Za-z][+\-−]?)/)
          : rest.match(/^([A-Za-z]+[0-9]*|[0-9]+[a-z]*)/);
      const value = braced?.[1] ?? bare?.[1];
      if (value !== undefined) {
        flush();
        out.push(
          ch === "^"
            ? { t: "sup", v: normaliseCharge(value) }
            : { t: "sub", v: value },
        );
        i += 1 + (braced ? braced[0].length : bare![0].length);
        continue;
      }
    }
    buf += ch;
    i += 1;
  }

  flush();
  return out;
}

/** Characters that may appear inside a single formula-or-markup token. */
const TOKEN_CHAR = /[A-Za-z0-9()[\]·.^_+\-−'’]/;

/**
 * Walk token by token, typesetting anything that reads as a formula or that
 * carries an explicit `_` / `^` marker. A `{...}` group is always kept whole,
 * so a braced value containing an arbitrary symbol — `^{‡}`, `_{2g}` — survives
 * tokenisation intact.
 */
function wordPass(text: string): ChemNode[] {
  const out: ChemNode[] = [];
  let i = 0;

  const emitToken = (token: string) => {
    // Trailing punctuation should not defeat recognition: "H2O," or "H2O."
    const m = token.match(/^(.*?)([.,;:!?]*)$/);
    const core = m ? m[1] : token;
    const tail = m ? m[2] : "";

    if (core && isFormula(core)) out.push(...formulaNodes(core));
    else if (core && /[_^]/.test(core)) out.push(...markupNodes(core));
    else if (core) out.push({ t: "text", v: core });
    if (tail) out.push({ t: "text", v: tail });
  };

  while (i < text.length) {
    let token = "";
    while (i < text.length) {
      if (text[i] === "{") {
        const close = text.indexOf("}", i);
        if (close !== -1) {
          token += text.slice(i, close + 1);
          i = close + 1;
          continue;
        }
      }
      if (TOKEN_CHAR.test(text[i])) {
        token += text[i];
        i += 1;
        continue;
      }
      break;
    }

    if (token) {
      emitToken(token);
      continue;
    }

    // A run of separators (spaces, dashes, arrows, Greek letters, …).
    const start = i;
    while (i < text.length && !TOKEN_CHAR.test(text[i]) && text[i] !== "{") i += 1;
    if (i === start) i += 1; // never stall
    out.push({ t: "text", v: text.slice(start, i) });
  }

  return out;
}

function mergeText(nodes: ChemNode[]): ChemNode[] {
  const out: ChemNode[] = [];
  for (const n of nodes) {
    const prev = out[out.length - 1];
    if (n.t === "text" && prev?.t === "text") prev.v += n.v;
    else out.push(n);
  }
  return out;
}

/** Strip all markup — used for search indexing and plain-text export. */
export function chemToPlain(input: string): string {
  return applySymbols(input)
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/_\(([^)]*)\)_/g, "$1")
    .replace(/\\\(([^)]*)\\\)/g, "$1")
    .replace(/\^\{([^}]*)\}/g, "$1")
    .replace(/\^/g, "")
    .replace(/_\{([^}]*)\}/g, "$1")
    .replace(ARROW_RE, " → ")
    .replace(/\s+/g, " ")
    .trim();
}
