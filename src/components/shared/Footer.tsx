"use client";

import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Globe
} from "lucide-react";

import { useLanguage } from "@/components/shared/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#EEF4F7] text-[#071427] pt-20 pb-10 transition-colors duration-300 dark:bg-[#06101E] dark:text-white border-t-2 border-[#0F9D8F]/30 dark:border-white/10">
      
      {/* Rich Deep Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/25 blur-[140px] dark:bg-[#0F9D8F]/20" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/25 blur-[140px] dark:bg-[#1BB6D4]/20" />
      <div className="pointer-events-none absolute left-1/3 -bottom-20 h-[380px] w-[380px] rounded-full bg-[#FFB627]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Darker & Vibrant Newsletter Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#0F9D8F]/40 bg-white p-8 sm:p-12 shadow-2xl shadow-[#0F9D8F]/15 dark:border-white/15 dark:bg-[#0B1F3A]">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/20 px-4 py-1.5 text-xs font-black text-[#0B8478] border border-[#0F9D8F]/40 dark:bg-[#0F9D8F]/25 dark:text-[#1BB6D4]">
                <Globe size={14} />
                {isBn ? "আমাদের নিউজলেটারে যুক্ত থাকুন" : "STAY CONNECTED WITH US"}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#071427] dark:text-white">
                {isBn ? "প্রযুক্তি ও অফার সংক্রান্ত আপডেট পেতে সাবস্ক্রাইব করুন" : "Subscribe For Latest Tech Updates & Offers"}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#071427]/85 dark:text-white/80">
                {isBn ? "আপনার ইমেইল দিয়ে আমাদের সাথে যুক্ত থাকুন। আমরা কোনো স্প্যাম মেসেজ পাঠাবো না।" : "Join our newsletter to receive exclusive tech insights and project offers."}
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder={isBn ? "আপনার ইমেইল এড্রেস লিখুন" : "Enter your email address"}
                  className="w-full rounded-2xl border-2 border-[#0F9D8F]/40 bg-[#EEF4F7] px-5 py-4 text-sm font-bold text-[#071427] placeholder-[#071427]/50 outline-none focus:border-[#0F9D8F] focus:bg-white shadow-inner transition-all dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder-white/40"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#0F9D8F]/40 transition-all hover:scale-105 active:scale-95"
                >
                  <span>{isBn ? "সাবস্ক্রাইব" : "Subscribe"}</span>
                  <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 pt-6">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block text-3xl font-black tracking-wider text-[#071427] dark:text-white">
              SOFT<span className="text-[#0F9D8F]">AYONA</span>
            </Link>

            <p className="text-base font-semibold leading-relaxed text-[#071427]/85 dark:text-white/80 pr-4">
              {isBn
                ? "আমরা আধুনিক ওয়েভ সলিউশন, সফটওয়্যার ও মোবাইল অ্যাপ ডেভেলপমেন্টের মাধ্যমে আপনার ব্যবসাকে ডিজিটাল জগতে এগিয়ে নিয়ে যেতে প্রতিশ্রুতিবদ্ধ।"
                : "Empowering businesses worldwide with cutting-edge web development, custom software, and innovative mobile application solutions."}
            </p>

            {/* Social Links with Strong Vibrant Colors */}
            <div className="flex items-center gap-3 pt-2">
              {['facebook', 'linkedin', 'twitter', 'instagram', 'github', 'youtube'].map((social, idx) => (
                <a key={idx} href="#" className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#0F9D8F]/30 bg-white text-[#071427] shadow-md transition-all duration-300 hover:border-[#0F9D8F] hover:bg-gradient-to-br hover:from-[#0F9D8F] hover:to-[#1BB6D4] hover:text-white hover:-translate-y-1 dark:border-white/15 dark:bg-white/10 dark:text-white">
                  <Globe size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xl font-black text-[#071427] dark:text-white border-b-4 border-[#0F9D8F] pb-1.5 w-fit">
              {isBn ? "কুইক লিংক" : "Quick Links"}
            </h4>
            <ul className="space-y-3 text-sm font-bold text-[#071427]/85 dark:text-white/80">
              {[
                { labelBn: "হোম", labelEn: "Home", href: "/" },
                { labelBn: "আমাদের সম্পর্কে", labelEn: "About Us", href: "/about" },
                { labelBn: "সার্ভিসসমূহ", labelEn: "Services", href: "#services" },
                { labelBn: "পোর্টফোলিও", labelEn: "Portfolio", href: "#portfolio" },
                { labelBn: "প্রাইসিং", labelEn: "Pricing", href: "#pricing" },
                { labelBn: "ব্লগ", labelEn: "Blog", href: "#blog" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-[#0F9D8F] dark:hover:text-[#1BB6D4]"
                  >
                    <span className="text-[#0F9D8F] font-black">→</span>
                    {isBn ? link.labelBn : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xl font-black text-[#071427] dark:text-white border-b-4 border-[#1BB6D4] pb-1.5 w-fit">
              {isBn ? "সার্ভিসসমূহ" : "Our Services"}
            </h4>
            <ul className="space-y-3 text-sm font-bold text-[#071427]/85 dark:text-white/80">
              {[
                { labelBn: "কাস্টম ওয়েব ডেভেলপমেন্ট", labelEn: "Custom Web Development" },
                { labelBn: "ইকমার্স ওয়েব সলিউশন", labelEn: "eCommerce Solutions" },
                { labelBn: "মোবাইল অ্যাপ ডেভেলপমেন্ট", labelEn: "Mobile App Development" },
                { labelBn: "ইউআই/ইউএক্স (UI/UX) ডিজাইন", labelEn: "UI/UX Design & Prototyping" },
                { labelBn: "কাস্টম সফটওয়্যার ডেভেলপমেন্ট", labelEn: "Custom Software Solutions" },
                { labelBn: "ক্লাউড হোস্টিং ও মেইনটেনেন্স", labelEn: "Cloud & Maintenance" },
              ].map((serv, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F9D8F] text-white text-xs font-black shadow-sm">✓</span>
                  <span>{isBn ? serv.labelBn : serv.labelEn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xl font-black text-[#071427] dark:text-white border-b-4 border-[#FFB627] pb-1.5 w-fit">
              {isBn ? "যোগাযোগের ঠিকানা" : "Contact Information"}
            </h4>

            <ul className="space-y-4 text-sm font-semibold text-[#071427]/85 dark:text-white/80">
              <li className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] text-white shadow-lg shadow-[#0F9D8F]/30">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-black text-[#071427] dark:text-white">{isBn ? "হেড অফিস:" : "Head Office:"}</p>
                  <p className="text-xs leading-relaxed mt-0.5">
                    {isBn ? "মিরপুর, ঢাকা - ১২১৬, বাংলাদেশ" : "Mirpur, Dhaka - 1216, Bangladesh"}
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1BB6D4] to-[#0F9D8F] text-white shadow-lg shadow-[#1BB6D4]/30">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-black text-[#071427] dark:text-white">{isBn ? "ফোন নম্বর:" : "Phone:"}</p>
                  <a href="tel:+8801700000000" className="text-xs font-extrabold hover:text-[#0F9D8F] dark:hover:text-[#1BB6D4] transition-colors">
                    +880 1700-000000
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F9D8F] to-[#FFB627] text-white shadow-lg shadow-[#0F9D8F]/30">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-black text-[#071427] dark:text-white">{isBn ? "ইমেইল:" : "Email:"}</p>
                  <a href="mailto:info@softayona.com" className="text-xs font-extrabold hover:text-[#0F9D8F] dark:hover:text-[#1BB6D4] transition-colors">
                    info@softayona.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t-2 border-[#0F9D8F]/30 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#071427]/75 dark:text-white/70">
          <p className="text-center sm:text-left">
            © {currentYear} <span className="text-[#071427] dark:text-white font-black">SoftAyona</span>. {isBn ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:text-[#0F9D8F] dark:hover:text-[#1BB6D4] transition-colors">
              {isBn ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
            </Link>
            <Link href="#" className="hover:text-[#0F9D8F] dark:hover:text-[#1BB6D4] transition-colors">
              {isBn ? "টার্মস অব সার্ভিস" : "Terms of Service"}
            </Link>
            <Link href="#" className="hover:text-[#0F9D8F] dark:hover:text-[#1BB6D4] transition-colors">
              {isBn ? "কুকি সেটিংস" : "Cookie Settings"}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}