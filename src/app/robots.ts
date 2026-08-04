import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: new URL("/sitemap.xml", seoConfig.siteUrl).toString(),

    host: seoConfig.siteUrl,
  };
}
