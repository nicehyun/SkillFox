import ReduxProvider from "@/redux/utils/ReduxProvider";
import IndividualBarChart, {
  IIndividualBarChartProps,
} from "./IndividualBarChart";
import { Meta, StoryObj } from "@storybook/react";
import { MonthlyChartData } from "../../types";

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

const meta: Meta<IIndividualBarChartProps> = {
  title: "Common/Organisms/IndividualBarChart",
  component: IndividualBarChart,
  tags: ["autodocs"],
  argTypes: {
    chartData: {
      control: false,
      description: "차트에 사용되는 데이터입니다.",
    },
    chartTitle: {
      control: "text",
      description: "개별 분석 결과의 타이틀입니다.",
    },
    className: {
      control: "text",
      description: "margin만 결정합니다.",
    },
    count: {
      control: "number",
      description: "분석에 사용된 채용 공고의 수입니다.",
    },
    id: {
      control: false,
      description: "개별 차트의 id 값입니다.",
    },
  },
};

export default meta;

export const Defalut: StoryObj<IIndividualBarChartProps> = {
  args: {
    chartData: dummyChartDatas,
    chartTitle: "개별 차트 타이틀",
    className: "",
    count: 1000,
    id: "individual",
  },
  decorators: (story) => <ReduxProvider>{story()}</ReduxProvider>,
};
