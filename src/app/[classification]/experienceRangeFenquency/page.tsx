export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { experienceRangeFenquencyAPI } from "./apis/experienceRangeFenquencyAPI";
import EducationFenquencySection from "./components/organisms/ExperienceRangeFenquencySection";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { Metadata } from "next";
import { convertJobCodeToDescription } from "@/app/common/utils/classification";
import { Job } from "@/app/common/types";
import { creactMetaData } from "@/app/common/utils/metaData";

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

  const labels = monthlyChartData.labels ?? [];

  const metaData = creactMetaData({
    keywords: labels,
    classification,
    id: "experienceRangeFrequency",
  });

  return metaData;
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
