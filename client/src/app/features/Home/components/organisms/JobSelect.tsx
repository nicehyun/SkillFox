import { useState } from "react";
import Radio from "../../../common/components/atoms/Radio";
import { Color, IColorAndSizeProps, Size } from "@/app/features/common/types";
import { FaRegCircleCheck } from "react-icons/fa6";
import Icon from "@/app/features/common/components/atoms/Icon";

export interface IJobSelectProps extends IColorAndSizeProps {
  color?: Color;
  size?: Size;
}

const JobSelect = ({ color = "primary", size = "normal" }: IJobSelectProps) => {
  const [selectedJobId, setSelectedJobId] = useState("");

  const handleSelectedJobIdChange = (id: string) => {
    setSelectedJobId(id);
  };

  const jobOptions = [
    { id: "job__fe", label: "Front-end" },
    { id: "job__be", label: "Back-end" },
  ];
  return (
    <fieldset className="relative">
      <legend className="absolute flex w-full items-center py-2 text-large sm:text-small md:text-medium lg:text-medium">
        <Icon icon={<FaRegCircleCheck />} className="mr-2" /> 분석하고 싶은
        직업을 선택해주세요
      </legend>

      <ul className="mt-4 py-14">
        {jobOptions.map((job) => (
          <li className="mb-4" key={job.id}>
            <Radio
              id={job.id}
              label={job.label}
              name="job"
              color={color}
              size={size}
              value={job.id}
              checked={selectedJobId === job.id}
              onChange={() => handleSelectedJobIdChange(job.id)}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default JobSelect;
