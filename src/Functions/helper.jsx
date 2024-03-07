export function isDecimalNumber(number) {
  let singleNumber = Math.floor(number);
  return singleNumber !== number;
}

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

export function getFormattedTime(time) {
  return {
    days: padStart(time.days),
    hours: padStart(time.hours),
    minutes: padStart(time.minutes),
    seconds: padStart(time.seconds),
  };
}

export const padStart = (num) => `${num}`.padStart(2, "0");

export function checkIsObjExistInArr(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    let dataIsEqual = [];

    for (const key in arr[i]) {
      dataIsEqual.push(arr[i][key] === obj[key]);
    }

    const isObjExist = dataIsEqual.every((val) => val);
    if (isObjExist) return true;
  }

  return false;
}

export function uniqueArr(arr) {
  return [...new Set(arr)];
}

export function compareDataToObjValue(data, obj, keyName) {
  const filteredData = data.filter(
    (dataObj) => dataObj[keyName] === obj[keyName]
  );
  return filteredData.length > 0;
}

export function checkDateBeforeMonthToPresent(getDate) {
  const monthByMilliSeconds = 2_629_056_000;
  const currentDate = new Date().getTime();
  const requitedDate = new Date(getDate).getTime() + monthByMilliSeconds;
  return currentDate > requitedDate;
}
