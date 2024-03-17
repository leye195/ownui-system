import { colors } from "@ui-system/styles/colors";
import clsx from "clsx";
import { forwardRef, cloneElement, ReactElement, useState } from "react";
import {
  checkBoxSize,
  iconStyle,
  labelStyle,
  radiusSize,
  wrapperStyle,
} from "./Checkbox.style";
import CheckIcon from "./CheckboxIcon";

interface CheckboxProps {
  size?: "small" | "medium" | "large";
  isChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isRequired?: boolean;
  radius?: "small" | "medium" | "large" | "full" | "none";
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    children,
    disabled,
    isRequired,
    readOnly,
    isChecked,
    name,
    color = colors["dark-green100"],
    size = "medium",
    radius = "medium",
    icon = <CheckIcon />,
    onChange,
  },
  ref,
) {
  const [checked, setChecked] = useState(false);

  function onInput(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }

  return (
    <label
      className={clsx(
        labelStyle,
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        "group",
      )}
      data-selected={isChecked || checked}
      style={{
        "--bgColor": color,
      }}
    >
      <div className="absolute hidden">
        <input
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          name={name}
          readOnly={readOnly}
          required={isRequired}
          type="checkbox"
          onChange={onChange}
          onInput={onInput}
        />
      </div>
      <span
        className={clsx(
          wrapperStyle.base,
          wrapperStyle.before,
          wrapperStyle.after,
          checkBoxSize[size].box,
          radiusSize[radius],
          "before:bg-transparent group-data-[selected=true]:after:bg-[var(--bgColor)] after:bg-transparent",
        )}
      >
        {cloneElement(icon as ReactElement, {
          isChecked: isChecked || checked,
          className: `${iconStyle} ${checkBoxSize[size].icon} text-white`,
        })}
      </span>
      {children && (
        <span className={`${disabled || readOnly ? "opacity-35" : ""}`}>
          {children}
        </span>
      )}
    </label>
  );
});

export default Checkbox;
