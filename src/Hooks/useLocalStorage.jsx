const useLocalStorage = (keyName, data) => {
  const localData = localStorage.getItem(keyName);
  if (!data) return JSON.parse(localData);

  localStorage.setItem(keyName, JSON.stringify(data));
  return JSON.parse(localData);
};
export default useLocalStorage;
