import { cn } from "@ownui-system/styles/util";
import { ChevronDown } from "lucide-react";
import { type ComponentProps } from "react";
import useDropdownContext from "./dropdown-context";

function DropdownHeader({ className, ...rest }: ComponentProps<"div">) {
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
      <div className={cn("flex gap-1")}>
        {selectedItem?.image && (
          <img alt={selectedItem?.name ?? ""} src={selectedItem.image} />
        )}
        {selectedItem?.name}
      </div>
      <ChevronDown className={cn(isOpen && "rotate-180")} size={18} />
    </div>
  );
}

export default DropdownHeader;
