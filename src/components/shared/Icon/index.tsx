import { cn } from "@ownui-system/styles/util";
import { icons } from "lucide-react";
import { HTMLAttributes } from "react";

export type IconName = keyof typeof icons;

interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconName;
  color?: string;
  size?: string | number;
}

export default function Icon({
  name,
  className,
  color = "black",
  size = 16,
  ...props
}: IconProps) {
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      className={cn(className)}
      color={color}
      size={size}
      {...props}
    />
  );
}
