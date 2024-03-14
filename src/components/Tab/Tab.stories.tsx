import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import TabGroup from "./tab-group";
import Tab from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

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
      <TabGroup activeColor="blue" size="small">
        <Tab {...args}>{children}</Tab>
      </TabGroup>
      <br />
      <TabGroup activeColor="blue" size="medium">
        <Tab {...args}>{children}</Tab>
      </TabGroup>
      <br />
      <TabGroup activeColor="blue" size="large">
        <Tab {...args}>{children}</Tab>
      </TabGroup>
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
      <TabGroup activeColor="blue" size="small" type="box">
        <Tab {...args}>{children}</Tab>
      </TabGroup>
      <br />
      <TabGroup activeColor="blue" size="medium" type="box">
        <Tab {...args}>{children}</Tab>
      </TabGroup>
      <br />
      <TabGroup activeColor="blue" size="large" type="box">
        <Tab {...args}>{children}</Tab>
      </TabGroup>
    </>
  ),
};

export const TextTabGroup: Story = {
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
      <TabGroup activeColor="blue">
        <Tab
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
        </Tab>
        <Tab
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
        </Tab>
        <Tab
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
        </Tab>
      </TabGroup>
    );
  },
};

export const BoxTabGroup: Story = {
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
      <TabGroup activeColor="blue" size="large" type="box">
        <Tab
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
        </Tab>
        <Tab
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
        </Tab>
        <Tab
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
        </Tab>
      </TabGroup>
    );
  },
};
