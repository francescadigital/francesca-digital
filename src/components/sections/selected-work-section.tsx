import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { ProjectCard } from "@/components/cards/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="section-spacing relative overflow-hidden border-b border-border"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title={
                <span id="selected-work-heading">
                  Projects shaped by clarity, purpose and performance.
                </span>
              }
              description="A selection of digital experiences designed to communicate clearly, build trust and support meaningful business goals."
            />
          </Reveal>

          <Reveal
            variant="left"
            delay={0.1}
            className="w-fit lg:mb-1"
          >
            <ButtonLink
              href="/work"
              variant="secondary"
              arrow="right"
            >
              View all projects
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger
          slow
          className="mt-16 grid items-stretch gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8"
        >
          {featuredProjects.map((project, index) => (
            <StaggerItem
              key={project.slug}
              className="h-full"
            >
              <div
                className={
                  index % 2 === 1
                    ? "h-full lg:translate-y-12"
                    : "h-full"
                }
              >
                <ProjectCard
                  project={project}
                  priority={index === 0}
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal
          delay={0.1}
          className="mt-20 lg:mt-32"
        >
          <div className="flex flex-col gap-5 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl leading-6">
              Each engagement is shaped around the product, audience and
              business context rather than a fixed visual formula.
            </p>

            <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Strategy · Design · Engineering
            </p>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[28%] left-[-18rem] -z-10 size-[38rem] rounded-full bg-accent/[0.035] blur-[160px]"
      />
    </section>
  );
}