import { Meta, StoryObj } from "@storybook/react";
import LogoDescription, { ILogoDescriptionProps } from "./LogoDescription";

const meta: Meta<ILogoDescriptionProps> = {
  title: "Layout/Atoms/LogoDescription",
  component: LogoDescription,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "애플리케이션 설명 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<ILogoDescriptionProps> = {
  args: {
    children: "Default Logo Description",
  },
};
