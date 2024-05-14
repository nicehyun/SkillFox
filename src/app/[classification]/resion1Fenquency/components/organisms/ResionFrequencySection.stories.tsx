import { Meta, StoryObj } from "@storybook/react";
import Providers from "@/app/common/utils/Providers";
import ResionFrequencySection from "./ResionFrequencySection";

const meta: Meta = {
  title: "ResionFrequency/Organisms/ResionFrequencySection",
  component: ResionFrequencySection,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => <Providers>{story()}</Providers>,
};
