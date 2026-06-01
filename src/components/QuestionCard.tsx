'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, BookmarkCheck, CheckCircle, Circle, ChevronDown, Eye, EyeOff, Calendar, Hash, Tag, Repeat2 } from 'lucide-react';
import { Question } from '@/types';
import { cn, getDifficultyColor, getTypeLabel, getMarksColor } from '@/lib/utils';
import MathText from './MathText';

interface QuestionCardProps {
  question: Question;
  isBookmarked: boolean;
  isSolved: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleSolved: (id: string) => void;
  chapterColor?: string;
  searchQuery?: string;
  index?: number;
  forceShowAnswer?: boolean;
}

export default function QuestionCard({
  question: q,
  isBookmarked,
  isSolved,
  onToggleBookmark,
  onToggleSolved,
  chapterColor = '#6366f1',
  searchQuery = '',
  index = 0,
  forceShowAnswer = false,
}: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const isAnswerVisible = showAnswer || forceShowAnswer;

  const handleBookmark = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleBookmark(q.id);
  }, [q.id, onToggleBookmark]);

  const handleSolved = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSolved(q.id);
  }, [q.id, onToggleSolved]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.3 }}
      className={cn(
        'group relative bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200',
        isSolved ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-200',
      )}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ backgroundColor: chapterColor }}
      />

      <div className="px-5 pt-4 pb-3 ml-2">
        {/* Top badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {q.year && (
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-0.5">
              <Calendar className="w-3 h-3" />
              {q.year}
            </span>
          )}
          <span className={cn(
            'inline-flex items-center gap-1 text-xs font-medium border rounded-full px-2.5 py-0.5',
            getMarksColor(q.marks)
          )}>
            <Hash className="w-3 h-3" />
            {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
          </span>
          <span className={cn(
            'inline-flex items-center text-xs font-medium border rounded-full px-2.5 py-0.5',
            getDifficultyColor(q.difficulty)
          )}>
            {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5">
            <Tag className="w-3 h-3" />
            {getTypeLabel(q.type)}
          </span>
          {q.frequency > 2 && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200 rounded-full px-2.5 py-0.5">
              <Repeat2 className="w-3 h-3" />
              Repeated {q.frequency}×
            </span>
          )}
          {q.isImportant && (
            <span className="inline-flex items-center text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full px-2.5 py-0.5">
              ⭐ Important
            </span>
          )}
        </div>

        {/* Question text */}
        <div className="mb-3">
          <p className="text-gray-800 leading-relaxed font-medium text-[0.95rem]">
            <MathText text={q.question} highlightSearch={searchQuery} />
          </p>
        </div>

        {/* Answer section */}
        <AnimatePresence>
          {isAnswerVisible && q.answer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Answer</span>
                  <div className="flex-1 h-px bg-emerald-100" />
                </div>
                <div className="text-gray-700 leading-relaxed text-[0.9rem] bg-emerald-50/50 rounded-xl p-3 border border-emerald-100">
                  <MathText text={q.answer} highlightSearch={searchQuery} />
                </div>
              </div>
            </motion.div>
          )}
          {isAnswerVisible && !q.answer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="text-gray-400 text-sm italic bg-gray-50 rounded-xl p-3 text-center">
                  Answer not available for this question.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAnswer(v => !v)}
              className={cn(
                'flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-150',
                isAnswerVisible
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
              )}
            >
              {isAnswerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {isAnswerVisible ? 'Hide Answer' : 'Show Answer'}
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleSolved}
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-all duration-150',
                isSolved
                  ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                  : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'
              )}
              title={isSolved ? 'Mark as unsolved' : 'Mark as solved'}
            >
              {isSolved ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSolved ? 'Solved' : 'Mark Solved'}</span>
            </button>
            <button
              onClick={handleBookmark}
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-all duration-150',
                isBookmarked
                  ? 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                  : 'text-gray-500 hover:text-amber-600 hover:bg-amber-50'
              )}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
