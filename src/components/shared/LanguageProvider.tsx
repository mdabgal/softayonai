"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Language = "en" | "bn";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageChangeEvent = "softayona-language-change";

function subscribeToLanguage(callback: () => void) {
  window.addEventListener(languageChangeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(languageChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function getLanguageSnapshot(): Language {
  return localStorage.getItem("language") === "bn" ? "bn" : "en";
}

function getServerLanguageSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "bn" : "en";
    localStorage.setItem("language", nextLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
