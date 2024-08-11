import { useEffect } from "react";
import { useSelector } from "react-redux";

const useStoreWebsiteDataToLocalStorage = () => {
  const userData = useSelector((state) => state.user);
  const productsData = useSelector((state) => state.products);
  const globalData = useSelector((state) => state.global);

  useEffect(() => {
    setItemToLocalStorage("globalSliceData", globalData);
    setItemToLocalStorage("userSliceData", userData);
  }, [userData, productsData]);
};
export default useStoreWebsiteDataToLocalStorage;

export function setItemToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
