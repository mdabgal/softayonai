"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Code2,
  LayoutDashboard,
  Smartphone,
  Search,
  Headset,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

type ServiceItem = {
  icon: typeof Globe;
  tint: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  featuresBn: string[];
  featuresEn: string[];
  href: string;
};

const featuredServices: ServiceItem[] = [
  {
    icon: Globe,
    tint: "#0F9D8F",
    titleBn: "ওয়েবসাইট ডেভেলপমেন্ট",
    titleEn: "Website Development",
    descBn: "আপনার ব্যবসার গ্রোথ এবং অনলাইন উপস্থিতি নিশ্চিত করতে আমরা তৈরি করি ফাস্ট, সম্পূর্ণ সিক্যুর এবং এসইও-ফ্রেন্ডলি আধুনিক ওয়েবসাইট।",
    descEn: "We build fast, highly secure, and SEO-friendly modern websites designed to maximize your online business presence.",
    featuresBn: ["ব্লাড-ফাস্ট লোডিং স্পিড", "ফুল মোবাইল রেস্পন্সিভ", "অ্যাডভান্সড এসইও অপ্টিমাইজড"],
    featuresEn: ["Lightning Fast Speed", "Fully Mobile Responsive", "Advanced SEO Optimized"],
    href: "/services/web-development",
  },
  {
    icon: Code2,
    tint: "#1BB6D4",
    titleBn: "কাস্টম সফটওয়্যার সলিউশন",
    titleEn: "Custom Software Solutions",
    descBn: "আপনার ব্যবসার ইউনিক ওয়ার্কফ্লো এবং প্রয়োজনীয়তা নিখুঁতভাবে পূরণ করতে আমরা ডেভেলপ করি স্কেলেবল ড্যাশবোর্ড ও এন্টারপ্রাইজ ম্যানেজমেন্ট সিস্টেম।",
    descEn: "Scalable dashboards and enterprise management systems built precisely around your unique business workflow.",
    featuresBn: ["নিরাপদ ও স্কেলেবল আর্কিটেকচার", "কাস্টম বিজনেস লজিক", "ডেডিকেটেড কন্ট্রোল প্যানেল"],
    featuresEn: ["Secure & Scalable", "Custom Business Logic", "Dedicated Control Panel"],
    href: "/services/custom-software",
  },
  {
    icon: Smartphone,
    tint: "#FFB627",
    titleBn: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    titleEn: "Mobile App Development",
    descBn: "অ্যান্ড্রয়েড এবং আইওএস (iOS) ব্যবহারকারীদের জন্য আকর্ষণীয়, ইউজার-ফ্রেন্ডলি এবং হাই-পারফরম্যান্স মোবাইল অ্যাপ্লিকেশন তৈরি করি।",
    descEn: "Crafting engaging, user-friendly, and high-performance mobile applications for both Android and iOS platforms.",
    featuresBn: ["ক্রস-প্লাটফর্ম সাপোর্ট", "স্মুথ ইউজার ইন্টারফেস", "রিয়েল-টাইম নোটিফিকেশন"],
    featuresEn: ["Cross-Platform Support", "Smooth User Interface", "Real-time Notifications"],
    href: "/services/mobile-app",
  },
  {
    icon: LayoutDashboard,
    tint: "#7C3AED",
    titleBn: "রেডি-মেড প্রোডাক্টস",
    titleEn: "Ready-Made Products",
    descBn: "দীর্ঘ সেটআপ ও ডেভেলপমেন্টের ঝামেলা ছাড়াই প্রি-বিল্ড প্রিমিয়াম সলিউশনগুলো আজই আপনার বিজনেসে ব্যবহার শুরু করুন।",
    descEn: "Start using pre-built reliable solutions in your business today without any prolonged setup or dev hassle.",
    featuresBn: ["তক্ষণাৎ ব্যবহারযোগ্য", "সাশ্রয়ী বাজেট সলিউশন", "সহজ মেইনটেন্যান্স ও আপডেট"],
    featuresEn: ["Instant Setup Ready", "Cost-Effective Solution", "Easy Maintenance & Updates"],
    href: "/services/ready-products",
  },
  {
    icon: Search,
    tint: "#EC4899",
    titleBn: "এসইও ও ডিজিটাল মার্কেটিং",
    titleEn: "SEO & Digital Marketing",
    descBn: "গুগলের সার্চ রেজাল্টে আপনার ওয়েবসাইটকে র‍্যাংক করিয়ে অর্গানিক ট্রাফিক এবং কাঙ্ক্ষিত কাস্টমার সেলস বহুগুণ বাড়িয়ে তুলুন।",
    descEn: "Rank your website higher on search engines to drive organic traffic and maximize your customer sales.",
    featuresBn: ["অন-পেজ ও অফ-পেজ এসইও", "কিওয়ার্ড র‍্যাংকিং স্ট্র্যাটেজি", "লিড জেনারেশন ক্যাম্পেইন"],
    featuresEn: ["On/Off-Page SEO", "Keyword Ranking Strategy", "Lead Generation Campaigns"],
    href: "/services/digital-marketing",
  },
  {
    icon: Headset,
    tint: "#10B981",
    titleBn: "২৪/৭ মেইনটেন্যান্স ও সাপোর্ট",
    titleEn: "24/7 Maintenance & Support",
    descBn: "আপনার ওয়েবসাইট ও সফটওয়্যারের যেকোনো টেকনিক্যাল সমস্যায় আমাদের ডেডিকেটেড এক্সপার্ট টিম সবসময় পাশে রয়েছে।",
    descEn: "Our dedicated expert team is always available around the clock to resolve any technical issues instantly.",
    featuresBn: ["রিয়েল-টাইম মনিটরিং", "সিকিউরিটি আপডেট ও ব্যাকআপ", "ইনস্ট্যান্ট ট্রাবলশুটিং"],
    featuresEn: ["Real-time Monitoring", "Security Updates & Backups", "Instant Troubleshooting"],
    href: "/services/support",
  },
];

