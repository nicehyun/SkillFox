import { Meta, StoryObj } from "@storybook/react";
import AnalysisSectionTitle, {
  IAnalysisSectionTitleProps,
} from "./AnalysisSectionTitle";

const meta: Meta<IAnalysisSectionTitleProps> = {
  title: "Common/Atoms/AnalysisSectionTitle",
  component: AnalysisSectionTitle,
  argTypes: {
    title: {
      control: "text",
      description: "분석 결과 섹션의 타이틀 값입니다.",
    },
    className: {
      control: "text",
      description: "margin만 조절합니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<IAnalysisSectionTitleProps> = {
  args: {
    title: "테스트 타이틀",
    className: "",
  },
};
