import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-spacing border-b border-border bg-surface"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title={
              <span id="services-heading">
                One focused process from direction to delivery.
              </span>
            }
          />

          <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
            Strategy, design and development are treated as one connected
            system. Decisions are made together so the final product remains
            coherent from its first idea to its last interaction.
          </p>
        </div>

        <div className="mt-16 grid border-b border-border lg:mt-24 lg:grid-cols-3 lg:border-t">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Engagements are shaped around the actual needs of each project.
          </p>

          <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Clear scope · Direct collaboration · Measured execution
          </p>
        </div>
      </div>
    </section>
  );
}