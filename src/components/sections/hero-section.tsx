import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="site-container flex min-h-[calc(100svh-5rem)] flex-col justify-between py-14 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between gap-6">
          <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
            Independent digital studio
          </p>

          <p className="hidden text-sm text-muted sm:block">
            Strategy · Design · Development
          </p>
        </div>

        <div className="py-20 sm:py-24 lg:py-28">
          <h1
            id="hero-heading"
            className="max-w-6xl text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] font-medium tracking-[-0.07em]"
          >
            Thoughtful digital products
            <span className="block text-muted">
              for ambitious businesses.
            </span>
          </h1>

          <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-[1.15fr_0.85fr] lg:mt-14 lg:pt-10">
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Francesca Digital brings strategy, design and development into
              one focused process to create digital experiences that are clear,
              credible and built to perform.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row md:justify-end">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent-hover"
              >
                Start a project
              </Link>

              <Link
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/40 hover:bg-surface"
              >
                View selected work
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <p className="max-w-xs text-sm leading-6 text-muted">
            Built with clarity, restraint and attention to every interaction.
          </p>

          <p className="hidden font-mono text-xs tracking-[0.14em] text-muted uppercase sm:block">
            Scroll to explore
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[-12rem] -z-10 size-[30rem] rounded-full bg-accent/8 blur-[140px]"
      />
    </section>
  );
}

