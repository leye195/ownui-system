import { AnimatePresence } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import DropdownBody from "./dropdown-body";
import DropdownContent from "./dropdown-content";
import useDropdownContext from "./dropdown-context";
import DropdownHeader from "./dropdown-header";
import DropdownTrigger from "./dropdown-trigger";

interface DropdownProps extends PropsWithChildren {
  selectedItem: {
    name: string;
    value: string;
  };
  color?: string;
  onSelect: (name: string, value: string) => void;
}

// dropdown-context
// dropdown-trigger
// dropdown-content

function Dropdown({ children, selectedItem, color, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { DropdownProvider } = useDropdownContext();

  function onOpenChange(isOpen: boolean) {
    setIsOpen(isOpen);
  }

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
        <DropdownTrigger>
          <DropdownHeader />
        </DropdownTrigger>
        <AnimatePresence>
          {isOpen ? (
            <DropdownContent>
              <DropdownBody>{children}</DropdownBody>
            </DropdownContent>
          ) : null}
        </AnimatePresence>
      </div>
    </DropdownProvider>
  );
}

export default Dropdown;
