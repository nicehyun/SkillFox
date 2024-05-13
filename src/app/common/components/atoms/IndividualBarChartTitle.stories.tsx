import { Meta, StoryObj } from "@storybook/react";
import IndividualBarChartTitle, {
  IIndividualBarChartTitleProps,
} from "./IndividualBarChartTitle";

const meta: Meta<IIndividualBarChartTitleProps> = {
  title: "Common/Atoms/IndividualBarChartTitle",
  argTypes: {
    title: {
      control: "text",
      description: "개별 분석 결과의 타이틀입니다.",
    },
  },
  component: IndividualBarChartTitle,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<IIndividualBarChartTitleProps> = {
  args: {
    title: "개별 분석 결과 타이틀",
  },
};
