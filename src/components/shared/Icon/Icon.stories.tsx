import type { Meta, StoryObj } from "@storybook/react";

import { icons } from "lucide-react";
import Icon, { IconName } from "./index";

const iconNames = Object.keys(icons) as IconName[];
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/shared/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const All: Story = {
  args: {
    name: "ALargeSmall",
    size: 20,
    color: "black",
  },
  render: ({ size, color }) => {
    return (
      <div className="flex gap-5 flex-wrap">
        {iconNames.map((name) => (
          <div
            key={name}
            className="flex flex-col min-w-[180px] items-center gap-1"
          >
            <Icon color={color} name={name} size={size} />
            <span className="text-[12px]">{name}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Default: Story = {
  args: {
    name: "ALargeSmall",
    size: 20,
    color: "black",
  },
  render: ({ size, name, color }) => {
    return (
      <div className="flex items-center flex-col gap-2 flex-wrap">
        <Icon color={color} name={name} size={size} />
        <span className="text-[12px]">{name}</span>
      </div>
    );
  },
};
