"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Code, 
  Server, 
  Smartphone, 
  Database, 
  Cloud, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiFlutter, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiFigma,
  SiGithub
} from "react-icons/si";

import { useLanguage } from "@/components/shared/LanguageProvider";

type TechCategory = "all" | "frontend" | "backend" | "mobile" | "database" | "cloud";
type TechGroup = Exclude<TechCategory, "all">;

type TechItem = {
  name: string;
  icon: React.ElementType;
  brandColor: string;
  category: TechGroup;
  levelBn: string;
  levelEn: string;
  descBn: string;
  descEn: string;
};

const categoryMeta: Record<
  TechGroup,
  { tint: string; icon: typeof Code; labelBn: string; labelEn: string }
> = {
  frontend: { tint: "#0F9D8F", icon: Code, labelBn: "ফ্রন্টএন্ড", labelEn: "Frontend" },
  backend: { tint: "#1BB6D4", icon: Server, labelBn: "ব্যাকএন্ড", labelEn: "Backend" },
  mobile: { tint: "#FFB627", icon: Smartphone, labelBn: "মোবাইল অ্যাপ", labelEn: "Mobile" },
  database: { tint: "#7C3AED", icon: Database, labelBn: "ডাটাবেস", labelEn: "Database" },
  cloud: { tint: "#EC4899", icon: Cloud, labelBn: "ক্লাউড ও টুলস", labelEn: "Cloud & Tools" },
};

const technologies: TechItem[] = [
  {
    name: "React.js",
    icon: SiReact,
    brandColor: "#61DAFB",
    category: "frontend",
    levelBn: "এডভান্সড",
    levelEn: "Advanced",
    descBn: "ডায়নামিক ও ইন্টারেক্টিভ ইউজার ইন্টারফেস তৈরির জন্য সেরা লাইব্রেরি।",
    descEn: "Best library for building dynamic and interactive user interfaces.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    brandColor: "#000000",
    category: "frontend",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "হাই-পারফরম্যান্স, এসইও-ফ্রেন্ডলি এবং সার্ভার-রেন্ডার্ড আধুনিক ওয়েব অ্যাপ।",
    descEn: "High-performance, SEO-friendly, and server-rendered modern web apps.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    brandColor: "#3178C6",
    category: "frontend",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "টাইপ-সেফ কোডবেস নিশ্চিত করে বাগ-মুক্ত এবং স্কেলেবল ডেভেলপমেন্ট।",
    descEn: "Ensures type-safe, bug-free, and scalable software development.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    brandColor: "#06B6D4",
    category: "frontend",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "মডার্ন, রেস্পন্সিভ এবং ফাস্ট ইউজার ইন্টারফেস ডিজাইন ফ্রেমওয়ার্ক।",
    descEn: "Modern, responsive, and ultra-fast UI design framework.",
  },
  {
    name: "HTML5 & CSS3",
    icon: SiHtml5,
    brandColor: "#E34F26",
    category: "frontend",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "আধুনিক ওয়েবের মূল স্ট্রাকচার, সেমান্টিক এলিমেন্ট ও লেআউট।",
    descEn: "Semantic markup and modern styling for web applications.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    brandColor: "#339933",
    category: "backend",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "হাই-পারফরম্যান্স রিয়েল-টাইম ব্যাকএন্ড ও এপিআই ডেভেলপমেন্ট।",
    descEn: "High-performance real-time backend and API development.",
  },
  {
    name: "Python",
    icon: SiPython,
    brandColor: "#3776AB",
    category: "backend",
    levelBn: "এডভান্সড",
    levelEn: "Advanced",
    descBn: "এআই ইন্টিগ্রেশন এবং ফাস্ট ব্যাকএন্ড সার্ভিস তৈরির ল্যাঙ্গুয়েজ।",
    descEn: "Versatile language for backend services and AI integration.",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    brandColor: "#02569B",
    category: "mobile",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "একই কোডবেস দিয়ে অ্যান্ড্রয়েড ও আইওএস (iOS) অ্যাপ তৈরি।",
    descEn: "Cross-platform Android and iOS mobile app development.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    brandColor: "#47A248",
    category: "database",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "ফাস্ট এবং ফ্লেক্সিবল নোএসকিউএল (NoSQL) ডাটাবেস সলিউশন।",
    descEn: "Fast and flexible NoSQL database solution for modern apps.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    brandColor: "#4169E1",
    category: "database",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "শক্তিশালী, সিক্যুর এবং স্কেলেবল রিলেশনাল ডাটাবেস ম্যানেজমেন্ট।",
    descEn: "Powerful, highly secure, and scalable relational database management.",
  },
  {
    name: "Docker & AWS",
    icon: SiDocker,
    brandColor: "#2496ED",
    category: "cloud",
    levelBn: "এডভান্সড",
    levelEn: "Advanced",
    descBn: "কন্টেইনারাইজেশন, ক্লাউড হোস্টিং এবং স্কেল অটোমেশন।",
    descEn: "Streamlines application development, containerization & deployment.",
  },
  {
    name: "Figma & GitHub",
    icon: SiFigma,
    brandColor: "#F24E1E",
    category: "cloud",
    levelBn: "এক্সপার্ট",
    levelEn: "Expert",
    descBn: "ইউআই/ইউএক্স (UI/UX) ডিজাইন এবং কোড কোলাবোরেশন প্লাটফর্ম।",
    descEn: "UI/UX design, prototyping, version control and code collaboration.",
  },
];

