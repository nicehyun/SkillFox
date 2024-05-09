import { Meta, StoryObj } from "@storybook/react";
import Button, { IButtonProps } from "./Button";

const meta: Meta<IButtonProps> = {
  title: "Common/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    id: "default button",
    content: "Default Button",
  },
};
