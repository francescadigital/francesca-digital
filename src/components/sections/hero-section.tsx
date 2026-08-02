import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Strategy",
    description: "Direction before execution.",
  },
  {
    number: "02",
    title: "Design",
    description: "Clarity in every decision.",
  },
  {
    number: "03",
    title: "Development",
    description: "Built to perform and evolve.",
  },
] as const;

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="size-4"
    >
      <path
        d="M4 12L12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroBrandVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[34rem]"
    >
      <div className="absolute inset-0 rounded-full border border-border/70" />

      <div className="absolute inset-[12%] rounded-full border border-border/50" />

      <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border/80" />

      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border/80" />

      <div className="absolute top-1/2 left-1/2 aspect-square w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-border bg-background/80" />

      <div className="absolute top-1/2 left-1/2 flex size-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.06] shadow-[0_0_80px_rgba(79,124,255,0.14)]">
        <div className="relative size-[58%]">
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute top-[9%] left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent" />

      <div className="absolute right-[9%] top-1/2 size-2 -translate-y-1/2 rounded-full border border-accent bg-background" />

      <div className="absolute bottom-[9%] left-1/2 size-2 -translate-x-1/2 rounded-full border border-accent bg-background" />

      <div className="absolute top-1/2 left-[9%] size-2 -translate-y-1/2 rounded-full border border-accent bg-background" />

      <p className="absolute top-[17%] left-[5%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Strategy
      </p>

      <p className="absolute top-[17%] right-[5%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Design
      </p>

      <p className="absolute right-[5%] bottom-[17%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Development
      </p>

      <p className="absolute bottom-[17%] left-[5%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase">
        Result
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="site-container">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-16 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-accent"
              />

              <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted uppercase">
                Independent digital studio
              </p>
            </div>

            <h1
              id="hero-heading"
              className="mt-8 max-w-4xl text-[clamp(3.5rem,7.5vw,7.25rem)] leading-[0.9] font-medium tracking-[-0.07em]"
            >
              Digital products
              <span className="block">designed with</span>
              <span className="block text-muted">clarity and intent.</span>
            </h1>

            <div className="mt-10 max-w-2xl border-l border-border pl-5 sm:mt-12 sm:pl-6">
              <p className="text-lg leading-8 text-muted sm:text-xl">
                We design and build digital experiences where strategy, design
                and engineering work as one focused system.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground outline-none transition-colors duration-200 hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                Start a project

                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRightIcon />
                </span>
              </Link>

              <Link
                href="#work"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-border px-6 text-sm font-medium text-foreground outline-none transition-colors duration-200 hover:border-foreground/40 hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                Selected work

                <span className="text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>

          <HeroBrandVisual />
        </div>

        <div className="grid border-t border-border md:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group border-b border-border py-7 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[0.625rem] tracking-[0.16em] text-accent">
                    {capability.number}
                  </p>

                  <h2 className="mt-5 text-xl font-medium tracking-[-0.03em]">
                    {capability.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {capability.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-1 h-px w-6 bg-border transition-[width,background-color] duration-300 group-hover:w-10 group-hover:bg-accent"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[25%] right-[-18rem] -z-10 size-[38rem] rounded-full bg-accent/[0.06] blur-[160px]"
      />
    </section>
  );
}

