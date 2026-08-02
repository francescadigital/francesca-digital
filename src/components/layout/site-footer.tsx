import Image from "next/image";
import Link from "next/link";

import { contactDetails } from "@/data/contact";

const footerNavigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container">
        <div className="grid gap-16 py-16 lg:grid-cols-[1fr_0.7fr] lg:py-20">
          <div>
            <Link
              href="/"
              aria-label="Francesca Digital home"
              className="group inline-flex items-center gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <span className="relative size-12 shrink-0">
                <Image
                  src="/brand/logo-mark.svg"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
              </span>

              <span className="flex flex-col">
                <span className="text-xs leading-none font-medium tracking-[0.3em] text-foreground">
                  FRANCESCA
                </span>

                <span className="mt-2 flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-px w-5 bg-accent transition-[width] duration-300 group-hover:w-8"
                  />

                  <span className="text-[0.625rem] leading-none font-medium tracking-[0.36em] text-accent">
                    DIGITAL
                  </span>
                </span>
              </span>
            </Link>

            <p className="mt-8 max-w-lg text-xl leading-8 tracking-[-0.02em] text-muted">
              Thoughtful digital products built with clarity, precision and
              long-term intent.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:justify-self-end lg:gap-20">
            <nav aria-label="Footer navigation">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                Navigate
              </p>

              <ul className="mt-5 space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-3 rounded-sm text-sm text-muted outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-4"
                      />

                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                Get in touch
              </p>

              <Link
                href={`mailto:${contactDetails.email}`}
                className="mt-5 inline-block rounded-sm text-sm text-foreground outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              >
                {contactDetails.email}
              </Link>

              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-accent"
                />

                <p className="text-sm leading-6 text-muted">
                  {contactDetails.availability}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Francesca Digital. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="rounded-sm outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            >
              Privacy
            </Link>

            <Link
              href="#top"
              className="group inline-flex items-center gap-2 rounded-sm outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            >
              Back to top

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}