import type { Meta, StoryObj } from "@storybook/react";
import Badge from "@ui-system/components/Badge";
import { colors } from "@ui-system/styles/colors";
import Button from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    content: null,
    color: "red",
    size: "medium",
    radius: "8px",
    isVisible: true,
  },
  render: (args) => (
    <div>
      <Badge {...args}>
        <Button color={colors.gray300} variant="line">
          Button
        </Button>
      </Badge>
    </div>
  ),
};

export const WithContent: Story = {
  args: {
    content: <span className="text-white">5</span>,
    color: "red",
    size: "medium",
    radius: "100px",
    isVisible: true,
  },
  render: (args) => (
    <div>
      <Badge {...args}>
        <Button color={colors.gray300} variant="line">
          Button
        </Button>
      </Badge>
    </div>
  ),
};
