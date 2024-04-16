import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./MobileNavIcon.module.scss";

const MobileNavIcon = () => {
  const dispatch = useDispatch();

  function openMobileNav() {
    dispatch(updateGlobalState({ key: "isMobileMenuActive", value: true }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: true }));
  }

  return (
    <button
      type="button"
      className={s.mobileNav}
      onClick={openMobileNav}
      aria-label="Nav menu"
    >
      <SvgIcon name="burgerMenu" />
    </button>
  );
};
export default MobileNavIcon;
