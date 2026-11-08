import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero"; // পাথটি আপডেট করা হলো
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TechStackSection from "@/components/home/TechStackSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import IndustriesAndClientsSection from "@/components/home/IndustriesAndClientsSection";
import QuoteOrderSection from "@/components/home/QuoteOrderSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F9FA] dark:bg-[#0B1F3A]">
      <Navbar />
      <Hero />
      <FeaturedServices/>
      <WhyChooseUs/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <TechStackSection/>
      <FAQSection/>
      
      <QuoteOrderSection/>
      <CTASection/>
<IndustriesAndClientsSection/>
<Footer/>
    </main>
  );
}