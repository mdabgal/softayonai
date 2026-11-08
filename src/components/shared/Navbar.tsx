"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";

type NavLink = { href: string; en: string; bn: string };

const links: NavLink[] = [
  { href: "/", en: "Home", bn: "হোম" },
  { href: "/about", en: "About", bn: "সম্পর্কে" },
  { href: "/services", en: "Services", bn: "সার্ভিস" },
  { href: "/blogs", en: "Blogs", bn: "ব্লগ" },
  { href: "/features", en: "Features", bn: "ফিচার" },
  { href: "/pricing", en: "Pricing", bn: "প্রাইসিং" },
  { href: "/contact", en: "Contact", bn: "যোগাযোগ" },
];

/* Unique Logo Icon with Multi-layer Glow */
function LogoIcon() {
  return (
    <span className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0F9D8F] via-[#1BB6D4] to-[#0B1F3A] shadow-xl shadow-[#0F9D8F]/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] opacity-50 blur-sm" />
      <svg viewBox="0 0 24 24" className="relative size-6 z-10" aria-hidden="true">
        <ellipse
          cx="12"
          cy="11"
          rx="7"
          ry="8.5"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
        />
        <path
          d="M8.5 8.5c1-1.6 2.6-2.4 4.4-2.2"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="10.6" y="19.5" width="2.8" height="3" rx="1.4" fill="#fff" />
      </svg>
    </span>
  );
}

