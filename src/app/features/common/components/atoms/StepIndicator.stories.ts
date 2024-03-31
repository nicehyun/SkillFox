import { Meta, StoryObj } from "@storybook/react";
import StepIndicator, { IStepIndicatorProps } from "./StepIndicator";

const meta: Meta<IStepIndicatorProps> = {
  title: "Common/Atoms/StepIndicator",
  component: StepIndicator,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Step Indicator의 색상을 결정합니다.",
    },
    isCompleted: {
      control: { type: "boolean" },
      description: "Step의 완료 여부를 나타냅니다.",
    },
    isActive: {
      control: { type: "boolean" },
      description: "Step의 현재 활성화 상태를 나타냅니다.",
    },
    stepNumber: {
      control: { type: "number" },
      description: "Step에 표시할 번호입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color, Active State, Not Complete
export const Primary: Story = {
  args: {
    color: "primary",
    stepNumber: 0,
    isActive: true,
    isCompleted: false,
  },
};
