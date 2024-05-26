import { colors } from "@ownui-system/styles/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./dropdown";
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
    selectedItem: { name: "", value: "" },
  },
  render: () => {
    const [selectedInfo, setSelectedInfo] = useState({
      name: "Price Low to High",
      value: "high",
    });

    function handleSelectDropdown(name: string, value: string) {
      setSelectedInfo({
        name,
        value,
      });
    }

    return (
      <div>
        <Dropdown
          color={colors.gray100}
          selectedItem={selectedInfo}
          onSelect={handleSelectDropdown}
        >
          <DropdownItem name="Price Low to High" value="high">
            Price Low to High
          </DropdownItem>
          <DropdownItem name="Price High to Low" value="low">
            Price High to Low
          </DropdownItem>
          <DropdownItem disabled name="Price dd" value="dd">
            Price dd
          </DropdownItem>
        </Dropdown>
      </div>
    );
  },
};
