import clsx from "clsx";

type SwitchProps = {
  isToggled: boolean;
  onToggleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeBgColor?: string;
};

function Switch({
  isToggled,
  onToggleChange,
  activeBgColor = "black",
}: SwitchProps) {
  return (
    <label className="relative inline-block h-[24px] w-[40px] ">
      <input
        checked={isToggled}
        className={clsx("opacity-0 w-0 h-0", "peer")}
        type="checkbox"
        onChange={onToggleChange}
      />
      <span
        className={clsx(
          "absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-[99px] bg-[#E0E0E0] transition-all",
          "before:absolute before:content-[''] before:w-[20px] before:h-[20px]",
          "before:left-[2px] before:bottom-[2px] before:bg-white",
          "before:transition-all before:rounded-[99px]",
          "peer-checked:before:translate-x-[16px]",
          "peer-checked:bg-[var(--activeColor)]",
        )}
        style={{
          "--activeColor": activeBgColor,
        }}
      />
    </label>
  );
}

export default Switch;
