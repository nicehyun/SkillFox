export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { experienceRangeFenquencyAPI } from "./apis/experienceRangeFenquencyAPI";
import EducationFenquencySection from "./components/organisms/ExperienceRangeFenquencySection";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { Metadata } from "next";
import { convertJobCodeToDescription } from "@/app/common/utils/classification";
import { Job, MonthlyChartData } from "@/app/common/types";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  const monthlyChartData =
    await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
      classification,
      0,
      20,
    );

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 경력별 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 경력별 자격 요건 기술 스택 분석`,
    keywords: [
      `${convertJobCodeToDescription(classification)}`,
      "채용 공고",
      "자격요건",
      "기술",
      "분석",
      "경력별",
      ...monthlyChartData.data.map(
        (chartData: MonthlyChartData) => chartData.name,
      ),
    ],
    alternates: {
      canonical: `/${classification}/experienceRangeFenquency`,
    },
  };
}

export default async function ExperienceRangeFenquencyPage({
  params,
}: {
  params: { classification: Job };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery({
    queryKey: ["experienceRangeFrequency", classification, 0, 20],
    queryFn: async () =>
      await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
        classification,
        0,
        20,
      ),
  });

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
