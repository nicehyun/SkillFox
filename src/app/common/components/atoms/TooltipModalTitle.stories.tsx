import { Meta, StoryObj } from "@storybook/react";
import TooltipModalTitle from "./TooltipModalTitle";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const meta: Meta = {
  title: "Common/Atoms/TooltipModalTitle",
  component: TooltipModalTitle,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: [(story) => <ReduxProvider>{story()}</ReduxProvider>],
};
