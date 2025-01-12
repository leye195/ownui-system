import { colors } from "@ownui-system/styles/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropdown from "./dropdown";

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
    isOpen: false,
    header: <></>,
  },
  render: () => {
    const [selectedInfo, setSelectedInfo] = useState({
      name: "Price Low to High",
      value: "high",
    });

    const [isOpen, setIsOpen] = useState(false);

    function handleSelectDropdown(name: string, value: string) {
      setSelectedInfo({
        name,
        value,
      });
    }

    function handleOnOpenChange(isOpen: boolean) {
      setIsOpen(isOpen);
    }

    return (
      <Dropdown
        body={
          <Dropdown.Content>
            <Dropdown.Body>
              <Dropdown.Item name="Price Low to High" value="high">
                Price Low to High
              </Dropdown.Item>
              <Dropdown.Item name="Price High to Low" value="low">
                Price High to Low
              </Dropdown.Item>
              <Dropdown.Item disabled name="Price dd" value="dd">
                Price dd
              </Dropdown.Item>
            </Dropdown.Body>
          </Dropdown.Content>
        }
        color={colors.gray100}
        header={<Dropdown.Header />}
        isOpen={isOpen}
        selectedItem={selectedInfo}
        onOpenChange={handleOnOpenChange}
        onSelect={handleSelectDropdown}
      />
    );
  },
};
