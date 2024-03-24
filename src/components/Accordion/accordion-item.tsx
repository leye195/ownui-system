import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
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
}

function AccordionItem({
  className,
  header,
  headerIcon,
  body,
  value,
  disabled,
}: AccordionItemProps) {
  const { useContext } = useAccordionContext();
  const { selected, variant, color, onChange } = useContext();

  const isOpen = selected === value;

  return (
    <li
      className={clsx(
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
          disabled ? undefined : () => onChange(isOpen ? undefined : value)
        }
      >
        {header}
      </AccordionHeader>
      <AnimatePresence>
        {isOpen && <AccordionBody>{body}</AccordionBody>}
      </AnimatePresence>
    </li>
  );
}

export default AccordionItem;
