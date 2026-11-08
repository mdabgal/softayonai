"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Code2,
  FileCode2,
  Layers,
  Palette,
  Rocket,
  Search,
  Users,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Copy                                                               */
/* ------------------------------------------------------------------ */
const content = {
  en: {
    modelsTitle: "Flexible ways to partner with us",
    modelsSubtitle:
      "From adding a few engineers to handing us the whole product, choose how much of the work you want to run yourself.",
    spectrumLeft: "You steer",
    spectrumRight: "We deliver",
    spectrumLabel: "Who leads the work",
    models: [
      {
        level: 1,
        icon: Users,
        title: "Dedicated Developer Team",
        description:
          "Hand-picked, senior software engineers who integrate directly into your workflow, reporting to your product managers.",
        features: ["Full-time commitment", "Direct communication", "Scalable on demand"],
      },
      {
        level: 2,
        icon: FileCode2,
        title: "Project-Based Development",
        description:
          "End-to-end delivery of your product. We handle design, engineering, testing and deployment with a fixed timeline and budget.",
        features: [
          "Defined scope & milestones",
          "Dedicated Project Manager",
          "Guaranteed delivery",
        ],
      },
      {
        level: 0,
        icon: Layers,
        title: "Staff Augmentation",
        description:
          "Quickly fill skill gaps in your existing team by adding specialized experts in frontend, backend, cloud or AI.",
        features: ["Fast onboarding (7 days)", "Flexible contracts", "Zero HR overhead"],
      },
    ],
    processTitle: "How your project comes to life",
    processSubtitle:
      "A structured four-step framework that keeps the work transparent and the delivery on time.",
    youGet: "You get",
    steps: [
      {
        number: "01",
        icon: Search,
        title: "Discovery & Planning",
        desc: "We analyze your requirements, map out the architecture and set realistic milestones.",
        output: "Scope & roadmap",
      },
      {
        number: "02",
        icon: Palette,
        title: "UI/UX & Architecture",
        desc: "We craft intuitive wireframes, visual designs and a high-performance system architecture.",
        output: "Prototype & architecture",
      },
      {
        number: "03",
        icon: Code2,
        title: "Agile Development",
        desc: "We write clean, test-driven code in two-week sprints with regular progress demos.",
        output: "Sprint demos",
      },
      {
        number: "04",
        icon: Rocket,
        title: "QA & Deployment",
        desc: "Rigorous security and performance checks, then a smooth cloud deployment with ongoing support.",
        output: "Live product",
      },
    ],
  },
  bn: {
    modelsTitle: "আমাদের সাথে যেভাবে যুক্ত হতে পারেন",
    modelsSubtitle:
      "কয়েকজন ইঞ্জিনিয়ার যোগ করা থেকে পুরো প্রোডাক্ট আমাদের হাতে তুলে দেওয়া পর্যন্ত, কাজের কতটা আপনি নিজে চালাতে চান তা বেছে নিন।",
    spectrumLeft: "আপনি পরিচালনা করেন",
    spectrumRight: "আমরা ডেলিভার করি",
    spectrumLabel: "কাজ কে পরিচালনা করে",
    models: [
      {
        level: 1,
        icon: Users,
        title: "ডেডিকেটেড ডেভেলপার টিম",
        description:
          "অভিজ্ঞ ও দক্ষ সফটওয়্যার ইঞ্জিনিয়াররা সরাসরি আপনার প্রজেক্টের সাথে যুক্ত হয়ে আপনার নিয়ম ও গাইডলাইন অনুযায়ী কাজ করবেন।",
        features: ["ফুল-টাইম এনগেজমেন্ট", "সরাসরি যোগাযোগ", "প্রয়োজনমতো স্কেল করার সুবিধা"],
      },
      {
        level: 2,
        icon: FileCode2,
        title: "প্রজেক্ট-বেসড ডেভেলপমেন্ট",
        description:
          "আপনার প্রোডাক্টের শুরু থেকে শেষ পর্যন্ত (ডিজাইন, কোডিং, টেস্টিং এবং লঞ্চ) পুরো দায়িত্ব আমরা নিই একটি নির্দিষ্ট বাজেট ও সময়ের মধ্যে।",
        features: [
          "নির্দিষ্ট মাইলফলক ও স্কোপ",
          "ডেডিকেটেড প্রজেক্ট ম্যানেজার",
          "নির্ধারিত সময়ে ডেলিভারি",
        ],
      },
      {
        level: 0,
        icon: Layers,
        title: "স্টাফ অগমেন্টেশন",
        description:
          "আপনার বর্তমান টিমের ঘাটতি পূরণে ফ্রন্টএন্ড, ব্যাকএন্ড, ক্লাউড বা এআই এক্সপার্টদের যুক্ত করে টিমকে আরও শক্তিশালী করুন।",
        features: ["দ্রুত অনবোর্ডিং (৭ দিন)", "নমনীয় কন্ট্রাক্ট", "এইচআর ওভারহেড নেই"],
      },
    ],
    processTitle: "যেভাবে আমরা প্রজেক্ট বাস্তবায়ন করি",
    processSubtitle:
      "চারটি সুনির্দিষ্ট ধাপের পরিকল্পনা, যা কাজের স্বচ্ছতা ও সময়মতো ডেলিভারি নিশ্চিত করে।",
    youGet: "আপনি পাবেন",
    steps: [
      {
        number: "০১",
        icon: Search,
        title: "ডিসকভারি ও প্ল্যানিং",
        desc: "প্রজেক্টের চাহিদা বিশ্লেষণ, টেক আর্কিটেকচার তৈরি এবং মাইলফলক নির্ধারণ করা।",
        output: "স্কোপ ও রোডম্যাপ",
      },
      {
        number: "০২",
        icon: Palette,
        title: "ইউআই/ইউএক্স ও আর্কিটেকচার",
        desc: "ইউজার-ফ্রেন্ডলি ওয়্যারফ্রেম, ভিজ্যুয়াল ডিজাইন এবং হাই-পারফরম্যান্স সিস্টেম লেআউট।",
        output: "প্রোটোটাইপ ও আর্কিটেকচার",
      },
      {
        number: "০৩",
        icon: Code2,
        title: "অ্যাজাইল ডেভেলপমেন্ট",
        desc: "স্প্রিন্ট অনুযায়ী কোডিং এবং নিয়মিত লাইভ ডেমো প্রদানের মাধ্যমে নিখুঁত কোড তৈরি।",
        output: "স্প্রিন্ট ডেমো",
      },
      {
        number: "০৪",
        icon: Rocket,
        title: "কিউএ ও ডিপ্লয়মেন্ট",
        desc: "নিরাপত্তা ও স্পিড টেস্ট সম্পন্ন করে ক্লাউড সার্ভারে লাইভ করা এবং সাপোর্ট প্রদান।",
        output: "লাইভ প্রোডাক্ট",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Drifting background blob                                           */
/* ------------------------------------------------------------------ */
function Blob({
  className,
  dx,
  dy,
  duration,
  reduce,
}: {
  className: string;
  dx: number;
  dy: number;
  duration: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden
      animate={reduce ? undefined : { x: [0, dx, 0], y: [0, dy, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Spectrum                                                           */
/* ------------------------------------------------------------------ */
function Spectrum({
  level,
  left,
  right,
  label,
  reduce,
}: {
  level: number;
  left: string;
  right: string;
  label: string;
  reduce: boolean | null;
}) {
  const track = (frac: number) => `calc(6px + (100% - 12px) * ${frac})`;

  return (
    <div>
      <div
        role="img"
        aria-label={`${label}: ${
          level === 0 ? left : level === 2 ? right : `${left} / ${right}`
        }`}
        className="relative h-6"
      >
        <span className="absolute inset-x-1.5 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-[#071427]/10 dark:bg-white/15" />

        <span
          className="absolute left-1.5 top-1/2 h-0.5 -translate-y-1/2"
          style={{ width: `calc((100% - 12px) * ${level / 2})` }}
        >
          <motion.span
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="block h-full origin-left rounded-full bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4]"
          />
        </span>

        {[0, 1, 2].map((i) => {
          const active = i === level;
          const passed = i < level;
          return (
            <span
              key={i}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: track(i / 2) }}
            >
              <motion.span
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  delay: 0.45 + i * 0.25,
                  type: "spring",
                  stiffness: 380,
                  damping: 16,
                }}
                className="relative flex"
              >
                {active && (
                  <span className="absolute inset-0 -m-1 rounded-full bg-[#FFB627]/50 animate-ping motion-reduce:hidden [animation-duration:2.4s]" />
                )}
                <span
                  className={`relative block rounded-full ${
                    active
                      ? "h-5 w-5 bg-[#FFB627] ring-4 ring-[#FFB627]/25"
                      : passed
                      ? "h-3 w-3 bg-[#0F9D8F]"
                      : "h-3 w-3 bg-white ring-2 ring-[#071427]/15 dark:bg-[#0B1F3A] dark:ring-white/25"
                  }`}
                />
              </motion.span>
            </span>
          );
        })}
      </div>
      <div className="mt-1.5 flex justify-between text-xs font-medium text-[#071427]/55 dark:text-white/55">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Model Card                                                         */
/* ------------------------------------------------------------------ */
function ModelCard({
  index,
  reduce,
  children,
  watermark,
}: {
  index: number;
  reduce: boolean | null;
  children: ReactNode;
  watermark: ReactNode;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reduce ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.13, ease }}
      onMouseMove={onMove}
      className="group relative rounded-3xl bg-[#071427]/10 p-px shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#0F9D8F]/15 dark:bg-white/10"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0F9D8F] via-[#1BB6D4] to-[#FFB627] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <article className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-7 dark:bg-[#0B1F3A] sm:p-9">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0F9D8F]/[0.07] to-transparent dark:from-[#1BB6D4]/[0.08]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx, 50%) var(--my, 0%), rgba(27,182,212,0.14), transparent 70%)",
          }}
        />
        {watermark}
        <div className="relative flex h-full flex-col">{children}</div>
      </article>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */
export default function HowWeWorkSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];
  const reduce = useReducedMotion();

  const models = [...t.models].sort((a, b) => a.level - b.level);

  const h2 = `font-semibold ${
    isBn
      ? "text-3xl leading-[1.45] sm:text-4xl lg:text-[2.6rem]"
      : "text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
  }`;
  const sub = `mx-auto mt-5 max-w-2xl text-base sm:text-lg ${
    isBn ? "leading-[1.9]" : "leading-relaxed"
  }`;

  const fadeUp = {
    initial: reduce ? (false as const) : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.7, ease },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F1F7F9] to-white py-24 transition-colors duration-300 dark:from-[#071427] dark:via-[#081A31] dark:to-[#071427] lg:py-32">
      {/* Background grid + blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-[#071427]/[0.09] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_70%)] dark:text-white/[0.07]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <Blob
        reduce={reduce}
        dx={50}
        dy={30}
        duration={16}
        className="-left-24 top-16 h-80 w-80 bg-[#0F9D8F]/15 dark:bg-[#0F9D8F]/15"
      />
      <Blob
        reduce={reduce}
        dx={-40}
        dy={40}
        duration={19}
        className="-right-24 top-40 h-96 w-96 bg-[#1BB6D4]/15 dark:bg-[#1BB6D4]/12"
      />
      <Blob
        reduce={reduce}
        dx={30}
        dy={-30}
        duration={22}
        className="left-1/3 top-[34rem] h-64 w-64 bg-[#FFB627]/12 dark:bg-[#FFB627]/8"
      />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* ============ Part 1: Engagement models ============ */}
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <h2 className={`${h2} text-[#071427] dark:text-white`}>
            {t.modelsTitle}
          </h2>
          <p className={`${sub} text-[#071427]/70 dark:text-white/70`}>
            {t.modelsSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <ModelCard
                key={m.title}
                index={idx}
                reduce={reduce}
                watermark={
                  <Icon
                    aria-hidden
                    strokeWidth={1}
                    className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-[#0F9D8F]/[0.07] transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110 dark:text-[#1BB6D4]/[0.08]"
                  />
                }
              >
                <Spectrum
                  level={m.level}
                  left={t.spectrumLeft}
                  right={t.spectrumRight}
                  label={t.spectrumLabel}
                  reduce={reduce}
                />

                <h3
                  className={`mt-8 flex items-start gap-3 text-2xl font-semibold text-[#071427] dark:text-white ${
                    isBn ? "leading-snug" : "leading-tight"
                  }`}
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F9D8F]/15 to-[#1BB6D4]/15 text-[#0F9D8F] ring-1 ring-[#0F9D8F]/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:text-[#1BB6D4] dark:ring-[#1BB6D4]/25">
                    <Icon size={20} />
                  </span>
                  <span>{m.title}</span>
                </h3>

                <p
                  className={`mt-4 text-base text-[#071427]/70 dark:text-white/70 ${
                    isBn ? "leading-[1.85]" : "leading-relaxed"
                  }`}
                >
                  {m.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-[#071427]/10 pt-6 dark:border-white/10">
                  {m.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + idx * 0.13 + fi * 0.12,
                        ease,
                      }}
                      className="flex items-center gap-3 text-sm font-medium text-[#071427]/85 dark:text-white/85"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F9D8F]/12 text-[#0F9D8F] dark:bg-[#1BB6D4]/15 dark:text-[#1BB6D4]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </ModelCard>
            );
          })}
        </div>

        {/* ============ Part 2: Process roadmap (White / Light Mode Panel) ============ */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-white border border-[#071427]/10 px-6 py-16 text-[#071427] shadow-xl shadow-[#071427]/5 dark:bg-[#0B1F3A] dark:border-white/10 dark:text-white sm:px-10 lg:mt-32 lg:px-14 lg:py-20">
          {/* Subtle light mode grid pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 text-[#071427]/[0.04] dark:text-white/[0.06] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_80%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Drifting soft color blobs */}
          <Blob
            reduce={reduce}
            dx={30}
            dy={-20}
            duration={14}
            className="-top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 bg-[#1BB6D4]/10 dark:bg-[#1BB6D4]/20"
          />
          <Blob
            reduce={reduce}
            dx={50}
            dy={20}
            duration={18}
            className="-bottom-24 -left-16 h-72 w-72 bg-[#0F9D8F]/10 dark:bg-[#0F9D8F]/25"
          />
          <Blob
            reduce={reduce}
            dx={-40}
            dy={-30}
            duration={20}
            className="-bottom-20 -right-10 h-64 w-64 bg-[#FFB627]/10 dark:bg-[#FFB627]/12"
          />

          <motion.div
            {...fadeUp}
            className="relative mx-auto mb-14 max-w-3xl text-center lg:mb-16"
          >
            <h2 className={`${h2} text-[#071427] dark:text-white`}>{t.processTitle}</h2>
            <p className={`${sub} text-[#071427]/70 dark:text-white/70`}>{t.processSubtitle}</p>
          </motion.div>

          <div className="relative">
            {/* Horizontal connecting line (desktop) */}
            <div
              aria-hidden
              className="absolute left-7 right-[calc(25%-52px)] top-[27px] hidden h-[2px] lg:block"
            >
              <span className="absolute inset-0 rounded-full bg-[#071427]/10 dark:bg-white/15" />
              <motion.span
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[#0F9D8F] via-[#1BB6D4] to-[#FFB627]"
              />
              {!reduce && (
                <motion.span
                  animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.8,
                    delay: 2.6,
                  }}
                  className="absolute top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-[#FFB627] shadow-[0_0_18px_6px_rgba(255,182,39,0.5)]"
                />
              )}
            </div>
            {/* Vertical connecting line (mobile) */}
            <span
              aria-hidden
              className="absolute bottom-7 left-7 top-7 w-px -translate-x-1/2 bg-gradient-to-b from-[#0F9D8F] via-[#1BB6D4] to-[#FFB627] lg:hidden"
            />

            <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
              {t.steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="flex gap-5 lg:block">
                    {/* Step Icon Node */}
                    <motion.span
                      initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        delay: 0.3 + i * 0.45,
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EEF4F7] text-[#0F9D8F] shadow-md ring-2 ring-[#0F9D8F]/40 dark:bg-[#0A1B33] dark:text-[#1BB6D4] dark:ring-[#0F9D8F]/70"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full ring-2 ring-[#0F9D8F]/30 animate-ping motion-reduce:hidden [animation-duration:3s]"
                        style={{ animationDelay: `${i * 0.6}s` }}
                      />
                      <Icon size={22} className="relative" />
                    </motion.span>

                    {/* Step Card (Clean white card with subtle border and shadow in light mode) */}
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={reduce ? undefined : { y: -6 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.65, delay: 0.5 + i * 0.4, ease }}
                      className="group relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-[#EEF4F7]/60 p-6 ring-1 ring-[#071427]/10 backdrop-blur-sm transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#0F9D8F]/10 hover:ring-[#0F9D8F]/40 dark:bg-white/[0.04] dark:ring-white/10 dark:hover:bg-white/[0.07] dark:hover:ring-[#1BB6D4]/40 lg:mt-7"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-1 -top-3 text-7xl font-black leading-none text-[#071427]/[0.03] transition-colors duration-300 group-hover:text-[#0F9D8F]/10 dark:text-white/[0.05] dark:group-hover:text-[#FFB627]/15"
                      >
                        {s.number}
                      </span>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#0F9D8F] via-[#1BB6D4] to-[#FFB627] transition-transform duration-500 group-hover:scale-x-100"
                      />

                      <p className="relative text-sm font-bold text-[#0F9D8F] dark:text-[#FFB627]">
                        {s.number}
                      </p>
                      <h3
                        className={`relative mt-1 text-lg font-semibold text-[#071427] dark:text-white ${
                          isBn ? "leading-snug" : "leading-tight"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`relative mt-3 text-sm text-[#071427]/70 dark:text-white/70 ${
                          isBn ? "leading-[1.85]" : "leading-relaxed"
                        }`}
                      >
                        {s.desc}
                      </p>

                      <div className="relative mt-5 border-t border-[#071427]/10 pt-4 dark:border-white/10">
                        <p className="text-xs font-medium text-[#071427]/50 dark:text-white/50">
                          {t.youGet}
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#071427] dark:text-white">
                          <Check
                            size={14}
                            strokeWidth={3}
                            className="shrink-0 text-[#0F9D8F] dark:text-[#1BB6D4]"
                          />
                          {s.output}
                        </p>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}