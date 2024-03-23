import { LazyMotion, domAnimation, m } from "framer-motion";
import { collapse } from "./accortion-transition";

interface AccordionBodyProps {
  children: React.ReactNode;
}

function AccordionBody({ children }: AccordionBodyProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate="enter"
        className="w-full will-change-auto overflow-y-hidden"
        exit="exit"
        initial="exit"
        variants={collapse}
      >
        <div className="py-3">{children}</div>
      </m.div>
    </LazyMotion>
  );
}

export default AccordionBody;
