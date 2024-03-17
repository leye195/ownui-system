type UseDropdownProps = {
  isOpen: boolean;
  selectedItem: string;
  onSelect: (name: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onOpenChange: (isOpen: boolean) => void;
};

function useDropdown({
  isOpen,
  selectedItem,
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
    onSelect,
    onOpenChange: handleOpen,
  };
}

export default useDropdown;
