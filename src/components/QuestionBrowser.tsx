"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Filter, Search, X } from "lucide-react";
import type { Question } from "@/types";
import { QuestionCard } from "./QuestionCard";
import { chemToPlain } from "@/lib/chem-parse";
import { DIFFICULTY_LABEL, QUESTION_TYPE_LABEL } from "@/data/questions";
import { CHAPTER_BY_ID } from "@/data/chapters";
import { useBookmarks, useSolved } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

/** Pre-compute a plain-text haystack once per question, not once per keystroke. */
function buildIndex(questions: Question[]) {
  const map = new Map<string, string>();
  for (const q of questions) {
    const parts = [
      q.question,
      q.passage ?? "",
      q.topic,
      q.keyPoint ?? "",
      ...(q.options ?? []),
      ...q.answer.flatMap((b) => [
        b.text ?? "",
        b.label ?? "",
        b.equation ?? "",
        ...(b.equations ?? []),
        ...(b.points ?? []),
        ...(b.table ?? []).flat(),
      ]),
      CHAPTER_BY_ID.get(q.chapter)?.name ?? "",
    ];
    map.set(q.id, chemToPlain(parts.join(" ")).toLowerCase());
  }
  return map;
}

type SortKey = "default" | "marks-asc" | "marks-desc" | "recent";

