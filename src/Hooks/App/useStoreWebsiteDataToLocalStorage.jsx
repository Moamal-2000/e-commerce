import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setItemToLocalStorage } from "../Helper/useLocalStorage";

const useStoreWebsiteDataToLocalStorage = () => {
  const userData = useSelector((state) => state.user);
  const productsData = useSelector((state) => state.products);
  const globalData = useSelector((state) => state.global);

  useEffect(() => {
    setItemToLocalStorage("productsSliceData", productsData);
    setItemToLocalStorage("userSliceData", userData);
  }, [userData, productsData]);
};
export default useStoreWebsiteDataToLocalStorage;
