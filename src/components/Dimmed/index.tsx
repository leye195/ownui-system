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
  opacity = "0.6",
  removeDimmer = false,
}: DimmedProps) {
  return (
    <div>
      {!removeDimmer ? (
        <div
          className={`${baseStyle} ${className}`}
          style={{
            opacity,
          }}
          onClick={onClick}
        />
      ) : null}
      {children}
    </div>
  );
}

export default Dimmed;
