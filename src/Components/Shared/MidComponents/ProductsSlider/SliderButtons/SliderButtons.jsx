import SvgIcon from "../../../MiniComponents/SvgIcon";
import s from "./SliderButtons.module.scss";

const SliderButtons = ({ handleNextBtn, handlePrevBtn }) => {
  return (
    <div className={s.sliderButtons}>
      <button
        type="button"
        onClick={handlePrevBtn}
        aria-label="Previous button for slider"
      >
        <SvgIcon name="arrowLeftShort" />
      </button>

      <button
        type="button"
        onClick={handleNextBtn}
        aria-label="Next button for slider"
      >
        <SvgIcon name="arrowRightShort" />
      </button>
    </div>
  );
};
export default SliderButtons;
