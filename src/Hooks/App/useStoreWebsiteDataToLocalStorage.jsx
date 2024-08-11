import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setItemToLocalStorage } from "../Helper/useLocalStorage";

const useStoreWebsiteDataToLocalStorage = () => {
  const userData = useSelector((state) => state.user);
  const productsData = useSelector((state) => state.products);
  const localStorageData = useSelector((state) => state.localStorage);

  useEffect(() => {
    setItemToLocalStorage("productsSliceData", productsData);
    setItemToLocalStorage("userSliceData", userData);
    setItemToLocalStorage("storageSliceData", localStorageData);
  }, [userData, productsData, localStorageData]);
};
export default useStoreWebsiteDataToLocalStorage;
