import type { Metadata } from "next";
import Link from "next/link";
import { CHAPTERS } from "@/data/chapters";
import { QUESTIONS_BY_CHAPTER } from "@/data/questions";
import { Reveal, RevealGroup } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "All ten units of the CBSE Class 12 Chemistry 2026-27 syllabus, with previous year questions and exam-ready answers for each.",
};

export default function ChaptersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Reveal>
        <h1 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold tracking-[-0.02em]">
          Chapters
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-[var(--color-muted-foreground)]">
          The ten units prescribed for 2026&ndash;27, in syllabus order. Marks shown are the unit
          weightings in the 70-mark theory paper.
        </p>
      </Reveal>

      <RevealGroup className="mt-9 grid gap-4 md:grid-cols-2">
        {CHAPTERS.map((c) => {
          const qs = QUESTIONS_BY_CHAPTER.get(c.id) ?? [];
          return (
            <Link
              key={c.id}
              href={`/chapters/${c.slug}`}
              className="clay clay-press group relative block h-full overflow-hidden p-6 hover:-translate-y-0.5 hover:shadow-[var(--shadow-clay-lg)]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[4px]"
                style={{ background: c.accent }}
              />
              <div className="flex items-start gap-4">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-[15px] font-display text-[17px] font-bold text-white"
                  style={{ background: c.accent }}
                >
                  {c.id}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-[18px] font-semibold leading-tight">
                      {c.name}
                    </h2>
                    <span className="rounded-lg bg-[var(--color-muted)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-muted-foreground)]">
                      {c.unitMarks} marks
                    </span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
                    {c.blurb}
                  </p>
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {c.topics.slice(0, 4).map((t) => (
                  <li
                    key={t}
                    className="rounded-lg bg-[var(--color-muted)] px-2 py-1 text-[11.5px] text-[var(--color-muted-foreground)]"
                  >
                    {t}
                  </li>
                ))}
                {c.topics.length > 4 && (
                  <li className="rounded-lg px-2 py-1 text-[11.5px] text-[var(--color-muted-foreground)]">
                    +{c.topics.length - 4} more
                  </li>
                )}
              </ul>

              <p className="mt-4 text-[12.5px] font-semibold text-[var(--color-primary)]">
                {qs.length} question{qs.length === 1 ? "" : "s"} &rarr;
              </p>
            </Link>
          );
        })}
      </RevealGroup>
    </section>
  );
}
