import dynamic from "next/dynamic";

const DynamicIndividualBarChart = dynamic(
  () => import("@/app/common/components/organisms/IndividualBarChart"),
  {
    ssr: false,
  },
);

export default DynamicIndividualBarChart;
