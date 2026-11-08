"use client";

import { motion } from "framer-motion";
import { Smile, Coins, MapPin } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    title: "We Want to Be the Best Employer for the Best IT Professionals",
    cards: [
      {
        icon: Smile,
        title: "Attractive Workplace",
        desc: "We have cultivated an inspiring work culture where tech talent thrives and loves to stay. Recognized as a top-tier software employer in Bangladesh, we invest heavily in continuous learning, modern tech stacks, and collaborative engineering environments.",
      },
      {
        icon: Coins,
        title: "Low Employee Turnover",
        desc: "Our engineers love growing with us! We maintain an exceptional retention rate, ensuring long-term project continuity. This means your outsourced developers remain dedicated to your products much longer than traditional in-house staff.",
      },
      {
        icon: MapPin,
        title: "Elite Engineering Talent",
        desc: "We handpick top-tier software developers from a vast tech ecosystem. Putting our people first is our core philosophy—we continuously nurture, mentor, and empower them to deliver world-class digital solutions.",
      },
    ],
  },
  bn: {
    title: "সেরা ডেভেলপারদের জন্য সেরা কর্মসংস্থান গড়ে তোলা আমাদের লক্ষ্য",
    cards: [
      {
        icon: Smile,
        title: "আকর্ষণীয় কর্মপরিবেশ",
        desc: "আমরা এমন একটি আধুনিক প্রযুক্তিগত কর্মপরিবেশ তৈরি করেছি যেখানে কর্মীরা দীর্ঘমেয়াদে কাজ করতে স্বাচ্ছন্দ্যবোধ করেন। বাংলাদেশে সেরা সফটওয়্যার এমপ্লয়ার হিসেবে স্বীকৃত, আমরা অত্যাধুনিক টেক স্ট্যাক এবং প্রবৃদ্ধি অর্জনে বিনিয়োগ করে থাকি।",
      },
      {
        icon: Coins,
        title: "দীর্ঘস্থায়ী টিম রিটেনশন",
        desc: "আমাদের ইঞ্জিনিয়াররা আমাদের সাথেই ক্যারিয়ার গড়তে ভালোবাসেন! আমাদের টিমে উচ্চ স্থায়িত্বশীলতা থাকায় আপনার প্রজেক্টের ধারাবাহিকতা বজায় থাকে। এর ফলে আমাদের ডেভেলপাররা আপনার প্রজেক্টে দীর্ঘ সময় ধরে ডেডিকেটেডভাবে কাজ করতে পারেন।",
      },
      {
        icon: MapPin,
        title: "প্রিমিয়াম ডেভেলপার টিম",
        desc: "আমরা দেশের সেরা টেক ট্যালেন্টদের বাছাই করে টিম গঠন করি। কর্মীদের অগ্রাধিকার দেওয়াই আমাদের মূল নীতি—তারা যেন প্রতিনিয়ত নিজেদের দক্ষতা বৃদ্ধি করতে পারে এবং সেরা ফলাফল দিতে পারে, সে বিষয়ে আমরা সবসময় সচেষ্ট।",
      },
    ],
  },
};

export default function BestEmployerSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="relative overflow-hidden bg-[#EEF4F7] py-20 transition-colors duration-300 dark:bg-[#06101E] lg:py-28">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center text-3xl font-extrabold tracking-tight text-[#071427] dark:text-white sm:text-4xl lg:text-5xl leading-tight"
        >
          {t.title}
        </motion.h2>

        {/* 3 Grid Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                /* Height aro boro korte min-h-[420px] ebong overflow-hidden add kora hoyeche */
                className="group relative flex min-h-[420px] flex-col items-center text-center rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B1F3A] p-8 sm:p-12 shadow-xl transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* Bottom to Top Hover Color Fill Effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0F9D8F] via-[#0F9D8F]/90 to-[#1BB6D4] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center h-full justify-between">
                  {/* Minimal Icon Container */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 text-[#0F9D8F] dark:text-[#1BB6D4] mb-8 shadow-sm transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white">
                    <Icon size={38} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-[#071427] dark:text-white tracking-tight mb-4 transition-colors duration-500 group-hover:text-white">
                      {card.title}
                    </h3>

                    <p className="text-base font-semibold leading-relaxed text-[#071427]/75 dark:text-white/80 transition-colors duration-500 group-hover:text-white/95">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}