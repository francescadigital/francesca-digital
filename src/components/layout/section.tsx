import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionTone = "default" | "surface";
type SectionSpacing = "none" | "default";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background",
  surface: "bg-surface",
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  default: "section-spacing",
};

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  tone = "default",
  spacing = "default",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(
        "relative",
        toneClasses[tone],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
