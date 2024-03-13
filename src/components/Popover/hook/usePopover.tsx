import { HTMLMotionProps } from "framer-motion";
import { scaleInOut } from "../popover-transition";

type UsePopoverProps = {
  isOpen: boolean;
  zIndex: number;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
  motionVariant?: HTMLMotionProps<"div">["variants"];
  onOpenChange: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
};

function usePopover({
  isOpen,
  zIndex,
  placement,
  motionVariant,
  onOpen,
  onClose,
  onOpenChange,
}: UsePopoverProps) {
  function handleOpen(isOpen: boolean) {
    if (!isOpen) {
      onClose?.();
    }

    if (isOpen) {
      onOpen?.();
    }
    onOpenChange(isOpen);
  }

  return {
    isOpen,
    placement,
    motionVariant: motionVariant ?? scaleInOut,
    zIndex,
    onOpenChange: handleOpen,
  };
}

export default usePopover;
