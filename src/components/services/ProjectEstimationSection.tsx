"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    title: "Know the scope, timeline, and team before you commit",
    subtitle:
      "No hidden surprises. Pick the project tier that fits your business stage, timeline, and feature complexity.",
    cols: {
      tier: "Project tier",
      timeline: "Timeline (months)",
      team: "Team",
      deliverables: "What's included",
    },
    axis: ["0", "2", "4", "6+"],
    tiers: [
      {
        id: "mvp",
        name: "MVP / Early Stage",
        idealFor: "Startups & quick product launch",
        duration: "4 - 8 Weeks",
        team: "3-4 Specialists (Dev, UI/UX, PM)",
        range: [14, 33],
        features: [
          "Core Functional Features",
          "Clean UI/UX Design System",
          "Scalable Cloud Architecture",
          "Production Deployment & Testing",
        ],
      },
      {
        id: "growth",
        name: "Mid-Scale Platform",
        idealFor: "Growing businesses & SaaS",
        duration: "2 - 4 Months",
        team: "5-7 Specialists (Full-Stack, QA, DevOps)",
        range: [33, 67],
        features: [
          "Advanced Modules & API Integrations",
          "Custom Admin & Analytics Dashboard",
          "High-Performance Security Scan",
          "Agile Two-Week Delivery Sprints",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise Ecosystem",
        idealFor: "Large scale & multi-platform systems",
        duration: "4+ Months / Ongoing",
        team: "Dedicated Autonomous Team",
        range: [67, 100],
        open: true,
        features: [
          "Multi-Tenant Cloud Infrastructure",
          "AI/ML Data Pipelines",
          "Strict Compliance & Security Audits",
          "24/7 SLA Support & Maintenance",
        ],
      },
    ],
    ctaTitle: "Need an exact timeline and budget?",
    ctaText:
      "Share your requirement brief with our technical architects and get a detailed estimate within 24 hours.",
    ctaButton: "Get free scope estimate",
  },
  bn: {
    title: "কাজ শুরুর আগেই জেনে নিন স্কোপ, সময় ও টিম",
    subtitle:
      "কোনো গোপন খরচ নেই। আপনার ব্যবসার বর্তমান পর্যায়, সময়সীমা এবং ফিচারের জটিলতা অনুযায়ী সঠিক প্রজেক্ট টায়ার বেছে নিন।",
    cols: {
      tier: "প্রজেক্ট টায়ার",
      timeline: "সময়সীমা (মাস)",
      team: "টিম",
      deliverables: "যা যা থাকছে",
    },
    axis: ["০", "২", "৪", "৬+"],
    tiers: [
      {
        id: "mvp",
        name: "এমভিপি / প্রারম্ভিক প্রজেক্ট",
        idealFor: "স্টার্টআপ ও দ্রুত প্রোডাক্ট লঞ্চের জন্য",
        duration: "৪ - ৮ সপ্তাহ",
        team: "৩-৪ জন বিশেষজ্ঞ (ডেভেলপার, ইউআই/ইউএক্স, পিএম)",
        range: [14, 33],
        features: [
          "মূল প্রয়োজনীয় ফিচারসমূহ",
          "আধুনিক ইউআই/ইউএক্স ডিজাইন",
          "স্কেলেবল ক্লাউড আর্কিটেকচার",
          "লাইভ ডিপ্লয়মেন্ট ও টেস্টিং",
        ],
      },
      {
        id: "growth",
        name: "মিড-স্কেল প্ল্যাটফর্ম",
        idealFor: "গ্রোয়িং বিজনেস ও স্যাস (SaaS) প্রজেক্ট",
        duration: "২ - ৪ মাস",
        team: "৫-৭ জন বিশেষজ্ঞ (ফুল-স্ট্যাক, কিউএ, ডেভঅপস)",
        range: [33, 67],
        features: [
          "অ্যাডভান্সড মডিউল ও এপিআই ইন্টিগ্রেশন",
          "কাস্টম এডমিন ও এনালাইটিক্স ড্যাশবোর্ড",
          "হাই-পারফরম্যান্স সিকিউরিটি টেস্ট",
          "দুই সপ্তাহের স্প্রিন্ট ডেলিভারি",
        ],
      },
      {
        id: "enterprise",
        name: "এন্টারপ্রাইজ ইকোসিস্টেম",
        idealFor: "বড় আকারের ও মাল্টি-প্ল্যাটফর্ম সিস্টেম",
        duration: "৪+ মাস / দীর্ঘমেয়াদী",
        team: "ডেডিকেটেড অটোনেমাস টিম",
        range: [67, 100],
        open: true,
        features: [
          "মাল্টি-টেন্যান্ট ক্লাউড ইনফ্রাস্ট্রাকচার",
          "এআই/এমএল ডেটা পাইপলাইন",
          "কঠোর সিকিউরিটি ও কমপ্লায়েন্স অডিট",
          "২৪/৭ সাপোর্ট ও মেইনটেন্যান্স",
        ],
      },
    ],
    ctaTitle: "সঠিক বাজেট ও সময়সীমা জানতে চান?",
    ctaText:
      "আপনার প্রজেক্টের চাহিদা আমাদের জানান, ২৪ ঘণ্টার মধ্যে আমাদের টেকনিক্যাল আর্কিটেক্টরা বিস্তারিত প্রজেক্ট এস্টিমেট বানিয়ে দেবেন।",
    ctaButton: "ফ্রি প্রজেক্ট এস্টিমেট নিন",
  },
};

const ease = [0.25, 1, 0.5, 1] as any;

// Mobile-only label shown above each value; on desktop the column header does this job
function MobileLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1 block text-xs font-medium text-[#071427]/55 dark:text-white/55 lg:hidden">
      {children}
    </span>
  );
}

export default function ProjectEstimationSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];
  const reduce = useReducedMotion();

  const headingFit = isBn ? "leading-[1.4]" : "leading-[1.15] tracking-tight";
  const bodyFit = isBn ? "leading-[1.9]" : "leading-relaxed";
  const colLabel =
    "text-sm font-semibold text-[#071427]/60 dark:text-white/60";

  return (
    <section className="relative overflow-hidden bg-[#E9F4F4] py-24 transition-colors duration-300 dark:bg-[#071427] lg:py-32">
      {/* Background: soft brand glows + faint grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-[#0F9D8F]/25 blur-3xl dark:bg-[#0F9D8F]/20" />
        <div className="absolute -bottom-40 -right-32 h-[38rem] w-[38rem] rounded-full bg-[#1BB6D4]/25 blur-3xl dark:bg-[#1BB6D4]/15" />
        <div
          className="absolute inset-0 text-[#0F9D8F]/[0.10] dark:text-white/[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-3xl lg:mb-16">
          <h2
            className={`text-balance text-3xl font-bold text-[#071427] dark:text-white sm:text-4xl xl:text-[2.75rem] ${headingFit}`}
          >
            {t.title}
          </h2>
          <p
            className={`mt-5 max-w-[56ch] text-base text-[#071427]/70 dark:text-white/70 sm:text-lg ${bodyFit}`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Comparison sheet */}
        <div className="overflow-hidden rounded-2xl border border-[#071427]/10 bg-white shadow-[0_20px_50px_-20px_rgba(7,20,39,0.25)] dark:border-white/10 dark:bg-[#071427]/80 dark:shadow-none dark:backdrop-blur-sm">
          {/* Column headers (desktop) */}
          <div className="hidden grid-cols-12 gap-8 border-b border-[#071427]/10 bg-[#EEF4F7] px-8 py-4 dark:border-white/10 dark:bg-[#0B1F3A] lg:grid">
            <span className={`col-span-3 ${colLabel}`}>{t.cols.tier}</span>
            <div className="col-span-3">
              <span className={colLabel}>{t.cols.timeline}</span>
            </div>
            <span className={`col-span-2 ${colLabel}`}>{t.cols.team}</span>
            <span className={`col-span-4 ${colLabel}`}>{t.cols.deliverables}</span>
          </div>

          {t.tiers.map((tier, idx) => (
            <article
              key={tier.id}
              className="grid gap-6 border-b border-[#071427]/10 px-6 py-8 last:border-b-0 dark:border-white/10 sm:px-8 lg:grid-cols-12 lg:gap-8"
            >
              {/* Tier name */}
              <div className="lg:col-span-3">
                <h3
                  className={`text-xl font-bold text-[#071427] dark:text-white ${
                    isBn ? "leading-[1.5]" : "leading-snug"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-1.5 text-sm text-[#071427]/65 dark:text-white/65 ${bodyFit}`}
                >
                  {tier.idealFor}
                </p>
              </div>

              {/* Timeline bar on a shared 0–6+ month scale */}
              <div className="lg:col-span-3">
                <MobileLabel>{t.cols.timeline}</MobileLabel>
                <div className="relative h-8" aria-hidden="true">
                  {/* scale ticks at 0, 2, 4, 6+ */}
                  {[0, 33.3, 66.7, 100].map((pos) => (
                    <span
                      key={pos}
                      className="absolute top-0 h-full w-px bg-[#071427]/10 dark:bg-white/10"
                      style={{ left: `${pos === 100 ? 99.6 : pos}%` }}
                    />
                  ))}
                  <motion.span
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: reduce ? 0 : idx * 0.15, ease }}
                    className="absolute top-1/2 h-3 -translate-y-1/2 origin-left rounded-full"
                    style={{
                      left: `${tier.range[0]}%`,
                      width: `${tier.range[1] - tier.range[0]}%`,
                      background: tier.open
                        ? "linear-gradient(90deg, #0F9D8F 0%, #0F9D8F 55%, rgba(15,157,143,0.15) 100%)"
                        : "#0F9D8F",
                    }}
                  />
                </div>
                {/* axis labels */}
                <div
                  aria-hidden="true"
                  className="mt-1 flex justify-between text-[11px] font-medium text-[#071427]/45 dark:text-white/45"
                >
                  {t.axis.map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </div>
                <p className="mt-2 text-base font-bold text-[#071427] dark:text-white">
                  {tier.duration}
                </p>
              </div>

              {/* Team */}
              <div className="lg:col-span-2">
                <MobileLabel>{t.cols.team}</MobileLabel>
                <p
                  className={`text-sm font-medium text-[#071427]/80 dark:text-white/80 ${bodyFit}`}
                >
                  {tier.team}
                </p>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-4">
                <MobileLabel>{t.cols.deliverables}</MobileLabel>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-[#0F9D8F] dark:text-[#1BB6D4]"
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm text-[#071427]/85 dark:text-white/85 ${
                          isBn ? "leading-[1.7]" : "leading-snug"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#071427] p-8 text-white dark:bg-[#0B1F3A] sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h3 className={`text-2xl font-bold ${isBn ? "leading-[1.5]" : "leading-tight"}`}>
              {t.ctaTitle}
            </h3>
            <p className={`mt-2 text-base text-white/75 ${bodyFit}`}>{t.ctaText}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0F9D8F] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0c8a7d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071427] dark:bg-[#1BB6D4] dark:text-[#071427] dark:hover:bg-[#3cc4df]"
          >
            <span>{t.ctaButton}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}