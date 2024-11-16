import type { Meta, StoryObj } from "@storybook/react";
import useSnackBarContext, {
  SnackBarAction,
  SnackBarType,
} from "./snackbar-context";
import { SnackBar, SnackBarProvider } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SnackBar",
  component: SnackBar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SnackBar>;

export default meta;
type Story = StoryObj<typeof meta>;

type CompoonentProps = {
  type: SnackBarType;
  message: string;
  action?: SnackBarAction;
};

function Component({ type, message, action }: CompoonentProps) {
  const { useContext } = useSnackBarContext();
  const { openSnackBar } = useContext();

  function handleClickButton() {
    openSnackBar(message, {
      type,
      action,
    });
  }

  return (
    <div>
      <button onClick={handleClickButton}>Open SnackBar</button>
      <SnackBar />
    </div>
  );
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <SnackBarProvider>
          <Component message="Normal" type="normal" />
        </SnackBarProvider>
      </div>
    );
  },
};

export const Success: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <SnackBarProvider>
          <Component message="Success" type="success" />
        </SnackBarProvider>
      </div>
    );
  },
};

export const Danger: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <SnackBarProvider>
          <Component message="Danger" type="danger" />
        </SnackBarProvider>
      </div>
    );
  },
};

export const WithAction: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <SnackBarProvider>
          <Component
            action={{
              name: "Action",
              callback: () => {
                alert("action triggered");
              },
            }}
            message="with Action"
            type="normal"
          />
        </SnackBarProvider>
      </div>
    );
  },
};
