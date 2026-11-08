"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  Heart,
  CheckCircle2,
  MessageSquareCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

type Testimonial = {
  id: number;
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  company: string;
  image: string;
  reviewBn: string;
  reviewEn: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    nameBn: "তানভীর আহমেদ",
    nameEn: "Tanvir Ahmed",
    roleBn: "প্রতিষ্ঠাতা ও সিইও",
    roleEn: "Founder & CEO",
    company: "TechVibe Ltd.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    reviewBn: "SoftAyona আমাদের ই-কমার্স প্ল্যাটফর্মটি অত্যন্ত কম সময়ের মধ্যে ডেভেলপ করে দিয়েছে। তাদের কোডিং কোয়ালিটি এবং ২৪/৭ সাপোর্ট সত্যিই অসাধারণ। তাদের ওপর পুরোপুরি ভরসা করা যায়।",
    reviewEn: "SoftAyona developed our e-commerce platform in a very short time. Their coding quality and 24/7 support are truly amazing. Highly trustworthy!",
    rating: 5,
  },
  {
    id: 2,
    nameBn: "সৈকত হাসান",
    nameEn: "Saikat Hasan",
    roleBn: "ব্যবস্থাপনা পরিচালক",
    roleEn: "Managing Director",
    company: "MediCare Hospital ERP",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    reviewBn: "আমাদের হাসপাতালের ম্যানেজমেন্ট সফটওয়্যার তৈরির জন্য আমরা তাদের সাথে কাজ করেছি। তারা যেভাবে আমাদের রিকোয়ারমেন্ট বুঝে নিখুঁত সিস্টেম তৈরি করে দিয়েছে, তা অতুলনীয়।",
    reviewEn: "We worked with them to build our hospital management software. The way they understood our requirements and delivered a flawless system is matchless.",
    rating: 5,
  },
  {
    id: 3,
    nameBn: "নুসরাত জাহান",
    nameEn: "Nusrat Jahan",
    roleBn: "মার্কেটিং ডিরেক্টর",
    roleEn: "Marketing Director",
    company: "Global Logistics BD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    reviewBn: "তাদের তৈরি করা মোবাইল অ্যাপ এবং ওয়েবসাইট আমাদের বিজনেসের সেলস বহুগুণ বাড়িয়ে দিয়েছে। প্রফেশনাল টিম এবং সময়মতো প্রজেক্ট ডেলিভারি দেওয়ার জন্য অনেক ধন্যবাদ।",
    reviewEn: "The mobile app and website they built multiplied our business sales. Big thanks to their professional team for delivering the project right on time.",
    rating: 5,
  },
  {
    id: 4,
    nameBn: "রাশেদুল ইসলাম",
    nameEn: "Rashedul Islam",
    roleBn: "সিটিও",
    roleEn: "CTO",
    company: "Fintech Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    reviewBn: "সিকিউরিটি এবং পারফরম্যান্সের দিক থেকে SoftAyona একদম টপ-নচ সার্ভিস দিয়ে থাকে। তাদের তৈরি করা ফিনটেক সিস্টেমটি অত্যন্ত চমৎকারভাবে কাজ করছে।",
    reviewEn: "SoftAyona delivers top-notch service in terms of security and performance. The fintech system they built works exceptionally well.",
    rating: 5,
  },
  {
    id: 5,
    nameBn: "ফারহানা আক্তার",
    nameEn: "Farhana Akter",
    roleBn: "পরিচালক",
    roleEn: "Director",
    company: "EduCare Academy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    reviewBn: "আমাদের এডুকেশন ম্যানেজমেন্ট পোর্টালটি তারা খুব সুন্দরভাবে হ্যান্ডেল করেছে। স্টুডেন্ট ও টিচাররা খুব সহজেই এটি ব্যবহার করতে পারছে।",
    reviewEn: "They handled our education management portal wonderfully. Students and teachers are using it with great ease.",
    rating: 5,
  },
  
];

const DWELL_MS = 6000;

const splitSentences = (text: string): string[] =>
  text.match(/[^।.!?]+[।.!?]+/g)?.map((s) => s.trim()) ?? [text];

