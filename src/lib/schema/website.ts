import { seoConfig } from "@/lib/seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: seoConfig.siteName,

    url: seoConfig.siteUrl,

    description: seoConfig.description,

    inLanguage: seoConfig.language,
  };
}
