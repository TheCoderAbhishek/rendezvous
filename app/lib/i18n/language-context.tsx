"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_LANGUAGE, LANGUAGES, isLanguageCode, localeTagFor, type LanguageCode } from "./languages";
import { DICTIONARIES } from "./locales";

const STORAGE_KEY = "rendezvous-language";

let currentLanguage: LanguageCode = DEFAULT_LANGUAGE;
let hasDetected = false;
const listeners = new Set<() => void>();

function detectInitialLanguage(): LanguageCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLanguageCode(stored)) return stored;
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through.
  }
  const browserLanguages = window.navigator.languages ?? [window.navigator.language];
  for (const lang of browserLanguages) {
    const short = lang.slice(0, 2).toLowerCase();
    if (isLanguageCode(short)) return short;
  }
  return DEFAULT_LANGUAGE;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): LanguageCode {
  if (!hasDetected) {
    hasDetected = true;
    currentLanguage = detectInitialLanguage();
  }
  return currentLanguage;
}

function getServerSnapshot(): LanguageCode {
  return DEFAULT_LANGUAGE;
}

function commitLanguage(code: LanguageCode) {
  currentLanguage = code;
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // ignore
  }
  listeners.forEach((listener) => listener());
}

export function useLanguage() {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLanguage = useCallback((code: LanguageCode) => commitLanguage(code), []);

  return {
    language,
    setLanguage,
    localeTag: localeTagFor(language),
    t: DICTIONARIES[language],
    languages: LANGUAGES,
  };
}
