import { Meta, StoryObj } from "@storybook/react";
import NavigationMenu, { INavigationMenuProps } from "./NavigationMenu";

const meta: Meta<INavigationMenuProps> = {
  title: "Layout/Molecules/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
    classification: {
      control: "text",
      description: "분석 직무의 값으로, href, isActive에 사용됩니다.",
    },
    currentPath: {
      control: false,
      description: "현재 path의 값으로, isActive에 사용됩니다.",
    },
    links: {
      control: false,
      description: "link 콘텐츠와 href의 값들입니다.",
    },
  },
};

export default meta;

const dummyLinks = [
  { href: `/`, content: "Default link1" },
  { href: `/`, content: "Default link2" },
  { href: `/`, content: "Default link3" },
  { href: `/`, content: "Default link4" },
];

export const Default: StoryObj<INavigationMenuProps> = {
  args: {
    classification: "Default",
    currentPath: "",
    links: dummyLinks,
  },
};
