'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, BookMarked, Clock, CheckCircle, ChevronRight, Zap } from 'lucide-react';
import { Chapter } from '@/types';

interface HomePageProps {
  totalQuestions: number;
  totalChapters: number;
  yearRange: string;
  answeredCount: number;
  solvedCount: number;
  chapters: Record<string | number, Chapter>;
  questionCounts: Record<number, number>;
  solvedCounts: Record<number, number>;
  onBrowseChapters: () => void;
  onSearchQuestions: () => void;
  onSelectChapter: (id: number) => void;
}

export default function HomePage({
  totalQuestions,
  totalChapters,
  yearRange,
  answeredCount,
  solvedCount,
  chapters,
  questionCounts,
  solvedCounts,
  onBrowseChapters,
  onSearchQuestions,
  onSelectChapter,
}: HomePageProps) {
  const stats = [
    { icon: <BookOpen className="w-5 h-5 text-indigo-500" />, bg: 'bg-indigo-50', value: totalQuestions.toLocaleString(), label: 'Total Questions' },
    { icon: <Zap className="w-5 h-5 text-purple-500" />, bg: 'bg-purple-50', value: totalChapters, label: 'Chapters' },
    { icon: <BookMarked className="w-5 h-5 text-emerald-500" />, bg: 'bg-emerald-50', value: answeredCount.toLocaleString(), label: 'With Answers' },
    { icon: <Clock className="w-5 h-5 text-amber-500" />, bg: 'bg-amber-50', value: yearRange, label: 'Year Range' },
  ];

  const sortedChapters = Object.values(chapters).sort((a, b) => a.id - b.id);

  return (
    <div className="max-w-2xl mx-auto px-4 pb-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-6 pb-5"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-3">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          CBSE Class 12 Chemistry
        </span>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
          Previous Year<br />Questions
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          Master Class 12 Chemistry with chapter-wise PYQs from {yearRange}. Practice smarter with answers, solutions, and progress tracking.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onBrowseChapters}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl shadow-sm hover:bg-indigo-700 active:scale-95 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            Browse Chapters
          </button>
          <button
            onClick={onSearchQuestions}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
          >
            <Search className="w-4 h-4" />
            Search Questions
          </button>
        </div>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 gap-3 mb-6"
      >
        {stats.map((s, i) => (
          <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              {s.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-0.5">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Progress bar if any solved */}
      {solvedCount > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-6"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-gray-700">Your Progress</span>
            </div>
            <span className="text-sm font-bold text-emerald-600">
              {solvedCount}/{totalQuestions}
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.round((solvedCount / totalQuestions) * 100)}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {Math.round((solvedCount / totalQuestions) * 100)}% complete
          </p>
        </motion.div>
      )}

      {/* Browse by Chapter */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-gray-900">Browse by Chapter</h2>
          <button
            onClick={onBrowseChapters}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all →
          </button>
        </div>

        <div className="space-y-2">
          {sortedChapters.map((ch, idx) => {
            const count = questionCounts[ch.id] || 0;
            const done = solvedCounts[ch.id] || 0;
            const pct = count > 0 ? Math.round((done / count) * 100) : 0;

            return (
              <motion.button
                key={ch.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.04 }}
                onClick={() => onSelectChapter(ch.id)}
                className="w-full flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 active:scale-[0.99] transition-all text-left"
              >
                {/* Chapter number badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: ch.color }}
                >
                  {ch.id}
                </div>

                {/* Chapter info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{ch.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-400">{count} questions</span>
                    {done > 0 && (
                      <span className="text-xs text-emerald-600 font-medium">• {pct}% done</span>
                    )}
                  </div>
                  {done > 0 && (
                    <div className="mt-1.5 h-1 bg-gray-100 rounded-full overflow-hidden w-full">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, backgroundColor: ch.color }}
                      />
                    </div>
                  )}
                </div>

                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
