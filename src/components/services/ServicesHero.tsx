"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type AnimationPlaybackControls,
  type MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  ChevronsLeftRight,
  LayoutDashboard,
  Pencil,
  Rocket,
  Search,
  ShoppingBag,
  Users,
  Wallet,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

/* ------------------------------------------------------------------ */
/* Copy                                                               */
/* ------------------------------------------------------------------ */
const content = {
  en: {
    titleTop: "Transforming ideas into",
    titleBottom: "scalable digital solutions",
    description:
      "You bring the idea. We design, engineer and launch it as secure, modern software, with a dedicated developer or a full product team.",
    primaryCta: "Discuss your project",
    secondaryCta: "Explore all services",
    hint: "Drag the handle and watch an idea become a product",
    sliderLabel: "Compare the idea sketch with the finished product",
    ideaLabel: "Idea sketch",
    productLabel: "Finished product",
    stats: [
      { value: "150+", label: "Projects delivered" },
      { value: "50+", label: "Engineers" },
      { value: "99%", label: "Client satisfaction" },
    ],
    appName: "Your Product",
    nav: ["Dashboard", "Orders", "Customers", "Reports"],
    search: "Search",
    kpis: [
      { label: "Revenue", value: "৳ 12.4L", delta: "+12%" },
      { label: "Orders", value: "2,840", delta: "+8%" },
      { label: "Customers", value: "1,206", delta: "+21%" },
    ],
    chartTitle: "Monthly growth",
    chartTag: "This year",
    months: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    tooltip: "Oct: ৳ 4.2L",
    listTitle: "Recent orders",
    orders: [
      ["Order #1042", "৳ 4,500"],
      ["Order #1041", "৳ 2,200"],
      ["Order #1040", "৳ 7,800"],
      ["Order #1039", "৳ 1,900"],
    ],
    noteChart: "growth chart!",
    noteList: "order list",
  },
  bn: {
    titleTop: "আপনার ধারণাকে রূপ দিন",
    titleBottom: "আধুনিক ও স্কেলেবল ডিজিটাল সলিউশনে",
    description:
      "ধারণাটা আপনার। ডিজাইন, ইঞ্জিনিয়ারিং আর লঞ্চ করে নিরাপদ ও আধুনিক সফটওয়্যারে রূপ দেওয়ার কাজটা আমাদের, একজন ডেডিকেটেড ডেভেলপার বা পূর্ণাঙ্গ প্রোডাক্ট টিম নিয়ে।",
    primaryCta: "প্রজেক্ট নিয়ে কথা বলুন",
    secondaryCta: "সকল সার্ভিস দেখুন",
    hint: "হ্যান্ডেল টেনে দেখুন ধারণা কীভাবে প্রোডাক্ট হয়ে ওঠে",
    sliderLabel: "ধারণার স্কেচ আর তৈরি প্রোডাক্ট তুলনা করুন",
    ideaLabel: "ধারণার স্কেচ",
    productLabel: "তৈরি প্রোডাক্ট",
    stats: [
      { value: "১৫০+", label: "সম্পন্ন প্রজেক্ট" },
      { value: "৫০+", label: "ইঞ্জিনিয়ার" },
      { value: "৯৯%", label: "ক্লায়েন্ট সন্তুষ্টি" },
    ],
    appName: "আপনার প্রোডাক্ট",
    nav: ["ড্যাশবোর্ড", "অর্ডার", "কাস্টমার", "রিপোর্ট"],
    search: "সার্চ করুন",
    kpis: [
      { label: "আয়", value: "৳ ১২.৪ লাখ", delta: "+১২%" },
      { label: "অর্ডার", value: "২,৮৪০", delta: "+৮%" },
      { label: "কাস্টমার", value: "১,২০৬", delta: "+২১%" },
    ],
    chartTitle: "মাসিক প্রবৃদ্ধি",
    chartTag: "এই বছর",
    months: ["জানু", "মার্চ", "মে", "জুলাই", "সেপ্ট", "নভে"],
    tooltip: "অক্টো: ৳ ৪.২ লাখ",
    listTitle: "সাম্প্রতিক অর্ডার",
    orders: [
      ["অর্ডার #১০৪২", "৳ ৪,৫০০"],
      ["অর্ডার #১০৪১", "৳ ২,২০০"],
      ["অর্ডার #১০৪০", "৳ ৭,৮০০"],
      ["অর্ডার #১০৩৯", "৳ ১,৯০০"],
    ],
    noteChart: "গ্রোথ চার্ট!",
    noteList: "অর্ডার লিস্ট",
  },
};

