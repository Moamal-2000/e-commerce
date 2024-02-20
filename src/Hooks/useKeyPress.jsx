import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [pressInfo, setPressInfo] = useState({});
  const [key, setKey] = useState("");

  function handleKeyPress(e) {
    const { altKey, ctrlKey, shiftKey, target, timeStamp, keyCode } = e;
    const extractedInfo = { altKey, ctrlKey, shiftKey, target, timeStamp, keyCode };
    setPressInfo(extractedInfo);
    setKey(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return [key, pressInfo];
};

export default useKeyPress;
