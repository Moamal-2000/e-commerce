import { SCREEN_SIZES } from "../Data/constants.jsx";

export function shouldDisplaySliderButtons(windowWidth, products) {
  const displayRules = [
    { maxWidth: Infinity, minProducts: 5 },
    { maxWidth: 1300, minProducts: 4 },
    { maxWidth: 992, minProducts: 3 },
    { maxWidth: 600, minProducts: 2 },
  ];

  const shouldDisplay = displayRules.some(
    ({ maxWidth, minProducts }) =>
      windowWidth <= maxWidth && products.length >= minProducts
  );

  return shouldDisplay;
}

export function hasDecimalPart(num) {
  const integerPart = Math.floor(num);
  return num !== integerPart;
}

export function compareDataByObjValue(data, obj, key) {
  const filteredData = data.filter((dataObj) => dataObj[key] === obj[key]);
  return filteredData.length > 0;
}

export function isMobileScreenWidth() {
  const mobileMediaQuery = `(max-width: ${SCREEN_SIZES.mobile}px)`;
  const isMobileDevice = window.matchMedia(mobileMediaQuery).matches;
  return isMobileDevice;
}

export function updateClassOnCondition(
  input,
  condition,
  className = "invalid"
) {
  if (!input?.classList) return;
  input.classList.toggle(className, !condition);
}
