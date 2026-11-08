"use client";

import { Sparkles, Zap, LineChart, FileText } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    badge: "Next-Gen Tech",
    title: "Advanced capabilities engineered for industry leaders",
    items: [
      { icon: Zap, title: "AI-Powered Automation", desc: "Leverage machine learning algorithms to forecast trends and automate decision making." },
      { icon: Sparkles, title: "Smart Interactive Dashboard", desc: "A sleek, lightning-fast UI designed to give total control at a single glance." },
      { icon: LineChart, title: "Real-time Metrics Tracking", desc: "Live monitoring of KPIs, server health, and financial streams." },
      { icon: FileText, title: "Advanced PDF & Data Reporting", desc: "Generate comprehensive audit logs and automated executive summaries instantly." },
    ],
  },
  bn: {
    badge: "নেক্সট-জেন প্রযুক্তি",
    title: "লিডারদের জন্য তৈরি অ্যাডভান্সড ক্যাপাবিলিটিজ",
    items: [
      { icon: Zap, title: "এআই-চালিত অটোমেশন", desc: "ট্রেন্ড ফোরকাস্ট করতে এবং সিদ্ধান্ত গ্রহণ প্রক্রিয়া সহজ করতে মেশিন লার্নিং ব্যবহার করুন।" },
      { icon: Sparkles, title: "স্মার্ট ইন্টারেক্টিভ ড্যাশবোর্ড", desc: "এক নজরে সম্পূর্ণ কন্ট্রোল রাখার জন্য প্রিমিয়াম ও ফাস্ট ইউআই।" },
      { icon: LineChart, title: "রিয়েল-টাইম মেট্রিকস ট্র্যাকিং", desc: "কেপিআই, সার্ভার হেলথ এবং ফিন্যান্সিয়াল স্ট্রিম লাইভ মনিটরিং।" },
      { icon: FileText, title: "অ্যাডভান্সড রিপোর্টিং", desc: "মুহূর্তের মধ্যে বিস্তারিত অডিট লগ এবং অটোমেটেড সামারি জেনারেট করুন।" },
    ],
  },
};

export default function AdvancedCapabilities() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="bg-[#EEF4F7] py-24 dark:bg-[#06101E] lg:py-32">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F9D8F] dark:text-[#1BB6D4]">{t.badge}</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#071427] dark:text-white sm:text-4xl">{t.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {t.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex gap-6 rounded-3xl bg-white dark:bg-[#0B1F3A] p-8 shadow-sm border border-gray-200/60 dark:border-white/10 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4]">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#071427] dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#071427]/70 dark:text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}