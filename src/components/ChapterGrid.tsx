'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Chapter } from '@/types';
import { cn } from '@/lib/utils';

interface ChapterGridProps {
  chapters: Record<string | number, Chapter>;
  questionCounts: Record<number, number>;
  solvedCounts: Record<number, number>;
  onSelectChapter: (id: number) => void;
}

export default function ChapterGrid({
  chapters,
  questionCounts,
  solvedCounts,
  onSelectChapter,
}: ChapterGridProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Browse by Chapter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {Object.values(chapters).sort((a, b) => a.id - b.id).map((chapter, idx) => {
          const count = questionCounts[chapter.id] || 0;
          const solvedCount = solvedCounts[chapter.id] || 0;
          const progress = count > 0 ? (solvedCount / count) * 100 : 0;

          return (
            <motion.button
              key={chapter.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.3 }}
              onClick={() => onSelectChapter(chapter.id)}
              className="flex flex-col p-4 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: chapter.color }}
                >
                  {chapter.id}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1 line-clamp-2">
                {chapter.name}
              </h3>

              <div className="flex items-center gap-2 mt-auto pt-2">
                <span className="text-xs text-gray-500">{count} questions</span>
                {solvedCount > 0 && (
                  <span className="flex items-center gap-1 text-xs text-emerald-600">
                    <CheckCircle className="w-3 h-3" />
                    {solvedCount} solved
                  </span>
                )}
              </div>

              {/* Progress bar */}
              {count > 0 && (
                <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: chapter.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.2 + idx * 0.04, duration: 0.5 }}
                  />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
