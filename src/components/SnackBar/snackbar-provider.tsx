import { cn } from "@ownui-system/styles/util";
import { type PropsWithChildren, useState } from "react";
import useSnackBarContext, { type SnackBarOptions } from "./snackbar-context";
import { baseStyle } from "./snackbar-style";

type SnackBarAreaProps = {
  className?: string;
  zIndex?: number;
} & PropsWithChildren;

function SnackBarProvider({
  children,
  className,
  zIndex = 900,
}: SnackBarAreaProps) {
  const { SnackBarContextProvider } = useSnackBarContext();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [options, setOptions] = useState<SnackBarOptions>({
    action: undefined,
    type: "normal",
    delay: 3000,
  });

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpenSnackBar(message: string, options?: SnackBarOptions) {
    const { action, type = "normal", delay = 3000 } = options ?? {};

    setMessage(message);
    setOptions({
      action,
      type,
      delay,
    });
    setIsOpen(true);
  }

  function handleResetSnackBar() {
    setMessage("");
    setOptions((prev) => ({
      ...prev,
      action: undefined,
    }));
    setIsOpen(false);
  }

  return (
    <SnackBarContextProvider
      value={{
        isOpen,
        message,
        action: options.action,
        type: options.type,
        delay: options.delay ?? 3000,
        openSnackBar: handleOpenSnackBar,
        closeSnackBar: handleClose,
        resetSnackBar: handleResetSnackBar,
      }}
    >
      <div
        className={cn(baseStyle, className)}
        style={{
          "--zIndex": zIndex,
        }}
      >
        {children}
      </div>
    </SnackBarContextProvider>
  );
}

export default SnackBarProvider;
