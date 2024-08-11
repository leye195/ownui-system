import { cn } from "@ownui-system/styles/util";
import { type ComponentProps, forwardRef } from "react";
import useRadioContext from "./radio-context";
import {
  labelStyle,
  itemBaseStyle,
  itemAfterStyle,
  itemCheckedStyle,
} from "./radio-style";

export type RadioItemProps = {
  name: string;
  id: string;
  activeColor?: string;
  value?: string;
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
      className,
      onChange,
    },
    ref,
  ) {
    const { useContext } = useRadioContext();
    const { activeColor: globalActiveColor } = useContext();

    return (
      <label className={cn(labelStyle, className)} htmlFor="">
        <input
          ref={ref}
          className="absolute top-0 left-0 w-full h-full z-[1] opacity-0 cursor-pointer peer"
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          type="radio"
          value={value}
          onChange={onChange}
        />
        <span
          className={cn(itemBaseStyle, itemAfterStyle, itemCheckedStyle)}
          style={{
            "--bg-color": activeColor ?? globalActiveColor,
          }}
        />
        {children}
      </label>
    );
  },
);

export default RadioItem;
