import { cn } from "@ownui-system/styles/util";
import { type ComponentProps } from "react";
import useDropdownContext from "./dropdown-context";

function DropdownHeader({ className, ...rest }: ComponentProps<"div">) {
  const { useContext } = useDropdownContext();
  const { selectedItem } = useContext();

  return (
    <div
      className={cn(
        "bg-white px-4 py-3 rounded-xl body-500-16 text-gray-800",
        "border-solid border border-gray-300 cursor-pointer",
        "flex items-center justify-between",
        className,
      )}
      {...rest}
    >
      {selectedItem?.image && (
        <img alt={selectedItem?.name ?? ""} src={selectedItem.image} />
      )}
      {selectedItem?.name}
    </div>
  );
}

export default DropdownHeader;
