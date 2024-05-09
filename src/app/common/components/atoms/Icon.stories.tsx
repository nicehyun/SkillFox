import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Icon, { IIconProps } from "./Icon";
import { BsFillAlarmFill } from "react-icons/bs"; // 예시로 사용할 아이콘

export default {
  title: "Common/Atoms/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "normal", "large"] },
      description: "small : 20 x 20, normal : 24 x 24, large : 26 x 26",
    },
    className: {
      control: "text",
    },
    icon: {
      description: "렌더링할 react-icons입니다.",
      table: {
        type: { summary: "ReactElement" },
        defaultValue: { summary: "None" },
      },
      control: false,
    },
  },
} as Meta<IIconProps>;

export const Small: StoryObj<IIconProps> = {
  args: {
    icon: <BsFillAlarmFill />,
    size: "small",
    className: "",
  },
  storyName: "Small Icon",
};

export const Normal: StoryObj<IIconProps> = {
  args: {
    icon: <BsFillAlarmFill />,
    size: "normal",
    className: "",
  },
  storyName: "Normal Icon",
};

export const Large: StoryObj<IIconProps> = {
  args: {
    icon: <BsFillAlarmFill />,
    size: "large",
    className: "",
  },
  storyName: "Large Icon",
};
