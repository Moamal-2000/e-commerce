import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "../../../Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./MobileNavIcon.module.scss";

const MobileNavIcon = () => {
  const dispatch = useDispatch();

  function openMobileNav() {
    const payload = {
      isMobileMenuActive: true,
      isOverlayActive: true,
    };
    dispatch(multiUpdateGlobalState(payload));
  }

  return (
    <button
      type="button"
      className={s.mobileNav}
      onClick={openMobileNav}
      aria-label="Toggle navigation menu"
    >
      <SvgIcon name="burgerMenu" />
    </button>
  );
};
export default MobileNavIcon;
