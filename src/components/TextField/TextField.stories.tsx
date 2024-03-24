import type { Meta, StoryObj } from "@storybook/react";
import TextField from "@ownui-system/components/TextField";
import { colors } from "@ownui-system/styles/colors";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    hasError: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    focusColor: {
      controls: { type: "string" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "medium",
    disabled: false,
    hasError: false,
    label: "Label",
    helpMessage: "help message here",
    focusColor: colors.gray300,
  },
  render: (args) => <TextField {...args} placeholder="Text" />,
};
