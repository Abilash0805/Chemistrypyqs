'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, List, LayoutGrid, Repeat2, FlaskConical } from 'lucide-react';
import questionsData from '@/data/questions.json';
import { Question, FilterState, Chapter } from '@/types';
import { filterQuestions } from '@/lib/utils';
import { useBookmarks } from '@/hooks/useBookmarks';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import StatsBar from '@/components/StatsBar';
import QuestionList from '@/components/QuestionList';
import ChapterGrid from '@/components/ChapterGrid';

const data = questionsData as unknown as {
  questions: Question[];
  chapters: Record<string, Chapter>;
  totalQuestions: number;
  years: number[];
};

const DEFAULT_FILTERS: FilterState = {
  chapter: null,
  year: null,
  marks: null,
  difficulty: null,
  type: null,
  source: null,
  search: '',
  showImportantOnly: false,
  showUnanswered: false,
};

type ViewMode = 'chapters' | 'questions' | 'bookmarks' | 'frequent';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [viewMode, setViewMode] = useState<ViewMode>('chapters');
  const { bookmarks, solved, toggleBookmark, toggleSolved } = useBookmarks();

  const questions: Question[] = data.questions;
  const chapters: Record<string, Chapter> = data.chapters;
  const years: number[] = data.years;

  const questionCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    questions.forEach(q => {
      counts[q.chapter] = (counts[q.chapter] || 0) + 1;
    });
    return counts;
  }, [questions]);

  const solvedCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    questions.forEach(q => {
      if (solved.has(q.id)) {
        counts[q.chapter] = (counts[q.chapter] || 0) + 1;
      }
    });
    return counts;
  }, [questions, solved]);

  const filteredQuestions = useMemo(() => {
    if (viewMode === 'bookmarks') {
      return filterQuestions(questions.filter(q => bookmarks.has(q.id)), filters);
    } else if (viewMode === 'frequent') {
      return filterQuestions(
        questions.filter(q => q.frequency >= 2).sort((a, b) => b.frequency - a.frequency),
        { ...DEFAULT_FILTERS, search: filters.search, chapter: filters.chapter }
      );
    }
    return filterQuestions(questions, filters);
  }, [questions, filters, viewMode, bookmarks]);

  const handleFilterChange = useCallback((key: keyof FilterState, value: FilterState[keyof FilterState]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilters(prev => ({ ...DEFAULT_FILTERS, chapter: prev.chapter }));
  }, []);

  const handleSelectChapter = useCallback((id: number | null) => {
    setFilters({ ...DEFAULT_FILTERS, chapter: id });
    setViewMode('questions');
    setSidebarOpen(false);
  }, []);

  const selectedChapterInfo = filters.chapter !== null ? chapters[filters.chapter] : null;

  const totalSolved = solved.size;
  const overallProgress = questions.length > 0 ? Math.round((totalSolved / questions.length) * 100) : 0;
  const frequentCount = useMemo(() => questions.filter(q => q.frequency >= 2).length, [questions]);

  const showChapterOverview = viewMode === 'chapters' && !filters.search;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        chapters={chapters}
        questionCounts={questionCounts}
        selectedChapter={filters.chapter}
        onSelectChapter={handleSelectChapter}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <SearchBar
          value={filters.search}
          onChange={(v) => {
            handleFilterChange('search', v);
            if (v && viewMode === 'chapters') setViewMode('questions');
          }}
          onMenuToggle={() => setSidebarOpen(true)}
          chapterName={selectedChapterInfo?.name}
        />

        {/* View Mode Tabs */}
        <div className="bg-white border-b border-gray-200 px-4 py-1.5">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {([
              { mode: 'chapters' as ViewMode, label: 'Overview', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
              { mode: 'questions' as ViewMode, label: 'All Questions', icon: <List className="w-3.5 h-3.5" /> },
              { mode: 'bookmarks' as ViewMode, label: `Saved (${bookmarks.size})`, icon: <Bookmark className="w-3.5 h-3.5" /> },
              { mode: 'frequent' as ViewMode, label: `Repeated (${frequentCount})`, icon: <Repeat2 className="w-3.5 h-3.5" /> },
            ]).map(tab => (
              <button
                key={tab.mode}
                onClick={() => setViewMode(tab.mode)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  viewMode === tab.mode
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {showChapterOverview ? (
              <motion.div key="chapters" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Hero card */}
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-5 m-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">Chemistry PYQs</h1>
                      <p className="text-indigo-200 text-xs">CBSE Class 12 • Board Papers 2013–2025</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: questions.length, label: 'Questions' },
                      { value: years.length, label: 'Years' },
                      { value: `${overallProgress}%`, label: 'Complete' },
                    ].map(stat => (
                      <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-indigo-200">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  {overallProgress > 0 && (
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${overallProgress}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  )}
                </div>
                <ChapterGrid
                  chapters={chapters}
                  questionCounts={questionCounts}
                  solvedCounts={solvedCounts}
                  onSelectChapter={handleSelectChapter}
                />
              </motion.div>
            ) : (
              <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col">
                <StatsBar
                  questions={
                    viewMode === 'bookmarks' || viewMode === 'frequent'
                      ? filteredQuestions
                      : filters.chapter !== null
                        ? questions.filter(q => q.chapter === filters.chapter)
                        : questions
                  }
                  solved={solved}
                  bookmarks={bookmarks}
                  chapterName={
                    viewMode === 'bookmarks' ? 'Saved Questions' :
                    viewMode === 'frequent' ? 'Frequently Repeated Questions' :
                    selectedChapterInfo?.name ?? (filters.search ? `Search: "${filters.search}"` : 'All Questions')
                  }
                />
                <FilterBar
                  filters={filters}
                  years={years}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  totalFiltered={filteredQuestions.length}
                  totalAll={questions.length}
                />
                <QuestionList
                  questions={filteredQuestions}
                  chapters={chapters}
                  bookmarks={bookmarks}
                  solved={solved}
                  onToggleBookmark={toggleBookmark}
                  onToggleSolved={toggleSolved}
                  searchQuery={filters.search}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
