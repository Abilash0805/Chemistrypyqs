'use client';

import React, { useCallback } from 'react';
import { X, SlidersHorizontal, Star, BookmarkCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FilterState } from '@/types';

interface FilterBarProps {
  filters: FilterState;
  years: number[];
  onFilterChange: (key: keyof FilterState, value: FilterState[keyof FilterState]) => void;
  onClearFilters: () => void;
  totalFiltered: number;
  totalAll: number;
}

const MARKS_OPTIONS = [1, 2, 3, 4, 5];
const DIFFICULTY_OPTIONS = ['easy', 'medium', 'hard'];
const TYPE_OPTIONS = [
  { value: 'mcq', label: 'MCQ' },
  { value: 'numerical', label: 'Numerical' },
  { value: 'short_answer', label: 'Short Answer' },
  { value: 'long_answer', label: 'Long Answer' },
  { value: 'assertion_reason', label: 'Assertion & Reason' },
];
const SOURCE_OPTIONS = [
  { value: 'board_paper', label: 'Board Papers' },
  { value: 'chapter_pdf', label: 'Important Qs' },
];

export default function FilterBar({
  filters,
  years,
  onFilterChange,
  onClearFilters,
  totalFiltered,
  totalAll,
}: FilterBarProps) {
  const hasActiveFilters = filters.year !== null || filters.marks !== null ||
    filters.difficulty !== null || filters.type !== null ||
    filters.source !== null || filters.showImportantOnly;

  const SelectFilter = ({ label, value, options, filterKey }: {
    label: string;
    value: string | number | null;
    options: { value: string | number; label: string }[];
    filterKey: keyof FilterState;
  }) => (
    <div className="relative">
      <select
        value={value ?? ''}
        onChange={(e) => onFilterChange(filterKey, e.target.value === '' ? null : (filterKey === 'year' || filterKey === 'marks' ? parseInt(e.target.value) : e.target.value))}
        className={cn(
          'text-xs font-medium pl-3 pr-7 py-1.5 rounded-lg border appearance-none cursor-pointer transition-colors',
          value !== null
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
        )}
      >
        <option value="">{label}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className={cn(
        'absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs',
        value !== null ? 'text-white' : 'text-gray-400'
      )}>▾</div>
    </div>
  );

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2.5 space-y-2">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="font-medium">Filters:</span>
        </div>

        <SelectFilter
          label="Year"
          value={filters.year}
          options={years.map(y => ({ value: y, label: String(y) }))}
          filterKey="year"
        />

        <SelectFilter
          label="Marks"
          value={filters.marks}
          options={MARKS_OPTIONS.map(m => ({ value: m, label: `${m} Mark${m > 1 ? 's' : ''}` }))}
          filterKey="marks"
        />

        <SelectFilter
          label="Difficulty"
          value={filters.difficulty}
          options={DIFFICULTY_OPTIONS.map(d => ({ value: d, label: d.charAt(0).toUpperCase() + d.slice(1) }))}
          filterKey="difficulty"
        />

        <SelectFilter
          label="Type"
          value={filters.type}
          options={TYPE_OPTIONS}
          filterKey="type"
        />

        <SelectFilter
          label="Source"
          value={filters.source}
          options={SOURCE_OPTIONS}
          filterKey="source"
        />

        <button
          onClick={() => onFilterChange('showImportantOnly', !filters.showImportantOnly)}
          className={cn(
            'flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors',
            filters.showImportantOnly
              ? 'bg-yellow-500 text-white border-yellow-500'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          )}
        >
          <Star className="w-3.5 h-3.5" />
          Important
        </button>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 px-2 py-1.5 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Clear
          </button>
        )}

        <div className="ml-auto text-xs text-gray-400">
          <span className="font-semibold text-gray-600">{totalFiltered}</span>
          {totalFiltered !== totalAll && <span> of {totalAll}</span>}
          {' '}questions
        </div>
      </div>
    </div>
  );
}
