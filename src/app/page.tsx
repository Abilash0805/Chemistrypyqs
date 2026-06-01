'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, List, Repeat2, Search, X, ArrowLeft } from 'lucide-react';
import questionsData from '@/data/questions.json';
import { Question, FilterState, Chapter } from '@/types';
import { filterQuestions } from '@/lib/utils';
import { useBookmarks } from '@/hooks/useBookmarks';
import Sidebar from '@/components/Sidebar';
import FilterBar from '@/components/FilterBar';
import StatsBar from '@/components/StatsBar';
import QuestionList from '@/components/QuestionList';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';

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

type ViewMode = 'home' | 'chapters' | 'questions' | 'bookmarks' | 'frequent';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { bookmarks, solved, toggleBookmark, toggleSolved } = useBookmarks();

  const questions: Question[] = data.questions;
  const chapters: Record<string, Chapter> = data.chapters;
  const years: number[] = data.years;

  const questionCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    questions.forEach(q => { counts[q.chapter] = (counts[q.chapter] || 0) + 1; });
    return counts;
  }, [questions]);

  const solvedCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    questions.forEach(q => {
      if (solved.has(q.id)) counts[q.chapter] = (counts[q.chapter] || 0) + 1;
    });
    return counts;
  }, [questions, solved]);

  const answeredCount = useMemo(() =>
    questions.filter(q => q.answer && q.answer.length > 5).length,
    [questions]
  );

  const activeFilters: FilterState = useMemo(() => ({
    ...filters,
    search: searchQuery,
  }), [filters, searchQuery]);

  const filteredQuestions = useMemo(() => {
    if (viewMode === 'bookmarks') {
      return filterQuestions(questions.filter(q => bookmarks.has(q.id)), activeFilters);
    }
    if (viewMode === 'frequent') {
      return filterQuestions(
        questions.filter(q => q.frequency >= 2).sort((a, b) => b.frequency - a.frequency),
        { ...DEFAULT_FILTERS, search: searchQuery, chapter: filters.chapter }
      );
    }
    return filterQuestions(questions, activeFilters);
  }, [questions, activeFilters, viewMode, bookmarks, searchQuery, filters.chapter]);

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

  const handleBack = useCallback(() => {
    setViewMode('home');
    setFilters(DEFAULT_FILTERS);
    setSearchQuery('');
    setSearchOpen(false);
  }, []);

  const selectedChapterInfo = filters.chapter !== null ? chapters[String(filters.chapter)] : null;
  const yearRange = years.length > 0 ? `${years[0]}–${years[years.length - 1]}` : '';
  const frequentCount = useMemo(() => questions.filter(q => q.frequency >= 2).length, [questions]);

  const isListView = viewMode !== 'home';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar (desktop + mobile drawer) */}
      <Sidebar
        chapters={chapters}
        questionCounts={questionCounts}
        selectedChapter={filters.chapter}
        onSelectChapter={handleSelectChapter}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main layout */}
      <div className="lg:pl-72">
        {/* Header */}
        <Header onMenuToggle={() => setSidebarOpen(true)} />

        {/* Search bar — appears when in list view or search is open */}
        <AnimatePresence>
          {(isListView || searchOpen) && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="bg-white border-b border-gray-100 px-4 py-2.5"
            >
              <div className="flex items-center gap-2 max-w-2xl mx-auto">
                {isListView && (
                  <button
                    onClick={handleBack}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => {
                      setSearchQuery(e.target.value);
                      if (e.target.value && viewMode === 'home') setViewMode('questions');
                    }}
                    placeholder={selectedChapterInfo ? `Search in ${selectedChapterInfo.shortName}...` : 'Search questions, topics...'}
                    className="w-full pl-9 pr-8 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab bar — only in list view */}
        {isListView && (
          <div className="bg-white border-b border-gray-100 px-4 py-1.5 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1 max-w-2xl mx-auto">
              {([
                { mode: 'questions' as ViewMode, label: 'All Questions', icon: <List className="w-3.5 h-3.5" /> },
                { mode: 'bookmarks' as ViewMode, label: `Saved (${bookmarks.size})`, icon: <Bookmark className="w-3.5 h-3.5" /> },
                { mode: 'frequent' as ViewMode, label: `Repeated (${frequentCount})`, icon: <Repeat2 className="w-3.5 h-3.5" /> },
              ]).map(tab => (
                <button
                  key={tab.mode}
                  onClick={() => setViewMode(tab.mode)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    viewMode === tab.mode ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}{tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {!isListView ? (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HomePage
                totalQuestions={questions.length}
                totalChapters={Object.keys(chapters).length}
                yearRange={yearRange}
                answeredCount={answeredCount}
                solvedCount={solved.size}
                chapters={chapters}
                questionCounts={questionCounts}
                solvedCounts={solvedCounts}
                onBrowseChapters={() => { setFilters(DEFAULT_FILTERS); setViewMode('questions'); }}
                onSearchQuestions={() => { setViewMode('questions'); setSearchOpen(true); }}
                onSelectChapter={handleSelectChapter}
              />
            </motion.div>
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="max-w-2xl mx-auto">
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
                    viewMode === 'frequent' ? 'Frequently Repeated' :
                    selectedChapterInfo?.name ?? (searchQuery ? `"${searchQuery}"` : 'All Questions')
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
                  searchQuery={searchQuery}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
