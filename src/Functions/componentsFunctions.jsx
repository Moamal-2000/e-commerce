export function simpleValidationCheck(inputs) {
  let isFormValid = false;

  inputs.forEach((input) => {
    const addOrRemoveClass = input.value === "" ? "add" : "remove";
    input.classList[addOrRemoveClass]("invalid");
    isFormValid = true;

    if (addOrRemoveClass === "add") isFormValid = false;
  });

  return isFormValid;
}