const filters: { id: TechCategory; labelBn: string; labelEn: string }[] = [
  { id: "all", labelBn: "সকল টেকনোলজি", labelEn: "All Tech" },
  { id: "frontend", labelBn: "ফ্রন্টএন্ড", labelEn: "Frontend" },
  { id: "backend", labelBn: "ব্যাকএন্ড", labelEn: "Backend" },
  { id: "mobile", labelBn: "মোবাইল অ্যাপ", labelEn: "Mobile" },
  { id: "database", labelBn: "ডাটাবেস", labelEn: "Database" },
  { id: "cloud", labelBn: "ক্লাউড ও টুলস", labelEn: "Cloud & Tools" },
];

export default function TechStackSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeCategory, setActiveCategory] = useState<TechCategory>("all");

  const filteredTech = activeCategory === "all"
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-[#F6F9FA] py-28 transition-colors duration-300 dark:bg-[#0B1F3A]">
      
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F9D8F]/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] shadow-sm dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
            <Cpu size={14} />
            {isBn ? "আমাদের টেক স্ট্যাক ও টুলস" : "Our Tech Stack & Tools"}
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.3] tracking-normal text-[#0B1F3A] dark:text-white sm:text-4xl lg:text-5xl">
            {isBn
              ? "সর্বাধুনিক টেকনোলজি ব্যবহার করে তৈরি করি প্রিমিয়াম সলিউশন"
              : "Building Premium Solutions With Cutting-Edge Tech"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75 sm:text-lg">
            {isBn
              ? "আপনার প্রজেক্টের সর্বোচ্চ গতি, সিকিউরিটি এবং স্কেলেবিলিটি নিশ্চিত করতে আমরা বাজারের সেরা টেকনোলজিগুলো ব্যবহার করি।"
              : "We leverage industry-leading technologies to ensure ultimate speed, security, and scalability for your projects."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => {
            const isActive = activeCategory === f.id;
            const meta = f.id === "all" ? null : categoryMeta[f.id];
            const count = technologies.filter((t) => f.id === "all" || t.category === f.id).length;
            const Icon = meta?.icon ?? Layers;

            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveCategory(f.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold outline-none transition-all duration-300 ${
                  isActive
                    ? "border-transparent text-white shadow-lg shadow-[#0F9D8F]/25 scale-105"
                    : "border-[#0B1F3A]/10 bg-white text-[#0B1F3A]/75 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10"
                }`}
                style={
                  isActive
                    ? {
                        background: meta
                          ? meta.tint
                          : "linear-gradient(90deg,#0F9D8F,#1BB6D4)",
                      }
                    : undefined
                }
              >
                <Icon size={16} style={!isActive && meta ? { color: meta.tint } : undefined} />
                {isBn ? f.labelBn : f.labelEn}
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-[#0B1F3A]/10 text-[#0B1F3A]/70 dark:bg-white/10 dark:text-white/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3 Columns Grid Layout with Hover Upward Slide & Text Centering */}
        <motion.div 
          layout 
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredTech.map((tech, idx) => {
              const meta = categoryMeta[tech.category];
              const BrandIcon = tech.icon;

              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#0B1F3A]/10 bg-white p-8 sm:p-10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-[#0F2A4A]"
                >
                  {/* Bottom Upward Color Slide Background Overlay on Hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-95 z-0"
                    style={{
                      background: `linear-gradient(135deg, ${meta.tint}dd, ${tech.brandColor}99)`,
                    }}
                  />

                  {/* Card Main Content Wrapper */}
                  <div className="relative z-10 flex flex-col h-full justify-between transition-all duration-500 group-hover:items-center group-hover:text-center">
                    
                    <div>
                      {/* Header: Category Badge + Rating */}
                      <div className="flex items-center justify-between mb-6 w-full transition-all duration-300 group-hover:justify-center">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-bold border transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B1F3A] group-hover:border-transparent"
                          style={{
                            color: meta.tint,
                            borderColor: `${meta.tint}40`,
                            backgroundColor: `${meta.tint}10`,
                          }}
                        >
                          <meta.icon size={14} />
                          {isBn ? meta.labelBn : meta.labelEn}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F9D8F] dark:text-[#1BB6D4] transition-colors duration-300 group-hover:text-white">
                          <CheckCircle2 size={15} />
                          {isBn ? tech.levelBn : tech.levelEn}
                        </span>
                      </div>

                      {/* Content: Icon & Title */}
                      <div className="flex items-center gap-5 transition-all duration-500 group-hover:flex-col group-hover:text-center">
                        <div
                          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg"
                          style={{
                            borderColor: `${meta.tint}30`,
                            backgroundColor: `${meta.tint}10`,
                          }}
                        >
                          <BrandIcon className="text-4xl sm:text-5xl" style={{ color: tech.brandColor }} />
                        </div>

                        <div className="space-y-1.5 min-w-0">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white group-hover:text-white transition-colors truncate">
                            {tech.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-[#0B1F3A]/60 dark:text-white/60 group-hover:text-white/90">
                            {isBn ? "প্রোডাকশন রেডি" : "Production-Ready"}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 dark:text-white/80 group-hover:text-white transition-colors duration-300">
                        {isBn ? tech.descBn : tech.descEn}
                      </p>
                    </div>

                    {/* Bottom Footer Indicator */}
                    <div className="mt-8 pt-5 border-t border-[#0B1F3A]/5 dark:border-white/5 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B1F3A]/60 dark:text-white/60 group-hover:border-white/20 group-hover:text-white w-full">
                      <span className="flex items-center gap-1.5">
                        <Sparkles size={15} className="text-[#0F9D8F] group-hover:text-white" />
                        {isBn ? "হাই-পারফরম্যান্স" : "High Performance"}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform" style={{ color: meta.tint }}>
                        →
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}