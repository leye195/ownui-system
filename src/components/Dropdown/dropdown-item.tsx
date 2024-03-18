import clsx from "clsx";
import { useDropdownContext } from "./dropdown-context";

type DropdownItemProps = {
  className?: string;
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
};

function DropdownItem({
  children,
  value,
  className,
  disabled,
}: DropdownItemProps) {
  const { useContext } = useDropdownContext();
  const context = useContext();

  function onSelect() {
    context.onSelect(value);
    context.onOpenChange(false);
  }

  return (
    <li
      className={clsx(
        "p-2 c cursor-pointer hover:opacity-75 hover:brightness-[0.7] hover:bg-[var(--bg-color)] rounded-[inherit]",
        disabled ? "cursor-not-allowed" : "",
        className,
      )}
      style={{
        "--bg-color": context.color ?? "",
      }}
      onClick={disabled ? undefined : onSelect}
    >
      {children}
    </li>
  );
}

export default DropdownItem;
