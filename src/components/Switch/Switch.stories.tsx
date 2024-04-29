import Switch from "@ownui-system/components/Switch";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isToggled: false,
    activeBgColor: "#5717DE",
  },
  render: ({ ...args }) => {
    const [isToggled, setIsToggled] = useState(false);

    return (
      <Switch
        {...args}
        isToggled={isToggled}
        onToggleChange={() => setIsToggled((prev) => !prev)}
      />
    );
  },
};
