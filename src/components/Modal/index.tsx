import Dimmed from "@ui-system/components/Dimmed";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";

import useModal from "./hook/useModal";
import { useModalContext } from "./modal-context";
import { scaleInOut } from "./modal-transition";

export type ModalProps = {
  onClose?: () => void;
  onOpen?: () => void;
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  removeDimmer?: boolean;
  hideCloseButton?: boolean;
  allowCloseOnClickBackDrop?: boolean;
  children?: React.ReactNode;
  closeButton?: React.ReactNode;
  placement?: "top" | "bottom" | "center";
  zIndex?: number;
  modalId?: string;
  motionVariant?: HTMLMotionProps<"div">["variants"];
};

function Modal({
  children,
  removeDimmer,
  zIndex = 1,
  allowCloseOnClickBackDrop = false,
  motionVariant = scaleInOut,
  ...restProps
}: ModalProps) {
  const { ModalProvider } = useModalContext();
  const context = useModal({ ...restProps, motionVariant, zIndex });
  return (
    <ModalProvider value={context}>
      <AnimatePresence>
        {context.isOpen ? (
          <Dimmed
            removeDimmer={removeDimmer}
            zIndex={zIndex}
            onClick={
              allowCloseOnClickBackDrop
                ? () => context.onOpenChange(false)
                : undefined
            }
          >
            {children}
          </Dimmed>
        ) : null}
      </AnimatePresence>
    </ModalProvider>
  );
}

export default Modal;
