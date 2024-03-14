import Flex from "@ui-system/shared/Flex";
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
        className={`relative ${tabGroupBaseStyle[type]} ${tabGroupGap[size]}`}
        display="inline-flex"
      >
        {children}
      </Flex>
    </TabProvider>
  );
}
export default TabGroup;
