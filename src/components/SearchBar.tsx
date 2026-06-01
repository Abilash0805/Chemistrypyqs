'use client';

import React, { useRef } from 'react';
import { Search, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onMenuToggle: () => void;
  chapterName?: string | null;
}

export default function SearchBar({ value, onChange, onMenuToggle, chapterName }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
      {/* Built by tag — visible on mobile only (sidebar hidden on mobile) */}
      <div className="lg:hidden flex justify-center pt-2">
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
          ✦ Built by Abilash V
        </span>
      </div>
      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={chapterName ? `Search in ${chapterName}...` : 'Search questions, topics, formulas...'}
            className="w-full pl-9 pr-9 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all placeholder:text-gray-400"
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
