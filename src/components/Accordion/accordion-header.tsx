import Flex from "@ownui-system/shared/Flex";
import { cn } from "@ownui-system/styles/util";

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
    <header className={"py-3"} role="button" onClick={onClick}>
      <Flex align="center" justify="space-between">
        {children}

        <span
          className={cn(
            "transition-all",
            isOpen ? "rotate-[-90deg]" : "rotate-0",
          )}
        >
          {icon ?? <ChevronLeft />}
        </span>
      </Flex>
    </header>
  );
}

function ChevronLeft() {
  return (
    <svg
      fill="none"
      height="16"
      id="chevron-right"
      style={{
        transform: "rotate(180deg)",
      }}
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/arrow-chevron-right">
        <path
          clipRule="evenodd"
          d="M11.9603 7.46967C12.2532 7.76256 12.2532 8.23744 11.9603 8.53033L6.71026 13.7803C6.41737 14.0732 5.94249 14.0732 5.6496 13.7803C5.35671 13.4874 5.35671 13.0126 5.6496 12.7197L10.3693 8L5.6496 3.28033C5.35671 2.98744 5.35671 2.51256 5.6496 2.21967C5.9425 1.92678 6.41737 1.92678 6.71026 2.21967L11.9603 7.46967Z"
          fill="currentColor"
          fillRule="evenodd"
          id="Icon (Stroke)"
        />
      </g>
    </svg>
  );
}

export default AccordionHeader;
