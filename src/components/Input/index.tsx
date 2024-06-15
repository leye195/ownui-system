import Flex from "@ownui-system/shared/Flex";
import { cn } from "@ownui-system/styles/util";
import { ComponentProps, ReactNode } from "react";
import { baseStyle, inValidStyle, inputSizeMap } from "./Input.style";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  left?: ReactNode;
  right?: ReactNode;
  size?: "small" | "medium" | "large";
  inValid?: boolean;
}

function Input({
  className = "",
  size = "medium",
  type = "text",
  left,
  right,
  disabled,
  inValid,
  style,
  ...props
}: InputProps) {
  return (
    <Flex
      align="center"
      className={cn(
        !disabled && inValid ? inValidStyle : baseStyle,
        inputSizeMap[size],
        disabled ? `bg-[#fafafa]` : `bg-[inherit]`,
      )}
      justify="space-between"
      style={style}
    >
      {left ? left : null}
      <input
        className={`w-full bg-[inherit] disabled:bg-[#fafafa] ${className}`}
        disabled={disabled}
        style={{
          outline: "none",
        }}
        type={type}
        {...props}
      />
      {right ? right : null}
    </Flex>
  );
}

export default Input;
