"use client";

import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    badge: "Seamless Ecosystem",
    title: "Connect with the tools you already use",
    subtitle: "Integrate smoothly with third-party APIs, global payment gateways, CRMs, and cloud services.",
    categories: ["Third-party APIs", "Payment Gateways", "CRM Software", "Cloud Services", "Custom Webhooks"],
  },
  bn: {
    badge: "সিমলেস ইকোসিস্টেম",
    title: "আপনার ব্যবহৃত টুলসগুলোর সাথেই কানেক্ট করুন",
    subtitle: "থার্ড-পার্টি এপিআই, পেমেন্ট গেটওয়ে, সিআরএম এবং ক্লাউড সার্ভিসের সাথে নিখুঁত ইন্টিগ্রেশন।",
    categories: ["থার্ড-পার্টি এপিআই", "পেমেন্ট গেটওয়ে", "সিআরএম সফটওয়্যার", "ক্লাউড সার্ভিস", "কাস্টম ওয়েবহুক"],
  },
};

export default function IntegrationSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="bg-white py-24 dark:bg-[#071427] lg:py-32">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F9D8F] dark:text-[#1BB6D4]">{t.badge}</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#071427] dark:text-white sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-base text-[#071427]/75 dark:text-white/75">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {t.categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-[#EEF4F7] dark:bg-[#0B1F3A] px-6 py-4 text-sm font-bold text-[#071427] dark:text-white shadow-sm">
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}