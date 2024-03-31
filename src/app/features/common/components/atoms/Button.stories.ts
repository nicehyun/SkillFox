import { Meta, StoryObj } from "@storybook/react";
import Button, { IButtonProps } from "./Button";

const meta: Meta<IButtonProps> = {
  title: "Common/Atoms/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Button의 색상을 결정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color
export const Primary: Story = {
  args: {
    id: "primary",
    color: "primary",
    content: "Primary Button",
  },
};
