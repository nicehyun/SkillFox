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
import { creactMetaData } from "@/app/common/utils/metaData";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  const monthlyChartData =
    await resionFenquencyAPI.getResion1FenquencyAnalysis(classification);

  const labels = monthlyChartData.chartData
    .map((data) => data.labels ?? "")
    .flat();

  const metaData = creactMetaData({
    keywords: labels,
    classification,
    id: "resion1Fenquency",
  });

  return metaData;
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
