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
    <footer className="border-border bg-background border-t">
      <div className="site-container">
        <div className="grid gap-16 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:py-20">
          <div>
            <Link
              href="/"
              aria-label="Francesca Digital home"
              className="group focus-visible:ring-accent focus-visible:ring-offset-background inline-flex items-center gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
            >
              <span className="relative size-12 shrink-0">
                <Image
                  src="/brand/logo-mark.svg"
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:rotate-3"
                />
              </span>

              <span className="flex flex-col">
                <span className="text-foreground text-xs leading-none font-medium tracking-[0.3em]">
                  FRANCESCA
                </span>

                <span className="mt-2 flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="bg-accent h-px w-5 transition-[width] duration-500 ease-out group-hover:w-9"
                  />

                  <span className="text-accent text-[0.625rem] leading-none font-medium tracking-[0.36em]">
                    DIGITAL
                  </span>
                </span>
              </span>
            </Link>

            <p className="text-muted mt-8 max-w-lg text-xl leading-8 tracking-[-0.02em]">
              Thoughtful digital products built with clarity, precision and
              long-term intent.
            </p>

            <p className="text-muted mt-8 max-w-md text-sm leading-6">
              Independent digital studio working across strategy, design and
              development.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:gap-20 lg:justify-self-end">
            <nav aria-label="Footer navigation">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Navigate
              </p>

              <ul className="mt-5 space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group text-muted hover:text-foreground focus-visible:ring-accent inline-flex items-center gap-3 rounded-sm text-sm transition-colors duration-200 outline-none focus-visible:ring-2"
                    >
                      <span
                        aria-hidden="true"
                        className="bg-accent h-px w-0 transition-[width] duration-300 group-hover:w-4"
                      />

                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Get in touch
              </p>

              <Link
                href={`mailto:${contactDetails.email}`}
                className="group text-foreground hover:text-accent focus-visible:ring-accent mt-5 inline-flex items-center gap-3 rounded-sm text-sm transition-colors duration-200 outline-none focus-visible:ring-2"
              >
                <span
                  aria-hidden="true"
                  className="bg-accent h-px w-0 transition-[width] duration-300 group-hover:w-4"
                />

                {contactDetails.email}
              </Link>

              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="bg-accent size-2 shrink-0 rounded-full shadow-[0_0_14px_rgba(79,124,255,0.5)]"
                />

                <p className="text-muted text-sm leading-6">
                  {contactDetails.availability}
                </p>
              </div>

              <p className="text-muted mt-6 text-sm leading-6">
                {contactDetails.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-border text-muted flex flex-col gap-5 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Francesca Digital. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="hover:text-foreground focus-visible:ring-accent rounded-sm transition-colors duration-200 outline-none focus-visible:ring-2"
            >
              Privacy
            </Link>

            <Link
              href="#top"
              className="group hover:text-foreground focus-visible:ring-accent inline-flex items-center gap-2 rounded-sm transition-colors duration-200 outline-none focus-visible:ring-2"
            >
              Back to top
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1"
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
