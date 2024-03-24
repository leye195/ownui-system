import Flex from "@ownui-system/shared/Flex";
import { PropsWithChildren } from "react";

type ModalBodyProps = {
  className?: string;
} & PropsWithChildren;

function ModalHeader({ children, className }: ModalBodyProps) {
  return (
    <header className={className}>
      <Flex align="center" className="w-full">
        {children}
      </Flex>
    </header>
  );
}

export default ModalHeader;
