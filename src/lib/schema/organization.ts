import { seoConfig } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,

    logo: new URL("/brand/logo-mark.svg", seoConfig.siteUrl).toString(),

    image: new URL("/brand/logo.svg", seoConfig.siteUrl).toString(),

    areaServed: "Worldwide",

    knowsAbout: [
      "Web Design",
      "Web Development",
      "Frontend Development",
      "Digital Product Design",
      "UI Design",
      "UX Design",
      "Next.js",
    ],
  };
}
