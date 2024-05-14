import { Meta, StoryObj } from "@storybook/react";
import ExperienceRangeContoller, {
  IExperienceRangeContollerProps,
} from "./ExperienceRangeContoller";

const meta: Meta<IExperienceRangeContollerProps> = {
  title: "ExperienceRangeFenquency/Molecules/ExperienceRangeContoller",
  component: ExperienceRangeContoller,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "범위 적용 버튼의 disabled 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<IExperienceRangeContollerProps> = {
  args: {
    isDisabled: true,
  },
};
