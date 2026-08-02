import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Francesca Digital and discuss your goals, scope and next steps.",
};

export default function ContactPage() {
  return (
    <main className="section-spacing">
      <div className="site-container">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.45fr]">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let’s discuss what you are building."
            description="Share the context, goals and current stage of your project. We will respond with the clearest next step."
          />

          <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="font-mono text-[0.625rem] tracking-[0.16em] text-muted uppercase">
              Email
            </p>

            <Link
              href={`mailto:${contactDetails.email}`}
              className="mt-3 inline-block rounded-sm text-lg text-foreground outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              {contactDetails.email}
            </Link>

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
    </main>
  );
}