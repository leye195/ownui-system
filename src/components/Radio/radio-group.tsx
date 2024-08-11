import { colors } from "@ownui-system/styles/colors";
import { cn } from "@ownui-system/styles/util";
import { type PropsWithChildren } from "react";
import useRadioContext from "./radio-context";

interface RadioGroupProps extends PropsWithChildren {
  className?: string;
  activeColor?: string;
}

function RadioGroup({
  className,
  children,
  activeColor = colors.gray800,
}: RadioGroupProps) {
  const { RadioProvider } = useRadioContext();

  return (
    <RadioProvider
      value={{
        activeColor,
      }}
    >
      <div className={cn("flex", className)}>{children}</div>
    </RadioProvider>
  );
}

export default RadioGroup;
