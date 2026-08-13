"use client";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex justify-end px-4 py-4 sm:px-6">
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
