"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  slow?: boolean;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className, slow = false }: StaggerProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      element.dataset.visible = "true";

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        element.dataset.visible = "true";
        observer.unobserve(element);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn("stagger", slow && "stagger-slow", className)}
    >
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return <div className={cn("stagger-item", className)}>{children}</div>;
}
