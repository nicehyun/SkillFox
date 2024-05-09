import { Meta, StoryObj } from "@storybook/react";
import ChartLayout, { IChartLayoutProps } from "./ChartLayout";

const meta: Meta<IChartLayoutProps> = {
  title: "Common/Atoms/ChartLayout",
  component: ChartLayout,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: <div>Sample Chart Content</div>,
  },
};
