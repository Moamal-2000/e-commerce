export function isCurrentPassValid(currentPassInp, userPassword) {
  const isCorrectPassword = currentPassInp.value === userPassword;
  const isEmptyField = currentPassInp.value.length === 0;
  return isCorrectPassword || isEmptyField;
}

export function isNewPasswordValid(newPasswordInput) {
  const isGraterThan8Chars = newPasswordInput.value.length >= 8;
  const isEmptyField = newPasswordInput.value.length === 0;
  return isGraterThan8Chars || isEmptyField;
}

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