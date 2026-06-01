'use client';

import React from 'react';
import { Menu, FlaskConical } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
          <FlaskConical className="w-5 h-5 text-white" />
        </div>
        <div className="hidden sm:block">
          <span className="text-sm font-bold text-gray-900">ChemPYQ</span>
          <span className="text-xs text-gray-400 block leading-none">Class 12</span>
        </div>
      </div>

      {/* Built by tag */}
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50">
        Built by Abilash V
      </span>

      {/* Menu */}
      <button
        onClick={onMenuToggle}
        className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-xl transition-colors lg:hidden"
      >
        <Menu className="w-5 h-5" />
      </button>
      <div className="w-9 hidden lg:block" />
    </header>
  );
}
