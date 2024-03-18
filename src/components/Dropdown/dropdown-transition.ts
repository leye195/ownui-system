export const scaleInOut = {
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
