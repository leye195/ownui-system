import { cn } from "@ownui-system/styles/util";
import { PropsWithChildren } from "react";
import { sliderItemStyle } from "./InfiniteSlider.style";

type InfiniteSliderItemProps = {
  className?: string;
  position?: number;
} & PropsWithChildren;

function InfiniteSliderItem({
  className,
  children,
  position,
}: InfiniteSliderItemProps) {
  return (
    <div
      className={cn(sliderItemStyle, "item", className)}
      style={{
        "--position": position ?? 1,
      }}
    >
      {children}
    </div>
  );
}

export default InfiniteSliderItem;
