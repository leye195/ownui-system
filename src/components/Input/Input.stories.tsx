import Input from "@ownui-system/components/Input";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    inValid: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    left: {
      if: { arg: "left", exists: true },
    },
    right: {
      if: { arg: "right", exists: true },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "medium",
    disabled: false,
    inValid: true,
  },
  render: (args) => <Input {...args} placeholder="Text" />,
};
