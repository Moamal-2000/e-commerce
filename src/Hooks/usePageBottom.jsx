import { useEffect, useState } from "react";

const usePageBottom = (marginBottom = 1) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const htmlElement = document.documentElement;
    const documentHeight = Math.max(
      htmlElement.clientHeight,
      htmlElement.scrollHeight,
      htmlElement.offsetHeight
    );
    setIsScrolledToBottom(documentHeight - windowHeight <= scrollPosition + marginBottom);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolledToBottom;
};

export default usePageBottom;
