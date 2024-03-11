import Button from "@ui-system/components/Button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useMemo } from "react";
import { useModalContext } from "./modal-context";

export interface ModalContentProps {
  children: React.ReactNode | ((onClose: () => void) => React.ReactNode);
  disableAnimation?: boolean;
  className?: string;
}

function ModalContent({
  children,
  className = "w-[320px] h-[320px] bg-white",
}: ModalContentProps) {
  const { useContext } = useModalContext();
  const context = useContext();
  const modalPosition = useMemo(() => {
    switch (context.placement ?? "center") {
      case "bottom":
        return "bottom-[0] left-[50%] translate-x-[-50%]";
      case "top":
        return "top-[0] left-[50%] translate-x-[-50%]";
      case "center":
      default:
        return "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
    }
  }, [context.placement]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate="enter"
        className={`fixed flex flex-col rounded-[12px] overflow-hidden ${modalPosition} ${className}`}
        exit="exit"
        initial="exit"
        style={{
          zIndex: context.zIndex,
        }}
        variants={context.motionVariant}
      >
        {!context.hideCloseButton ? (
          <Button
            className="absolute right-4 top-4 p-[6px] bg-[#F5F5F5] border-[#EBEBEB]"
            isOnlyIcon
            size="xsmall"
            style={{
              borderRadius: "99px",
            }}
            variant="line"
            onClick={() => context.onOpenChange(false)}
          >
            x
          </Button>
        ) : null}
        {typeof children === "function"
          ? children(() => context.onOpenChange(false))
          : children}
      </m.div>
    </LazyMotion>
  );
}

export default ModalContent;
