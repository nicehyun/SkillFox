import { ReactNode } from "react";
import StepNavigation from "./StepNavigation";
import StepContent from "../molecules/StepContent";
import { Color, IColorProps } from "../../types";
import Button from "../atoms/Button";

export interface IStepperProps extends IColorProps {
  stepperType: string;
  activeStep: number;
  stepLabels: string[];
  stepContents: ReactNode[];
  NextStepButtonContents: string[];
  onClickNextStepButton: () => void;
  isShowFinalContentbutton?: boolean;
}

export default function Stepper({
  color = "primary",
  activeStep,
  stepContents,
  stepLabels,
  onClickNextStepButton,
}: IStepperProps) {
  return (
    <article className="mx-auto max-w-[1000px]">
      <header>
        <StepNavigation
          color={color}
          activeStep={activeStep}
          stepLabels={stepLabels}
        />
      </header>

      <section>
        <StepContent activeStep={activeStep} stepContents={stepContents} />

        <Button
          id={`stepper-button__next`}
          className="mt-20"
          onClick={onClickNextStepButton}
          content="분석"
          color={color}
        />
      </section>
    </article>
  );
}
