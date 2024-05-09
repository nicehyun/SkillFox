const NoneChartData = () => {
  return (
    <div
      // 분석 결과가 없는 것은 사용자에게 중요한 변경 사항일 수 있으므로 이 역할이 적절
      role="alert"
      aria-live="polite"
      // aria-live가 활성화된 요소에서 전체 요소의 내용이 변경될 때마다 전체적으로 내용을 다시 읽어야 함
      aria-atomic="true"
      className="flexCenter mx-auto mt-30  h-30 w-full rounded-lg border border-border p-4 text-center shadow sm:text-small md:text-small lg:max-w-[40%] xl:max-w-[30%]"
    >
      분석 결과가 존재하지 않습니다.
    </div>
  );
};

export default NoneChartData;
