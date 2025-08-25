import { REGEX_PATTERNS } from "../Data/constants";
import { billingInputsData } from "../Data/staticData";
import { updateClassOnCondition } from "./conditions";

export function checkAreInputsValid(inputs) {
  return [...inputs].every((input) => !input.classList.contains("invalid"));
}

export function checkEmailValidation(emailInput) {
  const isEmailValid = REGEX_PATTERNS.email.test(emailInput.value);
  updateClassOnCondition(emailInput, isEmailValid);
}

export function checkPasswordInputs(passwordInputs, password) {
  const currPassInp = passwordInputs[0];
  const newPassInp = passwordInputs[1];
  const confirmPassInput = passwordInputs[2];

  const isCurrPassCorrect = isCurrentPassValid(currPassInp, password);
  const isNewPassValid = isNewPasswordValid(newPassInp);
  const isCurrPassEqualsNew = confirmPassInput.value === newPassInp.value;

  updateClassOnCondition(currPassInp, isCurrPassCorrect);
  updateClassOnCondition(newPassInp, isNewPassValid);
  updateClassOnCondition(confirmPassInput, isCurrPassEqualsNew);
}

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

export function checkEmptyInputs({ exceptions, formRef }) {
  const formElement = formRef.current;
  const inputElements = formElement.querySelectorAll("input");

  inputElements.forEach((input) => {
    const isExceptionInput = exceptions.includes(input.name);
    const isValidInput = input.value.length > 2;

    updateClassOnCondition(input, isExceptionInput || isValidInput);
  });
}

export function isEmailValid(emailInput) {
  return REGEX_PATTERNS.email.test(emailInput.value);
}

export function simpleValidationCheck(inputs) {
  let isFormValid = false;

  inputs.forEach((input) => {
    let addOrRemoveClass;

    if (input.name === "username") {
      const isUserNameContainsTwoWords = input.value.split(" ").length === 2;
      addOrRemoveClass = !isUserNameContainsTwoWords ? "add" : "remove";
    } else {
      addOrRemoveClass = input.value === "" ? "add" : "remove";
    }

    input.classList[addOrRemoveClass]("invalid");
    isFormValid = true;
  });

  for (let i = 0; i < inputs.length; i++) {
    const isInputContainsInvalidClass = inputs[i].classList.contains("invalid");
    if (isInputContainsInvalidClass) isFormValid = false;
  }

  return isFormValid;
}

export function showInvalidInputAlert(event) {
  const form = new FormData(event.target);
  const inputs = event.target.querySelectorAll("input");
  let index = 0;

  for (const [, value] of form.entries()) {
    const regex = billingInputsData[index]?.regex;
    const isValid = regex ? regex.test(value) : true;

    inputs[index].style.cssText = ``;

    if (!isValid) {
      inputs[index].style.cssText = `
      border-color: var(--red);
      background-color: #ffdada;
      `;

      inputs[index].focus();
      break;
    }

    index++;
  }
}

export function isCheckoutFormValid(event) {
  const form = new FormData(event.target);
  let hasInvalidInput = false;
  let index = 0;

  for (const [, value] of form.entries()) {
    const regex = billingInputsData[index]?.regex;
    const isValid = regex ? regex.test(value) : true;
    if (!isValid) {
      hasInvalidInput = true;
      break;
    }
    index++;
  }

  return !hasInvalidInput;
}
