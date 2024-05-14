import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import ReduxProvider from "@/redux/utils/ReduxProvider";
import AnalysisNavigation from "./AnalysisNavigation";

const meta: Meta = {
  title: "Layout/Organisms/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => (
    <ReduxProvider>
      {story()}
      <AnalysisNavigation />
    </ReduxProvider>
  ),
};
