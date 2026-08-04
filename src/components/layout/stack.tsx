import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";
type StackAlign = "start" | "center" | "end" | "stretch";

type StackProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  gap?: StackGap;
  align?: StackAlign;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-10",
  xl: "gap-16",
};

const alignClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export function Stack<T extends ElementType = "div">({
  as,
  children,
  className,
  gap = "md",
  align = "stretch",
  ...props
}: StackProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "flex flex-col",
        gapClasses[gap],
        alignClasses[align],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
