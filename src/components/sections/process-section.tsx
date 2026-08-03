import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.65fr)] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title={
                <span id="process-heading">
                  A clear path from uncertainty to a finished product.
                </span>
              }
            />
          </Reveal>

          <Reveal
            variant="left"
            delay={0.1}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-lg leading-8 text-muted">
              Every project is different, but the way we reduce risk remains
              consistent: understand the context, define the direction, build
              deliberately and refine what matters.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <Reveal
            variant="fade"
            className="absolute top-2 right-0 left-0 hidden lg:block"
          >
            <div
              aria-hidden="true"
              className="h-px bg-border"
            />
          </Reveal>

          <Stagger
            slow
            className="grid lg:grid-cols-4 lg:gap-8"
          >
            {processSteps.map((step, index) => (
              <StaggerItem
                key={step.id}
                className="h-full"
              >
                <ProcessCard
                  step={step}
                  isLast={index === processSteps.length - 1}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal
          delay={0.1}
          className="mt-16 lg:mt-24"
        >
          <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-2xl text-base leading-7 text-muted">
              The process is structured enough to create clarity and flexible
              enough to respond when better information changes the right
              decision.
            </p>

            <p className="font-mono text-[0.625rem] tracking-[0.16em] text-foreground/70 uppercase">
              Context → Direction → Execution → Improvement
            </p>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18rem] left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.045] blur-[160px]"
      />
    </section>
  );
}