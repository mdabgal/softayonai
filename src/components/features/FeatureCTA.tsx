"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    title: "Ready to Transform Your Business?",
    subtitle: "Join hundreds of fast-growing companies scaling their operations with our digital solutions.",
    btnPrimary: "Get Started",
    btnSecondary: "Contact Us",
  },
  bn: {
    title: "আপনার ব্যবসাকে রূপান্তর করতে প্রস্তুত?",
    subtitle: "শত শত দ্রুত বর্ধনশীল কোম্পানির সাথে যুক্ত হোন যারা আমাদের সলিউশন ব্যবহার করে তাদের ব্যবসা পরিচালনা করছে।",
    btnPrimary: "শুরু করুন",
    btnSecondary: "যোগাযোগ করুন",
  },
};

export default function FeatureCTA() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="bg-white py-20 dark:bg-[#071427] lg:py-28">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] p-10 sm:p-16 text-white shadow-2xl text-center max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{t.title}</h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">{t.subtitle}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#071427] dark:bg-[#06101E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              <span>{t.btnPrimary}</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-white/20"
            >
              <span>{t.btnSecondary}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}