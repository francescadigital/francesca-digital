import { ServiceCard } from "@/components/cards/service-card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title={
                <span id="services-heading">
                  Focused digital work shaped around real business needs.
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
              Every engagement is structured around the problem that needs to be
              solved—not around a fixed package or a preferred technology.
            </p>
          </Reveal>
        </div>

        <Stagger
          slow
          className="border-border mt-16 grid border-b lg:mt-24 lg:grid-cols-2 lg:border-t"
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
              Scope, process and deliverables are defined around the actual
              context of the project. The objective is always a clear outcome,
              not the largest possible list of features.
            </p>

            <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase">
              Clear scope · Direct collaboration · Durable results
            </p>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="bg-accent/[0.035] pointer-events-none absolute top-[32%] right-[-20rem] -z-10 size-[42rem] rounded-full blur-[170px]"
      />
    </section>
  );
}
