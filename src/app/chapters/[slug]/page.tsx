import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CHAPTERS, CHAPTER_BY_SLUG } from "@/data/chapters";
import { QUESTIONS_BY_CHAPTER } from "@/data/questions";
import { QuestionBrowser } from "@/components/QuestionBrowser";

export function generateStaticParams() {
  return CHAPTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/chapters/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const chapter = CHAPTER_BY_SLUG.get(slug);
  if (!chapter) return { title: "Chapter not found" };
  return {
    title: chapter.name,
    description: `${chapter.name} — CBSE Class 12 Chemistry previous year questions with exam-ready answers. ${chapter.blurb}`,
  };
}

export default async function ChapterPage(props: PageProps<"/chapters/[slug]">) {
  const { slug } = await props.params;
  const chapter = CHAPTER_BY_SLUG.get(slug);
  if (!chapter) notFound();

  const questions = QUESTIONS_BY_CHAPTER.get(chapter.id) ?? [];
  const idx = CHAPTERS.findIndex((c) => c.id === chapter.id);
  const prev = CHAPTERS[idx - 1];
  const next = CHAPTERS[idx + 1];

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/chapters"
        className="no-print inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
      >
        <ArrowLeft size={14} />
        All chapters
      </Link>

      {/* chapter header */}
      <header className="clay relative mt-4 overflow-hidden p-6 sm:p-7">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[4px]"
          style={{ background: chapter.accent }}
        />
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="grid size-11 place-items-center rounded-[15px] font-display text-[17px] font-bold text-white"
            style={{ background: chapter.accent }}
          >
            {chapter.id}
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted-foreground)]">
              Unit {chapter.unit} &middot; {chapter.unitMarks} marks
            </p>
            <h1 className="font-display text-[clamp(1.4rem,4vw,2rem)] font-semibold leading-tight tracking-[-0.015em]">
              {chapter.name}
            </h1>
          </div>
        </div>

        <p className="mt-4 text-[14.5px] leading-[1.75] text-[var(--color-muted-foreground)]">
          {chapter.blurb}
        </p>

        <div className="mt-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
            Topics in the syllabus
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {chapter.topics.map((t) => (
              <li
                key={t}
                className="rounded-lg bg-[var(--color-muted)] px-2.5 py-1 text-[12px] text-[var(--color-muted-foreground)]"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {chapter.deleted?.length ? (
          <p className="mt-4 text-[12px] text-[var(--color-muted-foreground)]">
            <span className="font-semibold">Removed by rationalisation:</span>{" "}
            <span className="line-through decoration-[var(--color-destructive)]/60">
              {chapter.deleted.join(", ")}
            </span>
          </p>
        ) : null}
      </header>

      <div className="mt-8">
        <QuestionBrowser
          questions={questions}
          emptyMessage="No questions in this chapter match the current filters."
        />
      </div>

      {/* chapter pager */}
      <nav className="no-print mt-10 flex flex-wrap gap-3">
        {prev && (
          <Link
            href={`/chapters/${prev.slug}`}
            className="clay clay-press flex-1 cursor-pointer p-4 text-left"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              Previous
            </span>
            <span className="mt-1 block font-display text-[15px] font-semibold">{prev.name}</span>
          </Link>
        )}
        {next && (
          <Link
            href={`/chapters/${next.slug}`}
            className="clay clay-press flex-1 cursor-pointer p-4 text-right"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted-foreground)]">
              Next
            </span>
            <span className="mt-1 block font-display text-[15px] font-semibold">{next.name}</span>
          </Link>
        )}
      </nav>
    </section>
  );
}
