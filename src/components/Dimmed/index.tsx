import { CSSProperties, PropsWithChildren } from "react";
import { baseStyle } from "./Dimmed.style";

interface DimmedProps extends PropsWithChildren {
  className?: string;
  opacity?: CSSProperties["opacity"];
}

function Dimmed({ children, className = "", opacity = "0.6" }: DimmedProps) {
  return (
    <div>
      <div
        className={`${baseStyle} ${className}`}
        style={{
          opacity,
        }}
      />
      {children}
    </div>
  );
}

export default Dimmed;
