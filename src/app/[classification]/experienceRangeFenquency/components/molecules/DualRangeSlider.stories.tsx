import { Meta, StoryObj } from "@storybook/react";
import DualRangeSlider, { IDualRangeSliderProps } from "./DualRangeSlider";

const meta: Meta<IDualRangeSliderProps> = {
  title: "ExperienceRangeFenquency/Molecules/DualRangeSlider",
  component: DualRangeSlider,
  tags: ["autodocs"],
  argTypes: {
    minThumb: {
      control: "number",
      description: "왼쪽 슬라이더 thumb의 값입니다.",
    },
    maxThumb: {
      control: "number",
      description: "오른쪽 슬라이터 thumb의 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<IDualRangeSliderProps> = {
  args: {
    maxThumb: 0,
    minThumb: 0,
  },
};
