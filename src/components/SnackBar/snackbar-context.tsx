import { createContext, useContext as useReactContext } from "react";

export type SnackBarType = "normal" | "success" | "danger";

export type SnackBarAction = {
  name: string;
  callback: () => void;
};

export type SnackBarOptions = {
  type: SnackBarType;
  action?: SnackBarAction;
  delay?: number;
};

type SnackBarContextValue = {
  isOpen: boolean;
  message?: string;
  action?: SnackBarAction;
  type?: SnackBarType;
  delay: number;
  openSnackBar: (message: string, options?: SnackBarOptions) => void;
  closeSnackBar: () => void;
  resetSnackBar: () => void;
};

const Context = createContext<SnackBarContextValue | undefined>(undefined);

function useContext() {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error(
      "`context` is undefined. Seems you forgot to wrap component within the Provider",
    );
  }

  return context;
}

export default function useSnackBarContext() {
  return { SnackBarContextProvider: Context.Provider, useContext, Context };
}
