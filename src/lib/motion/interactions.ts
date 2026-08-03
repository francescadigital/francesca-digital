import type {
  TargetAndTransition,
  Transition,
} from "motion/react";

import { motionEase } from "./transitions";

export const interactionTransition = {
  fast: {
    duration: 0.18,
    ease: motionEase.standard,
  },

  base: {
    duration: 0.28,
    ease: motionEase.standard,
  },

  emphasized: {
    duration: 0.42,
    ease: motionEase.emphasized,
  },

  spring: {
    type: "spring",
    stiffness: 300,
    damping: 28,
    mass: 0.8,
  },
} satisfies Record<string, Transition>;

export const hoverLift = {
  y: -4,
  transition: interactionTransition.base,
} satisfies TargetAndTransition;

export const hoverLiftStrong = {
  y: -6,
  transition: interactionTransition.emphasized,
} satisfies TargetAndTransition;

export const hoverScale = {
  scale: 1.02,
  transition: interactionTransition.base,
} satisfies TargetAndTransition;

export const hoverScaleSubtle = {
  scale: 1.01,
  transition: interactionTransition.base,
} satisfies TargetAndTransition;

export const tapPress = {
  scale: 0.985,
  transition: interactionTransition.fast,
} satisfies TargetAndTransition;

export const arrowHover = {
  x: 4,
  transition: interactionTransition.base,
} satisfies TargetAndTransition;

export const arrowUpRightHover = {
  x: 3,
  y: -3,
  transition: interactionTransition.base,
} satisfies TargetAndTransition;

export const glowHover = {
  boxShadow: "0 24px 72px rgba(0, 0, 0, 0.32)",
  transition: interactionTransition.emphasized,
} satisfies TargetAndTransition;