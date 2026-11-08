"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Globe,
  MessageSquare,
  Building2,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function ContactPage() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FA] transition-colors duration-300 dark:bg-[#0B1F3A] pt-28 sm:pt-36 pb-24">
     
     <Navbar/>
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute left-10 top-20 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/10 blur-[160px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= 1. HERO HEADER SECTION ================= */}
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
              <MessageSquare size={14} />
              {isBn ? "এখনই যোগাযোগ করুন" : "CONTACT NOW"}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] dark:text-white leading-[1.15] tracking-tight">
              {isBn
                ? "আপনার বিজনেস সফটওয়্যার চাহিদা নিয়ে আমাদের সাথে কথা বলুন"
                : "Let's Talk About Your Business Software Needs"}
            </h1>

            <p className="text-lg sm:text-xl font-bold text-[#0F9D8F] dark:text-[#1BB6D4]">
              {isBn
                ? "আপনার ভিশন, আমাদের দক্ষতা — চলুন তৈরি করি অনন্য কিছু।"
                : "Your Vision, Our Expertise — Let's Create Excellence."}
            </p>

            <p className="text-base sm:text-lg text-[#0B1F3A]/75 dark:text-white/75 leading-relaxed max-w-2xl">
              {isBn
                ? "SoftAyona কাস্টম ওয়েব সফটওয়্যার, ইকমার্স, ইআরপি, মোবাইল অ্যাপ এবং আধুনিক ডিজিটাল সলিউশনের মাধ্যমে ব্যবসাকে দ্রুত বৃদ্ধি করতে সাহায্য করে।"
                : "SoftAyona helps businesses grow with smart and reliable software solutions for Web Applications, eCommerce, ERP, Mobile Apps, and Enterprise Digital Solutions."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-[#0F9D8F]/30 transition-all hover:scale-105"
              >
                <Send size={18} />
                <span>{isBn ? "ইনকোয়ারি সেন্ড করুন" : "Send Enquiry"}</span>
              </a>

              <a
                href="tel:+8801700000000"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-[#0B1F3A]/15 bg-white px-8 py-4 text-base font-extrabold text-[#0B1F3A] shadow-sm transition-all hover:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white"
              >
                <Phone size={18} className="text-[#0F9D8F] dark:text-[#1BB6D4]" />
                <span>{isBn ? "কল করুন" : "Call Sales"}</span>
              </a>
            </div>
          </div>

          {/* Right Vector/Illustration Banner */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-[#0B1F3A]/10 bg-gradient-to-br from-white to-[#F6F9FA] p-8 shadow-xl dark:border-white/10 dark:from-[#0F2A4A] dark:to-[#0B1F3A]">
              <div className="flex flex-col items-center text-center space-y-4 py-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4] text-white shadow-lg shadow-[#0F9D8F]/30">
                  <Globe size={40} />
                </div>
                <h3 className="text-2xl font-black text-[#0B1F3A] dark:text-white">
                  {isBn ? "২৪/৭ ডেডিকেটেড সাপোর্ট" : "24/7 Dedicated Support"}
                </h3>
                <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70">
                  {isBn
                    ? "আমাদের টেকনিক্যাল এক্সপার্ট টিম আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত।"
                    : "Our technical experts are standing by to answer your questions and power your growth."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. TOP CONTACT INFO CARDS (SCREENSHOT 1 STYLE) ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Visit Us (Dhaka) */}
          <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#0F2A4A]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4] mb-5">
              <MapPin size={22} />
            </div>
            <h4 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white">
              {isBn ? "আমাদের অফিস" : "Visit Us"}
            </h4>
            <p className="text-xs font-bold text-[#0F9D8F] dark:text-[#1BB6D4] mt-1">
              {isBn ? "ঢাকা অফিস" : "Dhaka Office"}
            </p>
            <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70 mt-3 leading-relaxed">
              {isBn
                ? "মিরপুর-১০, প্রধান সড়ক, ঢাকা-১২১৬, বাংলাদেশ"
                : "Mirpur-10, Main Road, Dhaka-1216, Bangladesh"}
            </p>
          </div>

          {/* Card 2: Branch Office */}
          <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#0F2A4A]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1BB6D4]/10 text-[#1BB6D4] mb-5">
              <Building2 size={22} />
            </div>
            <h4 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white">
              {isBn ? "ব্রাঞ্চ অফিস" : "Chattogram Office"}
            </h4>
            <p className="text-xs font-bold text-[#1BB6D4] mt-1">
              {isBn ? "চট্টগ্রাম অফিস" : "Regional Office"}
            </p>
            <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70 mt-3 leading-relaxed">
              {isBn
                ? "সিডিএ এভিনিউ, জিইসি মোড়, চট্টগ্রাম-৪০০০"
                : "CDA Avenue, GEC Circle, Chattogram-4000"}
            </p>
          </div>

          {/* Card 3: Call Us */}
          <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#0F2A4A]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] mb-5">
              <Phone size={22} />
            </div>
            <h4 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white">
              {isBn ? "কল করুন" : "Call Us"}
            </h4>
            <div className="mt-3 space-y-1 text-sm text-[#0B1F3A]/75 dark:text-white/75 font-semibold">
              <p>+880 1700-000000</p>
              <p>+880 1800-000000</p>
            </div>
            <p className="text-xs text-[#0B1F3A]/50 dark:text-white/50 mt-3 flex items-center gap-1.5">
              <Clock size={13} />
              {isBn ? "সকাল ১০টা - রাত ৮টা" : "10am - 8pm"}
            </p>
          </div>

          {/* Card 4: Email Us */}
          <div className="rounded-3xl border border-[#0B1F3A]/10 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-[#0F2A4A]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFB627]/10 text-[#FFB627] mb-5">
              <Mail size={22} />
            </div>
            <h4 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white">
              {isBn ? "ইমেইল করুন" : "Email Us"}
            </h4>
            <p className="text-sm font-semibold text-[#0B1F3A]/75 dark:text-white/75 mt-3">
              info@softayona.com
            </p>
            <p className="text-sm text-[#0B1F3A]/60 dark:text-white/60 mt-1">
              support@softayona.com
            </p>
          </div>

        </div>

        {/* ================= 3. SPLIT CONTACT FORM (SCREENSHOT 2 STYLE) ================= */}
        <div id="contact-form" className="overflow-hidden rounded-[2.5rem] border border-[#0B1F3A]/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0F2A4A]">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Dark Sidebar Panel */}
            <div className="lg:col-span-5 bg-[#0B1F3A] p-8 sm:p-12 text-white flex flex-col justify-between space-y-8 dark:bg-[#071427]">
              
              <div className="space-y-6">
                <h3 className="text-3xl font-black">
                  {isBn ? "চলুন কথা বলি" : "Let's Talk"}
                </h3>
                <p className="text-base text-white/75 leading-relaxed">
                  {isBn
                    ? "আমাদের টিমের সাথে কথা বলুন এবং আপনার সকল প্রশ্নের সমাধান পান।"
                    : "Schedule a call with our team and get the answers you need."}
                </p>

                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FFB627] px-6 py-3 text-sm font-extrabold text-[#0B1F3A] shadow-md transition-all hover:bg-yellow-400"
                >
                  <Calendar size={16} />
                  <span>{isBn ? "ফ্রি কনসালটেশন বুক করুন" : "Book an initial consultation"}</span>
                </a>
              </div>

              {/* Office Details */}
              <div className="space-y-6 border-t border-white/10 pt-8">
                
                {/* Location 1 */}
                <div className="space-y-2">
                  <h5 className="text-lg font-bold text-[#1BB6D4]">
                    {isBn ? "বাংলাদেশ" : "Bangladesh"}
                  </h5>
                  <p className="text-xs text-white/80 leading-relaxed flex items-start gap-2">
                    <MapPin size={16} className="text-[#0F9D8F] shrink-0 mt-0.5" />
                    <span>House No: 95, Road-9/A, Dhanmondi, Dhaka-1209</span>
                  </p>
                  <p className="text-xs text-white/80 flex items-center gap-2">
                    <Mail size={14} className="text-[#0F9D8F] shrink-0" />
                    <span>info@softayona.com</span>
                  </p>
                  <p className="text-xs text-white/80 flex items-center gap-2">
                    <Phone size={14} className="text-[#0F9D8F] shrink-0" />
                    <span>+88 01719000000</span>
                  </p>
                </div>

                {/* Location 2 */}
                <div className="space-y-2 pt-2">
                  <h5 className="text-lg font-bold text-[#1BB6D4]">
                    {isBn ? "গ্লোবাল প্রেজেন্স" : "Global Reach"}
                  </h5>
                  <p className="text-xs text-white/80 leading-relaxed flex items-start gap-2">
                    <MapPin size={16} className="text-[#0F9D8F] shrink-0 mt-0.5" />
                    <span>USA & UK Partner Locations Available</span>
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side Input Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              
              <div className="mb-8 space-y-2">
                <h3 className="text-3xl font-extrabold text-[#0B1F3A] dark:text-white">
                  {isBn ? "গেট ইন টাচ" : "Get in Touch"}
                </h3>
                <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70">
                  {isBn ? "আপনি যেকোনো সময় আমাদের সাথে রেসপন্স পেতে পারেন।" : "You can reach us anytime."}
                </p>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0F9D8F]/20 text-[#0F9D8F] dark:text-[#1BB6D4]">
                    <CheckCircle2 size={44} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B1F3A] dark:text-white">
                    {isBn ? "মেসেজ সফলভাবে পাঠানো হয়েছে!" : "Message Sent Successfully!"}
                  </h4>
                  <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70 max-w-sm mx-auto">
                    {isBn
                      ? "ধন্যবাদ! আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
                      : "Thank you! Our team will get in touch with you very soon."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-xl bg-[#0F9D8F] px-8 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0b8276]"
                  >
                    {isBn ? "আরেকটি মেসেজ পাঠান" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                      {isBn ? "সম্পূর্ণ নাম *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isBn ? "আপনার নাম লিখুন" : "Enter your full name"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-sm font-medium text-[#0B1F3A] outline-none focus:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                        {isBn ? "আপনার ইমেইল *" : "Your email *"}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-sm font-medium text-[#0B1F3A] outline-none focus:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                        {isBn ? "ফোন নম্বর *" : "Your phone number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-sm font-medium text-[#0B1F3A] outline-none focus:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Service & Company */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                        {isBn ? "সার্ভিস সিলেক্ট করুন *" : "Select Service *"}
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-sm font-medium text-[#0B1F3A] outline-none focus:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white"
                      >
                        <option value="">{isBn ? "সিলেক্ট করুন" : "Select Service"}</option>
                        <option value="web">{isBn ? "ওয়েবসাইট ডেভেলপমেন্ট" : "Web Development"}</option>
                        <option value="app">{isBn ? "মোবাইল অ্যাপ ডেভেলপমেন্ট" : "Mobile App"}</option>
                        <option value="custom">{isBn ? "কাস্টম সফটওয়্যার" : "Custom Software"}</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                        {isBn ? "কোম্পানির নাম" : "Your company name"}
                      </label>
                      <input
                        type="text"
                        placeholder={isBn ? "আপনার কোম্পানির নাম" : "Company name"}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-sm font-medium text-[#0B1F3A] outline-none focus:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                      {isBn ? "প্রজেক্টের বিবরণ *" : "Project Details *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={isBn ? "আপনার প্রজেক্টের বিস্তারিত চাহিদা লিখুন..." : "Tell us details about your requirement..."}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-sm font-medium text-[#0B1F3A] outline-none focus:border-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0B1F3A] py-4 text-base font-extrabold text-white shadow-lg transition-all hover:bg-[#0F9D8F] dark:bg-gradient-to-r dark:from-[#0F9D8F] dark:to-[#1BB6D4]"
                  >
                    <span>{isBn ? "মেসেজ পাঠান" : "Send"}</span>
                    <Send size={16} />
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>

        {/* ================= 4. GOOGLE LOCATION MAP SECTION ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-extrabold text-[#0B1F3A] dark:text-white">
              {isBn ? "ম্যাপে আমাদের লোকেশন" : "Our Office Location"}
            </h3>
            <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70">
              {isBn ? "সরাসরি আমাদের অফিসে ভিজিট করতে পারেন।" : "Feel free to visit our office in person."}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-[#0B1F3A]/10 shadow-xl dark:border-white/10 h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430136!2d90.3910801!3d23.7508581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3391fb%3A0x10d708dcc5c5d4e5!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}