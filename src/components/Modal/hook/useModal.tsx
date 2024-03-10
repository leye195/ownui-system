import useDOMRef from "@ui-system/hooks/useDomRef";
import { ReactRef } from "@ui-system/types";

type UseModalProps = {
  ref?: ReactRef<HTMLElement | null>;
  hideCloseButton?: boolean;
  closeButton?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
};

function useModal({
  ref,
  hideCloseButton,
  closeButton,
  isOpen,
  onOpen,
  onClose,
  onOpenChange,
}: UseModalProps) {
  const domRef = useDOMRef(ref);

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
    domRef,
    isOpen,
    hideCloseButton,
    closeButton,
    onOpenChange: handleOpen,
  };
}

export default useModal;
