import { Meta, StoryObj } from "@storybook/react";
import TooltipExampleChartLayout, {
  ITooltipExampleChartLayoutProps,
} from "./TooltipExampleChartLayout";

const meta: Meta<ITooltipExampleChartLayoutProps> = {
  title: "Common/Molecules/TooltipExampleChartLayout",
  component: TooltipExampleChartLayout,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "radio",
      description:
        "id 값은 'current' 또는 'prev'로만 설정이 가능하며, 해당 값을 사용해 차트의 월을 결정합니다.",
    },
    skillName: {
      control: undefined,

      description: "차트가 나타내는 기술의 값입니다.",
    },
    exampleChartDatas: {
      control: "object",
      defaultValue: [
        {
          value: 150,
          ChartColor: "bg-currentMonthChart",
        },
      ],
      table: {
        disable: true,
      },
      description: "차트의 수치과 색상을 지정합니다.",
    },
  },
};

export default meta;

export const Defalut: StoryObj<ITooltipExampleChartLayoutProps> = {
  args: {
    id: "current",
    skillName: "skill",
    exampleChartDatas: [
      {
        value: 150,
        ChartColor: "bg-currentMonthChart",
      },
    ],
  },
};
