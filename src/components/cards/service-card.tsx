import type { Service } from "@/data/services/types";

type ServiceCardProps = {
  service: Service;
};

function StrategyVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="bg-border absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2" />

      <div className="bg-border/70 absolute top-[18%] bottom-[18%] left-1/2 w-px -translate-x-1/2" />

      <span className="border-accent bg-background group-hover/service:bg-accent absolute top-1/2 left-[12%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/service:scale-125" />

      <span className="bg-accent absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[0_0_24px_rgba(79,124,255,0.4)] transition-transform duration-500 ease-out group-hover/service:scale-125 group-hover/service:rotate-[135deg]" />

      <span className="border-accent bg-background group-hover/service:bg-accent absolute top-1/2 right-[12%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/service:scale-125" />

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Context
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Direction
      </p>
    </div>
  );
}

function DesignVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="border-border group-hover/service:border-accent/30 absolute top-1/2 left-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-700 ease-out group-hover/service:scale-105" />

      <div className="border-border group-hover/service:border-accent/30 absolute top-1/2 left-1/2 aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rotate-45 border transition-[transform,border-color] duration-700 ease-out group-hover/service:-translate-x-1/2 group-hover/service:-translate-y-1/2 group-hover/service:rotate-[50deg]" />

      <div className="bg-border/60 absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />

      <div className="bg-border/60 absolute top-0 left-1/2 h-full w-px -translate-x-1/2" />

      <span className="bg-accent absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_28px_rgba(79,124,255,0.45)] transition-transform duration-500 ease-out group-hover/service:scale-150" />

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Structure
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Expression
      </p>
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="border-border bg-surface/50 group-hover/service:border-accent/30 absolute top-[20%] left-[14%] h-[60%] w-[72%] overflow-hidden border transition-[transform,border-color] duration-700 ease-out group-hover/service:-translate-y-1">
        <div className="border-border flex h-8 items-center gap-2 border-b px-3">
          <span className="bg-muted/30 size-1.5 rounded-full" />
          <span className="bg-muted/20 size-1.5 rounded-full" />
          <span className="bg-muted/15 size-1.5 rounded-full" />
        </div>

        <div className="space-y-3 p-4">
          <div className="bg-accent/70 h-1.5 w-2/5 rounded-full" />
          <div className="bg-muted/15 h-1.5 w-4/5 rounded-full" />
          <div className="bg-muted/10 h-1.5 w-3/5 rounded-full" />
          <div className="bg-muted/15 h-1.5 w-5/6 rounded-full" />
        </div>
      </div>

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        System
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
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
    <article className="group/service border-border relative flex h-full flex-col overflow-hidden border-t py-10 sm:py-12 lg:min-h-[42rem] lg:border-t-0 lg:border-l lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
      <div
        aria-hidden="true"
        className="bg-accent absolute top-0 left-0 h-px w-0 transition-[width] duration-700 ease-out group-hover/service:w-full"
      />

      <div className="flex items-start justify-between gap-8">
        <p className="text-accent font-mono text-sm tracking-[0.18em]">
          {service.number}
        </p>

        <span
          aria-hidden="true"
          className="bg-border group-hover/service:bg-accent mt-2 h-px w-8 transition-[width,background-color] duration-500 ease-out group-hover/service:w-14"
        />
      </div>

      <div className="mt-10">
        <ServiceVisual service={service} />
      </div>

      <div className="mt-12 flex flex-1 flex-col lg:mt-14">
        <h3 className="text-foreground group-hover/service:text-accent text-3xl font-medium tracking-[-0.045em] transition-colors duration-300 sm:text-4xl">
          {service.title}
        </h3>

        <p className="text-muted group-hover/service:text-foreground/75 mt-6 max-w-md text-base leading-7 transition-colors duration-300">
          {service.description}
        </p>

        <ul
          aria-label={`${service.title} deliverables`}
          className="border-border mt-auto border-t pt-2 lg:mt-12"
        >
          {service.deliverables.map((deliverable, index) => (
            <li
              key={deliverable}
              className="group/item border-border text-muted group-hover/service:text-foreground flex min-h-12 items-center justify-between gap-4 border-b text-sm transition-colors duration-300"
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="bg-accent size-1 shrink-0 rounded-full transition-transform duration-300 group-hover/item:scale-150"
                />

                {deliverable}
              </span>

              <span className="text-muted/60 font-mono text-[0.5625rem] tracking-[0.14em]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
