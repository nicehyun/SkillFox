import { ChartData, ChartDataset } from "chart.js";

export type Job = "FE" | "BE" | "DE" | "DA" | "ML";

export type Color = "primary" | "secondary" | "gray";
export type Size = "small" | "medium" | "normal";

export interface IColorProps {
  color?: Color;
}

export type MonthlyChartData = {
  name: string;
  months_value: { [key: string]: number }[];
};

export type RegionChartData = {
  region: string;
  chartData: MonthlyChartData[];
};

export type EducationChartData = {
  education: string;
  data: MonthlyChartData[];
};

// Define the type for the combined chart data
export interface BarChartData extends ChartData<"bar", number[], string> {
  datasets: Array<ChartDataset<"bar", number[]>>;
}

export interface RegionBarChartData extends BarChartData {
  region: string;
}

export interface EducationBarChartData extends BarChartData {
  education: string;
}

export type CommonBarChartData =
  | BarChartData
  | RegionBarChartData
  | EducationBarChartData;

export type ExcludeBarChartData = Exclude<CommonBarChartData, BarChartData>;

export interface ResponseChartData extends BarChartData {
  count: number;
}

export type ResponseSeveralChartData<T> = {
  count: number;
  chartData: T[];
};

export type CommonResponseBarChartData =
  | ResponseChartData
  | ResponseSeveralChartData<RegionBarChartData>
  | ResponseSeveralChartData<EducationBarChartData>;

type Role =
  | "alert"
  | "banner"
  | "button"
  | "checkbox"
  | "dialog"
  | "form"
  | "heading"
  | "img"
  | "link"
  | "list"
  | "listitem"
  | "navigation"
  | "option"
  | "progressbar"
  | "radio"
  | "search"
  | "slider"
  | "status"
  | "tab"
  | "tabpanel"
  | "textbox"
  | "toolbar";

export type Aria = {
  // 요소의 역할
  role?: Role;
  // 텍스트 레이블이 없는 요소를 명확하게 설명 (ex : 텍스트가 없는 아이콘 버튼)
  ariaLabel?: string;
  // 특정 요소가 팝업 컨텍스트(예를 들어 메뉴, 리스트박스, 트리, 그리드, 다이얼로그 등)를 생성할 수 있는지 여부를 나타내는 데 사용
  ariaHasPopup?: "dialog" | "menu" | "listbox" | "tree" | "grid" | boolean;
  // 한 요소가 다른 요소를 직접적으로 제어한다는 것을 나타내기 위해 사용 (제어 당하는 요소 id)
  ariaControls?: string;
  // 요소가 열리고 닫히는 행위의 상태 (true/false)
  ariaExpanded?: boolean;

  // 요소의 동적 업데이트를 어떻게 처리할지
  // off : 동적 콘텐츠의 업데이트가 스크린 리더가 읽지 않음
  // polite : 변경 사항을 사용자에게 알릴 필요가 있지만 현재 작업을 방해하지 않는 수준에서 알림
  // assertive : 설정은 스크린 리더가 현재 수행 중인 작업을 중단하고 즉시 변경 사항을 알림
  ariaLive?: "off" | "polite" | "assertive";
};
