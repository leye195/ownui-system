export const labelStyle = "inline-flex gap-[6px] items-center ";

export const wrapperStyle = {
  base: "text-white relative inline-flex items-center justify-center overflow-hidden",
  before:
    "before:absolute before:w-full before:h-full before:content-[''] before:border-solid before:border-[3px] before:border-[#eaeaea]",
  after: "after:absolute after:w-full after:h-full after:content-['']",
};

export const iconStyle = "absolute z-[3]";

export const checkBoxSize = {
  small: {
    box: "w-[16px] h-[16px]",
    icon: "w-2 h-2",
  },
  medium: { box: "w-[20px] h-[20px]", icon: "w-3 h-3" },
  large: { box: "w-[24px] h-[24px]", icon: "w-5 h-4" },
};

export const radiusSize = {
  full: "rounded-[100px] before:rounded-[100px] after:rounded-[100px]",
  large: "rounded-[8px] before:rounded-[8px] after:rounded-[8px]",
  medium: "rounded-[7px] before:rounded-[7px] after:rounded-[7px]",
  small: "rounded-[6px] before:rounded-[6px] after:rounded-[6px]",
  none: "rounded-[0px] before:rounded-[0px] after:rounded-[0px]",
};
