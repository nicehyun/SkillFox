import { Meta, StoryObj } from "@storybook/react";
import StepNavigation, { IStepNavigationProps } from "./StepNavigation";

const meta: Meta<IStepNavigationProps> = {
  title: "Common/Organisms/StepNavigation",
  component: StepNavigation,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Step Navigation의 텍스트 색상을 결정합니다.",
    },
    activeStep: {
      control: { type: "number" },
      description: "현재 활성화된 Step을 나타냅니다.",
    },
    stepLabels: {
      control: { type: "array" },
      description: "각 Step의 Label을 나타냅니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color
export const Primary: Story = {
  args: {
    color: "primary",
    activeStep: 0,
    stepLabels: ["Step1", "Step2", "Step3"],
  },
};
