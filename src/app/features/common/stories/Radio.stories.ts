import { Meta, StoryObj } from "@storybook/react";
import Radio, { IRadioProps } from "./Radio";

const meta: Meta<IRadioProps> = {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    checked: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color, Medium Size
export const PrimaryMedium: Story = {
  args: {
    id: "radio-primary-medium",
    name: "radio-primary-medium",
    label: "Primary Medium",
    checked: true,
    color: "primary",
    size: "medium",
    onChange: () => console.log("onChange"),
  },
};
