"use client";

import { motion } from "framer-motion";
import { 
  Users, Handshake, Rocket, Clock, Award, Sparkles, 
  Globe, Cpu, ShieldCheck, Zap, Briefcase, Building, 
  Layers, Database, Compass, Landmark, Network, CheckCircle2 
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const valuesData = {
  en: [
    {
      icon: Users,
      title: "Absolute Ownership",
      desc: "We take total responsibility for challenges and drive accountability to achieve ultimate success.",
    },
    {
      icon: Handshake,
      title: "Passion & Commitment",
      desc: "Driven by reliability, dedication, and smart execution to deliver exceptional enterprise results.",
    },
    {
      icon: Rocket,
      title: "Agile & Scalable",
      desc: "Quickly adapt and scale your engineering teams to seamlessly meet evolving project demands.",
    },
    {
      icon: Clock,
      title: "Global Time-Zone Advantage",
      desc: "Ensuring round-the-clock productivity with seamless communication and continuous delivery.",
    },
    {
      icon: Award,
      title: "Proven Enterprise Expertise",
      desc: "Years of demonstrated excellence in delivering secure, high-performance digital solutions.",
    },
  ],
  bn: [
    {
      icon: Users,
      title: "সম্পূর্ণ দায়িত্ববোধ",
      desc: "প্রতিটি চ্যালেঞ্জের সম্পূর্ণ দায়িত্ব নিয়ে সর্বোচ্চ পেশাদারিত্ব ও সাফল্যের সাথে তা বাস্তবায়ন করা।",
    },
    {
      icon: Handshake,
      title: "নিষ্ঠা ও প্রতিশ্রুতি",
      desc: "নির্ভরযোগ্যতা, ডেডিকেশন এবং স্মার্ট কর্মপরিকল্পনার মাধ্যমে ব্যতিক্রমী ফলাফল উপহার দেওয়া।",
    },
    {
      icon: Rocket,
      title: "নমনীয় ও স্কেলেবল টিম",
      desc: "প্রজেক্টের ক্রমবর্ধমান ও পরিবর্তনশীল চাহিদা পূরণে দ্রুত টিমকে মানিয়ে নেওয়া ও স্কেল করা।",
    },
    {
      icon: Clock,
      title: "টাইম-জোন সুবিধা",
      desc: "নিরবচ্ছিন্ন যোগাযোগ এবং ২৪/৭ প্রডাক্টিভিটি নিশ্চিতকরণের মাধ্যমে সময়ের সঠিক ব্যবহার।",
    },
    {
      icon: Award,
      title: "প্রমাণিত দক্ষতা ও অভিজ্ঞতা",
      desc: "নিরাপদ ও উচ্চ-পারফরম্যান্স সম্পন্ন এন্টারপ্রাইজ সলিউশন প্রদানে বহু বছরের বাস্তব অভিজ্ঞতা।",
    },
  ],
};

const clientsData = {
  en: {
    eyebrow: "Global Partnership",
    title: "Trusted by Industry Leaders Worldwide",
    subtitle: "We proudly empower global enterprises and visionary startups with cutting-edge custom software development, advanced web applications, and scalable digital solutions.",
  },
  bn: {
    eyebrow: "গ্লোবাল পার্টনারশিপ",
    title: "বিশ্বের শীর্ষস্থানীয় প্রতিষ্ঠানসমূহের আস্থা",
    subtitle: "আমরা বিশ্বজুড়ে বিভিন্ন এন্টারপ্রাইজ ও স্টার্টআপের জন্য অত্যাধুনিক কাস্টম সফটওয়্যার ডেভেলপমেন্ট, ওয়েব অ্যাপ্লিকেশন এবং স্কেলেবল ডিজিটাল সলিউশন সরবরাহ করে আসছি।",
  },
};

const clientsList = [
  { name: "Siderian", icon: Globe, color: "text-blue-600 bg-blue-500/10 border-blue-500/30" },
  { name: "Xinaps", icon: Cpu, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30" },
  { name: "Homepage Helden", icon: Compass, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/30" },
  { name: "Flamco", icon: Zap, color: "text-red-500 bg-red-500/10 border-red-500/30" },
  { name: "Ace Green", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" },
  { name: "Dutch Dream Group", icon: Landmark, color: "text-amber-500 bg-amber-500/10 border-amber-500/30" },
  { name: "Solibri", icon: Layers, color: "text-sky-500 bg-sky-500/10 border-sky-500/30" },
  { name: "1Q", icon: Database, color: "text-purple-500 bg-purple-500/10 border-purple-500/30" },
  { name: "Design Crave", icon: Sparkles, color: "text-pink-500 bg-pink-500/10 border-pink-500/30" },
  { name: "Crusader", icon: Rocket, color: "text-orange-500 bg-orange-500/10 border-orange-500/30" },
  { name: "Unilever", icon: Briefcase, color: "text-blue-700 bg-blue-600/10 border-blue-600/30" },
  { name: "Nestle", icon: CheckCircle2, color: "text-teal-500 bg-teal-500/10 border-teal-500/30" },
  { name: "BTRC", icon: Network, color: "text-green-600 bg-green-600/10 border-green-600/30" },
  { name: "Scybbr", icon: Cpu, color: "text-cyan-600 bg-cyan-600/10 border-cyan-600/30" },
  { name: "City University", icon: Building, color: "text-red-600 bg-red-600/10 border-red-600/30" },
  { name: "Grameenphone", icon: Globe, color: "text-blue-500 bg-blue-400/10 border-blue-400/30" },
  { name: "OLA Sp. z o. o.", icon: Zap, color: "text-rose-500 bg-rose-500/10 border-rose-500/30" },
  { name: "Nirmhaven", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-600/10 border-emerald-600/30" },
];

export default function LeadershipAndClients() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const tValues = valuesData[isBn ? "bn" : "en"];
  const tClients = clientsData[isBn ? "bn" : "en"];

  return (
    <div className="space-y-36 py-28 bg-[#EEF4F7] dark:bg-[#06101E] transition-colors duration-300">
      
      {/* ================= 1. OUR LEADERSHIP VALUES SECTION ================= */}
      <section className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-5 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#0F9D8F]/40 bg-[#0F9D8F]/10 px-6 py-2.5 text-sm font-black text-[#0F9D8F] dark:text-[#1BB6D4] backdrop-blur-md shadow-lg"
          >
            <Sparkles size={18} className="text-[#FFB627] animate-pulse" />
            <span>{isBn ? "আমাদের মূল চালিকাশক্তি" : "Our Core Strengths"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#071427] dark:text-white leading-[1.15]"
          >
            {isBn ? "আমাদের নেতৃত্ব ও ব্যবসায়িক মূল্যবোধ" : "Our Leadership Values & Core Philosophy"}
          </motion.h2>
        </div>

        {/* 5 Cards Grid with refined spacing and typography */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {tValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center rounded-[2.5rem] border-2 border-[#0F9D8F]/30 dark:border-white/10 bg-white dark:bg-[#0B1F3A] p-8 shadow-2xl transition-all duration-300 group hover:border-[#0F9D8F] dark:hover:border-[#1BB6D4]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] text-white shadow-xl shadow-[#0F9D8F]/30 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} strokeWidth={2} />
                </div>
                
                <h3 className="mt-6 text-xl sm:text-2xl font-black text-[#071427] dark:text-white tracking-tight">
                  {val.title}
                </h3>
                
                <p className="mt-4 text-sm sm:text-base font-bold leading-relaxed text-[#071427]/75 dark:text-white/75">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* ================= 2. TRUSTED BY GLOBAL CLIENTS SECTION ================= */}
      <section className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-5 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#1BB6D4]/40 bg-[#1BB6D4]/10 px-6 py-2.5 text-sm font-black text-[#1BB6D4] backdrop-blur-md shadow-lg"
          >
            <Sparkles size={18} className="text-[#FFB627] animate-pulse" />
            <span>{tClients.eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#071427] dark:text-white leading-[1.15]"
          >
            {tClients.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl font-bold text-[#071427]/75 dark:text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            {tClients.subtitle}
          </motion.p>
        </div>

        {/* Clients Grid with Professional Brand Badge & Name */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientsList.map((client, idx) => {
            const ClientIcon = client.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center gap-3.5 h-36 rounded-3xl border-2 border-[#0F9D8F]/25 dark:border-white/10 bg-white dark:bg-[#0B1F3A] p-5 text-center shadow-2xl transition-all duration-300 hover:border-[#0F9D8F] dark:hover:border-[#1BB6D4] group"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${client.color} transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                  <ClientIcon size={24} strokeWidth={2.2} />
                </div>
                <span className="text-base sm:text-lg font-black tracking-tight text-[#071427]/90 dark:text-white/90 group-hover:text-[#0F9D8F] dark:group-hover:text-[#1BB6D4] transition-colors truncate w-full px-1">
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </section>

    </div>
  );
}