"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Stepper from "../../../common/components/organisms/Stepper";
import JobSelect from "./JobSelect";
import { nextStep, selectHomeStepState } from "@/redux/features/homeSlice";
import SkillAnalysisResult from "./SkillAnalysisResult";
import { IColorAndSizeProps } from "@/app/features/common/types";
import BubbleChartResult from "./SkillCombinationChart";

const SkillAnalysisStepper = ({ color, size }: IColorAndSizeProps) => {
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector(selectHomeStepState);

  const stepLabels = ["직업 선택", "직업 분석"];

  const stepContents = [
    <JobSelect size={size} color={color} />,
    <SkillAnalysisResult />,
    <BubbleChartResult />,
  ];

  const nextStepButtonContents = ["분석 하기", "test"];
  return (
    <Stepper
      color={color}
      stepperType="job"
      activeStep={activeStep}
      stepContents={stepContents}
      stepLabels={stepLabels}
      NextStepButtonContents={nextStepButtonContents}
      onClickNextStepButton={() => dispatch(nextStep())}
      isShowFinalContentbutton={false}
    />
  );
};

export default SkillAnalysisStepper;
