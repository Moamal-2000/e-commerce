import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({
    windowWidth: innerWidth,
    windowHeight: innerHeight,
  });
  let timerId;

  useEffect(() => {
    function handleResize() {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        setSizes({
          windowWidth: innerWidth,
          windowHeight: innerHeight,
        });
      }, 300);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return sizes;
};

export default useGetResizeWindow;
