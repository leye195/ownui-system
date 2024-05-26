import clsx from "clsx";
import { ComponentProps } from "react";
import useDropdownContext from "./dropdown-context";

function DropdownHeader({ ...rest }: ComponentProps<"div">) {
  const { useContext } = useDropdownContext();
  const { selectedItem } = useContext();

  return (
    <div
      {...rest}
      className={clsx(
        "bg-white px-4 py-3 rounded-xl body-500-16 text-gray-800",
        "border-solid border border-gray-300 cursor-pointer",
        "flex items-center justify-between",
      )}
    >
      {selectedItem?.name}
    </div>
  );
}

export default DropdownHeader;
