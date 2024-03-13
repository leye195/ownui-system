import Flex from "@ui-system/shared/Flex";
import { activeStyle, baseStyle, tabSize } from "./Tab.style";
import Spacing from "../shared/Spacing";

interface TabProps {
  children: React.ReactNode;
  type?: "text" | "box";
  size?: "large" | "medium" | "small";
  active?: boolean;
  className?: string;
  activeColor?: string;
  onClick?: () => void;
}

function Tab({
  children,
  active,
  type = "text",
  size = "medium",
  activeColor = "transparent",
  onClick,
}: TabProps) {
  return (
    <Flex
      className={`${tabSize[type][size]} ${active ? activeStyle[type] : baseStyle[type]} relative`}
      direction="column"
      display="inline-flex"
      justify="center"
      style={
        type === "box"
          ? {
              backgroundColor: active ? activeColor : "transparent",
            }
          : {}
      }
      onClick={onClick}
    >
      {children}
      {type === "text" && (
        <>
          <Spacing direction="horizontal" size={8} />
          <div
            className="w-full h-[4px] mb-[-3px]"
            style={{
              backgroundColor: active ? activeColor : "transparent",
            }}
          />
        </>
      )}
    </Flex>
  );
}

export default Tab;
