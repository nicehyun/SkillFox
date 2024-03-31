import { ReactNode } from "react";

export interface IStepContentProps {
  activeStep: number;
  stepContents: ReactNode[];
  className?: string;
}

const StepContent = ({
  activeStep,
  stepContents,
  className,
}: IStepContentProps) => {
  return (
    <>
      {stepContents.map((content, index) => (
        <div
          key={`stepper-content__${index}`}
          className={`relative mt-8 ${className} -opacity transition duration-500 ${index === activeStep ? "opacity-100" : "hidden opacity-0"}`}
        >
          {content}
        </div>
      ))}
    </>
  );
};

export default StepContent;
