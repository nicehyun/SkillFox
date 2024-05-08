export const dynamic = "force-dynamic";

import { skillFenquencyAPI } from "@/app/[classification]/skillFrequency/apis/skillFenquencyAPI";
import SkillFrequencySection from "@/app/[classification]/skillFrequency/components/organisms/SkillFrequencySection";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { translateClassification } from "@/app/common/utils/translate";
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export function generateStaticParams() {
  return [
    { classification: "FE" },
    { classification: "BE" },
    { classification: "DE" },
    { classification: "DA" },
    { classification: "ML" },
  ];
}

export default async function SkillFrequencyPage({
  params,
}: {
  params: { classification: string };
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

  const translatedClassification = translateClassification(classification);

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
