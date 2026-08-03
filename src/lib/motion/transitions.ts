import type { Transition } from "motion/react";

export const motionEase = {
  standard: [0.22, 1, 0.36, 1],
  emphasized: [0.16, 1, 0.3, 1],
  gentle: [0.25, 0.1, 0.25, 1],
} as const;

export const motionTransition = {
  fast: {
    duration: 0.18,
    ease: motionEase.standard,
  },

  base: {
    duration: 0.32,
    ease: motionEase.standard,
  },

  reveal: {
    duration: 0.64,
    ease: motionEase.emphasized,
  },

  slow: {
    duration: 0.9,
    ease: motionEase.emphasized,
  },

  spring: {
    type: "spring",
    stiffness: 260,
    damping: 26,
    mass: 0.8,
  },
} satisfies Record<string, Transition>;