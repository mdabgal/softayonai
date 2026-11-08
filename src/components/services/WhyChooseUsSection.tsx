"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, Lock, MessageSquare, Award, Clock } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    title: "Software built to Nordic standards, delivered on your timeline",
    subtitle:
      "We pair Scandinavian quality standards with agile execution, so your business ships faster and keeps full control of what it builds.",
    stat: { value: "7", unit: "days" },
    milestones: ["Plan", "Build", "Test", "Launch"],
    features: {
      quality: {
        title: "Nordic Quality Standards",
        desc: "Strict quality assurance, clean code architecture, and high-performance design standards across every deliverable.",
      },
      onboarding: {
        title: "Fast Onboarding",
        desc: "Skip long hiring cycles. Get pre-vetted senior software engineers integrated into your project within one week.",
      },
      ip: {
        title: "100% IP & Code Ownership",
        desc: "You own the source code, intellectual property, credentials, and documentation from day one.",
      },
      comms: {
        title: "Transparent Communication",
        desc: "Talk directly to your developers with daily standups and weekly sprint demos. No hidden management layers.",
      },
      security: {
        title: "Enterprise-Grade Security",
        desc: "Data privacy, strict NDA compliance, and adherence to global cybersecurity benchmarks.",
      },
      delivery: {
        title: "On-Time Delivery Guarantee",
        desc: "Milestone-driven project management that launches your product on schedule, without scope creep.",
      },
    },
  },
  bn: {
    title: "নর্ডিক মানের সফটওয়্যার, আপনার সময়সূচি মেনে ডেলিভারি",
    subtitle:
      "স্ক্যান্ডিনেভিয়ান কোয়ালিটি স্ট্যান্ডার্ড আর দ্রুতগতির এক্সিকিউশনে আমরা এমন সফটওয়্যার বানাই, যা আপনার ব্যবসাকে এগিয়ে রাখে।",
    stat: { value: "৭", unit: "দিন" },
    milestones: ["পরিকল্পনা", "ডেভেলপ", "টেস্ট", "লঞ্চ"],
    features: {
      quality: {
        title: "আন্তর্জাতিক মানের কোয়ালিটি",
        desc: "কঠোর কোয়ালিটি টেস্ট, পরিষ্কার কোড আর্কিটেকচার এবং হাই-পারফরম্যান্স ডিজাইন স্ট্যান্ডার্ড।",
      },
      onboarding: {
        title: "দ্রুত অনবোর্ডিং",
        desc: "দীর্ঘ নিয়োগ প্রক্রিয়া ছাড়াই মাত্র এক সপ্তাহের মধ্যে প্রজেক্টে সিনিয়র ডেভেলপার যুক্ত করুন।",
      },
      ip: {
        title: "১০০% কোড ও আইপির মালিকানা",
        desc: "প্রথম দিন থেকেই সোর্স কোড, বুদ্ধিবৃত্তিক সম্পদ (IP) ও সব ক্রেডেনশিয়ালের পূর্ণ মালিকানা আপনার।",
      },
      comms: {
        title: "স্বচ্ছ কমিউনিকেশন",
        desc: "সরাসরি কোডিং টিমের সাথে ডেইলি আপডেট ও স্প্রিন্ট ডেমো, কোনো তৃতীয় পক্ষের ঝামেলা ছাড়াই।",
      },
      security: {
        title: "উচ্চমানের সিকিউরিটি",
        desc: "ডেটা প্রাইভেসি, কঠোর এনডিএ (NDA) চুক্তি এবং গ্লোবাল সাইবার সিকিউরিটি গাইডলাইন মেনে চলা।",
      },
      delivery: {
        title: "যথাসময়ে প্রজেক্ট ডেলিভারি",
        desc: "সুনির্দিষ্ট মাইলফলক অনুযায়ী কাজ শেষ করে সঠিক সময়ে আপনার প্রোডাক্ট লঞ্চের নিশ্চয়তা।",
      },
    },
  },
};

const ease = [0.25, 1, 0.5, 1] as any;

// Base surface shared by the quiet tiles
const tile =
  "relative flex flex-col rounded-[28px] bg-[#EEF4F7] p-7 dark:bg-[#0B1F3A] sm:p-8";
const iconCls = "h-7 w-7 text-[#0F9D8F] dark:text-[#1BB6D4]";
const titleCls =
  "text-xl font-bold leading-snug text-[#071427] dark:text-white";
