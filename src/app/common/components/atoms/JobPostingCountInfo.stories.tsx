import { Meta, StoryObj } from "@storybook/react";
import JobPostingCountInfo, {
  IJobPostingCountInfoProps,
} from "./JobPostingCountInfo";

const meta: Meta<IJobPostingCountInfoProps> = {
  title: "Common/Atoms/JobPostingCountInfo",
  component: JobPostingCountInfo,
  argTypes: {
    postingCount: {
      control: "number",
      description: "분석에 사용된 채용 공고의 수입니다.",
    },
    className: { control: "text", description: "margin만 조절합니다" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<IJobPostingCountInfoProps> = {
  args: {
    postingCount: 1000,
    className: "",
  },
};
