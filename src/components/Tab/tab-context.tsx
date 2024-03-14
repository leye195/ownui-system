import { createContext, useContext as useReactContext } from "react";

type TabPropsContextValue = {
  type?: "text" | "box";
  size?: "large" | "medium" | "small";
  activeColor?: string;
};

const Context = createContext<TabPropsContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export function useTabContext() {
  return { TabProvider: Context.Provider, useContext, Context };
}
