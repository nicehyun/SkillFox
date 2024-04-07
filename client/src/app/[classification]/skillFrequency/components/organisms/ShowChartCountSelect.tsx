import { CustomSelect } from "@/app/features/common/components/molecules/Select";
import {
  selcetShowCount,
  selectShowChartCountState,
} from "@/redux/features/skillFrequencySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const ShowChartCountSelect = () => {
  const dispatch = useAppDispatch();
  const showChartCount = useAppSelector(selectShowChartCountState);

  return (
    <CustomSelect
      id="skill-Frenquency-count"
      onChangeSelectValue={(value: number) =>
        dispatch(selcetShowCount({ count: +value }))
      }
      selectValue={showChartCount}
      defalutSelectContent="표시 중인 차트"
      options={[10, 20, 30, 40, 50]}
      className="mb-2 w-[130px]"
    />
  );
};

export default ShowChartCountSelect;
