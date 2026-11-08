"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Cloud,
  Code,
  Cpu,
  FlaskConical,
  GitBranch,
  Palette,
  Plus,
  Rocket,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

/* ------------------------------------------------------------------ */
/* Copy                                                                */
/* ------------------------------------------------------------------ */
const content = {
  en: {
    title: "Everything your product needs, from first sketch to production",
    subtitle:
      "Six disciplines under one roof, so ideas move from design to a live, reliable product without hand-offs getting lost.",
    services: [
      {
        title: "Custom Software Development",
        desc: "Tailor-made web and mobile applications engineered to solve complex business challenges and drive operational efficiency.",
      },
      {
        title: "Dedicated Developer Teams",
        desc: "Scale your engineering capacity instantly with vetted software developers who integrate seamlessly with your in-house team.",
      },
      {
        title: "Cloud & DevOps Solutions",
        desc: "Robust cloud architecture, automated CI/CD pipelines and secure infrastructure for high-availability systems.",
      },
      {
        title: "UI/UX & Product Design",
        desc: "User-centric interfaces and engaging digital experiences that elevate your brand and keep users coming back.",
      },
      {
        title: "AI & Automation",
        desc: "Smart AI models, machine learning and workflow automation that future-proof your digital ecosystem.",
      },
      {
        title: "Quality Assurance & Testing",
        desc: "Rigorous automated and manual testing so your software ships bug-free, fast and secure.",
      },
    ],
    labels: {
      team: ["Developers", "QA", "Designer", "PM"],
      pipeline: ["Build", "Test", "Deploy"],
      button: "Button",
      qa: ["Login flow", "Payments", "Mobile layout", "Security scan"],
      passed: "Passed",
    },
    cta: {
      title: "Not sure where to start?",
      text: "Tell us about your idea. We will suggest the right team, scope and timeline.",
      button: "Talk to our team",
    },
  },
  bn: {
    title: "প্রথম স্কেচ থেকে প্রোডাকশন, আপনার প্রোডাক্টের সবকিছু এক জায়গায়",
    subtitle:
      "ছয়টি দক্ষতা এক ছাদের নিচে, তাই ডিজাইন থেকে লাইভ প্রোডাক্ট পর্যন্ত পথে কোনো কাজ হারিয়ে যায় না।",
    services: [
      {
        title: "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
        desc: "আপনার ব্যবসার নির্দিষ্ট জটিলতা দূর করতে এবং কার্যক্ষমতা বাড়াতে আধুনিক ওয়েব ও মোবাইল অ্যাপ্লিকেশন তৈরি।",
      },
      {
        title: "ডেডিকেটেড ডেভেলপার টিম",
        desc: "অভিজ্ঞ ও পরীক্ষিত ডেভেলপারদের নিয়ে আপনার রিমোট টিম তৈরি করুন, যারা আপনার ইন-হাউস টিমের সাথেই সরাসরি কাজ করবে।",
      },
      {
        title: "ক্লাউড ও ডেভঅপস সলিউশন",
        desc: "নিরাপদ ক্লাউড আর্কিটেকচার, অটোমেটেড পাইপলাইন এবং হাই-অ্যাভেইলেবিলিটি সিস্টেম ম্যানেজমেন্ট।",
      },
      {
        title: "ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন",
        desc: "গ্রাহক-কেন্দ্রিক ও আকর্ষণীয় ডিজাইন, যা আপনার ব্র্যান্ডের ভ্যালু বাড়ায় এবং ইউজারকে ধরে রাখে।",
      },
      {
        title: "এআই ও অটোমেশন",
        desc: "স্মার্ট এআই ও মেশিন লার্নিং সলিউশন যুক্ত করে আপনার প্রজেক্টকে ভবিষ্যতের উপযোগী করে তুলুন।",
      },
      {
        title: "কোয়ালিটি অ্যাসুরেন্স ও টেস্টিং",
        desc: "নিখুঁত, দ্রুতগতির ও নিরাপদ সফটওয়্যার নিশ্চিত করতে কঠোর অটোমেটেড ও ম্যানুয়াল টেস্টিং।",
      },
    ],
    labels: {
      team: ["ডেভেলপার", "কিউএ", "ডিজাইনার", "পিএম"],
      pipeline: ["বিল্ড", "টেস্ট", "ডিপ্লয়"],
      button: "বাটন",
      qa: ["লগইন ফ্লো", "পেমেন্ট", "মোবাইল লেআউট", "সিকিউরিটি স্ক্যান"],
      passed: "পাস",
    },
    cta: {
      title: "কোথা থেকে শুরু করবেন বুঝতে পারছেন না?",
      text: "আপনার ধারণাটা জানান। সঠিক টিম, স্কোপ আর সময়সীমা আমরা সাজিয়ে দেব।",
      button: "আমাদের টিমের সাথে কথা বলুন",
    },
  },
};

