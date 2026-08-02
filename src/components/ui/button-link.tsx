import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkVariant = "primary" | "secondary";
type ButtonLinkSize = "sm" | "md";
type ButtonLinkArrow = "right" | "up-right";

type ButtonLinkProps = Omit<
  ComponentProps<typeof Link>,
  "children" | "className"
> & {
  children: ReactNode;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  arrow?: ButtonLinkArrow;
  className?: string;
};

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary:
    "border border-border text-foreground hover:border-foreground/40 hover:bg-surface",
};

const sizeClasses: Record<ButtonLinkSize, string> = {
  sm: "h-10 px-5",
  md: "h-12 px-6",
};

function ArrowIcon({ direction }: { direction: ButtonLinkArrow }) {
  if (direction === "right") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="size-4"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="size-4"
    >
      <path
        d="M4 12 12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  arrow,
  className,
  ...linkProps
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-3 rounded-full text-sm font-semibold outline-none transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...linkProps}
    >
      {children}

      {arrow ? (
        <span
          className={cn(
            "transition-transform duration-200",
            arrow === "up-right"
              ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              : "group-hover:translate-x-0.5",
          )}
        >
          <ArrowIcon direction={arrow} />
        </span>
      ) : null}
    </Link>
  );
}