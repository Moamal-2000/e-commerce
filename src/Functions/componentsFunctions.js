import { SCREEN_SIZES } from "../Data/globalVariables";
import { billingInputsData } from "../Data/staticData";

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

export function repoStarsForksToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "55px";
    case "ja":
      return "92px";
  }
  return "77px";
}

export function scrollToTopToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-55px";
    case "ja":
      return "-86px";
    case "ru":
      return "-84px";
    case "fr":
      return "-80px";
    case "hu":
      return "-104px";
    case "hi":
      return "-73px";
  }
  return "-60px";
}

export function favIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-40px";
    case "ja":
      return "-51px";
    case "ru":
      return "-52px";
    case "fr":
      return "-35px";
    case "hu":
      return "-43px";
    case "hi":
      return "-37px";
  }
  return "-41px";
}

export function detailsIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-37px";
    case "ja":
      return "-29px";
    case "ru":
      return "-47px";
    case "fr":
      return "-39px";
    case "hu":
      return "-47px";
    case "hi":
      return "-36px";
  }
  return "-39px";
}

export function trashcanIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-26px";
    case "ja":
      return "-29px";
    case "ru":
      return "-42px";
    case "fr":
      return "-36px";
    case "hu":
      return "-48px";
    case "hi":
      return "-29px";
  }
  return "-41px";
}

export function wishlistIconToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-54px";
    case "ja":
      return "-72px";
    case "ru":
      return "-51px";
    case "fr":
      return "-69px";
    case "hu":
      return "-57px";
    case "hi":
      return "-43px";
  }
  return "-39px";
}

export function sendToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-31px";
    case "ja":
      return "68px";
    case "ru":
      return "89px";
    case "fr":
      return "80px";
    case "hu":
      return "75px";
    case "hi":
      return "64px";
  }
  return "70px";
}

export function sendingToolTipLeftPos(lang) {
  switch (lang) {
    case "ar":
      return "-46px";
    case "ja":
      return "75px";
    case "ru":
      return "75px";
    case "fr":
      return "71px";
    case "hu":
      return "75px";
    case "hi":
      return "70px";
  }
  return "80px";
}

export function cartProductToolTipPos(lang) {
  switch (lang) {
    case "ar":
      return "56px";
    case "ja":
      return "-37px";
    case "fr":
      return "-55px";
    case "hu":
      return "-55px";
    case "hi":
      return "-37px";
  }
  return "-50px";
}

export function orderProductToolTipPos(lang) {
  switch (lang) {
    case "ru":
      return "-66px";
    case "ar":
      return "58px";
    case "fr":
      return "-57px";
    case "hu":
      return "-57px";
    case "ja":
      return "-37px";
    case "hi":
      return "-45px";
  }
  return "-52px";
}

export function whatDoIDoButtonToolTipPos(lang) {
  switch (lang) {
    case "ar":
      return "-74px";
    case "hu":
      return "108px";
    case "ja":
      return "144px";
    case "hi":
      return "136px";
  }
  return "126px";
}

export function hideWhatDoIDoButtonToolTipPos(lang) {
  switch (lang) {
    case "ar":
      return "-61px";
    case "fr":
      return "147px";
    case "hu":
      return "108px";
    case "ja":
      return "90px";
    case "hi":
      return "101px";
  }
  return "98px";
}

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

export const blurInputs = (inputs) => inputs.forEach((input) => input.blur());
