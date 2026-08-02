import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyFrancescaSection } from "@/components/sections/why-francesca-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedWorkSection />
      <ServicesSection />
      <ProcessSection />
      <WhyFrancescaSection />
      <ContactCtaSection />
    </main>
  );
}