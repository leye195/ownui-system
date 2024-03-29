export type BUTTON_SIZE_TYPE = keyof typeof buttonSizeMap;

export const baseStyle =
  "flex items-center justify-center h-fit transition-all duration-100 ease-linear w-[var(--width)] border-[1px] bg-[var(--bg-color)] border-[var(--border-color)] border-solid disabled:opacity-30";

export const buttonSizeMap = {
  normal: {
    xsmall: "px-[8px] py-[8px] rounded-[8px] gap-1",
    small: "px-[10px] py-[10px] rounded-[10px] gap-1",
    medium: "px-[12px] py-[12px] rounded-[12px] gap-1",
    large: "px-[16px] py-[16px] rounded-[14px] gap-[4px]",
    xlarge: "px-[20px] py-[16px] rounded-[16px] gap-[4px]",
  },
  icon: {
    xsmall: "p-[6px] rounded-[8px]",
    small: "p-[6px] rounded-[8px]",
    medium: "p-[14px] rounded-[8px]",
    large: "p-[12px] rounded-[10px]",
    xlarge: "p-[16px] rounded-[16px]",
  },
};

export const buttonTextSize = {
  xsmall: "text-body-600-5",
  small: "text-body-600-5",
  medium: "text-body-600-4",
  large: "text-body-600-4",
  xlarge: "text-body-600-3",
};

export function buttonHoverStyle(variant: "normal" | "line" | "text") {
  if (variant === "line")
    return "hover:text-white hover:bg-[var(--border-color)] disabled:bg-[var(--bg-color)] disabled:text-current";

  return "hover:opacity-[0.9] hover:brightness-[0.9] disabled:bg-[var(--bg-color)]";
}

export function buttonTypeMap(color: string) {
  return {
    normal: {
      "--bg-color": `${color}`,
      "--border-color": `${color}`,
    },
    line: {
      "--border-color": `${color}`,
      "--bg-color": "transparent",
    },
    text: {
      "--bg-color": "transparent",
      "--border-color": "transparent",
    },
  };
}
