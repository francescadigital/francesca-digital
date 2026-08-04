import type { Metadata } from "next";

import { seoConfig } from "./config";

type CreateMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: CreateMetadataInput): Metadata {
  const canonicalUrl = new URL(path, seoConfig.siteUrl);

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    keywords: [...seoConfig.keywords, ...keywords],

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
