export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { educationFenquencyAPI } from "./apis/educationFenquencyAPI";
import EducationFenquencySection from "./components/organisms/EducationFenquencySection";
import { translateClassification } from "@/app/common/utils/translate";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { Job } from "@/app/common/types";
import { Metadata } from "next";
import {
  convertJobCodeToDescription,
  createJobClassificationArray,
} from "@/app/common/utils/classification";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 학력별 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 학력별 자격 요건 기술 스택 분석`,
  };
}

export function generateStaticParams() {
  return createJobClassificationArray();
}

export default async function IndustryFrequencyPage({
  params,
}: {
  params: { classification: string };
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
