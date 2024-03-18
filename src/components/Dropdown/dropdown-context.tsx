import { createContext, useContext as useReactContext } from "react";

type DropdownContextValue = {
  isOpen: boolean;
  selectedItem?: string;
  color?: string;
  onSelect: (name: string) => void;
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

export function useDropdownContext() {
  return { DropdownProvider: Context.Provider, useContext, Context };
}
