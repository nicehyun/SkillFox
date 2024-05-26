export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { resionFenquencyAPI } from "./apis/resionFenquencyAPI";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import ResionFrequencySection from "./components/organisms/ResionFrequencySection";
import { Metadata } from "next";
import { Job } from "@/app/common/types";
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
    await resionFenquencyAPI.getResion1FenquencyAnalysis(classification);

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 지역별 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 지역별 자격 요건 기술 스택 분석`,
    keywords: [
      `${convertJobCodeToDescription(classification)}`,
      "채용 공고",
      "자격요건",
      "기술",
      "분석",
      "지역별",
      ...extractAllNamesFromChartData(monthlyChartData.data),
    ],
    alternates: {
      canonical: `/${classification}/resion1Fenquency`,
    },
  };
}

export function generateStaticParams() {
  return createJobClassificationArray();
}

export default async function ResionFenquencyPage({
  params,
}: {
  params: { classification: Job };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery({
    queryKey: ["regionFrequency", classification],

    queryFn: async () =>
      await resionFenquencyAPI.getResion1FenquencyAnalysis(classification),
  });

  const classifications = ["FE", "BE", "DE", "DA", "ML"];
  const dataPromises = classifications.map(async (classification) => {
    return {
      classification,
      data: await resionFenquencyAPI.getResion1FenquencyAnalysis(
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
        <ResionFrequencySection />
      </AnlaysisNavigationProvider>
    </HydrationBoundary>
  );
}
