import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PrincipleCard } from "@/components/cards/principle-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/data/principles";

export function WhyFrancescaSection() {
  return (
    <section
      id="about"
      aria-labelledby="why-francesca-heading"
      className="section-spacing border-border bg-surface relative overflow-hidden border-b"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Why Francesca"
              title={
                <span id="why-francesca-heading">
                  Better digital work begins with better decisions.
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
              Our value is not measured by the number of deliverables produced.
              It comes from the quality of the decisions behind them and the
              care taken to turn those decisions into a coherent product.
            </p>
          </Reveal>
        </div>

        <Stagger
          slow
          className="border-border mt-16 grid border-b lg:mt-24 lg:grid-cols-2 lg:border-t"
        >
          {principles.map((principle) => (
            <StaggerItem key={principle.id} className="h-full">
              <PrincipleCard principle={principle} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <div className="text-muted grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-2xl leading-6">
              The goal is not to create more complexity. It is to make the right
              complexity understandable, useful and sustainable.
            </p>

            <p className="text-foreground/70 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Thoughtful systems · Direct communication · Durable outcomes
            </p>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="bg-accent/[0.035] pointer-events-none absolute top-[36%] left-[-20rem] -z-10 size-[42rem] rounded-full blur-[170px]"
      />
    </section>
  );
}
