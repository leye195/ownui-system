import { cn } from "@ownui-system/styles/util";
import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import AccordionBody from "./accordion-body";
import { useAccordionContext } from "./accordion-context";
import AccordionHeader from "./accordion-header";
import { itemStyle } from "./accordion-style";

interface AccordionItemProps {
  header: React.ReactNode;
  headerIcon?: React.ReactNode;
  body: React.ReactNode;
  value: string | number;
  className?: string;
  disabled?: boolean;
  defaultOpen?: boolean;
}

function AccordionItem({
  className,
  header,
  headerIcon,
  body,
  value,
  disabled,
  defaultOpen,
}: AccordionItemProps) {
  const { useContext } = useAccordionContext();
  const { selected, type, variant, color, defaultSelected, onChange } =
    useContext();
  const [isItemSelected, setIsItemSelected] = useState(
    defaultOpen ?? defaultSelected === value,
  );
  const [isAfterOpen, setIsAfterOpen] = useState(false);

  const isOpen = type === "single" ? selected === value : isItemSelected;

  const handleToggle = useCallback(() => {
    setIsItemSelected((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isOpen && !isAfterOpen) setIsAfterOpen(true);
  }, [isOpen, isAfterOpen]);

  return (
    <li
      className={cn(
        itemStyle[variant],
        disabled ? "opacity-45" : "",
        className,
      )}
      style={{
        "--bg-color": color,
      }}
    >
      <AccordionHeader
        icon={headerIcon}
        isOpen={isOpen}
        onClick={
          disabled
            ? undefined
            : () =>
                type === "single"
                  ? onChange(isOpen ? undefined : value)
                  : handleToggle()
        }
      >
        {header}
      </AccordionHeader>
      <AnimatePresence>
        {isOpen && (
          <AccordionBody isAfterOpen={isAfterOpen}>{body}</AccordionBody>
        )}
      </AnimatePresence>
    </li>
  );
}

export default AccordionItem;
