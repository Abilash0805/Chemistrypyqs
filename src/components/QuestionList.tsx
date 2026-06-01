'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Frown, Eye, EyeOff } from 'lucide-react';
import type { Question, Chapter } from '@/types';
import QuestionCard from './QuestionCard';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 20;

interface QuestionListProps {
  questions: Question[];
  chapters: Record<string | number, Chapter>;
  bookmarks: Set<string>;
  solved: Set<string>;
  onToggleBookmark: (id: string) => void;
  onToggleSolved: (id: string) => void;
  searchQuery?: string;
}

export default function QuestionList({
  questions,
  chapters,
  bookmarks,
  solved,
  onToggleBookmark,
  onToggleSolved,
  searchQuery = '',
}: QuestionListProps) {
  const [page, setPage] = useState(1);
  const [revealAll, setRevealAll] = useState(false);
  const totalPages = Math.ceil(questions.length / PAGE_SIZE);

  const paginatedQuestions = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return questions.slice(start, start + PAGE_SIZE);
  }, [questions, page]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    setPage(1);
  }, [questions.length, searchQuery]);

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Frown className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-600 mb-1">No questions found</h3>
        <p className="text-sm text-gray-400 max-w-sm">
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      {/* Toolbar */}
      {questions.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Page {page} of {totalPages} • {questions.length} questions
          </p>
          <button
            onClick={() => setRevealAll(v => !v)}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
              revealAll
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
            }`}
          >
            {revealAll ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {revealAll ? 'Hide All Answers' : 'Reveal All Answers'}
          </button>
        </div>
      )}
      {/* Questions */}
      {paginatedQuestions.map((q, idx) => (
        <QuestionCard
          key={q.id}
          question={q}
          isBookmarked={bookmarks.has(q.id)}
          isSolved={solved.has(q.id)}
          onToggleBookmark={onToggleBookmark}
          onToggleSolved={onToggleSolved}
          chapterColor={(chapters as Record<string, { color: string }>)[String(q.chapter)]?.color}
          searchQuery={searchQuery}
          index={idx}
          forceShowAnswer={revealAll}
        />
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4 pb-8">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
            .map((p, i, arr) => (
              <React.Fragment key={p}>
                {i > 0 && arr[i - 1] !== p - 1 && (
                  <span className="text-gray-400 text-sm">…</span>
                )}
                <button
                  onClick={() => handlePageChange(p)}
                  className={cn(
                    'w-9 h-9 flex items-center justify-center rounded-xl text-sm font-medium transition-colors',
                    p === page
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  )}
                >
                  {p}
                </button>
              </React.Fragment>
            ))
          }

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
