import { Job } from "../types";
import { convertJobCodeToDescription } from "./classification";

interface ICreactMetaDataProps {
  id: string;
  classification: Job;
  keywords: string[];
}

export const creactMetaData = ({
  id,
  keywords,
  classification,
}: ICreactMetaDataProps) => {
  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 자격 요건 기술 스택 분석`,
    keywords: [
      `${convertJobCodeToDescription(classification)}`,
      "채용 공고",
      "자격요건",
      "기술",
      "분석",
      ...keywords,
    ],
    alternates: {
      canonical: `/${classification}/${id}`,
    },
  };
};
