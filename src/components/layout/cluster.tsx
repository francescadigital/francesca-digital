import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ClusterGap = "xs" | "sm" | "md" | "lg";
type ClusterAlign = "start" | "center" | "end" | "baseline";
type ClusterJustify = "start" | "center" | "end" | "between";

type ClusterProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  gap?: ClusterGap;
  align?: ClusterAlign;
  justify?: ClusterJustify;
  wrap?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const gapClasses: Record<ClusterGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

const alignClasses: Record<ClusterAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
};

const justifyClasses: Record<ClusterJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Cluster<T extends ElementType = "div">({
  as,
  children,
  className,
  gap = "md",
  align = "center",
  justify = "start",
  wrap = true,
  ...props
}: ClusterProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "flex",
        wrap ? "flex-wrap" : "flex-nowrap",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
