import clsx from "clsx";

type DropdownBodyProps = {
  children: React.ReactNode;
  className?: string;
};

function DropdownBody({ children, className }: DropdownBodyProps) {
  return (
    <ul
      className={clsx(
        "rounded-lg p-[4px] min-w-[200px] border-[3px] border-solid border-gray-500",
        className,
      )}
    >
      {children}
    </ul>
  );
}

export default DropdownBody;
