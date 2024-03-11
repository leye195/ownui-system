import { HTMLMotionProps } from "framer-motion";
import {
  ComponentProps,
  createContext,
  useContext as useReactContext,
} from "react";
import Popover from ".";

type PopoverProps = ComponentProps<typeof Popover>;
type PopoverPropsContextValue = {
  isOpen: PopoverProps["isOpen"];
  onOpenChange: PopoverProps["onOpenChange"];
  motionVariant?: HTMLMotionProps<"div">["variants"];
};

const Context = createContext<PopoverPropsContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export function usePopoverContext() {
  return { PopoverProvider: Context.Provider, useContext, Context };
}
