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
      className="section-spacing border-b border-border"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <span id="selected-work-heading">
                Projects shaped by clarity, purpose and performance.
              </span>
            }
            description="A selection of digital experiences designed to communicate clearly, build trust and support meaningful business goals."
          />

          <ButtonLink
            href="/work"
            variant="secondary"
            arrow="right"
            className="w-fit"
          >
            View all projects
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}