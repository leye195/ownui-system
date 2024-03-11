export const scaleInOut = {
  enter: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      opacity: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
  exit: {
    opacity: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const slideInOut = {
  enter: {
    y: 0,
    x: "-50%",
    transition: {
      y: {
        bounce: 0,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
  exit: {
    y: "100%",
    x: "-50%",
    transition: {
      y: {
        bounce: 0,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
};
