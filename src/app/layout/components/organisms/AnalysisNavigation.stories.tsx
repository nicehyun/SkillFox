import { Meta, StoryObj } from "@storybook/react";
import AnalysisNavigation from "./AnalysisNavigation";
import ReduxProvider from "@/redux/utils/ReduxProvider";
import AnalysisNavigationController from "./AnalysisNavigationController";

const meta: Meta = {
  title: "Layout/Organisms/AnalysisNavigation",
  component: AnalysisNavigation,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => (
    <ReduxProvider>
      <AnalysisNavigationController />
      {story()}
    </ReduxProvider>
  ),
};
