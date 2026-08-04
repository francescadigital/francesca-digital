import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";

const trustSignals = [
  {
    number: "01",
    title: "Performance-first",
    description: "Fast by design, not as an afterthought.",
  },
  {
    number: "02",
    title: "Accessible by default",
    description: "Clear experiences built for real people.",
  },
  {
    number: "03",
    title: "Built for the long term",
    description: "Maintainable systems that can evolve.",
  },
] as const;

const disciplines = ["Strategy", "Design", "Engineering"] as const;

const principles = [
  {
    number: "01",
    label: "Clarity",
  },
  {
    number: "02",
    label: "Performance",
  },
  {
    number: "03",
    label: "Longevity",
  },
] as const;

function BlueprintPanel() {
  return (
    <div className="group/blueprint border-border bg-surface/50 relative mx-auto w-full max-w-[34rem] overflow-hidden border">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"
      />

      <div
        aria-hidden="true"
        className="bg-accent/[0.08] pointer-events-none absolute top-[-10rem] right-[-9rem] size-[24rem] rounded-full blur-[110px] transition-[transform,opacity] duration-700 ease-out group-hover/blueprint:scale-110 group-hover/blueprint:opacity-90"
      />

      <div className="relative flex min-h-[37rem] flex-col p-6 sm:p-8">
        <div className="border-border flex items-center justify-between gap-6 border-b pb-5">
          <p className="text-muted font-mono text-[0.625rem] tracking-[0.18em] uppercase">
            Francesca system
          </p>

          <p className="text-accent font-mono text-[0.625rem] tracking-[0.18em] uppercase">
            Blueprint 01
          </p>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-12">
          <div
            aria-hidden="true"
            className="bg-border/80 absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          />

          <div
            aria-hidden="true"
            className="bg-border/80 absolute top-0 left-1/2 h-full w-px -translate-x-1/2"
          />

          <div
            aria-hidden="true"
            className="border-border/80 group-hover/blueprint:border-accent/25 absolute top-1/2 left-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[transform,border-color] duration-700 ease-out group-hover/blueprint:scale-[1.025]"
          />

          <div
            aria-hidden="true"
            className="border-border bg-background/75 group-hover/blueprint:border-accent/30 absolute top-1/2 left-1/2 aspect-square w-[57%] -translate-x-1/2 -translate-y-1/2 rotate-45 border transition-[transform,border-color] duration-700 ease-out group-hover/blueprint:-translate-x-1/2 group-hover/blueprint:-translate-y-1/2 group-hover/blueprint:rotate-[48deg]"
          />

          <div
            aria-hidden="true"
            className="bg-accent absolute top-[11%] left-1/2 size-2 -translate-x-1/2 rounded-full shadow-[0_0_18px_rgba(79,124,255,0.65)] transition-transform duration-500 group-hover/blueprint:scale-125"
          />

          <div
            aria-hidden="true"
            className="border-accent bg-background group-hover/blueprint:bg-accent absolute top-1/2 right-[11%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 group-hover/blueprint:scale-125"
          />

          <div
            aria-hidden="true"
            className="border-accent bg-background group-hover/blueprint:bg-accent absolute bottom-[11%] left-1/2 size-2 -translate-x-1/2 rounded-full border transition-[transform,background-color] duration-500 group-hover/blueprint:scale-125"
          />

          <div
            aria-hidden="true"
            className="border-accent bg-background group-hover/blueprint:bg-accent absolute top-1/2 left-[11%] size-2 -translate-y-1/2 rounded-full border transition-[transform,background-color] duration-500 group-hover/blueprint:scale-125"
          />

          <div className="border-accent/35 bg-background/95 group-hover/blueprint:border-accent/60 relative z-10 flex aspect-square w-[34%] items-center justify-center rounded-full border shadow-[0_0_80px_rgba(79,124,255,0.16)] transition-[transform,border-color,box-shadow] duration-700 ease-out group-hover/blueprint:scale-[1.05] group-hover/blueprint:shadow-[0_0_110px_rgba(79,124,255,0.24)]">
            <div className="relative aspect-square w-[62%]">
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

          <div className="absolute top-[13%] left-[4%] space-y-2">
            {disciplines.map((discipline) => (
              <p
                key={discipline}
                className="text-muted group-hover/blueprint:text-foreground/75 font-mono text-[0.5625rem] tracking-[0.16em] uppercase transition-colors duration-300"
              >
                {discipline}
              </p>
            ))}
          </div>

          <p className="text-muted absolute right-[4%] bottom-[13%] max-w-24 text-right font-mono text-[0.5625rem] leading-5 tracking-[0.16em] uppercase">
            Direction to delivery
          </p>
        </div>

        <div className="border-border grid border-t sm:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="border-border border-b py-5 last:border-b-0 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <p className="text-accent font-mono text-[0.5625rem] tracking-[0.16em]">
                {principle.number}
              </p>

              <p className="text-foreground mt-2 text-sm">{principle.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-border relative overflow-hidden border-b"
    >
      <Container>
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-16 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-14 lg:py-20">
          <div className="relative z-10">
            <Reveal delay={0.04}>
              <SectionLabel>Independent digital studio</SectionLabel>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                id="hero-heading"
                className="text-foreground mt-8 max-w-4xl text-[clamp(3.5rem,7.4vw,7.25rem)] leading-[0.88] font-medium tracking-[-0.075em]"
              >
                <span className="block">Digital products</span>

                <span className="text-muted block">built with intent.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="border-border mt-10 max-w-2xl border-l pl-5 sm:mt-12 sm:pl-6">
                <p className="text-muted text-lg leading-8 sm:text-xl">
                  Francesca Digital designs and develops thoughtful websites for
                  businesses that value clarity, performance and long-term
                  quality.
                </p>

                <p className="text-muted mt-4 text-base leading-7">
                  Strategy, design and engineering work as one focused system
                  from the first decision to the final release.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink
                  href="/contact"
                  arrow="up-right"
                  className="w-full sm:w-auto"
                >
                  Start a project
                </ButtonLink>

                <ButtonLink
                  href="/#work"
                  variant="secondary"
                  arrow="right"
                  className="w-full sm:w-auto"
                >
                  View selected work
                </ButtonLink>
              </div>
            </Reveal>

            <Stagger
              slow
              className="border-border mt-12 grid border-t sm:grid-cols-3"
            >
              {trustSignals.map((signal) => (
                <StaggerItem key={signal.number} className="h-full">
                  <article className="group/signal border-border relative h-full border-b py-6 last:border-b-0 sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
                    <div
                      aria-hidden="true"
                      className="bg-accent absolute top-0 left-0 h-px w-0 transition-[width] duration-500 ease-out group-hover/signal:w-full"
                    />

                    <p className="text-accent font-mono text-[0.5625rem] tracking-[0.16em]">
                      {signal.number}
                    </p>

                    <h2 className="text-foreground mt-4 text-sm font-medium">
                      {signal.title}
                    </h2>

                    <p className="text-muted mt-2 text-xs leading-5">
                      {signal.description}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal variant="scale" delay={0.2} className="w-full">
            <BlueprintPanel />
          </Reveal>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="bg-accent/[0.065] pointer-events-none absolute top-[18%] right-[-18rem] -z-10 size-[42rem] rounded-full blur-[175px]"
      />

      <div
        aria-hidden="true"
        className="bg-accent/[0.035] pointer-events-none absolute bottom-[-20rem] left-[-16rem] -z-10 size-[36rem] rounded-full blur-[165px]"
      />
    </section>
  );
}
