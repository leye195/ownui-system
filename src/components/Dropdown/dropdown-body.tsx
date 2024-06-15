import { cn } from "@ownui-system/styles/util";

type DropdownBodyProps = {
  children: React.ReactNode;
  className?: string;
};

function DropdownBody({ children, className }: DropdownBodyProps) {
  return (
    <ul
      className={cn(
        "rounded-lg min-w-[200px] border border-solid  border-gray-300 ",
        className,
      )}
    >
      {children}
    </ul>
  );
}

export default DropdownBody;
