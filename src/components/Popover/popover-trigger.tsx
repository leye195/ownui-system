import { Children, type PropsWithChildren, cloneElement, useMemo } from "react";
import { usePopoverContext } from "./popover-context";

function PopoverTrigger({ children }: PropsWithChildren) {
  const { useContext } = usePopoverContext();
  const context = useContext();
  const child = useMemo(() => {
    if (typeof children === "string") return <p>{children}</p>;
    return Children.only(children) as React.ReactElement;
  }, [children]);

  return cloneElement(child, {
    onClick: () => context.onOpenChange(!context.isOpen),
  });
}

export default PopoverTrigger;
