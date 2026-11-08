"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  image: string;
  linkedin: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Per Einar Myklebust",
    role: "Chief Customer Officer & Co-founder",
    location: "Oslo Office",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:per@example.com",
  },
  {
    name: "Ferdous Mahmud Shaon",
    role: "Managing Director",
    location: "Dhaka Office",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:shaon@example.com",
  },
  {
    name: "Tom Handegård",
    role: "CTO & Co-founder",
    location: "Oslo Office",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:tom@example.com",
  },
  {
    name: "Jens Wahlberg",
    role: "Chief Commercial Officer & Partner",
    location: "Oslo Office",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:jens@example.com",
  },
  {
    name: "Alexander Selheim",
    role: "Senior Sales Advisor",
    location: "Bergen Office",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:alexander@example.com",
  },
  {
    name: "Petter Irgens Gustafson",
    role: "CEO & Partner",
    location: "Oslo Office",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:petter@example.com",
  },
];

const copy = {
  en: {
    title: "Our Team",
    intro:
      "The people who lead SoftAyona. They plan the work, guide the engineers and stay close to every client we build for.",
    people: "Leaders",
    offices: "Offices",
    ctaTitle: "Have a product in mind? Let's build it together.",
    ctaText:
      "Tell us what you are working on. We will reply within one business day with a clear next step.",
    ctaPrimary: "Contact us",
    ctaSecondary: "See our services",
  },
  bn: {
    title: "আমাদের টিম",
    intro:
      "যারা সফটআয়নাকে নেতৃত্ব দেন। তারা কাজের পরিকল্পনা করেন, ইঞ্জিনিয়ারদের গাইড করেন এবং প্রতিটি ক্লায়েন্টের পাশে থাকেন।",
    people: "লিডার",
    offices: "অফিস",
    ctaTitle: "মাথায় কোনো প্রোডাক্ট আছে? চলুন একসাথে বানাই।",
    ctaText:
      "আপনি কী নিয়ে কাজ করছেন আমাদের জানান। এক কর্মদিবসের মধ্যে আমরা স্পষ্ট পরবর্তী ধাপসহ উত্তর দেব।",
    ctaPrimary: "যোগাযোগ করুন",
    ctaSecondary: "আমাদের সার্ভিস দেখুন",
  },
};

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

interface MemberProps {
  m: TeamMember;
  index: number;
}

function Member({ m, index }: MemberProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group lg:[&:nth-child(3n+2)]:translate-y-14"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#0B1F3A] shadow-[0_25px_60px_-25px_rgba(7,20,39,0.55)]">
        <Image
          src={m.image}
          alt={m.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0F9D8F]/30 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071427]/55 via-transparent to-transparent" />
        <span className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#FFB627] transition-all duration-700 group-hover:w-full" />
      </div>

      <div className="pt-7">
        <h3 className="text-2xl font-bold tracking-tight text-[#071427] dark:text-white sm:text-[1.7rem]">
          {m.name}
        </h3>
        <p className="mt-2 text-lg leading-snug text-[#071427]/75 dark:text-white/75">
          {m.role}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#071427]/10 pt-5 dark:border-white/10">
          <p className="flex items-center gap-2 text-base font-semibold text-[#0F9D8F] dark:text-[#1BB6D4]">
            <MapPin size={18} />
            {m.location}
          </p>

          <div className="flex items-center gap-2">
            <a
              href={m.linkedin}
              aria-label={`${m.name} on LinkedIn`}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#071427]/15 text-[#071427] transition-colors hover:border-[#0F9D8F] hover:bg-[#0F9D8F] hover:text-white dark:border-white/20 dark:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href={m.email}
              aria-label={`Email ${m.name}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#071427]/15 text-[#071427] transition-colors hover:border-[#0F9D8F] hover:bg-[#0F9D8F] hover:text-white dark:border-white/20 dark:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function OurTeamSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = copy[isBn ? "bn" : "en"];

  const officeCount = new Set(teamMembers.map((m) => m.location)).size;
  const toBn = (n: number | string) =>
    isBn ? String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d, 10)]) : String(n);

  return (
    <>
      {/* ================= Team ================= */}
      <section className="relative overflow-hidden bg-[#EEF4F7] py-24 transition-colors duration-300 dark:bg-[#06101E] lg:py-32">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
          <div className="mb-20 grid items-end gap-10 lg:mb-28 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-10 rounded-full bg-[#FFB627]" />
                <span className="h-[3px] w-5 rounded-full bg-[#0F9D8F]" />
              </div>
              <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#071427] dark:text-white sm:text-6xl xl:text-7xl">
                {t.title}
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-[1.75] text-[#071427]/75 dark:text-white/75 sm:text-xl">
                {t.intro}
              </p>
              <div className="mt-8 flex gap-12">
                <div>
                  <p className="text-5xl font-bold leading-none tracking-tight text-[#071427] dark:text-white">
                    {toBn(teamMembers.length)}
                  </p>
                  <p className="mt-3 text-lg text-[#071427]/65 dark:text-white/65">
                    {t.people}
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold leading-none tracking-tight text-[#071427] dark:text-white">
                    {toBn(officeCount)}
                  </p>
                  <p className="mt-3 text-lg text-[#071427]/65 dark:text-white/65">
                    {t.offices}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-14">
            {teamMembers.map((m, i) => (
              <Member key={m.name} m={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= Closing CTA (Soft Gradient Mesh & Modern Design) ================= */}
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
              href="/services"
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
    </>
  );
}