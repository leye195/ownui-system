import { Accordion, AccordionItem } from "@ownui-system/components/Accordion";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    type: {
      if: { arg: "type", exists: true },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: null,
  },
  render: ({ ...args }) => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Accordion {...args}>
        <AccordionItem
          body={<div>body1</div>}
          header={<div>header1</div>}
          value={"accordion1"}
        />
        <AccordionItem
          body={<div>body2</div>}
          header={<div>header2</div>}
          value={"accordion2"}
        />
      </Accordion>
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    children: null,
    variant: "bordered",
  },
  render: ({ ...args }) => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Accordion {...args}>
        <AccordionItem
          body={<div>body1</div>}
          header={<div>header1</div>}
          value={"accordion1"}
        />
        <AccordionItem
          body={<div>body2</div>}
          header={<div>header2</div>}
          value={"accordion2"}
        />
      </Accordion>
    </div>
  ),
};

export const Splitted: Story = {
  args: {
    children: null,
    variant: "splitted",
  },
  render: ({ ...args }) => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Accordion {...args}>
        <AccordionItem
          body={<div>body1</div>}
          header={<div>header1</div>}
          value={"accordion1"}
        />
        <AccordionItem
          body={<div>body2</div>}
          header={<div>header2</div>}
          value={"accordion2"}
        />
      </Accordion>
    </div>
  ),
};

export const Multi: Story = {
  args: {
    children: null,
    type: "multi",
    variant: "splitted",
  },
  render: ({ ...args }) => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Accordion {...args}>
        <AccordionItem
          body={<div>body1</div>}
          header={<div>header1</div>}
          value={"accordion1"}
        />
        <AccordionItem
          body={<div>body2</div>}
          header={<div>header2</div>}
          value={"accordion2"}
        />
      </Accordion>
    </div>
  ),
};
