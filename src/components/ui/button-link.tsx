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
    "border border-accent bg-accent text-accent-foreground shadow-[0_10px_30px_rgba(79,124,255,0.18)] hover:border-accent-hover hover:bg-accent-hover hover:shadow-[0_16px_42px_rgba(79,124,255,0.28)]",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent/45 hover:bg-surface hover:shadow-soft",
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
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-4">
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
        "interactive-group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full text-sm font-semibold outline-none",
        "transition-[transform,border-color,background-color,color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985]",
        "focus-visible:ring-accent focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-4",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...linkProps}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
          variant === "primary"
            ? "bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.16)_50%,transparent_80%)] group-hover:opacity-100"
            : "bg-gradient-to-r from-transparent via-white/[0.035] to-transparent group-hover:opacity-100",
        )}
      />

      <span className="relative z-10">{children}</span>

      {arrow ? (
        <span
          aria-hidden="true"
          className={cn(
            "interactive-arrow relative z-10 flex items-center justify-center",
            arrow === "up-right"
              ? "group-hover:translate-x-[0.1875rem] group-hover:-translate-y-[0.1875rem]"
              : "group-hover:translate-x-1",
          )}
        >
          <ArrowIcon direction={arrow} />
        </span>
      ) : null}
    </Link>
  );
}
