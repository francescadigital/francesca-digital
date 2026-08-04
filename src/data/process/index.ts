import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the business, its audience, the constraints and the decisions that matter most.",
    outcome: "Shared context",
  },
  {
    id: "define",
    number: "02",
    title: "Define",
    description:
      "We turn what we learned into a focused direction, clear priorities and a scope that supports meaningful outcomes.",
    outcome: "Clear direction",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Design and engineering move together so the product remains coherent from interface decisions to implementation.",
    outcome: "Working system",
  },
  {
    id: "refine",
    number: "04",
    title: "Refine",
    description:
      "We review, test and improve the details that influence clarity, performance and the quality of the final experience.",
    outcome: "Confident delivery",
  },
];
