"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, FolderGit2, Plus } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

type ProjectCategory = "all" | "web" | "software" | "app";
type ProjectType = Exclude<ProjectCategory, "all">;

type Project = {
  id: number;
  category: ProjectType;
  image: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  tags: string[];
  liveUrl: string;
};

const categoryMeta: Record<
  ProjectType,
  { tint: string; labelBn: string; labelEn: string }
> = {
  web: { tint: "#0F9D8F", labelBn: "ওয়েবসাইট", labelEn: "Website" },
  software: { tint: "#1BB6D4", labelBn: "সফটওয়্যার", labelEn: "Software" },
  app: { tint: "#FFB627", labelBn: "মোবাইল অ্যাপ", labelEn: "Mobile App" },
};

const projects: Project[] = [
  {
    id: 1,
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    titleBn: "ই-কমার্স প্লাটফর্ম ড্যাশবোর্ড",
    titleEn: "E-Commerce Platform & Dashboard",
    descBn: "আধুনিক অনলাইন শপের জন্য সম্পূর্ণ রেস্পন্সিভ ওয়েবসাইট এবং ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম।",
    descEn: "Fully responsive e-commerce platform with integrated real-time inventory management.",
    tags: ["Next.js", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
  },
  {
    id: 2,
    category: "software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    titleBn: "হাসপাতাল ম্যানেজমেন্ট সফটওয়্যার",
    titleEn: "Hospital Management ERP",
    descBn: "রোগীর রেকর্ড, অ্যাপয়েন্টমেন্ট এবং বিলিং ট্র্যাকিংয়ের জন্য কাস্টম এন্টারপ্রাইজ সফটওয়্যার।",
    descEn: "Custom enterprise software for patient records, appointments, and medical billing.",
    tags: ["React", "Python", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    id: 3,
    category: "app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    titleBn: "স্মার্ট লজিস্টিকস রাইডার অ্যাপ",
    titleEn: "Smart Logistics Delivery App",
    descBn: "রিয়েল-টাইম জিপিএস ট্র্যাকিং এবং দ্রুত ডেলিভারি ম্যানেজমেন্ট মোবাইল অ্যাপ্লিকেশন।",
    descEn: "Cross-platform mobile application with real-time GPS tracking for riders.",
    tags: ["Flutter", "Firebase", "Google Maps"],
    liveUrl: "#",
  },
  {
    id: 4,
    category: "web",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    titleBn: "করপোরেট রিয়েল এস্টেট পোর্টাল",
    titleEn: "Corporate Real Estate Portal",
    descBn: "প্রপার্টি লিস্টিং, ভার্চুয়াল ট্যুর এবং ক্লায়েন্ট লিড জেনারেশন ওয়েবসাইট।",
    descEn: "High-performance real estate listing portal with virtual tour integrations.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
  },
  {
    id: 5,
    category: "software",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    titleBn: "স্কুল ও কলেজ পিওএস ও ফি সিস্টেম",
    titleEn: "School Management & Fee Portal",
    descBn: "শিক্ষার্থীদের অ্যাকাউন্টস, রেজাল্ট এবং অন-লাইন ফি আদায়ের স্মার্ট সফটওয়্যার।",
    descEn: "Comprehensive portal for student records, automated fee collection, and gradebook.",
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "#",
  },
  {
    id: 6,
    category: "app",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=80",
    titleBn: "ফিনটেক ডিজিটাল ওয়ালেট অ্যাপ",
    titleEn: "Fintech Mobile Wallet",
    descBn: "নিরাপদ লেনদেন এবং ইনস্ট্যান্ট বিল পেমেন্টের কাস্টম মোবাইল ওয়ালেট।",
    descEn: "Secure digital payment wallet mobile app with multi-factor authentication.",
    tags: ["React Native", "Node.js", "Redis"],
    liveUrl: "#",
  },
];

const categories: { id: ProjectCategory; labelBn: string; labelEn: string }[] = [
  { id: "all", labelBn: "সব প্রজেক্ট", labelEn: "All Projects" },
  { id: "web", labelBn: "ওয়েবসাইট", labelEn: "Websites" },
  { id: "software", labelBn: "সফটওয়্যার", labelEn: "Software" },
  { id: "app", labelBn: "মোবাইল অ্যাপ", labelEn: "Mobile Apps" },
];

const filterProjects = (cat: ProjectCategory) =>
  cat === "all" ? projects : projects.filter((p) => p.category === cat);

export default function PortfolioSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [activeId, setActiveId] = useState<number>(projects[0].id);

  const filteredProjects = filterProjects(activeCategory);

  const handleCategory = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setActiveId(filterProjects(cat)[0].id);
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#F6F9FA] py-28 transition-colors duration-300 dark:bg-[#0B1F3A]"
    >
      {/* Background accent glows */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-[#1BB6D4]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] shadow-sm dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
            <FolderGit2 size={14} />
            {isBn ? "আমাদের সাম্প্রতিক কাজসমূহ" : "Our Recent Work"}
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.3] tracking-normal text-[#0B1F3A] dark:text-white sm:text-4xl lg:text-5xl">
            {isBn
              ? "সাফল্যের সাথে ডেলিভারি করা সেরা প্রজেক্টসমূহ"
              : "Successfully Delivered Featured Projects"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75 sm:text-lg">
            {isBn
              ? "আমাদের তৈরি করা কিছু বাস্তবসম্মত ওয়েবসাইট এবং কাস্টম সফটওয়্যার সলিউশনের নমুনা দেখুন।"
              : "Explore a selection of real-world web, software, and mobile applications crafted by our expert team."}
          </p>
        </div>

        {/* Segmented filter with sliding pill */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full border border-[#0B1F3A]/10 bg-white/80 p-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = filterProjects(cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategory(cat.id)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-bold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#0F9D8F] ${
                    isActive
                      ? "text-white"
                      : "text-[#0B1F3A]/70 hover:text-[#0B1F3A] dark:text-white/70 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {isBn ? cat.labelBn : cat.labelEn}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "bg-[#0B1F3A]/10 text-[#0B1F3A]/70 dark:bg-white/10 dark:text-white/70"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expanding showcase panels */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-14 flex flex-col gap-3 lg:h-[640px] lg:flex-row"
        >
          {filteredProjects.map((project) => {
            const isActive = project.id === activeId;
            const meta = categoryMeta[project.category];
            const title = isBn ? project.titleBn : project.titleEn;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setActiveId(project.id)}
                className={`group relative min-w-0 overflow-hidden rounded-3xl border bg-[#0B1F3A] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-auto ${
                  isActive
                    ? "h-[500px] lg:flex-[6]"
                    : "h-[92px] lg:flex-[1]"
                }`}
                style={{
                  borderColor: isActive ? `${meta.tint}80` : "rgba(255,255,255,0.1)",
                  boxShadow: isActive
                    ? `0 30px 70px -25px ${meta.tint}90`
                    : "0 10px 30px -15px rgba(11,31,58,0.4)",
                }}
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={`object-cover object-top transition-all duration-700 ${
                    isActive ? "scale-100 opacity-100" : "scale-110 opacity-40"
                  }`}
                />

                {/* Overlays */}
                <div
                  aria-hidden
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/55 to-transparent opacity-100"
                      : "bg-[#0B1F3A]/70 opacity-100"
                  }`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    opacity: isActive ? 1 : 0,
                    background: `radial-gradient(circle at 0% 100%, ${meta.tint}40, transparent 55%)`,
                  }}
                />

                {/* Inactive: collapsed label */}
                <div
                  className={`absolute inset-0 z-[1] flex items-center gap-4 px-6 transition-opacity duration-500 lg:items-end lg:justify-start lg:px-0 lg:pb-8 ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                  }`}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border backdrop-blur-sm lg:absolute lg:left-1/2 lg:top-6 lg:-translate-x-1/2"
                    style={{
                      borderColor: `${meta.tint}80`,
                      backgroundColor: `${meta.tint}25`,
                      color: meta.tint,
                    }}
                  >
                    <Plus size={18} />
                  </span>
                  <span className="line-clamp-1 text-base font-bold text-white lg:absolute lg:bottom-8 lg:left-1/2 lg:line-clamp-none lg:-translate-x-1/2 lg:whitespace-nowrap lg:text-lg lg:[writing-mode:vertical-rl] lg:rotate-180">
                    {title}
                  </span>
                </div>

                {/* Active: full content */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-[2] p-6 transition-all duration-500 sm:p-8 lg:w-[620px] lg:p-10 ${
                    isActive
                      ? "translate-y-0 opacity-100 delay-300"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <div className="space-y-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md"
                      style={{
                        color: meta.tint,
                        borderColor: `${meta.tint}66`,
                        backgroundColor: `${meta.tint}22`,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: meta.tint }}
                      />
                      {isBn ? meta.labelBn : meta.labelEn}
                    </span>

                    <h3 className="text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl">
                      {title}
                    </h3>

                    <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                      {isBn ? project.descBn : project.descEn}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0B1F3A] shadow-lg transition-colors hover:bg-[#0F9D8F] hover:text-white"
                      >
                        {isBn ? "লাইভ ডেমো দেখুন" : "View Live Demo"}
                        <ExternalLink size={15} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-white/90 transition-colors hover:text-white"
                        style={{ textDecorationColor: meta.tint }}
                      >
                        <span className="underline decoration-2 underline-offset-4">
                          {isBn ? "বিস্তারিত কেইস স্টাডি" : "Read Case Study"}
                        </span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Keyboard / tap target for collapsed panels */}
                {!isActive && (
                  <button
                    type="button"
                    aria-label={title}
                    aria-expanded={false}
                    onClick={() => setActiveId(project.id)}
                    onFocus={() => setActiveId(project.id)}
                    className="absolute inset-0 z-10 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0F9D8F]"
                  />
                )}
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}