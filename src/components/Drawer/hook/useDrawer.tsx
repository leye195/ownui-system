import { HTMLMotionProps } from "framer-motion";

type UseDrawerProps = {
  isOpen: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  motionVariant?: HTMLMotionProps<"div">["variants"];
  zIndex?: number;
  drawerId: string;
  onOpen?: () => void;
  onClose?: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

function useDrawer({
  isOpen,
  placement,
  motionVariant,
  zIndex,
  drawerId,
  onOpen,
  onClose,
  onOpenChange,
}: UseDrawerProps) {
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
    zIndex,
    drawerId,
    onOpenChange: handleOpen,
  };
}

export default useDrawer;
