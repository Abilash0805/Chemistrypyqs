import type { Question } from "@/types";
import { CH01 } from "./chapters/ch01-solutions";
import { CH02 } from "./chapters/ch02-electrochemistry";
import { CH03 } from "./chapters/ch03-chemical-kinetics";
import { CH04 } from "./chapters/ch04-d-and-f-block";
import { CH05 } from "./chapters/ch05-coordination-compounds";
import { CH06 } from "./chapters/ch06-haloalkanes";
import { CH07 } from "./chapters/ch07-alcohols-phenols-ethers";
import { CH08 } from "./chapters/ch08-aldehydes-ketones-acids";
import { CH09 } from "./chapters/ch09-amines";
import { CH10 } from "./chapters/ch10-biomolecules";

export const QUESTIONS: Question[] = [
  ...CH01,
  ...CH02,
  ...CH03,
  ...CH04,
  ...CH05,
  ...CH06,
  ...CH07,
  ...CH08,
  ...CH09,
  ...CH10,
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
