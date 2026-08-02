import { PrincipleCard } from "@/components/cards/principle-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/data/principles";

export function WhyFrancescaSection() {
  return (
    <section
      id="about"
      aria-labelledby="why-francesca-heading"
      className="section-spacing border-b border-border bg-surface"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionHeading
            eyebrow="Why Francesca"
            title={
              <span id="why-francesca-heading">
                Better digital work begins with better decisions.
              </span>
            }
          />

          <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
            Our value is not measured by the number of deliverables produced.
            It comes from the quality of the decisions behind them and the care
            taken to turn those decisions into a coherent product.
          </p>
        </div>

        <div className="mt-16 grid border-b border-border lg:mt-24 lg:grid-cols-2 lg:border-t">
          {principles.map((principle) => (
            <PrincipleCard
              key={principle.id}
              principle={principle}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 text-sm text-muted sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-2xl leading-6">
            The goal is not to create more complexity. It is to make the right
            complexity understandable, useful and sustainable.
          </p>

          <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase">
            Thoughtful systems · Direct communication · Durable outcomes
          </p>
        </div>
      </div>
    </section>
  );
}