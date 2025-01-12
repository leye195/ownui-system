import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import DropdownBody from "./dropdown-body";
import DropdownContent from "./dropdown-content";
import useDropdownContext from "./dropdown-context";
import DropdownHeader from "./dropdown-header";
import DropdownItem from "./dropdown-item";
import DropdownTrigger from "./dropdown-trigger";

export type DropdownSelectedItem = {
  name: string;
  value: string;
  image?: string;
};

interface DropdownProps {
  selectedItem: DropdownSelectedItem;
  isOpen: boolean;
  color?: string;
  disableTrigger?: boolean;
  header: ReactNode;
  body?: ReactNode;
  onOpenChange: (isOpen: boolean) => void;
  onSelect: (name: string, value: string, image?: string) => void;
}

// dropdown-context
// dropdown-trigger
// dropdown-content

function Dropdown({
  selectedItem,
  color,
  disableTrigger,
  isOpen,
  header,
  body,
  onOpenChange,
  onSelect,
}: DropdownProps) {
  const { DropdownProvider } = useDropdownContext();

  return (
    <DropdownProvider
      value={{
        isOpen,
        selectedItem,
        color,
        onSelect,
        onOpenChange,
      }}
    >
      <div className="relative">
        {disableTrigger ? (
          <>{header}</>
        ) : (
          <DropdownTrigger>{header}</DropdownTrigger>
        )}
        <AnimatePresence>{isOpen ? body : null}</AnimatePresence>
      </div>
    </DropdownProvider>
  );
}

Dropdown.Body = DropdownBody;
Dropdown.Header = DropdownHeader;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;

export default Dropdown;
