"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/shared/LanguageProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const content = {
  en: {
    title: "Latest articles, ideas & engineering notes",
    subtitle:
      "Deep dives into modern software architecture, AI integration, UI/UX design trends, and product scaling strategies.",
    searchPlaceholder: "Search articles or keywords",
    topics: "Topics",
    allCategory: "All Posts",
    readMore: "Read article",
    latestLabel: "Latest reads",
    browse: "Browse articles",
    statArticles: "Articles",
    statTopics: "Topics",
    featuredLabel: "Featured article",
    categories: ["Engineering", "UI/UX Design", "AI & Cloud", "Startup & Business"],
    posts: [
      {
        id: 1,
        title: "How Next.js App Router Scales Enterprise SaaS Applications",
        excerpt:
          "An in-depth look at leveraging React Server Components, streaming, and advanced caching strategies to build lightning-fast web apps.",
        category: "Engineering",
        date: "May 14, 2026",
        readTime: "6 min read",
        slug: "nextjs-app-router-scale-saas",
        featured: true,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        author: {
          name: "Alex Morgan",
          role: "Lead Architect",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 2,
        title: "Integrating OpenAI and LLMs into Legacy Business Workflows",
        excerpt:
          "Practical steps and architectural patterns for securely embedding artificial intelligence automation into your existing product ecosystem.",
        category: "AI & Cloud",
        date: "May 08, 2026",
        readTime: "8 min read",
        slug: "integrating-openai-legacy-workflows",
        featured: false,
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Tanvir Ahmed",
          role: "AI Engineer",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 3,
        title: "The Anatomy of High-Converting B2B SaaS Product Design",
        excerpt:
          "Why user onboarding flow and visual hierarchy matter more than ever for driving trial-to-paid conversion rates in modern software.",
        category: "UI/UX Design",
        date: "April 29, 2026",
        readTime: "5 min read",
        slug: "anatomy-high-converting-saas-design",
        featured: false,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Sarah Jenkins",
          role: "Head of Design",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 4,
        title: "Why Staff Augmentation Beats Traditional Hiring for Tech Startups",
        excerpt:
          "Scale your engineering capacity instantly with vetted software developers who integrate seamlessly with your in-house team.",
        category: "Startup & Business",
        date: "April 20, 2026",
        readTime: "4 min read",
        slug: "staff-augmentation-vs-traditional-hiring",
        featured: false,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Rahim Chowdhury",
          role: "Managing Director",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 5,
        title: "Microservices vs Modular Monolith: What to Choose in 2026",
        excerpt:
          "Breaking down architectural trade-offs, deployment complexities, and team scaling challenges for modern backend systems.",
        category: "Engineering",
        date: "April 12, 2026",
        readTime: "7 min read",
        slug: "microservices-vs-modular-monolith-2026",
        featured: false,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Alex Morgan",
          role: "Lead Architect",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 6,
        title: "Designing Accessible Web Apps: Beyond Contrast Ratios",
        excerpt:
          "How to build inclusive digital experiences that comply with global WCAG standards without sacrificing aesthetic excellence.",
        category: "UI/UX Design",
        date: "March 30, 2026",
        readTime: "5 min read",
        slug: "designing-accessible-web-apps",
        featured: false,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Sarah Jenkins",
          role: "Head of Design",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 7,
        title: "Zero-Downtime Deployments with Blue-Green and Canary Releases",
        excerpt:
          "A practical guide to shipping updates without interrupting users, including rollback strategies and the monitoring you need before going live.",
        category: "Engineering",
        date: "March 22, 2026",
        readTime: "6 min read",
        slug: "zero-downtime-deployments-blue-green-canary",
        featured: false,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Alex Morgan",
          role: "Lead Architect",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 8,
        title: "Cutting Cloud Costs: A Practical FinOps Playbook for SaaS Teams",
        excerpt:
          "Where cloud budgets quietly leak, and the right-sizing, autoscaling, and tagging habits that bring monthly bills back under control.",
        category: "AI & Cloud",
        date: "March 15, 2026",
        readTime: "6 min read",
        slug: "cloud-cost-finops-playbook-saas",
        featured: false,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Tanvir Ahmed",
          role: "AI Engineer",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 9,
        title: "Building a Scalable Design System from Scratch",
        excerpt:
          "How to define tokens, components, and documentation so that design and engineering teams ship consistent interfaces at any team size.",
        category: "UI/UX Design",
        date: "March 08, 2026",
        readTime: "7 min read",
        slug: "scalable-design-system-from-scratch",
        featured: false,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Sarah Jenkins",
          role: "Head of Design",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 10,
        title: "From MVP to Series A: A Technical Roadmap for Founders",
        excerpt:
          "Which engineering decisions to make early, which to defer, and how to avoid technical debt that slows down your next funding round.",
        category: "Startup & Business",
        date: "February 26, 2026",
        readTime: "7 min read",
        slug: "mvp-to-series-a-technical-roadmap",
        featured: false,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Rahim Chowdhury",
          role: "Managing Director",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 11,
        title: "API Security Checklist: Protecting Your Backend in 2026",
        excerpt:
          "Authentication, rate limiting, input validation, and audit logging: the essential controls every production API should have in place.",
        category: "Engineering",
        date: "February 18, 2026",
        readTime: "6 min read",
        slug: "api-security-checklist-2026",
        featured: false,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Alex Morgan",
          role: "Lead Architect",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 12,
        title: "Building RAG Pipelines That Actually Work in Production",
        excerpt:
          "Chunking, embeddings, retrieval quality, and evaluation: lessons from shipping retrieval-augmented generation to real users.",
        category: "AI & Cloud",
        date: "February 10, 2026",
        readTime: "9 min read",
        slug: "production-rag-pipelines",
        featured: false,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "Tanvir Ahmed",
          role: "AI Engineer",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
      },
    ],
    newsletterTitle: "Get expert engineering insights in your inbox",
    newsletterSubtitle:
      "No spam, no fluff. Just high-impact articles on software engineering and product design, delivered weekly.",
    emailPlaceholder: "Enter your email address",
    newsletterBtn: "Subscribe now",
    empty: "No articles found matching your search.",
    pagination: "Pagination",
    prev: "Previous",
    next: "Next",
  },
  bn: {
    title: "আধুনিক প্রযুক্তি, এআই এবং প্রোডাক্ট ডিজাইনের গল্প",
    subtitle:
      "সফটওয়্যার আর্কিটেকচার, এআই ইন্টিগ্রেশন, ইউআই/ইউএক্স ডিজাইন ট্রেন্ড এবং প্রোডাক্ট স্কেলিং নিয়ে আমাদের গভীর গবেষণা ও অভিজ্ঞতা জানুন।",
    searchPlaceholder: "আর্টিকেল বা কিওয়ার্ড খুঁজুন",
    topics: "বিষয়",
    allCategory: "সব পোস্ট",
    readMore: "সম্পূর্ণ পড়ুন",
    latestLabel: "সর্বশেষ লেখা",
    browse: "আর্টিকেল দেখুন",
    statArticles: "আর্টিকেল",
    statTopics: "বিষয়",
    featuredLabel: "ফিচারড আর্টিকেল",
    categories: ["ইঞ্জিনিয়ারিং", "ইউআই/ইউএক্স ডিজাইন", "এআই ও ক্লাউড", "স্টার্টআপ ও বিজনেস"],
    posts: [
      {
        id: 1,
        title: "কীভাবে নেক্সট.জেএস অ্যাপ রাউটার এন্টারপ্রাইজ স্যাস অ্যাপ স্কেল করে",
        excerpt:
          "রিয়েক্ট সার্ভার কম্পোনেন্টস, স্ট্রিমিং এবং অ্যাডভান্সড ক্যাচিং স্ট্র্যাটেজি ব্যবহার করে কীভাবে ঝড়ের গতিতে ওয়েব অ্যাপ তৈরি করবেন।",
        category: "ইঞ্জিনিয়ারিং",
        date: "১৪ মে, ২০২৬",
        readTime: "৬ মিনিট পঠন",
        slug: "nextjs-app-router-scale-saas",
        featured: true,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        author: {
          name: "অ্যালেক্স মরগান",
          role: "লিড আর্কিটেক্ট",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 2,
        title: "লেগেসি বিজনেস ওয়ার্কফ্লোতে ওপেনএআই এবং এলএলএম (LLM) ইন্টিগ্রেশন",
        excerpt:
          "আপনার বিদ্যমান প্রোডাক্ট ইকোসিস্টেমে কৃত্রিম বুদ্ধিমত্তা অটোমেশন নিরাপদে যুক্ত করার বাস্তবভিত্তিক কৌশল ও আর্কিটেকচার।",
        category: "এআই ও ক্লাউড",
        date: "০৮ মে, ২০২৬",
        readTime: "৮ মিনিট পঠন",
        slug: "integrating-openai-legacy-workflows",
        featured: false,
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "তানভীর আহমেদ",
          role: "এআই ইঞ্জিনিয়ার",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 3,
        title: "হাই-কনভার্টিং বিটুবি (B2B) স্যাস প্রোডাক্ট ডিজাইনের মূল কৌশল",
        excerpt:
          "মডার্ন সফটওয়্যারে ট্রায়াল থেকে পেইড কনভার্শন রেট বাড়াতে কেন ইউজার অনবোর্ডিং ফ্লো এবং ভিজ্যুয়াল হায়ারার্কি সবচেয়ে বেশি জরুরি।",
        category: "ইউআই/ইউএক্স ডিজাইন",
        date: "২৯ এপ্রিল, ২০২৬",
        readTime: "৫ মিনিট পঠন",
        slug: "anatomy-high-converting-saas-design",
        featured: false,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "সারাহ জেনকিন্স",
          role: "হেড অব ডিজাইন",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 4,
        title: "টেক স্টার্টআপের জন্য কেন ট্র্যাডিশনাল Hiring এর চেয়ে Staff Augmentation ভালো",
        excerpt:
          "অভিজ্ঞ ও পরীক্ষিত ডেভেলপারদের সাথে নিয়ে কীভাবে তাৎক্ষণিকভাবে আপনার ইন-হাউস টিমকে শক্তিশালী ও বড় করবেন।",
        category: "স্টার্টআপ ও বিজনেস",
        date: "২০ এপ্রিল, ২০২৬",
        readTime: "৪ মিনিট পঠন",
        slug: "staff-augmentation-vs-traditional-hiring",
        featured: false,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "রহিম চৌধুরী",
          role: "ম্যানেজিং ডিরেক্টর",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 5,
        title: "মাইক্রোসার্ভিস বনাম মডুলার মনোলিথ: ২০২৬ সালে কোনটি বেছে নেবেন",
        excerpt:
          "আধুনিক ব্যাকএন্ড সিস্টেমের জন্য আর্কিটেকচারাল চ্যালেঞ্জ, ডিপ্লয়মেন্ট জটিলতা এবং টিম ম্যানেজমেন্টের তুলনা।",
        category: "ইঞ্জিনিয়ারিং",
        date: "১২ এপ্রিল, ২০২৬",
        readTime: "৭ মিনিট পঠন",
        slug: "microservices-vs-modular-monolith-2026",
        featured: false,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "অ্যালেক্স মরগান",
          role: "লিড আর্কিটেক্ট",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 6,
        title: "অ্যাক্সেসিবল ওয়েব অ্যাপ ডিজাইন: কনট্রাস্ট রেশিও ছাড়িয়ে আরও কিছু",
        excerpt:
          "সৌন্দর্য বজায় রেখে কীভাবে গ্লোবাল WCAG স্ট্যান্ডার্ড মেনে সবার জন্য উপযোগী ডিজিটাল অভিজ্ঞতা তৈরি করবেন।",
        category: "ইউআই/ইউএক্স ডিজাইন",
        date: "৩০ মার্চ, ২০২৬",
        readTime: "৫ মিনিট পঠন",
        slug: "designing-accessible-web-apps",
        featured: false,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "সারাহ জেনকিন্স",
          role: "হেড অব ডিজাইন",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 7,
        title: "ব্লু-গ্রিন ও ক্যানারি রিলিজে জিরো-ডাউনটাইম ডিপ্লয়মেন্ট",
        excerpt:
          "ব্যবহারকারীর সেবা বন্ধ না করে আপডেট পাঠানোর বাস্তব গাইড, সাথে রোলব্যাক কৌশল এবং লাইভে যাওয়ার আগে প্রয়োজনীয় মনিটরিং।",
        category: "ইঞ্জিনিয়ারিং",
        date: "২২ মার্চ, ২০২৬",
        readTime: "৬ মিনিট পঠন",
        slug: "zero-downtime-deployments-blue-green-canary",
        featured: false,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "অ্যালেক্স মরগান",
          role: "লিড আর্কিটেক্ট",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 8,
        title: "ক্লাউড খরচ কমানো: স্যাস টিমের জন্য ব্যবহারিক ফিনঅপস গাইড",
        excerpt:
          "ক্লাউড বাজেট কোথায় নীরবে অপচয় হয় এবং রাইট-সাইজিং, অটোস্কেলিং ও ট্যাগিংয়ের অভ্যাসে কীভাবে মাসিক বিল নিয়ন্ত্রণে আনবেন।",
        category: "এআই ও ক্লাউড",
        date: "১৫ মার্চ, ২০২৬",
        readTime: "৬ মিনিট পঠন",
        slug: "cloud-cost-finops-playbook-saas",
        featured: false,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "তানভীর আহমেদ",
          role: "এআই ইঞ্জিনিয়ার",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 9,
        title: "শূন্য থেকে স্কেলেবল ডিজাইন সিস্টেম তৈরি",
        excerpt:
          "টোকেন, কম্পোনেন্ট ও ডকুমেন্টেশন কীভাবে সাজালে যেকোনো আকারের টিমে ডিজাইন ও ইঞ্জিনিয়ারিং একই মানের ইন্টারফেস দিতে পারে।",
        category: "ইউআই/ইউএক্স ডিজাইন",
        date: "০৮ মার্চ, ২০২৬",
        readTime: "৭ মিনিট পঠন",
        slug: "scalable-design-system-from-scratch",
        featured: false,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "সারাহ জেনকিন্স",
          role: "হেড অব ডিজাইন",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 10,
        title: "এমভিপি থেকে সিরিজ এ: ফাউন্ডারদের জন্য টেকনিক্যাল রোডম্যাপ",
        excerpt:
          "শুরুতে কোন ইঞ্জিনিয়ারিং সিদ্ধান্ত নেবেন, কোনটি পিছিয়ে দেবেন এবং পরবর্তী ফান্ডিং রাউন্ড ধীর করে দেওয়া টেকনিক্যাল ডেট কীভাবে এড়াবেন।",
        category: "স্টার্টআপ ও বিজনেস",
        date: "২৬ ফেব্রুয়ারি, ২০২৬",
        readTime: "৭ মিনিট পঠন",
        slug: "mvp-to-series-a-technical-roadmap",
        featured: false,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "রহিম চৌধুরী",
          role: "ম্যানেজিং ডিরেক্টর",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 11,
        title: "এপিআই সিকিউরিটি চেকলিস্ট: ২০২৬ সালে আপনার ব্যাকএন্ড সুরক্ষিত রাখুন",
        excerpt:
          "অথেন্টিকেশন, রেট লিমিটিং, ইনপুট ভ্যালিডেশন ও অডিট লগিং: প্রতিটি প্রোডাকশন এপিআইয়ে যে মৌলিক নিয়ন্ত্রণগুলো থাকা জরুরি।",
        category: "ইঞ্জিনিয়ারিং",
        date: "১৮ ফেব্রুয়ারি, ২০২৬",
        readTime: "৬ মিনিট পঠন",
        slug: "api-security-checklist-2026",
        featured: false,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "অ্যালেক্স মরগান",
          role: "লিড আর্কিটেক্ট",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        },
      },
      {
        id: 12,
        title: "প্রোডাকশনে সত্যিই কাজ করে এমন র‍্যাগ (RAG) পাইপলাইন তৈরি",
        excerpt:
          "চাঙ্কিং, এমবেডিং, রিট্রিভাল কোয়ালিটি ও ইভালুয়েশন: বাস্তব ব্যবহারকারীর কাছে রিট্রিভাল-অগমেন্টেড জেনারেশন পৌঁছে দেওয়ার অভিজ্ঞতা।",
        category: "এআই ও ক্লাউড",
        date: "১০ ফেব্রুয়ারি, ২০২৬",
        readTime: "৯ মিনিট পঠন",
        slug: "production-rag-pipelines",
        featured: false,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        author: {
          name: "তানভীর আহমেদ",
          role: "এআই ইঞ্জিনিয়ার",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
      },
    ],
    newsletterTitle: "প্রযুক্তির সর্বশেষ আপডেট সরাসরি আপনার ইনবক্সে পান",
    newsletterSubtitle:
      "কোনো স্প্যাম নয়। প্রতি সপ্তাহে সফটওয়্যার ইঞ্জিনিয়ারিং এবং প্রোডাক্ট ডিজাইন সম্পর্কিত কার্যকরী ও প্রিমিয়াম আর্টিকেল।",
    emailPlaceholder: "আপনার ইমেইল অ্যাড্রেস লিখুন",
    newsletterBtn: "সাবস্ক্রাইব করুন",
    empty: "কোনো আর্টিকেল পাওয়া যায়নি।",
    pagination: "পেজ নেভিগেশন",
    prev: "আগের",
    next: "পরের",
  },
};

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const t = content[isBn ? "bn" : "en"];
  const reduce = useReducedMotion();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const filteredPosts = t.posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const featuredPost = t.posts.find((p) => p.featured) || t.posts[0];
  const isDefaultView = selectedCategory === "all" && searchQuery === "";
  // The featured article is not repeated in the list
  const listPosts = isDefaultView
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  // Pagination
  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pagedPosts = listPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const rangeStart = listPosts.length === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1;
  const rangeEnd = Math.min(currentPage * POSTS_PER_PAGE, listPosts.length);
  // Featured card only on the first page of the default view
  const showFeatured = isDefaultView && currentPage === 1;

  const fmt = (n: number) => (isBn ? new Intl.NumberFormat("bn-BD").format(n) : String(n));

  const pageNumbers: (number | "gap")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== "gap") {
      pageNumbers.push("gap");
    }
  }

  const bodyFit = isBn ? "leading-[1.9]" : "leading-relaxed";
  const titleFit = isBn ? "leading-[1.5]" : "leading-snug";

  const categoryItems = [
    { key: "all", label: t.allCategory, count: t.posts.length },
    ...t.categories.map((cat) => ({
      key: cat,
      label: cat,
      count: t.posts.filter((p) => p.category === cat).length,
    })),
  ];

  const latestPosts = t.posts.slice(0, 3);

  const scrollToArticles = () =>
    document
      .getElementById("articles")
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  const selectCategory = (key: string) => {
    setSelectedCategory(key);
    setPage(1);
  };

  const jumpToTopic = (key: string) => {
    selectCategory(key);
    scrollToArticles();
  };

  const goToPage = (n: number) => {
    setPage(Math.min(Math.max(1, n), totalPages));
    scrollToArticles();
  };

  return (
    <>
    <Navbar />
    <div className="relative min-h-screen overflow-x-clip bg-[#EEF4F7] transition-colors duration-300 dark:bg-[#06101E]">
      {/* ============ Hero ============ */}
      <section className="relative overflow-hidden border-b border-[#071427]/10 bg-white pb-20 pt-28 text-[#071427] dark:border-white/10 dark:bg-[#071427] dark:text-white lg:pb-28 lg:pt-36">
        {/* Background: brand glows + blueprint grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#0F9D8F]/15 blur-3xl dark:bg-[#0F9D8F]/25" />
          <div className="absolute -bottom-48 right-0 h-[36rem] w-[36rem] rounded-full bg-[#1BB6D4]/15 blur-3xl dark:bg-[#1BB6D4]/20" />
          <div
            className="absolute inset-0 text-[#071427]/[0.06] dark:text-white/[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              WebkitMaskImage:
                "radial-gradient(ellipse at 30% 40%, black 20%, transparent 75%)",
              maskImage:
                "radial-gradient(ellipse at 30% 40%, black 20%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] as any }}
            className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12"
          >
            {/* Left: headline, topics, stats */}
            <div className="lg:col-span-7">
              <h1
                className={`text-balance text-4xl font-bold sm:text-5xl xl:text-6xl ${
                  isBn ? "leading-[1.35]" : "leading-[1.08] tracking-tight"
                }`}
              >
                {t.title}
              </h1>
              <p className={`mt-6 max-w-[56ch] text-base text-[#071427]/70 dark:text-white/70 sm:text-lg ${bodyFit}`}>
                {t.subtitle}
              </p>

              {/* Topic chips: filter and jump to the list */}
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {t.categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => jumpToTopic(cat)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#071427]/15 bg-[#071427]/[0.03] px-4 py-2 text-sm font-medium text-[#071427]/85 outline-none transition-colors hover:border-[#0F9D8F]/60 hover:bg-[#0F9D8F]/10 focus-visible:ring-2 focus-visible:ring-[#0F9D8F] dark:border-white/15 dark:bg-white/[0.06] dark:text-white/90 dark:hover:border-[#1BB6D4]/60 dark:hover:bg-white/10 dark:focus-visible:ring-[#1BB6D4]"
                    >
                      {cat}
                      <span className="text-xs text-[#071427]/50 dark:text-white/50">
                        {t.posts.filter((p) => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                <button
                  type="button"
                  onClick={() => jumpToTopic("all")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0F9D8F] px-6 py-3.5 text-base font-semibold text-white outline-none transition-colors hover:bg-[#0c8a7d] focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-[#1BB6D4] dark:text-[#071427] dark:hover:bg-[#3cc4df] dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#071427]"
                >
                  {t.browse}
                  <ArrowDown size={18} aria-hidden="true" />
                </button>

                <dl className="flex items-center gap-8">
                  <div>
                    <dd className="text-3xl font-bold">{t.posts.length}</dd>
                    <dt className="mt-0.5 text-sm text-[#071427]/60 dark:text-white/60">{t.statArticles}</dt>
                  </div>
                  <div className="border-l border-[#071427]/15 pl-8 dark:border-white/15">
                    <dd className="text-3xl font-bold">{t.categories.length}</dd>
                    <dt className="mt-0.5 text-sm text-[#071427]/60 dark:text-white/60">{t.statTopics}</dt>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right: latest reads panel */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#071427]/10 bg-[#EEF4F7]/70 p-6 shadow-[0_20px_50px_-25px_rgba(7,20,39,0.25)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1BB6D4] to-transparent"
                />
                <p className="text-sm font-semibold text-[#071427]/60 dark:text-white/60">{t.latestLabel}</p>

                <ul className="mt-2">
                  {latestPosts.map((post) => (
                    <li key={post.id} className="border-b border-[#071427]/10 last:border-b-0 dark:border-white/10">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex items-start justify-between gap-5 py-5 outline-none focus-visible:text-[#1BB6D4]"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-[#0F9D8F] dark:text-[#1BB6D4]">
                            {post.category}
                          </span>
                          <span
                            className={`mt-1.5 block text-base font-semibold text-[#071427] transition-colors group-hover:text-[#0F9D8F] dark:text-white dark:group-hover:text-[#1BB6D4] ${
                              isBn ? "leading-[1.6]" : "leading-snug"
                            }`}
                          >
                            {post.title}
                          </span>
                          <span className="mt-2 block text-sm text-[#071427]/55 dark:text-white/55">
                            {post.date} · {post.readTime}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          size={18}
                          className="mt-1 shrink-0 text-[#071427]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F9D8F] dark:text-white/40 dark:group-hover:text-[#1BB6D4]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div
        id="articles"
        className="relative mx-auto max-w-[1520px] scroll-mt-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ============ Sidebar: search + topics ============ */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <Search
                  aria-hidden="true"
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#071427]/40 dark:text-white/40"
                />
                <input
                  type="search"
                  aria-label={t.searchPlaceholder}
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(1);
                  }}
                  className="w-full rounded-xl border border-[#071427]/10 bg-white py-3 pl-11 pr-4 text-sm text-[#071427] outline-none transition-colors placeholder:text-[#071427]/45 focus:border-[#0F9D8F] dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white dark:placeholder:text-white/45 dark:focus:border-[#1BB6D4]"
                />
              </div>

              <nav aria-label={t.topics} className="mt-8">
                <p className="mb-3 hidden text-sm font-semibold text-[#071427]/55 dark:text-white/55 lg:block">
                  {t.topics}
                </p>
                <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
                  {categoryItems.map((item) => {
                    const isActive = selectedCategory === item.key;
                    return (
                      <li key={item.key} className="shrink-0 lg:shrink">
                        <button
                          type="button"
                          onClick={() => selectCategory(item.key)}
                          aria-pressed={isActive}
                          className={`flex w-full items-center justify-between gap-6 whitespace-nowrap rounded-lg px-4 py-2.5 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#0F9D8F] dark:focus-visible:ring-[#1BB6D4] ${
                            isActive
                              ? "bg-[#071427] font-semibold text-white dark:bg-[#1BB6D4] dark:text-[#071427]"
                              : "bg-white font-medium text-[#071427]/75 hover:bg-white/70 dark:bg-[#0B1F3A] dark:text-white/75 dark:hover:bg-white/10 lg:bg-transparent lg:hover:bg-white dark:lg:bg-transparent"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`text-xs ${
                              isActive ? "opacity-70" : "text-[#071427]/45 dark:text-white/45"
                            }`}
                          >
                            {item.count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* ============ Main column ============ */}
          <main className="lg:col-span-9">
            <motion.div
              key={`${selectedCategory}-${searchQuery === ""}-${currentPage}`}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured: image-led, whole card is the link */}
              {showFeatured && (
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group relative mb-12 block overflow-hidden rounded-2xl bg-[#071427] outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8F] focus-visible:ring-offset-2 dark:focus-visible:ring-[#1BB6D4] dark:focus-visible:ring-offset-[#06101E]"
                >
                  <div className="relative aspect-[4/5] sm:aspect-[16/10] xl:aspect-[2/1]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 70vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Legibility scrim for the text over the photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071427] via-[#071427]/70 to-[#071427]/10" />

                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
                        <span className="font-semibold text-[#1BB6D4]">{t.featuredLabel}</span>
                        <span>{featuredPost.category}</span>
                        <span>{featuredPost.date}</span>
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <h2
                        className={`mt-4 max-w-3xl text-balance text-2xl font-bold sm:text-3xl xl:text-4xl ${
                          isBn ? "leading-[1.45]" : "leading-tight"
                        }`}
                      >
                        {featuredPost.title}
                      </h2>
                      <p className={`mt-3 hidden max-w-2xl text-base text-white/80 sm:block ${bodyFit}`}>
                        {featuredPost.excerpt}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/25">
                            <Image
                              src={featuredPost.author.avatar}
                              alt=""
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">
                              {featuredPost.author.name}
                            </span>
                            <span className="block text-xs text-white/65">
                              {featuredPost.author.role}
                            </span>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold">
                          {t.readMore}
                          <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Article list: editorial rows */}
              <ul className="border-t border-[#071427]/10 dark:border-white/10">
                {pagedPosts.map((post) => (
                  <li
                    key={post.id}
                    className="border-b border-[#071427]/10 dark:border-white/10"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid gap-5 py-8 outline-none focus-visible:bg-white/60 dark:focus-visible:bg-white/5 sm:grid-cols-[1fr_230px] sm:gap-8"
                    >
                      <div className="order-2 flex flex-col sm:order-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#071427]/60 dark:text-white/60">
                          <span className="font-semibold text-[#0F9D8F] dark:text-[#1BB6D4]">
                            {post.category}
                          </span>
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3
                          className={`mt-3 text-xl font-bold text-[#071427] transition-colors group-hover:text-[#0F9D8F] dark:text-white dark:group-hover:text-[#1BB6D4] sm:text-2xl ${titleFit}`}
                        >
                          {post.title}
                        </h3>
                        <p
                          className={`mt-2 line-clamp-2 max-w-[62ch] text-[15px] text-[#071427]/70 dark:text-white/70 ${bodyFit}`}
                        >
                          {post.excerpt}
                        </p>

                        <div className="mt-5 flex items-center gap-3 sm:mt-auto sm:pt-5">
                          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-[#071427]/10 dark:border-white/15">
                            <Image
                              src={post.author.avatar}
                              alt=""
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </span>
                          <span className="text-sm text-[#071427]/75 dark:text-white/75">
                            <span className="font-semibold">{post.author.name}</span>
                            <span className="text-[#071427]/50 dark:text-white/50">
                              {" "}
                              · {post.author.role}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="relative order-1 aspect-[16/9] overflow-hidden rounded-xl bg-[#071427]/5 dark:bg-white/5 sm:order-2 sm:aspect-[4/3]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 640px) 230px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Empty state */}
              {filteredPosts.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-lg font-semibold text-[#071427]/60 dark:text-white/60">
                    {t.empty}
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label={t.pagination}
                  className="mt-12 flex flex-wrap items-center justify-between gap-4"
                >
                  <p className="text-sm text-[#071427]/60 dark:text-white/60">
                    {fmt(rangeStart)}–{fmt(rangeEnd)} / {fmt(listPosts.length)}
                  </p>

                  <ul className="flex items-center gap-1.5">
                    <li>
                      <button
                        type="button"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label={t.prev}
                        className="inline-flex h-10 items-center gap-1 rounded-lg border border-[#071427]/10 bg-white px-3 text-sm font-medium text-[#071427]/80 outline-none transition-colors hover:border-[#0F9D8F] hover:text-[#0F9D8F] focus-visible:ring-2 focus-visible:ring-[#0F9D8F] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#071427]/10 disabled:hover:text-[#071427]/80 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white/80 dark:hover:border-[#1BB6D4] dark:hover:text-[#1BB6D4] dark:focus-visible:ring-[#1BB6D4] dark:disabled:hover:border-white/10 dark:disabled:hover:text-white/80"
                      >
                        <ChevronLeft size={18} aria-hidden="true" />
                        <span className="hidden sm:inline">{t.prev}</span>
                      </button>
                    </li>

                    {pageNumbers.map((n, i) =>
                      n === "gap" ? (
                        <li
                          key={`gap-${i}`}
                          aria-hidden="true"
                          className="px-1 text-[#071427]/40 dark:text-white/40"
                        >
                          …
                        </li>
                      ) : (
                        <li key={n}>
                          <button
                            type="button"
                            onClick={() => goToPage(n)}
                            aria-label={`${n}`}
                            aria-current={n === currentPage ? "page" : undefined}
                            className={`h-10 min-w-10 rounded-lg px-3 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#0F9D8F] dark:focus-visible:ring-[#1BB6D4] ${
                              n === currentPage
                                ? "bg-[#071427] text-white dark:bg-[#1BB6D4] dark:text-[#071427]"
                                : "border border-[#071427]/10 bg-white text-[#071427]/80 hover:border-[#0F9D8F] hover:text-[#0F9D8F] dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white/80 dark:hover:border-[#1BB6D4] dark:hover:text-[#1BB6D4]"
                            }`}
                          >
                            {fmt(n)}
                          </button>
                        </li>
                      )
                    )}

                    <li>
                      <button
                        type="button"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label={t.next}
                        className="inline-flex h-10 items-center gap-1 rounded-lg border border-[#071427]/10 bg-white px-3 text-sm font-medium text-[#071427]/80 outline-none transition-colors hover:border-[#0F9D8F] hover:text-[#0F9D8F] focus-visible:ring-2 focus-visible:ring-[#0F9D8F] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#071427]/10 disabled:hover:text-[#071427]/80 dark:border-white/10 dark:bg-[#0B1F3A] dark:text-white/80 dark:hover:border-[#1BB6D4] dark:hover:text-[#1BB6D4] dark:focus-visible:ring-[#1BB6D4] dark:disabled:hover:border-white/10 dark:disabled:hover:text-white/80"
                      >
                        <span className="hidden sm:inline">{t.next}</span>
                        <ChevronRight size={18} aria-hidden="true" />
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </motion.div>
          </main>
        </div>

        {/* ============ Newsletter ============ */}
        <section className="mt-24 grid items-center gap-8 rounded-2xl bg-[#071427] p-8 text-white dark:bg-[#0B1F3A] sm:p-12 lg:mt-32 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2
              className={`text-balance text-2xl font-bold sm:text-3xl ${
                isBn ? "leading-[1.5]" : "leading-tight"
              }`}
            >
              {t.newsletterTitle}
            </h2>
            <p className={`mt-3 max-w-[56ch] text-base text-white/75 ${bodyFit}`}>
              {t.newsletterSubtitle}
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row lg:col-span-5"
          >
            <input
              type="email"
              required
              aria-label={t.emailPlaceholder}
              placeholder={t.emailPlaceholder}
              className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#1BB6D4]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-[#0F9D8F] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0c8a7d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071427] dark:bg-[#1BB6D4] dark:text-[#071427] dark:hover:bg-[#3cc4df]"
            >
              {t.newsletterBtn}
            </button>
          </form>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}