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
