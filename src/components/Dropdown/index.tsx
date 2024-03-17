import { AnimatePresence } from "framer-motion";
import DropdownContent from "./dropdown-content";
import { useDropdownContext } from "./dropdown-context";
import DropdownTrigger from "./dropdown-trigger";
import useDropdown from "./hook/useDropdown";

interface DropdownProps {
  isOpen: boolean;
  selectedItem: string;
  trigger: React.ReactNode;
  content?: React.ReactNode[];
  onSelect: (name: string) => void;
  onOpenChange: (isOpen: boolean) => void;
}

// dropdown-context
// dropdown-trigger
// dropdown-content

function Dropdown({
  trigger,
  content,
  isOpen,
  selectedItem,
  onOpenChange,
  onSelect,
}: DropdownProps) {
  const { DropdownProvider } = useDropdownContext();
  const context = useDropdown({ isOpen, selectedItem, onOpenChange, onSelect });

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
