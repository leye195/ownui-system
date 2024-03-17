import { useDropdownContext } from "./dropdown-context";

type DropdownItemProps = {
  className?: string;
  name: string;
  children: React.ReactNode;
};

function DropdownItem({ children, name, className }: DropdownItemProps) {
  const { useContext } = useDropdownContext();
  const context = useContext();

  function onSelect() {
    context.onSelect(name);
    context.onOpenChange(false);
  }

  return (
    <li className={className} onClick={onSelect}>
      {children}
    </li>
  );
}

export default DropdownItem;
