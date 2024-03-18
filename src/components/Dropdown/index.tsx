import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DropdownContent from "./dropdown-content";
import { useDropdownContext } from "./dropdown-context";
import DropdownTrigger from "./dropdown-trigger";
import useDropdown from "./hook/useDropdown";

interface DropdownProps {
  selectedItem: string;
  trigger: React.ReactNode;
  content?: React.ReactNode;
  color?: string;
  onSelect: (name: string) => void;
}

// dropdown-context
// dropdown-trigger
// dropdown-content

function Dropdown({
  trigger,
  content,
  selectedItem,
  color,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { DropdownProvider } = useDropdownContext();
  const context = useDropdown({
    isOpen,
    selectedItem,
    color,
    onSelect,
    onOpenChange: (isOpen: boolean) => setIsOpen(isOpen),
  });

  return (
    <DropdownProvider value={context}>
      <div className="relative">
        <DropdownTrigger>{trigger}</DropdownTrigger>
        {context.isOpen ? (
          <AnimatePresence>
            <DropdownContent>{content}</DropdownContent>
          </AnimatePresence>
        ) : null}
      </div>
    </DropdownProvider>
  );
}

export default Dropdown;
