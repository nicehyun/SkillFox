import { Job } from "../types";

type JobDescription =
  | "프론트엔드"
  | "백엔드"
  | "데이터 엔지니어"
  | "데이터 분석가"
  | "머신러닝 엔지니어";

export const convertJobCodeToDescription = (job: Job): JobDescription => {
  const jobs: { key: Job; description: JobDescription }[] = [
    { key: "FE", description: "프론트엔드" },
    { key: "BE", description: "백엔드" },
    { key: "DE", description: "데이터 엔지니어" },
    { key: "DA", description: "데이터 분석가" },
    { key: "ML", description: "머신러닝 엔지니어" },
  ];

  const roleObj = jobs.find((r) => r.key === job);
  if (!roleObj) {
    throw new Error("Invalid role");
  }
  return roleObj.description;
};
