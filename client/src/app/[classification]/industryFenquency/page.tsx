import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient";
import IndustryFrequencySection from "./components/organisms/IndustryFrequencySection";
import { industryFenquencyAPI } from "./apis/industryFenquencyAPI";
import { translateClassification } from "@/app/common/utils/translate";

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

  const translatedClassification = translateClassification(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <Hydrate state={dehydratedState}>
      <IndustryFrequencySection
        postingClassification={translatedClassification}
      />
    </Hydrate>
  );
}
