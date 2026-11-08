"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Globe,
  Landmark,
  Layers,
  Leaf,
  ShieldCheck,
  Sparkles,
  Square,
  TrainFront,
  Triangle,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

type Layout = "shop" | "article" | "profile" | "corporate" | "listing" | "service";

type IndustryItem = {
  nameBn: string;
  nameEn: string;
  slug: string;
  layout: Layout;
};

const industries: IndustryItem[] = [
  { nameBn: "এনজিও ওয়েবসাইট", nameEn: "NGO Website", slug: "ngo", layout: "article" },
  { nameBn: "বাইং হাউজ", nameEn: "Buying House", slug: "buying-house", layout: "listing" },
  { nameBn: "রিয়েল এস্টেট", nameEn: "Real Estate", slug: "real-estate", layout: "listing" },
  { nameBn: "পোর্টফোলিও ওয়েবসাইট", nameEn: "Portfolio Website", slug: "portfolio", layout: "profile" },
  { nameBn: "ইকমার্স ওয়েবসাইট", nameEn: "eCommerce Website", slug: "shop", layout: "shop" },
  { nameBn: "কর্পোরেট ওয়েবসাইট", nameEn: "Corporate Website", slug: "corporate", layout: "corporate" },
  { nameBn: "ট্যুর অ্যান্ড ট্রাভেল ওয়েবসাইট", nameEn: "Tour & Travel Website", slug: "tours", layout: "listing" },
  { nameBn: "হাসপাতাল ও ডায়াগনস্টিক", nameEn: "Hospital & Diagnostic Website", slug: "hospital", layout: "service" },
  { nameBn: "ফ্যাশন ও বিউটি ওয়েবসাইট", nameEn: "Fashion & Beauty Website", slug: "fashion", layout: "shop" },
  { nameBn: "ল ফার্ম ওয়েবসাইট", nameEn: "Law Firm Website", slug: "law-firm", layout: "service" },
  { nameBn: "বিটুবি ও বিটুসি ওয়েবসাইট", nameEn: "B2B & B2C Website", slug: "b2b-b2c", layout: "shop" },
  { nameBn: "নিউজপেপার ওয়েবসাইট", nameEn: "Newspaper Website", slug: "news", layout: "article" },
  { nameBn: "মাল্টিভেন্ডর ওয়েব পোর্টাল", nameEn: "Multivendor Web Portal", slug: "marketplace", layout: "shop" },
  { nameBn: "পাবলিকেশন ওয়েবসাইট", nameEn: "Publication Website", slug: "publication", layout: "article" },
  { nameBn: "কনসালটেন্সি ফার্ম ওয়েবসাইট", nameEn: "Consultancy Firm Website", slug: "consultancy", layout: "service" },
  { nameBn: "স্মল বিজনেস ওয়েবসাইট", nameEn: "Small Business Website", slug: "small-business", layout: "service" },
  { nameBn: "ট্রেডিং কর্পোরেশন ওয়েবসাইট", nameEn: "Trading Corporation Website", slug: "trading", layout: "listing" },
  { nameBn: "অ্যাসোসিয়েশন ওয়েবসাইট", nameEn: "Association Website", slug: "association", layout: "article" },
  { nameBn: "গ্রুপ অফ কোম্পানিজ ওয়েবসাইট", nameEn: "Group of Companies Website", slug: "group", layout: "corporate" },
  { nameBn: "মিডিয়াম এন্টারপ্রাইজ ওয়েবসাইট", nameEn: "Medium Enterprise Website", slug: "enterprise", layout: "corporate" },
];

type Tone = "teal" | "cyan" | "navy";
type Client = { name: string; logo: string; icon: LucideIcon; tone: Tone };

const clients: Client[] = [
  { name: "Square", logo: "/logos/square.png", icon: Square, tone: "navy" },
  { name: "Gulshan Club", logo: "/logos/gulshan-club.png", icon: Trophy, tone: "teal" },
  { name: "Brand Z", logo: "/logos/brand-z.png", icon: Zap, tone: "cyan" },
  { name: "Ariant", logo: "/logos/ariant.png", icon: Triangle, tone: "teal" },
  { name: "NPL", logo: "/logos/npl.png", icon: Layers, tone: "navy" },
  { name: "CBA", logo: "/logos/cba.png", icon: Landmark, tone: "cyan" },
  { name: "Arfa", logo: "/logos/arfa.png", icon: Sparkles, tone: "teal" },
  { name: "Logix", logo: "/logos/logix.png", icon: Boxes, tone: "navy" },
  { name: "Trust", logo: "/logos/trust.png", icon: ShieldCheck, tone: "cyan" },
  { name: "Metro", logo: "/logos/metro.png", icon: TrainFront, tone: "teal" },
  { name: "Global", logo: "/logos/global.png", icon: Globe, tone: "navy" },
  { name: "Pran", logo: "/logos/pran.png", icon: Leaf, tone: "cyan" },
];