/* Unique Segmented Language Switch with High Contrast */
function LanguageSwitch({
  id,
  language,
  toggleLanguage,
}: {
  id: string;
  language: string;
  toggleLanguage: () => void;
}) {
  const options = [
    { code: "bn", label: "বাংলা" },
    { code: "en", label: "EN" },
  ];
  return (
    <div
      role="group"
      aria-label={language === "bn" ? "ভাষা" : "Language"}
      className="flex rounded-full border-2 border-[#0F9D8F]/40 bg-[#E2ECF2] p-1 shadow-inner dark:border-white/20 dark:bg-[#0B1F3A]"
    >
      {options.map((o) => {
        const selected = language === o.code;
        return (
          <button
            key={o.code}
            type="button"
            aria-pressed={selected}
            onClick={() => !selected && toggleLanguage()}
            className={cn(
              "relative min-w-[3.5rem] rounded-full px-3.5 py-2 text-sm font-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9D8F]",
              selected
                ? "text-white dark:text-white"
                : "text-[#071427]/80 hover:text-[#071427] dark:text-white/70 dark:hover:text-white"
            )}
          >
            {selected && (
              <motion.span
                layoutId={`lang-pill-${id}`}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] dark:bg-gradient-to-r dark:from-[#0F9D8F] dark:to-[#1BB6D4] shadow-lg"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeHref =
    pathname === "/"
      ? "/"
      : links.find(
          (l) => l.href !== "/" && pathname === l.href.split("#")[0]
        )?.href ?? "";

  const t = (l: NavLink) => (language === "bn" ? l.bn : l.en);
  const dashboardLabel = language === "bn" ? "ড্যাশবোর্ড" : "Dashboard";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Top vibrant notification bar */}
        <div
          className={cn(
            "overflow-hidden bg-gradient-to-r from-[#071427] via-[#0F2A4A] to-[#071427] text-white transition-all duration-300 dark:from-[#040A14] dark:to-[#091528] border-b-2 border-[#0F9D8F]/40 shadow-md",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
          aria-hidden={scrolled}
        >
          <div className="mx-auto flex h-10 max-w-[1520px] items-center justify-between gap-4 px-4 sm:px-6">
            <p className="flex items-center gap-2 truncate text-xs sm:text-sm font-bold text-white/95">
              <Sparkles size={15} className="text-[#FFB627] animate-pulse" />
              {language === "bn"
                ? "আপনার ব্যবসার জন্য আধুনিক সফটওয়্যার, অ্যাপ ও ওয়েবসাইট সলিউশন"
                : "Modern Software, Mobile Apps & Website Solutions for your Business"}
            </p>
            <Link
              href="/#contact"
              tabIndex={scrolled ? -1 : 0}
              className="hidden shrink-0 text-xs sm:text-sm font-black text-[#FFB627] underline-offset-4 hover:underline sm:block"
            >
              {language === "bn"
                ? "⚡ ফ্রি কনসালটেশন নিন"
                : "⚡ Get a Free Consultation"}
            </Link>
          </div>
        </div>

        {/* Main Header Bar */}
        <div
          className={cn(
            "border-b-2 bg-[#EEF4F7]/95 backdrop-blur-2xl transition-all duration-300 dark:bg-[#06101E]/95",
            scrolled
              ? "border-[#0F9D8F]/50 shadow-2xl shadow-[#0F9D8F]/20 dark:border-white/20 dark:shadow-black/80"
              : "border-[#0F9D8F]/30 dark:border-white/10"
          )}
        >
          <nav
            aria-label={language === "bn" ? "প্রধান নেভিগেশন" : "Main navigation"}
            className={cn(
              "mx-auto flex max-w-[1520px] items-center justify-between px-4 transition-all duration-300 sm:px-6 xl:grid xl:grid-cols-[1fr_auto_1fr]",
              scrolled ? "h-[70px]" : "h-[84px]"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3.5 justify-self-start rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F9D8F]"
            >
              <LogoIcon />
              <span className="leading-tight">
                <span className="block text-2xl font-black tracking-tight text-[#071427] dark:text-white">
                  Soft<span className="text-[#0F9D8F]">Ayona</span>
                </span>
                <span className="hidden text-xs font-extrabold text-[#0F9D8F] tracking-wide uppercase sm:block">
                  {language === "bn" ? "ডিজিটাল সলিউশন" : "Digital Solutions"}
                </span>
              </span>
            </Link>

            {/* Center: Vibrant pill group of links with clear dark mode contrast */}
            <ul className="hidden items-center gap-1 rounded-full border-2 border-[#0F9D8F]/40 bg-white p-1.5 shadow-xl shadow-[#0F9D8F]/15 dark:border-white/20 dark:bg-[#0B1F3A] xl:flex">
              {links.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative block rounded-full px-4.5 py-2.5 text-[15px] font-black transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9D8F]",
                        isActive
                          ? "text-white dark:text-white"
                          : "text-[#071427]/85 hover:bg-[#EEF4F7] hover:text-[#071427] dark:text-white/90 dark:hover:bg-white/15 dark:hover:text-white"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] shadow-lg"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 34,
                          }}
                        />
                      )}
                      <span className="relative z-10">{t(link)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right: Language switch, Theme toggle & Dashboard CTA */}
            <div className="hidden items-center gap-3.5 justify-self-end xl:flex">
              <LanguageSwitch
                id="desktop"
                language={language}
                toggleLanguage={toggleLanguage}
              />
              <ThemeToggle />
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-7 py-3.5 text-[15px] font-black text-white shadow-xl shadow-[#0F9D8F]/35 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#0F9D8F]/50 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071427]"
              >
                <LogIn size={18} strokeWidth={2.8} />
                <span>{dashboardLabel}</span>
              </Link>
            </div>

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex size-12 items-center justify-center rounded-2xl bg-[#071427] text-white shadow-lg shadow-[#071427]/20 transition-all hover:bg-[#0F9D8F] dark:bg-white dark:text-[#071427] dark:hover:bg-[#0F9D8F] dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9D8F] xl:hidden"
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-[#071427]/70 backdrop-blur-md xl:hidden"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label={language === "bn" ? "মেনু" : "Menu"}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-[400px] flex-col bg-[#EEF4F7] dark:bg-[#06101E] shadow-2xl border-l-2 border-[#0F9D8F]/30 xl:hidden"
            >
              <div className="flex h-[84px] items-center justify-between border-b-2 border-[#0F9D8F]/30 px-6 dark:border-white/10 bg-white dark:bg-[#0B1F3A]">
                <span className="text-xl font-black text-[#071427] dark:text-white">
                  Soft<span className="text-[#0F9D8F]">Ayona</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex size-12 items-center justify-center rounded-2xl bg-[#071427] text-white shadow-md dark:bg-white dark:text-[#071427]"
                >
                  <X size={24} strokeWidth={2.5} />
                </button>
              </div>

              <ul className="flex-1 space-y-2 overflow-y-auto p-5">
                {links.map((link) => {
                  const isActive = activeHref === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-black transition-all",
                          isActive
                            ? "bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] text-white shadow-xl shadow-[#0F9D8F]/30"
                            : "text-[#071427]/85 hover:bg-white hover:text-[#071427] dark:text-white/90 dark:hover:bg-white/15 dark:hover:text-white"
                        )}
                      >
                        <span>{t(link)}</span>
                        <ArrowUpRight
                          size={20}
                          className={isActive
                            ? "text-white/80"
                            : "text-[#071427]/40 dark:text-white/40"}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="space-y-4 border-t-2 border-[#0F9D8F]/30 p-6 dark:border-white/10 bg-white dark:bg-[#0B1F3A] shadow-lg">
                <div className="flex items-center justify-between">
                  <LanguageSwitch
                    id="panel"
                    language={language}
                    toggleLanguage={toggleLanguage}
                  />
                  <ThemeToggle />
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-5 py-4 text-lg font-black text-white shadow-xl shadow-[#0F9D8F]/35"
                >
                  <LogIn size={20} strokeWidth={2.8} />
                  <span>{dashboardLabel}</span>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}