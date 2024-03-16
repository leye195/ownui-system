import Flex from "@ui-system/shared/Flex";
import cls from "classnames";
import { useTabContext } from "./tab-context";
import { tabGroupBaseStyle, tabGroupGap } from "./Tab.style";

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
  activeColor = "transparent",
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
        className={cls(tabGroupBaseStyle[type], tabGroupGap[size], "relative")}
        display="inline-flex"
      >
        {children}
      </Flex>
    </TabProvider>
  );
}
export default TabGroup;
