import { typographyMap } from "@ui-system/styles/typography";

export const baseStyle = `rounded-[10px] border-solid border-[1px]  border-[#ebebeb] box-border px-[15px] py-[10px]`;

export const inValidStyle = `rounded-[10px] border-solid border-[1px]  border-[#ea3a3d] box-border px-[15px] py-[10px]`;

export const inputSizeMap = {
  small: `h-[40px] ${typographyMap["body-400-5"]}`,
  medium: `h-[48px] ${typographyMap["body-400-4"]}`,
  large: `h-[56px] ${typographyMap["body-400-4"]}`,
};
