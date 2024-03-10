export const scaleInOut = {
  enter: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
