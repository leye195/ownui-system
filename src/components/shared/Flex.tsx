import { CSSProperties, PropsWithChildren } from "react";

interface FlexProps extends PropsWithChildren {
  display?: "flex" | "inline-flex";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  style?: CSSProperties;
  className?: string;
}

function getAlign(align?: FlexProps["align"]): string {
  switch (align) {
    case "flex-end":
      return "items-end";
    case "center":
      return "items-center";
    case "flex-start":
    default:
      return "items-start";
  }
}

function getJustify(jusity?: FlexProps["justify"]): string {
  switch (jusity) {
    case "flex-end":
      return "justify-end";
    case "center":
      return "justify-center";
    case "space-between":
      return "justify-between";
    case "space-around":
      return "justify-around";
    case "space-evenly":
      return "justify-evenly";
    case "stretch":
      return "justify-stretch";
    case "flex-start":
    default:
      return "justify-start";
  }
}

function Flex({
  className = "",
  display = "flex",
  align = "flex-start",
  justify = "flex-start",
  direction = "row",
  style,
  children,
}: FlexProps) {
  const styles = Object.values({
    display: display === "flex" ? "flex" : "inline-flex",
    direction: direction === "row" ? "flex-row" : "flex-col",
    align: getAlign(align),
    justify: getJustify(justify),
  }).join(" ");

  return (
    <div className={`${styles}  ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Flex;
