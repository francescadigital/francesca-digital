import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy",
    description:
      "We turn business context, user needs and technical constraints into a clear direction before production begins.",
    deliverables: [
      "Product direction",
      "Content architecture",
      "Technical planning",
      "Experience definition",
    ],
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "We create focused interfaces and visual systems that communicate clearly, build trust and support real use.",
    deliverables: [
      "UX and interface design",
      "Responsive systems",
      "Visual direction",
      "Interaction design",
    ],
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    description:
      "We build fast, accessible and maintainable digital products with engineering decisions made for long-term value.",
    deliverables: [
      "Frontend development",
      "CMS integration",
      "Performance optimization",
      "Technical quality assurance",
    ],
  },
];