'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookCheck, Bookmark, TrendingUp, Layers } from 'lucide-react';
import type { Question } from '@/types';

interface StatsBarProps {
  questions: Question[];
  solved: Set<string>;
  bookmarks: Set<string>;
  chapterName?: string | null;
}

export default function StatsBar({ questions, solved, bookmarks, chapterName }: StatsBarProps) {
  const total = questions.length;
  const solvedCount = questions.filter(q => solved.has(q.id)).length;
  const bookmarkedCount = questions.filter(q => bookmarks.has(q.id)).length;
  const progressPercent = total > 0 ? Math.round((solvedCount / total) * 100) : 0;

  const avgMarks = total > 0
    ? (questions.reduce((sum, q) => sum + q.marks, 0) / total).toFixed(1)
    : '0';

  const stats = [
    {
      icon: <Layers className="w-4 h-4" />,
      label: 'Total',
      value: total,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      icon: <BookCheck className="w-4 h-4" />,
      label: 'Solved',
      value: `${solvedCount}/${total}`,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: <Bookmark className="w-4 h-4" />,
      label: 'Saved',
      value: bookmarkedCount,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: 'Progress',
      value: `${progressPercent}%`,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <div className="bg-white border-b border-gray-100 px-4 py-3">
      {chapterName && (
        <h2 className="text-base font-semibold text-gray-800 mb-2 truncate">{chapterName}</h2>
      )}
      <div className="flex items-center gap-3 flex-wrap">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${stat.bg}`}>
            <span className={stat.color}>{stat.icon}</span>
            <div>
              <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}

        {total > 0 && (
          <div className="flex-1 min-w-32">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-0.5 text-right">{progressPercent}% complete</div>
          </div>
        )}
      </div>
    </div>
  );
}
