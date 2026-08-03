import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects/types";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

function GeometryPreview() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0d0e11]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,124,255,0.1),transparent_56%)]" />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 transition-[transform,border-color] duration-700 ease-out group-hover/card:scale-[1.035] group-hover/card:border-border"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-border/80 transition-[transform,border-color] duration-700 ease-out group-hover/card:-translate-x-1/2 group-hover/card:-translate-y-1/2 group-hover/card:rotate-[49deg] group-hover/card:border-accent/30"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border/45"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border/45"
      />

      <div className="absolute top-1/2 left-1/2 flex size-[29%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-background/90 shadow-[0_0_90px_rgba(79,124,255,0.14)] transition-[transform,border-color,box-shadow] duration-700 ease-out group-hover/card:-translate-x-1/2 group-hover/card:-translate-y-1/2 group-hover/card:scale-[1.06] group-hover/card:border-accent/50 group-hover/card:shadow-[0_0_120px_rgba(79,124,255,0.23)]">
        <div className="relative size-[58%] transition-transform duration-700 ease-out group-hover/card:scale-[1.04]">
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute top-[9%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_rgba(79,124,255,0.65)] transition-transform duration-500 ease-out group-hover/card:scale-125"
      />

      <span
        aria-hidden="true"
        className="absolute top-1/2 right-[9%] size-1.5 -translate-y-1/2 rounded-full border border-accent bg-[#0d0e11] transition-[transform,background-color] duration-500 ease-out group-hover/card:scale-125 group-hover/card:bg-accent"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-[9%] left-1/2 size-1.5 -translate-x-1/2 rounded-full border border-accent bg-[#0d0e11] transition-[transform,background-color] duration-500 ease-out group-hover/card:scale-125 group-hover/card:bg-accent"
      />

      <span
        aria-hidden="true"
        className="absolute top-1/2 left-[9%] size-1.5 -translate-y-1/2 rounded-full border border-accent bg-[#0d0e11] transition-[transform,background-color] duration-500 ease-out group-hover/card:scale-125 group-hover/card:bg-accent"
      />

      <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-6 sm:right-6 sm:bottom-6 sm:left-6">
        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/card:text-foreground">
          Brand system
        </p>

        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
          01 / 03
        </p>
      </div>
    </div>
  );
}

function GridPreview({ project }: ProjectCardProps) {
  return (
    <div className="relative h-full overflow-hidden bg-[#0d0e11]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:38px_38px] transition-transform duration-700 ease-out group-hover/card:scale-[1.02]" />

      <div
        aria-hidden="true"
        className="absolute top-[24%] left-[11%] size-40 rounded-full opacity-70 blur-[72px] transition-[transform,opacity] duration-700 ease-out group-hover/card:scale-125 group-hover/card:opacity-90"
        style={{ backgroundColor: project.accent }}
      />

      <div className="absolute top-[14%] right-[10%] h-[69%] w-[66%] overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface/55 shadow-2xl shadow-black/35 transition-[transform,border-color,box-shadow] duration-700 ease-out group-hover/card:-translate-y-2 group-hover/card:translate-x-1 group-hover/card:border-accent/25 group-hover/card:shadow-black/50">
        <div className="flex h-10 items-center justify-between border-b border-border/70 px-4">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-muted/40" />
            <span className="size-1.5 rounded-full bg-muted/30" />
            <span className="size-1.5 rounded-full bg-muted/20" />
          </div>

          <div className="h-1.5 w-12 rounded-full bg-muted/15" />
        </div>

        <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.32fr_0.68fr]">
          <div className="border-r border-border/70 p-4">
            <div className="h-2 w-10 rounded-full bg-muted/25" />

            <div className="mt-5 space-y-3">
              <div className="h-1.5 w-full rounded-full bg-muted/15" />
              <div className="h-1.5 w-4/5 rounded-full bg-muted/10" />
              <div className="h-1.5 w-3/5 rounded-full bg-muted/10" />
            </div>

            <div className="mt-8 space-y-3">
              <div className="h-1.5 w-5/6 rounded-full bg-muted/10" />
              <div className="h-1.5 w-2/3 rounded-full bg-muted/10" />
            </div>
          </div>

          <div className="relative overflow-hidden p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="h-2 w-16 rounded-full bg-muted/25" />
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-lg border border-border/70 bg-background/55" />
              <div className="h-16 rounded-lg border border-border/70 bg-background/55" />
            </div>

            <div className="relative mt-3 h-24 overflow-hidden rounded-lg border border-border/70 bg-background/55">
              <div
                aria-hidden="true"
                className="absolute right-3 bottom-3 left-3 h-px origin-left scale-x-75 transition-transform duration-700 ease-out group-hover/card:scale-x-100"
                style={{ backgroundColor: project.accent }}
              />

              <div className="absolute top-4 left-4 h-2 w-16 rounded-full bg-muted/15" />
              <div className="absolute top-9 left-4 h-1.5 w-4/5 rounded-full bg-muted/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-6 sm:right-6 sm:bottom-6 sm:left-6">
        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/card:text-foreground">
          Digital platform
        </p>

        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
          02 / 03
        </p>
      </div>
    </div>
  );
}

