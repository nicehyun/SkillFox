export interface IAnalysisSectionTitleProps {
  title: string;
  className?: string;
}

const AnalysisSectionTitle = ({
  title,
  className,
}: IAnalysisSectionTitleProps) => {
  return (
    <h1
      className={`${className} text-medium font-bold sm:text-small md:text-normal`}
    >
      {title}
    </h1>
  );
};

export default AnalysisSectionTitle;
