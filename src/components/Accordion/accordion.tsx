import { cn } from "@ownui-system/styles/util";
import { useCallback, useState } from "react";
import { useAccordionContext } from "./accordion-context";
import { baseStyle } from "./accordion-style";

interface AccordionProps {
  defaultSelected?: string | number;
  type?: "single" | "multi";
  variant?: "light" | "splitted" | "bordered";
  onChange?: (selected?: string | number) => void;
  children: React.ReactNode;
  color?: string;
  className?: string;
}

function Accordion({
  className,
  children,
  defaultSelected,
  type = "single",
  variant = "light",
  color = "white",
  onChange,
}: AccordionProps) {
  const [selected, setSelected] = useState(defaultSelected);
  const { AccordionProvider } = useAccordionContext();

  const handleSelect = useCallback(
    (selected?: string | number) => {
      setSelected(selected);
      onChange?.(selected);
    },
    [onChange],
  );

  return (
    <ul className={cn(baseStyle[variant], className)}>
      <AccordionProvider
        value={{
          selected,
          type,
          variant,
          color,
          defaultSelected,
          onChange: handleSelect,
        }}
      >
        {children}
      </AccordionProvider>
    </ul>
  );
}

export default Accordion;
