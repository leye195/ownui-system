import Dimmed from "@ui-system/components/Dimmed";
import { AnimatePresence } from "framer-motion";
import { forwardRef } from "react";
import useModal from "./hook/useModal";
import { useModalContext } from "./modal-context";

export interface ModalProps {
  onClose?: () => void;
  onOpen?: () => void;
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  removeDimmer?: boolean;
  isDismissable?: boolean;
  children?: React.ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  function Modal(props, ref) {
    const {
      children,
      removeDimmer,
      isDismissable = true,
      ...restProps
    } = props;
    const { ModalProvider } = useModalContext();
    const context = useModal({ ref, ...restProps });

    return (
      <ModalProvider value={context}>
        <AnimatePresence>
          {context.isOpen ? (
            <Dimmed
              removeDimmer={removeDimmer}
              onClick={
                isDismissable ? () => context.onOpenChange(false) : undefined
              }
            >
              {children}
            </Dimmed>
          ) : null}
        </AnimatePresence>
      </ModalProvider>
    );
  },
);

export default Modal;
