import { BottomSheet } from "@ownui-system/components/BottomSheet";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isOpen: false,
    children: "ButtonSheet",
  },
  render: ({ children, ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <BottomSheet
          {...args}
          isOpen={isOpen}
          onOpenChange={() => setIsOpen(false)}
        >
          {children}
        </BottomSheet>
      </div>
    );
  },
};
