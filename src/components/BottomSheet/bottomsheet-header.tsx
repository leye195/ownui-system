import clsx from "clsx";
import { ComponentProps } from "react";

function BottomSheetHeader({ onPointerDown }: ComponentProps<"div">) {
  return (
    <div
      className={clsx(
        "relative min-h-[38px] py-[4px] transition-all select-none",
        "after:cursor-pointer after: after:absolute after:content-[''] after:rounded-3xl after:w-[45px] after:h-[8px] after:top-[6px] after:left-[50%] after:translate-x-[-50%]",
        "after:bg-gray-300 hover:after:bg-gray-400",
      )}
      onPointerDown={onPointerDown}
    />
  );
}

export default BottomSheetHeader;
