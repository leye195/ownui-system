import clsx from "clsx";
import { useState } from "react";
import { useAccordionContext } from "./accordion-context";
import { baseStyle } from "./accordion-style";

interface AccordionProps {
  defaultSelected?: string | number;
  type?: "single" | "multi";
  variant?: "light" | "splitted" | "bordered";
  onChange?: (selected?: string | number) => void;
  children: React.ReactNode;
  className?: string;
}

function Accordion({
  className,
  children,
  defaultSelected,
  type,
  variant = "light",
  onChange,
}: AccordionProps) {
  const [selected, setSelected] = useState(defaultSelected);
  const { AccordionProvider } = useAccordionContext();

  function handleSelect(selected?: string | number) {
    setSelected(selected);
    onChange?.(selected);
  }

  return (
    <ul className={clsx(baseStyle[variant], className)}>
      <AccordionProvider
        value={{ selected, type, variant, onChange: handleSelect }}
      >
        {children}
      </AccordionProvider>
    </ul>
  );
}

export default Accordion;
