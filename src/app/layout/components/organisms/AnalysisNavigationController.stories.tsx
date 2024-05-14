import { Meta, StoryObj } from "@storybook/react";
import ReduxProvider from "@/redux/utils/ReduxProvider";
import AnalysisNavigationController from "./AnalysisNavigationController";

const meta: Meta = {
  title: "Layout/Organisms/AnalysisNavigationController",
  component: AnalysisNavigationController,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => <ReduxProvider>{story()}</ReduxProvider>,
};
