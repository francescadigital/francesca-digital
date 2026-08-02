import type { Principle } from "@/data/principles/types";

type PrincipleCardProps = {
  principle: Principle;
};

export function PrincipleCard({
  principle,
}: PrincipleCardProps) {
  return (
    <article className="group relative min-h-[28rem] overflow-hidden border-t border-border p-7 sm:p-8 lg:border-t-0 lg:border-l lg:p-10 lg:first:border-l-0 lg:[&:nth-child(3)]:border-l-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.018] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full lg:hidden"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-8">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-accent">
            {principle.number}
          </p>

          <div
            aria-hidden="true"
            className="relative size-14 shrink-0"
          >
            <div className="absolute inset-0 rounded-full border border-border transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border" />

            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border" />

            <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent transition-transform duration-500 group-hover:rotate-[135deg] group-hover:scale-125" />
          </div>
        </div>

        <div className="mt-auto pt-20">
          <h3 className="max-w-md text-3xl font-medium tracking-[-0.045em] text-foreground sm:text-4xl">
            {principle.title}
          </h3>

          <p className="mt-6 max-w-lg text-base leading-7 text-muted">
            {principle.description}
          </p>

          <div className="mt-10 border-t border-border pt-6">
            <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
              In practice
            </p>

            <p className="mt-3 max-w-lg text-sm leading-6 text-foreground/80">
              {principle.practice}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}