import { HTMLMotionProps } from "framer-motion";

type UseModalProps = {
  hideCloseButton?: boolean;
  closeButton?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  placement?: "center" | "bottom" | "top";
  motionVariant?: HTMLMotionProps<"div">["variants"];
  zIndex: number;
  onOpenChange: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
};

function useModal({
  hideCloseButton,
  closeButton,
  isOpen,
  placement,
  motionVariant,
  zIndex,
  onOpen,
  onClose,
  onOpenChange,
}: UseModalProps) {
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
    hideCloseButton,
    closeButton,
    motionVariant,
    zIndex,
    onOpenChange: handleOpen,
  };
}

export default useModal;
