"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircleQuestion, Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";

type FAQItem = {
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
};

const faqs: FAQItem[] = [
  {
    questionBn: "একটি প্রজেক্ট তৈরিতে সাধারণত কত সময় লাগে?",
    questionEn: "How long does it typically take to complete a project?",
    answerBn: "প্রজেক্টের ধরন ও ফিচারের ওপর ভিত্তি করে সময় নির্ভর করে। সাধারণ ওয়েবসাইট তৈরি করতে ১ থেকে ২ সপ্তাহ এবং বড় ই-কমার্স বা কাস্টম সফটওয়্যার তৈরিতে ৪ থেকে ৮ সপ্তাহ সময় লাগতে পারে। আমরা সবসময় নির্দিষ্ট সময়ের মধ্যে প্রজেক্ট ডেলিভারি নিশ্চিত করি।",
    answerEn: "Project timelines depend on complexity and features. Standard websites usually take 1-2 weeks, while custom e-commerce platforms or web apps take 4-8 weeks. We always ensure strict on-time delivery.",
  },
  {
    questionBn: "সফটওয়্যার বা ওয়েবসাইট তৈরির খরচ কেমন হতে পারে?",
    questionEn: "What is the estimated cost for software or website development?",
    answerBn: "খরচ সম্পূর্ণ নির্ভর করে প্রজেক্টের রিকোয়ারমেন্ট, ডিজাইন এবং ফিচারের ওপর। আমরা অত্যন্ত সাশ্রয়ী মূল্যে প্রিমিয়াম কোয়ালিটির সলিউশন দিয়ে থাকি। আপনার প্রজেক্টের আইডিয়া শেয়ার করলে আমরা সঠিক বাজেট ও কোটেশন প্রদান করতে পারি।",
    answerEn: "Cost varies based on your requirements, design complexity, and features. We offer premium-quality solutions at competitive prices. Share your project details with us to get an exact quotation.",
  },
  {
    questionBn: "প্রজেক্ট ডেলিভারির পর কি ধরনের মেইনটেনেন্স বা সাপোর্ট পাওয়া যাবে?",
    questionEn: "What kind of maintenance and support do you provide after delivery?",
    answerBn: "প্রজেক্ট লাইভ হওয়ার পর আমরা নির্দিষ্ট সময়ের জন্য ফ্রি টেকনিক্যাল সাপোর্ট দিয়ে থাকি। এছাড়া সফটওয়্যারের লং-টার্ম সিকিউরিটি, আপডেট এবং যেকোনো প্রয়োজনে আমাদের ২৪/৭ মেইনটেনেন্স টিম সর্বদা প্রস্তুত থাকে।",
    answerEn: "We provide free technical support for a specific period after launch. Additionally, our 24/7 maintenance team is always ready for long-term security, updates, and troubleshooting.",
  },
  {
    questionBn: "আপনারা কি সোর্স কোড সম্পূর্ণ হস্তান্তর করেন?",
    questionEn: "Do you hand over the complete source code?",
    answerBn: "হ্যাঁ, প্রজেক্ট সম্পূর্ণ হওয়ার পর এবং ফাইনাল পেমেন্ট সম্পন্ন হওয়ার পর আমরা ক্লায়েন্টকে সম্পূর্ণ সোর্স কোড এবং প্রয়োজনীয় এক্সেস হস্তান্তর করে থাকি।",
    answerEn: "Yes, once the project is successfully completed and final payment is made, we hand over the complete source code and necessary credentials to the client.",
  },
  {
    questionBn: "প্রজেক্ট চলাকালীন সময়ে কি ডিজাইন বা ফিচারে পরিবর্তন আনা যাবে?",
    questionEn: "Can I request changes to the design or features during development?",
    answerBn: "অবশ্যই! ডেভেলপমেন্ট চলাকালীন সময়ে ক্লায়েন্টের ফিডব্যাক এবং প্রয়োজন অনুযায়ী আমরা পরিবর্তন বা নতুন ফিচার যুক্ত করে থাকি, যাতে ফাইনাল আউটপুট আপনার মনের মতো হয়।",
    answerEn: "Of course! We value client feedback during development and happily accommodate modifications or new features to ensure the final product matches your exact vision.",
  },
];

