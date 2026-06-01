'use client';

import { useState, useEffect, useCallback } from 'react';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [solved, setSolved] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem('chem-bookmarks');
      const savedSolved = localStorage.getItem('chem-solved');
      if (savedBookmarks) setBookmarks(new Set(JSON.parse(savedBookmarks)));
      if (savedSolved) setSolved(new Set(JSON.parse(savedSolved)));
    } catch {}
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('chem-bookmarks', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const toggleSolved = useCallback((id: string) => {
    setSolved(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('chem-solved', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setBookmarks(new Set());
    setSolved(new Set());
    localStorage.removeItem('chem-bookmarks');
    localStorage.removeItem('chem-solved');
  }, []);

  return { bookmarks, solved, toggleBookmark, toggleSolved, clearAll };
}
