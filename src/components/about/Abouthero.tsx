"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const content = {
  en: {
    badge: "About Us",
    title: "About SoftAyona",
    heading: "10+ Years of Delivering Custom IT Solutions & Services",
    p1: "SoftAyona",
    p2: " is a premier software development company dedicated to building efficient teams, smart systems, and long-term client partnerships. By aligning cutting-edge technology with business goals, ",
    p3: "SoftAyona",
    p4: " helps companies create lasting value through custom software solutions for mobile apps, web platforms, ERP, eCommerce, and more. From system analysis and software design to development, testing, deployment, and project management, ",
    p5: "SoftAyona",
    p6: " delivers full-cycle software services tailored to accelerate your business growth.",
    cta: "Explore Our Projects",
  },
  bn: {
    badge: "আমাদের সম্পর্কে",
    title: "সফটআয়না সম্পর্কে",
    heading: "১০+ বছর ধরে কাস্টম আইটি সলিউশন ও সার্ভিস প্রদান",
    p1: "সফটআয়না",
    p2: " একটি শীর্ষস্থানীয় সফটওয়্যার ডেভেলপমেন্ট কোম্পানি, যারা দক্ষ টিম, স্মার্ট সিস্টেম এবং দীর্ঘমেয়াদি ক্লায়েন্ট পার্টনারশিপ গড়ে তুলতে প্রতিশ্রুতিবদ্ধ। ব্যবসার লক্ষ্যের সাথে আধুনিক প্রযুক্তির সঠিক সমন্বয় ঘটিয়ে ",
    p3: "সফটআয়না",
    p4: " মোবাইল অ্যাপ, ওয়েব প্ল্যাটফর্ম, ERP, ই-কমার্সসহ কাস্টম সফটওয়্যার সলিউশনের মাধ্যমে স্থায়ী মূল্য তৈরি করে। সিস্টেম অ্যানালাইসিস ও সফটওয়্যার ডিজাইন থেকে শুরু করে ডেভেলপমেন্ট, টেস্টিং, ডিপ্লয়মেন্ট ও প্রজেক্ট ম্যানেজমেন্ট পর্যন্ত ",
    p5: "সফটআয়না",
    p6: " ব্যবসার প্রবৃদ্ধির জন্য পূর্ণাঙ্গ এন্ড-টু-এন্ড সফটওয়্যার সেবা প্রদান করে।",
    cta: "আমাদের প্রজেক্টসমূহ দেখুন",
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = content[language === "bn" ? "bn" : "en"];

  return (
    <div className="bg-[#EEF4F7] text-[#071427] transition-colors duration-300 dark:bg-[#06101E] dark:text-white">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        {/* ===== Top Banner (Navbar Borabor Match kora) ===== */}
        <section className="bg-gradient-to-r from-[#071427] via-[#0B1F3A] to-[#071427] px-4 py-16 text-center sm:py-20 border-b-2 border-[#0F9D8F]/30 shadow-md">
          <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0F9D8F]/40 bg-white/10 px-5 py-2 text-sm font-black text-[#1BB6D4] backdrop-blur-md shadow-lg"
            >
              <Sparkles size={16} className="text-[#FFB627] animate-pulse" />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mx-auto mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]"
            >
              {t.title}
            </motion.h1>
          </div>
        </section>

        {/* ===== Intro Section (Navbar Borabor Max-w-[1520px] Width & Large Font/Img) ===== */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              
              {/* Left Text Content (Boro Font & Professional Hierarchy) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-black leading-[1.2] tracking-tight text-[#071427] dark:text-white sm:text-4xl lg:text-5xl">
                  {t.heading}
                </h2>

                <p className="text-lg leading-[1.9] text-[#071427]/80 dark:text-white/85 sm:text-xl font-bold">
                  <strong className="font-black text-[#0F9D8F] dark:text-[#1BB6D4]">{t.p1}</strong>
                  {t.p2}
                  <strong className="font-black text-[#0F9D8F] dark:text-[#1BB6D4]">{t.p3}</strong>
                  {t.p4}
                  <strong className="font-black text-[#0F9D8F] dark:text-[#1BB6D4]">{t.p5}</strong>
                  {t.p6}
                </p>

                <div className="pt-4">
                  <Link
                    href="/#projects"
                    className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-10 py-5 text-lg font-black text-white shadow-xl shadow-[#0F9D8F]/35 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0F9D8F]/50 active:scale-95"
                  >
                    <span>{t.cta}</span>
                    <ArrowRight size={22} />
                  </Link>
                </div>
              </motion.div>

              {/* Right Image (Aro Boro & Premium Rounded Border-2 Glow Style) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] border-2 border-[#0F9D8F]/40 shadow-2xl shadow-[#0F9D8F]/20 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                  alt="SoftAyona team working together"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071427]/40 via-transparent to-transparent" />
              </motion.div>

            </div>
          </div>
        </section>
      </main>

    
    </div>
  );
}