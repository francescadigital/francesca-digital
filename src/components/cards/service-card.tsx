import type { Service } from "@/data/services/types";

type ServiceCardProps = {
  service: Service;
};

function WebsiteVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="border-border bg-surface/60 group-hover/service:border-accent/35 absolute top-[16%] left-[12%] h-[68%] w-[76%] overflow-hidden border transition-[transform,border-color] duration-700 ease-out group-hover/service:-translate-y-1">
        <div className="border-border flex h-9 items-center gap-2 border-b px-3">
          <span className="bg-muted/30 size-1.5 rounded-full" />
          <span className="bg-muted/20 size-1.5 rounded-full" />
          <span className="bg-muted/15 size-1.5 rounded-full" />
        </div>

        <div className="grid h-[calc(100%-2.25rem)] grid-cols-[0.38fr_0.62fr]">
          <div className="border-border border-r p-4">
            <div className="bg-accent/70 h-1.5 w-10 rounded-full" />

            <div className="mt-4 space-y-2.5">
              <div className="bg-muted/15 h-1.5 w-full rounded-full" />
              <div className="bg-muted/10 h-1.5 w-4/5 rounded-full" />
              <div className="bg-muted/10 h-1.5 w-3/5 rounded-full" />
            </div>
          </div>

          <div className="p-4">
            <div className="border-border bg-background/50 h-10 border" />
            <div className="border-border bg-background/50 mt-3 h-14 border" />
          </div>
        </div>
      </div>

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Structure
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Delivery
      </p>
    </div>
  );
}

function LandingPageVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="bg-border absolute top-1/2 left-[12%] h-px w-[76%] -translate-y-1/2" />

      <div className="bg-border/70 absolute top-[16%] bottom-[16%] left-1/2 w-px -translate-x-1/2" />

      <span className="border-accent bg-background group-hover/service:bg-accent absolute top-1/2 left-[14%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/service:scale-125" />

      <span className="bg-accent absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 shadow-[0_0_28px_rgba(79,124,255,0.45)] transition-transform duration-500 ease-out group-hover/service:scale-125 group-hover/service:rotate-[135deg]" />

      <span className="border-accent bg-background group-hover/service:bg-accent absolute top-1/2 right-[14%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 ease-out group-hover/service:scale-125" />

      <div className="absolute top-[23%] left-1/2 w-[54%] -translate-x-1/2">
        <div className="bg-accent/75 mx-auto h-1.5 w-16 rounded-full" />
        <div className="bg-muted/15 mx-auto mt-3 h-1.5 w-4/5 rounded-full" />
        <div className="bg-muted/10 mx-auto mt-2 h-1.5 w-3/5 rounded-full" />
      </div>

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Message
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Conversion
      </p>
    </div>
  );
}

function RedesignVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="border-border bg-surface/45 absolute top-[20%] left-[12%] h-[58%] w-[43%] border opacity-65 transition-transform duration-700 ease-out group-hover/service:-translate-x-1">
        <div className="border-border h-8 border-b" />

        <div className="space-y-3 p-4">
          <div className="bg-muted/15 h-1.5 w-3/4 rounded-full" />
          <div className="bg-muted/10 h-1.5 w-full rounded-full" />
          <div className="border-border bg-background/40 h-12 border" />
        </div>
      </div>

      <div className="border-accent/30 bg-surface/75 group-hover/service:border-accent/55 absolute top-[14%] right-[12%] h-[66%] w-[48%] border shadow-[0_0_45px_rgba(79,124,255,0.1)] transition-[transform,border-color,box-shadow] duration-700 ease-out group-hover/service:-translate-y-1 group-hover/service:shadow-[0_0_60px_rgba(79,124,255,0.16)]">
        <div className="border-border flex h-8 items-center gap-2 border-b px-3">
          <span className="bg-accent/70 size-1.5 rounded-full" />
          <span className="bg-muted/20 size-1.5 rounded-full" />
        </div>

        <div className="space-y-3 p-4">
          <div className="bg-accent/70 h-1.5 w-2/5 rounded-full" />
          <div className="bg-muted/15 h-1.5 w-4/5 rounded-full" />
          <div className="border-border bg-background/50 h-12 border" />
        </div>
      </div>

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Existing
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Improved
      </p>
    </div>
  );
}

function TechnicalImprovementVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background/40 relative aspect-[16/9] overflow-hidden border"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="absolute top-[18%] right-[12%] left-[12%] grid grid-cols-3 gap-3">
        {[72, 88, 96].map((value, index) => (
          <div
            key={value}
            className="border-border bg-surface/55 group-hover/service:border-accent/30 border p-3 transition-[transform,border-color] duration-500 ease-out group-hover/service:-translate-y-1"
            style={{
              transitionDelay: `${index * 60}ms`,
            }}
          >
            <p className="text-muted font-mono text-[0.5625rem] tracking-[0.14em]">
              0{index + 1}
            </p>

            <div className="bg-border mt-4 h-1.5 overflow-hidden rounded-full">
              <div
                className="bg-accent h-full rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: `${value}%`,
                }}
              />
            </div>

            <p className="text-foreground/75 mt-3 text-right font-mono text-[0.5625rem]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute right-[12%] bottom-[20%] left-[12%] flex items-center gap-3">
        <span className="bg-accent size-2 rounded-full shadow-[0_0_18px_rgba(79,124,255,0.55)]" />
        <div className="bg-border h-px flex-1" />
        <span className="border-accent bg-background group-hover/service:bg-accent size-2 rounded-full border transition-colors duration-500" />
      </div>

      <p className="text-muted absolute bottom-4 left-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Audit
      </p>

      <p className="text-muted absolute right-4 bottom-4 font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
        Improvement
      </p>
    </div>
  );
}

function ServiceVisual({ service }: ServiceCardProps) {
  switch (service.id) {
    case "website":
      return <WebsiteVisual />;

    case "landing-page":
      return <LandingPageVisual />;

    case "redesign":
      return <RedesignVisual />;

    case "technical-improvement":
      return <TechnicalImprovementVisual />;
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group/service border-border relative flex h-full flex-col overflow-hidden border-t py-10 sm:py-12 lg:min-h-[48rem] lg:border-t-0 lg:border-l lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
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
        <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
          {service.audience}
        </p>

        <h3 className="text-foreground group-hover/service:text-accent mt-5 text-3xl font-medium tracking-[-0.045em] transition-colors duration-300 sm:text-4xl">
          {service.title}
        </h3>

        <div className="mt-7 space-y-6">
          <div>
            <p className="text-accent font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
              Problem
            </p>

            <p className="text-muted group-hover/service:text-foreground/75 mt-3 max-w-xl text-sm leading-6 transition-colors duration-300">
              {service.problem}
            </p>
          </div>

          <div>
            <p className="text-accent font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
              Approach
            </p>

            <p className="text-muted group-hover/service:text-foreground/75 mt-3 max-w-xl text-sm leading-6 transition-colors duration-300">
              {service.approach}
            </p>
          </div>
        </div>

        <div className="border-accent/40 mt-8 border-l pl-4">
          <p className="text-accent font-mono text-[0.5625rem] tracking-[0.16em] uppercase">
            Outcome
          </p>

          <p className="text-foreground mt-3 text-base leading-7">
            {service.outcome}
          </p>
        </div>

        <ul
          aria-label={`${service.title} deliverables`}
          className="border-border mt-10 border-t pt-2 lg:mt-auto"
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
