import { createContext, useContext as useReactContext } from "react";

type BottomSheetContextValue = {
  isOpen: boolean;
  zIndex: number;
  color: string;
  onOpenChange: (isOpen: boolean) => void;
};

const Context = createContext<BottomSheetContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export function useBottomSheetContext() {
  return { BottomSheetProvider: Context.Provider, useContext, Context };
}
