import clsx from "clsx";
import { Flex } from "..";

interface BottomSheetBodyProps {
  children: React.ReactNode;
  className?: string;
}

function BottomSheetBody({ children, className }: BottomSheetBodyProps) {
  return (
    <Flex
      className={clsx("w-full h-full overflow-y-auto", className)}
      direction="column"
    >
      {children}
    </Flex>
  );
}

export default BottomSheetBody;
