import LoadingBar from "../atoms/LoadingBar";

const LoadingBars = () => {
  return (
    <ul className="w-1/3 max-w-[400px] space-y-2">
      <LoadingBar animate="animate-bar1" chartColor="bg-previosMonthChart1" />
      <LoadingBar animate="animate-bar2" chartColor="bg-previosMonthChart2" />
      <LoadingBar animate="animate-bar3" chartColor="bg-previosMonthChart5" />
    </ul>
  );
};

export default LoadingBars;
