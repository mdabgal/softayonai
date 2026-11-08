"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, ShieldCheck, Cloud, Blocks, Sliders } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    badge: "Core Capabilities",
    title: "Designed for high productivity and smart management",
    features: [
      { icon: Cpu, title: "Smart Automation", desc: "Automate repetitive workflows and reduce manual operational overhead seamlessly." },
      { icon: BarChart3, title: "Advanced Analytics", desc: "Gain real-time insights into metrics and business performance via custom dashboards." },
      { icon: ShieldCheck, title: "Enterprise Security", desc: "Military-grade data protection, encryption, and strict access compliance." },
      { icon: Cloud, title: "Cloud Integration", desc: "Sync data securely across multi-cloud servers with uninterrupted uptime." },
      { icon: Blocks, title: "API Integration", desc: "Connect with third-party tools and proprietary software effortlessly." },
      { icon: Sliders, title: "Deep Customization", desc: "Tailor UI modules, themes, and logic precisely to your enterprise requirements." },
    ],
  },
  bn: {
    badge: "মূল বৈশিষ্ট্যসমূহ",
    title: "উচ্চ উৎপাদনশীলতা এবং স্মার্ট ম্যানেজমেন্টের জন্য তৈরি",
    features: [
      { icon: Cpu, title: "স্মার্ট অটোমেশন", desc: "बारংবার করার কাজগুলো অটোমেট করুন এবং ম্যানুয়াল কাজের চাপ কমিয়ে ফেলুন।" },
      { icon: BarChart3, title: "অ্যাডভান্সড অ্যানালিটিক্স", desc: "কাস্টম ড্যাশবোর্ডের মাধ্যমে রিয়েল-টাইম মেট্রিকস ও পারফরম্যান্স দেখুন।" },
      { icon: ShieldCheck, title: "এন্টারপ্রাইজ সিকিউরিটি", desc: "উন্নত মানের ডেটা প্রটেকশন, এনক্রিপশন এবং কমপ্লায়েন্স নিশ্চিতকরণ।" },
      { icon: Cloud, title: "ক্লাউড ইন্টিগ্রেশন", desc: "নিরাপদে ক্লাউড সার্ভারের সাথে ডেটা সিংক্রোনাইজ করুন।" },
      { icon: Blocks, title: "এপিআই ইন্টিগ্রেশন", desc: "সহজেই থার্ড-পার্টি টুলস এবং সফটওয়্যারের সাথে কানেক্ট করুন।" },
      { icon: Sliders, title: "গভীর কাস্টমাইজেশন", desc: "আপনার কোম্পানির প্রয়োজন অনুযায়ী ফিচার ও থিম কাস্টমাইজ করুন।" },
    ],
  },
};

export default function CoreFeatures() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="bg-white py-24 dark:bg-[#071427] lg:py-32">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F9D8F] dark:text-[#1BB6D4]">{t.badge}</span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#071427] dark:text-white sm:text-4xl">{t.title}</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group rounded-3xl border border-gray-200/80 dark:border-white/10 bg-[#EEF4F7]/40 dark:bg-[#0B1F3A]/60 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[#0F9D8F] dark:hover:border-[#1BB6D4]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#1BB6D4]/10 dark:text-[#1BB6D4] mb-6 group-hover:bg-[#0F9D8F] group-hover:text-white transition-colors">
                  <Icon size={28} />
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