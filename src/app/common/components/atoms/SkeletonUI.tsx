export interface ISkeletonUiProps {
  className: string;
}

const SkeletonUI = ({ className }: ISkeletonUiProps) => {
  return (
    <span
      role="status"
      aria-live="polite"
      className={`${className} inline-block h-6 animate-pulse rounded bg-gray1`}
    ></span>
  );
};

export default SkeletonUI;
