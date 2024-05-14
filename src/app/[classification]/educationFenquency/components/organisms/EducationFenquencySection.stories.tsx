import { Meta, StoryObj } from "@storybook/react";
import EducationFenquencySection from "./EducationFenquencySection";
import Providers from "@/app/common/utils/Providers";

const meta: Meta = {
  title: "EducationFenquency/Organisms/EducationFenquencySection",
  component: EducationFenquencySection,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  decorators: (story) => <Providers>{story()}</Providers>,
};
