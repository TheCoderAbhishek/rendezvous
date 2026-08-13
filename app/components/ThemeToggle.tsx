"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../lib/theme-context";
import { useLanguage } from "../lib/i18n/language-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.common.themeToLight : t.common.themeToDark}
      title={isDark ? t.common.themeToLight : t.common.themeToDark}
      className="btn-ghost relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 10, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -10, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
          style={{ color: isDark ? "var(--gold-soft)" : "var(--gold)" }}
        >
          {isDark ? <FaMoon /> : <FaSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
