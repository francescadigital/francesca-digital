"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  fadeDownVariants,
  fadeInVariants,
  fadeLeftVariants,
  fadeRightVariants,
  fadeUpVariants,
  motionTransition,
  revealViewport,
  scaleInVariants,
} from "@/lib/motion";
import { cn } from "@/lib/cn";

type RevealVariant =
  | "fade"
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale";

type RevealElement =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "nav"
  | "main"
  | "ul"
  | "li"
  | "span";

type RevealProps = {
  as?: RevealElement;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  viewport?: typeof revealViewport;
};

const variantMap = {
  fade: fadeInVariants,
  up: fadeUpVariants,
  down: fadeDownVariants,
  left: fadeLeftVariants,
  right: fadeRightVariants,
  scale: scaleInVariants,
} as const;

const motionElementMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
  main: motion.main,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
} as const;

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  variant = "up",
  viewport = revealViewport,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = motionElementMap[as];

  return (
    <MotionElement
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={viewport}
      variants={variantMap[variant]}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              ...motionTransition.reveal,
              delay,
            }
      }
      className={cn(className)}
    >
      {children}
    </MotionElement>
  );
}