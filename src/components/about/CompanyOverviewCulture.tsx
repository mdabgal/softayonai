"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/shared/LanguageProvider";

const BADGE_SRC: string | null = null;

const content = {
  en: {
    title:
      "SoftAyona is a Premier Software Development Company with Unique Access to Premium Developers",
    desc: "Consider us your gateway to an exciting developer marketplace, helping you recruit and manage offshore teams that seamlessly integrate with your in-house team. Known in Bangladesh as a top employer emphasizing technology, knowledge sharing, and a great work environment, SoftAyona has grown to over 50 employees. We work with international clients ranging from fast-growing startups to established media groups, offering flexible collaboration and delivering high-quality results.",
    stats: [
      { num: "2014", label: "Established" },
      { num: "50+", label: "Employees" },
      { num: "350+", label: "Customers" },
    ],
    cultureTitle: "Our Culture",
    cultureDesc:
      "SoftAyona aims to be a company that inspires people to be committed and self-reliant. We encourage transparency both within the company and in dialogue with our clients. We believe that a good work-life balance equals high productivity. At SoftAyona, we help each other grow as professionals. In fact, our leaders are measured on their ability to coach our juniors to become tomorrow's leaders.",
  },
  bn: {
    title:
      "সফটআয়না একটি শীর্ষস্থানীয় সফটওয়্যার ডেভেলপমেন্ট কোম্পানি, যেখানে রয়েছে প্রিমিয়াম ডেভেলপারদের এক্সক্লুসিভ টিম",
    desc: "আমাদের আপনার বিশ্বস্ত অফশোর ডেভেলপমেন্ট পার্টনার হিসেবে বিবেচনা করুন, যা আপনাকে এমন দক্ষ টিম গঠনে সাহায্য করে যারা আপনার ইন-হাউস টিমের সাথে খুব সহজেই মিলে কাজ করতে পারে। বাংলাদেশে প্রযুক্তি, নলেজ শেয়ারিং এবং চমৎকার কর্মপরিবেশের জন্য পরিচিত সফটআয়না আজ ৫০+ কর্মচারীর একটি শক্তিশালী প্রতিষ্ঠানে রূপ নিয়েছে। আমরা দ্রুত বর্ধনশীল স্টার্টআপ থেকে শুরু করে প্রতিষ্ঠিত বৈশ্বিক ক্লায়েন্টদের জন্য ফ্লেক্সিবল কোলাবরেশনের মাধ্যমে উচ্চমানের সফটওয়্যার সলিউশন প্রদান করছি।",
    stats: [
      { num: "২০১৪", label: "প্রতিষ্ঠিত" },
      { num: "৫০+", label: "কর্মচারী" },
      { num: "৩৫০+", label: "গ্রাহক" },
    ],
    cultureTitle: "আমাদের সংস্কৃতি (Our Culture)",
    cultureDesc:
      "সফটআয়না এমন একটি প্রতিষ্ঠান হতে চায় যা মানুষকে প্রতিশ্রুতিবদ্ধ এবং আত্মনির্ভরশীল হতে অনুপ্রাণিত করে। আমরা কোম্পানি এবং ক্লায়েন্ট উভয়ের সাথেই স্বচ্ছতা বজায় রাখতে বিশ্বাস করি। আমরা মনে করি কাজের সাথে ব্যক্তিগত জীবনের ভারসাম্যই উচ্চ উৎপাদনশীলতা নিশ্চিত করে। সফটআয়নার প্রতিটি সদস্য একে অপরকে একজন প্রফেশনাল হিসেবে বেড়ে উঠতে সাহায্য করে। আমাদের লিডাররা তাদের জুনিয়রদের আগামী দিনের নেতৃত্ব হিসেবে গড়ে তোলার দক্ষতার ওপর মূল্যায়িত হন।",
  },
};

interface FloatCardProps {
  children: ReactNode;
  position: "left" | "right";
}

/* Professional smooth floating card with elegant hover elevation */
function FloatCard({ children, position }: FloatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`relative z-20 w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[58%] xl:w-[52%] ${
        position === "left" ? "lg:left-0" : "lg:right-0"
      } -mt-16 sm:-mt-20 lg:mt-0 overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(7,20,39,0.2)] dark:border-white/10 dark:bg-[#0B1F3A] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-[#071427] dark:text-white transition-shadow duration-300`}
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0F9D8F] via-[#1BB6D4] to-[#FFB627]" />
      {children}
    </motion.div>
  );
}

interface PhotoProps {
  src: string;
  alt: string;
  position: "left" | "right";
}

/* Professional photo container with subtle image zoom on hover */
function Photo({ src, alt, position }: PhotoProps) {
  return (
    <div
      className={`relative w-full lg:w-[75%] xl:w-[72%] ${
        position === "right" ? "lg:ml-auto" : "lg:mr-auto"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-[350px] sm:h-[450px] lg:h-[580px] w-full overflow-hidden rounded-2xl shadow-2xl group"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071427]/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}

export default function CompanyOverviewCulture() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="relative overflow-hidden bg-[#EEF4F7] py-20 transition-colors duration-300 dark:bg-[#06101E] lg:py-32">
      <div className="mx-auto max-w-[1520px] space-y-20 px-4 sm:px-6 lg:space-y-32 lg:px-8">
        
        {/* ============ Row 1: Image Right, Card Overlapping Left ============ */}
        <div className="relative flex flex-col lg:block items-center">
          <Photo
            position="right"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
            alt="SoftAyona team collaboration workspace"
          />

          <FloatCard position="left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.25] tracking-tight">
              {t.title}
            </h2>

            <p className="mt-5 text-sm sm:text-base font-medium leading-[1.8] text-[#071427]/75 dark:text-white/80">
              {t.desc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-gray-100 pt-7 dark:border-white/10">
              {t.stats.map((st) => (
                <div key={st.label}>
                  <p className="text-3xl sm:text-4xl font-black leading-none tracking-tight text-[#071427] dark:text-white">
                    {st.num}
                  </p>
                  <p className="mt-2 text-sm sm:text-base font-bold text-gray-500 dark:text-white/60">
                    {st.label}
                  </p>
                </div>
              ))}

              {BADGE_SRC && (
                <Image
                  src={BADGE_SRC}
                  alt="Certification badge"
                  width={64}
                  height={92}
                  className="h-auto w-14 sm:w-16"
                />
              )}
            </div>
          </FloatCard>
        </div>

        {/* ============ Row 2: Image Left, Card Overlapping Right ============ */}
        <div className="relative flex flex-col lg:block items-center">
          <Photo
            position="left"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="SoftAyona company culture environment"
          />

          <FloatCard position="right">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.cultureTitle}
            </h2>

            <p className="mt-5 text-sm sm:text-base font-medium leading-[1.8] text-[#071427]/75 dark:text-white/80">
              {t.cultureDesc}
            </p>
          </FloatCard>
        </div>

      </div>
    </section>
  );
}