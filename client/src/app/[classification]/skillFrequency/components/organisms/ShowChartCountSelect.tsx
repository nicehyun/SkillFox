import { CustomSelect } from "@/app/common/components/molecules/Select";
import {
  selcetShowBarChartCount,
  selectShowBarChartCountState,
} from "@/redux/features/showChartCountSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const ShowChartCountSelect = () => {
  const dispatch = useAppDispatch();
  const showBarChartCount = useAppSelector(selectShowBarChartCountState);

  return (
    <CustomSelect
      id="skill-Frenquency-count"
      onChangeSelectValue={(value: number) =>
        dispatch(selcetShowBarChartCount({ count: +value }))
      }
      selectValue={showBarChartCount}
      defalutSelectContent="표시 중인 차트"
      options={[10, 20, 30, 40, 50]}
      className="mb-2 w-[130px]"
    />
  );
};

export default ShowChartCountSelect;
