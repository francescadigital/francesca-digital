import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "conversation",
    number: "01",
    title: "Initial Conversation",
    summary: "Understand the context before proposing a solution.",
    description:
      "We begin with the business, the audience, the current situation and the outcome the project needs to support. The goal is to understand the problem before discussing execution.",
    outcome: "Shared understanding",
  },
  {
    id: "planning",
    number: "02",
    title: "Strategy & Planning",
    summary: "Turn context into priorities, scope and direction.",
    description:
      "We define the information structure, project priorities, technical direction and the decisions that need to be made before production begins.",
    outcome: "Clear roadmap",
  },
  {
    id: "design",
    number: "03",
    title: "Design & Validation",
    summary: "Make important decisions visible before development.",
    description:
      "Strategy becomes a responsive interface and visual system. Important flows, hierarchy and interaction decisions are reviewed before they become expensive to change.",
    outcome: "Validated direction",
  },
  {
    id: "development",
    number: "04",
    title: "Development",
    summary: "Build the approved direction as a reliable system.",
    description:
      "The interface is implemented with performance, accessibility and maintainability treated as part of the product rather than post-launch improvements.",
    outcome: "Production-ready build",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    summary: "Release carefully instead of simply publishing.",
    description:
      "Before release we verify responsive behavior, content, metadata, accessibility, performance and the important production details surrounding deployment.",
    outcome: "Confident release",
  },
  {
    id: "support",
    number: "06",
    title: "Long-term Support",
    summary: "Keep improving after the first release.",
    description:
      "A website should remain useful after launch. When needed, we continue refining content, performance, functionality and technical quality as the business evolves.",
    outcome: "Ongoing improvement",
  },
];
