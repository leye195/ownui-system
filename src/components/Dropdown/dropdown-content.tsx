import { LazyMotion, domAnimation, m } from "framer-motion";
import { scaleInOut } from "./dropdown-transition";

type DropdownContentProps = {
  children: React.ReactNode;
};

function DropdownContent({ children }: DropdownContentProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.ul animate="enter" exit="exit" initial="exit" variants={scaleInOut}>
        {children}
      </m.ul>
    </LazyMotion>
  );
}

export default DropdownContent;
