import clsx from "clsx";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useDrawerContext } from "./drawer-context";
import { drawerContentStyle, drawerPlacementStyle } from "./DrawerStyle";
import Portal from "../shared/Portal";

interface DrawerContentProps {
  children: React.ReactNode | ((onClose: () => void) => React.ReactNode);
  className?: string;
  color?: string;
}

function DrawerContent({
  children,
  className,
  color = "white",
}: DrawerContentProps) {
  const { useContext } = useDrawerContext();
  const context = useContext();

  return (
    <Portal id={context.drawerId}>
      <LazyMotion features={domAnimation}>
        <m.div
          animate="enter"
          className={clsx(
            drawerContentStyle,
            drawerPlacementStyle[context.placement ?? "bottom"],
            className,
          )}
          exit="exit"
          initial="exit"
          style={{
            "--bg-color": color,
            "--zIndex": context.zIndex ?? 1,
          }}
          variants={context.motionVariant}
        >
          {typeof children === "function"
            ? children(() => context.onOpenChange(false))
            : children}
        </m.div>
      </LazyMotion>
    </Portal>
  );
}

export default DrawerContent;
