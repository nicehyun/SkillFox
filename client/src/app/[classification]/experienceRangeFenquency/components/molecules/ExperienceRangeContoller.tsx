"use client";

import Button from "@/app/common/components/atoms/Button";
import { Range } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import { useExperienceRange } from "../../hooks/useExperienceRange";
import dynamic from "next/dynamic";
import SkeletonUI from "@/app/common/components/atoms/SkeletonUI";

const DynamicDualRangeSlider = dynamic(() => import("./DualRangeSlider"), {
  ssr: false,
  loading: () => (
    <SkeletonUI className="m:flex-grow mt-8 w-[500px] md:flex-grow" />
  ),
});

interface IExperienceRangeContollerProps {
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
      <h3 className="text-small text-gray1">경력 범위 조절</h3>

      <div className="flex h-[60px] items-center">
        <div className="flex grow-0 flex-col">
          <DynamicDualRangeSlider
            min={0}
            max={20}
            currentMin={experienceCurrentMin}
            currentMax={experienceCurrentMax}
            onChangeMinValue={onChangeExperienceMinValue}
            onChangeMaxValue={onChangeExperienceMaxValue}
            className="mt-8 flex w-[400px] items-center justify-center sm:w-full md:w-full"
          />
          <p className="mt-2 w-full sm:text-small md:text-small">
            <span>🚀 경력 : </span>
            <strong>{experienceCurrentMin}</strong>
            {" ~ "}
            <strong>{experienceCurrentMax}</strong>
          </p>
        </div>

        <span className="ml-2 inline-block w-10">
          <Button
            id="update-experience-range"
            content="적용"
            color="gray"
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
