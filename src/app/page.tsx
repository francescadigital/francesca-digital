import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyFrancescaSection } from "@/components/sections/why-francesca-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <HeroSection />
        <SelectedWorkSection />
        <ServicesSection />
        <ProcessSection />
        <WhyFrancescaSection />
      </main>
    </div>
  );
}