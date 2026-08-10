import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
      <div className="site-container py-20">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <SectionLabel>404 · Page not found</SectionLabel>

            <h1 className="text-foreground mt-8 max-w-5xl text-[clamp(3.75rem,10vw,8.5rem)] leading-[0.86] font-medium tracking-[-0.075em]">
              <span className="block">This path leads</span>

              <span className="text-muted block">nowhere.</span>
            </h1>

            <p className="text-muted mt-10 max-w-xl text-lg leading-8">
              The page may have moved, the address may be incorrect, or the
              content may no longer exist.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/" arrow="right" className="w-full sm:w-auto">
                Return home
              </ButtonLink>

              <ButtonLink
                href="/work"
                variant="secondary"
                arrow="right"
                className="w-full sm:w-auto"
              >
                View work
              </ButtonLink>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="text-border hidden font-mono text-[clamp(8rem,20vw,18rem)] leading-none font-medium tracking-[-0.09em] lg:block"
          >
            404
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="bg-accent/[0.06] pointer-events-none absolute right-[-14rem] bottom-[-14rem] -z-10 size-[38rem] rounded-full blur-[170px]"
      />
    </main>
  );
}
