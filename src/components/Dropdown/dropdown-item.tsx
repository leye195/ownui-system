import { cn } from "@ownui-system/styles/util";
import useDropdownContext from "./dropdown-context";

type DropdownItemProps = {
  className?: string;
  value: string;
  name: string;
  image?: string;
  children: React.ReactNode;
  disabled?: boolean;
  right?: React.ReactNode;
} & React.ComponentProps<"li">;

function DropdownItem({
  children,
  value,
  className,
  disabled,
  name,
  image,
  ...rest
}: DropdownItemProps) {
  const { useContext } = useDropdownContext();
  const context = useContext();

  function onSelect() {
    context.onSelect(name, value, image);
    context.onOpenChange(false);
  }

  return (
    <li
      {...rest}
      className={cn(
        "flex items-center justify-between px-4 py-3 body-500-16",
        disabled
          ? "cursor-not-allowed opacity-[0.4] hover:bg-none text-gray-500"
          : "cursor-pointer hover:bg-gray-100 text-gray-800",
        className,
      )}
      role="presentation"
      onClick={disabled ? undefined : onSelect}
    >
      {children}
    </li>
  );
}

export default DropdownItem;
