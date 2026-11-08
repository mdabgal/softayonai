"use client";

import { ShieldCheck, Lock, Zap, RefreshCw, Layers } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    badge: "Security & Speed",
    title: "Built with uncompromised safety and blazing speed",
    items: [
      { icon: ShieldCheck, title: "Data Protection", desc: "Full end-to-end encryption for all stored and transmitted data." },
      { icon: Lock, title: "Secure Authentication", desc: "Multi-factor authentication (MFA) and role-based access control." },
      { icon: Zap, title: "Ultra-Fast Performance", desc: "Sub-second response times optimized via edge caching." },
      { icon: RefreshCw, title: "Automated Backups", desc: "Real-time snapshot backups ensuring zero data loss." },
      { icon: Layers, title: "High Scalability", desc: "Infrastructure capable of scaling seamlessly during traffic spikes." },
    ],
  },
  bn: {
    badge: "নিরাপত্তা ও গতি",
    title: "সর্বোচ্চ নিরাপত্তা এবং ঝড়ের গতি সম্পন্ন পারফরম্যান্স",
    items: [
      { icon: ShieldCheck, title: "ডেটা প্রোটেকশন", desc: "সকল সংরক্ষিত ও স্থানান্তরিত ডেটার জন্য এন্ড-টু-এন্ড এনক্রিপশন।" },
      { icon: Lock, title: "সিকিউর অথেন্টিকেশন", desc: "মাল্টি-ফ্যাক্টর অথেন্টিকেশন (MFA) এবং রোল-বেসড এক্সেস কন্ট্রোল।" },
      { icon: Zap, title: "অতি দ্রুত গতি", desc: "এজ ক্যাচিংয়ের মাধ্যমে অপ্টিমাইজড ফাস্ট রেসপন্স টাইম।" },
      { icon: RefreshCw, title: "অটোমেটেড ব্যাকআপ", desc: "রিয়েল-টাইম ব্যাকআপ যা ডেটা লস হওয়ার সুযোগ রাখে না।" },
      { icon: Layers, title: "হাই স্কেলেবিলিটি", desc: "অতিরিক্ত ট্রাফিকেও সিস্টেম সচল রাখার উপযোগী ইনফ্রাস্ট্রাকচার।" },
    ],
  },
};

export default function SecuritySection() {
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="rounded-3xl bg-white dark:bg-[#0B1F3A] p-8 shadow-sm border border-gray-200/60 dark:border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4] mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#071427] dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#071427]/70 dark:text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}