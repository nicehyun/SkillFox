import { Fragment } from "react";
import StepIndicator from "../atoms/StepIndicator";
import { IColorProps } from "../../types";
import { borderColorClasses } from "../../utils/classes";

export interface IStepNavigationProps extends IColorProps {
  stepLabels: string[];
  activeStep: number;
}

const StepNavigation = ({
  stepLabels,
  activeStep,
  color = "primary",
}: IStepNavigationProps) => {
  return (
    <ul className="flex items-center">
      {stepLabels.map((label, index) => {
        const isActiveStep = index === activeStep;
        return (
          <Fragment key={`stepper-navigation__${index}`}>
            <li
              aria-current={isActiveStep ? "step" : undefined}
              className="flex items-center text-small"
            >
              <StepIndicator
                isActive={isActiveStep}
                isCompleted={index < activeStep}
                stepNumber={index + 1}
                color={color}
              />
              {isActiveStep && (
                <h2
                  className={`${index === activeStep ? `font-bold text-black2` : ""} ml-2`}
                >
                  {label}
                </h2>
              )}
            </li>

            {index !== stepLabels.length - 1 && (
              <hr
                aria-hidden="true"
                className={`mx-[10px] flex-auto border-t-[1px] transition duration-500 ease-in-out ${index < activeStep ? borderColorClasses[color] : "border-gray2"}`}
              ></hr>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default StepNavigation;
