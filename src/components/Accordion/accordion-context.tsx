import { createContext, useContext as useReactContext } from "react";

type AccordionContextValue = {
  selected?: string | number;
  type?: "single" | "multi";
  variant: "light" | "splitted" | "bordered";
  onChange: (selected?: string | number) => void;
};

const Context = createContext<AccordionContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export function useAccordionContext() {
  return { AccordionProvider: Context.Provider, useContext, Context };
}
