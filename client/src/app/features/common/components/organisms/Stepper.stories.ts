import { Meta, StoryObj } from "@storybook/react";
import Stepper, { IStepperProps } from "./Stepper";

const meta: Meta<IStepperProps> = {
  title: "Common/Organisms/Stepper",
  component: Stepper,
  argTypes: {
    activeStep: {
      control: "number",
      description: "현재 활성화된 Step을 나타냅니다.",
    },
    stepLabels: {
      control: { type: "array" },
      description: "각 Step의 Label을 나타냅니다.",
    },
    stepContents: {
      control: "array",
      description: "각 Step의 컨텐츠를 나타냅니다.",
    },
    onClickNextStepButton: { action: "clicked" },
    NextStepButtonContents: {
      control: "array",
      description: "각 Step의 Button에 표시할 텍스트입니다.",
    },
    color: {
      control: { type: "radio", options: ["primary", "secondary"] },
      description: "Stepper의 색상을 결정합니다.",
    },
    isShowFinalContentbutton: {
      control: "boolean",
      description: "마지막 Step의 Button을 표시할지 결정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary Color, Show Final Content In Button : False
export const Primary: Story = {
  args: {
    isShowFinalContentbutton: false,
    color: "primary",
    activeStep: 0,
    stepLabels: ["Step1", "Step2", "Step3"],
    stepContents: ["Step Content1", "Step Content2", "Step Content3"],
    NextStepButtonContents: ["Next Step2", "Next Step3", "Complete Step"],
    onClickNextStepButton: () => {},
  },
};
