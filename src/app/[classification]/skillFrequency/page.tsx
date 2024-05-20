export const dynamic = "force-dynamic";

import { skillFenquencyAPI } from "@/app/[classification]/skillFrequency/apis/skillFenquencyAPI";
import SkillFrequencySection from "@/app/[classification]/skillFrequency/components/organisms/SkillFrequencySection";
import { Job, MonthlyChartData } from "@/app/common/types";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import {
  convertJobCodeToDescription,
  createJobClassificationArray,
} from "@/app/common/utils/classification";
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  const monthlyChartData =
    await skillFenquencyAPI.getSkillFenquencyAnalysis(classification);

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 자격 요건 기술 스택 분석`,
    keywords: [
      `${convertJobCodeToDescription(classification)}`,
      "채용 공고",
      "자격요건",
      "기술",
      "분석",
      ...monthlyChartData.data.map(
        (chartData: MonthlyChartData) => chartData.name,
      ),
    ],
  };
}

export function generateStaticParams() {
  return createJobClassificationArray();
}

export default async function SkillFrequencyPage({
  params,
}: {
  params: { classification: Job };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery({
    queryKey: ["skillFrequency", classification],
    queryFn: async () =>
      await skillFenquencyAPI.getSkillFenquencyAnalysis(classification),
  });

  const classifications = ["FE", "BE", "DE", "DA", "ML"];
  const dataPromises = classifications.map(async (classification) => {
    return {
      classification,
      data: await skillFenquencyAPI.getSkillFenquencyAnalysis(classification),
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
        <SkillFrequencySection />
      </AnlaysisNavigationProvider>
    </HydrationBoundary>
  );
}
