export interface ISelectedRangeProps {
  rightThumb: number;
  lefttThumb: number;
}

const SelectedRange = ({ lefttThumb, rightThumb }: ISelectedRangeProps) => {
  return (
    <div
      // 스크린 리더가 이 요소를 읽지 않음
      role="presentation"
      // 시각적인 정보를 제공하긴 하지만 스크린 리더 사용자에게는 필요하지 않은 정보
      aria-hidden="true"
      className="absolute inset-y-0 z-20 rounded-md bg-primary"
      style={{ right: `${rightThumb}%`, left: `${lefttThumb}%` }}
    ></div>
  );
};

export default SelectedRange;
