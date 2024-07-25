import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./AccountMenuCloseBtn.module.scss";

const AccountMenuCloseBtn = () => {
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch(updateGlobalState({ key: "isProfileMenuActive", value: false }));
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
export default AccountMenuCloseBtn;
