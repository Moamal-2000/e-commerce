import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./MobileNavCloseBtn.module.scss";

const MobileNavCloseBtn = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch(updateGlobalState({ key: "isMobileMenuActive", value: false }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: false }));
  }

  return (
    <button
      type="button"
      className={s.closeBtn}
      onClick={closeMenu}
      aria-label="Close menu"
      aria-hidden={!isMobileMenuActive}
      tabIndex={isMobileMenuActive ? 0 : -1}
    >
      <SvgIcon name="xMark" />
    </button>
  );
};
export default MobileNavCloseBtn;
