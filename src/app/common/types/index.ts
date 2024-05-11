export type Color = "primary" | "secondary" | "gray";
export type Size = "small" | "medium" | "normal";

export interface IColorProps {
  color?: Color;
}

export type MonthlyChartData = {
  name: string;
  months_value: { [key: number]: number }[];
};

export interface IMonthlyBarChartProps {
  chartData: MonthlyChartData[];
  count: number;
}

export type EducationChartData = {
  education: string;
  data: MonthlyChartData[];
};

export type RegionChartData = {
  region: string;
  data: MonthlyChartData[];
};

export interface ResponseChartData<T> {
  data: T[];
  count: number;
}

export type Aria = {
  // 버튼이 어떤 작용을 하는지 시각적으로 판단하기 어려울 수 있으므로 목적이나 기능을 설명
  ariaLabel: string;
  // 특정 요소가 팝업 컨텍스트(예를 들어 메뉴, 리스트박스, 트리, 그리드, 다이얼로그 등)를 생성할 수 있는지 여부를 나타내는 데 사용
  ariaHasPopup: "dialog" | "menu" | "listbox" | "tree" | "grid" | boolean;
  // 한 요소가 다른 요소를 직접적으로 제어한다는 것을 나타내기 위해 사용
  ariaControls: string;
  // 요소가 열리고 닫히는 행위의 상태 (true/false)
  ariaExpanded: boolean;
};
