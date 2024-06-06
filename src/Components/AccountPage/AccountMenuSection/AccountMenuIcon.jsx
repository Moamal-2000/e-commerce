import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "../../../Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./AccountMenuIcon.module.scss";

const AccountMenuIcon = () => {
  const dispatch = useDispatch();

  function openProfileMenu() {
    const payload = {
      isProfileMenuActive: true,
      isOverlayActive: true,
    };
    dispatch(multiUpdateGlobalState(payload));
  }

  return (
    <button
      type="button"
      className={s.profileSectionsButton}
      aria-label="List of Profile sections"
      title="Sections list"
      onClick={openProfileMenu}
    >
      <SvgIcon name="list" />
    </button>
  );
};
export default AccountMenuIcon;
