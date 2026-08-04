export type PrincipleId =
  "precision" | "clarity" | "performance" | "long-term-thinking";

export type Principle = {
  id: PrincipleId;
  number: string;
  title: string;
  description: string;
  practice: string;
};
