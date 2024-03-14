import { useRef } from "react";
import useEventListener from "../../../Hooks/useEventListener";
import s from "./ScrollToTop.module.scss";
import SvgIcon from "./SvgIcon";

const ScrollToTop = () => {
  const scrollTopButtonRef = useRef();
  const SCROLL_REQUIRED = 1000;

  function handleScrollTopVisibility() {
    const classListMethod = window.scrollY < SCROLL_REQUIRED ? "add" : "remove";
    scrollTopButtonRef.current.classList[classListMethod](s.hide);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }

  useEventListener(window, "scroll", handleScrollTopVisibility, []);

  return (
    <button
      ref={scrollTopButtonRef}
      type="button"
      className={`${s.scrollTopButton}`}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <SvgIcon name="arrowUp2" />
    </button>
  );
};
export default ScrollToTop;
