import { LazyMotion, domAnimation, m } from "framer-motion";
import { collapse } from "./accortion-transition";

interface AccordionBodyProps {
  children: React.ReactNode;
  isAfterOpen: boolean;
}

function AccordionBody({ children, isAfterOpen }: AccordionBodyProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate="enter"
        className="w-full will-change-auto overflow-y-hidden"
        exit="exit"
        initial={isAfterOpen ? "exit" : "enter"}
        variants={collapse}
      >
        <div className="py-3">{children}</div>
      </m.div>
    </LazyMotion>
  );
}

export default AccordionBody;
