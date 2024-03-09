import { PropsWithChildren } from "react";
import { baseStyle } from "./Dimmed.style";

interface DimmedProps extends PropsWithChildren {
  className?: string;
}

function Dimmed({ children, className = "" }: DimmedProps) {
  return (
    <div>
      <div className={`${baseStyle} ${className}`} />
      {children}
    </div>
  );
}

export default Dimmed;
