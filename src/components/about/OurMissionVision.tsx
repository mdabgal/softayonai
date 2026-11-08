"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Compass, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const content = {
  en: {
    missionBadge: "Our Core Mission",
    missionTitle: "Our Mission",
    missionDesc:
      "To be a trusted partner in driving digital transformation, delivering innovative software solutions that empower businesses to achieve greater success with efficiency and reduced complexity. We strive to create lasting value through collaboration, technology, and customer-centric services.",
    visionBadge: "Our Strategic Vision",
    visionTitle: "Our Vision",
    visionDesc:
      "Our vision is to be the fastest digital transformation partner, delivering innovative solutions that drive success. We leverage global talent to offer creative, cutting-edge technologies that help businesses grow and thrive in the digital age.",
  },
  bn: {
    missionBadge: "আমাদের মূল লক্ষ্য",
    missionTitle: "আমাদের মিশন (Our Mission)",
    missionDesc:
      "ডিজিটাল ট্রান্সফরমেশন বাস্তবায়নে একটি বিশ্বস্ত অংশীদার হওয়া, উদ্ভাবনী সফটওয়্যার সলিউশন প্রদান করা যা ব্যবসাগুলোকে দক্ষতা বৃদ্ধি এবং জটিলতা কমাতে সহায়তা করে। আমরা সহযোগিতা, প্রযুক্তি এবং কাস্টমার-কেন্দ্রিক সেবার মাধ্যমে স্থায়ী মূল্য তৈরি করতে সচেষ্ট।",
    visionBadge: "আমাদের ভবিষ্যৎ পরিকল্পনা",
    visionTitle: "আমাদের ভিশন (Our Vision)",
    visionDesc:
      "আমাদের ভিশন হলো দ্রুততম ডিজিটাল ট্রান্সফরমেশন পার্টনার হওয়া এবং সফলতাকে ত্বরান্বিতকারী উদ্ভাবনী সলিউশন দেওয়া। আমরা গ্লোবাল ট্যালেন্ট কাজে লাগিয়ে ক্রিয়েটিভ ও অত্যাধুনিক প্রযুক্তি প্রদান করি যা ব্যবসাগুলোকে ডিজিটাল যুগে এগিয়ে যেতে সাহায্য করে।",
  },
};

export default function OurMissionVision() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];

  return (
    <section className="relative overflow-hidden bg-white text-[#071427] dark:bg-[#06101E] dark:text-white py-24 sm:py-32 transition-colors duration-300">
      
      {/* Background Soft Glow Effects */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/10 blur-[140px] dark:bg-[#0F9D8F]/15" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#1BB6D4]/10 blur-[140px] dark:bg-[#1BB6D4]/15" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-40">
        
        {/* ================= 1st Row: Mission (Image Left, Text Right) ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Image with Hover & Motion Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] border-2 border-[#0F9D8F]/30 dark:border-[#0F9D8F]/40 shadow-2xl shadow-[#0F9D8F]/15 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
              alt="Our Mission Workspace"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071427]/40 via-transparent to-transparent opacity-80" />
          </motion.div>

          {/* Right Text Content (Dakkel ken Professional Layout) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0F9D8F]/40 bg-[#0F9D8F]/10 px-6 py-2.5 text-sm font-black text-[#0F9D8F] dark:text-[#1BB6D4] dark:bg-white/10 backdrop-blur-md shadow-md">
              <Target size={20} className="text-[#0F9D8F] dark:text-[#1BB6D4]" />
              <span>{t.missionBadge}</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-[#071427] dark:text-white">
              {t.missionTitle}
            </h2>

            <p className="text-lg sm:text-xl lg:text-[1.35rem] leading-[1.8] text-[#071427]/80 dark:text-white/85 font-semibold">
              {t.missionDesc}
            </p>
          </motion.div>

        </div>

        {/* ================= 2nd Row: Vision (Text Left, Image Right) ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1BB6D4]/40 bg-[#1BB6D4]/10 px-6 py-2.5 text-sm font-black text-[#1BB6D4] dark:bg-white/10 backdrop-blur-md shadow-md">
              <Compass size={20} className="text-[#1BB6D4]" />
              <span>{t.visionBadge}</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-[#071427] dark:text-white">
              {t.visionTitle}
            </h2>

            <p className="text-lg sm:text-xl lg:text-[1.35rem] leading-[1.8] text-[#071427]/80 dark:text-white/85 font-semibold">
              {t.visionDesc}
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] border-2 border-[#1BB6D4]/30 dark:border-[#1BB6D4]/40 shadow-2xl shadow-[#1BB6D4]/15 group order-1 lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80"
              alt="Our Vision Workspace"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071427]/40 via-transparent to-transparent opacity-80" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}