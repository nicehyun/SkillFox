import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { educationFenquencyAPI } from "./apis/educationFenquencyAPI";
import EducationFenquencySection from "./components/organisms/EducationFenquencySection";
import { translateClassification } from "@/app/common/utils/translate";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";

export default async function IndustryFrequencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery(
    ["educationFrequency", classification],
    async () =>
      await educationFenquencyAPI.getEducationFenquencyAnalysis(classification),
  );

  const dehydratedState = dehydrate(queryClient);

  const translatedClassification = translateClassification(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <Hydrate state={dehydratedState}>
      <AnlaysisNavigationProvider>
        <EducationFenquencySection />
      </AnlaysisNavigationProvider>
    </Hydrate>
  );
}
