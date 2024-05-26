import { Meta, StoryObj } from "@storybook/react";
import ToolTipButton, { IToolTipProps } from "./ToolTipButton";

const meta: Meta<IToolTipProps> = {
  title: "Common/Molecules/ToolTipButton",
  component: ToolTipButton,
  tags: ["autodocs"],
  argTypes: {
    analysisClassification: {
      control: "text",
      description: "aria-label의 값입니다.",
    },
    iconSize: {
      control: "radio",
      defaultValue: "small",
      description: "툴팁 버튼의 사이즈를 결정합니다.",
    },
  },
};

export default meta;

export const Small: StoryObj<IToolTipProps> = {
  args: {
    analysisClassification: "small tooltip button",
  },
};

export const Normal: StoryObj<IToolTipProps> = {
  args: {
    iconSize: "normal",
    analysisClassification: "normal tooltip button",
  },
};

export const Large: StoryObj<IToolTipProps> = {
  args: {
    iconSize: "large",
    analysisClassification: "large tooltip button",
  },
};
