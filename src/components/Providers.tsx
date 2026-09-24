"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import Lenis from "lenis";

/* ------------------------------------------------------------------ */
/* Theme                                                               */
/* ------------------------------------------------------------------ */

type Theme = "light" | "dark";

const THEME_EVENT = "cpyq:themechange";

/**
 * The theme lives on `document.documentElement`, written by the inline script
 * in the document head before first paint. Reading it through an external
 * store keeps React in sync with that DOM attribute without a
 * setState-in-effect round trip, and without a hydration flash.
 */
const themeStore = {
  subscribe(listener: () => void) {
    window.addEventListener(THEME_EVENT, listener);
    return () => window.removeEventListener(THEME_EVENT, listener);
  },
  getSnapshot(): Theme {
    return (document.documentElement.getAttribute("data-theme") as Theme) || "light";
  },
  getServerSnapshot(): Theme {
    return "light";
  },
};

export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cpyq-theme", next);
    } catch {
      // Private browsing or blocked storage — the theme still applies for this
      // session, it just will not be remembered.
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, [theme]);

  return { theme, toggle };
}

/* ------------------------------------------------------------------ */
/* Smooth scrolling                                                    */
/* ------------------------------------------------------------------ */

function useLenis() {
  useEffect(() => {
    // Respect the user's motion preference — momentum scrolling is exactly the
    // kind of non-essential motion `prefers-reduced-motion` is meant to stop.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // In-page anchors have to be handed to Lenis, or it will fight the browser.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -88 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}

/* ------------------------------------------------------------------ */

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
