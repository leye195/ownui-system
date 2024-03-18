type UseDropdownProps = {
  isOpen: boolean;
  selectedItem: string;
  color?: string;
  onSelect: (name: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

function useDropdown({
  isOpen,
  selectedItem,
  color,
  onOpen,
  onClose,
  onSelect,
  onOpenChange,
}: UseDropdownProps) {
  function handleOpen(isOpen: boolean) {
    if (!isOpen) {
      onClose?.();
    }

    if (isOpen) {
      onOpen?.();
    }
    onOpenChange(isOpen);
  }

  return {
    isOpen,
    selectedItem,
    color,
    onSelect,
    onOpenChange: handleOpen,
  };
}

export default useDropdown;
