import clsx from "clsx";
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
  type,
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
    <ul className={clsx(baseStyle[variant], className)}>
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
