import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails } from "@/data/contact";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description:
    "Privacy information for visitors to the Francesca Digital website.",
  path: "/privacy",
  keywords: ["Francesca Digital privacy", "privacy policy"],
});

const privacySections = [
  {
    title: "Information you provide",
    content: [
      "Francesca Digital does not currently use account registration or a website contact form.",
      "If you contact us by email, we receive the information you choose to include in your message, together with standard email metadata such as your email address.",
    ],
  },
  {
    title: "How information is used",
    content: [
      "Information sent by email is used to understand your enquiry, respond to you and, where relevant, discuss or manage a potential project.",
      "We do not use correspondence for unrelated advertising or sell personal information.",
    ],
  },
  {
    title: "Website analytics and cookies",
    content: [
      "The current version of this website does not intentionally use advertising trackers or analytics cookies.",
      "If analytics or other technologies that change how visitor information is processed are introduced later, this notice will be updated accordingly.",
    ],
  },
  {
    title: "Technical information",
    content: [
      "Like most websites, the infrastructure used to serve the site may process basic technical information required to deliver, secure and operate the service.",
      "This can include information associated with web requests, such as timestamps, requested resources and network information.",
    ],
  },
  {
    title: "Retention",
    content: [
      "Project enquiries and correspondence are kept only for as long as they remain useful for communication, project administration or legitimate record-keeping purposes.",
      "Information that is no longer reasonably required can be deleted where appropriate.",
    ],
  },
  {
    title: "Third-party services",
    content: [
      "Email communication necessarily involves the email providers used by the sender and Francesca Digital.",
      "Additional third-party services may be introduced as the website develops. Material changes that affect privacy practices will be reflected in this notice.",
    ],
  },
  {
    title: "Your privacy questions",
    content: [
      "If you have a question about information you have shared with Francesca Digital, want information corrected or want to request deletion where appropriate, contact us using the email address below.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <main>
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Privacy"
            title="Privacy, explained clearly."
            description="This notice explains how information may be handled when you visit the Francesca Digital website or contact us directly."
          />

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-20">
            <aside>
              <div className="border-border border-t pt-6 lg:sticky lg:top-10">
                <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                  Effective
                </p>

                <p className="text-foreground mt-3 text-sm">August 2026</p>

                <div className="border-border mt-8 border-t pt-6">
                  <p className="text-muted font-mono text-[0.625rem] tracking-[0.16em] uppercase">
                    Contact
                  </p>

                  <Link
                    href={`mailto:${contactDetails.email}`}
                    className="text-foreground hover:text-accent focus-visible:ring-accent mt-3 inline-block rounded-sm text-sm break-all transition-colors duration-200 outline-none focus-visible:ring-2"
                  >
                    {contactDetails.email}
                  </Link>
                </div>
              </div>
            </aside>

            <div>
              {privacySections.map((section, index) => (
                <section
                  key={section.title}
                  className="border-border border-t py-10 first:border-t-0 first:pt-0"
                >
                  <div className="grid gap-6 sm:grid-cols-[3rem_minmax(0,1fr)]">
                    <p
                      aria-hidden="true"
                      className="text-accent font-mono text-[0.625rem] tracking-[0.16em]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <div>
                      <h2 className="text-foreground text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4">
                        {section.content.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-muted max-w-3xl text-base leading-7"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              <div className="border-border mt-6 border-t pt-8">
                <p className="text-muted max-w-3xl text-sm leading-6">
                  This privacy notice reflects the current version of the
                  Francesca Digital website. It may be revised when the website,
                  its infrastructure or the services used by it materially
                  change.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
