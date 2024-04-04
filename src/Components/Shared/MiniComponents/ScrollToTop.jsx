import { useRef } from "react";
import { scrollToTop } from "src/Functions/helper";
import useEventListener from "src/Hooks/Helper/useEventListener";
import s from "./ScrollToTop.module.scss";
import SvgIcon from "./SvgIcon";
import ToolTip from "./ToolTip";

const ScrollToTop = () => {
  const scrollTopButtonRef = useRef();
  const SCROLL_REQUIRED = 1000;

  function handleScrollTopVisibility() {
    const classListMethod = window.scrollY < SCROLL_REQUIRED ? "add" : "remove";
    scrollTopButtonRef.current.classList[classListMethod](s.hide);
  }

  useEventListener(window, "scroll", handleScrollTopVisibility, []);

  return (
    <button
      ref={scrollTopButtonRef}
      type="button"
      className={`${`${s.scrollTopButton} ${s.hide}`}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <SvgIcon name="arrowUp2" />
      <ToolTip top="50%" left="-60px" content="Scroll to top" />
    </button>
  );
};
export default ScrollToTop;
