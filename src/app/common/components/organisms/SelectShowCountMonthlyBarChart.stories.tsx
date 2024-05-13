import { Meta, StoryObj } from "@storybook/react";
import SelectShowCountMonthlyBarChart, {
  ISelectShowCountBarChartProps,
} from "./SelectShowCountMonthlyBarChart";
import { MonthlyChartData } from "../../types";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const dummyChartData: MonthlyChartData = {
  name: "skill",
  months_value: [
    { "5": 228 },
    { "4": 478 },
    { "3": 300 },
    { "2": 200 },
    { "1": 180 },
    { "12": 150 },
  ],
};

const dummyChartDatas: MonthlyChartData[] = Array.from({ length: 20 }, () =>
  JSON.parse(JSON.stringify(dummyChartData)),
);

const meta: Meta<ISelectShowCountBarChartProps> = {
  title: "Common/Organisms/SelectShowCountMonthlyBarChart",
  component: SelectShowCountMonthlyBarChart,
  tags: ["autodocs"],
  argTypes: {
    chartData: {
      control: false,
      description: "차트에 사용되는 데이터입니다.",
    },
    id: {
      control: false,
      description: "셀렉트 차트의 id 값입니다.",
    },
    count: {
      control: "number",
      description: "분석에 사용된 채용 공고의 수입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<ISelectShowCountBarChartProps> = {
  args: {
    id: "select-chart-default",
    chartData: dummyChartDatas,
    count: 1000,
  },
  decorators: (story) => <ReduxProvider>{story()}</ReduxProvider>,
};
