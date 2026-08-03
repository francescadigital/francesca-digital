import type { Service } from "@/data/services/types";

type ServiceCardProps = {
  service: Service;
};

function StrategyVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/9] overflow-hidden border border-border bg-background/40"
    >
      <div className="absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2 bg-border" />

      <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px -translate-x-1/2 bg-border/70" />

      <span className="absolute top-1/2 left-[12%] size-2 -translate-y-1/2 rounded-full border border-accent bg-background transition-[transform,background-color] duration-500 ease-out group-hover/service:scale-125 group-hover/service:bg-accent" />

      <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent shadow-[0_0_24px_rgba(79,124,255,0.4)] transition-transform duration-500 ease-out group-hover/service:rotate-[135deg] group-hover/service:scale-125" />

      <span className="absolute top-1/2 right-[12%] size-2 -translate-y-1/2 rounded-full border border-accent bg-background transition-[transform,background-color] duration-500 ease-out group-hover/service:scale-125 group-hover/service:bg-accent" />

      <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
        Context
      </p>

      <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
        Direction
      </p>
    </div>
  );
}

function DesignVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/9] overflow-hidden border border-border bg-background/40"
    >
      <div className="absolute top-1/2 left-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border transition-[transform,border-color] duration-700 ease-out group-hover/service:scale-105 group-hover/service:border-accent/30" />

      <div className="absolute top-1/2 left-1/2 aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-border transition-[transform,border-color] duration-700 ease-out group-hover/service:-translate-x-1/2 group-hover/service:-translate-y-1/2 group-hover/service:rotate-[50deg] group-hover/service:border-accent/30" />

      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border/60" />

      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border/60" />

      <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_28px_rgba(79,124,255,0.45)] transition-transform duration-500 ease-out group-hover/service:scale-150" />

      <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
        Structure
      </p>

      <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
        Expression
      </p>
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/9] overflow-hidden border border-border bg-background/40"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="absolute top-[20%] left-[14%] h-[60%] w-[72%] overflow-hidden border border-border bg-surface/50 transition-[transform,border-color] duration-700 ease-out group-hover/service:-translate-y-1 group-hover/service:border-accent/30">
        <div className="flex h-8 items-center gap-2 border-b border-border px-3">
          <span className="size-1.5 rounded-full bg-muted/30" />
          <span className="size-1.5 rounded-full bg-muted/20" />
          <span className="size-1.5 rounded-full bg-muted/15" />
        </div>

        <div className="space-y-3 p-4">
          <div className="h-1.5 w-2/5 rounded-full bg-accent/70" />
          <div className="h-1.5 w-4/5 rounded-full bg-muted/15" />
          <div className="h-1.5 w-3/5 rounded-full bg-muted/10" />
          <div className="h-1.5 w-5/6 rounded-full bg-muted/15" />
        </div>
      </div>

      <p className="absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
        System
      </p>

      <p className="absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] text-muted uppercase">
        Execution
      </p>
    </div>
  );
}

function ServiceVisual({ service }: ServiceCardProps) {
  switch (service.id) {
    case "strategy":
      return <StrategyVisual />;

    case "design":
      return <DesignVisual />;

    case "development":
      return <DevelopmentVisual />;
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group/service relative flex h-full flex-col overflow-hidden border-t border-border py-10 sm:py-12 lg:min-h-[42rem] lg:border-t-0 lg:border-l lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover/service:w-full"
      />

      <div className="flex items-start justify-between gap-8">
        <p className="font-mono text-sm tracking-[0.18em] text-accent">
          {service.number}
        </p>

        <span
          aria-hidden="true"
          className="mt-2 h-px w-8 bg-border transition-[width,background-color] duration-500 ease-out group-hover/service:w-14 group-hover/service:bg-accent"
        />
      </div>

      <div className="mt-10">
        <ServiceVisual service={service} />
      </div>

      <div className="mt-12 flex flex-1 flex-col lg:mt-14">
        <h3 className="text-3xl font-medium tracking-[-0.045em] text-foreground transition-colors duration-300 group-hover/service:text-accent sm:text-4xl">
          {service.title}
        </h3>

        <p className="mt-6 max-w-md text-base leading-7 text-muted transition-colors duration-300 group-hover/service:text-foreground/75">
          {service.description}
        </p>

        <ul
          aria-label={`${service.title} deliverables`}
          className="mt-auto border-t border-border pt-2 lg:mt-12"
        >
          {service.deliverables.map((deliverable, index) => (
            <li
              key={deliverable}
              className="group/item flex min-h-12 items-center justify-between gap-4 border-b border-border text-sm text-muted transition-colors duration-300 group-hover/service:text-foreground"
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover/item:scale-150"
                />

                {deliverable}
              </span>

              <span className="font-mono text-[0.5625rem] tracking-[0.14em] text-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}