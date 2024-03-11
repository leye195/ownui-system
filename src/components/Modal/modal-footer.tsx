import { PropsWithChildren } from "react";

type ModalFooterProps = {
  className?: string;
} & PropsWithChildren;

function ModalFooter({ className, children }: ModalFooterProps) {
  return <footer className={className}>{children}</footer>;
}

export default ModalFooter;
