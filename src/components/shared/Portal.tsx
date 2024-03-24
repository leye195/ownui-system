import useMounted from "@ownui-system/hooks/useMounted";
import { useLayoutEffect, useMemo } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  container?: React.RefObject<HTMLElement>;
  id?: string;
};

export function createPortalRoot(id: string): HTMLDivElement {
  const root = document.createElement("div");
  root.setAttribute("id", id);

  return root;
}

function RenderPortal({ container, children, id = "portal" }: Props) {
  const mountElement = useMemo(() => {
    return container?.current || document.body;
  }, [container]);

  const portalElement = useMemo(() => {
    const portal = document.getElementById(id) || createPortalRoot(id);
    return portal;
  }, [id]);

  useLayoutEffect(() => {
    mountElement.appendChild(portalElement);

    return () => {
      if (mountElement.contains(portalElement)) {
        mountElement.removeChild(portalElement);
      }
    };
  }, [mountElement, portalElement]);

  return createPortal(children, portalElement);
}

function Portal({ children, ...rest }: Props) {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return <RenderPortal {...rest}>{children}</RenderPortal>;
}

export default Portal;