const descCls =
  "mt-2 max-w-[46ch] text-[15px] leading-relaxed text-[#071427]/70 dark:text-white/70";

export default function WhyChooseUsSection() {
  const { language } = useLanguage();
  const t = content[language === "bn" ? "bn" : "en"];
  const f = t.features;
  const reduce = useReducedMotion();

  // One orchestrated reveal for the whole grid
  const grid = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-[#071427] lg:py-32">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Header: left-aligned headline, supporting copy on the right */}
        <div className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h2 className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-[#071427] dark:text-white sm:text-4xl xl:text-[3.25rem] lg:col-span-7">
            {t.title}
          </h2>
          <p className="text-base leading-relaxed text-[#071427]/70 dark:text-white/70 sm:text-lg lg:col-span-5 lg:max-w-[48ch] lg:justify-self-end">
            {t.subtitle}
          </p>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5"
        >
          {/* Quality — wide */}
          <motion.article
            variants={item}
            className={`${tile} sm:col-span-2 lg:col-span-4 sm:flex-row sm:items-center sm:gap-8`}
          >
            <Award className={`${iconCls} mb-5 shrink-0 sm:mb-0 sm:h-12 sm:w-12`} strokeWidth={1.5} />
            <div>
              <h3 className={titleCls}>{f.quality.title}</h3>
              <p className={descCls}>{f.quality.desc}</p>
            </div>
          </motion.article>

          {/* Onboarding — the one bold moment */}
          <motion.article
            variants={item}
            className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#071427] p-7 text-white dark:bg-[#1BB6D4] dark:text-[#071427] sm:col-span-2 sm:p-8 lg:col-span-2 lg:row-span-2"
          >
            <Zap className="h-7 w-7 text-[#1BB6D4] dark:text-[#071427]" strokeWidth={2} />
            <div className="my-8 flex items-end gap-3 lg:my-0">
              <span
                aria-hidden="true"
                className="text-[9rem] font-black leading-[0.8] tracking-tighter text-[#0F9D8F] dark:text-[#071427] sm:text-[11rem]"
              >
                {t.stat.value}
              </span>
              <span className="pb-2 text-2xl font-bold">{t.stat.unit}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold leading-snug">{f.onboarding.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75 dark:text-[#071427]/80">
                {f.onboarding.desc}
              </p>
            </div>
          </motion.article>

          {/* IP ownership */}
          <motion.article variants={item} className={`${tile} lg:col-span-2`}>
            <Lock className={`${iconCls} mb-5`} strokeWidth={1.75} />
            <h3 className={titleCls}>{f.ip.title}</h3>
            <p className={descCls}>{f.ip.desc}</p>
          </motion.article>

          {/* Communication */}
          <motion.article variants={item} className={`${tile} lg:col-span-2`}>
            <MessageSquare className={`${iconCls} mb-5`} strokeWidth={1.75} />
            <h3 className={titleCls}>{f.comms.title}</h3>
            <p className={descCls}>{f.comms.desc}</p>
          </motion.article>

          {/* Security */}
          <motion.article variants={item} className={`${tile} sm:col-span-1 lg:col-span-3`}>
            <ShieldCheck className={`${iconCls} mb-5`} strokeWidth={1.75} />
            <h3 className={titleCls}>{f.security.title}</h3>
            <p className={descCls}>{f.security.desc}</p>
          </motion.article>

          {/* Delivery — with a milestone track, since the content is milestones */}
          <motion.article variants={item} className={`${tile} sm:col-span-1 lg:col-span-3`}>
            <Clock className={`${iconCls} mb-5`} strokeWidth={1.75} />
            <h3 className={titleCls}>{f.delivery.title}</h3>
            <p className={descCls}>{f.delivery.desc}</p>

            <ol className="mt-7 flex items-start" aria-hidden="true">
              {t.milestones.map((label, i) => {
                const last = i === t.milestones.length - 1;
                return (
                  <li key={label} className="relative flex-1">
                    <div className="flex items-center">
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full ${
                          last
                            ? "bg-[#0F9D8F] ring-4 ring-[#0F9D8F]/20 dark:bg-[#1BB6D4] dark:ring-[#1BB6D4]/20"
                            : "bg-[#071427]/25 dark:bg-white/30"
                        }`}
                      />
                      {!last && (
                        <span className="h-px flex-1 bg-[#071427]/15 dark:bg-white/15" />
                      )}
                    </div>
                    <span className="mt-2 block text-xs font-medium text-[#071427]/60 dark:text-white/60">
                      {label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}