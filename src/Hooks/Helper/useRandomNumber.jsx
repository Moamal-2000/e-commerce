import { useState } from "react";

const useRandomNumber = (min = 0, max = 1000) => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber(min, max));

  function changeRandomNumber(newMin = min, newMax = max) {
    let newRandomNumber = generateRandomNumber(newMin, newMax);

    while (newRandomNumber === randomNumber) {
      newRandomNumber = generateRandomNumber(newMin, newMax);
    }

    setRandomNumber(newRandomNumber);
  }

  return [randomNumber, changeRandomNumber];
};

export default useRandomNumber;

/* Helper Function */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
