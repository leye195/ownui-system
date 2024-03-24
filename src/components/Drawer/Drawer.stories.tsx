import type { Meta, StoryObj } from "@storybook/react";
import Button from "@ownui-system/components/Button";
import { useState } from "react";
import DrawerContent from "./drawer-content";
import Drawer from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Drawer",
  component: Drawer,
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
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isOpen: false,
    allowCloseOnClickBackDrop: true,
    placement: undefined,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <DrawerContent>
            <div className="p-5">Drawer Content</div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const FromTop: Story = {
  args: {
    isOpen: false,
    placement: "top",
    allowCloseOnClickBackDrop: true,
  },
  argTypes: {
    placement: {
      control: false,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <DrawerContent>
            <div className="p-5">Drawer Content</div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const FromBottom: Story = {
  args: {
    isOpen: false,
    placement: "bottom",
    allowCloseOnClickBackDrop: true,
  },
  argTypes: {
    placement: {
      control: false,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <DrawerContent>
            <div className="p-5">Drawer Content</div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const FromLeft: Story = {
  args: {
    isOpen: false,
    placement: "left",
    allowCloseOnClickBackDrop: true,
  },
  argTypes: {
    placement: {
      control: false,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <DrawerContent>
            <div className="p-5">Drawer Content</div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};

export const FromRight: Story = {
  args: {
    isOpen: false,
    placement: "right",
    allowCloseOnClickBackDrop: true,
  },
  argTypes: {
    placement: {
      control: false,
    },
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
        >
          <DrawerContent>
            <div className="p-5">Drawer Content</div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};
