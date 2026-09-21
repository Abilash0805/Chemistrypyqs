import type { Question } from "@/types";
import { CH01 } from "./chapters/ch01-solutions";
import { CH01B } from "./chapters/ch01b-solutions";
import { CH02 } from "./chapters/ch02-electrochemistry";
import { CH02B } from "./chapters/ch02b-electrochemistry";
import { CH02C } from "./chapters/ch02c-electrolysis";
import { CH03 } from "./chapters/ch03-chemical-kinetics";
import { CH03B } from "./chapters/ch03b-chemical-kinetics";
import { CH04 } from "./chapters/ch04-d-and-f-block";
import { CH04B } from "./chapters/ch04b-d-and-f-block";
import { CH05 } from "./chapters/ch05-coordination-compounds";
import { CH05B } from "./chapters/ch05b-coordination-compounds";
import { CH05C } from "./chapters/ch05c-cft";
import { CH06 } from "./chapters/ch06-haloalkanes";
import { CH06B } from "./chapters/ch06b-haloalkanes";
import { CH06C } from "./chapters/ch06c-reactions";
import { CH06D } from "./chapters/ch06d-short";
import { CH07 } from "./chapters/ch07-alcohols-phenols-ethers";
import { CH07B } from "./chapters/ch07b-alcohols-phenols-ethers";
import { CH07C } from "./chapters/ch07c-reactions";
import { CH07D } from "./chapters/ch07d-named";
import { CH08 } from "./chapters/ch08-aldehydes-ketones-acids";
import { CH08B } from "./chapters/ch08b-aldehydes-ketones-acids";
import { CH08C } from "./chapters/ch08c-reactions";
import { CH08D } from "./chapters/ch08d-named";
import { CH08E } from "./chapters/ch08e-ordering";
import { CH09 } from "./chapters/ch09-amines";
import { CH09B } from "./chapters/ch09b-amines";
import { CH09C } from "./chapters/ch09c-reactions";
import { CH09D } from "./chapters/ch09d-reasoning";
import { CH09E } from "./chapters/ch09e-chains";
import { CH10 } from "./chapters/ch10-biomolecules";
import { CH10B } from "./chapters/ch10b-biomolecules";
import { CH10C } from "./chapters/ch10c-reactions";
import { CH10D } from "./chapters/ch10d-definitions";
import { P2022T2 } from "./chapters/p2022-term2";
import { P2023_5611 } from "./chapters/p2023-56-1-1";
import { P2023_5621 } from "./chapters/p2023-56-2-1";
import { P2023_5631 } from "./chapters/p2023-56-3-1";

export const QUESTIONS: Question[] = [
  ...CH01,
  ...CH01B,
  ...CH02,
  ...CH02B,
  ...CH02C,
  ...CH03,
  ...CH03B,
  ...CH04,
  ...CH04B,
  ...CH05,
  ...CH05B,
  ...CH05C,
  ...CH06,
  ...CH06B,
  ...CH06C,
  ...CH06D,
  ...CH07,
  ...CH07B,
  ...CH07C,
  ...CH07D,
  ...CH08,
  ...CH08B,
  ...CH08C,
  ...CH08D,
  ...CH08E,
  ...CH09,
  ...CH09B,
  ...CH09C,
  ...CH09D,
  ...CH09E,
  ...CH10,
  ...CH10B,
  ...CH10C,
  ...CH10D,
  ...P2022T2,
  ...P2023_5611,
  ...P2023_5621,
  ...P2023_5631,
];

export const QUESTIONS_BY_CHAPTER = new Map<number, Question[]>(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => [n, QUESTIONS.filter((q) => q.chapter === n)]),
);

export const ALL_YEARS = Array.from(new Set(QUESTIONS.flatMap((q) => q.years))).sort(
  (a, b) => b - a,
);

export const QUESTION_TYPE_LABEL: Record<Question["type"], string> = {
  mcq: "MCQ",
  "assertion-reason": "Assertion–Reason",
  "case-study": "Case study",
  "very-short": "Very short",
  short: "Short answer",
  long: "Long answer",
  numerical: "Numerical",
};

export const DIFFICULTY_LABEL: Record<Question["difficulty"], string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

/** Topics that actually appear in the bank, per chapter. */
export function topicsFor(chapter: number): string[] {
  const qs = QUESTIONS_BY_CHAPTER.get(chapter) ?? [];
  return Array.from(new Set(qs.map((q) => q.topic))).sort();
}

export const STATS = {
  total: QUESTIONS.length,
  byType: QUESTIONS.reduce<Record<string, number>>((acc, q) => {
    acc[q.type] = (acc[q.type] ?? 0) + 1;
    return acc;
  }, {}),
  totalMarks: QUESTIONS.reduce((s, q) => s + q.marks, 0),
  years: ALL_YEARS,
};
