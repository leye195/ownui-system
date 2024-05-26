import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import TabItem from "./tab-item";
import Tab from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tab",
  component: TabItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    active: true,
    children: "tabbb",
  },
  render: ({ children, ...args }) => (
    <>
      <Tab.Group size="small">
        <Tab.Item {...args}>{children}</Tab.Item>
      </Tab.Group>
      <br />
      <Tab.Group size="medium">
        <Tab.Item {...args}>{children}</Tab.Item>
      </Tab.Group>
      <br />
      <Tab.Group size="large">
        <Tab.Item {...args}>{children}</Tab.Item>
      </Tab.Group>
    </>
  ),
};

export const Box: Story = {
  args: {
    active: true,
    children: "tabbb",
  },
  render: ({ children, ...args }) => (
    <>
      <Tab.Group size="small" type="box">
        <Tab.Item {...args}>{children}</Tab.Item>
      </Tab.Group>
      <br />
      <Tab.Group size="medium" type="box">
        <Tab.Item {...args}>{children}</Tab.Item>
      </Tab.Group>
      <br />
      <Tab.Group size="large" type="box">
        <Tab.Item {...args}>{children}</Tab.Item>
      </Tab.Group>
    </>
  ),
};

export const TextTab: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [activeTab, setActiveTab] = useState({
      tab1: true,
      tab2: false,
      tab3: false,
    });

    return (
      <Tab.Group>
        <Tab.Item
          active={activeTab.tab1}
          onClick={() =>
            setActiveTab({
              tab1: true,
              tab2: false,
              tab3: false,
            })
          }
        >
          Tab1
        </Tab.Item>
        <Tab.Item
          active={activeTab.tab2}
          onClick={() =>
            setActiveTab({
              tab1: false,
              tab2: true,
              tab3: false,
            })
          }
        >
          Tab2
        </Tab.Item>
        <Tab.Item
          active={activeTab.tab3}
          onClick={() =>
            setActiveTab({
              tab1: false,
              tab2: false,
              tab3: true,
            })
          }
        >
          Tab3
        </Tab.Item>
      </Tab.Group>
    );
  },
};

export const BoxTab: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [activeTab, setActiveTab] = useState({
      tab1: true,
      tab2: false,
      tab3: false,
    });

    return (
      <Tab.Group size="large" type="box">
        <Tab.Item
          active={activeTab.tab1}
          onClick={() =>
            setActiveTab({
              tab1: true,
              tab2: false,
              tab3: false,
            })
          }
        >
          Tab1
        </Tab.Item>
        <Tab.Item
          active={activeTab.tab2}
          onClick={() =>
            setActiveTab({
              tab1: false,
              tab2: true,
              tab3: false,
            })
          }
        >
          Tab2
        </Tab.Item>
        <Tab.Item
          active={activeTab.tab3}
          onClick={() =>
            setActiveTab({
              tab1: false,
              tab2: false,
              tab3: true,
            })
          }
        >
          Tab3
        </Tab.Item>
      </Tab.Group>
    );
  },
};
