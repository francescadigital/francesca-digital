import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({
  children,
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="h-px w-8 shrink-0 bg-accent"
      />

      <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted uppercase">
        {children}
      </p>
    </div>
  );
}