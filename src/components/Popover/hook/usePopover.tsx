import { HTMLMotionProps } from "framer-motion";

type UsePopoverProps = {
  isOpen: boolean;
  className?: string;
  placement?: "top" | "bottom" | "left" | "right";
  motionVariant?: HTMLMotionProps<"div">["variants"];
  onOpenChange: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
};

function usePopover({
  isOpen,
  placement,
  motionVariant,
  onOpenChange,
  onOpen,
  onClose,
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
    motionVariant,
    onOpenChange: handleOpen,
  };
}

export default usePopover;
