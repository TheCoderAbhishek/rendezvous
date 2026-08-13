"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "rendezvous-theme";

/**
 * Inline, blocking script rendered in <head> so the correct theme class is
 * applied before first paint (no flash). Kept minimal and dependency-free —
 * this runs purely in the browser and never touches a server.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var el=document.documentElement;el.classList.remove('light','dark');el.classList.add(t);el.style.colorScheme=t;}catch(e){}})();`;

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function commitTheme(next: Theme) {
  const el = document.documentElement;
  el.classList.remove("light", "dark");
  el.classList.add(next);
  el.style.colorScheme = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggleTheme = useCallback(() => {
    commitTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);
  return { theme, toggleTheme };
}
