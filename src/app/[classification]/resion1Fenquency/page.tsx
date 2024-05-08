export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { resionFenquencyAPI } from "./apis/resionFenquencyAPI";
import { translateClassification } from "@/app/common/utils/translate";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import ResionFrequencySection from "./components/organisms/ResionFrequencySection";

export function generateStaticParams() {
  return [
    { classification: "FE" },
    { classification: "BE" },
    { classification: "DE" },
    { classification: "DA" },
    { classification: "ML" },
  ];
}

export default async function ResionFenquencyPage({
  params,
}: {
  params: { classification: string };
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

  const translatedClassification = translateClassification(classification);

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
