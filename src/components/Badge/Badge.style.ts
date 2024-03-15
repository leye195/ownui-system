export const baseStyle =
  "flex items-center justify-center absolute z-[1] text-center";

export const badgeSizeMap = {
  small: "min-w-[16px] min-h-[16px] text-[12px]",
  medium: "min-w-[20px] min-h-[20px] text-[14px]",
  large: "min-w-[24px] min-h-[24px] text-[14px]",
};

export const badgePlacementMap = {
  small: {
    "top-left": "top-[-3px] left-[-3px]",
    "top-right": "top-[-3px] right-[-3px]",
    "bottom-left": "bottom-[-3px] left-[-3px]",
    "bottom-right": "bottom-[-3px] right-[-3px]",
  },
  medium: {
    "top-left": "top-[-4px] left-[-4px]",
    "top-right": "top-[-4px] right-[-4px]",
    "bottom-left": "bottom-[-4px] left-[-4px]",
    "bottom-right": "bottom-[-4px] right-[-4px]",
  },
  large: {
    "top-left": "top-[-5px] left-[-5px]",
    "top-right": "top-[-5px] right-[-5px]",
    "bottom-left": "bottom-[-5px] left-[-5px]",
    "bottom-right": "bottom-[-5px] right-[-5px]",
  },
};
