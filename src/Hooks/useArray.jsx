import { useState } from "react";

const useArray = (initArray) => {
  const [array, setArray] = useState(initArray);
  const copiedArray = array;

  function clear() {
    setArray([]);
  }

  function set(newArray) {
    setArray([...newArray]);
  }

  function push(item) {
    setArray((oldArr) => [...oldArr, item]);
  }

  function filter(callback) {
    setArray([...array.filter(callback)]);
  }

  function update(oldValue, newValue) {
    const requiredIndex = array.indexOf(
      copiedArray.find((item) => item === oldValue)
    );

    copiedArray[requiredIndex] = newValue;
    setArray([...copiedArray]);
  }

  function remove(item) {
    const filteredArray = copiedArray.filter((arrItem) => item !== arrItem);
    setArray([...filteredArray]);
  }

  return { array, push, update, set, remove, clear, filter };
};

export default useArray;
