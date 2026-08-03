import type { ProcessStep } from "@/data/process/types";

type ProcessCardProps = {
  step: ProcessStep;
  isLast: boolean;
};

function ProcessVisual({ step }: { step: ProcessStep }) {
  switch (step.id) {
    case "understand":
      return (
        <div
          aria-hidden="true"
          className="relative aspect-[16/8] overflow-hidden border border-border bg-background/35"
        >
          <div className="absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2 bg-border" />

          <span className="absolute top-1/2 left-[12%] size-2 -translate-y-1/2 rounded-full border border-accent bg-background transition-[transform,background-color] duration-500 ease-out group-hover/process:scale-125 group-hover/process:bg-accent" />

          <span className="absolute top-1/2 left-[38%] size-2 -translate-y-1/2 rounded-full border border-border bg-background transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125 group-hover/process:border-accent" />

          <span className="absolute top-1/2 left-[64%] size-2 -translate-y-1/2 rounded-full border border-border bg-background transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125 group-hover/process:border-accent" />

          <span className="absolute top-1/2 right-[12%] size-3 -translate-y-1/2 rotate-45 bg-accent shadow-[0_0_24px_rgba(79,124,255,0.42)] transition-transform duration-500 ease-out group-hover/process:rotate-[135deg] group-hover/process:scale-125" />

          <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Inputs
          </p>

          <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Context
          </p>
        </div>
      );

    case "define":
      return (
        <div
          aria-hidden="true"
          className="relative aspect-[16/8] overflow-hidden border border-border bg-background/35"
        >
          <div className="absolute top-1/2 left-1/2 aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border transition-[transform,border-color] duration-700 ease-out group-hover/process:scale-105 group-hover/process:border-accent/30" />

          <div className="absolute top-1/2 left-1/2 aspect-square w-[27%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-border transition-[transform,border-color] duration-700 ease-out group-hover/process:-translate-x-1/2 group-hover/process:-translate-y-1/2 group-hover/process:rotate-[49deg] group-hover/process:border-accent/30" />

          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border/60" />

          <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border/60" />

          <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_26px_rgba(79,124,255,0.45)] transition-transform duration-500 ease-out group-hover/process:scale-150" />

          <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Priorities
          </p>

          <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Direction
          </p>
        </div>
      );

    case "build":
      return (
        <div
          aria-hidden="true"
          className="relative aspect-[16/8] overflow-hidden border border-border bg-background/35"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="absolute top-[19%] left-[12%] h-[62%] w-[76%] overflow-hidden border border-border bg-surface/50 transition-[transform,border-color] duration-700 ease-out group-hover/process:-translate-y-1 group-hover/process:border-accent/30">
            <div className="flex h-8 items-center justify-between border-b border-border px-3">
              <div className="flex gap-2">
                <span className="size-1.5 rounded-full bg-muted/30" />
                <span className="size-1.5 rounded-full bg-muted/20" />
                <span className="size-1.5 rounded-full bg-muted/15" />
              </div>

              <span className="h-1.5 w-10 rounded-full bg-accent/45" />
            </div>

            <div className="grid h-[calc(100%-2rem)] grid-cols-[0.34fr_0.66fr]">
              <div className="border-r border-border p-3">
                <div className="h-1.5 w-8 rounded-full bg-muted/20" />

                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-muted/10" />
                  <div className="h-1.5 w-4/5 rounded-full bg-muted/10" />
                </div>
              </div>

              <div className="p-3">
                <div className="h-8 rounded-md border border-border bg-background/50" />

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="h-7 rounded-md border border-border bg-background/40" />
                  <div className="h-7 rounded-md border border-border bg-background/40" />
                </div>
              </div>
            </div>
          </div>

          <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Design
          </p>

          <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Engineering
          </p>
        </div>
      );

    case "refine":
      return (
        <div
          aria-hidden="true"
          className="relative aspect-[16/8] overflow-hidden border border-border bg-background/35"
        >
          <div className="absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2 bg-border" />

          <span className="absolute top-1/2 left-[12%] size-2 -translate-y-1/2 rounded-full border border-border bg-background transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125 group-hover/process:border-accent" />

          <span className="absolute top-1/2 left-[34%] size-2 -translate-y-1/2 rounded-full border border-border bg-background transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125 group-hover/process:border-accent" />

          <span className="absolute top-1/2 left-[56%] size-2 -translate-y-1/2 rounded-full border border-border bg-background transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125 group-hover/process:border-accent" />

          <span className="absolute top-1/2 right-[12%] flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-accent/[0.1] shadow-[0_0_28px_rgba(79,124,255,0.2)] transition-[transform,background-color,box-shadow] duration-500 ease-out group-hover/process:scale-110 group-hover/process:bg-accent group-hover/process:shadow-[0_0_34px_rgba(79,124,255,0.38)]">
            <span className="size-2 rotate-45 bg-accent transition-colors duration-300 group-hover/process:bg-accent-foreground" />
          </span>

          <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Review
          </p>

          <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
            Delivery
          </p>
        </div>
      );
  }
}

export function ProcessCard({
  step,
  isLast,
}: ProcessCardProps) {
  return (
    <article className="group/process relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 pb-14 last:pb-0 lg:block lg:pb-0">
      <div className="relative flex justify-center lg:block">
        <span
          aria-hidden="true"
          className="relative z-20 mt-0.5 flex size-5 items-center justify-center rounded-full border border-accent bg-background shadow-[0_0_0_5px_var(--background)] transition-[transform,background-color,box-shadow] duration-500 ease-out group-hover/process:scale-125 group-hover/process:bg-accent group-hover/process:shadow-[0_0_0_7px_var(--background),0_0_26px_rgba(79,124,255,0.35)]"
        >
          <span className="size-1 rounded-full bg-accent transition-colors duration-300 group-hover/process:bg-accent-foreground" />
        </span>

        {!isLast ? (
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-[-3.5rem] left-1/2 w-px -translate-x-1/2 bg-border lg:hidden"
          />
        ) : null}
      </div>

      <div className="min-w-0 lg:pt-11">
        <div className="flex items-center justify-between gap-6">
          <p className="font-mono text-sm tracking-[0.18em] text-accent">
            {step.number}
          </p>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-border transition-[width,background-color] duration-500 ease-out group-hover/process:w-14 group-hover/process:bg-accent"
          />
        </div>

        <div className="mt-8">
          <ProcessVisual step={step} />
        </div>

        <h3 className="mt-10 text-3xl font-medium tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover/process:text-accent sm:text-4xl">
          {step.title}
        </h3>

        <p className="mt-5 max-w-md text-base leading-7 text-muted transition-colors duration-300 group-hover/process:text-foreground/75">
          {step.description}
        </p>

        <div className="mt-9 border-t border-border pt-5">
          <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
            Outcome
          </p>

          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-foreground">
              {step.outcome}
            </p>

            <span
              aria-hidden="true"
              className="text-muted transition-[transform,color] duration-300 group-hover/process:translate-x-1 group-hover/process:text-accent"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}