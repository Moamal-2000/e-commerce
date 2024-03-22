import { useEffect, useState } from "react";

function useOnScreen(ref, options = { rootMargin: "0px", threshold: 1 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);

    return () => {
      if (!ref.current) return;
      observer.unobserve(ref.current);
    };
  }, []);

  return isVisible;
}

export default useOnScreen;
