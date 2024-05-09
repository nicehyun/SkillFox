import { Meta, StoryObj } from "@storybook/react";
import Button, { IButtonProps } from "./Button";

const meta: Meta<IButtonProps> = {
  title: "Common/Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default button",

    content: "Default Button",
  },
};
