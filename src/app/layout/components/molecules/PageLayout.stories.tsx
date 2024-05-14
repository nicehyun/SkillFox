import { Meta, StoryObj } from "@storybook/react";
import PageLayout, { IPageLayoutProps } from "./PageLayout";

const meta: Meta<IPageLayoutProps> = {
  title: "Layout/Molecules/PageLayout",
  component: PageLayout,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "페이지 레이아웃의 하위 요소입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<IPageLayoutProps> = {
  args: {
    children: <div className="h-[200px] w-full bg-primary"></div>,
  },
};
