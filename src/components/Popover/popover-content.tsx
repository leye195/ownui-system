import useClickOutSideEffect from "@ui-system/hooks/useClickOutSideEffect";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePopoverContext } from "./popover-context";

type PopoverContentProps = {
  children: React.ReactNode | ((onClose: () => void) => React.ReactNode);
};

function PopoverContent({ children }: PopoverContentProps) {
  const ref = useRef(null);
  const [containers, setContainers] = useState<HTMLElement[] | HTMLElement>([]);
  const { useContext } = usePopoverContext();
  const context = useContext();

  useClickOutSideEffect(containers, () => {
    if (!context) return;
    if (context.isOpen) {
      setTimeout(() => context.onOpenChange(false), 100);
    }
  });

  useEffect(() => {
    if (ref.current) {
      setContainers(ref.current);
    }
  }, []);

  return (
    <div ref={ref}>
      <LazyMotion features={domAnimation}>
        <m.div
          animate="enter"
          exit="exit"
          initial="exit"
          variants={context.motionVariant}
        >
          {typeof children === "function"
            ? children(() => context.onOpenChange(false))
            : children}
        </m.div>
      </LazyMotion>
    </div>
  );
}

export default PopoverContent;