export function QuestionBrowser({
  questions,
  showChapter = false,
  emptyMessage = "No questions match these filters.",
}: {
  questions: Question[];
  showChapter?: boolean;
  emptyMessage?: string;
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [types, setTypes] = useState<Set<Question["type"]>>(new Set());
  const [marks, setMarks] = useState<Set<number>>(new Set());
  const [difficulty, setDifficulty] = useState<Set<Question["difficulty"]>>(new Set());
  const [year, setYear] = useState<number | null>(null);
  const [sort, setSort] = useState<SortKey>("default");
  const [revealAll, setRevealAll] = useState<boolean | undefined>(undefined);
  const [showFilters, setShowFilters] = useState(false);

  const bookmarks = useBookmarks();
  const solved = useSolved();

  const index = useMemo(() => buildIndex(questions), [questions]);

  const years = useMemo(
    () => Array.from(new Set(questions.flatMap((q) => q.years))).sort((a, b) => b - a),
    [questions],
  );
  const availableTypes = useMemo(
    () => Array.from(new Set(questions.map((q) => q.type))),
    [questions],
  );
  const availableMarks = useMemo(
    () => Array.from(new Set(questions.map((q) => q.marks))).sort((a, b) => a - b),
    [questions],
  );

  const filtered = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    let out = questions.filter((q) => {
      if (types.size && !types.has(q.type)) return false;
      if (marks.size && !marks.has(q.marks)) return false;
      if (difficulty.size && !difficulty.has(q.difficulty)) return false;
      if (year !== null && !q.years.includes(year)) return false;
      if (needle && !(index.get(q.id) ?? "").includes(needle)) return false;
      return true;
    });

    if (sort === "marks-asc") out = [...out].sort((a, b) => a.marks - b.marks);
    else if (sort === "marks-desc") out = [...out].sort((a, b) => b.marks - a.marks);
    else if (sort === "recent")
      out = [...out].sort((a, b) => Math.max(...b.years, 0) - Math.max(...a.years, 0));

    return out;
  }, [questions, types, marks, difficulty, year, deferredQuery, index, sort]);

  const solvedCount = filtered.filter((q) => solved.has(q.id)).length;
  const activeFilters =
    types.size + marks.size + difficulty.size + (year !== null ? 1 : 0) + (query ? 1 : 0);

  const clearAll = () => {
    setTypes(new Set());
    setMarks(new Set());
    setDifficulty(new Set());
    setYear(null);
    setQuery("");
  };

  function toggle<T>(set: Set<T>, value: T, setter: (s: Set<T>) => void) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  }

  const pill = (active: boolean) =>
    cn(
      "clay-press min-h-10 cursor-pointer rounded-xl border px-3 py-2 text-[13px] font-medium transition-colors sm:min-h-0 sm:py-1.5 sm:text-[12.5px]",
      active
        ? "border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)]"
        : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-foreground)]",
    );

  return (
    <div>
      {/* toolbar */}
      <div className="no-print sticky top-16 z-20 -mx-4 mb-4 bg-[color-mix(in_oklab,var(--color-background)_88%,transparent)] px-4 py-2.5 backdrop-blur-xl sm:mb-5 sm:py-3">
        <div className="flex flex-wrap items-center gap-2">
          <label className="relative flex min-w-[120px] flex-1 items-center sm:min-w-[200px]">
            <Search
              size={15}
              className="pointer-events-none absolute left-3 text-[var(--color-muted-foreground)]"
            />
            <span className="sr-only">Search questions</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, answers, reagents…"
              className="clay min-h-11 w-full rounded-xl py-2.5 pl-9 pr-9 text-[15px] outline-none placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)] sm:min-h-0 sm:text-[13.5px]"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 cursor-pointer text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              >
                <X size={14} />
              </button>
            )}
          </label>

          <button
            onClick={() => setShowFilters((v) => !v)}
            aria-expanded={showFilters}
            className={cn(pill(showFilters || activeFilters > 0), "flex items-center gap-1.5")}
          >
            <Filter size={13} />
            Filters
            {activeFilters > 0 && (
              <span className="grid size-4 place-items-center rounded-full bg-[var(--color-card)] text-[10px] font-bold text-[var(--color-primary)]">
                {activeFilters}
              </span>
            )}
          </button>

          <button
            onClick={() => setRevealAll((v) => (v === true ? undefined : true))}
            aria-label={revealAll === true ? "Hide all answers" : "Reveal all answers"}
            className={cn(pill(revealAll === true), "flex items-center gap-1.5")}
          >
            {revealAll === true ? <EyeOff size={14} /> : <Eye size={14} />}
            <span className="sr-only xs:not-sr-only">
              {revealAll === true ? "Hide all" : "Reveal all"}
            </span>
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="clay mt-3 space-y-3 p-4">
                <FilterRow label="Question type">
                  {availableTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggle(types, t, setTypes)}
                      className={pill(types.has(t))}
                    >
                      {QUESTION_TYPE_LABEL[t]}
                    </button>
                  ))}
                </FilterRow>

                <FilterRow label="Marks">
                  {availableMarks.map((m) => (
                    <button
                      key={m}
                      onClick={() => toggle(marks, m, setMarks)}
                      className={pill(marks.has(m))}
                    >
                      {m} mark{m > 1 ? "s" : ""}
                    </button>
                  ))}
                </FilterRow>

                <FilterRow label="Difficulty">
                  {(["easy", "medium", "hard"] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => toggle(difficulty, d, setDifficulty)}
                      className={pill(difficulty.has(d))}
                    >
                      {DIFFICULTY_LABEL[d]}
                    </button>
                  ))}
                </FilterRow>

                <FilterRow label="Board paper year">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setYear(year === y ? null : y)}
                      className={pill(year === y)}
                    >
                      {y}
                    </button>
                  ))}
                </FilterRow>

                <FilterRow label="Sort by">
                  {(
                    [
                      ["default", "Default"],
                      ["marks-asc", "Marks ↑"],
                      ["marks-desc", "Marks ↓"],
                      ["recent", "Most recent"],
                    ] as [SortKey, string][]
                  ).map(([key, label]) => (
                    <button key={key} onClick={() => setSort(key)} className={pill(sort === key)}>
                      {label}
                    </button>
                  ))}
                </FilterRow>

                {activeFilters > 0 && (
                  <button
                    onClick={clearAll}
                    className="cursor-pointer text-[12.5px] font-medium text-[var(--color-primary)] underline underline-offset-2"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-2 text-[13px] text-[var(--color-muted-foreground)] sm:mt-2.5 sm:text-[12.5px]">
          <strong className="font-semibold text-[var(--color-foreground)]">{filtered.length}</strong>{" "}
          question{filtered.length === 1 ? "" : "s"}
          {solved.ready && solvedCount > 0 && (
            <>
              {" · "}
              <span className="text-[var(--color-accent)]">{solvedCount} solved</span>
            </>
          )}
        </p>
      </div>

      {/* list */}
      {filtered.length === 0 ? (
        <div className="clay px-6 py-12 text-center">
          <p className="text-[14px] text-[var(--color-muted-foreground)]">{emptyMessage}</p>
          {activeFilters > 0 && (
            <button
              onClick={clearAll}
              className="clay-press mt-4 cursor-pointer rounded-xl bg-[var(--color-primary)] px-4 py-2 text-[13px] font-semibold text-[var(--color-on-primary)]"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((q, i) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={i}
              forceOpen={revealAll}
              showChapter={showChapter}
              bookmarked={bookmarks.has(q.id)}
              solved={solved.has(q.id)}
              onBookmark={bookmarks.toggle}
              onSolve={solved.toggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}
