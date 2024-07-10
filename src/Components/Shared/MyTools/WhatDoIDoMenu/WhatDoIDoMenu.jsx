import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./WhatDoIDoMenu.module.scss";

const WhatDoIDoMenu = () => {
  const { isWhatDoIDoMenuActive } = useSelector((state) => state.global);
  const activeClass = isWhatDoIDoMenuActive ? s.active : "";
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch(updateGlobalState({ key: "isWhatDoIDoMenuActive", value: false }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: false }));
  }

  return (
    <div className={`${s.menu} ${activeClass}`} role="menu">
      <button
        type="button"
        className={s.closeBtn}
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <SvgIcon name="xMark" />
      </button>

      <p className={s.title}></p>

      <p className={s.description}>Still working on the menu.</p>
    </div>
  );
};
export default WhatDoIDoMenu;
