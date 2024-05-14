import SelectedRange from "../atoms/SelectedRange";
import SlideThumb from "../atoms/SlideThumb";
import SliderBackGround from "../atoms/SliderBackGround";

export interface IDualRangeSliderProps {
  minThumb: number;
  maxThumb: number;
}

const DualRangeSlider = ({ maxThumb, minThumb }: IDualRangeSliderProps) => {
  return (
    <div className="relative z-10 h-2">
      <SliderBackGround />

      <SelectedRange lefttThumb={minThumb} rightThumb={maxThumb} />

      <SlideThumb
        thumbPosition="left"
        thumbValue={minThumb}
        className="-ml-1 left-0"
      />

      <SlideThumb
        thumbPosition="right"
        thumbValue={maxThumb}
        className="-ml-3 right-0"
      />
    </div>
  );
};

export default DualRangeSlider;
