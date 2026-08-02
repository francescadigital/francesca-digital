import type { ProcessStep } from "@/data/process/types";

type ProcessCardProps = {
  step: ProcessStep;
  isLast: boolean;
};

export function ProcessCard({
  step,
  isLast,
}: ProcessCardProps) {
  return (
    <article className="group relative grid grid-cols-[2.5rem_1fr] gap-5 pb-12 last:pb-0 lg:block lg:pb-0">
      <div className="relative flex justify-center lg:block">
        <span
          aria-hidden="true"
          className="relative z-10 mt-1 flex size-4 items-center justify-center rounded-full border border-accent bg-background transition-[transform,background-color] duration-300 group-hover:scale-125 group-hover:bg-accent"
        >
          <span className="size-1 rounded-full bg-accent transition-colors duration-300 group-hover:bg-accent-foreground" />
        </span>

        {!isLast ? (
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-[-3rem] left-1/2 w-px -translate-x-1/2 bg-border lg:hidden"
          />
        ) : null}
      </div>

      <div className="lg:mt-10">
        <div className="flex items-center justify-between gap-6">
          <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-accent">
            {step.number}
          </p>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-border transition-[width,background-color] duration-300 group-hover:w-12 group-hover:bg-accent"
          />
        </div>

        <h3 className="mt-6 text-3xl font-medium tracking-[-0.045em] text-foreground sm:text-4xl">
          {step.title}
        </h3>

        <p className="mt-5 max-w-md text-base leading-7 text-muted">
          {step.description}
        </p>

        <div className="mt-8 border-t border-border pt-5">
          <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
            Outcome
          </p>

          <p className="mt-2 text-sm font-medium text-foreground">
            {step.outcome}
          </p>
        </div>
      </div>
    </article>
  );
}