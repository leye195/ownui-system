import { LazyMotion, domAnimation, m } from "framer-motion";
import { CSSProperties, PropsWithChildren } from "react";
import { baseStyle, dimmerStyle, withoutDimmerStyle } from "./Dimmed.style";

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
  removeDimmer = true,
}: DimmedProps) {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <m.div
          key="dimmed"
          animate="enter"
          className={`${baseStyle} ${removeDimmer ? withoutDimmerStyle : dimmerStyle}  ${className}`}
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
      {children}
    </div>
  );
}

export default Dimmed;
