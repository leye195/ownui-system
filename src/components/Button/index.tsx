import { ComponentProps, ForwardedRef, ReactNode, forwardRef } from "react";

import styles from "./Button.module.css";
import {
  baseStyle,
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
      className={`${baseStyle} ${buttonTextSize[size]} ${buttonSizeMap[isOnlyIcon ? "icon" : "normal"][size]} ${styles.Button} ${className}`}
      style={{
        ...{
          ...style,
          width,
        },
        ...buttonTypeMap(color)[variant],
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
