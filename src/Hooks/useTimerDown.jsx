import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

/* Props Example
  timeEvent="3 24 60 60" Days-Hours-Minutes-Seconds
  eventName="timerName" localStorage key name
*/

const useTimerDown = (downTime, { timeResetRequired, stopTimer, timerName }) => {
  if (!timerName) throw new Error("Timer name is invalid")
  if (timeResetRequired) localStorage.removeItem(timerName);

  const times = downTime.split(" ");
  const timeLocal = useLocalStorage(timerName);
  const timeOrTimeLocal = timeLocal
    ? timeLocal
    : getTimeInMilliseconds(...times);
  const [time, setTime] = useState(timeOrTimeLocal);
  const [timeData, setTimeData] = useState(getTimeObj(timeOrTimeLocal));
  const [isTimerDone, setIsTimerDone] = useState(false);
  let timerId;


  function useEffectTimeUpdater() {
    if (time <= -1000) {
      setIsTimerDone(true);
      return;
    }


    timerId = setTimeout(() => {
      setTime(time - 1000);
      setTimeData(getTimeObj(time));
      useLocalStorage(timerName, time);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }


  useEffect(() => {
    if (!stopTimer) useEffectTimeUpdater()
  }, [time]);

  return { timeData, isTimerDone };
};

export default useTimerDown;


export function getTimeObj(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000),
    totalMinutes = Math.floor(totalSeconds / 60),
    totalHours = Math.floor(totalMinutes / 60),
    days = Math.floor(totalHours / 24),
    seconds = Math.floor(totalSeconds % 60),
    minutes = Math.floor(totalMinutes % 60),
    hours = Math.floor(totalHours % 24),
    timeObj = {
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  return { ...timeObj };
}


export function getTimeInMilliseconds(days, hours, minutes, seconds) {
  const millisecondsPerSecond = 1000,
    millisecondsPerMinute = millisecondsPerSecond * 60,
    millisecondsPerHour = millisecondsPerMinute * 60,
    millisecondsPerDay = millisecondsPerHour * 24,
    totalMilliseconds =
      days * millisecondsPerDay +
      hours * millisecondsPerHour +
      minutes * millisecondsPerMinute +
      seconds * millisecondsPerSecond;
  return totalMilliseconds;
}
