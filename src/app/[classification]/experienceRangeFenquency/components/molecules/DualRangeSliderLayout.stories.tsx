import { Meta, StoryObj } from "@storybook/react";
import DualRangeSlider, { IDualRangeSliderProps } from "./DualRangeSlider";
import DualRangeSliderLayout, {
  IDualRangeSliderLayoutProps,
} from "./DualRangeSliderLayout";
import { useExperienceRange } from "../../hooks/useExperienceRange";

const meta: Meta<IDualRangeSliderLayoutProps> = {
  title: "ExperienceRangeFenquency/Molecules/DualRangeSliderLayout",
  component: DualRangeSliderLayout,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "width와 margin만 결정합니다.",
    },
    currentMax: {
      control: "number",
      description: "선택한 범위의 최댓값입니다.",
    },
    currentMin: {
      control: "number",
      description: "선택한 범위의 최솟값입니다.",
    },
    max: {
      control: "number",
      description: "범위의 최댓값입니다.",
    },
    min: {
      control: "number",
      description: "범위의 최댓값입니다.",
    },
  },
};

export default meta;

const DualRangeSliderLayoutWithHooks = () => {
  const {
    experienceCurrentMax,
    experienceCurrentMin,
    onChangeExperienceMaxValue,
    onChangeExperienceMinValue,
  } = useExperienceRange({ maxValue: 20, minValue: 0 });

  return (
    <DualRangeSliderLayout
      min={0}
      max={20}
      currentMin={experienceCurrentMin}
      currentMax={experienceCurrentMax}
      onChangeMinValue={onChangeExperienceMinValue}
      onChangeMaxValue={onChangeExperienceMaxValue}
      className="mt-8 w-full"
    />
  );
};

export const Default: StoryObj<IDualRangeSliderLayoutProps> = {
  render: () => <DualRangeSliderLayoutWithHooks />,
};
