import { SCREEN_SIZES } from "../Data/globalVariables";

export function getElementWidth(element) {
  return element?.getBoundingClientRect()?.width;
}

export function getScrollSliderValue(sliderEle) {
  const GAP = 30;
  const { desktop, laptop } = SCREEN_SIZES;
  const sliderItemEle = sliderEle.children[0];
  const sliderItemEleWidth = getElementWidth(sliderItemEle) + GAP;

  if (window.innerWidth >= desktop + 300) {
    return sliderItemEleWidth * 4;
  }

  if (window.innerWidth >= desktop + 100) {
    return sliderItemEleWidth * 3;
  }

  if (window.innerWidth >= laptop) {
    return sliderItemEleWidth * 2;
  }

  return sliderItemEleWidth;
}

export const blurInputs = (inputs) => inputs.forEach((input) => input.blur());

export const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });
