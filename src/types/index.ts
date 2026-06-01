export interface Question {
  id: string;
  question: string;
  answer: string;
  chapter: number;
  chapterName: string;
  marks: number;
  year: number | null;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'mcq' | 'assertion_reason' | 'numerical' | 'diagram' | 'short_answer' | 'long_answer';
  source: 'chapter_pdf' | 'board_paper' | 'unknown';
  isImportant: boolean;
  frequency: number;
}

export interface Chapter {
  id: number;
  name: string;
  shortName: string;
  color: string;
}

export interface QuestionsData {
  questions: Question[];
  chapters: Record<number, Chapter>;
  totalQuestions: number;
  years: number[];
}

export interface FilterState {
  chapter: number | null;
  year: number | null;
  marks: number | null;
  difficulty: string | null;
  type: string | null;
  source: string | null;
  search: string;
  showImportantOnly: boolean;
  showUnanswered: boolean;
}

export interface BookmarkState {
  bookmarks: Set<string>;
  solved: Set<string>;
}
