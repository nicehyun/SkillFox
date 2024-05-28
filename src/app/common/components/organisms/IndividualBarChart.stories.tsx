import ReduxProvider from "@/redux/utils/ReduxProvider";
import IndividualBarChart, {
  IIndividualBarChartProps,
} from "./IndividualBarChart";
import { Meta, StoryObj } from "@storybook/react";
import {
  CommonBarChartData,
  ExcludeBarChartData,
  MonthlyChartData,
} from "../../types";

const dummyChartData: ExcludeBarChartData = {
  education: "무관",
  labels: [
    "react",
    "javascript",
    "typescript",
    "html5",
    "css 3",
    "css",
    "git",
    "vue.js",
    "html",
    "next.js",
    "aws",
    "vue",
    "java",
    "react native",
    "rest api",
    "ui",
    "redux",
    "node.js",
    "restful api",
    "next",
    "es6",
    "github",
    "ux",
    "webpack",
    "angular",
    "angularjs",
    "mysql",
    "docker",
    "spa",
    "figma",
    "graphql",
    "sass",
    "python",
    "jquery",
    "flutter",
    "ios",
    "c",
    "android os",
    "api",
    "jira",
    "react query",
    "node",
    "spring",
    "angular 2",
    "vuex",
    "php",
    "scss",
    "front",
    "recoil",
    "tailwindcss",
  ],
  datasets: [
    {
      label: "12월",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      backgroundColor: "#775DD0",
      stack: "previous",
    },
    {
      label: "1월",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      backgroundColor: "#FF4560",
      stack: "previous",
    },
    {
      label: "2월",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      backgroundColor: "#FEB019",
      stack: "previous",
    },
    {
      label: "3월",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ],
      backgroundColor: "#00E396",
      stack: "previous",
    },
    {
      label: "4월",
      data: [
        292, 241, 237, 151, 137, 124, 123, 107, 113, 92, 80, 70, 62, 58, 55, 58,
        57, 53, 50, 53, 47, 42, 48, 39, 34, 30, 31, 21, 23, 27, 20, 20, 23, 23,
        14, 21, 19, 19, 17, 18, 20, 18, 21, 19, 12, 17, 12, 13, 16, 14,
      ],
      backgroundColor: "#008FFB",
      stack: "previous",
    },
    {
      label: "5월",
      data: [
        439, 369, 348, 232, 215, 200, 197, 186, 170, 142, 117, 116, 98, 88, 87,
        84, 82, 81, 78, 77, 75, 73, 72, 62, 56, 47, 42, 40, 39, 36, 33, 33, 32,
        32, 32, 32, 30, 29, 27, 27, 27, 27, 26, 26, 25, 25, 24, 24, 24, 24,
      ],
      backgroundColor: "#F46036",
      stack: "current",
    },
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
