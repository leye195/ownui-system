import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@ui-system/components/Checkbox";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isChecked: {
      if: {
        arg: "isChecked",
        exists: true,
      },
    },
    radius: {
      control: "radio",
      options: ["full", "large", "medium", "small", "none"],
    },
    size: {
      control: "radio",
      options: ["large", "medium", "small"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "medium",
  },
  render: (args) => {
    return <Checkbox {...args}>CheckBox</Checkbox>;
  },
};

export const Controlled: Story = {
  args: {
    size: "medium",
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      >
        CheckBox
      </Checkbox>
    );
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    disabled: true,
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <Checkbox
        {...args}
        isChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      >
        CheckBox
      </Checkbox>
    );
  },
};
