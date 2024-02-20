import { useEffect, useState } from "react";

const useGetParams = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    const updateParams = () => {
      const url = window.location.href;
      const paramsStr = url.split("?")[1];
      const paramsArray = paramsStr ? paramsStr.split("&") : [];
      let allParams = {};

      paramsArray.forEach((param) => {
        const [paramKey, paramValue] = param.split("=");
        allParams = { ...allParams, [paramKey]: paramValue };
      });

      setParams(allParams);
    };

    updateParams();

    window.addEventListener("popstate", updateParams);

    return () => window.removeEventListener("popstate", updateParams);
  }, []);

  return params;
};

export default useGetParams;