const toneClass: Record<Tone, string> = {
  teal: "bg-[#0F9D8F] text-white",
  cyan: "bg-[#1BB6D4] text-white",
  navy: "bg-[#0B1F3A] text-white",
};

/* -------------------------------------------------------------------------- */
/*  WIREFRAME PRIMITIVES                                                      */
/* -------------------------------------------------------------------------- */

const ink = "bg-[#0B1F3A]/15 dark:bg-white/20";
const soft = "bg-[#0B1F3A]/[0.06] dark:bg-white/[0.08]";
const tealColor = "bg-[#0F9D8F]";

function Line({ w, strong = false }: { w: string; strong?: boolean }) {
  return (
    <div
      className={`rounded-full ${strong ? "h-2.5 bg-[#0B1F3A]/55 dark:bg-white/70" : `h-1.5 ${ink}`}`}
      style={{ width: w }}
    />
  );
}

function Nav() {
  return (
    <div className="flex items-center justify-between">
      <div className={`h-3 w-10 rounded ${tealColor}`} />
      <div className="flex gap-2">
        <Line w="18px" />
        <Line w="18px" />
        <Line w="18px" />
      </div>
    </div>
  );
}

const imageSrc = (slug: string, n: number) => `https://picsum.photos/seed/${slug}-${n}/900/650`;

function Img({ slug, n, className = "" }: { slug: string; n: number; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`${soft} ${className}`} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc(slug, n)}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

function Wireframe({ layout, slug }: { layout: Layout; slug: string }) {
  switch (layout) {
    case "shop":
      return (
        <div className="flex h-full flex-col gap-4">
          <Nav />
          <div className="relative min-h-[13rem] flex-1 overflow-hidden rounded-xl">
            <Img slug={slug} n={0} className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/80 to-transparent" />
            <div className="absolute bottom-4 left-5 space-y-2">
              <div className="h-3 w-36 rounded-full bg-white/90" />
              <div className="h-2 w-24 rounded-full bg-white/50" />
              <div className={`mt-2 h-5 w-20 rounded-full ${tealColor}`} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Img slug={slug} n={i} className="aspect-[4/3] w-full rounded-lg" />
                <Line w="75%" />
                <div className="h-2 w-10 rounded-full bg-[#0F9D8F]/70" />
              </div>
            ))}
          </div>
        </div>
      );

    case "article":
      return (
        <div className="flex h-full flex-col gap-4">
          <div className="border-b border-[#0B1F3A]/10 pb-3 dark:border-white/10">
            <div className="mx-auto h-3.5 w-32 rounded bg-[#0B1F3A]/50 dark:bg-white/60" />
          </div>
          <div className="grid flex-1 grid-cols-5 gap-4">
            <div className="col-span-3 flex flex-col gap-2.5">
              <Img slug={slug} n={0} className="min-h-[11rem] w-full flex-1 rounded-lg" />
              <Line w="95%" strong />
              <Line w="70%" strong />
              <Line w="85%" />
            </div>
            <div className="col-span-2 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-2.5">
                  <Img slug={slug} n={i} className="h-12 w-14 shrink-0 rounded-md" />
                  <div className="flex-1 space-y-1.5 pt-1">
                    <Line w="100%" />
                    <Line w="70%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[4, 5, 6].map((i) => (
              <div key={i} className="space-y-1.5">
                <Img slug={slug} n={i} className="h-16 w-full rounded-md" />
                <Line w="85%" />
              </div>
            ))}
          </div>
        </div>
      );

    case "profile":
      return (
        <div className="flex h-full flex-col gap-4">
          <Nav />
          <div className="flex items-center gap-4">
            <Img slug={slug} n={0} className="h-16 w-16 shrink-0 rounded-full" />
            <div className="space-y-2">
              <Line w="130px" strong />
              <Line w="90px" />
            </div>
          </div>
          <div className="grid min-h-[16rem] flex-1 grid-cols-3 grid-rows-2 gap-3">
            <Img slug={slug} n={1} className="col-span-2 h-full w-full rounded-lg" />
            <Img slug={slug} n={2} className="h-full w-full rounded-lg" />
            <Img slug={slug} n={3} className="h-full w-full rounded-lg" />
            <Img slug={slug} n={4} className="col-span-2 h-full w-full rounded-lg" />
          </div>
        </div>
      );

    case "listing":
      return (
        <div className="flex h-full flex-col gap-4">
          <Nav />
          <div className={`flex h-9 items-center justify-between rounded-full px-4 ${soft}`}>
            <Line w="110px" />
            <div className={`h-5 w-14 rounded-full ${tealColor}`} />
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-1 gap-4">
              <Img slug={slug} n={i} className="h-full min-h-[5.5rem] w-36 shrink-0 rounded-lg" />
              <div className="flex-1 space-y-2.5 pt-2">
                <Line w="75%" strong />
                <Line w="55%" />
                <Line w="40%" />
                <div className="h-2 w-14 rounded-full bg-[#0F9D8F]/70" />
              </div>
            </div>
          ))}
        </div>
      );

    case "service":
      return (
        <div className="flex h-full flex-col gap-4">
          <Nav />
          <div className="relative min-h-[13rem] flex-1 overflow-hidden rounded-xl">
            <Img slug={slug} n={0} className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/85 via-[#0B1F3A]/50 to-transparent" />
            <div className="absolute left-5 top-5 space-y-2">
              <div className="h-3 w-40 rounded-full bg-white/90" />
              <div className="h-3 w-28 rounded-full bg-white/90" />
              <div className="h-2 w-32 rounded-full bg-white/50" />
              <div className={`mt-2 h-5 w-24 rounded-full ${tealColor}`} />
            </div>
            <div className="absolute bottom-4 right-4 w-32 space-y-1.5 rounded-lg bg-white/95 p-2.5 dark:bg-[#0B1F3A]/95">
              <div className={`h-3.5 rounded ${soft}`} />
              <div className={`h-3.5 rounded ${soft}`} />
              <div className={`h-3.5 rounded ${tealColor}`} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <Img slug={slug} n={i} className="h-12 w-12 shrink-0 rounded-lg" />
                <div className="flex-1 space-y-1.5">
                  <Line w="90%" strong />
                  <Line w="60%" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "corporate":
    default:
      return (
        <div className="flex h-full flex-col gap-4">
          <Nav />
          <div className="relative min-h-[13rem] flex-1 overflow-hidden rounded-xl">
            <Img slug={slug} n={0} className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-transparent" />
            <div className="absolute bottom-4 left-5 space-y-2">
              <div className="h-3 w-44 rounded-full bg-white/90" />
              <div className="h-2 w-28 rounded-full bg-white/50" />
              <div className={`mt-2 h-5 w-20 rounded-full ${tealColor}`} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Img slug={slug} n={i} className="h-16 w-full rounded-lg" />
                <Line w="80%" strong />
                <Line w="60%" />
              </div>
            ))}
          </div>
        </div>
      );
  }
}

