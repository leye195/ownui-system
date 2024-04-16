import Button from "@ownui-system/components/Button";
import Text from "@ownui-system/components/Text";
import { colors } from "@ownui-system/styles/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./dropdown";
import DropdownBody from "./dropdown-body";
import DropdownItem from "./dropdown-item";
import { Flex } from "..";

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
    const [selected, setSelected] = useState("Appe");
    return (
      <div>
        <Dropdown
          color={colors.gray100}
          content={
            <DropdownBody className="bg-white">
              <DropdownItem value="apple">Appe</DropdownItem>
              <DropdownItem disabled value="banana">
                Bana
              </DropdownItem>
              <DropdownItem value="pineapple">Pinea</DropdownItem>
            </DropdownBody>
          }
          selectedItem={selected}
          trigger={
            <Button
              className="min-w-[300px] hover:bg-[#FAFAFA] border-[#AFAFAF] rounded-[8px] px-[16px] py-[12px]"
              color={colors.gray400}
              size="large"
              variant="line"
            >
              <Flex className="w-full">
                <Text color={colors.black}>{selected}</Text>
              </Flex>
            </Button>
          }
          onSelect={(name: string) => setSelected(name)}
        />
      </div>
    );
  },
};
