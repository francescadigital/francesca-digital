import type { Principle } from "@/data/principles/types";

type PrincipleCardProps = {
  principle: Principle;
};

function PrincipleVisual({
  principle,
}: PrincipleCardProps) {
  switch (principle.id) {
    case "precision":
      return (
        <div
          aria-hidden="true"
          className="relative size-16 shrink-0"
        >
          <div className="absolute inset-0 rounded-full border border-border transition-[transform,border-color] duration-700 ease-out group-hover/principle:scale-110 group-hover/principle:border-accent/35" />

          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border" />

          <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border" />

          <div className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent shadow-[0_0_24px_rgba(79,124,255,0.4)] transition-transform duration-500 ease-out group-hover/principle:rotate-[135deg] group-hover/principle:scale-125" />
        </div>
      );

    case "clarity":
      return (
        <div
          aria-hidden="true"
          className="relative size-16 shrink-0"
        >
          <div className="absolute inset-[8%] border border-border transition-[transform,border-color] duration-700 ease-out group-hover/principle:rotate-3 group-hover/principle:border-accent/35" />

          <div className="absolute inset-[25%] border border-border transition-[transform,border-color] duration-700 ease-out group-hover/principle:-rotate-3 group-hover/principle:border-accent/35" />

          <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_rgba(79,124,255,0.42)] transition-transform duration-500 ease-out group-hover/principle:scale-150" />
        </div>
      );

    case "performance":
      return (
        <div
          aria-hidden="true"
          className="relative size-16 shrink-0"
        >
          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border" />

          <span className="absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full border border-accent bg-surface transition-[transform,background-color] duration-500 ease-out group-hover/principle:scale-125 group-hover/principle:bg-accent" />

          <span className="absolute top-1/2 left-1/3 size-2 -translate-y-1/2 rounded-full border border-border bg-surface transition-[transform,border-color] duration-500 ease-out group-hover/principle:scale-125 group-hover/principle:border-accent" />

          <span className="absolute top-1/2 left-2/3 size-2 -translate-y-1/2 rounded-full border border-border bg-surface transition-[transform,border-color] duration-500 ease-out group-hover/principle:scale-125 group-hover/principle:border-accent" />

          <span className="absolute top-1/2 right-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-accent/[0.08] transition-[transform,background-color] duration-500 ease-out group-hover/principle:scale-110 group-hover/principle:bg-accent">
            <span className="size-1.5 rotate-45 bg-accent transition-colors duration-300 group-hover/principle:bg-accent-foreground" />
          </span>
        </div>
      );

    case "long-term-thinking":
      return (
        <div
          aria-hidden="true"
          className="relative size-16 shrink-0"
        >
          <div className="absolute inset-0 rounded-full border border-border" />

          <div className="absolute inset-[18%] rounded-full border border-border/80 transition-[transform,border-color] duration-700 ease-out group-hover/principle:scale-110 group-hover/principle:border-accent/35" />

          <div className="absolute inset-[36%] rounded-full border border-border/60 transition-[transform,border-color] duration-700 ease-out group-hover/principle:scale-125 group-hover/principle:border-accent/35" />

          <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_22px_rgba(79,124,255,0.4)] transition-transform duration-500 ease-out group-hover/principle:scale-150" />
        </div>
      );
  }
}

export function PrincipleCard({
  principle,
}: PrincipleCardProps) {
  return (
    <article className="group/principle relative min-h-[30rem] overflow-hidden border-t border-border p-7 sm:p-8 lg:border-t-0 lg:border-l lg:p-10 lg:first:border-l-0 lg:[&:nth-child(3)]:border-l-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.024] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/principle:opacity-100"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover/principle:w-full"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="font-mono text-sm tracking-[0.18em] text-accent">
              {principle.number}
            </p>

            <p className="mt-3 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
              Principle
            </p>
          </div>

          <PrincipleVisual principle={principle} />
        </div>

        <div className="mt-auto pt-20">
          <h3 className="max-w-md text-3xl font-medium tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover/principle:text-accent sm:text-4xl">
            {principle.title}
          </h3>

          <p className="mt-6 max-w-lg text-base leading-7 text-muted transition-colors duration-300 group-hover/principle:text-foreground/75">
            {principle.description}
          </p>

          <div className="mt-10 border-t border-border pt-6">
            <div className="flex items-center justify-between gap-6">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                In practice
              </p>

              <span
                aria-hidden="true"
                className="h-px w-8 bg-border transition-[width,background-color] duration-500 ease-out group-hover/principle:w-14 group-hover/principle:bg-accent"
              />
            </div>

            <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/80">
              {principle.practice}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}