import { colors } from "@ownui-system/styles/colors";
import clsx from "clsx";
import {
  Children,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useMemo,
} from "react";

interface RadioGroupProps extends PropsWithChildren {
  className?: string;
  activeColor?: string;
}

function RadioGroup({
  className,
  children,
  activeColor = colors.gray800,
}: RadioGroupProps) {
  const child = useMemo(() => {
    return Children.map(children, (child) =>
      cloneElement(child as ReactElement, {
        activeColor,
      }),
    );
  }, [children, activeColor]);

  return <div className={clsx("flex", className)}>{child}</div>;
}

export default RadioGroup;
