export interface IIndividualBarChartTitleProps {
  title: string;
}
const IndividualBarChartTitle = ({ title }: IIndividualBarChartTitleProps) => {
  return (
    <div className="mb-2 flex items-center">
      <h2 className="mr-2 text-small font-bold text-black1">{title}</h2>
    </div>
  );
};

export default IndividualBarChartTitle;
