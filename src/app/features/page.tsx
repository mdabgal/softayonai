"use client";

import FeaturesHero from "@/components/features/FeaturesHero";
import CoreFeatures from "@/components/features/CoreFeatures";
import AdvancedCapabilities from "@/components/features/AdvancedCapabilities";
import IntegrationSection from "@/components/features/IntegrationSection";
import SecuritySection from "@/components/features/SecuritySection";
import FeatureCTA from "@/components/features/FeatureCTA";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#EEF4F7] dark:bg-[#06101E] transition-colors duration-300">
      {/* 1. Hero Section */}

      <Navbar/>
      <FeaturesHero />

      {/* 2. Core Features Section */}
      <CoreFeatures />

      {/* 3. Advanced Capabilities Section */}
      <AdvancedCapabilities />

      {/* 4. Integration & Compatibility Section */}
      <IntegrationSection />

      {/* 5. Security & Performance Section */}
      <SecuritySection />

      {/* 6. Call to Action Section */}
      <FeatureCTA />

      <Footer/>
    </main>
  );
}