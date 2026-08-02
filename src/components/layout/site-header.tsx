import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
] as const;

function Brand() {
  return (
    <Link
      href="/"
      aria-label="Francesca Digital home"
      className="group inline-flex shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <span className="relative size-9 shrink-0">
        <Image
          src="/brand/logo-mark.svg"
          alt=""
          fill
          priority
          sizes="36px"
          className="transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </span>

      <span className="flex flex-col">
        <span className="text-[0.6875rem] leading-none font-medium tracking-[0.28em] text-foreground">
          FRANCESCA
        </span>

        <span className="mt-1.5 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-px w-3 bg-accent transition-[width] duration-300 group-hover:w-5"
          />

          <span className="text-[0.5625rem] leading-none font-medium tracking-[0.34em] text-accent">
            DIGITAL
          </span>
        </span>
      </span>
    </Link>
  );
}

function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative rounded-sm py-2 text-sm text-muted outline-none transition-colors duration-200 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100 focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavigation() {
  return (
    <details className="group relative md:hidden">
      <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground outline-none transition-colors duration-200 select-none hover:border-foreground/40 hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open navigation menu</span>

        <span
          aria-hidden="true"
          className="relative flex size-4 flex-col justify-center gap-1"
        >
          <span className="h-px w-4 bg-current transition-transform duration-200 group-open:translate-y-[2.5px] group-open:rotate-45" />

          <span className="h-px w-4 bg-current transition-transform duration-200 group-open:-translate-y-[2.5px] group-open:-rotate-45" />
        </span>
      </summary>

      <nav
        aria-label="Mobile navigation"
        className="absolute top-14 right-0 w-[min(18rem,calc(100vw-2.5rem))] rounded-lg border border-border bg-surface p-2 shadow-2xl shadow-black/30"
      >
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-md px-4 text-sm text-muted outline-none transition-colors duration-200 hover:bg-card hover:text-foreground focus-visible:bg-card focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-2 border-t border-border pt-2">
          <Link
            href="/contact"
            className="flex min-h-12 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground outline-none transition-colors duration-200 hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Start a project
          </Link>
        </div>
      </nav>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header
      id="top"
      className="relative z-50 border-b border-border bg-background"
    >
      <div className="site-container grid h-20 grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <Brand />

        <DesktopNavigation />

        <div className="flex items-center justify-end gap-3">
          <ButtonLink
            href="/contact"
            variant="secondary"
            size="sm"
            className="hidden font-medium hover:border-accent hover:bg-transparent hover:text-accent sm:inline-flex"
          >
            Start a project
          </ButtonLink>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}