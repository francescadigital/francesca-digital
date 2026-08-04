import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { seoConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: new URL("/", seoConfig.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: new URL("/work", seoConfig.siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: new URL("/contact", seoConfig.siteUrl).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: new URL(`/work/${project.slug}`, seoConfig.siteUrl).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
