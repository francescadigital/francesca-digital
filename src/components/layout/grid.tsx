import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type GridColumns = 1 | 2 | 3 | 4;

type GridGap = "sm" | "md" | "lg" | "xl";

type GridProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  columns?: GridColumns;
  gap?: GridGap;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const columnClasses: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 lg:grid-cols-3",
  4: "grid-cols-1 lg:grid-cols-4",
};

const gapClasses: Record<GridGap, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

export function Grid<T extends ElementType = "div">({
  as,
  children,
  className,
  columns = 1,
  gap = "md",
  ...props
}: GridProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("grid", columnClasses[columns], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
