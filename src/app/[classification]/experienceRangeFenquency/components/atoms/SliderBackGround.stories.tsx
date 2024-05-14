import { Meta, StoryObj } from "@storybook/react";
import SliderBackGround from "./SliderBackGround";

const meta: Meta = {
  title: "ExperienceRangeFenquency/Atoms/SliderBackGround",
  component: SliderBackGround,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => <div className="relative z-10  h-2">{story()}</div>,
};
