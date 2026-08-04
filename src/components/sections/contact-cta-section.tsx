import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { SectionLabel } from "@/components/ui/section-label";
import { contactDetails } from "@/data/contact";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="border-border relative overflow-hidden border-b"
    >
      <div className="site-container section-spacing">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.38fr)] lg:items-end">
          <div>
            <SectionLabel>{contactDetails.eyebrow}</SectionLabel>

            <h2
              id="contact-cta-heading"
              className="text-foreground mt-8 max-w-5xl text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.9] font-medium tracking-[-0.07em]"
            >
              <span className="block">Have a project</span>
              <span className="text-muted block">in mind?</span>
            </h2>

            <p className="text-muted mt-10 max-w-2xl text-lg leading-8 sm:text-xl">
              {contactDetails.description}
            </p>

            <div className="mt-10">
              <ButtonLink
                href="/contact"
                arrow="up-right"
                className="hover-shadow"
              >
                Start a project
              </ButtonLink>
            </div>
          </div>

          <div className="border-border border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div className="group/contact">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Email
              </p>

              <Link
                href={`mailto:${contactDetails.email}`}
                className="text-foreground hover:text-accent focus-visible:ring-accent mt-3 inline-flex items-center gap-3 rounded-sm text-base transition-colors duration-200 outline-none focus-visible:ring-2"
              >
                <span
                  aria-hidden="true"
                  className="bg-accent h-px w-0 transition-[width] duration-300 group-hover/contact:w-4"
                />

                {contactDetails.email}
              </Link>
            </div>

            <div className="border-border mt-10 border-t pt-8">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Availability
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="bg-accent size-2 shrink-0 rounded-full shadow-[0_0_16px_rgba(79,124,255,0.55)]"
                />

                <p className="text-foreground text-sm">
                  {contactDetails.availability}
                </p>
              </div>
            </div>

            <div className="border-border mt-10 border-t pt-8">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Location
              </p>

              <p className="text-foreground mt-3 text-sm">
                {contactDetails.location}
              </p>
            </div>

            <div className="border-border mt-10 border-t pt-8">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Response
              </p>

              <p className="text-foreground mt-3 text-sm leading-6">
                Usually within 1–2 business days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="bg-accent/[0.085] pointer-events-none absolute right-[-14rem] bottom-[-14rem] -z-10 size-[36rem] rounded-full blur-[155px]"
      />
    </section>
  );
}
