import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects/types";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
};

function GeometryPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0d0e11]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,124,255,0.08),transparent_58%)]" />

      <div className="absolute top-1/2 left-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 transition-transform duration-700 ease-out group-hover:scale-[1.04]" />

      <div className="absolute top-1/2 left-1/2 aspect-square w-[42%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-border/80 transition-transform duration-700 ease-out group-hover:rotate-[49deg]" />

      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border/40" />

      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border/40" />

      <div className="absolute top-1/2 left-1/2 flex size-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/25 bg-background/85 shadow-[0_0_90px_rgba(79,124,255,0.12)] transition-[transform,box-shadow] duration-700 ease-out group-hover:scale-[1.06] group-hover:shadow-[0_0_110px_rgba(79,124,255,0.2)]">
        <div className="relative size-[54%]">
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            fill
            sizes="144px"
            className="object-contain"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[9%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[9%] size-1.5 -translate-y-1/2 rounded-full border border-accent bg-[#0d0e11]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[9%] left-1/2 size-1.5 -translate-x-1/2 rounded-full border border-accent bg-[#0d0e11]"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[9%] size-1.5 -translate-y-1/2 rounded-full border border-accent bg-[#0d0e11]"
      />

      <p className="absolute bottom-6 left-6 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Brand system
      </p>

      <p className="absolute right-6 bottom-6 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        01 / 03
      </p>
    </div>
  );
}

function GridPreview({ project }: ProjectCardProps) {
  return (
    <div className="relative h-full overflow-hidden bg-[#0d0e11]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:38px_38px]" />

      <div className="absolute top-[18%] right-[14%] h-[64%] w-[58%] rounded-[2rem] border border-border/70 bg-surface/40 shadow-2xl shadow-black/30 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-1">
        <div className="flex h-10 items-center gap-2 border-b border-border/70 px-4">
          <span className="size-1.5 rounded-full bg-muted/40" />
          <span className="size-1.5 rounded-full bg-muted/30" />
          <span className="size-1.5 rounded-full bg-muted/20" />
        </div>

        <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.34fr_0.66fr]">
          <div className="border-r border-border/70 p-4">
            <div className="h-2 w-10 rounded-full bg-muted/20" />

            <div className="mt-5 space-y-3">
              <div className="h-1.5 w-full rounded-full bg-muted/15" />
              <div className="h-1.5 w-4/5 rounded-full bg-muted/10" />
              <div className="h-1.5 w-3/5 rounded-full bg-muted/10" />
            </div>
          </div>

          <div className="relative overflow-hidden p-5">
            <div className="h-2 w-16 rounded-full bg-muted/20" />

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-lg border border-border/70 bg-background/50" />
              <div className="h-16 rounded-lg border border-border/70 bg-background/50" />
            </div>

            <div className="mt-3 h-24 rounded-lg border border-border/70 bg-background/50" />
          </div>
        </div>
      </div>

      <div
        className="absolute top-[32%] left-[16%] size-40 rounded-full opacity-75 blur-[70px] transition-[transform,opacity] duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
        style={{ backgroundColor: project.accent }}
      />

      <p className="absolute bottom-6 left-6 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Digital platform
      </p>

      <p className="absolute right-6 bottom-6 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        02 / 03
      </p>
    </div>
  );
}

function EditorialPreview({ project }: ProjectCardProps) {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#0d0e11]">
      <div className="absolute inset-8 border border-border/70" />

      <div className="absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 bg-border/50" />

      <div className="absolute top-1/2 right-8 left-8 h-px -translate-y-1/2 bg-border/50" />

      <div className="relative h-[58%] w-[36%] overflow-hidden rounded-sm border border-border bg-background shadow-2xl shadow-black/40 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-2">
        <div
          className="h-[42%]"
          style={{ backgroundColor: project.accent }}
        />

        <div className="p-5">
          <div className="h-2 w-12 rounded-full bg-muted/30" />
          <div className="mt-4 h-5 w-4/5 rounded-full bg-foreground/80" />

          <div className="mt-5 space-y-2">
            <div className="h-1.5 w-full rounded-full bg-muted/20" />
            <div className="h-1.5 w-5/6 rounded-full bg-muted/15" />
            <div className="h-1.5 w-2/3 rounded-full bg-muted/10" />
          </div>
        </div>
      </div>

      <p className="absolute bottom-6 left-6 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Editorial direction
      </p>

      <p className="absolute right-6 bottom-6 font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        03 / 03
      </p>
    </div>
  );
}

function ProjectPreview({ project }: ProjectCardProps) {
  switch (project.preview) {
    case "grid":
      return <GridPreview project={project} />;

    case "editorial":
      return <EditorialPreview project={project} />;

    case "geometry":
      return <GeometryPreview />;
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`View ${project.title} project`}
      className={cn(
        "group relative block overflow-hidden rounded-3xl border border-border bg-card",
        "outline-none transition-[transform,border-color,box-shadow] duration-300",
        "hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/20",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
      )}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
          <ProjectPreview project={project} />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.015]"
          />
        </div>

        <div className="relative flex flex-1 flex-col p-7 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.018] to-transparent"
          />

          <div className="relative flex items-center justify-between gap-6">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
              {project.category}
            </span>

            <span className="text-sm text-muted">
              {project.year}
            </span>
          </div>

          <h3 className="relative mt-6 text-2xl font-medium tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.75rem]">
            {project.title}
          </h3>

          <p className="relative mt-4 max-w-xl flex-1 leading-7 text-muted">
            {project.description}
          </p>

          <div className="relative mt-8 flex items-center justify-between gap-6 border-t border-border pt-6">
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent transition-[width] duration-300 group-hover:w-12" />

              <span className="text-sm font-medium text-foreground">
                View project
              </span>
            </span>

            <span
              aria-hidden="true"
              className="text-muted transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-accent"
            >
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}