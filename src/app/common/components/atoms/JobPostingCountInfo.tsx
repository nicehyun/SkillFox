export interface IJobPostingCountInfoProps {
  postingCount: number;
  className?: string;
}

const JobPostingCountInfo = ({
  postingCount,
  className,
}: IJobPostingCountInfoProps) => {
  return (
    <p className={`${className} text-small text-black3`}>
      채용 공고{" "}
      <strong className="font-bold text-black1">{postingCount}</strong>건을
      분석한 결과입니다.
    </p>
  );
};

export default JobPostingCountInfo;
