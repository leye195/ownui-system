import { CSSProperties, PropsWithChildren } from "react";

type TextProps = {
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  bold?: boolean;
  needGradient?: boolean;
} & PropsWithChildren;

function Text({
  fontSize = "16px",
  fontWeight = "400",
  color = "black",
  bold,
  needGradient,
  children,
}: TextProps) {
  return (
    <span
      style={{
        fontSize,
        fontWeight: bold ? "bold" : fontWeight,
        ...(needGradient
          ? {
              background: color,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }
          : { color }),
      }}
    >
      {children}
    </span>
  );
}

export default Text;
