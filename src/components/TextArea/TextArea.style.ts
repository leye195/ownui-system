import { colors } from "@ui-system/styles/colors";
import { typographyMap } from "@ui-system/styles/typography";

export const baseStyle = `outline-none resize-none border-solid border-[1px] min-w-[280px] px-[16px] py-[8px] border-[${colors.gray300}] rounded-[10px]`;

export const inValidStyle = `outline-none resize-none rounded-[10px] border-solid border-[1px] min-w-[280px] border-[${colors.red200}] box-border px-[16px] py-[8px]`;

export const textAreaSizeMap = {
  small: `h-[140px] ${typographyMap["body-400-5"]}`,
  large: `h-[140px] ${typographyMap["body-400-4"]}`,
};
