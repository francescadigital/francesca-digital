import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "website",
    number: "01",
    title: "Website Design & Development",
    audience:
      "For businesses that need a credible, high-quality digital presence.",
    problem:
      "A website can look polished and still fail to explain the business, build trust or support future growth.",
    approach:
      "We combine content structure, interface design and frontend engineering into one focused process.",
    outcome:
      "A fast, accessible and maintainable website built around clear business goals.",
    deliverables: [
      "Content and page architecture",
      "Responsive interface design",
      "Frontend development",
      "SEO and performance foundation",
    ],
  },
  {
    id: "landing-page",
    number: "02",
    title: "Landing Pages",
    audience:
      "For launches, campaigns and offers that need one clear conversion path.",
    problem:
      "When a page tries to communicate too much, visitors lose focus and the main offer becomes difficult to understand.",
    approach:
      "We reduce the message to its essential argument and design every section around one intended action.",
    outcome:
      "A focused landing page that communicates quickly and guides visitors toward the next step.",
    deliverables: [
      "Message and conversion structure",
      "Responsive landing page design",
      "Frontend implementation",
      "Analytics-ready delivery",
    ],
  },
  {
    id: "redesign",
    number: "03",
    title: "Website Redesign",
    audience:
      "For businesses whose current website no longer reflects their quality.",
    problem:
      "An outdated or confusing website can weaken trust even when the underlying business is strong.",
    approach:
      "We preserve what still works, identify the highest-impact problems and rebuild the experience around clarity and usability.",
    outcome:
      "A more credible, coherent and effective website without unnecessary reinvention.",
    deliverables: [
      "Existing website audit",
      "Content and UX restructuring",
      "Visual system redesign",
      "Responsive redevelopment",
    ],
  },
  {
    id: "technical-improvement",
    number: "04",
    title: "Technical Improvement",
    audience: "For existing websites that need better quality after launch.",
    problem:
      "Slow performance, accessibility issues and fragile code increase maintenance cost and reduce user confidence.",
    approach:
      "We audit the current implementation, prioritize measurable improvements and strengthen the system without rebuilding everything.",
    outcome:
      "A faster, more accessible and maintainable website with a stronger technical foundation.",
    deliverables: [
      "Performance and code audit",
      "Accessibility improvements",
      "SEO and metadata corrections",
      "Maintainability improvements",
    ],
  },
];
