import { ReactRef } from "@ui-system/types";
import { useImperativeHandle, useRef } from "react";

function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref?: ReactRef<T | null>,
) {
  const domRef = useRef<T>(null);

  useImperativeHandle(ref, () => domRef.current);

  return domRef;
}

export default useDOMRef;
