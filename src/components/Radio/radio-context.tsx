import { createContext, useContext as useReactContext } from "react";

type RadioContextValue = {
  activeColor: string;
};

const Context = createContext<RadioContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export default function useRadioContext() {
  return { RadioProvider: Context.Provider, useContext, Context };
}
