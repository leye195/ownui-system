export const baseStyle = "relative inline-block text-center";

export const afterStyle =
  "after:absolute after:content-[''] after:block after:text-[var(--text-color)] after:border after:w-0 after:h-0 after:opacity-0 after:transition-all after:delay-100";

export const beforeStyle =
  "before:absolute before:pointer-events-none before:z-[1] before:content-[attr(data-tip)] before:rounded-md before:px-1 before:py-2 before:bg-[var(--bg-color)] before:max-w-80 before:w-max before:whitespace-normal before:opacity-0 before:transition-all before:delay-100 ";

export const hoverStyle = {
  before: "hover:before:opacity-100 hover:before:delay-75",
  after: "hover:after:opacity-100 hover:after:delay-75",
};

export const openStyle = {
  before: "before:opacity-100 before:delay-75",
  after: "after:opacity-100 after:delay-75",
};

export const positionStyle = {
  top: {
    after:
      "after:translate-x-[-50%] after:top-auto after:right-auto after:bottom-[var(--tail-offset)] after:left-[50%]",
    before:
      "before:translate-x-[-50%] before:top-auto before:right-auto before:bottom-[var(--tail-offset)] before:left-[50%]",
  },
  bottom: {
    after:
      "after:translate-x-[-50%] after:top-[var(--tail-offset)] after:left-[50%] after:right-auto after:bottom-auto",
    before:
      "before:translate-x-[-50%] before:top-[var(--tail-offset)] before:left-[50%] before:right-auto before:bottom-auto",
  },
  left: {
    after:
      "after:translate-y-[-50%] after:top-[50%] after:left-auto after:right-[calc(var(--tail-offset)+0.0625rem)] after:bottom-auto",
    before:
      "before:translate-y-[-50%] before:top-[50%] before:left-auto before:right-[calc(var(--tail-offset)+0.0625rem)] before:bottom-auto",
  },
  right: {
    after:
      "after:translate-y-[-50%] after:top-[50%] after:right-auto after:bottom-auto after:left-[calc(var(--tail-offset)+0.0625rem)]",
    before:
      "before:translate-y-[-50%] before:top-[50%] before:right-auto before:bottom-auto before:left-[calc(var(--tail-offset)+0.0625rem)]",
  },
};
