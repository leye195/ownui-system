import { CSSProperties, ReactNode } from "react";

interface SkeletinProps {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
  children?: ReactNode;
  className?: string;
}

function Skeleton({
  className = "",
  children,
  width,
  height,
  borderRadius,
}: SkeletinProps) {
  return (
    <div
      className={`${className} animate-skeleton`}
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      {children}
    </div>
  );
}

export default Skeleton;
