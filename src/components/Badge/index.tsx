import Flex from "@ui-system/shared/Flex";
import clsx from "clsx";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { fadeInOut } from "./badge-transition";
import { badgePlacementMap, badgeSizeMap, baseStyle } from "./Badge.style";

interface BadgeProps {
  content?: React.ReactNode;
  color: string;
  children?: React.ReactNode;
  size?: "large" | "medium" | "small";
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  radius?: string | number;
  isVisible?: boolean;
}

function Badge({
  className = "",
  radius = "8px",
  size = "medium",
  color = "blue",
  placement = "top-right",
  content,
  isVisible,
  children,
}: BadgeProps) {
  return (
    <Flex className="relative" display="inline-flex">
      {isVisible && (
        <AnimatePresence>
          <LazyMotion features={domAnimation}>
            <m.div
              className={clsx(
                baseStyle,
                badgeSizeMap[size],
                badgePlacementMap[size][placement],
                className,
              )}
              style={{
                backgroundColor: color,
                borderRadius: radius,
              }}
              variants={fadeInOut}
            >
              {content}
            </m.div>
          </LazyMotion>
        </AnimatePresence>
      )}
      {children}
    </Flex>
  );
}

export default Badge;
