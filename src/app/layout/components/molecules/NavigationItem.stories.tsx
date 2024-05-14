import { Meta, StoryObj } from "@storybook/react";
import NavigationItem, { INavigationItemProps } from "./NavigationItem";

const meta: Meta<INavigationItemProps> = {
  title: "Layout/Molecules/NavigationItem",
  component: NavigationItem,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "link의 컨텐츠 값입니다.",
    },
    href: {
      control: false,
      description: "link의 href 값입니다.",
    },
    isActive: {
      control: "boolean",
      description: "aria-current 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<INavigationItemProps> = {
  args: {
    children: "Defalut Link",
    href: "",
    isActive: false,
  },
};
