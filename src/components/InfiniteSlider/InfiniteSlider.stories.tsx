import type { Meta, StoryObj } from "@storybook/react";
import InfiniteSlider from "./InfiniteSlider";
import InfiniteSliderItem from "./InfiniteSlider-item";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/InfiniteSlider",
  component: InfiniteSlider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InfiniteSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    width: "100px",
    height: "50px",
  },

  render: (args) => {
    return (
      <InfiniteSlider {...args}>
        <InfiniteSliderItem>1</InfiniteSliderItem>
        <InfiniteSliderItem>2</InfiniteSliderItem>
        <InfiniteSliderItem>3</InfiniteSliderItem>
        <InfiniteSliderItem>4</InfiniteSliderItem>
        <InfiniteSliderItem>5</InfiniteSliderItem>
        <InfiniteSliderItem>6</InfiniteSliderItem>
        <InfiniteSliderItem>7</InfiniteSliderItem>
        <InfiniteSliderItem>8</InfiniteSliderItem>
        <InfiniteSliderItem>9</InfiniteSliderItem>
        <InfiniteSliderItem>10</InfiniteSliderItem>
      </InfiniteSlider>
    );
  },
};

export const Reverse: Story = {
  args: {
    width: "100px",
    height: "50px",
    reverse: true,
  },
  render: (args) => {
    return (
      <InfiniteSlider {...args}>
        <InfiniteSliderItem>1</InfiniteSliderItem>
        <InfiniteSliderItem>2</InfiniteSliderItem>
        <InfiniteSliderItem>3</InfiniteSliderItem>
        <InfiniteSliderItem>4</InfiniteSliderItem>
        <InfiniteSliderItem>5</InfiniteSliderItem>
        <InfiniteSliderItem>6</InfiniteSliderItem>
        <InfiniteSliderItem>7</InfiniteSliderItem>
        <InfiniteSliderItem>8</InfiniteSliderItem>
        <InfiniteSliderItem>9</InfiniteSliderItem>
        <InfiniteSliderItem>10</InfiniteSliderItem>
      </InfiniteSlider>
    );
  },
};
