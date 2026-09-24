import type { FigureSpec } from "@/components/chem/Structure";

export type QuestionType =
  | "mcq"
  | "assertion-reason"
  | "case-study"
  | "very-short"
  | "short"
  | "long"
  | "numerical";

export type Difficulty = "easy" | "medium" | "hard";

export interface AnswerBlock {
  /** Optional heading for this part of the answer, e.g. "(a)" or "Step 2". */
  label?: string;
  /** Prose, chemistry-aware. */
  text?: string;
  /** A balanced equation rendered on its own line. */
  equation?: string;
  /** Several equations in sequence. */
  equations?: string[];
  /** Bullet points. */
  points?: string[];
  /** A diagram. */
  figure?: FigureSpec;
  /** A small table: first row is the header. */
  table?: string[][];
}

export interface Question {
  id: string;
  chapter: number;
  /** Full question text, chemistry-aware markup. */
  question: string;
  /** MCQ options, in order A–D. */
  options?: string[];
  /** Index into `options` of the correct choice. */
  correct?: number;
  /** Shared passage for case-study questions. */
  passage?: string;
  /** Diagrams that belong to the question itself. */
  figures?: FigureSpec[];
  /** The exam-ready answer, in blocks. */
  answer: AnswerBlock[];
  /** One-line takeaway shown under the answer. */
  keyPoint?: string;
  marks: 1 | 2 | 3 | 4 | 5;
  type: QuestionType;
  difficulty: Difficulty;
  /** Board-paper years this question (or a near-identical one) appeared in. */
  years: number[];
  /** Topic tag within the chapter, used for filtering. */
  topic: string;
}

export interface Chapter {
  id: number;
  name: string;
  /** Short slug used in URLs. */
  slug: string;
  /** NCERT unit number in the 2026-27 syllabus. */
  unit: number;
  /** Marks this unit carries in the 70-mark theory paper. */
  unitMarks: number;
  blurb: string;
  /** Sub-topics prescribed by the current syllabus. */
  topics: string[];
  /** Topics explicitly removed by CBSE rationalisation, kept for clarity. */
  deleted?: string[];
  accent: string;
}
