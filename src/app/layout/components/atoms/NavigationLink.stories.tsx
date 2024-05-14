import { Meta, StoryObj } from "@storybook/react";
import NavigationLink, { INavigationLinkProps } from "./NavigationLink";

const meta: Meta<INavigationLinkProps> = {
  title: "Layout/Atoms/NavigationLink",
  component: NavigationLink,
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

export const Default: StoryObj<INavigationLinkProps> = {
  args: {
    children: "Defalut Link",
    href: "",
    isActive: false,
  },
};
