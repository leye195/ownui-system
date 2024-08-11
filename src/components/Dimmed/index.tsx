import { cn } from "@ownui-system/styles/util";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { type CSSProperties, type PropsWithChildren } from "react";
import { baseStyle, dimmerStyle, withoutDimmerStyle } from "./Dimmed.style";

interface DimmedProps extends PropsWithChildren {
  className?: string;
  opacity?: CSSProperties["opacity"];
  removeDimmer?: boolean;
  zIndex?: number;
  onClick?: () => void;
}

function BackDrop({
  children,
  onClick,
  className = "",
  opacity = 0.6,
  removeDimmer = false,
  zIndex = 1,
}: DimmedProps) {
  return (
    <div>
      <LazyMotion features={domAnimation}>
        <m.div
          key="dimmed"
          animate="enter"
          className={cn(
            baseStyle,
            removeDimmer ? withoutDimmerStyle : dimmerStyle,
            className,
          )}
          exit="exit"
          initial="exit"
          style={{
            zIndex,
          }}
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

export default BackDrop;
