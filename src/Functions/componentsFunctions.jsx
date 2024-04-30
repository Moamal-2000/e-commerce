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
