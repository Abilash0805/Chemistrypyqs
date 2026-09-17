"use client";

import { memo, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronDown,
  CircleCheck,
  Lightbulb,
} from "lucide-react";
import type { AnswerBlock, Question } from "@/types";
import { Chem, Equation } from "./chem/Chem";
import { Structure } from "./chem/Structure";
import { QUESTION_TYPE_LABEL } from "@/data/questions";
import { CHAPTER_BY_ID } from "@/data/chapters";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Answer rendering                                                    */
/* ------------------------------------------------------------------ */

function Block({ block }: { block: AnswerBlock }) {
  return (
    <div className="mt-3 first:mt-0">
      {block.label && (
        <p className="mb-1 text-[12.5px] font-semibold tracking-[0.02em] text-[var(--color-primary)]">
          <Chem text={block.label} />
        </p>
      )}
      {block.text && (
        <p className="text-[14.5px] leading-[1.72] text-[var(--color-foreground)]">
          <Chem text={block.text} />
        </p>
      )}
      {block.equation && <Equation text={block.equation} />}
      {block.equations?.map((eq, i) => <Equation key={i} text={eq} />)}
      {block.points && (
        <ul className="mt-2 space-y-1.5">
          {block.points.map((p, i) => (
            <li key={i} className="flex gap-2.5 text-[14.5px] leading-[1.7]">
              <span
                aria-hidden
                className="mt-[9px] size-[5px] shrink-0 rounded-full bg-[var(--color-primary)]"
              />
              <span>
                <Chem text={p} />
              </span>
            </li>
          ))}
        </ul>
      )}
      {block.table && (
        <div className="thin-scroll overflow-x-auto">
          <table className="answer-table">
            <thead>
              <tr>
                {block.table[0].map((h, i) => (
                  <th key={i}>
                    <Chem text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.slice(1).map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>
                      <Chem text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {block.figure && <Structure spec={block.figure} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chips                                                               */
/* ------------------------------------------------------------------ */

function Chip({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "brand" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2 py-[3px] text-[11px] font-semibold tracking-[0.02em]",
        tone === "brand" &&
          "bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-[var(--color-primary)]",
        tone === "accent" &&
          "bg-[color-mix(in_oklab,var(--color-accent)_16%,transparent)] text-[var(--color-accent)]",
        tone === "muted" && "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]",
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */

export interface QuestionCardProps {
  question: Question;
  index?: number;
  /** Controlled reveal — used by the "reveal all" button. */
  forceOpen?: boolean;
  bookmarked?: boolean;
  solved?: boolean;
  onBookmark?: (id: string) => void;
  onSolve?: (id: string) => void;
  showChapter?: boolean;
}

export const QuestionCard = memo(function QuestionCard({
  question: q,
  index,
  forceOpen,
  bookmarked,
  solved,
  onBookmark,
  onSolve,
  showChapter,
}: QuestionCardProps) {
  const [openSelf, setOpenSelf] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const panelId = useId();
  const open = forceOpen ?? openSelf;
  const chapter = CHAPTER_BY_ID.get(q.chapter);

  const isChoice = q.type === "mcq" || q.type === "assertion-reason";

  return (
    <motion.article
      initial={{ opacity: 0, y: 14, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min((index ?? 0) % 8, 7) * 0.045,
      }}
      className={cn(
        "clay overflow-hidden",
        solved && "border-[color-mix(in_oklab,var(--color-accent)_45%,var(--color-border))]",
      )}
    >
      {/* header strip */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-2.5 sm:px-5">
        <Chip tone="brand">{QUESTION_TYPE_LABEL[q.type]}</Chip>
        <Chip>
          {q.marks} mark{q.marks > 1 ? "s" : ""}
        </Chip>
        {showChapter && chapter && <Chip>Ch {chapter.id}</Chip>}
        <Chip>{q.topic}</Chip>
        {q.years.length > 0 && (
          <Chip tone="accent">{q.years.slice(0, 3).sort((a, b) => b - a).join(" · ")}</Chip>
        )}
        {q.years.length > 1 && <Chip tone="accent">Repeated</Chip>}

        <div className="ml-auto flex items-center gap-1 no-print">
          {onSolve && (
            <button
              onClick={() => onSolve(q.id)}
              aria-label={solved ? "Mark as unsolved" : "Mark as solved"}
              aria-pressed={!!solved}
              className={cn(
                "clay-press grid size-7 cursor-pointer place-items-center rounded-lg border transition-colors",
                solved
                  ? "border-transparent bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                  : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)]",
              )}
            >
              <Check size={13} strokeWidth={3} />
            </button>
          )}
          {onBookmark && (
            <button
              onClick={() => onBookmark(q.id)}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this question"}
              aria-pressed={!!bookmarked}
              className={cn(
                "clay-press grid size-7 cursor-pointer place-items-center rounded-lg border transition-colors",
                bookmarked
                  ? "border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                  : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)]",
              )}
            >
              {bookmarked ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}
            </button>
          )}
        </div>
      </div>

      {/* body */}
      <div className="px-4 py-4 sm:px-5">
        {q.passage && (
          <div className="mb-4 rounded-[var(--radius-md)] border-l-[3px] border-[var(--color-primary)] bg-[var(--color-muted)] px-4 py-3">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
              Read the passage
            </p>
            <p className="text-[13.5px] leading-[1.75] text-[var(--color-muted-foreground)]">
              <Chem text={q.passage} />
            </p>
          </div>
        )}

        <div className="flex gap-3">
          {typeof index === "number" && (
            <span className="mt-[2px] shrink-0 font-display text-[15px] font-semibold tabular-nums text-[var(--color-muted-foreground)]">
              {index + 1}.
            </span>
          )}
          <div className="min-w-0 flex-1">
            {q.question.split("\n").map((line, i) => (
              <p key={i} className="text-[15px] font-medium leading-[1.68] first:mt-0 [&+&]:mt-1.5">
                <Chem text={line} />
              </p>
            ))}
          </div>
        </div>

        {q.figures?.map((f, i) => <Structure key={i} spec={f} />)}

        {/* options */}
        {isChoice && q.options && (
          <ul className="mt-3.5 grid gap-2 sm:grid-cols-2">
            {q.options.map((opt, i) => {
              const revealed = open || picked !== null;
              const isCorrect = i === q.correct;
              const isPicked = picked === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setPicked(i)}
                    disabled={picked !== null}
                    className={cn(
                      "clay-press flex w-full items-start gap-2.5 rounded-[var(--radius-sm)] border px-3 py-2.5 text-left text-[13.5px] leading-[1.55]",
                      picked === null && "cursor-pointer hover:border-[var(--color-primary)]",
                      revealed && isCorrect &&
                        "border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_11%,transparent)]",
                      revealed && isPicked && !isCorrect &&
                        "border-[var(--color-destructive)] bg-[color-mix(in_oklab,var(--color-destructive)_10%,transparent)]",
                      !(revealed && (isCorrect || isPicked)) &&
                        "border-[var(--color-border)] bg-[var(--color-card)]",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-5 shrink-0 place-items-center rounded-md text-[11px] font-bold",
                        revealed && isCorrect
                          ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                          : "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]",
                      )}
                    >
                      {"ABCD"[i]}
                    </span>
                    <span className="min-w-0 flex-1">
                      <Chem text={opt} />
                    </span>
                    {revealed && isCorrect && (
                      <CircleCheck size={15} className="mt-[2px] shrink-0 text-[var(--color-accent)]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* reveal toggle */}
        {forceOpen === undefined && (
          <button
            onClick={() => setOpenSelf((v) => !v)}
            aria-expanded={openSelf}
            aria-controls={panelId}
            className="clay-press no-print mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-[13px] font-semibold text-[var(--color-on-primary)] shadow-[var(--shadow-clay)]"
          >
            {openSelf ? "Hide answer" : "Show answer"}
            <ChevronDown
              size={14}
              className={cn("transition-transform duration-200", openSelf && "rotate-180")}
            />
          </button>
        )}

        {/* answer */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="answer-prose mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-3.5">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-[var(--color-accent)]">
                  Exam-ready answer
                </p>
                {q.answer.map((b, i) => (
                  <Block key={i} block={b} />
                ))}

                {q.keyPoint && (
                  <div className="mt-4 flex gap-2.5 rounded-[var(--radius-sm)] border border-[color-mix(in_oklab,var(--color-accent)_35%,var(--color-border))] bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] px-3 py-2.5">
                    <Lightbulb size={15} className="mt-[2px] shrink-0 text-[var(--color-accent)]" />
                    <p className="text-[13px] font-medium leading-[1.6]">
                      <Chem text={q.keyPoint} />
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
});
