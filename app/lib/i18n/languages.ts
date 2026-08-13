export const LANGUAGES = [
  { code: "en", nativeName: "English", locale: "en-US" },
  { code: "hi", nativeName: "हिन्दी", locale: "hi-IN" },
  { code: "mr", nativeName: "मराठी", locale: "mr-IN" },
  { code: "es", nativeName: "Español", locale: "es-ES" },
  { code: "de", nativeName: "Deutsch", locale: "de-DE" },
  { code: "pt", nativeName: "Português", locale: "pt-PT" },
  { code: "ta", nativeName: "தமிழ்", locale: "ta-IN" },
  { code: "te", nativeName: "తెలుగు", locale: "te-IN" },
  { code: "kn", nativeName: "ಕನ್ನಡ", locale: "kn-IN" },
  { code: "ml", nativeName: "മലയാളം", locale: "ml-IN" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export function isLanguageCode(value: string): value is LanguageCode {
  return LANGUAGES.some((l) => l.code === value);
}

export function localeTagFor(code: LanguageCode): string {
  return LANGUAGES.find((l) => l.code === code)?.locale ?? "en-US";
}
