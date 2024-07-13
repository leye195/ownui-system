/*
Popover: The main component to display a popover.
PopoverTrigger: The component that triggers the popover.
PopoverContent: The component that contains the popover content.
*/

import useIsomorphicLayoutEffect from "@ownui-system/hooks/useIsomorphicLayoutEffect";
import Portal from "@ownui-system/shared/Portal";
import type { ComponentPosition } from "@ownui-system/types";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Children, ReactNode, useCallback, useRef, useState } from "react";
import usePopover from "./hook/usePopover";
import { usePopoverContext } from "./popover-context";

export interface PopoverProps {
  id?: string;
  children: ReactNode[];
  isOpen: boolean;
  zIndex?: number;
  topOffset?: number;
  leftOffset?: number;
  placement?: ComponentPosition;
  motionVariant?: HTMLMotionProps<"div">["variants"];
  onOpenChange: (isOpen: boolean) => void;
}

/**
 * @example
 * <Popover
 *   isOpen={isOpen}
 *   onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
 *   leftOffset={-70}
 *   topOffset={8}
 * >
 *   <PopoverTrigger>
 *     <Button className=" bg-slate-600">Open Popover</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <div className=" bg-slate-500 p-[10px]">popover content</div>
 *   </PopoverContent>
 * </Popover>
 */
function Popover({
  children,
  id = "popover-container",
  placement = "bottom",
  zIndex = 1,
  topOffset = 0,
  leftOffset = 0,
  ...props
}: PopoverProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    top: 0,
    left: 0,
  });

  const { PopoverProvider } = usePopoverContext();
  const context = usePopover({ ...props, zIndex, placement });
  const [trigger, content] = Children.toArray(children);

  const handleResize = useCallback(() => {
    if (!triggerRef.current) return;

    const { top, left, height, width } =
      triggerRef.current.getBoundingClientRect();

    // top
    if (placement === "top") {
      setStyle({
        top: top - window.scrollY - height - topOffset - 8,
        left: left + leftOffset + window.scrollX,
      });
    }

    if (placement === "bottom") {
      // bottom
      setStyle({
        top: top + height + window.scrollY + topOffset + 8,
        left: left + leftOffset + window.scrollX,
      });
    }

    // todo: support placement left&right
    if (placement === "right") {
      setStyle({
        top: top + window.scrollY,
        left: left + leftOffset + window.scrollX + width,
      });
    }
  }, [leftOffset, topOffset, placement]);

  useIsomorphicLayoutEffect(() => {
    if (triggerRef.current && context.isOpen) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [context.isOpen, handleResize]);

  return (
    <PopoverProvider value={context}>
      <div ref={triggerRef} className="inline-block">
        {trigger}
      </div>
      <AnimatePresence>
        {context.isOpen ? (
          <Portal id={id}>
            <div ref={contentRef} className="absolute" style={style}>
              {content}
            </div>
          </Portal>
        ) : null}
      </AnimatePresence>
    </PopoverProvider>
  );
}

export default Popover;
