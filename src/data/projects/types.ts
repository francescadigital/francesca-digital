export type ProjectCategory =
  | "Web Design"
  | "Web Development"
  | "Brand Identity";

export type ProjectPreview =
  | "grid"
  | "editorial"
  | "geometry";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  year: string;

  accent: string;
  preview: ProjectPreview;

  featured: boolean;
};