import type { Metadata } from "next";
import { QUESTIONS, STATS } from "@/data/questions";
import { QuestionBrowser } from "@/components/QuestionBrowser";

export const metadata: Metadata = {
  title: "Browse all questions",
  description:
    "Search and filter every in-syllabus CBSE Class 12 Chemistry previous year question by type, marks, difficulty and board paper year.",
};

export default function BrowsePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold tracking-[-0.02em]">
        Browse everything
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-[var(--color-muted-foreground)]">
        All {STATS.total} questions across the ten units. Search runs over question text, options,
        answers and equations &mdash; so you can look up a reagent such as
        &ldquo;Tollens&rdquo; or &ldquo;Nernst&rdquo; and find every question that touches it.
      </p>

      <div className="mt-8">
        <QuestionBrowser questions={QUESTIONS} showChapter />
      </div>
    </section>
  );
}
