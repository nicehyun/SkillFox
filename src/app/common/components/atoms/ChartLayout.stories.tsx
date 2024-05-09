import { Meta, StoryObj } from "@storybook/react";
import ChartLayout, { IChartLayoutProps } from "./ChartLayout";

const meta: Meta<IChartLayoutProps> = {
  title: "Common/Atoms/ChartLayout",
  component: ChartLayout,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Sample Chart Content</div>,
  },
};
