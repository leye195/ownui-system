import { AnimatePresence } from "framer-motion";
import BottomSheetContents from "./bottomsheet-contents";
import { useBottomSheetContext } from "./bottomsheet-context";
import { Dimmed } from "..";

export interface BottomSheetProps {
  isOpen: boolean;
  removeDimmer?: boolean;
  zIndex?: number;
  children: React.ReactNode;
  color?: string;
  allowCloseOnClickBackDrop?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

function BottomSheet({
  children,
  removeDimmer,
  isOpen,
  allowCloseOnClickBackDrop,
  color = "white",
  zIndex = 10,
  ...props
}: BottomSheetProps) {
  const { BottomSheetProvider } = useBottomSheetContext();

  return (
    <BottomSheetProvider
      value={{
        ...props,
        color,
        isOpen,
        zIndex,
      }}
    >
      <AnimatePresence>
        {isOpen ? (
          <Dimmed
            removeDimmer={removeDimmer}
            onClick={
              allowCloseOnClickBackDrop
                ? () => props.onOpenChange(false)
                : undefined
            }
          >
            <BottomSheetContents>{children}</BottomSheetContents>
          </Dimmed>
        ) : null}
      </AnimatePresence>
    </BottomSheetProvider>
  );
}

export default BottomSheet;
