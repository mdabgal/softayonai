"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight, PhoneCall, Sparkles, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

export default function CTASection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section className="relative overflow-hidden bg-[#F6F9FA] py-28 transition-colors duration-300 dark:bg-[#0B1F3A]">
      
      {/* Background Unique Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F9D8F]/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/15 blur-[160px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        {/* Unique Modern Glassmorphism CTA Container */}
        <div className="relative overflow-hidden rounded-[3rem] border border-[#0F9D8F]/20 bg-gradient-to-br from-white via-white/90 to-[#0F9D8F]/5 p-10 sm:p-16 lg:p-20 shadow-[0_30px_90px_-20px_rgba(11,31,58,0.15)] dark:border-white/10 dark:from-[#0F2A4A] dark:via-[#0B1F3A] dark:to-[#0F2A4A] dark:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]">
          
          {/* Decorative Corner Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0F9D8F]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#1BB6D4]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Left Side: Title & Description */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs sm:text-sm font-bold text-[#0F9D8F] dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4] border border-[#0F9D8F]/30">
                <Sparkles size={16} />
                {isBn ? "আপনার প্রজেক্ট সফল করতে আমরা প্রস্তুত" : "Ready To Elevate Your Business?"}
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1F3A] dark:text-white leading-[1.15]">
                {isBn
                  ? "আজই আপনার প্রজেক্ট শুরু করুন অথবা ফ্রি কনসালটেশন নিন"
                  : "Start Your Project Today Or Get A Free Consultation"}
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/75 dark:text-white/75 max-w-2xl mx-auto lg:mx-0">
                {isBn
                  ? "আপনার আইডিয়াকে একটি প্রিমিয়াম ডিজিটাল সলিউশনে রূপান্তর করতে আমাদের ইন্ডাস্ট্রি-লিডিং এক্সপার্ট টিমের সাথে আজই কানেক্ট করুন।"
                  : "Transform your visionary ideas into a high-performing digital solution with our industry-leading expert team."}
              </p>

              {/* Trust Checkpoints */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-bold text-[#0B1F3A]/70 dark:text-white/70">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0F9D8F]" />
                  {isBn ? "১০০% স্যাটিসফ্যাকশন গ্যারান্টি" : "100% Satisfaction"}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1BB6D4]" />
                  {isBn ? "অন-টাইম ডেলিভারি" : "On-Time Delivery"}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#FFB627]" />
                  {isBn ? "২৪/৭ ডেডিকেটেড সাপোর্ট" : "24/7 Support"}
                </span>
              </div>
            </div>

            {/* Right Side: Action Buttons Box */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end gap-4">
              <div className="w-full max-w-md space-y-4 rounded-[2rem] border border-[#0B1F3A]/10 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
                
                <h4 className="text-lg font-extrabold text-[#0B1F3A] dark:text-white text-center lg:text-left mb-2">
                  {isBn ? "আপনার পরবর্তী পদক্ষেপ কী?" : "What's Your Next Step?"}
                </h4>

                <a
                  href="#contact"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-[#0F9D8F]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <Rocket size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
                  {isBn ? "প্রজেক্ট শুরু করুন" : "Start Your Project Today"}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#consultation"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#0B1F3A]/15 bg-white px-6 py-4 text-base font-extrabold text-[#0B1F3A] transition-all duration-300 hover:bg-[#0F9D8F]/5 hover:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  <PhoneCall size={18} className="text-[#0F9D8F] dark:text-[#1BB6D4]" />
                  {isBn ? "ফ্রি কনসালটেশন নিন" : "Get a Free Consultation"}
                </a>

                <p className="text-center text-xs font-semibold text-[#0B1F3A]/50 dark:text-white/50 pt-2">
                  {isBn ? "কোনো ক্রেডিট কার্ডের প্রয়োজন নেই।" : "No credit card required for consultation."}
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}