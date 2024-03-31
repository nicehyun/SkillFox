import { Meta, StoryObj } from "@storybook/react";
import JobSelect, { IJobSelectProps } from "./JobSelect";

const meta: Meta<IJobSelectProps> = {
  title: "Home/Organisms/JobSelect",
  component: JobSelect,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Button의 색상을 결정합니다.",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "normal", "medium"],
      description: "Radio의 크기를 결정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color, normal Size
export const PrimaryMedium: Story = {
  args: {
    color: "primary",
    size: "normal",
  },
};
