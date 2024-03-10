import { LazyMotion, domAnimation, m } from "framer-motion";
import { scaleInOut } from "./modal-transition";

export interface ModalContentProps {
  children: React.ReactNode;
}

function ModalContent({ children }: ModalContentProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        key="modal-content"
        animate="enter"
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[10px] overflow-hidden"
        exit="exit"
        initial="exit"
        variants={scaleInOut}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export default ModalContent;
