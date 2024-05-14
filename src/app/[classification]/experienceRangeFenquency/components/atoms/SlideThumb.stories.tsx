import { Meta, StoryObj } from "@storybook/react";
import SlideThumb, { ISlideThumbProps } from "./SlideThumb";

const meta: Meta<ISlideThumbProps> = {
  title: "ExperienceRangeFenquency/Atoms/SlideThumb",
  component: SlideThumb,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "왼쪽 margin과 위치의 절대값만 조정합니다.",
    },
    thumbPosition: {
      control: "radio",
      description: "thumb의 위치를 결정합니다.",
    },
    thumbValue: {
      control: "number",
      description: "thumb의 값입니다.",
    },
  },
  decorators: (story) => <div className="relative z-10 h-2">{story()}</div>,
};

export default meta;

export const LeftSlideThumb: StoryObj<ISlideThumbProps> = {
  args: {
    className: "-ml-1 left-0",
    thumbPosition: "left",
    thumbValue: 0,
  },
};

export const RightSlideThumb: StoryObj<ISlideThumbProps> = {
  args: {
    className: "-ml-3 right-0",
    thumbPosition: "right",
    thumbValue: 100,
  },
};
