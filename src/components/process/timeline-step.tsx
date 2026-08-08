import type { ProcessStep } from "@/data/process/types";

import { TimelineConnector } from "./timeline-connector";

type TimelineStepProps = {
  step: ProcessStep;
  isLast: boolean;
};

export function TimelineStep({ step, isLast }: TimelineStepProps) {
  return (
    <article className="group/process relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 pb-12 last:pb-0 lg:block lg:pb-0">
      <div className="relative">
        <span
          aria-hidden="true"
          className="border-accent bg-background group-hover/process:bg-accent relative z-10 flex size-5 items-center justify-center rounded-full border shadow-[0_0_0_5px_var(--background)] transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover/process:scale-125 group-hover/process:shadow-[0_0_0_6px_var(--background),0_0_24px_rgba(79,124,255,0.28)]"
        >
          <span className="bg-accent group-hover/process:bg-accent-foreground size-1 rounded-full transition-colors duration-300" />
        </span>

        {!isLast ? <TimelineConnector /> : null}
      </div>

      <div className="min-w-0 lg:pt-10">
        <div className="flex items-center justify-between gap-6">
          <p className="text-accent font-mono text-[0.625rem] tracking-[0.18em]">
            {step.number}
          </p>

          <span
            aria-hidden="true"
            className="bg-border group-hover/process:bg-accent h-px w-8 transition-[width,background-color] duration-300 group-hover/process:w-12 lg:hidden"
          />
        </div>

        <h3 className="text-foreground group-hover/process:text-accent mt-4 max-w-xs text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 sm:text-3xl">
          {step.title}
        </h3>

        <p className="text-foreground/80 mt-4 max-w-sm text-sm leading-6">
          {step.summary}
        </p>

        <p className="text-muted group-hover/process:text-foreground/70 mt-5 max-w-md text-sm leading-6 transition-colors duration-300">
          {step.description}
        </p>

        <div className="border-border mt-7 border-t pt-4">
          <p className="text-muted font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Client outcome
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
