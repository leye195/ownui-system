import Flex from "@ownui-system/shared/Flex";
import { colors } from "@ownui-system/styles/colors";
import { cn } from "@ownui-system/styles/util";
import { useTabContext } from "./tab-context";
import { tabGroupBaseStyles, tabGroupGapStyles } from "./Tab.style";

interface TabGroupProps {
  type?: "text" | "box";
  size?: "large" | "medium" | "small";
  activeColor?: string;
  children: React.ReactNode;
}

function TabGroup({
  children,
  size = "medium",
  type = "text",
  activeColor = colors.gray800,
}: TabGroupProps) {
  const { TabProvider } = useTabContext();

  return (
    <TabProvider
      value={{
        size,
        type,
        activeColor,
      }}
    >
      <Flex
        align="center"
        className={cn(
          tabGroupBaseStyles[type],
          tabGroupGapStyles[size],
          "relative",
        )}
        display="inline-flex"
      >
        {children}
      </Flex>
    </TabProvider>
  );
}
export default TabGroup;
