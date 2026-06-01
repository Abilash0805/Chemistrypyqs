import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Question, FilterState } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterQuestions(questions: Question[], filters: FilterState): Question[] {
  return questions.filter((q) => {
    if (filters.chapter !== null && q.chapter !== filters.chapter) return false;
    if (filters.year !== null && q.year !== filters.year) return false;
    if (filters.marks !== null && q.marks !== filters.marks) return false;
    if (filters.difficulty !== null && q.difficulty !== filters.difficulty) return false;
    if (filters.type !== null && q.type !== filters.type) return false;
    if (filters.source !== null && q.source !== filters.source) return false;
    if (filters.showImportantOnly && !q.isImportant) return false;
    if (filters.showUnanswered && q.answer) return false;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const inQuestion = q.question.toLowerCase().includes(searchLower);
      const inAnswer = q.answer.toLowerCase().includes(searchLower);
      const inChapter = q.chapterName.toLowerCase().includes(searchLower);
      if (!inQuestion && !inAnswer && !inChapter) return false;
    }

    return true;
  });
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'easy': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'hard': return 'bg-red-100 text-red-700 border-red-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
}

export function getTypeLabel(type: string): string {
  switch (type) {
    case 'mcq': return 'MCQ';
    case 'assertion_reason': return 'A&R';
    case 'numerical': return 'Numerical';
    case 'diagram': return 'Diagram';
    case 'short_answer': return 'Short Answer';
    case 'long_answer': return 'Long Answer';
    default: return type;
  }
}

export function getMarksColor(marks: number): string {
  switch (marks) {
    case 1: return 'bg-blue-100 text-blue-700';
    case 2: return 'bg-purple-100 text-purple-700';
    case 3: return 'bg-orange-100 text-orange-700';
    case 4: return 'bg-pink-100 text-pink-700';
    case 5: return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function highlightText(text: string, search: string): string {
  if (!search) return text;
  const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 text-yellow-900 rounded px-0.5">$1</mark>');
}
