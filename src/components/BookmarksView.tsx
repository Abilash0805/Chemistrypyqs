"use client";

import Link from "next/link";
import { useMemo } from "react";
import { BookmarkX, Trash2 } from "lucide-react";
import { QUESTIONS } from "@/data/questions";
import { QuestionBrowser } from "./QuestionBrowser";
import { useBookmarks, useSolved } from "@/hooks/useProgress";

export function BookmarksView() {
  const bookmarks = useBookmarks();
  const solved = useSolved();

  const saved = useMemo(
    () => QUESTIONS.filter((q) => bookmarks.ids.has(q.id)),
    [bookmarks.ids],
  );

  const solvedCount = solved.ids.size;
  const pct = Math.round((solvedCount / QUESTIONS.length) * 100);

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold tracking-[-0.02em]">
        Your revision list
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-[var(--color-muted-foreground)]">
        Bookmarks and solved marks are stored in this browser only &mdash; nothing is uploaded, and
        they will not follow you to another device.
      </p>

      {/* progress */}
      {solved.ready && (
        <div className="clay mt-7 p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
              Overall progress
            </p>
            <p className="font-display text-[20px] font-semibold tabular-nums">
              {solvedCount}
              <span className="text-[var(--color-muted-foreground)]">/{QUESTIONS.length}</span>
            </p>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[var(--color-muted)]">
            <div
              className="h-full rounded-full bg-[var(--color-accent)] transition-[width] duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[12.5px] text-[var(--color-muted-foreground)]">
              {pct}% of the bank marked solved
            </p>
            {solvedCount > 0 && (
              <button
                onClick={solved.clear}
                className="inline-flex cursor-pointer items-center gap-1.5 text-[12px] font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-destructive)]"
              >
                <Trash2 size={12} />
                Reset progress
              </button>
            )}
          </div>
        </div>
      )}

      <div className="mt-8">
        {!bookmarks.ready ? null : saved.length === 0 ? (
          <div className="clay px-6 py-14 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-[var(--color-muted)] text-[var(--color-muted-foreground)]">
              <BookmarkX size={22} />
            </span>
            <p className="mt-4 font-display text-[17px] font-semibold">Nothing saved yet</p>
            <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
              Tap the bookmark icon on any question to keep it here for the night before the exam.
            </p>
            <Link
              href="/browse"
              className="clay-press mt-5 inline-flex cursor-pointer rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-on-primary)]"
            >
              Browse questions
            </Link>
          </div>
        ) : (
          <QuestionBrowser
            questions={saved}
            showChapter
            emptyMessage="None of your bookmarks match these filters."
          />
        )}
      </div>
    </section>
  );
}
