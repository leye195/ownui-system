import { createContext, useContext as useReactContext } from "react";
import { DropdownSelectedItem } from "./dropdown";

type DropdownContextValue = {
  isOpen: boolean;
  selectedItem?: DropdownSelectedItem;
  color?: string;
  onSelect: (name: string, value: string, image?: string) => void;
  onOpenChange: (isOpen: boolean) => void;
};

const Context = createContext<DropdownContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export default function useDropdownContext() {
  return { DropdownProvider: Context.Provider, useContext, Context };
}
