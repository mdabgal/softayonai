"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Code2,
  LayoutDashboard,
  TrendingUp,
  GraduationCap,
  Truck,
  ShoppingBag,
  Building2,
  HeartPulse,
  Monitor,
  Film,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

type ServiceCard = {
  icon: LucideIcon;
  href: string;
  tint: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
};

const cards: ServiceCard[] = [
  {
    icon: Globe,
    href: "/#services",
    tint: "#0F9D8F",
    titleBn: "ওয়েবসাইট ডেভেলপমেন্ট",
    titleEn: "Website Development",
    descBn: "দ্রুত, মোবাইল-ফ্রেন্ডলি ও SEO-রেডি ওয়েবসাইট।",
    descEn: "Fast, mobile-friendly and SEO-ready websites.",
  },
  {
    icon: Code2,
    href: "/#services",
    tint: "#1BB6D4",
    titleBn: "কাস্টম সফটওয়্যার",
    titleEn: "Custom Software",
    descBn: "আপনার ব্যবসার নিয়মে তৈরি ড্যাশবোর্ড ও ম্যানেজমেন্ট সিস্টেম।",
    descEn: "Dashboards and management systems built around how your business works.",
  },
  {
    icon: LayoutDashboard,
    href: "/#pricing",
    tint: "#FFB627",
    titleBn: "রেডি-মেড প্রোডাক্ট",
    titleEn: "Ready-made Products",
    descBn: "সেটআপের ঝামেলা ছাড়াই আজই ব্যবহার শুরু করুন।",
    descEn: "Start using them today, without the setup hassle.",
  },
];

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80",
    titleBn: "আপনার ব্যবসাকে ডিজিটালভাবে এগিয়ে নিন",
    titleEn: "Scale your business with smart software",
    descBn: "আমাদের প্ল্যাটফর্ম আধুনিক সফটওয়্যার সলিউশন এবং ফাস্ট ডিপ্লয়মেন্টের মাধ্যমে আপনার ব্যবসাকে শক্তিশালী করে।",
    descEn: "Our platform empowers your business with cutting-edge software solutions and lightning-fast deployment.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80",
    titleBn: "আধুনিক ও রেস্পন্সিভ ওয়েব সলিউশন",
    titleEn: "Modern & Responsive Web Solutions",
    descBn: "আপনার ব্র্যান্ডের গ্রোথ বাড়াতে আমরা তৈরি করি বিশ্বমানের ও হাই-পারফরম্যান্স ওয়েবসাইট।",
    descEn: "Build world-class, high-performance websites tailored to accelerate your brand's growth.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80",
    titleBn: "স্মার্ট ম্যানেজমেন্ট ও ড্যাশবোর্ড",
    titleEn: "Smart Management & Dashboards",
    descBn: "ব্যবসার সমস্ত ডাটা এবং অপারেশনাল প্রসেস এক ড্যাশবোর্ডে নিখুঁতভাবে পরিচালনা করুন।",
    descEn: "Manage all business data and operational processes seamlessly from a single dashboard.",
  },
];

const industryCategories = [
  { icon: TrendingUp, nameBn: "ফিনটেক", nameEn: "Fintech" },
  { icon: GraduationCap, nameBn: "শিক্ষা", nameEn: "Education" },
  { icon: Truck, nameBn: "লজিস্টিকস", nameEn: "Logistics" },
  { icon: ShoppingBag, nameBn: "রিটেইল", nameEn: "Retail & Mfg" },
  { icon: Building2, nameBn: "রিয়েল এস্টেট", nameEn: "Real Estate" },
  { icon: HeartPulse, nameBn: "হেলথকেয়ার", nameEn: "Healthcare" },
  { icon: Monitor, nameBn: "টেকনোলজি", nameEn: "Tech Company" },
  { icon: Film, nameBn: "মিডিয়া", nameEn: "Media" },
];

