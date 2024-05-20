export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { experienceRangeFenquencyAPI } from "./apis/experienceRangeFenquencyAPI";
import EducationFenquencySection from "./components/organisms/ExperienceRangeFenquencySection";
import { translateClassification } from "@/app/common/utils/translate";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { Metadata } from "next";
import { convertJobCodeToDescription } from "@/app/common/utils/classification";
import { Job } from "@/app/common/types";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 경력별 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 경력별 자격 요건 기술 스택 분석`,
  };
}

export default async function IndustryFrequencyPage({
  params,
}: {
  params: { classification: string };
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

  const translatedClassification = translateClassification(classification);

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
