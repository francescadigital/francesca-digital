import { ProcessTimeline } from "@/components/process";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-spacing border-border relative overflow-hidden border-b"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.65fr)] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title={
                <span id="process-heading">
                  A clear path from first conversation to long-term value.
                </span>
              }
            />
          </Reveal>

          <Reveal
            variant="left"
            delay={0.1}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-muted text-lg leading-8">
              Every stage has a purpose, a visible outcome and a clear next
              step. You always know where the project stands and what happens
              next.
            </p>
          </Reveal>
        </div>

        <div className="border-border mt-16 border-t pt-10 lg:mt-24 lg:pt-12">
          <ProcessTimeline />
        </div>

        <Reveal delay={0.1} className="mt-16 lg:mt-24">
          <div className="border-border grid gap-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="text-muted max-w-2xl text-base leading-7">
              The process provides enough structure to keep decisions clear
              without pretending every project follows the same script. When
              better information changes the right direction, the process adapts
              with it.
            </p>

            <p className="text-foreground/70 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Understand → Plan → Validate → Build → Launch → Improve
            </p>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="bg-accent/[0.04] pointer-events-none absolute bottom-[-18rem] left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full blur-[160px]"
      />
    </section>
  );
}
