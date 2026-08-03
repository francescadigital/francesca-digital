"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  fadeUpVariants,
  revealViewport,
  slowStaggerContainerVariants,
  staggerContainerVariants,
} from "@/lib/motion";
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

export function Stagger({
  children,
  className,
  slow = false,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={revealViewport}
      variants={
        slow
          ? slowStaggerContainerVariants
          : staggerContainerVariants
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}