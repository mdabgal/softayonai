"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Users,
  Award,
  Headphones,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

type TrustItem = {
  icon: typeof ShieldCheck;
  tint: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  stats: string;
};

const trustFeatures: TrustItem[] = [
  {
    icon: ShieldCheck,
    tint: "#0F9D8F",
    titleBn: "১০০% সিকিউর কোডিং",
    titleEn: "100% Secure Coding",
    descBn: "আমরা লেটেস্ট সিকিউরিটি স্ট্যান্ডার্ড মেনে বাগ-ফ্রি এবং হ্যাকিং-প্রুফ সফটওয়্যার ও ওয়েবসাইট তৈরি করি।",
    descEn: "We develop bug-free and hacking-proof software and websites adhering to the latest security standards.",
    stats: "Secure",
  },
  {
    icon: Clock,
    tint: "#1BB6D4",
    titleBn: "নির্ধারিত সময়ে ডেলিভারি",
    titleEn: "On-Time Delivery",
    descBn: "আপনার প্রজেক্টের ডেডলাইন আমাদের কাছে সর্বাগ্রে গুরুত্বপূর্ণ। সময়মতো প্রজেক্ট হ্যান্ডওভার নিশ্চিত করি।",
    descEn: "Project deadlines are our utmost priority. We ensure timely handover of every project.",
    stats: "100%",
  },
  {
    icon: Headphones,
    tint: "#FFB627",
    titleBn: "২৪/৭ ডেডিকেটেড সাপোর্ট",
    titleEn: "24/7 Dedicated Support",
    descBn: "প্রজেক্ট ডেলিভারির পরেও যেকোনো টেকনিক্যাল সমস্যায় আমাদের এক্সপার্ট টিম সবসময় আপনার পাশে আছে।",
    descEn: "Our expert team is always by your side for any technical issues even after project delivery.",
    stats: "24/7",
  },
  {
    icon: Users,
    tint: "#7C3AED",
    titleBn: "সন্তুষ্ট ক্লায়েন্ট ও পার্টনার",
    titleEn: "Happy Clients & Partners",
    descBn: "দেশ ও বিদেশের শত শত ব্যবসা আমাদের ওপর আস্থা রেখে তাদের ডিজিটাল সলিউশন সফলভাবে পরিচালনা করছে।",
    descEn: "Hundreds of businesses locally and globally trust us to successfully run their digital solutions.",
    stats: "500+",
  },
  {
    icon: Award,
    tint: "#EC4899",
    titleBn: "প্রিমিয়াম কোয়ালিটি ও স্ট্যান্ডার্ড",
    titleEn: "Premium Quality Standards",
    descBn: "কোয়ালিটির সাথে আপস না করে আন্তর্জাতিক মানের ডিজাইন এবং ডেভেলপমেন্ট সার্ভিস প্রদান করি।",
    descEn: "We deliver international standard design and development services without compromising quality.",
    stats: "Top Tier",
  },
  {
    icon: Zap,
    tint: "#10B981",
    titleBn: "দ্রুত ও স্কেলেবল সলিউশন",
    titleEn: "Fast & Scalable Solutions",
    descBn: "ব্যবসার গ্রোথ বাড়ার সাথে সাথে আপনার সিস্টেমও যেন সহজে বড় করা যায়, সেই স্কেলেবিলিটি নিশ্চিত করি।",
    descEn: "We ensure full scalability so your system grows smoothly as your business expands.",
    stats: "Fast",
  },
];

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [active, setActive] = useState(0);

  const current = trustFeatures[active];
  const CurrentIcon = current.icon;

  return (
    <section className="relative overflow-hidden bg-white py-28 transition-colors duration-300 dark:bg-[#0B1F3A]/90">
      {/* Section background glows */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[450px] w-[450px] rounded-full bg-[#0F9D8F]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] shadow-sm dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
            <ShieldCheck size={14} />
            {isBn ? "কেন আমাদের বেছে নেবেন" : "Why Choose Us"}
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.3] tracking-normal text-[#0B1F3A] dark:text-white sm:text-4xl lg:text-5xl">
            {isBn
              ? "আমাদের ওপর ক্লায়েন্টদের অটুট বিশ্বস্ততার কারণ"
              : "Why Clients Trust Us Unwaveringly"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75 sm:text-lg">
            {isBn
              ? "ব্যবসার নিরাপত্তা, দ্রুত ডেলিভারি এবং সর্বোচ্চ গ্রাহক সন্তুষ্টি অর্জনে আমরাই সেরা।"
              : "We stand out in business security, prompt delivery, and achieving maximum customer satisfaction."}
          </p>
        </div>

        {/* Split layout: selector list + spotlight panel */}
        <div className="mt-20 grid items-stretch gap-6 lg:grid-cols-12 lg:gap-10">
          {/* ===== Right on desktop / first on mobile: Spotlight panel ===== */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-gradient-to-br from-[#0B1F3A] via-[#0D2747] to-[#0F2A4A] p-8 shadow-[0_30px_80px_-20px_rgba(11,31,58,0.45)] dark:border-white/10 sm:p-12 lg:sticky lg:top-28">
              {/* Dynamic tint glow */}
              <motion.div
                key={`glow-${active}`}
                aria-hidden
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full blur-[100px]"
                style={{ backgroundColor: `${current.tint}55` }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#1BB6D4]/15 blur-[90px]"
              />

              {/* Concentric rings */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border border-white/5"
              />

              {/* Dot grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  maskImage:
                    "linear-gradient(to bottom right, transparent 30%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom right, transparent 30%, black 100%)",
                }}
              />

              {/* Panel content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 flex h-full min-h-[340px] flex-col justify-between gap-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-3xl border backdrop-blur-sm"
                      style={{
                        borderColor: `${current.tint}66`,
                        backgroundColor: `${current.tint}22`,
                        color: current.tint,
                      }}
                    >
                      <CurrentIcon size={40} />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div
                      className="text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl"
                      style={{ color: current.tint }}
                    >
                      {current.stats}
                    </div>
                    <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                      {isBn ? current.titleBn : current.titleEn}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                      {isBn ? current.descBn : current.descEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-white/70">
                    <ShieldCheck size={18} style={{ color: current.tint }} />
                    <span>{isBn ? "ভেরিফাইড স্ট্যান্ডার্ড" : "Verified Standard"}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ===== Left on desktop / second on mobile: Selector list ===== */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="order-2 flex flex-col gap-3 lg:order-1 lg:col-span-5"
          >
            {trustFeatures.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;
              return (
                <motion.button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#0F9D8F] sm:p-5 ${
                    isActive
                      ? "bg-white shadow-[0_12px_40px_-12px_rgba(11,31,58,0.25)] dark:bg-white/10"
                      : "border-transparent bg-[#F6F9FA] hover:bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                  }`}
                  style={{
                    borderColor: isActive ? `${item.tint}66` : undefined,
                  }}
                >
                  {/* Active side bar */}
                  <span
                    aria-hidden
                    className="absolute inset-y-3 left-0 w-1 rounded-r-full transition-all duration-300"
                    style={{
                      backgroundColor: item.tint,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scaleY(1)" : "scaleY(0.3)",
                    }}
                  />

                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${item.tint}40`,
                      backgroundColor: `${item.tint}15`,
                      color: item.tint,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <span
                    className={`flex-1 text-base font-bold leading-snug transition-colors sm:text-lg ${
                      isActive
                        ? "text-[#0B1F3A] dark:text-white"
                        : "text-[#0B1F3A]/70 dark:text-white/70"
                    }`}
                  >
                    {isBn ? item.titleBn : item.titleEn}
                  </span>

                  <ChevronRight
                    size={20}
                    className={`shrink-0 transition-all duration-300 ${
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                    style={{ color: item.tint }}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}