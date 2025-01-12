import { cn } from "@ownui-system/styles/util";
import { type ComponentProps } from "react";
import useDropdownContext from "./dropdown-context";
import Icon from "../shared/Icon";

type DropdownHeaderProps = {
  iconSize?: string;
} & ComponentProps<"div">;

function DropdownHeader({
  className,
  iconSize = "18px",
  ...rest
}: DropdownHeaderProps) {
  const { useContext } = useDropdownContext();
  const { isOpen, selectedItem } = useContext();

  return (
    <div
      className={cn(
        "bg-white px-3 py-2 rounded-xl body-500-16 text-gray-800",
        "border-solid border border-gray-300 cursor-pointer",
        "flex items-center justify-between gap-1",
        className,
      )}
      {...rest}
    >
      <div className={cn("flex gap-1.5 items-center")}>
        {selectedItem?.image && (
          <img
            alt={selectedItem?.name}
            className={cn(
              "rounded-full w-[var(--icon-size)] h-[var(--icon-size)] ",
            )}
            height={iconSize}
            src={selectedItem.image}
            style={{
              "--icon-size": iconSize,
            }}
            width={iconSize}
          />
        )}
        {selectedItem?.name}
      </div>
      <Icon
        className={cn(isOpen && "rotate-180")}
        name="ChevronDown"
        size={18}
      />
    </div>
  );
}

export default DropdownHeader;
