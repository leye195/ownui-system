import TextArea from "@ownui-system/components/TextArea";
import { colors } from "@ownui-system/styles/colors";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "small"],
    },
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "large",
    disabled: false,
    hasError: false,
    label: "Label",
    helpMessage: "help message here",
    focusColor: colors.gray300,
  },
  render: (args) => <TextArea ref={undefined} placeholder="Text" {...args} />,
};
