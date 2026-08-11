import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { seoConfig } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),

  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },

  description: seoConfig.description,
  applicationName: seoConfig.siteName,

  authors: [
    {
      name: seoConfig.creator,
    },
  ],

  creator: seoConfig.creator,
  publisher: seoConfig.creator,
  category: seoConfig.category,
  keywords: [...seoConfig.keywords],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    url: "/",
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang={seoConfig.language}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />

        <a
          href="#main-content"
          className="bg-accent-solid text-accent-foreground shadow-large fixed top-4 left-4 z-[100] -translate-y-24 rounded-md px-4 py-3 text-sm font-semibold transition-transform duration-200 focus:translate-y-0"
        >
          Skip to content
        </a>

        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <div id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
