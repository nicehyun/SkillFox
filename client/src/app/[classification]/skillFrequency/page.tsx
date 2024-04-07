import { skillFenquencyAPI } from "@/app/[classification]/skillFrequency/apis/skillFenquencyAPI";
import SkillFrequencySection from "@/app/[classification]/skillFrequency/components/organisms/SkillFrequencySection";
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

  return (
    <Hydrate state={dehydratedState}>
      <SkillFrequencySection />
    </Hydrate>
  );
}
