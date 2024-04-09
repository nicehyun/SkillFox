import { skillFenquencyAPI } from "@/app/[classification]/skillFrequency/apis/skillFenquencyAPI";
import SkillFrequencySection from "@/app/[classification]/skillFrequency/components/organisms/SkillFrequencySection";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { translateClassification } from "@/app/common/utils/translate";
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import Hydrate from "@/tanstackQuery/utils/hydrateOnClient";

import { dehydrate } from "@tanstack/react-query";

export default async function SkillFrequencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery(
    ["skillFrequency", classification],
    async () =>
      await skillFenquencyAPI.getSkillFenquencyAnalysis(classification),
  );

  const dehydratedState = dehydrate(queryClient);

  const translatedClassification = translateClassification(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <Hydrate state={dehydratedState}>
      <AnlaysisNavigationProvider>
        <SkillFrequencySection
          postingClassification={translatedClassification}
        />
      </AnlaysisNavigationProvider>
    </Hydrate>
  );
}
