import { DEFAULT_THROTTLE_DELAY } from "../Data/constants";

export function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function isItemFound(data, getItem, key) {
  return data.find((item) => item[key] === getItem[key]);
}

export function getUniqueArrayByObjectKey({ arr, newArr, key }) {
  const updatedArr = [...arr];

  newArr.forEach((item) => {
    const isItemExist = !!isItemFound(arr, item, key);
    if (!isItemExist) updatedArr.push(item);
  });

  return updatedArr;
}

export function getTranslationPaths(languages) {
  return languages.map((lang) => `/locale/${lang}/translation.json`);
}

export function refreshPage() {
  window.location.reload();
}

export function getDataById(arr, id) {
  return arr?.find((item) => item?.id === id);
}

export function throttle(callback, delay = DEFAULT_THROTTLE_DELAY) {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();
    const shouldCall = now - lastCall >= delay;

    if (!shouldCall) return;

    lastCall = now;
    callback.apply(this, args);
  };
}
