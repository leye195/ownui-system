import { LazyMotion, domAnimation, m } from "framer-motion";
import { CSSProperties, PropsWithChildren } from "react";
import { baseStyle } from "./Dimmed.style";

interface DimmedProps extends PropsWithChildren {
  className?: string;
  opacity?: CSSProperties["opacity"];
  removeDimmer?: boolean;
  onClick?: () => void;
}

function Dimmed({
  children,
  onClick,
  className = "",
  opacity = 0.6,
  removeDimmer = false,
}: DimmedProps) {
  return (
    <div>
      {!removeDimmer ? (
        <LazyMotion features={domAnimation}>
          <m.div
            key="dimmed"
            animate="enter"
            className={`${baseStyle} ${className}`}
            exit="exit"
            initial="exit"
            variants={{
              enter: {
                opacity,
                transition: {
                  opacity: {
                    duration: 0.25,
                    ease: "easeInOut",
                  },
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  opacity: {
                    duration: 0.25,
                    ease: "easeInOut",
                  },
                },
              },
            }}
            onClick={onClick}
          />
        </LazyMotion>
      ) : null}
      {children}
    </div>
  );
}

export default Dimmed;
