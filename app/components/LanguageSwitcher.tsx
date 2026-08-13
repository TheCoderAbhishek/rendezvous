"use client";

import { FaGlobe } from "react-icons/fa6";
import { useLanguage } from "../lib/i18n/language-context";
import { isLanguageCode } from "../lib/i18n/languages";

export default function LanguageSwitcher() {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <label className="btn-ghost relative flex h-10 items-center gap-2 rounded-full px-3 text-sm cursor-pointer">
      <FaGlobe aria-hidden="true" style={{ color: "var(--gold)" }} />
      <span className="sr-only">{t.common.languageLabel}</span>
      <select
        aria-label={t.common.languageLabel}
        value={language}
        onChange={(e) => {
          const value = e.target.value;
          if (isLanguageCode(value)) setLanguage(value);
        }}
        className="cursor-pointer appearance-none bg-transparent pr-1 text-sm outline-none"
        style={{ color: "var(--ink)" }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeName}
          </option>
        ))}
      </select>
    </label>
  );
}
