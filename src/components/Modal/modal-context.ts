import { HTMLMotionProps } from "framer-motion";
import {
  ComponentProps,
  createContext,
  useContext as useReactContext,
} from "react";
import Modal from "./modal";

type ModalProps = ComponentProps<typeof Modal>;
type ModalPropsContextValue = {
  isOpen: ModalProps["isOpen"];
  hideCloseButton: boolean | undefined;
  closeButton: React.ReactNode;
  placement?: "center" | "bottom" | "top";
  motionVariant?: HTMLMotionProps<"div">["variants"];
  zIndex: number;
  onClose?: () => void;
  onOpen?: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

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

export function useModalContext() {
  return { ModalProvider: Context.Provider, useContext, Context };
}
