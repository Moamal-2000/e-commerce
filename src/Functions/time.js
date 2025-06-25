import { formatTwoDigits } from "./formatting";

export function getTimeObj(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

export function getTimeInMilliseconds(days, hours, minutes, seconds) {
  const msPerSec = 1000;
  const msPerMin = msPerSec * 60;
  const msPerHour = msPerMin * 60;
  const msPerDay = msPerHour * 24;

  return (
    days * msPerDay +
    hours * msPerHour +
    minutes * msPerMin +
    seconds * msPerSec
  );
}

export function getFormattedTime(time) {
  return {
    days: formatTwoDigits(time.days),
    hours: formatTwoDigits(time.hours),
    minutes: formatTwoDigits(time.minutes),
    seconds: formatTwoDigits(time.seconds),
  };
}

export function checkDateBeforeMonthToPresent(getDate) {
  const monthByMilliSeconds = 2_629_056_000;
  const currentDate = new Date().getTime();
  const requitedDate = new Date(getDate).getTime() + monthByMilliSeconds;
  return currentDate > requitedDate;
}
