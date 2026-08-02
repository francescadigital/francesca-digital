import type { Metadata } from "next";

import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected digital projects by Francesca Digital across strategy, design and development.",
};

export default function WorkPage() {
  return (
    <main className="section-spacing">
      <div className="site-container">
        <SectionHeading
          as="h1"
          eyebrow="Work"
          title="Selected digital projects."
          description="Detailed case studies are currently being prepared. This page will become the complete portfolio of Francesca Digital."
        />
      </div>
    </main>
  );
}