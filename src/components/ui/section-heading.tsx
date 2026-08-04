import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

import { SectionLabel } from "./section-label";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  as?: ElementType;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      {eyebrow ? <SectionLabel className="mb-6">{eyebrow}</SectionLabel> : null}

      <Heading className="text-foreground max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
        {title}
      </Heading>

      {description ? (
        <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
