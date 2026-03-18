import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ProcessSection />
        <CtaSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
};

export default Index;