export default function Hero() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-[#EEF4F7] pt-32 pb-20 text-[#071427] transition-colors duration-300 dark:bg-[#06101E] dark:text-white">
      
      {/* ───────── Background Image Slider with Professional Gradient Overlays ───────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt="Professional Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Rich Professional Tint Overlays for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4F7]/95 via-[#EEF4F7]/90 to-[#EEF4F7] backdrop-blur-[3px] dark:from-[#06101E]/95 dark:via-[#06101E]/90 dark:to-[#06101E] z-10" />
      </div>

      {/* ───────── Main Hero Content ───────── */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1520px] flex-col items-center px-4 pt-6 text-center sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#0F9D8F]/40 bg-white/80 px-5 py-2 text-xs sm:text-sm font-black text-[#0F9D8F] shadow-lg shadow-[#0F9D8F]/15 backdrop-blur-md dark:border-[#0F9D8F]/40 dark:bg-[#0B1F3A]/80 dark:text-[#1BB6D4]"
        >
          <Sparkles size={16} className="text-[#FFB627] animate-pulse" />
          {isBn ? "প্রিমিয়াম সফটওয়্যার ও ডেভেলপমেন্ট এজেন্সি" : "Premium Software & Development Agency"}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.12] text-[#071427] dark:text-white">
              {isBn ? slide.titleBn : slide.titleEn}
            </h1>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[#071427]/85 dark:text-white/80 leading-relaxed font-bold">
              {isBn ? slide.descBn : slide.descEn}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-9 py-4.5 text-base font-black text-white shadow-xl shadow-[#0F9D8F]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0F9D8F]/50 active:scale-95"
              >
                {isBn ? "ফ্রি কনসালটেশন বুক করুন" : "Book A Free Consultation"}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ───────── Bottom Glass Cards (Industries / Categories) ───────── */}
        <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 w-full max-w-6xl">
          {industryCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col items-center justify-center rounded-2xl border-2 border-[#0F9D8F]/30 bg-white/90 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-[#0F9D8F] hover:shadow-xl shadow-md dark:border-white/15 dark:bg-[#0B1F3A]/70 dark:hover:bg-[#0B1F3A] dark:hover:border-[#1BB6D4]"
              >
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F9D8F]/10 text-[#0F9D8F] dark:text-[#1BB6D4] dark:bg-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-black text-[#071427] dark:text-white text-center">
                  {isBn ? cat.nameBn : cat.nameEn}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ───────── 3 Service Cards Section Below Hero ───────── */}
      <div className="relative z-20 mx-auto mt-24 grid w-full max-w-[1520px] gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.titleEn}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-[2.5rem] border-2 border-[#0F9D8F]/30 bg-white/95 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#0F9D8F] hover:shadow-2xl hover:shadow-[#0F9D8F]/20 dark:border-white/15 dark:bg-[#0B1F3A]/90 sm:p-9"
              >
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 shadow-lg"
                  style={{
                    borderColor: card.tint,
                    backgroundColor: `${card.tint}20`,
                    color: card.tint,
                  }}
                >
                  <Icon size={30} />
                </span>

                <h3 className="mt-6 text-2xl font-black text-[#071427] dark:text-white">
                  {isBn ? card.titleBn : card.titleEn}
                </h3>
                <p className="mt-3 flex-1 text-base font-bold leading-relaxed text-[#071427]/75 dark:text-white/75">
                  {isBn ? card.descBn : card.descEn}
                </p>

                <span className="mt-8 flex items-center justify-between border-t-2 border-[#0F9D8F]/25 pt-5 text-sm font-black text-[#071427] dark:border-white/10 dark:text-white">
                  {isBn ? "বিস্তারিত দেখুন" : "Learn more"}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F9D8F]/15 text-[#0F9D8F] transition-all duration-300 group-hover:bg-[#0F9D8F] group-hover:text-white dark:bg-white/10 dark:text-[#1BB6D4] dark:group-hover:bg-[#1BB6D4] dark:group-hover:text-[#071427]">
                    <ArrowUpRight size={18} />
                  </div>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}