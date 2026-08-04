import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-spacing border-border bg-surface relative overflow-hidden border-b"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title={
                <span id="services-heading">
                  One focused process from direction to delivery.
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
              Strategy, design and development are treated as one connected
              system. Decisions are made together so the final product remains
              coherent from its first idea to its last interaction.
            </p>
          </Reveal>
        </div>

        <Stagger
          slow
          className="border-border mt-16 grid border-b lg:mt-24 lg:grid-cols-3 lg:border-t"
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <div className="text-muted grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-2xl leading-6">
              Engagements are shaped around the actual needs of each project,
              with the right disciplines involved at the right moment.
            </p>

            <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Clear scope · Direct collaboration · Measured execution
            </p>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="bg-accent/[0.035] pointer-events-none absolute top-[38%] right-[-20rem] -z-10 size-[42rem] rounded-full blur-[170px]"
      />
    </section>
  );
}
