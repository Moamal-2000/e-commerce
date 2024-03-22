import { useEffect, useRef, useState } from "react";
import {
  getFormattedTime,
  getTimeInMilliseconds,
  getTimeObj,
} from "../../Functions/helper";
import useLocalStorage from "../Helper/useLocalStorage";

/* Props Example
  timeEvent="3 24 60 60" Days-Hours-Minutes-Seconds
  eventName="timerName" localStorage key name
*/

const useTimerDown = (
  downTime,
  { timeResetRequired, stopTimer, timerName, formattedTime }
) => {
  if (!timerName) throw new Error("Timer name is invalid");
  if (timeResetRequired) localStorage.removeItem(timerName);

  const times = downTime.split(" ");
  const timeLocal = useLocalStorage(timerName);
  const timeOrTimeLocal = timeLocal
    ? timeLocal
    : getTimeInMilliseconds(...times);
  const [time, setTime] = useState(timeOrTimeLocal);
  const [timeData, setTimeData] = useState(getTimeObj(timeOrTimeLocal));
  const [isTimerDone, setIsTimerDone] = useState(false);
  const isMounted = useRef(false);
  let timerId;

  function useEffectTimeUpdater() {
    if (time <= -1000) {
      setIsTimerDone(true);
      return;
    }

    timerId = setTimeout(() => {
      setTime(time - 1000);

      if (formattedTime) {
        setTimeData(getFormattedTime(getTimeObj(time)));
        useLocalStorage(timerName, time);
        return;
      }

      setTimeData(getTimeObj(time));
      useLocalStorage(timerName, time);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      if (formattedTime) {
        setTimeData(getFormattedTime(getTimeObj(time)));
        useLocalStorage(timerName, time);
        useEffectTimeUpdater();
        return;
      }
    }

    if (stopTimer) return;

    useEffectTimeUpdater();
  }, [time]);

  return { timeData, isTimerDone };
};

export default useTimerDown;
