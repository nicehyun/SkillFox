import { Meta, StoryObj } from "@storybook/react";
import RangeInput, { IRangeInputProps } from "./RangeInput";

const meta: Meta<IRangeInputProps> = {
  title: "ExperienceRangeFenquency/Atoms/RangeInput",
  component: RangeInput,
  tags: ["autodocs"],
  argTypes: {
    min: {
      control: "number",
      description: "범위의 최솟값입니다.",
    },
    max: {
      control: "number",
      description: "범위의 최댓값입니다.",
    },
    currentValue: {
      control: "number",
      description: "범위 내의 현재 값입니다.",
    },
    ariaLabel: {
      control: false,
      description: "aria-label 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<IRangeInputProps> = {
  args: {
    ariaLabel: "Default range input",
    min: 0,
    max: 20,
    currentValue: 0,
  },
};
