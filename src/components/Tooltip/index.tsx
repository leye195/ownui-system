import { cn } from "@ownui-system/styles/util";
import type { ComponentPosition } from "@ownui-system/types";
import { type CSSProperties, type PropsWithChildren } from "react";
import {
  afterStyle,
  baseStyle,
  beforeStyle,
  hoverStyle,
  openStyle,
  positionStyle,
} from "./tooltip-style";

type TooltipProps = {
  open?: boolean;
  message: string;
  placement?: ComponentPosition;
  className?: string;
  tailOffset?: string;
  bgColor?: CSSProperties["backgroundColor"];
} & PropsWithChildren;

function Tooltip({
  children,
  className,
  open,
  message,
  placement = "bottom",
  tailOffset = "0.1875rem",
  bgColor = "#e2e2e2",
}: TooltipProps) {
  return (
    <div
      className={cn(
        baseStyle,
        afterStyle,
        beforeStyle,
        hoverStyle["before"],
        hoverStyle["after"],
        open && openStyle["before"],
        open && openStyle["after"],
        positionStyle[placement].after,
        positionStyle[placement].before,
        className,
      )}
      data-tip={message}
      role="tooltip"
      style={{
        "--message": message,
        "--bg-color": bgColor,
        "--tail-offset": `calc(100% + 0.0625rem - ${tailOffset})`,
      }}
    >
      {children}
    </div>
  );
}

export default Tooltip;
