import { useRef } from "react";
import { getScrollSliderValue } from "src/Functions/componentsFunctions";
import { buttonEffect } from "src/Functions/effects";

const useSlider = (sliderRef) => {
  const isSliderClicked = useRef(false);

  function handlePrevBtn(e) {
    const isFirstSlide = sliderRef.current.scrollLeft <= 1;

    if (isFirstSlide) return;

    buttonEffect(e);

    if (!isSliderClicked.current) isSliderClicked.current = true;
    else return;
    setTimeout(() => (isSliderClicked.current = false), 500);

    sliderRef.current.scrollLeft -= getScrollSliderValue(sliderRef.current);
  }

  function handleNextBtn(e) {
    if (isLastSlide(sliderRef)) return;

    buttonEffect(e);

    if (!isSliderClicked.current) isSliderClicked.current = true;
    else return;
    setTimeout(() => (isSliderClicked.current = false), 500);

    sliderRef.current.scrollLeft += getScrollSliderValue(sliderRef.current);
  }

  return { isSliderClicked, handleNextBtn, handlePrevBtn };
};
export default useSlider;

export function isLastSlide(sliderRef) {
  const sliderEle = sliderRef.current;
  return (
    sliderEle.scrollWidth - sliderEle.clientWidth - sliderEle.scrollLeft < 2
  );
}
