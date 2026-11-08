"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Settings, PhoneCall, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const T = {
  en: {
    eyebrow: "Success Story",
    title: ["Building The Future", "With Technology IT"],
    stats: [
      { num: "10", label: "Years of Experience" },
      { num: "350", label: "Successful Projects" },
      { num: "50", label: "IT Professionals" },
    ],
    cards: [
      {
        title: "Industry Experience",
        text: "With extensive industry knowledge, we provide innovative solutions that help businesses stay ahead in the digital world.",
      },
      {
        title: "24/7 Customer Support",
        text: "Our team offers round-the-clock support, ensuring seamless operations and assistance whenever you need it.",
      },
      {
        title: "Trust & Reliability",
        text: "We prioritize building strong, dependable relationships with secure solutions you can rely on for long-term success.",
      },
    ],
  },
  bn: {
    eyebrow: "সাফল্যের গল্প",
    title: ["প্রযুক্তির সাথে গড়ছি", "আগামীর ভবিষ্যৎ"],
    stats: [
      { num: "১০", label: "বছরের অভিজ্ঞতা" },
      { num: "৩৫০", label: "সফল প্রজেক্ট" },
      { num: "৫০", label: "আইটি প্রফেশনাল" },
    ],
    cards: [
      {
        title: "ইন্ডাস্ট্রি অভিজ্ঞতা",
        text: "গভীর ইন্ডাস্ট্রি জ্ঞানের মাধ্যমে আমরা এমন উদ্ভাবনী সমাধান দিই যা ডিজিটাল দুনিয়ায় আপনার ব্যবসাকে এগিয়ে রাখে।",
      },
      {
        title: "২৪/৭ কাস্টমার সাপোর্ট",
        text: "আমাদের টিম সার্বক্ষণিক সাপোর্ট দেয়, যাতে আপনার কাজ কখনো থেমে না থাকে।",
      },
      {
        title: "বিশ্বাস ও নির্ভরযোগ্যতা",
        text: "আমরা নিরাপদ সমাধান ও দীর্ঘমেয়াদি, আস্থার সম্পর্ক গড়ে তোলাকে সবচেয়ে বেশি গুরুত্ব দিই।",
      },
    ],
  },
};

const ICONS = [Settings, PhoneCall, ShieldCheck];

/* Self-contained globe (no image file needed) */
function Globe() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      {/* orbit ring + satellite */}
      <motion.div
        aria-hidden
        className="absolute -inset-[7%] rounded-full border border-dashed border-[#0F9D8F]/40 dark:border-[#1BB6D4]/35"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 48, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFB627] shadow-[0_0_18px_4px_rgba(255,182,39,0.55)]" />
      </motion.div>

      {/* sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 34% 28%, #1BB6D4 0%, #0F9D8F 30%, #0B2A44 62%, #071427 100%)",
          boxShadow:
            "0 0 90px 8px rgba(15,157,143,0.28), inset -30px -30px 60px rgba(4,10,20,0.75)",
        }}
      />

      {/* dotted landmasses */}
      <div
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.85) 1.3px, transparent 1.6px)",
          backgroundSize: "10px 10px",
          WebkitMaskImage:
            "radial-gradient(ellipse 52% 40% at 58% 52%, #000 38%, transparent 78%), radial-gradient(ellipse 22% 30% at 28% 68%, #000 30%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse 52% 40% at 58% 52%, #000 38%, transparent 78%), radial-gradient(ellipse 22% 30% at 28% 68%, #000 30%, transparent 80%)",
        }}
      />

      {/* grid lines */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full opacity-35"
        aria-hidden
      >
        <g fill="none" stroke="#9fe6f2" strokeWidth="0.45">
          <ellipse cx="100" cy="100" rx="99" ry="30" />
          <ellipse cx="100" cy="100" rx="99" ry="64" />
          <ellipse cx="100" cy="100" rx="30" ry="99" />
          <ellipse cx="100" cy="100" rx="64" ry="99" />
          <line x1="1" y1="100" x2="199" y2="100" />
          <line x1="100" y1="1" x2="100" y2="199" />
        </g>
      </svg>
    </div>
  );
}

export default function SuccessStory() {
  const { language } = useLanguage();
  const lang = language === "bn" ? "bn" : "en";
  const t = T[lang] ?? T.en;

  return (
    <section className="relative overflow-hidden bg-[#EEF4F7] text-[#071427] dark:bg-[#071427] dark:text-white py-24 lg:py-32 border-t-2 border-[#0F9D8F]/30 transition-colors duration-300">
      
      {/* ambient light glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[#0F9D8F]/15 dark:bg-[#0F9D8F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-[#1BB6D4]/15 dark:bg-[#1BB6D4]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1520px] items-center gap-14 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1fr_320px_1.3fr] lg:gap-14">
        
        {/* Left: heading + globe */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#FFB627]" />
            <p className="text-lg font-semibold text-[#0F9D8F] dark:text-[#1BB6D4] sm:text-xl">
              {t.eyebrow}
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.8ru] text-[#071427] dark:text-white">
            {t.title[0]}
            <br />
            <span className="text-[#071427]/60 dark:text-white/60">{t.title[1]}</span>
          </h2>

          <div className="mt-12">
            <Globe />
          </div>
        </div>

        {/* Middle: stats panel */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#0F9D8F]/30 dark:border-[#1BB6D4]/25 bg-white dark:bg-gradient-to-b dark:from-[#0E2A4A] dark:to-[#0B1F3A] px-8 py-12 shadow-2xl dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] text-[#071427] dark:text-white transition-colors duration-300">
          <div
            className="pointer-events-none absolute inset-0 opacity-10 dark:opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(rgba(15,157,143,0.7) 1px, transparent 1.2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F9D8F] via-[#1BB6D4] to-[#FFB627]" />

          <div className="relative divide-y divide-[#071427]/10 dark:divide-white/10">
            {t.stats.map((s) => (
              <div key={s.label} className="py-8 text-center first:pt-2 last:pb-2">
                <p className="text-6xl font-extrabold leading-none tracking-tight sm:text-7xl text-[#071427] dark:text-white">
                  {s.num}
                  <span className="text-[#0F9D8F] dark:text-[#FFB627]">+</span>
                </p>
                <p className="mt-4 text-lg font-semibold text-[#071427]/80 dark:text-white/90 sm:text-xl">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: feature cards */}
        <div className="flex flex-col gap-6">
          {t.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                className="group relative flex gap-6 overflow-hidden rounded-2xl border border-[#0F9D8F]/30 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-white/[0.07] dark:to-white/[0.02] p-8 transition-all duration-300 hover:border-[#0F9D8F] dark:hover:border-[#1BB6D4]/50 sm:p-9 shadow-xl backdrop-blur-xl text-[#071427] dark:text-white"
              >
                {/* left rail */}
                <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#0F9D8F] to-[#1BB6D4] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] shadow-[0_10px_30px_-8px_rgba(27,182,212,0.6)] text-white">
                  <Icon size={32} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#071427] dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#071427]/75 dark:text-white/75 sm:text-lg">
                    {c.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}