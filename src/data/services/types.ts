export type ServiceId =
  "website" | "landing-page" | "redesign" | "technical-improvement";

export type Service = {
  id: ServiceId;
  number: string;
  title: string;
  audience: string;
  problem: string;
  approach: string;
  outcome: string;
  deliverables: readonly string[];
};
