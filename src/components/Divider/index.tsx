import { colors } from "@ownui-system/styles/colors";

type DividerProps = {
  size?: string | number;
  color?: string;
  direction?: "horizontal" | "vertical";
  margin?: string;
};

function Divider({
  size,
  margin,
  color = colors.gray300,
  direction = "vertical",
}: DividerProps) {
  return (
    <div
      style={{
        width: direction === "vertical" ? size : "1px",
        height: direction === "horizontal" ? size : "1px",
        marginBlock: direction === "vertical" ? margin : 0,
        marginInline: direction === "horizontal" ? margin : 0,
        background: color,
      }}
    />
  );
}

export default Divider;
