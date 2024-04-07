import { skillFenquencyAPI } from "@/app/[classification]/skillFrequency/apis/skillFenquencyAPI";
import SkillFrequencySection from "@/app/[classification]/skillFrequency/components/organisms/SkillFrequencySection";
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";

export default async function SkillFrequencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery(["skillFrequency", classification], () =>
    skillFenquencyAPI.getSkillFenquencyAnalysis(classification),
  );

  return <SkillFrequencySection />;
}
