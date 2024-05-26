import { Meta, StoryObj } from "@storybook/react";
import LoadingBar, { ILoadingBarProps } from "./LoadingBar";

const meta: Meta<ILoadingBarProps> = {
  title: "Layout/Atoms/LoadingBar",
  component: LoadingBar,
  tags: ["autodocs"],
  argTypes: {
    animate: {
      control: "radio",
      description: "로딩바의 애니메이션 설정 값입니다.",
    },
    chartColor: {
      control: "radio",
      description: "로딩바의 색상 값입니다.",
    },
  },
  decorators: (story) => <ul>{story()}</ul>,
};

export default meta;

export const AnimateBar1: StoryObj<ILoadingBarProps> = {
  args: {
    animate: "animate-bar1",
    chartColor: "bg-previosMonthChart1",
  },
};

export const AnimateBar2: StoryObj<ILoadingBarProps> = {
  args: {
    animate: "animate-bar2",
    chartColor: "bg-previosMonthChart2",
  },
};

export const AnimateBar3: StoryObj<ILoadingBarProps> = {
  args: {
    animate: "animate-bar3",
    chartColor: "bg-previosMonthChart5",
  },
};
