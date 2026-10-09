import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ButtonLink } from "@/components/ui/button-link";

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
] as const;

function Brand() {
  return (
    <Link
      href="/"
      aria-label="Francesca Digital home"
      className="group focus-visible:ring-accent focus-visible:ring-offset-background inline-flex shrink-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
    >
      <span className="relative size-9 shrink-0">
        <Image
          src="/brand/logo-mark.svg"
          alt=""
          fill
          priority
          sizes="36px"
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </span>

      <span className="flex flex-col">
        <span className="text-foreground text-[0.6875rem] leading-none font-medium tracking-[0.28em]">
          FRANCESCA
        </span>

        <span className="mt-1.5 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="bg-accent h-px w-3 transition-[width] duration-300 group-hover:w-5"
          />

          <span className="text-accent text-[0.5625rem] leading-none font-medium tracking-[0.34em]">
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
              className="text-muted after:bg-accent hover:text-foreground focus-visible:text-foreground focus-visible:ring-accent relative rounded-sm py-2 text-sm transition-colors duration-200 outline-none after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:ring-2"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header
      id="top"
      className="border-border bg-background relative z-50 border-b"
    >
      <div className="site-container grid h-20 grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <Brand />

        <DesktopNavigation />

        <div className="flex items-center justify-end gap-3">
          <ButtonLink
            href="/contact"
            variant="secondary"
            size="sm"
            className="hover:border-accent hover:text-accent hidden font-medium hover:bg-transparent sm:inline-flex"
          >
            Start a project
          </ButtonLink>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
