import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails } from "@/data/contact";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Start a project with Francesca Digital and discuss your goals, scope and next steps.",
  path: "/contact",
  keywords: [
    "hire web designer",
    "hire Next.js developer",
    "digital studio contact",
  ],
});

export default function ContactPage() {
  return (
    <Section as="main">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.4fr)]">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Contact"
              title="Let’s discuss what you are building."
              description="Share the context, goals and current stage of your project. The more useful context you provide, the more useful the first response can be."
            />

            <div className="border-border mt-12 max-w-2xl border-t pt-8">
              <p className="text-accent font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                What to include
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-foreground text-sm font-medium">
                    The project
                  </p>

                  <p className="text-muted mt-2 text-sm leading-6">
                    What you are building, redesigning or trying to improve.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium">
                    The goal
                  </p>

                  <p className="text-muted mt-2 text-sm leading-6">
                    What should be different after the project is complete.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium">
                    Current stage
                  </p>

                  <p className="text-muted mt-2 text-sm leading-6">
                    Whether you have content, designs, an existing website or
                    are starting from scratch.
                  </p>
                </div>

                <div>
                  <p className="text-foreground text-sm font-medium">
                    Constraints
                  </p>

                  <p className="text-muted mt-2 text-sm leading-6">
                    Any useful timing, scope or technical context already known.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={`mailto:${contactDetails.email}`}
                className="bg-accent text-accent-foreground hover:bg-accent-hover focus-visible:ring-accent focus-visible:ring-offset-background inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
              >
                Email Francesca Digital
              </Link>
            </div>
          </div>

          <aside className="border-border border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div>
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Email
              </p>

              <Link
                href={`mailto:${contactDetails.email}`}
                className="text-foreground hover:text-accent focus-visible:ring-accent mt-3 inline-block rounded-sm text-lg break-all transition-colors duration-200 outline-none focus-visible:ring-2"
              >
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
                  className="bg-accent size-2 shrink-0 rounded-full"
                />

                <p className="text-foreground text-sm">
                  {contactDetails.availability}
                </p>
              </div>
            </div>

            <div className="border-border mt-10 border-t pt-8">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Response
              </p>

              <p className="text-foreground mt-3 text-sm leading-6">
                {contactDetails.responseTime}
              </p>
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
                What happens next
              </p>

              <p className="text-muted mt-3 text-sm leading-6">
                We review the context first. If the project looks like a good
                fit, the next step is a focused conversation about goals, scope
                and direction.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
