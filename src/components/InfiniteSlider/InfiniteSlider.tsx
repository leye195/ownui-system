import { cn } from "@ownui-system/styles/util";
import {
  Children,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
  useMemo,
} from "react";
import InfiniteSliderItem from "./InfiniteSlider-item";
import { sliderListStyle, sliderWrapperStyle } from "./InfiniteSlider.style";
import "./style.css";

type InfiniteSliderProps = {
  className?: string;
  width: string;
  height: string;
  reverse?: boolean;
  stopOnHover?: boolean;
} & PropsWithChildren;

function InfiniteSlider({
  width,
  height,
  reverse,
  stopOnHover,
  children,
}: InfiniteSliderProps) {
  const child = useMemo(() => {
    return Children.map(children, (child, index) => {
      return cloneElement(child as ReactElement, {
        position: index + 1,
      });
    });
  }, [children]);

  return (
    <div
      className={cn(
        sliderWrapperStyle,
        "slider",
        stopOnHover && "slider-pause",
      )}
      data-reverse={reverse}
      style={{
        "--width": width,
        "--height": height,
        "--quantity": Children.count(children),
      }}
    >
      <div className={cn(sliderListStyle)}>{child}</div>
    </div>
  );
}

InfiniteSlider.Item = InfiniteSliderItem;

export default InfiniteSlider;
