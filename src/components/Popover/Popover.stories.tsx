import type { Meta, StoryObj } from "@storybook/react";
import Popover from "@ownui-system/components/Popover";
import { useState } from "react";
import PopoverContent from "./popover-content";
import PopoverTrigger from "./popover-trigger";
import Button from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      if: { arg: "children", exists: false },
    },
    isOpen: {
      if: { arg: "isOpen", exists: false },
    },
    motionVariant: {
      if: { arg: "motionVariant", exists: true },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isOpen: false,
    placement: "bottom",
    children: [],
  },
  argTypes: {
    placement: {
      control: false,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Popover
        {...args}
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      >
        <PopoverTrigger>
          <Button className="p-10" color="#ebebeb">
            Open
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-[16px] rounded-lg border-solid border-2 border-gray-200">
            Popover Content
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};
