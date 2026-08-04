import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Selected digital projects by Francesca Digital across strategy, design and development.",
  path: "/work",
  keywords: [
    "digital portfolio",
    "web design portfolio",
    "digital product case studies",
  ],
});

export default function WorkPage() {
  return (
    <Section as="main">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Work"
          title="Selected digital projects."
          description="Detailed case studies are currently being prepared. This page will become the complete portfolio of Francesca Digital."
        />
      </Container>
    </Section>
  );
}
