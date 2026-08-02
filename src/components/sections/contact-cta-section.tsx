import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";
import { contactDetails } from "@/data/contact";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="site-container section-spacing">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.4fr] lg:items-end">
          <div>
            <SectionLabel>{contactDetails.eyebrow}</SectionLabel>

            <h2
              id="contact-cta-heading"
              className="mt-8 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-medium tracking-[-0.07em] text-foreground"
            >
              {contactDetails.title}
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {contactDetails.description}
            </p>

            <div className="mt-10">
              <ButtonLink href="/contact" arrow="up-right">
                Start a project
              </ButtonLink>
            </div>
          </div>

          <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div>
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                Email
              </p>

              <Link
                href={`mailto:${contactDetails.email}`}
                className="mt-3 inline-block text-base text-foreground outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
              >
                {contactDetails.email}
              </Link>
            </div>

            <div className="mt-10">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                Availability
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-accent"
                />

                <p className="text-sm text-foreground">
                  {contactDetails.availability}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
                Location
              </p>

              <p className="mt-3 text-sm text-foreground">
                {contactDetails.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-14rem] bottom-[-14rem] -z-10 size-[34rem] rounded-full bg-accent/[0.08] blur-[150px]"
      />
    </section>
  );
}