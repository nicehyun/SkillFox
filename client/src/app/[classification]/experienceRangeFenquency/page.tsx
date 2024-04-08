import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient";
import { experienceRangeFenquencyAPI } from "./apis/experienceRangeFenquencyAPI";
import EducationFenquencySection from "./components/organisms/ExperienceRangeFenquencySection";
import { translateClassification } from "@/app/features/common/utils/translate";

export default async function IndustryFrequencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery(
    ["experienceRangeFrequency", classification],
    async () =>
      await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
        classification,
      ),
  );

  const dehydratedState = dehydrate(queryClient);

  const translatedClassification = translateClassification(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <Hydrate state={dehydratedState}>
      <EducationFenquencySection
        postingClassification={translatedClassification}
      />
    </Hydrate>
  );
}
