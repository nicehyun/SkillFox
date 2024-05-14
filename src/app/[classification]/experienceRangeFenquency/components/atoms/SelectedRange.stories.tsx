import { Meta, StoryObj } from "@storybook/react";
import SelectedRange, { ISelectedRangeProps } from "./SelectedRange";

const meta: Meta<ISelectedRangeProps> = {
  title: "ExperienceRangeFenquency/Atoms/SelectedRange",
  component: SelectedRange,
  tags: ["autodocs"],
  argTypes: {
    rightThumb: {
      control: "number",
      description: "선택 범위 오른쪽의 절대값입니다. (0~100)",
    },
    lefttThumb: {
      control: "number",
      description: "선택 범위 왼쪽의 절대값입니다. (0~100)",
    },
  },
};

export default meta;

export const Default: StoryObj<ISelectedRangeProps> = {
  args: {
    rightThumb: 0,
    lefttThumb: 0,
  },
  decorators: (story) => <div className="relative z-10  h-2">{story()}</div>,
};
