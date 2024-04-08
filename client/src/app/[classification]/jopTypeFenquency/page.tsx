import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient";
import { jopTypeFenquencyAPI } from "./apis/jopTypeFenquencyAPI";
import JopTypeFrequencySection from "./components/organisms/JopTypeFrequencySection";
import { translateClassification } from "@/app/features/common/utils/translate";

export default async function JopTypeFenquencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery(
    ["jobTypeFrequency", classification],
    async () =>
      await jopTypeFenquencyAPI.getJopTypeFenquencyAnalysis(classification),
  );

  const dehydratedState = dehydrate(queryClient);

  const translatedClassification = translateClassification(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <Hydrate state={dehydratedState}>
      <JopTypeFrequencySection
        postingClassification={translatedClassification}
      />
    </Hydrate>
  );
}