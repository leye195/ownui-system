import { colors } from "@ownui-system/styles/colors";
import { cn } from "@ownui-system/styles/util";
import type { Meta, StoryObj } from "@storybook/react";
import RadioItem, { RadioItemProps } from "./radio-item";
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

export const CustomRadio: Story = {
  args: {
    name: "tesst",
    id: "",
    activeColor: "",
    children: <></>,
  },
  render: () => {
    function CustomRadio({ children, ...restProps }: RadioItemProps) {
      return (
        <div
          className={cn(
            "relative px-4 py-2 border border-gray-300 rounded-xl",
            "flex items-center justify-between",
            "hover:opacity-55",
          )}
        >
          {children}
          <Radio.Item {...restProps} className="static" />
        </div>
      );
    }

    return (
      <Radio.Group
        activeColor={colors.gray800}
        className="gap-4 flex-col w-[400px]"
      >
        <CustomRadio id="" name="test" value="test2">
          <div className="flex flex-col">
            <span className="text-lg"> Free</span>
            <span className="text-sm">Up to 100 items</span>
          </div>
        </CustomRadio>
        <CustomRadio id="" name="test" value="test2">
          <div className="flex flex-col">
            <span className="text-lg">Pro</span>
            <span className="text-sm">Unlimited items. $5 per month</span>
          </div>
        </CustomRadio>
      </Radio.Group>
    );
  },
};
