import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SCROLL_REQUIRED } from "src/Data/globalVariables";
import { scrollToTopToolTipLeftPos } from "src/Functions/componentsFunctions";
import { scrollToTop } from "src/Functions/helper";
import useEventListener from "src/Hooks/Helper/useEventListener";
import SvgIcon from "../SvgIcon";
import ToolTip from "../ToolTip";
import s from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const scrollTopButtonRef = useRef();
  const { t, i18n } = useTranslation();
  const leftToolTipPos = scrollToTopToolTipLeftPos(i18n.language);

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
      aria-label="Scroll to top button"
    >
      <SvgIcon name="arrowUp2" />
      <ToolTip
        top="50%"
        left={leftToolTipPos}
        content={t("tooltips.scrollToTop")}
      />
    </button>
  );
};
export default ScrollToTop;
