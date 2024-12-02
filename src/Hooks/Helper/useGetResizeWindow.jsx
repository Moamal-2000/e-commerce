import { useEffect, useRef, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({
    windowWidth: innerWidth,
    windowHeight: innerHeight,
  });
  const debounceId = useRef();

  useEffect(() => {
    function handleResize() {
      clearTimeout(debounceId.current);

      debounceId.current = setTimeout(() => {
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
