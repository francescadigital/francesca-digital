import Image from "next/image";

import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";

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

function HeroBrandVisual() {
  return (
    <div className="group/visual relative mx-auto aspect-square w-full max-w-[34rem]">
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full bg-accent/[0.055] opacity-70 blur-[90px] transition-[transform,opacity] duration-700 ease-out group-hover/visual:scale-110 group-hover/visual:opacity-100"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-border/70 transition-[transform,border-color] duration-700 ease-out group-hover/visual:scale-[1.015] group-hover/visual:border-border"
      />

      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full border border-border/50 transition-[transform,border-color] duration-700 ease-out group-hover/visual:scale-[0.985] group-hover/visual:border-border/80"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-border/80"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-border/80"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[52%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-border bg-background/80 transition-[transform,border-color] duration-700 ease-out group-hover/visual:-translate-x-1/2 group-hover/visual:-translate-y-1/2 group-hover/visual:rotate-[48deg] group-hover/visual:border-accent/30"
      />

      <div className="absolute top-1/2 left-1/2 flex size-[31%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-background/90 shadow-[0_0_80px_rgba(79,124,255,0.14)] transition-[transform,box-shadow,border-color] duration-700 ease-out group-hover/visual:-translate-x-1/2 group-hover/visual:-translate-y-1/2 group-hover/visual:scale-[1.055] group-hover/visual:border-accent/50 group-hover/visual:shadow-[0_0_110px_rgba(79,124,255,0.22)]">
        <div className="relative size-[62%] transition-transform duration-700 ease-out group-hover/visual:scale-[1.04]">
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            fill
            priority
            sizes="180px"
            className="object-contain"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[9%] left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_rgba(79,124,255,0.65)] transition-transform duration-500 ease-out group-hover/visual:scale-125"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[9%] size-2 -translate-y-1/2 rounded-full border border-accent bg-background transition-[transform,background-color] duration-500 ease-out group-hover/visual:scale-125 group-hover/visual:bg-accent"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[9%] left-1/2 size-2 -translate-x-1/2 rounded-full border border-accent bg-background transition-[transform,background-color] duration-500 ease-out group-hover/visual:scale-125 group-hover/visual:bg-accent"
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[9%] size-2 -translate-y-1/2 rounded-full border border-accent bg-background transition-[transform,background-color] duration-500 ease-out group-hover/visual:scale-125 group-hover/visual:bg-accent"
      />

      <p className="absolute top-[17%] left-[5%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/visual:text-foreground">
        Strategy
      </p>

      <p className="absolute top-[17%] right-[5%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/visual:text-foreground">
        Design
      </p>

      <p className="absolute right-[5%] bottom-[17%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/visual:text-foreground">
        Development
      </p>

      <p className="absolute bottom-[17%] left-[5%] font-mono text-[0.625rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 group-hover/visual:text-foreground">
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
            <Reveal delay={0.05}>
              <SectionLabel>
                Independent digital studio
              </SectionLabel>
            </Reveal>

            <Reveal delay={0.12}>
              <h1
                id="hero-heading"
                className="mt-8 max-w-4xl text-[clamp(3.25rem,7.5vw,7.25rem)] leading-[0.9] font-medium tracking-[-0.07em] text-foreground"
              >
                <span className="block">
                  Digital products
                </span>

                <span className="block">
                  designed with
                </span>

                <span className="block text-muted">
                  clarity and intent.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 max-w-xl border-l border-border pl-5 sm:mt-12 sm:pl-6">
                <p className="text-lg leading-8 text-muted sm:text-xl">
                  We design and build digital experiences where strategy,
                  design and engineering work as one focused system.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <ButtonLink
                  href="/contact"
                  arrow="up-right"
                  className="hover-shadow"
                >
                  Start a project
                </ButtonLink>

                <ButtonLink
                  href="/#work"
                  variant="secondary"
                  arrow="right"
                >
                  Selected work
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal
            variant="scale"
            delay={0.18}
            className="w-full"
          >
            <HeroBrandVisual />
          </Reveal>
        </div>

        <Stagger className="grid border-t border-border md:grid-cols-3">
          {capabilities.map((capability) => (
            <StaggerItem
              key={capability.number}
              className="h-full"
            >
              <article className="group relative h-full border-b border-border py-7 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full"
                />

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[0.625rem] tracking-[0.16em] text-accent">
                      {capability.number}
                    </p>

                    <h2 className="mt-5 text-xl font-medium tracking-[-0.03em] text-foreground">
                      {capability.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-muted transition-colors duration-300 group-hover:text-foreground/75">
                      {capability.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-1 h-px w-6 bg-border transition-[width,background-color] duration-300 group-hover:w-10 group-hover:bg-accent"
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[20%] right-[-18rem] -z-10 size-[40rem] rounded-full bg-accent/[0.065] blur-[170px]"
      />
    </section>
  );
}