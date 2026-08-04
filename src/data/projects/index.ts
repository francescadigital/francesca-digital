import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "francesca-digital",
    title: "Francesca Digital",
    category: "Brand Identity",
    description:
      "A modern digital studio focused on clarity, engineering and premium product experiences.",
    year: "2026",
    accent: "#4F7CFF",
    preview: "geometry",
    featured: true,
  },

  {
    slug: "aurora-finance",
    title: "Aurora Finance",
    category: "Web Development",
    description:
      "A concept platform for modern financial services with a strong emphasis on performance.",
    year: "2026",
    accent: "#6E8DFF",
    preview: "grid",
    featured: true,
  },

  {
    slug: "atelier-one",
    title: "Atelier One",
    category: "Web Design",
    description:
      "Editorial-inspired portfolio experience for a contemporary architecture studio.",
    year: "2025",
    accent: "#8098FF",
    preview: "editorial",
    featured: false,
  },
];
