import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";

import { industryFenquencyAPI } from "./apis/industryFenquencyAPI";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient";
import IndustryFrequencySection from "./components/organisms/IndustryFrequencySection";

export default async function IndustryFrequencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery(
    ["industryFrequency", classification],
    async () =>
      await industryFenquencyAPI.getIndustryFenquencyAnalysis(classification),
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <IndustryFrequencySection />
    </Hydrate>
  );
}
