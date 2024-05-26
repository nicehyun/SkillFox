export interface ILoadingBarProps {
  chartColor:
    | "bg-previosMonthChart1"
    | "bg-previosMonthChart2"
    | "bg-previosMonthChart5";

  animate: "animate-bar1" | "animate-bar2" | "animate-bar3";
}

const LoadingBar = ({ chartColor, animate }: ILoadingBarProps) => {
  return (
    <li
      className={`${chartColor} h-10 overflow-hidden rounded-[5px] bg-previosMonthChart1`}
    >
      <div className={`${animate} h-full bg-gray1`}></div>
    </li>
  );
};

export default LoadingBar;
