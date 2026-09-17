"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Per-viewer bookmarks and solved-tracking.
 *
 * This is a per-browser convenience, so localStorage is the right home for it —
 * but every read and write is guarded, because storage can be blocked or throw
 * in a private window, and the UI must render correctly when it comes back
 * empty.
 *
 * The state lives in a tiny external store rather than component state, so that
 * every card, the header and the progress bar all see the same set without
 * prop-drilling, and so the first client read happens through
 * `useSyncExternalStore` instead of a setState-in-effect cascade.
 */

export interface IdSnapshot {
  ids: ReadonlySet<string>;
  /** False until the browser store has been read at least once. */
  ready: boolean;
}

const EMPTY: IdSnapshot = { ids: new Set(), ready: false };

function createIdStore(key: string) {
  let snapshot: IdSnapshot = EMPTY;
  const listeners = new Set<() => void>();

  const emit = () => listeners.forEach((l) => l());

  function load() {
    let ids = new Set<string>();
    try {
      const raw = localStorage.getItem(key);
      if (raw) ids = new Set(JSON.parse(raw) as string[]);
    } catch {
      // Blocked or corrupt storage — start from an empty set.
    }
    snapshot = { ids, ready: true };
  }

  function persist(ids: Set<string>) {
    snapshot = { ids, ready: true };
    try {
      localStorage.setItem(key, JSON.stringify([...ids]));
    } catch {
      // Nothing to do; the change still applies for this session.
    }
    emit();
  }

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      // Another tab may change the same key.
      const onStorage = (e: StorageEvent) => {
        if (e.key === key) {
          load();
          emit();
        }
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
      };
    },
    getSnapshot(): IdSnapshot {
      if (!snapshot.ready) load();
      return snapshot;
    },
    getServerSnapshot(): IdSnapshot {
      return EMPTY;
    },
    toggle(id: string) {
      const next = new Set(snapshot.ids);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      persist(next);
    },
    clear() {
      persist(new Set());
    },
  };
}

const bookmarkStore = createIdStore("cpyq-bookmarks");
const solvedStore = createIdStore("cpyq-solved");

function useIdStore(store: ReturnType<typeof createIdStore>) {
  const snapshot = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  );
  const has = useCallback((id: string) => snapshot.ids.has(id), [snapshot]);
  return {
    ids: snapshot.ids,
    ready: snapshot.ready,
    has,
    toggle: store.toggle,
    clear: store.clear,
  };
}

export const useBookmarks = () => useIdStore(bookmarkStore);
export const useSolved = () => useIdStore(solvedStore);