type Labels = typeof content.en.labels;

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */
const ink = "text-[#071427] dark:text-white";

/** Check mark that pops in once when scrolled into view. */
function Tick({ i = 0, className = "" }: { i?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 420, damping: 18 }}
      className={`flex items-center justify-center rounded-full bg-[#0F9D8F] text-white ${className}`}
    >
      <Check size={12} strokeWidth={3} />
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Mini visuals, one per service (pure CSS / SVG)                      */
/* ------------------------------------------------------------------ */
function CustomVisual() {
  return (
    <div className="absolute inset-0">
      {/* Browser */}
      <div className="absolute bottom-0 left-5 right-24 top-6 rounded-t-xl bg-white shadow-lg ring-1 ring-[#071427]/10 sm:left-8 sm:right-36">
        <div className="flex items-center gap-1.5 border-b border-[#071427]/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FF6B6B]/80" />
          <span className="h-2 w-2 rounded-full bg-[#FFB627]/90" />
          <span className="h-2 w-2 rounded-full bg-[#0F9D8F]/90" />
        </div>
        <div className="flex gap-3 p-3">
          <div className="hidden w-1/4 space-y-2 sm:block">
            {[80, 60, 70, 50].map((w, i) => (
              <span
                key={i}
                className={`block h-2 rounded-full ${i === 0 ? "bg-[#0F9D8F]" : "bg-[#071427]/12"}`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="min-w-0 flex-1 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <span className="h-9 rounded-lg bg-[#0F9D8F]/12" />
              <span className="h-9 rounded-lg bg-[#FFB627]/20" />
              <span className="h-9 rounded-lg bg-[#1BB6D4]/15" />
            </div>
            <div className="flex h-14 items-end gap-1.5">
              {[35, 55, 40, 70, 60, 90, 75].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#0F9D8F] to-[#1BB6D4]"
                  style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 right-5 h-40 w-24 rounded-t-3xl border-4 border-b-0 border-[#0B1F3A] bg-white shadow-xl dark:border-white/70 sm:right-8 sm:w-28">
        <span className="mx-auto mt-2 block h-1 w-8 rounded-full bg-[#071427]/20" />
        <div className="space-y-2 p-3">
          <span className="block h-10 rounded-lg bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4]" />
          <span className="block h-2 w-4/5 rounded-full bg-[#071427]/12" />
          <span className="block h-2 w-3/5 rounded-full bg-[#071427]/12" />
          <span className="block h-6 rounded-md bg-[#FFB627]" />
        </div>
      </div>
    </div>
  );
}

const avatarStyles = [
  "from-[#071427] to-[#0B2447]",
  "from-[#0F9D8F] to-[#1BB6D4]",
  "from-[#FFB627] to-[#FF8A4C]",
  "from-[#1BB6D4] to-[#0E8CA6]",
];

function TeamVisual({ l }: { l: Labels }) {
  const initials = ["A", "R", "S", "M"];
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
      <div className="flex -space-x-3">
        {initials.map((c, i) => (
          <span
            key={c}
            className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${avatarStyles[i]} text-lg font-bold text-white ring-4 ring-[#EEF4F7] dark:ring-[#071427]`}
          >
            {c}
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-[#22C55E] ring-2 ring-[#EEF4F7] dark:ring-[#071427]" />
          </span>
        ))}
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-[#071427]/30 bg-[#EEF4F7] text-[#071427]/60 ring-4 ring-[#EEF4F7] dark:border-white/30 dark:bg-[#071427] dark:text-white/60 dark:ring-[#071427]">
          <Plus size={20} />
        </span>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 px-4">
        {l.team.map((r) => (
          <li
            key={r}
            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#071427]/75 shadow-sm ring-1 ring-[#071427]/[0.07] dark:bg-[#0B1F3A] dark:text-white/80 dark:ring-white/10"
          >
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CloudVisual({ l }: { l: Labels }) {
  const icons = [GitBranch, FlaskConical, Rocket];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6">
      <ol className="relative flex w-full max-w-md items-start justify-between">
        <span
          aria-hidden
          className="absolute left-[16.67%] right-[16.67%] top-6 h-0.5 bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4]"
        />
        {l.pipeline.map((label, i) => {
          const Icon = icons[i];
          return (
            <li
              key={label}
              className="relative z-10 flex w-1/3 flex-col items-center gap-2"
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0F9D8F] shadow-md ring-1 ring-[#071427]/10 dark:bg-[#0B1F3A] dark:text-[#1BB6D4] dark:ring-white/15">
                <Icon size={22} />
                <Tick i={i} className="absolute -right-1.5 -top-1.5 h-5 w-5" />
              </span>
              <span className={`text-xs font-semibold ${ink}`}>{label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function DesignVisual({ l }: { l: Labels }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-5 px-6">
      <div className="flex flex-col gap-2" aria-hidden>
        {["#071427", "#0F9D8F", "#1BB6D4", "#FFB627"].map((c) => (
          <span
            key={c}
            className="h-8 w-8 rounded-lg ring-1 ring-black/5 dark:ring-white/20"
            style={{ background: c }}
          />
        ))}
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-[#071427]/10 dark:bg-[#0B1F3A] dark:ring-white/10">
        <p className={`text-5xl font-bold leading-none ${ink}`}>Aa</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-[#FFB627] px-3 py-1 text-xs font-bold text-[#071427]">
            {l.button}
          </span>
          <span className="h-1.5 w-10 rounded-full bg-[#071427]/15 dark:bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function AIVisual() {
  const xs = [50, 130, 210];
  const layers = [
    [45, 95, 145],
    [30, 70, 120, 160],
    [70, 120],
  ];
  const lines: [number, number, number, number][] = [];
  for (let k = 0; k < 2; k++)
    layers[k].forEach((y1) =>
      layers[k + 1].forEach((y2) => lines.push([xs[k], y1, xs[k + 1], y2]))
    );
  const hot = [
    [50, 95],
    [130, 70],
    [210, 120],
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-3">
      <svg viewBox="0 0 260 190" className="h-full max-w-full" aria-hidden>
        {lines.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#0F9D8F"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        ))}
        <polyline
          points={hot.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke="#FFB627"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {layers.map((ys, k) =>
          ys.map((y) => {
            const isHot = hot.some(([hx, hy]) => hx === xs[k] && hy === y);
            return (
              <circle
                key={`${k}-${y}`}
                cx={xs[k]}
                cy={y}
                r={isHot ? 8 : 6.5}
                fill={isHot ? "#FFB627" : "#FFFFFF"}
                stroke={isHot ? "#FFB627" : "#0F9D8F"}
                strokeWidth="2"
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

function QAVisual({ l }: { l: Labels }) {
  return (
    <ul className="absolute inset-x-5 top-1/2 -translate-y-1/2 space-y-2 sm:inset-x-8">
      {l.qa.map((label, i) => (
        <li
          key={label}
          className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-[#071427]/[0.06] dark:bg-[#0B1F3A] dark:ring-white/10"
        >
          <Tick i={i} className="h-5 w-5 shrink-0" />
          <span className={`min-w-0 flex-1 truncate text-sm font-medium ${ink}`}>
            {label}
          </span>
          <span className="rounded-full bg-[#0F9D8F]/10 px-2 py-0.5 text-xs font-semibold text-[#0F9D8F] dark:text-[#1BB6D4]">
            {l.passed}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Tile                                                                */
/* ------------------------------------------------------------------ */
function Tile({
  icon: Icon,
  title,
  desc,
  isBn,
  className = "",
  children,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  isBn: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`flex flex-col rounded-3xl border border-[#071427]/10 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#071427]/10 dark:border-white/10 dark:bg-[#0B1F3A] dark:hover:shadow-black/40 ${className}`}
    >
      {/* Visual */}
      <div
        className="relative h-52 overflow-hidden rounded-2xl bg-[#EEF4F7] ring-1 ring-[#071427]/[0.05] dark:bg-[#071427] dark:ring-white/5"
      >
        <div
          aria-hidden
          className="absolute inset-0 text-[#071427]/[0.12] dark:text-white/[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {children}
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5">
        <h3
          className={`flex items-start gap-3 text-xl font-bold ${ink} ${
            isBn ? "leading-snug" : "leading-tight"
          }`}
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4]">
            <Icon size={18} />
          </span>
          <span>{title}</span>
        </h3>
        <p
          className={`mt-3 text-[0.95rem] text-[#071427]/70 dark:text-white/70 ${
            isBn ? "leading-[1.85]" : "leading-relaxed"
          }`}
        >
          {desc}
        </p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function CoreServicesSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  const tiles: {
    icon: LucideIcon;
    span: string;
    visual: ReactNode;
  }[] = [
    { icon: Code, span: "md:col-span-2 lg:col-span-7", visual: <CustomVisual /> },
    { icon: Users, span: "lg:col-span-5", visual: <TeamVisual l={t.labels} /> },
    { icon: Cloud, span: "lg:col-span-4", visual: <CloudVisual l={t.labels} /> },
    { icon: Palette, span: "lg:col-span-4", visual: <DesignVisual l={t.labels} /> },
    { icon: Cpu, span: "lg:col-span-4", visual: <AIVisual /> },
    { icon: ShieldCheck, span: "lg:col-span-7", visual: <QAVisual l={t.labels} /> },
  ];

  return (
    <section
      id="all-services"
      className="relative scroll-mt-20 overflow-hidden bg-[#EEF4F7] py-24 transition-colors duration-300 dark:bg-[#06101E] lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 35% at 50% 0%, rgba(27,182,212,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <h2
            className={`font-semibold text-[#071427] dark:text-white ${
              isBn
                ? "text-3xl leading-[1.45] sm:text-4xl lg:text-[2.6rem]"
                : "text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`mx-auto mt-5 max-w-2xl text-base text-[#071427]/70 dark:text-white/70 sm:text-lg ${
              isBn ? "leading-[1.9]" : "leading-relaxed"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {tiles.map((tile, i) => (
            <Tile
              key={i}
              icon={tile.icon}
              title={t.services[i].title}
              desc={t.services[i].desc}
              isBn={isBn}
              className={tile.span}
            >
              {tile.visual}
            </Tile>
          ))}

          {/* Call to action tile */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] p-8 text-white shadow-lg shadow-[#0F9D8F]/20 sm:p-10 lg:col-span-5">
            <span
              aria-hidden
              className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10"
            />
            <span
              aria-hidden
              className="absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-white/10"
            />
            <div className="relative">
              <h3
                className={`text-2xl font-bold ${
                  isBn ? "leading-snug" : "leading-tight"
                }`}
              >
                {t.cta.title}
              </h3>
              <p
                className={`mt-3 max-w-sm text-base text-white/90 ${
                  isBn ? "leading-[1.85]" : "leading-relaxed"
                }`}
              >
                {t.cta.text}
              </p>
            </div>
            <Link
              href="/contact"
              className="group relative mt-8 inline-flex w-fit items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-base font-bold text-[#071427] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.cta.button}
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}