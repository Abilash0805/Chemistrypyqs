import type { Question } from "@/types";
import { CH01 } from "./chapters/ch01-solutions";
import { CH01B } from "./chapters/ch01b-solutions";
import { CH02 } from "./chapters/ch02-electrochemistry";
import { CH02B } from "./chapters/ch02b-electrochemistry";
import { CH03 } from "./chapters/ch03-chemical-kinetics";
import { CH03B } from "./chapters/ch03b-chemical-kinetics";
import { CH04 } from "./chapters/ch04-d-and-f-block";
import { CH04B } from "./chapters/ch04b-d-and-f-block";
import { CH05 } from "./chapters/ch05-coordination-compounds";
import { CH05B } from "./chapters/ch05b-coordination-compounds";
import { CH06 } from "./chapters/ch06-haloalkanes";
import { CH06B } from "./chapters/ch06b-haloalkanes";
import { CH07 } from "./chapters/ch07-alcohols-phenols-ethers";
import { CH07B } from "./chapters/ch07b-alcohols-phenols-ethers";
import { CH08 } from "./chapters/ch08-aldehydes-ketones-acids";
import { CH08B } from "./chapters/ch08b-aldehydes-ketones-acids";
import { CH09 } from "./chapters/ch09-amines";
import { CH09B } from "./chapters/ch09b-amines";
import { CH10 } from "./chapters/ch10-biomolecules";
import { CH10B } from "./chapters/ch10b-biomolecules";

export const QUESTIONS: Question[] = [
  ...CH01,
  ...CH01B,
  ...CH02,
  ...CH02B,
  ...CH03,
  ...CH03B,
  ...CH04,
  ...CH04B,
  ...CH05,
  ...CH05B,
  ...CH06,
  ...CH06B,
  ...CH07,
  ...CH07B,
  ...CH08,
  ...CH08B,
  ...CH09,
  ...CH09B,
  ...CH10,
  ...CH10B,
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
