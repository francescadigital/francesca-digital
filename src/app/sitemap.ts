import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: new URL("/", seoConfig.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: new URL("/contact", seoConfig.siteUrl).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: new URL("/privacy", seoConfig.siteUrl).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];

  return staticRoutes;
}
