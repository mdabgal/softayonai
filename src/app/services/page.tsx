"use client";

import Navbar from "@/components/shared/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import CoreServicesSection from "@/components/services/CoreServicesSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";
import HowWeWorkSection from "@/components/services/HowWeWorkSection";
import TechStackSection from "@/components/home/TechStackSection";
import WhyChooseUsSection from "@/components/services/WhyChooseUsSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import ProjectEstimationSection from "@/components/services/ProjectEstimationSection";
import Footer from "@/components/shared/Footer";

const ctaCopy = {
  en: {
    ctaTitle: "Have a product in mind? Let's build it together.",
    ctaText:
      "Tell us what you are working on. We will reply within one business day with a clear next step.",
    ctaPrimary: "Contact us",
    ctaSecondary: "Back to Home",
  },
  bn: {
    ctaTitle: "মাথায় কোনো প্রোডাক্ট আছে? চলুন একসাথে বানাই।",
    ctaText:
      "আপনি কী নিয়ে কাজ করছেন আমাদের জানান। এক কর্মদিবসের মধ্যে আমরা স্পষ্ট পরবর্তী ধাপসহ উত্তর দেব।",
    ctaPrimary: "যোগাযোগ করুন",
    ctaSecondary: "হোমে ফিরে যান",
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = ctaCopy[isBn ? "bn" : "en"];

  return (
    <>
      {/* Navbar Integration */}
      <Navbar />

      <main className="min-h-screen bg-[#EEF4F7] dark:bg-[#06101E]">
        {/* 1. Services Hero Section */}
        <ServicesHero />

        {/* 2. Core / Main Services Grid Section */}
        <CoreServicesSection />

        <HowWeWorkSection/>
<WhyChooseUsSection/>
<IndustriesSection/>
<ProjectEstimationSection/>
        {/* 3. Bottom Closing CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#E2EDF3] via-[#EEF4F7] to-[#F7FAFC] dark:from-[#08182B] dark:via-[#0B1F3A] dark:to-[#050D18] py-24 transition-colors duration-300 lg:py-32">
          {/* Background Glowing Ambient Elements */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#0F9D8F]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#1BB6D4]/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto grid max-w-[1520px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#071427] dark:text-white sm:text-5xl xl:text-6xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-[1.75] text-[#071427]/75 dark:text-white/80 sm:text-xl">
                {t.ctaText}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-4 rounded-xl bg-[#FFB627] px-7 py-5 text-lg font-bold text-[#071427] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {t.ctaPrimary}
                <ArrowUpRight
                  size={22}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/"
                className="group inline-flex items-center justify-between gap-4 rounded-xl border border-gray-300/80 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-md px-7 py-5 text-lg font-semibold text-[#071427] dark:text-white transition-all duration-300 hover:border-[#0F9D8F] hover:bg-white dark:hover:bg-white/10"
              >
                {t.ctaSecondary}
                <ArrowUpRight
                  size={22}
                  className="text-[#0F9D8F] dark:text-[#1BB6D4] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Integration (যদি আপনার আলাদা Footer কম্পোনেন্ট থাকে তবে এখানে কল করতে পারেন) */}
      <Footer />
    </>
  );
}