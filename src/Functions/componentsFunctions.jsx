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
      return "-70px";
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
      return "-33px";
    case "ja":
      return "-51px";
    case "ru":
      return "-51px";
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