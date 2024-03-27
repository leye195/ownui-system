import clsx from "clsx";
import {
  LazyMotion,
  PanInfo,
  domAnimation,
  motion,
  useDragControls,
} from "framer-motion";
import { PropsWithChildren, useState } from "react";
import BottomSheetBody from "./bottomsheet-body";
import { useBottomSheetContext } from "./bottomsheet-context";
import BottomSheetHeader from "./bottomsheet-header";
import { bottomSheetOpenClose } from "./bottomsheet-transition";
import { Portal } from "..";

function BottomSheetContents({ children }: PropsWithChildren) {
  const dragControls = useDragControls();
  const { useContext } = useBottomSheetContext();
  const { color, zIndex, onOpenChange } = useContext();
  const [isExpanded, setIsExpanded] = useState(false);

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) {
    const shouldClose =
      info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
    const isDraggingUp = info.velocity.y < 0;

    if (isExpanded && !isDraggingUp) {
      setIsExpanded(false);
      return;
    }

    if (shouldClose && !isDraggingUp && !isExpanded) {
      onOpenChange(false);
    } else {
      setIsExpanded(true);
    }
  }

  return (
    <Portal>
      <LazyMotion features={domAnimation}>
        <motion.div
          animate={isExpanded ? "expanded" : "opened"}
          className={clsx(
            "fixed bottom-0 will-change-transform w-full overflow-hidden ",
            "pb-[24px] shadow-[0px 2px 5px rgba(0, 0, 0, 0.06), 0px 2px 13px rgba(0, 0, 0, 0.12)] rounded-t-[12px]",
            "bg-[var(--bg-color)]  z-[var(--zIndex)]",
          )}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragControls={dragControls}
          dragElastic={0.2}
          dragListener={false}
          exit="closed"
          initial="closed"
          style={{
            "--zIndex": zIndex,
            "--bg-color": color,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 400,
          }}
          variants={bottomSheetOpenClose("100dvh", "100px", "600px")}
          onDragEnd={handleDragEnd}
        >
          <BottomSheetHeader
            onPointerDown={(e) => {
              dragControls.start(e);
            }}
          />
          <BottomSheetBody>{children}</BottomSheetBody>
        </motion.div>
      </LazyMotion>
    </Portal>
  );
}

export default BottomSheetContents;
