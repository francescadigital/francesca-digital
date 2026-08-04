import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.siteName,
    short_name: "Francesca",

    description: seoConfig.description,

    start_url: "/",

    display: "standalone",

    background_color: "#09090b",
    theme_color: "#09090b",

    lang: seoConfig.language,

    icons: [
      {
        src: "/brand/logo-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
