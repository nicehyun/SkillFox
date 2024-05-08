export const dynamic = "force-dynamic";

import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { educationFenquencyAPI } from "./apis/educationFenquencyAPI";
import EducationFenquencySection from "./components/organisms/EducationFenquencySection";
import { translateClassification } from "@/app/common/utils/translate";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";

export function generateStaticParams() {
  return [
    { classification: "FE" },
    { classification: "BE" },
    { classification: "DE" },
    { classification: "DA" },
    { classification: "ML" },
  ];
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
