import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./MobileNavCloseBtn.module.scss";

const MobileNavCloseBtn = () => {
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
    >
      <SvgIcon name="xMark" />
    </button>
  );
};
export default MobileNavCloseBtn;
