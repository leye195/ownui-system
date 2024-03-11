import { PropsWithChildren } from "react";

type ModalBodyProps = {
  className?: string;
} & PropsWithChildren;

function ModalBody({ className, children }: ModalBodyProps) {
  return <div className={className}>{children}</div>;
}

export default ModalBody;
