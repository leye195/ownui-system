import Dimmed from "@ownui-system/components/Dimmed";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { useDrawerContext } from "./drawer-context";
import {
  SlideInOutFromBottom,
  SlideInOutFromLeft,
  SlideInOutFromRight,
  SlideInOutFromTop,
} from "./drawer-transition";
import useDrawer from "./hook/useDrawer";

export type DrawerProps = {
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
  children?: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  zIndex?: number;
  drawerId?: string;
  allowCloseOnClickBackDrop?: boolean;
  motionVariant?: HTMLMotionProps<"div">["variants"];
};

function Drawer({
  children,
  motionVariant,
  allowCloseOnClickBackDrop = false,
  zIndex = 1,
  placement = "bottom",
  drawerId = "drawer-portal",
  ...restProps
}: DrawerProps) {
  const drawerMotionVariant = {
    top: SlideInOutFromTop,
    bottom: SlideInOutFromBottom,
    left: SlideInOutFromLeft,
    right: SlideInOutFromRight,
  };

  const { DrawerProvider } = useDrawerContext();
  const context = useDrawer({
    ...restProps,
    drawerId,
    zIndex,
    placement,
    motionVariant: motionVariant ?? drawerMotionVariant[placement],
  });
  return (
    <DrawerProvider value={context}>
      <AnimatePresence>
        {context.isOpen ? (
          <Dimmed
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
    </DrawerProvider>
  );
}

export default Drawer;
