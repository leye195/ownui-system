import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export type ReactRef<T> =
  | React.RefObject<T>
  | React.MutableRefObject<T>
  | React.Ref<T>;
