import { useRef } from "react";
import { getScrollSliderValue } from "src/Functions/componentsFunctions";
import { buttonEffect } from "src/Functions/effects";

const useSlider = (sliderRef) => {
  const isSliderClicked = useRef(false);

  function handlePrevBtn(e) {
    buttonEffect(e);

    if (!isSliderClicked.current) isSliderClicked.current = true;
    else return;
    setTimeout(() => (isSliderClicked.current = false), 500);

    sliderRef.current.scrollLeft -= getScrollSliderValue(sliderRef.current);
  }

  function handleNextBtn(e) {
    buttonEffect(e);

    if (!isSliderClicked.current) isSliderClicked.current = true;
    else return;
    setTimeout(() => (isSliderClicked.current = false), 500);

    sliderRef.current.scrollLeft += getScrollSliderValue(sliderRef.current);
  }

  return { isSliderClicked, handleNextBtn, handlePrevBtn };
};
export default useSlider;
