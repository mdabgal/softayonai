"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const themeChangeEvent = "softayona-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem("theme") !== "light";
}

function getServerThemeSnapshot() {
  return true;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="rounded-xl border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}