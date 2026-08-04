import type { Principle } from "@/data/principles/types";

type PrincipleCardProps = {
  principle: Principle;
};

function PrincipleVisual({ principle }: PrincipleCardProps) {
  switch (principle.id) {
    case "precision":
      return (
        <div aria-hidden="true" className="relative size-16 shrink-0">
          <div className="border-border group-hover/principle:border-accent/35 absolute inset-0 rounded-full border transition-[transform,border-color] duration-700 ease-out group-hover/principle:scale-110" />

          <div className="bg-border absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />

          <div className="bg-border absolute top-0 left-1/2 h-full w-px -translate-x-1/2" />

          <div className="bg-accent absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[0_0_24px_rgba(79,124,255,0.4)] transition-transform duration-500 ease-out group-hover/principle:scale-125 group-hover/principle:rotate-[135deg]" />
        </div>
      );

    case "clarity":
      return (
        <div aria-hidden="true" className="relative size-16 shrink-0">
          <div className="border-border group-hover/principle:border-accent/35 absolute inset-[8%] border transition-[transform,border-color] duration-700 ease-out group-hover/principle:rotate-3" />

          <div className="border-border group-hover/principle:border-accent/35 absolute inset-[25%] border transition-[transform,border-color] duration-700 ease-out group-hover/principle:-rotate-3" />

          <span className="bg-accent absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_20px_rgba(79,124,255,0.42)] transition-transform duration-500 ease-out group-hover/principle:scale-150" />
        </div>
      );

    case "performance":
      return (
        <div aria-hidden="true" className="relative size-16 shrink-0">
          <div className="bg-border absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />

          <span className="border-accent bg-surface group-hover/principle:bg-accent absolute top-1/2 left-0 size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/principle:scale-125" />

          <span className="border-border bg-surface group-hover/principle:border-accent absolute top-1/2 left-1/3 size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/principle:scale-125" />

          <span className="border-border bg-surface group-hover/principle:border-accent absolute top-1/2 left-2/3 size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/principle:scale-125" />

          <span className="border-accent bg-accent/[0.08] group-hover/principle:bg-accent absolute top-1/2 right-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/principle:scale-110">
            <span className="bg-accent group-hover/principle:bg-accent-foreground size-1.5 rotate-45 transition-colors duration-300" />
          </span>
        </div>
      );

    case "long-term-thinking":
      return (
        <div aria-hidden="true" className="relative size-16 shrink-0">
          <div className="border-border absolute inset-0 rounded-full border" />

          <div className="border-border/80 group-hover/principle:border-accent/35 absolute inset-[18%] rounded-full border transition-[transform,border-color] duration-700 ease-out group-hover/principle:scale-110" />

          <div className="border-border/60 group-hover/principle:border-accent/35 absolute inset-[36%] rounded-full border transition-[transform,border-color] duration-700 ease-out group-hover/principle:scale-125" />

          <span className="bg-accent absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_22px_rgba(79,124,255,0.4)] transition-transform duration-500 ease-out group-hover/principle:scale-150" />
        </div>
      );
  }
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <article className="group/principle border-border relative min-h-[30rem] overflow-hidden border-t p-7 sm:p-8 lg:border-t-0 lg:border-l lg:p-10 lg:first:border-l-0 lg:[&:nth-child(3)]:border-l-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.024] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/principle:opacity-100"
      />

      <div
        aria-hidden="true"
        className="bg-accent absolute top-0 left-0 h-px w-0 transition-[width] duration-700 ease-out group-hover/principle:w-full"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="text-accent font-mono text-sm tracking-[0.18em]">
              {principle.number}
            </p>

            <p className="text-muted mt-3 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
              Principle
            </p>
          </div>

          <PrincipleVisual principle={principle} />
        </div>

        <div className="mt-auto pt-20">
          <h3 className="text-foreground group-hover/principle:text-accent max-w-md text-3xl font-medium tracking-[-0.045em] transition-colors duration-300 sm:text-4xl">
            {principle.title}
          </h3>

          <p className="text-muted group-hover/principle:text-foreground/75 mt-6 max-w-lg text-base leading-7 transition-colors duration-300">
            {principle.description}
          </p>

          <div className="border-border mt-10 border-t pt-6">
            <div className="flex items-center justify-between gap-6">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                In practice
              </p>

              <span
                aria-hidden="true"
                className="bg-border group-hover/principle:bg-accent h-px w-8 transition-[width,background-color] duration-500 ease-out group-hover/principle:w-14"
              />
            </div>

            <p className="text-foreground/80 mt-4 max-w-lg text-sm leading-6">
              {principle.practice}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
