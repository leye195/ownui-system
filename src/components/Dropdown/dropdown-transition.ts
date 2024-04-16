export const scaleInOut = {
  enter: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: {
      opacity: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    originY: "-10px",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};
