import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@ui-system/components/Modal";
import ModalContent from "./modal-content";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isOpen: true,
    hideCloseButton: false,
  },
  render: (args) => {
    return (
      <Modal placement="center" {...args}>
        <ModalContent>
          <div className="bg-white p-10">test</div>
        </ModalContent>
      </Modal>
    );
  },
};
