import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Top: Story = {
  args: {
    children: null,
    open: false,
    message: "tooltip message",
    tailOffset: "0.1875rem",
  },
  render: ({ message, tailOffset, open }) => (
    <Tooltip
      message={message}
      open={open}
      placement="top"
      tailOffset={tailOffset}
    >
      <button>Tooltip Test</button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  args: {
    children: null,
    open: false,
    message: "tooltip message",
    tailOffset: "0.1875rem",
  },
  render: ({ message, tailOffset, open }) => (
    <Tooltip
      message={message}
      open={open}
      placement="bottom"
      tailOffset={tailOffset}
    >
      <button>Tooltip Test</button>
    </Tooltip>
  ),
};

export const Left: Story = {
  args: {
    children: null,
    open: false,
    message: "tooltip message",
    tailOffset: "0.1875rem",
  },
  render: ({ message, tailOffset, open }) => (
    <Tooltip
      message={message}
      open={open}
      placement="left"
      tailOffset={tailOffset}
    >
      <button>Tooltip Test</button>
    </Tooltip>
  ),
};

export const Right: Story = {
  args: {
    children: null,
    open: false,
    message: "tooltip message",
    tailOffset: "0.1875rem",
  },
  render: ({ message, tailOffset, open }) => (
    <Tooltip
      message={message}
      open={open}
      placement="right"
      tailOffset={tailOffset}
    >
      <button>Tooltip Test</button>
    </Tooltip>
  ),
};
