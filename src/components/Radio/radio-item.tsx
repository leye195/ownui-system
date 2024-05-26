import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";
import {
  labelStyle,
  itemBaseStyle,
  itemAfterStyle,
  itemCheckedStyle,
} from "./radio-style";

type RadioItemProps = {
  name: string;
  id: string;
  activeColor?: string;
  value?: string;
  children: React.ReactNode;
} & ComponentProps<"input">;

const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  function RadioItem(
    {
      name,
      id,
      activeColor,
      children,
      value,
      defaultChecked,
      disabled,
      onChange,
    },
    ref,
  ) {
    return (
      <label className={clsx(labelStyle)} htmlFor="">
        <input
          ref={ref}
          className="absolute left-0 w-full h-full z-[1] opacity-0 cursor-pointer peer"
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          type="radio"
          value={value}
          onChange={onChange}
        />
        <span
          className={clsx(itemBaseStyle, itemAfterStyle, itemCheckedStyle)}
          style={{
            "--bg-color": activeColor ?? "",
          }}
        />
        {children}
      </label>
    );
  },
);

export default RadioItem;
