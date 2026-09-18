import Link from "next/link";
import { STATS } from "@/data/questions";

export function Footer() {
  return (
    <footer className="no-print mt-8 border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-[15px] font-semibold">Chemistry PYQs</p>
          <p className="mt-2 text-[13px] leading-[1.7] text-[var(--color-muted-foreground)]">
            {/* The space has to be explicit: the JSX transform drops a plain
                one between an expression and text that wraps to a new line. */}
            {STATS.total}{" "}
            previous year questions for CBSE Class 12 Chemistry, scoped to the 2026&ndash;27
            syllabus and answered to the marking scheme.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
          {[
            { href: "/chapters", label: "Chapters" },
            { href: "/browse", label: "Browse all" },
            { href: "/bookmarks", label: "Bookmarks" },
            { href: "/syllabus", label: "Syllabus" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-[11.5px] text-[var(--color-muted-foreground)]">
        Questions are drawn from CBSE board papers 2013&ndash;2025 and chapter-wise question sets.
        Answers are written for revision &mdash; always cross-check against NCERT and the official
        marking scheme.
      </p>
    </footer>
  );
}
