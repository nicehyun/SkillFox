export interface ISlideThumbProps {
  thumbPosition: "left" | "right";
  thumbValue: number;
  className?: string;
}

const SlideThumb = ({
  thumbValue,
  thumbPosition,
  className,
}: ISlideThumbProps) => {
  return (
    <div
      className={`${className} absolute top-0 z-30 -mt-[4px] h-4 w-4 rounded-full bg-primary`}
      style={{ [thumbPosition]: `${thumbValue}%` }}
      role="presentation"
      aria-hidden="true"
    ></div>
  );
};

export default SlideThumb;
