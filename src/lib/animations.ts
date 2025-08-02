// Centralized animation variants for consistent motion throughout the portfolio

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

// Common transition settings
export const defaultTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as const
};

export const smoothTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const
};

export const bounceTransition = {
  duration: 0.5,
  ease: [0.68, -0.55, 0.265, 1.55] as const
};