export default function FeaturedServices() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F6F9FA] py-28 transition-colors duration-300 dark:bg-[#0B1F3A]"
    >
      {/* Section background glows */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-[#1BB6D4]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] shadow-sm dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
            <Zap size={14} />
            {isBn ? "ফিচারড সেবাসমূহ" : "Featured Services"}
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.3] tracking-normal text-[#0B1F3A] dark:text-white sm:text-4xl sm:leading-[1.35] lg:text-5xl">
            {isBn
              ? "আপনার ব্যবসার জন্য সেরা ডিজিটাল সলিউশন"
              : "Digital Solutions Crafted For Your Business"}
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75 sm:text-lg">
            {isBn
              ? "আমরা সর্বাধুনিক টেকনোলজি এবং সিকিউরিটি নিশ্চিত করে আপনার ব্যবসার পূর্ণাঙ্গ গ্রোথ ত্বরান্বিত করি।"
              : "We leverage cutting-edge technologies and security to accelerate your complete business growth."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#0B1F3A]/10 bg-white p-8 shadow-[0_8px_30px_rgba(11,31,58,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--tint)] hover:shadow-[0_24px_60px_-12px_var(--tint)] dark:border-white/10 dark:bg-[#0F2A4A]/60 sm:p-10"
                style={{ ["--tint" as string]: service.tint }}
              >
                {/* ===== Card background layers ===== */}

                {/* 1. Tint gradient wash */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${service.tint}14 0%, transparent 45%, transparent 70%, ${service.tint}0D 100%)`,
                  }}
                />

                {/* 2. Dot grid, fades toward the bottom */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-35"
                  style={{
                    backgroundImage: `radial-gradient(${service.tint}55 1px, transparent 1px)`,
                    backgroundSize: "18px 18px",
                    maskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 55%)",
                  }}
                />

                {/* 3. Top-right corner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-70 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"
                  style={{ backgroundColor: `${service.tint}30` }}
                />

                {/* 4. Bottom-left glow (appears on hover) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: `${service.tint}22` }}
                />

                {/* 5. Top accent line, extends on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-[0.3] transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${service.tint}, transparent)`,
                  }}
                />

                {/* 6. Shine sweep on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full dark:via-white/10"
                />

                {/* ===== Content (above background) ===== */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{
                      borderColor: `${service.tint}40`,
                      backgroundColor: `${service.tint}15`,
                      color: service.tint,
                    }}
                  >
                    <Icon size={32} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold leading-snug text-[#0B1F3A] dark:text-white">
                      {isBn ? service.titleBn : service.titleEn}
                    </h3>
                    <p className="text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75">
                      {isBn ? service.descBn : service.descEn}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 pt-2">
                    {(isBn ? service.featuresBn : service.featuresEn).map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-semibold text-[#0B1F3A]/85 dark:text-white/85"
                      >
                        <ShieldCheck
                          size={18}
                          className="shrink-0"
                          style={{ color: service.tint }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="relative z-10 mt-8 border-t border-[#0B1F3A]/10 pt-6 dark:border-white/10">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group-hover:text-[var(--tint)]"
                    style={{ color: service.tint }}
                  >
                    {isBn ? "বিস্তারিত জানুন" : "Learn More"}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}