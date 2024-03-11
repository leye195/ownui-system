import type { Meta, StoryObj } from "@storybook/react";
import Divider from "@ui-system/components/Divider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: "500px",
    margin: "10px",
  },
  render: (args) => <Divider {...args} />,
};
