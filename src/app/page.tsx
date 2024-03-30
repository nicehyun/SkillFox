"use client";
import { useState } from "react";
import Radio from "./features/common/stories/Radio";

export default function Home() {
  const [selectedJobId, setSelectedJobId] = useState("");

  const handleSelectedJobIdChange = (id: string) => {
    setSelectedJobId(id);
  };

  const jobOptions = [
    { id: "job__fe", label: "Front-end" },
    { id: "job__be", label: "Back-end" },
  ];

  return (
    <fieldset className="relative overflow-hidden rounded-[5px] border-[1px] border-primary bg-white px-2 shadow">
      <legend className="absolute w-full px-2 py-2 text-large sm:text-small md:text-medium">
        분석하고 싶은 직업을 선택해주세요
      </legend>

      <ul className="mt-4 py-14">
        {jobOptions.map((job) => (
          <li className="mb-4" key={job.id}>
            <Radio
              id={job.id}
              label={job.label}
              name="job"
              color="primary"
              size="medium"
              value={job.id}
              checked={selectedJobId === job.id}
              onChange={() => handleSelectedJobIdChange(job.id)}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
