import TooltipModalContent, {
  ITooltipModalContentProps,
} from "./TooltipModalContent";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ITooltipModalContentProps> = {
  title: "Common/molecules/TooltipModalContent",
  component: TooltipModalContent,
  argTypes: {
    currentTooltipPage: {
      contol: "number",
      description: "분석 유형의 가이드 내용을 결정합니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<ITooltipModalContentProps> = {
  args: {
    currentTooltipPage: 1,
  },
};
