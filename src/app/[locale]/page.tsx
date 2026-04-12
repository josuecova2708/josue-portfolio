import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TechStackSection from '@/components/sections/TechStackSection';
import WhyMeSection from '@/components/sections/WhyMeSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <WhyMeSection />
      <ProcessSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
