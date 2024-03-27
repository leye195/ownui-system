export function bottomSheetOpenClose(
  viewPort: string,
  minHeight: string,
  maxHeight: string,
) {
  return {
    opened: {
      top: `calc(${viewPort} - ${minHeight})`,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      top: viewPort,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      top: `calc( ${viewPort} - ${maxHeight})`,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
}
