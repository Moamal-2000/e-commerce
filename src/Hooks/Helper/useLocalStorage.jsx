const useLocalStorage = (keyName, data) => {
  const localData = localStorage.getItem(keyName);
  if (!data) return JSON.parse(localData);

  setItemToLocalStorage(keyName, data);
  return JSON.parse(localData);
};
export default useLocalStorage;

export function setItemToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
