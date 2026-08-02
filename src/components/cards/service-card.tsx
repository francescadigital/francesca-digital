import type { Service } from "@/data/services/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border-t border-border py-8 sm:py-10 lg:min-h-[32rem] lg:border-t-0 lg:border-l lg:px-8 lg:py-0 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 hidden h-px w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full lg:block"
      />

      <div className="flex items-start justify-between gap-8">
        <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-accent">
          {service.number}
        </p>

        <span
          aria-hidden="true"
          className="mt-1 h-px w-8 bg-border transition-[width,background-color] duration-300 group-hover:w-12 group-hover:bg-accent"
        />
      </div>

      <div className="mt-16 lg:mt-auto">
        <h3 className="text-3xl font-medium tracking-[-0.045em] text-foreground sm:text-4xl">
          {service.title}
        </h3>

        <p className="mt-6 max-w-md text-base leading-7 text-muted">
          {service.description}
        </p>

        <ul
          aria-label={`${service.title} deliverables`}
          className="mt-10 border-t border-border"
        >
          {service.deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="flex min-h-12 items-center gap-3 border-b border-border text-sm text-muted transition-colors duration-200 group-hover:text-foreground"
            >
              <span
                aria-hidden="true"
                className="size-1 shrink-0 rounded-full bg-accent"
              />

              {deliverable}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}