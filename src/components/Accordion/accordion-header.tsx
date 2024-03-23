import clsx from "clsx";
import Flex from "../shared/Flex";

interface AccordionHeaderProps {
  isOpen: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

function AccordionHeader({
  children,
  isOpen,
  icon,
  onClick,
}: AccordionHeaderProps) {
  return (
    <header className="py-3" role="button" onClick={onClick}>
      <Flex align="center" justify="space-between">
        {children}
        {icon ? (
          <span
            className={clsx(
              "transition-all",
              isOpen ? "rotate-180" : "rotate-0",
            )}
          >
            {icon}
          </span>
        ) : null}
      </Flex>
    </header>
  );
}

export default AccordionHeader;
