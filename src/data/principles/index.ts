import type { Principle } from "./types";

export const principles: Principle[] = [
  {
    id: "precision",
    number: "01",
    title: "Precision",
    description:
      "Details are not decoration. They shape how a product feels, communicates and performs.",
    practice:
      "We make deliberate decisions across content, interface and implementation instead of relying on default solutions.",
  },
  {
    id: "clarity",
    number: "02",
    title: "Clarity",
    description:
      "A strong digital product should make the important things easier to understand and easier to act on.",
    practice:
      "We remove unnecessary complexity and build clear relationships between information, actions and outcomes.",
  },
  {
    id: "performance",
    number: "03",
    title: "Performance",
    description:
      "Quality includes what users cannot immediately see: speed, accessibility, resilience and maintainability.",
    practice:
      "We treat engineering quality as part of the experience, not as a technical concern added at the end.",
  },
  {
    id: "long-term-thinking",
    number: "04",
    title: "Long-term thinking",
    description:
      "The right solution should continue to create value after launch, not become a limitation as the business evolves.",
    practice:
      "We favor systems that can grow, content that can change and decisions that remain understandable over time.",
  },
];