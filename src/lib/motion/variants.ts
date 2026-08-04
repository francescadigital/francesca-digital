import type { Variants } from "motion/react";

import { motionTransition } from "./transitions";

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: motionTransition.reveal,
  },
} satisfies Variants;

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.reveal,
  },
} satisfies Variants;

export const fadeDownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.reveal,
  },
} satisfies Variants;

export const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition.reveal,
  },
} satisfies Variants;

export const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: motionTransition.reveal,
  },
} satisfies Variants;

export const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: motionTransition.reveal,
  },
} satisfies Variants;

export const staggerContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
} satisfies Variants;

export const slowStaggerContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
} satisfies Variants;

export const heroContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
} satisfies Variants;

export const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition.slow,
  },
} satisfies Variants;

export const lineRevealVariants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left center",
  },

  visible: {
    scaleX: 1,
    transition: motionTransition.slow,
  },
} satisfies Variants;