type Copy = typeof content.en;

const navIcons = [LayoutDashboard, ShoppingBag, Users, BarChart3];
const kpiIcons = [Wallet, ShoppingBag, Users];
const kpiTones = [
  "bg-[#0F9D8F]/12 text-[#0F9D8F]",
  "bg-[#FFB627]/20 text-[#C98A00]",
  "bg-[#1BB6D4]/15 text-[#0E8CA6]",
];
const orderTones = [
  "bg-[#0F9D8F]/12 text-[#0F9D8F]",
  "bg-[#1BB6D4]/15 text-[#0E8CA6]",
  "bg-[#FFB627]/20 text-[#C98A00]",
  "bg-[#0F9D8F]/12 text-[#0F9D8F]",
];

const HAND =
  "'Segoe Print','Bradley Hand','Chalkboard SE','Comic Sans MS',cursive";

const INK = "border-white/50";
const REST = 30;
const clamp = (v: number) => Math.min(97, Math.max(3, v));

function Line({ w, className = "" }: { w?: string; className?: string }) {
  return (
    <span
      className={`block h-[7px] rounded-full bg-white/35 ${className}`}
      style={w ? { width: w } : undefined}
    />
  );
}

function Mock({ variant, t }: { variant: "sketch" | "product"; t: Copy }) {
  const s = variant === "sketch";

  const box = s
    ? `relative rounded-[14px_4px_16px_5px/5px_16px_5px_14px] border-2 border-dashed ${INK}`
    : "relative rounded-xl bg-white shadow-[0_1px_2px_rgba(7,20,39,0.06),0_8px_24px_-12px_rgba(7,20,39,0.12)] ring-1 ring-[#071427]/[0.06]";

  return (
    <div className="flex h-full w-full">
      <aside
        className={`hidden w-[18%] shrink-0 flex-col gap-1.5 p-4 sm:flex ${
          s
            ? `border-r-2 border-dashed ${INK}`
            : "bg-gradient-to-b from-[#071427] to-[#0B2447]"
        }`}
      >
        <div className="mb-3 flex h-9 items-center gap-2.5">
          {s ? (
            <>
              <span
                className={`h-7 w-7 shrink-0 rounded-full border-2 border-dashed ${INK}`}
              />
              <Line w="55%" />
            </>
          ) : (
            <>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] text-xs font-extrabold text-white">
                A
              </span>
              <span className="truncate text-sm font-bold text-white">
                {t.appName}
              </span>
            </>
          )}
        </div>

        {navIcons.map((Icon, i) =>
          s ? (
            <div key={i} className="flex h-9 items-center gap-2.5 px-2.5">
              <span
                className={`h-4 w-4 shrink-0 rounded-[3px] border-2 border-dashed ${INK}`}
              />
              <Line w={`${[70, 55, 65, 50][i]}%`} />
            </div>
          ) : (
            <div
              key={i}
              className={`flex h-9 items-center gap-2.5 rounded-lg px-2.5 text-sm font-medium ${
                i === 0
                  ? "bg-[#0F9D8F] text-white shadow-lg shadow-[#0F9D8F]/30"
                  : "text-white/60"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="truncate">{t.nav[i]}</span>
            </div>
          )
        )}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        <div className="flex h-9 shrink-0 items-center justify-between">
          {s ? (
            <Line w="30%" className="!h-[9px]" />
          ) : (
            <p className="text-lg font-bold text-[#071427]">{t.nav[0]}</p>
          )}
          <div className="flex items-center gap-3">
            {s ? (
              <span
                className={`hidden h-8 w-36 rounded-full border-2 border-dashed sm:block ${INK}`}
              />
            ) : (
              <span className="hidden h-8 w-36 items-center gap-2 rounded-full bg-white px-3 text-xs text-[#071427]/50 ring-1 ring-[#071427]/[0.08] sm:flex">
                <Search size={14} />
                {t.search}
              </span>
            )}
            <span
              className={`h-8 w-8 rounded-full ${
                s
                  ? `border-2 border-dashed ${INK}`
                  : "bg-gradient-to-br from-[#FFB627] to-[#FF8A4C] ring-2 ring-white"
              }`}
            />
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {t.kpis.map((k, i) => {
            const Icon = kpiIcons[i];
            return (
              <div
                key={k.label}
                className={`${box} h-[84px] p-3.5 sm:h-24 ${
                  i === 2 ? "hidden sm:block" : ""
                }`}
              >
                {s ? (
                  <>
                    <Line w="40%" />
                    <span
                      className={`mt-4 block h-4 w-3/5 rounded-[4px] border-2 border-dashed ${INK}`}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#071427]/60">
                        {k.label}
                      </span>
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${kpiTones[i]}`}
                      >
                        <Icon size={15} />
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-xl font-bold text-[#071427]">
                        {k.value}
                      </span>
                      <span className="rounded-full bg-[#0F9D8F]/10 px-1.5 text-xs font-bold text-[#0F9D8F]">
                        {k.delta}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
          <div className={`${box} flex min-h-0 flex-col p-4 lg:col-span-2`}>
            <div className="flex h-6 shrink-0 items-center justify-between">
              {s ? (
                <Line w="35%" />
              ) : (
                <>
                  <p className="text-sm font-bold text-[#071427]">
                    {t.chartTitle}
                  </p>
                  <span className="rounded-full bg-[#0F9D8F]/10 px-2 py-0.5 text-xs font-semibold text-[#0F9D8F]">
                    {t.chartTag}
                  </span>
                </>
              )}
            </div>

            <div className="relative mt-3 min-h-0 flex-1">
              <svg
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden
              >
                {s ? (
                  <path
                    d="M0,82 L40,70 L80,76 L120,52 L165,58 L210,34 L255,22 L300,10"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2.5"
                    strokeDasharray="7 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                ) : (
                  <>
                    <defs>
                      <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0F9D8F" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#0F9D8F" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0F9D8F" />
                        <stop offset="100%" stopColor="#1BB6D4" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,25 H300 M0,50 H300 M0,75 H300"
                      stroke="#071427"
                      strokeOpacity="0.08"
                      strokeDasharray="3 5"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M0,82 C30,74 55,78 80,60 S130,56 165,44 S220,34 255,22 S285,14 300,8 L300,100 L0,100 Z"
                      fill="url(#heroArea)"
                    />
                    <path
                      d="M0,82 C30,74 55,78 80,60 S130,56 165,44 S220,34 255,22 S285,14 300,8"
                      fill="none"
                      stroke="url(#heroLine)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </>
                )}
              </svg>

              {!s && (
                <div
                  className="absolute"
                  style={{ left: "85%", top: "22%" }}
                  aria-hidden
                >
                  <span className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-[3px] ring-[#0F9D8F]" />
                  <span className="absolute right-3 top-0 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#071427] px-2 py-1 text-xs font-semibold text-white shadow-lg">
                    {t.tooltip}
                  </span>
                </div>
              )}

              {s && (
                <span
                  className="absolute bottom-2 right-3 -rotate-3 text-sm text-white/75"
                  style={{ fontFamily: HAND }}
                >
                  {t.noteChart}
                </span>
              )}
            </div>

            <div className="mt-2 flex h-4 shrink-0 items-center justify-between px-1">
              {t.months.map((m) =>
                s ? (
                  <span key={m} className="h-[2px] w-5 rounded-full bg-white/30" />
                ) : (
                  <span
                    key={m}
                    className="text-[11px] font-medium text-[#071427]/45"
                  >
                    {m}
                  </span>
                )
              )}
            </div>
          </div>

          <div className={`${box} hidden min-h-0 flex-col p-4 lg:flex`}>
            <div className="flex h-6 shrink-0 items-center">
              {s ? (
                <Line w="50%" />
              ) : (
                <p className="text-sm font-bold text-[#071427]">
                  {t.listTitle}
                </p>
              )}
            </div>
            <div className="mt-2 flex flex-col">
              {t.orders.map(([name, amount], i) => (
                <div key={i} className="flex h-10 items-center gap-2.5 text-sm">
                  {s ? (
                    <>
                      <span
                        className={`h-6 w-6 shrink-0 rounded-full border-2 border-dashed ${INK}`}
                      />
                      <Line className="flex-1" />
                    </>
                  ) : (
                    <>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${orderTones[i]}`}
                      >
                        <ShoppingBag size={13} />
                      </span>
                      <span className="flex-1 truncate font-medium text-[#071427]">
                        {name}
                      </span>
                      <span className="text-xs font-semibold text-[#071427]/65">
                        {amount}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
            {s && (
              <span
                className="absolute bottom-3 right-4 rotate-2 text-sm text-white/75"
                style={{ fontFamily: HAND }}
              >
                {t.noteList}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider({ pos, label }: { pos: MotionValue<number>; label: string }) {
  const left = useMotionTemplate`${pos}%`;
  const [value, setValue] = useState(() => Math.round(pos.get()));

  useEffect(() => pos.on("change", (v) => setValue(Math.round(v))), [pos]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") pos.set(clamp(pos.get() - step));
    else if (e.key === "ArrowRight") pos.set(clamp(pos.get() + step));
    else if (e.key === "Home") pos.set(3);
    else if (e.key === "End") pos.set(97);
    else return;
    e.preventDefault();
  };

  return (
    <motion.div
      style={{ left }}
      className="pointer-events-none absolute inset-y-0 z-10 w-0"
    >
      <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-[#FFB627] shadow-[0_0_16px_rgba(255,182,39,0.9)]" />
      <button
        type="button"
        role="slider"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        onKeyDown={onKeyDown}
        className="pointer-events-auto absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-[#071427] shadow-xl ring-4 ring-[#FFB627] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F9D8F]"
      >
        <ChevronsLeftRight size={20} />
      </button>
    </motion.div>
  );
}

export default function ServicesHero() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];
  const reduce = useReducedMotion();

  const pos = useMotionValue(100);
  const clip = useMotionTemplate`inset(0 0 0 ${pos}%)`;
  const stageRef = useRef<HTMLDivElement>(null);
  const sweep = useRef<AnimationPlaybackControls | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (reduce) {
      pos.set(REST);
      return;
    }
    sweep.current = animate(pos, REST, {
      duration: 2,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => sweep.current?.stop();
  }, [pos, reduce]);

  const moveTo = (clientX: number) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    pos.set(clamp(((clientX - r.left) / r.width) * 100));
  };

  return (
    <section className="relative overflow-hidden bg-[#EEF4F7] pb-20 pt-32 transition-colors duration-300 dark:bg-[#06101E] lg:pb-28 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 80% 8%, rgba(27,182,212,0.16), transparent 70%), radial-gradient(50% 40% at 15% 95%, rgba(15,157,143,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Header with Motion Animations added */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`font-semibold text-[#071427] dark:text-white ${
              isBn
                ? "text-3xl leading-[1.45] tracking-normal sm:text-4xl lg:text-5xl"
                : "text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            }`}
          >
            <span className="block">{t.titleTop}</span>
            <span className="mt-1 block bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] bg-clip-text text-transparent">
              {t.titleBottom}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className={`mt-6 max-w-2xl text-base text-[#071427]/70 dark:text-white/70 sm:text-lg ${
              isBn ? "leading-[1.9]" : "leading-relaxed"
            }`}
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FFB627] px-7 py-3.5 text-base font-bold text-[#071427] shadow-lg shadow-[#FFB627]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9D8F]"
            >
              {t.primaryCta}
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href="#all-services"
              className="inline-flex items-center justify-center rounded-xl border border-[#071427]/20 bg-white/50 px-7 py-3.5 text-base font-semibold text-[#071427] backdrop-blur transition-colors duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9D8F] dark:border-white/25 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {t.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Idea -> product reveal */}
        <div className="relative mt-14 lg:mt-16">
          <div
            aria-hidden
            className="absolute inset-x-12 -bottom-6 top-1/3 rounded-full bg-gradient-to-r from-[#0F9D8F]/30 to-[#1BB6D4]/30 blur-3xl"
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-[#071427]/10 bg-white shadow-2xl shadow-[#071427]/20 dark:border-white/10 dark:bg-[#0B1F3A] dark:shadow-black/50"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#071427]/10 px-4 py-3 dark:border-white/10">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-3 w-3 rounded-full bg-[#FF6B6B]/80" />
                <span className="h-3 w-3 rounded-full bg-[#FFB627]/90" />
                <span className="h-3 w-3 rounded-full bg-[#0F9D8F]/90" />
              </div>
              <span className="rounded-md bg-[#071427]/5 px-10 py-1 text-xs font-medium text-[#071427]/55 dark:bg-white/10 dark:text-white/55">
                yourproduct.com
              </span>
              <span />
            </div>

            <div
              ref={stageRef}
              className="relative h-[400px] cursor-ew-resize touch-pan-y select-none sm:h-[440px]"
              onPointerDown={(e) => {
                sweep.current?.stop();
                dragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                moveTo(e.clientX);
              }}
              onPointerMove={(e) => {
                if (dragging.current) moveTo(e.clientX);
              }}
              onPointerUp={() => (dragging.current = false)}
              onPointerCancel={() => (dragging.current = false)}
            >
              <div
                className="absolute inset-0 bg-[#0C2D4A]"
                style={{
                  backgroundImage:
                    "radial-gradient(70% 90% at 0% 0%, rgba(27,182,212,0.22), transparent 70%)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 text-white/[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="relative h-full">
                  <Mock variant="sketch" t={t} />
                </div>
              </div>

              <motion.div
                style={{ clipPath: clip }}
                className="absolute inset-0 bg-[#F3F7FA]"
              >
                <Mock variant="product" t={t} />
              </motion.div>

              <span className="pointer-events-none absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 rounded-full bg-[#071427]/85 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur sm:text-sm">
                <Pencil size={14} />
                {t.ideaLabel}
              </span>
              <span className="pointer-events-none absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-[#0F9D8F] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg sm:text-sm">
                <Rocket size={14} />
                {t.productLabel}
              </span>

              <Divider pos={pos} label={t.sliderLabel} />
            </div>
          </motion.div>

          <p className="mt-4 text-center text-sm font-medium text-[#071427]/60 dark:text-white/60">
            {t.hint}
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-[#071427]/15 text-center text-[#071427] dark:divide-white/15 dark:text-white">
          {t.stats.map((s) => (
            <div key={s.label} className="px-3">
              <dd className="text-2xl font-bold sm:text-3xl">{s.value}</dd>
              <dt className="mt-1 text-xs text-[#071427]/60 dark:text-white/60 sm:text-sm">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}