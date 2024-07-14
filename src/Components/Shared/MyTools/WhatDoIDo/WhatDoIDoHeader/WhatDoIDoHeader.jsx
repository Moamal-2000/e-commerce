import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import s from "./WhatDoIDoHeader.module.scss";

const WhatDoIDoHeader = () => {
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch(updateGlobalState({ key: "isWhatDoIDoMenuActive", value: false }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: false }));
  }

  return (
    <header className={s.header}>
      <button
        type="button"
        className={s.closeBtn}
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <SvgIcon name="xMark" />
      </button>
    </header>
  );
};
export default WhatDoIDoHeader;
