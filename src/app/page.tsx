import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Shapes, Sparkles } from "lucide-react";
import { CHAPTERS, REMOVED_UNITS } from "@/data/chapters";
import { QUESTIONS_BY_CHAPTER, STATS, QUESTION_TYPE_LABEL } from "@/data/questions";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Structure } from "@/components/chem/Structure";
import { Chem } from "@/components/chem/Chem";

export default function HomePage() {
  const typeCounts = Object.entries(STATS.byType).sort((a, b) => b[1] - a[1]);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] shadow-[var(--shadow-clay)]">
                <Sparkles size={12} />
                2026&ndash;27 syllabus only
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 font-display text-[clamp(2.1rem,6vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.02em]">
                Every board question
                <br />
                that still{" "}
                <span className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                  counts.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.75] text-[var(--color-muted-foreground)]">
                CBSE Class 12 Chemistry previous year questions from{" "}
                <strong className="font-semibold text-[var(--color-foreground)]">2013 to 2025</strong>,
                filtered down to the ten units still in the syllabus &mdash; every one with an
                exam-ready answer, correct subscripts and charges, balanced equations and clear
                structural diagrams.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/chapters"
                  className="clay-press group inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-[var(--color-primary)] px-5 py-3 text-[14px] font-semibold text-[var(--color-on-primary)] shadow-[var(--shadow-clay-lg)]"
                >
                  Start with a chapter
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/browse"
                  className="clay clay-press inline-flex cursor-pointer items-center gap-2 rounded-2xl px-5 py-3 text-[14px] font-semibold"
                >
                  Browse all {STATS.total}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-9 grid max-w-lg grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                {[
                  { n: STATS.total, l: "questions" },
                  { n: 10, l: "units in syllabus" },
                  { n: 13, l: "board papers" },
                ].map((s) => (
                  <div key={s.l} className="clay px-4 py-3.5">
                    <dt className="font-display text-[26px] font-semibold leading-none tabular-nums text-[var(--color-primary)]">
                      {s.n}
                    </dt>
                    <dd className="mt-1.5 text-[11.5px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted-foreground)]">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Hero figure — a real diagram from the bank, not a stock illustration */}
          <Reveal delay={0.16} y={26} className="min-w-0">
            <div className="clay min-w-0 overflow-hidden p-2 sm:p-4">
              <Structure spec={{ kind: "named", id: "chlorobenzene-resonance" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- What's inside ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.1rem)] font-semibold tracking-[-0.015em]">
            Written the way the marking scheme reads
          </h2>
          <p className="mt-2.5 max-w-2xl text-[14.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
            Notation is typeset, not approximated. Every answer is laid out in the steps an examiner
            awards marks for.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: FlaskConical,
              title: "Real chemical notation",
              body: "Subscripts, superscripted charges, state symbols, Greek letters and reaction arrows carrying their reagents and conditions.",
              demo: "2KMnO4 + 5H2C2O4 + 3H2SO4 ->[Δ] K2SO4 + 2MnSO4 + 10CO2 + 8H2O",
            },
            {
              icon: Shapes,
              title: "Structures you can actually read",
              body: "Benzene rings with substituents, wedge–dash stereocentres, octahedral and square planar complexes — drawn as vectors, sharp at any zoom.",
            },
            {
              icon: BookOpen,
              title: "Answers with the working shown",
              body: "Numericals go step by step with the formula quoted; reason-based questions name the effect at work and finish with the conclusion.",
            },
          ].map((f) => (
            <article key={f.title} className="clay flex h-full flex-col p-5">
              <span className="grid size-10 place-items-center rounded-[14px] bg-[color-mix(in_oklab,var(--color-primary)_13%,transparent)] text-[var(--color-primary)]">
                <f.icon size={19} />
              </span>
              <h3 className="mt-4 font-display text-[17px] font-semibold">{f.title}</h3>
              <p className="mt-2 flex-1 text-[13.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
                {f.body}
              </p>
              {f.demo && (
                <div className="mt-3 text-[13px]">
                  <Chem text={f.demo} />
                </div>
              )}
            </article>
          ))}
        </RevealGroup>
      </section>

      {/* ---------------- Chapters ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.1rem)] font-semibold tracking-[-0.015em]">
                The ten units
              </h2>
              <p className="mt-2 text-[14.5px] text-[var(--color-muted-foreground)]">
                70 marks of theory, unit by unit.
              </p>
            </div>
            <Link
              href="/chapters"
              className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--color-primary)]"
            >
              All chapters
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((c) => {
            const count = QUESTIONS_BY_CHAPTER.get(c.id)?.length ?? 0;
            return (
              <Link
                key={c.id}
                href={`/chapters/${c.slug}`}
                className="clay clay-press group relative block h-full overflow-hidden p-5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-clay-lg)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: c.accent }}
                />
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-xl font-display text-[15px] font-bold text-white"
                    style={{ background: c.accent }}
                  >
                    {c.id}
                  </span>
                  <span className="rounded-lg bg-[var(--color-muted)] px-2 py-1 text-[11px] font-semibold text-[var(--color-muted-foreground)]">
                    {c.unitMarks} marks
                  </span>
                </div>
                <h3 className="mt-3.5 font-display text-[16.5px] font-semibold leading-tight">
                  {c.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-[1.65] text-[var(--color-muted-foreground)]">
                  {c.blurb}
                </p>
                <p className="mt-3.5 text-[12px] font-semibold text-[var(--color-primary)]">
                  {count} question{count === 1 ? "" : "s"} &rarr;
                </p>
              </Link>
            );
          })}
        </RevealGroup>
      </section>

      {/* ---------------- Coverage ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-14 pb-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="clay h-full p-6">
              <h2 className="font-display text-[19px] font-semibold">Every question type</h2>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
                The paper has five sections. The bank covers all of them.
              </p>
              <ul className="mt-5 space-y-2.5">
                {typeCounts.map(([type, n]) => (
                  <li key={type} className="flex items-center gap-3">
                    <span className="w-[112px] shrink-0 text-[12.5px] font-medium">
                      {QUESTION_TYPE_LABEL[type as keyof typeof QUESTION_TYPE_LABEL]}
                    </span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-muted)]">
                      <span
                        className="block h-full rounded-full bg-[var(--color-primary)]"
                        style={{ width: `${(n / STATS.total) * 100 * 3.2}%`, maxWidth: "100%" }}
                      />
                    </span>
                    <span className="w-7 shrink-0 text-right text-[12.5px] font-semibold tabular-nums text-[var(--color-muted-foreground)]">
                      {n}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="clay h-full p-6">
              <h2 className="font-display text-[19px] font-semibold">What has been left out</h2>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-[var(--color-muted-foreground)]">
                Older papers are full of questions on units CBSE removed in the NCERT
                rationalisation. Those questions are not in this bank &mdash; studying them is wasted
                time.
              </p>
              <ul className="mt-5 grid gap-2">
                {REMOVED_UNITS.map((u) => (
                  <li
                    key={u}
                    className="flex items-center gap-2.5 rounded-[var(--radius-sm)] bg-[var(--color-muted)] px-3 py-2 text-[13px] text-[var(--color-muted-foreground)] line-through decoration-[var(--color-destructive)]/60"
                  >
                    {u}
                  </li>
                ))}
              </ul>
              <Link
                href="/syllabus"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-primary)]"
              >
                See the full syllabus breakdown
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
