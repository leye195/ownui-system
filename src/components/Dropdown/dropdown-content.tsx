import useClickOutSideEffect from "@ownui-system/hooks/useClickOutSideEffect";
import { cn } from "@ownui-system/styles/util";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useDropdownContext from "./dropdown-context";
import { scaleInOut } from "./dropdown-transition";

type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

function DropdownContent({ children, className }: DropdownContentProps) {
  const ref = useRef(null);
  const [containers, setContainers] = useState<HTMLElement[] | HTMLElement>([]);

  const { useContext } = useDropdownContext();
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
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        animate="enter"
        className={cn("absolute z-[4] mt-[4px] w-full", className)}
        exit="exit"
        initial="exit"
        variants={scaleInOut}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export default DropdownContent;
