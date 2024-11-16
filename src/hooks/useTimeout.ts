import { type DependencyList } from "react";
import { useIsomorphicLayoutEffect } from ".";

type UseTimeoutProps = {
  callback: () => void;
  enabled?: boolean;
  delay?: number;
};

function useTimeout(
  { callback, enabled, delay }: UseTimeoutProps,
  deps?: DependencyList,
) {
  useIsomorphicLayoutEffect(() => {
    if (!enabled) return;

    const timeout: NodeJS.Timeout = setTimeout(() => {
      callback();
    }, delay ?? 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, deps ?? []);
}

export default useTimeout;
