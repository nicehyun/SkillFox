export const dynamic = "force-dynamic";

import { skillFenquencyAPI } from "@/app/[classification]/skillFrequency/apis/skillFenquencyAPI";
import SkillFrequencySection from "@/app/[classification]/skillFrequency/components/organisms/SkillFrequencySection";
import { Job } from "@/app/common/types";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import { convertJobCodeToDescription } from "@/app/common/utils/classification";
import { translateClassification } from "@/app/common/utils/translate";
import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { classification: Job };
}): Promise<Metadata> {
  const classification = params.classification;

  return {
    title: `${convertJobCodeToDescription(classification)} 채용공고 기술 빈도 분석`,
    description: `${convertJobCodeToDescription(classification)} 채용공고 자격 요건 기술 스택 분석`,
  };
}

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
