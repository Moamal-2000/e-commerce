import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  let timerId;

  useEffect(() => {
    function handleResize() {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        setSizes({
          width: innerWidth,
          height: innerHeight,
        });
      }, 300);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return sizes;
};

export default useGetResizeWindow;
