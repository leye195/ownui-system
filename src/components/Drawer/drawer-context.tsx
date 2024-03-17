import { HTMLMotionProps } from "framer-motion";
import {
  ComponentProps,
  createContext,
  useContext as useReactContext,
} from "react";
import Drawer from ".";

type DrawerProps = ComponentProps<typeof Drawer>;
type DrawerContextValue = {
  isOpen: DrawerProps["isOpen"];
  placement?: "top" | "bottom" | "left" | "right";
  motionVariant?: HTMLMotionProps<"div">["variants"];
  zIndex?: number;
  drawerId: string;
  onOpenChange: (isOpen: boolean) => void;
};

const Context = createContext<DrawerContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export function useDrawerContext() {
  return { DrawerProvider: Context.Provider, useContext, Context };
}
