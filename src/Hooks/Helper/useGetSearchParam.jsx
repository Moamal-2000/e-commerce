import { useSearchParams } from "react-router-dom";

const useGetSearchParam = (key) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get(key);
  return searchParam;
};
export default useGetSearchParam;
