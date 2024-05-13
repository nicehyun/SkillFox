import { Meta, StoryObj } from "@storybook/react";
import TooltipModalPageController from "./TooltipModalPageController";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const meta: Meta = {
  title: "Common/Molecules/TooltipModalPageController",
  component: TooltipModalPageController,
  tags: ["autodocs"],
};

export default meta;
export const Default: StoryObj<typeof meta> = {
  decorators: [(story) => <ReduxProvider>{story()}</ReduxProvider>],
};
