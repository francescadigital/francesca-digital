export type ProcessStepId = "understand" | "define" | "build" | "refine";

export type ProcessStep = {
  id: ProcessStepId;
  number: string;
  title: string;
  description: string;
  outcome: string;
};
