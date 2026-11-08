"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    title: "Everything you need to scale your business digitally",
    subtitle:
      "Explore our comprehensive suite of cutting-edge tools designed to automate workflows, secure data, and drive exponential growth.",
    ctaPrimary: "Get Started Free",
    ctaSecondary: "Talk to Expert",
    points: ["No credit card required", "7-day free trial", "24/7 dedicated support"],
    mock: {
      window: "Workflow",
      nodes: ["Trigger", "Process", "Deliver"],
      security: { title: "Data security", status: "Protected" },
      automation: { title: "Workflow automation", status: "Running" },
      growth: { title: "Business growth", status: "Trending up" },
    },
  },
  bn: {
    title: "আপনার ব্যবসাকে ডিজিটালভাবে স্কেল করার জন্য যা কিছু প্রয়োজন",
    subtitle:
      "অটোমেশন, ডেটা সিকিউরিটি এবং ব্যবসায়িক প্রবৃদ্ধি নিশ্চিত করতে আমাদের আধুনিক টুলসগুলোর স্যুট এক নজরে দেখে নিন।",
    ctaPrimary: "ফ্রি শুরু করুন",
    ctaSecondary: "বিশেষজ্ঞের সাথে কথা বলুন",
    points: ["ক্রেডিট কার্ডের প্রয়োজন নেই", "৭ দিনের ফ্রি ট্রায়াল", "২৪/৭ ডেডিকেটেড সাপোর্ট"],
    mock: {
      window: "ওয়ার্কফ্লো",
      nodes: ["ট্রিগার", "প্রসেস", "ডেলিভারি"],
      security: { title: "ডেটা সিকিউরিটি", status: "সুরক্ষিত" },
      automation: { title: "ওয়ার্কফ্লো অটোমেশন", status: "চালু আছে" },
      growth: { title: "ব্যবসায়িক প্রবৃদ্ধি", status: "বাড়ছে" },
    },
  },
};

const ease = [0.25, 1, 0.5, 1] as any;

const cardSurface =
  "relative rounded-2xl border border-[#071427]/10 bg-white/95 p-4 shadow-[0_24px_48px_-24px_rgba(7,20,39,0.35)] backdrop-blur dark:border-white/10 dark:bg-[#0B1F3A]/95 dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]";

const iconBox =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4]";

