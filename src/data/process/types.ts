export type ProcessStepId =
  "conversation" | "planning" | "design" | "development" | "launch" | "support";

export type ProcessStep = {
  id: ProcessStepId;
  number: string;
  title: string;
  summary: string;
  description: string;
  outcome: string;
};
