export interface ISelectedExperienceRangeProps {
  experienceCurrentMin: number;
  experienceCurrentMax: number;
}

const SelectedExperienceRange = ({
  experienceCurrentMax,
  experienceCurrentMin,
}: ISelectedExperienceRangeProps) => {
  return (
    <p
      role="text"
      aria-label={`경력 범위: ${experienceCurrentMin}년에서 ${experienceCurrentMax}년`}
      className="mt-2 w-full sm:text-small md:text-small"
    >
      <span>🚀 경력 : </span>
      <strong>{experienceCurrentMin}</strong>
      {" ~ "}
      <strong>{experienceCurrentMax}</strong>
    </p>
  );
};

export default SelectedExperienceRange;
