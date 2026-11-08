"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Lock,
  Rocket,
  Send,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

const ILLUSTRATION_SRC = "/images/quote-illustration.png";

const inputCls =
  "w-full rounded-2xl border border-[#0B1F3A]/15 bg-[#F6F9FA] px-4.5 py-3.5 text-base font-medium text-[#0B1F3A] outline-none transition-colors placeholder:text-[#0B1F3A]/40 focus:border-[#0F9D8F] focus:ring-1 focus:ring-[#0F9D8F] dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-base font-bold text-[#0B1F3A] dark:text-white">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  id,
  value,
  onChange,
  placeholder,
  options,
  required,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none pr-10 ${value ? "" : "text-[#0B1F3A]/55 dark:text-white/55"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-[#0B1F3A]">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0B1F3A]/60 dark:text-white/60"
      />
    </div>
  );
}

function FloatCard({
  className,
  rotate,
  delay,
  reduce,
  children,
}: {
  className: string;
  rotate: number;
  delay: number;
  reduce: boolean | null;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`absolute flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-2xl shadow-[0_15px_30px_-10px_rgba(15,157,143,0.35)] ${className}`}
      style={{ rotate }}
      animate={reduce ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function Illustration({ isBn }: { isBn: boolean }) {
  const reduce = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={ILLUSTRATION_SRC}
        alt=""
        onError={() => setImgFailed(true)}
        className="h-full w-full object-contain object-right-bottom"
      />
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-2 top-16 h-14 w-14 rounded-full bg-gradient-to-br from-[#0F9D8F]/20 to-[#1BB6D4]/20 opacity-80" />
      
      <FloatCard reduce={reduce} delay={0} rotate={-12} className="right-[90px] top-4 bg-gradient-to-br from-[#0F9D8F] to-[#1BB6D4]">
        <Rocket size={28} className="text-white" strokeWidth={1.8} />
        <span className="text-[10px] font-bold text-white">Strategy</span>
      </FloatCard>

      <FloatCard reduce={reduce} delay={0.8} rotate={-8} className="left-[20px] top-[110px] bg-white dark:bg-[#0F2A4A]">
        <BarChart3 size={28} className="text-[#0F9D8F]" strokeWidth={2.4} />
        <span className="text-[10px] font-bold text-[#0B1F3A] dark:text-white">Growth</span>
      </FloatCard>

      <FloatCard reduce={reduce} delay={1.6} rotate={8} className="right-2 top-[130px] bg-gradient-to-br from-[#E6FFFA] to-[#B2F5EA]">
        <Lightbulb size={28} className="text-[#0F9D8F]" strokeWidth={1.9} />
        <span className="text-[10px] font-bold text-[#0F9D8F]">Success</span>
      </FloatCard>

      <div className="absolute bottom-4 right-4 w-[260px] -rotate-[3deg]">
        <div className="rounded-2xl border-[6px] border-[#0B1F3A] bg-gradient-to-br from-[#0F2A4A] to-[#0B1F3A] p-4 shadow-xl">
          <p className="font-serif text-base italic leading-snug text-white">
            {isBn ? "আইডিয়া থেকে বাস্তব রেজাল্ট" : "From Ideas to Real Results"}
          </p>
          <div className="mt-2 h-0.5 w-12 bg-[#0F9D8F]" />
          <div className="h-8" />
        </div>
        <div className="mx-[-8px] h-3 rounded-b-xl bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] shadow-md" />
      </div>
    </div>
  );
}

export default function QuoteOrderSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [formData, setFormData] = useState({
    websiteType: "",
    budget: "",
    name: "",
    email: "",
    whatsapp: "",
    package: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof formData) => (v: string) => setFormData((d) => ({ ...d, [key]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const features = [
    {
      icon: Zap,
      chip: "text-[#0F9D8F] bg-[#0F9D8F]/10",
      title: isBn ? "দ্রুত রেসপন্স" : "Quick Response",
      desc: isBn ? "আমরা সাধারণত ২৪ ঘণ্টার মধ্যে রিপ্লাই করি।" : "We usually reply within 24 hours",
    },
    {
      icon: Users,
      chip: "text-[#1BB6D4] bg-[#1BB6D4]/10",
      title: isBn ? "এক্সপার্ট টিম" : "Expert Team",
      desc: isBn ? "আপনার ব্যবসার জন্য পেশাদার পরামর্শ নিন।" : "Get professional advice for your business",
    },
    {
      icon: ShieldCheck,
      chip: "text-[#7C3AED] bg-[#7C3AED]/10",
      title: isBn ? "কোনো বাধ্যবাধকতা নেই" : "No Obligation",
      desc: isBn ? "শুধুমাত্র আপনার রিকোয়ারমেন্ট শেয়ার করুন।" : "Just share your requirement",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6F9FA] py-24 transition-colors duration-300 dark:bg-[#0B1F3A] lg:py-32">
      <div className="pointer-events-none absolute left-10 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ================= LEFT: INFO + ILLUSTRATION (Equal Height Flex Container) ================= */}
          <div className="flex flex-col justify-between relative overflow-hidden rounded-[2.5rem] border border-[#0B1F3A]/10 bg-white p-8 sm:p-12 shadow-[0_30px_80px_-25px_rgba(11,31,58,0.2)] dark:border-white/10 dark:bg-[#0F2A4A] lg:col-span-6">
            
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs sm:text-sm font-extrabold text-[#0F9D8F] dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]">
                <Zap size={15} />
                {isBn ? "গেট এ ফ্রি কোট" : "GET A FREE QUOTE"}
              </span>

              <h2 className="text-4xl font-black leading-[1.2] text-[#0B1F3A] dark:text-white sm:text-5xl">
                {isBn ? "আপনার আইডিয়াকে" : "Let's Bring Your"}
                <span className="block text-[#0F9D8F] dark:text-[#1BB6D4] mt-1">
                  {isBn ? "বাস্তবে রূপ দিন" : "Ideas to Life"}
                </span>
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/75 dark:text-white/75">
                {isBn
                  ? "আপনার কোন সার্ভিসটি প্রয়োজন তা আমাদের জানান এবং আমাদের টিম সেরা সলিউশন ও প্রাইসিং সহ আপনার সাথে যোগাযোগ করবে।"
                  : "Tell us which service you need and our team will get back to you with the best solution and pricing."}
              </p>

              <ul className="space-y-4 pt-2">
                {features.map((f) => (
                  <li key={f.title} className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm ${f.chip}`}
                    >
                      <f.icon size={22} />
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white">{f.title}</h4>
                      <p className="text-xs sm:text-sm text-[#0B1F3A]/70 dark:text-white/70">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration & Bottom Motto Section */}
            <div className="mt-8 pt-6 border-t border-[#0B1F3A]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="font-serif text-xl sm:text-2xl italic leading-tight text-[#0B1F3A] dark:text-white shrink-0">
                {isBn ? (
                  <>
                    আপনার গ্রোথ,
                    <br />
                    আমাদের অগ্রাধিকার
                  </>
                ) : (
                  <>
                    Your Growth,
                    <br />
                    Our Priority
                  </>
                )}
              </p>

              <div className="relative h-[220px] w-full max-w-[280px]">
                <Illustration isBn={isBn} />
              </div>
            </div>

          </div>

          {/* ================= RIGHT: ORDER FORM ================= */}
          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] border border-[#0B1F3A]/10 bg-white p-8 sm:p-12 shadow-[0_30px_80px_-25px_rgba(11,31,58,0.2)] dark:border-white/10 dark:bg-[#0F2A4A] h-full flex flex-col justify-between">
              
              <div className="mb-6 space-y-2">
                <span className="inline-block text-sm font-extrabold tracking-wider text-[#0F9D8F] dark:text-[#1BB6D4] uppercase">
                  {isBn ? "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট" : "Website Design & Development"}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white">
                  {isBn ? "আপনার অর্ডার সাবমিট করুন" : "Submit Your Order"}
                </h3>
                <p className="text-base text-[#0B1F3A]/70 dark:text-white/70">
                  {isBn
                    ? "একটি প্যাকেজ বেছে নিন এবং আপনার যোগাযোগের তথ্য শেয়ার করুন।"
                    : "Choose a package and share your contact details."}
                </p>
              </div>

              {submitted ? (
                <div className="space-y-6 py-16 text-center my-auto">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0F9D8F]/15 text-[#0F9D8F] dark:text-[#1BB6D4]">
                    <CheckCircle2 size={44} />
                  </div>
                  <h4 className="text-3xl font-bold text-[#0B1F3A] dark:text-white">
                    {isBn ? "অর্ডার সফলভাবে জমা হয়েছে!" : "Order Submitted Successfully!"}
                  </h4>
                  <p className="mx-auto max-w-md text-base text-[#0B1F3A]/70 dark:text-white/70">
                    {isBn
                      ? "ধন্যবাদ! আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।"
                      : "Thank you! Our team will get in touch with you very soon."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105"
                  >
                    {isBn ? "আরেকটি অর্ডার করুন" : "Submit Another Order"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={isBn ? "ওয়েবসাইটের ধরন" : "Website type"} htmlFor="websiteType">
                      <SelectField
                        id="websiteType"
                        value={formData.websiteType}
                        onChange={set("websiteType")}
                        placeholder={isBn ? "সিলেক্ট করুন" : "Select"}
                        options={[
                          { value: "ecommerce", label: isBn ? "ইকমার্স ওয়েবসাইট" : "eCommerce Website" },
                          { value: "corporate", label: isBn ? "কর্পোরেট ওয়েবসাইট" : "Corporate Website" },
                          { value: "portfolio", label: isBn ? "পোর্টফোলিও ওয়েবসাইট" : "Portfolio Website" },
                          { value: "custom", label: isBn ? "কাস্টম ওয়েব অ্যাপ" : "Custom Web App" },
                        ]}
                      />
                    </Field>

                    <Field label={isBn ? "আনুমানিক প্রজেক্ট বাজেট" : "Estimated project budget"} htmlFor="budget">
                      <SelectField
                        id="budget"
                        value={formData.budget}
                        onChange={set("budget")}
                        placeholder={isBn ? "সিলেক্ট করুন" : "Select"}
                        options={[
                          { value: "10-20k", label: "৳ ১০,০০০ - ২০,০০০" },
                          { value: "20-50k", label: "৳ ২০,০০০ - ৫০,০০০" },
                          { value: "50k+", label: "৳ ৫০,০০০+" },
                        ]}
                      />
                    </Field>
                  </div>

                  <Field label={isBn ? "আপনার নাম" : "Your Name"} htmlFor="name" required>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={isBn ? "আপনার পুরো নাম লিখুন" : "Enter your name"}
                      value={formData.name}
                      onChange={(e) => set("name")(e.target.value)}
                      className={inputCls}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={isBn ? "ইমেইল" : "Email"} htmlFor="email" required>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder={isBn ? "আপনার ইমেইল দিন" : "Enter your email"}
                        value={formData.email}
                        onChange={(e) => set("email")(e.target.value)}
                        className={inputCls}
                      />
                    </Field>

                    <Field label={isBn ? "হোয়াটসঅ্যাপ নম্বর" : "WhatsApp Number"} htmlFor="whatsapp" required>
                      <input
                        id="whatsapp"
                        type="tel"
                        required
                        placeholder="8801XXXXXXXXX"
                        value={formData.whatsapp}
                        onChange={(e) => set("whatsapp")(e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <Field label={isBn ? "প্যাকেজ" : "Package"} htmlFor="package" required>
                    <SelectField
                      id="package"
                      required
                      value={formData.package}
                      onChange={set("package")}
                      placeholder={isBn ? "একটি প্যাকেজ সিলেক্ট করুন" : "Select a package"}
                      options={[
                        { value: "basic", label: isBn ? "বেসিক প্যাকেজ" : "Basic Package" },
                        { value: "standard", label: isBn ? "স্ট্যান্ডার্ড প্যাকেজ" : "Standard Package" },
                        { value: "premium", label: isBn ? "প্রিমিয়াম প্যাকেজ" : "Premium Package" },
                      ]}
                    />
                  </Field>

                  <Field label={isBn ? "নোট (ঐচ্ছিক)" : "Note (Optional)"} htmlFor="note">
                    <textarea
                      id="note"
                      rows={3}
                      placeholder={isBn ? "আপনার প্রজেক্ট সম্পর্কে কিছু বলুন..." : "Tell us about your requirement..."}
                      value={formData.note}
                      onChange={(e) => set("note")(e.target.value)}
                      className={`${inputCls} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F9D8F] to-[#1BB6D4] px-8 py-4 text-base font-bold text-white shadow-[0_15px_30px_-10px_rgba(15,157,143,0.5)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_40px_-10px_rgba(15,157,143,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F]"
                  >
                    <Send size={18} />
                    <span>{isBn ? "সেন্ড অর্ডার" : "Send Order"}</span>
                    <ArrowRight size={18} />
                  </button>

                  <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#0B1F3A]/60 dark:text-white/60 pt-1">
                    <Lock size={13} />
                    {isBn
                      ? "আমরা আপনার গোপনীয়তা রক্ষা করি। আপনার তথ্য সম্পূর্ণ সুরক্ষিত।"
                      : "We respect your privacy. Your information is safe with us."}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}