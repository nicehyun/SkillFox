"use client";

import Button from "@/app/common/components/atoms/Button";
import { Range } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import { useExperienceRange } from "../../hooks/useExperienceRange";
import SkeletonUI from "@/app/common/components/atoms/SkeletonUI";
import dynamic from "next/dynamic";
import ExperienceRangeTitle from "../atoms/ExperienceRangeTitle";
import SelectedExperienceRange from "../atoms/SelectedExperienceRange";

const DynamicDualRangeSliderLayout = dynamic(
  () => import("./DualRangeSliderLayout"),
  {
    ssr: false,
    loading: () => <SkeletonUI className="m:flex-grow mt-8 w-full" />,
  },
);

export interface IExperienceRangeContollerProps {
  onClickExperienceRangeApply: ({ min, max }: Range) => void;
  isDisabled: boolean;
}

const ExperienceRangeContoller = ({
  onClickExperienceRangeApply,
  isDisabled,
}: IExperienceRangeContollerProps) => {
  const {
    experienceCurrentMax,
    experienceCurrentMin,
    onChangeExperienceMaxValue,
    onChangeExperienceMinValue,
  } = useExperienceRange({ maxValue: 20, minValue: 0 });

  return (
    <>
      <ExperienceRangeTitle />

      <div className="flex h-[60px] items-center">
        <div className="flex w-[400px] grow-0 flex-col sm:w-full md:w-full">
          <DynamicDualRangeSliderLayout
            min={0}
            max={20}
            currentMin={experienceCurrentMin}
            currentMax={experienceCurrentMax}
            onChangeMinValue={onChangeExperienceMinValue}
            onChangeMaxValue={onChangeExperienceMaxValue}
            className="mt-8 w-full"
          />

          <SelectedExperienceRange
            experienceCurrentMax={experienceCurrentMax}
            experienceCurrentMin={experienceCurrentMin}
          />
        </div>

        <span className="ml-2 inline-block w-10">
          <Button
            id="update-experience-range"
            content="적용"
            disabled={isDisabled}
            onClick={() =>
              onClickExperienceRangeApply({
                max: experienceCurrentMax,
                min: experienceCurrentMin,
              })
            }
          />
        </span>
      </div>
    </>
  );
};

export default ExperienceRangeContoller;
