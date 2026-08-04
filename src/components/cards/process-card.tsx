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
          className="border-border bg-background/35 relative aspect-[16/8] overflow-hidden border"
        >
          <div className="bg-border absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2" />

          <span className="border-accent bg-background group-hover/process:bg-accent absolute top-1/2 left-[12%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/process:scale-125" />

          <span className="border-border bg-background group-hover/process:border-accent absolute top-1/2 left-[38%] size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125" />

          <span className="border-border bg-background group-hover/process:border-accent absolute top-1/2 left-[64%] size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125" />

          <span className="bg-accent absolute top-1/2 right-[12%] size-3 -translate-y-1/2 rotate-45 shadow-[0_0_24px_rgba(79,124,255,0.42)] transition-transform duration-500 ease-out group-hover/process:scale-125 group-hover/process:rotate-[135deg]" />

          <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Inputs
          </p>

          <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Context
          </p>
        </div>
      );

    case "define":
      return (
        <div
          aria-hidden="true"
          className="border-border bg-background/35 relative aspect-[16/8] overflow-hidden border"
        >
          <div className="border-border group-hover/process:border-accent/30 absolute top-1/2 left-1/2 aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-700 ease-out group-hover/process:scale-105" />

          <div className="border-border group-hover/process:border-accent/30 absolute top-1/2 left-1/2 aspect-square w-[27%] -translate-x-1/2 -translate-y-1/2 rotate-45 border transition-[transform,border-color] duration-700 ease-out group-hover/process:-translate-x-1/2 group-hover/process:-translate-y-1/2 group-hover/process:rotate-[49deg]" />

          <div className="bg-border/60 absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />

          <div className="bg-border/60 absolute top-0 left-1/2 h-full w-px -translate-x-1/2" />

          <span className="bg-accent absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_26px_rgba(79,124,255,0.45)] transition-transform duration-500 ease-out group-hover/process:scale-150" />

          <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Priorities
          </p>

          <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Direction
          </p>
        </div>
      );

    case "build":
      return (
        <div
          aria-hidden="true"
          className="border-border bg-background/35 relative aspect-[16/8] overflow-hidden border"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="border-border bg-surface/50 group-hover/process:border-accent/30 absolute top-[19%] left-[12%] h-[62%] w-[76%] overflow-hidden border transition-[transform,border-color] duration-700 ease-out group-hover/process:-translate-y-1">
            <div className="border-border flex h-8 items-center justify-between border-b px-3">
              <div className="flex gap-2">
                <span className="bg-muted/30 size-1.5 rounded-full" />
                <span className="bg-muted/20 size-1.5 rounded-full" />
                <span className="bg-muted/15 size-1.5 rounded-full" />
              </div>

              <span className="bg-accent/45 h-1.5 w-10 rounded-full" />
            </div>

            <div className="grid h-[calc(100%-2rem)] grid-cols-[0.34fr_0.66fr]">
              <div className="border-border border-r p-3">
                <div className="bg-muted/20 h-1.5 w-8 rounded-full" />

                <div className="mt-4 space-y-2">
                  <div className="bg-muted/10 h-1.5 w-full rounded-full" />
                  <div className="bg-muted/10 h-1.5 w-4/5 rounded-full" />
                </div>
              </div>

              <div className="p-3">
                <div className="border-border bg-background/50 h-8 rounded-md border" />

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="border-border bg-background/40 h-7 rounded-md border" />
                  <div className="border-border bg-background/40 h-7 rounded-md border" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Design
          </p>

          <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Engineering
          </p>
        </div>
      );

    case "refine":
      return (
        <div
          aria-hidden="true"
          className="border-border bg-background/35 relative aspect-[16/8] overflow-hidden border"
        >
          <div className="bg-border absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2" />

          <span className="border-border bg-background group-hover/process:border-accent absolute top-1/2 left-[12%] size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125" />

          <span className="border-border bg-background group-hover/process:border-accent absolute top-1/2 left-[34%] size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125" />

          <span className="border-border bg-background group-hover/process:border-accent absolute top-1/2 left-[56%] size-2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-500 ease-out group-hover/process:scale-125" />

          <span className="border-accent bg-accent/[0.1] group-hover/process:bg-accent absolute top-1/2 right-[12%] flex size-8 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_0_28px_rgba(79,124,255,0.2)] transition-[transform,background-color,box-shadow] duration-500 ease-out group-hover/process:scale-110 group-hover/process:shadow-[0_0_34px_rgba(79,124,255,0.38)]">
            <span className="bg-accent group-hover/process:bg-accent-foreground size-2 rotate-45 transition-colors duration-300" />
          </span>

          <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Review
          </p>

          <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Delivery
          </p>
        </div>
      );
  }
}

export function ProcessCard({ step, isLast }: ProcessCardProps) {
  return (
    <article className="group/process relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 pb-14 last:pb-0 lg:block lg:pb-0">
      <div className="relative flex justify-center lg:block">
        <span
          aria-hidden="true"
          className="border-accent bg-background group-hover/process:bg-accent relative z-20 mt-0.5 flex size-5 items-center justify-center rounded-full border shadow-[0_0_0_5px_var(--background)] transition-[transform,background-color,box-shadow] duration-500 ease-out group-hover/process:scale-125 group-hover/process:shadow-[0_0_0_7px_var(--background),0_0_26px_rgba(79,124,255,0.35)]"
        >
          <span className="bg-accent group-hover/process:bg-accent-foreground size-1 rounded-full transition-colors duration-300" />
        </span>

        {!isLast ? (
          <span
            aria-hidden="true"
            className="bg-border absolute top-5 bottom-[-3.5rem] left-1/2 w-px -translate-x-1/2 lg:hidden"
          />
        ) : null}
      </div>

      <div className="min-w-0 lg:pt-11">
        <div className="flex items-center justify-between gap-6">
          <p className="text-accent font-mono text-sm tracking-[0.18em]">
            {step.number}
          </p>

          <span
            aria-hidden="true"
            className="bg-border group-hover/process:bg-accent h-px w-8 transition-[width,background-color] duration-500 ease-out group-hover/process:w-14"
          />
        </div>

        <div className="mt-8">
          <ProcessVisual step={step} />
        </div>

        <h3 className="text-foreground group-hover/process:text-accent mt-10 text-3xl font-medium tracking-[-0.045em] transition-colors duration-300 sm:text-4xl">
          {step.title}
        </h3>

        <p className="text-muted group-hover/process:text-foreground/75 mt-5 max-w-md text-base leading-7 transition-colors duration-300">
          {step.description}
        </p>

        <div className="border-border mt-9 border-t pt-5">
          <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Outcome
          </p>

          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-foreground text-sm font-medium">
              {step.outcome}
            </p>

            <span
              aria-hidden="true"
              className="text-muted group-hover/process:text-accent transition-[transform,color] duration-300 group-hover/process:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
