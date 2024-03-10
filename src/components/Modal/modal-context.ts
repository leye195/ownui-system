import { ReactRef } from "@ui-system/types";
import {
  ComponentProps,
  createContext,
  useContext as useReactContext,
} from "react";
import Modal from ".";

type ModalProps = ComponentProps<typeof Modal>;
//type ModalOptions = ModalProps;
type ModalPropsContextValue = {
  domRef?: ReactRef<HTMLElement>;
  isOpen: ModalProps["isOpen"];
  hideCloseButton: boolean | undefined;
  closeButton: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

export function useModalContext() {
  const Context = createContext<ModalPropsContextValue | undefined>(undefined);

  function useContext() {
    const context = useReactContext(Context);

    if (!context) {
      throw new Error(
        "`context` is undefined. Seems you forgot to wrap component within the Provider",
      );
    }

    return context;
  }

  return { ModalProvider: Context.Provider, useContext, Context };
}