/* -------------------------------------------------------------------------- */
/*  MAIN SECTION                                                               */
/* -------------------------------------------------------------------------- */

export default function IndustriesAndClientsSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const reduce = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setActive((i) => (i + 1) % industries.length), 2600);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const current = industries[active];

  const half = Math.ceil(clients.length / 2);
  const rowA = clients.slice(0, half);
  const rowB = clients.slice(half);

  return (
    <section className="relative overflow-hidden bg-[#F6F9FA] transition-colors duration-300 dark:bg-[#0B1F3A]">
      
      {/* ===================== 1. INDUSTRIES ===================== */}
      <div className="mx-auto max-w-[1520px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          
          <div className="lg:col-span-6">
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.3] text-[#0B1F3A] dark:text-white sm:text-4xl lg:text-5xl">
              {isBn
                ? "আপনার ইন্ডাস্ট্রির জন্য তৈরি ওয়েবসাইট"
                : "A website built for the way your industry works"}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#0B1F3A]/70 dark:text-white/70 sm:text-lg">
              {isBn
                ? "স্টার্টআপ থেকে বড় এন্টারপ্রাইজ—প্রতিটি ইন্ডাস্ট্রির নিজস্ব চাহিদা অনুযায়ী আমরা রেস্পন্সিভ ও SEO-ফ্রেন্ডলি ওয়েবসাইট তৈরি করি। তালিকা থেকে বেছে নিন, ডানে লেআউট দেখুন।"
                : "From startups to large enterprises, we build responsive, SEO-friendly sites around each industry's real needs. Pick one from the list and see the layout take shape."}
            </p>

            <ul
              className="mt-10 grid gap-x-10 sm:grid-cols-2"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {industries.map((ind, idx) => {
                const isActive = idx === active;
                return (
                  <li key={ind.slug}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => {
                        setPaused(true);
                        setActive(idx);
                      }}
                      onBlur={() => setPaused(false)}
                      onClick={() => setActive(idx)}
                      aria-pressed={isActive}
                      className={`group flex w-full items-center justify-between gap-3 border-b py-3.5 text-left text-[15px] font-semibold outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F9FA] dark:focus-visible:ring-offset-[#0B1F3A] ${
                        isActive
                          ? "border-[#0F9D8F] text-[#0F9D8F] dark:border-[#1BB6D4] dark:text-[#1BB6D4]"
                          : "border-[#0B1F3A]/10 text-[#0B1F3A]/80 hover:text-[#0B1F3A] dark:border-white/10 dark:text-white/70 dark:hover:text-white"
                      }`}
                    >
                      <span>{isBn ? ind.nameBn : ind.nameEn}</span>
                      <ArrowUpRight
                        size={16}
                        className={`shrink-0 transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="flex h-full flex-col">
              <div
                className="flex min-h-[460px] flex-1 flex-col overflow-hidden rounded-xl border border-[#0B1F3A]/10 bg-white shadow-[0_40px_80px_-30px_rgba(11,31,58,0.45)] dark:border-white/10 dark:bg-[#0F2A4A] dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                aria-live="polite"
              >
                <div className="flex items-center gap-3 border-b border-[#0B1F3A]/10 bg-[#F6F9FA] px-5 py-3.5 dark:border-white/10 dark:bg-[#0B1F3A]">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0B1F3A]/20 dark:bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0B1F3A]/20 dark:bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0B1F3A]/20 dark:bg-white/25" />
                  </div>
                  <div className="flex-1 overflow-hidden rounded-md bg-white px-3 py-1.5 text-sm text-[#0B1F3A]/60 dark:bg-[#0F2A4A] dark:text-white/60">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={current.slug}
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={reduce ? undefined : { opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="block truncate"
                      >
                        yourbrand.com/<span className="font-semibold text-[#0F9D8F] dark:text-[#1BB6D4]">{current.slug}</span>
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="relative flex-1 p-6 sm:p-7">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current.slug}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="h-full"
                    >
                      <Wireframe layout={current.layout} slug={current.slug} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <p className="mt-5 text-base font-semibold text-[#0B1F3A] dark:text-white">
                {isBn ? current.nameBn : current.nameEn}
              </p>
              <p className="text-sm text-[#0B1F3A]/60 dark:text-white/60">
                {isBn
                  ? "ইন্ডাস্ট্রি অনুযায়ী সাজানো লেআউটের নমুনা"
                  : "Sample layout, arranged for this industry"}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===================== 2. CLIENTS (LIGHT & DARK DYNAMIC BG & MATCHED NAVBAR WIDTH) ===================== */}
      <div className="bg-white py-20 dark:bg-[#0B1F3A] lg:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-3xl font-extrabold leading-[1.3] text-[#0B1F3A] dark:text-white sm:text-4xl lg:col-span-6 lg:text-5xl">
              {isBn ? "যাঁরা আমাদের ওপর ভরসা রেখেছেন" : "Trusted by teams across Bangladesh"}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#0B1F3A]/70 dark:text-white/70 sm:text-lg lg:col-span-5 lg:col-start-8">
              {isBn
                ? "বিভিন্ন ইন্ডাস্ট্রির ব্যবসা, স্টার্টআপ ও প্রতিষ্ঠানের সাথে কাজ করতে পেরে আমরা গর্বিত। গুণগত মান নিশ্চিত করাই আমাদের অঙ্গীকার।"
                : "We work with businesses, startups, and organizations in every sector, and we hold every project to the same standard of quality."}
            </p>
          </div>

          <div className="overflow-hidden">
            {reduce ? (
              <div className="flex flex-wrap justify-center gap-4">
                {clients.map((c) => (
                  <LogoTile key={c.name} {...c} />
                ))}
              </div>
            ) : (
              <div
                className="space-y-4 overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
                }}
              >
                <MarqueeRow items={rowA} from="0%" to="-50%" duration={38} />
                <MarqueeRow items={rowB} from="-50%" to="0%" duration={44} />
              </div>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  LOGO TILE WITH AUTOMATIC BEAUTIFUL FALLBACK ICON                           */
/* -------------------------------------------------------------------------- */

function LogoTile({ name, icon: Icon, tone }: Client) {
  return (
    <div className="flex h-20 w-56 shrink-0 items-center justify-center rounded-2xl bg-[#F6F9FA] px-5 shadow-sm border border-[#0B1F3A]/10 dark:bg-[#0F2A4A] dark:border-white/10 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold shadow-sm ${toneClass[tone]}`}>
          <Icon size={20} strokeWidth={2.2} />
        </span>
        <span className="truncate text-base font-extrabold tracking-tight text-[#0B1F3A] dark:text-white">
          {name}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  from,
  to,
  duration,
}: {
  items: Client[];
  from: string;
  to: string;
  duration: number;
}) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <motion.div
      className="flex w-max"
      initial={{ x: from }}
      animate={{ x: to }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {loop.map((c, i) => (
        <div key={`${c.name}-${i}`} className="mr-4">
          <LogoTile {...c} />
        </div>
      ))}
    </motion.div>
  );
}