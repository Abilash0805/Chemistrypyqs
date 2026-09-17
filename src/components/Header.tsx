"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Bookmark, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./Providers";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Chapters" },
  { href: "/browse", label: "Browse all" },
  { href: "/syllabus", label: "Syllabus" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes. Adjusting state during
  // render is the recommended pattern here — an effect would cause a second
  // paint with the old menu still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-[color-mix(in_oklab,var(--color-background)_82%,transparent)] shadow-[0_1px_0_var(--color-border)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Chemistry PYQs home">
          <span className="grid size-9 place-items-center rounded-[13px] bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[var(--shadow-clay)] transition-transform duration-200 group-hover:-rotate-6">
            <Atom size={19} strokeWidth={2.1} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-semibold tracking-tight">
              Chemistry PYQs
            </span>
            <span className="block text-[10.5px] font-medium uppercase tracking-[0.13em] text-[var(--color-muted-foreground)]">
              CBSE XII &middot; 2026&ndash;27
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-xl px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200",
                isActive(item.href)
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]",
              )}
            >
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-xl bg-[color-mix(in_oklab,var(--color-primary)_13%,transparent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 md:ml-2">
          <Link
            href="/bookmarks"
            aria-label="Bookmarked questions"
            className={cn(
              "clay-press grid size-11 place-items-center rounded-xl border cursor-pointer sm:size-9",
              isActive("/bookmarks")
                ? "border-[var(--color-primary)] bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-[var(--color-primary)]"
                : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]",
            )}
          >
            <Bookmark size={16} />
          </Link>
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="clay-press grid size-11 cursor-pointer place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] sm:size-9"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="clay-press grid size-11 cursor-pointer place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted-foreground)] md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-card)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2.5 text-sm font-medium",
                    isActive(item.href)
                      ? "bg-[color-mix(in_oklab,var(--color-primary)_13%,transparent)] text-[var(--color-primary)]"
                      : "text-[var(--color-muted-foreground)]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
