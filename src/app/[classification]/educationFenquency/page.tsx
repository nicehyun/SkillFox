export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { educationFenquencyAPI } from "./apis/educationFenquencyAPI";
import EducationFenquencySection from "./components/organisms/EducationFenquencySection";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { Job } from "@/app/common/types";
import { Metadata } from "next";
import {
  convertJobCodeToDescription,
  createJobClassificationArray,
} from "@/app/common/utils/classification";
import { extractAllNamesFromChartData } from "@/app/common/utils/charData";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  const monthlyChartData =
    await educationFenquencyAPI.getEducationFenquencyAnalysis(classification);

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 학력별 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 학력별 자격 요건 기술 스택 분석`,
    keywords: [
      `${convertJobCodeToDescription(classification)}`,
      "채용 공고",
      "자격요건",
      "기술",
      "분석",
      "학력별",
      ...extractAllNamesFromChartData(monthlyChartData.data),
    ],
    alternates: {
      canonical: `/${classification}/educationFenquency`,
    },
  };
}

export function generateStaticParams() {
  return createJobClassificationArray();
}

export default async function IndustryFrequencyPage({
  params,
}: {
  params: { classification: Job };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery({
    queryKey: ["educationFrequency", classification],
    queryFn: async () =>
      await educationFenquencyAPI.getEducationFenquencyAnalysis(classification),
  });

  const classifications = ["FE", "BE", "DE", "DA", "ML"];
  const dataPromises = classifications.map(async (classification) => {
    return {
      classification,
      data: await educationFenquencyAPI.getEducationFenquencyAnalysis(
        classification,
      ),
    };
  });

  await Promise.all(dataPromises);

  const translatedClassification = convertJobCodeToDescription(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnlaysisNavigationProvider>
        <EducationFenquencySection />
      </AnlaysisNavigationProvider>
    </HydrationBoundary>
  );
}
