const MainGuideContent = () => {
  return (
    <>
      <strong>산업별 기술 분석</strong>은 아래의 프로세스로 분석을 진행합니다.
      <br />
      <br />
      🍳<strong>기술 빈도 분석 결과</strong>를 기준으로 분석합니다.
      <br />
      <br />
      🍳채용 공고에 등록된 기술들 중{" "}
      <strong>기술 또는 키워드의 일치 수를 집계</strong>합니다.
      <br />
      <br />
      🍳집계한 결과를 <strong>해당 채용 공고에 등록된 산업과 매핑</strong>
      합니다.
      <br />
      <br />
      🍳각각의 채용 공고의 매핑을 결과를 토대로{" "}
      <strong>
        산업별 상위 기술 또는 키워드를 가장 많이 포함하는 10개의 산업을 추출
      </strong>
      합니다.
      <br />
      <br />
      분석 결과를 통해{" "}
      <strong>
        상위 50개의 기술 또는 키워드를 가장 많이 포함하는 산업을 파악
      </strong>
      할 수 있습니다.
      <br />
      <br />
      🎨<strong>상위 3개의 산업</strong>은 별도의 색상으로 표시하고 있습니다.
    </>
  );
};

export default MainGuideContent;
