export type ServiceId = "strategy" | "design" | "development";

export type Service = {
  id: ServiceId;
  number: string;
  title: string;
  description: string;
  deliverables: readonly string[];
};