export default function FAQSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F9FA] py-28 transition-colors duration-300 dark:bg-[#0B1F3A]">
      
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0F9D8F]/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[450px] rounded-full bg-[#1BB6D4]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Side: Header & Larger Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0F9D8F]/10 px-4 py-2 text-xs font-bold text-[#0F9D8F] shadow-sm dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4] w-fit">
              <MessageCircleQuestion size={14} />
              {isBn ? "সাধারণ জিজ্ঞাসা ও উত্তর" : "Frequently Asked Questions"}
            </span>

            <h2 className="text-3xl font-extrabold leading-[1.3] tracking-normal text-[#0B1F3A] dark:text-white sm:text-4xl lg:text-5xl">
              {isBn
                ? "আপনার প্রজেক্ট নিয়ে মনে কোনো প্রশ্ন আছে?"
                : "Got Questions About Your Project?"}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/75 dark:text-white/75">
              {isBn
                ? "খরচ, সময়সীমা, মেইনটেনেন্স কিংবা অন্যান্য সাধারণ সংশয় নিয়ে ক্লায়েন্টদের সচরাচর জিজ্ঞাসিত প্রশ্নগুলোর স্পষ্ট সমাধান।"
                : "Clear solutions and answers to common client doubts regarding cost, timeline, maintenance, and overall workflow."}
            </p>

            {/* Quick Contact Help Box (Increased Height & Padding) */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0F9D8F]/30 bg-gradient-to-br from-white to-[#0F9D8F]/5 p-10 sm:p-12 shadow-xl dark:border-[#1BB6D4]/30 dark:bg-[#0F2A4A] space-y-6">
              <div className="absolute -right-6 -bottom-6 text-[#0F9D8F]/10 dark:text-white/5 pointer-events-none">
                <HelpCircle size={180} />
              </div>
              <div className="relative z-10 space-y-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F9D8F] text-white shadow-lg">
                  <PhoneCall size={26} />
                </div>
                <h4 className="text-2xl font-bold text-[#0B1F3A] dark:text-white">
                  {isBn ? "আরও কিছু জানার আছে?" : "Still Have Questions?"}
                </h4>
                <p className="text-base leading-relaxed text-[#0B1F3A]/75 dark:text-white/75">
                  {isBn
                    ? "আমাদের এক্সপার্ট টিম আপনার যেকোনো প্রজেক্ট আইডিয়া নিয়ে আলোচনা করতে এবং সেরা সলিউশন দিতে সর্বদা প্রস্তুত।"
                    : "Our expert team is always ready to discuss your custom project ideas and provide the best solutions."}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-base font-bold text-[#0F9D8F] dark:text-[#1BB6D4] hover:underline pt-2"
                >
                  {isBn ? "সরাসরি কথা বলুন" : "Get in touch directly"} <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#0F9D8F] bg-white shadow-[0_15px_40px_-15px_rgba(15,157,143,0.25)] dark:border-[#1BB6D4] dark:bg-[#0F2A4A]"
                      : "border-[#0B1F3A]/10 bg-white/70 hover:bg-white hover:border-[#0F9D8F]/40 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left outline-none sm:p-7"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-4 text-lg sm:text-xl font-extrabold text-[#0B1F3A] dark:text-white">
                      <span 
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-colors duration-300 ${
                          isOpen 
                            ? "bg-[#0F9D8F] text-white shadow-md" 
                            : "bg-[#0F9D8F]/10 text-[#0F9D8F] dark:bg-[#0F9D8F]/20 dark:text-[#1BB6D4]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      {isBn ? faq.questionBn : faq.questionEn}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#0F9D8F] bg-[#0F9D8F] text-white shadow-md"
                          : "border-[#0B1F3A]/15 bg-white text-[#0B1F3A] dark:border-white/15 dark:bg-white/10 dark:text-white"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-7 pt-0 sm:px-7 sm:pb-8">
                          <div className="border-t border-[#0B1F3A]/10 pt-4 dark:border-white/10">
                            <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/75 dark:text-white/75">
                              {isBn ? faq.answerBn : faq.answerEn}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#0F9D8F] dark:text-[#1BB6D4]">
                              <Sparkles size={14} />
                              {isBn ? "ভেরিফাইড ও প্রফেশনাল গাইডলাইন" : "Verified & Professional Guideline"}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}