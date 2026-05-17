const transitions = {
  smooth: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1]
  },
  fast: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1]
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth
  }
};

export const slideIn = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: transitions.smooth
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};



export const hoverCard = {
  hover: {
    y: -4,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 18
    }
  }
};

export const textReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: {
    duration: 0.35,
    ease: [0.25, 0.1, 0.25, 1]
  }
};