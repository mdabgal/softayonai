import Abouthero from "@/components/about/Abouthero";
import BestEmployerSection from "@/components/about/BestEmployerSection";
import CompanyOverviewCulture from "@/components/about/CompanyOverviewCulture";
import LeadershipAndClients from "@/components/about/LeadershipAndClients";
import OurMissionVision from "@/components/about/OurMissionVision";
import OurTeamSection from "@/components/about/OurTeamSection";
import SuccessStory from "@/components/about/SuccessStory";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "About Us | SoftAyona",
  description: "Learn more about SoftAyona's journey, mission, vision, core values, and expertise.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
      <Abouthero/>
      <SuccessStory/>
      <OurMissionVision/>
      <LeadershipAndClients/>
      <CompanyOverviewCulture/>
      <BestEmployerSection/>
      <OurTeamSection/>
      </main>
      <Footer />
    </>
  );
}