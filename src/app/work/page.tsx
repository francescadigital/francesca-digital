import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
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
    <main>
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Work"
              title="Selected digital projects."
              description="A collection of digital products shaped through strategy, design and engineering."
            />
          </Reveal>

          <Stagger
            slow
            className="mt-16 grid items-stretch gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8"
          >
            {projects.map((project, index) => (
              <StaggerItem key={project.slug} className="h-full">
                <div
                  className={
                    index % 2 === 1 ? "h-full lg:translate-y-12" : "h-full"
                  }
                >
                  <ProjectCard project={project} priority={index === 0} />
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-20 lg:mt-32">
            <div className="border-border text-muted flex flex-col gap-5 border-t pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl leading-6">
                Each project responds to its own audience, context and business
                goals while following the same principles of clarity,
                performance and long-term quality.
              </p>

              <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Strategy · Design · Engineering
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