function FloatCard({
  x,
  y,
  delay,
  bobDuration,
  bobDelay,
  className,
  reduce,
  children,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  delay: number;
  bobDuration: number;
  bobDelay: number;
  className: string;
  reduce: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <motion.div style={{ x, y }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay, ease }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: bobDuration, repeat: Infinity, ease: "easeInOut", delay: bobDelay }}
            className={cardSurface}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function FeaturesHero() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];
  const reduce = !!useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 16 });
  const sy = useSpring(my, { stiffness: 70, damping: 16 });
  const mainX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const mainY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const aX = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const aY = useTransform(sy, [-0.5, 0.5], [-22, 22]);
  const bX = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const bY = useTransform(sy, [-0.5, 0.5], [18, -18]);
  const cX = useTransform(sx, [-0.5, 0.5], [-20, 20]);
  const cY = useTransform(sy, [-0.5, 0.5], [26, -26]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const words = t.title.split(" ");
  const headingFit = isBn ? "leading-[1.4]" : "leading-[1.1] tracking-tight";
  const bodyFit = isBn ? "leading-[1.9]" : "leading-relaxed";

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-[#EEF4F7] pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-36 transition-colors duration-300 dark:bg-[#06101E]"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          animate={reduce ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#0F9D8F]/20 blur-3xl"
        />
        <motion.div
          animate={reduce ? undefined : { x: [0, -60, 0], y: [0, -30, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#1BB6D4]/20 blur-3xl dark:bg-[#1BB6D4]/15"
        />
        <div
          className="absolute inset-0 text-[#071427]/[0.06] dark:text-white/[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            WebkitMaskImage: "radial-gradient(ellipse at 65% 45%, black 10%, transparent 70%)",
            maskImage: "radial-gradient(ellipse at 65% 45%, black 10%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0F9D8F]/50 to-transparent dark:via-[#1BB6D4]/40" />
      </div>

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          
          {/* Left: text */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h1
              aria-label={t.title}
              className={`flex flex-wrap gap-x-[0.28em] text-4xl font-bold text-[#071427] dark:text-white sm:text-5xl xl:text-[3.5rem] ${headingFit}`}
            >
              {words.map((w, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="-mb-[0.2em] -mt-[0.12em] inline-block overflow-hidden pb-[0.2em] pt-[0.12em]"
                >
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, delay: 0.1 + i * 0.06, ease }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              {...fadeUp(0.55)}
              className={`mt-6 max-w-[52ch] text-base text-[#071427]/70 dark:text-white/70 sm:text-lg ${bodyFit}`}
            >
              {t.subtitle}
            </motion.p>

            <motion.div {...fadeUp(0.7)} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0F9D8F] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(15,157,143,0.7)] outline-none transition-colors hover:bg-[#0c8a7d] focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF4F7] dark:bg-[#1BB6D4] dark:text-[#071427] dark:shadow-[0_12px_30px_-12px_rgba(27,182,212,0.6)] dark:hover:bg-[#3cc4df] dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#06101E]"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-[#071427]/15 bg-white px-7 py-4 text-base font-semibold text-[#071427] outline-none transition-colors hover:border-[#0F9D8F] hover:text-[#0F9D8F] focus-visible:ring-2 focus-visible:ring-[#0F9D8F] dark:border-white/15 dark:bg-[#0B1F3A] dark:text-white dark:hover:border-[#1BB6D4] dark:hover:text-[#1BB6D4] dark:focus-visible:ring-[#1BB6D4]"
              >
                {t.ctaSecondary}
              </Link>
            </motion.div>

            <ul className="mt-10 space-y-3.5">
              {t.points.map((pt, i) => (
                <motion.li
                  key={pt}
                  {...fadeUp(0.85 + i * 0.1)}
                  className="flex items-center gap-3 text-[15px] font-medium text-[#071427]/80 dark:text-white/80"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F9D8F]/12 text-[#0F9D8F] dark:bg-[#1BB6D4]/15 dark:text-[#1BB6D4]"
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{pt}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: product canvas */}
          <motion.div
            style={{ y: reduce ? 0 : canvasY }}
            className="relative lg:col-span-6 lg:h-[580px] xl:col-span-7"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            >
              <motion.div
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#0F9D8F]/35 dark:border-[#1BB6D4]/25"
              >
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F9D8F] shadow-[0_0_0_6px_rgba(15,157,143,0.15)] dark:bg-[#1BB6D4] dark:shadow-[0_0_0_6px_rgba(27,182,212,0.15)]" />
              </motion.div>
              <motion.div
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#071427]/10 dark:border-white/10"
              >
                <span className="absolute bottom-[14%] left-[6%] h-2 w-2 rounded-full bg-[#1BB6D4]/80" />
                <span className="absolute right-[8%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#0F9D8F]/70" />
              </motion.div>
            </div>

            <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[430px] lg:-translate-x-1/2 lg:-translate-y-1/2 xl:w-[460px]">
              <motion.div
                style={{ x: mainX, y: mainY }}
                initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease }}
              >
                <div className="rounded-[20px] bg-gradient-to-br from-[#0F9D8F]/70 via-[#071427]/10 to-[#1BB6D4]/70 p-px shadow-[0_40px_80px_-30px_rgba(7,20,39,0.4)] dark:via-white/10 dark:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.75)]">
                  <div className="overflow-hidden rounded-[19px] bg-white dark:bg-[#0B1F3A]">
                    <div className="flex items-center gap-2 border-b border-[#071427]/10 px-5 py-3.5 dark:border-white/10">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#071427]/15 dark:bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#071427]/15 dark:bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#071427]/15 dark:bg-white/20" />
                      <span className="ml-3 text-xs font-medium text-[#071427]/55 dark:text-white/55">
                        {t.mock.window}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center">
                        {t.mock.nodes.map((label, i) => (
                          <div key={label} className="flex flex-1 items-center last:flex-none">
                            <motion.span
                              animate={
                                reduce
                                  ? undefined
                                  : {
                                      scale: [1, 1.08, 1],
                                      boxShadow: [
                                        "0 0 0 0 rgba(15,157,143,0)",
                                        "0 0 0 8px rgba(15,157,143,0.18)",
                                        "0 0 0 0 rgba(15,157,143,0)",
                                      ],
                                    }
                              }
                              transition={{
                                duration: 0.7,
                                delay: 1.6 + i * 1.2,
                                repeat: Infinity,
                                repeatDelay: 2.9,
                                ease: "easeOut",
                              }}
                              className="rounded-lg border border-[#0F9D8F]/30 bg-[#0F9D8F]/10 px-3 py-2 text-xs font-semibold text-[#0F9D8F] dark:border-[#1BB6D4]/30 dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4]"
                            >
                              {label}
                            </motion.span>

                            {i < t.mock.nodes.length - 1 && (
                              <span className="relative mx-2 h-px flex-1 bg-[#071427]/15 dark:bg-white/15">
                                {!reduce && (
                                  <motion.span
                                    aria-hidden="true"
                                    initial={{ left: "0%", opacity: 0 }}
                                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                                    transition={{
                                      duration: 1.1,
                                      delay: 2.1 + i * 1.2,
                                      repeat: Infinity,
                                      repeatDelay: 2.5,
                                      ease: "easeInOut",
                                    }}
                                    className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-[#0F9D8F] dark:bg-[#1BB6D4]"
                                  />
                                )}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 text-[#0F9D8F] dark:text-[#1BB6D4]">
                        <svg viewBox="0 0 400 120" className="h-auto w-full" aria-hidden="true">
                          <defs>
                            <linearGradient id="fh-area" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
                              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {[30, 60, 90].map((y) => (
                            <line
                              key={y}
                              x1="0"
                              x2="400"
                              y1={y}
                              y2={y}
                              stroke="currentColor"
                              strokeOpacity="0.12"
                              strokeDasharray="3 5"
                            />
                          ))}
                          <motion.path
                            d="M0 100 C 40 96, 70 82, 110 78 S 170 90, 210 62 S 280 52, 320 32 S 375 20, 400 10 L400 120 L0 120 Z"
                            fill="url(#fh-area)"
                            initial={reduce ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1.9 }}
                          />
                          <motion.path
                            d="M0 100 C 40 96, 70 82, 110 78 S 170 90, 210 62 S 280 52, 320 32 S 375 20, 400 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={reduce ? false : { pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
                          />
                          <motion.circle
                            cx="396"
                            cy="11"
                            r="4.5"
                            fill="currentColor"
                            initial={reduce ? false : { scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 3 }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:mt-0 lg:contents">
              <FloatCard
                x={aX}
                y={aY}
                delay={1.2}
                bobDuration={6}
                bobDelay={0}
                reduce={reduce}
                className="lg:absolute lg:left-0 lg:top-[38%] lg:w-56"
              >
                <div className="flex items-center gap-3">
                  <span className={`relative ${iconBox}`}>
                    {!reduce && (
                      <motion.span
                        aria-hidden="true"
                        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-xl border border-[#0F9D8F] dark:border-[#1BB6D4]"
                      />
                    )}
                    <ShieldCheck size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#071427] dark:text-white">
                      {t.mock.security.title}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[#071427]/60 dark:text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0F9D8F] dark:bg-[#1BB6D4]" />
                      {t.mock.security.status}
                    </p>
                  </div>
                </div>
              </FloatCard>

              <FloatCard
                x={bX}
                y={bY}
                delay={1.4}
                bobDuration={6.5}
                bobDelay={1}
                reduce={reduce}
                className="lg:absolute lg:right-0 lg:top-2 lg:w-56"
              >
                <div className="flex items-center gap-3">
                  <span className={iconBox}>
                    <TrendingUp size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#071427] dark:text-white">
                      {t.mock.growth.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[#071427]/60 dark:text-white/60">
                      {t.mock.growth.status}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex h-10 items-end gap-1.5" aria-hidden="true">
                  {[0.4, 0.6, 0.5, 0.8, 1].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={reduce ? false : { scaleY: 0 }}
                      animate={
                        reduce ? { scaleY: 1 } : { scaleY: [1, 0.55 + (i % 3) * 0.1, 1] }
                      }
                      transition={
                        reduce
                          ? undefined
                          : { duration: 2.4, repeat: Infinity, delay: 2.2 + i * 0.18, ease: "easeInOut" }
                      }
                      style={{ height: `${h * 100}%`, transformOrigin: "bottom" }}
                      className="flex-1 rounded-sm bg-[#0F9D8F]/70 dark:bg-[#1BB6D4]/70"
                    />
                  ))}
                </div>
              </FloatCard>

              <FloatCard
                x={cX}
                y={cY}
                delay={1.6}
                bobDuration={7}
                bobDelay={0.6}
                reduce={reduce}
                className="lg:absolute lg:bottom-4 lg:right-2 lg:w-60"
              >
                <div className="flex items-center gap-3">
                  <span className={iconBox}>
                    <Zap size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#071427] dark:text-white">
                      {t.mock.automation.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[#071427]/60 dark:text-white/60">
                      {t.mock.automation.status}
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2.5" aria-hidden="true">
                  {[0, 1].map((r) => (
                    <div key={r} className="flex items-center justify-between gap-4">
                      <span className="h-2 flex-1 rounded-full bg-[#071427]/10 dark:bg-white/10" />
                      <span className="relative h-5 w-9 rounded-full bg-[#071427]/15 dark:bg-white/15">
                        <motion.span
                          animate={
                            reduce
                              ? { backgroundColor: "#0F9D8F" }
                              : {
                                  backgroundColor: [
                                    "rgba(15,157,143,0)",
                                    "#0F9D8F",
                                    "#0F9D8F",
                                    "rgba(15,157,143,0)",
                                  ],
                                }
                          }
                          transition={{
                            duration: 5,
                            times: [0, 0.15, 0.85, 1],
                            repeat: Infinity,
                            delay: 2 + r * 0.8,
                          }}
                          className="absolute inset-0 rounded-full"
                        />
                        <motion.span
                          animate={reduce ? { x: 16 } : { x: [2, 18, 18, 2] }}
                          transition={{
                            duration: 5,
                            times: [0, 0.15, 0.85, 1],
                            repeat: Infinity,
                            delay: 2 + r * 0.8,
                            ease: "easeInOut",
                          }}
                          className="absolute left-0 top-0.5 h-4 w-4 rounded-full bg-white shadow"
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </FloatCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}