import { Meta, StoryObj } from "@storybook/react";
import SelectShowCountMonthlyBarChart, {
  ISelectShowCountBarChartProps,
} from "./SelectShowCountMonthlyBarChart";
import { CommonBarChartData } from "../../types";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const dummyData = {
  education: "고등학교졸업 이상(졸업예정자 가능)",
  labels: [
    "seo",
    "c",
    "swift",
    "objective-c",
    "rest api",
    "oracle",
    "java",
    "next",
    "git",
    "es6",
    "ssr",
    "react",
    "typescript",
    "amazon ec2",
    "react native",
    "objective",
    "next.js",
  ],
  datasets: [
    {
      label: "12월",
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      backgroundColor: "#775DD0",
      stack: "previous",
    },
    {
      label: "1월",
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      backgroundColor: "#FF4560",
      stack: "previous",
    },
    {
      label: "2월",
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      backgroundColor: "#FEB019",
      stack: "previous",
    },
    {
      label: "3월",
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      backgroundColor: "#00E396",
      stack: "previous",
    },
    {
      label: "4월",
      data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      backgroundColor: "#008FFB",
      stack: "previous",
    },
    {
      label: "5월",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#F46036",
      stack: "current",
    },
  ],
} as CommonBarChartData;

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
  },
};

export default meta;

export const Default: StoryObj<ISelectShowCountBarChartProps> = {
  args: {
    id: "select-chart-default",
    chartData: dummyData,
  },
  decorators: (story) => <ReduxProvider>{story()}</ReduxProvider>,
};
