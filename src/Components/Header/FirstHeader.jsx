import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./FirstHeader.module.scss";
import LanguageSelector from "./LanguageSelector";
import { useEffect } from "react";
import { updateState } from "../../Features/globalSlice";

const FirstHeader = () => {
  const { isDarkModeActive } = useSelector((state) => state.global);
  const dispatch = useDispatch()

  function toggleDarkMode() {
    if (isDarkModeActive) {
      document.documentElement.classList.remove("dark-mode");
      dispatch(updateState({ key: "isDarkModeActive", value: false }));
    } else {
      document.documentElement.classList.add("dark-mode");
      dispatch(updateState({ key: "isDarkModeActive", value: true }));
    }
  }

  useEffect(() => {
    toggleDarkMode()
  }, [])

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.space}></div>

        <div className={s.headerContent}>
          <p className={s.discount}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to="/products">ShopNow</Link>
          </p>

          <LanguageSelector />
        </div>

        <button type="button" className={s.darkModeBtn} onClick={toggleDarkMode}>
          {isDarkModeActive && <SvgIcon name="sun" />}
          {!isDarkModeActive && <SvgIcon name="moon" />}
        </button>
      </div>
    </div>
  );
};

export default FirstHeader;
