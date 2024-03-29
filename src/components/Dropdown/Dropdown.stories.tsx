import Button from "@ownui-system/components/Button";
import Text from "@ownui-system/components/Text";
import { colors } from "@ownui-system/styles/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./dropdown";
import DropdownBody from "./dropdown-body";
import DropdownItem from "./dropdown-item";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: colors.gray300,
    trigger: <></>,
    selectedItem: "",
  },
  render: () => {
    const [selected, setSelected] = useState("Apple");
    return (
      <>
        <Dropdown
          color={colors.gray100}
          content={
            <DropdownBody className="bg-white">
              <DropdownItem value="apple">Apple</DropdownItem>
              <DropdownItem value="banana">Banana</DropdownItem>
              <DropdownItem value="pineapple">Pineapple</DropdownItem>
            </DropdownBody>
          }
          selectedItem={selected}
          trigger={
            <Button
              className=" min-w-[300px]"
              color={colors.gray400}
              size="xlarge"
              variant="line"
            >
              <Text color={colors.black}>{selected}</Text>
            </Button>
          }
          onSelect={(name: string) => setSelected(name)}
        />
      </>
    );
  },
};
