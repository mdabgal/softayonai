"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CreditCard,
  ShoppingCart,
  Activity,
  GraduationCap,
  CloudCog,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    badge: "Domain Expertise",
    title: "Built around the rules and rhythms of your industry",
    subtitle:
      "We build robust, scalable, and secure digital solutions tailored to the unique regulatory, operational, and user needs of each sector.",
    industries: [
      {
        icon: CreditCard,
        title: "FinTech & Banking",
        desc: "Secure payment gateways, digital wallets, lending platforms, and blockchain-integrated financial apps built with enterprise-grade security.",
        tags: ["Payment gateways", "Digital wallets", "Lending platforms", "Blockchain apps"],
        highlight: "High Security & Compliance",
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce & Retail",
        desc: "High-conversion online stores, multi-vendor marketplaces, and inventory management systems built for high traffic and fast checkouts.",
        tags: ["Online stores", "Multi-vendor marketplaces", "Inventory systems", "Fast checkout"],
        highlight: "Scalable High-Traffic Architecture",
      },
      {
        icon: Activity,
        title: "HealthTech & Medical",
        desc: "HIPAA-compliant telemedicine apps, EHR/EMR systems, patient portals, and health monitoring solutions that streamline care.",
        tags: ["Telemedicine", "EHR / EMR", "Patient portals", "Health monitoring"],
        highlight: "HIPAA & Data Privacy Focused",
      },
      {
        icon: GraduationCap,
        title: "EdTech & E-Learning",
        desc: "Interactive learning management systems (LMS), virtual classrooms, course marketplaces, and gamified student engagement portals.",
        tags: ["LMS", "Virtual classrooms", "Course marketplaces", "Student engagement"],
        highlight: "Interactive User Experience",
      },
      {
        icon: CloudCog,
        title: "SaaS & Enterprise Tech",
        desc: "Multi-tenant cloud architectures, scalable subscription platforms, and data-driven workflow automation tools for modern enterprises.",
        tags: ["Multi-tenant cloud", "Subscription platforms", "Workflow automation"],
        highlight: "Cloud-Native Infrastructure",
      },
      {
        icon: Building2,
        title: "Real Estate & Logistics",
        desc: "Property listing platforms, smart CRM solutions, fleet tracking systems, and automated supply chain optimization tools.",
        tags: ["Property listings", "Smart CRM", "Fleet tracking", "Supply chain tools"],
        highlight: "Real-time Tracking & CRM",
      },
    ],
  },
  bn: {
    badge: "ডোমেইন এক্সপার্টিজ",
    title: "আপনার শিল্পের নিয়ম ও চাহিদা মাথায় রেখে তৈরি",
    subtitle:
      "প্রতিটি খাতের নির্দিষ্ট অপারেশনাল ও সিকিউরিটি প্রয়োজন মাথায় রেখে আমরা শক্তিশালী, স্কেলেবল এবং নিরাপদ ডিজিটাল সলিউশন তৈরি করি।",
    industries: [
      {
        icon: CreditCard,
        title: "ফিনটেক ও ব্যাংকিং",
        desc: "নিরাপদ পেমেন্ট গেটওয়ে, ডিজিটাল ওয়ালেট, লেন্ডিং প্ল্যাটফর্ম এবং এন্টারপ্রাইজ-গ্রেড সিকিউরিটি সহ ফিন্যান্সিয়াল অ্যাপস।",
        tags: ["পেমেন্ট গেটওয়ে", "ডিজিটাল ওয়ালেট", "লেন্ডিং প্ল্যাটফর্ম", "ব্লকচেইন অ্যাপ"],
        highlight: "সর্বোচ্চ সিকিউরিটি ও কমপ্লায়েন্স",
      },
      {
        icon: ShoppingCart,
        title: "ই-কমার্স ও রিটেল",
        desc: "অতিরিক্ত ট্রাফিক ও দ্রুত চেকআউট সামলানোর উপযোগী উচ্চ কনভার্শন রেটসম্পন্ন অনলাইন শপ এবং মাল্টি-ভেন্ডর মার্কেটপ্লেস।",
        tags: ["অনলাইন শপ", "মাল্টি-ভেন্ডর মার্কেটপ্লেস", "ইনভেন্টরি সিস্টেম", "দ্রুত চেকআউট"],
        highlight: "হাই-ট্রাফিক স্কেলেবল আর্কিটেকচার",
      },
      {
        icon: Activity,
        title: "হেলথটেক ও মেডিকেল",
        desc: "টেলিমেডিসিন অ্যাপ, ইএইচআর (EHR) সিস্টেম, পেশেন্ট পোর্টাল এবং স্বাস্থ্য পর্যবেক্ষণ সলিউশন।",
        tags: ["টেলিমেডিসিন", "ইএইচআর সিস্টেম", "পেশেন্ট পোর্টাল", "স্বাস্থ্য পর্যবেক্ষণ"],
        highlight: "HIPAA এবং ডেটা প্রাইভেসি নিশ্চিত",
      },
      {
        icon: GraduationCap,
        title: "এডটেক ও ই-লার্নিং",
        desc: "ইন্টারেক্টিভ লার্নিং ম্যানেজমেন্ট সিস্টেম (LMS), ভার্চুয়াল ক্লাসরুম এবং স্টুডেন্ট এনগেজমেন্ট পোর্টাল।",
        tags: ["এলএমএস", "ভার্চুয়াল ক্লাসরুম", "কোর্স মার্কেটপ্লেস", "স্টুডেন্ট এনগেজমেন্ট"],
        highlight: "ইন্টারেক্টিভ ইউজার এক্সপেরিয়েন্স",
      },
      {
        icon: CloudCog,
        title: "স্যাস (SaaS) ও এন্টারপ্রাইজ টেক",
        desc: "মাল্টি-টেন্যান্ট ক্লাউড আর্কিটেকচার, স্কেলেবল সাবস্ক্রিপশন প্ল্যাটফর্ম এবং অটোমেশন টুলস।",
        tags: ["মাল্টি-টেন্যান্ট ক্লাউড", "সাবস্ক্রিপশন প্ল্যাটফর্ম", "ওয়ার্কফ্লো অটোমেশন"],
        highlight: "ক্লাউড-নেটিভ ইনফ্রাস্ট্রাকচার",
      },
      {
        icon: Building2,
        title: "রিয়েল এস্টেট ও লজিস্টিকস",
        desc: "প্রপার্টি লিস্টিং প্ল্যাটফর্ম, স্মার্ট সিআরএম সলিউশন, ফ্লিট ট্র্যাকিং এবং সাপ্লাই চেইন অপ্টিমাইজেশন টুলস।",
        tags: ["প্রপার্টি লিস্টিং", "স্মার্ট সিআরএম", "ফ্লিট ট্র্যাকিং", "সাপ্লাই চেইন টুলস"],
        highlight: "রিয়েল-টাইম ট্র্যাকিং ও সিআরএম",
      },
    ],
  },
};

