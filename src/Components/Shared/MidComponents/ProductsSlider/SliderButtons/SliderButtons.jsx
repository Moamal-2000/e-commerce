import SvgIcon from "../../../MiniComponents/SvgIcon";
import ProductSliderSkipLink from "./ProductSliderSkipLink/ProductSliderSkipLink";
import s from "./SliderButtons.module.scss";

const SliderButtons = ({
  handleNextBtn,
  handlePrevBtn,
  skipToId,
  skipLinkTitle,
  setIsSkipButtonClicked,
  buttonsMarginBottom,
  displaySkipLink = true,
}) => {
  return (
    <div
      className={s.sliderButtons}
      style={{ marginBottom: buttonsMarginBottom }}
    >
      {displaySkipLink && (
        <ProductSliderSkipLink
          href={skipToId}
          setIsSkipButtonClicked={setIsSkipButtonClicked}
        >
          {skipLinkTitle}
        </ProductSliderSkipLink>
      )}

      <button
        type="button"
        onClick={handlePrevBtn}
        onFocus={() => setIsSkipButtonClicked(false)}
        aria-label="Previous button for slider"
      >
        <SvgIcon name="arrowLeftShort" />
      </button>

      <button
        type="button"
        onClick={handleNextBtn}
        onFocus={() => setIsSkipButtonClicked(false)}
        aria-label="Next button for slider"
      >
        <SvgIcon name="arrowRightShort" />
      </button>
    </div>
  );
};
export default SliderButtons;
