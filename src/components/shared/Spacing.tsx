interface SpacingProps {
  size: number;
  direction?: "vertical" | "horizontal";
}

function Spacing({ size, direction = "vertical" }: SpacingProps) {
  return (
    <div
      style={{
        width: direction === "vertical" ? `${size}px` : 0,
        height: direction === "horizontal" ? `${size}px` : 0,
      }}
    />
  );
}

export default Spacing;
