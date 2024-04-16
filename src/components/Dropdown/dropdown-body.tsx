import clsx from "clsx";

type DropdownBodyProps = {
  children: React.ReactNode;
  className?: string;
};

function DropdownBody({ children, className }: DropdownBodyProps) {
  return (
    <ul
      className={clsx(
        "rounded-lg min-w-[200px] border-[1px] border-solid border-[#AFAFAF] ",
        className,
      )}
    >
      {children}
    </ul>
  );
}

export default DropdownBody;
