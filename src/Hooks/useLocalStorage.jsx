import { useState } from "react";

const useLocalStorage = (keyName, initialData) => {
  const localData = localStorage.getItem(keyName);
  const [data, setData] = useState(
    !localData ? initialData : JSON.parse(localData)
  );

  function setDataFun(getData) {
    let stringifyData = JSON.stringify(getData)

    if (stringifyData === "true") stringifyData = true
    else if (stringifyData === "false") stringifyData = false

    localStorage.setItem(keyName, stringifyData);
    setData(stringifyData);
  }

  return [data, setDataFun];
};

export default useLocalStorage;
