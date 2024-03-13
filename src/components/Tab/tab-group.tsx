import Flex from "@ui-system/shared/Flex";
import { tabGroupBaseStyle, tabGroupGap } from "./Tab.style";

interface TabGroupProps {
  type?: "text" | "box";
  size?: "large" | "medium" | "small";
  children: React.ReactNode;
}

function TabGroup({ children, size = "medium", type = "text" }: TabGroupProps) {
  return (
    <Flex
      align="center"
      className={`relative ${tabGroupBaseStyle[type]} ${tabGroupGap[size]}`}
      display="inline-flex"
    >
      {children}
    </Flex>
  );
}
export default TabGroup;
