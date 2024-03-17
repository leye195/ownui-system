import clsx from "clsx";
import { ComponentProps, ForwardedRef, ReactNode, forwardRef } from "react";
import {
  baseStyle,
  buttonHoverStyle,
  buttonSizeMap,
  buttonTextSize,
  buttonTypeMap,
} from "./Button.style";

export interface ButtonProps extends ComponentProps<"button"> {
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  variant?: "normal" | "line" | "text";
  width?: string;
  className?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isOnlyIcon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    style,
    startContent,
    endContent,
    isOnlyIcon,
    className = "",
    size = "medium",
    width = "auto",
    type = "button",
    variant = "normal",
    color = "transparent",
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        baseStyle,
        buttonTextSize[size],
        buttonSizeMap[isOnlyIcon ? "icon" : "normal"][size],
        buttonHoverStyle(variant),
        className,
      )}
      style={{
        "--width": width,
        ...buttonTypeMap(color)[variant],
        ...style,
      }}
      type={type}
      {...props}
    >
      {startContent != null ? startContent : null}
      {children}
      {endContent != null ? endContent : null}
    </button>
  );
});

export default Button;
