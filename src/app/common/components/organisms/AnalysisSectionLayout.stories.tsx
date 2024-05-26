import { Meta, StoryObj } from "@storybook/react";
import AnalysisSectionLayout, {
  IAnalysisSectionLayoutProps,
} from "./AnalysisSectionLayout";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const meta: Meta<IAnalysisSectionLayoutProps> = {
  title: "Common/Organisms/AnalysisSectionLayout",
  component: AnalysisSectionLayout,
  argTypes: {
    analysisTitle: {
      control: "text",
      description: "분석 결과 섹션의 타이틀 값입니다.",
    },
    children: {
      control: false,
      description: "AnalysisSectionLayout의 하위 요소입니다.",
    },

    postingCount: {
      control: "number",
      description: "분석에 사용된 채용 공고의 수입니다.",
    },
    ToolTipIconSize: {
      control: "radio",
      defaultValue: "small",
      description: "툴팁 버튼의 사이즈를 결정합니다.",
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Defalut: StoryObj<IAnalysisSectionLayoutProps> = {
  args: {
    analysisTitle: "분석 유형 타이틀",
    postingCount: 1000,
    children: (
      <div className="border-[1px] border-black1 p-10">
        AnalysisSectionLayout의 하위 요소
      </div>
    ),
  },

  decorators: [(story) => <ReduxProvider>{story()}</ReduxProvider>],
};
