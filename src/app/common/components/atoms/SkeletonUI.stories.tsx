import { Meta, StoryObj } from "@storybook/react";
import SkeletonUI, { ISkeletonUiProps } from "./SkeletonUI";

const meta: Meta<ISkeletonUiProps> = {
  title: "Common/Atoms/SkeletonUI",
  component: SkeletonUI,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "className으로 너비를 지정합니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<ISkeletonUiProps> = {
  args: {
    className: "w-full",
  },
  storyName: "Default SkeletonUI",
};
