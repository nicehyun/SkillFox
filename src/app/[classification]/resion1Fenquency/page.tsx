import { getQueryClient } from "@/tanstackQuery/utils/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { resionFenquencyAPI } from "./apis/resionFenquencyAPI";
import { translateClassification } from "@/app/common/utils/translate";
import AnlaysisNavigationProvider from "@/app/common/utils/AnlaysisNavigationProvider";
import ResionFrequencySection from "./components/organisms/ResionFrequencySection";

export default async function ResionFenquencyPage({
  params,
}: {
  params: { classification: string };
}) {
  const queryClient = getQueryClient();

  const { classification } = params;

  await queryClient.prefetchQuery({
    queryKey: ["regionFrequency", classification],

    queryFn: async () =>
      await resionFenquencyAPI.getResion1FenquencyAnalysis(classification),
  });

  const dehydratedState = dehydrate(queryClient);

  const translatedClassification = translateClassification(classification);

  if (!translatedClassification) {
    return;
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <AnlaysisNavigationProvider>
        <ResionFrequencySection />
      </AnlaysisNavigationProvider>
    </HydrationBoundary>
  );
}
