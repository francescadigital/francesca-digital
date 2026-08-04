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
        <div className="grid gap-16 lg:grid-cols-[1fr_0.45fr]">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let’s discuss what you are building."
            description="Share the context, goals and current stage of your project. We will respond with the clearest next step."
          />

          <aside className="border-border border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div>
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Email
              </p>

              <Link
                href={`mailto:${contactDetails.email}`}
                className="text-foreground hover:text-accent focus-visible:ring-accent mt-3 inline-block rounded-sm text-lg transition-colors duration-200 outline-none focus-visible:ring-2"
              >
                {contactDetails.email}
              </Link>
            </div>

            <div className="mt-10">
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

            <div className="mt-10">
              <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                Location
              </p>

              <p className="text-foreground mt-3 text-sm">
                {contactDetails.location}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
