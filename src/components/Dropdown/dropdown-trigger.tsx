import { ReactElement, cloneElement } from "react";
import useDropdownContext from "./dropdown-context";

type DropdownTriggerProps = {
  children: React.ReactNode;
};

function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { useContext } = useDropdownContext();
  const context = useContext();

  return (
    <div>
      {cloneElement(children as ReactElement, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          context.onOpenChange(!context.isOpen);
        },
      })}
    </div>
  );
}

export default DropdownTrigger;
