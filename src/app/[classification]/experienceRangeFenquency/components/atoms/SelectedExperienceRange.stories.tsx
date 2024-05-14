import { Meta, StoryObj } from "@storybook/react";
import SelectedExperienceRange, {
  ISelectedExperienceRangeProps,
} from "./SelectedExperienceRange";

const meta: Meta<ISelectedExperienceRangeProps> = {
  title: "ExperienceRangeFenquency/Atoms/SelectedExperienceRange",
  component: SelectedExperienceRange,
  tags: ["autodocs"],
  argTypes: {
    experienceCurrentMax: {
      control: "number",
      description: "경력 범위의 최댓값입니다.",
    },
    experienceCurrentMin: {
      control: "number",
      description: "경력 범위의 최솟값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<ISelectedExperienceRangeProps> = {
  args: {
    experienceCurrentMax: 20,
    experienceCurrentMin: 0,
  },
};
