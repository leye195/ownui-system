import Flex from "@ownui-system/shared/Flex";
import { cn } from "@ownui-system/styles/util";
import { useTabContext } from "./tab-context";
import { activeStyles, baseStyles, tabSizeStyles } from "./Tab.style";
import Spacing from "../shared/Spacing";

interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

function TabItem({ children, active, onClick }: TabProps) {
  const { useContext } = useTabContext();
  const {
    type = "text",
    size = "medium",
    activeColor = "transparent",
  } = useContext();

  return (
    <Flex
      className={cn(
        tabSizeStyles[type][size],
        active ? activeStyles[type] : baseStyles[type],
        "relative",
      )}
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

export default TabItem;
