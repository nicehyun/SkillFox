import SkeletonUI from "../atoms/SkeletonUI";

const SkeletonShowCountMonthlyBarChart = () => {
  return (
    <>
      <div className="flex justify-end">
        <SkeletonUI className="mb-2 w-[130px]" />
      </div>
      <div className="space-y-3 rounded-[5px] border-[2px] border-border bg-white p-4">
        <div className="flex flex-col">
          <div className="flexCenter mb-4 h-10">
            <SkeletonUI className="w-1/3 sm:w-1/2 md:w-1/2" />
          </div>
          {[...Array(8)].map((_, index) => (
            <div
              key={`skeleton-bar-chart__${index}`}
              className="flex items-center"
            >
              <SkeletonUI className="mr-2 w-24" />

              <div
                className={`${index !== 0 ? "" : "border-t-[1px]"} flex h-18 flex-1 flex-col justify-center border-b-[1px] border-l-[1px] border-r-[0px] border-border`}
              >
                <div className="space-x-2">
                  {[...Array(5)].map((_, index) => (
                    <SkeletonUI
                      key={`skeleton-bar-chart-stack__${index}`}
                      className="w-1/12"
                    />
                  ))}
                </div>
                <SkeletonUI className="w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkeletonShowCountMonthlyBarChart;
