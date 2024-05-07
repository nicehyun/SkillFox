import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient";
import { experienceRangeFenquencyAPI } from "./apis/experienceRangeFenquencyAPI";
import EducationFenquencySection from "./components/organisms/ExperienceRangeFenquencySection";
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
    ["experienceRangeFrequency", classification, 0, 20],
    async () =>
      await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
        classification,
        0,
        20,
      ),
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
