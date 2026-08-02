import { ProcessCard } from "@/components/cards/process-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-spacing relative overflow-hidden border-b border-border"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <SectionHeading
            eyebrow="Process"
            title={
              <span id="process-heading">
                A clear path from uncertainty to a finished product.
              </span>
            }
          />

          <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
            Every project is different, but the way we reduce risk remains
            consistent: understand the context, define the direction, build
            deliberately and refine what matters.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute top-2 right-0 left-0 hidden h-px bg-border lg:block"
          />

          <div
            aria-hidden="true"
            className="absolute top-2 left-0 hidden h-px w-1/4 bg-accent lg:block"
          />

          <div className="grid lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.id}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-2xl text-base leading-7 text-muted">
            The process is structured enough to create clarity and flexible
            enough to respond when better information changes the right
            decision.
          </p>

          <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
            Context → Direction → Execution → Improvement
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18rem] left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[150px]"
      />
    </section>
  );
}