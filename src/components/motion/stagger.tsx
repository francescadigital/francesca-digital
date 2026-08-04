"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";
import {
  fadeUpVariants,
  slowStaggerContainerVariants,
  staggerContainerVariants,
} from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  slow?: boolean;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

const staggerViewport = {
  once: true,
  amount: 0.05,
  margin: "0px 0px -5% 0px",
} as const;

export function Stagger({ children, className, slow = false }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={staggerViewport}
      variants={slow ? slowStaggerContainerVariants : staggerContainerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUpVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
