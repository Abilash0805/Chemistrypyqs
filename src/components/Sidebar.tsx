'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BookOpen, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Chapter } from '@/types';

interface SidebarProps {
  chapters: Record<string | number, Chapter>;
  questionCounts: Record<number, number>;
  selectedChapter: number | null;
  onSelectChapter: (id: number | null) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  chapters,
  questionCounts,
  selectedChapter,
  onSelectChapter,
  isOpen,
  onClose,
}: SidebarProps) {
  const totalQuestions = Object.values(questionCounts).reduce((a: number, b: number) => a + b, 0);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 z-50 lg:z-auto',
          'flex flex-col overflow-hidden transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-tight">Chemistry</h1>
              <p className="text-indigo-200 text-xs">CBSE Class 12 PYQs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* All Questions button */}
        <div className="p-3">
          <button
            onClick={() => { onSelectChapter(null); onClose(); }}
            className={cn(
              'w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
              selectedChapter === null
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4" />
              <span>All Questions</span>
            </div>
            <span className={cn(
              'text-xs font-semibold px-2 py-0.5 rounded-full',
              selectedChapter === null ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
            )}>
              {totalQuestions}
            </span>
          </button>
        </div>

        {/* Chapter list */}
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Chapters</p>
          {Object.values(chapters).sort((a, b) => a.id - b.id).map((chapter, idx) => {
            const count = questionCounts[chapter.id] || 0;
            const isSelected = selectedChapter === chapter.id;

            return (
              <motion.button
                key={chapter.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
                onClick={() => { onSelectChapter(chapter.id); onClose(); }}
                className={cn(
                  'w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 text-left group',
                  isSelected
                    ? 'text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
                style={isSelected ? { backgroundColor: chapter.color } : {}}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: isSelected ? 'rgba(255,255,255,0.7)' : chapter.color }}
                />
                <span className="flex-1 text-xs font-medium leading-tight line-clamp-2">
                  Ch {chapter.id}: {chapter.shortName}
                </span>
                <span className={cn(
                  'text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0',
                  isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                )}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2">
          <p className="text-xs text-gray-400 text-center">2013–2025 • CBSE Board Papers</p>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
              ✦ Built by Abilash V
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
