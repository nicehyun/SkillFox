import { Meta, StoryObj } from "@storybook/react";
import LoadingBars from "./LoadingBars";

const meta: Meta = {
  title: "Layout/Molecules/LoadingBar",
  component: LoadingBars,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
