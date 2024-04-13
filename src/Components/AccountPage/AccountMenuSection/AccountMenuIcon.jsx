import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./AccountMenuIcon.module.scss";

const AccountMenuIcon = () => {
  const dispatch = useDispatch();

  function openProfileMenu() {
    dispatch(updateGlobalState({ key: "isProfileMenuActive", value: true }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: true }));
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
