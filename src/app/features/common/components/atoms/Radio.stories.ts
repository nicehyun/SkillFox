import { Meta, StoryObj } from "@storybook/react";
import Radio, { IRadioProps } from "./Radio";

const meta: Meta<IRadioProps> = {
  title: "Common/Atoms/Radio",
  component: Radio,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Radio의 색상을 결정합니다.",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "normal", "medium"],
      description: "Radio의 크기를 결정합니다.",
    },
    checked: {
      control: { type: "boolean" },
      description: "Radio의 선택 여부를 나타냅니다.",
    },
    label: {
      control: { type: "text" },
      description: "Radio 옆에 표시될 라벨입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color, Normal Size
export const PrimaryMedium: Story = {
  args: {
    id: "radio-primary-normal",
    name: "radio-primary-normal",
    label: "Primary Normal",
    checked: true,
    color: "primary",
    size: "normal",
    onChange: () => console.log("onChange"),
  },
};