function EditorialPreview({ project }: ProjectCardProps) {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#0d0e11]">
      <div
        aria-hidden="true"
        className="absolute inset-8 border border-border/70 transition-[inset,border-color] duration-700 ease-out group-hover/card:inset-7 group-hover/card:border-border"
      />

      <div
        aria-hidden="true"
        className="absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 bg-border/50"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 right-8 left-8 h-px -translate-y-1/2 bg-border/50"
      />

      <div className="relative h-[60%] w-[38%] overflow-hidden rounded-sm border border-border bg-background shadow-2xl shadow-black/40 transition-[transform,border-color,box-shadow] duration-700 ease-out group-hover/card:-translate-y-2 group-hover/card:rotate-2 group-hover/card:border-accent/25 group-hover/card:shadow-black/55">
        <div
          className="h-[42%] transition-[filter] duration-700 group-hover/card:brightness-110"
          style={{ backgroundColor: project.accent }}
        />

        <div className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="h-2 w-12 rounded-full bg-muted/30" />
            <div className="size-1.5 rounded-full bg-accent" />
          </div>

          <div className="mt-4 h-5 w-4/5 rounded-full bg-foreground/80" />

          <div className="mt-5 space-y-2">
            <div className="h-1.5 w-full rounded-full bg-muted/20" />
            <div className="h-1.5 w-5/6 rounded-full bg-muted/15" />
            <div className="h-1.5 w-2/3 rounded-full bg-muted/10" />
          </div>
        </div>
      </div>

      <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-6 sm:right-6 sm:bottom-6 sm:left-6">
        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/card:text-foreground">
          Editorial direction
        </p>

        <p className="font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
          03 / 03
        </p>
      </div>
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

export function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`View ${project.title} project`}
      className={cn(
        "group/card relative block h-full overflow-hidden rounded-3xl border border-border bg-card",
        "outline-none transition-[transform,border-color,box-shadow,background-color] duration-500 ease-out",
        "hover:-translate-y-1.5 hover:border-accent/40 hover:bg-card hover:shadow-[0_28px_80px_rgba(0,0,0,0.3)]",
        "focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
      )}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
          <ProjectPreview project={project} />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.02]"
          />

          {priority ? (
            <span className="sr-only">
              Featured project
            </span>
          ) : null}
        </div>

        <div className="relative flex flex-1 flex-col p-7 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover/card:opacity-100"
          />

          <div className="relative flex items-center justify-between gap-6">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
              {project.category}
            </span>

            <span className="font-mono text-[0.625rem] tracking-[0.14em] text-muted">
              {project.year}
            </span>
          </div>

          <h3 className="relative mt-6 max-w-lg text-2xl font-medium tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover/card:text-accent sm:text-[1.8rem]">
            {project.title}
          </h3>

          <p className="relative mt-4 max-w-xl flex-1 leading-7 text-muted transition-colors duration-300 group-hover/card:text-foreground/75">
            {project.description}
          </p>

          <div className="relative mt-8 flex items-center justify-between gap-6 border-t border-border pt-6">
            <span className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-accent transition-[width] duration-500 ease-out group-hover/card:w-14"
              />

              <span className="text-sm font-medium text-foreground">
                View project
              </span>
            </span>

            <span
              aria-hidden="true"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-[transform,border-color,background-color,color] duration-300 group-hover/card:translate-x-1 group-hover/card:border-accent/40 group-hover/card:bg-accent group-hover/card:text-accent-foreground"
            >
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}