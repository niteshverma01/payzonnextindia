"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Stats from "@/components/stats";
import Portfolio from "@/components/portfolio1";
import ProfessionalStaff from "@/components/professional-staff";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import ServicesSection from "@/components/service";
import AwardsAchievements from "@/components/collaboration";
import NewComponent from "@/components/newcomponent";
import MarqueeDemo from "@/components/marquee";
import MarketingSection from "@/components/marketing";
import BusinessShowcase from "@/components/orbite";
import PayZoneFAQ from "@/components/faq";
import ITSolutionsSection from "@/components/blogs";
import DigitalMarketingUI from "@/components/marketingpage";
import CybersecuritySliderUI from "@/components/cyber";
import HowItWorks from "@/components/onemore";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection />
      <About />
      <AwardsAchievements />
      <ProfessionalStaff />
      <Portfolio />
      {/* <MarqueeDemo /> */}
      {/* <Services /> */}
      <DigitalMarketingUI />
      {/* <Stats /> */}
      <ITSolutionsSection />
      <CybersecuritySliderUI />
      <HowItWorks/>
      {/* <Team /> */}
      {/* <MarketingSection /> */}
      {/* <BusinessShowcase /> */}
      {/* <NewComponent /> */}
      <Testimonials />
      <PayZoneFAQ />
      <ScrollToTop />
    </main>
  );
}
