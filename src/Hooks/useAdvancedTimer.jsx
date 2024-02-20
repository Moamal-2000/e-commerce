import { useEffect, useRef, useState } from "react";

const useAdvancedTimer = (timerType, time) => {
  const [downTime, setDownTime] = useState(time);
  timerType = timerType.toLowerCase();
  const timePerType = useRef(timerType === "millisecond" ? 100 : 1000);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setDownTime((prevState) => {
        if (prevState <= 0) {
          clearInterval(intervalTimer);
          return 0;
        }

        return (prevState -= timePerType.current);
      });
    }, timePerType.current);
  }, []);

  return [downTime];
};
export default useAdvancedTimer;
