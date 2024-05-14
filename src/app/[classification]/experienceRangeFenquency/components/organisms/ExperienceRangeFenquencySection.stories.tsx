import { Meta, StoryObj } from "@storybook/react";
import Providers from "@/app/common/utils/Providers";
import ExperienceRangeFenquencySection from "./ExperienceRangeFenquencySection";

const meta: Meta = {
  title: "ExperienceRangeFenquency/Organisms/ExperienceRangeFenquencySection",
  component: ExperienceRangeFenquencySection,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => <Providers>{story()}</Providers>,
};
