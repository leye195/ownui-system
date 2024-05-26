import { colors } from "@ownui-system/styles/colors";
import type { Meta, StoryObj } from "@storybook/react";
import RadioItem from "./radio-item";
import Radio from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Radio",
  component: RadioItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: "tesst",
    id: "",
    activeColor: "",
    children: <></>,
  },
  render: () => {
    return (
      <Radio.Group activeColor={colors.gray800} className="gap-4">
        <Radio.Item id="" name="test" value="test1">
          Test1
        </Radio.Item>
        <Radio.Item id="" name="test" value="test2">
          Test2
        </Radio.Item>
      </Radio.Group>
    );
  },
};
