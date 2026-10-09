import type { Metadata } from "next";

import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyFrancescaSection } from "@/components/sections/why-francesca-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Francesca Digital",
  description:
    "Independent digital studio creating thoughtful websites and digital experiences through strategy, design and engineering.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyFrancescaSection />
      <ServicesSection />
      <ProcessSection />
      <ContactCtaSection />
    </main>
  );
}
