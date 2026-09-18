import type { Metadata } from "next";
import { BookmarksView } from "@/components/BookmarksView";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Questions you have saved for later revision.",
};

export default function BookmarksPage() {
  return <BookmarksView />;
}