function TypingDots({ animate }: { animate: boolean }) {
  return (
    <div className="flex items-center gap-1.5 px-1 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-2.5 w-2.5 rounded-full bg-[#0F9D8F]"
          animate={animate ? { y: [0, -6, 0], opacity: [0.4, 1, 0.4] } : undefined}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const reduceMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shown, setShown] = useState<{ id: number; n: number }>({ id: 0, n: 0 });
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;
  const current = testimonials[currentIndex];

  const sentences = useMemo(
    () => splitSentences(isBn ? current.reviewBn : current.reviewEn),
    [current, isBn]
  );

  const visible = reduceMotion
    ? sentences.length
    : shown.id === current.id
    ? Math.min(shown.n, sentences.length)
    : 0;
  const isTyping = visible < sentences.length;
  const done = !isTyping;

  const average = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / total
  ).toFixed(1);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setShown({ id: testimonials[index].id, n: 0 });
  };

  const handleNext = () => goTo((currentIndex + 1) % total);
  const handlePrev = () => goTo((currentIndex - 1 + total) % total);

  useEffect(() => {
    if (reduceMotion) {
      setShown({ id: current.id, n: sentences.length });
      return;
    }
    setShown({ id: current.id, n: 0 });
    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 200;
    sentences.forEach((s, i) => {
      t += 600 + Math.min(s.length * 12, 1100);
      timers.push(
        setTimeout(() => setShown({ id: current.id, n: i + 1 }), t)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [sentences, current.id, reduceMotion]);

  useEffect(() => {
    if (!done || paused || reduceMotion) return;
    const id = setTimeout(
      () => setCurrentIndex((i) => (i + 1) % total),
      DWELL_MS
    );
    return () => clearTimeout(id);
  }, [done, paused, reduceMotion, total]);

  return (
    <section className="relative overflow-hidden bg-[#F6F9FA] py-28 transition-colors duration-300 dark:bg-[#0B1F3A]">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F9D8F]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-[#1BB6D4]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] shadow-sm dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
            <MessageSquareCheck size={14} />
            {isBn ? "ক্লায়েন্ট রিভিউ ও মতামত" : "Client Testimonials"}
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.3] tracking-normal text-[#0B1F3A] dark:text-white sm:text-4xl lg:text-5xl">
            {isBn
              ? "আমাদের সেবা নিয়ে সম্মানিত ক্লায়েন্টদের মূল্যায়ন"
              : "What Our Valued Clients Say About Us"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75 sm:text-lg">
            {isBn
              ? "আমাদের কাজের মান এবং বিশ্বস্ততা নিয়ে তাদের প্রকৃত অভিজ্ঞতা এখানে তুলে ধরা হলো।"
              : "Read real experiences and honest feedback from businesses we have successfully collaborated with."}
          </p>
        </div>

        {/* Layout */}
        <div
          className="mx-auto mt-20 grid max-w-[1400px] gap-8 lg:grid-cols-12 lg:gap-10 items-start"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* ---------- Left Professional Client List (6 Items with optimized larger text) ---------- */}
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="rounded-[1.75rem] border border-[#0B1F3A]/10 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(11,31,58,0.3)] dark:border-white/10 dark:bg-[#0F2A4A]">
              <div className="flex items-center justify-between px-3 pb-3 pt-2 border-b border-[#0B1F3A]/5 dark:border-white/5 mb-3">
                <span className="text-sm font-extrabold text-[#0B1F3A] dark:text-white">
                  {isBn ? "ক্লায়েন্ট মেসেজ (৬)" : "Client messages (6)"}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A]/60 dark:text-white/60">
                  <Star size={13} className="fill-[#FFB627] text-[#FFB627]" />
                  {average}
                </span>
              </div>

              <div
                role="tablist"
                aria-orientation="vertical"
                className="flex flex-col gap-2.5 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar"
              >
                {testimonials.map((t, idx) => {
                  const isActive = idx === currentIndex;
                  const preview = splitSentences(isBn ? t.reviewBn : t.reviewEn)[0];
                  return (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => goTo(idx)}
                      className={`relative flex items-center gap-3.5 rounded-2xl p-3.5 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0F9D8F] ${
                        isActive
                          ? "bg-gradient-to-r from-[#0F9D8F]/15 to-[#1BB6D4]/10 border border-[#0F9D8F]/40 shadow-sm dark:bg-[#0F9D8F]/25"
                          : "hover:bg-[#F6F9FA] border border-transparent dark:hover:bg-white/5"
                      }`}
                    >
                      <span className="relative h-12 w-12 shrink-0">
                        <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-1 ring-[#0F9D8F]/30">
                          <Image
                            src={t.image}
                            alt={isBn ? t.nameBn : t.nameEn}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </span>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0F2A4A]" />
                      </span>

                      <span className="min-w-0 flex-1">
                        {/* নাম এবং কোম্পানি নাম ফন্ট সাইজ বড় এবং স্পষ্ট করা হয়েছে */}
                        <span className="block truncate text-base font-bold text-[#0B1F3A] dark:text-white">
                          {isBn ? t.nameBn : t.nameEn}
                        </span>
                        <span
                          className={`block truncate text-xs sm:text-sm mt-0.5 ${
                            isActive
                              ? "font-semibold text-[#0F9D8F] dark:text-[#1BB6D4]"
                              : "text-[#0B1F3A]/60 dark:text-white/60"
                          }`}
                        >
                          {t.company}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ---------- Right Chat Window ---------- */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white shadow-[0_40px_100px_-40px_rgba(11,31,58,0.4)] dark:border-white/10 dark:bg-[#0F2A4A]">
              
              {/* Header with Professional Navigation Controls */}
              <div className="flex items-center justify-between border-b border-[#0B1F3A]/10 bg-white/80 px-5 py-4 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] sm:px-7">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex min-w-0 flex-1 items-center gap-4"
                  >
                    <span className="relative h-12 w-12 shrink-0">
                      <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#0F9D8F]/40">
                        <Image
                          src={current.image}
                          alt={isBn ? current.nameBn : current.nameEn}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </span>
                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0F2A4A]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-base font-bold text-[#0B1F3A] dark:text-white sm:text-lg">
                        {isBn ? current.nameBn : current.nameEn}
                      </span>
                      <span className="block truncate text-xs font-semibold text-[#0F9D8F] dark:text-[#1BB6D4] sm:text-sm">
                        {isBn ? current.roleBn : current.roleEn}
                        <span className="font-medium text-[#0B1F3A]/55 dark:text-white/55">
                          {" · "}
                          {current.company}
                        </span>
                      </span>
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Professional Right-side Controls */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden text-sm font-bold tabular-nums text-[#0B1F3A]/60 dark:text-white/60 sm:inline-block">
                    {currentIndex + 1} / {total}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0B1F3A]/15 bg-white text-[#0B1F3A] shadow-sm outline-none transition-all hover:border-[#0F9D8F] hover:bg-[#0F9D8F] hover:text-white focus-visible:ring-2 focus-visible:ring-[#0F9D8F] dark:bg-white/10 dark:text-white dark:border-white/15"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] text-white shadow-md outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#0F9D8F]"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat body */}
              <div
                className="relative min-h-[440px] px-5 py-6 sm:px-8 sm:py-8"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(15,157,143,0.14) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
                aria-live="polite"
              >
                <div className="mb-6 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0B1F3A]/10 bg-white px-4 py-1.5 shadow-sm dark:border-white/10 dark:bg-[#0B1F3A]">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#FFB627] text-[#FFB627]" />
                    ))}
                  </span>
                </div>

                <div key={current.id} className="flex flex-col gap-3">
                  {sentences.slice(0, visible).map((sentence, idx) => {
                    const isFirst = idx === 0;
                    const isLast = idx === sentences.length - 1;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 12, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        style={{ originX: 0 }}
                        className="flex items-end gap-3"
                      >
                        {isFirst ? (
                          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[#0F9D8F]/30">
                            <Image
                              src={current.image}
                              alt=""
                              fill
                              sizes="36px"
                              className="object-cover"
                            />
                          </span>
                        ) : (
                          <span className="w-9 shrink-0" />
                        )}

                        <div className="relative max-w-[88%] sm:max-w-[80%]">
                          <p className="rounded-2xl rounded-tl-md border border-[#0B1F3A]/10 bg-white px-6 py-4 text-lg font-medium leading-relaxed text-[#0B1F3A] shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white sm:text-xl sm:leading-[1.6]">
                            {sentence}
                          </p>

                          {isLast && done && (
                            <motion.span
                              initial={{ scale: 0, rotate: -20 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 16,
                                delay: reduceMotion ? 0 : 0.4,
                              }}
                              className="absolute -bottom-3 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] text-white shadow-lg ring-2 ring-white dark:ring-[#0F2A4A]"
                              aria-label="Reacted with a heart"
                            >
                              <Heart size={14} className="fill-white" />
                            </motion.span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                  {isTyping && !reduceMotion && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-end gap-3"
                    >
                      {visible === 0 ? (
                        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[#0F9D8F]/30">
                          <Image
                            src={current.image}
                            alt=""
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </span>
                      ) : (
                        <span className="w-9 shrink-0" />
                      )}
                      <div className="rounded-2xl rounded-tl-md border border-[#0B1F3A]/10 bg-white px-5 shadow-md dark:border-white/10 dark:bg-white/10">
                        <TypingDots animate={!reduceMotion} />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}