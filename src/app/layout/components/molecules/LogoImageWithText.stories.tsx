import { Meta, StoryObj } from "@storybook/react";
import LogoImageWithText, {
  ILogoImageWithTextProps,
} from "./LogoImageWithText";

const meta: Meta<ILogoImageWithTextProps> = {
  title: "Layout/Molecules/LogoImageWithText",
  component: LogoImageWithText,
  tags: ["autodocs"],
  argTypes: {
    logoDescription: {
      control: "text",
      description: "애플리케이션 설명 값입니다.",
    },
    logoText: {
      control: "text",
      description: "logo 글자 값입니다.",
    },
  },
};

export default meta;

export const Default: StoryObj<ILogoImageWithTextProps> = {
  args: {
    logoDescription: "Defalut Logo Image With Text",
    logoText: "Defalut Logo",
  },
};
