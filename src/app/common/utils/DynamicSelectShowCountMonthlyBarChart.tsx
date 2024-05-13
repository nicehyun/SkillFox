import dynamic from "next/dynamic";
import SkeletonShowCountMonthlyBarChart from "../components/organisms/SkeletonShowCountMonthlyBarChart";

const DynamicSelectShowCountMonthlyBarChart = dynamic(
  () =>
    import("@/app/common/components/organisms/SelectShowCountMonthlyBarChart"),
  {
    ssr: false,
    loading: () => <SkeletonShowCountMonthlyBarChart />,
  },
);

export default DynamicSelectShowCountMonthlyBarChart;
