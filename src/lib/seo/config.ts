const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const seoConfig = {
  siteName: "Francesca Digital",
  defaultTitle: "Francesca Digital",
  description:
    "Independent digital studio creating thoughtful websites and digital experiences through strategy, design and engineering.",
  siteUrl,
  locale: "en_US",
  language: "en",
  creator: "Francesca Digital",
  category: "Digital studio",
  keywords: [
    "digital studio",
    "web design",
    "web development",
    "frontend development",
    "Next.js development",
    "UI design",
    "UX design",
    "digital product design",
  ],
} as const;
