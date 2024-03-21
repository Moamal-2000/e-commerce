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
