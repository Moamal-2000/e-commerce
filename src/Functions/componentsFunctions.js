import { SCREEN_SIZES, SLIDER_GAP } from "../Data/constants";

const { desktop, laptop } = SCREEN_SIZES;

export function getElementWidth(element) {
  return element?.getBoundingClientRect()?.width;
}

export function getScrollSliderValue(sliderElement) {
  const sliderItem = sliderElement.children[0];
  const sliderItemWidth = getElementWidth(sliderItem) + SLIDER_GAP;

  if (window.innerWidth >= desktop + 300) {
    return sliderItemWidth * 4;
  }

  if (window.innerWidth >= desktop + 100) {
    return sliderItemWidth * 3;
  }

  if (window.innerWidth >= laptop) {
    return sliderItemWidth * 2;
  }

  return sliderItemWidth;
}

export const blurInputs = (inputs) => inputs.forEach((input) => input.blur());

export const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });
