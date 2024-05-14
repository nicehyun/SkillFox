import { Meta, StoryObj } from "@storybook/react";
import Providers from "@/app/common/utils/Providers";
import SkillFrequencySection from "./SkillFrequencySection";

const meta: Meta = {
  title: "SkillFrequency/Organisms/SkillFrequencySection",
  component: SkillFrequencySection,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => <Providers>{story()}</Providers>,
};
