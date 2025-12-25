"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "fr" | "en";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem("fiitsa-language");
    if (stored === "fr" || stored === "en") {
      setLanguage(stored);
      return;
    }
    const browserLang = window.navigator.language.toLowerCase();
    const next = browserLang.startsWith("fr") ? "fr" : "en";
    setLanguage(next);
    window.localStorage.setItem("fiitsa-language", next);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      window.localStorage.setItem("fiitsa-language", next);
      return next;
    });
  };

  const value = useMemo(() => ({ language, toggleLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage doit être utilisé dans LanguageProvider.");
  }
  return context;
}

type TranslatedLabel = { fr: string; en: string };

export function t(label: TranslatedLabel, language: Language) {
  return label[language] || label.fr;
}
