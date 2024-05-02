interface ISkeletonUiProps {
  className: string;
}

const SkeletonUI = ({ className }: ISkeletonUiProps) => {
  return (
    <span
      className={`${className} inline-block h-4 animate-pulse rounded bg-gray1`}
    ></span>
  );
};

export default SkeletonUI;
