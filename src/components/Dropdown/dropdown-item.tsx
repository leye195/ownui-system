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
        "px-[16px] py-[12px]",
        disabled
          ? "cursor-not-allowed opacity-[0.4] hover:bg-none"
          : "cursor-pointer hover:bg-[var(--bg-color)] hover:opacity-75",
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
