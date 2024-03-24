import type { Meta, StoryObj } from "@storybook/react";

import Button from "@ownui-system/components/Button";
import { colors } from "@ownui-system/styles/colors";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    type: {
      if: { arg: "type", exists: true },
    },
    children: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    startContent: {
      if: { arg: "startContent", exists: true },
    },
    endContent: {
      if: { arg: "endContent", exists: true },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "medium",
    children: "Button",
    variant: "normal",
    color: colors.gray300,
    disabled: false,
    width: "400px",
  },
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};
