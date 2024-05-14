import { Meta, StoryObj } from "@storybook/react";
import LogoText, { ILogoTextProps } from "./LogoText";

const meta: Meta<ILogoTextProps> = {
  title: "Layout/Atoms/LogoText",
  component: LogoText,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "logo 글자 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<ILogoTextProps> = {
  args: {
    children: "Default Logo",
  },
};