const ease = [0.25, 1, 0.5, 1] as const;

export default function IndustriesSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const current = t.industries[active];
  const CurrentIcon = current.icon;
  const fade = reduce ? { duration: 0 } : { duration: 0.35, ease };

  const headingFit = isBn ? "leading-[1.4]" : "leading-[1.15] tracking-tight";
  const bodyFit = isBn ? "leading-[1.9]" : "leading-relaxed";

  return (
    <section className="relative overflow-hidden bg-[#EEF4F7] py-24 transition-colors duration-300 dark:bg-[#06101E] lg:py-32">
      
      {/* Ambient background glow effects */}
      <div aria-hidden className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0F9D8F]/10 blur-[120px] pointer-events-none" />
      <div aria-hidden className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#1BB6D4]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        {/* Header - Centered */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F9D8F]/20 bg-[#0F9D8F]/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#0F9D8F] dark:border-[#1BB6D4]/30 dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4] mb-4">
            <Sparkles size={14} />
            <span>{t.badge}</span>
          </div>
          <h2
            className={`text-balance text-3xl font-extrabold text-[#071427] dark:text-white sm:text-4xl xl:text-5xl ${headingFit}`}
          >
            {t.title}
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[#071427]/70 dark:text-white/70 ${bodyFit}`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* Left: Interactive Industry Selectors */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-5">
            {t.industries.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-expanded={isActive}
                  className={`group relative flex items-center justify-between rounded-2xl p-5 text-left transition-all duration-300 outline-none border ${
                    isActive
                      ? "bg-white dark:bg-[#0B1F3A] border-[#0F9D8F] dark:border-[#1BB6D4] shadow-xl shadow-[#0F9D8F]/10 scale-[1.02]"
                      : "bg-white/50 dark:bg-[#0B1F3A]/40 border-gray-200/80 dark:border-white/10 hover:bg-white dark:hover:bg-[#0B1F3A] hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-[#0F9D8F] text-white dark:bg-[#1BB6D4] dark:text-[#071427] shadow-md"
                          : "bg-[#071427]/5 text-[#071427]/60 dark:bg-white/5 dark:text-white/60 group-hover:text-[#0F9D8F]"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span
                      className={`text-base font-bold sm:text-lg transition-colors ${
                        isActive
                          ? "text-[#071427] dark:text-white"
                          : "text-[#071427]/75 dark:text-white/75"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                      isActive
                        ? "bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4] translate-x-1"
                        : "text-gray-400 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <ArrowRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Modern Dynamic Detail Showcase Panel */}
          <div className="lg:col-span-7">
            <div
              aria-live="polite"
              className="relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl bg-[#071427] p-8 text-white dark:bg-[#0B1F3A] sm:p-12 border border-white/10 shadow-2xl"
            >
              {/* Subtle background grid pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(27,182,212,0.2) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={fade}
                  className="relative flex flex-1 flex-col justify-between z-10"
                >
                  <div>
                    {/* Top Highlight Badge */}
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#1BB6D4]/15 border border-[#1BB6D4]/30 px-3 py-1 text-xs font-bold text-[#1BB6D4] mb-8">
                      <Sparkles size={12} />
                      <span>{current.highlight}</span>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] text-white shadow-lg mb-6">
                      <CurrentIcon className="h-8 w-8" strokeWidth={1.75} />
                    </div>

                    <h3 className={`text-3xl font-extrabold sm:text-4xl ${isBn ? "leading-[1.4]" : "leading-tight"}`}>
                      {current.title}
                    </h3>
                    
                    <p className={`mt-4 text-base sm:text-lg text-white/80 ${bodyFit}`}>
                      {current.desc}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                      {isBn ? "মূল সলিউশন ও ফিচারসমূহ:" : "Core Solutions & Capabilities:"}
                    </p>
                    <ul className="flex flex-wrap gap-2.5">
                      {current.tags.map((tag) => (
                        <motion.li
                          key={tag}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-md shadow-sm"
                        >
                          {tag}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}