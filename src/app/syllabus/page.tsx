import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { CHAPTERS, REMOVED_UNITS } from "@/data/chapters";
import { QUESTIONS_BY_CHAPTER, STATS } from "@/data/questions";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Syllabus 2026–27",
  description:
    "The CBSE Class 12 Chemistry syllabus for 2026-27: ten units, their marks weighting, prescribed topics, and the six units removed in the NCERT rationalisation.",
};

export default function SyllabusPage() {
  const totalMarks = CHAPTERS.reduce((s, c) => s + c.unitMarks, 0);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <Reveal>
        <h1 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold tracking-[-0.02em]">
          The 2026&ndash;27 syllabus
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-[var(--color-muted-foreground)]">
          Theory carries 70 marks over ten units; the practical examination carries the remaining
          30. Every question in this bank belongs to one of the ten units below.
        </p>
      </Reveal>

      {/* marks table */}
      <Reveal delay={0.06}>
        <div className="clay mt-8 overflow-hidden">
          <table className="w-full text-[13.5px]">
            <thead>
              <tr className="bg-[var(--color-muted)] text-left">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
                  Unit
                </th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
                  Title
                </th>
                <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
                  Marks
                </th>
                <th className="px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
                  Questions
                </th>
              </tr>
            </thead>
            <tbody>
              {CHAPTERS.map((c) => (
                <tr key={c.id} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 tabular-nums text-[var(--color-muted-foreground)]">
                    {c.unit}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/chapters/${c.slug}`}
                      className="font-medium transition-colors hover:text-[var(--color-primary)]"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums">{c.unitMarks}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-[var(--color-muted-foreground)]">
                    {QUESTIONS_BY_CHAPTER.get(c.id)?.length ?? 0}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-[var(--color-border)] bg-[var(--color-muted)] font-semibold">
                <td className="px-4 py-3" colSpan={2}>
                  Theory total
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{totalMarks}</td>
                <td className="px-4 py-3 text-right tabular-nums">{STATS.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* in / out */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="clay h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-[18px] font-semibold">
              <span className="grid size-6 place-items-center rounded-lg bg-[color-mix(in_oklab,var(--color-accent)_18%,transparent)] text-[var(--color-accent)]">
                <Check size={13} strokeWidth={3} />
              </span>
              In the syllabus
            </h2>
            <ul className="mt-4 space-y-1.5">
              {CHAPTERS.map((c) => (
                <li key={c.id} className="flex items-baseline gap-2.5 text-[13.5px]">
                  <span
                    className="mt-[6px] size-[7px] shrink-0 rounded-full"
                    style={{ background: c.accent }}
                  />
                  <Link
                    href={`/chapters/${c.slug}`}
                    className="transition-colors hover:text-[var(--color-primary)]"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="clay h-full p-6">
            <h2 className="flex items-center gap-2 font-display text-[18px] font-semibold">
              <span className="grid size-6 place-items-center rounded-lg bg-[color-mix(in_oklab,var(--color-destructive)_16%,transparent)] text-[var(--color-destructive)]">
                <X size={13} strokeWidth={3} />
              </span>
              Removed &mdash; do not study
            </h2>
            <ul className="mt-4 space-y-1.5">
              {REMOVED_UNITS.map((u) => (
                <li
                  key={u}
                  className="flex items-baseline gap-2.5 text-[13.5px] text-[var(--color-muted-foreground)]"
                >
                  <span className="mt-[6px] size-[7px] shrink-0 rounded-full bg-[var(--color-border)]" />
                  <span className="line-through decoration-[var(--color-destructive)]/50">{u}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
              These units were dropped in the NCERT rationalisation and remain out for 2026&ndash;27.
              Board papers from 2013 to 2022 are full of questions on them &mdash; every such
              question has been excluded from this bank.
            </p>
          </div>
        </Reveal>
      </div>

      {/* per-chapter topic detail */}
      <Reveal delay={0.1}>
        <h2 className="mt-12 font-display text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.015em]">
          Topics, unit by unit
        </h2>
      </Reveal>

      <div className="mt-6 space-y-4">
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.id} delay={Math.min(i, 6) * 0.03}>
            <article className="clay p-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="grid size-8 place-items-center rounded-xl font-display text-[14px] font-bold text-white"
                  style={{ background: c.accent }}
                >
                  {c.id}
                </span>
                <h3 className="font-display text-[16.5px] font-semibold">{c.name}</h3>
                <span className="rounded-lg bg-[var(--color-muted)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-muted-foreground)]">
                  {c.unitMarks} marks
                </span>
              </div>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {c.topics.map((t) => (
                  <li
                    key={t}
                    className="flex items-baseline gap-2 text-[13px] text-[var(--color-muted-foreground)]"
                  >
                    <span className="mt-[6px] size-[5px] shrink-0 rounded-full bg-[var(--color-primary)]" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
