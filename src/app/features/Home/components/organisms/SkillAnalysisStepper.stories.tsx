import { Meta, StoryObj } from "@storybook/react";
import SkillAnalysisStepper from "./SkillAnalysisStepper";
import { IColorAndSizeProps } from "@/app/features/common/types";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const meta: Meta<IColorAndSizeProps> = {
  title: "Home/organisms/SkillAnalysisStepper",
  component: SkillAnalysisStepper,
  decorators: [(story) => <ReduxProvider>{story()}</ReduxProvider>],
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Stepper의 색상을 결정합니다.",
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

// Primary Color, Normal Size
export const Primary: Story = {
  args: {
    color: "primary",
    size: "normal",
  },
};
