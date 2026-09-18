import type { Metadata, Viewport } from "next";
import { Sora, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chemistry PYQs — CBSE Class 12 (2026–27 syllabus)",
    template: "%s — Chemistry PYQs",
  },
  description:
    "Previous year questions for CBSE Class 12 Chemistry, filtered to the 2026–27 syllabus, with exam-ready answers, proper chemical notation, balanced equations and 3-D structures.",
  keywords: [
    "CBSE",
    "Class 12 Chemistry",
    "previous year questions",
    "PYQ",
    "board exam",
    "2026-27 syllabus",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#100a20" },
  ],
};

/**
 * Applies the stored theme before first paint so the page never flashes the
 * wrong palette. Runs synchronously, ahead of hydration.
 */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("cpyq-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={`${sora.variable} ${fraunces.variable} antialiased`}>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-[var(--color-on-primary)]"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
