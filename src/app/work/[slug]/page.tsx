import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="section-spacing border-b border-border">
        <div className="site-container">
          <SectionLabel>{project.category}</SectionLabel>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.35fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-medium tracking-[-0.07em] text-foreground">
                {project.title}
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {project.description}
              </p>
            </div>

            <dl className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                  Category
                </dt>

                <dd className="mt-3 text-sm text-foreground">
                  {project.category}
                </dd>
              </div>

              <div className="mt-8">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                  Year
                </dt>

                <dd className="mt-3 text-sm text-foreground">
                  {project.year}
                </dd>
              </div>

              <div className="mt-8">
                <dt className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                  Status
                </dt>

                <dd className="mt-3 text-sm text-foreground">
                  Case study in preparation
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <div className="grid gap-12 border border-border bg-card p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div>
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-accent uppercase">
                Case study
              </p>

              <h2 className="mt-6 max-w-3xl text-3xl font-medium tracking-[-0.045em] text-foreground sm:text-4xl">
                The complete project story is currently being prepared.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-muted">
                This page will later include the project context, strategic
                decisions, design system, implementation details and final
                outcomes.
              </p>
            </div>

            <ButtonLink
              href="/work"
              variant="secondary"
              arrow="right"
              className="w-fit"
            >
              Back to all projects
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}